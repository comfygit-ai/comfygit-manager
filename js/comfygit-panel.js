import { app as ut } from "../../scripts/app.js";
import { defineComponent as j, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as oe, createBlock as b, resolveDynamicComponent as yt, normalizeClass as X, withCtx as a, toDisplayString as i, createVNode as f, createTextVNode as h, computed as O, Fragment as W, renderList as J, normalizeStyle as Pe, ref as C, onMounted as ve, watch as Et, Teleport as We, withModifiers as he, Transition as Jt, withKeys as Ne, onUnmounted as Xt, withDirectives as Ze, vModelText as Qe, resolveComponent as Zt, createSlots as Mt, TransitionGroup as Qt, createApp as zt, h as Nt } from "vue";
const eo = { class: "panel-layout" }, to = {
  key: 0,
  class: "panel-layout-header"
}, oo = {
  key: 1,
  class: "panel-layout-search"
}, so = { class: "panel-layout-content" }, no = {
  key: 2,
  class: "panel-layout-footer"
}, ao = /* @__PURE__ */ j({
  __name: "PanelLayout",
  setup(t) {
    return (r, s) => (o(), n("div", eo, [
      r.$slots.header ? (o(), n("div", to, [
        oe(r.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      r.$slots.search ? (o(), n("div", oo, [
        oe(r.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", so, [
        oe(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (o(), n("div", no, [
        oe(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), K = (t, r) => {
  const s = t.__vccOpts || t;
  for (const [l, m] of r)
    s[l] = m;
  return s;
}, pe = /* @__PURE__ */ K(ao, [["__scopeId", "data-v-21565df9"]]), lo = {
  key: 0,
  class: "panel-title-prefix"
}, io = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ro = /* @__PURE__ */ j({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, s) => (o(), b(yt(`h${t.level}`), {
      class: X(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", lo, i(t.prefix), 1)) : (o(), n("span", io)),
        oe(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), co = /* @__PURE__ */ K(ro, [["__scopeId", "data-v-c3875efc"]]), uo = ["title"], mo = ["width", "height"], vo = /* @__PURE__ */ j({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (r, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (l) => r.$emit("click"))
    }, [
      (o(), n("svg", {
        width: t.size,
        height: t.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...s[1] || (s[1] = [
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
      ])], 8, mo))
    ], 8, uo));
  }
}), Lt = /* @__PURE__ */ K(vo, [["__scopeId", "data-v-6fc7f16d"]]), fo = { class: "header-left" }, go = {
  key: 0,
  class: "header-actions"
}, ho = /* @__PURE__ */ j({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (r, s) => (o(), n("div", {
      class: X(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", fo, [
        f(co, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            h(i(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), b(Lt, {
          key: 0,
          onClick: s[0] || (s[0] = (l) => r.$emit("info-click"))
        })) : c("", !0)
      ]),
      r.$slots.actions ? (o(), n("div", go, [
        oe(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ye = /* @__PURE__ */ K(ho, [["__scopeId", "data-v-55a62cd6"]]), po = {
  key: 0,
  class: "section-title-count"
}, yo = {
  key: 1,
  class: "section-title-icon"
}, wo = /* @__PURE__ */ j({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, s) => (o(), b(yt(`h${t.level}`), {
      class: X(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (l) => t.clickable && r.$emit("click"))
    }, {
      default: a(() => [
        oe(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", po, "(" + i(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", yo, i(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ke = /* @__PURE__ */ K(wo, [["__scopeId", "data-v-559361eb"]]), bo = { class: "status-grid" }, ko = { class: "status-grid__column" }, $o = { class: "status-grid__title" }, _o = { class: "status-grid__column status-grid__column--right" }, Co = { class: "status-grid__title" }, xo = /* @__PURE__ */ j({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, s) => (o(), n("div", bo, [
      e("div", ko, [
        e("h4", $o, i(t.leftTitle), 1),
        oe(r.$slots, "left", {}, void 0, !0)
      ]),
      e("div", _o, [
        e("h4", Co, i(t.rightTitle), 1),
        oe(r.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), So = /* @__PURE__ */ K(xo, [["__scopeId", "data-v-fe556068"]]), Io = {
  key: 0,
  class: "status-item__icon"
}, Eo = {
  key: 1,
  class: "status-item__count"
}, Mo = { class: "status-item__label" }, zo = /* @__PURE__ */ j({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, s = O(() => `status-item--${r.variant}`);
    return (l, m) => (o(), n("div", {
      class: X(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", Io, i(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", Eo, i(t.count), 1)) : c("", !0),
      e("span", Mo, i(t.label), 1)
    ], 2));
  }
}), Me = /* @__PURE__ */ K(zo, [["__scopeId", "data-v-6f929183"]]), No = { class: "issue-card__header" }, Lo = { class: "issue-card__icon" }, To = { class: "issue-card__title" }, Ro = {
  key: 0,
  class: "issue-card__content"
}, Bo = {
  key: 0,
  class: "issue-card__description"
}, Oo = {
  key: 1,
  class: "issue-card__items"
}, Do = {
  key: 2,
  class: "issue-card__actions"
}, Uo = /* @__PURE__ */ j({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, s = O(() => `issue-card--${r.severity}`);
    return (l, m) => (o(), n("div", {
      class: X(["issue-card", s.value])
    }, [
      e("div", No, [
        e("span", Lo, i(t.icon), 1),
        e("h4", To, i(t.title), 1)
      ]),
      l.$slots.default || t.description ? (o(), n("div", Ro, [
        t.description ? (o(), n("p", Bo, i(t.description), 1)) : c("", !0),
        oe(l.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", Oo, [
        (o(!0), n(W, null, J(t.items, (g, d) => (o(), n("div", {
          key: d,
          class: "issue-card__item"
        }, [
          m[0] || (m[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, i(g), 1)
        ]))), 128))
      ])) : c("", !0),
      l.$slots.actions ? (o(), n("div", Do, [
        oe(l.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ K(Uo, [["__scopeId", "data-v-df6aa348"]]), Vo = ["type", "disabled"], Ao = {
  key: 0,
  class: "spinner"
}, Po = /* @__PURE__ */ j({
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
    return (r, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: X(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (l) => r.$emit("click", l))
    }, [
      t.loading ? (o(), n("span", Ao)) : c("", !0),
      t.loading ? c("", !0) : oe(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Vo));
  }
}), P = /* @__PURE__ */ K(Po, [["__scopeId", "data-v-772abe47"]]), Wo = { class: "empty-state" }, Fo = {
  key: 0,
  class: "empty-icon"
}, Go = { class: "empty-message" }, Ho = /* @__PURE__ */ j({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, s) => (o(), n("div", Wo, [
      t.icon ? (o(), n("div", Fo, i(t.icon), 1)) : c("", !0),
      e("p", Go, i(t.message), 1),
      t.actionLabel ? (o(), b(P, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => r.$emit("action"))
      }, {
        default: a(() => [
          h(i(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ie = /* @__PURE__ */ K(Ho, [["__scopeId", "data-v-4466284f"]]), jo = { class: "branch-indicator" }, Ko = { class: "branch-indicator__info" }, qo = { class: "branch-indicator__label" }, Yo = { class: "branch-indicator__name" }, Jo = {
  key: 0,
  class: "branch-indicator__remote"
}, Xo = {
  key: 0,
  class: "branch-indicator__status"
}, Zo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Qo = {
  key: 1,
  class: "branch-indicator__behind"
}, es = {
  key: 1,
  class: "branch-indicator__actions"
}, ts = /* @__PURE__ */ j({
  __name: "BranchIndicator",
  props: {
    label: { default: "Current Branch" },
    branchName: {},
    remote: {},
    commitsAhead: {},
    commitsBehind: {},
    showStatus: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, s) => (o(), n("div", jo, [
      e("div", Ko, [
        e("span", qo, i(t.label), 1),
        e("span", Yo, i(t.branchName), 1),
        t.remote ? (o(), n("span", Jo, "@" + i(t.remote), 1)) : c("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", Xo, [
        t.commitsAhead ? (o(), n("span", Zo, " ↑ " + i(t.commitsAhead) + " ahead ", 1)) : c("", !0),
        t.commitsBehind ? (o(), n("span", Qo, " ↓ " + i(t.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      r.$slots.actions ? (o(), n("div", es, [
        oe(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), os = /* @__PURE__ */ K(ts, [["__scopeId", "data-v-cb8dd50e"]]), ss = /* @__PURE__ */ j({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, s) => (o(), n("span", {
      class: X(["detail-label"]),
      style: Pe({ minWidth: t.minWidth })
    }, [
      oe(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), gt = /* @__PURE__ */ K(ss, [["__scopeId", "data-v-75e9eeb8"]]), ns = /* @__PURE__ */ j({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, s) => (o(), n("span", {
      class: X(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      oe(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ K(ns, [["__scopeId", "data-v-2f186e4c"]]), as = { class: "detail-row" }, ls = /* @__PURE__ */ j({
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
    return (r, s) => (o(), n("div", as, [
      f(gt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          h(i(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), b(ht, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          h(i(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : oe(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ee = /* @__PURE__ */ K(ls, [["__scopeId", "data-v-ef15664a"]]), is = { class: "modal-header" }, rs = { class: "modal-body" }, cs = { class: "status-section" }, ds = {
  key: 0,
  class: "status-section"
}, us = {
  key: 0,
  class: "workflow-group"
}, ms = { class: "workflow-group-header" }, vs = { class: "workflow-group-title" }, fs = { class: "workflow-list" }, gs = { class: "workflow-name" }, hs = { class: "workflow-issue" }, ps = {
  key: 1,
  class: "workflow-group"
}, ys = { class: "workflow-group-header" }, ws = { class: "workflow-group-title" }, bs = { class: "workflow-list" }, ks = { class: "workflow-name" }, $s = { class: "workflow-issue" }, _s = {
  key: 2,
  class: "workflow-group"
}, Cs = { class: "workflow-group-header" }, xs = { class: "workflow-group-title" }, Ss = { class: "workflow-list" }, Is = { class: "workflow-name" }, Es = {
  key: 3,
  class: "workflow-group"
}, Ms = { class: "workflow-group-header" }, zs = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Ls = { class: "workflow-name" }, Ts = {
  key: 4,
  class: "workflow-group"
}, Rs = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Os = { class: "workflow-list" }, Ds = { class: "workflow-name" }, Us = {
  key: 5,
  class: "workflow-group"
}, Vs = { class: "workflow-group-title" }, As = { class: "expand-icon" }, Ps = {
  key: 0,
  class: "workflow-list"
}, Ws = { class: "workflow-name" }, Fs = {
  key: 1,
  class: "status-section"
}, Gs = {
  key: 0,
  class: "change-group"
}, Hs = { class: "change-group-header" }, js = { class: "change-group-title" }, Ks = { class: "change-list" }, qs = { class: "node-name" }, Ys = {
  key: 0,
  class: "dev-badge"
}, Js = {
  key: 1,
  class: "change-group"
}, Xs = { class: "change-group-header" }, Zs = { class: "change-group-title" }, Qs = { class: "change-list" }, en = { class: "node-name" }, tn = {
  key: 0,
  class: "dev-badge"
}, on = {
  key: 2,
  class: "change-group"
}, sn = { class: "change-list" }, nn = { class: "change-item" }, an = { class: "node-name" }, ln = {
  key: 3,
  class: "change-group"
}, rn = {
  key: 2,
  class: "status-section"
}, cn = {
  key: 0,
  class: "drift-item"
}, dn = { class: "drift-list" }, un = {
  key: 0,
  class: "drift-list-more"
}, mn = {
  key: 1,
  class: "drift-item"
}, vn = { class: "drift-list" }, fn = {
  key: 0,
  class: "drift-list-more"
}, gn = {
  key: 2,
  class: "drift-item"
}, hn = {
  key: 3,
  class: "drift-item"
}, pn = {
  key: 3,
  class: "status-section"
}, yn = { class: "info-box" }, wn = { class: "drift-list" }, bn = {
  key: 0,
  class: "drift-list-more"
}, kn = {
  key: 4,
  class: "status-section"
}, $n = { class: "warning-box" }, _n = {
  key: 5,
  class: "empty-state-inline"
}, Cn = { class: "modal-actions" }, xn = /* @__PURE__ */ j({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(t) {
    const r = t, s = C(!1);
    ve(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), Et(() => r.show, (_, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", _);
    }, { immediate: !0 });
    const l = O(() => {
      var _, k, E;
      return ((E = (k = (_ = r.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : E.filter(
        (p) => p.status === "broken" && p.sync_state === "synced"
      )) || [];
    }), m = O(() => {
      var _, k, E;
      return ((E = (k = (_ = r.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : E.filter(
        (p) => p.status === "broken" && p.sync_state !== "synced"
      )) || [];
    }), g = O(() => {
      var _, k, E;
      return ((E = (k = (_ = r.status) == null ? void 0 : _.workflows) == null ? void 0 : k.synced) == null ? void 0 : E.filter((p) => {
        var y, M, G;
        const $ = (G = (M = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : G.find((R) => R.name === p);
        return !$ || $.status !== "broken";
      })) || [];
    }), d = O(() => {
      var _, k, E, p, $;
      return (_ = r.status) != null && _.workflows ? (((k = r.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((E = r.status.workflows.modified) == null ? void 0 : E.length) ?? 0) > 0 || (((p = r.status.workflows.deleted) == null ? void 0 : p.length) ?? 0) > 0 || ((($ = r.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = O(() => {
      var k, E, p;
      const _ = (k = r.status) == null ? void 0 : k.git_changes;
      return _ ? (((E = _.nodes_added) == null ? void 0 : E.length) ?? 0) > 0 || (((p = _.nodes_removed) == null ? void 0 : p.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), v = O(() => {
      var _, k, E, p, $, y;
      return !d.value && !u.value && ((k = (_ = r.status) == null ? void 0 : _.comparison) == null ? void 0 : k.is_synced) && (((E = r.status) == null ? void 0 : E.missing_models_count) ?? 0) === 0 && (((y = ($ = (p = r.status) == null ? void 0 : p.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : y.length) ?? 0) === 0;
    }), w = O(() => {
      var k, E;
      const _ = (E = (k = r.status) == null ? void 0 : k.git_changes) == null ? void 0 : E.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function x(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function S(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, k) => {
      var E, p, $, y, M, G, R, V, L, D, z, T, B, Y, F, N, Z, se, Be, Oe, re, _e;
      return o(), b(We, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[4] || (k[4] = (Q) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[3] || (k[3] = he(() => {
            }, ["stop"]))
          }, [
            e("div", is, [
              k[5] || (k[5] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (Q) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", rs, [
              e("div", cs, [
                f(ke, { level: "4" }, {
                  default: a(() => [...k[6] || (k[6] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(ee, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              d.value ? (o(), n("div", ds, [
                f(ke, { level: "4" }, {
                  default: a(() => [...k[7] || (k[7] = [
                    h("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                l.value.length ? (o(), n("div", us, [
                  e("div", ms, [
                    k[8] || (k[8] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", vs, "BROKEN (COMMITTED) (" + i(l.value.length) + ")", 1)
                  ]),
                  e("div", fs, [
                    (o(!0), n(W, null, J(l.value, (Q) => (o(), n("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", gs, i(Q.name), 1),
                      e("span", hs, i(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                m.value.length ? (o(), n("div", ps, [
                  e("div", ys, [
                    k[9] || (k[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ws, "BROKEN (UNCOMMITTED) (" + i(m.value.length) + ")", 1)
                  ]),
                  e("div", bs, [
                    (o(!0), n(W, null, J(m.value, (Q) => (o(), n("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", ks, i(Q.name), 1),
                      e("span", $s, i(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (p = (E = t.status.workflows) == null ? void 0 : E.new) != null && p.length ? (o(), n("div", _s, [
                  e("div", Cs, [
                    k[10] || (k[10] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", xs, "NEW (" + i(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ss, [
                    (o(!0), n(W, null, J(t.status.workflows.new, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Is, i(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (y = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && y.length ? (o(), n("div", Es, [
                  e("div", Ms, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", zs, "MODIFIED (" + i(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), n(W, null, J(t.status.workflows.modified, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ls, i(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (G = (M = t.status.workflows) == null ? void 0 : M.deleted) != null && G.length ? (o(), n("div", Ts, [
                  e("div", Rs, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Bs, "DELETED (" + i(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Os, [
                    (o(!0), n(W, null, J(t.status.workflows.deleted, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ds, i(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (o(), n("div", Us, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[1] || (k[1] = (Q) => s.value = !s.value)
                  }, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Vs, "SYNCED (" + i(g.value.length) + ")", 1),
                    e("span", As, i(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Ps, [
                    (o(!0), n(W, null, J(g.value, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ws, i(Q), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              u.value ? (o(), n("div", Fs, [
                f(ke, { level: "4" }, {
                  default: a(() => [...k[14] || (k[14] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (V = (R = t.status.git_changes) == null ? void 0 : R.nodes_added) != null && V.length ? (o(), n("div", Gs, [
                  e("div", Hs, [
                    k[15] || (k[15] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", js, "NODES ADDED (" + i(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Ks, [
                    (o(!0), n(W, null, J(t.status.git_changes.nodes_added, (Q) => (o(), n("div", {
                      key: x(Q),
                      class: "change-item"
                    }, [
                      e("span", qs, i(x(Q)), 1),
                      S(Q) ? (o(), n("span", Ys, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = (L = t.status.git_changes) == null ? void 0 : L.nodes_removed) != null && D.length ? (o(), n("div", Js, [
                  e("div", Xs, [
                    k[16] || (k[16] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Zs, "NODES REMOVED (" + i(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Qs, [
                    (o(!0), n(W, null, J(t.status.git_changes.nodes_removed, (Q) => (o(), n("div", {
                      key: x(Q),
                      class: "change-item"
                    }, [
                      e("span", en, i(x(Q)), 1),
                      S(Q) ? (o(), n("span", tn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (z = t.status.git_changes) != null && z.workflow_changes ? (o(), n("div", on, [
                  k[17] || (k[17] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", sn, [
                    e("div", nn, [
                      e("span", an, i(w.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (T = t.status.git_changes) != null && T.has_other_changes ? (o(), n("div", ln, [...k[18] || (k[18] = [
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
              (B = t.status.comparison) != null && B.is_synced ? c("", !0) : (o(), n("div", rn, [
                f(ke, { level: "4" }, {
                  default: a(() => [...k[19] || (k[19] = [
                    h("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                k[20] || (k[20] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (F = (Y = t.status.comparison) == null ? void 0 : Y.missing_nodes) != null && F.length ? (o(), n("div", cn, [
                  f(ee, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", dn, [
                    (o(!0), n(W, null, J(t.status.comparison.missing_nodes.slice(0, 10), (Q) => (o(), n("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + i(Q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", un, " ... and " + i(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Z = (N = t.status.comparison) == null ? void 0 : N.extra_nodes) != null && Z.length ? (o(), n("div", mn, [
                  f(ee, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", vn, [
                    (o(!0), n(W, null, J(t.status.comparison.extra_nodes.slice(0, 10), (Q) => (o(), n("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + i(Q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", fn, " ... and " + i(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Be = (se = t.status.comparison) == null ? void 0 : se.version_mismatches) != null && Be.length ? (o(), n("div", gn, [
                  f(ee, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (Oe = t.status.comparison) != null && Oe.packages_in_sync ? c("", !0) : (o(), n("div", hn, [
                  f(ee, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (_e = (re = t.status.comparison) == null ? void 0 : re.disabled_nodes) != null && _e.length ? (o(), n("div", pn, [
                f(ke, { level: "4" }, {
                  default: a(() => [...k[21] || (k[21] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", yn, [
                  k[22] || (k[22] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, i(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", wn, [
                  (o(!0), n(W, null, J(t.status.comparison.disabled_nodes.slice(0, 10), (Q) => (o(), n("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + i(Q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", bn, " ... and " + i(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", kn, [
                f(ke, { level: "4" }, {
                  default: a(() => [...k[23] || (k[23] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", $n, [
                  k[24] || (k[24] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, i(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[25] || (k[25] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              v.value ? (o(), n("div", _n, [...k[26] || (k[26] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Cn, [
              f(P, {
                variant: "secondary",
                onClick: k[2] || (k[2] = (Q) => _.$emit("close"))
              }, {
                default: a(() => [...k[27] || (k[27] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), _t = /* @__PURE__ */ K(xn, [["__scopeId", "data-v-c2264f66"]]), Sn = { class: "health-section-header" }, In = { style: { "margin-top": "var(--cg-space-1)" } }, En = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Mn = /* @__PURE__ */ j({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: r }) {
    const s = t, l = C(!1), m = C(!1);
    ve(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", _t);
    });
    function g() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    function d() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    const u = O(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), v = O(() => {
      const y = s.status.git_changes;
      return y.nodes_added.length > 0 || y.nodes_removed.length > 0 || y.workflow_changes || y.has_other_changes;
    }), w = O(() => u.value || v.value), x = O(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), S = O(() => s.status.git_changes.has_other_changes), _ = O(() => {
      var y;
      return ((y = s.status.workflows.analyzed) == null ? void 0 : y.filter(
        (M) => M.status === "broken" && M.sync_state === "synced"
      )) || [];
    }), k = O(() => {
      var y;
      return ((y = s.status.workflows.analyzed) == null ? void 0 : y.filter(
        (M) => M.status === "broken" && M.sync_state !== "synced"
      )) || [];
    }), E = O(() => _.value.length > 0 || k.value.length > 0), p = O(() => E.value || s.status.missing_models_count > 0 || w.value || !s.status.comparison.is_synced), $ = O(() => {
      const y = [];
      return s.status.workflows.new.length > 0 && y.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && y.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && y.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && y.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && y.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${y.length > 0 ? y.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (y, M) => (o(), n(W, null, [
      f(pe, null, {
        header: a(() => [
          f(ye, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: M[0] || (M[0] = (G) => m.value = !0),
            onMouseleave: M[1] || (M[1] = (G) => m.value = !1)
          }, [
            e("div", Sn, [
              f(ke, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...M[11] || (M[11] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(Jt, { name: "fade" }, {
                default: a(() => [
                  m.value ? (o(), b(P, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: g
                  }, {
                    default: a(() => [...M[12] || (M[12] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            f(So, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), b(Me, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), b(Me, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), b(Me, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                f(Me, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), b(Me, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), b(Me, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), b(Me, {
                  key: 2,
                  icon: "●",
                  count: x.value,
                  label: x.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                S.value ? (o(), b(Me, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                v.value ? c("", !0) : (o(), b(Me, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", In, [
            f(os, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                f(P, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[2] || (M[2] = (G) => y.$emit("switch-branch"))
                }, {
                  default: a(() => [...M[13] || (M[13] = [
                    h(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), b(Ae, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              f(P, {
                variant: "primary",
                size: "sm",
                onClick: M[3] || (M[3] = (G) => y.$emit("create-branch"))
              }, {
                default: a(() => [...M[14] || (M[14] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          p.value ? (o(), n("div", En, [
            f(ke, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...M[15] || (M[15] = [
                h(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            _.value.length > 0 ? (o(), b(Ae, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${_.value.length} committed workflow${_.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: _.value.map((G) => `${G.name} — ${G.issue_summary}`)
            }, {
              actions: a(() => [
                f(P, {
                  variant: "primary",
                  size: "sm",
                  onClick: M[4] || (M[4] = (G) => y.$emit("view-workflows"))
                }, {
                  default: a(() => [...M[16] || (M[16] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            k.value.length > 0 ? (o(), b(Ae, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: k.value.map((G) => `${G.name} — ${G.issue_summary}`)
            }, {
              actions: a(() => [
                f(P, {
                  variant: "primary",
                  size: "sm",
                  onClick: M[5] || (M[5] = (G) => y.$emit("view-workflows"))
                }, {
                  default: a(() => [...M[17] || (M[17] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !E.value ? (o(), b(Ae, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                f(P, {
                  variant: "primary",
                  size: "sm",
                  onClick: M[6] || (M[6] = (G) => y.$emit("view-workflows"))
                }, {
                  default: a(() => [...M[18] || (M[18] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            w.value ? (o(), b(Ae, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: $.value
            }, {
              actions: a(() => [
                f(P, {
                  variant: "secondary",
                  size: "sm",
                  onClick: d
                }, {
                  default: a(() => [...M[19] || (M[19] = [
                    h(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                f(P, {
                  variant: "primary",
                  size: "sm",
                  onClick: M[7] || (M[7] = (G) => y.$emit("commit-changes"))
                }, {
                  default: a(() => [...M[20] || (M[20] = [
                    h(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), b(Ae, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                f(P, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[8] || (M[8] = (G) => y.$emit("view-debug"))
                }, {
                  default: a(() => [...M[21] || (M[21] = [
                    h(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                f(P, {
                  variant: "primary",
                  size: "sm",
                  onClick: M[9] || (M[9] = (G) => y.$emit("sync-environment"))
                }, {
                  default: a(() => [...M[22] || (M[22] = [
                    h(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !p.value && !v.value ? (o(), b(Ie, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      f(_t, {
        show: l.value,
        status: t.status,
        onClose: M[10] || (M[10] = (G) => l.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), zn = /* @__PURE__ */ K(Mn, [["__scopeId", "data-v-aabebf39"]]), Nn = ["type", "value", "placeholder", "disabled"], Ln = /* @__PURE__ */ j({
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
  setup(t, { expose: r, emit: s }) {
    const l = t, m = s, g = C(null);
    function d(u) {
      const v = u.target.value;
      m("update:modelValue", v);
    }
    return ve(() => {
      l.autoFocus && g.value && g.value.focus();
    }), r({
      focus: () => {
        var u;
        return (u = g.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = g.value) == null ? void 0 : u.blur();
      }
    }), (u, v) => (o(), n("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: X(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: d,
      onKeyup: [
        v[0] || (v[0] = Ne((w) => u.$emit("enter"), ["enter"])),
        v[1] || (v[1] = Ne((w) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: v[2] || (v[2] = (w) => u.$emit("focus")),
      onBlur: v[3] || (v[3] = (w) => u.$emit("blur"))
    }, null, 42, Nn));
  }
}), ot = /* @__PURE__ */ K(Ln, [["__scopeId", "data-v-0380d08f"]]), Tn = { class: "branch-create-form" }, Rn = { class: "form-actions" }, Bn = /* @__PURE__ */ j({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const s = r, l = C(""), m = O(() => {
      const u = l.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function g() {
      m.value && (s("create", l.value.trim()), l.value = "");
    }
    function d() {
      l.value = "", s("cancel");
    }
    return (u, v) => (o(), n("div", Tn, [
      f(ot, {
        modelValue: l.value,
        "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: d
      }, null, 8, ["modelValue"]),
      e("div", Rn, [
        f(P, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: g
        }, {
          default: a(() => [...v[1] || (v[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(P, {
          variant: "secondary",
          size: "sm",
          onClick: d
        }, {
          default: a(() => [...v[2] || (v[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), On = /* @__PURE__ */ K(Bn, [["__scopeId", "data-v-7c500394"]]), Dn = { class: "branch-list-item__indicator" }, Un = { class: "branch-list-item__name" }, Vn = {
  key: 0,
  class: "branch-list-item__actions"
}, An = {
  key: 0,
  class: "branch-list-item__current-label"
}, Pn = /* @__PURE__ */ j({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (r, s) => (o(), n("div", {
      class: X(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (l) => t.clickable && r.$emit("click"))
    }, [
      e("span", Dn, i(t.isCurrent ? "●" : "○"), 1),
      e("span", Un, i(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (o(), n("div", Vn, [
        oe(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", An, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Wn = /* @__PURE__ */ K(Pn, [["__scopeId", "data-v-c6581a24"]]), Fn = {
  key: 2,
  class: "branch-list"
}, Gn = /* @__PURE__ */ j({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: r }) {
    const s = r, l = C(!1);
    function m(d) {
      s("create", d), g();
    }
    function g() {
      l.value = !1;
    }
    return (d, u) => (o(), b(pe, null, {
      header: a(() => [
        f(ye, { title: "BRANCHES" }, {
          actions: a(() => [
            f(P, {
              variant: "ghost",
              size: "sm",
              onClick: u[0] || (u[0] = (v) => l.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...u[1] || (u[1] = [
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
      content: a(() => [
        l.value ? (o(), b(On, {
          key: 0,
          onCreate: m,
          onCancel: g
        })) : c("", !0),
        t.branches.length === 0 ? (o(), b(Ie, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Fn, [
          (o(!0), n(W, null, J(t.branches, (v) => (o(), b(Wn, {
            key: v.name,
            "branch-name": v.name,
            "is-current": v.is_current
          }, {
            actions: a(() => [
              v.is_current ? c("", !0) : (o(), b(P, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (w) => d.$emit("switch", v.name)
              }, {
                default: a(() => [...u[2] || (u[2] = [
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
}), Hn = /* @__PURE__ */ K(Gn, [["__scopeId", "data-v-763d6ec4"]]), jn = { class: "commit-list" }, Kn = /* @__PURE__ */ j({
  __name: "CommitList",
  setup(t) {
    return (r, s) => (o(), n("div", jn, [
      oe(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), qn = /* @__PURE__ */ K(Kn, [["__scopeId", "data-v-8c5ee761"]]), Yn = { class: "commit-hash" }, Jn = /* @__PURE__ */ j({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, s = O(() => r.hash.slice(0, r.length));
    return (l, m) => (o(), n("span", Yn, i(s.value), 1));
  }
}), Tt = /* @__PURE__ */ K(Jn, [["__scopeId", "data-v-7c333cc6"]]), Xn = { class: "commit-message" }, Zn = { class: "commit-date" }, Qn = /* @__PURE__ */ j({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const s = t, l = r;
    function m() {
      s.clickable && l("click");
    }
    return (g, d) => (o(), n("div", {
      class: X(["commit-item", { clickable: t.clickable }]),
      onClick: m
    }, [
      f(Tt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Xn, i(t.message), 1),
      e("span", Zn, i(t.relativeDate), 1),
      g.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: d[0] || (d[0] = he(() => {
        }, ["stop"]))
      }, [
        oe(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ea = /* @__PURE__ */ K(Qn, [["__scopeId", "data-v-dd7c621b"]]), ta = /* @__PURE__ */ j({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, s) => (o(), b(pe, null, {
      header: a(() => [
        f(ye, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), b(Ie, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), b(qn, { key: 1 }, {
          default: a(() => [
            (o(!0), n(W, null, J(t.commits, (l) => (o(), b(ea, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (m) => r.$emit("select", l)
            }, {
              actions: a(() => [
                f(P, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (m) => r.$emit("checkout", l),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...s[0] || (s[0] = [
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
}), oa = /* @__PURE__ */ K(ta, [["__scopeId", "data-v-981c3c64"]]), Ct = [
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
], sa = {
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
}, Rt = [
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
], na = [
  ...Rt,
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
], lt = [
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
], aa = [
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
], it = [
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
], ae = {
  // Environment Management
  getEnvironments: async () => (await le(300), [
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
    await le(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, s) => {
    await le(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (t) => {
    await le(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await le(400), Ct),
  getWorkflowDetails: async (t) => (await le(300), sa[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await le(800), {
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
  installWorkflowDeps: async (t, r, s) => {
    await le(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${s}`);
  },
  setModelImportance: async (t, r, s) => {
    await le(200), console.log(`[MOCK] Setting ${r} importance to ${s} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await le(350), Rt),
  getWorkspaceModels: async () => (await le(400), na),
  updateModelSource: async (t, r) => {
    await le(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await le(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await le(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await le(350);
    const t = lt.filter((s) => s.installed), r = lt.filter((s) => !s.installed);
    return {
      nodes: lt,
      total_count: lt.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await le(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await le(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await le(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await le(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await le(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await le(250), (t ? it.filter((l) => l.level === t) : it).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await le(300);
    const s = [...it, ...it.map((m) => ({
      ...m,
      name: "comfygit.workspace"
    }))];
    return (t ? s.filter((m) => m.level === t) : s).slice(0, r || 100);
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
  getStatus: async () => (await le(400), {
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
      synced: Ct.filter((t) => t.status === "synced").map((t) => t.name),
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
  getCommitHistory: async (t = 10) => (await le(300), aa.slice(0, t)),
  getBranches: async () => (await le(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  // Git Remotes Management
  getRemotes: async () => (await le(300), {
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
    await le(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await le(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, s) => {
    await le(400), console.log(`[MOCK] Updating remote ${t}: ${r}${s ? ` (push: ${s})` : ""}`);
  },
  fetchRemote: async (t) => {
    await le(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await le(300), {
    remote: t,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  })
};
function le(t) {
  return new Promise((r) => setTimeout(r, t));
}
function we() {
  const t = C(!1), r = C(null);
  async function s(q, H) {
    var fe;
    if (!((fe = window.app) != null && fe.api))
      throw new Error("ComfyUI API not available");
    const A = await window.app.api.fetchApi(q, H);
    if (!A.ok) {
      const ge = await A.json().catch(() => ({}));
      throw new Error(ge.error || ge.message || `Request failed: ${A.status}`);
    }
    return A.json();
  }
  async function l() {
    return ae.getStatus();
  }
  async function m(q, H = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: H })
    });
  }
  async function g(q = 10, H = 0) {
    {
      const A = await ae.getCommitHistory(q);
      return {
        commits: A,
        total: A.length,
        offset: H
      };
    }
  }
  async function d(q) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function u() {
    return ae.getBranches();
  }
  async function v(q) {
    return s(`/v2/comfygit/commit/${q}`);
  }
  async function w(q, H = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: H })
    });
  }
  async function x(q, H = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: H })
    });
  }
  async function S(q, H = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: H })
    });
  }
  async function _() {
    return ae.getEnvironments();
  }
  async function k(q) {
    return ae.switchEnvironment(q);
  }
  async function E() {
    return null;
  }
  async function p(q, H, A) {
    return await ae.createEnvironment(q, H, A), { status: "success" };
  }
  async function $(q) {
    return await ae.deleteEnvironment(q), { status: "success" };
  }
  async function y() {
    return ae.getWorkflows();
  }
  async function M(q) {
    return ae.getWorkflowDetails(q);
  }
  async function G(q) {
    return ae.resolveWorkflow(q);
  }
  async function R(q, H, A) {
    return await ae.installWorkflowDeps(q, H, A), { status: "success" };
  }
  async function V(q, H, A) {
    return ae.setModelImportance(q, H, A);
  }
  async function L() {
    return ae.getEnvironmentModels();
  }
  async function D() {
    return ae.getWorkspaceModels();
  }
  async function z(q, H) {
    return ae.updateModelSource(q, H);
  }
  async function T(q) {
    return ae.deleteModel(q);
  }
  async function B(q) {
    return await ae.downloadModel(q), { status: "success" };
  }
  async function Y() {
    return ae.getConfig();
  }
  async function F(q) {
    return ae.updateConfig(q);
  }
  async function N(q, H) {
    return ae.getEnvironmentLogs(q, H);
  }
  async function Z(q, H) {
    return ae.getWorkspaceLogs(q, H);
  }
  async function se() {
    return ae.getNodes();
  }
  async function Be(q) {
    return await ae.installNode(q), { status: "success" };
  }
  async function Oe(q) {
    return await ae.updateNode(q), { status: "success" };
  }
  async function re(q) {
    return await ae.uninstallNode(q), { status: "success" };
  }
  async function _e() {
    return ae.getRemotes();
  }
  async function Q(q, H) {
    return await ae.addRemote(q, H), { status: "success", remote_name: q };
  }
  async function Ee(q) {
    return await ae.removeRemote(q), { status: "success", remote_name: q };
  }
  async function qe(q, H, A) {
    return await ae.updateRemoteUrl(q, H, A), { status: "success", remote_name: q };
  }
  async function ie(q) {
    return await ae.fetchRemote(q), { status: "success", remote_name: q };
  }
  async function $e(q) {
    return ae.getRemoteSyncStatus(q);
  }
  async function Ye(q = "skip", H = !0) {
    return await new Promise((A) => setTimeout(A, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  return {
    isLoading: t,
    error: r,
    getStatus: l,
    commit: m,
    getHistory: g,
    exportEnv: d,
    // Git Operations
    getBranches: u,
    getCommitDetail: v,
    checkout: w,
    createBranch: x,
    switchBranch: S,
    // Environment Management
    getEnvironments: _,
    switchEnvironment: k,
    getSwitchProgress: E,
    createEnvironment: p,
    deleteEnvironment: $,
    // Workflow Management
    getWorkflows: y,
    getWorkflowDetails: M,
    resolveWorkflow: G,
    installWorkflowDeps: R,
    setModelImportance: V,
    // Model Management
    getEnvironmentModels: L,
    getWorkspaceModels: D,
    updateModelSource: z,
    deleteModel: T,
    downloadModel: B,
    // Settings
    getConfig: Y,
    updateConfig: F,
    // Debug/Logs
    getEnvironmentLogs: N,
    getWorkspaceLogs: Z,
    // Node Management
    getNodes: se,
    installNode: Be,
    updateNode: Oe,
    uninstallNode: re,
    // Git Remotes
    getRemotes: _e,
    addRemote: Q,
    removeRemote: Ee,
    updateRemoteUrl: qe,
    fetchRemote: ie,
    getRemoteSyncStatus: $e,
    // Environment Sync
    syncEnvironmentManually: Ye
  };
}
const la = { class: "base-modal-header" }, ia = {
  key: 0,
  class: "base-modal-title"
}, ra = { class: "base-modal-body" }, ca = {
  key: 0,
  class: "base-modal-loading"
}, da = {
  key: 1,
  class: "base-modal-error"
}, ua = {
  key: 0,
  class: "base-modal-footer"
}, ma = /* @__PURE__ */ j({
  __name: "BaseModal",
  props: {
    title: {},
    size: { default: "md" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    error: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const s = t, l = r;
    function m() {
      s.closeOnOverlayClick && l("close");
    }
    function g(d) {
      d.key === "Escape" && l("close");
    }
    return ve(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Xt(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (d, u) => (o(), b(We, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: m
      }, [
        e("div", {
          class: X(["base-modal-content", t.size]),
          onClick: u[1] || (u[1] = he(() => {
          }, ["stop"]))
        }, [
          e("div", la, [
            oe(d.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", ia, i(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (v) => d.$emit("close"))
            }, [...u[2] || (u[2] = [
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
          e("div", ra, [
            t.loading ? (o(), n("div", ca, "Loading...")) : t.error ? (o(), n("div", da, i(t.error), 1)) : oe(d.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          d.$slots.footer ? (o(), n("div", ua, [
            oe(d.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), ct = /* @__PURE__ */ K(ma, [["__scopeId", "data-v-700d367b"]]), va = ["type", "disabled"], fa = {
  key: 0,
  class: "spinner"
}, ga = /* @__PURE__ */ j({
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
    return (r, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: X(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (l) => r.$emit("click", l))
    }, [
      t.loading ? (o(), n("span", fa)) : c("", !0),
      oe(r.$slots, "default", {}, void 0, !0)
    ], 10, va));
  }
}), ue = /* @__PURE__ */ K(ga, [["__scopeId", "data-v-f3452606"]]), ha = {
  key: 0,
  class: "base-title-count"
}, pa = /* @__PURE__ */ j({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, s) => (o(), b(yt(`h${t.level}`), {
      class: X(["base-title", t.variant])
    }, {
      default: a(() => [
        oe(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", ha, "(" + i(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), et = /* @__PURE__ */ K(pa, [["__scopeId", "data-v-5a01561d"]]), ya = ["value", "disabled"], wa = {
  key: 0,
  value: "",
  disabled: ""
}, ba = ["value"], ka = {
  key: 0,
  class: "base-select-error"
}, $a = /* @__PURE__ */ j({
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
    function r(l) {
      return typeof l == "string" ? l : l.value;
    }
    function s(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, m) => (o(), n("div", {
      class: X(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: X(["base-select", { error: !!t.error }]),
        onChange: m[0] || (m[0] = (g) => l.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (o(), n("option", wa, i(t.placeholder), 1)) : c("", !0),
        (o(!0), n(W, null, J(t.options, (g) => (o(), n("option", {
          key: r(g),
          value: r(g)
        }, i(s(g)), 9, ba))), 128))
      ], 42, ya),
      t.error ? (o(), n("span", ka, i(t.error), 1)) : c("", !0)
    ], 2));
  }
}), _a = /* @__PURE__ */ K($a, [["__scopeId", "data-v-7436d745"]]), Ca = { class: "popover-header" }, xa = { class: "popover-title" }, Sa = { class: "popover-content" }, Ia = {
  key: 0,
  class: "popover-actions"
}, Ea = /* @__PURE__ */ j({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, s) => (o(), b(We, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Pe({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = he(() => {
          }, ["stop"]))
        }, [
          e("div", Ca, [
            e("h4", xa, i(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Sa, [
            oe(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (o(), n("div", Ia, [
            oe(r.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Le = /* @__PURE__ */ K(Ea, [["__scopeId", "data-v-42815ace"]]), Ma = { class: "detail-section" }, za = {
  key: 0,
  class: "empty-message"
}, Na = { class: "model-header" }, La = { class: "model-name" }, Ta = { class: "model-details" }, Ra = { class: "model-row" }, Ba = { class: "model-row" }, Oa = { class: "label" }, Da = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ua = { class: "node-list" }, Va = ["onClick"], Aa = {
  key: 1,
  class: "model-row"
}, Pa = { class: "value" }, Wa = {
  key: 0,
  class: "model-actions"
}, Fa = { class: "detail-section" }, Ga = {
  key: 0,
  class: "empty-message"
}, Ha = { class: "node-name" }, ja = {
  key: 0,
  class: "node-version"
}, Ka = /* @__PURE__ */ j({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: r }) {
    const s = t, l = r, { getWorkflowDetails: m, setModelImportance: g, installWorkflowDeps: d } = we(), u = C(null), v = C(!1), w = C(null), x = C(!1), S = C({}), _ = C({}), k = C(!1), E = C(/* @__PURE__ */ new Set()), p = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function $(T) {
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
    function y(T) {
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
    function M(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const B = T.hash || T.filename;
      return E.value.has(B) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function G(T) {
      return E.value.has(T);
    }
    function R(T) {
      E.value.has(T) ? E.value.delete(T) : E.value.add(T), E.value = new Set(E.value);
    }
    async function V() {
      v.value = !0, w.value = null;
      try {
        u.value = await m(s.workflowName);
      } catch (T) {
        w.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function L(T, B) {
      S.value[T] = B, x.value = !0;
    }
    async function D() {
      if (!x.value) {
        l("close");
        return;
      }
      v.value = !0, w.value = null;
      try {
        for (const [T, B] of Object.entries(S.value))
          await g(s.workflowName, T, B);
        l("close");
      } catch (T) {
        w.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    async function z(T) {
      _.value[T] = !0, w.value = null;
      try {
        await d(s.workflowName, !0, !1), await V();
      } catch (B) {
        w.value = B instanceof Error ? B.message : "Failed to install node";
      } finally {
        _.value[T] = !1;
      }
    }
    return ve(V), (T, B) => (o(), n(W, null, [
      f(ct, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: v.value,
        error: w.value || void 0,
        onClose: B[5] || (B[5] = (Y) => l("close"))
      }, {
        body: a(() => [
          u.value ? (o(), n(W, { key: 0 }, [
            e("section", Ma, [
              f(et, { variant: "section" }, {
                default: a(() => [
                  h("MODELS USED (" + i(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (o(), n("div", za, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(W, null, J(u.value.models, (Y) => (o(), n("div", {
                key: Y.hash,
                class: "model-card"
              }, [
                e("div", Na, [
                  B[7] || (B[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", La, i(Y.filename), 1)
                ]),
                e("div", Ta, [
                  e("div", Ra, [
                    B[8] || (B[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: X(["value", $(Y.status)])
                    }, i(y(Y.status)), 3)
                  ]),
                  e("div", Ba, [
                    e("span", Oa, [
                      B[9] || (B[9] = h(" Importance: ", -1)),
                      f(Lt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: B[0] || (B[0] = (F) => k.value = !0)
                      })
                    ]),
                    f(_a, {
                      "model-value": S.value[Y.hash] || Y.importance,
                      options: p,
                      "onUpdate:modelValue": (F) => L(Y.hash, F)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  Y.loaded_by && Y.loaded_by.length > 0 ? (o(), n("div", Da, [
                    B[10] || (B[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ua, [
                      (o(!0), n(W, null, J(M(Y), (F, N) => (o(), n("div", {
                        key: `${F.node_id}-${N}`,
                        class: "node-reference"
                      }, i(F.node_type) + " (Node #" + i(F.node_id) + ") ", 1))), 128)),
                      Y.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (F) => R(Y.hash || Y.filename)
                      }, i(G(Y.hash || Y.filename) ? "▼ Show less" : `▶ View all (${Y.loaded_by.length})`), 9, Va)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  Y.size_mb ? (o(), n("div", Aa, [
                    B[11] || (B[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Pa, i(Y.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                Y.status !== "available" ? (o(), n("div", Wa, [
                  Y.status === "downloadable" ? (o(), b(ue, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: B[1] || (B[1] = (F) => l("resolve"))
                  }, {
                    default: a(() => [...B[12] || (B[12] = [
                      h(" Download ", -1)
                    ])]),
                    _: 1
                  })) : Y.status === "path_mismatch" ? (o(), b(ue, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[2] || (B[2] = (F) => l("resolve"))
                  }, {
                    default: a(() => [...B[13] || (B[13] = [
                      h(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), b(ue, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[3] || (B[3] = (F) => l("resolve"))
                  }, {
                    default: a(() => [...B[14] || (B[14] = [
                      h(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Fa, [
              f(et, { variant: "section" }, {
                default: a(() => [
                  h("NODES USED (" + i(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (o(), n("div", Ga, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(W, null, J(u.value.nodes, (Y) => (o(), n("div", {
                key: Y.name,
                class: "node-item"
              }, [
                e("span", {
                  class: X(["node-status", Y.status === "installed" ? "installed" : "missing"])
                }, i(Y.status === "installed" ? "✓" : "✕"), 3),
                e("span", Ha, i(Y.name), 1),
                Y.version ? (o(), n("span", ja, "v" + i(Y.version), 1)) : c("", !0),
                Y.status === "missing" ? (o(), b(ue, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: _.value[Y.name],
                  onClick: (F) => z(Y.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...B[15] || (B[15] = [
                    h(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          f(ue, {
            variant: "secondary",
            onClick: B[4] || (B[4] = (Y) => l("close"))
          }, {
            default: a(() => [...B[16] || (B[16] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          x.value ? (o(), b(ue, {
            key: 0,
            variant: "primary",
            onClick: D
          }, {
            default: a(() => [...B[17] || (B[17] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(Le, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: B[6] || (B[6] = (Y) => k.value = !1)
      }, {
        content: a(() => [...B[18] || (B[18] = [
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
}), qa = /* @__PURE__ */ K(Ka, [["__scopeId", "data-v-1325d542"]]);
function Ya() {
  const t = C(null), r = C(null), s = C([]), l = C([]), m = C(!1), g = C(null);
  async function d(S, _) {
    var E;
    if (!((E = window.app) != null && E.api))
      throw new Error("ComfyUI API not available");
    const k = await window.app.api.fetchApi(S, _);
    if (!k.ok) {
      const p = await k.json().catch(() => ({})), $ = p.error || p.message || `Request failed: ${k.status}`;
      throw new Error($);
    }
    return k.json();
  }
  async function u(S) {
    m.value = !0, g.value = null;
    try {
      const _ = await d(
        `/v2/comfygit/workflow/${S}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      );
      return t.value = _, _;
    } catch (_) {
      const k = _ instanceof Error ? _.message : "Unknown error occurred";
      throw g.value = k, _;
    } finally {
      m.value = !1;
    }
  }
  async function v(S, _, k) {
    m.value = !0, g.value = null;
    try {
      const E = Object.fromEntries(_), p = Object.fromEntries(k), $ = await d(
        `/v2/comfygit/workflow/${S}/apply-resolution`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            node_choices: E,
            model_choices: p
          })
        }
      );
      return r.value = $, $;
    } catch (E) {
      const p = E instanceof Error ? E.message : "Unknown error occurred";
      throw g.value = p, E;
    } finally {
      m.value = !1;
    }
  }
  async function w(S, _ = 10) {
    m.value = !0, g.value = null;
    try {
      const k = await d(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: S, limit: _ })
        }
      );
      return s.value = k.results, k.results;
    } catch (k) {
      const E = k instanceof Error ? k.message : "Unknown error occurred";
      throw g.value = E, k;
    } finally {
      m.value = !1;
    }
  }
  async function x(S, _ = 10) {
    m.value = !0, g.value = null;
    try {
      const k = await d(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: S, limit: _ })
        }
      );
      return l.value = k.results, k.results;
    } catch (k) {
      const E = k instanceof Error ? k.message : "Unknown error occurred";
      throw g.value = E, k;
    } finally {
      m.value = !1;
    }
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: s,
    modelSearchResults: l,
    isLoading: m,
    error: g,
    // Methods
    analyzeWorkflow: u,
    applyResolution: v,
    searchNodes: w,
    searchModels: x
  };
}
const Ja = { class: "resolution-stepper" }, Xa = { class: "stepper-header" }, Za = ["onClick"], Qa = { class: "step-indicator" }, el = {
  key: 0,
  class: "step-icon"
}, tl = {
  key: 1,
  class: "step-number"
}, ol = { class: "step-label" }, sl = {
  key: 0,
  class: "step-connector"
}, nl = { class: "stepper-content" }, al = /* @__PURE__ */ j({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const s = t, l = r;
    function m(d) {
      return s.completedSteps.includes(d);
    }
    function g(d) {
      const u = s.steps.findIndex((w) => w.id === s.currentStep);
      return s.steps.findIndex((w) => w.id === d) > u;
    }
    return (d, u) => (o(), n("div", Ja, [
      e("div", Xa, [
        (o(!0), n(W, null, J(t.steps, (v, w) => (o(), n("div", {
          key: v.id,
          class: X(["step", {
            active: t.currentStep === v.id,
            completed: m(v.id),
            disabled: g(v.id)
          }]),
          onClick: (x) => !g(v.id) && l("step-change", v.id)
        }, [
          e("div", Qa, [
            m(v.id) ? (o(), n("span", el, "✓")) : (o(), n("span", tl, i(w + 1), 1))
          ]),
          e("div", ol, i(v.label), 1),
          w < t.steps.length - 1 ? (o(), n("div", sl)) : c("", !0)
        ], 10, Za))), 128))
      ]),
      e("div", nl, [
        oe(d.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ll = /* @__PURE__ */ K(al, [["__scopeId", "data-v-0508e462"]]), il = /* @__PURE__ */ j({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, s = O(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), l = O(() => `confidence-${s.value}`), m = O(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (g, d) => (o(), n("span", {
      class: X(["confidence-badge", l.value, t.size])
    }, i(m.value), 3));
  }
}), He = /* @__PURE__ */ K(il, [["__scopeId", "data-v-17ec4b80"]]), rl = { class: "item-header" }, cl = { class: "item-title" }, dl = { class: "node-type" }, ul = {
  key: 1,
  class: "match-type"
}, ml = { class: "item-actions" }, vl = { class: "item-body" }, fl = {
  key: 0,
  class: "single-option"
}, gl = { class: "package-info" }, hl = { class: "package-id" }, pl = {
  key: 0,
  class: "package-description"
}, yl = { class: "package-meta" }, wl = {
  key: 0,
  class: "repository"
}, bl = ["href"], kl = {
  key: 1,
  class: "source-badge"
}, $l = {
  key: 2,
  class: "installed-badge"
}, _l = { class: "item-controls" }, Cl = {
  key: 1,
  class: "multiple-options"
}, xl = { class: "options-header" }, Sl = { class: "options-count" }, Il = { class: "options-list" }, El = ["name", "value", "checked", "onChange"], Ml = { class: "option-content" }, zl = { class: "option-header" }, Nl = { class: "option-package-id" }, Ll = {
  key: 0,
  class: "option-description"
}, Tl = { class: "option-meta" }, Rl = {
  key: 0,
  class: "repository"
}, Bl = {
  key: 1,
  class: "installed-badge"
}, Ol = { class: "item-controls" }, Dl = {
  key: 2,
  class: "unresolved"
}, Ul = { class: "item-controls" }, Vl = /* @__PURE__ */ j({
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
    selectedOptionIndex: {}
  },
  emits: ["mark-optional", "unmark-optional", "skip", "refine-search", "manual-entry", "search", "option-selected"],
  setup(t, { emit: r }) {
    const s = r;
    return (l, m) => (o(), n("div", {
      class: X(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", rl, [
        e("div", cl, [
          e("span", dl, i(t.nodeType), 1),
          t.confidence !== void 0 ? (o(), b(He, {
            key: 0,
            confidence: t.confidence,
            size: "sm"
          }, null, 8, ["confidence"])) : c("", !0),
          t.matchType ? (o(), n("span", ul, i(t.matchType), 1)) : c("", !0)
        ]),
        e("div", ml, [
          t.isOptional ? (o(), n("button", {
            key: 1,
            class: "action-btn unmark-optional",
            onClick: m[1] || (m[1] = (g) => s("unmark-optional")),
            title: "Unmark as optional"
          }, " Required ")) : (o(), n("button", {
            key: 0,
            class: "action-btn mark-optional",
            onClick: m[0] || (m[0] = (g) => s("mark-optional")),
            title: "Mark as optional"
          }, " Optional ")),
          e("button", {
            class: "action-btn skip",
            onClick: m[2] || (m[2] = (g) => s("skip")),
            title: "Skip this node"
          }, " Skip ")
        ])
      ]),
      e("div", vl, [
        !t.hasMultipleOptions && t.packageId ? (o(), n("div", fl, [
          e("div", gl, [
            e("div", hl, i(t.packageId), 1),
            t.description ? (o(), n("div", pl, i(t.description), 1)) : c("", !0),
            e("div", yl, [
              t.repository ? (o(), n("span", wl, [
                e("a", {
                  href: t.repository,
                  target: "_blank",
                  rel: "noopener"
                }, i(t.repository), 9, bl)
              ])) : c("", !0),
              t.source ? (o(), n("span", kl, i(t.source), 1)) : c("", !0),
              t.isInstalled ? (o(), n("span", $l, "Already Installed")) : c("", !0)
            ])
          ]),
          e("div", _l, [
            e("button", {
              class: "action-btn refine",
              onClick: m[3] || (m[3] = (g) => s("refine-search"))
            }, " Refine Search "),
            e("button", {
              class: "action-btn manual",
              onClick: m[4] || (m[4] = (g) => s("manual-entry"))
            }, " Enter Manually ")
          ])
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", Cl, [
          e("div", xl, [
            e("span", Sl, i(t.options.length) + " possible matches found", 1)
          ]),
          e("div", Il, [
            (o(!0), n(W, null, J(t.options, (g, d) => (o(), n("label", {
              key: g.package_id,
              class: X(["option-card", { selected: t.selectedOptionIndex === d }])
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (u) => s("option-selected", d)
              }, null, 40, El),
              e("div", Ml, [
                e("div", zl, [
                  e("span", Nl, i(g.package_id), 1),
                  f(He, {
                    confidence: g.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                g.description ? (o(), n("div", Ll, i(g.description), 1)) : c("", !0),
                e("div", Tl, [
                  g.repository ? (o(), n("span", Rl, i(g.repository), 1)) : c("", !0),
                  g.is_installed ? (o(), n("span", Bl, "Installed")) : c("", !0)
                ])
              ])
            ], 2))), 128))
          ]),
          e("div", Ol, [
            e("button", {
              class: "action-btn refine",
              onClick: m[5] || (m[5] = (g) => s("refine-search"))
            }, " Refine Search "),
            e("button", {
              class: "action-btn manual",
              onClick: m[6] || (m[6] = (g) => s("manual-entry"))
            }, " Enter Manually ")
          ])
        ])) : (o(), n("div", Dl, [
          m[9] || (m[9] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matches found for this node type")
          ], -1)),
          e("div", Ul, [
            e("button", {
              class: "action-btn search",
              onClick: m[7] || (m[7] = (g) => s("search"))
            }, " Search Registry "),
            e("button", {
              class: "action-btn manual primary",
              onClick: m[8] || (m[8] = (g) => s("manual-entry"))
            }, " Enter Manually ")
          ])
        ]))
      ])
    ], 2));
  }
}), Al = /* @__PURE__ */ K(Vl, [["__scopeId", "data-v-342a9e94"]]), Pl = { class: "node-resolution-step" }, Wl = { class: "step-header" }, Fl = { class: "step-progress" }, Gl = { class: "progress-text" }, Hl = { class: "progress-bar" }, jl = {
  key: 0,
  class: "step-body"
}, Kl = { class: "step-footer" }, ql = ["disabled"], Yl = ["disabled"], Jl = ["disabled"], Xl = {
  key: 1,
  class: "search-panel"
}, Zl = { class: "search-panel-header" }, Ql = { class: "search-panel-body" }, ei = {
  key: 0,
  class: "search-results"
}, ti = ["onClick"], oi = { class: "result-header" }, si = { class: "result-package-id" }, ni = {
  key: 0,
  class: "result-description"
}, ai = { class: "result-meta" }, li = {
  key: 0,
  class: "repository"
}, ii = {
  key: 1,
  class: "installed-badge"
}, ri = {
  key: 1,
  class: "no-results"
}, ci = {
  key: 2,
  class: "searching"
}, di = {
  key: 2,
  class: "manual-entry-panel"
}, ui = { class: "manual-entry-header" }, mi = { class: "manual-entry-body" }, vi = { class: "form-label" }, fi = { class: "manual-entry-actions" }, gi = ["disabled"], hi = /* @__PURE__ */ j({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    currentIndex: {},
    showSearch: { type: Boolean },
    showManualEntry: { type: Boolean },
    searchResults: {},
    isSearching: { type: Boolean }
  },
  emits: ["previous", "next", "complete", "mark-optional", "unmark-optional", "skip", "refine-search", "manual-entry", "search", "option-selected", "close-search", "close-manual-entry", "search-input", "search-result-selected", "manual-submit"],
  setup(t, { emit: r }) {
    const s = t, l = r, m = C(""), g = C(""), d = O(() => s.nodes[s.currentIndex]), u = O(() => s.nodes.length), v = O(() => s.currentIndex === u.value - 1), w = O(
      () => u.value > 0 ? (s.currentIndex + 1) / u.value * 100 : 0
    ), x = O(() => s.currentIndex > 0), S = O(() => d.value ? !!(d.value.package_id || d.value.is_optional || d.value.selected_option_index !== void 0) : !1);
    function _() {
      l("search-input", m.value);
    }
    function k() {
      g.value.trim() && (l("manual-submit", g.value.trim()), g.value = "");
    }
    return (E, p) => (o(), n("div", Pl, [
      e("div", Wl, [
        p[15] || (p[15] = e("h3", { class: "step-title" }, "Resolve Missing Nodes", -1)),
        e("div", Fl, [
          e("span", Gl, i(t.currentIndex + 1) + " of " + i(u.value), 1),
          e("div", Hl, [
            e("div", {
              class: "progress-fill",
              style: Pe({ width: `${w.value}%` })
            }, null, 4)
          ])
        ])
      ]),
      d.value ? (o(), n("div", jl, [
        f(Al, {
          "node-type": d.value.node_type,
          "package-id": d.value.package_id,
          confidence: d.value.confidence,
          "match-type": d.value.match_type,
          description: d.value.description,
          repository: d.value.repository,
          source: d.value.source,
          "is-installed": d.value.is_installed,
          "is-optional": d.value.is_optional,
          "is-selected": !0,
          "has-multiple-options": d.value.has_multiple_options,
          options: d.value.options,
          "selected-option-index": d.value.selected_option_index,
          onMarkOptional: p[0] || (p[0] = ($) => l("mark-optional", d.value.node_type)),
          onUnmarkOptional: p[1] || (p[1] = ($) => l("unmark-optional", d.value.node_type)),
          onSkip: p[2] || (p[2] = ($) => l("skip", d.value.node_type)),
          onRefineSearch: p[3] || (p[3] = ($) => l("refine-search", d.value.node_type)),
          onManualEntry: p[4] || (p[4] = ($) => l("manual-entry", d.value.node_type)),
          onSearch: p[5] || (p[5] = ($) => l("search", d.value.node_type)),
          onOptionSelected: p[6] || (p[6] = ($) => l("option-selected", d.value.node_type, $))
        }, null, 8, ["node-type", "package-id", "confidence", "match-type", "description", "repository", "source", "is-installed", "is-optional", "has-multiple-options", "options", "selected-option-index"])
      ])) : c("", !0),
      e("div", Kl, [
        e("button", {
          class: "nav-btn prev",
          disabled: !x.value,
          onClick: p[7] || (p[7] = ($) => l("previous"))
        }, " ← Previous ", 8, ql),
        v.value ? (o(), n("button", {
          key: 1,
          class: "nav-btn next primary",
          disabled: !S.value,
          onClick: p[9] || (p[9] = ($) => l("complete"))
        }, " Continue to Models → ", 8, Jl)) : (o(), n("button", {
          key: 0,
          class: "nav-btn next primary",
          disabled: !S.value,
          onClick: p[8] || (p[8] = ($) => l("next"))
        }, " Continue → ", 8, Yl))
      ]),
      t.showSearch ? (o(), n("div", Xl, [
        e("div", Zl, [
          p[16] || (p[16] = e("h4", null, "Search for Node Package", -1)),
          e("button", {
            class: "close-btn",
            onClick: p[10] || (p[10] = ($) => l("close-search"))
          }, "✕")
        ]),
        e("div", Ql, [
          Ze(e("input", {
            "onUpdate:modelValue": p[11] || (p[11] = ($) => m.value = $),
            type: "text",
            class: "search-input",
            placeholder: "Search by node type, package name, or description...",
            onInput: _
          }, null, 544), [
            [Qe, m.value]
          ]),
          t.searchResults.length > 0 ? (o(), n("div", ei, [
            (o(!0), n(W, null, J(t.searchResults, ($) => (o(), n("div", {
              key: $.package_id,
              class: "search-result-item",
              onClick: (y) => l("search-result-selected", $)
            }, [
              e("div", oi, [
                e("span", si, i($.package_id), 1),
                f(He, {
                  confidence: $.match_confidence,
                  size: "sm"
                }, null, 8, ["confidence"])
              ]),
              $.description ? (o(), n("div", ni, i($.description), 1)) : c("", !0),
              e("div", ai, [
                $.repository ? (o(), n("span", li, i($.repository), 1)) : c("", !0),
                $.is_installed ? (o(), n("span", ii, "Installed")) : c("", !0)
              ])
            ], 8, ti))), 128))
          ])) : m.value && !t.isSearching ? (o(), n("div", ri, [
            p[17] || (p[17] = e("span", { class: "warning-icon" }, "⚠", -1)),
            e("span", null, 'No packages found matching "' + i(m.value) + '"', 1)
          ])) : c("", !0),
          t.isSearching ? (o(), n("div", ci, [...p[18] || (p[18] = [
            e("span", null, "Searching...", -1)
          ])])) : c("", !0)
        ])
      ])) : c("", !0),
      t.showManualEntry ? (o(), n("div", di, [
        e("div", ui, [
          p[19] || (p[19] = e("h4", null, "Enter Package Manually", -1)),
          e("button", {
            class: "close-btn",
            onClick: p[12] || (p[12] = ($) => l("close-manual-entry"))
          }, "✕")
        ]),
        e("div", mi, [
          e("label", vi, [
            p[20] || (p[20] = h(" Package ID or GitHub URL ", -1)),
            Ze(e("input", {
              "onUpdate:modelValue": p[13] || (p[13] = ($) => g.value = $),
              type: "text",
              class: "manual-input",
              placeholder: "e.g., comfyui-my-package or https://github.com/user/repo"
            }, null, 512), [
              [Qe, g.value]
            ])
          ]),
          e("div", fi, [
            e("button", {
              class: "btn secondary",
              onClick: p[14] || (p[14] = ($) => l("close-manual-entry"))
            }, " Cancel "),
            e("button", {
              class: "btn primary",
              disabled: !g.value.trim(),
              onClick: k
            }, " Add Package ", 8, gi)
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), pi = /* @__PURE__ */ K(hi, [["__scopeId", "data-v-9b75d670"]]), yi = { class: "model-header" }, wi = { class: "model-filename" }, bi = { class: "node-type" }, ki = {
  key: 0,
  class: "model-meta"
}, $i = {
  key: 0,
  class: "category"
}, _i = {
  key: 1,
  class: "size"
}, Ci = {
  key: 3,
  class: "optional-badge"
}, xi = {
  key: 1,
  class: "model-options"
}, Si = ["onClick"], Ii = ["name", "checked", "onChange"], Ei = { class: "option-details" }, Mi = { class: "option-filename" }, zi = { class: "option-meta" }, Ni = { class: "size" }, Li = { class: "category" }, Ti = { class: "option-path" }, Ri = { class: "optional-checkbox" }, Bi = ["checked"], Oi = {
  key: 2,
  class: "model-actions"
}, Di = /* @__PURE__ */ j({
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
    selectedOptionIndex: {}
  },
  emits: ["mark-optional", "unmark-optional", "skip", "refine-search", "download-url", "search", "option-selected"],
  setup(t, { emit: r }) {
    const s = t, l = r, m = C({
      "has-options": s.hasMultipleOptions,
      "is-optional": s.isOptional
    });
    function g(w) {
      l("option-selected", w);
    }
    function d() {
      s.isOptional ? l("unmark-optional") : l("mark-optional");
    }
    function u() {
      l("mark-optional");
    }
    function v(w) {
      if (!w) return "Unknown size";
      const x = w / (1024 * 1024 * 1024);
      return x >= 1 ? `${x.toFixed(2)} GB` : `${(w / (1024 * 1024)).toFixed(2)} MB`;
    }
    return (w, x) => (o(), n("div", {
      class: X(["model-item", m.value])
    }, [
      e("div", yi, [
        e("div", wi, i(t.filename), 1),
        e("div", bi, [
          x[3] || (x[3] = h("Used by: ", -1)),
          e("code", null, i(t.nodeType), 1)
        ])
      ]),
      t.category || t.size || t.confidence !== void 0 || t.isOptional ? (o(), n("div", ki, [
        t.category ? (o(), n("span", $i, i(t.category), 1)) : c("", !0),
        t.size ? (o(), n("span", _i, i(v(t.size)), 1)) : c("", !0),
        t.confidence !== void 0 ? (o(), b(He, {
          key: 2,
          confidence: t.confidence,
          "match-type": t.matchType,
          size: "sm"
        }, null, 8, ["confidence", "match-type"])) : c("", !0),
        t.isOptional ? (o(), n("span", Ci, "OPTIONAL")) : c("", !0)
      ])) : c("", !0),
      t.hasMultipleOptions && t.options ? (o(), n("div", xi, [
        x[5] || (x[5] = e("h4", { class: "options-title" }, "Choose model:", -1)),
        (o(!0), n(W, null, J(t.options, (S, _) => (o(), n("div", {
          key: S.model.hash,
          class: X(["option-card", { selected: t.selectedOptionIndex === _ }]),
          onClick: (k) => g(_)
        }, [
          e("input", {
            type: "radio",
            name: `model-${t.filename}`,
            checked: t.selectedOptionIndex === _,
            onChange: (k) => g(_)
          }, null, 40, Ii),
          e("div", Ei, [
            e("div", Mi, i(S.model.filename), 1),
            e("div", zi, [
              f(He, {
                confidence: S.match_confidence,
                "match-type": S.match_type,
                size: "sm"
              }, null, 8, ["confidence", "match-type"]),
              e("span", Ni, i(v(S.model.size)), 1),
              e("span", Li, i(S.model.category), 1)
            ]),
            e("div", Ti, i(S.model.relative_path), 1)
          ])
        ], 10, Si))), 128)),
        e("label", Ri, [
          e("input", {
            type: "checkbox",
            checked: t.isOptional,
            onChange: d
          }, null, 40, Bi),
          x[4] || (x[4] = h(" Mark as optional (workflow works without it) ", -1))
        ])
      ])) : (o(), n("div", Oi, [
        e("button", {
          class: "action-btn primary",
          onClick: x[0] || (x[0] = (S) => l("search"))
        }, " 🔍 Search Workspace "),
        e("button", {
          class: "action-btn secondary",
          onClick: x[1] || (x[1] = (S) => l("download-url"))
        }, " 📥 Enter Download URL "),
        e("button", {
          class: "action-btn secondary",
          onClick: u
        }, " ○ Mark as Optional "),
        e("button", {
          class: "action-btn ghost",
          onClick: x[2] || (x[2] = (S) => l("skip"))
        }, " Skip for Now ")
      ]))
    ], 2));
  }
}), Ui = /* @__PURE__ */ K(Di, [["__scopeId", "data-v-28d15172"]]), Vi = { class: "model-resolution-step" }, Ai = { class: "step-header" }, Pi = { class: "step-progress" }, Wi = { class: "progress-text" }, Fi = { class: "progress-bar" }, Gi = {
  key: 0,
  class: "step-body"
}, Hi = { class: "step-footer" }, ji = ["disabled"], Ki = ["disabled"], qi = ["disabled"], Yi = {
  key: 1,
  class: "search-panel"
}, Ji = { class: "search-panel-header" }, Xi = { class: "search-panel-body" }, Zi = {
  key: 0,
  class: "search-results"
}, Qi = ["onClick"], er = { class: "result-header" }, tr = { class: "result-filename" }, or = { class: "result-meta" }, sr = { class: "category" }, nr = { class: "size" }, ar = { class: "result-path" }, lr = {
  key: 1,
  class: "no-results"
}, ir = {
  key: 2,
  class: "searching"
}, rr = {
  key: 2,
  class: "manual-download-panel"
}, cr = { class: "manual-download-header" }, dr = { class: "manual-download-body" }, ur = { class: "form-label" }, mr = { class: "form-label" }, vr = { class: "manual-download-actions" }, fr = ["disabled"], gr = /* @__PURE__ */ j({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    currentIndex: {},
    showSearch: { type: Boolean },
    showManualDownload: { type: Boolean },
    searchResults: {},
    isSearching: { type: Boolean }
  },
  emits: ["previous", "next", "complete", "mark-optional", "unmark-optional", "skip", "refine-search", "download-url", "search", "option-selected", "close-search", "close-manual-download", "search-input", "search-result-selected", "manual-download-submit"],
  setup(t, { emit: r }) {
    const s = t, l = r, m = C(""), g = C(""), d = C(""), u = O(() => s.models[s.currentIndex]), v = O(() => s.models.length), w = O(() => s.currentIndex === v.value - 1), x = O(
      () => v.value > 0 ? (s.currentIndex + 1) / v.value * 100 : 0
    ), S = O(() => s.currentIndex > 0), _ = O(() => u.value ? !!(u.value.hash || u.value.is_optional || u.value.selected_option_index !== void 0) : !1);
    function k() {
      l("search-input", m.value);
    }
    function E() {
      g.value.trim() && d.value.trim() && (l("manual-download-submit", g.value.trim(), d.value.trim()), g.value = "", d.value = "");
    }
    function p($) {
      if (!$) return "Unknown size";
      const y = $ / (1024 * 1024 * 1024);
      return y >= 1 ? `${y.toFixed(2)} GB` : `${($ / (1024 * 1024)).toFixed(2)} MB`;
    }
    return ($, y) => (o(), n("div", Vi, [
      e("div", Ai, [
        y[16] || (y[16] = e("h3", { class: "step-title" }, "Resolve Missing Models", -1)),
        e("div", Pi, [
          e("span", Wi, i(t.currentIndex + 1) + " of " + i(v.value), 1),
          e("div", Fi, [
            e("div", {
              class: "progress-fill",
              style: Pe({ width: `${x.value}%` })
            }, null, 4)
          ])
        ])
      ]),
      u.value ? (o(), n("div", Gi, [
        f(Ui, {
          filename: u.value.reference.widget_value,
          "node-type": u.value.reference.node_type,
          category: u.value.category,
          size: u.value.size,
          hash: u.value.hash,
          confidence: u.value.confidence,
          "match-type": u.value.match_type,
          "is-optional": u.value.is_optional,
          "has-multiple-options": !!(u.value.options && u.value.options.length > 0),
          options: u.value.options,
          "selected-option-index": u.value.selected_option_index,
          onMarkOptional: y[0] || (y[0] = (M) => l("mark-optional", u.value.reference.widget_value)),
          onUnmarkOptional: y[1] || (y[1] = (M) => l("unmark-optional", u.value.reference.widget_value)),
          onSkip: y[2] || (y[2] = (M) => l("skip", u.value.reference.widget_value)),
          onRefineSearch: y[3] || (y[3] = (M) => l("refine-search", u.value.reference.widget_value)),
          onDownloadUrl: y[4] || (y[4] = (M) => l("download-url", u.value.reference.widget_value)),
          onSearch: y[5] || (y[5] = (M) => l("search", u.value.reference.widget_value)),
          onOptionSelected: y[6] || (y[6] = (M) => l("option-selected", u.value.reference.widget_value, M))
        }, null, 8, ["filename", "node-type", "category", "size", "hash", "confidence", "match-type", "is-optional", "has-multiple-options", "options", "selected-option-index"])
      ])) : c("", !0),
      e("div", Hi, [
        e("button", {
          class: "nav-btn prev",
          disabled: !S.value,
          onClick: y[7] || (y[7] = (M) => l("previous"))
        }, " ← Previous ", 8, ji),
        w.value ? (o(), n("button", {
          key: 1,
          class: "nav-btn next primary",
          disabled: !_.value,
          onClick: y[9] || (y[9] = (M) => l("complete"))
        }, " Continue to Review → ", 8, qi)) : (o(), n("button", {
          key: 0,
          class: "nav-btn next primary",
          disabled: !_.value,
          onClick: y[8] || (y[8] = (M) => l("next"))
        }, " Continue → ", 8, Ki))
      ]),
      t.showSearch ? (o(), n("div", Yi, [
        e("div", Ji, [
          y[17] || (y[17] = e("h4", null, "Search for Model", -1)),
          e("button", {
            class: "close-btn",
            onClick: y[10] || (y[10] = (M) => l("close-search"))
          }, "✕")
        ]),
        e("div", Xi, [
          Ze(e("input", {
            "onUpdate:modelValue": y[11] || (y[11] = (M) => m.value = M),
            type: "text",
            class: "search-input",
            placeholder: "Search by filename, category, or hash...",
            onInput: k
          }, null, 544), [
            [Qe, m.value]
          ]),
          t.searchResults && t.searchResults.length > 0 ? (o(), n("div", Zi, [
            (o(!0), n(W, null, J(t.searchResults, (M) => (o(), n("div", {
              key: M.hash,
              class: "search-result-item",
              onClick: (G) => l("search-result-selected", M)
            }, [
              e("div", er, [
                e("span", tr, i(M.filename), 1),
                f(He, {
                  confidence: M.match_confidence,
                  size: "sm"
                }, null, 8, ["confidence"])
              ]),
              e("div", or, [
                e("span", sr, i(M.category), 1),
                y[18] || (y[18] = e("span", { class: "separator" }, "•", -1)),
                e("span", nr, i(p(M.size)), 1)
              ]),
              e("div", ar, i(M.relative_path), 1)
            ], 8, Qi))), 128))
          ])) : m.value && !t.isSearching ? (o(), n("div", lr, [
            y[19] || (y[19] = e("span", { class: "warning-icon" }, "⚠", -1)),
            e("span", null, 'No models found matching "' + i(m.value) + '"', 1)
          ])) : c("", !0),
          t.isSearching ? (o(), n("div", ir, [...y[20] || (y[20] = [
            e("span", null, "Searching...", -1)
          ])])) : c("", !0)
        ])
      ])) : c("", !0),
      t.showManualDownload ? (o(), n("div", rr, [
        e("div", cr, [
          y[21] || (y[21] = e("h4", null, "Enter Download URL", -1)),
          e("button", {
            class: "close-btn",
            onClick: y[12] || (y[12] = (M) => l("close-manual-download"))
          }, "✕")
        ]),
        e("div", dr, [
          e("label", ur, [
            y[22] || (y[22] = h(" Download URL ", -1)),
            Ze(e("input", {
              "onUpdate:modelValue": y[13] || (y[13] = (M) => g.value = M),
              type: "url",
              class: "url-input",
              placeholder: "https://example.com/models/flux_dev.safetensors"
            }, null, 512), [
              [Qe, g.value]
            ])
          ]),
          e("label", mr, [
            y[23] || (y[23] = h(" Target Path (relative to models directory) ", -1)),
            Ze(e("input", {
              "onUpdate:modelValue": y[14] || (y[14] = (M) => d.value = M),
              type: "text",
              class: "path-input",
              placeholder: "checkpoints/flux_dev.safetensors"
            }, null, 512), [
              [Qe, d.value]
            ])
          ]),
          e("div", vr, [
            e("button", {
              class: "btn secondary",
              onClick: y[15] || (y[15] = (M) => l("close-manual-download"))
            }, " Cancel "),
            e("button", {
              class: "btn primary",
              disabled: !g.value.trim() || !d.value.trim(),
              onClick: E
            }, " Add Download ", 8, fr)
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), hr = /* @__PURE__ */ K(gr, [["__scopeId", "data-v-839d3847"]]), pr = {
  key: 0,
  class: "step-content"
}, yr = { class: "analysis-summary" }, wr = { class: "summary-description" }, br = { class: "stats-grid" }, kr = { class: "stat-card" }, $r = { class: "stat-items" }, _r = { class: "stat-item success" }, Cr = { class: "stat-count" }, xr = {
  key: 0,
  class: "stat-item warning"
}, Sr = { class: "stat-count" }, Ir = {
  key: 1,
  class: "stat-item error"
}, Er = { class: "stat-count" }, Mr = { class: "stat-card" }, zr = { class: "stat-items" }, Nr = { class: "stat-item success" }, Lr = { class: "stat-count" }, Tr = {
  key: 0,
  class: "stat-item warning"
}, Rr = { class: "stat-count" }, Br = {
  key: 1,
  class: "stat-item error"
}, Or = { class: "stat-count" }, Dr = {
  key: 0,
  class: "user-action-required"
}, Ur = {
  key: 1,
  class: "all-resolved"
}, Vr = {
  key: 3,
  class: "step-content"
}, Ar = { class: "review-summary" }, Pr = {
  key: 0,
  class: "review-section"
}, Wr = { class: "section-title" }, Fr = { class: "review-items" }, Gr = { class: "item-name" }, Hr = { class: "item-choice" }, jr = {
  key: 0,
  class: "choice-badge install"
}, Kr = {
  key: 1,
  class: "choice-badge optional"
}, qr = {
  key: 2,
  class: "choice-badge skip"
}, Yr = {
  key: 1,
  class: "review-section"
}, Jr = { class: "section-title" }, Xr = { class: "review-items" }, Zr = { class: "item-name" }, Qr = { class: "item-choice" }, ec = {
  key: 0,
  class: "choice-badge install"
}, tc = {
  key: 1,
  class: "choice-badge download"
}, oc = {
  key: 2,
  class: "choice-badge optional"
}, sc = {
  key: 3,
  class: "choice-badge skip"
}, nc = {
  key: 2,
  class: "no-choices"
}, ac = /* @__PURE__ */ j({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: r }) {
    const s = t, l = r, { analyzeWorkflow: m, applyResolution: g } = Ya(), d = C(null), u = C(!1), v = C(!1), w = C(null), x = C("analysis"), S = C([]), _ = C(0), k = C(0), E = C(/* @__PURE__ */ new Map()), p = C(/* @__PURE__ */ new Map()), $ = O(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return M.value && H.push({ id: "nodes", label: "Nodes" }), G.value && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), H;
    }), y = O(() => d.value ? d.value.stats.needs_user_input : !1), M = O(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), G = O(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), R = O(() => d.value ? [
      ...d.value.nodes.unresolved,
      ...d.value.nodes.ambiguous
    ] : []), V = O(() => d.value ? [
      ...d.value.models.unresolved,
      ...d.value.models.ambiguous
    ] : []);
    async function L() {
      u.value = !0, w.value = null;
      try {
        d.value = await m(s.workflowName);
      } catch (H) {
        w.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        u.value = !1;
      }
    }
    function D() {
      S.value.push("analysis"), M.value ? x.value = "nodes" : G.value ? x.value = "models" : x.value = "review";
    }
    function z(H) {
      x.value = H;
    }
    function T() {
      const H = $.value.findIndex((A) => A.id === x.value);
      H > 0 && (x.value = $.value[H - 1].id);
    }
    function B() {
      _.value++;
    }
    function Y() {
      _.value > 0 ? _.value-- : x.value = "analysis";
    }
    function F() {
      S.value.push("nodes"), G.value ? x.value = "models" : x.value = "review";
    }
    function N(H) {
      console.log("Node search:", H);
    }
    function Z(H) {
      const A = H.nodeType;
      E.value.set(A, {
        action: "install",
        package_id: H.packageId
      });
    }
    function se(H) {
      const A = H.nodeType;
      E.value.set(A, {
        action: "optional"
      });
    }
    function Be(H) {
      const A = H.nodeType;
      E.value.set(A, {
        action: "skip"
      });
    }
    function Oe(H) {
      const A = H.nodeType, fe = H.packageId;
      E.value.set(A, {
        action: "install",
        package_id: fe
      });
    }
    function re() {
      k.value++;
    }
    function _e() {
      k.value > 0 ? k.value-- : x.value = M.value ? "nodes" : "analysis";
    }
    function Q() {
      S.value.push("models"), x.value = "review";
    }
    function Ee(H) {
      console.log("Model search:", H);
    }
    function qe(H) {
      const A = H.filename;
      p.value.set(A, {
        action: "download",
        url: H.url,
        target_path: H.targetPath
      });
    }
    function ie(H) {
      const A = H.filename;
      p.value.set(A, {
        action: "optional"
      });
    }
    function $e(H) {
      const A = H.filename;
      p.value.set(A, {
        action: "skip"
      });
    }
    function Ye(H) {
      const A = H.filename, fe = H.model;
      p.value.set(A, {
        action: "select",
        selected_model: fe
      });
    }
    async function q() {
      v.value = !0, w.value = null;
      try {
        await g(s.workflowName, E.value, p.value), l("install"), l("refresh"), l("close");
      } catch (H) {
        w.value = H instanceof Error ? H.message : "Failed to apply resolution";
      } finally {
        v.value = !1;
      }
    }
    return ve(L), (H, A) => (o(), b(ct, {
      title: `RESOLVE DEPENDENCIES: ${t.workflowName}`,
      size: "lg",
      loading: u.value,
      error: w.value || void 0,
      onClose: A[1] || (A[1] = (fe) => l("close"))
    }, {
      body: a(() => [
        d.value ? (o(), b(ll, {
          key: 0,
          steps: $.value,
          "current-step": x.value,
          "completed-steps": S.value,
          onStepChange: z
        }, {
          default: a(() => [
            x.value === "analysis" ? (o(), n("div", pr, [
              e("div", yr, [
                A[18] || (A[18] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", wr, " Found " + i(d.value.stats.total_nodes) + " nodes and " + i(d.value.stats.total_models) + " models in this workflow. ", 1),
                e("div", br, [
                  e("div", kr, [
                    A[8] || (A[8] = e("div", { class: "stat-header" }, "Nodes", -1)),
                    e("div", $r, [
                      e("div", _r, [
                        A[2] || (A[2] = e("span", { class: "stat-icon" }, "✓", -1)),
                        e("span", Cr, i(d.value.nodes.resolved.length), 1),
                        A[3] || (A[3] = e("span", { class: "stat-label" }, "resolved", -1))
                      ]),
                      d.value.nodes.ambiguous.length > 0 ? (o(), n("div", xr, [
                        A[4] || (A[4] = e("span", { class: "stat-icon" }, "⚡", -1)),
                        e("span", Sr, i(d.value.nodes.ambiguous.length), 1),
                        A[5] || (A[5] = e("span", { class: "stat-label" }, "ambiguous", -1))
                      ])) : c("", !0),
                      d.value.nodes.unresolved.length > 0 ? (o(), n("div", Ir, [
                        A[6] || (A[6] = e("span", { class: "stat-icon" }, "⚠", -1)),
                        e("span", Er, i(d.value.nodes.unresolved.length), 1),
                        A[7] || (A[7] = e("span", { class: "stat-label" }, "unresolved", -1))
                      ])) : c("", !0)
                    ])
                  ]),
                  e("div", Mr, [
                    A[15] || (A[15] = e("div", { class: "stat-header" }, "Models", -1)),
                    e("div", zr, [
                      e("div", Nr, [
                        A[9] || (A[9] = e("span", { class: "stat-icon" }, "✓", -1)),
                        e("span", Lr, i(d.value.models.resolved.length), 1),
                        A[10] || (A[10] = e("span", { class: "stat-label" }, "resolved", -1))
                      ]),
                      d.value.models.ambiguous.length > 0 ? (o(), n("div", Tr, [
                        A[11] || (A[11] = e("span", { class: "stat-icon" }, "⚡", -1)),
                        e("span", Rr, i(d.value.models.ambiguous.length), 1),
                        A[12] || (A[12] = e("span", { class: "stat-label" }, "ambiguous", -1))
                      ])) : c("", !0),
                      d.value.models.unresolved.length > 0 ? (o(), n("div", Br, [
                        A[13] || (A[13] = e("span", { class: "stat-icon" }, "⚠", -1)),
                        e("span", Or, i(d.value.models.unresolved.length), 1),
                        A[14] || (A[14] = e("span", { class: "stat-label" }, "unresolved", -1))
                      ])) : c("", !0)
                    ])
                  ])
                ]),
                y.value ? (o(), n("div", Dr, [...A[16] || (A[16] = [
                  e("span", { class: "action-icon" }, "👤", -1),
                  e("span", { class: "action-text" }, "User input required to resolve dependencies", -1)
                ])])) : (o(), n("div", Ur, [...A[17] || (A[17] = [
                  e("span", { class: "success-icon" }, "✓", -1),
                  e("span", { class: "success-text" }, "All dependencies are resolved!", -1)
                ])]))
              ])
            ])) : c("", !0),
            x.value === "nodes" ? (o(), b(pi, {
              key: 1,
              nodes: R.value,
              "current-index": _.value,
              onNext: B,
              onPrevious: Y,
              onComplete: F,
              onSearch: N,
              onManualEntry: Z,
              onMarkOptional: se,
              onSkip: Be,
              onOptionSelected: Oe
            }, null, 8, ["nodes", "current-index"])) : c("", !0),
            x.value === "models" ? (o(), b(hr, {
              key: 2,
              models: V.value,
              "current-index": k.value,
              onNext: re,
              onPrevious: _e,
              onComplete: Q,
              onSearch: Ee,
              onDownloadUrl: qe,
              onMarkOptional: ie,
              onSkip: $e,
              onOptionSelected: Ye
            }, null, 8, ["models", "current-index"])) : c("", !0),
            x.value === "review" ? (o(), n("div", Vr, [
              e("div", Ar, [
                A[19] || (A[19] = e("h3", { class: "summary-title" }, "Review Your Choices", -1)),
                A[20] || (A[20] = e("p", { class: "summary-description" }, " Please review the dependencies that will be installed and the actions taken. ", -1)),
                E.value.size > 0 ? (o(), n("div", Pr, [
                  e("h4", Wr, "Nodes (" + i(E.value.size) + ")", 1),
                  e("div", Fr, [
                    (o(!0), n(W, null, J(E.value, ([fe, ge]) => (o(), n("div", {
                      key: fe,
                      class: "review-item"
                    }, [
                      e("div", Gr, i(fe), 1),
                      e("div", Hr, [
                        ge.action === "install" ? (o(), n("span", jr, " Install: " + i(ge.package_id), 1)) : ge.action === "optional" ? (o(), n("span", Kr, " Mark as Optional ")) : ge.action === "skip" ? (o(), n("span", qr, " Skip ")) : c("", !0)
                      ])
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.size > 0 ? (o(), n("div", Yr, [
                  e("h4", Jr, "Models (" + i(p.value.size) + ")", 1),
                  e("div", Xr, [
                    (o(!0), n(W, null, J(p.value, ([fe, ge]) => {
                      var st;
                      return o(), n("div", {
                        key: fe,
                        class: "review-item"
                      }, [
                        e("div", Zr, i(fe), 1),
                        e("div", Qr, [
                          ge.action === "select" ? (o(), n("span", ec, " Use: " + i((st = ge.selected_model) == null ? void 0 : st.filename), 1)) : ge.action === "download" ? (o(), n("span", tc, " Download from URL ")) : ge.action === "optional" ? (o(), n("span", oc, " Mark as Optional ")) : ge.action === "skip" ? (o(), n("span", sc, " Skip ")) : c("", !0)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : c("", !0),
                E.value.size === 0 && p.value.size === 0 ? (o(), n("div", nc, " No actions selected. All items were skipped. ")) : c("", !0)
              ])
            ])) : c("", !0)
          ]),
          _: 1
        }, 8, ["steps", "current-step", "completed-steps"])) : c("", !0)
      ]),
      footer: a(() => [
        f(ue, {
          variant: "secondary",
          onClick: A[0] || (A[0] = (fe) => l("close"))
        }, {
          default: a(() => [...A[21] || (A[21] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        x.value === "analysis" ? (o(), b(ue, {
          key: 0,
          variant: "primary",
          disabled: u.value,
          onClick: D
        }, {
          default: a(() => [...A[22] || (A[22] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        x.value === "review" ? (o(), b(ue, {
          key: 1,
          variant: "secondary",
          disabled: v.value,
          onClick: T
        }, {
          default: a(() => [...A[23] || (A[23] = [
            h(" Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        x.value === "review" ? (o(), b(ue, {
          key: 2,
          variant: "primary",
          disabled: v.value,
          loading: v.value,
          onClick: q
        }, {
          default: a(() => [...A[24] || (A[24] = [
            h(" Apply ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), lc = /* @__PURE__ */ K(ac, [["__scopeId", "data-v-32c97e08"]]), ic = { class: "search-input-wrapper" }, rc = ["value", "placeholder"], cc = /* @__PURE__ */ j({
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
    const s = t, l = r, m = C(null);
    let g;
    function d(v) {
      const w = v.target.value;
      s.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        l("update:modelValue", w);
      }, s.debounce)) : l("update:modelValue", w);
    }
    function u() {
      var v;
      l("update:modelValue", ""), l("clear"), (v = m.value) == null || v.focus();
    }
    return ve(() => {
      s.autoFocus && m.value && m.value.focus();
    }), (v, w) => (o(), n("div", ic, [
      e("input", {
        ref_key: "inputRef",
        ref: m,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: d,
        onKeyup: Ne(u, ["escape"])
      }, null, 40, rc),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), dc = /* @__PURE__ */ K(cc, [["__scopeId", "data-v-266f857a"]]), uc = { class: "search-bar" }, mc = /* @__PURE__ */ j({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, s) => (o(), n("div", uc, [
      f(dc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (l) => r.$emit("update:modelValue", l)),
        onClear: s[1] || (s[1] = (l) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), je = /* @__PURE__ */ K(mc, [["__scopeId", "data-v-3d51bbfd"]]), vc = { class: "section-group" }, fc = {
  key: 0,
  class: "section-content"
}, gc = /* @__PURE__ */ j({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const s = t, l = r, m = C(s.initiallyExpanded);
    function g() {
      s.collapsible && (m.value = !m.value, l("toggle", m.value));
    }
    return (d, u) => (o(), n("section", vc, [
      f(ke, {
        count: t.count,
        clickable: t.collapsible,
        expanded: m.value,
        onClick: g
      }, {
        default: a(() => [
          h(i(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || m.value ? (o(), n("div", fc, [
        oe(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), de = /* @__PURE__ */ K(gc, [["__scopeId", "data-v-c48e33ed"]]), hc = { class: "item-header" }, pc = {
  key: 0,
  class: "item-icon"
}, yc = { class: "item-info" }, wc = {
  key: 0,
  class: "item-title"
}, bc = {
  key: 1,
  class: "item-subtitle"
}, kc = {
  key: 0,
  class: "item-details"
}, $c = {
  key: 1,
  class: "item-actions"
}, _c = /* @__PURE__ */ j({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const s = t, l = O(() => s.status ? `status-${s.status}` : "");
    return (m, g) => (o(), n("div", {
      class: X(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: g[0] || (g[0] = (d) => t.clickable && m.$emit("click"))
    }, [
      e("div", hc, [
        m.$slots.icon ? (o(), n("span", pc, [
          oe(m.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", yc, [
          m.$slots.title ? (o(), n("div", wc, [
            oe(m.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          m.$slots.subtitle ? (o(), n("div", bc, [
            oe(m.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      m.$slots.details ? (o(), n("div", kc, [
        oe(m.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      m.$slots.actions ? (o(), n("div", $c, [
        oe(m.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), me = /* @__PURE__ */ K(_c, [["__scopeId", "data-v-cc435e0e"]]), Cc = { class: "loading-state" }, xc = { class: "loading-message" }, Sc = /* @__PURE__ */ j({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, s) => (o(), n("div", Cc, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", xc, i(t.message), 1)
    ]));
  }
}), Te = /* @__PURE__ */ K(Sc, [["__scopeId", "data-v-ad8436c9"]]), Ic = { class: "error-state" }, Ec = { class: "error-message" }, Mc = /* @__PURE__ */ j({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, s) => (o(), n("div", Ic, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Ec, i(t.message), 1),
      t.retry ? (o(), b(P, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => r.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Re = /* @__PURE__ */ K(Mc, [["__scopeId", "data-v-5397be48"]]), zc = /* @__PURE__ */ j({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const s = r, { getWorkflows: l } = we(), m = C([]), g = C(!1), d = C(null), u = C(""), v = C(!0), w = C(!1), x = C(!1), S = C(!1), _ = C(null), k = O(
      () => m.value.filter((F) => F.status === "broken")
    ), E = O(
      () => m.value.filter((F) => F.status === "new")
    ), p = O(
      () => m.value.filter((F) => F.status === "modified")
    ), $ = O(
      () => m.value.filter((F) => F.status === "synced")
    ), y = O(() => {
      if (!u.value.trim()) return m.value;
      const F = u.value.toLowerCase();
      return m.value.filter((N) => N.name.toLowerCase().includes(F));
    }), M = O(
      () => k.value.filter(
        (F) => !u.value.trim() || F.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), G = O(
      () => E.value.filter(
        (F) => !u.value.trim() || F.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), R = O(
      () => p.value.filter(
        (F) => !u.value.trim() || F.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), V = O(
      () => $.value.filter(
        (F) => !u.value.trim() || F.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), L = O(
      () => w.value ? V.value : V.value.slice(0, 5)
    );
    async function D() {
      g.value = !0, d.value = null;
      try {
        m.value = await l();
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load workflows";
      } finally {
        g.value = !1;
      }
    }
    function z(F) {
      _.value = F, x.value = !0;
    }
    function T(F) {
      _.value = F, S.value = !0;
    }
    function B() {
      alert("Bulk resolution not yet implemented");
    }
    function Y() {
      s("refresh");
    }
    return ve(D), (F, N) => (o(), n(W, null, [
      f(pe, null, {
        header: a(() => [
          f(ye, { title: "WORKFLOWS" }, {
            actions: a(() => [
              k.value.length > 0 ? (o(), b(P, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: a(() => [...N[7] || (N[7] = [
                  h(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          f(je, {
            modelValue: u.value,
            "onUpdate:modelValue": N[0] || (N[0] = (Z) => u.value = Z),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          g.value ? (o(), b(Te, {
            key: 0,
            message: "Loading workflows..."
          })) : d.value ? (o(), b(Re, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            M.value.length ? (o(), b(de, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(M.value, (Z) => (o(), b(me, {
                  key: Z.name,
                  status: "broken"
                }, {
                  icon: a(() => [...N[8] || (N[8] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(i(Z.name), 1)
                  ]),
                  subtitle: a(() => [
                    h(" Missing: " + i(Z.missing_nodes) + " nodes, " + i(Z.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    f(P, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => T(Z.name)
                    }, {
                      default: a(() => [...N[9] || (N[9] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => z(Z.name)
                    }, {
                      default: a(() => [...N[10] || (N[10] = [
                        h(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            G.value.length ? (o(), b(de, {
              key: 1,
              title: "NEW",
              count: G.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(G.value, (Z) => (o(), b(me, {
                  key: Z.name,
                  status: "new"
                }, {
                  icon: a(() => [...N[11] || (N[11] = [
                    h("●", -1)
                  ])]),
                  title: a(() => [
                    h(i(Z.name), 1)
                  ]),
                  subtitle: a(() => [...N[12] || (N[12] = [
                    h("New", -1)
                  ])]),
                  actions: a(() => [
                    f(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => z(Z.name)
                    }, {
                      default: a(() => [...N[13] || (N[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            R.value.length ? (o(), b(de, {
              key: 2,
              title: "MODIFIED",
              count: R.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(R.value, (Z) => (o(), b(me, {
                  key: Z.name,
                  status: "modified"
                }, {
                  icon: a(() => [...N[14] || (N[14] = [
                    h("⚡", -1)
                  ])]),
                  title: a(() => [
                    h(i(Z.name), 1)
                  ]),
                  subtitle: a(() => [...N[15] || (N[15] = [
                    h("Modified", -1)
                  ])]),
                  actions: a(() => [
                    f(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => z(Z.name)
                    }, {
                      default: a(() => [...N[16] || (N[16] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            V.value.length ? (o(), b(de, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: N[2] || (N[2] = (Z) => v.value = Z)
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(L.value, (Z) => (o(), b(me, {
                  key: Z.name,
                  status: "synced"
                }, {
                  icon: a(() => [...N[17] || (N[17] = [
                    h("✓", -1)
                  ])]),
                  title: a(() => [
                    h(i(Z.name), 1)
                  ]),
                  subtitle: a(() => [...N[18] || (N[18] = [
                    h("Synced", -1)
                  ])]),
                  actions: a(() => [
                    f(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => z(Z.name)
                    }, {
                      default: a(() => [...N[19] || (N[19] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !w.value && V.value.length > 5 ? (o(), b(P, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (Z) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    h(" View all " + i(V.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            y.value.length ? c("", !0) : (o(), b(Ie, {
              key: 4,
              icon: "📭",
              message: u.value ? `No workflows match '${u.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      x.value && _.value ? (o(), b(qa, {
        key: 0,
        "workflow-name": _.value,
        onClose: N[3] || (N[3] = (Z) => x.value = !1),
        onResolve: N[4] || (N[4] = (Z) => T(_.value))
      }, null, 8, ["workflow-name"])) : c("", !0),
      S.value && _.value ? (o(), b(lc, {
        key: 1,
        "workflow-name": _.value,
        onClose: N[5] || (N[5] = (Z) => S.value = !1),
        onInstall: Y,
        onRefresh: N[6] || (N[6] = (Z) => s("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Nc = /* @__PURE__ */ K(zc, [["__scopeId", "data-v-ee63730e"]]), Lc = /* @__PURE__ */ j({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, s) => (o(), n("div", {
      class: X(["summary-bar", t.variant])
    }, [
      oe(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ K(Lc, [["__scopeId", "data-v-ccb7816e"]]), Tc = /* @__PURE__ */ j({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const s = r, { getEnvironmentModels: l, getStatus: m } = we(), g = C([]), d = C([]), u = C("production"), v = C(!1), w = C(null), x = C(""), S = C(!1);
    function _() {
      S.value = !1, s("navigate", "model-index");
    }
    const k = O(
      () => g.value.reduce((z, T) => z + (T.size || 0), 0)
    ), E = O(() => {
      if (!x.value.trim()) return g.value;
      const z = x.value.toLowerCase();
      return g.value.filter((T) => T.filename.toLowerCase().includes(z));
    }), p = O(() => {
      if (!x.value.trim()) return d.value;
      const z = x.value.toLowerCase();
      return d.value.filter((T) => T.filename.toLowerCase().includes(z));
    }), $ = O(
      () => E.value.filter((z) => z.type === "checkpoints")
    ), y = O(
      () => E.value.filter((z) => z.type === "loras")
    ), M = O(
      () => E.value.filter((z) => z.type !== "checkpoints" && z.type !== "loras")
    );
    function G(z) {
      if (!z) return "Unknown";
      const T = z / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function R(z) {
      s("navigate", "model-index");
    }
    function V(z) {
      s("navigate", "model-index");
    }
    function L(z) {
      alert(`Download functionality not yet implemented for ${z}`);
    }
    async function D() {
      v.value = !0, w.value = null;
      try {
        const z = await l();
        g.value = z, d.value = [];
        const T = await m();
        u.value = T.environment || "production";
      } catch (z) {
        w.value = z instanceof Error ? z.message : "Failed to load models";
      } finally {
        v.value = !1;
      }
    }
    return ve(D), (z, T) => (o(), n(W, null, [
      f(pe, null, {
        header: a(() => [
          f(ye, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (B) => S.value = !0)
          })
        ]),
        search: a(() => [
          f(je, {
            modelValue: x.value,
            "onUpdate:modelValue": T[1] || (T[1] = (B) => x.value = B),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), b(Te, {
            key: 0,
            message: "Loading environment models..."
          })) : w.value ? (o(), b(Re, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            g.value.length ? (o(), b(Ke, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + i(g.value.length) + " models • " + i(G(k.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            $.value.length ? (o(), b(de, {
              key: 1,
              title: "CHECKPOINTS",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J($.value, (B) => (o(), b(me, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...T[3] || (T[3] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(G(B.size)), 1)
                  ]),
                  details: a(() => [
                    f(ee, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    f(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => R(B.hash)
                    }, {
                      default: a(() => [...T[4] || (T[4] = [
                        h(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            y.value.length ? (o(), b(de, {
              key: 2,
              title: "LORAS",
              count: y.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(y.value, (B) => (o(), b(me, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...T[5] || (T[5] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(G(B.size)), 1)
                  ]),
                  details: a(() => [
                    f(ee, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    f(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => R(B.hash)
                    }, {
                      default: a(() => [...T[6] || (T[6] = [
                        h(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            M.value.length ? (o(), b(de, {
              key: 3,
              title: "OTHER",
              count: M.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(M.value, (B) => (o(), b(me, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...T[7] || (T[7] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(G(B.size)), 1)
                  ]),
                  details: a(() => [
                    f(ee, {
                      label: "Type:",
                      value: B.type
                    }, null, 8, ["value"]),
                    f(ee, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => R(B.hash)
                    }, {
                      default: a(() => [...T[8] || (T[8] = [
                        h(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            p.value.length ? (o(), b(de, {
              key: 4,
              title: "MISSING",
              count: p.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(p.value, (B) => (o(), b(me, {
                  key: B.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...T[9] || (T[9] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(i(B.filename), 1)
                  ]),
                  subtitle: a(() => [...T[10] || (T[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var Y;
                    return [
                      f(ee, {
                        label: "Required by:",
                        value: ((Y = B.workflow_names) == null ? void 0 : Y.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    f(P, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => L(B.filename)
                    }, {
                      default: a(() => [...T[11] || (T[11] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => V(B.filename)
                    }, {
                      default: a(() => [...T[12] || (T[12] = [
                        h(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !E.value.length && !p.value.length ? (o(), b(Ie, {
              key: 5,
              icon: "📭",
              message: x.value ? `No models match '${x.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(Le, {
        show: S.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (B) => S.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            T[13] || (T[13] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + i(u.value) + '"', 1),
            T[14] || (T[14] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          f(P, {
            variant: "primary",
            onClick: _
          }, {
            default: a(() => [...T[15] || (T[15] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Rc = /* @__PURE__ */ K(Tc, [["__scopeId", "data-v-72675609"]]), Bc = /* @__PURE__ */ j({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: r } = we(), s = C([]), l = C(!1), m = C(null), g = C(""), d = C(!1), u = O(
      () => s.value.reduce((L, D) => L + (D.size_mb || D.size || 0), 0)
    ), v = O(() => {
      const L = /* @__PURE__ */ new Set();
      return s.value.forEach((D) => {
        D.used_in_environments && D.used_in_environments.length > 0 && D.used_in_environments.forEach((z) => L.add(z.env_name));
      }), L.size;
    }), w = O(() => {
      if (!g.value.trim()) return s.value;
      const L = g.value.toLowerCase();
      return s.value.filter((D) => {
        const z = D, T = D.sha256 || z.sha256_hash || "";
        return D.filename.toLowerCase().includes(L) || T.toLowerCase().includes(L);
      });
    }), x = O(
      () => w.value.filter((L) => L.type === "checkpoints")
    ), S = O(
      () => w.value.filter((L) => L.type === "loras")
    ), _ = O(
      () => w.value.filter((L) => L.type !== "checkpoints" && L.type !== "loras")
    );
    function k(L) {
      return L ? L >= 1024 ? `${(L / 1024).toFixed(1)} GB` : `${L.toFixed(0)} MB` : "Unknown";
    }
    function E(L) {
      const D = L, z = L.used_in_workflows || D.used_by || [];
      return !z || z.length === 0 ? "Not used" : `${z.length} workflow(s)`;
    }
    function p(L) {
      navigator.clipboard.writeText(L), alert("Hash copied to clipboard");
    }
    function $(L) {
      prompt("Enter model source URL:", L.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function y(L) {
      const D = L, z = L.used_in_workflows || D.used_by || [], T = z && z.length > 0 ? `

⚠ WARNING: This model is used by ${z.length} workflow(s):
${z.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${L.filename}?${T}

This will free ${k(D.size_mb || L.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function M() {
      alert("Scan for models not yet implemented");
    }
    function G() {
      alert("Change directory not yet implemented");
    }
    function R() {
      alert("Download new model not yet implemented");
    }
    async function V() {
      l.value = !0, m.value = null;
      try {
        s.value = await r(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", x.value), console.log("Filtered loras:", S.value), console.log("Filtered other:", _.value);
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load workspace models";
      } finally {
        l.value = !1;
      }
    }
    return ve(V), (L, D) => (o(), n(W, null, [
      f(pe, null, {
        header: a(() => [
          f(ye, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: D[0] || (D[0] = (z) => d.value = !0)
          }, {
            actions: a(() => [
              f(P, {
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: a(() => [...D[3] || (D[3] = [
                  h(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              f(P, {
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: a(() => [...D[4] || (D[4] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(P, {
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: a(() => [...D[5] || (D[5] = [
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
        search: a(() => [
          f(je, {
            modelValue: g.value,
            "onUpdate:modelValue": D[1] || (D[1] = (z) => g.value = z),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          l.value ? (o(), b(Te, {
            key: 0,
            message: "Loading workspace models..."
          })) : m.value ? (o(), b(Re, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length ? (o(), b(Ke, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + i(s.value.length) + " models • " + i(k(u.value)) + " • Used in " + i(v.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            x.value.length ? (o(), b(de, {
              key: 1,
              title: "CHECKPOINTS",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(x.value, (z) => (o(), b(me, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[6] || (D[6] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(k(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => {
                    var T, B;
                    return [
                      z.sha256 || z.sha256_hash ? (o(), b(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      f(ee, {
                        label: "Used in:",
                        value: E(z)
                      }, null, 8, ["value"]),
                      z.source_url || (T = z.sources) != null && T[0] ? (o(), b(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: z.source_url || ((B = z.sources) == null ? void 0 : B[0])
                      }, null, 8, ["value"])) : (o(), b(ee, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...D[7] || (D[7] = [
                          h("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    f(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => $(z)
                    }, {
                      default: a(() => [...D[8] || (D[8] = [
                        h(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), b(P, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => p(z.sha256 || z.sha256_hash)
                    }, {
                      default: a(() => [...D[9] || (D[9] = [
                        h(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    f(P, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => y(z)
                    }, {
                      default: a(() => [...D[10] || (D[10] = [
                        h(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            S.value.length ? (o(), b(de, {
              key: 2,
              title: "LORAS",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(S.value, (z) => (o(), b(me, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[11] || (D[11] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(k(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => {
                    var T, B;
                    return [
                      z.sha256 || z.sha256_hash ? (o(), b(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      f(ee, {
                        label: "Used in:",
                        value: E(z)
                      }, null, 8, ["value"]),
                      z.source_url || (T = z.sources) != null && T[0] ? (o(), b(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: z.source_url || ((B = z.sources) == null ? void 0 : B[0])
                      }, null, 8, ["value"])) : (o(), b(ee, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...D[12] || (D[12] = [
                          h("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    f(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => $(z)
                    }, {
                      default: a(() => [...D[13] || (D[13] = [
                        h(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), b(P, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => p(z.sha256 || z.sha256_hash)
                    }, {
                      default: a(() => [...D[14] || (D[14] = [
                        h(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    f(P, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => y(z)
                    }, {
                      default: a(() => [...D[15] || (D[15] = [
                        h(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            _.value.length ? (o(), b(de, {
              key: 3,
              title: "OTHER",
              count: _.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(_.value, (z) => (o(), b(me, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[16] || (D[16] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(z.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(k(z.size_mb || z.size)), 1)
                  ]),
                  details: a(() => [
                    f(ee, {
                      label: "Type:",
                      value: z.type
                    }, null, 8, ["value"]),
                    z.sha256 || z.sha256_hash ? (o(), b(ee, {
                      key: 0,
                      label: "SHA256:",
                      value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    f(ee, {
                      label: "Used in:",
                      value: E(z)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => $(z)
                    }, {
                      default: a(() => [...D[17] || (D[17] = [
                        h(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), b(P, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => p(z.sha256 || z.sha256_hash)
                    }, {
                      default: a(() => [...D[18] || (D[18] = [
                        h(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    f(P, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => y(z)
                    }, {
                      default: a(() => [...D[19] || (D[19] = [
                        h(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            w.value.length ? c("", !0) : (o(), b(Ie, {
              key: 4,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(Le, {
        show: d.value,
        title: "About Workspace Model Index",
        onClose: D[2] || (D[2] = (z) => d.value = !1)
      }, {
        content: a(() => [...D[20] || (D[20] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Oc = /* @__PURE__ */ K(Bc, [["__scopeId", "data-v-5a24af01"]]), Dc = { key: 0 }, Uc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Vc = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Ac = /* @__PURE__ */ j({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: r, installNode: s, updateNode: l, uninstallNode: m } = we(), g = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), d = C(!1), u = C(null), v = C(""), w = C(!1), x = O(() => {
      if (!v.value.trim()) return g.value.nodes;
      const R = v.value.toLowerCase();
      return g.value.nodes.filter(
        (V) => {
          var L, D;
          return V.name.toLowerCase().includes(R) || ((L = V.description) == null ? void 0 : L.toLowerCase().includes(R)) || ((D = V.repository) == null ? void 0 : D.toLowerCase().includes(R));
        }
      );
    }), S = O(
      () => x.value.filter((R) => R.installed)
    ), _ = O(
      () => x.value.filter((R) => !R.installed)
    );
    function k(R) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[R] || R;
    }
    function E(R) {
      return !R.used_in_workflows || R.used_in_workflows.length === 0 ? "Not used in any workflows" : R.used_in_workflows.length === 1 ? R.used_in_workflows[0] : `${R.used_in_workflows.length} workflows`;
    }
    function p(R) {
      window.open(R, "_blank");
    }
    async function $(R) {
      if (confirm(`Install node "${R}"?

This will download and install the node from its repository.`))
        try {
          d.value = !0;
          const V = await s(R);
          V.status === "success" ? (alert(`Node "${R}" installed successfully!`), await G()) : alert(`Failed to install node: ${V.message || "Unknown error"}`);
        } catch (V) {
          alert(`Error installing node: ${V instanceof Error ? V.message : "Unknown error"}`);
        } finally {
          d.value = !1;
        }
    }
    async function y(R) {
      if (confirm(`Check for updates for "${R}"?`))
        try {
          d.value = !0;
          const V = await l(R);
          V.status === "success" ? (alert(`Node "${R}" is up to date or has been updated!`), await G()) : alert(`Update check failed: ${V.message || "Unknown error"}`);
        } catch (V) {
          alert(`Error checking for updates: ${V instanceof Error ? V.message : "Unknown error"}`);
        } finally {
          d.value = !1;
        }
    }
    async function M(R) {
      if (confirm(`Uninstall node "${R}"?

This will remove the node from this environment.`))
        try {
          d.value = !0;
          const V = await m(R);
          V.status === "success" ? (alert(`Node "${R}" uninstalled successfully!`), await G()) : alert(`Failed to uninstall node: ${V.message || "Unknown error"}`);
        } catch (V) {
          alert(`Error uninstalling node: ${V instanceof Error ? V.message : "Unknown error"}`);
        } finally {
          d.value = !1;
        }
    }
    async function G() {
      d.value = !0, u.value = null;
      try {
        g.value = await r();
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load nodes";
      } finally {
        d.value = !1;
      }
    }
    return ve(G), (R, V) => (o(), n(W, null, [
      f(pe, null, {
        header: a(() => [
          f(ye, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: V[0] || (V[0] = (L) => w.value = !0)
          })
        ]),
        search: a(() => [
          f(je, {
            modelValue: v.value,
            "onUpdate:modelValue": V[1] || (V[1] = (L) => v.value = L),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          d.value ? (o(), b(Te, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : u.value ? (o(), b(Re, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            g.value.total_count ? (o(), b(Ke, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + i(g.value.total_count) + " nodes • " + i(g.value.installed_count) + " installed • " + i(g.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            S.value.length ? (o(), b(de, {
              key: 1,
              title: "INSTALLED",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(S.value, (L) => (o(), b(me, {
                  key: L.name,
                  status: "synced"
                }, {
                  icon: a(() => [...V[4] || (V[4] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(L.name), 1)
                  ]),
                  subtitle: a(() => [
                    L.version ? (o(), n("span", Dc, "v" + i(L.version), 1)) : (o(), n("span", Uc, "version unknown")),
                    L.source ? (o(), n("span", Vc, " • " + i(k(L.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    L.description ? (o(), b(ee, {
                      key: 0,
                      label: "Description:",
                      value: L.description
                    }, null, 8, ["value"])) : c("", !0),
                    L.repository ? (o(), b(ee, {
                      key: 1,
                      label: "Repository:",
                      value: L.repository
                    }, null, 8, ["value"])) : c("", !0),
                    f(ee, {
                      label: "Used by:",
                      value: E(L)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    L.repository ? (o(), b(P, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => p(L.repository)
                    }, {
                      default: a(() => [...V[5] || (V[5] = [
                        h(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    L.source === "registry" ? (o(), b(P, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => y(L.name)
                    }, {
                      default: a(() => [...V[6] || (V[6] = [
                        h(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    L.source !== "unknown" ? (o(), b(P, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => M(L.name)
                    }, {
                      default: a(() => [...V[7] || (V[7] = [
                        h(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            _.value.length ? (o(), b(de, {
              key: 2,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(_.value, (L) => (o(), b(me, {
                  key: L.name,
                  status: "missing"
                }, {
                  icon: a(() => [...V[8] || (V[8] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(i(L.name), 1)
                  ]),
                  subtitle: a(() => [...V[9] || (V[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    L.description ? (o(), b(ee, {
                      key: 0,
                      label: "Description:",
                      value: L.description
                    }, null, 8, ["value"])) : c("", !0),
                    L.repository ? (o(), b(ee, {
                      key: 1,
                      label: "Repository:",
                      value: L.repository
                    }, null, 8, ["value"])) : c("", !0),
                    f(ee, {
                      label: "Required by:",
                      value: E(L)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    L.download_url ? (o(), b(P, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (D) => $(L.name)
                    }, {
                      default: a(() => [...V[10] || (V[10] = [
                        h(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    L.repository ? (o(), b(P, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (D) => p(L.repository)
                    }, {
                      default: a(() => [...V[11] || (V[11] = [
                        h(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !S.value.length && !_.value.length ? (o(), b(Ie, {
              key: 3,
              icon: "📭",
              message: v.value ? `No nodes match '${v.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(Le, {
        show: w.value,
        title: "About Git-Tracked Nodes",
        onClose: V[3] || (V[3] = (L) => w.value = !1)
      }, {
        content: a(() => [...V[12] || (V[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            h(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            h(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          f(P, {
            variant: "primary",
            onClick: V[2] || (V[2] = (L) => w.value = !1)
          }, {
            default: a(() => [...V[13] || (V[13] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Pc = /* @__PURE__ */ K(Ac, [["__scopeId", "data-v-c480e2c1"]]), Wc = { class: "remote-url-display" }, Fc = ["title"], Gc = ["title"], Hc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, jc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Kc = /* @__PURE__ */ j({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, s = C(!1), l = O(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const g = r.url.slice(0, Math.floor(r.maxLength * 0.6)), d = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${g}...${d}`;
    });
    async function m() {
      try {
        await navigator.clipboard.writeText(r.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, d) => (o(), n("div", Wc, [
      e("span", {
        class: "url-text",
        title: t.url
      }, i(l.value), 9, Fc),
      e("button", {
        class: X(["copy-btn", { copied: s.value }]),
        onClick: m,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", jc, [...d[1] || (d[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Hc, [...d[0] || (d[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Gc)
    ]));
  }
}), xt = /* @__PURE__ */ K(Kc, [["__scopeId", "data-v-7768a58d"]]), qc = { class: "remote-title" }, Yc = {
  key: 0,
  class: "default-badge"
}, Jc = {
  key: 1,
  class: "sync-badge"
}, Xc = {
  key: 0,
  class: "ahead"
}, Zc = {
  key: 1,
  class: "behind"
}, Qc = {
  key: 0,
  class: "tracking-info"
}, ed = /* @__PURE__ */ j({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const s = t, l = O(() => s.fetchingRemote === s.remote.name), m = O(() => s.remote.is_default), g = O(() => !!s.trackingBranch);
    function d(u) {
      const v = new Date(u), x = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), S = Math.floor(x / 6e4);
      if (S < 1) return "Just now";
      if (S < 60) return `${S}m ago`;
      const _ = Math.floor(S / 60);
      if (_ < 24) return `${_}h ago`;
      const k = Math.floor(_ / 24);
      return k < 7 ? `${k}d ago` : v.toLocaleDateString();
    }
    return (u, v) => (o(), b(me, {
      status: m.value ? "synced" : void 0
    }, {
      icon: a(() => [
        h(i(m.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", qc, [
          e("span", null, i(t.remote.name), 1),
          m.value ? (o(), n("span", Yc, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", Jc, [
            t.syncStatus.ahead > 0 ? (o(), n("span", Xc, "↑" + i(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", Zc, "↓" + i(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        g.value ? (o(), n("span", Qc, " Tracking: " + i(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var w;
        return [
          f(ee, { label: "Fetch:" }, {
            default: a(() => [
              f(xt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), b(ee, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              f(xt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (w = t.syncStatus) != null && w.last_fetch ? (o(), b(ee, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, i(d(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        f(P, {
          variant: "primary",
          size: "xs",
          loading: l.value,
          onClick: v[0] || (v[0] = (w) => u.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...v[3] || (v[3] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(P, {
          variant: "secondary",
          size: "xs",
          onClick: v[1] || (v[1] = (w) => u.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...v[4] || (v[4] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        m.value ? c("", !0) : (o(), b(P, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[2] || (v[2] = (w) => u.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...v[5] || (v[5] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), td = /* @__PURE__ */ K(ed, [["__scopeId", "data-v-17362e45"]]), od = ["for"], sd = {
  key: 0,
  class: "base-form-field-required"
}, nd = { class: "base-form-field-input" }, ad = {
  key: 1,
  class: "base-form-field-error"
}, ld = {
  key: 2,
  class: "base-form-field-hint"
}, id = /* @__PURE__ */ j({
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
    const r = t, s = O(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (l, m) => (o(), n("div", {
      class: X(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        h(i(t.label) + " ", 1),
        t.required ? (o(), n("span", sd, "*")) : c("", !0)
      ], 8, od)) : c("", !0),
      e("div", nd, [
        oe(l.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", ad, i(t.error), 1)) : t.hint ? (o(), n("span", ld, i(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), mt = /* @__PURE__ */ K(id, [["__scopeId", "data-v-9a1cf296"]]), rd = ["type", "value", "placeholder", "disabled"], cd = {
  key: 0,
  class: "base-input-error"
}, dd = /* @__PURE__ */ j({
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
    return (r, s) => (o(), n("div", {
      class: X(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: X(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ne((l) => r.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ne((l) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, rd),
      t.error ? (o(), n("span", cd, i(t.error), 1)) : c("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ K(dd, [["__scopeId", "data-v-9ba02cdc"]]), ud = { class: "remote-form" }, md = { class: "form-header" }, vd = { class: "form-body" }, fd = {
  key: 0,
  class: "form-error"
}, gd = { class: "form-actions" }, hd = /* @__PURE__ */ j({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const s = t, l = r, m = C({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), g = C(!1), d = C(null);
    Et(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      m.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const u = O(() => m.value.name.trim() !== "" && m.value.fetchUrl.trim() !== "");
    async function v() {
      if (!(!u.value || g.value)) {
        d.value = null, g.value = !0;
        try {
          l("submit", m.value);
        } catch (w) {
          d.value = w instanceof Error ? w.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (w, x) => (o(), n("div", ud, [
      e("div", md, [
        f(ke, null, {
          default: a(() => [
            h(i(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", vd, [
        f(mt, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            f(vt, {
              modelValue: m.value.name,
              "onUpdate:modelValue": x[0] || (x[0] = (S) => m.value.name = S),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        f(mt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            f(vt, {
              modelValue: m.value.fetchUrl,
              "onUpdate:modelValue": x[1] || (x[1] = (S) => m.value.fetchUrl = S),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f(mt, { label: "Push URL (optional)" }, {
          default: a(() => [
            f(vt, {
              modelValue: m.value.pushUrl,
              "onUpdate:modelValue": x[2] || (x[2] = (S) => m.value.pushUrl = S),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        d.value ? (o(), n("div", fd, i(d.value), 1)) : c("", !0)
      ]),
      e("div", gd, [
        f(P, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: g.value,
          onClick: v
        }, {
          default: a(() => [
            h(i(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(P, {
          variant: "ghost",
          size: "md",
          onClick: x[3] || (x[3] = (S) => w.$emit("cancel"))
        }, {
          default: a(() => [...x[4] || (x[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), pd = /* @__PURE__ */ K(hd, [["__scopeId", "data-v-56021b18"]]), yd = { key: 0 }, wd = /* @__PURE__ */ j({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: s,
      removeRemote: l,
      updateRemoteUrl: m,
      fetchRemote: g,
      getRemoteSyncStatus: d
    } = we(), u = C([]), v = C(null), w = C({}), x = C(!1), S = C(null), _ = C(""), k = C(!1), E = C(null), p = C(!1), $ = C("add"), y = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = O(() => {
      if (!_.value.trim()) return u.value;
      const F = _.value.toLowerCase();
      return u.value.filter(
        (N) => N.name.toLowerCase().includes(F) || N.fetch_url.toLowerCase().includes(F) || N.push_url.toLowerCase().includes(F)
      );
    });
    function G(F) {
      var N;
      return ((N = v.value) == null ? void 0 : N.remote) === F;
    }
    async function R() {
      x.value = !0, S.value = null;
      try {
        const F = await r();
        u.value = F.remotes, v.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (N) => {
            const Z = await d(N.name);
            Z && (w.value[N.name] = Z);
          })
        );
      } catch (F) {
        S.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function V() {
      $.value = "add", y.value = { name: "", fetchUrl: "", pushUrl: "" }, p.value = !0;
    }
    function L(F) {
      const N = u.value.find((Z) => Z.name === F);
      N && ($.value = "edit", y.value = {
        name: N.name,
        fetchUrl: N.fetch_url,
        pushUrl: N.push_url
      }, p.value = !0);
    }
    async function D(F) {
      try {
        $.value === "add" ? await s(F.name, F.fetchUrl) : await m(F.name, F.fetchUrl, F.pushUrl || void 0), p.value = !1, await R();
      } catch (N) {
        S.value = N instanceof Error ? N.message : "Operation failed";
      }
    }
    function z() {
      p.value = !1, y.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function T(F) {
      E.value = F;
      try {
        await g(F);
        const N = await d(F);
        N && (w.value[F] = N);
      } catch (N) {
        S.value = N instanceof Error ? N.message : "Fetch failed";
      } finally {
        E.value = null;
      }
    }
    async function B(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await l(F), await R();
        } catch (N) {
          S.value = N instanceof Error ? N.message : "Failed to remove remote";
        }
    }
    function Y() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ve(R), (F, N) => (o(), n(W, null, [
      f(pe, null, {
        header: a(() => [
          f(ye, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (Z) => k.value = !0)
          }, {
            actions: a(() => [
              p.value ? c("", !0) : (o(), b(P, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: a(() => [...N[3] || (N[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          p.value ? c("", !0) : (o(), b(je, {
            key: 0,
            modelValue: _.value,
            "onUpdate:modelValue": N[1] || (N[1] = (Z) => _.value = Z),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          x.value ? (o(), b(Te, {
            key: 0,
            message: "Loading remotes..."
          })) : S.value ? (o(), b(Re, {
            key: 1,
            message: S.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            p.value ? (o(), b(pd, {
              key: 0,
              mode: $.value,
              "remote-name": y.value.name,
              "fetch-url": y.value.fetchUrl,
              "push-url": y.value.pushUrl,
              onSubmit: D,
              onCancel: z
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            u.value.length && !p.value ? (o(), b(Ke, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + i(u.value.length) + " remote" + i(u.value.length !== 1 ? "s" : "") + " ", 1),
                v.value ? (o(), n("span", yd, " • Tracking: " + i(v.value.remote) + "/" + i(v.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            M.value.length && !p.value ? (o(), b(de, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, J(M.value, (Z) => {
                  var se;
                  return o(), b(td, {
                    key: Z.name,
                    remote: Z,
                    "sync-status": w.value[Z.name],
                    "tracking-branch": G(Z.name) ? (se = v.value) == null ? void 0 : se.branch : void 0,
                    "fetching-remote": E.value,
                    onFetch: T,
                    onEdit: L,
                    onRemove: B
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !M.value.length && !p.value ? (o(), b(Ie, {
              key: 3,
              icon: "🌐",
              message: _.value ? `No remotes match '${_.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                f(P, {
                  variant: "primary",
                  onClick: V
                }, {
                  default: a(() => [...N[4] || (N[4] = [
                    h(" Add Your First Remote ", -1)
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
      f(Le, {
        show: k.value,
        title: "About Git Remotes",
        onClose: N[2] || (N[2] = (Z) => k.value = !1)
      }, {
        content: a(() => [...N[5] || (N[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          f(P, {
            variant: "link",
            onClick: Y
          }, {
            default: a(() => [...N[6] || (N[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bd = /* @__PURE__ */ K(wd, [["__scopeId", "data-v-a75719bb"]]), kd = { class: "setting-info" }, $d = { class: "setting-label" }, _d = {
  key: 0,
  class: "required-marker"
}, Cd = {
  key: 0,
  class: "setting-description"
}, xd = { class: "setting-control" }, Sd = /* @__PURE__ */ j({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, s) => (o(), n("div", {
      class: X(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", kd, [
        e("div", $d, [
          h(i(t.label) + " ", 1),
          t.required ? (o(), n("span", _d, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", Cd, i(t.description), 1)) : c("", !0)
      ]),
      e("div", xd, [
        oe(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), De = /* @__PURE__ */ K(Sd, [["__scopeId", "data-v-cb5d236c"]]), Id = { class: "toggle" }, Ed = ["checked", "disabled"], Md = /* @__PURE__ */ j({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, s) => (o(), n("label", Id, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.checked)),
        class: "toggle-input"
      }, null, 40, Ed),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Fe = /* @__PURE__ */ K(Md, [["__scopeId", "data-v-71c0f550"]]), zd = { class: "settings-section" }, Nd = { class: "path-setting" }, Ld = { class: "path-value" }, Td = { class: "path-setting" }, Rd = { class: "path-value" }, Bd = { class: "settings-section" }, Od = { class: "settings-section" }, Dd = /* @__PURE__ */ j({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: s } = we(), l = C(!1), m = C(null), g = C(null), d = C(null), u = C(null), v = C(""), w = C(""), x = C(!0), S = C(!0), _ = O(() => u.value ? v.value !== (u.value.civitai_api_key || "") : !1);
    async function k() {
      l.value = !0, m.value = null;
      try {
        d.value = await r(), u.value = { ...d.value }, v.value = d.value.civitai_api_key || "", w.value = d.value.huggingface_token || "", x.value = d.value.auto_sync_models, S.value = d.value.confirm_destructive;
      } catch ($) {
        m.value = $ instanceof Error ? $.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function E() {
      var $;
      g.value = null;
      try {
        const y = {};
        v.value !== ((($ = u.value) == null ? void 0 : $.civitai_api_key) || "") && (y.civitai_api_key = v.value || null), await s(y), await k(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (y) {
        g.value = {
          type: "error",
          message: y instanceof Error ? y.message : "Failed to save settings"
        };
      }
    }
    function p() {
      u.value && (v.value = u.value.civitai_api_key || "", w.value = u.value.huggingface_token || "", x.value = u.value.auto_sync_models, S.value = u.value.confirm_destructive, g.value = null);
    }
    return ve(k), ($, y) => (o(), b(pe, null, {
      header: a(() => [
        f(ye, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            f(P, {
              variant: "primary",
              size: "sm",
              disabled: !_.value,
              onClick: E
            }, {
              default: a(() => [...y[4] || (y[4] = [
                h(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            _.value ? (o(), b(P, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: p
            }, {
              default: a(() => [...y[5] || (y[5] = [
                h(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        l.value ? (o(), b(Te, {
          key: 0,
          message: "Loading workspace settings..."
        })) : m.value ? (o(), b(Re, {
          key: 1,
          message: m.value,
          retry: !0,
          onRetry: k
        }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
          f(de, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var M, G;
              return [
                e("div", zd, [
                  e("div", Nd, [
                    y[6] || (y[6] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    y[7] || (y[7] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Ld, i(((M = d.value) == null ? void 0 : M.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Td, [
                    y[8] || (y[8] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    y[9] || (y[9] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Rd, i(((G = d.value) == null ? void 0 : G.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(de, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Bd, [
                f(De, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    f(ot, {
                      modelValue: v.value,
                      "onUpdate:modelValue": y[0] || (y[0] = (M) => v.value = M),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(De, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(ot, {
                      modelValue: w.value,
                      "onUpdate:modelValue": y[1] || (y[1] = (M) => w.value = M),
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
          f(de, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Od, [
                f(De, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(Fe, {
                      modelValue: x.value,
                      "onUpdate:modelValue": y[2] || (y[2] = (M) => x.value = M),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(De, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(Fe, {
                      modelValue: S.value,
                      "onUpdate:modelValue": y[3] || (y[3] = (M) => S.value = M),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), b(Ke, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Pe({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, i(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Ud = /* @__PURE__ */ K(Dd, [["__scopeId", "data-v-8b092643"]]), Vd = /* @__PURE__ */ j({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = we(), s = C([]), l = C(!1), m = C(null), g = C(!1), d = C(null), u = O(() => s.value.length === 0 ? [] : s.value.map((w) => ({
      text: `${w.timestamp} - ${w.name} - ${w.level} - ${w.func}:${w.line} - ${w.message}`,
      level: w.level
    })));
    async function v() {
      l.value = !0, m.value = null;
      try {
        s.value = await r(void 0, 500);
      } catch (w) {
        m.value = w instanceof Error ? w.message : "Failed to load workspace logs";
      } finally {
        l.value = !1, setTimeout(() => {
          var w;
          (w = d.value) != null && w.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ve(v), (w, x) => (o(), n(W, null, [
      f(pe, null, {
        header: a(() => [
          f(ye, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (S) => g.value = !0)
          }, {
            actions: a(() => [
              f(P, {
                variant: "secondary",
                size: "sm",
                onClick: v,
                disabled: l.value
              }, {
                default: a(() => [
                  h(i(l.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          l.value ? (o(), b(Te, {
            key: 0,
            message: "Loading workspace logs..."
          })) : m.value ? (o(), b(Re, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: v
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length === 0 ? (o(), b(Ie, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: d,
              class: "log-output"
            }, [
              (o(!0), n(W, null, J(u.value, (S, _) => (o(), n("div", {
                key: _,
                class: X(`log-line log-level-${S.level.toLowerCase()}`)
              }, i(S.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(Le, {
        show: g.value,
        title: "About Workspace Logs",
        onClose: x[2] || (x[2] = (S) => g.value = !1)
      }, {
        content: a(() => [...x[3] || (x[3] = [
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
        actions: a(() => [
          f(P, {
            variant: "primary",
            onClick: x[1] || (x[1] = (S) => g.value = !1)
          }, {
            default: a(() => [...x[4] || (x[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ad = /* @__PURE__ */ K(Vd, [["__scopeId", "data-v-39f6a756"]]), Pd = /* @__PURE__ */ j({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: s } = we(), l = C([]), m = C(!1), g = C(null), d = C(!1), u = C("production"), v = C(null), w = O(() => l.value.length === 0 ? [] : l.value.map((S) => ({
      text: `${S.timestamp} - ${S.name} - ${S.level} - ${S.func}:${S.line} - ${S.message}`,
      level: S.level
    })));
    async function x() {
      m.value = !0, g.value = null;
      try {
        l.value = await r(void 0, 500);
        try {
          const S = await s();
          u.value = S.environment || "production";
        } catch {
        }
      } catch (S) {
        g.value = S instanceof Error ? S.message : "Failed to load environment logs";
      } finally {
        m.value = !1, setTimeout(() => {
          var S;
          (S = v.value) != null && S.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ve(x), (S, _) => (o(), n(W, null, [
      f(pe, null, {
        header: a(() => [
          f(ye, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (k) => d.value = !0)
          }, {
            actions: a(() => [
              f(P, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: m.value
              }, {
                default: a(() => [
                  h(i(m.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          m.value ? (o(), b(Te, {
            key: 0,
            message: "Loading environment logs..."
          })) : g.value ? (o(), b(Re, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            l.value.length === 0 ? (o(), b(Ie, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (o(!0), n(W, null, J(w.value, (k, E) => (o(), n("div", {
                key: E,
                class: X(`log-line log-level-${k.level.toLowerCase()}`)
              }, i(k.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(Le, {
        show: d.value,
        title: "About Environment Logs",
        onClose: _[2] || (_[2] = (k) => d.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            _[3] || (_[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, i(u.value), 1),
            _[4] || (_[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          _[5] || (_[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          _[6] || (_[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          f(P, {
            variant: "primary",
            onClick: _[1] || (_[1] = (k) => d.value = !1)
          }, {
            default: a(() => [..._[7] || (_[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Wd = /* @__PURE__ */ K(Pd, [["__scopeId", "data-v-4f1e6f72"]]), Fd = { class: "env-title" }, Gd = {
  key: 0,
  class: "current-badge"
}, Hd = {
  key: 0,
  class: "branch-info"
}, jd = /* @__PURE__ */ j({
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
    showLastUsed: { type: Boolean, default: !0 }
  },
  setup(t) {
    return (r, s) => (o(), b(me, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        h(i(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", Fd, [
          e("span", null, i(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Gd, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", Hd, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + i(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        f(ee, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        f(ee, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        f(ee, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), b(ee, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        oe(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Kd = /* @__PURE__ */ K(jd, [["__scopeId", "data-v-5238e57c"]]), qd = {
  key: 0,
  class: "create-form"
}, Yd = { class: "create-form__header" }, Jd = { class: "create-form__body" }, Xd = { class: "create-form__actions" }, Zd = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Qd = /* @__PURE__ */ j({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: r }) {
    const s = r, { getEnvironments: l } = we(), m = C([]), g = C(!1), d = C(null), u = C(""), v = C(!1), w = C(!1), x = C(""), S = O(
      () => m.value.find((G) => G.is_current)
    ), _ = O(() => {
      if (!u.value.trim()) return m.value;
      const G = u.value.toLowerCase();
      return m.value.filter(
        (R) => {
          var V;
          return R.name.toLowerCase().includes(G) || ((V = R.current_branch) == null ? void 0 : V.toLowerCase().includes(G));
        }
      );
    });
    function k(G) {
      if (!G) return "";
      try {
        const R = new Date(G), L = (/* @__PURE__ */ new Date()).getTime() - R.getTime(), D = Math.floor(L / 6e4), z = Math.floor(L / 36e5), T = Math.floor(L / 864e5);
        return D < 1 ? "just now" : D < 60 ? `${D} ${D === 1 ? "minute" : "minutes"} ago` : z < 24 ? `${z} ${z === 1 ? "hour" : "hours"} ago` : T < 30 ? `${T} ${T === 1 ? "day" : "days"} ago` : R.toLocaleDateString();
      } catch {
        return G;
      }
    }
    function E() {
      const G = x.value.trim();
      G && (s("create", G), x.value = "", w.value = !1);
    }
    function p() {
      x.value = "", w.value = !1;
    }
    function $(G) {
      s("viewDetails", G);
    }
    function y(G) {
      confirm(`Delete environment "${G}"?

This action cannot be undone.`) && s("delete", G);
    }
    async function M() {
      g.value = !0, d.value = null;
      try {
        m.value = await l();
      } catch (G) {
        d.value = G instanceof Error ? G.message : "Failed to load environments";
      } finally {
        g.value = !1;
      }
    }
    return ve(M), (G, R) => {
      const V = Zt("SectionGroup");
      return o(), n(W, null, [
        f(pe, null, {
          header: a(() => [
            f(ye, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: R[1] || (R[1] = (L) => v.value = !0)
            }, {
              actions: a(() => [
                f(P, {
                  variant: "ghost",
                  size: "sm",
                  onClick: R[0] || (R[0] = (L) => w.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...R[7] || (R[7] = [
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
                }),
                f(P, {
                  variant: "ghost",
                  size: "sm",
                  onClick: M,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...R[8] || (R[8] = [
                    e("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z" })
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: a(() => [
            f(je, {
              modelValue: u.value,
              "onUpdate:modelValue": R[2] || (R[2] = (L) => u.value = L),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            g.value ? (o(), b(Te, {
              key: 0,
              message: "Loading environments..."
            })) : d.value ? (o(), b(Re, {
              key: 1,
              message: d.value,
              retry: !0,
              onRetry: M
            }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
              w.value ? (o(), n("div", qd, [
                e("div", Yd, [
                  R[10] || (R[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  f(P, {
                    variant: "ghost",
                    size: "xs",
                    onClick: p
                  }, {
                    default: a(() => [...R[9] || (R[9] = [
                      h(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", Jd, [
                  f(ot, {
                    modelValue: x.value,
                    "onUpdate:modelValue": R[3] || (R[3] = (L) => x.value = L),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ne(E, ["enter"]),
                      Ne(p, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Xd, [
                    f(P, {
                      variant: "primary",
                      size: "sm",
                      onClick: E,
                      disabled: !x.value.trim()
                    }, {
                      default: a(() => [...R[11] || (R[11] = [
                        h(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    f(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: p
                    }, {
                      default: a(() => [...R[12] || (R[12] = [
                        h(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              m.value.length ? (o(), b(Ke, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  h(" Total: " + i(m.value.length) + " " + i(m.value.length === 1 ? "environment" : "environments") + " ", 1),
                  S.value ? (o(), n(W, { key: 0 }, [
                    R[13] || (R[13] = h(" • Current: ", -1)),
                    e("strong", null, i(S.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              _.value.length ? (o(), b(V, {
                key: 2,
                title: "ENVIRONMENTS",
                count: _.value.length
              }, {
                default: a(() => [
                  (o(!0), n(W, null, J(_.value, (L) => (o(), b(Kd, {
                    key: L.name,
                    "environment-name": L.name,
                    "is-current": L.is_current,
                    "current-branch": L.current_branch,
                    "workflow-count": L.workflow_count,
                    "node-count": L.node_count,
                    "model-count": L.model_count,
                    "last-used": k(L.last_used),
                    "show-last-used": !!L.last_used
                  }, {
                    actions: a(() => [
                      L.is_current ? c("", !0) : (o(), b(P, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (D) => G.$emit("switch", L.name)
                      }, {
                        default: a(() => [...R[14] || (R[14] = [
                          h(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      f(P, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (D) => $(L.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...R[15] || (R[15] = [
                          e("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 16 16",
                            fill: "currentColor"
                          }, [
                            e("path", { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }),
                            e("path", { d: "M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" })
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]),
                      !L.is_current && m.value.length > 1 ? (o(), b(P, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (D) => y(L.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", Zd, [...R[16] || (R[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : c("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : c("", !0),
              _.value.length ? c("", !0) : (o(), b(Ie, {
                key: 3,
                icon: "🌍",
                message: u.value ? `No environments match '${u.value}'` : "No environments found. Create one to get started!"
              }, Mt({ _: 2 }, [
                u.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    f(P, {
                      variant: "primary",
                      onClick: R[4] || (R[4] = (L) => w.value = !0)
                    }, {
                      default: a(() => [...R[17] || (R[17] = [
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
        f(Le, {
          show: v.value,
          title: "About Environments",
          onClose: R[6] || (R[6] = (L) => v.value = !1)
        }, {
          content: a(() => [...R[18] || (R[18] = [
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
          actions: a(() => [
            f(P, {
              variant: "secondary",
              onClick: R[5] || (R[5] = (L) => v.value = !1)
            }, {
              default: a(() => [...R[19] || (R[19] = [
                h(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), eu = /* @__PURE__ */ K(Qd, [["__scopeId", "data-v-97d6527d"]]), tu = { class: "file-path" }, ou = { class: "file-path-text" }, su = ["title"], nu = /* @__PURE__ */ j({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, s = C(!1);
    async function l() {
      try {
        await navigator.clipboard.writeText(r.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (m) {
        console.error("Failed to copy:", m);
      }
    }
    return (m, g) => (o(), n("div", tu, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", ou, i(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: l
      }, i(s.value ? "✓" : "📋"), 9, su)) : c("", !0)
    ]));
  }
}), au = /* @__PURE__ */ K(nu, [["__scopeId", "data-v-f0982173"]]), lu = { class: "output-path-input" }, iu = { class: "export-actions" }, ru = {
  key: 1,
  class: "export-warning"
}, cu = /* @__PURE__ */ j({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = we(), s = C(""), l = C(!1), m = C(null), g = C(!1);
    async function d() {
      l.value = !0, m.value = null;
      try {
        const v = await r(s.value || void 0);
        m.value = v;
      } catch (v) {
        m.value = {
          status: "error",
          message: v instanceof Error ? v.message : "Unknown error occurred"
        };
      } finally {
        l.value = !1;
      }
    }
    async function u() {
      var v;
      if ((v = m.value) != null && v.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (w) {
          console.error("Failed to copy path:", w);
        }
    }
    return (v, w) => (o(), n(W, null, [
      f(pe, null, {
        header: a(() => [
          f(ye, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              f(P, {
                variant: "ghost",
                size: "sm",
                onClick: w[0] || (w[0] = (x) => g.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...w[5] || (w[5] = [
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
        content: a(() => [
          f(de, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              f(me, { status: "synced" }, {
                icon: a(() => [...w[6] || (w[6] = [
                  h("📦", -1)
                ])]),
                title: a(() => [...w[7] || (w[7] = [
                  h("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...w[8] || (w[8] = [
                  h(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  f(ee, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  f(ee, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  f(ee, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  f(ee, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(de, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              f(me, { status: "synced" }, {
                icon: a(() => [...w[9] || (w[9] = [
                  h("📁", -1)
                ])]),
                title: a(() => [...w[10] || (w[10] = [
                  h("Output Destination", -1)
                ])]),
                subtitle: a(() => [...w[11] || (w[11] = [
                  h(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", lu, [
                    f(ot, {
                      modelValue: s.value,
                      "onUpdate:modelValue": w[1] || (w[1] = (x) => s.value = x),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(de, { title: "EXPORT" }, {
            default: a(() => [
              e("div", iu, [
                f(P, {
                  variant: "primary",
                  size: "md",
                  loading: l.value,
                  disabled: l.value,
                  onClick: d
                }, {
                  default: a(() => [
                    w[12] || (w[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    h(" " + i(l.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), b(P, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: l.value,
                  onClick: w[2] || (w[2] = (x) => s.value = "")
                }, {
                  default: a(() => [...w[13] || (w[13] = [
                    h(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          m.value ? (o(), b(de, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              f(me, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Mt({
                icon: a(() => [
                  h(i(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  h(i(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  h(i(m.value.status === "success" ? "Your environment has been exported" : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    f(ee, { label: "Saved to:" }, {
                      default: a(() => [
                        f(au, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (o(), b(ee, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (o(), n("div", ru, [...w[14] || (w[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    f(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: u
                    }, {
                      default: a(() => [...w[15] || (w[15] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(P, {
                      variant: "ghost",
                      size: "sm",
                      onClick: w[3] || (w[3] = (x) => m.value = null)
                    }, {
                      default: a(() => [...w[16] || (w[16] = [
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
          })) : c("", !0)
        ]),
        _: 1
      }),
      f(Le, {
        show: g.value,
        title: "About Environment Export",
        onClose: w[4] || (w[4] = (x) => g.value = !1)
      }, {
        content: a(() => [...w[17] || (w[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            h(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), du = /* @__PURE__ */ K(cu, [["__scopeId", "data-v-1777a9d5"]]), uu = { class: "file-input-wrapper" }, mu = ["accept", "multiple", "disabled"], vu = /* @__PURE__ */ j({
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
  setup(t, { expose: r, emit: s }) {
    const l = s, m = C(null);
    function g() {
      var u;
      (u = m.value) == null || u.click();
    }
    function d(u) {
      const v = u.target;
      v.files && v.files.length > 0 && (l("change", v.files), v.value = "");
    }
    return r({
      triggerInput: g
    }), (u, v) => (o(), n("div", uu, [
      e("input", {
        ref_key: "fileInputRef",
        ref: m,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: d
      }, null, 40, mu),
      f(P, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: a(() => [
          oe(u.$slots, "default", {}, () => [
            v[0] || (v[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            h(" " + i(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), fu = /* @__PURE__ */ K(vu, [["__scopeId", "data-v-cd192091"]]), gu = {
  key: 0,
  class: "drop-zone-empty"
}, hu = { class: "drop-zone-text" }, pu = { class: "drop-zone-primary" }, yu = { class: "drop-zone-secondary" }, wu = { class: "drop-zone-actions" }, bu = {
  key: 1,
  class: "drop-zone-file"
}, ku = { class: "file-info" }, $u = { class: "file-details" }, _u = { class: "file-name" }, Cu = { class: "file-size" }, xu = /* @__PURE__ */ j({
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
    const s = r, l = C(!1), m = C(null), g = C(0), d = O(() => m.value !== null), u = O(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.name) || "";
    }), v = O(() => {
      if (!m.value) return "";
      const $ = m.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function w($) {
      var y;
      g.value++, (y = $.dataTransfer) != null && y.types.includes("Files") && (l.value = !0);
    }
    function x($) {
      $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function S() {
      g.value--, g.value === 0 && (l.value = !1);
    }
    function _($) {
      var M;
      g.value = 0, l.value = !1;
      const y = (M = $.dataTransfer) == null ? void 0 : M.files;
      y && y.length > 0 && E(y[0]);
    }
    function k($) {
      $.length > 0 && E($[0]);
    }
    function E($) {
      m.value = $, s("fileSelected", $);
    }
    function p() {
      m.value = null, s("clear");
    }
    return ($, y) => (o(), n("div", {
      class: X(["file-drop-zone", { "drop-active": l.value, "has-file": d.value }]),
      onDragenter: he(w, ["prevent"]),
      onDragover: he(x, ["prevent"]),
      onDragleave: he(S, ["prevent"]),
      onDrop: he(_, ["prevent"])
    }, [
      d.value ? (o(), n("div", bu, [
        e("div", ku, [
          y[1] || (y[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", $u, [
            e("div", _u, i(u.value), 1),
            e("div", Cu, i(v.value), 1)
          ])
        ]),
        f(P, {
          variant: "ghost",
          size: "xs",
          onClick: p,
          title: "Remove file"
        }, {
          default: a(() => [...y[2] || (y[2] = [
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
      ])) : (o(), n("div", gu, [
        y[0] || (y[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", hu, [
          e("p", pu, i(t.primaryText), 1),
          e("p", yu, i(t.secondaryText), 1)
        ]),
        e("div", wu, [
          f(fu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: k
          }, {
            default: a(() => [
              h(i(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Su = /* @__PURE__ */ K(xu, [["__scopeId", "data-v-e00abbca"]]), Iu = { class: "import-preview" }, Eu = { class: "preview-header" }, Mu = {
  key: 0,
  class: "source-env"
}, zu = { class: "preview-content" }, Nu = { class: "preview-section" }, Lu = { class: "section-header" }, Tu = { class: "section-info" }, Ru = { class: "section-count" }, Bu = {
  key: 0,
  class: "item-list"
}, Ou = { class: "item-name" }, Du = {
  key: 0,
  class: "item-more"
}, Uu = { class: "preview-section" }, Vu = { class: "section-header" }, Au = { class: "section-info" }, Pu = { class: "section-count" }, Wu = {
  key: 0,
  class: "item-list"
}, Fu = { class: "item-details" }, Gu = { class: "item-name" }, Hu = { class: "item-meta" }, ju = {
  key: 0,
  class: "item-more"
}, Ku = { class: "preview-section" }, qu = { class: "section-header" }, Yu = { class: "section-info" }, Ju = { class: "section-count" }, Xu = {
  key: 0,
  class: "item-list"
}, Zu = { class: "item-name" }, Qu = {
  key: 0,
  class: "item-more"
}, em = {
  key: 0,
  class: "preview-section"
}, tm = { class: "git-info" }, om = /* @__PURE__ */ j({
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
    const r = t, s = O(() => r.workflows.length), l = O(() => r.models.length), m = O(() => r.nodes.length);
    function g(d) {
      return d < 1024 ? `${d} B` : d < 1024 * 1024 ? `${(d / 1024).toFixed(1)} KB` : d < 1024 * 1024 * 1024 ? `${(d / (1024 * 1024)).toFixed(1)} MB` : `${(d / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (d, u) => (o(), n("div", Iu, [
      e("div", Eu, [
        f(ke, null, {
          default: a(() => [...u[0] || (u[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Mu, [
          u[1] || (u[1] = h(" From: ", -1)),
          f(ht, null, {
            default: a(() => [
              h(i(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", zu, [
        e("div", Nu, [
          e("div", Lu, [
            u[3] || (u[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Tu, [
              u[2] || (u[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Ru, i(s.value) + " file" + i(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Bu, [
            (o(!0), n(W, null, J(t.workflows.slice(0, t.maxPreviewItems), (v) => (o(), n("div", {
              key: v,
              class: "preview-item"
            }, [
              u[4] || (u[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Ou, i(v), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Du, " +" + i(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Uu, [
          e("div", Vu, [
            u[6] || (u[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Au, [
              u[5] || (u[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Pu, i(l.value) + " file" + i(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Wu, [
            (o(!0), n(W, null, J(t.models.slice(0, t.maxPreviewItems), (v) => (o(), n("div", {
              key: v.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Fu, [
                e("span", Gu, i(v.filename), 1),
                e("span", Hu, i(g(v.size)) + " • " + i(v.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", ju, " +" + i(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Ku, [
          e("div", qu, [
            u[9] || (u[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Yu, [
              u[8] || (u[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Ju, i(m.value) + " node" + i(m.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", Xu, [
            (o(!0), n(W, null, J(t.nodes.slice(0, t.maxPreviewItems), (v) => (o(), n("div", {
              key: v,
              class: "preview-item"
            }, [
              u[10] || (u[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Zu, i(v), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", Qu, " +" + i(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", em, [
          u[11] || (u[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", tm, [
            t.gitBranch ? (o(), b(ee, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                f(ht, null, {
                  default: a(() => [
                    h(i(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), b(ee, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                f(Tt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), sm = /* @__PURE__ */ K(om, [["__scopeId", "data-v-182fe113"]]), nm = { class: "import-options" }, am = { class: "options-container" }, lm = { class: "option-section" }, im = { class: "conflict-options" }, rm = ["value", "checked", "onChange"], cm = { class: "conflict-content" }, dm = { class: "conflict-label" }, um = { class: "conflict-description" }, mm = { class: "option-section" }, vm = { class: "component-toggles" }, fm = /* @__PURE__ */ j({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: r }) {
    const s = r, l = [
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
    return (m, g) => (o(), n("div", nm, [
      f(ke, null, {
        default: a(() => [...g[4] || (g[4] = [
          h("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", am, [
        e("div", lm, [
          f(gt, null, {
            default: a(() => [...g[5] || (g[5] = [
              h("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", im, [
            (o(), n(W, null, J(l, (d) => e("label", {
              key: d.value,
              class: X(["conflict-option", { active: t.conflictMode === d.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: d.value,
                checked: t.conflictMode === d.value,
                onChange: (u) => s("update:conflictMode", d.value)
              }, null, 40, rm),
              e("div", cm, [
                e("span", dm, i(d.label), 1),
                e("span", um, i(d.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", mm, [
          f(gt, null, {
            default: a(() => [...g[6] || (g[6] = [
              h("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", vm, [
            f(De, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                f(Fe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": g[0] || (g[0] = (d) => s("update:includeWorkflows", d))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(De, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                f(Fe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": g[1] || (g[1] = (d) => s("update:includeModels", d))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(De, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                f(Fe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": g[2] || (g[2] = (d) => s("update:includeNodes", d))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(De, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                f(Fe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": g[3] || (g[3] = (d) => s("update:includeGitHistory", d))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), gm = /* @__PURE__ */ K(fm, [["__scopeId", "data-v-0ec212b0"]]), hm = {
  key: 0,
  class: "import-empty"
}, pm = { class: "import-help" }, ym = {
  key: 1,
  class: "import-configure"
}, wm = { class: "selected-file-bar" }, bm = { class: "file-bar-content" }, km = { class: "file-bar-info" }, $m = { class: "file-bar-name" }, _m = { class: "file-bar-size" }, Cm = { class: "import-actions" }, xm = {
  key: 2,
  class: "import-progress"
}, Sm = { class: "progress-content" }, Im = { class: "progress-info" }, Em = { class: "progress-title" }, Mm = { class: "progress-detail" }, zm = { class: "progress-bar" }, Nm = { class: "progress-status" }, Lm = {
  key: 3,
  class: "import-complete"
}, Tm = { class: "complete-message" }, Rm = { class: "complete-title" }, Bm = { class: "complete-details" }, Om = { class: "complete-actions" }, Dm = /* @__PURE__ */ j({
  __name: "ImportSection",
  setup(t) {
    const r = C(null), s = C(!1), l = C(!1), m = C(!1), g = C(""), d = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), u = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), v = C({
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
    }), w = O(() => d.value.includeWorkflows || d.value.includeModels || d.value.includeNodes || d.value.includeGitHistory);
    function x(p) {
      r.value = p;
    }
    function S() {
      r.value = null, l.value = !1, m.value = !1, g.value = "";
    }
    function _() {
      S(), s.value = !1, u.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function k() {
      if (r.value) {
        s.value = !0, l.value = !1;
        try {
          const p = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${v.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${v.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${v.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const $ of p)
            u.value = $, await new Promise((y) => setTimeout(y, 800));
          u.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise(($) => setTimeout($, 500)), m.value = !0, g.value = `Successfully imported ${v.value.workflows.length} workflows, ${v.value.models.length} models, and ${v.value.nodes.length} custom nodes.`;
        } catch (p) {
          m.value = !1, g.value = p instanceof Error ? p.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, l.value = !0;
        }
      }
    }
    function E(p) {
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (p, $) => (o(), b(pe, null, {
      header: a(() => [
        f(ye, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !r.value && !s.value ? (o(), n("div", hm, [
          f(Su, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: x
          }),
          e("div", pm, [
            f(ke, null, {
              default: a(() => [...$[5] || ($[5] = [
                h("How to Import", -1)
              ])]),
              _: 1
            }),
            $[6] || ($[6] = e("div", { class: "help-content" }, [
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
        ])) : r.value && !s.value && !l.value ? (o(), n("div", ym, [
          e("div", wm, [
            e("div", bm, [
              $[7] || ($[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", km, [
                e("div", $m, i(r.value.name), 1),
                e("div", _m, i(E(r.value.size)), 1)
              ])
            ]),
            f(P, {
              variant: "ghost",
              size: "sm",
              onClick: S
            }, {
              default: a(() => [...$[8] || ($[8] = [
                h(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f(sm, {
            "source-environment": v.value.sourceEnvironment,
            workflows: v.value.workflows,
            models: v.value.models,
            nodes: v.value.nodes,
            "git-branch": v.value.gitBranch,
            "git-commit": v.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(gm, {
            "conflict-mode": d.value.conflictMode,
            "onUpdate:conflictMode": $[0] || ($[0] = (y) => d.value.conflictMode = y),
            "include-workflows": d.value.includeWorkflows,
            "onUpdate:includeWorkflows": $[1] || ($[1] = (y) => d.value.includeWorkflows = y),
            "include-models": d.value.includeModels,
            "onUpdate:includeModels": $[2] || ($[2] = (y) => d.value.includeModels = y),
            "include-nodes": d.value.includeNodes,
            "onUpdate:includeNodes": $[3] || ($[3] = (y) => d.value.includeNodes = y),
            "include-git-history": d.value.includeGitHistory,
            "onUpdate:includeGitHistory": $[4] || ($[4] = (y) => d.value.includeGitHistory = y)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !d.value.includeModels && v.value.models.length > 0 ? (o(), b(Ae, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${v.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Cm, [
            f(P, {
              variant: "primary",
              size: "md",
              disabled: !w.value,
              onClick: k
            }, {
              default: a(() => [...$[9] || ($[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                h(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            f(P, {
              variant: "secondary",
              size: "md",
              onClick: S
            }, {
              default: a(() => [...$[10] || ($[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", xm, [
          e("div", Sm, [
            $[11] || ($[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Im, [
              e("div", Em, i(u.value.message), 1),
              e("div", Mm, i(u.value.detail), 1)
            ])
          ]),
          e("div", zm, [
            e("div", {
              class: "progress-bar-fill",
              style: Pe({ width: `${u.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Nm, i(u.value.percent) + "% complete ", 1)
        ])) : l.value ? (o(), n("div", Lm, [
          e("div", {
            class: X(["complete-icon", m.value ? "success" : "error"])
          }, i(m.value ? "✓" : "✕"), 3),
          e("div", Tm, [
            e("div", Rm, i(m.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Bm, i(g.value), 1)
          ]),
          e("div", Om, [
            f(P, {
              variant: "primary",
              size: "md",
              onClick: _
            }, {
              default: a(() => [...$[12] || ($[12] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Um = /* @__PURE__ */ K(Dm, [["__scopeId", "data-v-18e18eb5"]]), Vm = { class: "header-info" }, Am = { class: "commit-hash" }, Pm = {
  key: 0,
  class: "commit-refs"
}, Wm = { class: "commit-message" }, Fm = { class: "commit-date" }, Gm = {
  key: 0,
  class: "loading"
}, Hm = {
  key: 1,
  class: "changes-section"
}, jm = { class: "stats-row" }, Km = { class: "stat" }, qm = { class: "stat insertions" }, Ym = { class: "stat deletions" }, Jm = {
  key: 0,
  class: "change-group"
}, Xm = {
  key: 1,
  class: "change-group"
}, Zm = {
  key: 0,
  class: "version"
}, Qm = {
  key: 2,
  class: "change-group"
}, ev = { class: "change-item" }, tv = /* @__PURE__ */ j({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: s } = we(), l = C(null), m = C(!0), g = O(() => {
      if (!l.value) return !1;
      const u = l.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), d = O(() => {
      if (!l.value) return !1;
      const u = l.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return ve(async () => {
      try {
        l.value = await s(r.commit.hash);
      } finally {
        m.value = !1;
      }
    }), (u, v) => (o(), b(ct, {
      size: "md",
      "show-close-button": !1,
      onClose: v[3] || (v[3] = (w) => u.$emit("close"))
    }, {
      header: a(() => {
        var w, x, S, _;
        return [
          e("div", Vm, [
            v[4] || (v[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Am, i(((w = l.value) == null ? void 0 : w.short_hash) || t.commit.short_hash || ((x = t.commit.hash) == null ? void 0 : x.slice(0, 7))), 1),
            (_ = (S = l.value) == null ? void 0 : S.refs) != null && _.length ? (o(), n("span", Pm, [
              (o(!0), n(W, null, J(l.value.refs, (k) => (o(), n("span", {
                key: k,
                class: "ref-badge"
              }, i(k), 1))), 128))
            ])) : c("", !0)
          ]),
          f(ue, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (k) => u.$emit("close"))
          }, {
            default: a(() => [...v[5] || (v[5] = [
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
      body: a(() => {
        var w, x;
        return [
          e("div", Wm, i(((w = l.value) == null ? void 0 : w.message) || t.commit.message), 1),
          e("div", Fm, i(((x = l.value) == null ? void 0 : x.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          m.value ? (o(), n("div", Gm, "Loading details...")) : l.value ? (o(), n("div", Hm, [
            e("div", jm, [
              e("span", Km, i(l.value.stats.files_changed) + " files", 1),
              e("span", qm, "+" + i(l.value.stats.insertions), 1),
              e("span", Ym, "-" + i(l.value.stats.deletions), 1)
            ]),
            g.value ? (o(), n("div", Jm, [
              f(et, { variant: "section" }, {
                default: a(() => [...v[6] || (v[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, J(l.value.changes.workflows.added, (S) => (o(), n("div", {
                key: "add-" + S,
                class: "change-item added"
              }, [
                v[7] || (v[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, i(S), 1)
              ]))), 128)),
              (o(!0), n(W, null, J(l.value.changes.workflows.modified, (S) => (o(), n("div", {
                key: "mod-" + S,
                class: "change-item modified"
              }, [
                v[8] || (v[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, i(S), 1)
              ]))), 128)),
              (o(!0), n(W, null, J(l.value.changes.workflows.deleted, (S) => (o(), n("div", {
                key: "del-" + S,
                class: "change-item deleted"
              }, [
                v[9] || (v[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, i(S), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value ? (o(), n("div", Xm, [
              f(et, { variant: "section" }, {
                default: a(() => [...v[10] || (v[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, J(l.value.changes.nodes.added, (S) => (o(), n("div", {
                key: "add-" + S.name,
                class: "change-item added"
              }, [
                v[11] || (v[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, i(S.name), 1),
                S.version ? (o(), n("span", Zm, "(" + i(S.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(W, null, J(l.value.changes.nodes.removed, (S) => (o(), n("div", {
                key: "rem-" + S.name,
                class: "change-item deleted"
              }, [
                v[12] || (v[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, i(S.name), 1)
              ]))), 128))
            ])) : c("", !0),
            l.value.changes.models.resolved > 0 ? (o(), n("div", Qm, [
              f(et, { variant: "section" }, {
                default: a(() => [...v[13] || (v[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", ev, [
                v[14] || (v[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, i(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        f(ue, {
          variant: "secondary",
          onClick: v[1] || (v[1] = (w) => u.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...v[15] || (v[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(ue, {
          variant: "primary",
          onClick: v[2] || (v[2] = (w) => u.$emit("checkout", t.commit))
        }, {
          default: a(() => [...v[16] || (v[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ov = /* @__PURE__ */ K(tv, [["__scopeId", "data-v-d256ff6d"]]), sv = { class: "dialog-message" }, nv = {
  key: 0,
  class: "dialog-details"
}, av = {
  key: 1,
  class: "dialog-warning"
}, lv = /* @__PURE__ */ j({
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
    return (r, s) => (o(), b(ct, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (l) => r.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", sv, i(t.message), 1),
        t.details && t.details.length ? (o(), n("div", nv, [
          (o(!0), n(W, null, J(t.details, (l, m) => (o(), n("div", {
            key: m,
            class: "detail-item"
          }, " • " + i(l), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", av, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + i(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        f(ue, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (l) => r.$emit("cancel"))
        }, {
          default: a(() => [
            h(i(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), b(ue, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (l) => r.$emit("secondary"))
        }, {
          default: a(() => [
            h(i(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        f(ue, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
        }, {
          default: a(() => [
            h(i(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), iv = /* @__PURE__ */ K(lv, [["__scopeId", "data-v-3670b9f5"]]), rv = { class: "base-textarea-wrapper" }, cv = ["value", "rows", "placeholder", "disabled", "maxlength"], dv = {
  key: 0,
  class: "base-textarea-count"
}, uv = /* @__PURE__ */ j({
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
    return (r, s) => (o(), n("div", rv, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ne(he((l) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ne(he((l) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, cv),
      t.showCharCount && t.maxLength ? (o(), n("div", dv, i(t.modelValue.length) + " / " + i(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), St = /* @__PURE__ */ K(uv, [["__scopeId", "data-v-5516e6fc"]]), mv = ["checked", "disabled"], vv = { class: "base-checkbox-box" }, fv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, gv = {
  key: 0,
  class: "base-checkbox-label"
}, hv = /* @__PURE__ */ j({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, s) => (o(), n("label", {
      class: X(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.checked))
      }, null, 40, mv),
      e("span", vv, [
        t.modelValue ? (o(), n("svg", fv, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      r.$slots.default ? (o(), n("span", gv, [
        oe(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ K(hv, [["__scopeId", "data-v-bf17c831"]]), pv = { class: "popover-header" }, yv = { class: "popover-body" }, wv = {
  key: 0,
  class: "changes-summary"
}, bv = {
  key: 0,
  class: "change-item"
}, kv = {
  key: 1,
  class: "change-item"
}, $v = {
  key: 2,
  class: "change-item"
}, _v = {
  key: 3,
  class: "change-item"
}, Cv = {
  key: 4,
  class: "change-item"
}, xv = {
  key: 1,
  class: "no-changes"
}, Sv = {
  key: 2,
  class: "loading"
}, Iv = {
  key: 3,
  class: "issues-warning"
}, Ev = { class: "warning-header" }, Mv = { class: "warning-title" }, zv = { class: "issues-list" }, Nv = { class: "message-section" }, Lv = { class: "popover-footer" }, Tv = {
  key: 1,
  class: "commit-popover"
}, Rv = { class: "popover-header" }, Bv = { class: "popover-body" }, Ov = {
  key: 0,
  class: "changes-summary"
}, Dv = {
  key: 0,
  class: "change-item"
}, Uv = {
  key: 1,
  class: "change-item"
}, Vv = {
  key: 2,
  class: "change-item"
}, Av = {
  key: 3,
  class: "change-item"
}, Pv = {
  key: 4,
  class: "change-item"
}, Wv = {
  key: 1,
  class: "no-changes"
}, Fv = {
  key: 2,
  class: "loading"
}, Gv = {
  key: 3,
  class: "issues-warning"
}, Hv = { class: "warning-header" }, jv = { class: "warning-title" }, Kv = { class: "issues-list" }, qv = { class: "message-section" }, Yv = { class: "popover-footer" }, Jv = /* @__PURE__ */ j({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const s = t, l = r, { commit: m } = we(), g = C(""), d = C(!1), u = C(!1), v = C(null), w = O(() => {
      if (!s.status) return !1;
      const E = s.status.workflows;
      return E.new.length > 0 || E.modified.length > 0 || E.deleted.length > 0 || s.status.has_changes;
    }), x = O(() => {
      var E;
      return (E = s.status) != null && E.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (p) => p.has_issues && (p.sync_state === "new" || p.sync_state === "modified")
      ) : [];
    }), S = O(() => x.value.length > 0), _ = O(() => S.value && !u.value);
    async function k() {
      var E, p, $;
      if (!(S.value && !u.value) && !(!w.value || !g.value.trim() || d.value)) {
        d.value = !0, v.value = null;
        try {
          const y = await m(g.value.trim(), u.value);
          y.status === "success" ? (v.value = {
            type: "success",
            message: `Committed: ${((E = y.summary) == null ? void 0 : E.new) || 0} new, ${((p = y.summary) == null ? void 0 : p.modified) || 0} modified, ${(($ = y.summary) == null ? void 0 : $.deleted) || 0} deleted`
          }, g.value = "", u.value = !1, setTimeout(() => l("committed"), 1e3)) : y.status === "no_changes" ? v.value = { type: "error", message: "No changes to commit" } : y.status === "blocked" ? v.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : v.value = { type: "error", message: y.message || "Commit failed" };
        } catch (y) {
          v.value = { type: "error", message: y instanceof Error ? y.message : "Commit failed" };
        } finally {
          d.value = !1;
        }
      }
    }
    return (E, p) => t.asModal ? (o(), b(We, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: p[5] || (p[5] = ($) => l("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: p[4] || (p[4] = he(() => {
          }, ["stop"]))
        }, [
          e("div", pv, [
            p[11] || (p[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: p[0] || (p[0] = ($) => l("close"))
            }, [...p[10] || (p[10] = [
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
          e("div", yv, [
            t.status && w.value ? (o(), n("div", wv, [
              t.status.workflows.new.length ? (o(), n("div", bv, [
                p[12] || (p[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, i(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", kv, [
                p[13] || (p[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, i(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", $v, [
                p[14] || (p[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, i(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", _v, [
                p[15] || (p[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, i(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Cv, [
                p[16] || (p[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, i(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", xv, " No changes to commit ")) : (o(), n("div", Sv, " Loading... ")),
            S.value ? (o(), n("div", Iv, [
              e("div", Ev, [
                p[17] || (p[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Mv, i(x.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", zv, [
                (o(!0), n(W, null, J(x.value, ($) => (o(), n("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, i($.name), 1),
                  h(": " + i($.issue_summary), 1)
                ]))), 128))
              ]),
              f(It, {
                modelValue: u.value,
                "onUpdate:modelValue": p[1] || (p[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...p[18] || (p[18] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Nv, [
              f(St, {
                modelValue: g.value,
                "onUpdate:modelValue": p[2] || (p[2] = ($) => g.value = $),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : w.value ? "Describe your changes..." : "No changes",
                disabled: !w.value || d.value || _.value,
                rows: 3,
                onCtrlEnter: k
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            v.value ? (o(), n("div", {
              key: 4,
              class: X(["result", v.value.type])
            }, i(v.value.message), 3)) : c("", !0)
          ]),
          e("div", Lv, [
            f(ue, {
              variant: "secondary",
              onClick: p[3] || (p[3] = ($) => l("close"))
            }, {
              default: a(() => [...p[19] || (p[19] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(ue, {
              variant: u.value ? "danger" : "primary",
              disabled: !w.value || !g.value.trim() || d.value || _.value,
              loading: d.value,
              onClick: k
            }, {
              default: a(() => [
                h(i(d.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Tv, [
      e("div", Rv, [
        p[21] || (p[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: p[6] || (p[6] = ($) => l("close"))
        }, [...p[20] || (p[20] = [
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
      e("div", Bv, [
        t.status && w.value ? (o(), n("div", Ov, [
          t.status.workflows.new.length ? (o(), n("div", Dv, [
            p[22] || (p[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, i(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", Uv, [
            p[23] || (p[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, i(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", Vv, [
            p[24] || (p[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, i(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", Av, [
            p[25] || (p[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, i(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", Pv, [
            p[26] || (p[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, i(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", Wv, " No changes to commit ")) : (o(), n("div", Fv, " Loading... ")),
        S.value ? (o(), n("div", Gv, [
          e("div", Hv, [
            p[27] || (p[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", jv, i(x.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", Kv, [
            (o(!0), n(W, null, J(x.value, ($) => (o(), n("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, i($.name), 1),
              h(": " + i($.issue_summary), 1)
            ]))), 128))
          ]),
          f(It, {
            modelValue: u.value,
            "onUpdate:modelValue": p[7] || (p[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...p[28] || (p[28] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", qv, [
          f(St, {
            modelValue: g.value,
            "onUpdate:modelValue": p[8] || (p[8] = ($) => g.value = $),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : w.value ? "Describe your changes..." : "No changes",
            disabled: !w.value || d.value || _.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        v.value ? (o(), n("div", {
          key: 4,
          class: X(["result", v.value.type])
        }, i(v.value.message), 3)) : c("", !0)
      ]),
      e("div", Yv, [
        f(ue, {
          variant: "secondary",
          onClick: p[9] || (p[9] = ($) => l("close"))
        }, {
          default: a(() => [...p[29] || (p[29] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(ue, {
          variant: u.value ? "danger" : "primary",
          disabled: !w.value || !g.value.trim() || d.value || _.value,
          loading: d.value,
          onClick: k
        }, {
          default: a(() => [
            h(i(d.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Bt = /* @__PURE__ */ K(Jv, [["__scopeId", "data-v-38b45183"]]), Xv = { class: "modal-header" }, Zv = { class: "modal-body" }, Qv = { class: "switch-message" }, ef = { class: "switch-details" }, tf = { class: "modal-actions" }, of = /* @__PURE__ */ j({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, s) => (o(), b(We, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = he(() => {
          }, ["stop"]))
        }, [
          e("div", Xv, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Zv, [
            e("p", Qv, [
              s[6] || (s[6] = h(" Switch from ", -1)),
              e("strong", null, i(t.fromEnvironment), 1),
              s[7] || (s[7] = h(" to ", -1)),
              e("strong", null, i(t.toEnvironment), 1),
              s[8] || (s[8] = h("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", ef, ' Your current work will be preserved. You can switch back to "' + i(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", tf, [
            f(P, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (l) => r.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(P, {
              variant: "primary",
              onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                h(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), sf = /* @__PURE__ */ K(of, [["__scopeId", "data-v-e9c5253e"]]), nf = { class: "progress-bar" }, af = /* @__PURE__ */ j({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, s = O(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (l, m) => (o(), n("div", nf, [
      e("div", {
        class: X(["progress-fill", t.variant]),
        style: Pe({ width: s.value })
      }, null, 6)
    ]));
  }
}), lf = /* @__PURE__ */ K(af, [["__scopeId", "data-v-1beb0512"]]), rf = {
  key: 0,
  class: "modal-overlay"
}, cf = { class: "modal-content" }, df = { class: "modal-body" }, uf = { class: "progress-info" }, mf = { class: "progress-percentage" }, vf = { class: "progress-state" }, ff = { class: "switch-steps" }, gf = { class: "step-icon" }, hf = { class: "step-label" }, pf = /* @__PURE__ */ j({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, s = O(() => {
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
      return r.message || g[r.state] || r.state;
    }), l = O(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), m = O(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], d = g.findIndex((u) => u.state === r.state);
      return g.map((u, v) => {
        let w = "pending", x = "○";
        return v < d ? (w = "completed", x = "✓") : v === d && (w = "active", x = "⟳"), {
          ...u,
          status: w,
          icon: x
        };
      });
    });
    return (g, d) => (o(), b(We, { to: "body" }, [
      t.show ? (o(), n("div", rf, [
        e("div", cf, [
          d[1] || (d[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", df, [
            f(lf, {
              progress: t.progress,
              variant: l.value
            }, null, 8, ["progress", "variant"]),
            e("div", uf, [
              e("div", mf, i(t.progress) + "%", 1),
              e("div", vf, i(s.value), 1)
            ]),
            e("div", ff, [
              (o(!0), n(W, null, J(m.value, (u) => (o(), n("div", {
                key: u.state,
                class: X(["switch-step", u.status])
              }, [
                e("span", gf, i(u.icon), 1),
                e("span", hf, i(u.label), 1)
              ], 2))), 128))
            ]),
            d[0] || (d[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), yf = /* @__PURE__ */ K(pf, [["__scopeId", "data-v-768a5078"]]), wf = { class: "modal-header" }, bf = { class: "modal-body" }, kf = {
  key: 0,
  class: "node-section"
}, $f = { class: "node-list" }, _f = {
  key: 1,
  class: "node-section"
}, Cf = { class: "node-list" }, xf = { class: "modal-actions" }, Sf = /* @__PURE__ */ j({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, s) => (o(), b(We, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = he(() => {
          }, ["stop"]))
        }, [
          e("div", wf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", bf, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", kf, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", $f, [
                (o(!0), n(W, null, J(t.mismatchDetails.missing_nodes, (l) => (o(), n("div", {
                  key: l,
                  class: "node-item add"
                }, " + " + i(l), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", _f, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Cf, [
                (o(!0), n(W, null, J(t.mismatchDetails.extra_nodes, (l) => (o(), n("div", {
                  key: l,
                  class: "node-item remove"
                }, " - " + i(l), 1))), 128))
              ])
            ])) : c("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", xf, [
            f(P, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (l) => r.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(P, {
              variant: "primary",
              onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                h(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), If = /* @__PURE__ */ K(Sf, [["__scopeId", "data-v-7cad7518"]]);
async function Je(t, r = {}, s = 5e3) {
  const l = new AbortController(), m = setTimeout(() => l.abort(), s);
  try {
    const g = await fetch(t, {
      ...r,
      signal: l.signal
    });
    return clearTimeout(m), g;
  } catch (g) {
    throw clearTimeout(m), g.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : g;
  }
}
function Ef() {
  const t = C(null);
  async function r() {
    try {
      const d = await Je(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (d.ok)
        return (await d.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const d = await Je(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!d.ok) throw new Error("Health check failed");
      return await d.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function l() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const d = await Je(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!d.ok) throw new Error("Failed to get status");
      return await d.json();
    } catch {
      return null;
    }
  }
  async function m() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await Je(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await Je(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: r,
    checkHealth: s,
    getStatus: l,
    restart: m,
    kill: g
  };
}
const Mf = { class: "comfygit-panel" }, zf = { class: "panel-header" }, Nf = { class: "header-left" }, Lf = {
  key: 0,
  class: "header-info"
}, Tf = { class: "header-actions" }, Rf = { class: "env-switcher" }, Bf = {
  key: 0,
  class: "header-info"
}, Of = { class: "branch-name" }, Df = { class: "panel-main" }, Uf = { class: "sidebar" }, Vf = { class: "sidebar-section" }, Af = { class: "sidebar-section" }, Pf = { class: "sidebar-section" }, Wf = { class: "content-area" }, Ff = {
  key: 0,
  class: "error-message"
}, Gf = {
  key: 1,
  class: "loading"
}, Hf = { class: "dialog-content env-selector-dialog" }, jf = { class: "dialog-header" }, Kf = { class: "dialog-body" }, qf = { class: "env-list" }, Yf = { class: "env-info" }, Jf = { class: "env-name-row" }, Xf = { class: "env-indicator" }, Zf = { class: "env-name" }, Qf = {
  key: 0,
  class: "env-branch"
}, eg = {
  key: 1,
  class: "current-label"
}, tg = { class: "env-stats" }, og = ["onClick"], sg = { class: "toast-container" }, ng = { class: "toast-icon" }, ag = { class: "toast-message" }, lg = /* @__PURE__ */ j({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const s = r, {
      getStatus: l,
      getHistory: m,
      getBranches: g,
      checkout: d,
      createBranch: u,
      switchBranch: v,
      getEnvironments: w,
      switchEnvironment: x,
      getSwitchProgress: S,
      syncEnvironmentManually: _
    } = we(), k = Ef(), E = C(null), p = C([]), $ = C([]), y = C([]), M = O(() => y.value.find((U) => U.is_current)), G = C(!1), R = C(null), V = C(null), L = C(!1), D = C(!1), z = C(!1), T = C(""), B = C({ state: "idle", progress: 0, message: "" });
    let Y = null, F = null;
    const N = C("status"), Z = C("this-env");
    function se(U, I) {
      N.value = U, Z.value = I;
    }
    function Be(U) {
      const ne = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[U];
      ne && se(ne.view, ne.section);
    }
    function Oe() {
      se("branches", "this-env");
    }
    const re = C(null), _e = C(!1), Q = C(!1), Ee = C([]);
    let qe = 0;
    function ie(U, I = "info", ne = 3e3) {
      const ce = ++qe;
      return Ee.value.push({ id: ce, message: U, type: I }), ne > 0 && setTimeout(() => {
        Ee.value = Ee.value.filter((Ce) => Ce.id !== ce);
      }, ne), ce;
    }
    function $e(U) {
      Ee.value = Ee.value.filter((I) => I.id !== U);
    }
    function Ye(U) {
      switch (U) {
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
    const q = O(() => {
      if (!E.value) return "neutral";
      const U = E.value.workflows, I = U.new.length > 0 || U.modified.length > 0 || U.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? I ? "warning" : "success" : "error";
    });
    O(() => E.value ? q.value === "success" ? "All synced" : q.value === "warning" ? "Uncommitted changes" : q.value === "error" ? "Not synced" : "" : "");
    async function H() {
      G.value = !0, R.value = null;
      try {
        const [U, I, ne, ce] = await Promise.all([
          l(),
          m(),
          g(),
          w()
        ]);
        E.value = U, p.value = I.commits, $.value = ne.branches, y.value = ce, s("statusUpdate", U);
      } catch (U) {
        R.value = U instanceof Error ? U.message : "Failed to load status", E.value = null, p.value = [], $.value = [];
      } finally {
        G.value = !1;
      }
    }
    function A(U) {
      V.value = U;
    }
    async function fe(U) {
      var ne;
      V.value = null;
      const I = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      re.value = {
        title: I ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: I ? "You have uncommitted changes that will be lost." : `Checkout commit ${U.short_hash || ((ne = U.hash) == null ? void 0 : ne.slice(0, 7))}?`,
        details: I ? $t() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: I,
        onConfirm: async () => {
          var xe;
          re.value = null;
          const ce = ie(`Checking out ${U.short_hash || ((xe = U.hash) == null ? void 0 : xe.slice(0, 7))}...`, "info", 0), Ce = await d(U.hash, I);
          $e(ce), Ce.status === "success" ? ie("Restarting ComfyUI...", "success") : ie(Ce.message || "Checkout failed", "error");
        }
      };
    }
    async function ge(U) {
      const I = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      re.value = {
        title: I ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: I ? "You have uncommitted changes." : `Switch to branch "${U}"?`,
        details: I ? $t() : void 0,
        warning: I ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          re.value = null;
          const ne = ie(`Switching to ${U}...`, "info", 0), ce = await v(U, I);
          $e(ne), ce.status === "success" ? ie("Restarting ComfyUI...", "success") : ie(ce.message || "Branch switch failed", "error");
        }
      };
    }
    async function st(U) {
      const I = ie(`Creating branch ${U}...`, "info", 0), ne = await u(U);
      $e(I), ne.status === "success" ? (ie(`Branch "${U}" created`, "success"), await H()) : ie(ne.message || "Failed to create branch", "error");
    }
    async function At(U) {
      V.value = null;
      const I = prompt("Enter branch name:");
      if (I) {
        const ne = ie(`Creating branch ${I}...`, "info", 0), ce = await u(I, U.hash);
        $e(ne), ce.status === "success" ? (ie(`Branch "${I}" created from ${U.short_hash}`, "success"), await H()) : ie(ce.message || "Failed to create branch", "error");
      }
    }
    async function kt(U) {
      L.value = !1, T.value = U, D.value = !0;
    }
    async function Pt() {
      D.value = !1, z.value = !0, B.value = {
        progress: 10,
        state: nt(10),
        message: at(10)
      };
      try {
        await x(T.value), Wt(), Ft();
      } catch (U) {
        Ue(), z.value = !1, ie(`Failed to initiate switch: ${U instanceof Error ? U.message : "Unknown error"}`, "error"), B.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function nt(U) {
      return U >= 100 ? "complete" : U >= 80 ? "validating" : U >= 60 ? "starting" : U >= 30 ? "syncing" : "preparing";
    }
    function at(U) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[nt(U)] || "";
    }
    function Wt() {
      if (F) return;
      let U = 10;
      const I = 60, ne = 5e3, ce = 100, Ce = (I - U) / (ne / ce);
      F = window.setInterval(() => {
        if (U += Ce, U >= I && (U = I, Ue()), B.value.progress < I) {
          const xe = Math.floor(U);
          B.value = {
            progress: xe,
            state: nt(xe),
            message: at(xe)
          };
        }
      }, ce);
    }
    function Ue() {
      F && (clearInterval(F), F = null);
    }
    function Ft() {
      Y || (Y = window.setInterval(async () => {
        try {
          let U = await k.getStatus();
          if ((!U || U.state === "idle") && (U = await S()), !U)
            return;
          const I = U.progress || 0;
          I >= 60 && Ue();
          const ne = Math.max(I, B.value.progress), ce = U.state && U.state !== "idle" && U.state !== "unknown", Ce = ce ? U.state : nt(ne), xe = ce && U.message || at(ne);
          B.value = {
            state: Ce,
            progress: ne,
            message: xe
          }, U.state === "complete" ? (Ue(), dt(), z.value = !1, ie(`✓ Switched to ${T.value}`, "success"), await H(), T.value = "") : U.state === "rolled_back" ? (Ue(), dt(), z.value = !1, ie("Switch failed, restored previous environment", "warning"), T.value = "") : U.state === "critical_failure" && (Ue(), dt(), z.value = !1, ie(`Critical error during switch: ${U.message}`, "error"), T.value = "");
        } catch (U) {
          console.error("Failed to poll switch progress:", U);
        }
      }, 1e3));
    }
    function dt() {
      Ue(), Y && (clearInterval(Y), Y = null);
    }
    function Gt() {
      D.value = !1, T.value = "";
    }
    async function Ht() {
      _e.value = !1, await H(), ie("✓ Changes committed", "success");
    }
    async function jt() {
      Q.value = !1;
      const U = ie("Syncing environment...", "info", 0);
      try {
        const I = await _("skip", !0);
        if ($e(U), I.status === "success") {
          const ne = [];
          I.nodes_installed.length && ne.push(`${I.nodes_installed.length} installed`), I.nodes_removed.length && ne.push(`${I.nodes_removed.length} removed`);
          const ce = ne.length ? `: ${ne.join(", ")}` : "";
          ie(`✓ Environment synced${ce}`, "success"), await H();
        } else {
          const ne = I.errors.length ? I.errors.join("; ") : I.message;
          ie(`Sync failed: ${ne}`, "error");
        }
      } catch (I) {
        $e(U), ie(`Sync error: ${I instanceof Error ? I.message : "Unknown error"}`, "error");
      }
    }
    async function Kt(U) {
      const I = ie(`Creating environment "${U}"...`, "info", 0);
      $e(I), ie("Environment creation not yet implemented", "warning");
    }
    async function qt(U) {
      const I = ie(`Deleting environment "${U}"...`, "info", 0);
      $e(I), ie("Environment deletion not yet implemented", "warning");
    }
    function Yt(U) {
      ie(`Viewing details for "${U}"`, "info"), se("models-env", "this-env");
    }
    function $t() {
      if (!E.value) return [];
      const U = [], I = E.value.workflows;
      return I.new.length && U.push(`${I.new.length} new workflow(s)`), I.modified.length && U.push(`${I.modified.length} modified workflow(s)`), I.deleted.length && U.push(`${I.deleted.length} deleted workflow(s)`), U;
    }
    return ve(H), (U, I) => {
      var ne, ce, Ce, xe;
      return o(), n("div", Mf, [
        e("div", zf, [
          e("div", Nf, [
            I[27] || (I[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (o(), n("div", Lf)) : c("", !0)
          ]),
          e("div", Tf, [
            e("button", {
              class: X(["icon-btn", { spinning: G.value }]),
              onClick: H,
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
              onClick: I[0] || (I[0] = (te) => s("close")),
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
        e("div", Rf, [
          I[31] || (I[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: I[1] || (I[1] = (te) => se("environments", "all-envs"))
          }, [
            E.value ? (o(), n("div", Bf, [
              e("span", null, i(((ne = M.value) == null ? void 0 : ne.name) || ((ce = E.value) == null ? void 0 : ce.environment) || "Loading..."), 1),
              e("span", Of, "(" + i(E.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            I[30] || (I[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Df, [
          e("div", Uf, [
            e("div", Vf, [
              I[32] || (I[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "status" && Z.value === "this-env" }]),
                onClick: I[2] || (I[2] = (te) => se("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "workflows" }]),
                onClick: I[3] || (I[3] = (te) => se("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "models-env" }]),
                onClick: I[4] || (I[4] = (te) => se("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "branches" }]),
                onClick: I[5] || (I[5] = (te) => se("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "history" }]),
                onClick: I[6] || (I[6] = (te) => se("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "nodes" }]),
                onClick: I[7] || (I[7] = (te) => se("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "debug-env" }]),
                onClick: I[8] || (I[8] = (te) => se("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            I[35] || (I[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Af, [
              I[33] || (I[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "environments" }]),
                onClick: I[9] || (I[9] = (te) => se("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "model-index" }]),
                onClick: I[10] || (I[10] = (te) => se("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "settings" }]),
                onClick: I[11] || (I[11] = (te) => se("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "debug-workspace" }]),
                onClick: I[12] || (I[12] = (te) => se("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            I[36] || (I[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Pf, [
              I[34] || (I[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "export" }]),
                onClick: I[13] || (I[13] = (te) => se("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "import" }]),
                onClick: I[14] || (I[14] = (te) => se("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: X(["sidebar-item", { active: N.value === "remotes" }]),
                onClick: I[15] || (I[15] = (te) => se("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Wf, [
            R.value ? (o(), n("div", Ff, i(R.value), 1)) : !E.value && N.value === "status" ? (o(), n("div", Gf, " Loading status... ")) : (o(), n(W, { key: 2 }, [
              N.value === "status" ? (o(), b(zn, {
                key: 0,
                status: E.value,
                onSwitchBranch: Oe,
                onCommitChanges: I[16] || (I[16] = (te) => _e.value = !0),
                onSyncEnvironment: I[17] || (I[17] = (te) => Q.value = !0),
                onViewWorkflows: I[18] || (I[18] = (te) => se("workflows", "this-env")),
                onViewHistory: I[19] || (I[19] = (te) => se("history", "this-env")),
                onViewDebug: I[20] || (I[20] = (te) => se("debug-env", "this-env"))
              }, null, 8, ["status"])) : N.value === "workflows" ? (o(), b(Nc, {
                key: 1,
                onRefresh: H
              })) : N.value === "models-env" ? (o(), b(Rc, {
                key: 2,
                onNavigate: Be
              })) : N.value === "branches" ? (o(), b(Hn, {
                key: 3,
                branches: $.value,
                current: ((Ce = E.value) == null ? void 0 : Ce.branch) || null,
                onSwitch: ge,
                onCreate: st
              }, null, 8, ["branches", "current"])) : N.value === "history" ? (o(), b(oa, {
                key: 4,
                commits: p.value,
                onSelect: A,
                onCheckout: fe
              }, null, 8, ["commits"])) : N.value === "nodes" ? (o(), b(Pc, { key: 5 })) : N.value === "debug-env" ? (o(), b(Wd, { key: 6 })) : N.value === "environments" ? (o(), b(eu, {
                key: 7,
                onSwitch: kt,
                onCreate: Kt,
                onDelete: qt,
                onViewDetails: Yt
              })) : N.value === "model-index" ? (o(), b(Oc, { key: 8 })) : N.value === "settings" ? (o(), b(Ud, { key: 9 })) : N.value === "debug-workspace" ? (o(), b(Ad, { key: 10 })) : N.value === "export" ? (o(), b(du, { key: 11 })) : N.value === "import" ? (o(), b(Um, { key: 12 })) : N.value === "remotes" ? (o(), b(bd, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        V.value ? (o(), b(ov, {
          key: 0,
          commit: V.value,
          onClose: I[21] || (I[21] = (te) => V.value = null),
          onCheckout: fe,
          onCreateBranch: At
        }, null, 8, ["commit"])) : c("", !0),
        re.value ? (o(), b(iv, {
          key: 1,
          title: re.value.title,
          message: re.value.message,
          details: re.value.details,
          warning: re.value.warning,
          confirmLabel: re.value.confirmLabel,
          cancelLabel: re.value.cancelLabel,
          secondaryLabel: re.value.secondaryLabel,
          secondaryAction: re.value.secondaryAction,
          destructive: re.value.destructive,
          onConfirm: re.value.onConfirm,
          onCancel: I[22] || (I[22] = (te) => re.value = null),
          onSecondary: re.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        f(sf, {
          show: D.value,
          "from-environment": ((xe = M.value) == null ? void 0 : xe.name) || "unknown",
          "to-environment": T.value,
          onConfirm: Pt,
          onClose: Gt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        _e.value && E.value ? (o(), b(Bt, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: I[23] || (I[23] = (te) => _e.value = !1),
          onCommitted: Ht
        }, null, 8, ["status"])) : c("", !0),
        Q.value && E.value ? (o(), b(If, {
          key: 3,
          show: Q.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: jt,
          onClose: I[24] || (I[24] = (te) => Q.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        f(yf, {
          show: z.value,
          state: B.value.state,
          progress: B.value.progress,
          message: B.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        L.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: I[26] || (I[26] = he((te) => L.value = !1, ["self"]))
        }, [
          e("div", Hf, [
            e("div", jf, [
              I[38] || (I[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: I[25] || (I[25] = (te) => L.value = !1)
              }, [...I[37] || (I[37] = [
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
            e("div", Kf, [
              I[39] || (I[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", qf, [
                (o(!0), n(W, null, J(y.value, (te) => (o(), n("div", {
                  key: te.name,
                  class: X(["env-item", { current: te.is_current }])
                }, [
                  e("div", Yf, [
                    e("div", Jf, [
                      e("span", Xf, i(te.is_current ? "●" : "○"), 1),
                      e("span", Zf, i(te.name), 1),
                      te.current_branch ? (o(), n("span", Qf, "(" + i(te.current_branch) + ")", 1)) : c("", !0),
                      te.is_current ? (o(), n("span", eg, "CURRENT")) : c("", !0)
                    ]),
                    e("div", tg, i(te.workflow_count) + " workflows • " + i(te.node_count) + " nodes ", 1)
                  ]),
                  te.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (yg) => kt(te.name)
                  }, " SWITCH ", 8, og))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", sg, [
          f(Qt, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(W, null, J(Ee.value, (te) => (o(), n("div", {
                key: te.id,
                class: X(["toast", te.type])
              }, [
                e("span", ng, i(Ye(te.type)), 1),
                e("span", ag, i(te.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), ig = /* @__PURE__ */ K(lg, [["__scopeId", "data-v-2c8b25b1"]]), rg = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', cg = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', dg = {
  comfy: rg,
  phosphor: cg
}, wt = "comfy", Ot = "comfygit-theme";
let Ve = null, Dt = wt;
function ug() {
  try {
    const t = localStorage.getItem(Ot);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return wt;
}
function Ut(t = wt) {
  Ve && Ve.remove(), Ve = document.createElement("style"), Ve.id = "comfygit-theme-styles", Ve.setAttribute("data-theme", t), Ve.textContent = dg[t], document.head.appendChild(Ve), document.body.setAttribute("data-comfygit-theme", t), Dt = t;
  try {
    localStorage.setItem(Ot, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function mg() {
  return Dt;
}
function vg(t) {
  Ut(t);
}
const bt = document.createElement("link");
bt.rel = "stylesheet";
bt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(bt);
const fg = ug();
Ut(fg);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), vg(t);
  },
  getTheme: () => {
    const t = mg();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Se = null, be = null, tt = null;
const Ge = C(null);
async function pt() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const r = await window.app.api.fetchApi("/v2/comfygit/status");
    r.ok && (Ge.value = await r.json());
  } catch {
  }
}
function gg() {
  if (!Ge.value) return !1;
  const t = Ge.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ge.value.has_changes;
}
function hg() {
  Se && Se.remove(), Se = document.createElement("div"), Se.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Se.appendChild(t), Se.addEventListener("click", (l) => {
    l.target === Se && ft();
  });
  const r = (l) => {
    l.key === "Escape" && (ft(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), zt({
    render: () => Nt(ig, {
      onClose: ft,
      onStatusUpdate: (l) => {
        Ge.value = l, rt();
      }
    })
  }).mount(t), document.body.appendChild(Se);
}
function ft() {
  Se && (Se.remove(), Se = null);
}
function pg(t) {
  Xe(), be = document.createElement("div"), be.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  be.style.position = "fixed", be.style.top = `${r.bottom + 8}px`, be.style.right = `${window.innerWidth - r.right}px`, be.style.zIndex = "10001";
  const s = (m) => {
    be && !be.contains(m.target) && m.target !== t && (Xe(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const l = (m) => {
    m.key === "Escape" && (Xe(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), tt = zt({
    render: () => Nt(Bt, {
      status: Ge.value,
      onClose: Xe,
      onCommitted: () => {
        Xe(), pt().then(rt);
      }
    })
  }), tt.mount(be), document.body.appendChild(be);
}
function Xe() {
  tt && (tt.unmount(), tt = null), be && (be.remove(), be = null);
}
let ze = null;
function rt() {
  if (!ze) return;
  const t = ze.querySelector(".commit-indicator");
  t && (t.style.display = gg() ? "block" : "none");
}
const Vt = document.createElement("style");
Vt.textContent = `
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
document.head.appendChild(Vt);
ut.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, l;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = hg, ze = document.createElement("button"), ze.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ze.innerHTML = 'Commit <span class="commit-indicator"></span>', ze.title = "Quick Commit", ze.onclick = () => pg(ze), t.appendChild(r), t.appendChild(ze), (l = (s = ut.menu) == null ? void 0 : s.settingsGroup) != null && l.element && (ut.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await pt(), rt(), setInterval(async () => {
      await pt(), rt();
    }, 3e4);
  }
});
