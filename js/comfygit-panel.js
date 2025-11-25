import { app as ot } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as de, createBlock as _, resolveDynamicComponent as It, normalizeClass as ee, withCtx as a, toDisplayString as l, createVNode as m, createTextVNode as g, computed as N, Fragment as G, renderList as Z, normalizeStyle as Ze, ref as E, onMounted as _e, watch as Et, Teleport as Le, withModifiers as be, Transition as so, withKeys as Ge, onUnmounted as no, reactive as At, readonly as ao, unref as me, resolveComponent as lo, createSlots as Vt, TransitionGroup as io, createApp as zt, h as Mt } from "vue";
const ro = { class: "panel-layout" }, co = {
  key: 0,
  class: "panel-layout-header"
}, uo = {
  key: 1,
  class: "panel-layout-search"
}, mo = { class: "panel-layout-content" }, vo = {
  key: 2,
  class: "panel-layout-footer"
}, fo = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (d, s) => (o(), n("div", ro, [
      d.$slots.header ? (o(), n("div", co, [
        de(d.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.search ? (o(), n("div", uo, [
        de(d.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", mo, [
        de(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), n("div", vo, [
        de(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), J = (t, d) => {
  const s = t.__vccOpts || t;
  for (const [i, f] of d)
    s[i] = f;
  return s;
}, Ce = /* @__PURE__ */ J(fo, [["__scopeId", "data-v-21565df9"]]), go = {
  key: 0,
  class: "panel-title-prefix"
}, ho = {
  key: 1,
  class: "panel-title-prefix-theme"
}, po = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, s) => (o(), _(It(`h${t.level}`), {
      class: ee(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", go, l(t.prefix), 1)) : (o(), n("span", ho)),
        de(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), yo = /* @__PURE__ */ J(po, [["__scopeId", "data-v-c3875efc"]]), wo = ["title"], bo = ["width", "height"], ko = /* @__PURE__ */ q({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (i) => d.$emit("click"))
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
      ])], 8, bo))
    ], 8, wo));
  }
}), Ft = /* @__PURE__ */ J(ko, [["__scopeId", "data-v-6fc7f16d"]]), _o = { class: "header-left" }, $o = {
  key: 0,
  class: "header-actions"
}, Co = /* @__PURE__ */ q({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: ee(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", _o, [
        m(yo, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            g(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), _(Ft, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (o(), n("div", $o, [
        de(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ J(Co, [["__scopeId", "data-v-55a62cd6"]]), xo = {
  key: 0,
  class: "section-title-count"
}, So = {
  key: 1,
  class: "section-title-icon"
}, Io = /* @__PURE__ */ q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), _(It(`h${t.level}`), {
      class: ee(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        de(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", xo, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", So, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ee = /* @__PURE__ */ J(Io, [["__scopeId", "data-v-559361eb"]]), Eo = { class: "status-grid" }, zo = { class: "status-grid__column" }, Mo = { class: "status-grid__title" }, Lo = { class: "status-grid__column status-grid__column--right" }, To = { class: "status-grid__title" }, Ro = /* @__PURE__ */ q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", Eo, [
      e("div", zo, [
        e("h4", Mo, l(t.leftTitle), 1),
        de(d.$slots, "left", {}, void 0, !0)
      ]),
      e("div", Lo, [
        e("h4", To, l(t.rightTitle), 1),
        de(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Do = /* @__PURE__ */ J(Ro, [["__scopeId", "data-v-fe556068"]]), No = {
  key: 0,
  class: "status-item__icon"
}, Oo = {
  key: 1,
  class: "status-item__count"
}, Uo = { class: "status-item__label" }, Bo = /* @__PURE__ */ q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const d = t, s = N(() => `status-item--${d.variant}`);
    return (i, f) => (o(), n("div", {
      class: ee(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", No, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", Oo, l(t.count), 1)) : c("", !0),
      e("span", Uo, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ J(Bo, [["__scopeId", "data-v-6f929183"]]), Po = { class: "issue-card__header" }, Ao = { class: "issue-card__icon" }, Vo = { class: "issue-card__title" }, Fo = {
  key: 0,
  class: "issue-card__content"
}, Wo = {
  key: 0,
  class: "issue-card__description"
}, Go = {
  key: 1,
  class: "issue-card__items"
}, jo = {
  key: 2,
  class: "issue-card__actions"
}, Ho = /* @__PURE__ */ q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const d = t, s = N(() => `issue-card--${d.severity}`);
    return (i, f) => (o(), n("div", {
      class: ee(["issue-card", s.value])
    }, [
      e("div", Po, [
        e("span", Ao, l(t.icon), 1),
        e("h4", Vo, l(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", Fo, [
        t.description ? (o(), n("p", Wo, l(t.description), 1)) : c("", !0),
        de(i.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", Go, [
        (o(!0), n(G, null, Z(t.items, (y, h) => (o(), n("div", {
          key: h,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : c("", !0),
      i.$slots.actions ? (o(), n("div", jo, [
        de(i.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ J(Ho, [["__scopeId", "data-v-df6aa348"]]), Ko = ["type", "disabled"], qo = {
  key: 0,
  class: "spinner"
}, Jo = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ee(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", qo)) : c("", !0),
      t.loading ? c("", !0) : de(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ko));
  }
}), j = /* @__PURE__ */ J(Jo, [["__scopeId", "data-v-772abe47"]]), Yo = { class: "empty-state" }, Xo = {
  key: 0,
  class: "empty-icon"
}, Qo = { class: "empty-message" }, Zo = /* @__PURE__ */ q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (d, s) => (o(), n("div", Yo, [
      t.icon ? (o(), n("div", Xo, l(t.icon), 1)) : c("", !0),
      e("p", Qo, l(t.message), 1),
      t.actionLabel ? (o(), _(j, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("action"))
      }, {
        default: a(() => [
          g(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ J(Zo, [["__scopeId", "data-v-4466284f"]]), es = { class: "branch-indicator" }, ts = { class: "branch-indicator__info" }, os = { class: "branch-indicator__label" }, ss = { class: "branch-indicator__name" }, ns = {
  key: 0,
  class: "branch-indicator__remote"
}, as = {
  key: 0,
  class: "branch-indicator__status"
}, ls = {
  key: 0,
  class: "branch-indicator__ahead"
}, is = {
  key: 1,
  class: "branch-indicator__behind"
}, rs = {
  key: 1,
  class: "branch-indicator__actions"
}, ds = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("div", es, [
      e("div", ts, [
        e("span", os, l(t.label), 1),
        e("span", ss, l(t.branchName), 1),
        t.remote ? (o(), n("span", ns, "@" + l(t.remote), 1)) : c("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", as, [
        t.commitsAhead ? (o(), n("span", ls, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : c("", !0),
        t.commitsBehind ? (o(), n("span", is, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      d.$slots.actions ? (o(), n("div", rs, [
        de(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ J(ds, [["__scopeId", "data-v-cb8dd50e"]]), us = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: ee(["detail-label"]),
      style: Ze({ minWidth: t.minWidth })
    }, [
      de(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ J(us, [["__scopeId", "data-v-75e9eeb8"]]), ms = /* @__PURE__ */ q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: ee(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      de(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ J(ms, [["__scopeId", "data-v-2f186e4c"]]), vs = { class: "detail-row" }, fs = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("div", vs, [
      m(xt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          g(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), _(St, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          g(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : de(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ae = /* @__PURE__ */ J(fs, [["__scopeId", "data-v-ef15664a"]]), gs = { class: "modal-header" }, hs = { class: "modal-body" }, ps = { class: "status-section" }, ys = {
  key: 0,
  class: "status-section"
}, ws = { class: "section-header-row" }, bs = {
  key: 0,
  class: "workflow-group"
}, ks = { class: "workflow-group-header" }, _s = { class: "workflow-group-title" }, $s = { class: "workflow-list" }, Cs = { class: "workflow-name" }, xs = { class: "workflow-issue" }, Ss = {
  key: 1,
  class: "workflow-group"
}, Is = { class: "workflow-group-header" }, Es = { class: "workflow-group-title" }, zs = { class: "workflow-list" }, Ms = { class: "workflow-name" }, Ls = { class: "workflow-issue" }, Ts = {
  key: 2,
  class: "workflow-group"
}, Rs = { class: "workflow-group-header" }, Ds = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Os = { class: "workflow-name" }, Us = {
  key: 3,
  class: "workflow-group"
}, Bs = { class: "workflow-group-header" }, Ps = { class: "workflow-group-title" }, As = { class: "workflow-list" }, Vs = { class: "workflow-name" }, Fs = {
  key: 4,
  class: "workflow-group"
}, Ws = { class: "workflow-group-header" }, Gs = { class: "workflow-group-title" }, js = { class: "workflow-list" }, Hs = { class: "workflow-name" }, Ks = {
  key: 5,
  class: "workflow-group"
}, qs = { class: "workflow-group-title" }, Js = { class: "expand-icon" }, Ys = {
  key: 0,
  class: "workflow-list"
}, Xs = { class: "workflow-name" }, Qs = {
  key: 1,
  class: "status-section"
}, Zs = {
  key: 0,
  class: "change-group"
}, en = { class: "change-group-header" }, tn = { class: "change-group-title" }, on = { class: "change-list" }, sn = { class: "node-name" }, nn = {
  key: 0,
  class: "dev-badge"
}, an = {
  key: 1,
  class: "change-group"
}, ln = { class: "change-group-header" }, rn = { class: "change-group-title" }, dn = { class: "change-list" }, cn = { class: "node-name" }, un = {
  key: 0,
  class: "dev-badge"
}, mn = {
  key: 2,
  class: "change-group"
}, vn = { class: "change-list" }, fn = { class: "change-item" }, gn = { class: "node-name" }, hn = {
  key: 3,
  class: "change-group"
}, pn = {
  key: 2,
  class: "status-section"
}, yn = {
  key: 0,
  class: "drift-item"
}, wn = { class: "drift-list" }, bn = {
  key: 0,
  class: "drift-list-more"
}, kn = {
  key: 1,
  class: "drift-item"
}, _n = { class: "drift-list" }, $n = {
  key: 0,
  class: "drift-list-more"
}, Cn = {
  key: 2,
  class: "drift-item"
}, xn = {
  key: 3,
  class: "drift-item"
}, Sn = {
  key: 3,
  class: "status-section"
}, In = { class: "info-box" }, En = { class: "drift-list" }, zn = {
  key: 0,
  class: "drift-list-more"
}, Mn = {
  key: 4,
  class: "status-section"
}, Ln = { class: "warning-box" }, Tn = {
  key: 5,
  class: "empty-state-inline"
}, Rn = { class: "modal-actions" }, Dn = /* @__PURE__ */ q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows"],
  setup(t) {
    const d = t, s = E(!1);
    _e(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Et(() => d.show, (z, I) => {
      console.log("StatusDetailModal show prop changed from", I, "to", z);
    }, { immediate: !0 });
    const i = N(() => {
      var z, I, $;
      return (($ = (I = (z = d.status) == null ? void 0 : z.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : $.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), f = N(() => {
      var z, I, $;
      return (($ = (I = (z = d.status) == null ? void 0 : z.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : $.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), y = N(() => {
      var z, I, $;
      return (($ = (I = (z = d.status) == null ? void 0 : z.workflows) == null ? void 0 : I.synced) == null ? void 0 : $.filter((S) => {
        var C, P, L;
        const k = (L = (P = (C = d.status) == null ? void 0 : C.workflows) == null ? void 0 : P.analyzed) == null ? void 0 : L.find((w) => w.name === S);
        return !k || k.status !== "broken";
      })) || [];
    }), h = N(() => {
      var z, I, $, S, k;
      return (z = d.status) != null && z.workflows ? (((I = d.status.workflows.new) == null ? void 0 : I.length) ?? 0) > 0 || ((($ = d.status.workflows.modified) == null ? void 0 : $.length) ?? 0) > 0 || (((S = d.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), v = N(() => {
      var I, $, S;
      const z = (I = d.status) == null ? void 0 : I.git_changes;
      return z ? ((($ = z.nodes_added) == null ? void 0 : $.length) ?? 0) > 0 || (((S = z.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || z.workflow_changes || z.has_other_changes : !1;
    }), r = N(() => {
      var z, I, $, S, k, C;
      return !h.value && !v.value && ((I = (z = d.status) == null ? void 0 : z.comparison) == null ? void 0 : I.is_synced) && ((($ = d.status) == null ? void 0 : $.missing_models_count) ?? 0) === 0 && (((C = (k = (S = d.status) == null ? void 0 : S.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), u = N(() => {
      var I, $;
      const z = ($ = (I = d.status) == null ? void 0 : I.git_changes) == null ? void 0 : $.workflow_changes;
      return z ? typeof z == "number" ? z : Object.keys(z).length : 0;
    });
    function b(z) {
      return typeof z == "string" ? z : z.name;
    }
    function p(z) {
      return typeof z == "object" && z.is_development === !0;
    }
    return (z, I) => {
      var $, S, k, C, P, L, w, M, x, U, R, D, O, V, F, Q, A, K, X, ne, se, fe;
      return o(), _(Le, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[5] || (I[5] = (oe) => z.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: I[4] || (I[4] = be(() => {
            }, ["stop"]))
          }, [
            e("div", gs, [
              I[6] || (I[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (oe) => z.$emit("close"))
              }, "✕")
            ]),
            e("div", hs, [
              e("div", ps, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...I[7] || (I[7] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                m(ae, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), n("div", ys, [
                e("div", ws, [
                  m(Ee, { level: "4" }, {
                    default: a(() => [...I[8] || (I[8] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: I[1] || (I[1] = (oe) => z.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (o(), n("div", bs, [
                  e("div", ks, [
                    I[9] || (I[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", _s, "BROKEN (COMMITTED) (" + l(i.value.length) + ")", 1)
                  ]),
                  e("div", $s, [
                    (o(!0), n(G, null, Z(i.value, (oe) => (o(), n("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, l(oe.name), 1),
                      e("span", xs, l(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (o(), n("div", Ss, [
                  e("div", Is, [
                    I[10] || (I[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Es, "BROKEN (UNCOMMITTED) (" + l(f.value.length) + ")", 1)
                  ]),
                  e("div", zs, [
                    (o(!0), n(G, null, Z(f.value, (oe) => (o(), n("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ms, l(oe.name), 1),
                      e("span", Ls, l(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (S = ($ = t.status.workflows) == null ? void 0 : $.new) != null && S.length ? (o(), n("div", Ts, [
                  e("div", Rs, [
                    I[11] || (I[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ds, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), n(G, null, Z(t.status.workflows.new, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Os, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (C = (k = t.status.workflows) == null ? void 0 : k.modified) != null && C.length ? (o(), n("div", Us, [
                  e("div", Bs, [
                    I[12] || (I[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ps, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", As, [
                    (o(!0), n(G, null, Z(t.status.workflows.modified, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (L = (P = t.status.workflows) == null ? void 0 : P.deleted) != null && L.length ? (o(), n("div", Fs, [
                  e("div", Ws, [
                    I[13] || (I[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Gs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", js, [
                    (o(!0), n(G, null, Z(t.status.workflows.deleted, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Hs, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (o(), n("div", Ks, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: I[2] || (I[2] = (oe) => s.value = !s.value)
                  }, [
                    I[14] || (I[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", qs, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Js, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Ys, [
                    (o(!0), n(G, null, Z(y.value, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, l(oe), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              v.value ? (o(), n("div", Qs, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...I[15] || (I[15] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (M = (w = t.status.git_changes) == null ? void 0 : w.nodes_added) != null && M.length ? (o(), n("div", Zs, [
                  e("div", en, [
                    I[16] || (I[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", tn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), n(G, null, Z(t.status.git_changes.nodes_added, (oe) => (o(), n("div", {
                      key: b(oe),
                      class: "change-item"
                    }, [
                      e("span", sn, l(b(oe)), 1),
                      p(oe) ? (o(), n("span", nn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (U = (x = t.status.git_changes) == null ? void 0 : x.nodes_removed) != null && U.length ? (o(), n("div", an, [
                  e("div", ln, [
                    I[17] || (I[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", rn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", dn, [
                    (o(!0), n(G, null, Z(t.status.git_changes.nodes_removed, (oe) => (o(), n("div", {
                      key: b(oe),
                      class: "change-item"
                    }, [
                      e("span", cn, l(b(oe)), 1),
                      p(oe) ? (o(), n("span", un, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = t.status.git_changes) != null && R.workflow_changes ? (o(), n("div", mn, [
                  I[18] || (I[18] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", vn, [
                    e("div", fn, [
                      e("span", gn, l(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (D = t.status.git_changes) != null && D.has_other_changes ? (o(), n("div", hn, [...I[19] || (I[19] = [
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
              (O = t.status.comparison) != null && O.is_synced ? c("", !0) : (o(), n("div", pn, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...I[20] || (I[20] = [
                    g("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                I[21] || (I[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (F = (V = t.status.comparison) == null ? void 0 : V.missing_nodes) != null && F.length ? (o(), n("div", yn, [
                  m(ae, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", wn, [
                    (o(!0), n(G, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (o(), n("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + l(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", bn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (A = (Q = t.status.comparison) == null ? void 0 : Q.extra_nodes) != null && A.length ? (o(), n("div", kn, [
                  m(ae, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", _n, [
                    (o(!0), n(G, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (o(), n("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + l(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", $n, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (X = (K = t.status.comparison) == null ? void 0 : K.version_mismatches) != null && X.length ? (o(), n("div", Cn, [
                  m(ae, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (ne = t.status.comparison) != null && ne.packages_in_sync ? c("", !0) : (o(), n("div", xn, [
                  m(ae, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (fe = (se = t.status.comparison) == null ? void 0 : se.disabled_nodes) != null && fe.length ? (o(), n("div", Sn, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...I[22] || (I[22] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", In, [
                  I[23] || (I[23] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", En, [
                  (o(!0), n(G, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (o(), n("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + l(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", zn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Mn, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...I[24] || (I[24] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ln, [
                  I[25] || (I[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                I[26] || (I[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              r.value ? (o(), n("div", Tn, [...I[27] || (I[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Rn, [
              m(j, {
                variant: "secondary",
                onClick: I[3] || (I[3] = (oe) => z.$emit("close"))
              }, {
                default: a(() => [...I[28] || (I[28] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Nt = /* @__PURE__ */ J(Dn, [["__scopeId", "data-v-cbde957e"]]), Nn = { class: "health-section-header" }, On = { style: { "margin-top": "var(--cg-space-1)" } }, Un = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Bn = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: d }) {
    const s = t, i = E(!1), f = E(!1);
    _e(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Nt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function h() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function v() {
      i.value = !1, r("view-workflows");
    }
    const r = d, u = N(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), b = N(() => {
      const L = s.status.git_changes;
      return L.nodes_added.length > 0 || L.nodes_removed.length > 0 || L.workflow_changes || L.has_other_changes;
    }), p = N(() => u.value || b.value), z = N(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), I = N(() => s.status.git_changes.has_other_changes), $ = N(() => {
      var L;
      return ((L = s.status.workflows.analyzed) == null ? void 0 : L.filter(
        (w) => w.status === "broken" && w.sync_state === "synced"
      )) || [];
    }), S = N(() => {
      var L;
      return ((L = s.status.workflows.analyzed) == null ? void 0 : L.filter(
        (w) => w.status === "broken" && w.sync_state !== "synced"
      )) || [];
    }), k = N(() => $.value.length > 0 || S.value.length > 0), C = N(() => k.value || s.status.missing_models_count > 0 || p.value || !s.status.comparison.is_synced), P = N(() => {
      const L = [];
      return s.status.workflows.new.length > 0 && L.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && L.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && L.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && L.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && L.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${L.length > 0 ? L.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (L, w) => (o(), n(G, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: w[0] || (w[0] = (M) => f.value = !0),
            onMouseleave: w[1] || (w[1] = (M) => f.value = !1)
          }, [
            e("div", Nn, [
              m(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...w[11] || (w[11] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              m(so, { name: "fade" }, {
                default: a(() => [
                  f.value ? (o(), _(j, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...w[12] || (w[12] = [
                      g(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            m(Do, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), _(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), _(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), _(Ve, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                m(Ve, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), _(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), _(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), _(Ve, {
                  key: 2,
                  icon: "●",
                  count: z.value,
                  label: z.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                I.value ? (o(), _(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), _(Ve, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", On, [
            m(cs, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                m(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w[2] || (w[2] = (M) => L.$emit("switch-branch"))
                }, {
                  default: a(() => [...w[13] || (w[13] = [
                    g(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), _(Xe, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              m(j, {
                variant: "primary",
                size: "sm",
                onClick: w[3] || (w[3] = (M) => L.$emit("create-branch"))
              }, {
                default: a(() => [...w[14] || (w[14] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          C.value ? (o(), n("div", Un, [
            m(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...w[15] || (w[15] = [
                g(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            $.value.length > 0 ? (o(), _(Xe, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${$.value.length} committed workflow${$.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: $.value.map((M) => `${M.name} — ${M.issue_summary}`)
            }, {
              actions: a(() => [
                m(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: w[4] || (w[4] = (M) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...w[16] || (w[16] = [
                    g(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            S.value.length > 0 ? (o(), _(Xe, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: S.value.map((M) => `${M.name} — ${M.issue_summary}`)
            }, {
              actions: a(() => [
                m(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: w[5] || (w[5] = (M) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...w[17] || (w[17] = [
                    g(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !k.value ? (o(), _(Xe, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                m(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: w[6] || (w[6] = (M) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...w[18] || (w[18] = [
                    g(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            p.value ? (o(), _(Xe, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: P.value
            }, {
              actions: a(() => [
                m(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: h
                }, {
                  default: a(() => [...w[19] || (w[19] = [
                    g(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                m(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: w[7] || (w[7] = (M) => L.$emit("commit-changes"))
                }, {
                  default: a(() => [...w[20] || (w[20] = [
                    g(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), _(Xe, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                m(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w[8] || (w[8] = (M) => L.$emit("view-debug"))
                }, {
                  default: a(() => [...w[21] || (w[21] = [
                    g(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                m(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: w[9] || (w[9] = (M) => L.$emit("sync-environment"))
                }, {
                  default: a(() => [...w[22] || (w[22] = [
                    g(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !C.value && !b.value ? (o(), _(Oe, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      m(Nt, {
        show: i.value,
        status: t.status,
        onClose: w[10] || (w[10] = (M) => i.value = !1),
        onNavigateWorkflows: v
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Pn = /* @__PURE__ */ J(Bn, [["__scopeId", "data-v-05737be6"]]), An = ["type", "value", "placeholder", "disabled"], Vn = /* @__PURE__ */ q({
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
  setup(t, { expose: d, emit: s }) {
    const i = t, f = s, y = E(null);
    function h(v) {
      const r = v.target.value;
      f("update:modelValue", r);
    }
    return _e(() => {
      i.autoFocus && y.value && y.value.focus();
    }), d({
      focus: () => {
        var v;
        return (v = y.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = y.value) == null ? void 0 : v.blur();
      }
    }), (v, r) => (o(), n("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ee(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        r[0] || (r[0] = Ge((u) => v.$emit("enter"), ["enter"])),
        r[1] || (r[1] = Ge((u) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (u) => v.$emit("focus")),
      onBlur: r[3] || (r[3] = (u) => v.$emit("blur"))
    }, null, 42, An));
  }
}), vt = /* @__PURE__ */ J(Vn, [["__scopeId", "data-v-0380d08f"]]), Fn = { class: "branch-create-form" }, Wn = { class: "form-actions" }, Gn = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const s = d, i = E(""), f = N(() => {
      const v = i.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function y() {
      f.value && (s("create", i.value.trim()), i.value = "");
    }
    function h() {
      i.value = "", s("cancel");
    }
    return (v, r) => (o(), n("div", Fn, [
      m(vt, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => i.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Wn, [
        m(j, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: y
        }, {
          default: a(() => [...r[1] || (r[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        m(j, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: a(() => [...r[2] || (r[2] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), jn = /* @__PURE__ */ J(Gn, [["__scopeId", "data-v-7c500394"]]), Hn = { class: "branch-list-item__indicator" }, Kn = { class: "branch-list-item__name" }, qn = {
  key: 0,
  class: "branch-list-item__actions"
}, Jn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Yn = /* @__PURE__ */ q({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: ee(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, [
      e("span", Hn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Kn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), n("div", qn, [
        de(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", Jn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xn = /* @__PURE__ */ J(Yn, [["__scopeId", "data-v-c6581a24"]]), Qn = {
  key: 2,
  class: "branch-list"
}, Zn = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: d }) {
    const s = d, i = E(!1);
    function f(h) {
      s("create", h), y();
    }
    function y() {
      i.value = !1;
    }
    return (h, v) => (o(), _(Ce, null, {
      header: a(() => [
        m(xe, { title: "BRANCHES" }, {
          actions: a(() => [
            m(j, {
              variant: "ghost",
              size: "sm",
              onClick: v[0] || (v[0] = (r) => i.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...v[1] || (v[1] = [
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
        i.value ? (o(), _(jn, {
          key: 0,
          onCreate: f,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), _(Oe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Qn, [
          (o(!0), n(G, null, Z(t.branches, (r) => (o(), _(Xn, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: a(() => [
              r.is_current ? c("", !0) : (o(), _(j, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (u) => h.$emit("switch", r.name)
              }, {
                default: a(() => [...v[2] || (v[2] = [
                  g(" Switch ", -1)
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
}), ea = /* @__PURE__ */ J(Zn, [["__scopeId", "data-v-763d6ec4"]]), ta = { class: "commit-list" }, oa = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (d, s) => (o(), n("div", ta, [
      de(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), sa = /* @__PURE__ */ J(oa, [["__scopeId", "data-v-8c5ee761"]]), na = { class: "commit-hash" }, aa = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, s = N(() => d.hash.slice(0, d.length));
    return (i, f) => (o(), n("span", na, l(s.value), 1));
  }
}), Wt = /* @__PURE__ */ J(aa, [["__scopeId", "data-v-7c333cc6"]]), la = { class: "commit-message" }, ia = { class: "commit-date" }, ra = /* @__PURE__ */ q({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, i = d;
    function f() {
      s.clickable && i("click");
    }
    return (y, h) => (o(), n("div", {
      class: ee(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      m(Wt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", la, l(t.message), 1),
      e("span", ia, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = be(() => {
        }, ["stop"]))
      }, [
        de(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), da = /* @__PURE__ */ J(ra, [["__scopeId", "data-v-dd7c621b"]]), ca = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, s) => (o(), _(Ce, null, {
      header: a(() => [
        m(xe, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), _(Oe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), _(sa, { key: 1 }, {
          default: a(() => [
            (o(!0), n(G, null, Z(t.commits, (i) => (o(), _(da, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => d.$emit("select", i)
            }, {
              actions: a(() => [
                m(j, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => d.$emit("checkout", i),
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
}), ua = /* @__PURE__ */ J(ca, [["__scopeId", "data-v-981c3c64"]]), Rh = [
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
  ...Array(12).fill(null).map((t, d) => ({
    name: `synced-workflow-${d + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + d,
    model_count: 1 + d % 3,
    sync_state: "synced"
  }))
], Dh = {
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
}, ma = [
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
], Nh = [
  ...ma,
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
function ht() {
  return !1;
}
function Se() {
  const t = E(!1), d = E(null);
  async function s(Y, le) {
    var $e;
    if (!(($e = window.app) != null && $e.api))
      throw new Error("ComfyUI API not available");
    const ce = await window.app.api.fetchApi(Y, le);
    if (!ce.ok) {
      const Je = await ce.json().catch(() => ({}));
      throw new Error(Je.error || Je.message || `Request failed: ${ce.status}`);
    }
    return ce.json();
  }
  async function i(Y = !1) {
    return s(Y ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(Y, le = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: le })
    });
  }
  async function y(Y = 10, le = 0) {
    return s(`/v2/comfygit/log?limit=${Y}&offset=${le}`);
  }
  async function h(Y) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function v() {
    return s("/v2/comfygit/branches");
  }
  async function r(Y) {
    return s(`/v2/comfygit/commit/${Y}`);
  }
  async function u(Y, le = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: le })
    });
  }
  async function b(Y, le = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: le })
    });
  }
  async function p(Y, le = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: le })
    });
  }
  async function z() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Y = await i();
        return [{
          name: Y.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + Y.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: Y.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: Y.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function I(Y) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: Y })
    });
  }
  async function $() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function S(Y, le, ce) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, pytorch_backend: le, clone_from: ce })
    });
  }
  async function k(Y) {
    return s(`/v2/workspace/environments/${Y}`, {
      method: "DELETE"
    });
  }
  async function C(Y = !1) {
    try {
      return s(Y ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const le = await i(Y), ce = [];
      return le.workflows.new.forEach(($e) => {
        ce.push({ name: $e, status: "new", missing_nodes: 0, missing_models: 0, path: $e });
      }), le.workflows.modified.forEach(($e) => {
        ce.push({ name: $e, status: "modified", missing_nodes: 0, missing_models: 0, path: $e });
      }), le.workflows.synced.forEach(($e) => {
        ce.push({ name: $e, status: "synced", missing_nodes: 0, missing_models: 0, path: $e });
      }), ce;
    }
  }
  async function P(Y) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/details`);
  }
  async function L(Y) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/resolve`, {
      method: "POST"
    });
  }
  async function w(Y, le, ce) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: le, install_models: ce })
    });
  }
  async function M(Y, le, ce) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: le, importance: ce })
    });
  }
  async function x() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function U() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function R(Y, le) {
    return s(`/v2/workspace/models/${Y}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: le })
    });
  }
  async function D(Y) {
    return s(`/v2/workspace/models/${Y}`, {
      method: "DELETE"
    });
  }
  async function O(Y) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function V() {
    try {
      return s("/v2/comfygit/config");
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0
      };
    }
  }
  async function F(Y) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Q(Y, le) {
    try {
      const ce = new URLSearchParams();
      return Y && ce.append("level", Y), le && ce.append("lines", le.toString()), s(`/v2/comfygit/debug/logs?${ce}`);
    } catch {
      return [];
    }
  }
  async function A(Y, le) {
    try {
      const ce = new URLSearchParams();
      return Y && ce.append("level", Y), le && ce.append("lines", le.toString()), s(`/v2/workspace/debug/logs?${ce}`);
    } catch {
      return [];
    }
  }
  async function K() {
    try {
      return s("/v2/comfygit/nodes");
    } catch {
      return {
        nodes: [],
        total_count: 0,
        installed_count: 0,
        missing_count: 0
      };
    }
  }
  async function X(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/install`, {
      method: "POST"
    });
  }
  async function ne(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/update`, {
      method: "POST"
    });
  }
  async function se(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function fe() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function oe(Y, le) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, url: le })
    });
  }
  async function ze(Y) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function pe(Y, le, ce) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: le, push_url: ce })
    });
  }
  async function et(Y) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/fetch`, {
      method: "POST"
    });
  }
  async function ge(Y) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/status`);
    } catch {
      return null;
    }
  }
  async function Me(Y = "skip", le = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Y,
        remove_extra_nodes: le
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: i,
    commit: f,
    getHistory: y,
    exportEnv: h,
    // Git Operations
    getBranches: v,
    getCommitDetail: r,
    checkout: u,
    createBranch: b,
    switchBranch: p,
    // Environment Management
    getEnvironments: z,
    switchEnvironment: I,
    getSwitchProgress: $,
    createEnvironment: S,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: C,
    getWorkflowDetails: P,
    resolveWorkflow: L,
    installWorkflowDeps: w,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: x,
    getWorkspaceModels: U,
    updateModelSource: R,
    deleteModel: D,
    downloadModel: O,
    // Settings
    getConfig: V,
    updateConfig: F,
    // Debug/Logs
    getEnvironmentLogs: Q,
    getWorkspaceLogs: A,
    // Node Management
    getNodes: K,
    installNode: X,
    updateNode: ne,
    uninstallNode: se,
    // Git Remotes
    getRemotes: fe,
    addRemote: oe,
    removeRemote: ze,
    updateRemoteUrl: pe,
    fetchRemote: et,
    getRemoteSyncStatus: ge,
    // Environment Sync
    syncEnvironmentManually: Me
  };
}
const va = { class: "base-modal-header" }, fa = {
  key: 0,
  class: "base-modal-title"
}, ga = { class: "base-modal-body" }, ha = {
  key: 0,
  class: "base-modal-loading"
}, pa = {
  key: 1,
  class: "base-modal-error"
}, ya = {
  key: 0,
  class: "base-modal-footer"
}, wa = /* @__PURE__ */ q({
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
  setup(t, { emit: d }) {
    const s = t, i = d;
    function f() {
      s.closeOnOverlayClick && i("close");
    }
    function y(h) {
      h.key === "Escape" && i("close");
    }
    return _e(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), no(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (h, v) => (o(), _(Le, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: ee(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", va, [
            de(h.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", fa, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (r) => h.$emit("close"))
            }, [...v[2] || (v[2] = [
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
          e("div", ga, [
            t.loading ? (o(), n("div", ha, "Loading...")) : t.error ? (o(), n("div", pa, l(t.error), 1)) : de(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), n("div", ya, [
            de(h.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), yt = /* @__PURE__ */ J(wa, [["__scopeId", "data-v-2125a0e6"]]), ba = ["type", "disabled"], ka = {
  key: 0,
  class: "spinner"
}, _a = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ee(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", ka)) : c("", !0),
      de(d.$slots, "default", {}, void 0, !0)
    ], 10, ba));
  }
}), re = /* @__PURE__ */ J(_a, [["__scopeId", "data-v-f3452606"]]), $a = {
  key: 0,
  class: "base-title-count"
}, Ca = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, s) => (o(), _(It(`h${t.level}`), {
      class: ee(["base-title", t.variant])
    }, {
      default: a(() => [
        de(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", $a, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ct = /* @__PURE__ */ J(Ca, [["__scopeId", "data-v-5a01561d"]]), xa = ["value", "disabled"], Sa = {
  key: 0,
  value: "",
  disabled: ""
}, Ia = ["value"], Ea = {
  key: 0,
  class: "base-select-error"
}, za = /* @__PURE__ */ q({
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
    function d(i) {
      return typeof i == "string" ? i : i.value;
    }
    function s(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, f) => (o(), n("div", {
      class: ee(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ee(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (y) => i.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", Sa, l(t.placeholder), 1)) : c("", !0),
        (o(!0), n(G, null, Z(t.options, (y) => (o(), n("option", {
          key: d(y),
          value: d(y)
        }, l(s(y)), 9, Ia))), 128))
      ], 42, xa),
      t.error ? (o(), n("span", Ea, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ J(za, [["__scopeId", "data-v-7436d745"]]), La = { class: "popover-header" }, Ta = { class: "popover-title" }, Ra = { class: "popover-content" }, Da = {
  key: 0,
  class: "popover-actions"
}, Na = /* @__PURE__ */ q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, s) => (o(), _(Le, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Ze({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", La, [
            e("h4", Ta, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Ra, [
            de(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), n("div", Da, [
            de(d.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), je = /* @__PURE__ */ J(Na, [["__scopeId", "data-v-42815ace"]]), Oa = { class: "detail-section" }, Ua = {
  key: 0,
  class: "empty-message"
}, Ba = { class: "model-header" }, Pa = { class: "model-name" }, Aa = { class: "model-details" }, Va = { class: "model-row" }, Fa = { class: "model-row" }, Wa = { class: "label" }, Ga = {
  key: 0,
  class: "model-row model-row-nodes"
}, ja = { class: "node-list" }, Ha = ["onClick"], Ka = {
  key: 1,
  class: "model-row"
}, qa = { class: "value" }, Ja = {
  key: 0,
  class: "model-actions"
}, Ya = { class: "detail-section" }, Xa = {
  key: 0,
  class: "empty-message"
}, Qa = { class: "node-name" }, Za = {
  key: 0,
  class: "node-version"
}, el = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { getWorkflowDetails: f, setModelImportance: y, installWorkflowDeps: h } = Se(), v = E(null), r = E(!1), u = E(null), b = E(!1), p = E({}), z = E({}), I = E(!1), $ = E(/* @__PURE__ */ new Set()), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(D) {
      switch (D) {
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
    function C(D) {
      switch (D) {
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
    function P(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const O = D.hash || D.filename;
      return $.value.has(O) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function L(D) {
      return $.value.has(D);
    }
    function w(D) {
      $.value.has(D) ? $.value.delete(D) : $.value.add(D), $.value = new Set($.value);
    }
    async function M() {
      r.value = !0, u.value = null;
      try {
        v.value = await f(s.workflowName);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function x(D, O) {
      p.value[D] = O, b.value = !0;
    }
    async function U() {
      if (!b.value) {
        i("close");
        return;
      }
      r.value = !0, u.value = null;
      try {
        for (const [D, O] of Object.entries(p.value))
          await y(s.workflowName, D, O);
        i("refresh"), i("close");
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    async function R(D) {
      z.value[D] = !0, u.value = null;
      try {
        await h(s.workflowName, !0, !1), await M();
      } catch (O) {
        u.value = O instanceof Error ? O.message : "Failed to install node";
      } finally {
        z.value[D] = !1;
      }
    }
    return _e(M), (D, O) => (o(), n(G, null, [
      m(yt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: u.value || void 0,
        onClose: O[5] || (O[5] = (V) => i("close"))
      }, {
        body: a(() => [
          v.value ? (o(), n(G, { key: 0 }, [
            e("section", Oa, [
              m(ct, { variant: "section" }, {
                default: a(() => [
                  g("MODELS USED (" + l(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (o(), n("div", Ua, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(G, null, Z(v.value.models, (V) => (o(), n("div", {
                key: V.hash || V.filename,
                class: "model-card"
              }, [
                e("div", Ba, [
                  O[7] || (O[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Pa, l(V.filename), 1)
                ]),
                e("div", Aa, [
                  e("div", Va, [
                    O[8] || (O[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ee(["value", k(V.status)])
                    }, l(C(V.status)), 3)
                  ]),
                  e("div", Fa, [
                    e("span", Wa, [
                      O[9] || (O[9] = g(" Importance: ", -1)),
                      m(Ft, {
                        size: 14,
                        title: "About importance levels",
                        onClick: O[0] || (O[0] = (F) => I.value = !0)
                      })
                    ]),
                    m(Ma, {
                      "model-value": p.value[V.filename] || V.importance,
                      options: S,
                      "onUpdate:modelValue": (F) => x(V.filename, F)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  V.loaded_by && V.loaded_by.length > 0 ? (o(), n("div", Ga, [
                    O[10] || (O[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", ja, [
                      (o(!0), n(G, null, Z(P(V), (F, Q) => (o(), n("div", {
                        key: `${F.node_id}-${Q}`,
                        class: "node-reference"
                      }, l(F.node_type) + " (Node #" + l(F.node_id) + ") ", 1))), 128)),
                      V.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (F) => w(V.hash || V.filename)
                      }, l(L(V.hash || V.filename) ? "▼ Show less" : `▶ View all (${V.loaded_by.length})`), 9, Ha)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  V.size_mb ? (o(), n("div", Ka, [
                    O[11] || (O[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", qa, l(V.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                V.status !== "available" ? (o(), n("div", Ja, [
                  V.status === "downloadable" ? (o(), _(re, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: O[1] || (O[1] = (F) => i("resolve"))
                  }, {
                    default: a(() => [...O[12] || (O[12] = [
                      g(" Download ", -1)
                    ])]),
                    _: 1
                  })) : V.status === "path_mismatch" ? (o(), _(re, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: O[2] || (O[2] = (F) => i("resolve"))
                  }, {
                    default: a(() => [...O[13] || (O[13] = [
                      g(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), _(re, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: O[3] || (O[3] = (F) => i("resolve"))
                  }, {
                    default: a(() => [...O[14] || (O[14] = [
                      g(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Ya, [
              m(ct, { variant: "section" }, {
                default: a(() => [
                  g("NODES USED (" + l(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (o(), n("div", Xa, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(G, null, Z(v.value.nodes, (V) => (o(), n("div", {
                key: V.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ee(["node-status", V.status === "installed" ? "installed" : "missing"])
                }, l(V.status === "installed" ? "✓" : "✕"), 3),
                e("span", Qa, l(V.name), 1),
                V.version ? (o(), n("span", Za, "v" + l(V.version), 1)) : c("", !0),
                V.status === "missing" ? (o(), _(re, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: z.value[V.name],
                  onClick: (F) => R(V.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...O[15] || (O[15] = [
                    g(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          m(re, {
            variant: "secondary",
            onClick: O[4] || (O[4] = (V) => i("close"))
          }, {
            default: a(() => [...O[16] || (O[16] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (o(), _(re, {
            key: 0,
            variant: "primary",
            onClick: U
          }, {
            default: a(() => [...O[17] || (O[17] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      m(je, {
        show: I.value,
        title: "Model Importance Levels",
        onClose: O[6] || (O[6] = (V) => I.value = !1)
      }, {
        content: a(() => [...O[18] || (O[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              g(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              g(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              g(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tl = /* @__PURE__ */ J(el, [["__scopeId", "data-v-0b14d32e"]]), ve = At({
  items: [],
  status: "idle"
});
let Ae = null;
function Gt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _t(t) {
  return ve.items.find((d) => d.id === t);
}
async function tt() {
  if (ve.status === "downloading") return;
  const t = ve.items.find((d) => d.status === "queued");
  if (!t) {
    ve.status = "idle";
    return;
  }
  ve.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ol(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    ve.status = "idle", tt();
  }
}
async function ol(t) {
  return new Promise((d, s) => {
    Ae && (Ae.close(), Ae = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Ae = f;
    let y = Date.now(), h = 0, v = !1;
    f.onmessage = (r) => {
      try {
        const u = JSON.parse(r.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const b = Date.now(), p = (b - y) / 1e3;
            if (p > 0.5) {
              const z = t.downloaded - h;
              if (t.speed = z / p, y = b, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const I = t.size - t.downloaded;
                t.eta = I / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, f.close(), Ae = null, d();
            break;
          case "error":
            v = !0, f.close(), Ae = null, s(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Ae = null, v || s(new Error("Connection lost"));
    };
  });
}
async function sl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const d = await t.json();
    if (!d.pending_downloads || d.pending_downloads.length === 0) return;
    for (const s of d.pending_downloads) {
      if (ve.items.some((f) => f.url === s.url && f.filename === s.filename))
        continue;
      const i = {
        id: Gt(),
        workflow: s.workflow,
        filename: s.filename,
        url: s.url,
        targetPath: s.target_path,
        size: s.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ve.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${d.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function wt() {
  function t(k) {
    for (const C of k) {
      if (ve.items.some(
        (w) => w.url === C.url && w.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(w.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const L = {
        id: Gt(),
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
      ve.items.push(L);
    }
    ve.status === "idle" && tt();
  }
  async function d(k) {
    const C = _t(k);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ae && (Ae.close(), Ae = null), C.status = "failed", C.error = "Cancelled by user", ve.status = "idle", tt();
      } else if (C.status === "queued") {
        const P = ve.items.findIndex((L) => L.id === k);
        P >= 0 && ve.items.splice(P, 1);
      }
    }
  }
  function s(k) {
    const C = _t(k);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, ve.status === "idle" && tt());
  }
  function i(k) {
    const C = _t(k);
    !C || C.status !== "paused" || (C.status = "queued", ve.status === "idle" && tt());
  }
  function f() {
    const k = ve.items.filter((C) => C.status === "paused");
    for (const C of k)
      C.status = "queued";
    ve.status === "idle" && tt();
  }
  function y(k) {
    const C = ve.items.findIndex((P) => P.id === k);
    C >= 0 && ["completed", "failed", "paused"].includes(ve.items[C].status) && ve.items.splice(C, 1);
  }
  function h() {
    ve.items = ve.items.filter((k) => k.status !== "completed");
  }
  function v() {
    ve.items = ve.items.filter((k) => k.status !== "failed");
  }
  const r = N(
    () => ve.items.find((k) => k.status === "downloading")
  ), u = N(
    () => ve.items.filter((k) => k.status === "queued")
  ), b = N(
    () => ve.items.filter((k) => k.status === "completed")
  ), p = N(
    () => ve.items.filter((k) => k.status === "failed")
  ), z = N(
    () => ve.items.filter((k) => k.status === "paused")
  ), I = N(() => ve.items.length > 0), $ = N(
    () => ve.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), S = N(
    () => ve.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: ao(ve),
    // Computed
    currentDownload: r,
    queuedItems: u,
    completedItems: b,
    failedItems: p,
    pausedItems: z,
    hasItems: I,
    activeCount: $,
    hasPaused: S,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: s,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: y,
    clearCompleted: h,
    clearFailed: v,
    loadPendingDownloads: sl
  };
}
function nl() {
  const t = E(null), d = E(null), s = E([]), i = E([]), f = E(!1), y = E(null);
  async function h(k, C) {
    var L;
    if (!((L = window.app) != null && L.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(k, C);
    if (!P.ok) {
      const w = await P.json().catch(() => ({})), M = w.error || w.message || `Request failed: ${P.status}`;
      throw new Error(M);
    }
    return P.json();
  }
  async function v(k) {
    f.value = !0, y.value = null;
    try {
      let C;
      return ht() || (C = await h(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = C, C;
    } catch (C) {
      const P = C instanceof Error ? C.message : "Unknown error occurred";
      throw y.value = P, C;
    } finally {
      f.value = !1;
    }
  }
  async function r(k, C, P) {
    f.value = !0, y.value = null;
    try {
      let L;
      if (!ht()) {
        const w = Object.fromEntries(C), M = Object.fromEntries(P);
        L = await h(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: w,
              model_choices: M
            })
          }
        );
      }
      return d.value = L, L;
    } catch (L) {
      const w = L instanceof Error ? L.message : "Unknown error occurred";
      throw y.value = w, L;
    } finally {
      f.value = !1;
    }
  }
  async function u(k, C = 10) {
    f.value = !0, y.value = null;
    try {
      let P;
      return ht() || (P = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: C })
        }
      )), s.value = P.results, P.results;
    } catch (P) {
      const L = P instanceof Error ? P.message : "Unknown error occurred";
      throw y.value = L, P;
    } finally {
      f.value = !1;
    }
  }
  async function b(k, C = 10) {
    f.value = !0, y.value = null;
    try {
      let P;
      return ht() || (P = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: C })
        }
      )), i.value = P.results, P.results;
    } catch (P) {
      const L = P instanceof Error ? P.message : "Unknown error occurred";
      throw y.value = L, P;
    } finally {
      f.value = !1;
    }
  }
  const p = At({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function z() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.error = void 0;
  }
  async function I(k, C, P) {
    z(), p.phase = "resolving", y.value = null;
    const L = Object.fromEntries(C), w = Object.fromEntries(P);
    try {
      const M = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: L,
          model_choices: w
        })
      });
      if (!M.ok)
        throw new Error(`Request failed: ${M.status}`);
      if (!M.body)
        throw new Error("No response body");
      const x = M.body.getReader(), U = new TextDecoder();
      let R = "";
      for (; ; ) {
        const { done: D, value: O } = await x.read();
        if (D) break;
        R += U.decode(O, { stream: !0 });
        const V = R.split(`

`);
        R = V.pop() || "";
        for (const F of V) {
          if (!F.trim()) continue;
          const Q = F.split(`
`);
          let A = "", K = "";
          for (const X of Q)
            X.startsWith("event: ") ? A = X.slice(7) : X.startsWith("data: ") && (K = X.slice(6));
          if (K)
            try {
              const X = JSON.parse(K);
              $(A, X);
            } catch (X) {
              console.warn("Failed to parse SSE event:", X);
            }
        }
      }
    } catch (M) {
      const x = M instanceof Error ? M.message : "Unknown error occurred";
      throw y.value = x, p.error = x, p.phase = "error", M;
    }
  }
  function $(k, C) {
    switch (k) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = C.total;
        break;
      case "file_start":
        p.currentFile = C.filename, p.currentFileIndex = C.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = C.downloaded, p.bytesTotal = C.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: C.filename,
          success: C.success,
          error: C.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = C.nodes_to_install || [], C.download_results && (p.completedFiles = C.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = C.message, p.phase = "error", y.value = C.message;
        break;
    }
  }
  function S(k, C) {
    const { addToQueue: P } = wt(), L = C.filter((w) => w.url && w.target_path).map((w) => ({
      workflow: k,
      filename: w.filename,
      url: w.url,
      targetPath: w.target_path,
      size: w.size || 0,
      type: "model"
    }));
    return L.length > 0 && P(L), L.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: s,
    modelSearchResults: i,
    isLoading: f,
    error: y,
    progress: p,
    // Methods
    analyzeWorkflow: v,
    applyResolution: r,
    applyResolutionWithProgress: I,
    searchNodes: u,
    searchModels: b,
    resetProgress: z,
    queueModelDownloads: S
  };
}
const al = { class: "resolution-stepper" }, ll = { class: "stepper-header" }, il = ["onClick"], rl = {
  key: 0,
  class: "step-icon"
}, dl = {
  key: 1,
  class: "step-number"
}, cl = { class: "step-label" }, ul = {
  key: 0,
  class: "step-connector"
}, ml = { class: "stepper-content" }, vl = /* @__PURE__ */ q({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: d }) {
    const s = t, i = d;
    function f(u) {
      var b;
      if ((b = s.stepStats) != null && b[u]) {
        const p = s.stepStats[u];
        return p.total > 0 && p.resolved === p.total;
      }
      return s.completedSteps.includes(u);
    }
    function y(u) {
      var b;
      if ((b = s.stepStats) != null && b[u]) {
        const p = s.stepStats[u];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function h(u) {
      return f(u) ? "state-complete" : y(u) ? "state-partial" : "state-pending";
    }
    function v(u) {
      return !1;
    }
    function r(u) {
      i("step-change", u);
    }
    return (u, b) => (o(), n("div", al, [
      e("div", ll, [
        (o(!0), n(G, null, Z(t.steps, (p, z) => (o(), n("div", {
          key: p.id,
          class: ee(["step", {
            active: t.currentStep === p.id,
            completed: f(p.id),
            "in-progress": y(p.id),
            disabled: v(p.id)
          }]),
          onClick: (I) => r(p.id)
        }, [
          e("div", {
            class: ee(["step-indicator", h(p.id)])
          }, [
            f(p.id) ? (o(), n("span", rl, "✓")) : (o(), n("span", dl, l(z + 1), 1))
          ], 2),
          e("div", cl, l(p.label), 1),
          z < t.steps.length - 1 ? (o(), n("div", ul)) : c("", !0)
        ], 10, il))), 128))
      ]),
      e("div", ml, [
        de(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), fl = /* @__PURE__ */ J(vl, [["__scopeId", "data-v-2a7b3af8"]]), gl = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = N(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), i = N(() => `confidence-${s.value}`), f = N(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (y, h) => (o(), n("span", {
      class: ee(["confidence-badge", i.value, t.size])
    }, l(f.value), 3));
  }
}), Lt = /* @__PURE__ */ J(gl, [["__scopeId", "data-v-17ec4b80"]]), hl = { class: "node-info" }, pl = { class: "node-info-text" }, yl = { class: "item-body" }, wl = {
  key: 0,
  class: "resolved-state"
}, bl = {
  key: 1,
  class: "multiple-options"
}, kl = { class: "options-list" }, _l = ["onClick"], $l = ["name", "value", "checked", "onChange"], Cl = { class: "option-content" }, xl = { class: "option-header" }, Sl = { class: "option-package-id" }, Il = {
  key: 0,
  class: "option-title"
}, El = { class: "option-meta" }, zl = {
  key: 0,
  class: "installed-badge"
}, Ml = { class: "action-buttons" }, Ll = {
  key: 2,
  class: "unresolved"
}, Tl = { class: "action-buttons" }, Rl = /* @__PURE__ */ q({
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
  setup(t, { emit: d }) {
    const s = t, i = d, f = N(() => !!s.choice);
    N(() => {
      var v;
      return (v = s.choice) == null ? void 0 : v.action;
    }), N(() => {
      var v;
      return (v = s.choice) == null ? void 0 : v.package_id;
    });
    const y = N(() => {
      switch (s.status) {
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
      i("option-selected", v);
    }
    return (v, r) => (o(), n("div", {
      class: ee(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: f.value }])
    }, [
      e("div", hl, [
        e("span", pl, [
          r[7] || (r[7] = g("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: ee(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", yl, [
        f.value ? (o(), n("div", wl, [
          m(re, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (u) => i("clear-choice"))
          }, {
            default: a(() => [...r[8] || (r[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", bl, [
          r[12] || (r[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", kl, [
            (o(!0), n(G, null, Z(t.options, (u, b) => (o(), n("label", {
              key: u.package_id,
              class: ee(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (p) => h(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (p) => h(b)
              }, null, 40, $l),
              e("div", Cl, [
                e("div", xl, [
                  e("span", Sl, l(u.package_id), 1),
                  m(Lt, {
                    confidence: u.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                u.title && u.title !== u.package_id ? (o(), n("div", Il, l(u.title), 1)) : c("", !0),
                e("div", El, [
                  u.is_installed ? (o(), n("span", zl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, _l))), 128))
          ]),
          e("div", Ml, [
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: r[1] || (r[1] = (u) => i("search"))
            }, {
              default: a(() => [...r[9] || (r[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: r[2] || (r[2] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[10] || (r[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: r[3] || (r[3] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[11] || (r[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Ll, [
          r[16] || (r[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Tl, [
            m(re, {
              variant: "primary",
              size: "sm",
              onClick: r[4] || (r[4] = (u) => i("search"))
            }, {
              default: a(() => [...r[13] || (r[13] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: r[5] || (r[5] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[14] || (r[14] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: r[6] || (r[6] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[15] || (r[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Dl = /* @__PURE__ */ J(Rl, [["__scopeId", "data-v-e02629e7"]]), Nl = { class: "item-navigator" }, Ol = { class: "nav-item-info" }, Ul = ["title"], Bl = { class: "nav-controls" }, Pl = { class: "nav-arrows" }, Al = ["disabled"], Vl = ["disabled"], Fl = { class: "nav-position" }, Wl = /* @__PURE__ */ q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const s = d;
    return (i, f) => (o(), n("div", Nl, [
      e("div", Ol, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Ul)
      ]),
      e("div", Bl, [
        e("div", Pl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (y) => s("prev")),
            title: "Previous item"
          }, " ← ", 8, Al),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (y) => s("next")),
            title: "Next item"
          }, " → ", 8, Vl)
        ]),
        e("span", Fl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), jt = /* @__PURE__ */ J(Wl, [["__scopeId", "data-v-74af7920"]]), Gl = ["type", "value", "placeholder", "disabled"], jl = {
  key: 0,
  class: "base-input-error"
}, Hl = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("div", {
      class: ee(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ee(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ge((i) => d.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ge((i) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Gl),
      t.error ? (o(), n("span", jl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ J(Hl, [["__scopeId", "data-v-9ba02cdc"]]), Kl = { class: "node-resolution-step" }, ql = { class: "step-header" }, Jl = { class: "stat-badge" }, Yl = {
  key: 1,
  class: "step-body"
}, Xl = {
  key: 2,
  class: "empty-state"
}, Ql = { class: "node-search-modal" }, Zl = { class: "node-modal-body" }, ei = {
  key: 0,
  class: "node-search-results"
}, ti = ["onClick"], oi = { class: "node-result-header" }, si = { class: "node-result-package-id" }, ni = {
  key: 0,
  class: "node-result-description"
}, ai = {
  key: 1,
  class: "node-no-results"
}, li = {
  key: 2,
  class: "node-searching"
}, ii = { class: "node-manual-entry-modal" }, ri = { class: "node-modal-body" }, di = { class: "node-modal-actions" }, ci = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = E(0), y = E(!1), h = E(!1), v = E(""), r = E(""), u = E([]), b = E(!1), p = N(() => s.nodes[f.value]), z = N(() => s.nodes.filter((V) => s.nodeChoices.has(V.node_type)).length), I = N(() => {
      var F;
      if (!p.value) return "not-found";
      const V = s.nodeChoices.get(p.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (F = p.value.options) != null && F.length ? "ambiguous" : "not-found";
    }), $ = N(() => {
      var F;
      if (!p.value) return;
      const V = s.nodeChoices.get(p.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return V.package_id ? `→ ${V.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (F = p.value.options) != null && F.length ? `${p.value.options.length} matches` : "Not Found";
    });
    function S(V) {
      V >= 0 && V < s.nodes.length && (f.value = V);
    }
    function k() {
      p.value && i("mark-optional", p.value.node_type);
    }
    function C() {
      p.value && i("skip", p.value.node_type);
    }
    function P(V) {
      p.value && i("option-selected", p.value.node_type, V);
    }
    function L() {
      p.value && i("clear-choice", p.value.node_type);
    }
    function w() {
      p.value && (v.value = p.value.node_type, y.value = !0);
    }
    function M() {
      r.value = "", h.value = !0;
    }
    function x() {
      y.value = !1, v.value = "", u.value = [];
    }
    function U() {
      h.value = !1, r.value = "";
    }
    function R() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function D(V) {
      p.value && (i("manual-entry", p.value.node_type, V.package_id), x());
    }
    function O() {
      !p.value || !r.value.trim() || (i("manual-entry", p.value.node_type, r.value.trim()), U());
    }
    return (V, F) => {
      var Q, A;
      return o(), n("div", Kl, [
        e("div", ql, [
          F[4] || (F[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Jl, l(z.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        p.value ? (o(), _(jt, {
          key: 0,
          "item-name": p.value.node_type,
          "current-index": f.value,
          "total-items": t.nodes.length,
          onPrev: F[0] || (F[0] = (K) => S(f.value - 1)),
          onNext: F[1] || (F[1] = (K) => S(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        p.value ? (o(), n("div", Yl, [
          m(Dl, {
            "node-type": p.value.node_type,
            "has-multiple-options": !!((Q = p.value.options) != null && Q.length),
            options: p.value.options,
            choice: (A = t.nodeChoices) == null ? void 0 : A.get(p.value.node_type),
            status: I.value,
            "status-label": $.value,
            onMarkOptional: k,
            onSkip: C,
            onManualEntry: M,
            onSearch: w,
            onOptionSelected: P,
            onClearChoice: L
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Xl, [...F[5] || (F[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), _(Le, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(x, ["self"])
          }, [
            e("div", Ql, [
              e("div", { class: "node-modal-header" }, [
                F[6] || (F[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: x
                }, "✕")
              ]),
              e("div", Zl, [
                m(qe, {
                  modelValue: v.value,
                  "onUpdate:modelValue": F[2] || (F[2] = (K) => v.value = K),
                  placeholder: "Search by node type, package name...",
                  onInput: R
                }, null, 8, ["modelValue"]),
                u.value.length > 0 ? (o(), n("div", ei, [
                  (o(!0), n(G, null, Z(u.value, (K) => (o(), n("div", {
                    key: K.package_id,
                    class: "node-search-result-item",
                    onClick: (X) => D(K)
                  }, [
                    e("div", oi, [
                      e("code", si, l(K.package_id), 1),
                      K.match_confidence ? (o(), _(Lt, {
                        key: 0,
                        confidence: K.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    K.description ? (o(), n("div", ni, l(K.description), 1)) : c("", !0)
                  ], 8, ti))), 128))
                ])) : v.value && !b.value ? (o(), n("div", ai, ' No packages found matching "' + l(v.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), n("div", li, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), _(Le, { to: "body" }, [
          h.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(U, ["self"])
          }, [
            e("div", ii, [
              e("div", { class: "node-modal-header" }, [
                F[7] || (F[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", ri, [
                m(qe, {
                  modelValue: r.value,
                  "onUpdate:modelValue": F[3] || (F[3] = (K) => r.value = K),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", di, [
                  m(re, {
                    variant: "secondary",
                    onClick: U
                  }, {
                    default: a(() => [...F[8] || (F[8] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(re, {
                    variant: "primary",
                    disabled: !r.value.trim(),
                    onClick: O
                  }, {
                    default: a(() => [...F[9] || (F[9] = [
                      g(" Add Package ", -1)
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
}), ui = /* @__PURE__ */ J(ci, [["__scopeId", "data-v-4fb196b1"]]), mi = { class: "node-info" }, vi = { class: "node-info-text" }, fi = { class: "item-body" }, gi = {
  key: 0,
  class: "resolved-state"
}, hi = {
  key: 1,
  class: "multiple-options"
}, pi = { class: "options-list" }, yi = ["onClick"], wi = ["name", "value", "checked", "onChange"], bi = { class: "option-content" }, ki = { class: "option-header" }, _i = { class: "option-filename" }, $i = { class: "option-meta" }, Ci = { class: "option-size" }, xi = { class: "option-category" }, Si = { class: "option-path" }, Ii = { class: "action-buttons" }, Ei = {
  key: 2,
  class: "unresolved"
}, zi = { class: "action-buttons" }, Mi = /* @__PURE__ */ q({
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
  setup(t, { emit: d }) {
    const s = t, i = d, f = N(() => !!s.choice);
    N(() => {
      var r;
      return (r = s.choice) == null ? void 0 : r.action;
    }), N(() => {
      var r, u;
      return ((u = (r = s.choice) == null ? void 0 : r.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const y = N(() => {
      switch (s.status) {
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
    function h(r) {
      i("option-selected", r);
    }
    function v(r) {
      if (!r) return "Unknown";
      const u = r / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, u) => (o(), n("div", {
      class: ee(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", mi, [
        e("span", vi, [
          u[7] || (u[7] = g("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: ee(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", fi, [
        f.value ? (o(), n("div", gi, [
          m(re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => i("clear-choice"))
          }, {
            default: a(() => [...u[8] || (u[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", hi, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", pi, [
            (o(!0), n(G, null, Z(t.options, (b, p) => (o(), n("label", {
              key: b.model.hash,
              class: ee(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: (z) => h(p)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: (z) => h(p)
              }, null, 40, wi),
              e("div", bi, [
                e("div", ki, [
                  e("span", _i, l(b.model.filename), 1),
                  m(Lt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", $i, [
                  e("span", Ci, l(v(b.model.size)), 1),
                  e("span", xi, l(b.model.category), 1)
                ]),
                e("div", Si, l(b.model.relative_path), 1)
              ])
            ], 10, yi))), 128))
          ]),
          e("div", Ii, [
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => i("search"))
            }, {
              default: a(() => [...u[9] || (u[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => i("download-url"))
            }, {
              default: a(() => [...u[10] || (u[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...u[11] || (u[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Ei, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", zi, [
            m(re, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => i("search"))
            }, {
              default: a(() => [...u[13] || (u[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => i("download-url"))
            }, {
              default: a(() => [...u[14] || (u[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...u[15] || (u[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Li = /* @__PURE__ */ J(Mi, [["__scopeId", "data-v-8a82fefa"]]), Ti = { class: "model-resolution-step" }, Ri = { class: "step-header" }, Di = { class: "step-info" }, Ni = { class: "step-title" }, Oi = { class: "step-description" }, Ui = { class: "stat-badge" }, Bi = {
  key: 1,
  class: "step-body"
}, Pi = {
  key: 2,
  class: "empty-state"
}, Ai = { class: "model-search-modal" }, Vi = { class: "model-modal-body" }, Fi = {
  key: 0,
  class: "model-search-results"
}, Wi = ["onClick"], Gi = { class: "model-result-header" }, ji = { class: "model-result-filename" }, Hi = { class: "model-result-meta" }, Ki = { class: "model-result-category" }, qi = { class: "model-result-size" }, Ji = {
  key: 0,
  class: "model-result-path"
}, Yi = {
  key: 1,
  class: "model-no-results"
}, Xi = {
  key: 2,
  class: "model-searching"
}, Qi = { class: "model-download-url-modal" }, Zi = { class: "model-modal-body" }, er = { class: "model-input-group" }, tr = { class: "model-input-group" }, or = { class: "model-modal-actions" }, sr = /* @__PURE__ */ q({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: d }) {
    const s = {
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
    function i(ne) {
      var se;
      return ne && ((se = s[ne]) == null ? void 0 : se[0]) || null;
    }
    const f = t, y = d, h = E(0), v = E(!1), r = E(!1), u = E(""), b = E(""), p = E(""), z = E([]), I = E(!1), $ = N(() => f.models[h.value]), S = N(() => f.models.some((ne) => ne.is_download_intent)), k = N(() => f.models.filter(
      (ne) => f.modelChoices.has(ne.filename) || ne.is_download_intent
    ).length), C = N(() => {
      var se;
      if (!$.value) return "";
      const ne = i((se = $.value.reference) == null ? void 0 : se.node_type);
      return ne ? `${ne}/${$.value.filename}` : "";
    }), P = N(() => {
      var se;
      if (!$.value) return "not-found";
      const ne = f.modelChoices.get($.value.filename);
      if (ne)
        switch (ne.action) {
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
      return $.value.is_download_intent ? "download" : (se = $.value.options) != null && se.length ? "ambiguous" : "not-found";
    }), L = N(() => {
      var se, fe;
      if (!$.value) return;
      const ne = f.modelChoices.get($.value.filename);
      if (ne)
        switch (ne.action) {
          case "select":
            return (se = ne.selected_model) != null && se.filename ? `→ ${ne.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return $.value.is_download_intent ? "Pending Download" : (fe = $.value.options) != null && fe.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function w(ne) {
      ne >= 0 && ne < f.models.length && (h.value = ne);
    }
    function M() {
      $.value && y("mark-optional", $.value.filename);
    }
    function x() {
      $.value && y("skip", $.value.filename);
    }
    function U(ne) {
      $.value && y("option-selected", $.value.filename, ne);
    }
    function R() {
      $.value && y("clear-choice", $.value.filename);
    }
    function D() {
      $.value && (u.value = $.value.filename, v.value = !0);
    }
    function O() {
      $.value && (b.value = $.value.download_source || "", p.value = $.value.target_path || C.value, r.value = !0);
    }
    function V() {
      v.value = !1, u.value = "", z.value = [];
    }
    function F() {
      r.value = !1, b.value = "", p.value = "";
    }
    function Q() {
      I.value = !0, setTimeout(() => {
        I.value = !1;
      }, 300);
    }
    function A(ne) {
      $.value && V();
    }
    function K() {
      !$.value || !b.value.trim() || (y("download-url", $.value.filename, b.value.trim(), p.value.trim() || void 0), F());
    }
    function X(ne) {
      if (!ne) return "Unknown";
      const se = ne / (1024 * 1024 * 1024);
      return se >= 1 ? `${se.toFixed(2)} GB` : `${(ne / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ne, se) => {
      var fe, oe, ze;
      return o(), n("div", Ti, [
        e("div", Ri, [
          e("div", Di, [
            e("h3", Ni, l(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Oi, l(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Ui, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        $.value ? (o(), _(jt, {
          key: 0,
          "item-name": $.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: se[0] || (se[0] = (pe) => w(h.value - 1)),
          onNext: se[1] || (se[1] = (pe) => w(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        $.value ? (o(), n("div", Bi, [
          m(Li, {
            filename: $.value.filename,
            "node-type": ((fe = $.value.reference) == null ? void 0 : fe.node_type) || "Unknown",
            "has-multiple-options": !!((oe = $.value.options) != null && oe.length),
            options: $.value.options,
            choice: (ze = t.modelChoices) == null ? void 0 : ze.get($.value.filename),
            status: P.value,
            "status-label": L.value,
            onMarkOptional: M,
            onSkip: x,
            onDownloadUrl: O,
            onSearch: D,
            onOptionSelected: U,
            onClearChoice: R
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Pi, [...se[5] || (se[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), _(Le, { to: "body" }, [
          v.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(V, ["self"])
          }, [
            e("div", Ai, [
              e("div", { class: "model-modal-header" }, [
                se[6] || (se[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", Vi, [
                m(qe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": se[2] || (se[2] = (pe) => u.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: Q
                }, null, 8, ["modelValue"]),
                z.value.length > 0 ? (o(), n("div", Fi, [
                  (o(!0), n(G, null, Z(z.value, (pe) => (o(), n("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (et) => A()
                  }, [
                    e("div", Gi, [
                      e("code", ji, l(pe.filename), 1)
                    ]),
                    e("div", Hi, [
                      e("span", Ki, l(pe.category), 1),
                      e("span", qi, l(X(pe.size)), 1)
                    ]),
                    pe.relative_path ? (o(), n("div", Ji, l(pe.relative_path), 1)) : c("", !0)
                  ], 8, Wi))), 128))
                ])) : u.value && !I.value ? (o(), n("div", Yi, ' No models found matching "' + l(u.value) + '" ', 1)) : c("", !0),
                I.value ? (o(), n("div", Xi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), _(Le, { to: "body" }, [
          r.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(F, ["self"])
          }, [
            e("div", Qi, [
              e("div", { class: "model-modal-header" }, [
                se[7] || (se[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              e("div", Zi, [
                e("div", er, [
                  se[8] || (se[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  m(qe, {
                    modelValue: b.value,
                    "onUpdate:modelValue": se[3] || (se[3] = (pe) => b.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", tr, [
                  se[9] || (se[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  m(qe, {
                    modelValue: p.value,
                    "onUpdate:modelValue": se[4] || (se[4] = (pe) => p.value = pe),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", or, [
                  m(re, {
                    variant: "secondary",
                    onClick: F
                  }, {
                    default: a(() => [...se[10] || (se[10] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(re, {
                    variant: "primary",
                    disabled: !b.value.trim() || !p.value.trim(),
                    onClick: K
                  }, {
                    default: a(() => [...se[11] || (se[11] = [
                      g(" Queue Download ", -1)
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
}), nr = /* @__PURE__ */ J(sr, [["__scopeId", "data-v-c6acbada"]]), ar = { class: "applying-step" }, lr = {
  key: 0,
  class: "phase-content"
}, ir = {
  key: 1,
  class: "phase-content"
}, rr = { class: "completion-summary" }, dr = {
  key: 0,
  class: "summary-item info"
}, cr = { class: "summary-text" }, ur = {
  key: 2,
  class: "phase-content error"
}, mr = { class: "error-message" }, vr = /* @__PURE__ */ q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", ar, [
      t.progress.phase === "resolving" ? (o(), n("div", lr, [...s[0] || (s[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), n("div", ir, [
        s[4] || (s[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", rr, [
          t.progress.nodesToInstall.length > 0 ? (o(), n("div", dr, [
            s[1] || (s[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", cr, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : c("", !0),
          s[2] || (s[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          s[3] || (s[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), n("div", ur, [
        s[5] || (s[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", mr, l(t.progress.error), 1)
      ])) : c("", !0)
    ]));
  }
}), fr = /* @__PURE__ */ J(vr, [["__scopeId", "data-v-b4d7e0eb"]]), gr = {
  key: 0,
  class: "loading-state"
}, hr = {
  key: 1,
  class: "wizard-content"
}, pr = {
  key: 0,
  class: "step-content"
}, yr = { class: "analysis-summary" }, wr = { class: "analysis-header" }, br = { class: "summary-description" }, kr = { class: "stats-grid" }, _r = { class: "stat-card" }, $r = { class: "stat-items" }, Cr = { class: "stat-item success" }, xr = { class: "stat-count" }, Sr = {
  key: 0,
  class: "stat-item warning"
}, Ir = { class: "stat-count" }, Er = {
  key: 1,
  class: "stat-item error"
}, zr = { class: "stat-count" }, Mr = { class: "stat-card" }, Lr = { class: "stat-items" }, Tr = { class: "stat-item success" }, Rr = { class: "stat-count" }, Dr = {
  key: 0,
  class: "stat-item info"
}, Nr = { class: "stat-count" }, Or = {
  key: 1,
  class: "stat-item warning"
}, Ur = { class: "stat-count" }, Br = {
  key: 2,
  class: "stat-item error"
}, Pr = { class: "stat-count" }, Ar = {
  key: 0,
  class: "status-message warning"
}, Vr = { class: "status-text" }, Fr = {
  key: 1,
  class: "status-message info"
}, Wr = { class: "status-text" }, Gr = {
  key: 2,
  class: "status-message success"
}, jr = {
  key: 3,
  class: "step-content"
}, Hr = { class: "review-summary" }, Kr = { class: "review-stats" }, qr = { class: "review-stat" }, Jr = { class: "stat-value" }, Yr = { class: "review-stat" }, Xr = { class: "stat-value" }, Qr = { class: "review-stat" }, Zr = { class: "stat-value" }, ed = { class: "review-stat" }, td = { class: "stat-value" }, od = {
  key: 0,
  class: "review-section"
}, sd = { class: "section-title" }, nd = { class: "review-items" }, ad = { class: "item-name" }, ld = { class: "item-choice" }, id = {
  key: 0,
  class: "choice-badge install"
}, rd = {
  key: 1,
  class: "choice-badge optional"
}, dd = {
  key: 2,
  class: "choice-badge skip"
}, cd = {
  key: 1,
  class: "choice-badge pending"
}, ud = {
  key: 1,
  class: "review-section"
}, md = { class: "section-title" }, vd = { class: "review-items" }, fd = { class: "item-name" }, gd = { class: "item-choice" }, hd = {
  key: 0,
  class: "choice-badge install"
}, pd = {
  key: 1,
  class: "choice-badge download"
}, yd = {
  key: 2,
  class: "choice-badge optional"
}, wd = {
  key: 3,
  class: "choice-badge skip"
}, bd = {
  key: 4,
  class: "choice-badge skip"
}, kd = {
  key: 1,
  class: "choice-badge download"
}, _d = {
  key: 2,
  class: "choice-badge pending"
}, $d = {
  key: 2,
  class: "no-choices"
}, Cd = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { analyzeWorkflow: f, applyResolution: y, queueModelDownloads: h, progress: v, resetProgress: r } = nl(), { loadPendingDownloads: u } = wt(), b = E(null), p = E(!1), z = E(!1), I = E(null), $ = E("analysis"), S = E([]), k = E(/* @__PURE__ */ new Map()), C = E(/* @__PURE__ */ new Map()), P = N(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return w.value && H.push({ id: "nodes", label: "Nodes" }), (M.value || x.value) && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), $.value === "applying" && H.push({ id: "applying", label: "Applying" }), H;
    }), L = N(() => b.value ? b.value.stats.needs_user_input : !1), w = N(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), M = N(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), x = N(() => b.value ? b.value.stats.download_intents > 0 : !1), U = N(() => b.value ? b.value.models.resolved.filter((H) => H.match_type === "download_intent").map((H) => ({
      filename: H.reference.widget_value,
      reference: H.reference,
      is_download_intent: !0,
      resolved_model: H.model,
      download_source: H.download_source,
      target_path: H.target_path
    })) : []), R = N(() => {
      if (!b.value) return [];
      const H = b.value.nodes.unresolved.map((te) => ({
        node_type: te.reference.node_type,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.nodes.ambiguous.map((te) => ({
        node_type: te.reference.node_type,
        has_multiple_options: !0,
        options: te.options.map((he) => ({
          package_id: he.package.package_id,
          title: he.package.title,
          match_confidence: he.match_confidence,
          match_type: he.match_type,
          is_installed: he.is_installed
        }))
      }));
      return [...H, ...B];
    }), D = N(() => {
      if (!b.value) return [];
      const H = b.value.models.unresolved.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.models.ambiguous.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        has_multiple_options: !0,
        options: te.options.map((he) => ({
          model: he.model,
          match_confidence: he.match_confidence,
          match_type: he.match_type,
          has_download_source: he.has_download_source
        }))
      }));
      return [...H, ...B];
    }), O = N(() => {
      const H = D.value, B = U.value.map((te) => ({
        filename: te.filename,
        reference: te.reference,
        is_download_intent: !0,
        resolved_model: te.resolved_model,
        download_source: te.download_source,
        target_path: te.target_path,
        options: void 0
      }));
      return [...H, ...B];
    }), V = N(() => {
      let H = 0;
      for (const B of k.value.values())
        B.action === "install" && H++;
      for (const B of C.value.values())
        B.action === "select" && H++;
      return H;
    }), F = N(() => {
      let H = 0;
      for (const B of C.value.values())
        B.action === "download" && H++;
      return H;
    }), Q = N(() => {
      let H = 0;
      for (const B of k.value.values())
        B.action === "optional" && H++;
      for (const B of C.value.values())
        B.action === "optional" && H++;
      return H;
    }), A = N(() => {
      let H = 0;
      for (const B of k.value.values())
        B.action === "skip" && H++;
      for (const B of C.value.values())
        B.action === "skip" && H++;
      for (const B of R.value)
        k.value.has(B.node_type) || H++;
      for (const B of D.value)
        C.value.has(B.filename) || H++;
      return H;
    }), K = N(() => {
      const H = {};
      if (H.analysis = { resolved: 1, total: 1 }, w.value) {
        const B = R.value.length, te = R.value.filter(
          (he) => k.value.has(he.node_type)
        ).length;
        H.nodes = { resolved: te, total: B };
      }
      if (M.value || x.value) {
        const B = O.value.length, te = O.value.filter(
          (he) => C.value.has(he.filename) || he.is_download_intent
        ).length;
        H.models = { resolved: te, total: B };
      }
      if (H.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const B = v.totalFiles || 1, te = v.completedFiles.length;
        H.applying = { resolved: te, total: B };
      }
      return H;
    });
    function X(H) {
      $.value = H;
    }
    function ne() {
      const H = P.value.findIndex((B) => B.id === $.value);
      H > 0 && ($.value = P.value[H - 1].id);
    }
    function se() {
      const H = P.value.findIndex((B) => B.id === $.value);
      H < P.value.length - 1 && ($.value = P.value[H + 1].id);
    }
    async function fe() {
      p.value = !0, I.value = null;
      try {
        b.value = await f(s.workflowName);
      } catch (H) {
        I.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function oe() {
      S.value.includes("analysis") || S.value.push("analysis"), w.value ? $.value = "nodes" : M.value || x.value ? $.value = "models" : $.value = "review";
    }
    function ze(H) {
      k.value.set(H, { action: "optional" });
    }
    function pe(H) {
      k.value.set(H, { action: "skip" });
    }
    function et(H, B) {
      var he;
      const te = R.value.find((Te) => Te.node_type === H);
      (he = te == null ? void 0 : te.options) != null && he[B] && k.value.set(H, {
        action: "install",
        package_id: te.options[B].package_id
      });
    }
    function ge(H, B) {
      k.value.set(H, {
        action: "install",
        package_id: B
      });
    }
    function Me(H) {
      k.value.delete(H);
    }
    function Y(H) {
      C.value.set(H, { action: "optional" });
    }
    function le(H) {
      C.value.set(H, { action: "skip" });
    }
    function ce(H, B) {
      var he;
      const te = D.value.find((Te) => Te.filename === H);
      (he = te == null ? void 0 : te.options) != null && he[B] && C.value.set(H, {
        action: "select",
        selected_model: te.options[B].model
      });
    }
    function $e(H, B, te) {
      C.value.set(H, {
        action: "download",
        url: B,
        target_path: te
      });
    }
    function Je(H) {
      C.value.delete(H);
    }
    async function bt() {
      z.value = !0, I.value = null, r(), v.phase = "resolving", $.value = "applying";
      try {
        const H = await y(s.workflowName, k.value, C.value);
        H.models_to_download && H.models_to_download.length > 0 && h(s.workflowName, H.models_to_download), v.nodesToInstall = H.nodes_to_install || [], v.phase = "complete", await u(), setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1e3);
      } catch (H) {
        I.value = H instanceof Error ? H.message : "Failed to apply resolution", v.error = I.value, v.phase = "error";
      } finally {
        z.value = !1;
      }
    }
    return _e(fe), (H, B) => (o(), _(yt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: p.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (te) => i("close"))
    }, {
      body: a(() => [
        p.value && !b.value ? (o(), n("div", gr, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (o(), n("div", hr, [
          m(fl, {
            steps: P.value,
            "current-step": $.value,
            "completed-steps": S.value,
            "step-stats": K.value,
            onStepChange: X
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (o(), n("div", pr, [
            e("div", yr, [
              e("div", wr, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", br, " Found " + l(b.value.stats.total_nodes) + " nodes and " + l(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", kr, [
                e("div", _r, [
                  B[10] || (B[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", $r, [
                    e("div", Cr, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", xr, l(b.value.nodes.resolved.length), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.nodes.ambiguous.length > 0 ? (o(), n("div", Sr, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ir, l(b.value.nodes.ambiguous.length), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.nodes.unresolved.length > 0 ? (o(), n("div", Er, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", zr, l(b.value.nodes.unresolved.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Mr, [
                  B[19] || (B[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Lr, [
                    e("div", Tr, [
                      B[11] || (B[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Rr, l(b.value.models.resolved.length - b.value.stats.download_intents), 1),
                      B[12] || (B[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (o(), n("div", Dr, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Nr, l(b.value.stats.download_intents), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    b.value.models.ambiguous.length > 0 ? (o(), n("div", Or, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ur, l(b.value.models.ambiguous.length), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.models.unresolved.length > 0 ? (o(), n("div", Br, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Pr, l(b.value.models.unresolved.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              L.value ? (o(), n("div", Ar, [
                B[20] || (B[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Vr, l(R.value.length + D.value.length) + " items need your input", 1)
              ])) : x.value ? (o(), n("div", Fr, [
                B[21] || (B[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Wr, l(b.value.stats.download_intents) + " model" + l(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), n("div", Gr, [...B[22] || (B[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          $.value === "nodes" ? (o(), _(ui, {
            key: 1,
            nodes: R.value,
            "node-choices": k.value,
            onMarkOptional: ze,
            onSkip: pe,
            onOptionSelected: et,
            onManualEntry: ge,
            onClearChoice: Me
          }, null, 8, ["nodes", "node-choices"])) : c("", !0),
          $.value === "models" ? (o(), _(nr, {
            key: 2,
            models: O.value,
            "model-choices": C.value,
            onMarkOptional: Y,
            onSkip: le,
            onOptionSelected: ce,
            onDownloadUrl: $e,
            onClearChoice: Je
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          $.value === "review" ? (o(), n("div", jr, [
            e("div", Hr, [
              B[27] || (B[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Kr, [
                e("div", qr, [
                  e("span", Jr, l(V.value), 1),
                  B[23] || (B[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Yr, [
                  e("span", Xr, l(F.value), 1),
                  B[24] || (B[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Qr, [
                  e("span", Zr, l(Q.value), 1),
                  B[25] || (B[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", ed, [
                  e("span", td, l(A.value), 1),
                  B[26] || (B[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              R.value.length > 0 ? (o(), n("div", od, [
                e("h4", sd, "Node Packages (" + l(R.value.length) + ")", 1),
                e("div", nd, [
                  (o(!0), n(G, null, Z(R.value, (te) => {
                    var he, Te, Ue, Be;
                    return o(), n("div", {
                      key: te.node_type,
                      class: "review-item"
                    }, [
                      e("code", ad, l(te.node_type), 1),
                      e("div", ld, [
                        k.value.has(te.node_type) ? (o(), n(G, { key: 0 }, [
                          ((he = k.value.get(te.node_type)) == null ? void 0 : he.action) === "install" ? (o(), n("span", id, l((Te = k.value.get(te.node_type)) == null ? void 0 : Te.package_id), 1)) : ((Ue = k.value.get(te.node_type)) == null ? void 0 : Ue.action) === "optional" ? (o(), n("span", rd, " Optional ")) : ((Be = k.value.get(te.node_type)) == null ? void 0 : Be.action) === "skip" ? (o(), n("span", dd, " Skip ")) : c("", !0)
                        ], 64)) : (o(), n("span", cd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              O.value.length > 0 ? (o(), n("div", ud, [
                e("h4", md, "Models (" + l(O.value.length) + ")", 1),
                e("div", vd, [
                  (o(!0), n(G, null, Z(O.value, (te) => {
                    var he, Te, Ue, Be, ft, Pe, gt;
                    return o(), n("div", {
                      key: te.filename,
                      class: "review-item"
                    }, [
                      e("code", fd, l(te.filename), 1),
                      e("div", gd, [
                        C.value.has(te.filename) ? (o(), n(G, { key: 0 }, [
                          ((he = C.value.get(te.filename)) == null ? void 0 : he.action) === "select" ? (o(), n("span", hd, l((Ue = (Te = C.value.get(te.filename)) == null ? void 0 : Te.selected_model) == null ? void 0 : Ue.filename), 1)) : ((Be = C.value.get(te.filename)) == null ? void 0 : Be.action) === "download" ? (o(), n("span", pd, " Download ")) : ((ft = C.value.get(te.filename)) == null ? void 0 : ft.action) === "optional" ? (o(), n("span", yd, " Optional ")) : ((Pe = C.value.get(te.filename)) == null ? void 0 : Pe.action) === "skip" ? (o(), n("span", wd, " Skip ")) : ((gt = C.value.get(te.filename)) == null ? void 0 : gt.action) === "cancel_download" ? (o(), n("span", bd, " Cancel Download ")) : c("", !0)
                        ], 64)) : te.is_download_intent ? (o(), n("span", kd, " Pending Download ")) : (o(), n("span", _d, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              R.value.length === 0 && O.value.length === 0 ? (o(), n("div", $d, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          $.value === "applying" ? (o(), _(fr, {
            key: 4,
            progress: me(v)
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        $.value !== "analysis" && $.value !== "applying" ? (o(), _(re, {
          key: 0,
          variant: "secondary",
          disabled: z.value,
          onClick: ne
        }, {
          default: a(() => [...B[28] || (B[28] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        B[31] || (B[31] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || me(v).phase === "complete" || me(v).phase === "error" ? (o(), _(re, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (te) => i("close"))
        }, {
          default: a(() => [
            g(l(me(v).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        $.value === "analysis" ? (o(), _(re, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: oe
        }, {
          default: a(() => [
            g(l(L.value || x.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        $.value === "nodes" ? (o(), _(re, {
          key: 3,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [
            g(l(M.value || x.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        $.value === "models" ? (o(), _(re, {
          key: 4,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [...B[29] || (B[29] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        $.value === "review" ? (o(), _(re, {
          key: 5,
          variant: "primary",
          disabled: z.value,
          loading: z.value,
          onClick: bt
        }, {
          default: a(() => [...B[30] || (B[30] = [
            g(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), xd = /* @__PURE__ */ J(Cd, [["__scopeId", "data-v-08beb8e3"]]), Sd = { class: "search-input-wrapper" }, Id = ["value", "placeholder"], Ed = /* @__PURE__ */ q({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = E(null);
    let y;
    function h(r) {
      const u = r.target.value;
      s.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        i("update:modelValue", u);
      }, s.debounce)) : i("update:modelValue", u);
    }
    function v() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = f.value) == null || r.focus();
    }
    return _e(() => {
      s.autoFocus && f.value && f.value.focus();
    }), (r, u) => (o(), n("div", Sd, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Ge(v, ["escape"])
      }, null, 40, Id),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), zd = /* @__PURE__ */ J(Ed, [["__scopeId", "data-v-266f857a"]]), Md = { class: "search-bar" }, Ld = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, s) => (o(), n("div", Md, [
      m(zd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => d.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), nt = /* @__PURE__ */ J(Ld, [["__scopeId", "data-v-3d51bbfd"]]), Td = { class: "section-group" }, Rd = {
  key: 0,
  class: "section-content"
}, Dd = /* @__PURE__ */ q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = E(s.initiallyExpanded);
    function y() {
      s.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (h, v) => (o(), n("section", Td, [
      m(Ee, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: y
      }, {
        default: a(() => [
          g(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (o(), n("div", Rd, [
        de(h.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), we = /* @__PURE__ */ J(Dd, [["__scopeId", "data-v-c48e33ed"]]), Nd = { class: "item-header" }, Od = {
  key: 0,
  class: "item-icon"
}, Ud = { class: "item-info" }, Bd = {
  key: 0,
  class: "item-title"
}, Pd = {
  key: 1,
  class: "item-subtitle"
}, Ad = {
  key: 0,
  class: "item-details"
}, Vd = {
  key: 1,
  class: "item-actions"
}, Fd = /* @__PURE__ */ q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, i = N(() => s.status ? `status-${s.status}` : "");
    return (f, y) => (o(), n("div", {
      class: ee(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: y[0] || (y[0] = (h) => t.clickable && f.$emit("click"))
    }, [
      e("div", Nd, [
        f.$slots.icon ? (o(), n("span", Od, [
          de(f.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Ud, [
          f.$slots.title ? (o(), n("div", Bd, [
            de(f.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          f.$slots.subtitle ? (o(), n("div", Pd, [
            de(f.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      f.$slots.details ? (o(), n("div", Ad, [
        de(f.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      f.$slots.actions ? (o(), n("div", Vd, [
        de(f.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ J(Fd, [["__scopeId", "data-v-cc435e0e"]]), Wd = { class: "loading-state" }, Gd = { class: "loading-message" }, jd = /* @__PURE__ */ q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, s) => (o(), n("div", Wd, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Gd, l(t.message), 1)
    ]));
  }
}), He = /* @__PURE__ */ J(jd, [["__scopeId", "data-v-ad8436c9"]]), Hd = { class: "error-state" }, Kd = { class: "error-message" }, qd = /* @__PURE__ */ q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, s) => (o(), n("div", Hd, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Kd, l(t.message), 1),
      t.retry ? (o(), _(j, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          g(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ J(qd, [["__scopeId", "data-v-5397be48"]]), Jd = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: s }) {
    const i = s, { getWorkflows: f } = Se(), y = E([]), h = E(!1), v = E(null), r = E(""), u = E(!0), b = E(!1), p = E(!1), z = E(!1), I = E(null), $ = N(
      () => y.value.filter((A) => A.status === "broken")
    ), S = N(
      () => y.value.filter((A) => A.status === "new")
    ), k = N(
      () => y.value.filter((A) => A.status === "modified")
    ), C = N(
      () => y.value.filter((A) => A.status === "synced")
    ), P = N(() => {
      if (!r.value.trim()) return y.value;
      const A = r.value.toLowerCase();
      return y.value.filter((K) => K.name.toLowerCase().includes(A));
    }), L = N(
      () => $.value.filter(
        (A) => !r.value.trim() || A.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), w = N(
      () => S.value.filter(
        (A) => !r.value.trim() || A.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), M = N(
      () => k.value.filter(
        (A) => !r.value.trim() || A.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = N(
      () => C.value.filter(
        (A) => !r.value.trim() || A.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), U = N(
      () => b.value ? x.value : x.value.slice(0, 5)
    );
    async function R(A = !1) {
      h.value = !0, v.value = null;
      try {
        y.value = await f(A);
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    d({ loadWorkflows: R });
    function D(A) {
      I.value = A, p.value = !0;
    }
    function O(A) {
      I.value = A, z.value = !0;
    }
    function V() {
      alert("Bulk resolution not yet implemented");
    }
    function F() {
      i("refresh");
    }
    function Q(A) {
      const K = [];
      return A.missing_nodes > 0 && K.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && K.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.pending_downloads && A.pending_downloads > 0 && K.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), K.length > 0 ? K.join(", ") : "Has issues";
    }
    return _e(R), (A, K) => (o(), n(G, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, { title: "WORKFLOWS" }, {
            actions: a(() => [
              $.value.length > 0 ? (o(), _(j, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: a(() => [...K[8] || (K[8] = [
                  g(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          m(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": K[0] || (K[0] = (X) => r.value = X),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), _(He, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), _(Ke, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            L.value.length ? (o(), _(we, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(L.value, (X) => (o(), _(ke, {
                  key: X.name,
                  status: "broken"
                }, {
                  icon: a(() => [...K[9] || (K[9] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(l(X.name), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(Q(X)), 1)
                  ]),
                  actions: a(() => [
                    m(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => O(X.name)
                    }, {
                      default: a(() => [...K[10] || (K[10] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => D(X.name)
                    }, {
                      default: a(() => [...K[11] || (K[11] = [
                        g(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            w.value.length ? (o(), _(we, {
              key: 1,
              title: "NEW",
              count: w.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(w.value, (X) => (o(), _(ke, {
                  key: X.name,
                  status: "new"
                }, {
                  icon: a(() => [...K[12] || (K[12] = [
                    g("●", -1)
                  ])]),
                  title: a(() => [
                    g(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...K[13] || (K[13] = [
                    g("New", -1)
                  ])]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => D(X.name)
                    }, {
                      default: a(() => [...K[14] || (K[14] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            M.value.length ? (o(), _(we, {
              key: 2,
              title: "MODIFIED",
              count: M.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(M.value, (X) => (o(), _(ke, {
                  key: X.name,
                  status: "modified"
                }, {
                  icon: a(() => [...K[15] || (K[15] = [
                    g("⚡", -1)
                  ])]),
                  title: a(() => [
                    g(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...K[16] || (K[16] = [
                    g("Modified", -1)
                  ])]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => D(X.name)
                    }, {
                      default: a(() => [...K[17] || (K[17] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            x.value.length ? (o(), _(we, {
              key: 3,
              title: "SYNCED",
              count: x.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: K[2] || (K[2] = (X) => u.value = X)
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(U.value, (X) => (o(), _(ke, {
                  key: X.name,
                  status: "synced"
                }, {
                  icon: a(() => [...K[18] || (K[18] = [
                    g("✓", -1)
                  ])]),
                  title: a(() => [
                    g(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...K[19] || (K[19] = [
                    g("Synced", -1)
                  ])]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => D(X.name)
                    }, {
                      default: a(() => [...K[20] || (K[20] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !b.value && x.value.length > 5 ? (o(), _(j, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: K[1] || (K[1] = (X) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    g(" View all " + l(x.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            P.value.length ? c("", !0) : (o(), _(Oe, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && I.value ? (o(), _(tl, {
        key: 0,
        "workflow-name": I.value,
        onClose: K[3] || (K[3] = (X) => p.value = !1),
        onResolve: K[4] || (K[4] = (X) => O(I.value)),
        onRefresh: K[5] || (K[5] = (X) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      z.value && I.value ? (o(), _(xd, {
        key: 1,
        "workflow-name": I.value,
        onClose: K[6] || (K[6] = (X) => z.value = !1),
        onInstall: F,
        onRefresh: K[7] || (K[7] = (X) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Yd = /* @__PURE__ */ J(Jd, [["__scopeId", "data-v-af6b1cd7"]]), Xd = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: ee(["summary-bar", t.variant])
    }, [
      de(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), at = /* @__PURE__ */ J(Xd, [["__scopeId", "data-v-ccb7816e"]]), Qd = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironmentModels: i, getStatus: f } = Se(), y = E([]), h = E([]), v = E("production"), r = E(!1), u = E(null), b = E(""), p = E(!1);
    function z() {
      p.value = !1, s("navigate", "model-index");
    }
    const I = N(
      () => y.value.reduce((R, D) => R + (D.size || 0), 0)
    ), $ = N(() => {
      if (!b.value.trim()) return y.value;
      const R = b.value.toLowerCase();
      return y.value.filter((D) => D.filename.toLowerCase().includes(R));
    }), S = N(() => {
      if (!b.value.trim()) return h.value;
      const R = b.value.toLowerCase();
      return h.value.filter((D) => D.filename.toLowerCase().includes(R));
    }), k = N(
      () => $.value.filter((R) => R.type === "checkpoints")
    ), C = N(
      () => $.value.filter((R) => R.type === "loras")
    ), P = N(
      () => $.value.filter((R) => R.type !== "checkpoints" && R.type !== "loras")
    );
    function L(R) {
      if (!R) return "Unknown";
      const D = R / (1024 * 1024);
      return D >= 1024 ? `${(D / 1024).toFixed(1)} GB` : `${D.toFixed(0)} MB`;
    }
    function w(R) {
      s("navigate", "model-index");
    }
    function M(R) {
      s("navigate", "model-index");
    }
    function x(R) {
      alert(`Download functionality not yet implemented for ${R}`);
    }
    async function U() {
      r.value = !0, u.value = null;
      try {
        const R = await i();
        y.value = R, h.value = [];
        const D = await f();
        v.value = D.environment || "production";
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return _e(U), (R, D) => (o(), n(G, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (O) => p.value = !0)
          })
        ]),
        search: a(() => [
          m(nt, {
            modelValue: b.value,
            "onUpdate:modelValue": D[1] || (D[1] = (O) => b.value = O),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), _(He, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (o(), _(Ke, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            y.value.length ? (o(), _(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(y.value.length) + " models • " + l(L(I.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), _(we, {
              key: 1,
              title: "CHECKPOINTS",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(k.value, (O) => (o(), _(ke, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[3] || (D[3] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(O.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(L(O.size)), 1)
                  ]),
                  details: a(() => [
                    m(ae, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(ae, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => w(O.hash)
                    }, {
                      default: a(() => [...D[4] || (D[4] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            C.value.length ? (o(), _(we, {
              key: 2,
              title: "LORAS",
              count: C.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(C.value, (O) => (o(), _(ke, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[5] || (D[5] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(O.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(L(O.size)), 1)
                  ]),
                  details: a(() => [
                    m(ae, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(ae, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => w(O.hash)
                    }, {
                      default: a(() => [...D[6] || (D[6] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            P.value.length ? (o(), _(we, {
              key: 3,
              title: "OTHER",
              count: P.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(P.value, (O) => (o(), _(ke, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[7] || (D[7] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(O.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(L(O.size)), 1)
                  ]),
                  details: a(() => [
                    m(ae, {
                      label: "Type:",
                      value: O.type
                    }, null, 8, ["value"]),
                    m(ae, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => w(O.hash)
                    }, {
                      default: a(() => [...D[8] || (D[8] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            S.value.length ? (o(), _(we, {
              key: 4,
              title: "MISSING",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(S.value, (O) => (o(), _(ke, {
                  key: O.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...D[9] || (D[9] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(l(O.filename), 1)
                  ]),
                  subtitle: a(() => [...D[10] || (D[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var V;
                    return [
                      m(ae, {
                        label: "Required by:",
                        value: ((V = O.workflow_names) == null ? void 0 : V.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    m(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => x(O.filename)
                    }, {
                      default: a(() => [...D[11] || (D[11] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => M(O.filename)
                    }, {
                      default: a(() => [...D[12] || (D[12] = [
                        g(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !$.value.length && !S.value.length ? (o(), _(Oe, {
              key: 5,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: p.value,
        title: "About Environment Models",
        onClose: D[2] || (D[2] = (O) => p.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            D[13] || (D[13] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(v.value) + '"', 1),
            D[14] || (D[14] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          m(j, {
            variant: "primary",
            onClick: z
          }, {
            default: a(() => [...D[15] || (D[15] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zd = /* @__PURE__ */ J(Qd, [["__scopeId", "data-v-72675609"]]), ec = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: d } = Se(), s = E([]), i = E(!1), f = E(null), y = E(""), h = E(!1), v = N(
      () => s.value.reduce((x, U) => x + (U.size_mb || U.size || 0), 0)
    ), r = N(() => {
      const x = /* @__PURE__ */ new Set();
      return s.value.forEach((U) => {
        U.used_in_environments && U.used_in_environments.length > 0 && U.used_in_environments.forEach((R) => x.add(R.env_name));
      }), x.size;
    }), u = N(() => {
      if (!y.value.trim()) return s.value;
      const x = y.value.toLowerCase();
      return s.value.filter((U) => {
        const R = U, D = U.sha256 || R.sha256_hash || "";
        return U.filename.toLowerCase().includes(x) || D.toLowerCase().includes(x);
      });
    }), b = N(
      () => u.value.filter((x) => x.type === "checkpoints")
    ), p = N(
      () => u.value.filter((x) => x.type === "loras")
    ), z = N(
      () => u.value.filter((x) => x.type !== "checkpoints" && x.type !== "loras")
    );
    function I(x) {
      return x ? x >= 1024 ? `${(x / 1024).toFixed(1)} GB` : `${x.toFixed(0)} MB` : "Unknown";
    }
    function $(x) {
      const U = x, R = x.used_in_workflows || U.used_by || [];
      return !R || R.length === 0 ? "Not used" : `${R.length} workflow(s)`;
    }
    function S(x) {
      navigator.clipboard.writeText(x), alert("Hash copied to clipboard");
    }
    function k(x) {
      prompt("Enter model source URL:", x.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function C(x) {
      const U = x, R = x.used_in_workflows || U.used_by || [], D = R && R.length > 0 ? `

⚠ WARNING: This model is used by ${R.length} workflow(s):
${R.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${x.filename}?${D}

This will free ${I(U.size_mb || x.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function P() {
      alert("Scan for models not yet implemented");
    }
    function L() {
      alert("Change directory not yet implemented");
    }
    function w() {
      alert("Download new model not yet implemented");
    }
    async function M() {
      i.value = !0, f.value = null;
      try {
        s.value = await d(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", b.value), console.log("Filtered loras:", p.value), console.log("Filtered other:", z.value);
      } catch (x) {
        f.value = x instanceof Error ? x.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return _e(M), (x, U) => (o(), n(G, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: U[0] || (U[0] = (R) => h.value = !0)
          }, {
            actions: a(() => [
              m(j, {
                variant: "primary",
                size: "sm",
                onClick: P
              }, {
                default: a(() => [...U[3] || (U[3] = [
                  g(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              m(j, {
                variant: "primary",
                size: "sm",
                onClick: L
              }, {
                default: a(() => [...U[4] || (U[4] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              m(j, {
                variant: "primary",
                size: "sm",
                onClick: w
              }, {
                default: a(() => [...U[5] || (U[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  g(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          m(nt, {
            modelValue: y.value,
            "onUpdate:modelValue": U[1] || (U[1] = (R) => y.value = R),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), _(He, {
            key: 0,
            message: "Loading workspace models..."
          })) : f.value ? (o(), _(Ke, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            s.value.length ? (o(), _(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(s.value.length) + " models • " + l(I(v.value)) + " • Used in " + l(r.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            b.value.length ? (o(), _(we, {
              key: 1,
              title: "CHECKPOINTS",
              count: b.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(b.value, (R) => (o(), _(ke, {
                  key: R.sha256 || R.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...U[6] || (U[6] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(R.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(I(R.size_mb || R.size)), 1)
                  ]),
                  details: a(() => {
                    var D, O;
                    return [
                      R.sha256 || R.sha256_hash ? (o(), _(ae, {
                        key: 0,
                        label: "SHA256:",
                        value: (R.sha256 || R.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      m(ae, {
                        label: "Used in:",
                        value: $(R)
                      }, null, 8, ["value"]),
                      R.source_url || (D = R.sources) != null && D[0] ? (o(), _(ae, {
                        key: 1,
                        label: "Source URL:",
                        value: R.source_url || ((O = R.sources) == null ? void 0 : O[0])
                      }, null, 8, ["value"])) : (o(), _(ae, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...U[7] || (U[7] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => k(R)
                    }, {
                      default: a(() => [...U[8] || (U[8] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    R.sha256 || R.sha256_hash ? (o(), _(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => S(R.sha256 || R.sha256_hash)
                    }, {
                      default: a(() => [...U[9] || (U[9] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    m(j, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => C(R)
                    }, {
                      default: a(() => [...U[10] || (U[10] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            p.value.length ? (o(), _(we, {
              key: 2,
              title: "LORAS",
              count: p.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(p.value, (R) => (o(), _(ke, {
                  key: R.sha256 || R.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...U[11] || (U[11] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(R.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(I(R.size_mb || R.size)), 1)
                  ]),
                  details: a(() => {
                    var D, O;
                    return [
                      R.sha256 || R.sha256_hash ? (o(), _(ae, {
                        key: 0,
                        label: "SHA256:",
                        value: (R.sha256 || R.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      m(ae, {
                        label: "Used in:",
                        value: $(R)
                      }, null, 8, ["value"]),
                      R.source_url || (D = R.sources) != null && D[0] ? (o(), _(ae, {
                        key: 1,
                        label: "Source URL:",
                        value: R.source_url || ((O = R.sources) == null ? void 0 : O[0])
                      }, null, 8, ["value"])) : (o(), _(ae, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...U[12] || (U[12] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => k(R)
                    }, {
                      default: a(() => [...U[13] || (U[13] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    R.sha256 || R.sha256_hash ? (o(), _(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => S(R.sha256 || R.sha256_hash)
                    }, {
                      default: a(() => [...U[14] || (U[14] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    m(j, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => C(R)
                    }, {
                      default: a(() => [...U[15] || (U[15] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            z.value.length ? (o(), _(we, {
              key: 3,
              title: "OTHER",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(z.value, (R) => (o(), _(ke, {
                  key: R.sha256 || R.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...U[16] || (U[16] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(R.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(I(R.size_mb || R.size)), 1)
                  ]),
                  details: a(() => [
                    m(ae, {
                      label: "Type:",
                      value: R.type
                    }, null, 8, ["value"]),
                    R.sha256 || R.sha256_hash ? (o(), _(ae, {
                      key: 0,
                      label: "SHA256:",
                      value: (R.sha256 || R.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    m(ae, {
                      label: "Used in:",
                      value: $(R)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => k(R)
                    }, {
                      default: a(() => [...U[17] || (U[17] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    R.sha256 || R.sha256_hash ? (o(), _(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => S(R.sha256 || R.sha256_hash)
                    }, {
                      default: a(() => [...U[18] || (U[18] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    m(j, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => C(R)
                    }, {
                      default: a(() => [...U[19] || (U[19] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            u.value.length ? c("", !0) : (o(), _(Oe, {
              key: 4,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: h.value,
        title: "About Workspace Model Index",
        onClose: U[2] || (U[2] = (R) => h.value = !1)
      }, {
        content: a(() => [...U[20] || (U[20] = [
          e("p", null, [
            g(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            g(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tc = /* @__PURE__ */ J(ec, [["__scopeId", "data-v-5a24af01"]]), oc = { key: 0 }, sc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, nc = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, ac = /* @__PURE__ */ q({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: d, installNode: s, updateNode: i, uninstallNode: f } = Se(), y = E({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), h = E(!1), v = E(null), r = E(""), u = E(!1), b = N(() => {
      if (!r.value.trim()) return y.value.nodes;
      const w = r.value.toLowerCase();
      return y.value.nodes.filter(
        (M) => {
          var x, U;
          return M.name.toLowerCase().includes(w) || ((x = M.description) == null ? void 0 : x.toLowerCase().includes(w)) || ((U = M.repository) == null ? void 0 : U.toLowerCase().includes(w));
        }
      );
    }), p = N(
      () => b.value.filter((w) => w.installed)
    ), z = N(
      () => b.value.filter((w) => !w.installed)
    );
    function I(w) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[w] || w;
    }
    function $(w) {
      return !w.used_in_workflows || w.used_in_workflows.length === 0 ? "Not used in any workflows" : w.used_in_workflows.length === 1 ? w.used_in_workflows[0] : `${w.used_in_workflows.length} workflows`;
    }
    function S(w) {
      window.open(w, "_blank");
    }
    async function k(w) {
      if (confirm(`Install node "${w}"?

This will download and install the node from its repository.`))
        try {
          h.value = !0;
          const M = await s(w);
          M.status === "success" ? (alert(`Node "${w}" installed successfully!`), await L()) : alert(`Failed to install node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function C(w) {
      if (confirm(`Check for updates for "${w}"?`))
        try {
          h.value = !0;
          const M = await i(w);
          M.status === "success" ? (alert(`Node "${w}" is up to date or has been updated!`), await L()) : alert(`Update check failed: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error checking for updates: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function P(w) {
      if (confirm(`Uninstall node "${w}"?

This will remove the node from this environment.`))
        try {
          h.value = !0;
          const M = await f(w);
          M.status === "success" ? (alert(`Node "${w}" uninstalled successfully!`), await L()) : alert(`Failed to uninstall node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error uninstalling node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function L() {
      h.value = !0, v.value = null;
      try {
        y.value = await d();
      } catch (w) {
        v.value = w instanceof Error ? w.message : "Failed to load nodes";
      } finally {
        h.value = !1;
      }
    }
    return _e(L), (w, M) => (o(), n(G, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (x) => u.value = !0)
          })
        ]),
        search: a(() => [
          m(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": M[1] || (M[1] = (x) => r.value = x),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), _(He, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : v.value ? (o(), _(Ke, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            y.value.total_count ? (o(), _(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(y.value.total_count) + " nodes • " + l(y.value.installed_count) + " installed • " + l(y.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            p.value.length ? (o(), _(we, {
              key: 1,
              title: "INSTALLED",
              count: p.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(p.value, (x) => (o(), _(ke, {
                  key: x.name,
                  status: "synced"
                }, {
                  icon: a(() => [...M[4] || (M[4] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(x.name), 1)
                  ]),
                  subtitle: a(() => [
                    x.version ? (o(), n("span", oc, "v" + l(x.version), 1)) : (o(), n("span", sc, "version unknown")),
                    x.source ? (o(), n("span", nc, " • " + l(I(x.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    x.description ? (o(), _(ae, {
                      key: 0,
                      label: "Description:",
                      value: x.description
                    }, null, 8, ["value"])) : c("", !0),
                    x.repository ? (o(), _(ae, {
                      key: 1,
                      label: "Repository:",
                      value: x.repository
                    }, null, 8, ["value"])) : c("", !0),
                    m(ae, {
                      label: "Used by:",
                      value: $(x)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    x.repository ? (o(), _(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => S(x.repository)
                    }, {
                      default: a(() => [...M[5] || (M[5] = [
                        g(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    x.source === "registry" ? (o(), _(j, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => C(x.name)
                    }, {
                      default: a(() => [...M[6] || (M[6] = [
                        g(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    x.source !== "unknown" ? (o(), _(j, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (U) => P(x.name)
                    }, {
                      default: a(() => [...M[7] || (M[7] = [
                        g(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            z.value.length ? (o(), _(we, {
              key: 2,
              title: "MISSING",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(z.value, (x) => (o(), _(ke, {
                  key: x.name,
                  status: "missing"
                }, {
                  icon: a(() => [...M[8] || (M[8] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(l(x.name), 1)
                  ]),
                  subtitle: a(() => [...M[9] || (M[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    x.description ? (o(), _(ae, {
                      key: 0,
                      label: "Description:",
                      value: x.description
                    }, null, 8, ["value"])) : c("", !0),
                    x.repository ? (o(), _(ae, {
                      key: 1,
                      label: "Repository:",
                      value: x.repository
                    }, null, 8, ["value"])) : c("", !0),
                    m(ae, {
                      label: "Required by:",
                      value: $(x)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    x.download_url ? (o(), _(j, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => k(x.name)
                    }, {
                      default: a(() => [...M[10] || (M[10] = [
                        g(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    x.repository ? (o(), _(j, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => S(x.repository)
                    }, {
                      default: a(() => [...M[11] || (M[11] = [
                        g(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !p.value.length && !z.value.length ? (o(), _(Oe, {
              key: 3,
              icon: "📭",
              message: r.value ? `No nodes match '${r.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: u.value,
        title: "About Git-Tracked Nodes",
        onClose: M[3] || (M[3] = (x) => u.value = !1)
      }, {
        content: a(() => [...M[12] || (M[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            g(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            g(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          m(j, {
            variant: "primary",
            onClick: M[2] || (M[2] = (x) => u.value = !1)
          }, {
            default: a(() => [...M[13] || (M[13] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), lc = /* @__PURE__ */ J(ac, [["__scopeId", "data-v-c480e2c1"]]), ic = { class: "remote-url-display" }, rc = ["title"], dc = ["title"], cc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, uc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, mc = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, s = E(!1), i = N(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const y = d.url.slice(0, Math.floor(d.maxLength * 0.6)), h = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${y}...${h}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(d.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, h) => (o(), n("div", ic, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, rc),
      e("button", {
        class: ee(["copy-btn", { copied: s.value }]),
        onClick: f,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", uc, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", cc, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, dc)
    ]));
  }
}), Ot = /* @__PURE__ */ J(mc, [["__scopeId", "data-v-7768a58d"]]), vc = { class: "remote-title" }, fc = {
  key: 0,
  class: "default-badge"
}, gc = {
  key: 1,
  class: "sync-badge"
}, hc = {
  key: 0,
  class: "ahead"
}, pc = {
  key: 1,
  class: "behind"
}, yc = {
  key: 0,
  class: "tracking-info"
}, wc = /* @__PURE__ */ q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const s = t, i = N(() => s.fetchingRemote === s.remote.name), f = N(() => s.remote.is_default), y = N(() => !!s.trackingBranch);
    function h(v) {
      const r = new Date(v), b = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), p = Math.floor(b / 6e4);
      if (p < 1) return "Just now";
      if (p < 60) return `${p}m ago`;
      const z = Math.floor(p / 60);
      if (z < 24) return `${z}h ago`;
      const I = Math.floor(z / 24);
      return I < 7 ? `${I}d ago` : r.toLocaleDateString();
    }
    return (v, r) => (o(), _(ke, {
      status: f.value ? "synced" : void 0
    }, {
      icon: a(() => [
        g(l(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", vc, [
          e("span", null, l(t.remote.name), 1),
          f.value ? (o(), n("span", fc, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", gc, [
            t.syncStatus.ahead > 0 ? (o(), n("span", hc, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", pc, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), n("span", yc, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var u;
        return [
          m(ae, { label: "Fetch:" }, {
            default: a(() => [
              m(Ot, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), _(ae, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              m(Ot, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (o(), _(ae, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        m(j, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: r[0] || (r[0] = (u) => v.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...r[3] || (r[3] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        m(j, {
          variant: "secondary",
          size: "xs",
          onClick: r[1] || (r[1] = (u) => v.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...r[4] || (r[4] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        f.value ? c("", !0) : (o(), _(j, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: r[2] || (r[2] = (u) => v.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...r[5] || (r[5] = [
            g(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), bc = /* @__PURE__ */ J(wc, [["__scopeId", "data-v-17362e45"]]), kc = ["for"], _c = {
  key: 0,
  class: "base-form-field-required"
}, $c = { class: "base-form-field-input" }, Cc = {
  key: 1,
  class: "base-form-field-error"
}, xc = {
  key: 2,
  class: "base-form-field-hint"
}, Sc = /* @__PURE__ */ q({
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
    const d = t, s = N(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, f) => (o(), n("div", {
      class: ee(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        g(l(t.label) + " ", 1),
        t.required ? (o(), n("span", _c, "*")) : c("", !0)
      ], 8, kc)) : c("", !0),
      e("div", $c, [
        de(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", Cc, l(t.error), 1)) : t.hint ? (o(), n("span", xc, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ J(Sc, [["__scopeId", "data-v-9a1cf296"]]), Ic = { class: "remote-form" }, Ec = { class: "form-header" }, zc = { class: "form-body" }, Mc = {
  key: 0,
  class: "form-error"
}, Lc = { class: "form-actions" }, Tc = /* @__PURE__ */ q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = E({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), y = E(!1), h = E(null);
    Et(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      f.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const v = N(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!v.value || y.value)) {
        h.value = null, y.value = !0;
        try {
          i("submit", f.value);
        } catch (u) {
          h.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (u, b) => (o(), n("div", Ic, [
      e("div", Ec, [
        m(Ee, null, {
          default: a(() => [
            g(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", zc, [
        m($t, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            m(qe, {
              modelValue: f.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (p) => f.value.name = p),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        m($t, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            m(qe, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (p) => f.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m($t, { label: "Push URL (optional)" }, {
          default: a(() => [
            m(qe, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (p) => f.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), n("div", Mc, l(h.value), 1)) : c("", !0)
      ]),
      e("div", Lc, [
        m(j, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: y.value,
          onClick: r
        }, {
          default: a(() => [
            g(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        m(j, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (p) => u.$emit("cancel"))
        }, {
          default: a(() => [...b[4] || (b[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Rc = /* @__PURE__ */ J(Tc, [["__scopeId", "data-v-56021b18"]]), Dc = { key: 0 }, Nc = /* @__PURE__ */ q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: f,
      fetchRemote: y,
      getRemoteSyncStatus: h
    } = Se(), v = E([]), r = E(null), u = E({}), b = E(!1), p = E(null), z = E(""), I = E(!1), $ = E(null), S = E(!1), k = E("add"), C = E({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), P = N(() => {
      if (!z.value.trim()) return v.value;
      const F = z.value.toLowerCase();
      return v.value.filter(
        (Q) => Q.name.toLowerCase().includes(F) || Q.fetch_url.toLowerCase().includes(F) || Q.push_url.toLowerCase().includes(F)
      );
    });
    function L(F) {
      var Q;
      return ((Q = r.value) == null ? void 0 : Q.remote) === F;
    }
    async function w() {
      b.value = !0, p.value = null;
      try {
        const F = await d();
        v.value = F.remotes, r.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (Q) => {
            const A = await h(Q.name);
            A && (u.value[Q.name] = A);
          })
        );
      } catch (F) {
        p.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function M() {
      k.value = "add", C.value = { name: "", fetchUrl: "", pushUrl: "" }, S.value = !0;
    }
    function x(F) {
      const Q = v.value.find((A) => A.name === F);
      Q && (k.value = "edit", C.value = {
        name: Q.name,
        fetchUrl: Q.fetch_url,
        pushUrl: Q.push_url
      }, S.value = !0);
    }
    async function U(F) {
      try {
        k.value === "add" ? await s(F.name, F.fetchUrl) : await f(F.name, F.fetchUrl, F.pushUrl || void 0), S.value = !1, await w();
      } catch (Q) {
        p.value = Q instanceof Error ? Q.message : "Operation failed";
      }
    }
    function R() {
      S.value = !1, C.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function D(F) {
      $.value = F;
      try {
        await y(F);
        const Q = await h(F);
        Q && (u.value[F] = Q);
      } catch (Q) {
        p.value = Q instanceof Error ? Q.message : "Fetch failed";
      } finally {
        $.value = null;
      }
    }
    async function O(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await i(F), await w();
        } catch (Q) {
          p.value = Q instanceof Error ? Q.message : "Failed to remove remote";
        }
    }
    function V() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return _e(w), (F, Q) => (o(), n(G, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (A) => I.value = !0)
          }, {
            actions: a(() => [
              S.value ? c("", !0) : (o(), _(j, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: a(() => [...Q[3] || (Q[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          S.value ? c("", !0) : (o(), _(nt, {
            key: 0,
            modelValue: z.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (A) => z.value = A),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          b.value ? (o(), _(He, {
            key: 0,
            message: "Loading remotes..."
          })) : p.value ? (o(), _(Ke, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            S.value ? (o(), _(Rc, {
              key: 0,
              mode: k.value,
              "remote-name": C.value.name,
              "fetch-url": C.value.fetchUrl,
              "push-url": C.value.pushUrl,
              onSubmit: U,
              onCancel: R
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            v.value.length && !S.value ? (o(), _(at, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(v.value.length) + " remote" + l(v.value.length !== 1 ? "s" : "") + " ", 1),
                r.value ? (o(), n("span", Dc, " • Tracking: " + l(r.value.remote) + "/" + l(r.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            P.value.length && !S.value ? (o(), _(we, {
              key: 2,
              title: "REMOTES",
              count: P.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Z(P.value, (A) => {
                  var K;
                  return o(), _(bc, {
                    key: A.name,
                    remote: A,
                    "sync-status": u.value[A.name],
                    "tracking-branch": L(A.name) ? (K = r.value) == null ? void 0 : K.branch : void 0,
                    "fetching-remote": $.value,
                    onFetch: D,
                    onEdit: x,
                    onRemove: O
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !P.value.length && !S.value ? (o(), _(Oe, {
              key: 3,
              icon: "🌐",
              message: z.value ? `No remotes match '${z.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                m(j, {
                  variant: "primary",
                  onClick: M
                }, {
                  default: a(() => [...Q[4] || (Q[4] = [
                    g(" Add Your First Remote ", -1)
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
      m(je, {
        show: I.value,
        title: "About Git Remotes",
        onClose: Q[2] || (Q[2] = (A) => I.value = !1)
      }, {
        content: a(() => [...Q[5] || (Q[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            g(" The "),
            e("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          m(j, {
            variant: "link",
            onClick: V
          }, {
            default: a(() => [...Q[6] || (Q[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Oc = /* @__PURE__ */ J(Nc, [["__scopeId", "data-v-a75719bb"]]), Uc = { class: "setting-info" }, Bc = { class: "setting-label" }, Pc = {
  key: 0,
  class: "required-marker"
}, Ac = {
  key: 0,
  class: "setting-description"
}, Vc = { class: "setting-control" }, Fc = /* @__PURE__ */ q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: ee(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Uc, [
        e("div", Bc, [
          g(l(t.label) + " ", 1),
          t.required ? (o(), n("span", Pc, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", Ac, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Vc, [
        de(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), We = /* @__PURE__ */ J(Fc, [["__scopeId", "data-v-cb5d236c"]]), Wc = { class: "toggle" }, Gc = ["checked", "disabled"], jc = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", Wc, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Gc),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Qe = /* @__PURE__ */ J(jc, [["__scopeId", "data-v-71c0f550"]]), Hc = { class: "settings-section" }, Kc = { class: "path-setting" }, qc = { class: "path-value" }, Jc = { class: "path-setting" }, Yc = { class: "path-value" }, Xc = { class: "settings-section" }, Qc = { class: "settings-section" }, Zc = { class: "settings-section" }, eu = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: s } = Se(), i = E(!1), f = E(null), y = E(null), h = E(null), v = E(null), r = E(""), u = E(""), b = E(!0), p = E(!0), z = E(!1), I = N(() => v.value ? r.value !== (v.value.civitai_api_key || "") : !1);
    async function $() {
      i.value = !0, f.value = null;
      try {
        h.value = await d(), v.value = { ...h.value }, r.value = h.value.civitai_api_key || "", u.value = h.value.huggingface_token || "", b.value = h.value.auto_sync_models, p.value = h.value.confirm_destructive;
        const P = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        z.value = P === "true";
      } catch (P) {
        f.value = P instanceof Error ? P.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function S() {
      var P;
      y.value = null;
      try {
        const L = {};
        r.value !== (((P = v.value) == null ? void 0 : P.civitai_api_key) || "") && (L.civitai_api_key = r.value || null), await s(L), await $(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (L) {
        y.value = {
          type: "error",
          message: L instanceof Error ? L.message : "Failed to save settings"
        };
      }
    }
    function k() {
      v.value && (r.value = v.value.civitai_api_key || "", u.value = v.value.huggingface_token || "", b.value = v.value.auto_sync_models, p.value = v.value.confirm_destructive, y.value = null);
    }
    function C(P) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(P)), console.log("[ComfyGit] Auto-refresh setting saved:", P);
    }
    return _e($), (P, L) => (o(), _(Ce, null, {
      header: a(() => [
        m(xe, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            m(j, {
              variant: "primary",
              size: "sm",
              disabled: !I.value,
              onClick: S
            }, {
              default: a(() => [...L[5] || (L[5] = [
                g(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            I.value ? (o(), _(j, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: a(() => [...L[6] || (L[6] = [
                g(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), _(He, {
          key: 0,
          message: "Loading workspace settings..."
        })) : f.value ? (o(), _(Ke, {
          key: 1,
          message: f.value,
          retry: !0,
          onRetry: $
        }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
          m(we, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var w, M;
              return [
                e("div", Hc, [
                  e("div", Kc, [
                    L[7] || (L[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    L[8] || (L[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", qc, l(((w = h.value) == null ? void 0 : w.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Jc, [
                    L[9] || (L[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    L[10] || (L[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Yc, l(((M = h.value) == null ? void 0 : M.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          m(we, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Xc, [
                m(We, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    m(vt, {
                      modelValue: r.value,
                      "onUpdate:modelValue": L[0] || (L[0] = (w) => r.value = w),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(We, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(vt, {
                      modelValue: u.value,
                      "onUpdate:modelValue": L[1] || (L[1] = (w) => u.value = w),
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
          m(we, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Qc, [
                m(We, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    m(Qe, {
                      modelValue: z.value,
                      "onUpdate:modelValue": [
                        L[2] || (L[2] = (w) => z.value = w),
                        C
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          m(we, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Zc, [
                m(We, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(Qe, {
                      modelValue: b.value,
                      "onUpdate:modelValue": L[3] || (L[3] = (w) => b.value = w),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(We, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(Qe, {
                      modelValue: p.value,
                      "onUpdate:modelValue": L[4] || (L[4] = (w) => p.value = w),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), _(at, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Ze({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), tu = /* @__PURE__ */ J(eu, [["__scopeId", "data-v-7861bd35"]]), ou = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = Se(), s = E([]), i = E(!1), f = E(null), y = E(!1), h = E(null), v = N(() => s.value.length === 0 ? [] : s.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function r() {
      i.value = !0, f.value = null;
      try {
        s.value = await d(void 0, 500);
      } catch (u) {
        f.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var u;
          (u = h.value) != null && u.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e(r), (u, b) => (o(), n(G, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (p) => y.value = !0)
          }, {
            actions: a(() => [
              m(j, {
                variant: "secondary",
                size: "sm",
                onClick: r,
                disabled: i.value
              }, {
                default: a(() => [
                  g(l(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          i.value ? (o(), _(He, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (o(), _(Ke, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: r
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            s.value.length === 0 ? (o(), _(Oe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), n(G, null, Z(v.value, (p, z) => (o(), n("div", {
                key: z,
                class: ee(`log-line log-level-${p.level.toLowerCase()}`)
              }, l(p.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (p) => y.value = !1)
      }, {
        content: a(() => [...b[3] || (b[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          m(j, {
            variant: "primary",
            onClick: b[1] || (b[1] = (p) => y.value = !1)
          }, {
            default: a(() => [...b[4] || (b[4] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), su = /* @__PURE__ */ J(ou, [["__scopeId", "data-v-39f6a756"]]), nu = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: s } = Se(), i = E([]), f = E(!1), y = E(null), h = E(!1), v = E("production"), r = E(null), u = N(() => i.value.length === 0 ? [] : i.value.map((p) => ({
      text: `${p.timestamp} - ${p.name} - ${p.level} - ${p.func}:${p.line} - ${p.message}`,
      level: p.level
    })));
    async function b() {
      f.value = !0, y.value = null;
      try {
        i.value = await d(void 0, 500);
        try {
          const p = await s();
          v.value = p.environment || "production";
        } catch {
        }
      } catch (p) {
        y.value = p instanceof Error ? p.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var p;
          (p = r.value) != null && p.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e(b), (p, z) => (o(), n(G, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (I) => h.value = !0)
          }, {
            actions: a(() => [
              m(j, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: f.value
              }, {
                default: a(() => [
                  g(l(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          f.value ? (o(), _(He, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), _(Ke, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            i.value.length === 0 ? (o(), _(Oe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (o(!0), n(G, null, Z(u.value, (I, $) => (o(), n("div", {
                key: $,
                class: ee(`log-line log-level-${I.level.toLowerCase()}`)
              }, l(I.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: h.value,
        title: "About Environment Logs",
        onClose: z[2] || (z[2] = (I) => h.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            z[3] || (z[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(v.value), 1),
            z[4] || (z[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          z[5] || (z[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1)),
          z[6] || (z[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          m(j, {
            variant: "primary",
            onClick: z[1] || (z[1] = (I) => h.value = !1)
          }, {
            default: a(() => [...z[7] || (z[7] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), au = /* @__PURE__ */ J(nu, [["__scopeId", "data-v-4f1e6f72"]]), lu = { class: "env-title" }, iu = {
  key: 0,
  class: "current-badge"
}, ru = {
  key: 0,
  class: "branch-info"
}, du = /* @__PURE__ */ q({
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
    return (d, s) => (o(), _(ke, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        g(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", lu, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", iu, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", ru, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        m(ae, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        m(ae, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        m(ae, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), _(ae, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        de(d.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), cu = /* @__PURE__ */ J(du, [["__scopeId", "data-v-5238e57c"]]), uu = {
  key: 0,
  class: "create-form"
}, mu = { class: "create-form__header" }, vu = { class: "create-form__body" }, fu = { class: "create-form__actions" }, gu = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, hu = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironments: i } = Se(), f = E([]), y = E(!1), h = E(null), v = E(""), r = E(!1), u = E(!1), b = E(""), p = N(
      () => f.value.find((L) => L.is_current)
    ), z = N(() => {
      if (!v.value.trim()) return f.value;
      const L = v.value.toLowerCase();
      return f.value.filter(
        (w) => {
          var M;
          return w.name.toLowerCase().includes(L) || ((M = w.current_branch) == null ? void 0 : M.toLowerCase().includes(L));
        }
      );
    });
    function I(L) {
      if (!L) return "";
      try {
        const w = new Date(L), x = (/* @__PURE__ */ new Date()).getTime() - w.getTime(), U = Math.floor(x / 6e4), R = Math.floor(x / 36e5), D = Math.floor(x / 864e5);
        return U < 1 ? "just now" : U < 60 ? `${U} ${U === 1 ? "minute" : "minutes"} ago` : R < 24 ? `${R} ${R === 1 ? "hour" : "hours"} ago` : D < 30 ? `${D} ${D === 1 ? "day" : "days"} ago` : w.toLocaleDateString();
      } catch {
        return L;
      }
    }
    function $() {
      const L = b.value.trim();
      L && (s("create", L), b.value = "", u.value = !1);
    }
    function S() {
      b.value = "", u.value = !1;
    }
    function k(L) {
      s("viewDetails", L);
    }
    function C(L) {
      confirm(`Delete environment "${L}"?

This action cannot be undone.`) && s("delete", L);
    }
    async function P() {
      y.value = !0, h.value = null;
      try {
        f.value = await i();
      } catch (L) {
        h.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return _e(P), (L, w) => {
      const M = lo("SectionGroup");
      return o(), n(G, null, [
        m(Ce, null, {
          header: a(() => [
            m(xe, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: w[1] || (w[1] = (x) => r.value = !0)
            }, {
              actions: a(() => [
                m(j, {
                  variant: "ghost",
                  size: "sm",
                  onClick: w[0] || (w[0] = (x) => u.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...w[7] || (w[7] = [
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
                m(j, {
                  variant: "ghost",
                  size: "sm",
                  onClick: P,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...w[8] || (w[8] = [
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
            m(nt, {
              modelValue: v.value,
              "onUpdate:modelValue": w[2] || (w[2] = (x) => v.value = x),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), _(He, {
              key: 0,
              message: "Loading environments..."
            })) : h.value ? (o(), _(Ke, {
              key: 1,
              message: h.value,
              retry: !0,
              onRetry: P
            }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
              u.value ? (o(), n("div", uu, [
                e("div", mu, [
                  w[10] || (w[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  m(j, {
                    variant: "ghost",
                    size: "xs",
                    onClick: S
                  }, {
                    default: a(() => [...w[9] || (w[9] = [
                      g(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", vu, [
                  m(vt, {
                    modelValue: b.value,
                    "onUpdate:modelValue": w[3] || (w[3] = (x) => b.value = x),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ge($, ["enter"]),
                      Ge(S, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", fu, [
                    m(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: $,
                      disabled: !b.value.trim()
                    }, {
                      default: a(() => [...w[11] || (w[11] = [
                        g(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: S
                    }, {
                      default: a(() => [...w[12] || (w[12] = [
                        g(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              f.value.length ? (o(), _(at, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  g(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                  p.value ? (o(), n(G, { key: 0 }, [
                    w[13] || (w[13] = g(" • Current: ", -1)),
                    e("strong", null, l(p.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              z.value.length ? (o(), _(M, {
                key: 2,
                title: "ENVIRONMENTS",
                count: z.value.length
              }, {
                default: a(() => [
                  (o(!0), n(G, null, Z(z.value, (x) => (o(), _(cu, {
                    key: x.name,
                    "environment-name": x.name,
                    "is-current": x.is_current,
                    "current-branch": x.current_branch,
                    "workflow-count": x.workflow_count,
                    "node-count": x.node_count,
                    "model-count": x.model_count,
                    "last-used": I(x.last_used),
                    "show-last-used": !!x.last_used
                  }, {
                    actions: a(() => [
                      x.is_current ? c("", !0) : (o(), _(j, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (U) => L.$emit("switch", x.name)
                      }, {
                        default: a(() => [...w[14] || (w[14] = [
                          g(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      m(j, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (U) => k(x.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...w[15] || (w[15] = [
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
                      !x.is_current && f.value.length > 1 ? (o(), _(j, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (U) => C(x.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", gu, [...w[16] || (w[16] = [
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
              z.value.length ? c("", !0) : (o(), _(Oe, {
                key: 3,
                icon: "🌍",
                message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
              }, Vt({ _: 2 }, [
                v.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    m(j, {
                      variant: "primary",
                      onClick: w[4] || (w[4] = (x) => u.value = !0)
                    }, {
                      default: a(() => [...w[17] || (w[17] = [
                        g(" Create Environment ", -1)
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
        m(je, {
          show: r.value,
          title: "About Environments",
          onClose: w[6] || (w[6] = (x) => r.value = !1)
        }, {
          content: a(() => [...w[18] || (w[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              g(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            m(j, {
              variant: "secondary",
              onClick: w[5] || (w[5] = (x) => r.value = !1)
            }, {
              default: a(() => [...w[19] || (w[19] = [
                g(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), pu = /* @__PURE__ */ J(hu, [["__scopeId", "data-v-97d6527d"]]), yu = { class: "file-path" }, wu = { class: "file-path-text" }, bu = ["title"], ku = /* @__PURE__ */ q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = E(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(d.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, y) => (o(), n("div", yu, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", wu, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(s.value ? "✓" : "📋"), 9, bu)) : c("", !0)
    ]));
  }
}), _u = /* @__PURE__ */ J(ku, [["__scopeId", "data-v-f0982173"]]), $u = { class: "output-path-input" }, Cu = { class: "export-actions" }, xu = {
  key: 1,
  class: "export-warning"
}, Su = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = Se(), s = E(""), i = E(!1), f = E(null), y = E(!1);
    async function h() {
      i.value = !0, f.value = null;
      try {
        const r = await d(s.value || void 0);
        f.value = r;
      } catch (r) {
        f.value = {
          status: "error",
          message: r instanceof Error ? r.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function v() {
      var r;
      if ((r = f.value) != null && r.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (r, u) => (o(), n(G, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              m(j, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (b) => y.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...u[5] || (u[5] = [
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
          m(we, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              m(ke, { status: "synced" }, {
                icon: a(() => [...u[6] || (u[6] = [
                  g("📦", -1)
                ])]),
                title: a(() => [...u[7] || (u[7] = [
                  g("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...u[8] || (u[8] = [
                  g(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  m(ae, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  m(ae, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  m(ae, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  m(ae, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(we, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              m(ke, { status: "synced" }, {
                icon: a(() => [...u[9] || (u[9] = [
                  g("📁", -1)
                ])]),
                title: a(() => [...u[10] || (u[10] = [
                  g("Output Destination", -1)
                ])]),
                subtitle: a(() => [...u[11] || (u[11] = [
                  g(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", $u, [
                    m(vt, {
                      modelValue: s.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (b) => s.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(we, { title: "EXPORT" }, {
            default: a(() => [
              e("div", Cu, [
                m(j, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: h
                }, {
                  default: a(() => [
                    u[12] || (u[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    g(" " + l(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), _(j, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: u[2] || (u[2] = (b) => s.value = "")
                }, {
                  default: a(() => [...u[13] || (u[13] = [
                    g(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), _(we, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              m(ke, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Vt({
                icon: a(() => [
                  g(l(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  g(l(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  g(l(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    m(ae, { label: "Saved to:" }, {
                      default: a(() => [
                        m(_u, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (o(), _(ae, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), n("div", xu, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: v
                    }, {
                      default: a(() => [...u[15] || (u[15] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    m(j, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (b) => f.value = null)
                    }, {
                      default: a(() => [...u[16] || (u[16] = [
                        g(" Dismiss ", -1)
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
      m(je, {
        show: y.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (b) => y.value = !1)
      }, {
        content: a(() => [...u[17] || (u[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            g(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Iu = /* @__PURE__ */ J(Su, [["__scopeId", "data-v-1777a9d5"]]), Eu = { class: "file-input-wrapper" }, zu = ["accept", "multiple", "disabled"], Mu = /* @__PURE__ */ q({
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
  setup(t, { expose: d, emit: s }) {
    const i = s, f = E(null);
    function y() {
      var v;
      (v = f.value) == null || v.click();
    }
    function h(v) {
      const r = v.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return d({
      triggerInput: y
    }), (v, r) => (o(), n("div", Eu, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, zu),
      m(j, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          de(v.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            g(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Lu = /* @__PURE__ */ J(Mu, [["__scopeId", "data-v-cd192091"]]), Tu = {
  key: 0,
  class: "drop-zone-empty"
}, Ru = { class: "drop-zone-text" }, Du = { class: "drop-zone-primary" }, Nu = { class: "drop-zone-secondary" }, Ou = { class: "drop-zone-actions" }, Uu = {
  key: 1,
  class: "drop-zone-file"
}, Bu = { class: "file-info" }, Pu = { class: "file-details" }, Au = { class: "file-name" }, Vu = { class: "file-size" }, Fu = /* @__PURE__ */ q({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: d }) {
    const s = d, i = E(!1), f = E(null), y = E(0), h = N(() => f.value !== null), v = N(() => {
      var k;
      return ((k = f.value) == null ? void 0 : k.name) || "";
    }), r = N(() => {
      if (!f.value) return "";
      const k = f.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(k) {
      var C;
      y.value++, (C = k.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function b(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function p() {
      y.value--, y.value === 0 && (i.value = !1);
    }
    function z(k) {
      var P;
      y.value = 0, i.value = !1;
      const C = (P = k.dataTransfer) == null ? void 0 : P.files;
      C && C.length > 0 && $(C[0]);
    }
    function I(k) {
      k.length > 0 && $(k[0]);
    }
    function $(k) {
      f.value = k, s("fileSelected", k);
    }
    function S() {
      f.value = null, s("clear");
    }
    return (k, C) => (o(), n("div", {
      class: ee(["file-drop-zone", { "drop-active": i.value, "has-file": h.value }]),
      onDragenter: be(u, ["prevent"]),
      onDragover: be(b, ["prevent"]),
      onDragleave: be(p, ["prevent"]),
      onDrop: be(z, ["prevent"])
    }, [
      h.value ? (o(), n("div", Uu, [
        e("div", Bu, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Pu, [
            e("div", Au, l(v.value), 1),
            e("div", Vu, l(r.value), 1)
          ])
        ]),
        m(j, {
          variant: "ghost",
          size: "xs",
          onClick: S,
          title: "Remove file"
        }, {
          default: a(() => [...C[2] || (C[2] = [
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
      ])) : (o(), n("div", Tu, [
        C[0] || (C[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Ru, [
          e("p", Du, l(t.primaryText), 1),
          e("p", Nu, l(t.secondaryText), 1)
        ]),
        e("div", Ou, [
          m(Lu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: I
          }, {
            default: a(() => [
              g(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Wu = /* @__PURE__ */ J(Fu, [["__scopeId", "data-v-e00abbca"]]), Gu = { class: "import-preview" }, ju = { class: "preview-header" }, Hu = {
  key: 0,
  class: "source-env"
}, Ku = { class: "preview-content" }, qu = { class: "preview-section" }, Ju = { class: "section-header" }, Yu = { class: "section-info" }, Xu = { class: "section-count" }, Qu = {
  key: 0,
  class: "item-list"
}, Zu = { class: "item-name" }, em = {
  key: 0,
  class: "item-more"
}, tm = { class: "preview-section" }, om = { class: "section-header" }, sm = { class: "section-info" }, nm = { class: "section-count" }, am = {
  key: 0,
  class: "item-list"
}, lm = { class: "item-details" }, im = { class: "item-name" }, rm = { class: "item-meta" }, dm = {
  key: 0,
  class: "item-more"
}, cm = { class: "preview-section" }, um = { class: "section-header" }, mm = { class: "section-info" }, vm = { class: "section-count" }, fm = {
  key: 0,
  class: "item-list"
}, gm = { class: "item-name" }, hm = {
  key: 0,
  class: "item-more"
}, pm = {
  key: 0,
  class: "preview-section"
}, ym = { class: "git-info" }, wm = /* @__PURE__ */ q({
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
    const d = t, s = N(() => d.workflows.length), i = N(() => d.models.length), f = N(() => d.nodes.length);
    function y(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, v) => (o(), n("div", Gu, [
      e("div", ju, [
        m(Ee, null, {
          default: a(() => [...v[0] || (v[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Hu, [
          v[1] || (v[1] = g(" From: ", -1)),
          m(St, null, {
            default: a(() => [
              g(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Ku, [
        e("div", qu, [
          e("div", Ju, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Yu, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Xu, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Qu, [
            (o(!0), n(G, null, Z(t.workflows.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Zu, l(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", em, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", tm, [
          e("div", om, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", sm, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", nm, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", am, [
            (o(!0), n(G, null, Z(t.models.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", lm, [
                e("span", im, l(r.filename), 1),
                e("span", rm, l(y(r.size)) + " • " + l(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", dm, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", cm, [
          e("div", um, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", mm, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", vm, l(f.value) + " node" + l(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", fm, [
            (o(!0), n(G, null, Z(t.nodes.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", gm, l(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", hm, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", pm, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", ym, [
            t.gitBranch ? (o(), _(ae, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                m(St, null, {
                  default: a(() => [
                    g(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), _(ae, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                m(Wt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), bm = /* @__PURE__ */ J(wm, [["__scopeId", "data-v-182fe113"]]), km = { class: "import-options" }, _m = { class: "options-container" }, $m = { class: "option-section" }, Cm = { class: "conflict-options" }, xm = ["value", "checked", "onChange"], Sm = { class: "conflict-content" }, Im = { class: "conflict-label" }, Em = { class: "conflict-description" }, zm = { class: "option-section" }, Mm = { class: "component-toggles" }, Lm = /* @__PURE__ */ q({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: d }) {
    const s = d, i = [
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
    return (f, y) => (o(), n("div", km, [
      m(Ee, null, {
        default: a(() => [...y[4] || (y[4] = [
          g("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", _m, [
        e("div", $m, [
          m(xt, null, {
            default: a(() => [...y[5] || (y[5] = [
              g("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Cm, [
            (o(), n(G, null, Z(i, (h) => e("label", {
              key: h.value,
              class: ee(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (v) => s("update:conflictMode", h.value)
              }, null, 40, xm),
              e("div", Sm, [
                e("span", Im, l(h.label), 1),
                e("span", Em, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", zm, [
          m(xt, null, {
            default: a(() => [...y[6] || (y[6] = [
              g("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Mm, [
            m(We, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                m(Qe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (h) => s("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(We, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                m(Qe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (h) => s("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(We, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                m(Qe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (h) => s("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(We, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                m(Qe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (h) => s("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Tm = /* @__PURE__ */ J(Lm, [["__scopeId", "data-v-0ec212b0"]]), Rm = {
  key: 0,
  class: "import-empty"
}, Dm = { class: "import-help" }, Nm = {
  key: 1,
  class: "import-configure"
}, Om = { class: "selected-file-bar" }, Um = { class: "file-bar-content" }, Bm = { class: "file-bar-info" }, Pm = { class: "file-bar-name" }, Am = { class: "file-bar-size" }, Vm = { class: "import-actions" }, Fm = {
  key: 2,
  class: "import-progress"
}, Wm = { class: "progress-content" }, Gm = { class: "progress-info" }, jm = { class: "progress-title" }, Hm = { class: "progress-detail" }, Km = { class: "progress-bar" }, qm = { class: "progress-status" }, Jm = {
  key: 3,
  class: "import-complete"
}, Ym = { class: "complete-message" }, Xm = { class: "complete-title" }, Qm = { class: "complete-details" }, Zm = { class: "complete-actions" }, ev = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const d = E(null), s = E(!1), i = E(!1), f = E(!1), y = E(""), h = E({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), v = E({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), r = E({
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
    }), u = N(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function b(S) {
      d.value = S;
    }
    function p() {
      d.value = null, i.value = !1, f.value = !1, y.value = "";
    }
    function z() {
      p(), s.value = !1, v.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function I() {
      if (d.value) {
        s.value = !0, i.value = !1;
        try {
          const S = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${r.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${r.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${r.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of S)
            v.value = k, await new Promise((C) => setTimeout(C, 800));
          v.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), f.value = !0, y.value = `Successfully imported ${r.value.workflows.length} workflows, ${r.value.models.length} models, and ${r.value.nodes.length} custom nodes.`;
        } catch (S) {
          f.value = !1, y.value = S instanceof Error ? S.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function $(S) {
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (S, k) => (o(), _(Ce, null, {
      header: a(() => [
        m(xe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !s.value ? (o(), n("div", Rm, [
          m(Wu, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Dm, [
            m(Ee, null, {
              default: a(() => [...k[5] || (k[5] = [
                g("How to Import", -1)
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
        ])) : d.value && !s.value && !i.value ? (o(), n("div", Nm, [
          e("div", Om, [
            e("div", Um, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Bm, [
                e("div", Pm, l(d.value.name), 1),
                e("div", Am, l($(d.value.size)), 1)
              ])
            ]),
            m(j, {
              variant: "ghost",
              size: "sm",
              onClick: p
            }, {
              default: a(() => [...k[8] || (k[8] = [
                g(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          m(bm, {
            "source-environment": r.value.sourceEnvironment,
            workflows: r.value.workflows,
            models: r.value.models,
            nodes: r.value.nodes,
            "git-branch": r.value.gitBranch,
            "git-commit": r.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          m(Tm, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (C) => h.value.conflictMode = C),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (C) => h.value.includeWorkflows = C),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (C) => h.value.includeModels = C),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (C) => h.value.includeNodes = C),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (C) => h.value.includeGitHistory = C)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && r.value.models.length > 0 ? (o(), _(Xe, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${r.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Vm, [
            m(j, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: I
            }, {
              default: a(() => [...k[9] || (k[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                g(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            m(j, {
              variant: "secondary",
              size: "md",
              onClick: p
            }, {
              default: a(() => [...k[10] || (k[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Fm, [
          e("div", Wm, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Gm, [
              e("div", jm, l(v.value.message), 1),
              e("div", Hm, l(v.value.detail), 1)
            ])
          ]),
          e("div", Km, [
            e("div", {
              class: "progress-bar-fill",
              style: Ze({ width: `${v.value.percent}%` })
            }, null, 4)
          ]),
          e("div", qm, l(v.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Jm, [
          e("div", {
            class: ee(["complete-icon", f.value ? "success" : "error"])
          }, l(f.value ? "✓" : "✕"), 3),
          e("div", Ym, [
            e("div", Xm, l(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Qm, l(y.value), 1)
          ]),
          e("div", Zm, [
            m(j, {
              variant: "primary",
              size: "md",
              onClick: z
            }, {
              default: a(() => [...k[12] || (k[12] = [
                g(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), tv = /* @__PURE__ */ J(ev, [["__scopeId", "data-v-18e18eb5"]]), ov = { class: "header-info" }, sv = { class: "commit-hash" }, nv = {
  key: 0,
  class: "commit-refs"
}, av = { class: "commit-message" }, lv = { class: "commit-date" }, iv = {
  key: 0,
  class: "loading"
}, rv = {
  key: 1,
  class: "changes-section"
}, dv = { class: "stats-row" }, cv = { class: "stat" }, uv = { class: "stat insertions" }, mv = { class: "stat deletions" }, vv = {
  key: 0,
  class: "change-group"
}, fv = {
  key: 1,
  class: "change-group"
}, gv = {
  key: 0,
  class: "version"
}, hv = {
  key: 2,
  class: "change-group"
}, pv = { class: "change-item" }, yv = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: s } = Se(), i = E(null), f = E(!0), y = N(() => {
      if (!i.value) return !1;
      const v = i.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), h = N(() => {
      if (!i.value) return !1;
      const v = i.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return _e(async () => {
      try {
        i.value = await s(d.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (v, r) => (o(), _(yt, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (u) => v.$emit("close"))
    }, {
      header: a(() => {
        var u, b, p, z;
        return [
          e("div", ov, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", sv, l(((u = i.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (z = (p = i.value) == null ? void 0 : p.refs) != null && z.length ? (o(), n("span", nv, [
              (o(!0), n(G, null, Z(i.value.refs, (I) => (o(), n("span", {
                key: I,
                class: "ref-badge"
              }, l(I), 1))), 128))
            ])) : c("", !0)
          ]),
          m(re, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (I) => v.$emit("close"))
          }, {
            default: a(() => [...r[5] || (r[5] = [
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
        var u, b;
        return [
          e("div", av, l(((u = i.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", lv, l(((b = i.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (o(), n("div", iv, "Loading details...")) : i.value ? (o(), n("div", rv, [
            e("div", dv, [
              e("span", cv, l(i.value.stats.files_changed) + " files", 1),
              e("span", uv, "+" + l(i.value.stats.insertions), 1),
              e("span", mv, "-" + l(i.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", vv, [
              m(ct, { variant: "section" }, {
                default: a(() => [...r[6] || (r[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(G, null, Z(i.value.changes.workflows.added, (p) => (o(), n("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(G, null, Z(i.value.changes.workflows.modified, (p) => (o(), n("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(G, null, Z(i.value.changes.workflows.deleted, (p) => (o(), n("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p), 1)
              ]))), 128))
            ])) : c("", !0),
            h.value ? (o(), n("div", fv, [
              m(ct, { variant: "section" }, {
                default: a(() => [...r[10] || (r[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(G, null, Z(i.value.changes.nodes.added, (p) => (o(), n("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p.name), 1),
                p.version ? (o(), n("span", gv, "(" + l(p.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(G, null, Z(i.value.changes.nodes.removed, (p) => (o(), n("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p.name), 1)
              ]))), 128))
            ])) : c("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", hv, [
              m(ct, { variant: "section" }, {
                default: a(() => [...r[13] || (r[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", pv, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        m(re, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => v.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...r[15] || (r[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        m(re, {
          variant: "primary",
          onClick: r[2] || (r[2] = (u) => v.$emit("checkout", t.commit))
        }, {
          default: a(() => [...r[16] || (r[16] = [
            g(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), wv = /* @__PURE__ */ J(yv, [["__scopeId", "data-v-d256ff6d"]]), bv = { class: "dialog-message" }, kv = {
  key: 0,
  class: "dialog-details"
}, _v = {
  key: 1,
  class: "dialog-warning"
}, $v = /* @__PURE__ */ q({
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
    return (d, s) => (o(), _(yt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", bv, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", kv, [
          (o(!0), n(G, null, Z(t.details, (i, f) => (o(), n("div", {
            key: f,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", _v, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        m(re, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => d.$emit("cancel"))
        }, {
          default: a(() => [
            g(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), _(re, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => d.$emit("secondary"))
        }, {
          default: a(() => [
            g(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        m(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
        }, {
          default: a(() => [
            g(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Cv = /* @__PURE__ */ J($v, [["__scopeId", "data-v-3670b9f5"]]), xv = { class: "base-textarea-wrapper" }, Sv = ["value", "rows", "placeholder", "disabled", "maxlength"], Iv = {
  key: 0,
  class: "base-textarea-count"
}, Ev = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("div", xv, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ge(be((i) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ge(be((i) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Sv),
      t.showCharCount && t.maxLength ? (o(), n("div", Iv, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ J(Ev, [["__scopeId", "data-v-5516e6fc"]]), zv = ["checked", "disabled"], Mv = { class: "base-checkbox-box" }, Lv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Tv = {
  key: 0,
  class: "base-checkbox-label"
}, Rv = /* @__PURE__ */ q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", {
      class: ee(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked))
      }, null, 40, zv),
      e("span", Mv, [
        t.modelValue ? (o(), n("svg", Lv, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (o(), n("span", Tv, [
        de(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ J(Rv, [["__scopeId", "data-v-bf17c831"]]), Dv = { class: "popover-header" }, Nv = { class: "popover-body" }, Ov = {
  key: 0,
  class: "changes-summary"
}, Uv = {
  key: 0,
  class: "change-item"
}, Bv = {
  key: 1,
  class: "change-item"
}, Pv = {
  key: 2,
  class: "change-item"
}, Av = {
  key: 3,
  class: "change-item"
}, Vv = {
  key: 4,
  class: "change-item"
}, Fv = {
  key: 1,
  class: "no-changes"
}, Wv = {
  key: 2,
  class: "loading"
}, Gv = {
  key: 3,
  class: "issues-warning"
}, jv = { class: "warning-header" }, Hv = { class: "warning-title" }, Kv = { class: "issues-list" }, qv = { class: "message-section" }, Jv = { class: "popover-footer" }, Yv = {
  key: 1,
  class: "commit-popover"
}, Xv = { class: "popover-header" }, Qv = { class: "popover-body" }, Zv = {
  key: 0,
  class: "changes-summary"
}, ef = {
  key: 0,
  class: "change-item"
}, tf = {
  key: 1,
  class: "change-item"
}, of = {
  key: 2,
  class: "change-item"
}, sf = {
  key: 3,
  class: "change-item"
}, nf = {
  key: 4,
  class: "change-item"
}, af = {
  key: 1,
  class: "no-changes"
}, lf = {
  key: 2,
  class: "loading"
}, rf = {
  key: 3,
  class: "issues-warning"
}, df = { class: "warning-header" }, cf = { class: "warning-title" }, uf = { class: "issues-list" }, mf = { class: "message-section" }, vf = { class: "popover-footer" }, ff = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const s = t, i = d, { commit: f } = Se(), y = E(""), h = E(!1), v = E(!1), r = E(null), u = N(() => {
      if (!s.status) return !1;
      const $ = s.status.workflows;
      return $.new.length > 0 || $.modified.length > 0 || $.deleted.length > 0 || s.status.has_changes;
    }), b = N(() => {
      var $;
      return ($ = s.status) != null && $.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (S) => S.has_issues && (S.sync_state === "new" || S.sync_state === "modified")
      ) : [];
    }), p = N(() => b.value.length > 0), z = N(() => p.value && !v.value);
    async function I() {
      var $, S, k;
      if (!(p.value && !v.value) && !(!u.value || !y.value.trim() || h.value)) {
        h.value = !0, r.value = null;
        try {
          const C = await f(y.value.trim(), v.value);
          C.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${(($ = C.summary) == null ? void 0 : $.new) || 0} new, ${((S = C.summary) == null ? void 0 : S.modified) || 0} modified, ${((k = C.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, y.value = "", v.value = !1, setTimeout(() => i("committed"), 1e3)) : C.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : C.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: C.message || "Commit failed" };
        } catch (C) {
          r.value = { type: "error", message: C instanceof Error ? C.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return ($, S) => t.asModal ? (o(), _(Le, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = (k) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = be(() => {
          }, ["stop"]))
        }, [
          e("div", Dv, [
            S[11] || (S[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: S[0] || (S[0] = (k) => i("close"))
            }, [...S[10] || (S[10] = [
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
          e("div", Nv, [
            t.status && u.value ? (o(), n("div", Ov, [
              t.status.workflows.new.length ? (o(), n("div", Uv, [
                S[12] || (S[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", Bv, [
                S[13] || (S[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", Pv, [
                S[14] || (S[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", Av, [
                S[15] || (S[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Vv, [
                S[16] || (S[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", Fv, " No changes to commit ")) : (o(), n("div", Wv, " Loading... ")),
            p.value ? (o(), n("div", Gv, [
              e("div", jv, [
                S[17] || (S[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Hv, l(b.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Kv, [
                (o(!0), n(G, null, Z(b.value, (k) => (o(), n("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  g(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              m(Bt, {
                modelValue: v.value,
                "onUpdate:modelValue": S[1] || (S[1] = (k) => v.value = k),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...S[18] || (S[18] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", qv, [
              m(Ut, {
                modelValue: y.value,
                "onUpdate:modelValue": S[2] || (S[2] = (k) => y.value = k),
                placeholder: z.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || h.value || z.value,
                rows: 3,
                onCtrlEnter: I
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (o(), n("div", {
              key: 4,
              class: ee(["result", r.value.type])
            }, l(r.value.message), 3)) : c("", !0)
          ]),
          e("div", Jv, [
            m(re, {
              variant: "secondary",
              onClick: S[3] || (S[3] = (k) => i("close"))
            }, {
              default: a(() => [...S[19] || (S[19] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: v.value ? "danger" : "primary",
              disabled: !u.value || !y.value.trim() || h.value || z.value,
              loading: h.value,
              onClick: I
            }, {
              default: a(() => [
                g(l(h.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Yv, [
      e("div", Xv, [
        S[21] || (S[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: S[6] || (S[6] = (k) => i("close"))
        }, [...S[20] || (S[20] = [
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
      e("div", Qv, [
        t.status && u.value ? (o(), n("div", Zv, [
          t.status.workflows.new.length ? (o(), n("div", ef, [
            S[22] || (S[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", tf, [
            S[23] || (S[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", of, [
            S[24] || (S[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", sf, [
            S[25] || (S[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", nf, [
            S[26] || (S[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", af, " No changes to commit ")) : (o(), n("div", lf, " Loading... ")),
        p.value ? (o(), n("div", rf, [
          e("div", df, [
            S[27] || (S[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", cf, l(b.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", uf, [
            (o(!0), n(G, null, Z(b.value, (k) => (o(), n("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              g(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          m(Bt, {
            modelValue: v.value,
            "onUpdate:modelValue": S[7] || (S[7] = (k) => v.value = k),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...S[28] || (S[28] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", mf, [
          m(Ut, {
            modelValue: y.value,
            "onUpdate:modelValue": S[8] || (S[8] = (k) => y.value = k),
            placeholder: z.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || h.value || z.value,
            rows: 3,
            onCtrlEnter: I
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (o(), n("div", {
          key: 4,
          class: ee(["result", r.value.type])
        }, l(r.value.message), 3)) : c("", !0)
      ]),
      e("div", vf, [
        m(re, {
          variant: "secondary",
          onClick: S[9] || (S[9] = (k) => i("close"))
        }, {
          default: a(() => [...S[29] || (S[29] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m(re, {
          variant: v.value ? "danger" : "primary",
          disabled: !u.value || !y.value.trim() || h.value || z.value,
          loading: h.value,
          onClick: I
        }, {
          default: a(() => [
            g(l(h.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ht = /* @__PURE__ */ J(ff, [["__scopeId", "data-v-38b45183"]]), gf = { class: "modal-header" }, hf = { class: "modal-body" }, pf = { class: "switch-message" }, yf = { class: "switch-details" }, wf = { class: "modal-actions" }, bf = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), _(Le, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = be(() => {
          }, ["stop"]))
        }, [
          e("div", gf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", hf, [
            e("p", pf, [
              s[6] || (s[6] = g(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = g(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = g("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", yf, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", wf, [
            m(j, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(j, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                g(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), kf = /* @__PURE__ */ J(bf, [["__scopeId", "data-v-e9c5253e"]]), _f = { class: "progress-bar" }, $f = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, s = N(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (i, f) => (o(), n("div", _f, [
      e("div", {
        class: ee(["progress-fill", t.variant]),
        style: Ze({ width: s.value })
      }, null, 6)
    ]));
  }
}), Cf = /* @__PURE__ */ J($f, [["__scopeId", "data-v-1beb0512"]]), xf = {
  key: 0,
  class: "modal-overlay"
}, Sf = { class: "modal-content" }, If = { class: "modal-body" }, Ef = { class: "progress-info" }, zf = { class: "progress-percentage" }, Mf = { class: "progress-state" }, Lf = { class: "switch-steps" }, Tf = { class: "step-icon" }, Rf = { class: "step-label" }, Df = /* @__PURE__ */ q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, s = N(() => {
      const y = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return d.message || y[d.state] || d.state;
    }), i = N(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), f = N(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = y.findIndex((v) => v.state === d.state);
      return y.map((v, r) => {
        let u = "pending", b = "○";
        return r < h ? (u = "completed", b = "✓") : r === h && (u = "active", b = "⟳"), {
          ...v,
          status: u,
          icon: b
        };
      });
    });
    return (y, h) => (o(), _(Le, { to: "body" }, [
      t.show ? (o(), n("div", xf, [
        e("div", Sf, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", If, [
            m(Cf, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", Ef, [
              e("div", zf, l(t.progress) + "%", 1),
              e("div", Mf, l(s.value), 1)
            ]),
            e("div", Lf, [
              (o(!0), n(G, null, Z(f.value, (v) => (o(), n("div", {
                key: v.state,
                class: ee(["switch-step", v.status])
              }, [
                e("span", Tf, l(v.icon), 1),
                e("span", Rf, l(v.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Nf = /* @__PURE__ */ J(Df, [["__scopeId", "data-v-768a5078"]]), Of = { class: "modal-header" }, Uf = { class: "modal-body" }, Bf = {
  key: 0,
  class: "node-section"
}, Pf = { class: "node-list" }, Af = {
  key: 1,
  class: "node-section"
}, Vf = { class: "node-list" }, Ff = { class: "modal-actions" }, Wf = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), _(Le, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = be(() => {
          }, ["stop"]))
        }, [
          e("div", Of, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Uf, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", Bf, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Pf, [
                (o(!0), n(G, null, Z(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", Af, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Vf, [
                (o(!0), n(G, null, Z(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + l(i), 1))), 128))
              ])
            ])) : c("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Ff, [
            m(j, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(j, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                g(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Gf = /* @__PURE__ */ J(Wf, [["__scopeId", "data-v-7cad7518"]]);
async function lt(t, d = {}, s = 5e3) {
  const i = new AbortController(), f = setTimeout(() => i.abort(), s);
  try {
    const y = await fetch(t, {
      ...d,
      signal: i.signal
    });
    return clearTimeout(f), y;
  } catch (y) {
    throw clearTimeout(f), y.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : y;
  }
}
function jf() {
  const t = E(null);
  async function d() {
    try {
      const h = await lt(
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
  async function s() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const h = await lt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Health check failed");
      return await h.json();
    } catch {
      return t.value = await d(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const h = await lt(
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
  async function f() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await lt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await lt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: d,
    checkHealth: s,
    getStatus: i,
    restart: f,
    kill: y
  };
}
const Hf = { class: "comfygit-panel" }, Kf = { class: "panel-header" }, qf = { class: "header-left" }, Jf = {
  key: 0,
  class: "header-info"
}, Yf = { class: "header-actions" }, Xf = { class: "env-switcher" }, Qf = {
  key: 0,
  class: "header-info"
}, Zf = { class: "branch-name" }, eg = { class: "panel-main" }, tg = { class: "sidebar" }, og = { class: "sidebar-section" }, sg = { class: "sidebar-section" }, ng = { class: "sidebar-section" }, ag = { class: "content-area" }, lg = {
  key: 0,
  class: "error-message"
}, ig = {
  key: 1,
  class: "loading"
}, rg = { class: "dialog-content env-selector-dialog" }, dg = { class: "dialog-header" }, cg = { class: "dialog-body" }, ug = { class: "env-list" }, mg = { class: "env-info" }, vg = { class: "env-name-row" }, fg = { class: "env-indicator" }, gg = { class: "env-name" }, hg = {
  key: 0,
  class: "env-branch"
}, pg = {
  key: 1,
  class: "current-label"
}, yg = { class: "env-stats" }, wg = ["onClick"], bg = { class: "toast-container" }, kg = { class: "toast-icon" }, _g = { class: "toast-message" }, $g = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const s = d, {
      getStatus: i,
      getHistory: f,
      getBranches: y,
      checkout: h,
      createBranch: v,
      switchBranch: r,
      getEnvironments: u,
      switchEnvironment: b,
      getSwitchProgress: p,
      syncEnvironmentManually: z
    } = Se(), I = jf(), $ = E(null), S = E([]), k = E([]), C = E([]), P = N(() => C.value.find((W) => W.is_current)), L = E(!1), w = E(null), M = E(null), x = E(!1), U = E(null), R = E(!1), D = E(!1), O = E(""), V = E({ state: "idle", progress: 0, message: "" });
    let F = null, Q = null;
    const A = E("status"), K = E("this-env");
    function X(W, T) {
      A.value = W, K.value = T;
    }
    function ne(W) {
      const ue = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      ue && X(ue.view, ue.section);
    }
    function se() {
      X("branches", "this-env");
    }
    const fe = E(null), oe = E(!1), ze = E(!1), pe = E([]);
    let et = 0;
    function ge(W, T = "info", ue = 3e3) {
      const ye = ++et;
      return pe.value.push({ id: ye, message: W, type: T }), ue > 0 && setTimeout(() => {
        pe.value = pe.value.filter((Re) => Re.id !== ye);
      }, ue), ye;
    }
    function Me(W) {
      pe.value = pe.value.filter((T) => T.id !== W);
    }
    function Y(W) {
      switch (W) {
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
    const le = N(() => {
      if (!$.value) return "neutral";
      const W = $.value.workflows, T = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || $.value.has_changes;
      return $.value.comparison.is_synced ? T ? "warning" : "success" : "error";
    });
    N(() => $.value ? le.value === "success" ? "All synced" : le.value === "warning" ? "Uncommitted changes" : le.value === "error" ? "Not synced" : "" : "");
    async function ce() {
      L.value = !0, w.value = null;
      try {
        const [W, T, ue, ye] = await Promise.all([
          i(!0),
          f(),
          y(),
          u()
        ]);
        $.value = W, S.value = T.commits, k.value = ue.branches, C.value = ye, s("statusUpdate", W), U.value && await U.value.loadWorkflows(!0);
      } catch (W) {
        w.value = W instanceof Error ? W.message : "Failed to load status", $.value = null, S.value = [], k.value = [];
      } finally {
        L.value = !1;
      }
    }
    function $e(W) {
      M.value = W;
    }
    async function Je(W) {
      var ue;
      M.value = null;
      const T = $.value && ($.value.workflows.new.length > 0 || $.value.workflows.modified.length > 0 || $.value.workflows.deleted.length > 0 || $.value.has_changes);
      fe.value = {
        title: T ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: T ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((ue = W.hash) == null ? void 0 : ue.slice(0, 7))}?`,
        details: T ? Dt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: T,
        onConfirm: async () => {
          var De;
          fe.value = null, te();
          const ye = ge(`Checking out ${W.short_hash || ((De = W.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Re = await h(W.hash, T);
          Me(ye), Re.status === "success" ? ge("Restarting ComfyUI...", "success") : ge(Re.message || "Checkout failed", "error");
        }
      };
    }
    async function bt(W) {
      const T = $.value && ($.value.workflows.new.length > 0 || $.value.workflows.modified.length > 0 || $.value.workflows.deleted.length > 0 || $.value.has_changes);
      fe.value = {
        title: T ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: T ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: T ? Dt() : void 0,
        warning: T ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, te();
          const ue = ge(`Switching to ${W}...`, "info", 0), ye = await r(W, T);
          Me(ue), ye.status === "success" ? ge("Restarting ComfyUI...", "success") : ge(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function H(W) {
      const T = ge(`Creating branch ${W}...`, "info", 0), ue = await v(W);
      Me(T), ue.status === "success" ? (ge(`Branch "${W}" created`, "success"), await ce()) : ge(ue.message || "Failed to create branch", "error");
    }
    async function B(W) {
      M.value = null;
      const T = prompt("Enter branch name:");
      if (T) {
        const ue = ge(`Creating branch ${T}...`, "info", 0), ye = await v(T, W.hash);
        Me(ue), ye.status === "success" ? (ge(`Branch "${T}" created from ${W.short_hash}`, "success"), await ce()) : ge(ye.message || "Failed to create branch", "error");
      }
    }
    function te() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function he(W) {
      x.value = !1, O.value = W, R.value = !0;
    }
    async function Te() {
      R.value = !1, D.value = !0, te(), V.value = {
        progress: 10,
        state: Ue(10),
        message: Be(10)
      };
      try {
        await b(O.value), ft(), gt();
      } catch (W) {
        Pe(), D.value = !1, ge(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), V.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ue(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function Be(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ue(W)] || "";
    }
    function ft() {
      if (Q) return;
      let W = 10;
      const T = 60, ue = 5e3, ye = 100, Re = (T - W) / (ue / ye);
      Q = window.setInterval(() => {
        if (W += Re, W >= T && (W = T, Pe()), V.value.progress < T) {
          const De = Math.floor(W);
          V.value = {
            progress: De,
            state: Ue(De),
            message: Be(De)
          };
        }
      }, ye);
    }
    function Pe() {
      Q && (clearInterval(Q), Q = null);
    }
    function gt() {
      F || (F = window.setInterval(async () => {
        try {
          let W = await I.getStatus();
          if ((!W || W.state === "idle") && (W = await p()), !W)
            return;
          const T = W.progress || 0;
          T >= 60 && Pe();
          const ue = Math.max(T, V.value.progress), ye = W.state && W.state !== "idle" && W.state !== "unknown", Re = ye ? W.state : Ue(ue), De = ye && W.message || Be(ue);
          V.value = {
            state: Re,
            progress: ue,
            message: De
          }, W.state === "complete" ? (Pe(), kt(), D.value = !1, ge(`✓ Switched to ${O.value}`, "success"), await ce(), O.value = "") : W.state === "rolled_back" ? (Pe(), kt(), D.value = !1, ge("Switch failed, restored previous environment", "warning"), O.value = "") : W.state === "critical_failure" && (Pe(), kt(), D.value = !1, ge(`Critical error during switch: ${W.message}`, "error"), O.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function kt() {
      Pe(), F && (clearInterval(F), F = null);
    }
    function Xt() {
      R.value = !1, O.value = "";
    }
    async function Qt() {
      oe.value = !1, await ce(), ge("✓ Changes committed", "success");
    }
    async function Zt() {
      ze.value = !1;
      const W = ge("Syncing environment...", "info", 0);
      try {
        const T = await z("skip", !0);
        if (Me(W), T.status === "success") {
          const ue = [];
          T.nodes_installed.length && ue.push(`${T.nodes_installed.length} installed`), T.nodes_removed.length && ue.push(`${T.nodes_removed.length} removed`);
          const ye = ue.length ? `: ${ue.join(", ")}` : "";
          ge(`✓ Environment synced${ye}`, "success"), await ce();
        } else {
          const ue = T.errors.length ? T.errors.join("; ") : T.message;
          ge(`Sync failed: ${ue}`, "error");
        }
      } catch (T) {
        Me(W), ge(`Sync error: ${T instanceof Error ? T.message : "Unknown error"}`, "error");
      }
    }
    async function eo(W) {
      const T = ge(`Creating environment "${W}"...`, "info", 0);
      Me(T), ge("Environment creation not yet implemented", "warning");
    }
    async function to(W) {
      const T = ge(`Deleting environment "${W}"...`, "info", 0);
      Me(T), ge("Environment deletion not yet implemented", "warning");
    }
    function oo(W) {
      ge(`Viewing details for "${W}"`, "info"), X("models-env", "this-env");
    }
    function Dt() {
      if (!$.value) return [];
      const W = [], T = $.value.workflows;
      return T.new.length && W.push(`${T.new.length} new workflow(s)`), T.modified.length && W.push(`${T.modified.length} modified workflow(s)`), T.deleted.length && W.push(`${T.deleted.length} deleted workflow(s)`), W;
    }
    return _e(ce), (W, T) => {
      var ue, ye, Re, De;
      return o(), n("div", Hf, [
        e("div", Kf, [
          e("div", qf, [
            T[27] || (T[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            $.value ? (o(), n("div", Jf)) : c("", !0)
          ]),
          e("div", Yf, [
            e("button", {
              class: ee(["icon-btn", { spinning: L.value }]),
              onClick: ce,
              title: "Refresh"
            }, [...T[28] || (T[28] = [
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
              onClick: T[0] || (T[0] = (ie) => s("close")),
              title: "Close"
            }, [...T[29] || (T[29] = [
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
        e("div", Xf, [
          T[31] || (T[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: T[1] || (T[1] = (ie) => X("environments", "all-envs"))
          }, [
            $.value ? (o(), n("div", Qf, [
              e("span", null, l(((ue = P.value) == null ? void 0 : ue.name) || ((ye = $.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", Zf, "(" + l($.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            T[30] || (T[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", eg, [
          e("div", tg, [
            e("div", og, [
              T[32] || (T[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "status" && K.value === "this-env" }]),
                onClick: T[2] || (T[2] = (ie) => X("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "workflows" }]),
                onClick: T[3] || (T[3] = (ie) => X("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "models-env" }]),
                onClick: T[4] || (T[4] = (ie) => X("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "branches" }]),
                onClick: T[5] || (T[5] = (ie) => X("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "history" }]),
                onClick: T[6] || (T[6] = (ie) => X("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "nodes" }]),
                onClick: T[7] || (T[7] = (ie) => X("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "debug-env" }]),
                onClick: T[8] || (T[8] = (ie) => X("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            T[35] || (T[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", sg, [
              T[33] || (T[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "environments" }]),
                onClick: T[9] || (T[9] = (ie) => X("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "model-index" }]),
                onClick: T[10] || (T[10] = (ie) => X("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "settings" }]),
                onClick: T[11] || (T[11] = (ie) => X("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "debug-workspace" }]),
                onClick: T[12] || (T[12] = (ie) => X("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            T[36] || (T[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ng, [
              T[34] || (T[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "export" }]),
                onClick: T[13] || (T[13] = (ie) => X("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "import" }]),
                onClick: T[14] || (T[14] = (ie) => X("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: A.value === "remotes" }]),
                onClick: T[15] || (T[15] = (ie) => X("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", ag, [
            w.value ? (o(), n("div", lg, l(w.value), 1)) : !$.value && A.value === "status" ? (o(), n("div", ig, " Loading status... ")) : (o(), n(G, { key: 2 }, [
              A.value === "status" ? (o(), _(Pn, {
                key: 0,
                status: $.value,
                onSwitchBranch: se,
                onCommitChanges: T[16] || (T[16] = (ie) => oe.value = !0),
                onSyncEnvironment: T[17] || (T[17] = (ie) => ze.value = !0),
                onViewWorkflows: T[18] || (T[18] = (ie) => X("workflows", "this-env")),
                onViewHistory: T[19] || (T[19] = (ie) => X("history", "this-env")),
                onViewDebug: T[20] || (T[20] = (ie) => X("debug-env", "this-env"))
              }, null, 8, ["status"])) : A.value === "workflows" ? (o(), _(Yd, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: U,
                onRefresh: ce
              }, null, 512)) : A.value === "models-env" ? (o(), _(Zd, {
                key: 2,
                onNavigate: ne
              })) : A.value === "branches" ? (o(), _(ea, {
                key: 3,
                branches: k.value,
                current: ((Re = $.value) == null ? void 0 : Re.branch) || null,
                onSwitch: bt,
                onCreate: H
              }, null, 8, ["branches", "current"])) : A.value === "history" ? (o(), _(ua, {
                key: 4,
                commits: S.value,
                onSelect: $e,
                onCheckout: Je
              }, null, 8, ["commits"])) : A.value === "nodes" ? (o(), _(lc, { key: 5 })) : A.value === "debug-env" ? (o(), _(au, { key: 6 })) : A.value === "environments" ? (o(), _(pu, {
                key: 7,
                onSwitch: he,
                onCreate: eo,
                onDelete: to,
                onViewDetails: oo
              })) : A.value === "model-index" ? (o(), _(tc, { key: 8 })) : A.value === "settings" ? (o(), _(tu, { key: 9 })) : A.value === "debug-workspace" ? (o(), _(su, { key: 10 })) : A.value === "export" ? (o(), _(Iu, { key: 11 })) : A.value === "import" ? (o(), _(tv, { key: 12 })) : A.value === "remotes" ? (o(), _(Oc, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        M.value ? (o(), _(wv, {
          key: 0,
          commit: M.value,
          onClose: T[21] || (T[21] = (ie) => M.value = null),
          onCheckout: Je,
          onCreateBranch: B
        }, null, 8, ["commit"])) : c("", !0),
        fe.value ? (o(), _(Cv, {
          key: 1,
          title: fe.value.title,
          message: fe.value.message,
          details: fe.value.details,
          warning: fe.value.warning,
          confirmLabel: fe.value.confirmLabel,
          cancelLabel: fe.value.cancelLabel,
          secondaryLabel: fe.value.secondaryLabel,
          secondaryAction: fe.value.secondaryAction,
          destructive: fe.value.destructive,
          onConfirm: fe.value.onConfirm,
          onCancel: T[22] || (T[22] = (ie) => fe.value = null),
          onSecondary: fe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        m(kf, {
          show: R.value,
          "from-environment": ((De = P.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": O.value,
          onConfirm: Te,
          onClose: Xt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        oe.value && $.value ? (o(), _(Ht, {
          key: 2,
          status: $.value,
          "as-modal": !0,
          onClose: T[23] || (T[23] = (ie) => oe.value = !1),
          onCommitted: Qt
        }, null, 8, ["status"])) : c("", !0),
        ze.value && $.value ? (o(), _(Gf, {
          key: 3,
          show: ze.value,
          "mismatch-details": {
            missing_nodes: $.value.comparison.missing_nodes,
            extra_nodes: $.value.comparison.extra_nodes
          },
          onConfirm: Zt,
          onClose: T[24] || (T[24] = (ie) => ze.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        m(Nf, {
          show: D.value,
          state: V.value.state,
          progress: V.value.progress,
          message: V.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        x.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: T[26] || (T[26] = be((ie) => x.value = !1, ["self"]))
        }, [
          e("div", rg, [
            e("div", dg, [
              T[38] || (T[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: T[25] || (T[25] = (ie) => x.value = !1)
              }, [...T[37] || (T[37] = [
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
            e("div", cg, [
              T[39] || (T[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", ug, [
                (o(!0), n(G, null, Z(C.value, (ie) => (o(), n("div", {
                  key: ie.name,
                  class: ee(["env-item", { current: ie.is_current }])
                }, [
                  e("div", mg, [
                    e("div", vg, [
                      e("span", fg, l(ie.is_current ? "●" : "○"), 1),
                      e("span", gg, l(ie.name), 1),
                      ie.current_branch ? (o(), n("span", hg, "(" + l(ie.current_branch) + ")", 1)) : c("", !0),
                      ie.is_current ? (o(), n("span", pg, "CURRENT")) : c("", !0)
                    ]),
                    e("div", yg, l(ie.workflow_count) + " workflows • " + l(ie.node_count) + " nodes ", 1)
                  ]),
                  ie.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Mh) => he(ie.name)
                  }, " SWITCH ", 8, wg))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", bg, [
          m(io, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(G, null, Z(pe.value, (ie) => (o(), n("div", {
                key: ie.id,
                class: ee(["toast", ie.type])
              }, [
                e("span", kg, l(Y(ie.type)), 1),
                e("span", _g, l(ie.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Cg = /* @__PURE__ */ J($g, [["__scopeId", "data-v-734ed318"]]), xg = { class: "item-header" }, Sg = { class: "item-info" }, Ig = { class: "filename" }, Eg = { class: "metadata" }, zg = { class: "size" }, Mg = {
  key: 0,
  class: "type"
}, Lg = { class: "item-actions" }, Tg = {
  key: 0,
  class: "progress-section"
}, Rg = { class: "progress-bar" }, Dg = { class: "progress-stats" }, Ng = { class: "downloaded" }, Og = { class: "speed" }, Ug = {
  key: 0,
  class: "eta"
}, Bg = {
  key: 1,
  class: "status-msg paused"
}, Pg = {
  key: 2,
  class: "status-msg queued"
}, Ag = {
  key: 3,
  class: "status-msg completed"
}, Vg = {
  key: 4,
  class: "status-msg failed"
}, Fg = {
  key: 0,
  class: "retries"
}, Wg = /* @__PURE__ */ q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const s = d;
    function i(h) {
      if (h === 0) return "?";
      const v = h / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const v = Math.floor(h / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (h, v) => (o(), n("div", {
      class: ee(["download-item", `status-${t.item.status}`])
    }, [
      e("div", xg, [
        e("div", Sg, [
          e("div", Ig, l(t.item.filename), 1),
          e("div", Eg, [
            e("span", zg, l(i(t.item.size)), 1),
            t.item.type ? (o(), n("span", Mg, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Lg, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), n("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (r) => s("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), n("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (r) => s("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), n("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (r) => s("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), n("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (r) => s("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), n("div", Tg, [
        e("div", Rg, [
          e("div", {
            class: "progress-fill",
            style: Ze({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Dg, [
          e("span", Ng, l(i(t.item.downloaded)) + " / " + l(i(t.item.size)), 1),
          e("span", Og, l(f(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", Ug, l(y(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", Bg, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", Pg, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", Ag, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", Vg, [
        g(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", Fg, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ J(Wg, [["__scopeId", "data-v-2110df65"]]), Gg = { class: "queue-title" }, jg = { class: "count" }, Hg = { class: "queue-actions" }, Kg = { class: "action-label" }, qg = {
  key: 0,
  class: "overall-progress"
}, Jg = { class: "progress-bar" }, Yg = {
  key: 0,
  class: "current-mini"
}, Xg = { class: "filename" }, Qg = { class: "speed" }, Zg = {
  key: 1,
  class: "queue-content"
}, eh = {
  key: 0,
  class: "section"
}, th = {
  key: 1,
  class: "section"
}, oh = { class: "section-header" }, sh = { class: "section-label paused" }, nh = { class: "items-list" }, ah = {
  key: 2,
  class: "section"
}, lh = { class: "section-header" }, ih = { class: "section-label" }, rh = { class: "items-list" }, dh = {
  key: 3,
  class: "section"
}, ch = { class: "section-header" }, uh = { class: "section-label" }, mh = { class: "items-list" }, vh = {
  key: 4,
  class: "section"
}, fh = { class: "section-header" }, gh = { class: "section-label failed" }, hh = { class: "items-list" }, ph = /* @__PURE__ */ q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: s,
      queuedItems: i,
      completedItems: f,
      failedItems: y,
      pausedItems: h,
      hasItems: v,
      activeCount: r,
      cancelDownload: u,
      retryDownload: b,
      resumeDownload: p,
      resumeAllPaused: z,
      removeItem: I,
      clearCompleted: $
    } = wt(), S = E(!1);
    let k = null;
    Et(
      () => ({
        active: r.value,
        failed: y.value.length,
        paused: h.value.length,
        completed: f.value.length
      }),
      (w, M) => {
        k && (clearTimeout(k), k = null);
        const x = w.active === 0 && w.failed === 0 && w.paused === 0 && w.completed > 0, U = M && (M.active > 0 || M.paused > 0);
        x && U && (k = setTimeout(() => {
          $(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = N(() => {
      var x;
      if (d.items.length === 0) return 0;
      const w = f.value.length, M = ((x = s.value) == null ? void 0 : x.progress) || 0;
      return Math.round((w + M / 100) / d.items.length * 100);
    });
    function P(w) {
      u(w);
    }
    function L(w) {
      return w === 0 ? "" : `${(w / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (w, M) => (o(), _(Le, { to: "body" }, [
      me(v) ? (o(), n("div", {
        key: 0,
        class: ee(["model-download-queue", { minimized: !S.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: M[0] || (M[0] = (x) => S.value = !S.value)
        }, [
          e("div", Gg, [
            M[4] || (M[4] = e("span", { class: "icon" }, "↓", -1)),
            M[5] || (M[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", jg, "(" + l(me(r)) + "/" + l(me(d).items.length) + ")", 1)
          ]),
          e("div", Hg, [
            e("span", Kg, l(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (o(), n("div", Zg, [
          me(s) ? (o(), n("div", eh, [
            M[6] || (M[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            m(it, {
              item: me(s),
              onCancel: M[1] || (M[1] = (x) => P(me(s).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          me(h).length > 0 ? (o(), n("div", th, [
            e("div", oh, [
              e("span", sh, "Paused (" + l(me(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: M[2] || (M[2] = //@ts-ignore
                (...x) => me(z) && me(z)(...x))
              }, "Resume All")
            ]),
            e("div", nh, [
              (o(!0), n(G, null, Z(me(h), (x) => (o(), _(it, {
                key: x.id,
                item: x,
                onResume: (U) => me(p)(x.id),
                onRemove: (U) => me(I)(x.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          me(i).length > 0 ? (o(), n("div", ah, [
            e("div", lh, [
              e("span", ih, "Queued (" + l(me(i).length) + ")", 1)
            ]),
            e("div", rh, [
              (o(!0), n(G, null, Z(me(i), (x) => (o(), _(it, {
                key: x.id,
                item: x,
                onCancel: (U) => P(x.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          me(f).length > 0 ? (o(), n("div", dh, [
            e("div", ch, [
              e("span", uh, "Completed (" + l(me(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: M[3] || (M[3] = //@ts-ignore
                (...x) => me($) && me($)(...x))
              }, "Clear")
            ]),
            e("div", mh, [
              (o(!0), n(G, null, Z(me(f).slice(0, 3), (x) => (o(), _(it, {
                key: x.id,
                item: x,
                onRemove: (U) => me(I)(x.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          me(y).length > 0 ? (o(), n("div", vh, [
            e("div", fh, [
              e("span", gh, "Failed (" + l(me(y).length) + ")", 1)
            ]),
            e("div", hh, [
              (o(!0), n(G, null, Z(me(y), (x) => (o(), _(it, {
                key: x.id,
                item: x,
                onRetry: (U) => me(b)(x.id),
                onRemove: (U) => me(I)(x.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), n("div", qg, [
          e("div", Jg, [
            e("div", {
              class: "progress-fill",
              style: Ze({ width: `${C.value}%` })
            }, null, 4)
          ]),
          me(s) ? (o(), n("div", Yg, [
            e("span", Xg, l(me(s).filename), 1),
            e("span", Qg, l(L(me(s).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), yh = /* @__PURE__ */ J(ph, [["__scopeId", "data-v-60751cfa"]]), wh = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', bh = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', kh = {
  comfy: wh,
  phosphor: bh
}, Tt = "comfy", Kt = "comfygit-theme";
let Ye = null, qt = Tt;
function _h() {
  try {
    const t = localStorage.getItem(Kt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Tt;
}
function Jt(t = Tt) {
  Ye && Ye.remove(), Ye = document.createElement("style"), Ye.id = "comfygit-theme-styles", Ye.setAttribute("data-theme", t), Ye.textContent = kh[t], document.head.appendChild(Ye), document.body.setAttribute("data-comfygit-theme", t), qt = t;
  try {
    localStorage.setItem(Kt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function $h() {
  return qt;
}
function Ch(t) {
  Jt(t);
}
const Rt = document.createElement("link");
Rt.rel = "stylesheet";
Rt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Rt);
const xh = _h();
Jt(xh);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Ch(t);
  },
  getTheme: () => {
    const t = $h();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ne = null, Ie = null, ut = null, rt = null, Pt = null;
const st = E(null);
async function pt() {
  var t;
  if (!((t = ot) != null && t.api)) return null;
  try {
    const d = await ot.api.fetchApi("/v2/comfygit/status");
    d.ok && (st.value = await d.json());
  } catch {
  }
}
function Sh() {
  if (!st.value) return !1;
  const t = st.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || st.value.has_changes;
}
function Ih() {
  Ne && Ne.remove(), Ne = document.createElement("div"), Ne.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ne.appendChild(t), Ne.addEventListener("click", (i) => {
    i.target === Ne && Ct();
  });
  const d = (i) => {
    i.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), zt({
    render: () => Mt(Cg, {
      onClose: Ct,
      onStatusUpdate: (i) => {
        st.value = i, mt();
      }
    })
  }).mount(t), document.body.appendChild(Ne);
}
function Ct() {
  Ne && (Ne.remove(), Ne = null);
}
function Eh(t) {
  dt(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${d.bottom + 8}px`, Ie.style.right = `${window.innerWidth - d.right}px`, Ie.style.zIndex = "10001";
  const s = (f) => {
    Ie && !Ie.contains(f.target) && f.target !== t && (dt(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (f) => {
    f.key === "Escape" && (dt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), ut = zt({
    render: () => Mt(Ht, {
      status: st.value,
      onClose: dt,
      onCommitted: () => {
        dt(), pt().then(mt);
      }
    })
  }), ut.mount(Ie), document.body.appendChild(Ie);
}
function dt() {
  ut && (ut.unmount(), ut = null), Ie && (Ie.remove(), Ie = null);
}
function zh() {
  rt || (rt = document.createElement("div"), rt.className = "comfygit-download-queue-root", Pt = zt({
    render: () => Mt(yh)
  }), Pt.mount(rt), document.body.appendChild(rt), console.log("[ComfyGit] Model download queue mounted"));
}
let Fe = null;
function mt() {
  if (!Fe) return;
  const t = Fe.querySelector(".commit-indicator");
  t && (t.style.display = Sh() ? "block" : "none");
}
const Yt = document.createElement("style");
Yt.textContent = `
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
document.head.appendChild(Yt);
ot.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Ih, Fe = document.createElement("button"), Fe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Fe.innerHTML = 'Commit <span class="commit-indicator"></span>', Fe.title = "Quick Commit", Fe.onclick = () => Eh(Fe), t.appendChild(d), t.appendChild(Fe), (y = (f = ot.menu) == null ? void 0 : f.settingsGroup) != null && y.element && (ot.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), zh();
    const { loadPendingDownloads: s } = wt();
    s(), await pt(), mt(), setInterval(async () => {
      await pt(), mt();
    }, 3e4);
    const i = ot.api;
    if (i) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((u) => {
          (u.startsWith("workflow:") || u.startsWith("Comfy.OpenWorkflowsPaths:") || u.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(u);
        }), window.location.reload();
      }, v = function() {
        const u = document.createElement("div");
        u.style.cssText = `
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
        b.textContent = "Workflows updated - refresh required", u.appendChild(b);
        const p = document.createElement("button");
        p.textContent = "Refresh", p.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => h(), u.appendChild(p);
        const z = document.createElement("button");
        z.textContent = "×", z.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, z.onmouseover = () => z.style.opacity = "1", z.onmouseout = () => z.style.opacity = "0.6", z.onclick = () => u.remove(), u.appendChild(z), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      i.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: b, workflow_name: p } = u.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${p}`), await pt(), mt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let r = !1;
      i.addEventListener("status", async (u) => {
        const b = u.detail != null;
        b && !r && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : v()), r = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
