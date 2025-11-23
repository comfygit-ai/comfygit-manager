import { app as mt } from "../../scripts/app.js";
import { defineComponent as j, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as t, renderSlot as se, createBlock as b, resolveDynamicComponent as wt, normalizeClass as Z, withCtx as a, toDisplayString as i, createVNode as g, createTextVNode as h, computed as T, Fragment as F, renderList as X, normalizeStyle as Pe, ref as C, onMounted as ge, watch as zt, Teleport as We, withModifiers as he, Transition as Zt, withKeys as Le, onUnmounted as Jt, withDirectives as Je, vModelText as Qe, resolveComponent as Qt, createSlots as Mt, TransitionGroup as eo, createApp as Lt, h as Rt } from "vue";
const to = { class: "panel-layout" }, oo = {
  key: 0,
  class: "panel-layout-header"
}, so = {
  key: 1,
  class: "panel-layout-search"
}, no = { class: "panel-layout-content" }, ao = {
  key: 2,
  class: "panel-layout-footer"
}, lo = /* @__PURE__ */ j({
  __name: "PanelLayout",
  setup(e) {
    return (r, s) => (o(), n("div", to, [
      r.$slots.header ? (o(), n("div", oo, [
        se(r.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      r.$slots.search ? (o(), n("div", so, [
        se(r.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      t("div", no, [
        se(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (o(), n("div", ao, [
        se(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), K = (e, r) => {
  const s = e.__vccOpts || e;
  for (const [l, u] of r)
    s[l] = u;
  return s;
}, pe = /* @__PURE__ */ K(lo, [["__scopeId", "data-v-21565df9"]]), io = {
  key: 0,
  class: "panel-title-prefix"
}, ro = {
  key: 1,
  class: "panel-title-prefix-theme"
}, co = /* @__PURE__ */ j({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (r, s) => (o(), b(wt(`h${e.level}`), {
      class: Z(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (o(), n("span", io, i(e.prefix), 1)) : (o(), n("span", ro)),
        se(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), uo = /* @__PURE__ */ K(co, [["__scopeId", "data-v-c3875efc"]]), mo = ["title"], vo = ["width", "height"], fo = /* @__PURE__ */ j({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (r, s) => (o(), n("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (l) => r.$emit("click"))
    }, [
      (o(), n("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...s[1] || (s[1] = [
        t("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        t("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, vo))
    ], 8, mo));
  }
}), Nt = /* @__PURE__ */ K(fo, [["__scopeId", "data-v-6fc7f16d"]]), go = { class: "header-left" }, ho = {
  key: 0,
  class: "header-actions"
}, po = /* @__PURE__ */ j({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (r, s) => (o(), n("div", {
      class: Z(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", go, [
        g(uo, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            h(i(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), b(Nt, {
          key: 0,
          onClick: s[0] || (s[0] = (l) => r.$emit("info-click"))
        })) : c("", !0)
      ]),
      r.$slots.actions ? (o(), n("div", ho, [
        se(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ye = /* @__PURE__ */ K(po, [["__scopeId", "data-v-55a62cd6"]]), yo = {
  key: 0,
  class: "section-title-count"
}, wo = {
  key: 1,
  class: "section-title-icon"
}, bo = /* @__PURE__ */ j({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (r, s) => (o(), b(wt(`h${e.level}`), {
      class: Z(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (l) => e.clickable && r.$emit("click"))
    }, {
      default: a(() => [
        se(r.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), n("span", yo, "(" + i(e.count) + ")", 1)) : c("", !0),
        e.clickable ? (o(), n("span", wo, i(e.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ke = /* @__PURE__ */ K(bo, [["__scopeId", "data-v-559361eb"]]), ko = { class: "status-grid" }, _o = { class: "status-grid__column" }, $o = { class: "status-grid__title" }, Co = { class: "status-grid__column status-grid__column--right" }, xo = { class: "status-grid__title" }, So = /* @__PURE__ */ j({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (r, s) => (o(), n("div", ko, [
      t("div", _o, [
        t("h4", $o, i(e.leftTitle), 1),
        se(r.$slots, "left", {}, void 0, !0)
      ]),
      t("div", Co, [
        t("h4", xo, i(e.rightTitle), 1),
        se(r.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Io = /* @__PURE__ */ K(So, [["__scopeId", "data-v-fe556068"]]), Eo = {
  key: 0,
  class: "status-item__icon"
}, zo = {
  key: 1,
  class: "status-item__count"
}, Mo = { class: "status-item__label" }, Lo = /* @__PURE__ */ j({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const r = e, s = T(() => `status-item--${r.variant}`);
    return (l, u) => (o(), n("div", {
      class: Z(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), n("span", Eo, i(e.icon), 1)) : c("", !0),
      e.count !== void 0 ? (o(), n("span", zo, i(e.count), 1)) : c("", !0),
      t("span", Mo, i(e.label), 1)
    ], 2));
  }
}), ze = /* @__PURE__ */ K(Lo, [["__scopeId", "data-v-6f929183"]]), Ro = { class: "issue-card__header" }, No = { class: "issue-card__icon" }, Uo = { class: "issue-card__title" }, Bo = {
  key: 0,
  class: "issue-card__content"
}, To = {
  key: 0,
  class: "issue-card__description"
}, Do = {
  key: 1,
  class: "issue-card__items"
}, Oo = {
  key: 2,
  class: "issue-card__actions"
}, Vo = /* @__PURE__ */ j({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const r = e, s = T(() => `issue-card--${r.severity}`);
    return (l, u) => (o(), n("div", {
      class: Z(["issue-card", s.value])
    }, [
      t("div", Ro, [
        t("span", No, i(e.icon), 1),
        t("h4", Uo, i(e.title), 1)
      ]),
      l.$slots.default || e.description ? (o(), n("div", Bo, [
        e.description ? (o(), n("p", To, i(e.description), 1)) : c("", !0),
        se(l.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      e.items && e.items.length ? (o(), n("div", Do, [
        (o(!0), n(F, null, X(e.items, (v, d) => (o(), n("div", {
          key: d,
          class: "issue-card__item"
        }, [
          u[0] || (u[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, i(v), 1)
        ]))), 128))
      ])) : c("", !0),
      l.$slots.actions ? (o(), n("div", Oo, [
        se(l.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ K(Vo, [["__scopeId", "data-v-df6aa348"]]), Ao = ["type", "disabled"], Po = {
  key: 0,
  class: "spinner"
}, Wo = /* @__PURE__ */ j({
  __name: "ActionButton",
  props: {
    variant: { default: "primary" },
    size: { default: "sm" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e) {
    return (r, s) => (o(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Z(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (l) => r.$emit("click", l))
    }, [
      e.loading ? (o(), n("span", Po)) : c("", !0),
      e.loading ? c("", !0) : se(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ao));
  }
}), A = /* @__PURE__ */ K(Wo, [["__scopeId", "data-v-772abe47"]]), Fo = { class: "empty-state" }, Go = {
  key: 0,
  class: "empty-icon"
}, Ho = { class: "empty-message" }, jo = /* @__PURE__ */ j({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (r, s) => (o(), n("div", Fo, [
      e.icon ? (o(), n("div", Go, i(e.icon), 1)) : c("", !0),
      t("p", Ho, i(e.message), 1),
      e.actionLabel ? (o(), b(A, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => r.$emit("action"))
      }, {
        default: a(() => [
          h(i(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ie = /* @__PURE__ */ K(jo, [["__scopeId", "data-v-4466284f"]]), Ko = { class: "branch-indicator" }, qo = { class: "branch-indicator__info" }, Yo = { class: "branch-indicator__label" }, Xo = { class: "branch-indicator__name" }, Zo = {
  key: 0,
  class: "branch-indicator__remote"
}, Jo = {
  key: 0,
  class: "branch-indicator__status"
}, Qo = {
  key: 0,
  class: "branch-indicator__ahead"
}, es = {
  key: 1,
  class: "branch-indicator__behind"
}, ts = {
  key: 1,
  class: "branch-indicator__actions"
}, os = /* @__PURE__ */ j({
  __name: "BranchIndicator",
  props: {
    label: { default: "Current Branch" },
    branchName: {},
    remote: {},
    commitsAhead: {},
    commitsBehind: {},
    showStatus: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (r, s) => (o(), n("div", Ko, [
      t("div", qo, [
        t("span", Yo, i(e.label), 1),
        t("span", Xo, i(e.branchName), 1),
        e.remote ? (o(), n("span", Zo, "@" + i(e.remote), 1)) : c("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (o(), n("div", Jo, [
        e.commitsAhead ? (o(), n("span", Qo, " ↑ " + i(e.commitsAhead) + " ahead ", 1)) : c("", !0),
        e.commitsBehind ? (o(), n("span", es, " ↓ " + i(e.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      r.$slots.actions ? (o(), n("div", ts, [
        se(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ K(os, [["__scopeId", "data-v-cb8dd50e"]]), ns = /* @__PURE__ */ j({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (r, s) => (o(), n("span", {
      class: Z(["detail-label"]),
      style: Pe({ minWidth: e.minWidth })
    }, [
      se(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ht = /* @__PURE__ */ K(ns, [["__scopeId", "data-v-75e9eeb8"]]), as = /* @__PURE__ */ j({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (r, s) => (o(), n("span", {
      class: Z(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      se(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ K(as, [["__scopeId", "data-v-2f186e4c"]]), ls = { class: "detail-row" }, is = /* @__PURE__ */ j({
  __name: "DetailRow",
  props: {
    label: {},
    value: {},
    mono: { type: Boolean, default: !1 },
    valueVariant: { default: "default" },
    truncate: { type: Boolean, default: !1 },
    labelMinWidth: { default: "70px" }
  },
  setup(e) {
    return (r, s) => (o(), n("div", ls, [
      g(ht, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          h(i(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), b(pt, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          h(i(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : se(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ee = /* @__PURE__ */ K(is, [["__scopeId", "data-v-ef15664a"]]), rs = { class: "modal-header" }, cs = { class: "modal-body" }, ds = { class: "status-section" }, us = {
  key: 0,
  class: "status-section"
}, ms = {
  key: 0,
  class: "workflow-group"
}, vs = { class: "workflow-group-header" }, fs = { class: "workflow-group-title" }, gs = { class: "workflow-list" }, hs = { class: "workflow-name" }, ps = { class: "workflow-issue" }, ys = {
  key: 1,
  class: "workflow-group"
}, ws = { class: "workflow-group-header" }, bs = { class: "workflow-group-title" }, ks = { class: "workflow-list" }, _s = { class: "workflow-name" }, $s = { class: "workflow-issue" }, Cs = {
  key: 2,
  class: "workflow-group"
}, xs = { class: "workflow-group-header" }, Ss = { class: "workflow-group-title" }, Is = { class: "workflow-list" }, Es = { class: "workflow-name" }, zs = {
  key: 3,
  class: "workflow-group"
}, Ms = { class: "workflow-group-header" }, Ls = { class: "workflow-group-title" }, Rs = { class: "workflow-list" }, Ns = { class: "workflow-name" }, Us = {
  key: 4,
  class: "workflow-group"
}, Bs = { class: "workflow-group-header" }, Ts = { class: "workflow-group-title" }, Ds = { class: "workflow-list" }, Os = { class: "workflow-name" }, Vs = {
  key: 5,
  class: "workflow-group"
}, As = { class: "workflow-group-title" }, Ps = { class: "expand-icon" }, Ws = {
  key: 0,
  class: "workflow-list"
}, Fs = { class: "workflow-name" }, Gs = {
  key: 1,
  class: "status-section"
}, Hs = {
  key: 0,
  class: "change-group"
}, js = { class: "change-group-header" }, Ks = { class: "change-group-title" }, qs = { class: "change-list" }, Ys = { class: "node-name" }, Xs = {
  key: 0,
  class: "dev-badge"
}, Zs = {
  key: 1,
  class: "change-group"
}, Js = { class: "change-group-header" }, Qs = { class: "change-group-title" }, en = { class: "change-list" }, tn = { class: "node-name" }, on = {
  key: 0,
  class: "dev-badge"
}, sn = {
  key: 2,
  class: "change-group"
}, nn = { class: "change-list" }, an = { class: "change-item" }, ln = { class: "node-name" }, rn = {
  key: 3,
  class: "change-group"
}, cn = {
  key: 2,
  class: "status-section"
}, dn = {
  key: 0,
  class: "drift-item"
}, un = { class: "drift-list" }, mn = {
  key: 0,
  class: "drift-list-more"
}, vn = {
  key: 1,
  class: "drift-item"
}, fn = { class: "drift-list" }, gn = {
  key: 0,
  class: "drift-list-more"
}, hn = {
  key: 2,
  class: "drift-item"
}, pn = {
  key: 3,
  class: "drift-item"
}, yn = {
  key: 3,
  class: "status-section"
}, wn = { class: "info-box" }, bn = { class: "drift-list" }, kn = {
  key: 0,
  class: "drift-list-more"
}, _n = {
  key: 4,
  class: "status-section"
}, $n = { class: "warning-box" }, Cn = {
  key: 5,
  class: "empty-state-inline"
}, xn = { class: "modal-actions" }, Sn = /* @__PURE__ */ j({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(e) {
    const r = e, s = C(!1);
    ge(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), zt(() => r.show, ($, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", $);
    }, { immediate: !0 });
    const l = T(() => {
      var $, k, I;
      return ((I = (k = ($ = r.status) == null ? void 0 : $.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : I.filter(
        (p) => p.status === "broken" && p.sync_state === "synced"
      )) || [];
    }), u = T(() => {
      var $, k, I;
      return ((I = (k = ($ = r.status) == null ? void 0 : $.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : I.filter(
        (p) => p.status === "broken" && p.sync_state !== "synced"
      )) || [];
    }), v = T(() => {
      var $, k, I;
      return ((I = (k = ($ = r.status) == null ? void 0 : $.workflows) == null ? void 0 : k.synced) == null ? void 0 : I.filter((p) => {
        var y, z, H;
        const _ = (H = (z = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : z.analyzed) == null ? void 0 : H.find((U) => U.name === p);
        return !_ || _.status !== "broken";
      })) || [];
    }), d = T(() => {
      var $, k, I, p, _;
      return ($ = r.status) != null && $.workflows ? (((k = r.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((I = r.status.workflows.modified) == null ? void 0 : I.length) ?? 0) > 0 || (((p = r.status.workflows.deleted) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = r.status.workflows.synced) == null ? void 0 : _.length) ?? 0) > 0 : !1;
    }), m = T(() => {
      var k, I, p;
      const $ = (k = r.status) == null ? void 0 : k.git_changes;
      return $ ? (((I = $.nodes_added) == null ? void 0 : I.length) ?? 0) > 0 || (((p = $.nodes_removed) == null ? void 0 : p.length) ?? 0) > 0 || $.workflow_changes || $.has_other_changes : !1;
    }), f = T(() => {
      var $, k, I, p, _, y;
      return !d.value && !m.value && ((k = ($ = r.status) == null ? void 0 : $.comparison) == null ? void 0 : k.is_synced) && (((I = r.status) == null ? void 0 : I.missing_models_count) ?? 0) === 0 && (((y = (_ = (p = r.status) == null ? void 0 : p.comparison) == null ? void 0 : _.disabled_nodes) == null ? void 0 : y.length) ?? 0) === 0;
    }), w = T(() => {
      var k, I;
      const $ = (I = (k = r.status) == null ? void 0 : k.git_changes) == null ? void 0 : I.workflow_changes;
      return $ ? typeof $ == "number" ? $ : Object.keys($).length : 0;
    });
    function x($) {
      return typeof $ == "string" ? $ : $.name;
    }
    function S($) {
      return typeof $ == "object" && $.is_development === !0;
    }
    return ($, k) => {
      var I, p, _, y, z, H, U, O, R, D, M, N, B, Y, G, L, J, ne, Be, Te, de, $e;
      return o(), b(We, { to: "body" }, [
        e.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[4] || (k[4] = (Q) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: k[3] || (k[3] = he(() => {
            }, ["stop"]))
          }, [
            t("div", rs, [
              k[5] || (k[5] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (Q) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", cs, [
              t("div", ds, [
                g(ke, { level: "4" }, {
                  default: a(() => [...k[6] || (k[6] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                g(ee, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              d.value ? (o(), n("div", us, [
                g(ke, { level: "4" }, {
                  default: a(() => [...k[7] || (k[7] = [
                    h("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                l.value.length ? (o(), n("div", ms, [
                  t("div", vs, [
                    k[8] || (k[8] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", fs, "BROKEN (COMMITTED) (" + i(l.value.length) + ")", 1)
                  ]),
                  t("div", gs, [
                    (o(!0), n(F, null, X(l.value, (Q) => (o(), n("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      t("span", hs, i(Q.name), 1),
                      t("span", ps, i(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                u.value.length ? (o(), n("div", ys, [
                  t("div", ws, [
                    k[9] || (k[9] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", bs, "BROKEN (UNCOMMITTED) (" + i(u.value.length) + ")", 1)
                  ]),
                  t("div", ks, [
                    (o(!0), n(F, null, X(u.value, (Q) => (o(), n("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      t("span", _s, i(Q.name), 1),
                      t("span", $s, i(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (p = (I = e.status.workflows) == null ? void 0 : I.new) != null && p.length ? (o(), n("div", Cs, [
                  t("div", xs, [
                    k[10] || (k[10] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Ss, "NEW (" + i(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Is, [
                    (o(!0), n(F, null, X(e.status.workflows.new, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      t("span", Es, i(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (y = (_ = e.status.workflows) == null ? void 0 : _.modified) != null && y.length ? (o(), n("div", zs, [
                  t("div", Ms, [
                    k[11] || (k[11] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Ls, "MODIFIED (" + i(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Rs, [
                    (o(!0), n(F, null, X(e.status.workflows.modified, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      t("span", Ns, i(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (H = (z = e.status.workflows) == null ? void 0 : z.deleted) != null && H.length ? (o(), n("div", Us, [
                  t("div", Bs, [
                    k[12] || (k[12] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Ts, "DELETED (" + i(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Ds, [
                    (o(!0), n(F, null, X(e.status.workflows.deleted, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      t("span", Os, i(Q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                v.value.length ? (o(), n("div", Vs, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[1] || (k[1] = (Q) => s.value = !s.value)
                  }, [
                    k[13] || (k[13] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", As, "SYNCED (" + i(v.value.length) + ")", 1),
                    t("span", Ps, i(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Ws, [
                    (o(!0), n(F, null, X(v.value, (Q) => (o(), n("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      t("span", Fs, i(Q), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), n("div", Gs, [
                g(ke, { level: "4" }, {
                  default: a(() => [...k[14] || (k[14] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (O = (U = e.status.git_changes) == null ? void 0 : U.nodes_added) != null && O.length ? (o(), n("div", Hs, [
                  t("div", js, [
                    k[15] || (k[15] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Ks, "NODES ADDED (" + i(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", qs, [
                    (o(!0), n(F, null, X(e.status.git_changes.nodes_added, (Q) => (o(), n("div", {
                      key: x(Q),
                      class: "change-item"
                    }, [
                      t("span", Ys, i(x(Q)), 1),
                      S(Q) ? (o(), n("span", Xs, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = (R = e.status.git_changes) == null ? void 0 : R.nodes_removed) != null && D.length ? (o(), n("div", Zs, [
                  t("div", Js, [
                    k[16] || (k[16] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Qs, "NODES REMOVED (" + i(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", en, [
                    (o(!0), n(F, null, X(e.status.git_changes.nodes_removed, (Q) => (o(), n("div", {
                      key: x(Q),
                      class: "change-item"
                    }, [
                      t("span", tn, i(x(Q)), 1),
                      S(Q) ? (o(), n("span", on, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (M = e.status.git_changes) != null && M.workflow_changes ? (o(), n("div", sn, [
                  k[17] || (k[17] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", nn, [
                    t("div", an, [
                      t("span", ln, i(w.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (N = e.status.git_changes) != null && N.has_other_changes ? (o(), n("div", rn, [...k[18] || (k[18] = [
                  t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  t("div", { class: "change-list" }, [
                    t("div", { class: "change-item" }, [
                      t("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : c("", !0)
              ])) : c("", !0),
              (B = e.status.comparison) != null && B.is_synced ? c("", !0) : (o(), n("div", cn, [
                g(ke, { level: "4" }, {
                  default: a(() => [...k[19] || (k[19] = [
                    h("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                k[20] || (k[20] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (G = (Y = e.status.comparison) == null ? void 0 : Y.missing_nodes) != null && G.length ? (o(), n("div", dn, [
                  g(ee, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", un, [
                    (o(!0), n(F, null, X(e.status.comparison.missing_nodes.slice(0, 10), (Q) => (o(), n("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + i(Q), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (o(), n("div", mn, " ... and " + i(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (J = (L = e.status.comparison) == null ? void 0 : L.extra_nodes) != null && J.length ? (o(), n("div", vn, [
                  g(ee, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", fn, [
                    (o(!0), n(F, null, X(e.status.comparison.extra_nodes.slice(0, 10), (Q) => (o(), n("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + i(Q), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (o(), n("div", gn, " ... and " + i(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Be = (ne = e.status.comparison) == null ? void 0 : ne.version_mismatches) != null && Be.length ? (o(), n("div", hn, [
                  g(ee, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (Te = e.status.comparison) != null && Te.packages_in_sync ? c("", !0) : (o(), n("div", pn, [
                  g(ee, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              ($e = (de = e.status.comparison) == null ? void 0 : de.disabled_nodes) != null && $e.length ? (o(), n("div", yn, [
                g(ke, { level: "4" }, {
                  default: a(() => [...k[21] || (k[21] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", wn, [
                  k[22] || (k[22] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, i(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", bn, [
                  (o(!0), n(F, null, X(e.status.comparison.disabled_nodes.slice(0, 10), (Q) => (o(), n("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + i(Q), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", kn, " ... and " + i(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (o(), n("div", _n, [
                g(ke, { level: "4" }, {
                  default: a(() => [...k[23] || (k[23] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", $n, [
                  k[24] || (k[24] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, i(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[25] || (k[25] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              f.value ? (o(), n("div", Cn, [...k[26] || (k[26] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            t("div", xn, [
              g(A, {
                variant: "secondary",
                onClick: k[2] || (k[2] = (Q) => $.$emit("close"))
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
}), Ct = /* @__PURE__ */ K(Sn, [["__scopeId", "data-v-c2264f66"]]), In = { class: "health-section-header" }, En = { style: { "margin-top": "var(--cg-space-1)" } }, zn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Mn = /* @__PURE__ */ j({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(e, { emit: r }) {
    const s = e, l = C(!1), u = C(!1);
    ge(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Ct);
    });
    function v() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    function d() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    const m = T(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), f = T(() => {
      const y = s.status.git_changes;
      return y.nodes_added.length > 0 || y.nodes_removed.length > 0 || y.workflow_changes || y.has_other_changes;
    }), w = T(() => m.value || f.value), x = T(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), S = T(() => s.status.git_changes.has_other_changes), $ = T(() => {
      var y;
      return ((y = s.status.workflows.analyzed) == null ? void 0 : y.filter(
        (z) => z.status === "broken" && z.sync_state === "synced"
      )) || [];
    }), k = T(() => {
      var y;
      return ((y = s.status.workflows.analyzed) == null ? void 0 : y.filter(
        (z) => z.status === "broken" && z.sync_state !== "synced"
      )) || [];
    }), I = T(() => $.value.length > 0 || k.value.length > 0), p = T(() => I.value || s.status.missing_models_count > 0 || w.value || !s.status.comparison.is_synced), _ = T(() => {
      const y = [];
      return s.status.workflows.new.length > 0 && y.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && y.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && y.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && y.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && y.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${y.length > 0 ? y.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (y, z) => (o(), n(F, null, [
      g(pe, null, {
        header: a(() => [
          g(ye, { title: "STATUS" })
        ]),
        content: a(() => [
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: z[0] || (z[0] = (H) => u.value = !0),
            onMouseleave: z[1] || (z[1] = (H) => u.value = !1)
          }, [
            t("div", In, [
              g(ke, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...z[11] || (z[11] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g(Zt, { name: "fade" }, {
                default: a(() => [
                  u.value ? (o(), b(A, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: a(() => [...z[12] || (z[12] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            g(Io, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                e.status.workflows.new.length ? (o(), b(ze, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                e.status.workflows.modified.length ? (o(), b(ze, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                e.status.workflows.deleted.length ? (o(), b(ze, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                g(ze, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: m.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                e.status.git_changes.nodes_added.length ? (o(), b(ze, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                e.status.git_changes.nodes_removed.length ? (o(), b(ze, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                e.status.git_changes.workflow_changes ? (o(), b(ze, {
                  key: 2,
                  icon: "●",
                  count: x.value,
                  label: x.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                S.value ? (o(), b(ze, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                f.value ? c("", !0) : (o(), b(ze, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          t("div", En, [
            g(ss, {
              "branch-name": e.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                g(A, {
                  variant: "secondary",
                  size: "sm",
                  onClick: z[2] || (z[2] = (H) => y.$emit("switch-branch"))
                }, {
                  default: a(() => [...z[13] || (z[13] = [
                    h(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          e.status.is_detached_head ? (o(), b(Ae, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              g(A, {
                variant: "primary",
                size: "sm",
                onClick: z[3] || (z[3] = (H) => y.$emit("create-branch"))
              }, {
                default: a(() => [...z[14] || (z[14] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          p.value ? (o(), n("div", zn, [
            g(ke, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...z[15] || (z[15] = [
                h(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            $.value.length > 0 ? (o(), b(Ae, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${$.value.length} committed workflow${$.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: $.value.map((H) => `${H.name} — ${H.issue_summary}`)
            }, {
              actions: a(() => [
                g(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[4] || (z[4] = (H) => y.$emit("view-workflows"))
                }, {
                  default: a(() => [...z[16] || (z[16] = [
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
              items: k.value.map((H) => `${H.name} — ${H.issue_summary}`)
            }, {
              actions: a(() => [
                g(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[5] || (z[5] = (H) => y.$emit("view-workflows"))
                }, {
                  default: a(() => [...z[17] || (z[17] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            e.status.missing_models_count > 0 && !I.value ? (o(), b(Ae, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                g(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[6] || (z[6] = (H) => y.$emit("view-workflows"))
                }, {
                  default: a(() => [...z[18] || (z[18] = [
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
              description: _.value
            }, {
              actions: a(() => [
                g(A, {
                  variant: "secondary",
                  size: "sm",
                  onClick: d
                }, {
                  default: a(() => [...z[19] || (z[19] = [
                    h(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                g(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[7] || (z[7] = (H) => y.$emit("commit-changes"))
                }, {
                  default: a(() => [...z[20] || (z[20] = [
                    h(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            e.status.comparison.is_synced ? c("", !0) : (o(), b(Ae, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                g(A, {
                  variant: "secondary",
                  size: "sm",
                  onClick: z[8] || (z[8] = (H) => y.$emit("view-debug"))
                }, {
                  default: a(() => [...z[21] || (z[21] = [
                    h(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                g(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[9] || (z[9] = (H) => y.$emit("sync-environment"))
                }, {
                  default: a(() => [...z[22] || (z[22] = [
                    h(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !p.value && !f.value ? (o(), b(Ie, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(Ct, {
        show: l.value,
        status: e.status,
        onClose: z[10] || (z[10] = (H) => l.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Ln = /* @__PURE__ */ K(Mn, [["__scopeId", "data-v-aabebf39"]]), Rn = ["type", "value", "placeholder", "disabled"], Nn = /* @__PURE__ */ j({
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
  setup(e, { expose: r, emit: s }) {
    const l = e, u = s, v = C(null);
    function d(m) {
      const f = m.target.value;
      u("update:modelValue", f);
    }
    return ge(() => {
      l.autoFocus && v.value && v.value.focus();
    }), r({
      focus: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.blur();
      }
    }), (m, f) => (o(), n("input", {
      ref_key: "inputRef",
      ref: v,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Z(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: d,
      onKeyup: [
        f[0] || (f[0] = Le((w) => m.$emit("enter"), ["enter"])),
        f[1] || (f[1] = Le((w) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: f[2] || (f[2] = (w) => m.$emit("focus")),
      onBlur: f[3] || (f[3] = (w) => m.$emit("blur"))
    }, null, 42, Rn));
  }
}), ot = /* @__PURE__ */ K(Nn, [["__scopeId", "data-v-0380d08f"]]), Un = { class: "branch-create-form" }, Bn = { class: "form-actions" }, Tn = /* @__PURE__ */ j({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: r }) {
    const s = r, l = C(""), u = T(() => {
      const m = l.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      u.value && (s("create", l.value.trim()), l.value = "");
    }
    function d() {
      l.value = "", s("cancel");
    }
    return (m, f) => (o(), n("div", Un, [
      g(ot, {
        modelValue: l.value,
        "onUpdate:modelValue": f[0] || (f[0] = (w) => l.value = w),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: d
      }, null, 8, ["modelValue"]),
      t("div", Bn, [
        g(A, {
          variant: "primary",
          size: "sm",
          disabled: !u.value,
          onClick: v
        }, {
          default: a(() => [...f[1] || (f[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(A, {
          variant: "secondary",
          size: "sm",
          onClick: d
        }, {
          default: a(() => [...f[2] || (f[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Dn = /* @__PURE__ */ K(Tn, [["__scopeId", "data-v-7c500394"]]), On = { class: "branch-list-item__indicator" }, Vn = { class: "branch-list-item__name" }, An = {
  key: 0,
  class: "branch-list-item__actions"
}, Pn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Wn = /* @__PURE__ */ j({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (r, s) => (o(), n("div", {
      class: Z(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (l) => e.clickable && r.$emit("click"))
    }, [
      t("span", On, i(e.isCurrent ? "●" : "○"), 1),
      t("span", Vn, i(e.branchName), 1),
      r.$slots.actions || e.showCurrentLabel ? (o(), n("div", An, [
        se(r.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (o(), n("span", Pn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Fn = /* @__PURE__ */ K(Wn, [["__scopeId", "data-v-c6581a24"]]), Gn = {
  key: 2,
  class: "branch-list"
}, Hn = /* @__PURE__ */ j({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: r }) {
    const s = r, l = C(!1);
    function u(d) {
      s("create", d), v();
    }
    function v() {
      l.value = !1;
    }
    return (d, m) => (o(), b(pe, null, {
      header: a(() => [
        g(ye, { title: "BRANCHES" }, {
          actions: a(() => [
            g(A, {
              variant: "ghost",
              size: "sm",
              onClick: m[0] || (m[0] = (f) => l.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...m[1] || (m[1] = [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", {
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
        l.value ? (o(), b(Dn, {
          key: 0,
          onCreate: u,
          onCancel: v
        })) : c("", !0),
        e.branches.length === 0 ? (o(), b(Ie, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Gn, [
          (o(!0), n(F, null, X(e.branches, (f) => (o(), b(Fn, {
            key: f.name,
            "branch-name": f.name,
            "is-current": f.is_current
          }, {
            actions: a(() => [
              f.is_current ? c("", !0) : (o(), b(A, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (w) => d.$emit("switch", f.name)
              }, {
                default: a(() => [...m[2] || (m[2] = [
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
}), jn = /* @__PURE__ */ K(Hn, [["__scopeId", "data-v-763d6ec4"]]), Kn = { class: "commit-list" }, qn = /* @__PURE__ */ j({
  __name: "CommitList",
  setup(e) {
    return (r, s) => (o(), n("div", Kn, [
      se(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Yn = /* @__PURE__ */ K(qn, [["__scopeId", "data-v-8c5ee761"]]), Xn = { class: "commit-hash" }, Zn = /* @__PURE__ */ j({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const r = e, s = T(() => r.hash.slice(0, r.length));
    return (l, u) => (o(), n("span", Xn, i(s.value), 1));
  }
}), Ut = /* @__PURE__ */ K(Zn, [["__scopeId", "data-v-7c333cc6"]]), Jn = { class: "commit-message" }, Qn = { class: "commit-date" }, ea = /* @__PURE__ */ j({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const s = e, l = r;
    function u() {
      s.clickable && l("click");
    }
    return (v, d) => (o(), n("div", {
      class: Z(["commit-item", { clickable: e.clickable }]),
      onClick: u
    }, [
      g(Ut, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Jn, i(e.message), 1),
      t("span", Qn, i(e.relativeDate), 1),
      v.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: d[0] || (d[0] = he(() => {
        }, ["stop"]))
      }, [
        se(v.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ta = /* @__PURE__ */ K(ea, [["__scopeId", "data-v-dd7c621b"]]), oa = /* @__PURE__ */ j({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (r, s) => (o(), b(pe, null, {
      header: a(() => [
        g(ye, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (o(), b(Ie, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), b(Yn, { key: 1 }, {
          default: a(() => [
            (o(!0), n(F, null, X(e.commits, (l) => (o(), b(ta, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (u) => r.$emit("select", l)
            }, {
              actions: a(() => [
                g(A, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => r.$emit("checkout", l),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...s[0] || (s[0] = [
                    t("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
}), sa = /* @__PURE__ */ K(oa, [["__scopeId", "data-v-981c3c64"]]), xt = [
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
  ...Array(12).fill(null).map((e, r) => ({
    name: `synced-workflow-${r + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + r,
    model_count: 1 + r % 3,
    sync_state: "synced"
  }))
], na = {
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
}, Bt = [
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
], aa = [
  ...Bt,
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
], la = [
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
], ie = {
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
  switchEnvironment: async (e) => {
    await le(500), console.log(`[MOCK] Switching to environment: ${e}`);
  },
  createEnvironment: async (e, r, s) => {
    await le(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${r}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (e) => {
    await le(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await le(400), xt),
  getWorkflowDetails: async (e) => (await le(300), na[e] || {
    name: e,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (e) => (await le(800), {
    workflow_name: e,
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
        workflow: e,
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
        workflow: e,
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
        workflow: e,
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
  installWorkflowDeps: async (e, r, s) => {
    await le(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${r}, models=${s}`);
  },
  setModelImportance: async (e, r, s) => {
    await le(200), console.log(`[MOCK] Setting ${r} importance to ${s} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await le(350), Bt),
  getWorkspaceModels: async () => (await le(400), aa),
  updateModelSource: async (e, r) => {
    await le(300), console.log(`[MOCK] Updating source for ${e}: ${r}`);
  },
  deleteModel: async (e) => {
    await le(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await le(3e3), console.log("[MOCK] Downloading model:", e);
  },
  // Node Management
  getNodes: async () => {
    await le(350);
    const e = lt.filter((s) => s.installed), r = lt.filter((s) => !s.installed);
    return {
      nodes: lt,
      total_count: lt.length,
      installed_count: e.length,
      missing_count: r.length
    };
  },
  installNode: async (e) => {
    await le(2500), console.log(`[MOCK] Installing node: ${e}`);
  },
  updateNode: async (e) => {
    await le(2e3), console.log(`[MOCK] Updating node: ${e}`);
  },
  uninstallNode: async (e) => {
    await le(1e3), console.log(`[MOCK] Uninstalling node: ${e}`);
  },
  // Settings & Debug
  getConfig: async () => (await le(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (e) => {
    await le(300), console.log("[MOCK] Updating config:", e);
  },
  getEnvironmentLogs: async (e, r) => (await le(250), (e ? it.filter((l) => l.level === e) : it).slice(0, r || 100)),
  getWorkspaceLogs: async (e, r) => {
    await le(300);
    const s = [...it, ...it.map((u) => ({
      ...u,
      name: "comfygit.workspace"
    }))];
    return (e ? s.filter((u) => u.level === e) : s).slice(0, r || 100);
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
      synced: xt.filter((e) => e.status === "synced").map((e) => e.name),
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
  getCommitHistory: async (e = 10) => (await le(300), la.slice(0, e)),
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
  addRemote: async (e, r) => {
    await le(400), console.log(`[MOCK] Adding remote: ${e} -> ${r}`);
  },
  removeRemote: async (e) => {
    await le(350), console.log(`[MOCK] Removing remote: ${e}`);
  },
  updateRemoteUrl: async (e, r, s) => {
    await le(400), console.log(`[MOCK] Updating remote ${e}: ${r}${s ? ` (push: ${s})` : ""}`);
  },
  fetchRemote: async (e) => {
    await le(1500), console.log(`[MOCK] Fetching from remote: ${e}`);
  },
  getRemoteSyncStatus: async (e) => (await le(300), {
    remote: e,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
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
  analyzeWorkflow: async (e) => (await le(600), {
    // Scenario 1: Only unresolved nodes (no matching packages found)
    "test-unresolved-nodes.json": {
      workflow: e,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "CustomUpscaler", workflow: e, node_id: "node1" },
            reason: "not_found_in_registry"
          },
          {
            reference: { node_type: "MagicNode", workflow: e, node_id: "node2" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: e, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
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
      workflow: e,
      nodes: {
        resolved: [
          {
            reference: { node_type: "LoadCheckpoint", workflow: e },
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
              workflow: e,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "super_rare_model.safetensors"
            },
            reason: "not_found_in_index"
          },
          {
            reference: {
              workflow: e,
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
      workflow: e,
      nodes: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: { node_type: "FluxLoader", workflow: e, node_id: "node1" },
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
            reference: { node_type: "ImageEnhancer", workflow: e, node_id: "node2" },
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
            reference: { workflow: e, node_id: "5", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
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
      workflow: e,
      nodes: {
        resolved: [
          {
            reference: { node_type: "CheckpointLoader", workflow: e },
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
              workflow: e,
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
      workflow: e,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "UltraUpscaler", workflow: e, node_id: "node1" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: [
          {
            reference: { node_type: "FluxSampler", workflow: e, node_id: "node2" },
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
            reference: { workflow: e, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [
          {
            reference: {
              workflow: e,
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
              workflow: e,
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
      workflow: e,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "CLIPTextEncode", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "VAEDecode", workflow: e },
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
            reference: { workflow: e, node_id: "1", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "fff666", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          },
          {
            reference: { workflow: e, node_id: "2", node_type: "VAELoader", widget_name: "vae", widget_value: "sdxl_vae.safetensors" },
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
  }[e] || {
    workflow: e,
    nodes: {
      resolved: [
        {
          reference: { node_type: "KSampler", workflow: e },
          package: { package_id: "comfyui-core", title: "ComfyUI Core" },
          match_confidence: 1,
          match_type: "builtin",
          is_installed: !0
        }
      ],
      unresolved: [
        {
          reference: { node_type: "CustomNode1", workflow: e, node_id: "node1" },
          reason: "not_found_in_registry"
        }
      ],
      ambiguous: [
        {
          reference: { node_type: "FluxNode", workflow: e, node_id: "node2" },
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
            workflow: e,
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
  applyResolution: async (e, r, s) => {
    await le(800);
    const l = [], u = [];
    return r.forEach((v, d) => {
      v.action === "install" && v.package_id && l.push(v.package_id);
    }), s.forEach((v, d) => {
      v.action === "download" && v.url ? u.push({
        filename: d,
        url: v.url,
        size: 65e8,
        target_path: v.target_path || `models/${d}`
      }) : v.action === "select" && v.selected_model && console.log(`[MOCK] Selected existing model: ${v.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: l,
      models_to_download: u,
      estimated_time_seconds: l.length * 30 + u.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (e, r = 10) => {
    await le(400);
    const s = [
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
      results: s.slice(0, r),
      total: s.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (e, r = 10) => {
    await le(400);
    const s = [
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
      results: s.slice(0, r),
      total: s.length
    };
  }
};
function le(e) {
  return new Promise((r) => setTimeout(r, e));
}
function rt() {
  return !0;
}
function we() {
  const e = C(!1), r = C(null);
  async function s(q, P) {
    var oe;
    if (!((oe = window.app) != null && oe.api))
      throw new Error("ComfyUI API not available");
    const W = await window.app.api.fetchApi(q, P);
    if (!W.ok) {
      const re = await W.json().catch(() => ({}));
      throw new Error(re.error || re.message || `Request failed: ${W.status}`);
    }
    return W.json();
  }
  async function l() {
    return ie.getStatus();
  }
  async function u(q, P = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: P })
    });
  }
  async function v(q = 10, P = 0) {
    {
      const W = await ie.getCommitHistory(q);
      return {
        commits: W,
        total: W.length,
        offset: P
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
  async function m() {
    return ie.getBranches();
  }
  async function f(q) {
    return s(`/v2/comfygit/commit/${q}`);
  }
  async function w(q, P = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: P })
    });
  }
  async function x(q, P = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: P })
    });
  }
  async function S(q, P = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: P })
    });
  }
  async function $() {
    return ie.getEnvironments();
  }
  async function k(q) {
    return ie.switchEnvironment(q);
  }
  async function I() {
    return null;
  }
  async function p(q, P, W) {
    return await ie.createEnvironment(q, P, W), { status: "success" };
  }
  async function _(q) {
    return await ie.deleteEnvironment(q), { status: "success" };
  }
  async function y() {
    return ie.getWorkflows();
  }
  async function z(q) {
    return ie.getWorkflowDetails(q);
  }
  async function H(q) {
    return ie.resolveWorkflow(q);
  }
  async function U(q, P, W) {
    return await ie.installWorkflowDeps(q, P, W), { status: "success" };
  }
  async function O(q, P, W) {
    return ie.setModelImportance(q, P, W);
  }
  async function R() {
    return ie.getEnvironmentModels();
  }
  async function D() {
    return ie.getWorkspaceModels();
  }
  async function M(q, P) {
    return ie.updateModelSource(q, P);
  }
  async function N(q) {
    return ie.deleteModel(q);
  }
  async function B(q) {
    return await ie.downloadModel(q), { status: "success" };
  }
  async function Y() {
    return ie.getConfig();
  }
  async function G(q) {
    return ie.updateConfig(q);
  }
  async function L(q, P) {
    return ie.getEnvironmentLogs(q, P);
  }
  async function J(q, P) {
    return ie.getWorkspaceLogs(q, P);
  }
  async function ne() {
    return ie.getNodes();
  }
  async function Be(q) {
    return await ie.installNode(q), { status: "success" };
  }
  async function Te(q) {
    return await ie.updateNode(q), { status: "success" };
  }
  async function de(q) {
    return await ie.uninstallNode(q), { status: "success" };
  }
  async function $e() {
    return ie.getRemotes();
  }
  async function Q(q, P) {
    return await ie.addRemote(q, P), { status: "success", remote_name: q };
  }
  async function Ee(q) {
    return await ie.removeRemote(q), { status: "success", remote_name: q };
  }
  async function qe(q, P, W) {
    return await ie.updateRemoteUrl(q, P, W), { status: "success", remote_name: q };
  }
  async function ce(q) {
    return await ie.fetchRemote(q), { status: "success", remote_name: q };
  }
  async function _e(q) {
    return ie.getRemoteSyncStatus(q);
  }
  async function Ye(q = "skip", P = !0) {
    return await new Promise((W) => setTimeout(W, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  return {
    isLoading: e,
    error: r,
    getStatus: l,
    commit: u,
    getHistory: v,
    exportEnv: d,
    // Git Operations
    getBranches: m,
    getCommitDetail: f,
    checkout: w,
    createBranch: x,
    switchBranch: S,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: k,
    getSwitchProgress: I,
    createEnvironment: p,
    deleteEnvironment: _,
    // Workflow Management
    getWorkflows: y,
    getWorkflowDetails: z,
    resolveWorkflow: H,
    installWorkflowDeps: U,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: R,
    getWorkspaceModels: D,
    updateModelSource: M,
    deleteModel: N,
    downloadModel: B,
    // Settings
    getConfig: Y,
    updateConfig: G,
    // Debug/Logs
    getEnvironmentLogs: L,
    getWorkspaceLogs: J,
    // Node Management
    getNodes: ne,
    installNode: Be,
    updateNode: Te,
    uninstallNode: de,
    // Git Remotes
    getRemotes: $e,
    addRemote: Q,
    removeRemote: Ee,
    updateRemoteUrl: qe,
    fetchRemote: ce,
    getRemoteSyncStatus: _e,
    // Environment Sync
    syncEnvironmentManually: Ye
  };
}
const ia = { class: "base-modal-header" }, ra = {
  key: 0,
  class: "base-modal-title"
}, ca = { class: "base-modal-body" }, da = {
  key: 0,
  class: "base-modal-loading"
}, ua = {
  key: 1,
  class: "base-modal-error"
}, ma = {
  key: 0,
  class: "base-modal-footer"
}, va = /* @__PURE__ */ j({
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
  setup(e, { emit: r }) {
    const s = e, l = r;
    function u() {
      s.closeOnOverlayClick && l("close");
    }
    function v(d) {
      d.key === "Escape" && l("close");
    }
    return ge(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), Jt(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (d, m) => (o(), b(We, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: u
      }, [
        t("div", {
          class: Z(["base-modal-content", e.size]),
          onClick: m[1] || (m[1] = he(() => {
          }, ["stop"]))
        }, [
          t("div", ia, [
            se(d.$slots, "header", {}, () => [
              e.title ? (o(), n("h3", ra, i(e.title), 1)) : c("", !0)
            ], !0),
            e.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (f) => d.$emit("close"))
            }, [...m[2] || (m[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : c("", !0)
          ]),
          t("div", ca, [
            e.loading ? (o(), n("div", da, "Loading...")) : e.error ? (o(), n("div", ua, i(e.error), 1)) : se(d.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          d.$slots.footer ? (o(), n("div", ma, [
            se(d.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), dt = /* @__PURE__ */ K(va, [["__scopeId", "data-v-700d367b"]]), fa = ["type", "disabled"], ga = {
  key: 0,
  class: "spinner"
}, ha = /* @__PURE__ */ j({
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
  setup(e) {
    return (r, s) => (o(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Z(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (l) => r.$emit("click", l))
    }, [
      e.loading ? (o(), n("span", ga)) : c("", !0),
      se(r.$slots, "default", {}, void 0, !0)
    ], 10, fa));
  }
}), ve = /* @__PURE__ */ K(ha, [["__scopeId", "data-v-f3452606"]]), pa = {
  key: 0,
  class: "base-title-count"
}, ya = /* @__PURE__ */ j({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (r, s) => (o(), b(wt(`h${e.level}`), {
      class: Z(["base-title", e.variant])
    }, {
      default: a(() => [
        se(r.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), n("span", pa, "(" + i(e.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), et = /* @__PURE__ */ K(ya, [["__scopeId", "data-v-5a01561d"]]), wa = ["value", "disabled"], ba = {
  key: 0,
  value: "",
  disabled: ""
}, ka = ["value"], _a = {
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
  setup(e) {
    function r(l) {
      return typeof l == "string" ? l : l.value;
    }
    function s(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, u) => (o(), n("div", {
      class: Z(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Z(["base-select", { error: !!e.error }]),
        onChange: u[0] || (u[0] = (v) => l.$emit("update:modelValue", v.target.value))
      }, [
        e.placeholder ? (o(), n("option", ba, i(e.placeholder), 1)) : c("", !0),
        (o(!0), n(F, null, X(e.options, (v) => (o(), n("option", {
          key: r(v),
          value: r(v)
        }, i(s(v)), 9, ka))), 128))
      ], 42, wa),
      e.error ? (o(), n("span", _a, i(e.error), 1)) : c("", !0)
    ], 2));
  }
}), Ca = /* @__PURE__ */ K($a, [["__scopeId", "data-v-7436d745"]]), xa = { class: "popover-header" }, Sa = { class: "popover-title" }, Ia = { class: "popover-content" }, Ea = {
  key: 0,
  class: "popover-actions"
}, za = /* @__PURE__ */ j({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (r, s) => (o(), b(We, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (l) => r.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Pe({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = he(() => {
          }, ["stop"]))
        }, [
          t("div", xa, [
            t("h4", Sa, i(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          t("div", Ia, [
            se(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (o(), n("div", Ea, [
            se(r.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Re = /* @__PURE__ */ K(za, [["__scopeId", "data-v-42815ace"]]), Ma = { class: "detail-section" }, La = {
  key: 0,
  class: "empty-message"
}, Ra = { class: "model-header" }, Na = { class: "model-name" }, Ua = { class: "model-details" }, Ba = { class: "model-row" }, Ta = { class: "model-row" }, Da = { class: "label" }, Oa = {
  key: 0,
  class: "model-row model-row-nodes"
}, Va = { class: "node-list" }, Aa = ["onClick"], Pa = {
  key: 1,
  class: "model-row"
}, Wa = { class: "value" }, Fa = {
  key: 0,
  class: "model-actions"
}, Ga = { class: "detail-section" }, Ha = {
  key: 0,
  class: "empty-message"
}, ja = { class: "node-name" }, Ka = {
  key: 0,
  class: "node-version"
}, qa = /* @__PURE__ */ j({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: r }) {
    const s = e, l = r, { getWorkflowDetails: u, setModelImportance: v, installWorkflowDeps: d } = we(), m = C(null), f = C(!1), w = C(null), x = C(!1), S = C({}), $ = C({}), k = C(!1), I = C(/* @__PURE__ */ new Set()), p = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function _(N) {
      switch (N) {
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
    function y(N) {
      switch (N) {
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
    function z(N) {
      if (!N.loaded_by || N.loaded_by.length === 0) return [];
      const B = N.hash || N.filename;
      return I.value.has(B) ? N.loaded_by : N.loaded_by.slice(0, 3);
    }
    function H(N) {
      return I.value.has(N);
    }
    function U(N) {
      I.value.has(N) ? I.value.delete(N) : I.value.add(N), I.value = new Set(I.value);
    }
    async function O() {
      f.value = !0, w.value = null;
      try {
        m.value = await u(s.workflowName);
      } catch (N) {
        w.value = N instanceof Error ? N.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function R(N, B) {
      S.value[N] = B, x.value = !0;
    }
    async function D() {
      if (!x.value) {
        l("close");
        return;
      }
      f.value = !0, w.value = null;
      try {
        for (const [N, B] of Object.entries(S.value))
          await v(s.workflowName, N, B);
        l("close");
      } catch (N) {
        w.value = N instanceof Error ? N.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    async function M(N) {
      $.value[N] = !0, w.value = null;
      try {
        await d(s.workflowName, !0, !1), await O();
      } catch (B) {
        w.value = B instanceof Error ? B.message : "Failed to install node";
      } finally {
        $.value[N] = !1;
      }
    }
    return ge(O), (N, B) => (o(), n(F, null, [
      g(dt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: w.value || void 0,
        onClose: B[5] || (B[5] = (Y) => l("close"))
      }, {
        body: a(() => [
          m.value ? (o(), n(F, { key: 0 }, [
            t("section", Ma, [
              g(et, { variant: "section" }, {
                default: a(() => [
                  h("MODELS USED (" + i(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), n("div", La, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(F, null, X(m.value.models, (Y) => (o(), n("div", {
                key: Y.hash,
                class: "model-card"
              }, [
                t("div", Ra, [
                  B[7] || (B[7] = t("span", { class: "model-icon" }, "📦", -1)),
                  t("span", Na, i(Y.filename), 1)
                ]),
                t("div", Ua, [
                  t("div", Ba, [
                    B[8] || (B[8] = t("span", { class: "label" }, "Status:", -1)),
                    t("span", {
                      class: Z(["value", _(Y.status)])
                    }, i(y(Y.status)), 3)
                  ]),
                  t("div", Ta, [
                    t("span", Da, [
                      B[9] || (B[9] = h(" Importance: ", -1)),
                      g(Nt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: B[0] || (B[0] = (G) => k.value = !0)
                      })
                    ]),
                    g(Ca, {
                      "model-value": S.value[Y.hash] || Y.importance,
                      options: p,
                      "onUpdate:modelValue": (G) => R(Y.hash, G)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  Y.loaded_by && Y.loaded_by.length > 0 ? (o(), n("div", Oa, [
                    B[10] || (B[10] = t("span", { class: "label" }, "Loaded by:", -1)),
                    t("div", Va, [
                      (o(!0), n(F, null, X(z(Y), (G, L) => (o(), n("div", {
                        key: `${G.node_id}-${L}`,
                        class: "node-reference"
                      }, i(G.node_type) + " (Node #" + i(G.node_id) + ") ", 1))), 128)),
                      Y.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (G) => U(Y.hash || Y.filename)
                      }, i(H(Y.hash || Y.filename) ? "▼ Show less" : `▶ View all (${Y.loaded_by.length})`), 9, Aa)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  Y.size_mb ? (o(), n("div", Pa, [
                    B[11] || (B[11] = t("span", { class: "label" }, "Size:", -1)),
                    t("span", Wa, i(Y.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                Y.status !== "available" ? (o(), n("div", Fa, [
                  Y.status === "downloadable" ? (o(), b(ve, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: B[1] || (B[1] = (G) => l("resolve"))
                  }, {
                    default: a(() => [...B[12] || (B[12] = [
                      h(" Download ", -1)
                    ])]),
                    _: 1
                  })) : Y.status === "path_mismatch" ? (o(), b(ve, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[2] || (B[2] = (G) => l("resolve"))
                  }, {
                    default: a(() => [...B[13] || (B[13] = [
                      h(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), b(ve, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[3] || (B[3] = (G) => l("resolve"))
                  }, {
                    default: a(() => [...B[14] || (B[14] = [
                      h(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            t("section", Ga, [
              g(et, { variant: "section" }, {
                default: a(() => [
                  h("NODES USED (" + i(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), n("div", Ha, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(F, null, X(m.value.nodes, (Y) => (o(), n("div", {
                key: Y.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Z(["node-status", Y.status === "installed" ? "installed" : "missing"])
                }, i(Y.status === "installed" ? "✓" : "✕"), 3),
                t("span", ja, i(Y.name), 1),
                Y.version ? (o(), n("span", Ka, "v" + i(Y.version), 1)) : c("", !0),
                Y.status === "missing" ? (o(), b(ve, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: $.value[Y.name],
                  onClick: (G) => M(Y.name),
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
          g(ve, {
            variant: "secondary",
            onClick: B[4] || (B[4] = (Y) => l("close"))
          }, {
            default: a(() => [...B[16] || (B[16] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          x.value ? (o(), b(ve, {
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
      g(Re, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: B[6] || (B[6] = (Y) => k.value = !1)
      }, {
        content: a(() => [...B[18] || (B[18] = [
          t("ul", { class: "importance-info-list" }, [
            t("li", null, [
              t("strong", null, "Required"),
              h(" — Must have for workflow to run")
            ]),
            t("li", null, [
              t("strong", null, "Flexible"),
              h(" — Workflow adapts if missing")
            ]),
            t("li", null, [
              t("strong", null, "Optional"),
              h(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ya = /* @__PURE__ */ K(qa, [["__scopeId", "data-v-1325d542"]]);
function Xa() {
  const e = C(null), r = C(null), s = C([]), l = C([]), u = C(!1), v = C(null);
  async function d(S, $) {
    var I;
    if (!((I = window.app) != null && I.api))
      throw new Error("ComfyUI API not available");
    const k = await window.app.api.fetchApi(S, $);
    if (!k.ok) {
      const p = await k.json().catch(() => ({})), _ = p.error || p.message || `Request failed: ${k.status}`;
      throw new Error(_);
    }
    return k.json();
  }
  async function m(S) {
    u.value = !0, v.value = null;
    try {
      let $;
      return rt() && ($ = await ie.analyzeWorkflow(S)), e.value = $, $;
    } catch ($) {
      const k = $ instanceof Error ? $.message : "Unknown error occurred";
      throw v.value = k, $;
    } finally {
      u.value = !1;
    }
  }
  async function f(S, $, k) {
    u.value = !0, v.value = null;
    try {
      let I;
      return rt() && (I = await ie.applyResolution(S, $, k)), r.value = I, I;
    } catch (I) {
      const p = I instanceof Error ? I.message : "Unknown error occurred";
      throw v.value = p, I;
    } finally {
      u.value = !1;
    }
  }
  async function w(S, $ = 10) {
    u.value = !0, v.value = null;
    try {
      let k;
      return rt() && (k = await ie.searchNodes(S, $)), s.value = k.results, k.results;
    } catch (k) {
      const I = k instanceof Error ? k.message : "Unknown error occurred";
      throw v.value = I, k;
    } finally {
      u.value = !1;
    }
  }
  async function x(S, $ = 10) {
    u.value = !0, v.value = null;
    try {
      let k;
      return rt() && (k = await ie.searchModels(S, $)), l.value = k.results, k.results;
    } catch (k) {
      const I = k instanceof Error ? k.message : "Unknown error occurred";
      throw v.value = I, k;
    } finally {
      u.value = !1;
    }
  }
  return {
    // State
    result: e,
    appliedResult: r,
    searchResults: s,
    modelSearchResults: l,
    isLoading: u,
    error: v,
    // Methods
    analyzeWorkflow: m,
    applyResolution: f,
    searchNodes: w,
    searchModels: x
  };
}
const Za = { class: "resolution-stepper" }, Ja = { class: "stepper-header" }, Qa = ["onClick"], el = { class: "step-indicator" }, tl = {
  key: 0,
  class: "step-icon"
}, ol = {
  key: 1,
  class: "step-number"
}, sl = { class: "step-label" }, nl = {
  key: 0,
  class: "step-connector"
}, al = { class: "stepper-content" }, ll = /* @__PURE__ */ j({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {}
  },
  emits: ["step-change"],
  setup(e, { emit: r }) {
    const s = e, l = r;
    function u(d) {
      return s.completedSteps.includes(d);
    }
    function v(d) {
      const m = s.steps.findIndex((w) => w.id === s.currentStep);
      return s.steps.findIndex((w) => w.id === d) > m;
    }
    return (d, m) => (o(), n("div", Za, [
      t("div", Ja, [
        (o(!0), n(F, null, X(e.steps, (f, w) => (o(), n("div", {
          key: f.id,
          class: Z(["step", {
            active: e.currentStep === f.id,
            completed: u(f.id),
            disabled: v(f.id)
          }]),
          onClick: (x) => !v(f.id) && l("step-change", f.id)
        }, [
          t("div", el, [
            u(f.id) ? (o(), n("span", tl, "✓")) : (o(), n("span", ol, i(w + 1), 1))
          ]),
          t("div", sl, i(f.label), 1),
          w < e.steps.length - 1 ? (o(), n("div", nl)) : c("", !0)
        ], 10, Qa))), 128))
      ]),
      t("div", al, [
        se(d.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), il = /* @__PURE__ */ K(ll, [["__scopeId", "data-v-0508e462"]]), rl = /* @__PURE__ */ j({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const r = e, s = T(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), l = T(() => `confidence-${s.value}`), u = T(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (v, d) => (o(), n("span", {
      class: Z(["confidence-badge", l.value, e.size])
    }, i(u.value), 3));
  }
}), He = /* @__PURE__ */ K(rl, [["__scopeId", "data-v-17ec4b80"]]), cl = { class: "item-header" }, dl = { class: "item-title" }, ul = { class: "node-type" }, ml = {
  key: 1,
  class: "match-type"
}, vl = { class: "item-actions" }, fl = { class: "item-body" }, gl = {
  key: 0,
  class: "single-option"
}, hl = { class: "package-info" }, pl = { class: "package-id" }, yl = {
  key: 0,
  class: "package-description"
}, wl = { class: "package-meta" }, bl = {
  key: 0,
  class: "repository"
}, kl = ["href"], _l = {
  key: 1,
  class: "source-badge"
}, $l = {
  key: 2,
  class: "installed-badge"
}, Cl = { class: "item-controls" }, xl = {
  key: 1,
  class: "multiple-options"
}, Sl = { class: "options-header" }, Il = { class: "options-count" }, El = { class: "options-list" }, zl = ["name", "value", "checked", "onChange"], Ml = { class: "option-content" }, Ll = { class: "option-header" }, Rl = { class: "option-package-id" }, Nl = {
  key: 0,
  class: "option-description"
}, Ul = { class: "option-meta" }, Bl = {
  key: 0,
  class: "repository"
}, Tl = {
  key: 1,
  class: "installed-badge"
}, Dl = { class: "item-controls" }, Ol = {
  key: 2,
  class: "unresolved"
}, Vl = { class: "item-controls" }, Al = /* @__PURE__ */ j({
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
  setup(e, { emit: r }) {
    const s = r;
    return (l, u) => (o(), n("div", {
      class: Z(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", cl, [
        t("div", dl, [
          t("span", ul, i(e.nodeType), 1),
          e.confidence !== void 0 ? (o(), b(He, {
            key: 0,
            confidence: e.confidence,
            size: "sm"
          }, null, 8, ["confidence"])) : c("", !0),
          e.matchType ? (o(), n("span", ml, i(e.matchType), 1)) : c("", !0)
        ]),
        t("div", vl, [
          e.isOptional ? (o(), n("button", {
            key: 1,
            class: "action-btn unmark-optional",
            onClick: u[1] || (u[1] = (v) => s("unmark-optional")),
            title: "Unmark as optional"
          }, " Required ")) : (o(), n("button", {
            key: 0,
            class: "action-btn mark-optional",
            onClick: u[0] || (u[0] = (v) => s("mark-optional")),
            title: "Mark as optional"
          }, " Optional ")),
          t("button", {
            class: "action-btn skip",
            onClick: u[2] || (u[2] = (v) => s("skip")),
            title: "Skip this node"
          }, " Skip ")
        ])
      ]),
      t("div", fl, [
        !e.hasMultipleOptions && e.packageId ? (o(), n("div", gl, [
          t("div", hl, [
            t("div", pl, i(e.packageId), 1),
            e.description ? (o(), n("div", yl, i(e.description), 1)) : c("", !0),
            t("div", wl, [
              e.repository ? (o(), n("span", bl, [
                t("a", {
                  href: e.repository,
                  target: "_blank",
                  rel: "noopener"
                }, i(e.repository), 9, kl)
              ])) : c("", !0),
              e.source ? (o(), n("span", _l, i(e.source), 1)) : c("", !0),
              e.isInstalled ? (o(), n("span", $l, "Already Installed")) : c("", !0)
            ])
          ]),
          t("div", Cl, [
            t("button", {
              class: "action-btn refine",
              onClick: u[3] || (u[3] = (v) => s("refine-search"))
            }, " Refine Search "),
            t("button", {
              class: "action-btn manual",
              onClick: u[4] || (u[4] = (v) => s("manual-entry"))
            }, " Enter Manually ")
          ])
        ])) : e.hasMultipleOptions && e.options ? (o(), n("div", xl, [
          t("div", Sl, [
            t("span", Il, i(e.options.length) + " possible matches found", 1)
          ]),
          t("div", El, [
            (o(!0), n(F, null, X(e.options, (v, d) => (o(), n("label", {
              key: v.package_id,
              class: Z(["option-card", { selected: e.selectedOptionIndex === d }])
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: d,
                checked: e.selectedOptionIndex === d,
                onChange: (m) => s("option-selected", d)
              }, null, 40, zl),
              t("div", Ml, [
                t("div", Ll, [
                  t("span", Rl, i(v.package_id), 1),
                  g(He, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.description ? (o(), n("div", Nl, i(v.description), 1)) : c("", !0),
                t("div", Ul, [
                  v.repository ? (o(), n("span", Bl, i(v.repository), 1)) : c("", !0),
                  v.is_installed ? (o(), n("span", Tl, "Installed")) : c("", !0)
                ])
              ])
            ], 2))), 128))
          ]),
          t("div", Dl, [
            t("button", {
              class: "action-btn refine",
              onClick: u[5] || (u[5] = (v) => s("refine-search"))
            }, " Refine Search "),
            t("button", {
              class: "action-btn manual",
              onClick: u[6] || (u[6] = (v) => s("manual-entry"))
            }, " Enter Manually ")
          ])
        ])) : (o(), n("div", Ol, [
          u[9] || (u[9] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "No matches found for this node type")
          ], -1)),
          t("div", Vl, [
            t("button", {
              class: "action-btn search",
              onClick: u[7] || (u[7] = (v) => s("search"))
            }, " Search Registry "),
            t("button", {
              class: "action-btn manual primary",
              onClick: u[8] || (u[8] = (v) => s("manual-entry"))
            }, " Enter Manually ")
          ])
        ]))
      ])
    ], 2));
  }
}), Pl = /* @__PURE__ */ K(Al, [["__scopeId", "data-v-2da112a3"]]), Wl = { class: "node-resolution-step" }, Fl = { class: "step-header" }, Gl = { class: "step-progress" }, Hl = { class: "progress-text" }, jl = { class: "progress-bar" }, Kl = {
  key: 0,
  class: "step-body"
}, ql = { class: "step-footer" }, Yl = ["disabled"], Xl = ["disabled"], Zl = ["disabled"], Jl = {
  key: 1,
  class: "search-panel"
}, Ql = { class: "search-panel-header" }, ei = { class: "search-panel-body" }, ti = {
  key: 0,
  class: "search-results"
}, oi = ["onClick"], si = { class: "result-header" }, ni = { class: "result-package-id" }, ai = {
  key: 0,
  class: "result-description"
}, li = { class: "result-meta" }, ii = {
  key: 0,
  class: "repository"
}, ri = {
  key: 1,
  class: "installed-badge"
}, ci = {
  key: 1,
  class: "no-results"
}, di = {
  key: 2,
  class: "searching"
}, ui = {
  key: 2,
  class: "manual-entry-panel"
}, mi = { class: "manual-entry-header" }, vi = { class: "manual-entry-body" }, fi = { class: "form-label" }, gi = { class: "manual-entry-actions" }, hi = ["disabled"], pi = /* @__PURE__ */ j({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    currentIndex: {},
    nodeChoices: {},
    showSearch: { type: Boolean },
    showManualEntry: { type: Boolean },
    searchResults: {},
    isSearching: { type: Boolean }
  },
  emits: ["previous", "next", "complete", "mark-optional", "unmark-optional", "skip", "refine-search", "manual-entry", "search", "option-selected", "close-search", "close-manual-entry", "search-input", "search-result-selected", "manual-submit"],
  setup(e, { emit: r }) {
    const s = e, l = r, u = C(""), v = C(""), d = T(() => s.nodes[s.currentIndex]), m = T(() => s.nodes.length), f = T(() => s.currentIndex === m.value - 1), w = T(
      () => m.value > 0 ? (s.currentIndex + 1) / m.value * 100 : 0
    ), x = T(() => s.currentIndex > 0), S = T(() => {
      if (!d.value)
        return console.log("[NodeResolutionStep] canContinue: no current node"), !1;
      const I = s.nodeChoices && s.nodeChoices.has(d.value.node_type);
      console.log("[NodeResolutionStep] canContinue check:", {
        nodeType: d.value.node_type,
        hasChoice: I,
        package_id: d.value.package_id,
        is_optional: d.value.is_optional,
        selected_option_index: d.value.selected_option_index,
        nodeChoices: s.nodeChoices ? Array.from(s.nodeChoices.entries()) : "none"
      });
      const p = !!(d.value.package_id || d.value.is_optional || d.value.selected_option_index !== void 0 || I);
      return console.log("[NodeResolutionStep] canContinue result:", p), p;
    });
    function $() {
      l("search-input", u.value);
    }
    function k() {
      v.value.trim() && (l("manual-submit", v.value.trim()), v.value = "");
    }
    return (I, p) => (o(), n("div", Wl, [
      t("div", Fl, [
        p[15] || (p[15] = t("h3", { class: "step-title" }, "Resolve Missing Nodes", -1)),
        t("div", Gl, [
          t("span", Hl, i(e.currentIndex + 1) + " of " + i(m.value), 1),
          t("div", jl, [
            t("div", {
              class: "progress-fill",
              style: Pe({ width: `${w.value}%` })
            }, null, 4)
          ])
        ])
      ]),
      d.value ? (o(), n("div", Kl, [
        g(Pl, {
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
          onMarkOptional: p[0] || (p[0] = (_) => l("mark-optional", d.value.node_type)),
          onUnmarkOptional: p[1] || (p[1] = (_) => l("unmark-optional", d.value.node_type)),
          onSkip: p[2] || (p[2] = (_) => l("skip", d.value.node_type)),
          onRefineSearch: p[3] || (p[3] = (_) => l("refine-search", d.value.node_type)),
          onManualEntry: p[4] || (p[4] = (_) => l("manual-entry", d.value.node_type)),
          onSearch: p[5] || (p[5] = (_) => l("search", d.value.node_type)),
          onOptionSelected: p[6] || (p[6] = (_) => l("option-selected", d.value.node_type, _))
        }, null, 8, ["node-type", "package-id", "confidence", "match-type", "description", "repository", "source", "is-installed", "is-optional", "has-multiple-options", "options", "selected-option-index"])
      ])) : c("", !0),
      t("div", ql, [
        t("button", {
          class: "nav-btn prev",
          disabled: !x.value,
          onClick: p[7] || (p[7] = (_) => l("previous"))
        }, " ← Previous ", 8, Yl),
        f.value ? (o(), n("button", {
          key: 1,
          class: "nav-btn next primary",
          disabled: !S.value,
          onClick: p[9] || (p[9] = (_) => l("complete"))
        }, " Continue to Models → ", 8, Zl)) : (o(), n("button", {
          key: 0,
          class: "nav-btn next primary",
          disabled: !S.value,
          onClick: p[8] || (p[8] = (_) => l("next"))
        }, " Continue → ", 8, Xl))
      ]),
      e.showSearch ? (o(), n("div", Jl, [
        t("div", Ql, [
          p[16] || (p[16] = t("h4", null, "Search for Node Package", -1)),
          t("button", {
            class: "close-btn",
            onClick: p[10] || (p[10] = (_) => l("close-search"))
          }, "✕")
        ]),
        t("div", ei, [
          Je(t("input", {
            "onUpdate:modelValue": p[11] || (p[11] = (_) => u.value = _),
            type: "text",
            class: "search-input",
            placeholder: "Search by node type, package name, or description...",
            onInput: $
          }, null, 544), [
            [Qe, u.value]
          ]),
          e.searchResults.length > 0 ? (o(), n("div", ti, [
            (o(!0), n(F, null, X(e.searchResults, (_) => (o(), n("div", {
              key: _.package_id,
              class: "search-result-item",
              onClick: (y) => l("search-result-selected", _)
            }, [
              t("div", si, [
                t("span", ni, i(_.package_id), 1),
                g(He, {
                  confidence: _.match_confidence,
                  size: "sm"
                }, null, 8, ["confidence"])
              ]),
              _.description ? (o(), n("div", ai, i(_.description), 1)) : c("", !0),
              t("div", li, [
                _.repository ? (o(), n("span", ii, i(_.repository), 1)) : c("", !0),
                _.is_installed ? (o(), n("span", ri, "Installed")) : c("", !0)
              ])
            ], 8, oi))), 128))
          ])) : u.value && !e.isSearching ? (o(), n("div", ci, [
            p[17] || (p[17] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("span", null, 'No packages found matching "' + i(u.value) + '"', 1)
          ])) : c("", !0),
          e.isSearching ? (o(), n("div", di, [...p[18] || (p[18] = [
            t("span", null, "Searching...", -1)
          ])])) : c("", !0)
        ])
      ])) : c("", !0),
      e.showManualEntry ? (o(), n("div", ui, [
        t("div", mi, [
          p[19] || (p[19] = t("h4", null, "Enter Package Manually", -1)),
          t("button", {
            class: "close-btn",
            onClick: p[12] || (p[12] = (_) => l("close-manual-entry"))
          }, "✕")
        ]),
        t("div", vi, [
          t("label", fi, [
            p[20] || (p[20] = h(" Package ID or GitHub URL ", -1)),
            Je(t("input", {
              "onUpdate:modelValue": p[13] || (p[13] = (_) => v.value = _),
              type: "text",
              class: "manual-input",
              placeholder: "e.g., comfyui-my-package or https://github.com/user/repo"
            }, null, 512), [
              [Qe, v.value]
            ])
          ]),
          t("div", gi, [
            t("button", {
              class: "btn secondary",
              onClick: p[14] || (p[14] = (_) => l("close-manual-entry"))
            }, " Cancel "),
            t("button", {
              class: "btn primary",
              disabled: !v.value.trim(),
              onClick: k
            }, " Add Package ", 8, hi)
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), yi = /* @__PURE__ */ K(pi, [["__scopeId", "data-v-42410b7e"]]), wi = { class: "model-header" }, bi = { class: "model-filename" }, ki = { class: "node-type" }, _i = {
  key: 0,
  class: "model-meta"
}, $i = {
  key: 0,
  class: "category"
}, Ci = {
  key: 1,
  class: "size"
}, xi = {
  key: 3,
  class: "optional-badge"
}, Si = {
  key: 1,
  class: "model-options"
}, Ii = ["onClick"], Ei = ["name", "checked", "onChange"], zi = { class: "option-details" }, Mi = { class: "option-filename" }, Li = { class: "option-meta" }, Ri = { class: "size" }, Ni = { class: "category" }, Ui = { class: "option-path" }, Bi = { class: "optional-checkbox" }, Ti = ["checked"], Di = {
  key: 2,
  class: "model-actions"
}, Oi = /* @__PURE__ */ j({
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
  setup(e, { emit: r }) {
    const s = e, l = r, u = C({
      "has-options": s.hasMultipleOptions,
      "is-optional": s.isOptional
    });
    function v(w) {
      l("option-selected", w);
    }
    function d() {
      s.isOptional ? l("unmark-optional") : l("mark-optional");
    }
    function m() {
      l("mark-optional");
    }
    function f(w) {
      if (!w) return "Unknown size";
      const x = w / (1024 * 1024 * 1024);
      return x >= 1 ? `${x.toFixed(2)} GB` : `${(w / (1024 * 1024)).toFixed(2)} MB`;
    }
    return (w, x) => (o(), n("div", {
      class: Z(["model-item", u.value])
    }, [
      t("div", wi, [
        t("div", bi, i(e.filename), 1),
        t("div", ki, [
          x[3] || (x[3] = h("Used by: ", -1)),
          t("code", null, i(e.nodeType), 1)
        ])
      ]),
      e.category || e.size || e.confidence !== void 0 || e.isOptional ? (o(), n("div", _i, [
        e.category ? (o(), n("span", $i, i(e.category), 1)) : c("", !0),
        e.size ? (o(), n("span", Ci, i(f(e.size)), 1)) : c("", !0),
        e.confidence !== void 0 ? (o(), b(He, {
          key: 2,
          confidence: e.confidence,
          "match-type": e.matchType,
          size: "sm"
        }, null, 8, ["confidence", "match-type"])) : c("", !0),
        e.isOptional ? (o(), n("span", xi, "OPTIONAL")) : c("", !0)
      ])) : c("", !0),
      e.hasMultipleOptions && e.options ? (o(), n("div", Si, [
        x[5] || (x[5] = t("h4", { class: "options-title" }, "Choose model:", -1)),
        (o(!0), n(F, null, X(e.options, (S, $) => (o(), n("div", {
          key: S.model.hash,
          class: Z(["option-card", { selected: e.selectedOptionIndex === $ }]),
          onClick: (k) => v($)
        }, [
          t("input", {
            type: "radio",
            name: `model-${e.filename}`,
            checked: e.selectedOptionIndex === $,
            onChange: (k) => v($)
          }, null, 40, Ei),
          t("div", zi, [
            t("div", Mi, i(S.model.filename), 1),
            t("div", Li, [
              g(He, {
                confidence: S.match_confidence,
                "match-type": S.match_type,
                size: "sm"
              }, null, 8, ["confidence", "match-type"]),
              t("span", Ri, i(f(S.model.size)), 1),
              t("span", Ni, i(S.model.category), 1)
            ]),
            t("div", Ui, i(S.model.relative_path), 1)
          ])
        ], 10, Ii))), 128)),
        t("label", Bi, [
          t("input", {
            type: "checkbox",
            checked: e.isOptional,
            onChange: d
          }, null, 40, Ti),
          x[4] || (x[4] = h(" Mark as optional (workflow works without it) ", -1))
        ])
      ])) : (o(), n("div", Di, [
        t("button", {
          class: "action-btn primary",
          onClick: x[0] || (x[0] = (S) => l("search"))
        }, " 🔍 Search Workspace "),
        t("button", {
          class: "action-btn secondary",
          onClick: x[1] || (x[1] = (S) => l("download-url"))
        }, " 📥 Enter Download URL "),
        t("button", {
          class: "action-btn secondary",
          onClick: m
        }, " ○ Mark as Optional "),
        t("button", {
          class: "action-btn ghost",
          onClick: x[2] || (x[2] = (S) => l("skip"))
        }, " Skip for Now ")
      ]))
    ], 2));
  }
}), Vi = /* @__PURE__ */ K(Oi, [["__scopeId", "data-v-28d15172"]]), Ai = { class: "model-resolution-step" }, Pi = { class: "step-header" }, Wi = { class: "step-progress" }, Fi = { class: "progress-text" }, Gi = { class: "progress-bar" }, Hi = {
  key: 0,
  class: "step-body"
}, ji = { class: "step-footer" }, Ki = ["disabled"], qi = ["disabled"], Yi = ["disabled"], Xi = {
  key: 1,
  class: "search-panel"
}, Zi = { class: "search-panel-header" }, Ji = { class: "search-panel-body" }, Qi = {
  key: 0,
  class: "search-results"
}, er = ["onClick"], tr = { class: "result-header" }, or = { class: "result-filename" }, sr = { class: "result-meta" }, nr = { class: "category" }, ar = { class: "size" }, lr = { class: "result-path" }, ir = {
  key: 1,
  class: "no-results"
}, rr = {
  key: 2,
  class: "searching"
}, cr = {
  key: 2,
  class: "manual-download-panel"
}, dr = { class: "manual-download-header" }, ur = { class: "manual-download-body" }, mr = { class: "form-label" }, vr = { class: "form-label" }, fr = { class: "manual-download-actions" }, gr = ["disabled"], hr = /* @__PURE__ */ j({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    currentIndex: {},
    modelChoices: {},
    showSearch: { type: Boolean },
    showManualDownload: { type: Boolean },
    searchResults: {},
    isSearching: { type: Boolean }
  },
  emits: ["previous", "next", "complete", "mark-optional", "unmark-optional", "skip", "refine-search", "download-url", "search", "option-selected", "close-search", "close-manual-download", "search-input", "search-result-selected", "manual-download-submit"],
  setup(e, { emit: r }) {
    const s = e, l = r, u = C(""), v = C(""), d = C(""), m = T(() => s.models[s.currentIndex]), f = T(() => s.models.length), w = T(() => s.currentIndex === f.value - 1), x = T(
      () => f.value > 0 ? (s.currentIndex + 1) / f.value * 100 : 0
    ), S = T(() => s.currentIndex > 0), $ = T(() => {
      var z;
      if (!m.value) return !1;
      const _ = ((z = m.value.reference) == null ? void 0 : z.widget_value) || m.value.filename, y = s.modelChoices && _ && s.modelChoices.has(_);
      return !!(m.value.hash || m.value.is_optional || m.value.selected_option_index !== void 0 || y);
    });
    function k() {
      l("search-input", u.value);
    }
    function I() {
      v.value.trim() && d.value.trim() && (l("manual-download-submit", v.value.trim(), d.value.trim()), v.value = "", d.value = "");
    }
    function p(_) {
      if (!_) return "Unknown size";
      const y = _ / (1024 * 1024 * 1024);
      return y >= 1 ? `${y.toFixed(2)} GB` : `${(_ / (1024 * 1024)).toFixed(2)} MB`;
    }
    return (_, y) => (o(), n("div", Ai, [
      t("div", Pi, [
        y[16] || (y[16] = t("h3", { class: "step-title" }, "Resolve Missing Models", -1)),
        t("div", Wi, [
          t("span", Fi, i(e.currentIndex + 1) + " of " + i(f.value), 1),
          t("div", Gi, [
            t("div", {
              class: "progress-fill",
              style: Pe({ width: `${x.value}%` })
            }, null, 4)
          ])
        ])
      ]),
      m.value ? (o(), n("div", Hi, [
        g(Vi, {
          filename: m.value.reference.widget_value,
          "node-type": m.value.reference.node_type,
          category: m.value.category,
          size: m.value.size,
          hash: m.value.hash,
          confidence: m.value.confidence,
          "match-type": m.value.match_type,
          "is-optional": m.value.is_optional,
          "has-multiple-options": !!(m.value.options && m.value.options.length > 0),
          options: m.value.options,
          "selected-option-index": m.value.selected_option_index,
          onMarkOptional: y[0] || (y[0] = (z) => l("mark-optional", m.value.reference.widget_value)),
          onUnmarkOptional: y[1] || (y[1] = (z) => l("unmark-optional", m.value.reference.widget_value)),
          onSkip: y[2] || (y[2] = (z) => l("skip", m.value.reference.widget_value)),
          onRefineSearch: y[3] || (y[3] = (z) => l("refine-search", m.value.reference.widget_value)),
          onDownloadUrl: y[4] || (y[4] = (z) => l("download-url", m.value.reference.widget_value)),
          onSearch: y[5] || (y[5] = (z) => l("search", m.value.reference.widget_value)),
          onOptionSelected: y[6] || (y[6] = (z) => l("option-selected", m.value.reference.widget_value, z))
        }, null, 8, ["filename", "node-type", "category", "size", "hash", "confidence", "match-type", "is-optional", "has-multiple-options", "options", "selected-option-index"])
      ])) : c("", !0),
      t("div", ji, [
        t("button", {
          class: "nav-btn prev",
          disabled: !S.value,
          onClick: y[7] || (y[7] = (z) => l("previous"))
        }, " ← Previous ", 8, Ki),
        w.value ? (o(), n("button", {
          key: 1,
          class: "nav-btn next primary",
          disabled: !$.value,
          onClick: y[9] || (y[9] = (z) => l("complete"))
        }, " Continue to Review → ", 8, Yi)) : (o(), n("button", {
          key: 0,
          class: "nav-btn next primary",
          disabled: !$.value,
          onClick: y[8] || (y[8] = (z) => l("next"))
        }, " Continue → ", 8, qi))
      ]),
      e.showSearch ? (o(), n("div", Xi, [
        t("div", Zi, [
          y[17] || (y[17] = t("h4", null, "Search for Model", -1)),
          t("button", {
            class: "close-btn",
            onClick: y[10] || (y[10] = (z) => l("close-search"))
          }, "✕")
        ]),
        t("div", Ji, [
          Je(t("input", {
            "onUpdate:modelValue": y[11] || (y[11] = (z) => u.value = z),
            type: "text",
            class: "search-input",
            placeholder: "Search by filename, category, or hash...",
            onInput: k
          }, null, 544), [
            [Qe, u.value]
          ]),
          e.searchResults && e.searchResults.length > 0 ? (o(), n("div", Qi, [
            (o(!0), n(F, null, X(e.searchResults, (z) => (o(), n("div", {
              key: z.hash,
              class: "search-result-item",
              onClick: (H) => l("search-result-selected", z)
            }, [
              t("div", tr, [
                t("span", or, i(z.filename), 1),
                g(He, {
                  confidence: z.match_confidence,
                  size: "sm"
                }, null, 8, ["confidence"])
              ]),
              t("div", sr, [
                t("span", nr, i(z.category), 1),
                y[18] || (y[18] = t("span", { class: "separator" }, "•", -1)),
                t("span", ar, i(p(z.size)), 1)
              ]),
              t("div", lr, i(z.relative_path), 1)
            ], 8, er))), 128))
          ])) : u.value && !e.isSearching ? (o(), n("div", ir, [
            y[19] || (y[19] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("span", null, 'No models found matching "' + i(u.value) + '"', 1)
          ])) : c("", !0),
          e.isSearching ? (o(), n("div", rr, [...y[20] || (y[20] = [
            t("span", null, "Searching...", -1)
          ])])) : c("", !0)
        ])
      ])) : c("", !0),
      e.showManualDownload ? (o(), n("div", cr, [
        t("div", dr, [
          y[21] || (y[21] = t("h4", null, "Enter Download URL", -1)),
          t("button", {
            class: "close-btn",
            onClick: y[12] || (y[12] = (z) => l("close-manual-download"))
          }, "✕")
        ]),
        t("div", ur, [
          t("label", mr, [
            y[22] || (y[22] = h(" Download URL ", -1)),
            Je(t("input", {
              "onUpdate:modelValue": y[13] || (y[13] = (z) => v.value = z),
              type: "url",
              class: "url-input",
              placeholder: "https://example.com/models/flux_dev.safetensors"
            }, null, 512), [
              [Qe, v.value]
            ])
          ]),
          t("label", vr, [
            y[23] || (y[23] = h(" Target Path (relative to models directory) ", -1)),
            Je(t("input", {
              "onUpdate:modelValue": y[14] || (y[14] = (z) => d.value = z),
              type: "text",
              class: "path-input",
              placeholder: "checkpoints/flux_dev.safetensors"
            }, null, 512), [
              [Qe, d.value]
            ])
          ]),
          t("div", fr, [
            t("button", {
              class: "btn secondary",
              onClick: y[15] || (y[15] = (z) => l("close-manual-download"))
            }, " Cancel "),
            t("button", {
              class: "btn primary",
              disabled: !v.value.trim() || !d.value.trim(),
              onClick: I
            }, " Add Download ", 8, gr)
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), pr = /* @__PURE__ */ K(hr, [["__scopeId", "data-v-0b520893"]]), yr = {
  key: 0,
  class: "step-content"
}, wr = { class: "analysis-summary" }, br = { class: "summary-description" }, kr = { class: "stats-grid" }, _r = { class: "stat-card" }, $r = { class: "stat-items" }, Cr = { class: "stat-item success" }, xr = { class: "stat-count" }, Sr = {
  key: 0,
  class: "stat-item warning"
}, Ir = { class: "stat-count" }, Er = {
  key: 1,
  class: "stat-item error"
}, zr = { class: "stat-count" }, Mr = { class: "stat-card" }, Lr = { class: "stat-items" }, Rr = { class: "stat-item success" }, Nr = { class: "stat-count" }, Ur = {
  key: 0,
  class: "stat-item warning"
}, Br = { class: "stat-count" }, Tr = {
  key: 1,
  class: "stat-item error"
}, Dr = { class: "stat-count" }, Or = {
  key: 0,
  class: "user-action-required"
}, Vr = {
  key: 1,
  class: "all-resolved"
}, Ar = {
  key: 3,
  class: "step-content"
}, Pr = { class: "review-summary" }, Wr = {
  key: 0,
  class: "review-section"
}, Fr = { class: "section-title" }, Gr = { class: "review-items" }, Hr = { class: "item-name" }, jr = { class: "item-choice" }, Kr = {
  key: 0,
  class: "choice-badge install"
}, qr = {
  key: 1,
  class: "choice-badge optional"
}, Yr = {
  key: 2,
  class: "choice-badge skip"
}, Xr = {
  key: 1,
  class: "review-section"
}, Zr = { class: "section-title" }, Jr = { class: "review-items" }, Qr = { class: "item-name" }, ec = { class: "item-choice" }, tc = {
  key: 0,
  class: "choice-badge install"
}, oc = {
  key: 1,
  class: "choice-badge download"
}, sc = {
  key: 2,
  class: "choice-badge optional"
}, nc = {
  key: 3,
  class: "choice-badge skip"
}, ac = {
  key: 2,
  class: "no-choices"
}, lc = /* @__PURE__ */ j({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: r }) {
    const s = e, l = r, { analyzeWorkflow: u, applyResolution: v } = Xa(), d = C(null), m = C(!1), f = C(!1), w = C(null), x = C("analysis"), S = C([]), $ = C(0), k = C(0), I = C(/* @__PURE__ */ new Map()), p = C(/* @__PURE__ */ new Map()), _ = T(() => {
      const P = [
        { id: "analysis", label: "Analysis" }
      ];
      return z.value && P.push({ id: "nodes", label: "Nodes" }), H.value && P.push({ id: "models", label: "Models" }), P.push({ id: "review", label: "Review" }), P;
    }), y = T(() => d.value ? d.value.stats.needs_user_input : !1), z = T(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), H = T(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), U = T(() => {
      if (!d.value) return [];
      const P = d.value.nodes.unresolved.map((oe) => ({
        node_type: oe.reference.node_type,
        reason: oe.reason,
        is_unresolved: !0
      })), W = d.value.nodes.ambiguous.map((oe) => ({
        node_type: oe.reference.node_type,
        has_multiple_options: !0,
        options: oe.options.map((re) => ({
          package_id: re.package.package_id,
          title: re.package.title,
          match_confidence: re.match_confidence,
          match_type: re.match_type,
          is_installed: re.is_installed
        }))
      }));
      return [...P, ...W];
    }), O = T(() => {
      if (!d.value) return [];
      const P = d.value.models.unresolved.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        reason: oe.reason,
        is_unresolved: !0
      })), W = d.value.models.ambiguous.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        has_multiple_options: !0,
        options: oe.options.map((re) => ({
          model: re.model,
          match_confidence: re.match_confidence,
          match_type: re.match_type,
          has_download_source: re.has_download_source
        }))
      }));
      return [...P, ...W];
    });
    async function R() {
      m.value = !0, w.value = null;
      try {
        d.value = await u(s.workflowName);
      } catch (P) {
        w.value = P instanceof Error ? P.message : "Failed to analyze workflow";
      } finally {
        m.value = !1;
      }
    }
    function D() {
      S.value.push("analysis"), z.value ? x.value = "nodes" : H.value ? x.value = "models" : x.value = "review";
    }
    function M(P) {
      x.value = P;
    }
    function N() {
      const P = _.value.findIndex((W) => W.id === x.value);
      P > 0 && (x.value = _.value[P - 1].id);
    }
    function B() {
      $.value++;
    }
    function Y() {
      $.value > 0 ? $.value-- : x.value = "analysis";
    }
    function G() {
      S.value.push("nodes"), H.value ? x.value = "models" : x.value = "review";
    }
    function L(P) {
      console.log("Node search:", P), I.value.set(P, {
        action: "skip"
      });
    }
    function J(P) {
      console.log("Manual entry for:", P), I.value.set(P, {
        action: "skip"
      });
    }
    function ne(P) {
      console.log("[WorkflowResolveModal] handleNodeMarkOptional called with:", P), I.value.set(P, {
        action: "optional"
      }), console.log("[WorkflowResolveModal] nodeChoices after optional:", Array.from(I.value.entries()));
    }
    function Be(P) {
      console.log("[WorkflowResolveModal] handleNodeSkip called with:", P), I.value.set(P, {
        action: "skip"
      }), console.log("[WorkflowResolveModal] nodeChoices after skip:", Array.from(I.value.entries()));
    }
    function Te(P, W) {
      const oe = U.value.find((re) => re.node_type === P);
      if (oe && oe.options && oe.options[W]) {
        const re = oe.options[W];
        I.value.set(P, {
          action: "install",
          package_id: re.package_id
        });
      }
    }
    function de() {
      k.value++;
    }
    function $e() {
      k.value > 0 ? k.value-- : x.value = z.value ? "nodes" : "analysis";
    }
    function Q() {
      S.value.push("models"), x.value = "review";
    }
    function Ee(P) {
      console.log("Model search:", P), p.value.set(P, {
        action: "skip"
      });
    }
    function qe(P, W, oe) {
      p.value.set(P, {
        action: "download",
        url: W,
        target_path: oe
      });
    }
    function ce(P) {
      p.value.set(P, {
        action: "optional"
      });
    }
    function _e(P) {
      p.value.set(P, {
        action: "skip"
      });
    }
    function Ye(P, W) {
      const oe = O.value.find((re) => re.filename === P);
      if (oe && oe.options && oe.options[W]) {
        const re = oe.options[W];
        p.value.set(P, {
          action: "select",
          selected_model: re.model
        });
      }
    }
    async function q() {
      f.value = !0, w.value = null;
      try {
        await v(s.workflowName, I.value, p.value), l("install"), l("refresh"), l("close");
      } catch (P) {
        w.value = P instanceof Error ? P.message : "Failed to apply resolution";
      } finally {
        f.value = !1;
      }
    }
    return ge(R), (P, W) => (o(), b(dt, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: m.value,
      error: w.value || void 0,
      onClose: W[1] || (W[1] = (oe) => l("close"))
    }, {
      body: a(() => [
        d.value ? (o(), b(il, {
          key: 0,
          steps: _.value,
          "current-step": x.value,
          "completed-steps": S.value,
          onStepChange: M
        }, {
          default: a(() => [
            x.value === "analysis" ? (o(), n("div", yr, [
              t("div", wr, [
                W[18] || (W[18] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", br, " Found " + i(d.value.stats.total_nodes) + " nodes and " + i(d.value.stats.total_models) + " models in this workflow. ", 1),
                t("div", kr, [
                  t("div", _r, [
                    W[8] || (W[8] = t("div", { class: "stat-header" }, "Nodes", -1)),
                    t("div", $r, [
                      t("div", Cr, [
                        W[2] || (W[2] = t("span", { class: "stat-icon" }, "✓", -1)),
                        t("span", xr, i(d.value.nodes.resolved.length), 1),
                        W[3] || (W[3] = t("span", { class: "stat-label" }, "resolved", -1))
                      ]),
                      d.value.nodes.ambiguous.length > 0 ? (o(), n("div", Sr, [
                        W[4] || (W[4] = t("span", { class: "stat-icon" }, "⚡", -1)),
                        t("span", Ir, i(d.value.nodes.ambiguous.length), 1),
                        W[5] || (W[5] = t("span", { class: "stat-label" }, "ambiguous", -1))
                      ])) : c("", !0),
                      d.value.nodes.unresolved.length > 0 ? (o(), n("div", Er, [
                        W[6] || (W[6] = t("span", { class: "stat-icon" }, "⚠", -1)),
                        t("span", zr, i(d.value.nodes.unresolved.length), 1),
                        W[7] || (W[7] = t("span", { class: "stat-label" }, "unresolved", -1))
                      ])) : c("", !0)
                    ])
                  ]),
                  t("div", Mr, [
                    W[15] || (W[15] = t("div", { class: "stat-header" }, "Models", -1)),
                    t("div", Lr, [
                      t("div", Rr, [
                        W[9] || (W[9] = t("span", { class: "stat-icon" }, "✓", -1)),
                        t("span", Nr, i(d.value.models.resolved.length), 1),
                        W[10] || (W[10] = t("span", { class: "stat-label" }, "resolved", -1))
                      ]),
                      d.value.models.ambiguous.length > 0 ? (o(), n("div", Ur, [
                        W[11] || (W[11] = t("span", { class: "stat-icon" }, "⚡", -1)),
                        t("span", Br, i(d.value.models.ambiguous.length), 1),
                        W[12] || (W[12] = t("span", { class: "stat-label" }, "ambiguous", -1))
                      ])) : c("", !0),
                      d.value.models.unresolved.length > 0 ? (o(), n("div", Tr, [
                        W[13] || (W[13] = t("span", { class: "stat-icon" }, "⚠", -1)),
                        t("span", Dr, i(d.value.models.unresolved.length), 1),
                        W[14] || (W[14] = t("span", { class: "stat-label" }, "unresolved", -1))
                      ])) : c("", !0)
                    ])
                  ])
                ]),
                y.value ? (o(), n("div", Or, [...W[16] || (W[16] = [
                  t("span", { class: "action-icon" }, "👤", -1),
                  t("span", { class: "action-text" }, "User input required to resolve dependencies", -1)
                ])])) : (o(), n("div", Vr, [...W[17] || (W[17] = [
                  t("span", { class: "success-icon" }, "✓", -1),
                  t("span", { class: "success-text" }, "All dependencies are resolved!", -1)
                ])]))
              ])
            ])) : c("", !0),
            x.value === "nodes" ? (o(), b(yi, {
              key: 1,
              nodes: U.value,
              "current-index": $.value,
              "node-choices": I.value,
              onNext: B,
              onPrevious: Y,
              onComplete: G,
              onSearch: L,
              onManualEntry: J,
              onMarkOptional: ne,
              onSkip: Be,
              onOptionSelected: Te
            }, null, 8, ["nodes", "current-index", "node-choices"])) : c("", !0),
            x.value === "models" ? (o(), b(pr, {
              key: 2,
              models: O.value,
              "current-index": k.value,
              "model-choices": p.value,
              onNext: de,
              onPrevious: $e,
              onComplete: Q,
              onSearch: Ee,
              onDownloadUrl: qe,
              onMarkOptional: ce,
              onSkip: _e,
              onOptionSelected: Ye
            }, null, 8, ["models", "current-index", "model-choices"])) : c("", !0),
            x.value === "review" ? (o(), n("div", Ar, [
              t("div", Pr, [
                W[19] || (W[19] = t("h3", { class: "summary-title" }, "Review Your Choices", -1)),
                W[20] || (W[20] = t("p", { class: "summary-description" }, " Please review the dependencies that will be installed and the actions taken. ", -1)),
                I.value.size > 0 ? (o(), n("div", Wr, [
                  t("h4", Fr, "Nodes (" + i(I.value.size) + ")", 1),
                  t("div", Gr, [
                    (o(!0), n(F, null, X(I.value, ([oe, re]) => (o(), n("div", {
                      key: oe,
                      class: "review-item"
                    }, [
                      t("div", Hr, i(oe), 1),
                      t("div", jr, [
                        re.action === "install" ? (o(), n("span", Kr, " Install: " + i(re.package_id), 1)) : re.action === "optional" ? (o(), n("span", qr, " Mark as Optional ")) : re.action === "skip" ? (o(), n("span", Yr, " Skip ")) : c("", !0)
                      ])
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.size > 0 ? (o(), n("div", Xr, [
                  t("h4", Zr, "Models (" + i(p.value.size) + ")", 1),
                  t("div", Jr, [
                    (o(!0), n(F, null, X(p.value, ([oe, re]) => {
                      var st;
                      return o(), n("div", {
                        key: oe,
                        class: "review-item"
                      }, [
                        t("div", Qr, i(oe), 1),
                        t("div", ec, [
                          re.action === "select" ? (o(), n("span", tc, " Use: " + i((st = re.selected_model) == null ? void 0 : st.filename), 1)) : re.action === "download" ? (o(), n("span", oc, " Download from URL ")) : re.action === "optional" ? (o(), n("span", sc, " Mark as Optional ")) : re.action === "skip" ? (o(), n("span", nc, " Skip ")) : c("", !0)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : c("", !0),
                I.value.size === 0 && p.value.size === 0 ? (o(), n("div", ac, " No actions selected. All items were skipped. ")) : c("", !0)
              ])
            ])) : c("", !0)
          ]),
          _: 1
        }, 8, ["steps", "current-step", "completed-steps"])) : c("", !0)
      ]),
      footer: a(() => [
        g(ve, {
          variant: "secondary",
          onClick: W[0] || (W[0] = (oe) => l("close"))
        }, {
          default: a(() => [...W[21] || (W[21] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        x.value === "analysis" ? (o(), b(ve, {
          key: 0,
          variant: "primary",
          disabled: m.value,
          onClick: D
        }, {
          default: a(() => [...W[22] || (W[22] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        x.value === "review" ? (o(), b(ve, {
          key: 1,
          variant: "secondary",
          disabled: f.value,
          onClick: N
        }, {
          default: a(() => [...W[23] || (W[23] = [
            h(" Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        x.value === "review" ? (o(), b(ve, {
          key: 2,
          variant: "primary",
          disabled: f.value,
          loading: f.value,
          onClick: q
        }, {
          default: a(() => [...W[24] || (W[24] = [
            h(" Apply ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), ic = /* @__PURE__ */ K(lc, [["__scopeId", "data-v-1f108cba"]]), rc = { class: "search-input-wrapper" }, cc = ["value", "placeholder"], dc = /* @__PURE__ */ j({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: r }) {
    const s = e, l = r, u = C(null);
    let v;
    function d(f) {
      const w = f.target.value;
      s.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        l("update:modelValue", w);
      }, s.debounce)) : l("update:modelValue", w);
    }
    function m() {
      var f;
      l("update:modelValue", ""), l("clear"), (f = u.value) == null || f.focus();
    }
    return ge(() => {
      s.autoFocus && u.value && u.value.focus();
    }), (f, w) => (o(), n("div", rc, [
      t("input", {
        ref_key: "inputRef",
        ref: u,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: d,
        onKeyup: Le(m, ["escape"])
      }, null, 40, cc),
      e.clearable && e.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), uc = /* @__PURE__ */ K(dc, [["__scopeId", "data-v-266f857a"]]), mc = { class: "search-bar" }, vc = /* @__PURE__ */ j({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (r, s) => (o(), n("div", mc, [
      g(uc, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (l) => r.$emit("update:modelValue", l)),
        onClear: s[1] || (s[1] = (l) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), je = /* @__PURE__ */ K(vc, [["__scopeId", "data-v-3d51bbfd"]]), fc = { class: "section-group" }, gc = {
  key: 0,
  class: "section-content"
}, hc = /* @__PURE__ */ j({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: r }) {
    const s = e, l = r, u = C(s.initiallyExpanded);
    function v() {
      s.collapsible && (u.value = !u.value, l("toggle", u.value));
    }
    return (d, m) => (o(), n("section", fc, [
      g(ke, {
        count: e.count,
        clickable: e.collapsible,
        expanded: u.value,
        onClick: v
      }, {
        default: a(() => [
          h(i(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || u.value ? (o(), n("div", gc, [
        se(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), me = /* @__PURE__ */ K(hc, [["__scopeId", "data-v-c48e33ed"]]), pc = { class: "item-header" }, yc = {
  key: 0,
  class: "item-icon"
}, wc = { class: "item-info" }, bc = {
  key: 0,
  class: "item-title"
}, kc = {
  key: 1,
  class: "item-subtitle"
}, _c = {
  key: 0,
  class: "item-details"
}, $c = {
  key: 1,
  class: "item-actions"
}, Cc = /* @__PURE__ */ j({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const s = e, l = T(() => s.status ? `status-${s.status}` : "");
    return (u, v) => (o(), n("div", {
      class: Z(["item-card", { clickable: e.clickable, compact: e.compact }, l.value]),
      onClick: v[0] || (v[0] = (d) => e.clickable && u.$emit("click"))
    }, [
      t("div", pc, [
        u.$slots.icon ? (o(), n("span", yc, [
          se(u.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        t("div", wc, [
          u.$slots.title ? (o(), n("div", bc, [
            se(u.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          u.$slots.subtitle ? (o(), n("div", kc, [
            se(u.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      u.$slots.details ? (o(), n("div", _c, [
        se(u.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      u.$slots.actions ? (o(), n("div", $c, [
        se(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), fe = /* @__PURE__ */ K(Cc, [["__scopeId", "data-v-cc435e0e"]]), xc = { class: "loading-state" }, Sc = { class: "loading-message" }, Ic = /* @__PURE__ */ j({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (r, s) => (o(), n("div", xc, [
      s[0] || (s[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", Sc, i(e.message), 1)
    ]));
  }
}), Ne = /* @__PURE__ */ K(Ic, [["__scopeId", "data-v-ad8436c9"]]), Ec = { class: "error-state" }, zc = { class: "error-message" }, Mc = /* @__PURE__ */ j({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (r, s) => (o(), n("div", Ec, [
      s[2] || (s[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", zc, i(e.message), 1),
      e.retry ? (o(), b(A, {
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
}), Ue = /* @__PURE__ */ K(Mc, [["__scopeId", "data-v-5397be48"]]), Lc = /* @__PURE__ */ j({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: r }) {
    const s = r, { getWorkflows: l } = we(), u = C([]), v = C(!1), d = C(null), m = C(""), f = C(!0), w = C(!1), x = C(!1), S = C(!1), $ = C(null), k = T(
      () => u.value.filter((G) => G.status === "broken")
    ), I = T(
      () => u.value.filter((G) => G.status === "new")
    ), p = T(
      () => u.value.filter((G) => G.status === "modified")
    ), _ = T(
      () => u.value.filter((G) => G.status === "synced")
    ), y = T(() => {
      if (!m.value.trim()) return u.value;
      const G = m.value.toLowerCase();
      return u.value.filter((L) => L.name.toLowerCase().includes(G));
    }), z = T(
      () => k.value.filter(
        (G) => !m.value.trim() || G.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), H = T(
      () => I.value.filter(
        (G) => !m.value.trim() || G.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), U = T(
      () => p.value.filter(
        (G) => !m.value.trim() || G.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), O = T(
      () => _.value.filter(
        (G) => !m.value.trim() || G.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), R = T(
      () => w.value ? O.value : O.value.slice(0, 5)
    );
    async function D() {
      v.value = !0, d.value = null;
      try {
        u.value = await l();
      } catch (G) {
        d.value = G instanceof Error ? G.message : "Failed to load workflows";
      } finally {
        v.value = !1;
      }
    }
    function M(G) {
      $.value = G, x.value = !0;
    }
    function N(G) {
      $.value = G, S.value = !0;
    }
    function B() {
      alert("Bulk resolution not yet implemented");
    }
    function Y() {
      s("refresh");
    }
    return ge(D), (G, L) => (o(), n(F, null, [
      g(pe, null, {
        header: a(() => [
          g(ye, { title: "WORKFLOWS" }, {
            actions: a(() => [
              k.value.length > 0 ? (o(), b(A, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: a(() => [...L[7] || (L[7] = [
                  h(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          g(je, {
            modelValue: m.value,
            "onUpdate:modelValue": L[0] || (L[0] = (J) => m.value = J),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), b(Ne, {
            key: 0,
            message: "Loading workflows..."
          })) : d.value ? (o(), b(Ue, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            z.value.length ? (o(), b(me, {
              key: 0,
              title: "BROKEN",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(z.value, (J) => (o(), b(fe, {
                  key: J.name,
                  status: "broken"
                }, {
                  icon: a(() => [...L[8] || (L[8] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(i(J.name), 1)
                  ]),
                  subtitle: a(() => [
                    h(" Missing: " + i(J.missing_nodes) + " nodes, " + i(J.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    g(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => N(J.name)
                    }, {
                      default: a(() => [...L[9] || (L[9] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => M(J.name)
                    }, {
                      default: a(() => [...L[10] || (L[10] = [
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
            H.value.length ? (o(), b(me, {
              key: 1,
              title: "NEW",
              count: H.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(H.value, (J) => (o(), b(fe, {
                  key: J.name,
                  status: "new"
                }, {
                  icon: a(() => [...L[11] || (L[11] = [
                    h("●", -1)
                  ])]),
                  title: a(() => [
                    h(i(J.name), 1)
                  ]),
                  subtitle: a(() => [...L[12] || (L[12] = [
                    h("New", -1)
                  ])]),
                  actions: a(() => [
                    g(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => M(J.name)
                    }, {
                      default: a(() => [...L[13] || (L[13] = [
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
            U.value.length ? (o(), b(me, {
              key: 2,
              title: "MODIFIED",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(U.value, (J) => (o(), b(fe, {
                  key: J.name,
                  status: "modified"
                }, {
                  icon: a(() => [...L[14] || (L[14] = [
                    h("⚡", -1)
                  ])]),
                  title: a(() => [
                    h(i(J.name), 1)
                  ]),
                  subtitle: a(() => [...L[15] || (L[15] = [
                    h("Modified", -1)
                  ])]),
                  actions: a(() => [
                    g(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => M(J.name)
                    }, {
                      default: a(() => [...L[16] || (L[16] = [
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
            O.value.length ? (o(), b(me, {
              key: 3,
              title: "SYNCED",
              count: O.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: L[2] || (L[2] = (J) => f.value = J)
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(R.value, (J) => (o(), b(fe, {
                  key: J.name,
                  status: "synced"
                }, {
                  icon: a(() => [...L[17] || (L[17] = [
                    h("✓", -1)
                  ])]),
                  title: a(() => [
                    h(i(J.name), 1)
                  ]),
                  subtitle: a(() => [...L[18] || (L[18] = [
                    h("Synced", -1)
                  ])]),
                  actions: a(() => [
                    g(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => M(J.name)
                    }, {
                      default: a(() => [...L[19] || (L[19] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !w.value && O.value.length > 5 ? (o(), b(A, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (J) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    h(" View all " + i(O.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            y.value.length ? c("", !0) : (o(), b(Ie, {
              key: 4,
              icon: "📭",
              message: m.value ? `No workflows match '${m.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      x.value && $.value ? (o(), b(Ya, {
        key: 0,
        "workflow-name": $.value,
        onClose: L[3] || (L[3] = (J) => x.value = !1),
        onResolve: L[4] || (L[4] = (J) => N($.value))
      }, null, 8, ["workflow-name"])) : c("", !0),
      S.value && $.value ? (o(), b(ic, {
        key: 1,
        "workflow-name": $.value,
        onClose: L[5] || (L[5] = (J) => S.value = !1),
        onInstall: Y,
        onRefresh: L[6] || (L[6] = (J) => s("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Rc = /* @__PURE__ */ K(Lc, [["__scopeId", "data-v-ee63730e"]]), Nc = /* @__PURE__ */ j({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (r, s) => (o(), n("div", {
      class: Z(["summary-bar", e.variant])
    }, [
      se(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ K(Nc, [["__scopeId", "data-v-ccb7816e"]]), Uc = /* @__PURE__ */ j({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: r }) {
    const s = r, { getEnvironmentModels: l, getStatus: u } = we(), v = C([]), d = C([]), m = C("production"), f = C(!1), w = C(null), x = C(""), S = C(!1);
    function $() {
      S.value = !1, s("navigate", "model-index");
    }
    const k = T(
      () => v.value.reduce((M, N) => M + (N.size || 0), 0)
    ), I = T(() => {
      if (!x.value.trim()) return v.value;
      const M = x.value.toLowerCase();
      return v.value.filter((N) => N.filename.toLowerCase().includes(M));
    }), p = T(() => {
      if (!x.value.trim()) return d.value;
      const M = x.value.toLowerCase();
      return d.value.filter((N) => N.filename.toLowerCase().includes(M));
    }), _ = T(
      () => I.value.filter((M) => M.type === "checkpoints")
    ), y = T(
      () => I.value.filter((M) => M.type === "loras")
    ), z = T(
      () => I.value.filter((M) => M.type !== "checkpoints" && M.type !== "loras")
    );
    function H(M) {
      if (!M) return "Unknown";
      const N = M / (1024 * 1024);
      return N >= 1024 ? `${(N / 1024).toFixed(1)} GB` : `${N.toFixed(0)} MB`;
    }
    function U(M) {
      s("navigate", "model-index");
    }
    function O(M) {
      s("navigate", "model-index");
    }
    function R(M) {
      alert(`Download functionality not yet implemented for ${M}`);
    }
    async function D() {
      f.value = !0, w.value = null;
      try {
        const M = await l();
        v.value = M, d.value = [];
        const N = await u();
        m.value = N.environment || "production";
      } catch (M) {
        w.value = M instanceof Error ? M.message : "Failed to load models";
      } finally {
        f.value = !1;
      }
    }
    return ge(D), (M, N) => (o(), n(F, null, [
      g(pe, null, {
        header: a(() => [
          g(ye, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (B) => S.value = !0)
          })
        ]),
        search: a(() => [
          g(je, {
            modelValue: x.value,
            "onUpdate:modelValue": N[1] || (N[1] = (B) => x.value = B),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          f.value ? (o(), b(Ne, {
            key: 0,
            message: "Loading environment models..."
          })) : w.value ? (o(), b(Ue, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            v.value.length ? (o(), b(Ke, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + i(v.value.length) + " models • " + i(H(k.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            _.value.length ? (o(), b(me, {
              key: 1,
              title: "CHECKPOINTS",
              count: _.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(_.value, (B) => (o(), b(fe, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[3] || (N[3] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(H(B.size)), 1)
                  ]),
                  details: a(() => [
                    g(ee, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    g(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => U(B.hash)
                    }, {
                      default: a(() => [...N[4] || (N[4] = [
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
            y.value.length ? (o(), b(me, {
              key: 2,
              title: "LORAS",
              count: y.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(y.value, (B) => (o(), b(fe, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[5] || (N[5] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(H(B.size)), 1)
                  ]),
                  details: a(() => [
                    g(ee, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    g(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => U(B.hash)
                    }, {
                      default: a(() => [...N[6] || (N[6] = [
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
            z.value.length ? (o(), b(me, {
              key: 3,
              title: "OTHER",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(z.value, (B) => (o(), b(fe, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[7] || (N[7] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(H(B.size)), 1)
                  ]),
                  details: a(() => [
                    g(ee, {
                      label: "Type:",
                      value: B.type
                    }, null, 8, ["value"]),
                    g(ee, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    g(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => U(B.hash)
                    }, {
                      default: a(() => [...N[8] || (N[8] = [
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
            p.value.length ? (o(), b(me, {
              key: 4,
              title: "MISSING",
              count: p.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(p.value, (B) => (o(), b(fe, {
                  key: B.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...N[9] || (N[9] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(i(B.filename), 1)
                  ]),
                  subtitle: a(() => [...N[10] || (N[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var Y;
                    return [
                      g(ee, {
                        label: "Required by:",
                        value: ((Y = B.workflow_names) == null ? void 0 : Y.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    g(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => R(B.filename)
                    }, {
                      default: a(() => [...N[11] || (N[11] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => O(B.filename)
                    }, {
                      default: a(() => [...N[12] || (N[12] = [
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
            !I.value.length && !p.value.length ? (o(), b(Ie, {
              key: 5,
              icon: "📭",
              message: x.value ? `No models match '${x.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(Re, {
        show: S.value,
        title: "About Environment Models",
        onClose: N[2] || (N[2] = (B) => S.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            N[13] || (N[13] = h(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + i(m.value) + '"', 1),
            N[14] || (N[14] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          g(A, {
            variant: "primary",
            onClick: $
          }, {
            default: a(() => [...N[15] || (N[15] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Bc = /* @__PURE__ */ K(Uc, [["__scopeId", "data-v-72675609"]]), Tc = /* @__PURE__ */ j({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: r } = we(), s = C([]), l = C(!1), u = C(null), v = C(""), d = C(!1), m = T(
      () => s.value.reduce((R, D) => R + (D.size_mb || D.size || 0), 0)
    ), f = T(() => {
      const R = /* @__PURE__ */ new Set();
      return s.value.forEach((D) => {
        D.used_in_environments && D.used_in_environments.length > 0 && D.used_in_environments.forEach((M) => R.add(M.env_name));
      }), R.size;
    }), w = T(() => {
      if (!v.value.trim()) return s.value;
      const R = v.value.toLowerCase();
      return s.value.filter((D) => {
        const M = D, N = D.sha256 || M.sha256_hash || "";
        return D.filename.toLowerCase().includes(R) || N.toLowerCase().includes(R);
      });
    }), x = T(
      () => w.value.filter((R) => R.type === "checkpoints")
    ), S = T(
      () => w.value.filter((R) => R.type === "loras")
    ), $ = T(
      () => w.value.filter((R) => R.type !== "checkpoints" && R.type !== "loras")
    );
    function k(R) {
      return R ? R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB` : "Unknown";
    }
    function I(R) {
      const D = R, M = R.used_in_workflows || D.used_by || [];
      return !M || M.length === 0 ? "Not used" : `${M.length} workflow(s)`;
    }
    function p(R) {
      navigator.clipboard.writeText(R), alert("Hash copied to clipboard");
    }
    function _(R) {
      prompt("Enter model source URL:", R.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function y(R) {
      const D = R, M = R.used_in_workflows || D.used_by || [], N = M && M.length > 0 ? `

⚠ WARNING: This model is used by ${M.length} workflow(s):
${M.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${R.filename}?${N}

This will free ${k(D.size_mb || R.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function z() {
      alert("Scan for models not yet implemented");
    }
    function H() {
      alert("Change directory not yet implemented");
    }
    function U() {
      alert("Download new model not yet implemented");
    }
    async function O() {
      l.value = !0, u.value = null;
      try {
        s.value = await r(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", x.value), console.log("Filtered loras:", S.value), console.log("Filtered other:", $.value);
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load workspace models";
      } finally {
        l.value = !1;
      }
    }
    return ge(O), (R, D) => (o(), n(F, null, [
      g(pe, null, {
        header: a(() => [
          g(ye, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: D[0] || (D[0] = (M) => d.value = !0)
          }, {
            actions: a(() => [
              g(A, {
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: a(() => [...D[3] || (D[3] = [
                  h(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              g(A, {
                variant: "primary",
                size: "sm",
                onClick: H
              }, {
                default: a(() => [...D[4] || (D[4] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(A, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: a(() => [...D[5] || (D[5] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
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
          g(je, {
            modelValue: v.value,
            "onUpdate:modelValue": D[1] || (D[1] = (M) => v.value = M),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          l.value ? (o(), b(Ne, {
            key: 0,
            message: "Loading workspace models..."
          })) : u.value ? (o(), b(Ue, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            s.value.length ? (o(), b(Ke, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + i(s.value.length) + " models • " + i(k(m.value)) + " • Used in " + i(f.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            x.value.length ? (o(), b(me, {
              key: 1,
              title: "CHECKPOINTS",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(x.value, (M) => (o(), b(fe, {
                  key: M.sha256 || M.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[6] || (D[6] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(M.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(k(M.size_mb || M.size)), 1)
                  ]),
                  details: a(() => {
                    var N, B;
                    return [
                      M.sha256 || M.sha256_hash ? (o(), b(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (M.sha256 || M.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      g(ee, {
                        label: "Used in:",
                        value: I(M)
                      }, null, 8, ["value"]),
                      M.source_url || (N = M.sources) != null && N[0] ? (o(), b(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: M.source_url || ((B = M.sources) == null ? void 0 : B[0])
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
                    g(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => _(M)
                    }, {
                      default: a(() => [...D[8] || (D[8] = [
                        h(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    M.sha256 || M.sha256_hash ? (o(), b(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => p(M.sha256 || M.sha256_hash)
                    }, {
                      default: a(() => [...D[9] || (D[9] = [
                        h(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    g(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => y(M)
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
            S.value.length ? (o(), b(me, {
              key: 2,
              title: "LORAS",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(S.value, (M) => (o(), b(fe, {
                  key: M.sha256 || M.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[11] || (D[11] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(M.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(k(M.size_mb || M.size)), 1)
                  ]),
                  details: a(() => {
                    var N, B;
                    return [
                      M.sha256 || M.sha256_hash ? (o(), b(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (M.sha256 || M.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      g(ee, {
                        label: "Used in:",
                        value: I(M)
                      }, null, 8, ["value"]),
                      M.source_url || (N = M.sources) != null && N[0] ? (o(), b(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: M.source_url || ((B = M.sources) == null ? void 0 : B[0])
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
                    g(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => _(M)
                    }, {
                      default: a(() => [...D[13] || (D[13] = [
                        h(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    M.sha256 || M.sha256_hash ? (o(), b(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => p(M.sha256 || M.sha256_hash)
                    }, {
                      default: a(() => [...D[14] || (D[14] = [
                        h(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    g(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => y(M)
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
            $.value.length ? (o(), b(me, {
              key: 3,
              title: "OTHER",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X($.value, (M) => (o(), b(fe, {
                  key: M.sha256 || M.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[16] || (D[16] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(M.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(i(k(M.size_mb || M.size)), 1)
                  ]),
                  details: a(() => [
                    g(ee, {
                      label: "Type:",
                      value: M.type
                    }, null, 8, ["value"]),
                    M.sha256 || M.sha256_hash ? (o(), b(ee, {
                      key: 0,
                      label: "SHA256:",
                      value: (M.sha256 || M.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    g(ee, {
                      label: "Used in:",
                      value: I(M)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    g(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => _(M)
                    }, {
                      default: a(() => [...D[17] || (D[17] = [
                        h(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    M.sha256 || M.sha256_hash ? (o(), b(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => p(M.sha256 || M.sha256_hash)
                    }, {
                      default: a(() => [...D[18] || (D[18] = [
                        h(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    g(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => y(M)
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
              message: v.value ? `No models match '${v.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(Re, {
        show: d.value,
        title: "About Workspace Model Index",
        onClose: D[2] || (D[2] = (M) => d.value = !1)
      }, {
        content: a(() => [...D[20] || (D[20] = [
          t("p", null, [
            h(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            h(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Dc = /* @__PURE__ */ K(Tc, [["__scopeId", "data-v-5a24af01"]]), Oc = { key: 0 }, Vc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Ac = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Pc = /* @__PURE__ */ j({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: r, installNode: s, updateNode: l, uninstallNode: u } = we(), v = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), d = C(!1), m = C(null), f = C(""), w = C(!1), x = T(() => {
      if (!f.value.trim()) return v.value.nodes;
      const U = f.value.toLowerCase();
      return v.value.nodes.filter(
        (O) => {
          var R, D;
          return O.name.toLowerCase().includes(U) || ((R = O.description) == null ? void 0 : R.toLowerCase().includes(U)) || ((D = O.repository) == null ? void 0 : D.toLowerCase().includes(U));
        }
      );
    }), S = T(
      () => x.value.filter((U) => U.installed)
    ), $ = T(
      () => x.value.filter((U) => !U.installed)
    );
    function k(U) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[U] || U;
    }
    function I(U) {
      return !U.used_in_workflows || U.used_in_workflows.length === 0 ? "Not used in any workflows" : U.used_in_workflows.length === 1 ? U.used_in_workflows[0] : `${U.used_in_workflows.length} workflows`;
    }
    function p(U) {
      window.open(U, "_blank");
    }
    async function _(U) {
      if (confirm(`Install node "${U}"?

This will download and install the node from its repository.`))
        try {
          d.value = !0;
          const O = await s(U);
          O.status === "success" ? (alert(`Node "${U}" installed successfully!`), await H()) : alert(`Failed to install node: ${O.message || "Unknown error"}`);
        } catch (O) {
          alert(`Error installing node: ${O instanceof Error ? O.message : "Unknown error"}`);
        } finally {
          d.value = !1;
        }
    }
    async function y(U) {
      if (confirm(`Check for updates for "${U}"?`))
        try {
          d.value = !0;
          const O = await l(U);
          O.status === "success" ? (alert(`Node "${U}" is up to date or has been updated!`), await H()) : alert(`Update check failed: ${O.message || "Unknown error"}`);
        } catch (O) {
          alert(`Error checking for updates: ${O instanceof Error ? O.message : "Unknown error"}`);
        } finally {
          d.value = !1;
        }
    }
    async function z(U) {
      if (confirm(`Uninstall node "${U}"?

This will remove the node from this environment.`))
        try {
          d.value = !0;
          const O = await u(U);
          O.status === "success" ? (alert(`Node "${U}" uninstalled successfully!`), await H()) : alert(`Failed to uninstall node: ${O.message || "Unknown error"}`);
        } catch (O) {
          alert(`Error uninstalling node: ${O instanceof Error ? O.message : "Unknown error"}`);
        } finally {
          d.value = !1;
        }
    }
    async function H() {
      d.value = !0, m.value = null;
      try {
        v.value = await r();
      } catch (U) {
        m.value = U instanceof Error ? U.message : "Failed to load nodes";
      } finally {
        d.value = !1;
      }
    }
    return ge(H), (U, O) => (o(), n(F, null, [
      g(pe, null, {
        header: a(() => [
          g(ye, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (R) => w.value = !0)
          })
        ]),
        search: a(() => [
          g(je, {
            modelValue: f.value,
            "onUpdate:modelValue": O[1] || (O[1] = (R) => f.value = R),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          d.value ? (o(), b(Ne, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : m.value ? (o(), b(Ue, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            v.value.total_count ? (o(), b(Ke, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + i(v.value.total_count) + " nodes • " + i(v.value.installed_count) + " installed • " + i(v.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            S.value.length ? (o(), b(me, {
              key: 1,
              title: "INSTALLED",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(S.value, (R) => (o(), b(fe, {
                  key: R.name,
                  status: "synced"
                }, {
                  icon: a(() => [...O[4] || (O[4] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(i(R.name), 1)
                  ]),
                  subtitle: a(() => [
                    R.version ? (o(), n("span", Oc, "v" + i(R.version), 1)) : (o(), n("span", Vc, "version unknown")),
                    R.source ? (o(), n("span", Ac, " • " + i(k(R.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    R.description ? (o(), b(ee, {
                      key: 0,
                      label: "Description:",
                      value: R.description
                    }, null, 8, ["value"])) : c("", !0),
                    R.repository ? (o(), b(ee, {
                      key: 1,
                      label: "Repository:",
                      value: R.repository
                    }, null, 8, ["value"])) : c("", !0),
                    g(ee, {
                      label: "Used by:",
                      value: I(R)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    R.repository ? (o(), b(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => p(R.repository)
                    }, {
                      default: a(() => [...O[5] || (O[5] = [
                        h(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    R.source === "registry" ? (o(), b(A, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => y(R.name)
                    }, {
                      default: a(() => [...O[6] || (O[6] = [
                        h(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    R.source !== "unknown" ? (o(), b(A, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => z(R.name)
                    }, {
                      default: a(() => [...O[7] || (O[7] = [
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
            $.value.length ? (o(), b(me, {
              key: 2,
              title: "MISSING",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(F, null, X($.value, (R) => (o(), b(fe, {
                  key: R.name,
                  status: "missing"
                }, {
                  icon: a(() => [...O[8] || (O[8] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(i(R.name), 1)
                  ]),
                  subtitle: a(() => [...O[9] || (O[9] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    R.description ? (o(), b(ee, {
                      key: 0,
                      label: "Description:",
                      value: R.description
                    }, null, 8, ["value"])) : c("", !0),
                    R.repository ? (o(), b(ee, {
                      key: 1,
                      label: "Repository:",
                      value: R.repository
                    }, null, 8, ["value"])) : c("", !0),
                    g(ee, {
                      label: "Required by:",
                      value: I(R)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    R.download_url ? (o(), b(A, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (D) => _(R.name)
                    }, {
                      default: a(() => [...O[10] || (O[10] = [
                        h(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    R.repository ? (o(), b(A, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (D) => p(R.repository)
                    }, {
                      default: a(() => [...O[11] || (O[11] = [
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
            !S.value.length && !$.value.length ? (o(), b(Ie, {
              key: 3,
              icon: "📭",
              message: f.value ? `No nodes match '${f.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(Re, {
        show: w.value,
        title: "About Git-Tracked Nodes",
        onClose: O[3] || (O[3] = (R) => w.value = !1)
      }, {
        content: a(() => [...O[12] || (O[12] = [
          t("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            h(" Nodes currently available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            h(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          g(A, {
            variant: "primary",
            onClick: O[2] || (O[2] = (R) => w.value = !1)
          }, {
            default: a(() => [...O[13] || (O[13] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Wc = /* @__PURE__ */ K(Pc, [["__scopeId", "data-v-c480e2c1"]]), Fc = { class: "remote-url-display" }, Gc = ["title"], Hc = ["title"], jc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Kc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, qc = /* @__PURE__ */ j({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const r = e, s = C(!1), l = T(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const v = r.url.slice(0, Math.floor(r.maxLength * 0.6)), d = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${v}...${d}`;
    });
    async function u() {
      try {
        await navigator.clipboard.writeText(r.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, d) => (o(), n("div", Fc, [
      t("span", {
        class: "url-text",
        title: e.url
      }, i(l.value), 9, Gc),
      t("button", {
        class: Z(["copy-btn", { copied: s.value }]),
        onClick: u,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Kc, [...d[1] || (d[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", jc, [...d[0] || (d[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Hc)
    ]));
  }
}), St = /* @__PURE__ */ K(qc, [["__scopeId", "data-v-7768a58d"]]), Yc = { class: "remote-title" }, Xc = {
  key: 0,
  class: "default-badge"
}, Zc = {
  key: 1,
  class: "sync-badge"
}, Jc = {
  key: 0,
  class: "ahead"
}, Qc = {
  key: 1,
  class: "behind"
}, ed = {
  key: 0,
  class: "tracking-info"
}, td = /* @__PURE__ */ j({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(e, { emit: r }) {
    const s = e, l = T(() => s.fetchingRemote === s.remote.name), u = T(() => s.remote.is_default), v = T(() => !!s.trackingBranch);
    function d(m) {
      const f = new Date(m), x = (/* @__PURE__ */ new Date()).getTime() - f.getTime(), S = Math.floor(x / 6e4);
      if (S < 1) return "Just now";
      if (S < 60) return `${S}m ago`;
      const $ = Math.floor(S / 60);
      if ($ < 24) return `${$}h ago`;
      const k = Math.floor($ / 24);
      return k < 7 ? `${k}d ago` : f.toLocaleDateString();
    }
    return (m, f) => (o(), b(fe, {
      status: u.value ? "synced" : void 0
    }, {
      icon: a(() => [
        h(i(u.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        t("div", Yc, [
          t("span", null, i(e.remote.name), 1),
          u.value ? (o(), n("span", Xc, "DEFAULT")) : c("", !0),
          e.syncStatus ? (o(), n("span", Zc, [
            e.syncStatus.ahead > 0 ? (o(), n("span", Jc, "↑" + i(e.syncStatus.ahead), 1)) : c("", !0),
            e.syncStatus.behind > 0 ? (o(), n("span", Qc, "↓" + i(e.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        v.value ? (o(), n("span", ed, " Tracking: " + i(e.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var w;
        return [
          g(ee, { label: "Fetch:" }, {
            default: a(() => [
              g(St, {
                url: e.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          e.remote.push_url !== e.remote.fetch_url ? (o(), b(ee, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              g(St, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (w = e.syncStatus) != null && w.last_fetch ? (o(), b(ee, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              t("span", null, i(d(e.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        g(A, {
          variant: "primary",
          size: "xs",
          loading: l.value,
          onClick: f[0] || (f[0] = (w) => m.$emit("fetch", e.remote.name))
        }, {
          default: a(() => [...f[3] || (f[3] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        g(A, {
          variant: "secondary",
          size: "xs",
          onClick: f[1] || (f[1] = (w) => m.$emit("edit", e.remote.name))
        }, {
          default: a(() => [...f[4] || (f[4] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        u.value ? c("", !0) : (o(), b(A, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[2] || (f[2] = (w) => m.$emit("remove", e.remote.name))
        }, {
          default: a(() => [...f[5] || (f[5] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), od = /* @__PURE__ */ K(td, [["__scopeId", "data-v-17362e45"]]), sd = ["for"], nd = {
  key: 0,
  class: "base-form-field-required"
}, ad = { class: "base-form-field-input" }, ld = {
  key: 1,
  class: "base-form-field-error"
}, id = {
  key: 2,
  class: "base-form-field-hint"
}, rd = /* @__PURE__ */ j({
  __name: "BaseFormField",
  props: {
    label: {},
    error: {},
    hint: {},
    required: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !0 },
    id: {}
  },
  setup(e) {
    const r = e, s = T(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (l, u) => (o(), n("div", {
      class: Z(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        h(i(e.label) + " ", 1),
        e.required ? (o(), n("span", nd, "*")) : c("", !0)
      ], 8, sd)) : c("", !0),
      t("div", ad, [
        se(l.$slots, "default", {}, void 0, !0)
      ]),
      e.error ? (o(), n("span", ld, i(e.error), 1)) : e.hint ? (o(), n("span", id, i(e.hint), 1)) : c("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ K(rd, [["__scopeId", "data-v-9a1cf296"]]), cd = ["type", "value", "placeholder", "disabled"], dd = {
  key: 0,
  class: "base-input-error"
}, ud = /* @__PURE__ */ j({
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
  setup(e) {
    return (r, s) => (o(), n("div", {
      class: Z(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Z(["base-input", { error: !!e.error }]),
        onInput: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeyup: [
          s[1] || (s[1] = Le((l) => r.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Le((l) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, cd),
      e.error ? (o(), n("span", dd, i(e.error), 1)) : c("", !0)
    ], 2));
  }
}), ft = /* @__PURE__ */ K(ud, [["__scopeId", "data-v-9ba02cdc"]]), md = { class: "remote-form" }, vd = { class: "form-header" }, fd = { class: "form-body" }, gd = {
  key: 0,
  class: "form-error"
}, hd = { class: "form-actions" }, pd = /* @__PURE__ */ j({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: r }) {
    const s = e, l = r, u = C({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), v = C(!1), d = C(null);
    zt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      u.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const m = T(() => u.value.name.trim() !== "" && u.value.fetchUrl.trim() !== "");
    async function f() {
      if (!(!m.value || v.value)) {
        d.value = null, v.value = !0;
        try {
          l("submit", u.value);
        } catch (w) {
          d.value = w instanceof Error ? w.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (w, x) => (o(), n("div", md, [
      t("div", vd, [
        g(ke, null, {
          default: a(() => [
            h(i(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", fd, [
        g(vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            g(ft, {
              modelValue: u.value.name,
              "onUpdate:modelValue": x[0] || (x[0] = (S) => u.value.name = S),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g(vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            g(ft, {
              modelValue: u.value.fetchUrl,
              "onUpdate:modelValue": x[1] || (x[1] = (S) => u.value.fetchUrl = S),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g(vt, { label: "Push URL (optional)" }, {
          default: a(() => [
            g(ft, {
              modelValue: u.value.pushUrl,
              "onUpdate:modelValue": x[2] || (x[2] = (S) => u.value.pushUrl = S),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        d.value ? (o(), n("div", gd, i(d.value), 1)) : c("", !0)
      ]),
      t("div", hd, [
        g(A, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: v.value,
          onClick: f
        }, {
          default: a(() => [
            h(i(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        g(A, {
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
}), yd = /* @__PURE__ */ K(pd, [["__scopeId", "data-v-56021b18"]]), wd = { key: 0 }, bd = /* @__PURE__ */ j({
  __name: "RemotesSection",
  setup(e) {
    const {
      getRemotes: r,
      addRemote: s,
      removeRemote: l,
      updateRemoteUrl: u,
      fetchRemote: v,
      getRemoteSyncStatus: d
    } = we(), m = C([]), f = C(null), w = C({}), x = C(!1), S = C(null), $ = C(""), k = C(!1), I = C(null), p = C(!1), _ = C("add"), y = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), z = T(() => {
      if (!$.value.trim()) return m.value;
      const G = $.value.toLowerCase();
      return m.value.filter(
        (L) => L.name.toLowerCase().includes(G) || L.fetch_url.toLowerCase().includes(G) || L.push_url.toLowerCase().includes(G)
      );
    });
    function H(G) {
      var L;
      return ((L = f.value) == null ? void 0 : L.remote) === G;
    }
    async function U() {
      x.value = !0, S.value = null;
      try {
        const G = await r();
        m.value = G.remotes, f.value = G.current_branch_tracking || null, await Promise.all(
          G.remotes.map(async (L) => {
            const J = await d(L.name);
            J && (w.value[L.name] = J);
          })
        );
      } catch (G) {
        S.value = G instanceof Error ? G.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function O() {
      _.value = "add", y.value = { name: "", fetchUrl: "", pushUrl: "" }, p.value = !0;
    }
    function R(G) {
      const L = m.value.find((J) => J.name === G);
      L && (_.value = "edit", y.value = {
        name: L.name,
        fetchUrl: L.fetch_url,
        pushUrl: L.push_url
      }, p.value = !0);
    }
    async function D(G) {
      try {
        _.value === "add" ? await s(G.name, G.fetchUrl) : await u(G.name, G.fetchUrl, G.pushUrl || void 0), p.value = !1, await U();
      } catch (L) {
        S.value = L instanceof Error ? L.message : "Operation failed";
      }
    }
    function M() {
      p.value = !1, y.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function N(G) {
      I.value = G;
      try {
        await v(G);
        const L = await d(G);
        L && (w.value[G] = L);
      } catch (L) {
        S.value = L instanceof Error ? L.message : "Fetch failed";
      } finally {
        I.value = null;
      }
    }
    async function B(G) {
      if (confirm(`Remove remote "${G}"?`))
        try {
          await l(G), await U();
        } catch (L) {
          S.value = L instanceof Error ? L.message : "Failed to remove remote";
        }
    }
    function Y() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ge(U), (G, L) => (o(), n(F, null, [
      g(pe, null, {
        header: a(() => [
          g(ye, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (J) => k.value = !0)
          }, {
            actions: a(() => [
              p.value ? c("", !0) : (o(), b(A, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: a(() => [...L[3] || (L[3] = [
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
            modelValue: $.value,
            "onUpdate:modelValue": L[1] || (L[1] = (J) => $.value = J),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          x.value ? (o(), b(Ne, {
            key: 0,
            message: "Loading remotes..."
          })) : S.value ? (o(), b(Ue, {
            key: 1,
            message: S.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            p.value ? (o(), b(yd, {
              key: 0,
              mode: _.value,
              "remote-name": y.value.name,
              "fetch-url": y.value.fetchUrl,
              "push-url": y.value.pushUrl,
              onSubmit: D,
              onCancel: M
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !p.value ? (o(), b(Ke, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + i(m.value.length) + " remote" + i(m.value.length !== 1 ? "s" : "") + " ", 1),
                f.value ? (o(), n("span", wd, " • Tracking: " + i(f.value.remote) + "/" + i(f.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            z.value.length && !p.value ? (o(), b(me, {
              key: 2,
              title: "REMOTES",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, X(z.value, (J) => {
                  var ne;
                  return o(), b(od, {
                    key: J.name,
                    remote: J,
                    "sync-status": w.value[J.name],
                    "tracking-branch": H(J.name) ? (ne = f.value) == null ? void 0 : ne.branch : void 0,
                    "fetching-remote": I.value,
                    onFetch: N,
                    onEdit: R,
                    onRemove: B
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !z.value.length && !p.value ? (o(), b(Ie, {
              key: 3,
              icon: "🌐",
              message: $.value ? `No remotes match '${$.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                g(A, {
                  variant: "primary",
                  onClick: O
                }, {
                  default: a(() => [...L[4] || (L[4] = [
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
      g(Re, {
        show: k.value,
        title: "About Git Remotes",
        onClose: L[2] || (L[2] = (J) => k.value = !1)
      }, {
        content: a(() => [...L[5] || (L[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            h(" The "),
            t("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          g(A, {
            variant: "link",
            onClick: Y
          }, {
            default: a(() => [...L[6] || (L[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kd = /* @__PURE__ */ K(bd, [["__scopeId", "data-v-a75719bb"]]), _d = { class: "setting-info" }, $d = { class: "setting-label" }, Cd = {
  key: 0,
  class: "required-marker"
}, xd = {
  key: 0,
  class: "setting-description"
}, Sd = { class: "setting-control" }, Id = /* @__PURE__ */ j({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (r, s) => (o(), n("div", {
      class: Z(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", _d, [
        t("div", $d, [
          h(i(e.label) + " ", 1),
          e.required ? (o(), n("span", Cd, "*")) : c("", !0)
        ]),
        e.description ? (o(), n("div", xd, i(e.description), 1)) : c("", !0)
      ]),
      t("div", Sd, [
        se(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), De = /* @__PURE__ */ K(Id, [["__scopeId", "data-v-cb5d236c"]]), Ed = { class: "toggle" }, zd = ["checked", "disabled"], Md = /* @__PURE__ */ j({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (r, s) => (o(), n("label", Ed, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.checked)),
        class: "toggle-input"
      }, null, 40, zd),
      s[1] || (s[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Fe = /* @__PURE__ */ K(Md, [["__scopeId", "data-v-71c0f550"]]), Ld = { class: "settings-section" }, Rd = { class: "path-setting" }, Nd = { class: "path-value" }, Ud = { class: "path-setting" }, Bd = { class: "path-value" }, Td = { class: "settings-section" }, Dd = { class: "settings-section" }, Od = /* @__PURE__ */ j({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const { getConfig: r, updateConfig: s } = we(), l = C(!1), u = C(null), v = C(null), d = C(null), m = C(null), f = C(""), w = C(""), x = C(!0), S = C(!0), $ = T(() => m.value ? f.value !== (m.value.civitai_api_key || "") : !1);
    async function k() {
      l.value = !0, u.value = null;
      try {
        d.value = await r(), m.value = { ...d.value }, f.value = d.value.civitai_api_key || "", w.value = d.value.huggingface_token || "", x.value = d.value.auto_sync_models, S.value = d.value.confirm_destructive;
      } catch (_) {
        u.value = _ instanceof Error ? _.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function I() {
      var _;
      v.value = null;
      try {
        const y = {};
        f.value !== (((_ = m.value) == null ? void 0 : _.civitai_api_key) || "") && (y.civitai_api_key = f.value || null), await s(y), await k(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (y) {
        v.value = {
          type: "error",
          message: y instanceof Error ? y.message : "Failed to save settings"
        };
      }
    }
    function p() {
      m.value && (f.value = m.value.civitai_api_key || "", w.value = m.value.huggingface_token || "", x.value = m.value.auto_sync_models, S.value = m.value.confirm_destructive, v.value = null);
    }
    return ge(k), (_, y) => (o(), b(pe, null, {
      header: a(() => [
        g(ye, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            g(A, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: I
            }, {
              default: a(() => [...y[4] || (y[4] = [
                h(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (o(), b(A, {
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
        l.value ? (o(), b(Ne, {
          key: 0,
          message: "Loading workspace settings..."
        })) : u.value ? (o(), b(Ue, {
          key: 1,
          message: u.value,
          retry: !0,
          onRetry: k
        }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
          g(me, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var z, H;
              return [
                t("div", Ld, [
                  t("div", Rd, [
                    y[6] || (y[6] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                    y[7] || (y[7] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    t("div", Nd, i(((z = d.value) == null ? void 0 : z.workspace_path) || "Loading..."), 1)
                  ]),
                  t("div", Ud, [
                    y[8] || (y[8] = t("div", { class: "path-label" }, "Models Directory", -1)),
                    y[9] || (y[9] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    t("div", Bd, i(((H = d.value) == null ? void 0 : H.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(me, { title: "API CREDENTIALS" }, {
            default: a(() => [
              t("div", Td, [
                g(De, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    g(ot, {
                      modelValue: f.value,
                      "onUpdate:modelValue": y[0] || (y[0] = (z) => f.value = z),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(De, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    g(ot, {
                      modelValue: w.value,
                      "onUpdate:modelValue": y[1] || (y[1] = (z) => w.value = z),
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
          g(me, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              t("div", Dd, [
                g(De, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    g(Fe, {
                      modelValue: x.value,
                      "onUpdate:modelValue": y[2] || (y[2] = (z) => x.value = z),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(De, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    g(Fe, {
                      modelValue: S.value,
                      "onUpdate:modelValue": y[3] || (y[3] = (z) => S.value = z),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v.value ? (o(), b(Ke, {
            key: 0,
            variant: (v.value.type === "success", "compact")
          }, {
            default: a(() => [
              t("span", {
                style: Pe({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, i(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Vd = /* @__PURE__ */ K(Od, [["__scopeId", "data-v-8b092643"]]), Ad = /* @__PURE__ */ j({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: r } = we(), s = C([]), l = C(!1), u = C(null), v = C(!1), d = C(null), m = T(() => s.value.length === 0 ? [] : s.value.map((w) => ({
      text: `${w.timestamp} - ${w.name} - ${w.level} - ${w.func}:${w.line} - ${w.message}`,
      level: w.level
    })));
    async function f() {
      l.value = !0, u.value = null;
      try {
        s.value = await r(void 0, 500);
      } catch (w) {
        u.value = w instanceof Error ? w.message : "Failed to load workspace logs";
      } finally {
        l.value = !1, setTimeout(() => {
          var w;
          (w = d.value) != null && w.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ge(f), (w, x) => (o(), n(F, null, [
      g(pe, null, {
        header: a(() => [
          g(ye, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (S) => v.value = !0)
          }, {
            actions: a(() => [
              g(A, {
                variant: "secondary",
                size: "sm",
                onClick: f,
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
          l.value ? (o(), b(Ne, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (o(), b(Ue, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: f
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
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
              (o(!0), n(F, null, X(m.value, (S, $) => (o(), n("div", {
                key: $,
                class: Z(`log-line log-level-${S.level.toLowerCase()}`)
              }, i(S.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(Re, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: x[2] || (x[2] = (S) => v.value = !1)
      }, {
        content: a(() => [...x[3] || (x[3] = [
          t("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            h(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            h(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          g(A, {
            variant: "primary",
            onClick: x[1] || (x[1] = (S) => v.value = !1)
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
}), Pd = /* @__PURE__ */ K(Ad, [["__scopeId", "data-v-39f6a756"]]), Wd = /* @__PURE__ */ j({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: r, getStatus: s } = we(), l = C([]), u = C(!1), v = C(null), d = C(!1), m = C("production"), f = C(null), w = T(() => l.value.length === 0 ? [] : l.value.map((S) => ({
      text: `${S.timestamp} - ${S.name} - ${S.level} - ${S.func}:${S.line} - ${S.message}`,
      level: S.level
    })));
    async function x() {
      u.value = !0, v.value = null;
      try {
        l.value = await r(void 0, 500);
        try {
          const S = await s();
          m.value = S.environment || "production";
        } catch {
        }
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var S;
          (S = f.value) != null && S.parentElement && (f.value.parentElement.scrollTop = f.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ge(x), (S, $) => (o(), n(F, null, [
      g(pe, null, {
        header: a(() => [
          g(ye, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (k) => d.value = !0)
          }, {
            actions: a(() => [
              g(A, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: u.value
              }, {
                default: a(() => [
                  h(i(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          u.value ? (o(), b(Ne, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (o(), b(Ue, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            l.value.length === 0 ? (o(), b(Ie, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: f,
              class: "log-output"
            }, [
              (o(!0), n(F, null, X(w.value, (k, I) => (o(), n("div", {
                key: I,
                class: Z(`log-line log-level-${k.level.toLowerCase()}`)
              }, i(k.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(Re, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (k) => d.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            $[3] || ($[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, i(m.value), 1),
            $[4] || ($[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            h(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            h(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1)),
          $[6] || ($[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          g(A, {
            variant: "primary",
            onClick: $[1] || ($[1] = (k) => d.value = !1)
          }, {
            default: a(() => [...$[7] || ($[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Fd = /* @__PURE__ */ K(Wd, [["__scopeId", "data-v-4f1e6f72"]]), Gd = { class: "env-title" }, Hd = {
  key: 0,
  class: "current-badge"
}, jd = {
  key: 0,
  class: "branch-info"
}, Kd = /* @__PURE__ */ j({
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
  setup(e) {
    return (r, s) => (o(), b(fe, {
      status: e.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        h(i(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        t("div", Gd, [
          t("span", null, i(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), n("span", Hd, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        e.currentBranch ? (o(), n("span", jd, [
          s[0] || (s[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + i(e.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        g(ee, {
          label: "Workflows:",
          value: String(e.workflowCount)
        }, null, 8, ["value"]),
        g(ee, {
          label: "Nodes:",
          value: String(e.nodeCount)
        }, null, 8, ["value"]),
        g(ee, {
          label: "Models:",
          value: String(e.modelCount)
        }, null, 8, ["value"]),
        e.lastUsed && e.showLastUsed ? (o(), b(ee, {
          key: 0,
          label: "Last used:",
          value: e.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        se(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), qd = /* @__PURE__ */ K(Kd, [["__scopeId", "data-v-5238e57c"]]), Yd = {
  key: 0,
  class: "create-form"
}, Xd = { class: "create-form__header" }, Zd = { class: "create-form__body" }, Jd = { class: "create-form__actions" }, Qd = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, eu = /* @__PURE__ */ j({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(e, { emit: r }) {
    const s = r, { getEnvironments: l } = we(), u = C([]), v = C(!1), d = C(null), m = C(""), f = C(!1), w = C(!1), x = C(""), S = T(
      () => u.value.find((H) => H.is_current)
    ), $ = T(() => {
      if (!m.value.trim()) return u.value;
      const H = m.value.toLowerCase();
      return u.value.filter(
        (U) => {
          var O;
          return U.name.toLowerCase().includes(H) || ((O = U.current_branch) == null ? void 0 : O.toLowerCase().includes(H));
        }
      );
    });
    function k(H) {
      if (!H) return "";
      try {
        const U = new Date(H), R = (/* @__PURE__ */ new Date()).getTime() - U.getTime(), D = Math.floor(R / 6e4), M = Math.floor(R / 36e5), N = Math.floor(R / 864e5);
        return D < 1 ? "just now" : D < 60 ? `${D} ${D === 1 ? "minute" : "minutes"} ago` : M < 24 ? `${M} ${M === 1 ? "hour" : "hours"} ago` : N < 30 ? `${N} ${N === 1 ? "day" : "days"} ago` : U.toLocaleDateString();
      } catch {
        return H;
      }
    }
    function I() {
      const H = x.value.trim();
      H && (s("create", H), x.value = "", w.value = !1);
    }
    function p() {
      x.value = "", w.value = !1;
    }
    function _(H) {
      s("viewDetails", H);
    }
    function y(H) {
      confirm(`Delete environment "${H}"?

This action cannot be undone.`) && s("delete", H);
    }
    async function z() {
      v.value = !0, d.value = null;
      try {
        u.value = await l();
      } catch (H) {
        d.value = H instanceof Error ? H.message : "Failed to load environments";
      } finally {
        v.value = !1;
      }
    }
    return ge(z), (H, U) => {
      const O = Qt("SectionGroup");
      return o(), n(F, null, [
        g(pe, null, {
          header: a(() => [
            g(ye, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: U[1] || (U[1] = (R) => f.value = !0)
            }, {
              actions: a(() => [
                g(A, {
                  variant: "ghost",
                  size: "sm",
                  onClick: U[0] || (U[0] = (R) => w.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...U[7] || (U[7] = [
                    t("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", {
                        d: "M8 2v12M2 8h12",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      })
                    ], -1)
                  ])]),
                  _: 1
                }),
                g(A, {
                  variant: "ghost",
                  size: "sm",
                  onClick: z,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...U[8] || (U[8] = [
                    t("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z" })
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: a(() => [
            g(je, {
              modelValue: m.value,
              "onUpdate:modelValue": U[2] || (U[2] = (R) => m.value = R),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            v.value ? (o(), b(Ne, {
              key: 0,
              message: "Loading environments..."
            })) : d.value ? (o(), b(Ue, {
              key: 1,
              message: d.value,
              retry: !0,
              onRetry: z
            }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
              w.value ? (o(), n("div", Yd, [
                t("div", Xd, [
                  U[10] || (U[10] = t("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  g(A, {
                    variant: "ghost",
                    size: "xs",
                    onClick: p
                  }, {
                    default: a(() => [...U[9] || (U[9] = [
                      h(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                t("div", Zd, [
                  g(ot, {
                    modelValue: x.value,
                    "onUpdate:modelValue": U[3] || (U[3] = (R) => x.value = R),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Le(I, ["enter"]),
                      Le(p, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  t("div", Jd, [
                    g(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: I,
                      disabled: !x.value.trim()
                    }, {
                      default: a(() => [...U[11] || (U[11] = [
                        h(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    g(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: p
                    }, {
                      default: a(() => [...U[12] || (U[12] = [
                        h(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              u.value.length ? (o(), b(Ke, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  h(" Total: " + i(u.value.length) + " " + i(u.value.length === 1 ? "environment" : "environments") + " ", 1),
                  S.value ? (o(), n(F, { key: 0 }, [
                    U[13] || (U[13] = h(" • Current: ", -1)),
                    t("strong", null, i(S.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              $.value.length ? (o(), b(O, {
                key: 2,
                title: "ENVIRONMENTS",
                count: $.value.length
              }, {
                default: a(() => [
                  (o(!0), n(F, null, X($.value, (R) => (o(), b(qd, {
                    key: R.name,
                    "environment-name": R.name,
                    "is-current": R.is_current,
                    "current-branch": R.current_branch,
                    "workflow-count": R.workflow_count,
                    "node-count": R.node_count,
                    "model-count": R.model_count,
                    "last-used": k(R.last_used),
                    "show-last-used": !!R.last_used
                  }, {
                    actions: a(() => [
                      R.is_current ? c("", !0) : (o(), b(A, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (D) => H.$emit("switch", R.name)
                      }, {
                        default: a(() => [...U[14] || (U[14] = [
                          h(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      g(A, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (D) => _(R.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...U[15] || (U[15] = [
                          t("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 16 16",
                            fill: "currentColor"
                          }, [
                            t("path", { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }),
                            t("path", { d: "M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" })
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]),
                      !R.is_current && u.value.length > 1 ? (o(), b(A, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (D) => y(R.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", Qd, [...U[16] || (U[16] = [
                            t("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
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
              $.value.length ? c("", !0) : (o(), b(Ie, {
                key: 3,
                icon: "🌍",
                message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
              }, Mt({ _: 2 }, [
                m.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    g(A, {
                      variant: "primary",
                      onClick: U[4] || (U[4] = (R) => w.value = !0)
                    }, {
                      default: a(() => [...U[17] || (U[17] = [
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
        g(Re, {
          show: f.value,
          title: "About Environments",
          onClose: U[6] || (U[6] = (R) => f.value = !1)
        }, {
          content: a(() => [...U[18] || (U[18] = [
            t("p", null, [
              t("strong", null, "Environments"),
              h(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
            ], -1),
            t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
              t("strong", null, "Use cases:")
            ], -1),
            t("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
              t("li", null, "Separate production and development workflows"),
              t("li", null, "Test different node configurations"),
              t("li", null, "Experiment with new models safely"),
              t("li", null, "Maintain multiple project versions")
            ], -1)
          ])]),
          actions: a(() => [
            g(A, {
              variant: "secondary",
              onClick: U[5] || (U[5] = (R) => f.value = !1)
            }, {
              default: a(() => [...U[19] || (U[19] = [
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
}), tu = /* @__PURE__ */ K(eu, [["__scopeId", "data-v-97d6527d"]]), ou = { class: "file-path" }, su = { class: "file-path-text" }, nu = ["title"], au = /* @__PURE__ */ j({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const r = e, s = C(!1);
    async function l() {
      try {
        await navigator.clipboard.writeText(r.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (u) {
        console.error("Failed to copy:", u);
      }
    }
    return (u, v) => (o(), n("div", ou, [
      v[0] || (v[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", su, i(e.path), 1),
      e.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: l
      }, i(s.value ? "✓" : "📋"), 9, nu)) : c("", !0)
    ]));
  }
}), lu = /* @__PURE__ */ K(au, [["__scopeId", "data-v-f0982173"]]), iu = { class: "output-path-input" }, ru = { class: "export-actions" }, cu = {
  key: 1,
  class: "export-warning"
}, du = /* @__PURE__ */ j({
  __name: "ExportSection",
  setup(e) {
    const { exportEnv: r } = we(), s = C(""), l = C(!1), u = C(null), v = C(!1);
    async function d() {
      l.value = !0, u.value = null;
      try {
        const f = await r(s.value || void 0);
        u.value = f;
      } catch (f) {
        u.value = {
          status: "error",
          message: f instanceof Error ? f.message : "Unknown error occurred"
        };
      } finally {
        l.value = !1;
      }
    }
    async function m() {
      var f;
      if ((f = u.value) != null && f.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (w) {
          console.error("Failed to copy path:", w);
        }
    }
    return (f, w) => (o(), n(F, null, [
      g(pe, null, {
        header: a(() => [
          g(ye, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              g(A, {
                variant: "ghost",
                size: "sm",
                onClick: w[0] || (w[0] = (x) => v.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...w[5] || (w[5] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    t("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" })
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          g(me, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              g(fe, { status: "synced" }, {
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
                  g(ee, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  g(ee, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  g(ee, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  g(ee, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(me, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              g(fe, { status: "synced" }, {
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
                  t("div", iu, [
                    g(ot, {
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
          g(me, { title: "EXPORT" }, {
            default: a(() => [
              t("div", ru, [
                g(A, {
                  variant: "primary",
                  size: "md",
                  loading: l.value,
                  disabled: l.value,
                  onClick: d
                }, {
                  default: a(() => [
                    w[12] || (w[12] = t("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      t("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    h(" " + i(l.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), b(A, {
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
          u.value ? (o(), b(me, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              g(fe, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, Mt({
                icon: a(() => [
                  h(i(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  h(i(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  h(i(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    g(ee, { label: "Saved to:" }, {
                      default: a(() => [
                        g(lu, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (o(), b(ee, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (o(), n("div", cu, [...w[14] || (w[14] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    g(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: a(() => [...w[15] || (w[15] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(A, {
                      variant: "ghost",
                      size: "sm",
                      onClick: w[3] || (w[3] = (x) => u.value = null)
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
      g(Re, {
        show: v.value,
        title: "About Environment Export",
        onClose: w[4] || (w[4] = (x) => v.value = !1)
      }, {
        content: a(() => [...w[17] || (w[17] = [
          t("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          t("ul", null, [
            t("li", null, "Shared with collaborators"),
            t("li", null, "Backed up for safekeeping"),
            t("li", null, "Imported into other ComfyGit workspaces"),
            t("li", null, "Version controlled separately")
          ], -1),
          t("p", null, [
            t("strong", null, "Note:"),
            h(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), uu = /* @__PURE__ */ K(du, [["__scopeId", "data-v-1777a9d5"]]), mu = { class: "file-input-wrapper" }, vu = ["accept", "multiple", "disabled"], fu = /* @__PURE__ */ j({
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
  setup(e, { expose: r, emit: s }) {
    const l = s, u = C(null);
    function v() {
      var m;
      (m = u.value) == null || m.click();
    }
    function d(m) {
      const f = m.target;
      f.files && f.files.length > 0 && (l("change", f.files), f.value = "");
    }
    return r({
      triggerInput: v
    }), (m, f) => (o(), n("div", mu, [
      t("input", {
        ref_key: "fileInputRef",
        ref: u,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: d
      }, null, 40, vu),
      g(A, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: v
      }, {
        default: a(() => [
          se(m.$slots, "default", {}, () => [
            f[0] || (f[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            h(" " + i(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), gu = /* @__PURE__ */ K(fu, [["__scopeId", "data-v-cd192091"]]), hu = {
  key: 0,
  class: "drop-zone-empty"
}, pu = { class: "drop-zone-text" }, yu = { class: "drop-zone-primary" }, wu = { class: "drop-zone-secondary" }, bu = { class: "drop-zone-actions" }, ku = {
  key: 1,
  class: "drop-zone-file"
}, _u = { class: "file-info" }, $u = { class: "file-details" }, Cu = { class: "file-name" }, xu = { class: "file-size" }, Su = /* @__PURE__ */ j({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: r }) {
    const s = r, l = C(!1), u = C(null), v = C(0), d = T(() => u.value !== null), m = T(() => {
      var _;
      return ((_ = u.value) == null ? void 0 : _.name) || "";
    }), f = T(() => {
      if (!u.value) return "";
      const _ = u.value.size;
      return _ < 1024 ? `${_} B` : _ < 1024 * 1024 ? `${(_ / 1024).toFixed(1)} KB` : _ < 1024 * 1024 * 1024 ? `${(_ / (1024 * 1024)).toFixed(1)} MB` : `${(_ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function w(_) {
      var y;
      v.value++, (y = _.dataTransfer) != null && y.types.includes("Files") && (l.value = !0);
    }
    function x(_) {
      _.dataTransfer && (_.dataTransfer.dropEffect = "copy");
    }
    function S() {
      v.value--, v.value === 0 && (l.value = !1);
    }
    function $(_) {
      var z;
      v.value = 0, l.value = !1;
      const y = (z = _.dataTransfer) == null ? void 0 : z.files;
      y && y.length > 0 && I(y[0]);
    }
    function k(_) {
      _.length > 0 && I(_[0]);
    }
    function I(_) {
      u.value = _, s("fileSelected", _);
    }
    function p() {
      u.value = null, s("clear");
    }
    return (_, y) => (o(), n("div", {
      class: Z(["file-drop-zone", { "drop-active": l.value, "has-file": d.value }]),
      onDragenter: he(w, ["prevent"]),
      onDragover: he(x, ["prevent"]),
      onDragleave: he(S, ["prevent"]),
      onDrop: he($, ["prevent"])
    }, [
      d.value ? (o(), n("div", ku, [
        t("div", _u, [
          y[1] || (y[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", $u, [
            t("div", Cu, i(m.value), 1),
            t("div", xu, i(f.value), 1)
          ])
        ]),
        g(A, {
          variant: "ghost",
          size: "xs",
          onClick: p,
          title: "Remove file"
        }, {
          default: a(() => [...y[2] || (y[2] = [
            t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ])) : (o(), n("div", hu, [
        y[0] || (y[0] = t("div", { class: "drop-zone-icon" }, [
          t("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            t("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        t("div", pu, [
          t("p", yu, i(e.primaryText), 1),
          t("p", wu, i(e.secondaryText), 1)
        ]),
        t("div", bu, [
          g(gu, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "md",
            onChange: k
          }, {
            default: a(() => [
              h(i(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Iu = /* @__PURE__ */ K(Su, [["__scopeId", "data-v-e00abbca"]]), Eu = { class: "import-preview" }, zu = { class: "preview-header" }, Mu = {
  key: 0,
  class: "source-env"
}, Lu = { class: "preview-content" }, Ru = { class: "preview-section" }, Nu = { class: "section-header" }, Uu = { class: "section-info" }, Bu = { class: "section-count" }, Tu = {
  key: 0,
  class: "item-list"
}, Du = { class: "item-name" }, Ou = {
  key: 0,
  class: "item-more"
}, Vu = { class: "preview-section" }, Au = { class: "section-header" }, Pu = { class: "section-info" }, Wu = { class: "section-count" }, Fu = {
  key: 0,
  class: "item-list"
}, Gu = { class: "item-details" }, Hu = { class: "item-name" }, ju = { class: "item-meta" }, Ku = {
  key: 0,
  class: "item-more"
}, qu = { class: "preview-section" }, Yu = { class: "section-header" }, Xu = { class: "section-info" }, Zu = { class: "section-count" }, Ju = {
  key: 0,
  class: "item-list"
}, Qu = { class: "item-name" }, em = {
  key: 0,
  class: "item-more"
}, tm = {
  key: 0,
  class: "preview-section"
}, om = { class: "git-info" }, sm = /* @__PURE__ */ j({
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
  setup(e) {
    const r = e, s = T(() => r.workflows.length), l = T(() => r.models.length), u = T(() => r.nodes.length);
    function v(d) {
      return d < 1024 ? `${d} B` : d < 1024 * 1024 ? `${(d / 1024).toFixed(1)} KB` : d < 1024 * 1024 * 1024 ? `${(d / (1024 * 1024)).toFixed(1)} MB` : `${(d / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (d, m) => (o(), n("div", Eu, [
      t("div", zu, [
        g(ke, null, {
          default: a(() => [...m[0] || (m[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), n("span", Mu, [
          m[1] || (m[1] = h(" From: ", -1)),
          g(pt, null, {
            default: a(() => [
              h(i(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      t("div", Lu, [
        t("div", Ru, [
          t("div", Nu, [
            m[3] || (m[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Uu, [
              m[2] || (m[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", Bu, i(s.value) + " file" + i(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), n("div", Tu, [
            (o(!0), n(F, null, X(e.workflows.slice(0, e.maxPreviewItems), (f) => (o(), n("div", {
              key: f,
              class: "preview-item"
            }, [
              m[4] || (m[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Du, i(f), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), n("div", Ou, " +" + i(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t("div", Vu, [
          t("div", Au, [
            m[6] || (m[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", Pu, [
              m[5] || (m[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", Wu, i(l.value) + " file" + i(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), n("div", Fu, [
            (o(!0), n(F, null, X(e.models.slice(0, e.maxPreviewItems), (f) => (o(), n("div", {
              key: f.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", Gu, [
                t("span", Hu, i(f.filename), 1),
                t("span", ju, i(v(f.size)) + " • " + i(f.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), n("div", Ku, " +" + i(e.models.length - e.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t("div", qu, [
          t("div", Yu, [
            m[9] || (m[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", Xu, [
              m[8] || (m[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", Zu, i(u.value) + " node" + i(u.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), n("div", Ju, [
            (o(!0), n(F, null, X(e.nodes.slice(0, e.maxPreviewItems), (f) => (o(), n("div", {
              key: f,
              class: "preview-item"
            }, [
              m[10] || (m[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Qu, i(f), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), n("div", em, " +" + i(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), n("div", tm, [
          m[11] || (m[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", om, [
            e.gitBranch ? (o(), b(ee, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                g(pt, null, {
                  default: a(() => [
                    h(i(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            e.gitCommit ? (o(), b(ee, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                g(Ut, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), nm = /* @__PURE__ */ K(sm, [["__scopeId", "data-v-182fe113"]]), am = { class: "import-options" }, lm = { class: "options-container" }, im = { class: "option-section" }, rm = { class: "conflict-options" }, cm = ["value", "checked", "onChange"], dm = { class: "conflict-content" }, um = { class: "conflict-label" }, mm = { class: "conflict-description" }, vm = { class: "option-section" }, fm = { class: "component-toggles" }, gm = /* @__PURE__ */ j({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(e, { emit: r }) {
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
    return (u, v) => (o(), n("div", am, [
      g(ke, null, {
        default: a(() => [...v[4] || (v[4] = [
          h("Import Options", -1)
        ])]),
        _: 1
      }),
      t("div", lm, [
        t("div", im, [
          g(ht, null, {
            default: a(() => [...v[5] || (v[5] = [
              h("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          t("div", rm, [
            (o(), n(F, null, X(l, (d) => t("label", {
              key: d.value,
              class: Z(["conflict-option", { active: e.conflictMode === d.value }])
            }, [
              t("input", {
                type: "radio",
                name: "conflict-mode",
                value: d.value,
                checked: e.conflictMode === d.value,
                onChange: (m) => s("update:conflictMode", d.value)
              }, null, 40, cm),
              t("div", dm, [
                t("span", um, i(d.label), 1),
                t("span", mm, i(d.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", vm, [
          g(ht, null, {
            default: a(() => [...v[6] || (v[6] = [
              h("Components to Import", -1)
            ])]),
            _: 1
          }),
          t("div", fm, [
            g(De, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                g(Fe, {
                  "model-value": e.includeWorkflows,
                  "onUpdate:modelValue": v[0] || (v[0] = (d) => s("update:includeWorkflows", d))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(De, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                g(Fe, {
                  "model-value": e.includeModels,
                  "onUpdate:modelValue": v[1] || (v[1] = (d) => s("update:includeModels", d))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(De, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                g(Fe, {
                  "model-value": e.includeNodes,
                  "onUpdate:modelValue": v[2] || (v[2] = (d) => s("update:includeNodes", d))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(De, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                g(Fe, {
                  "model-value": e.includeGitHistory,
                  "onUpdate:modelValue": v[3] || (v[3] = (d) => s("update:includeGitHistory", d))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), hm = /* @__PURE__ */ K(gm, [["__scopeId", "data-v-0ec212b0"]]), pm = {
  key: 0,
  class: "import-empty"
}, ym = { class: "import-help" }, wm = {
  key: 1,
  class: "import-configure"
}, bm = { class: "selected-file-bar" }, km = { class: "file-bar-content" }, _m = { class: "file-bar-info" }, $m = { class: "file-bar-name" }, Cm = { class: "file-bar-size" }, xm = { class: "import-actions" }, Sm = {
  key: 2,
  class: "import-progress"
}, Im = { class: "progress-content" }, Em = { class: "progress-info" }, zm = { class: "progress-title" }, Mm = { class: "progress-detail" }, Lm = { class: "progress-bar" }, Rm = { class: "progress-status" }, Nm = {
  key: 3,
  class: "import-complete"
}, Um = { class: "complete-message" }, Bm = { class: "complete-title" }, Tm = { class: "complete-details" }, Dm = { class: "complete-actions" }, Om = /* @__PURE__ */ j({
  __name: "ImportSection",
  setup(e) {
    const r = C(null), s = C(!1), l = C(!1), u = C(!1), v = C(""), d = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), f = C({
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
    }), w = T(() => d.value.includeWorkflows || d.value.includeModels || d.value.includeNodes || d.value.includeGitHistory);
    function x(p) {
      r.value = p;
    }
    function S() {
      r.value = null, l.value = !1, u.value = !1, v.value = "";
    }
    function $() {
      S(), s.value = !1, m.value = {
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
            { message: "Importing workflows...", detail: `Processing ${f.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${f.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${f.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const _ of p)
            m.value = _, await new Promise((y) => setTimeout(y, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((_) => setTimeout(_, 500)), u.value = !0, v.value = `Successfully imported ${f.value.workflows.length} workflows, ${f.value.models.length} models, and ${f.value.nodes.length} custom nodes.`;
        } catch (p) {
          u.value = !1, v.value = p instanceof Error ? p.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, l.value = !0;
        }
      }
    }
    function I(p) {
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (p, _) => (o(), b(pe, null, {
      header: a(() => [
        g(ye, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !r.value && !s.value ? (o(), n("div", pm, [
          g(Iu, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: x
          }),
          t("div", ym, [
            g(ke, null, {
              default: a(() => [..._[5] || (_[5] = [
                h("How to Import", -1)
              ])]),
              _: 1
            }),
            _[6] || (_[6] = t("div", { class: "help-content" }, [
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "1"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Select Export File"),
                  t("div", { class: "help-description" }, " Choose a ComfyGit environment export file created with the EXPORT feature ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "2"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Review Preview"),
                  t("div", { class: "help-description" }, " Check what workflows, models, and nodes will be imported ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "3"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Configure Options"),
                  t("div", { class: "help-description" }, " Choose how to handle conflicts and which components to import ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "4"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Import"),
                  t("div", { class: "help-description" }, " Start the import process and wait for completion ")
                ])
              ])
            ], -1))
          ])
        ])) : r.value && !s.value && !l.value ? (o(), n("div", wm, [
          t("div", bm, [
            t("div", km, [
              _[7] || (_[7] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", _m, [
                t("div", $m, i(r.value.name), 1),
                t("div", Cm, i(I(r.value.size)), 1)
              ])
            ]),
            g(A, {
              variant: "ghost",
              size: "sm",
              onClick: S
            }, {
              default: a(() => [..._[8] || (_[8] = [
                h(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(nm, {
            "source-environment": f.value.sourceEnvironment,
            workflows: f.value.workflows,
            models: f.value.models,
            nodes: f.value.nodes,
            "git-branch": f.value.gitBranch,
            "git-commit": f.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(hm, {
            "conflict-mode": d.value.conflictMode,
            "onUpdate:conflictMode": _[0] || (_[0] = (y) => d.value.conflictMode = y),
            "include-workflows": d.value.includeWorkflows,
            "onUpdate:includeWorkflows": _[1] || (_[1] = (y) => d.value.includeWorkflows = y),
            "include-models": d.value.includeModels,
            "onUpdate:includeModels": _[2] || (_[2] = (y) => d.value.includeModels = y),
            "include-nodes": d.value.includeNodes,
            "onUpdate:includeNodes": _[3] || (_[3] = (y) => d.value.includeNodes = y),
            "include-git-history": d.value.includeGitHistory,
            "onUpdate:includeGitHistory": _[4] || (_[4] = (y) => d.value.includeGitHistory = y)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !d.value.includeModels && f.value.models.length > 0 ? (o(), b(Ae, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${f.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          t("div", xm, [
            g(A, {
              variant: "primary",
              size: "md",
              disabled: !w.value,
              onClick: k
            }, {
              default: a(() => [..._[9] || (_[9] = [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  t("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                h(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            g(A, {
              variant: "secondary",
              size: "md",
              onClick: S
            }, {
              default: a(() => [..._[10] || (_[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Sm, [
          t("div", Im, [
            _[11] || (_[11] = t("div", { class: "progress-icon" }, [
              t("div", { class: "spinner" })
            ], -1)),
            t("div", Em, [
              t("div", zm, i(m.value.message), 1),
              t("div", Mm, i(m.value.detail), 1)
            ])
          ]),
          t("div", Lm, [
            t("div", {
              class: "progress-bar-fill",
              style: Pe({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          t("div", Rm, i(m.value.percent) + "% complete ", 1)
        ])) : l.value ? (o(), n("div", Nm, [
          t("div", {
            class: Z(["complete-icon", u.value ? "success" : "error"])
          }, i(u.value ? "✓" : "✕"), 3),
          t("div", Um, [
            t("div", Bm, i(u.value ? "Import Successful" : "Import Failed"), 1),
            t("div", Tm, i(v.value), 1)
          ]),
          t("div", Dm, [
            g(A, {
              variant: "primary",
              size: "md",
              onClick: $
            }, {
              default: a(() => [..._[12] || (_[12] = [
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
}), Vm = /* @__PURE__ */ K(Om, [["__scopeId", "data-v-18e18eb5"]]), Am = { class: "header-info" }, Pm = { class: "commit-hash" }, Wm = {
  key: 0,
  class: "commit-refs"
}, Fm = { class: "commit-message" }, Gm = { class: "commit-date" }, Hm = {
  key: 0,
  class: "loading"
}, jm = {
  key: 1,
  class: "changes-section"
}, Km = { class: "stats-row" }, qm = { class: "stat" }, Ym = { class: "stat insertions" }, Xm = { class: "stat deletions" }, Zm = {
  key: 0,
  class: "change-group"
}, Jm = {
  key: 1,
  class: "change-group"
}, Qm = {
  key: 0,
  class: "version"
}, ev = {
  key: 2,
  class: "change-group"
}, tv = { class: "change-item" }, ov = /* @__PURE__ */ j({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const r = e, { getCommitDetail: s } = we(), l = C(null), u = C(!0), v = T(() => {
      if (!l.value) return !1;
      const m = l.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), d = T(() => {
      if (!l.value) return !1;
      const m = l.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return ge(async () => {
      try {
        l.value = await s(r.commit.hash);
      } finally {
        u.value = !1;
      }
    }), (m, f) => (o(), b(dt, {
      size: "md",
      "show-close-button": !1,
      onClose: f[3] || (f[3] = (w) => m.$emit("close"))
    }, {
      header: a(() => {
        var w, x, S, $;
        return [
          t("div", Am, [
            f[4] || (f[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", Pm, i(((w = l.value) == null ? void 0 : w.short_hash) || e.commit.short_hash || ((x = e.commit.hash) == null ? void 0 : x.slice(0, 7))), 1),
            ($ = (S = l.value) == null ? void 0 : S.refs) != null && $.length ? (o(), n("span", Wm, [
              (o(!0), n(F, null, X(l.value.refs, (k) => (o(), n("span", {
                key: k,
                class: "ref-badge"
              }, i(k), 1))), 128))
            ])) : c("", !0)
          ]),
          g(ve, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (k) => m.$emit("close"))
          }, {
            default: a(() => [...f[5] || (f[5] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: a(() => {
        var w, x;
        return [
          t("div", Fm, i(((w = l.value) == null ? void 0 : w.message) || e.commit.message), 1),
          t("div", Gm, i(((x = l.value) == null ? void 0 : x.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          u.value ? (o(), n("div", Hm, "Loading details...")) : l.value ? (o(), n("div", jm, [
            t("div", Km, [
              t("span", qm, i(l.value.stats.files_changed) + " files", 1),
              t("span", Ym, "+" + i(l.value.stats.insertions), 1),
              t("span", Xm, "-" + i(l.value.stats.deletions), 1)
            ]),
            v.value ? (o(), n("div", Zm, [
              g(et, { variant: "section" }, {
                default: a(() => [...f[6] || (f[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(F, null, X(l.value.changes.workflows.added, (S) => (o(), n("div", {
                key: "add-" + S,
                class: "change-item added"
              }, [
                f[7] || (f[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, i(S), 1)
              ]))), 128)),
              (o(!0), n(F, null, X(l.value.changes.workflows.modified, (S) => (o(), n("div", {
                key: "mod-" + S,
                class: "change-item modified"
              }, [
                f[8] || (f[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, i(S), 1)
              ]))), 128)),
              (o(!0), n(F, null, X(l.value.changes.workflows.deleted, (S) => (o(), n("div", {
                key: "del-" + S,
                class: "change-item deleted"
              }, [
                f[9] || (f[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, i(S), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value ? (o(), n("div", Jm, [
              g(et, { variant: "section" }, {
                default: a(() => [...f[10] || (f[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(F, null, X(l.value.changes.nodes.added, (S) => (o(), n("div", {
                key: "add-" + S.name,
                class: "change-item added"
              }, [
                f[11] || (f[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, i(S.name), 1),
                S.version ? (o(), n("span", Qm, "(" + i(S.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(F, null, X(l.value.changes.nodes.removed, (S) => (o(), n("div", {
                key: "rem-" + S.name,
                class: "change-item deleted"
              }, [
                f[12] || (f[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, i(S.name), 1)
              ]))), 128))
            ])) : c("", !0),
            l.value.changes.models.resolved > 0 ? (o(), n("div", ev, [
              g(et, { variant: "section" }, {
                default: a(() => [...f[13] || (f[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", tv, [
                f[14] || (f[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, i(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        g(ve, {
          variant: "secondary",
          onClick: f[1] || (f[1] = (w) => m.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...f[15] || (f[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(ve, {
          variant: "primary",
          onClick: f[2] || (f[2] = (w) => m.$emit("checkout", e.commit))
        }, {
          default: a(() => [...f[16] || (f[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), sv = /* @__PURE__ */ K(ov, [["__scopeId", "data-v-d256ff6d"]]), nv = { class: "dialog-message" }, av = {
  key: 0,
  class: "dialog-details"
}, lv = {
  key: 1,
  class: "dialog-warning"
}, iv = /* @__PURE__ */ j({
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
  setup(e) {
    return (r, s) => (o(), b(dt, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (l) => r.$emit("cancel"))
    }, {
      body: a(() => [
        t("p", nv, i(e.message), 1),
        e.details && e.details.length ? (o(), n("div", av, [
          (o(!0), n(F, null, X(e.details, (l, u) => (o(), n("div", {
            key: u,
            class: "detail-item"
          }, " • " + i(l), 1))), 128))
        ])) : c("", !0),
        e.warning ? (o(), n("p", lv, [
          s[4] || (s[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + i(e.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        g(ve, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (l) => r.$emit("cancel"))
        }, {
          default: a(() => [
            h(i(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), b(ve, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (l) => r.$emit("secondary"))
        }, {
          default: a(() => [
            h(i(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        g(ve, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
        }, {
          default: a(() => [
            h(i(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), rv = /* @__PURE__ */ K(iv, [["__scopeId", "data-v-3670b9f5"]]), cv = { class: "base-textarea-wrapper" }, dv = ["value", "rows", "placeholder", "disabled", "maxlength"], uv = {
  key: 0,
  class: "base-textarea-count"
}, mv = /* @__PURE__ */ j({
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
  setup(e) {
    return (r, s) => (o(), n("div", cv, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          s[1] || (s[1] = Le(he((l) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Le(he((l) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, dv),
      e.showCharCount && e.maxLength ? (o(), n("div", uv, i(e.modelValue.length) + " / " + i(e.maxLength), 1)) : c("", !0)
    ]));
  }
}), It = /* @__PURE__ */ K(mv, [["__scopeId", "data-v-5516e6fc"]]), vv = ["checked", "disabled"], fv = { class: "base-checkbox-box" }, gv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, hv = {
  key: 0,
  class: "base-checkbox-label"
}, pv = /* @__PURE__ */ j({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (r, s) => (o(), n("label", {
      class: Z(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.checked))
      }, null, 40, vv),
      t("span", fv, [
        e.modelValue ? (o(), n("svg", gv, [...s[1] || (s[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      r.$slots.default ? (o(), n("span", hv, [
        se(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ K(pv, [["__scopeId", "data-v-bf17c831"]]), yv = { class: "popover-header" }, wv = { class: "popover-body" }, bv = {
  key: 0,
  class: "changes-summary"
}, kv = {
  key: 0,
  class: "change-item"
}, _v = {
  key: 1,
  class: "change-item"
}, $v = {
  key: 2,
  class: "change-item"
}, Cv = {
  key: 3,
  class: "change-item"
}, xv = {
  key: 4,
  class: "change-item"
}, Sv = {
  key: 1,
  class: "no-changes"
}, Iv = {
  key: 2,
  class: "loading"
}, Ev = {
  key: 3,
  class: "issues-warning"
}, zv = { class: "warning-header" }, Mv = { class: "warning-title" }, Lv = { class: "issues-list" }, Rv = { class: "message-section" }, Nv = { class: "popover-footer" }, Uv = {
  key: 1,
  class: "commit-popover"
}, Bv = { class: "popover-header" }, Tv = { class: "popover-body" }, Dv = {
  key: 0,
  class: "changes-summary"
}, Ov = {
  key: 0,
  class: "change-item"
}, Vv = {
  key: 1,
  class: "change-item"
}, Av = {
  key: 2,
  class: "change-item"
}, Pv = {
  key: 3,
  class: "change-item"
}, Wv = {
  key: 4,
  class: "change-item"
}, Fv = {
  key: 1,
  class: "no-changes"
}, Gv = {
  key: 2,
  class: "loading"
}, Hv = {
  key: 3,
  class: "issues-warning"
}, jv = { class: "warning-header" }, Kv = { class: "warning-title" }, qv = { class: "issues-list" }, Yv = { class: "message-section" }, Xv = { class: "popover-footer" }, Zv = /* @__PURE__ */ j({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: r }) {
    const s = e, l = r, { commit: u } = we(), v = C(""), d = C(!1), m = C(!1), f = C(null), w = T(() => {
      if (!s.status) return !1;
      const I = s.status.workflows;
      return I.new.length > 0 || I.modified.length > 0 || I.deleted.length > 0 || s.status.has_changes;
    }), x = T(() => {
      var I;
      return (I = s.status) != null && I.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (p) => p.has_issues && (p.sync_state === "new" || p.sync_state === "modified")
      ) : [];
    }), S = T(() => x.value.length > 0), $ = T(() => S.value && !m.value);
    async function k() {
      var I, p, _;
      if (!(S.value && !m.value) && !(!w.value || !v.value.trim() || d.value)) {
        d.value = !0, f.value = null;
        try {
          const y = await u(v.value.trim(), m.value);
          y.status === "success" ? (f.value = {
            type: "success",
            message: `Committed: ${((I = y.summary) == null ? void 0 : I.new) || 0} new, ${((p = y.summary) == null ? void 0 : p.modified) || 0} modified, ${((_ = y.summary) == null ? void 0 : _.deleted) || 0} deleted`
          }, v.value = "", m.value = !1, setTimeout(() => l("committed"), 1e3)) : y.status === "no_changes" ? f.value = { type: "error", message: "No changes to commit" } : y.status === "blocked" ? f.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : f.value = { type: "error", message: y.message || "Commit failed" };
        } catch (y) {
          f.value = { type: "error", message: y instanceof Error ? y.message : "Commit failed" };
        } finally {
          d.value = !1;
        }
      }
    }
    return (I, p) => e.asModal ? (o(), b(We, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: p[5] || (p[5] = (_) => l("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: p[4] || (p[4] = he(() => {
          }, ["stop"]))
        }, [
          t("div", yv, [
            p[11] || (p[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: p[0] || (p[0] = (_) => l("close"))
            }, [...p[10] || (p[10] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          t("div", wv, [
            e.status && w.value ? (o(), n("div", bv, [
              e.status.workflows.new.length ? (o(), n("div", kv, [
                p[12] || (p[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, i(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              e.status.workflows.modified.length ? (o(), n("div", _v, [
                p[13] || (p[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, i(e.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              e.status.workflows.deleted.length ? (o(), n("div", $v, [
                p[14] || (p[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, i(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              e.status.git_changes.nodes_added.length ? (o(), n("div", Cv, [
                p[15] || (p[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, i(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              e.status.git_changes.nodes_removed.length ? (o(), n("div", xv, [
                p[16] || (p[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, i(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : e.status ? (o(), n("div", Sv, " No changes to commit ")) : (o(), n("div", Iv, " Loading... ")),
            S.value ? (o(), n("div", Ev, [
              t("div", zv, [
                p[17] || (p[17] = t("span", { class: "warning-icon" }, "⚠️", -1)),
                t("span", Mv, i(x.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              t("div", Lv, [
                (o(!0), n(F, null, X(x.value, (_) => (o(), n("div", {
                  key: _.name,
                  class: "issue-item"
                }, [
                  t("strong", null, i(_.name), 1),
                  h(": " + i(_.issue_summary), 1)
                ]))), 128))
              ]),
              g(Et, {
                modelValue: m.value,
                "onUpdate:modelValue": p[1] || (p[1] = (_) => m.value = _),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...p[18] || (p[18] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            t("div", Rv, [
              g(It, {
                modelValue: v.value,
                "onUpdate:modelValue": p[2] || (p[2] = (_) => v.value = _),
                placeholder: $.value ? "Enable 'Allow issues' to commit" : w.value ? "Describe your changes..." : "No changes",
                disabled: !w.value || d.value || $.value,
                rows: 3,
                onCtrlEnter: k
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            f.value ? (o(), n("div", {
              key: 4,
              class: Z(["result", f.value.type])
            }, i(f.value.message), 3)) : c("", !0)
          ]),
          t("div", Nv, [
            g(ve, {
              variant: "secondary",
              onClick: p[3] || (p[3] = (_) => l("close"))
            }, {
              default: a(() => [...p[19] || (p[19] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(ve, {
              variant: m.value ? "danger" : "primary",
              disabled: !w.value || !v.value.trim() || d.value || $.value,
              loading: d.value,
              onClick: k
            }, {
              default: a(() => [
                h(i(d.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Uv, [
      t("div", Bv, [
        p[21] || (p[21] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: p[6] || (p[6] = (_) => l("close"))
        }, [...p[20] || (p[20] = [
          t("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      t("div", Tv, [
        e.status && w.value ? (o(), n("div", Dv, [
          e.status.workflows.new.length ? (o(), n("div", Ov, [
            p[22] || (p[22] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, i(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          e.status.workflows.modified.length ? (o(), n("div", Vv, [
            p[23] || (p[23] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, i(e.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          e.status.workflows.deleted.length ? (o(), n("div", Av, [
            p[24] || (p[24] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, i(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          e.status.git_changes.nodes_added.length ? (o(), n("div", Pv, [
            p[25] || (p[25] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, i(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), n("div", Wv, [
            p[26] || (p[26] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, i(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : e.status ? (o(), n("div", Fv, " No changes to commit ")) : (o(), n("div", Gv, " Loading... ")),
        S.value ? (o(), n("div", Hv, [
          t("div", jv, [
            p[27] || (p[27] = t("span", { class: "warning-icon" }, "⚠️", -1)),
            t("span", Kv, i(x.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          t("div", qv, [
            (o(!0), n(F, null, X(x.value, (_) => (o(), n("div", {
              key: _.name,
              class: "issue-item"
            }, [
              t("strong", null, i(_.name), 1),
              h(": " + i(_.issue_summary), 1)
            ]))), 128))
          ]),
          g(Et, {
            modelValue: m.value,
            "onUpdate:modelValue": p[7] || (p[7] = (_) => m.value = _),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...p[28] || (p[28] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        t("div", Yv, [
          g(It, {
            modelValue: v.value,
            "onUpdate:modelValue": p[8] || (p[8] = (_) => v.value = _),
            placeholder: $.value ? "Enable 'Allow issues' to commit" : w.value ? "Describe your changes..." : "No changes",
            disabled: !w.value || d.value || $.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        f.value ? (o(), n("div", {
          key: 4,
          class: Z(["result", f.value.type])
        }, i(f.value.message), 3)) : c("", !0)
      ]),
      t("div", Xv, [
        g(ve, {
          variant: "secondary",
          onClick: p[9] || (p[9] = (_) => l("close"))
        }, {
          default: a(() => [...p[29] || (p[29] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(ve, {
          variant: m.value ? "danger" : "primary",
          disabled: !w.value || !v.value.trim() || d.value || $.value,
          loading: d.value,
          onClick: k
        }, {
          default: a(() => [
            h(i(d.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Tt = /* @__PURE__ */ K(Zv, [["__scopeId", "data-v-38b45183"]]), Jv = { class: "modal-header" }, Qv = { class: "modal-body" }, ef = { class: "switch-message" }, tf = { class: "switch-details" }, of = { class: "modal-actions" }, sf = /* @__PURE__ */ j({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (r, s) => (o(), b(We, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (l) => r.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = he(() => {
          }, ["stop"]))
        }, [
          t("div", Jv, [
            s[5] || (s[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          t("div", Qv, [
            t("p", ef, [
              s[6] || (s[6] = h(" Switch from ", -1)),
              t("strong", null, i(e.fromEnvironment), 1),
              s[7] || (s[7] = h(" to ", -1)),
              t("strong", null, i(e.toEnvironment), 1),
              s[8] || (s[8] = h("? ", -1))
            ]),
            s[9] || (s[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", tf, ' Your current work will be preserved. You can switch back to "' + i(e.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", of, [
            g(A, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (l) => r.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(A, {
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
}), nf = /* @__PURE__ */ K(sf, [["__scopeId", "data-v-e9c5253e"]]), af = { class: "progress-bar" }, lf = /* @__PURE__ */ j({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const r = e, s = T(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (l, u) => (o(), n("div", af, [
      t("div", {
        class: Z(["progress-fill", e.variant]),
        style: Pe({ width: s.value })
      }, null, 6)
    ]));
  }
}), rf = /* @__PURE__ */ K(lf, [["__scopeId", "data-v-1beb0512"]]), cf = {
  key: 0,
  class: "modal-overlay"
}, df = { class: "modal-content" }, uf = { class: "modal-body" }, mf = { class: "progress-info" }, vf = { class: "progress-percentage" }, ff = { class: "progress-state" }, gf = { class: "switch-steps" }, hf = { class: "step-icon" }, pf = { class: "step-label" }, yf = /* @__PURE__ */ j({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const r = e, s = T(() => {
      const v = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return r.message || v[r.state] || r.state;
    }), l = T(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), u = T(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], d = v.findIndex((m) => m.state === r.state);
      return v.map((m, f) => {
        let w = "pending", x = "○";
        return f < d ? (w = "completed", x = "✓") : f === d && (w = "active", x = "⟳"), {
          ...m,
          status: w,
          icon: x
        };
      });
    });
    return (v, d) => (o(), b(We, { to: "body" }, [
      e.show ? (o(), n("div", cf, [
        t("div", df, [
          d[1] || (d[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", uf, [
            g(rf, {
              progress: e.progress,
              variant: l.value
            }, null, 8, ["progress", "variant"]),
            t("div", mf, [
              t("div", vf, i(e.progress) + "%", 1),
              t("div", ff, i(s.value), 1)
            ]),
            t("div", gf, [
              (o(!0), n(F, null, X(u.value, (m) => (o(), n("div", {
                key: m.state,
                class: Z(["switch-step", m.status])
              }, [
                t("span", hf, i(m.icon), 1),
                t("span", pf, i(m.label), 1)
              ], 2))), 128))
            ]),
            d[0] || (d[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), wf = /* @__PURE__ */ K(yf, [["__scopeId", "data-v-768a5078"]]), bf = { class: "modal-header" }, kf = { class: "modal-body" }, _f = {
  key: 0,
  class: "node-section"
}, $f = { class: "node-list" }, Cf = {
  key: 1,
  class: "node-section"
}, xf = { class: "node-list" }, Sf = { class: "modal-actions" }, If = /* @__PURE__ */ j({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (r, s) => (o(), b(We, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (l) => r.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = he(() => {
          }, ["stop"]))
        }, [
          t("div", bf, [
            s[5] || (s[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          t("div", kf, [
            s[8] || (s[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (o(), n("div", _f, [
              s[6] || (s[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", $f, [
                (o(!0), n(F, null, X(e.mismatchDetails.missing_nodes, (l) => (o(), n("div", {
                  key: l,
                  class: "node-item add"
                }, " + " + i(l), 1))), 128))
              ])
            ])) : c("", !0),
            e.mismatchDetails.extra_nodes.length ? (o(), n("div", Cf, [
              s[7] || (s[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", xf, [
                (o(!0), n(F, null, X(e.mismatchDetails.extra_nodes, (l) => (o(), n("div", {
                  key: l,
                  class: "node-item remove"
                }, " - " + i(l), 1))), 128))
              ])
            ])) : c("", !0),
            s[9] || (s[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", Sf, [
            g(A, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (l) => r.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(A, {
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
}), Ef = /* @__PURE__ */ K(If, [["__scopeId", "data-v-7cad7518"]]);
async function Xe(e, r = {}, s = 5e3) {
  const l = new AbortController(), u = setTimeout(() => l.abort(), s);
  try {
    const v = await fetch(e, {
      ...r,
      signal: l.signal
    });
    return clearTimeout(u), v;
  } catch (v) {
    throw clearTimeout(u), v.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : v;
  }
}
function zf() {
  const e = C(null);
  async function r() {
    try {
      const d = await Xe(
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
    if (e.value || (e.value = await r()), !e.value)
      return null;
    try {
      const d = await Xe(
        `http://127.0.0.1:${e.value}/health`,
        {},
        5e3
      );
      if (!d.ok) throw new Error("Health check failed");
      return await d.json();
    } catch {
      return e.value = await r(), null;
    }
  }
  async function l() {
    if (e.value || (e.value = await r()), !e.value)
      return null;
    try {
      const d = await Xe(
        `http://127.0.0.1:${e.value}/status`,
        {},
        5e3
      );
      if (!d.ok) throw new Error("Failed to get status");
      return await d.json();
    } catch {
      return null;
    }
  }
  async function u() {
    if (e.value || (e.value = await r()), !e.value)
      throw new Error("Control port not available");
    if (!(await Xe(
      `http://127.0.0.1:${e.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (e.value || (e.value = await r()), !e.value)
      throw new Error("Control port not available");
    if (!(await Xe(
      `http://127.0.0.1:${e.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: e,
    discoverControlPort: r,
    checkHealth: s,
    getStatus: l,
    restart: u,
    kill: v
  };
}
const Mf = { class: "comfygit-panel" }, Lf = { class: "panel-header" }, Rf = { class: "header-left" }, Nf = {
  key: 0,
  class: "header-info"
}, Uf = { class: "header-actions" }, Bf = { class: "env-switcher" }, Tf = {
  key: 0,
  class: "header-info"
}, Df = { class: "branch-name" }, Of = { class: "panel-main" }, Vf = { class: "sidebar" }, Af = { class: "sidebar-section" }, Pf = { class: "sidebar-section" }, Wf = { class: "sidebar-section" }, Ff = { class: "content-area" }, Gf = {
  key: 0,
  class: "error-message"
}, Hf = {
  key: 1,
  class: "loading"
}, jf = { class: "dialog-content env-selector-dialog" }, Kf = { class: "dialog-header" }, qf = { class: "dialog-body" }, Yf = { class: "env-list" }, Xf = { class: "env-info" }, Zf = { class: "env-name-row" }, Jf = { class: "env-indicator" }, Qf = { class: "env-name" }, eg = {
  key: 0,
  class: "env-branch"
}, tg = {
  key: 1,
  class: "current-label"
}, og = { class: "env-stats" }, sg = ["onClick"], ng = { class: "toast-container" }, ag = { class: "toast-icon" }, lg = { class: "toast-message" }, ig = /* @__PURE__ */ j({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: r }) {
    const s = r, {
      getStatus: l,
      getHistory: u,
      getBranches: v,
      checkout: d,
      createBranch: m,
      switchBranch: f,
      getEnvironments: w,
      switchEnvironment: x,
      getSwitchProgress: S,
      syncEnvironmentManually: $
    } = we(), k = zf(), I = C(null), p = C([]), _ = C([]), y = C([]), z = T(() => y.value.find((V) => V.is_current)), H = C(!1), U = C(null), O = C(null), R = C(!1), D = C(!1), M = C(!1), N = C(""), B = C({ state: "idle", progress: 0, message: "" });
    let Y = null, G = null;
    const L = C("status"), J = C("this-env");
    function ne(V, E) {
      L.value = V, J.value = E;
    }
    function Be(V) {
      const ae = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[V];
      ae && ne(ae.view, ae.section);
    }
    function Te() {
      ne("branches", "this-env");
    }
    const de = C(null), $e = C(!1), Q = C(!1), Ee = C([]);
    let qe = 0;
    function ce(V, E = "info", ae = 3e3) {
      const ue = ++qe;
      return Ee.value.push({ id: ue, message: V, type: E }), ae > 0 && setTimeout(() => {
        Ee.value = Ee.value.filter((Ce) => Ce.id !== ue);
      }, ae), ue;
    }
    function _e(V) {
      Ee.value = Ee.value.filter((E) => E.id !== V);
    }
    function Ye(V) {
      switch (V) {
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
    const q = T(() => {
      if (!I.value) return "neutral";
      const V = I.value.workflows, E = V.new.length > 0 || V.modified.length > 0 || V.deleted.length > 0 || I.value.has_changes;
      return I.value.comparison.is_synced ? E ? "warning" : "success" : "error";
    });
    T(() => I.value ? q.value === "success" ? "All synced" : q.value === "warning" ? "Uncommitted changes" : q.value === "error" ? "Not synced" : "" : "");
    async function P() {
      H.value = !0, U.value = null;
      try {
        const [V, E, ae, ue] = await Promise.all([
          l(),
          u(),
          v(),
          w()
        ]);
        I.value = V, p.value = E.commits, _.value = ae.branches, y.value = ue, s("statusUpdate", V);
      } catch (V) {
        U.value = V instanceof Error ? V.message : "Failed to load status", I.value = null, p.value = [], _.value = [];
      } finally {
        H.value = !1;
      }
    }
    function W(V) {
      O.value = V;
    }
    async function oe(V) {
      var ae;
      O.value = null;
      const E = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      de.value = {
        title: E ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: E ? "You have uncommitted changes that will be lost." : `Checkout commit ${V.short_hash || ((ae = V.hash) == null ? void 0 : ae.slice(0, 7))}?`,
        details: E ? $t() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: E,
        onConfirm: async () => {
          var xe;
          de.value = null;
          const ue = ce(`Checking out ${V.short_hash || ((xe = V.hash) == null ? void 0 : xe.slice(0, 7))}...`, "info", 0), Ce = await d(V.hash, E);
          _e(ue), Ce.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(Ce.message || "Checkout failed", "error");
        }
      };
    }
    async function re(V) {
      const E = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      de.value = {
        title: E ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: E ? "You have uncommitted changes." : `Switch to branch "${V}"?`,
        details: E ? $t() : void 0,
        warning: E ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          de.value = null;
          const ae = ce(`Switching to ${V}...`, "info", 0), ue = await f(V, E);
          _e(ae), ue.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(ue.message || "Branch switch failed", "error");
        }
      };
    }
    async function st(V) {
      const E = ce(`Creating branch ${V}...`, "info", 0), ae = await m(V);
      _e(E), ae.status === "success" ? (ce(`Branch "${V}" created`, "success"), await P()) : ce(ae.message || "Failed to create branch", "error");
    }
    async function Pt(V) {
      O.value = null;
      const E = prompt("Enter branch name:");
      if (E) {
        const ae = ce(`Creating branch ${E}...`, "info", 0), ue = await m(E, V.hash);
        _e(ae), ue.status === "success" ? (ce(`Branch "${E}" created from ${V.short_hash}`, "success"), await P()) : ce(ue.message || "Failed to create branch", "error");
      }
    }
    async function _t(V) {
      R.value = !1, N.value = V, D.value = !0;
    }
    async function Wt() {
      D.value = !1, M.value = !0, B.value = {
        progress: 10,
        state: nt(10),
        message: at(10)
      };
      try {
        await x(N.value), Ft(), Gt();
      } catch (V) {
        Oe(), M.value = !1, ce(`Failed to initiate switch: ${V instanceof Error ? V.message : "Unknown error"}`, "error"), B.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function nt(V) {
      return V >= 100 ? "complete" : V >= 80 ? "validating" : V >= 60 ? "starting" : V >= 30 ? "syncing" : "preparing";
    }
    function at(V) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[nt(V)] || "";
    }
    function Ft() {
      if (G) return;
      let V = 10;
      const E = 60, ae = 5e3, ue = 100, Ce = (E - V) / (ae / ue);
      G = window.setInterval(() => {
        if (V += Ce, V >= E && (V = E, Oe()), B.value.progress < E) {
          const xe = Math.floor(V);
          B.value = {
            progress: xe,
            state: nt(xe),
            message: at(xe)
          };
        }
      }, ue);
    }
    function Oe() {
      G && (clearInterval(G), G = null);
    }
    function Gt() {
      Y || (Y = window.setInterval(async () => {
        try {
          let V = await k.getStatus();
          if ((!V || V.state === "idle") && (V = await S()), !V)
            return;
          const E = V.progress || 0;
          E >= 60 && Oe();
          const ae = Math.max(E, B.value.progress), ue = V.state && V.state !== "idle" && V.state !== "unknown", Ce = ue ? V.state : nt(ae), xe = ue && V.message || at(ae);
          B.value = {
            state: Ce,
            progress: ae,
            message: xe
          }, V.state === "complete" ? (Oe(), ut(), M.value = !1, ce(`✓ Switched to ${N.value}`, "success"), await P(), N.value = "") : V.state === "rolled_back" ? (Oe(), ut(), M.value = !1, ce("Switch failed, restored previous environment", "warning"), N.value = "") : V.state === "critical_failure" && (Oe(), ut(), M.value = !1, ce(`Critical error during switch: ${V.message}`, "error"), N.value = "");
        } catch (V) {
          console.error("Failed to poll switch progress:", V);
        }
      }, 1e3));
    }
    function ut() {
      Oe(), Y && (clearInterval(Y), Y = null);
    }
    function Ht() {
      D.value = !1, N.value = "";
    }
    async function jt() {
      $e.value = !1, await P(), ce("✓ Changes committed", "success");
    }
    async function Kt() {
      Q.value = !1;
      const V = ce("Syncing environment...", "info", 0);
      try {
        const E = await $("skip", !0);
        if (_e(V), E.status === "success") {
          const ae = [];
          E.nodes_installed.length && ae.push(`${E.nodes_installed.length} installed`), E.nodes_removed.length && ae.push(`${E.nodes_removed.length} removed`);
          const ue = ae.length ? `: ${ae.join(", ")}` : "";
          ce(`✓ Environment synced${ue}`, "success"), await P();
        } else {
          const ae = E.errors.length ? E.errors.join("; ") : E.message;
          ce(`Sync failed: ${ae}`, "error");
        }
      } catch (E) {
        _e(V), ce(`Sync error: ${E instanceof Error ? E.message : "Unknown error"}`, "error");
      }
    }
    async function qt(V) {
      const E = ce(`Creating environment "${V}"...`, "info", 0);
      _e(E), ce("Environment creation not yet implemented", "warning");
    }
    async function Yt(V) {
      const E = ce(`Deleting environment "${V}"...`, "info", 0);
      _e(E), ce("Environment deletion not yet implemented", "warning");
    }
    function Xt(V) {
      ce(`Viewing details for "${V}"`, "info"), ne("models-env", "this-env");
    }
    function $t() {
      if (!I.value) return [];
      const V = [], E = I.value.workflows;
      return E.new.length && V.push(`${E.new.length} new workflow(s)`), E.modified.length && V.push(`${E.modified.length} modified workflow(s)`), E.deleted.length && V.push(`${E.deleted.length} deleted workflow(s)`), V;
    }
    return ge(P), (V, E) => {
      var ae, ue, Ce, xe;
      return o(), n("div", Mf, [
        t("div", Lf, [
          t("div", Rf, [
            E[27] || (E[27] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            I.value ? (o(), n("div", Nf)) : c("", !0)
          ]),
          t("div", Uf, [
            t("button", {
              class: Z(["icon-btn", { spinning: H.value }]),
              onClick: P,
              title: "Refresh"
            }, [...E[28] || (E[28] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            t("button", {
              class: "icon-btn",
              onClick: E[0] || (E[0] = (te) => s("close")),
              title: "Close"
            }, [...E[29] || (E[29] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        t("div", Bf, [
          E[31] || (E[31] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          t("button", {
            class: "env-switcher-btn",
            onClick: E[1] || (E[1] = (te) => ne("environments", "all-envs"))
          }, [
            I.value ? (o(), n("div", Tf, [
              t("span", null, i(((ae = z.value) == null ? void 0 : ae.name) || ((ue = I.value) == null ? void 0 : ue.environment) || "Loading..."), 1),
              t("span", Df, "(" + i(I.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            E[30] || (E[30] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", Of, [
          t("div", Vf, [
            t("div", Af, [
              E[32] || (E[32] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "status" && J.value === "this-env" }]),
                onClick: E[2] || (E[2] = (te) => ne("status", "this-env"))
              }, " STATUS ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "workflows" }]),
                onClick: E[3] || (E[3] = (te) => ne("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "models-env" }]),
                onClick: E[4] || (E[4] = (te) => ne("models-env", "this-env"))
              }, " MODELS ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "branches" }]),
                onClick: E[5] || (E[5] = (te) => ne("branches", "this-env"))
              }, " BRANCHES ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "history" }]),
                onClick: E[6] || (E[6] = (te) => ne("history", "this-env"))
              }, " HISTORY ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "nodes" }]),
                onClick: E[7] || (E[7] = (te) => ne("nodes", "this-env"))
              }, " NODES ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "debug-env" }]),
                onClick: E[8] || (E[8] = (te) => ne("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            E[35] || (E[35] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Pf, [
              E[33] || (E[33] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "environments" }]),
                onClick: E[9] || (E[9] = (te) => ne("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "model-index" }]),
                onClick: E[10] || (E[10] = (te) => ne("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "settings" }]),
                onClick: E[11] || (E[11] = (te) => ne("settings", "all-envs"))
              }, " SETTINGS ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "debug-workspace" }]),
                onClick: E[12] || (E[12] = (te) => ne("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            E[36] || (E[36] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Wf, [
              E[34] || (E[34] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "export" }]),
                onClick: E[13] || (E[13] = (te) => ne("export", "sharing"))
              }, " EXPORT ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "import" }]),
                onClick: E[14] || (E[14] = (te) => ne("import", "sharing"))
              }, " IMPORT ", 2),
              t("button", {
                class: Z(["sidebar-item", { active: L.value === "remotes" }]),
                onClick: E[15] || (E[15] = (te) => ne("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          t("div", Ff, [
            U.value ? (o(), n("div", Gf, i(U.value), 1)) : !I.value && L.value === "status" ? (o(), n("div", Hf, " Loading status... ")) : (o(), n(F, { key: 2 }, [
              L.value === "status" ? (o(), b(Ln, {
                key: 0,
                status: I.value,
                onSwitchBranch: Te,
                onCommitChanges: E[16] || (E[16] = (te) => $e.value = !0),
                onSyncEnvironment: E[17] || (E[17] = (te) => Q.value = !0),
                onViewWorkflows: E[18] || (E[18] = (te) => ne("workflows", "this-env")),
                onViewHistory: E[19] || (E[19] = (te) => ne("history", "this-env")),
                onViewDebug: E[20] || (E[20] = (te) => ne("debug-env", "this-env"))
              }, null, 8, ["status"])) : L.value === "workflows" ? (o(), b(Rc, {
                key: 1,
                onRefresh: P
              })) : L.value === "models-env" ? (o(), b(Bc, {
                key: 2,
                onNavigate: Be
              })) : L.value === "branches" ? (o(), b(jn, {
                key: 3,
                branches: _.value,
                current: ((Ce = I.value) == null ? void 0 : Ce.branch) || null,
                onSwitch: re,
                onCreate: st
              }, null, 8, ["branches", "current"])) : L.value === "history" ? (o(), b(sa, {
                key: 4,
                commits: p.value,
                onSelect: W,
                onCheckout: oe
              }, null, 8, ["commits"])) : L.value === "nodes" ? (o(), b(Wc, { key: 5 })) : L.value === "debug-env" ? (o(), b(Fd, { key: 6 })) : L.value === "environments" ? (o(), b(tu, {
                key: 7,
                onSwitch: _t,
                onCreate: qt,
                onDelete: Yt,
                onViewDetails: Xt
              })) : L.value === "model-index" ? (o(), b(Dc, { key: 8 })) : L.value === "settings" ? (o(), b(Vd, { key: 9 })) : L.value === "debug-workspace" ? (o(), b(Pd, { key: 10 })) : L.value === "export" ? (o(), b(uu, { key: 11 })) : L.value === "import" ? (o(), b(Vm, { key: 12 })) : L.value === "remotes" ? (o(), b(kd, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        O.value ? (o(), b(sv, {
          key: 0,
          commit: O.value,
          onClose: E[21] || (E[21] = (te) => O.value = null),
          onCheckout: oe,
          onCreateBranch: Pt
        }, null, 8, ["commit"])) : c("", !0),
        de.value ? (o(), b(rv, {
          key: 1,
          title: de.value.title,
          message: de.value.message,
          details: de.value.details,
          warning: de.value.warning,
          confirmLabel: de.value.confirmLabel,
          cancelLabel: de.value.cancelLabel,
          secondaryLabel: de.value.secondaryLabel,
          secondaryAction: de.value.secondaryAction,
          destructive: de.value.destructive,
          onConfirm: de.value.onConfirm,
          onCancel: E[22] || (E[22] = (te) => de.value = null),
          onSecondary: de.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        g(nf, {
          show: D.value,
          "from-environment": ((xe = z.value) == null ? void 0 : xe.name) || "unknown",
          "to-environment": N.value,
          onConfirm: Wt,
          onClose: Ht
        }, null, 8, ["show", "from-environment", "to-environment"]),
        $e.value && I.value ? (o(), b(Tt, {
          key: 2,
          status: I.value,
          "as-modal": !0,
          onClose: E[23] || (E[23] = (te) => $e.value = !1),
          onCommitted: jt
        }, null, 8, ["status"])) : c("", !0),
        Q.value && I.value ? (o(), b(Ef, {
          key: 3,
          show: Q.value,
          "mismatch-details": {
            missing_nodes: I.value.comparison.missing_nodes,
            extra_nodes: I.value.comparison.extra_nodes
          },
          onConfirm: Kt,
          onClose: E[24] || (E[24] = (te) => Q.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g(wf, {
          show: M.value,
          state: B.value.state,
          progress: B.value.progress,
          message: B.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        R.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: E[26] || (E[26] = he((te) => R.value = !1, ["self"]))
        }, [
          t("div", jf, [
            t("div", Kf, [
              E[38] || (E[38] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: E[25] || (E[25] = (te) => R.value = !1)
              }, [...E[37] || (E[37] = [
                t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            t("div", qf, [
              E[39] || (E[39] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", Yf, [
                (o(!0), n(F, null, X(y.value, (te) => (o(), n("div", {
                  key: te.name,
                  class: Z(["env-item", { current: te.is_current }])
                }, [
                  t("div", Xf, [
                    t("div", Zf, [
                      t("span", Jf, i(te.is_current ? "●" : "○"), 1),
                      t("span", Qf, i(te.name), 1),
                      te.current_branch ? (o(), n("span", eg, "(" + i(te.current_branch) + ")", 1)) : c("", !0),
                      te.is_current ? (o(), n("span", tg, "CURRENT")) : c("", !0)
                    ]),
                    t("div", og, i(te.workflow_count) + " workflows • " + i(te.node_count) + " nodes ", 1)
                  ]),
                  te.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (wg) => _t(te.name)
                  }, " SWITCH ", 8, sg))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        t("div", ng, [
          g(eo, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(F, null, X(Ee.value, (te) => (o(), n("div", {
                key: te.id,
                class: Z(["toast", te.type])
              }, [
                t("span", ag, i(Ye(te.type)), 1),
                t("span", lg, i(te.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), rg = /* @__PURE__ */ K(ig, [["__scopeId", "data-v-2c8b25b1"]]), cg = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', dg = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', ug = {
  comfy: cg,
  phosphor: dg
}, bt = "comfy", Dt = "comfygit-theme";
let Ve = null, Ot = bt;
function mg() {
  try {
    const e = localStorage.getItem(Dt);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return bt;
}
function Vt(e = bt) {
  Ve && Ve.remove(), Ve = document.createElement("style"), Ve.id = "comfygit-theme-styles", Ve.setAttribute("data-theme", e), Ve.textContent = ug[e], document.head.appendChild(Ve), document.body.setAttribute("data-comfygit-theme", e), Ot = e;
  try {
    localStorage.setItem(Dt, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function vg() {
  return Ot;
}
function fg(e) {
  Vt(e);
}
const kt = document.createElement("link");
kt.rel = "stylesheet";
kt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(kt);
const gg = mg();
Vt(gg);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), fg(e);
  },
  getTheme: () => {
    const e = vg();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Se = null, be = null, tt = null;
const Ge = C(null);
async function yt() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const r = await window.app.api.fetchApi("/v2/comfygit/status");
    r.ok && (Ge.value = await r.json());
  } catch {
  }
}
function hg() {
  if (!Ge.value) return !1;
  const e = Ge.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Ge.value.has_changes;
}
function pg() {
  Se && Se.remove(), Se = document.createElement("div"), Se.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", Se.appendChild(e), Se.addEventListener("click", (l) => {
    l.target === Se && gt();
  });
  const r = (l) => {
    l.key === "Escape" && (gt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Lt({
    render: () => Rt(rg, {
      onClose: gt,
      onStatusUpdate: (l) => {
        Ge.value = l, ct();
      }
    })
  }).mount(e), document.body.appendChild(Se);
}
function gt() {
  Se && (Se.remove(), Se = null);
}
function yg(e) {
  Ze(), be = document.createElement("div"), be.className = "comfygit-commit-popover-container";
  const r = e.getBoundingClientRect();
  be.style.position = "fixed", be.style.top = `${r.bottom + 8}px`, be.style.right = `${window.innerWidth - r.right}px`, be.style.zIndex = "10001";
  const s = (u) => {
    be && !be.contains(u.target) && u.target !== e && (Ze(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const l = (u) => {
    u.key === "Escape" && (Ze(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), tt = Lt({
    render: () => Rt(Tt, {
      status: Ge.value,
      onClose: Ze,
      onCommitted: () => {
        Ze(), yt().then(ct);
      }
    })
  }), tt.mount(be), document.body.appendChild(be);
}
function Ze() {
  tt && (tt.unmount(), tt = null), be && (be.remove(), be = null);
}
let Me = null;
function ct() {
  if (!Me) return;
  const e = Me.querySelector(".commit-indicator");
  e && (e.style.display = hg() ? "block" : "none");
}
const At = document.createElement("style");
At.textContent = `
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
document.head.appendChild(At);
mt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, l;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = pg, Me = document.createElement("button"), Me.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Me.innerHTML = 'Commit <span class="commit-indicator"></span>', Me.title = "Quick Commit", Me.onclick = () => yg(Me), e.appendChild(r), e.appendChild(Me), (l = (s = mt.menu) == null ? void 0 : s.settingsGroup) != null && l.element && (mt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await yt(), ct(), setInterval(async () => {
      await yt(), ct();
    }, 3e4);
  }
});
