import { app as mt } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as s, openBlock as o, createCommentVNode as d, createElementVNode as e, renderSlot as le, createBlock as _, resolveDynamicComponent as yt, normalizeClass as J, withCtx as n, toDisplayString as l, createVNode as c, createTextVNode as v, computed as D, Fragment as H, renderList as Z, normalizeStyle as ot, ref as x, onMounted as ge, watch as Et, Teleport as ze, withModifiers as ve, Transition as Yt, withKeys as Te, onUnmounted as Xt, resolveComponent as Zt, createSlots as zt, TransitionGroup as Jt, createApp as Mt, h as Lt } from "vue";
const Qt = { class: "panel-layout" }, eo = {
  key: 0,
  class: "panel-layout-header"
}, to = {
  key: 1,
  class: "panel-layout-search"
}, oo = { class: "panel-layout-content" }, so = {
  key: 2,
  class: "panel-layout-footer"
}, ao = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (r, a) => (o(), s("div", Qt, [
      r.$slots.header ? (o(), s("div", eo, [
        le(r.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      r.$slots.search ? (o(), s("div", to, [
        le(r.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", oo, [
        le(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (o(), s("div", so, [
        le(r.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Y = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [i, m] of r)
    a[i] = m;
  return a;
}, ye = /* @__PURE__ */ Y(ao, [["__scopeId", "data-v-21565df9"]]), no = {
  key: 0,
  class: "panel-title-prefix"
}, lo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, io = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, a) => (o(), _(yt(`h${t.level}`), {
      class: J(["panel-title", t.variant])
    }, {
      default: n(() => [
        t.showPrefix ? (o(), s("span", no, l(t.prefix), 1)) : (o(), s("span", lo)),
        le(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ro = /* @__PURE__ */ Y(io, [["__scopeId", "data-v-c3875efc"]]), co = ["title"], uo = ["width", "height"], mo = /* @__PURE__ */ q({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: a[0] || (a[0] = (i) => r.$emit("click"))
    }, [
      (o(), s("svg", {
        width: t.size,
        height: t.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...a[1] || (a[1] = [
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
      ])], 8, uo))
    ], 8, co));
  }
}), Rt = /* @__PURE__ */ Y(mo, [["__scopeId", "data-v-6fc7f16d"]]), vo = { class: "header-left" }, fo = {
  key: 0,
  class: "header-actions"
}, go = /* @__PURE__ */ q({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (r, a) => (o(), s("div", {
      class: J(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", vo, [
        c(ro, { "show-prefix": t.showPrefix }, {
          default: n(() => [
            v(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), _(Rt, {
          key: 0,
          onClick: a[0] || (a[0] = (i) => r.$emit("info-click"))
        })) : d("", !0)
      ]),
      r.$slots.actions ? (o(), s("div", fo, [
        le(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), we = /* @__PURE__ */ Y(go, [["__scopeId", "data-v-55a62cd6"]]), ho = {
  key: 0,
  class: "section-title-count"
}, po = {
  key: 1,
  class: "section-title-icon"
}, yo = /* @__PURE__ */ q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (o(), _(yt(`h${t.level}`), {
      class: J(["section-title", { clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (i) => t.clickable && r.$emit("click"))
    }, {
      default: n(() => [
        le(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", ho, "(" + l(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (o(), s("span", po, l(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _e = /* @__PURE__ */ Y(yo, [["__scopeId", "data-v-559361eb"]]), wo = { class: "status-grid" }, bo = { class: "status-grid__column" }, ko = { class: "status-grid__title" }, _o = { class: "status-grid__column status-grid__column--right" }, $o = { class: "status-grid__title" }, Co = /* @__PURE__ */ q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, a) => (o(), s("div", wo, [
      e("div", bo, [
        e("h4", ko, l(t.leftTitle), 1),
        le(r.$slots, "left", {}, void 0, !0)
      ]),
      e("div", _o, [
        e("h4", $o, l(t.rightTitle), 1),
        le(r.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), xo = /* @__PURE__ */ Y(Co, [["__scopeId", "data-v-fe556068"]]), So = {
  key: 0,
  class: "status-item__icon"
}, Io = {
  key: 1,
  class: "status-item__count"
}, Eo = { class: "status-item__label" }, zo = /* @__PURE__ */ q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, a = D(() => `status-item--${r.variant}`);
    return (i, m) => (o(), s("div", {
      class: J(["status-item", a.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", So, l(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (o(), s("span", Io, l(t.count), 1)) : d("", !0),
      e("span", Eo, l(t.label), 1)
    ], 2));
  }
}), Ue = /* @__PURE__ */ Y(zo, [["__scopeId", "data-v-6f929183"]]), Mo = { class: "issue-card__header" }, Lo = { class: "issue-card__icon" }, Ro = { class: "issue-card__title" }, Uo = {
  key: 0,
  class: "issue-card__content"
}, No = {
  key: 0,
  class: "issue-card__description"
}, To = {
  key: 1,
  class: "issue-card__items"
}, Bo = {
  key: 2,
  class: "issue-card__actions"
}, Do = /* @__PURE__ */ q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, a = D(() => `issue-card--${r.severity}`);
    return (i, m) => (o(), s("div", {
      class: J(["issue-card", a.value])
    }, [
      e("div", Mo, [
        e("span", Lo, l(t.icon), 1),
        e("h4", Ro, l(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), s("div", Uo, [
        t.description ? (o(), s("p", No, l(t.description), 1)) : d("", !0),
        le(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (o(), s("div", To, [
        (o(!0), s(H, null, Z(t.items, (p, g) => (o(), s("div", {
          key: g,
          class: "issue-card__item"
        }, [
          m[0] || (m[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(p), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (o(), s("div", Bo, [
        le(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ Y(Do, [["__scopeId", "data-v-df6aa348"]]), Oo = ["type", "disabled"], Vo = {
  key: 0,
  class: "spinner"
}, Ao = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: J(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: a[0] || (a[0] = (i) => r.$emit("click", i))
    }, [
      t.loading ? (o(), s("span", Vo)) : d("", !0),
      t.loading ? d("", !0) : le(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Oo));
  }
}), P = /* @__PURE__ */ Y(Ao, [["__scopeId", "data-v-772abe47"]]), Fo = { class: "empty-state" }, Wo = {
  key: 0,
  class: "empty-icon"
}, Po = { class: "empty-message" }, Ho = /* @__PURE__ */ q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, a) => (o(), s("div", Fo, [
      t.icon ? (o(), s("div", Wo, l(t.icon), 1)) : d("", !0),
      e("p", Po, l(t.message), 1),
      t.actionLabel ? (o(), _(P, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (i) => r.$emit("action"))
      }, {
        default: n(() => [
          v(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ Y(Ho, [["__scopeId", "data-v-4466284f"]]), Go = { class: "branch-indicator" }, jo = { class: "branch-indicator__info" }, Ko = { class: "branch-indicator__label" }, qo = { class: "branch-indicator__name" }, Yo = {
  key: 0,
  class: "branch-indicator__remote"
}, Xo = {
  key: 0,
  class: "branch-indicator__status"
}, Zo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Jo = {
  key: 1,
  class: "branch-indicator__behind"
}, Qo = {
  key: 1,
  class: "branch-indicator__actions"
}, es = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("div", Go, [
      e("div", jo, [
        e("span", Ko, l(t.label), 1),
        e("span", qo, l(t.branchName), 1),
        t.remote ? (o(), s("span", Yo, "@" + l(t.remote), 1)) : d("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), s("div", Xo, [
        t.commitsAhead ? (o(), s("span", Zo, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : d("", !0),
        t.commitsBehind ? (o(), s("span", Jo, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      r.$slots.actions ? (o(), s("div", Qo, [
        le(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ts = /* @__PURE__ */ Y(es, [["__scopeId", "data-v-cb8dd50e"]]), os = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, a) => (o(), s("span", {
      class: J(["detail-label"]),
      style: ot({ minWidth: t.minWidth })
    }, [
      le(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), gt = /* @__PURE__ */ Y(os, [["__scopeId", "data-v-75e9eeb8"]]), ss = /* @__PURE__ */ q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (o(), s("span", {
      class: J(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      le(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ Y(ss, [["__scopeId", "data-v-2f186e4c"]]), as = { class: "detail-row" }, ns = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("div", as, [
      c(gt, { "min-width": t.labelMinWidth }, {
        default: n(() => [
          v(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), _(ht, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: n(() => [
          v(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : le(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), se = /* @__PURE__ */ Y(ns, [["__scopeId", "data-v-ef15664a"]]), ls = { class: "modal-header" }, is = { class: "modal-body" }, rs = { class: "status-section" }, ds = {
  key: 0,
  class: "status-section"
}, cs = {
  key: 0,
  class: "workflow-group"
}, us = { class: "workflow-group-header" }, ms = { class: "workflow-group-title" }, vs = { class: "workflow-list" }, fs = { class: "workflow-name" }, gs = { class: "workflow-issue" }, hs = {
  key: 1,
  class: "workflow-group"
}, ps = { class: "workflow-group-header" }, ys = { class: "workflow-group-title" }, ws = { class: "workflow-list" }, bs = { class: "workflow-name" }, ks = { class: "workflow-issue" }, _s = {
  key: 2,
  class: "workflow-group"
}, $s = { class: "workflow-group-header" }, Cs = { class: "workflow-group-title" }, xs = { class: "workflow-list" }, Ss = { class: "workflow-name" }, Is = {
  key: 3,
  class: "workflow-group"
}, Es = { class: "workflow-group-header" }, zs = { class: "workflow-group-title" }, Ms = { class: "workflow-list" }, Ls = { class: "workflow-name" }, Rs = {
  key: 4,
  class: "workflow-group"
}, Us = { class: "workflow-group-header" }, Ns = { class: "workflow-group-title" }, Ts = { class: "workflow-list" }, Bs = { class: "workflow-name" }, Ds = {
  key: 5,
  class: "workflow-group"
}, Os = { class: "workflow-group-title" }, Vs = { class: "expand-icon" }, As = {
  key: 0,
  class: "workflow-list"
}, Fs = { class: "workflow-name" }, Ws = {
  key: 1,
  class: "status-section"
}, Ps = {
  key: 0,
  class: "change-group"
}, Hs = { class: "change-group-header" }, Gs = { class: "change-group-title" }, js = { class: "change-list" }, Ks = { class: "node-name" }, qs = {
  key: 0,
  class: "dev-badge"
}, Ys = {
  key: 1,
  class: "change-group"
}, Xs = { class: "change-group-header" }, Zs = { class: "change-group-title" }, Js = { class: "change-list" }, Qs = { class: "node-name" }, ea = {
  key: 0,
  class: "dev-badge"
}, ta = {
  key: 2,
  class: "change-group"
}, oa = { class: "change-list" }, sa = { class: "change-item" }, aa = { class: "node-name" }, na = {
  key: 3,
  class: "change-group"
}, la = {
  key: 2,
  class: "status-section"
}, ia = {
  key: 0,
  class: "drift-item"
}, ra = { class: "drift-list" }, da = {
  key: 0,
  class: "drift-list-more"
}, ca = {
  key: 1,
  class: "drift-item"
}, ua = { class: "drift-list" }, ma = {
  key: 0,
  class: "drift-list-more"
}, va = {
  key: 2,
  class: "drift-item"
}, fa = {
  key: 3,
  class: "drift-item"
}, ga = {
  key: 3,
  class: "status-section"
}, ha = { class: "info-box" }, pa = { class: "drift-list" }, ya = {
  key: 0,
  class: "drift-list-more"
}, wa = {
  key: 4,
  class: "status-section"
}, ba = { class: "warning-box" }, ka = {
  key: 5,
  class: "empty-state-inline"
}, _a = { class: "modal-actions" }, $a = /* @__PURE__ */ q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(t) {
    const r = t, a = x(!1);
    ge(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), Et(() => r.show, (y, w) => {
      console.log("StatusDetailModal show prop changed from", w, "to", y);
    }, { immediate: !0 });
    const i = D(() => {
      var y, w, E;
      return ((E = (w = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : w.analyzed) == null ? void 0 : E.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), m = D(() => {
      var y, w, E;
      return ((E = (w = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : w.analyzed) == null ? void 0 : E.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), p = D(() => {
      var y, w, E;
      return ((E = (w = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : w.synced) == null ? void 0 : E.filter((C) => {
        var M, T, W;
        const z = (W = (T = (M = r.status) == null ? void 0 : M.workflows) == null ? void 0 : T.analyzed) == null ? void 0 : W.find((B) => B.name === C);
        return !z || z.status !== "broken";
      })) || [];
    }), g = D(() => {
      var y, w, E, C, z;
      return (y = r.status) != null && y.workflows ? (((w = r.status.workflows.new) == null ? void 0 : w.length) ?? 0) > 0 || (((E = r.status.workflows.modified) == null ? void 0 : E.length) ?? 0) > 0 || (((C = r.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((z = r.status.workflows.synced) == null ? void 0 : z.length) ?? 0) > 0 : !1;
    }), h = D(() => {
      var w, E, C;
      const y = (w = r.status) == null ? void 0 : w.git_changes;
      return y ? (((E = y.nodes_added) == null ? void 0 : E.length) ?? 0) > 0 || (((C = y.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || y.workflow_changes || y.has_other_changes : !1;
    }), u = D(() => {
      var y, w, E, C, z, M;
      return !g.value && !h.value && ((w = (y = r.status) == null ? void 0 : y.comparison) == null ? void 0 : w.is_synced) && (((E = r.status) == null ? void 0 : E.missing_models_count) ?? 0) === 0 && (((M = (z = (C = r.status) == null ? void 0 : C.comparison) == null ? void 0 : z.disabled_nodes) == null ? void 0 : M.length) ?? 0) === 0;
    }), f = D(() => {
      var w, E;
      const y = (E = (w = r.status) == null ? void 0 : w.git_changes) == null ? void 0 : E.workflow_changes;
      return y ? typeof y == "number" ? y : Object.keys(y).length : 0;
    });
    function k(y) {
      return typeof y == "string" ? y : y.name;
    }
    function b(y) {
      return typeof y == "object" && y.is_development === !0;
    }
    return (y, w) => {
      var E, C, z, M, T, W, B, A, R, O, L, U, N, K, j, I, V, te, $e, xe, oe, he;
      return o(), _(ze, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: w[4] || (w[4] = (Q) => y.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: w[3] || (w[3] = ve(() => {
            }, ["stop"]))
          }, [
            e("div", ls, [
              w[5] || (w[5] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: w[0] || (w[0] = (Q) => y.$emit("close"))
              }, "✕")
            ]),
            e("div", is, [
              e("div", rs, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[6] || (w[6] = [
                    v("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                c(se, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              g.value ? (o(), s("div", ds, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[7] || (w[7] = [
                    v("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                i.value.length ? (o(), s("div", cs, [
                  e("div", us, [
                    w[8] || (w[8] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ms, "BROKEN (COMMITTED) (" + l(i.value.length) + ")", 1)
                  ]),
                  e("div", vs, [
                    (o(!0), s(H, null, Z(i.value, (Q) => (o(), s("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", fs, l(Q.name), 1),
                      e("span", gs, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                m.value.length ? (o(), s("div", hs, [
                  e("div", ps, [
                    w[9] || (w[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ys, "BROKEN (UNCOMMITTED) (" + l(m.value.length) + ")", 1)
                  ]),
                  e("div", ws, [
                    (o(!0), s(H, null, Z(m.value, (Q) => (o(), s("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", bs, l(Q.name), 1),
                      e("span", ks, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (C = (E = t.status.workflows) == null ? void 0 : E.new) != null && C.length ? (o(), s("div", _s, [
                  e("div", $s, [
                    w[10] || (w[10] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Cs, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", xs, [
                    (o(!0), s(H, null, Z(t.status.workflows.new, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ss, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (M = (z = t.status.workflows) == null ? void 0 : z.modified) != null && M.length ? (o(), s("div", Is, [
                  e("div", Es, [
                    w[11] || (w[11] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", zs, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ms, [
                    (o(!0), s(H, null, Z(t.status.workflows.modified, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ls, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (W = (T = t.status.workflows) == null ? void 0 : T.deleted) != null && W.length ? (o(), s("div", Rs, [
                  e("div", Us, [
                    w[12] || (w[12] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Ns, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ts, [
                    (o(!0), s(H, null, Z(t.status.workflows.deleted, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Bs, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                p.value.length ? (o(), s("div", Ds, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: w[1] || (w[1] = (Q) => a.value = !a.value)
                  }, [
                    w[13] || (w[13] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Os, "SYNCED (" + l(p.value.length) + ")", 1),
                    e("span", Vs, l(a.value ? "▼" : "▶"), 1)
                  ]),
                  a.value ? (o(), s("div", As, [
                    (o(!0), s(H, null, Z(p.value, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Fs, l(Q), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              h.value ? (o(), s("div", Ws, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[14] || (w[14] = [
                    v("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (A = (B = t.status.git_changes) == null ? void 0 : B.nodes_added) != null && A.length ? (o(), s("div", Ps, [
                  e("div", Hs, [
                    w[15] || (w[15] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Gs, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", js, [
                    (o(!0), s(H, null, Z(t.status.git_changes.nodes_added, (Q) => (o(), s("div", {
                      key: k(Q),
                      class: "change-item"
                    }, [
                      e("span", Ks, l(k(Q)), 1),
                      b(Q) ? (o(), s("span", qs, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (O = (R = t.status.git_changes) == null ? void 0 : R.nodes_removed) != null && O.length ? (o(), s("div", Ys, [
                  e("div", Xs, [
                    w[16] || (w[16] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Zs, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Js, [
                    (o(!0), s(H, null, Z(t.status.git_changes.nodes_removed, (Q) => (o(), s("div", {
                      key: k(Q),
                      class: "change-item"
                    }, [
                      e("span", Qs, l(k(Q)), 1),
                      b(Q) ? (o(), s("span", ea, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (L = t.status.git_changes) != null && L.workflow_changes ? (o(), s("div", ta, [
                  w[17] || (w[17] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", oa, [
                    e("div", sa, [
                      e("span", aa, l(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (U = t.status.git_changes) != null && U.has_other_changes ? (o(), s("div", na, [...w[18] || (w[18] = [
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
              (N = t.status.comparison) != null && N.is_synced ? d("", !0) : (o(), s("div", la, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[19] || (w[19] = [
                    v("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                w[20] || (w[20] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (j = (K = t.status.comparison) == null ? void 0 : K.missing_nodes) != null && j.length ? (o(), s("div", ia, [
                  c(se, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ra, [
                    (o(!0), s(H, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (Q) => (o(), s("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", da, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (V = (I = t.status.comparison) == null ? void 0 : I.extra_nodes) != null && V.length ? (o(), s("div", ca, [
                  c(se, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", ua, [
                    (o(!0), s(H, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (Q) => (o(), s("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", ma, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ($e = (te = t.status.comparison) == null ? void 0 : te.version_mismatches) != null && $e.length ? (o(), s("div", va, [
                  c(se, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (xe = t.status.comparison) != null && xe.packages_in_sync ? d("", !0) : (o(), s("div", fa, [
                  c(se, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (he = (oe = t.status.comparison) == null ? void 0 : oe.disabled_nodes) != null && he.length ? (o(), s("div", ga, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[21] || (w[21] = [
                    v("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ha, [
                  w[22] || (w[22] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", pa, [
                  (o(!0), s(H, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (Q) => (o(), s("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + l(Q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", ya, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", wa, [
                c(_e, { level: "4" }, {
                  default: n(() => [...w[23] || (w[23] = [
                    v("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", ba, [
                  w[24] || (w[24] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                w[25] || (w[25] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              u.value ? (o(), s("div", ka, [...w[26] || (w[26] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", _a, [
              c(P, {
                variant: "secondary",
                onClick: w[2] || (w[2] = (Q) => y.$emit("close"))
              }, {
                default: n(() => [...w[27] || (w[27] = [
                  v(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), $t = /* @__PURE__ */ Y($a, [["__scopeId", "data-v-c2264f66"]]), Ca = { class: "health-section-header" }, xa = { style: { "margin-top": "var(--cg-space-1)" } }, Sa = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Ia = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: r }) {
    const a = t, i = x(!1), m = x(!1);
    ge(() => {
      console.log("StatusSection mounted with status:", a.status), console.log("StatusDetailModal component imported:", $t);
    });
    function p() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function g() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    const h = D(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), u = D(() => {
      const M = a.status.git_changes;
      return M.nodes_added.length > 0 || M.nodes_removed.length > 0 || M.workflow_changes || M.has_other_changes;
    }), f = D(() => h.value || u.value), k = D(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), b = D(() => a.status.git_changes.has_other_changes), y = D(() => {
      var M;
      return ((M = a.status.workflows.analyzed) == null ? void 0 : M.filter(
        (T) => T.status === "broken" && T.sync_state === "synced"
      )) || [];
    }), w = D(() => {
      var M;
      return ((M = a.status.workflows.analyzed) == null ? void 0 : M.filter(
        (T) => T.status === "broken" && T.sync_state !== "synced"
      )) || [];
    }), E = D(() => y.value.length > 0 || w.value.length > 0), C = D(() => E.value || a.status.missing_models_count > 0 || f.value || !a.status.comparison.is_synced), z = D(() => {
      const M = [];
      return a.status.workflows.new.length > 0 && M.push(`${a.status.workflows.new.length} new workflow${a.status.workflows.new.length === 1 ? "" : "s"}`), a.status.workflows.modified.length > 0 && M.push(`${a.status.workflows.modified.length} modified workflow${a.status.workflows.modified.length === 1 ? "" : "s"}`), a.status.workflows.deleted.length > 0 && M.push(`${a.status.workflows.deleted.length} deleted workflow${a.status.workflows.deleted.length === 1 ? "" : "s"}`), a.status.git_changes.nodes_added.length > 0 && M.push(`${a.status.git_changes.nodes_added.length} node${a.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), a.status.git_changes.nodes_removed.length > 0 && M.push(`${a.status.git_changes.nodes_removed.length} node${a.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${M.length > 0 ? M.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (M, T) => (o(), s(H, null, [
      c(ye, null, {
        header: n(() => [
          c(we, { title: "STATUS" })
        ]),
        content: n(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[0] || (T[0] = (W) => m.value = !0),
            onMouseleave: T[1] || (T[1] = (W) => m.value = !1)
          }, [
            e("div", Ca, [
              c(_e, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: n(() => [...T[11] || (T[11] = [
                  v(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              c(Yt, { name: "fade" }, {
                default: n(() => [
                  m.value ? (o(), _(P, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: n(() => [...T[12] || (T[12] = [
                      v(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            c(xo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: n(() => [
                t.status.workflows.new.length ? (o(), _(Ue, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (o(), _(Ue, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (o(), _(Ue, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                c(Ue, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: h.value
                }, null, 8, ["count", "separator"])
              ]),
              right: n(() => [
                t.status.git_changes.nodes_added.length ? (o(), _(Ue, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), _(Ue, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (o(), _(Ue, {
                  key: 2,
                  icon: "●",
                  count: k.value,
                  label: k.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                b.value ? (o(), _(Ue, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                u.value ? d("", !0) : (o(), _(Ue, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", xa, [
            c(ts, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: n(() => [
                c(P, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[2] || (T[2] = (W) => M.$emit("switch-branch"))
                }, {
                  default: n(() => [...T[13] || (T[13] = [
                    v(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), _(He, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: n(() => [
              c(P, {
                variant: "primary",
                size: "sm",
                onClick: T[3] || (T[3] = (W) => M.$emit("create-branch"))
              }, {
                default: n(() => [...T[14] || (T[14] = [
                  v(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          C.value ? (o(), s("div", Sa, [
            c(_e, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: n(() => [...T[15] || (T[15] = [
                v(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            y.value.length > 0 ? (o(), _(He, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${y.value.length} committed workflow${y.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: y.value.map((W) => `${W.name} — ${W.issue_summary}`)
            }, {
              actions: n(() => [
                c(P, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[4] || (T[4] = (W) => M.$emit("view-workflows"))
                }, {
                  default: n(() => [...T[16] || (T[16] = [
                    v(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : d("", !0),
            w.value.length > 0 ? (o(), _(He, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: w.value.map((W) => `${W.name} — ${W.issue_summary}`)
            }, {
              actions: n(() => [
                c(P, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[5] || (T[5] = (W) => M.$emit("view-workflows"))
                }, {
                  default: n(() => [...T[17] || (T[17] = [
                    v(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : d("", !0),
            t.status.missing_models_count > 0 && !E.value ? (o(), _(He, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: n(() => [
                c(P, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (W) => M.$emit("view-workflows"))
                }, {
                  default: n(() => [...T[18] || (T[18] = [
                    v(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : d("", !0),
            f.value ? (o(), _(He, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: z.value
            }, {
              actions: n(() => [
                c(P, {
                  variant: "secondary",
                  size: "sm",
                  onClick: g
                }, {
                  default: n(() => [...T[19] || (T[19] = [
                    v(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                c(P, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (W) => M.$emit("commit-changes"))
                }, {
                  default: n(() => [...T[20] || (T[20] = [
                    v(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : d("", !0),
            t.status.comparison.is_synced ? d("", !0) : (o(), _(He, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: n(() => [
                c(P, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[8] || (T[8] = (W) => M.$emit("view-debug"))
                }, {
                  default: n(() => [...T[21] || (T[21] = [
                    v(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                c(P, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[9] || (T[9] = (W) => M.$emit("sync-environment"))
                }, {
                  default: n(() => [...T[22] || (T[22] = [
                    v(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : d("", !0),
          !C.value && !u.value ? (o(), _(Me, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : d("", !0)
        ]),
        _: 1
      }),
      c($t, {
        show: i.value,
        status: t.status,
        onClose: T[10] || (T[10] = (W) => i.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Ea = /* @__PURE__ */ Y(Ia, [["__scopeId", "data-v-aabebf39"]]), za = ["type", "value", "placeholder", "disabled"], Ma = /* @__PURE__ */ q({
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
  setup(t, { expose: r, emit: a }) {
    const i = t, m = a, p = x(null);
    function g(h) {
      const u = h.target.value;
      m("update:modelValue", u);
    }
    return ge(() => {
      i.autoFocus && p.value && p.value.focus();
    }), r({
      focus: () => {
        var h;
        return (h = p.value) == null ? void 0 : h.focus();
      },
      blur: () => {
        var h;
        return (h = p.value) == null ? void 0 : h.blur();
      }
    }), (h, u) => (o(), s("input", {
      ref_key: "inputRef",
      ref: p,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: J(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: g,
      onKeyup: [
        u[0] || (u[0] = Te((f) => h.$emit("enter"), ["enter"])),
        u[1] || (u[1] = Te((f) => h.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (f) => h.$emit("focus")),
      onBlur: u[3] || (u[3] = (f) => h.$emit("blur"))
    }, null, 42, za));
  }
}), tt = /* @__PURE__ */ Y(Ma, [["__scopeId", "data-v-0380d08f"]]), La = { class: "branch-create-form" }, Ra = { class: "form-actions" }, Ua = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const a = r, i = x(""), m = D(() => {
      const h = i.value.trim();
      return h.length > 0 && !h.startsWith("-") && !h.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(h);
    });
    function p() {
      m.value && (a("create", i.value.trim()), i.value = "");
    }
    function g() {
      i.value = "", a("cancel");
    }
    return (h, u) => (o(), s("div", La, [
      c(tt, {
        modelValue: i.value,
        "onUpdate:modelValue": u[0] || (u[0] = (f) => i.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: g
      }, null, 8, ["modelValue"]),
      e("div", Ra, [
        c(P, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: p
        }, {
          default: n(() => [...u[1] || (u[1] = [
            v(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        c(P, {
          variant: "secondary",
          size: "sm",
          onClick: g
        }, {
          default: n(() => [...u[2] || (u[2] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Na = /* @__PURE__ */ Y(Ua, [["__scopeId", "data-v-7c500394"]]), Ta = { class: "branch-list-item__indicator" }, Ba = { class: "branch-list-item__name" }, Da = {
  key: 0,
  class: "branch-list-item__actions"
}, Oa = {
  key: 0,
  class: "branch-list-item__current-label"
}, Va = /* @__PURE__ */ q({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (o(), s("div", {
      class: J(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (i) => t.clickable && r.$emit("click"))
    }, [
      e("span", Ta, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Ba, l(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (o(), s("div", Da, [
        le(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", Oa, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Aa = /* @__PURE__ */ Y(Va, [["__scopeId", "data-v-c6581a24"]]), Fa = {
  key: 2,
  class: "branch-list"
}, Wa = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: r }) {
    const a = r, i = x(!1);
    function m(g) {
      a("create", g), p();
    }
    function p() {
      i.value = !1;
    }
    return (g, h) => (o(), _(ye, null, {
      header: n(() => [
        c(we, { title: "BRANCHES" }, {
          actions: n(() => [
            c(P, {
              variant: "ghost",
              size: "sm",
              onClick: h[0] || (h[0] = (u) => i.value = !0),
              title: "Create new branch"
            }, {
              default: n(() => [...h[1] || (h[1] = [
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
      content: n(() => [
        i.value ? (o(), _(Na, {
          key: 0,
          onCreate: m,
          onCancel: p
        })) : d("", !0),
        t.branches.length === 0 ? (o(), _(Me, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", Fa, [
          (o(!0), s(H, null, Z(t.branches, (u) => (o(), _(Aa, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: n(() => [
              u.is_current ? d("", !0) : (o(), _(P, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (f) => g.$emit("switch", u.name)
              }, {
                default: n(() => [...h[2] || (h[2] = [
                  v(" Switch ", -1)
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
}), Pa = /* @__PURE__ */ Y(Wa, [["__scopeId", "data-v-763d6ec4"]]), Ha = { class: "commit-list" }, Ga = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (r, a) => (o(), s("div", Ha, [
      le(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ja = /* @__PURE__ */ Y(Ga, [["__scopeId", "data-v-8c5ee761"]]), Ka = { class: "commit-hash" }, qa = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, a = D(() => r.hash.slice(0, r.length));
    return (i, m) => (o(), s("span", Ka, l(a.value), 1));
  }
}), Ut = /* @__PURE__ */ Y(qa, [["__scopeId", "data-v-7c333cc6"]]), Ya = { class: "commit-message" }, Xa = { class: "commit-date" }, Za = /* @__PURE__ */ q({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, i = r;
    function m() {
      a.clickable && i("click");
    }
    return (p, g) => (o(), s("div", {
      class: J(["commit-item", { clickable: t.clickable }]),
      onClick: m
    }, [
      c(Ut, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Ya, l(t.message), 1),
      e("span", Xa, l(t.relativeDate), 1),
      p.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: g[0] || (g[0] = ve(() => {
        }, ["stop"]))
      }, [
        le(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ja = /* @__PURE__ */ Y(Za, [["__scopeId", "data-v-dd7c621b"]]), Qa = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, a) => (o(), _(ye, null, {
      header: n(() => [
        c(we, { title: "HISTORY" })
      ]),
      content: n(() => [
        t.commits.length === 0 ? (o(), _(Me, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), _(ja, { key: 1 }, {
          default: n(() => [
            (o(!0), s(H, null, Z(t.commits, (i) => (o(), _(Ja, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (m) => r.$emit("select", i)
            }, {
              actions: n(() => [
                c(P, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (m) => r.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: n(() => [...a[0] || (a[0] = [
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
}), en = /* @__PURE__ */ Y(Qa, [["__scopeId", "data-v-981c3c64"]]), Ct = [
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
], tn = {
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
}, Nt = [
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
], on = [
  ...Nt,
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
], sn = [
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
], de = {
  // Environment Management
  getEnvironments: async () => (await re(300), [
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
    await re(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, a) => {
    await re(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (t) => {
    await re(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await re(400), Ct),
  getWorkflowDetails: async (t) => (await re(300), tn[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await re(800), {
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
  installWorkflowDeps: async (t, r, a) => {
    await re(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${a}`);
  },
  setModelImportance: async (t, r, a) => {
    await re(200), console.log(`[MOCK] Setting ${r} importance to ${a} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await re(350), Nt),
  getWorkspaceModels: async () => (await re(400), on),
  updateModelSource: async (t, r) => {
    await re(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await re(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await re(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await re(350);
    const t = lt.filter((a) => a.installed), r = lt.filter((a) => !a.installed);
    return {
      nodes: lt,
      total_count: lt.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await re(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await re(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await re(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await re(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await re(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await re(250), (t ? it.filter((i) => i.level === t) : it).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await re(300);
    const a = [...it, ...it.map((m) => ({
      ...m,
      name: "comfygit.workspace"
    }))];
    return (t ? a.filter((m) => m.level === t) : a).slice(0, r || 100);
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
  getStatus: async () => (await re(400), {
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
  getCommitHistory: async (t = 10) => (await re(300), sn.slice(0, t)),
  getBranches: async () => (await re(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  // Git Remotes Management
  getRemotes: async () => (await re(300), {
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
    await re(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await re(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, a) => {
    await re(400), console.log(`[MOCK] Updating remote ${t}: ${r}${a ? ` (push: ${a})` : ""}`);
  },
  fetchRemote: async (t) => {
    await re(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await re(300), {
    remote: t,
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
  analyzeWorkflow: async (t) => (await re(600), {
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
  applyResolution: async (t, r, a) => {
    await re(800);
    const i = [], m = [];
    return r.forEach((p, g) => {
      p.action === "install" && p.package_id && i.push(p.package_id);
    }), a.forEach((p, g) => {
      p.action === "download" && p.url ? m.push({
        filename: g,
        url: p.url,
        size: 65e8,
        target_path: p.target_path || `models/${g}`
      }) : p.action === "select" && p.selected_model && console.log(`[MOCK] Selected existing model: ${p.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: i,
      models_to_download: m,
      estimated_time_seconds: i.length * 30 + m.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await re(400);
    const a = [
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
      results: a.slice(0, r),
      total: a.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (t, r = 10) => {
    await re(400);
    const a = [
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
      results: a.slice(0, r),
      total: a.length
    };
  }
};
function re(t) {
  return new Promise((r) => setTimeout(r, t));
}
function rt() {
  return !0;
}
function be() {
  const t = x(!1), r = x(null);
  async function a($, G) {
    var pe;
    if (!((pe = window.app) != null && pe.api))
      throw new Error("ComfyUI API not available");
    const ee = await window.app.api.fetchApi($, G);
    if (!ee.ok) {
      const Re = await ee.json().catch(() => ({}));
      throw new Error(Re.error || Re.message || `Request failed: ${ee.status}`);
    }
    return ee.json();
  }
  async function i() {
    return de.getStatus();
  }
  async function m($, G = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: $, allow_issues: G })
    });
  }
  async function p($ = 10, G = 0) {
    {
      const ee = await de.getCommitHistory($);
      return {
        commits: ee,
        total: ee.length,
        offset: G
      };
    }
  }
  async function g($) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: $ })
    });
  }
  async function h() {
    return de.getBranches();
  }
  async function u($) {
    return a(`/v2/comfygit/commit/${$}`);
  }
  async function f($, G = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: $, force: G })
    });
  }
  async function k($, G = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: $, start_point: G })
    });
  }
  async function b($, G = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: $, force: G })
    });
  }
  async function y() {
    return de.getEnvironments();
  }
  async function w($) {
    return de.switchEnvironment($);
  }
  async function E() {
    return null;
  }
  async function C($, G, ee) {
    return await de.createEnvironment($, G, ee), { status: "success" };
  }
  async function z($) {
    return await de.deleteEnvironment($), { status: "success" };
  }
  async function M() {
    return de.getWorkflows();
  }
  async function T($) {
    return de.getWorkflowDetails($);
  }
  async function W($) {
    return de.resolveWorkflow($);
  }
  async function B($, G, ee) {
    return await de.installWorkflowDeps($, G, ee), { status: "success" };
  }
  async function A($, G, ee) {
    return de.setModelImportance($, G, ee);
  }
  async function R() {
    return de.getEnvironmentModels();
  }
  async function O() {
    return de.getWorkspaceModels();
  }
  async function L($, G) {
    return de.updateModelSource($, G);
  }
  async function U($) {
    return de.deleteModel($);
  }
  async function N($) {
    return await de.downloadModel($), { status: "success" };
  }
  async function K() {
    return de.getConfig();
  }
  async function j($) {
    return de.updateConfig($);
  }
  async function I($, G) {
    return de.getEnvironmentLogs($, G);
  }
  async function V($, G) {
    return de.getWorkspaceLogs($, G);
  }
  async function te() {
    return de.getNodes();
  }
  async function $e($) {
    return await de.installNode($), { status: "success" };
  }
  async function xe($) {
    return await de.updateNode($), { status: "success" };
  }
  async function oe($) {
    return await de.uninstallNode($), { status: "success" };
  }
  async function he() {
    return de.getRemotes();
  }
  async function Q($, G) {
    return await de.addRemote($, G), { status: "success", remote_name: $ };
  }
  async function Le($) {
    return await de.removeRemote($), { status: "success", remote_name: $ };
  }
  async function Ye($, G, ee) {
    return await de.updateRemoteUrl($, G, ee), { status: "success", remote_name: $ };
  }
  async function ce($) {
    return await de.fetchRemote($), { status: "success", remote_name: $ };
  }
  async function Ce($) {
    return de.getRemoteSyncStatus($);
  }
  async function X($ = "skip", G = !0) {
    return await new Promise((ee) => setTimeout(ee, 1500)), {
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
    getStatus: i,
    commit: m,
    getHistory: p,
    exportEnv: g,
    // Git Operations
    getBranches: h,
    getCommitDetail: u,
    checkout: f,
    createBranch: k,
    switchBranch: b,
    // Environment Management
    getEnvironments: y,
    switchEnvironment: w,
    getSwitchProgress: E,
    createEnvironment: C,
    deleteEnvironment: z,
    // Workflow Management
    getWorkflows: M,
    getWorkflowDetails: T,
    resolveWorkflow: W,
    installWorkflowDeps: B,
    setModelImportance: A,
    // Model Management
    getEnvironmentModels: R,
    getWorkspaceModels: O,
    updateModelSource: L,
    deleteModel: U,
    downloadModel: N,
    // Settings
    getConfig: K,
    updateConfig: j,
    // Debug/Logs
    getEnvironmentLogs: I,
    getWorkspaceLogs: V,
    // Node Management
    getNodes: te,
    installNode: $e,
    updateNode: xe,
    uninstallNode: oe,
    // Git Remotes
    getRemotes: he,
    addRemote: Q,
    removeRemote: Le,
    updateRemoteUrl: Ye,
    fetchRemote: ce,
    getRemoteSyncStatus: Ce,
    // Environment Sync
    syncEnvironmentManually: X
  };
}
const an = { class: "base-modal-header" }, nn = {
  key: 0,
  class: "base-modal-title"
}, ln = { class: "base-modal-body" }, rn = {
  key: 0,
  class: "base-modal-loading"
}, dn = {
  key: 1,
  class: "base-modal-error"
}, cn = {
  key: 0,
  class: "base-modal-footer"
}, un = /* @__PURE__ */ q({
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
    const a = t, i = r;
    function m() {
      a.closeOnOverlayClick && i("close");
    }
    function p(g) {
      g.key === "Escape" && i("close");
    }
    return ge(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), Xt(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (g, h) => (o(), _(ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: m
      }, [
        e("div", {
          class: J(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: h[1] || (h[1] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", an, [
            le(g.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", nn, l(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: h[0] || (h[0] = (u) => g.$emit("close"))
            }, [...h[2] || (h[2] = [
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
          e("div", ln, [
            t.loading ? (o(), s("div", rn, "Loading...")) : t.error ? (o(), s("div", dn, l(t.error), 1)) : le(g.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          g.$slots.footer ? (o(), s("div", cn, [
            le(g.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), ct = /* @__PURE__ */ Y(un, [["__scopeId", "data-v-2125a0e6"]]), mn = ["type", "disabled"], vn = {
  key: 0,
  class: "spinner"
}, fn = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: J(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: a[0] || (a[0] = (i) => r.$emit("click", i))
    }, [
      t.loading ? (o(), s("span", vn)) : d("", !0),
      le(r.$slots, "default", {}, void 0, !0)
    ], 10, mn));
  }
}), ne = /* @__PURE__ */ Y(fn, [["__scopeId", "data-v-f3452606"]]), gn = {
  key: 0,
  class: "base-title-count"
}, hn = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, a) => (o(), _(yt(`h${t.level}`), {
      class: J(["base-title", t.variant])
    }, {
      default: n(() => [
        le(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", gn, "(" + l(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qe = /* @__PURE__ */ Y(hn, [["__scopeId", "data-v-5a01561d"]]), pn = ["value", "disabled"], yn = {
  key: 0,
  value: "",
  disabled: ""
}, wn = ["value"], bn = {
  key: 0,
  class: "base-select-error"
}, kn = /* @__PURE__ */ q({
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
    function a(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, m) => (o(), s("div", {
      class: J(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: J(["base-select", { error: !!t.error }]),
        onChange: m[0] || (m[0] = (p) => i.$emit("update:modelValue", p.target.value))
      }, [
        t.placeholder ? (o(), s("option", yn, l(t.placeholder), 1)) : d("", !0),
        (o(!0), s(H, null, Z(t.options, (p) => (o(), s("option", {
          key: r(p),
          value: r(p)
        }, l(a(p)), 9, wn))), 128))
      ], 42, pn),
      t.error ? (o(), s("span", bn, l(t.error), 1)) : d("", !0)
    ], 2));
  }
}), _n = /* @__PURE__ */ Y(kn, [["__scopeId", "data-v-7436d745"]]), $n = { class: "popover-header" }, Cn = { class: "popover-title" }, xn = { class: "popover-content" }, Sn = {
  key: 0,
  class: "popover-actions"
}, In = /* @__PURE__ */ q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, a) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: ot({ maxWidth: t.maxWidth }),
          onClick: a[1] || (a[1] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", $n, [
            e("h4", Cn, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", xn, [
            le(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (o(), s("div", Sn, [
            le(r.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ Y(In, [["__scopeId", "data-v-42815ace"]]), En = { class: "detail-section" }, zn = {
  key: 0,
  class: "empty-message"
}, Mn = { class: "model-header" }, Ln = { class: "model-name" }, Rn = { class: "model-details" }, Un = { class: "model-row" }, Nn = { class: "model-row" }, Tn = { class: "label" }, Bn = {
  key: 0,
  class: "model-row model-row-nodes"
}, Dn = { class: "node-list" }, On = ["onClick"], Vn = {
  key: 1,
  class: "model-row"
}, An = { class: "value" }, Fn = {
  key: 0,
  class: "model-actions"
}, Wn = { class: "detail-section" }, Pn = {
  key: 0,
  class: "empty-message"
}, Hn = { class: "node-name" }, Gn = {
  key: 0,
  class: "node-version"
}, jn = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: r }) {
    const a = t, i = r, { getWorkflowDetails: m, setModelImportance: p, installWorkflowDeps: g } = be(), h = x(null), u = x(!1), f = x(null), k = x(!1), b = x({}), y = x({}), w = x(!1), E = x(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function z(U) {
      switch (U) {
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
    function M(U) {
      switch (U) {
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
    function T(U) {
      if (!U.loaded_by || U.loaded_by.length === 0) return [];
      const N = U.hash || U.filename;
      return E.value.has(N) ? U.loaded_by : U.loaded_by.slice(0, 3);
    }
    function W(U) {
      return E.value.has(U);
    }
    function B(U) {
      E.value.has(U) ? E.value.delete(U) : E.value.add(U), E.value = new Set(E.value);
    }
    async function A() {
      u.value = !0, f.value = null;
      try {
        h.value = await m(a.workflowName);
      } catch (U) {
        f.value = U instanceof Error ? U.message : "Failed to load workflow details";
      } finally {
        u.value = !1;
      }
    }
    function R(U, N) {
      b.value[U] = N, k.value = !0;
    }
    async function O() {
      if (!k.value) {
        i("close");
        return;
      }
      u.value = !0, f.value = null;
      try {
        for (const [U, N] of Object.entries(b.value))
          await p(a.workflowName, U, N);
        i("close");
      } catch (U) {
        f.value = U instanceof Error ? U.message : "Failed to save changes";
      } finally {
        u.value = !1;
      }
    }
    async function L(U) {
      y.value[U] = !0, f.value = null;
      try {
        await g(a.workflowName, !0, !1), await A();
      } catch (N) {
        f.value = N instanceof Error ? N.message : "Failed to install node";
      } finally {
        y.value[U] = !1;
      }
    }
    return ge(A), (U, N) => (o(), s(H, null, [
      c(ct, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: u.value,
        error: f.value || void 0,
        onClose: N[5] || (N[5] = (K) => i("close"))
      }, {
        body: n(() => [
          h.value ? (o(), s(H, { key: 0 }, [
            e("section", En, [
              c(Qe, { variant: "section" }, {
                default: n(() => [
                  v("MODELS USED (" + l(h.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              h.value.models.length === 0 ? (o(), s("div", zn, " No models used in this workflow ")) : d("", !0),
              (o(!0), s(H, null, Z(h.value.models, (K) => (o(), s("div", {
                key: K.hash,
                class: "model-card"
              }, [
                e("div", Mn, [
                  N[7] || (N[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Ln, l(K.filename), 1)
                ]),
                e("div", Rn, [
                  e("div", Un, [
                    N[8] || (N[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: J(["value", z(K.status)])
                    }, l(M(K.status)), 3)
                  ]),
                  e("div", Nn, [
                    e("span", Tn, [
                      N[9] || (N[9] = v(" Importance: ", -1)),
                      c(Rt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: N[0] || (N[0] = (j) => w.value = !0)
                      })
                    ]),
                    c(_n, {
                      "model-value": b.value[K.hash] || K.importance,
                      options: C,
                      "onUpdate:modelValue": (j) => R(K.hash, j)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  K.loaded_by && K.loaded_by.length > 0 ? (o(), s("div", Bn, [
                    N[10] || (N[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Dn, [
                      (o(!0), s(H, null, Z(T(K), (j, I) => (o(), s("div", {
                        key: `${j.node_id}-${I}`,
                        class: "node-reference"
                      }, l(j.node_type) + " (Node #" + l(j.node_id) + ") ", 1))), 128)),
                      K.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (j) => B(K.hash || K.filename)
                      }, l(W(K.hash || K.filename) ? "▼ Show less" : `▶ View all (${K.loaded_by.length})`), 9, On)) : d("", !0)
                    ])
                  ])) : d("", !0),
                  K.size_mb ? (o(), s("div", Vn, [
                    N[11] || (N[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", An, l(K.size_mb) + " MB", 1)
                  ])) : d("", !0)
                ]),
                K.status !== "available" ? (o(), s("div", Fn, [
                  K.status === "downloadable" ? (o(), _(ne, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: N[1] || (N[1] = (j) => i("resolve"))
                  }, {
                    default: n(() => [...N[12] || (N[12] = [
                      v(" Download ", -1)
                    ])]),
                    _: 1
                  })) : K.status === "path_mismatch" ? (o(), _(ne, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[2] || (N[2] = (j) => i("resolve"))
                  }, {
                    default: n(() => [...N[13] || (N[13] = [
                      v(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), _(ne, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[3] || (N[3] = (j) => i("resolve"))
                  }, {
                    default: n(() => [...N[14] || (N[14] = [
                      v(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : d("", !0)
              ]))), 128))
            ]),
            e("section", Wn, [
              c(Qe, { variant: "section" }, {
                default: n(() => [
                  v("NODES USED (" + l(h.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              h.value.nodes.length === 0 ? (o(), s("div", Pn, " No custom nodes used in this workflow ")) : d("", !0),
              (o(!0), s(H, null, Z(h.value.nodes, (K) => (o(), s("div", {
                key: K.name,
                class: "node-item"
              }, [
                e("span", {
                  class: J(["node-status", K.status === "installed" ? "installed" : "missing"])
                }, l(K.status === "installed" ? "✓" : "✕"), 3),
                e("span", Hn, l(K.name), 1),
                K.version ? (o(), s("span", Gn, "v" + l(K.version), 1)) : d("", !0),
                K.status === "missing" ? (o(), _(ne, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: y.value[K.name],
                  onClick: (j) => L(K.name),
                  class: "node-install-btn"
                }, {
                  default: n(() => [...N[15] || (N[15] = [
                    v(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: n(() => [
          c(ne, {
            variant: "secondary",
            onClick: N[4] || (N[4] = (K) => i("close"))
          }, {
            default: n(() => [...N[16] || (N[16] = [
              v(" Close ", -1)
            ])]),
            _: 1
          }),
          k.value ? (o(), _(ne, {
            key: 0,
            variant: "primary",
            onClick: O
          }, {
            default: n(() => [...N[17] || (N[17] = [
              v(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      c(Be, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: N[6] || (N[6] = (K) => w.value = !1)
      }, {
        content: n(() => [...N[18] || (N[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              v(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              v(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              v(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Kn = /* @__PURE__ */ Y(jn, [["__scopeId", "data-v-1325d542"]]);
function qn() {
  const t = x(null), r = x(null), a = x([]), i = x([]), m = x(!1), p = x(null);
  async function g(b, y) {
    var E;
    if (!((E = window.app) != null && E.api))
      throw new Error("ComfyUI API not available");
    const w = await window.app.api.fetchApi(b, y);
    if (!w.ok) {
      const C = await w.json().catch(() => ({})), z = C.error || C.message || `Request failed: ${w.status}`;
      throw new Error(z);
    }
    return w.json();
  }
  async function h(b) {
    m.value = !0, p.value = null;
    try {
      let y;
      return rt() && (y = await de.analyzeWorkflow(b)), t.value = y, y;
    } catch (y) {
      const w = y instanceof Error ? y.message : "Unknown error occurred";
      throw p.value = w, y;
    } finally {
      m.value = !1;
    }
  }
  async function u(b, y, w) {
    m.value = !0, p.value = null;
    try {
      let E;
      return rt() && (E = await de.applyResolution(b, y, w)), r.value = E, E;
    } catch (E) {
      const C = E instanceof Error ? E.message : "Unknown error occurred";
      throw p.value = C, E;
    } finally {
      m.value = !1;
    }
  }
  async function f(b, y = 10) {
    m.value = !0, p.value = null;
    try {
      let w;
      return rt() && (w = await de.searchNodes(b, y)), a.value = w.results, w.results;
    } catch (w) {
      const E = w instanceof Error ? w.message : "Unknown error occurred";
      throw p.value = E, w;
    } finally {
      m.value = !1;
    }
  }
  async function k(b, y = 10) {
    m.value = !0, p.value = null;
    try {
      let w;
      return rt() && (w = await de.searchModels(b, y)), i.value = w.results, w.results;
    } catch (w) {
      const E = w instanceof Error ? w.message : "Unknown error occurred";
      throw p.value = E, w;
    } finally {
      m.value = !1;
    }
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: a,
    modelSearchResults: i,
    isLoading: m,
    error: p,
    // Methods
    analyzeWorkflow: h,
    applyResolution: u,
    searchNodes: f,
    searchModels: k
  };
}
const Yn = { class: "resolution-stepper" }, Xn = { class: "stepper-header" }, Zn = ["onClick"], Jn = {
  key: 0,
  class: "step-icon"
}, Qn = {
  key: 1,
  class: "step-number"
}, el = { class: "step-label" }, tl = {
  key: 0,
  class: "step-connector"
}, ol = { class: "stepper-content" }, sl = /* @__PURE__ */ q({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const a = t, i = r;
    function m(f) {
      var k;
      if ((k = a.stepStats) != null && k[f]) {
        const b = a.stepStats[f];
        return b.total > 0 && b.resolved === b.total;
      }
      return a.completedSteps.includes(f);
    }
    function p(f) {
      var k;
      if ((k = a.stepStats) != null && k[f]) {
        const b = a.stepStats[f];
        return b.resolved > 0 && b.resolved < b.total;
      }
      return !1;
    }
    function g(f) {
      return m(f) ? "state-complete" : p(f) ? "state-partial" : "state-pending";
    }
    function h(f) {
      return !1;
    }
    function u(f) {
      i("step-change", f);
    }
    return (f, k) => (o(), s("div", Yn, [
      e("div", Xn, [
        (o(!0), s(H, null, Z(t.steps, (b, y) => (o(), s("div", {
          key: b.id,
          class: J(["step", {
            active: t.currentStep === b.id,
            completed: m(b.id),
            "in-progress": p(b.id),
            disabled: h(b.id)
          }]),
          onClick: (w) => u(b.id)
        }, [
          e("div", {
            class: J(["step-indicator", g(b.id)])
          }, [
            m(b.id) ? (o(), s("span", Jn, "✓")) : (o(), s("span", Qn, l(y + 1), 1))
          ], 2),
          e("div", el, l(b.label), 1),
          y < t.steps.length - 1 ? (o(), s("div", tl)) : d("", !0)
        ], 10, Zn))), 128))
      ]),
      e("div", ol, [
        le(f.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), al = /* @__PURE__ */ Y(sl, [["__scopeId", "data-v-2a7b3af8"]]), nl = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = D(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), i = D(() => `confidence-${a.value}`), m = D(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : a.value.charAt(0).toUpperCase() + a.value.slice(1));
    return (p, g) => (o(), s("span", {
      class: J(["confidence-badge", i.value, t.size])
    }, l(m.value), 3));
  }
}), wt = /* @__PURE__ */ Y(nl, [["__scopeId", "data-v-17ec4b80"]]), ll = { class: "item-header" }, il = { class: "item-title" }, rl = { class: "node-type" }, dl = {
  key: 0,
  class: "choice-status"
}, cl = {
  key: 0,
  class: "status-badge install"
}, ul = {
  key: 1,
  class: "status-badge optional"
}, ml = {
  key: 2,
  class: "status-badge skip"
}, vl = {
  key: 0,
  class: "item-status"
}, fl = {
  key: 0,
  class: "status-badge ambiguous"
}, gl = {
  key: 1,
  class: "status-badge unresolved"
}, hl = { class: "item-body" }, pl = {
  key: 0,
  class: "resolved-state"
}, yl = {
  key: 1,
  class: "multiple-options"
}, wl = { class: "options-list" }, bl = ["onClick"], kl = ["name", "value", "checked", "onChange"], _l = { class: "option-content" }, $l = { class: "option-header" }, Cl = { class: "option-package-id" }, xl = {
  key: 0,
  class: "option-title"
}, Sl = { class: "option-meta" }, Il = {
  key: 0,
  class: "installed-badge"
}, El = { class: "action-buttons" }, zl = {
  key: 2,
  class: "unresolved"
}, Ml = { class: "action-buttons" }, Ll = /* @__PURE__ */ q({
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
    choice: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice"],
  setup(t, { emit: r }) {
    const a = t, i = r, m = D(() => !!a.choice), p = D(() => {
      var u;
      return (u = a.choice) == null ? void 0 : u.action;
    }), g = D(() => {
      var u;
      return (u = a.choice) == null ? void 0 : u.package_id;
    });
    function h(u) {
      i("option-selected", u);
    }
    return (u, f) => {
      var k;
      return o(), s("div", {
        class: J(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: m.value }])
      }, [
        e("div", ll, [
          e("div", il, [
            e("code", rl, l(t.nodeType), 1),
            m.value ? (o(), s("span", dl, [
              p.value === "install" ? (o(), s("span", cl, "Installing: " + l(g.value), 1)) : p.value === "optional" ? (o(), s("span", ul, "Marked Optional")) : p.value === "skip" ? (o(), s("span", ml, "Skipped")) : d("", !0)
            ])) : d("", !0)
          ]),
          m.value ? d("", !0) : (o(), s("div", vl, [
            t.hasMultipleOptions ? (o(), s("span", fl, l((k = t.options) == null ? void 0 : k.length) + " matches", 1)) : t.packageId ? d("", !0) : (o(), s("span", gl, "Not Found"))
          ]))
        ]),
        e("div", hl, [
          m.value ? (o(), s("div", pl, [
            c(ne, {
              variant: "ghost",
              size: "sm",
              onClick: f[0] || (f[0] = (b) => i("clear-choice"))
            }, {
              default: n(() => [...f[7] || (f[7] = [
                v(" Change Selection ", -1)
              ])]),
              _: 1
            })
          ])) : t.hasMultipleOptions && t.options ? (o(), s("div", yl, [
            f[11] || (f[11] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
            e("div", wl, [
              (o(!0), s(H, null, Z(t.options, (b, y) => (o(), s("label", {
                key: b.package_id,
                class: J(["option-card", { selected: t.selectedOptionIndex === y }]),
                onClick: (w) => h(y)
              }, [
                e("input", {
                  type: "radio",
                  name: `node-option-${t.nodeType}`,
                  value: y,
                  checked: t.selectedOptionIndex === y,
                  onChange: (w) => h(y)
                }, null, 40, kl),
                e("div", _l, [
                  e("div", $l, [
                    e("span", Cl, l(b.package_id), 1),
                    c(wt, {
                      confidence: b.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  b.title && b.title !== b.package_id ? (o(), s("div", xl, l(b.title), 1)) : d("", !0),
                  e("div", Sl, [
                    b.is_installed ? (o(), s("span", Il, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 10, bl))), 128))
            ]),
            e("div", El, [
              c(ne, {
                variant: "ghost",
                size: "sm",
                onClick: f[1] || (f[1] = (b) => i("search"))
              }, {
                default: n(() => [...f[8] || (f[8] = [
                  v(" Search Registry ", -1)
                ])]),
                _: 1
              }),
              c(ne, {
                variant: "ghost",
                size: "sm",
                onClick: f[2] || (f[2] = (b) => i("manual-entry"))
              }, {
                default: n(() => [...f[9] || (f[9] = [
                  v(" Enter Manually ", -1)
                ])]),
                _: 1
              }),
              c(ne, {
                variant: "secondary",
                size: "sm",
                onClick: f[3] || (f[3] = (b) => i("mark-optional"))
              }, {
                default: n(() => [...f[10] || (f[10] = [
                  v(" Mark Optional ", -1)
                ])]),
                _: 1
              })
            ])
          ])) : (o(), s("div", zl, [
            f[15] || (f[15] = e("div", { class: "unresolved-message" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "No matching package found in registry")
            ], -1)),
            e("div", Ml, [
              c(ne, {
                variant: "primary",
                size: "sm",
                onClick: f[4] || (f[4] = (b) => i("search"))
              }, {
                default: n(() => [...f[12] || (f[12] = [
                  v(" Search Registry ", -1)
                ])]),
                _: 1
              }),
              c(ne, {
                variant: "secondary",
                size: "sm",
                onClick: f[5] || (f[5] = (b) => i("manual-entry"))
              }, {
                default: n(() => [...f[13] || (f[13] = [
                  v(" Enter Manually ", -1)
                ])]),
                _: 1
              }),
              c(ne, {
                variant: "secondary",
                size: "sm",
                onClick: f[6] || (f[6] = (b) => i("mark-optional"))
              }, {
                default: n(() => [...f[14] || (f[14] = [
                  v(" Mark Optional ", -1)
                ])]),
                _: 1
              })
            ])
          ]))
        ])
      ], 2);
    };
  }
}), Rl = /* @__PURE__ */ Y(Ll, [["__scopeId", "data-v-0d2d5a4a"]]), Ul = ["type", "value", "placeholder", "disabled"], Nl = {
  key: 0,
  class: "base-input-error"
}, Tl = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("div", {
      class: J(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: J(["base-input", { error: !!t.error }]),
        onInput: a[0] || (a[0] = (i) => r.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          a[1] || (a[1] = Te((i) => r.$emit("enter"), ["enter"])),
          a[2] || (a[2] = Te((i) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ul),
      t.error ? (o(), s("span", Nl, l(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ Y(Tl, [["__scopeId", "data-v-9ba02cdc"]]), Bl = { class: "node-resolution-step" }, Dl = { class: "step-header" }, Ol = { class: "step-stats" }, Vl = { class: "stat resolved" }, Al = { class: "stat pending" }, Fl = { class: "item-navigator" }, Wl = ["disabled"], Pl = { class: "item-indicators" }, Hl = ["title", "onClick"], Gl = {
  key: 0,
  class: "dot-check"
}, jl = ["disabled"], Kl = { class: "nav-position" }, ql = {
  key: 0,
  class: "step-body"
}, Yl = {
  key: 1,
  class: "empty-state"
}, Xl = { class: "node-search-modal" }, Zl = { class: "node-modal-body" }, Jl = {
  key: 0,
  class: "node-search-results"
}, Ql = ["onClick"], ei = { class: "node-result-header" }, ti = { class: "node-result-package-id" }, oi = {
  key: 0,
  class: "node-result-description"
}, si = {
  key: 1,
  class: "node-no-results"
}, ai = {
  key: 2,
  class: "node-searching"
}, ni = { class: "node-manual-entry-modal" }, li = { class: "node-modal-body" }, ii = { class: "node-modal-actions" }, ri = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: r }) {
    const a = t, i = r, m = x(0), p = x(!1), g = x(!1), h = x(""), u = x(""), f = x([]), k = x(!1), b = D(() => a.nodes[m.value]), y = D(() => a.nodes.filter((N) => a.nodeChoices.has(N.node_type)).length), w = D(() => a.nodes.length - y.value);
    function E(N) {
      N >= 0 && N < a.nodes.length && (m.value = N);
    }
    function C() {
      b.value && i("mark-optional", b.value.node_type);
    }
    function z() {
      b.value && i("skip", b.value.node_type);
    }
    function M(N) {
      b.value && i("option-selected", b.value.node_type, N);
    }
    function T() {
      b.value && i("clear-choice", b.value.node_type);
    }
    function W() {
      b.value && (h.value = b.value.node_type, p.value = !0);
    }
    function B() {
      u.value = "", g.value = !0;
    }
    function A() {
      p.value = !1, h.value = "", f.value = [];
    }
    function R() {
      g.value = !1, u.value = "";
    }
    function O() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function L(N) {
      b.value && (i("manual-entry", b.value.node_type, N.package_id), A());
    }
    function U() {
      !b.value || !u.value.trim() || (i("manual-entry", b.value.node_type, u.value.trim()), R());
    }
    return (N, K) => {
      var j, I;
      return o(), s("div", Bl, [
        e("div", Dl, [
          K[4] || (K[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("div", Ol, [
            e("span", Vl, l(y.value) + " resolved", 1),
            e("span", Al, l(w.value) + " pending", 1)
          ])
        ]),
        e("div", Fl, [
          e("button", {
            class: "nav-arrow",
            disabled: m.value === 0,
            onClick: K[0] || (K[0] = (V) => E(m.value - 1))
          }, " ← ", 8, Wl),
          e("div", Pl, [
            (o(!0), s(H, null, Z(t.nodes, (V, te) => (o(), s("button", {
              key: V.node_type,
              class: J(["item-dot", {
                active: te === m.value,
                resolved: t.nodeChoices.has(V.node_type)
              }]),
              title: V.node_type,
              onClick: ($e) => E(te)
            }, [
              t.nodeChoices.has(V.node_type) ? (o(), s("span", Gl, "✓")) : d("", !0)
            ], 10, Hl))), 128))
          ]),
          e("button", {
            class: "nav-arrow",
            disabled: m.value === t.nodes.length - 1,
            onClick: K[1] || (K[1] = (V) => E(m.value + 1))
          }, " → ", 8, jl),
          e("span", Kl, l(m.value + 1) + " / " + l(t.nodes.length), 1)
        ]),
        b.value ? (o(), s("div", ql, [
          c(Rl, {
            "node-type": b.value.node_type,
            "has-multiple-options": !!((j = b.value.options) != null && j.length),
            options: b.value.options,
            choice: (I = t.nodeChoices) == null ? void 0 : I.get(b.value.node_type),
            onMarkOptional: C,
            onSkip: z,
            onManualEntry: B,
            onSearch: W,
            onOptionSelected: M,
            onClearChoice: T
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice"])
        ])) : (o(), s("div", Yl, [...K[5] || (K[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), _(ze, { to: "body" }, [
          p.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ve(A, ["self"])
          }, [
            e("div", Xl, [
              e("div", { class: "node-modal-header" }, [
                K[6] || (K[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              e("div", Zl, [
                c(Ae, {
                  modelValue: h.value,
                  "onUpdate:modelValue": K[2] || (K[2] = (V) => h.value = V),
                  placeholder: "Search by node type, package name...",
                  onInput: O
                }, null, 8, ["modelValue"]),
                f.value.length > 0 ? (o(), s("div", Jl, [
                  (o(!0), s(H, null, Z(f.value, (V) => (o(), s("div", {
                    key: V.package_id,
                    class: "node-search-result-item",
                    onClick: (te) => L(V)
                  }, [
                    e("div", ei, [
                      e("code", ti, l(V.package_id), 1),
                      V.match_confidence ? (o(), _(wt, {
                        key: 0,
                        confidence: V.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : d("", !0)
                    ]),
                    V.description ? (o(), s("div", oi, l(V.description), 1)) : d("", !0)
                  ], 8, Ql))), 128))
                ])) : h.value && !k.value ? (o(), s("div", si, ' No packages found matching "' + l(h.value) + '" ', 1)) : d("", !0),
                k.value ? (o(), s("div", ai, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), _(ze, { to: "body" }, [
          g.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ve(R, ["self"])
          }, [
            e("div", ni, [
              e("div", { class: "node-modal-header" }, [
                K[7] || (K[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              e("div", li, [
                c(Ae, {
                  modelValue: u.value,
                  "onUpdate:modelValue": K[3] || (K[3] = (V) => u.value = V),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", ii, [
                  c(ne, {
                    variant: "secondary",
                    onClick: R
                  }, {
                    default: n(() => [...K[8] || (K[8] = [
                      v("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  c(ne, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: U
                  }, {
                    default: n(() => [...K[9] || (K[9] = [
                      v(" Add Package ", -1)
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
}), di = /* @__PURE__ */ Y(ri, [["__scopeId", "data-v-1383ef61"]]), ci = { class: "item-header" }, ui = { class: "item-title" }, mi = { class: "model-filename" }, vi = {
  key: 0,
  class: "choice-status"
}, fi = {
  key: 0,
  class: "status-badge select"
}, gi = {
  key: 1,
  class: "status-badge download"
}, hi = {
  key: 2,
  class: "status-badge optional"
}, pi = {
  key: 3,
  class: "status-badge skip"
}, yi = {
  key: 0,
  class: "item-status"
}, wi = {
  key: 0,
  class: "status-badge ambiguous"
}, bi = {
  key: 1,
  class: "status-badge unresolved"
}, ki = { class: "node-info" }, _i = { class: "item-body" }, $i = {
  key: 0,
  class: "resolved-state"
}, Ci = {
  key: 1,
  class: "multiple-options"
}, xi = { class: "options-list" }, Si = ["onClick"], Ii = ["name", "value", "checked", "onChange"], Ei = { class: "option-content" }, zi = { class: "option-header" }, Mi = { class: "option-filename" }, Li = { class: "option-meta" }, Ri = { class: "option-size" }, Ui = { class: "option-category" }, Ni = { class: "option-path" }, Ti = { class: "action-buttons" }, Bi = {
  key: 2,
  class: "unresolved"
}, Di = { class: "action-buttons" }, Oi = /* @__PURE__ */ q({
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
    choice: {}
  },
  emits: ["mark-optional", "skip", "download-url", "search", "option-selected", "clear-choice"],
  setup(t, { emit: r }) {
    const a = t, i = r, m = D(() => !!a.choice), p = D(() => {
      var f;
      return (f = a.choice) == null ? void 0 : f.action;
    }), g = D(() => {
      var f, k;
      return ((k = (f = a.choice) == null ? void 0 : f.selected_model) == null ? void 0 : k.filename) || "selected";
    });
    function h(f) {
      i("option-selected", f);
    }
    function u(f) {
      if (!f) return "Unknown";
      const k = f / (1024 * 1024 * 1024);
      return k >= 1 ? `${k.toFixed(2)} GB` : `${(f / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (f, k) => {
      var b;
      return o(), s("div", {
        class: J(["model-resolution-item", { resolved: m.value, ambiguous: t.hasMultipleOptions }])
      }, [
        e("div", ci, [
          e("div", ui, [
            e("code", mi, l(t.filename), 1),
            m.value ? (o(), s("span", vi, [
              p.value === "select" ? (o(), s("span", fi, "Using: " + l(g.value), 1)) : p.value === "download" ? (o(), s("span", gi, "Downloading")) : p.value === "optional" ? (o(), s("span", hi, "Marked Optional")) : p.value === "skip" ? (o(), s("span", pi, "Skipped")) : d("", !0)
            ])) : d("", !0)
          ]),
          m.value ? d("", !0) : (o(), s("div", yi, [
            t.hasMultipleOptions ? (o(), s("span", wi, l((b = t.options) == null ? void 0 : b.length) + " matches", 1)) : (o(), s("span", bi, "Not Found"))
          ]))
        ]),
        e("div", ki, [
          k[7] || (k[7] = v(" Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        e("div", _i, [
          m.value ? (o(), s("div", $i, [
            c(ne, {
              variant: "ghost",
              size: "sm",
              onClick: k[0] || (k[0] = (y) => i("clear-choice"))
            }, {
              default: n(() => [...k[8] || (k[8] = [
                v(" Change Selection ", -1)
              ])]),
              _: 1
            })
          ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Ci, [
            k[12] || (k[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
            e("div", xi, [
              (o(!0), s(H, null, Z(t.options, (y, w) => (o(), s("label", {
                key: y.model.hash,
                class: J(["option-card", { selected: t.selectedOptionIndex === w }]),
                onClick: (E) => h(w)
              }, [
                e("input", {
                  type: "radio",
                  name: `model-option-${t.filename}`,
                  value: w,
                  checked: t.selectedOptionIndex === w,
                  onChange: (E) => h(w)
                }, null, 40, Ii),
                e("div", Ei, [
                  e("div", zi, [
                    e("span", Mi, l(y.model.filename), 1),
                    c(wt, {
                      confidence: y.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  e("div", Li, [
                    e("span", Ri, l(u(y.model.size)), 1),
                    e("span", Ui, l(y.model.category), 1)
                  ]),
                  e("div", Ni, l(y.model.relative_path), 1)
                ])
              ], 10, Si))), 128))
            ]),
            e("div", Ti, [
              c(ne, {
                variant: "ghost",
                size: "sm",
                onClick: k[1] || (k[1] = (y) => i("search"))
              }, {
                default: n(() => [...k[9] || (k[9] = [
                  v(" Search Workspace ", -1)
                ])]),
                _: 1
              }),
              c(ne, {
                variant: "ghost",
                size: "sm",
                onClick: k[2] || (k[2] = (y) => i("download-url"))
              }, {
                default: n(() => [...k[10] || (k[10] = [
                  v(" Download URL ", -1)
                ])]),
                _: 1
              }),
              c(ne, {
                variant: "secondary",
                size: "sm",
                onClick: k[3] || (k[3] = (y) => i("mark-optional"))
              }, {
                default: n(() => [...k[11] || (k[11] = [
                  v(" Mark Optional ", -1)
                ])]),
                _: 1
              })
            ])
          ])) : (o(), s("div", Bi, [
            k[16] || (k[16] = e("div", { class: "unresolved-message" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "Model not found in workspace")
            ], -1)),
            e("div", Di, [
              c(ne, {
                variant: "primary",
                size: "sm",
                onClick: k[4] || (k[4] = (y) => i("search"))
              }, {
                default: n(() => [...k[13] || (k[13] = [
                  v(" Search Workspace ", -1)
                ])]),
                _: 1
              }),
              c(ne, {
                variant: "secondary",
                size: "sm",
                onClick: k[5] || (k[5] = (y) => i("download-url"))
              }, {
                default: n(() => [...k[14] || (k[14] = [
                  v(" Download URL ", -1)
                ])]),
                _: 1
              }),
              c(ne, {
                variant: "secondary",
                size: "sm",
                onClick: k[6] || (k[6] = (y) => i("mark-optional"))
              }, {
                default: n(() => [...k[15] || (k[15] = [
                  v(" Mark Optional ", -1)
                ])]),
                _: 1
              })
            ])
          ]))
        ])
      ], 2);
    };
  }
}), Vi = /* @__PURE__ */ Y(Oi, [["__scopeId", "data-v-0ed05ebf"]]), Ai = { class: "model-resolution-step" }, Fi = { class: "step-header" }, Wi = { class: "step-stats" }, Pi = { class: "stat resolved" }, Hi = { class: "stat pending" }, Gi = { class: "item-navigator" }, ji = ["disabled"], Ki = { class: "item-indicators" }, qi = ["title", "onClick"], Yi = {
  key: 0,
  class: "dot-check"
}, Xi = ["disabled"], Zi = { class: "nav-position" }, Ji = {
  key: 0,
  class: "step-body"
}, Qi = {
  key: 1,
  class: "empty-state"
}, er = { class: "model-search-modal" }, tr = { class: "model-modal-body" }, or = {
  key: 0,
  class: "model-search-results"
}, sr = ["onClick"], ar = { class: "model-result-header" }, nr = { class: "model-result-filename" }, lr = { class: "model-result-meta" }, ir = { class: "model-result-category" }, rr = { class: "model-result-size" }, dr = {
  key: 0,
  class: "model-result-path"
}, cr = {
  key: 1,
  class: "model-no-results"
}, ur = {
  key: 2,
  class: "model-searching"
}, mr = { class: "model-download-url-modal" }, vr = { class: "model-modal-body" }, fr = { class: "model-modal-actions" }, gr = /* @__PURE__ */ q({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: r }) {
    const a = t, i = r, m = x(0), p = x(!1), g = x(!1), h = x(""), u = x(""), f = x(""), k = x([]), b = x(!1), y = D(() => a.models[m.value]), w = D(() => a.models.filter((I) => a.modelChoices.has(I.filename)).length), E = D(() => a.models.length - w.value), C = D(() => y.value ? `checkpoints/${y.value.filename}` : "checkpoints/");
    function z(I) {
      I >= 0 && I < a.models.length && (m.value = I);
    }
    function M() {
      y.value && i("mark-optional", y.value.filename);
    }
    function T() {
      y.value && i("skip", y.value.filename);
    }
    function W(I) {
      y.value && i("option-selected", y.value.filename, I);
    }
    function B() {
      y.value && i("clear-choice", y.value.filename);
    }
    function A() {
      y.value && (h.value = y.value.filename, p.value = !0);
    }
    function R() {
      u.value = "", f.value = C.value, g.value = !0;
    }
    function O() {
      p.value = !1, h.value = "", k.value = [];
    }
    function L() {
      g.value = !1, u.value = "", f.value = "";
    }
    function U() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function N(I) {
      y.value && O();
    }
    function K() {
      !y.value || !u.value.trim() || (i("download-url", y.value.filename, u.value.trim(), f.value.trim() || void 0), L());
    }
    function j(I) {
      if (!I) return "Unknown";
      const V = I / (1024 * 1024 * 1024);
      return V >= 1 ? `${V.toFixed(2)} GB` : `${(I / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (I, V) => {
      var te, $e, xe;
      return o(), s("div", Ai, [
        e("div", Fi, [
          V[5] || (V[5] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Models"),
            e("p", { class: "step-description" }, " Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("div", Wi, [
            e("span", Pi, l(w.value) + " resolved", 1),
            e("span", Hi, l(E.value) + " pending", 1)
          ])
        ]),
        e("div", Gi, [
          e("button", {
            class: "nav-arrow",
            disabled: m.value === 0,
            onClick: V[0] || (V[0] = (oe) => z(m.value - 1))
          }, " ← ", 8, ji),
          e("div", Ki, [
            (o(!0), s(H, null, Z(t.models, (oe, he) => (o(), s("button", {
              key: oe.filename,
              class: J(["item-dot", {
                active: he === m.value,
                resolved: t.modelChoices.has(oe.filename)
              }]),
              title: oe.filename,
              onClick: (Q) => z(he)
            }, [
              t.modelChoices.has(oe.filename) ? (o(), s("span", Yi, "✓")) : d("", !0)
            ], 10, qi))), 128))
          ]),
          e("button", {
            class: "nav-arrow",
            disabled: m.value === t.models.length - 1,
            onClick: V[1] || (V[1] = (oe) => z(m.value + 1))
          }, " → ", 8, Xi),
          e("span", Zi, l(m.value + 1) + " / " + l(t.models.length), 1)
        ]),
        y.value ? (o(), s("div", Ji, [
          c(Vi, {
            filename: y.value.filename,
            "node-type": ((te = y.value.reference) == null ? void 0 : te.node_type) || "Unknown",
            "has-multiple-options": !!(($e = y.value.options) != null && $e.length),
            options: y.value.options,
            choice: (xe = t.modelChoices) == null ? void 0 : xe.get(y.value.filename),
            onMarkOptional: M,
            onSkip: T,
            onDownloadUrl: R,
            onSearch: A,
            onOptionSelected: W,
            onClearChoice: B
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice"])
        ])) : (o(), s("div", Qi, [...V[6] || (V[6] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), _(ze, { to: "body" }, [
          p.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ve(O, ["self"])
          }, [
            e("div", er, [
              e("div", { class: "model-modal-header" }, [
                V[7] || (V[7] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", tr, [
                c(Ae, {
                  modelValue: h.value,
                  "onUpdate:modelValue": V[2] || (V[2] = (oe) => h.value = oe),
                  placeholder: "Search by filename, category...",
                  onInput: U
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (o(), s("div", or, [
                  (o(!0), s(H, null, Z(k.value, (oe) => (o(), s("div", {
                    key: oe.hash,
                    class: "model-search-result-item",
                    onClick: (he) => N()
                  }, [
                    e("div", ar, [
                      e("code", nr, l(oe.filename), 1)
                    ]),
                    e("div", lr, [
                      e("span", ir, l(oe.category), 1),
                      e("span", rr, l(j(oe.size)), 1)
                    ]),
                    oe.relative_path ? (o(), s("div", dr, l(oe.relative_path), 1)) : d("", !0)
                  ], 8, sr))), 128))
                ])) : h.value && !b.value ? (o(), s("div", cr, ' No models found matching "' + l(h.value) + '" ', 1)) : d("", !0),
                b.value ? (o(), s("div", ur, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), _(ze, { to: "body" }, [
          g.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ve(L, ["self"])
          }, [
            e("div", mr, [
              e("div", { class: "model-modal-header" }, [
                V[8] || (V[8] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", vr, [
                c(Ae, {
                  modelValue: u.value,
                  "onUpdate:modelValue": V[3] || (V[3] = (oe) => u.value = oe),
                  label: "Download URL",
                  placeholder: "https://civitai.com/api/download/..."
                }, null, 8, ["modelValue"]),
                c(Ae, {
                  modelValue: f.value,
                  "onUpdate:modelValue": V[4] || (V[4] = (oe) => f.value = oe),
                  label: "Target Path (relative to models folder)",
                  placeholder: C.value
                }, null, 8, ["modelValue", "placeholder"]),
                e("div", fr, [
                  c(ne, {
                    variant: "secondary",
                    onClick: L
                  }, {
                    default: n(() => [...V[9] || (V[9] = [
                      v("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  c(ne, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: K
                  }, {
                    default: n(() => [...V[10] || (V[10] = [
                      v(" Queue Download ", -1)
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
}), hr = /* @__PURE__ */ Y(gr, [["__scopeId", "data-v-0b6ba72b"]]), pr = {
  key: 0,
  class: "loading-state"
}, yr = {
  key: 1,
  class: "wizard-content"
}, wr = {
  key: 0,
  class: "step-content"
}, br = { class: "analysis-summary" }, kr = { class: "analysis-header" }, _r = { class: "summary-description" }, $r = { class: "stats-grid" }, Cr = { class: "stat-card" }, xr = { class: "stat-items" }, Sr = { class: "stat-item success" }, Ir = { class: "stat-count" }, Er = {
  key: 0,
  class: "stat-item warning"
}, zr = { class: "stat-count" }, Mr = {
  key: 1,
  class: "stat-item error"
}, Lr = { class: "stat-count" }, Rr = { class: "stat-card" }, Ur = { class: "stat-items" }, Nr = { class: "stat-item success" }, Tr = { class: "stat-count" }, Br = {
  key: 0,
  class: "stat-item warning"
}, Dr = { class: "stat-count" }, Or = {
  key: 1,
  class: "stat-item error"
}, Vr = { class: "stat-count" }, Ar = {
  key: 0,
  class: "status-message warning"
}, Fr = { class: "status-text" }, Wr = {
  key: 1,
  class: "status-message success"
}, Pr = {
  key: 3,
  class: "step-content"
}, Hr = { class: "review-summary" }, Gr = { class: "review-stats" }, jr = { class: "review-stat" }, Kr = { class: "stat-value" }, qr = { class: "review-stat" }, Yr = { class: "stat-value" }, Xr = { class: "review-stat" }, Zr = { class: "stat-value" }, Jr = { class: "review-stat" }, Qr = { class: "stat-value" }, ed = {
  key: 0,
  class: "review-section"
}, td = { class: "section-title" }, od = { class: "review-items" }, sd = { class: "item-name" }, ad = { class: "item-choice" }, nd = {
  key: 0,
  class: "choice-badge install"
}, ld = {
  key: 1,
  class: "choice-badge optional"
}, id = {
  key: 2,
  class: "choice-badge skip"
}, rd = {
  key: 1,
  class: "choice-badge pending"
}, dd = {
  key: 1,
  class: "review-section"
}, cd = { class: "section-title" }, ud = { class: "review-items" }, md = { class: "item-name" }, vd = { class: "item-choice" }, fd = {
  key: 0,
  class: "choice-badge install"
}, gd = {
  key: 1,
  class: "choice-badge download"
}, hd = {
  key: 2,
  class: "choice-badge optional"
}, pd = {
  key: 3,
  class: "choice-badge skip"
}, yd = {
  key: 1,
  class: "choice-badge pending"
}, wd = {
  key: 2,
  class: "no-choices"
}, bd = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: r }) {
    const a = t, i = r, { analyzeWorkflow: m, applyResolution: p } = qn(), g = x(null), h = x(!1), u = x(!1), f = x(null), k = x("analysis"), b = x([]), y = x(/* @__PURE__ */ new Map()), w = x(/* @__PURE__ */ new Map()), E = D(() => {
      const X = [
        { id: "analysis", label: "Analysis" }
      ];
      return z.value && X.push({ id: "nodes", label: "Nodes" }), M.value && X.push({ id: "models", label: "Models" }), X.push({ id: "review", label: "Review" }), X;
    }), C = D(() => g.value ? g.value.stats.needs_user_input : !1), z = D(() => g.value ? g.value.nodes.unresolved.length > 0 || g.value.nodes.ambiguous.length > 0 : !1), M = D(() => g.value ? g.value.models.unresolved.length > 0 || g.value.models.ambiguous.length > 0 : !1), T = D(() => {
      if (!g.value) return [];
      const X = g.value.nodes.unresolved.map((G) => ({
        node_type: G.reference.node_type,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), $ = g.value.nodes.ambiguous.map((G) => ({
        node_type: G.reference.node_type,
        has_multiple_options: !0,
        options: G.options.map((ee) => ({
          package_id: ee.package.package_id,
          title: ee.package.title,
          match_confidence: ee.match_confidence,
          match_type: ee.match_type,
          is_installed: ee.is_installed
        }))
      }));
      return [...X, ...$];
    }), W = D(() => {
      if (!g.value) return [];
      const X = g.value.models.unresolved.map((G) => ({
        filename: G.reference.widget_value,
        reference: G.reference,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), $ = g.value.models.ambiguous.map((G) => ({
        filename: G.reference.widget_value,
        reference: G.reference,
        has_multiple_options: !0,
        options: G.options.map((ee) => ({
          model: ee.model,
          match_confidence: ee.match_confidence,
          match_type: ee.match_type,
          has_download_source: ee.has_download_source
        }))
      }));
      return [...X, ...$];
    }), B = D(() => {
      let X = 0;
      for (const $ of y.value.values())
        $.action === "install" && X++;
      for (const $ of w.value.values())
        $.action === "select" && X++;
      return X;
    }), A = D(() => {
      let X = 0;
      for (const $ of w.value.values())
        $.action === "download" && X++;
      return X;
    }), R = D(() => {
      let X = 0;
      for (const $ of y.value.values())
        $.action === "optional" && X++;
      for (const $ of w.value.values())
        $.action === "optional" && X++;
      return X;
    }), O = D(() => {
      let X = 0;
      for (const $ of y.value.values())
        $.action === "skip" && X++;
      for (const $ of w.value.values())
        $.action === "skip" && X++;
      for (const $ of T.value)
        y.value.has($.node_type) || X++;
      for (const $ of W.value)
        w.value.has($.filename) || X++;
      return X;
    }), L = D(() => {
      const X = {};
      if (X.analysis = { resolved: 1, total: 1 }, z.value) {
        const $ = T.value.length, G = T.value.filter(
          (ee) => y.value.has(ee.node_type)
        ).length;
        X.nodes = { resolved: G, total: $ };
      }
      if (M.value) {
        const $ = W.value.length, G = W.value.filter(
          (ee) => w.value.has(ee.filename)
        ).length;
        X.models = { resolved: G, total: $ };
      }
      return X.review = { resolved: 1, total: 1 }, X;
    });
    function U(X) {
      k.value = X;
    }
    function N() {
      const X = E.value.findIndex(($) => $.id === k.value);
      X > 0 && (k.value = E.value[X - 1].id);
    }
    function K() {
      const X = E.value.findIndex(($) => $.id === k.value);
      X < E.value.length - 1 && (k.value = E.value[X + 1].id);
    }
    async function j() {
      h.value = !0, f.value = null;
      try {
        g.value = await m(a.workflowName);
      } catch (X) {
        f.value = X instanceof Error ? X.message : "Failed to analyze workflow";
      } finally {
        h.value = !1;
      }
    }
    function I() {
      b.value.includes("analysis") || b.value.push("analysis"), z.value ? k.value = "nodes" : M.value ? k.value = "models" : k.value = "review";
    }
    function V(X) {
      y.value.set(X, { action: "optional" });
    }
    function te(X) {
      y.value.set(X, { action: "skip" });
    }
    function $e(X, $) {
      var ee;
      const G = T.value.find((pe) => pe.node_type === X);
      (ee = G == null ? void 0 : G.options) != null && ee[$] && y.value.set(X, {
        action: "install",
        package_id: G.options[$].package_id
      });
    }
    function xe(X, $) {
      y.value.set(X, {
        action: "install",
        package_id: $
      });
    }
    function oe(X) {
      y.value.delete(X);
    }
    function he(X) {
      w.value.set(X, { action: "optional" });
    }
    function Q(X) {
      w.value.set(X, { action: "skip" });
    }
    function Le(X, $) {
      var ee;
      const G = W.value.find((pe) => pe.filename === X);
      (ee = G == null ? void 0 : G.options) != null && ee[$] && w.value.set(X, {
        action: "select",
        selected_model: G.options[$].model
      });
    }
    function Ye(X, $, G) {
      w.value.set(X, {
        action: "download",
        url: $,
        target_path: G
      });
    }
    function ce(X) {
      w.value.delete(X);
    }
    async function Ce() {
      u.value = !0, f.value = null;
      try {
        await p(a.workflowName, y.value, w.value), i("install"), i("refresh"), i("close");
      } catch (X) {
        f.value = X instanceof Error ? X.message : "Failed to apply resolution";
      } finally {
        u.value = !1;
      }
    }
    return ge(j), (X, $) => (o(), _(ct, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: h.value,
      error: f.value || void 0,
      "fixed-height": !0,
      onClose: $[1] || ($[1] = (G) => i("close"))
    }, {
      body: n(() => [
        h.value && !g.value ? (o(), s("div", pr, [...$[2] || ($[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : g.value ? (o(), s("div", yr, [
          c(al, {
            steps: E.value,
            "current-step": k.value,
            "completed-steps": b.value,
            "step-stats": L.value,
            onStepChange: U
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          k.value === "analysis" ? (o(), s("div", wr, [
            e("div", br, [
              e("div", kr, [
                $[3] || ($[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", _r, " Found " + l(g.value.stats.total_nodes) + " nodes and " + l(g.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", $r, [
                e("div", Cr, [
                  $[10] || ($[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", xr, [
                    e("div", Sr, [
                      $[4] || ($[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Ir, l(g.value.nodes.resolved.length), 1),
                      $[5] || ($[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    g.value.nodes.ambiguous.length > 0 ? (o(), s("div", Er, [
                      $[6] || ($[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", zr, l(g.value.nodes.ambiguous.length), 1),
                      $[7] || ($[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    g.value.nodes.unresolved.length > 0 ? (o(), s("div", Mr, [
                      $[8] || ($[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Lr, l(g.value.nodes.unresolved.length), 1),
                      $[9] || ($[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Rr, [
                  $[17] || ($[17] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Ur, [
                    e("div", Nr, [
                      $[11] || ($[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Tr, l(g.value.models.resolved.length), 1),
                      $[12] || ($[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    g.value.models.ambiguous.length > 0 ? (o(), s("div", Br, [
                      $[13] || ($[13] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Dr, l(g.value.models.ambiguous.length), 1),
                      $[14] || ($[14] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    g.value.models.unresolved.length > 0 ? (o(), s("div", Or, [
                      $[15] || ($[15] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Vr, l(g.value.models.unresolved.length), 1),
                      $[16] || ($[16] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              C.value ? (o(), s("div", Ar, [
                $[18] || ($[18] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Fr, l(T.value.length + W.value.length) + " items need your input", 1)
              ])) : (o(), s("div", Wr, [...$[19] || ($[19] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : d("", !0),
          k.value === "nodes" ? (o(), _(di, {
            key: 1,
            nodes: T.value,
            "node-choices": y.value,
            onMarkOptional: V,
            onSkip: te,
            onOptionSelected: $e,
            onManualEntry: xe,
            onClearChoice: oe
          }, null, 8, ["nodes", "node-choices"])) : d("", !0),
          k.value === "models" ? (o(), _(hr, {
            key: 2,
            models: W.value,
            "model-choices": w.value,
            onMarkOptional: he,
            onSkip: Q,
            onOptionSelected: Le,
            onDownloadUrl: Ye,
            onClearChoice: ce
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          k.value === "review" ? (o(), s("div", Pr, [
            e("div", Hr, [
              $[24] || ($[24] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Gr, [
                e("div", jr, [
                  e("span", Kr, l(B.value), 1),
                  $[20] || ($[20] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", qr, [
                  e("span", Yr, l(A.value), 1),
                  $[21] || ($[21] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Xr, [
                  e("span", Zr, l(R.value), 1),
                  $[22] || ($[22] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Jr, [
                  e("span", Qr, l(O.value), 1),
                  $[23] || ($[23] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              T.value.length > 0 ? (o(), s("div", ed, [
                e("h4", td, "Node Packages (" + l(T.value.length) + ")", 1),
                e("div", od, [
                  (o(!0), s(H, null, Z(T.value, (G) => {
                    var ee, pe, Re, Fe;
                    return o(), s("div", {
                      key: G.node_type,
                      class: "review-item"
                    }, [
                      e("code", sd, l(G.node_type), 1),
                      e("div", ad, [
                        y.value.has(G.node_type) ? (o(), s(H, { key: 0 }, [
                          ((ee = y.value.get(G.node_type)) == null ? void 0 : ee.action) === "install" ? (o(), s("span", nd, l((pe = y.value.get(G.node_type)) == null ? void 0 : pe.package_id), 1)) : ((Re = y.value.get(G.node_type)) == null ? void 0 : Re.action) === "optional" ? (o(), s("span", ld, " Optional ")) : ((Fe = y.value.get(G.node_type)) == null ? void 0 : Fe.action) === "skip" ? (o(), s("span", id, " Skip ")) : d("", !0)
                        ], 64)) : (o(), s("span", rd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              W.value.length > 0 ? (o(), s("div", dd, [
                e("h4", cd, "Models (" + l(W.value.length) + ")", 1),
                e("div", ud, [
                  (o(!0), s(H, null, Z(W.value, (G) => {
                    var ee, pe, Re, Fe, st, Xe;
                    return o(), s("div", {
                      key: G.filename,
                      class: "review-item"
                    }, [
                      e("code", md, l(G.filename), 1),
                      e("div", vd, [
                        w.value.has(G.filename) ? (o(), s(H, { key: 0 }, [
                          ((ee = w.value.get(G.filename)) == null ? void 0 : ee.action) === "select" ? (o(), s("span", fd, l((Re = (pe = w.value.get(G.filename)) == null ? void 0 : pe.selected_model) == null ? void 0 : Re.filename), 1)) : ((Fe = w.value.get(G.filename)) == null ? void 0 : Fe.action) === "download" ? (o(), s("span", gd, " Download ")) : ((st = w.value.get(G.filename)) == null ? void 0 : st.action) === "optional" ? (o(), s("span", hd, " Optional ")) : ((Xe = w.value.get(G.filename)) == null ? void 0 : Xe.action) === "skip" ? (o(), s("span", pd, " Skip ")) : d("", !0)
                        ], 64)) : (o(), s("span", yd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              T.value.length === 0 && W.value.length === 0 ? (o(), s("div", wd, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: n(() => [
        k.value !== "analysis" ? (o(), _(ne, {
          key: 0,
          variant: "secondary",
          disabled: u.value,
          onClick: N
        }, {
          default: n(() => [...$[25] || ($[25] = [
            v(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        $[29] || ($[29] = e("div", { class: "footer-spacer" }, null, -1)),
        c(ne, {
          variant: "secondary",
          onClick: $[0] || ($[0] = (G) => i("close"))
        }, {
          default: n(() => [...$[26] || ($[26] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k.value === "analysis" ? (o(), _(ne, {
          key: 1,
          variant: "primary",
          disabled: h.value,
          onClick: I
        }, {
          default: n(() => [
            v(l(C.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        k.value === "nodes" ? (o(), _(ne, {
          key: 2,
          variant: "primary",
          onClick: K
        }, {
          default: n(() => [
            v(l(M.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        k.value === "models" ? (o(), _(ne, {
          key: 3,
          variant: "primary",
          onClick: K
        }, {
          default: n(() => [...$[27] || ($[27] = [
            v(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        k.value === "review" ? (o(), _(ne, {
          key: 4,
          variant: "primary",
          disabled: u.value,
          loading: u.value,
          onClick: Ce
        }, {
          default: n(() => [...$[28] || ($[28] = [
            v(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), kd = /* @__PURE__ */ Y(bd, [["__scopeId", "data-v-c12ca3e4"]]), _d = { class: "search-input-wrapper" }, $d = ["value", "placeholder"], Cd = /* @__PURE__ */ q({
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
    const a = t, i = r, m = x(null);
    let p;
    function g(u) {
      const f = u.target.value;
      a.debounce > 0 ? (clearTimeout(p), p = window.setTimeout(() => {
        i("update:modelValue", f);
      }, a.debounce)) : i("update:modelValue", f);
    }
    function h() {
      var u;
      i("update:modelValue", ""), i("clear"), (u = m.value) == null || u.focus();
    }
    return ge(() => {
      a.autoFocus && m.value && m.value.focus();
    }), (u, f) => (o(), s("div", _d, [
      e("input", {
        ref_key: "inputRef",
        ref: m,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: g,
        onKeyup: Te(h, ["escape"])
      }, null, 40, $d),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: h,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), xd = /* @__PURE__ */ Y(Cd, [["__scopeId", "data-v-266f857a"]]), Sd = { class: "search-bar" }, Id = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, a) => (o(), s("div", Sd, [
      c(xd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (i) => r.$emit("update:modelValue", i)),
        onClear: a[1] || (a[1] = (i) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Ke = /* @__PURE__ */ Y(Id, [["__scopeId", "data-v-3d51bbfd"]]), Ed = { class: "section-group" }, zd = {
  key: 0,
  class: "section-content"
}, Md = /* @__PURE__ */ q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const a = t, i = r, m = x(a.initiallyExpanded);
    function p() {
      a.collapsible && (m.value = !m.value, i("toggle", m.value));
    }
    return (g, h) => (o(), s("section", Ed, [
      c(_e, {
        count: t.count,
        clickable: t.collapsible,
        expanded: m.value,
        onClick: p
      }, {
        default: n(() => [
          v(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || m.value ? (o(), s("div", zd, [
        le(g.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), me = /* @__PURE__ */ Y(Md, [["__scopeId", "data-v-c48e33ed"]]), Ld = { class: "item-header" }, Rd = {
  key: 0,
  class: "item-icon"
}, Ud = { class: "item-info" }, Nd = {
  key: 0,
  class: "item-title"
}, Td = {
  key: 1,
  class: "item-subtitle"
}, Bd = {
  key: 0,
  class: "item-details"
}, Dd = {
  key: 1,
  class: "item-actions"
}, Od = /* @__PURE__ */ q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, i = D(() => a.status ? `status-${a.status}` : "");
    return (m, p) => (o(), s("div", {
      class: J(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: p[0] || (p[0] = (g) => t.clickable && m.$emit("click"))
    }, [
      e("div", Ld, [
        m.$slots.icon ? (o(), s("span", Rd, [
          le(m.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Ud, [
          m.$slots.title ? (o(), s("div", Nd, [
            le(m.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          m.$slots.subtitle ? (o(), s("div", Td, [
            le(m.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      m.$slots.details ? (o(), s("div", Bd, [
        le(m.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      m.$slots.actions ? (o(), s("div", Dd, [
        le(m.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), fe = /* @__PURE__ */ Y(Od, [["__scopeId", "data-v-cc435e0e"]]), Vd = { class: "loading-state" }, Ad = { class: "loading-message" }, Fd = /* @__PURE__ */ q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, a) => (o(), s("div", Vd, [
      a[0] || (a[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Ad, l(t.message), 1)
    ]));
  }
}), De = /* @__PURE__ */ Y(Fd, [["__scopeId", "data-v-ad8436c9"]]), Wd = { class: "error-state" }, Pd = { class: "error-message" }, Hd = /* @__PURE__ */ q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, a) => (o(), s("div", Wd, [
      a[2] || (a[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Pd, l(t.message), 1),
      t.retry ? (o(), _(P, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (i) => r.$emit("retry"))
      }, {
        default: n(() => [...a[1] || (a[1] = [
          v(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ Y(Hd, [["__scopeId", "data-v-5397be48"]]), Gd = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const a = r, { getWorkflows: i } = be(), m = x([]), p = x(!1), g = x(null), h = x(""), u = x(!0), f = x(!1), k = x(!1), b = x(!1), y = x(null), w = D(
      () => m.value.filter((j) => j.status === "broken")
    ), E = D(
      () => m.value.filter((j) => j.status === "new")
    ), C = D(
      () => m.value.filter((j) => j.status === "modified")
    ), z = D(
      () => m.value.filter((j) => j.status === "synced")
    ), M = D(() => {
      if (!h.value.trim()) return m.value;
      const j = h.value.toLowerCase();
      return m.value.filter((I) => I.name.toLowerCase().includes(j));
    }), T = D(
      () => w.value.filter(
        (j) => !h.value.trim() || j.name.toLowerCase().includes(h.value.toLowerCase())
      )
    ), W = D(
      () => E.value.filter(
        (j) => !h.value.trim() || j.name.toLowerCase().includes(h.value.toLowerCase())
      )
    ), B = D(
      () => C.value.filter(
        (j) => !h.value.trim() || j.name.toLowerCase().includes(h.value.toLowerCase())
      )
    ), A = D(
      () => z.value.filter(
        (j) => !h.value.trim() || j.name.toLowerCase().includes(h.value.toLowerCase())
      )
    ), R = D(
      () => f.value ? A.value : A.value.slice(0, 5)
    );
    async function O() {
      p.value = !0, g.value = null;
      try {
        m.value = await i();
      } catch (j) {
        g.value = j instanceof Error ? j.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    function L(j) {
      y.value = j, k.value = !0;
    }
    function U(j) {
      y.value = j, b.value = !0;
    }
    function N() {
      alert("Bulk resolution not yet implemented");
    }
    function K() {
      a("refresh");
    }
    return ge(O), (j, I) => (o(), s(H, null, [
      c(ye, null, {
        header: n(() => [
          c(we, { title: "WORKFLOWS" }, {
            actions: n(() => [
              w.value.length > 0 ? (o(), _(P, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: n(() => [...I[7] || (I[7] = [
                  v(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          c(Ke, {
            modelValue: h.value,
            "onUpdate:modelValue": I[0] || (I[0] = (V) => h.value = V),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          p.value ? (o(), _(De, {
            key: 0,
            message: "Loading workflows..."
          })) : g.value ? (o(), _(Oe, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            T.value.length ? (o(), _(me, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(T.value, (V) => (o(), _(fe, {
                  key: V.name,
                  status: "broken"
                }, {
                  icon: n(() => [...I[8] || (I[8] = [
                    v("⚠", -1)
                  ])]),
                  title: n(() => [
                    v(l(V.name), 1)
                  ]),
                  subtitle: n(() => [
                    v(" Missing: " + l(V.missing_nodes) + " nodes, " + l(V.missing_models) + " models ", 1)
                  ]),
                  actions: n(() => [
                    c(P, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => U(V.name)
                    }, {
                      default: n(() => [...I[9] || (I[9] = [
                        v(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    c(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => L(V.name)
                    }, {
                      default: n(() => [...I[10] || (I[10] = [
                        v(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            W.value.length ? (o(), _(me, {
              key: 1,
              title: "NEW",
              count: W.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(W.value, (V) => (o(), _(fe, {
                  key: V.name,
                  status: "new"
                }, {
                  icon: n(() => [...I[11] || (I[11] = [
                    v("●", -1)
                  ])]),
                  title: n(() => [
                    v(l(V.name), 1)
                  ]),
                  subtitle: n(() => [...I[12] || (I[12] = [
                    v("New", -1)
                  ])]),
                  actions: n(() => [
                    c(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => L(V.name)
                    }, {
                      default: n(() => [...I[13] || (I[13] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            B.value.length ? (o(), _(me, {
              key: 2,
              title: "MODIFIED",
              count: B.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(B.value, (V) => (o(), _(fe, {
                  key: V.name,
                  status: "modified"
                }, {
                  icon: n(() => [...I[14] || (I[14] = [
                    v("⚡", -1)
                  ])]),
                  title: n(() => [
                    v(l(V.name), 1)
                  ]),
                  subtitle: n(() => [...I[15] || (I[15] = [
                    v("Modified", -1)
                  ])]),
                  actions: n(() => [
                    c(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => L(V.name)
                    }, {
                      default: n(() => [...I[16] || (I[16] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            A.value.length ? (o(), _(me, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: I[2] || (I[2] = (V) => u.value = V)
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(R.value, (V) => (o(), _(fe, {
                  key: V.name,
                  status: "synced"
                }, {
                  icon: n(() => [...I[17] || (I[17] = [
                    v("✓", -1)
                  ])]),
                  title: n(() => [
                    v(l(V.name), 1)
                  ]),
                  subtitle: n(() => [...I[18] || (I[18] = [
                    v("Synced", -1)
                  ])]),
                  actions: n(() => [
                    c(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => L(V.name)
                    }, {
                      default: n(() => [...I[19] || (I[19] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !f.value && A.value.length > 5 ? (o(), _(P, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: I[1] || (I[1] = (V) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: n(() => [
                    v(" View all " + l(A.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            M.value.length ? d("", !0) : (o(), _(Me, {
              key: 4,
              icon: "📭",
              message: h.value ? `No workflows match '${h.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && y.value ? (o(), _(Kn, {
        key: 0,
        "workflow-name": y.value,
        onClose: I[3] || (I[3] = (V) => k.value = !1),
        onResolve: I[4] || (I[4] = (V) => U(y.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && y.value ? (o(), _(kd, {
        key: 1,
        "workflow-name": y.value,
        onClose: I[5] || (I[5] = (V) => b.value = !1),
        onInstall: K,
        onRefresh: I[6] || (I[6] = (V) => a("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), jd = /* @__PURE__ */ Y(Gd, [["__scopeId", "data-v-ee63730e"]]), Kd = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, a) => (o(), s("div", {
      class: J(["summary-bar", t.variant])
    }, [
      le(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ Y(Kd, [["__scopeId", "data-v-ccb7816e"]]), qd = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const a = r, { getEnvironmentModels: i, getStatus: m } = be(), p = x([]), g = x([]), h = x("production"), u = x(!1), f = x(null), k = x(""), b = x(!1);
    function y() {
      b.value = !1, a("navigate", "model-index");
    }
    const w = D(
      () => p.value.reduce((L, U) => L + (U.size || 0), 0)
    ), E = D(() => {
      if (!k.value.trim()) return p.value;
      const L = k.value.toLowerCase();
      return p.value.filter((U) => U.filename.toLowerCase().includes(L));
    }), C = D(() => {
      if (!k.value.trim()) return g.value;
      const L = k.value.toLowerCase();
      return g.value.filter((U) => U.filename.toLowerCase().includes(L));
    }), z = D(
      () => E.value.filter((L) => L.type === "checkpoints")
    ), M = D(
      () => E.value.filter((L) => L.type === "loras")
    ), T = D(
      () => E.value.filter((L) => L.type !== "checkpoints" && L.type !== "loras")
    );
    function W(L) {
      if (!L) return "Unknown";
      const U = L / (1024 * 1024);
      return U >= 1024 ? `${(U / 1024).toFixed(1)} GB` : `${U.toFixed(0)} MB`;
    }
    function B(L) {
      a("navigate", "model-index");
    }
    function A(L) {
      a("navigate", "model-index");
    }
    function R(L) {
      alert(`Download functionality not yet implemented for ${L}`);
    }
    async function O() {
      u.value = !0, f.value = null;
      try {
        const L = await i();
        p.value = L, g.value = [];
        const U = await m();
        h.value = U.environment || "production";
      } catch (L) {
        f.value = L instanceof Error ? L.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return ge(O), (L, U) => (o(), s(H, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: U[0] || (U[0] = (N) => b.value = !0)
          })
        ]),
        search: n(() => [
          c(Ke, {
            modelValue: k.value,
            "onUpdate:modelValue": U[1] || (U[1] = (N) => k.value = N),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          u.value ? (o(), _(De, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (o(), _(Oe, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            p.value.length ? (o(), _(qe, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                v(" Total: " + l(p.value.length) + " models • " + l(W(w.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            z.value.length ? (o(), _(me, {
              key: 1,
              title: "CHECKPOINTS",
              count: z.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(z.value, (N) => (o(), _(fe, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...U[3] || (U[3] = [
                    v("📦", -1)
                  ])]),
                  title: n(() => [
                    v(l(N.filename), 1)
                  ]),
                  subtitle: n(() => [
                    v(l(W(N.size)), 1)
                  ]),
                  details: n(() => [
                    c(se, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    c(se, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    c(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => B(N.hash)
                    }, {
                      default: n(() => [...U[4] || (U[4] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            M.value.length ? (o(), _(me, {
              key: 2,
              title: "LORAS",
              count: M.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(M.value, (N) => (o(), _(fe, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...U[5] || (U[5] = [
                    v("📦", -1)
                  ])]),
                  title: n(() => [
                    v(l(N.filename), 1)
                  ]),
                  subtitle: n(() => [
                    v(l(W(N.size)), 1)
                  ]),
                  details: n(() => [
                    c(se, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    c(se, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    c(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => B(N.hash)
                    }, {
                      default: n(() => [...U[6] || (U[6] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            T.value.length ? (o(), _(me, {
              key: 3,
              title: "OTHER",
              count: T.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(T.value, (N) => (o(), _(fe, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...U[7] || (U[7] = [
                    v("📦", -1)
                  ])]),
                  title: n(() => [
                    v(l(N.filename), 1)
                  ]),
                  subtitle: n(() => [
                    v(l(W(N.size)), 1)
                  ]),
                  details: n(() => [
                    c(se, {
                      label: "Type:",
                      value: N.type
                    }, null, 8, ["value"]),
                    c(se, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    c(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => B(N.hash)
                    }, {
                      default: n(() => [...U[8] || (U[8] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            C.value.length ? (o(), _(me, {
              key: 4,
              title: "MISSING",
              count: C.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(C.value, (N) => (o(), _(fe, {
                  key: N.filename,
                  status: "broken"
                }, {
                  icon: n(() => [...U[9] || (U[9] = [
                    v("⚠", -1)
                  ])]),
                  title: n(() => [
                    v(l(N.filename), 1)
                  ]),
                  subtitle: n(() => [...U[10] || (U[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: n(() => {
                    var K;
                    return [
                      c(se, {
                        label: "Required by:",
                        value: ((K = N.workflow_names) == null ? void 0 : K.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: n(() => [
                    c(P, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => R(N.filename)
                    }, {
                      default: n(() => [...U[11] || (U[11] = [
                        v(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    c(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => A(N.filename)
                    }, {
                      default: n(() => [...U[12] || (U[12] = [
                        v(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !E.value.length && !C.value.length ? (o(), _(Me, {
              key: 5,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      c(Be, {
        show: b.value,
        title: "About Environment Models",
        onClose: U[2] || (U[2] = (N) => b.value = !1)
      }, {
        content: n(() => [
          e("p", null, [
            U[13] || (U[13] = v(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(h.value) + '"', 1),
            U[14] || (U[14] = v(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: n(() => [
          c(P, {
            variant: "primary",
            onClick: y
          }, {
            default: n(() => [...U[15] || (U[15] = [
              v(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yd = /* @__PURE__ */ Y(qd, [["__scopeId", "data-v-72675609"]]), Xd = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: r } = be(), a = x([]), i = x(!1), m = x(null), p = x(""), g = x(!1), h = D(
      () => a.value.reduce((R, O) => R + (O.size_mb || O.size || 0), 0)
    ), u = D(() => {
      const R = /* @__PURE__ */ new Set();
      return a.value.forEach((O) => {
        O.used_in_environments && O.used_in_environments.length > 0 && O.used_in_environments.forEach((L) => R.add(L.env_name));
      }), R.size;
    }), f = D(() => {
      if (!p.value.trim()) return a.value;
      const R = p.value.toLowerCase();
      return a.value.filter((O) => {
        const L = O, U = O.sha256 || L.sha256_hash || "";
        return O.filename.toLowerCase().includes(R) || U.toLowerCase().includes(R);
      });
    }), k = D(
      () => f.value.filter((R) => R.type === "checkpoints")
    ), b = D(
      () => f.value.filter((R) => R.type === "loras")
    ), y = D(
      () => f.value.filter((R) => R.type !== "checkpoints" && R.type !== "loras")
    );
    function w(R) {
      return R ? R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB` : "Unknown";
    }
    function E(R) {
      const O = R, L = R.used_in_workflows || O.used_by || [];
      return !L || L.length === 0 ? "Not used" : `${L.length} workflow(s)`;
    }
    function C(R) {
      navigator.clipboard.writeText(R), alert("Hash copied to clipboard");
    }
    function z(R) {
      prompt("Enter model source URL:", R.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function M(R) {
      const O = R, L = R.used_in_workflows || O.used_by || [], U = L && L.length > 0 ? `

⚠ WARNING: This model is used by ${L.length} workflow(s):
${L.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${R.filename}?${U}

This will free ${w(O.size_mb || R.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function T() {
      alert("Scan for models not yet implemented");
    }
    function W() {
      alert("Change directory not yet implemented");
    }
    function B() {
      alert("Download new model not yet implemented");
    }
    async function A() {
      i.value = !0, m.value = null;
      try {
        a.value = await r(), console.log("Loaded models:", a.value), console.log("Filtered checkpoints:", k.value), console.log("Filtered loras:", b.value), console.log("Filtered other:", y.value);
      } catch (R) {
        m.value = R instanceof Error ? R.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return ge(A), (R, O) => (o(), s(H, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: O[0] || (O[0] = (L) => g.value = !0)
          }, {
            actions: n(() => [
              c(P, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: n(() => [...O[3] || (O[3] = [
                  v(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              c(P, {
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: n(() => [...O[4] || (O[4] = [
                  v(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              c(P, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: n(() => [...O[5] || (O[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  v(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          c(Ke, {
            modelValue: p.value,
            "onUpdate:modelValue": O[1] || (O[1] = (L) => p.value = L),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          i.value ? (o(), _(De, {
            key: 0,
            message: "Loading workspace models..."
          })) : m.value ? (o(), _(Oe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            a.value.length ? (o(), _(qe, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                v(" Total: " + l(a.value.length) + " models • " + l(w(h.value)) + " • Used in " + l(u.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            k.value.length ? (o(), _(me, {
              key: 1,
              title: "CHECKPOINTS",
              count: k.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(k.value, (L) => (o(), _(fe, {
                  key: L.sha256 || L.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...O[6] || (O[6] = [
                    v("📦", -1)
                  ])]),
                  title: n(() => [
                    v(l(L.filename), 1)
                  ]),
                  subtitle: n(() => [
                    v(l(w(L.size_mb || L.size)), 1)
                  ]),
                  details: n(() => {
                    var U, N;
                    return [
                      L.sha256 || L.sha256_hash ? (o(), _(se, {
                        key: 0,
                        label: "SHA256:",
                        value: (L.sha256 || L.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      c(se, {
                        label: "Used in:",
                        value: E(L)
                      }, null, 8, ["value"]),
                      L.source_url || (U = L.sources) != null && U[0] ? (o(), _(se, {
                        key: 1,
                        label: "Source URL:",
                        value: L.source_url || ((N = L.sources) == null ? void 0 : N[0])
                      }, null, 8, ["value"])) : (o(), _(se, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...O[7] || (O[7] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    c(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => z(L)
                    }, {
                      default: n(() => [...O[8] || (O[8] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    L.sha256 || L.sha256_hash ? (o(), _(P, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => C(L.sha256 || L.sha256_hash)
                    }, {
                      default: n(() => [...O[9] || (O[9] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    c(P, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (U) => M(L)
                    }, {
                      default: n(() => [...O[10] || (O[10] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            b.value.length ? (o(), _(me, {
              key: 2,
              title: "LORAS",
              count: b.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(b.value, (L) => (o(), _(fe, {
                  key: L.sha256 || L.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...O[11] || (O[11] = [
                    v("📦", -1)
                  ])]),
                  title: n(() => [
                    v(l(L.filename), 1)
                  ]),
                  subtitle: n(() => [
                    v(l(w(L.size_mb || L.size)), 1)
                  ]),
                  details: n(() => {
                    var U, N;
                    return [
                      L.sha256 || L.sha256_hash ? (o(), _(se, {
                        key: 0,
                        label: "SHA256:",
                        value: (L.sha256 || L.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      c(se, {
                        label: "Used in:",
                        value: E(L)
                      }, null, 8, ["value"]),
                      L.source_url || (U = L.sources) != null && U[0] ? (o(), _(se, {
                        key: 1,
                        label: "Source URL:",
                        value: L.source_url || ((N = L.sources) == null ? void 0 : N[0])
                      }, null, 8, ["value"])) : (o(), _(se, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...O[12] || (O[12] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    c(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => z(L)
                    }, {
                      default: n(() => [...O[13] || (O[13] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    L.sha256 || L.sha256_hash ? (o(), _(P, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => C(L.sha256 || L.sha256_hash)
                    }, {
                      default: n(() => [...O[14] || (O[14] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    c(P, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (U) => M(L)
                    }, {
                      default: n(() => [...O[15] || (O[15] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            y.value.length ? (o(), _(me, {
              key: 3,
              title: "OTHER",
              count: y.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(y.value, (L) => (o(), _(fe, {
                  key: L.sha256 || L.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...O[16] || (O[16] = [
                    v("📦", -1)
                  ])]),
                  title: n(() => [
                    v(l(L.filename), 1)
                  ]),
                  subtitle: n(() => [
                    v(l(w(L.size_mb || L.size)), 1)
                  ]),
                  details: n(() => [
                    c(se, {
                      label: "Type:",
                      value: L.type
                    }, null, 8, ["value"]),
                    L.sha256 || L.sha256_hash ? (o(), _(se, {
                      key: 0,
                      label: "SHA256:",
                      value: (L.sha256 || L.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    c(se, {
                      label: "Used in:",
                      value: E(L)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    c(P, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => z(L)
                    }, {
                      default: n(() => [...O[17] || (O[17] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    L.sha256 || L.sha256_hash ? (o(), _(P, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => C(L.sha256 || L.sha256_hash)
                    }, {
                      default: n(() => [...O[18] || (O[18] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    c(P, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (U) => M(L)
                    }, {
                      default: n(() => [...O[19] || (O[19] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            f.value.length ? d("", !0) : (o(), _(Me, {
              key: 4,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      c(Be, {
        show: g.value,
        title: "About Workspace Model Index",
        onClose: O[2] || (O[2] = (L) => g.value = !1)
      }, {
        content: n(() => [...O[20] || (O[20] = [
          e("p", null, [
            v(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            v(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zd = /* @__PURE__ */ Y(Xd, [["__scopeId", "data-v-5a24af01"]]), Jd = { key: 0 }, Qd = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, ec = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, tc = /* @__PURE__ */ q({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: r, installNode: a, updateNode: i, uninstallNode: m } = be(), p = x({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), g = x(!1), h = x(null), u = x(""), f = x(!1), k = D(() => {
      if (!u.value.trim()) return p.value.nodes;
      const B = u.value.toLowerCase();
      return p.value.nodes.filter(
        (A) => {
          var R, O;
          return A.name.toLowerCase().includes(B) || ((R = A.description) == null ? void 0 : R.toLowerCase().includes(B)) || ((O = A.repository) == null ? void 0 : O.toLowerCase().includes(B));
        }
      );
    }), b = D(
      () => k.value.filter((B) => B.installed)
    ), y = D(
      () => k.value.filter((B) => !B.installed)
    );
    function w(B) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[B] || B;
    }
    function E(B) {
      return !B.used_in_workflows || B.used_in_workflows.length === 0 ? "Not used in any workflows" : B.used_in_workflows.length === 1 ? B.used_in_workflows[0] : `${B.used_in_workflows.length} workflows`;
    }
    function C(B) {
      window.open(B, "_blank");
    }
    async function z(B) {
      if (confirm(`Install node "${B}"?

This will download and install the node from its repository.`))
        try {
          g.value = !0;
          const A = await a(B);
          A.status === "success" ? (alert(`Node "${B}" installed successfully!`), await W()) : alert(`Failed to install node: ${A.message || "Unknown error"}`);
        } catch (A) {
          alert(`Error installing node: ${A instanceof Error ? A.message : "Unknown error"}`);
        } finally {
          g.value = !1;
        }
    }
    async function M(B) {
      if (confirm(`Check for updates for "${B}"?`))
        try {
          g.value = !0;
          const A = await i(B);
          A.status === "success" ? (alert(`Node "${B}" is up to date or has been updated!`), await W()) : alert(`Update check failed: ${A.message || "Unknown error"}`);
        } catch (A) {
          alert(`Error checking for updates: ${A instanceof Error ? A.message : "Unknown error"}`);
        } finally {
          g.value = !1;
        }
    }
    async function T(B) {
      if (confirm(`Uninstall node "${B}"?

This will remove the node from this environment.`))
        try {
          g.value = !0;
          const A = await m(B);
          A.status === "success" ? (alert(`Node "${B}" uninstalled successfully!`), await W()) : alert(`Failed to uninstall node: ${A.message || "Unknown error"}`);
        } catch (A) {
          alert(`Error uninstalling node: ${A instanceof Error ? A.message : "Unknown error"}`);
        } finally {
          g.value = !1;
        }
    }
    async function W() {
      g.value = !0, h.value = null;
      try {
        p.value = await r();
      } catch (B) {
        h.value = B instanceof Error ? B.message : "Failed to load nodes";
      } finally {
        g.value = !1;
      }
    }
    return ge(W), (B, A) => (o(), s(H, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: A[0] || (A[0] = (R) => f.value = !0)
          })
        ]),
        search: n(() => [
          c(Ke, {
            modelValue: u.value,
            "onUpdate:modelValue": A[1] || (A[1] = (R) => u.value = R),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          g.value ? (o(), _(De, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : h.value ? (o(), _(Oe, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            p.value.total_count ? (o(), _(qe, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                v(" Total: " + l(p.value.total_count) + " nodes • " + l(p.value.installed_count) + " installed • " + l(p.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : d("", !0),
            b.value.length ? (o(), _(me, {
              key: 1,
              title: "INSTALLED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(b.value, (R) => (o(), _(fe, {
                  key: R.name,
                  status: "synced"
                }, {
                  icon: n(() => [...A[4] || (A[4] = [
                    v("📦", -1)
                  ])]),
                  title: n(() => [
                    v(l(R.name), 1)
                  ]),
                  subtitle: n(() => [
                    R.version ? (o(), s("span", Jd, "v" + l(R.version), 1)) : (o(), s("span", Qd, "version unknown")),
                    R.source ? (o(), s("span", ec, " • " + l(w(R.source)), 1)) : d("", !0)
                  ]),
                  details: n(() => [
                    R.description ? (o(), _(se, {
                      key: 0,
                      label: "Description:",
                      value: R.description
                    }, null, 8, ["value"])) : d("", !0),
                    R.repository ? (o(), _(se, {
                      key: 1,
                      label: "Repository:",
                      value: R.repository
                    }, null, 8, ["value"])) : d("", !0),
                    c(se, {
                      label: "Used by:",
                      value: E(R)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    R.repository ? (o(), _(P, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => C(R.repository)
                    }, {
                      default: n(() => [...A[5] || (A[5] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    R.source === "registry" ? (o(), _(P, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => M(R.name)
                    }, {
                      default: n(() => [...A[6] || (A[6] = [
                        v(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    R.source !== "unknown" ? (o(), _(P, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (O) => T(R.name)
                    }, {
                      default: n(() => [...A[7] || (A[7] = [
                        v(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            y.value.length ? (o(), _(me, {
              key: 2,
              title: "MISSING",
              count: y.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(y.value, (R) => (o(), _(fe, {
                  key: R.name,
                  status: "missing"
                }, {
                  icon: n(() => [...A[8] || (A[8] = [
                    v("⚠", -1)
                  ])]),
                  title: n(() => [
                    v(l(R.name), 1)
                  ]),
                  subtitle: n(() => [...A[9] || (A[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: n(() => [
                    R.description ? (o(), _(se, {
                      key: 0,
                      label: "Description:",
                      value: R.description
                    }, null, 8, ["value"])) : d("", !0),
                    R.repository ? (o(), _(se, {
                      key: 1,
                      label: "Repository:",
                      value: R.repository
                    }, null, 8, ["value"])) : d("", !0),
                    c(se, {
                      label: "Required by:",
                      value: E(R)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    R.download_url ? (o(), _(P, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => z(R.name)
                    }, {
                      default: n(() => [...A[10] || (A[10] = [
                        v(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    R.repository ? (o(), _(P, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => C(R.repository)
                    }, {
                      default: n(() => [...A[11] || (A[11] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !b.value.length && !y.value.length ? (o(), _(Me, {
              key: 3,
              icon: "📭",
              message: u.value ? `No nodes match '${u.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      c(Be, {
        show: f.value,
        title: "About Git-Tracked Nodes",
        onClose: A[3] || (A[3] = (R) => f.value = !1)
      }, {
        content: n(() => [...A[12] || (A[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            v(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            v(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: n(() => [
          c(P, {
            variant: "primary",
            onClick: A[2] || (A[2] = (R) => f.value = !1)
          }, {
            default: n(() => [...A[13] || (A[13] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), oc = /* @__PURE__ */ Y(tc, [["__scopeId", "data-v-c480e2c1"]]), sc = { class: "remote-url-display" }, ac = ["title"], nc = ["title"], lc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ic = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, rc = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, a = x(!1), i = D(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const p = r.url.slice(0, Math.floor(r.maxLength * 0.6)), g = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${p}...${g}`;
    });
    async function m() {
      try {
        await navigator.clipboard.writeText(r.url), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy URL:", p);
      }
    }
    return (p, g) => (o(), s("div", sc, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, ac),
      e("button", {
        class: J(["copy-btn", { copied: a.value }]),
        onClick: m,
        title: a.value ? "Copied!" : "Copy URL"
      }, [
        a.value ? (o(), s("svg", ic, [...g[1] || (g[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", lc, [...g[0] || (g[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, nc)
    ]));
  }
}), xt = /* @__PURE__ */ Y(rc, [["__scopeId", "data-v-7768a58d"]]), dc = { class: "remote-title" }, cc = {
  key: 0,
  class: "default-badge"
}, uc = {
  key: 1,
  class: "sync-badge"
}, mc = {
  key: 0,
  class: "ahead"
}, vc = {
  key: 1,
  class: "behind"
}, fc = {
  key: 0,
  class: "tracking-info"
}, gc = /* @__PURE__ */ q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const a = t, i = D(() => a.fetchingRemote === a.remote.name), m = D(() => a.remote.is_default), p = D(() => !!a.trackingBranch);
    function g(h) {
      const u = new Date(h), k = (/* @__PURE__ */ new Date()).getTime() - u.getTime(), b = Math.floor(k / 6e4);
      if (b < 1) return "Just now";
      if (b < 60) return `${b}m ago`;
      const y = Math.floor(b / 60);
      if (y < 24) return `${y}h ago`;
      const w = Math.floor(y / 24);
      return w < 7 ? `${w}d ago` : u.toLocaleDateString();
    }
    return (h, u) => (o(), _(fe, {
      status: m.value ? "synced" : void 0
    }, {
      icon: n(() => [
        v(l(m.value ? "🔗" : "🌐"), 1)
      ]),
      title: n(() => [
        e("div", dc, [
          e("span", null, l(t.remote.name), 1),
          m.value ? (o(), s("span", cc, "DEFAULT")) : d("", !0),
          t.syncStatus ? (o(), s("span", uc, [
            t.syncStatus.ahead > 0 ? (o(), s("span", mc, "↑" + l(t.syncStatus.ahead), 1)) : d("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", vc, "↓" + l(t.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: n(() => [
        p.value ? (o(), s("span", fc, " Tracking: " + l(t.trackingBranch), 1)) : d("", !0)
      ]),
      details: n(() => {
        var f;
        return [
          c(se, { label: "Fetch:" }, {
            default: n(() => [
              c(xt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), _(se, {
            key: 0,
            label: "Push:"
          }, {
            default: n(() => [
              c(xt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (f = t.syncStatus) != null && f.last_fetch ? (o(), _(se, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: n(() => [
              e("span", null, l(g(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: n(() => [
        c(P, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: u[0] || (u[0] = (f) => h.$emit("fetch", t.remote.name))
        }, {
          default: n(() => [...u[3] || (u[3] = [
            v(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        c(P, {
          variant: "secondary",
          size: "xs",
          onClick: u[1] || (u[1] = (f) => h.$emit("edit", t.remote.name))
        }, {
          default: n(() => [...u[4] || (u[4] = [
            v(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        m.value ? d("", !0) : (o(), _(P, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: u[2] || (u[2] = (f) => h.$emit("remove", t.remote.name))
        }, {
          default: n(() => [...u[5] || (u[5] = [
            v(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), hc = /* @__PURE__ */ Y(gc, [["__scopeId", "data-v-17362e45"]]), pc = ["for"], yc = {
  key: 0,
  class: "base-form-field-required"
}, wc = { class: "base-form-field-input" }, bc = {
  key: 1,
  class: "base-form-field-error"
}, kc = {
  key: 2,
  class: "base-form-field-hint"
}, _c = /* @__PURE__ */ q({
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
    const r = t, a = D(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, m) => (o(), s("div", {
      class: J(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: a.value,
        class: "base-form-field-label"
      }, [
        v(l(t.label) + " ", 1),
        t.required ? (o(), s("span", yc, "*")) : d("", !0)
      ], 8, pc)) : d("", !0),
      e("div", wc, [
        le(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", bc, l(t.error), 1)) : t.hint ? (o(), s("span", kc, l(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ Y(_c, [["__scopeId", "data-v-9a1cf296"]]), $c = { class: "remote-form" }, Cc = { class: "form-header" }, xc = { class: "form-body" }, Sc = {
  key: 0,
  class: "form-error"
}, Ic = { class: "form-actions" }, Ec = /* @__PURE__ */ q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const a = t, i = r, m = x({
      name: a.remoteName,
      fetchUrl: a.fetchUrl,
      pushUrl: a.pushUrl
    }), p = x(!1), g = x(null);
    Et(() => [a.remoteName, a.fetchUrl, a.pushUrl], () => {
      m.value = {
        name: a.remoteName,
        fetchUrl: a.fetchUrl,
        pushUrl: a.pushUrl
      };
    });
    const h = D(() => m.value.name.trim() !== "" && m.value.fetchUrl.trim() !== "");
    async function u() {
      if (!(!h.value || p.value)) {
        g.value = null, p.value = !0;
        try {
          i("submit", m.value);
        } catch (f) {
          g.value = f instanceof Error ? f.message : "Failed to submit form";
        } finally {
          p.value = !1;
        }
      }
    }
    return (f, k) => (o(), s("div", $c, [
      e("div", Cc, [
        c(_e, null, {
          default: n(() => [
            v(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", xc, [
        c(vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: n(() => [
            c(Ae, {
              modelValue: m.value.name,
              "onUpdate:modelValue": k[0] || (k[0] = (b) => m.value.name = b),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        c(vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: n(() => [
            c(Ae, {
              modelValue: m.value.fetchUrl,
              "onUpdate:modelValue": k[1] || (k[1] = (b) => m.value.fetchUrl = b),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c(vt, { label: "Push URL (optional)" }, {
          default: n(() => [
            c(Ae, {
              modelValue: m.value.pushUrl,
              "onUpdate:modelValue": k[2] || (k[2] = (b) => m.value.pushUrl = b),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g.value ? (o(), s("div", Sc, l(g.value), 1)) : d("", !0)
      ]),
      e("div", Ic, [
        c(P, {
          variant: "primary",
          size: "md",
          disabled: !h.value,
          loading: p.value,
          onClick: u
        }, {
          default: n(() => [
            v(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        c(P, {
          variant: "ghost",
          size: "md",
          onClick: k[3] || (k[3] = (b) => f.$emit("cancel"))
        }, {
          default: n(() => [...k[4] || (k[4] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), zc = /* @__PURE__ */ Y(Ec, [["__scopeId", "data-v-56021b18"]]), Mc = { key: 0 }, Lc = /* @__PURE__ */ q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: a,
      removeRemote: i,
      updateRemoteUrl: m,
      fetchRemote: p,
      getRemoteSyncStatus: g
    } = be(), h = x([]), u = x(null), f = x({}), k = x(!1), b = x(null), y = x(""), w = x(!1), E = x(null), C = x(!1), z = x("add"), M = x({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = D(() => {
      if (!y.value.trim()) return h.value;
      const j = y.value.toLowerCase();
      return h.value.filter(
        (I) => I.name.toLowerCase().includes(j) || I.fetch_url.toLowerCase().includes(j) || I.push_url.toLowerCase().includes(j)
      );
    });
    function W(j) {
      var I;
      return ((I = u.value) == null ? void 0 : I.remote) === j;
    }
    async function B() {
      k.value = !0, b.value = null;
      try {
        const j = await r();
        h.value = j.remotes, u.value = j.current_branch_tracking || null, await Promise.all(
          j.remotes.map(async (I) => {
            const V = await g(I.name);
            V && (f.value[I.name] = V);
          })
        );
      } catch (j) {
        b.value = j instanceof Error ? j.message : "Failed to load remotes";
      } finally {
        k.value = !1;
      }
    }
    function A() {
      z.value = "add", M.value = { name: "", fetchUrl: "", pushUrl: "" }, C.value = !0;
    }
    function R(j) {
      const I = h.value.find((V) => V.name === j);
      I && (z.value = "edit", M.value = {
        name: I.name,
        fetchUrl: I.fetch_url,
        pushUrl: I.push_url
      }, C.value = !0);
    }
    async function O(j) {
      try {
        z.value === "add" ? await a(j.name, j.fetchUrl) : await m(j.name, j.fetchUrl, j.pushUrl || void 0), C.value = !1, await B();
      } catch (I) {
        b.value = I instanceof Error ? I.message : "Operation failed";
      }
    }
    function L() {
      C.value = !1, M.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function U(j) {
      E.value = j;
      try {
        await p(j);
        const I = await g(j);
        I && (f.value[j] = I);
      } catch (I) {
        b.value = I instanceof Error ? I.message : "Fetch failed";
      } finally {
        E.value = null;
      }
    }
    async function N(j) {
      if (confirm(`Remove remote "${j}"?`))
        try {
          await i(j), await B();
        } catch (I) {
          b.value = I instanceof Error ? I.message : "Failed to remove remote";
        }
    }
    function K() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ge(B), (j, I) => (o(), s(H, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (V) => w.value = !0)
          }, {
            actions: n(() => [
              C.value ? d("", !0) : (o(), _(P, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: n(() => [...I[3] || (I[3] = [
                  v(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          C.value ? d("", !0) : (o(), _(Ke, {
            key: 0,
            modelValue: y.value,
            "onUpdate:modelValue": I[1] || (I[1] = (V) => y.value = V),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: n(() => [
          k.value ? (o(), _(De, {
            key: 0,
            message: "Loading remotes..."
          })) : b.value ? (o(), _(Oe, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            C.value ? (o(), _(zc, {
              key: 0,
              mode: z.value,
              "remote-name": M.value.name,
              "fetch-url": M.value.fetchUrl,
              "push-url": M.value.pushUrl,
              onSubmit: O,
              onCancel: L
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            h.value.length && !C.value ? (o(), _(qe, {
              key: 1,
              variant: "compact"
            }, {
              default: n(() => [
                v(" Total: " + l(h.value.length) + " remote" + l(h.value.length !== 1 ? "s" : "") + " ", 1),
                u.value ? (o(), s("span", Mc, " • Tracking: " + l(u.value.remote) + "/" + l(u.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            T.value.length && !C.value ? (o(), _(me, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: n(() => [
                (o(!0), s(H, null, Z(T.value, (V) => {
                  var te;
                  return o(), _(hc, {
                    key: V.name,
                    remote: V,
                    "sync-status": f.value[V.name],
                    "tracking-branch": W(V.name) ? (te = u.value) == null ? void 0 : te.branch : void 0,
                    "fetching-remote": E.value,
                    onFetch: U,
                    onEdit: R,
                    onRemove: N
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !T.value.length && !C.value ? (o(), _(Me, {
              key: 3,
              icon: "🌐",
              message: y.value ? `No remotes match '${y.value}'` : "No remotes configured."
            }, {
              actions: n(() => [
                c(P, {
                  variant: "primary",
                  onClick: A
                }, {
                  default: n(() => [...I[4] || (I[4] = [
                    v(" Add Your First Remote ", -1)
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
      c(Be, {
        show: w.value,
        title: "About Git Remotes",
        onClose: I[2] || (I[2] = (V) => w.value = !1)
      }, {
        content: n(() => [...I[5] || (I[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            v(" The "),
            e("strong", null, '"origin"'),
            v(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: n(() => [
          c(P, {
            variant: "link",
            onClick: K
          }, {
            default: n(() => [...I[6] || (I[6] = [
              v(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Rc = /* @__PURE__ */ Y(Lc, [["__scopeId", "data-v-a75719bb"]]), Uc = { class: "setting-info" }, Nc = { class: "setting-label" }, Tc = {
  key: 0,
  class: "required-marker"
}, Bc = {
  key: 0,
  class: "setting-description"
}, Dc = { class: "setting-control" }, Oc = /* @__PURE__ */ q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (o(), s("div", {
      class: J(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Uc, [
        e("div", Nc, [
          v(l(t.label) + " ", 1),
          t.required ? (o(), s("span", Tc, "*")) : d("", !0)
        ]),
        t.description ? (o(), s("div", Bc, l(t.description), 1)) : d("", !0)
      ]),
      e("div", Dc, [
        le(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ Y(Oc, [["__scopeId", "data-v-cb5d236c"]]), Vc = { class: "toggle" }, Ac = ["checked", "disabled"], Fc = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (o(), s("label", Vc, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: a[0] || (a[0] = (i) => r.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Ac),
      a[1] || (a[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ge = /* @__PURE__ */ Y(Fc, [["__scopeId", "data-v-71c0f550"]]), Wc = { class: "settings-section" }, Pc = { class: "path-setting" }, Hc = { class: "path-value" }, Gc = { class: "path-setting" }, jc = { class: "path-value" }, Kc = { class: "settings-section" }, qc = { class: "settings-section" }, Yc = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: a } = be(), i = x(!1), m = x(null), p = x(null), g = x(null), h = x(null), u = x(""), f = x(""), k = x(!0), b = x(!0), y = D(() => h.value ? u.value !== (h.value.civitai_api_key || "") : !1);
    async function w() {
      i.value = !0, m.value = null;
      try {
        g.value = await r(), h.value = { ...g.value }, u.value = g.value.civitai_api_key || "", f.value = g.value.huggingface_token || "", k.value = g.value.auto_sync_models, b.value = g.value.confirm_destructive;
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function E() {
      var z;
      p.value = null;
      try {
        const M = {};
        u.value !== (((z = h.value) == null ? void 0 : z.civitai_api_key) || "") && (M.civitai_api_key = u.value || null), await a(M), await w(), p.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          p.value = null;
        }, 3e3);
      } catch (M) {
        p.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to save settings"
        };
      }
    }
    function C() {
      h.value && (u.value = h.value.civitai_api_key || "", f.value = h.value.huggingface_token || "", k.value = h.value.auto_sync_models, b.value = h.value.confirm_destructive, p.value = null);
    }
    return ge(w), (z, M) => (o(), _(ye, null, {
      header: n(() => [
        c(we, { title: "WORKSPACE SETTINGS" }, {
          actions: n(() => [
            c(P, {
              variant: "primary",
              size: "sm",
              disabled: !y.value,
              onClick: E
            }, {
              default: n(() => [...M[4] || (M[4] = [
                v(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            y.value ? (o(), _(P, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: C
            }, {
              default: n(() => [...M[5] || (M[5] = [
                v(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: n(() => [
        i.value ? (o(), _(De, {
          key: 0,
          message: "Loading workspace settings..."
        })) : m.value ? (o(), _(Oe, {
          key: 1,
          message: m.value,
          retry: !0,
          onRetry: w
        }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
          c(me, { title: "WORKSPACE PATHS" }, {
            default: n(() => {
              var T, W;
              return [
                e("div", Wc, [
                  e("div", Pc, [
                    M[6] || (M[6] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    M[7] || (M[7] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Hc, l(((T = g.value) == null ? void 0 : T.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Gc, [
                    M[8] || (M[8] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    M[9] || (M[9] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", jc, l(((W = g.value) == null ? void 0 : W.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          c(me, { title: "API CREDENTIALS" }, {
            default: n(() => [
              e("div", Kc, [
                c(Ve, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: n(() => [
                    c(tt, {
                      modelValue: u.value,
                      "onUpdate:modelValue": M[0] || (M[0] = (T) => u.value = T),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(Ve, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    c(tt, {
                      modelValue: f.value,
                      "onUpdate:modelValue": M[1] || (M[1] = (T) => f.value = T),
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
          c(me, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: n(() => [
              e("div", qc, [
                c(Ve, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    c(Ge, {
                      modelValue: k.value,
                      "onUpdate:modelValue": M[2] || (M[2] = (T) => k.value = T),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(Ve, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    c(Ge, {
                      modelValue: b.value,
                      "onUpdate:modelValue": M[3] || (M[3] = (T) => b.value = T),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          p.value ? (o(), _(qe, {
            key: 0,
            variant: (p.value.type === "success", "compact")
          }, {
            default: n(() => [
              e("span", {
                style: ot({ color: p.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(p.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Xc = /* @__PURE__ */ Y(Yc, [["__scopeId", "data-v-8b092643"]]), Zc = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = be(), a = x([]), i = x(!1), m = x(null), p = x(!1), g = x(null), h = D(() => a.value.length === 0 ? [] : a.value.map((f) => ({
      text: `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function u() {
      i.value = !0, m.value = null;
      try {
        a.value = await r(void 0, 500);
      } catch (f) {
        m.value = f instanceof Error ? f.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var f;
          (f = g.value) != null && f.parentElement && (g.value.parentElement.scrollTop = g.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ge(u), (f, k) => (o(), s(H, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = (b) => p.value = !0)
          }, {
            actions: n(() => [
              c(P, {
                variant: "secondary",
                size: "sm",
                onClick: u,
                disabled: i.value
              }, {
                default: n(() => [
                  v(l(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: n(() => [
          i.value ? (o(), _(De, {
            key: 0,
            message: "Loading workspace logs..."
          })) : m.value ? (o(), _(Oe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: u
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            a.value.length === 0 ? (o(), _(Me, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: g,
              class: "log-output"
            }, [
              (o(!0), s(H, null, Z(h.value, (b, y) => (o(), s("div", {
                key: y,
                class: J(`log-line log-level-${b.level.toLowerCase()}`)
              }, l(b.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      c(Be, {
        show: p.value,
        title: "About Workspace Logs",
        onClose: k[2] || (k[2] = (b) => p.value = !1)
      }, {
        content: n(() => [...k[3] || (k[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            v(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            v(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: n(() => [
          c(P, {
            variant: "primary",
            onClick: k[1] || (k[1] = (b) => p.value = !1)
          }, {
            default: n(() => [...k[4] || (k[4] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Jc = /* @__PURE__ */ Y(Zc, [["__scopeId", "data-v-39f6a756"]]), Qc = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: a } = be(), i = x([]), m = x(!1), p = x(null), g = x(!1), h = x("production"), u = x(null), f = D(() => i.value.length === 0 ? [] : i.value.map((b) => ({
      text: `${b.timestamp} - ${b.name} - ${b.level} - ${b.func}:${b.line} - ${b.message}`,
      level: b.level
    })));
    async function k() {
      m.value = !0, p.value = null;
      try {
        i.value = await r(void 0, 500);
        try {
          const b = await a();
          h.value = b.environment || "production";
        } catch {
        }
      } catch (b) {
        p.value = b instanceof Error ? b.message : "Failed to load environment logs";
      } finally {
        m.value = !1, setTimeout(() => {
          var b;
          (b = u.value) != null && b.parentElement && (u.value.parentElement.scrollTop = u.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ge(k), (b, y) => (o(), s(H, null, [
      c(ye, null, {
        header: n(() => [
          c(we, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: y[0] || (y[0] = (w) => g.value = !0)
          }, {
            actions: n(() => [
              c(P, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: m.value
              }, {
                default: n(() => [
                  v(l(m.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: n(() => [
          m.value ? (o(), _(De, {
            key: 0,
            message: "Loading environment logs..."
          })) : p.value ? (o(), _(Oe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            i.value.length === 0 ? (o(), _(Me, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: u,
              class: "log-output"
            }, [
              (o(!0), s(H, null, Z(f.value, (w, E) => (o(), s("div", {
                key: E,
                class: J(`log-line log-level-${w.level.toLowerCase()}`)
              }, l(w.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      c(Be, {
        show: g.value,
        title: "About Environment Logs",
        onClose: y[2] || (y[2] = (w) => g.value = !1)
      }, {
        content: n(() => [
          e("p", null, [
            y[3] || (y[3] = v(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(h.value), 1),
            y[4] || (y[4] = v(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          y[5] || (y[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            v(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            v(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1)),
          y[6] || (y[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: n(() => [
          c(P, {
            variant: "primary",
            onClick: y[1] || (y[1] = (w) => g.value = !1)
          }, {
            default: n(() => [...y[7] || (y[7] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), eu = /* @__PURE__ */ Y(Qc, [["__scopeId", "data-v-4f1e6f72"]]), tu = { class: "env-title" }, ou = {
  key: 0,
  class: "current-badge"
}, su = {
  key: 0,
  class: "branch-info"
}, au = /* @__PURE__ */ q({
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
    return (r, a) => (o(), _(fe, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: n(() => [
        v(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: n(() => [
        e("div", tu, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", ou, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: n(() => [
        t.currentBranch ? (o(), s("span", su, [
          a[0] || (a[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          v(" " + l(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      details: n(() => [
        c(se, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        c(se, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        c(se, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), _(se, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : d("", !0)
      ]),
      actions: n(() => [
        le(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), nu = /* @__PURE__ */ Y(au, [["__scopeId", "data-v-5238e57c"]]), lu = {
  key: 0,
  class: "create-form"
}, iu = { class: "create-form__header" }, ru = { class: "create-form__body" }, du = { class: "create-form__actions" }, cu = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, uu = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: r }) {
    const a = r, { getEnvironments: i } = be(), m = x([]), p = x(!1), g = x(null), h = x(""), u = x(!1), f = x(!1), k = x(""), b = D(
      () => m.value.find((W) => W.is_current)
    ), y = D(() => {
      if (!h.value.trim()) return m.value;
      const W = h.value.toLowerCase();
      return m.value.filter(
        (B) => {
          var A;
          return B.name.toLowerCase().includes(W) || ((A = B.current_branch) == null ? void 0 : A.toLowerCase().includes(W));
        }
      );
    });
    function w(W) {
      if (!W) return "";
      try {
        const B = new Date(W), R = (/* @__PURE__ */ new Date()).getTime() - B.getTime(), O = Math.floor(R / 6e4), L = Math.floor(R / 36e5), U = Math.floor(R / 864e5);
        return O < 1 ? "just now" : O < 60 ? `${O} ${O === 1 ? "minute" : "minutes"} ago` : L < 24 ? `${L} ${L === 1 ? "hour" : "hours"} ago` : U < 30 ? `${U} ${U === 1 ? "day" : "days"} ago` : B.toLocaleDateString();
      } catch {
        return W;
      }
    }
    function E() {
      const W = k.value.trim();
      W && (a("create", W), k.value = "", f.value = !1);
    }
    function C() {
      k.value = "", f.value = !1;
    }
    function z(W) {
      a("viewDetails", W);
    }
    function M(W) {
      confirm(`Delete environment "${W}"?

This action cannot be undone.`) && a("delete", W);
    }
    async function T() {
      p.value = !0, g.value = null;
      try {
        m.value = await i();
      } catch (W) {
        g.value = W instanceof Error ? W.message : "Failed to load environments";
      } finally {
        p.value = !1;
      }
    }
    return ge(T), (W, B) => {
      const A = Zt("SectionGroup");
      return o(), s(H, null, [
        c(ye, null, {
          header: n(() => [
            c(we, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: B[1] || (B[1] = (R) => u.value = !0)
            }, {
              actions: n(() => [
                c(P, {
                  variant: "ghost",
                  size: "sm",
                  onClick: B[0] || (B[0] = (R) => f.value = !0),
                  title: "Create new environment"
                }, {
                  default: n(() => [...B[7] || (B[7] = [
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
                c(P, {
                  variant: "ghost",
                  size: "sm",
                  onClick: T,
                  title: "Refresh environments"
                }, {
                  default: n(() => [...B[8] || (B[8] = [
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
          search: n(() => [
            c(Ke, {
              modelValue: h.value,
              "onUpdate:modelValue": B[2] || (B[2] = (R) => h.value = R),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: n(() => [
            p.value ? (o(), _(De, {
              key: 0,
              message: "Loading environments..."
            })) : g.value ? (o(), _(Oe, {
              key: 1,
              message: g.value,
              retry: !0,
              onRetry: T
            }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
              f.value ? (o(), s("div", lu, [
                e("div", iu, [
                  B[10] || (B[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  c(P, {
                    variant: "ghost",
                    size: "xs",
                    onClick: C
                  }, {
                    default: n(() => [...B[9] || (B[9] = [
                      v(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", ru, [
                  c(tt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": B[3] || (B[3] = (R) => k.value = R),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Te(E, ["enter"]),
                      Te(C, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", du, [
                    c(P, {
                      variant: "primary",
                      size: "sm",
                      onClick: E,
                      disabled: !k.value.trim()
                    }, {
                      default: n(() => [...B[11] || (B[11] = [
                        v(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    c(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: n(() => [...B[12] || (B[12] = [
                        v(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : d("", !0),
              m.value.length ? (o(), _(qe, {
                key: 1,
                variant: "compact"
              }, {
                default: n(() => [
                  v(" Total: " + l(m.value.length) + " " + l(m.value.length === 1 ? "environment" : "environments") + " ", 1),
                  b.value ? (o(), s(H, { key: 0 }, [
                    B[13] || (B[13] = v(" • Current: ", -1)),
                    e("strong", null, l(b.value.name), 1)
                  ], 64)) : d("", !0)
                ]),
                _: 1
              })) : d("", !0),
              y.value.length ? (o(), _(A, {
                key: 2,
                title: "ENVIRONMENTS",
                count: y.value.length
              }, {
                default: n(() => [
                  (o(!0), s(H, null, Z(y.value, (R) => (o(), _(nu, {
                    key: R.name,
                    "environment-name": R.name,
                    "is-current": R.is_current,
                    "current-branch": R.current_branch,
                    "workflow-count": R.workflow_count,
                    "node-count": R.node_count,
                    "model-count": R.model_count,
                    "last-used": w(R.last_used),
                    "show-last-used": !!R.last_used
                  }, {
                    actions: n(() => [
                      R.is_current ? d("", !0) : (o(), _(P, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (O) => W.$emit("switch", R.name)
                      }, {
                        default: n(() => [...B[14] || (B[14] = [
                          v(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      c(P, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (O) => z(R.name),
                        title: "View environment details"
                      }, {
                        default: n(() => [...B[15] || (B[15] = [
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
                      !R.is_current && m.value.length > 1 ? (o(), _(P, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (O) => M(R.name),
                        title: "Delete environment"
                      }, {
                        default: n(() => [
                          (o(), s("svg", cu, [...B[16] || (B[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : d("", !0),
              y.value.length ? d("", !0) : (o(), _(Me, {
                key: 3,
                icon: "🌍",
                message: h.value ? `No environments match '${h.value}'` : "No environments found. Create one to get started!"
              }, zt({ _: 2 }, [
                h.value ? void 0 : {
                  name: "actions",
                  fn: n(() => [
                    c(P, {
                      variant: "primary",
                      onClick: B[4] || (B[4] = (R) => f.value = !0)
                    }, {
                      default: n(() => [...B[17] || (B[17] = [
                        v(" Create Environment ", -1)
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
        c(Be, {
          show: u.value,
          title: "About Environments",
          onClose: B[6] || (B[6] = (R) => u.value = !1)
        }, {
          content: n(() => [...B[18] || (B[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              v(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          actions: n(() => [
            c(P, {
              variant: "secondary",
              onClick: B[5] || (B[5] = (R) => u.value = !1)
            }, {
              default: n(() => [...B[19] || (B[19] = [
                v(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), mu = /* @__PURE__ */ Y(uu, [["__scopeId", "data-v-97d6527d"]]), vu = { class: "file-path" }, fu = { class: "file-path-text" }, gu = ["title"], hu = /* @__PURE__ */ q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = x(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(r.path), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (m) {
        console.error("Failed to copy:", m);
      }
    }
    return (m, p) => (o(), s("div", vu, [
      p[0] || (p[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", fu, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: a.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(a.value ? "✓" : "📋"), 9, gu)) : d("", !0)
    ]));
  }
}), pu = /* @__PURE__ */ Y(hu, [["__scopeId", "data-v-f0982173"]]), yu = { class: "output-path-input" }, wu = { class: "export-actions" }, bu = {
  key: 1,
  class: "export-warning"
}, ku = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = be(), a = x(""), i = x(!1), m = x(null), p = x(!1);
    async function g() {
      i.value = !0, m.value = null;
      try {
        const u = await r(a.value || void 0);
        m.value = u;
      } catch (u) {
        m.value = {
          status: "error",
          message: u instanceof Error ? u.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function h() {
      var u;
      if ((u = m.value) != null && u.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (f) {
          console.error("Failed to copy path:", f);
        }
    }
    return (u, f) => (o(), s(H, null, [
      c(ye, null, {
        header: n(() => [
          c(we, { title: "EXPORT ENVIRONMENT" }, {
            actions: n(() => [
              c(P, {
                variant: "ghost",
                size: "sm",
                onClick: f[0] || (f[0] = (k) => p.value = !0),
                title: "About exporting"
              }, {
                default: n(() => [...f[5] || (f[5] = [
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
        content: n(() => [
          c(me, { title: "WHAT WILL BE EXPORTED" }, {
            default: n(() => [
              c(fe, { status: "synced" }, {
                icon: n(() => [...f[6] || (f[6] = [
                  v("📦", -1)
                ])]),
                title: n(() => [...f[7] || (f[7] = [
                  v("Environment Snapshot", -1)
                ])]),
                subtitle: n(() => [...f[8] || (f[8] = [
                  v(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: n(() => [
                  c(se, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  c(se, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  c(se, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  c(se, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          c(me, { title: "EXPORT OPTIONS" }, {
            default: n(() => [
              c(fe, { status: "synced" }, {
                icon: n(() => [...f[9] || (f[9] = [
                  v("📁", -1)
                ])]),
                title: n(() => [...f[10] || (f[10] = [
                  v("Output Destination", -1)
                ])]),
                subtitle: n(() => [...f[11] || (f[11] = [
                  v(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: n(() => [
                  e("div", yu, [
                    c(tt, {
                      modelValue: a.value,
                      "onUpdate:modelValue": f[1] || (f[1] = (k) => a.value = k),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          c(me, { title: "EXPORT" }, {
            default: n(() => [
              e("div", wu, [
                c(P, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: g
                }, {
                  default: n(() => [
                    f[12] || (f[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    v(" " + l(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                a.value ? (o(), _(P, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: f[2] || (f[2] = (k) => a.value = "")
                }, {
                  default: n(() => [...f[13] || (f[13] = [
                    v(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          m.value ? (o(), _(me, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: n(() => [
              c(fe, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, zt({
                icon: n(() => [
                  v(l(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: n(() => [
                  v(l(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: n(() => [
                  v(l(m.value.status === "success" ? "Your environment has been exported" : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: n(() => [
                    c(se, { label: "Saved to:" }, {
                      default: n(() => [
                        c(pu, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (o(), _(se, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (o(), s("div", bu, [...f[14] || (f[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: n(() => [
                    c(P, {
                      variant: "secondary",
                      size: "sm",
                      onClick: h
                    }, {
                      default: n(() => [...f[15] || (f[15] = [
                        v(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    c(P, {
                      variant: "ghost",
                      size: "sm",
                      onClick: f[3] || (f[3] = (k) => m.value = null)
                    }, {
                      default: n(() => [...f[16] || (f[16] = [
                        v(" Dismiss ", -1)
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
      c(Be, {
        show: p.value,
        title: "About Environment Export",
        onClose: f[4] || (f[4] = (k) => p.value = !1)
      }, {
        content: n(() => [...f[17] || (f[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            v(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _u = /* @__PURE__ */ Y(ku, [["__scopeId", "data-v-1777a9d5"]]), $u = { class: "file-input-wrapper" }, Cu = ["accept", "multiple", "disabled"], xu = /* @__PURE__ */ q({
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
  setup(t, { expose: r, emit: a }) {
    const i = a, m = x(null);
    function p() {
      var h;
      (h = m.value) == null || h.click();
    }
    function g(h) {
      const u = h.target;
      u.files && u.files.length > 0 && (i("change", u.files), u.value = "");
    }
    return r({
      triggerInput: p
    }), (h, u) => (o(), s("div", $u, [
      e("input", {
        ref_key: "fileInputRef",
        ref: m,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: g
      }, null, 40, Cu),
      c(P, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: p
      }, {
        default: n(() => [
          le(h.$slots, "default", {}, () => [
            u[0] || (u[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            v(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Su = /* @__PURE__ */ Y(xu, [["__scopeId", "data-v-cd192091"]]), Iu = {
  key: 0,
  class: "drop-zone-empty"
}, Eu = { class: "drop-zone-text" }, zu = { class: "drop-zone-primary" }, Mu = { class: "drop-zone-secondary" }, Lu = { class: "drop-zone-actions" }, Ru = {
  key: 1,
  class: "drop-zone-file"
}, Uu = { class: "file-info" }, Nu = { class: "file-details" }, Tu = { class: "file-name" }, Bu = { class: "file-size" }, Du = /* @__PURE__ */ q({
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
    const a = r, i = x(!1), m = x(null), p = x(0), g = D(() => m.value !== null), h = D(() => {
      var z;
      return ((z = m.value) == null ? void 0 : z.name) || "";
    }), u = D(() => {
      if (!m.value) return "";
      const z = m.value.size;
      return z < 1024 ? `${z} B` : z < 1024 * 1024 ? `${(z / 1024).toFixed(1)} KB` : z < 1024 * 1024 * 1024 ? `${(z / (1024 * 1024)).toFixed(1)} MB` : `${(z / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f(z) {
      var M;
      p.value++, (M = z.dataTransfer) != null && M.types.includes("Files") && (i.value = !0);
    }
    function k(z) {
      z.dataTransfer && (z.dataTransfer.dropEffect = "copy");
    }
    function b() {
      p.value--, p.value === 0 && (i.value = !1);
    }
    function y(z) {
      var T;
      p.value = 0, i.value = !1;
      const M = (T = z.dataTransfer) == null ? void 0 : T.files;
      M && M.length > 0 && E(M[0]);
    }
    function w(z) {
      z.length > 0 && E(z[0]);
    }
    function E(z) {
      m.value = z, a("fileSelected", z);
    }
    function C() {
      m.value = null, a("clear");
    }
    return (z, M) => (o(), s("div", {
      class: J(["file-drop-zone", { "drop-active": i.value, "has-file": g.value }]),
      onDragenter: ve(f, ["prevent"]),
      onDragover: ve(k, ["prevent"]),
      onDragleave: ve(b, ["prevent"]),
      onDrop: ve(y, ["prevent"])
    }, [
      g.value ? (o(), s("div", Ru, [
        e("div", Uu, [
          M[1] || (M[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Nu, [
            e("div", Tu, l(h.value), 1),
            e("div", Bu, l(u.value), 1)
          ])
        ]),
        c(P, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: n(() => [...M[2] || (M[2] = [
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
      ])) : (o(), s("div", Iu, [
        M[0] || (M[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Eu, [
          e("p", zu, l(t.primaryText), 1),
          e("p", Mu, l(t.secondaryText), 1)
        ]),
        e("div", Lu, [
          c(Su, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: w
          }, {
            default: n(() => [
              v(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Ou = /* @__PURE__ */ Y(Du, [["__scopeId", "data-v-e00abbca"]]), Vu = { class: "import-preview" }, Au = { class: "preview-header" }, Fu = {
  key: 0,
  class: "source-env"
}, Wu = { class: "preview-content" }, Pu = { class: "preview-section" }, Hu = { class: "section-header" }, Gu = { class: "section-info" }, ju = { class: "section-count" }, Ku = {
  key: 0,
  class: "item-list"
}, qu = { class: "item-name" }, Yu = {
  key: 0,
  class: "item-more"
}, Xu = { class: "preview-section" }, Zu = { class: "section-header" }, Ju = { class: "section-info" }, Qu = { class: "section-count" }, em = {
  key: 0,
  class: "item-list"
}, tm = { class: "item-details" }, om = { class: "item-name" }, sm = { class: "item-meta" }, am = {
  key: 0,
  class: "item-more"
}, nm = { class: "preview-section" }, lm = { class: "section-header" }, im = { class: "section-info" }, rm = { class: "section-count" }, dm = {
  key: 0,
  class: "item-list"
}, cm = { class: "item-name" }, um = {
  key: 0,
  class: "item-more"
}, mm = {
  key: 0,
  class: "preview-section"
}, vm = { class: "git-info" }, fm = /* @__PURE__ */ q({
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
    const r = t, a = D(() => r.workflows.length), i = D(() => r.models.length), m = D(() => r.nodes.length);
    function p(g) {
      return g < 1024 ? `${g} B` : g < 1024 * 1024 ? `${(g / 1024).toFixed(1)} KB` : g < 1024 * 1024 * 1024 ? `${(g / (1024 * 1024)).toFixed(1)} MB` : `${(g / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (g, h) => (o(), s("div", Vu, [
      e("div", Au, [
        c(_e, null, {
          default: n(() => [...h[0] || (h[0] = [
            v("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Fu, [
          h[1] || (h[1] = v(" From: ", -1)),
          c(ht, null, {
            default: n(() => [
              v(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", Wu, [
        e("div", Pu, [
          e("div", Hu, [
            h[3] || (h[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Gu, [
              h[2] || (h[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", ju, l(a.value) + " file" + l(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", Ku, [
            (o(!0), s(H, null, Z(t.workflows.slice(0, t.maxPreviewItems), (u) => (o(), s("div", {
              key: u,
              class: "preview-item"
            }, [
              h[4] || (h[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", qu, l(u), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", Yu, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Xu, [
          e("div", Zu, [
            h[6] || (h[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Ju, [
              h[5] || (h[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Qu, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", em, [
            (o(!0), s(H, null, Z(t.models.slice(0, t.maxPreviewItems), (u) => (o(), s("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              h[7] || (h[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", tm, [
                e("span", om, l(u.filename), 1),
                e("span", sm, l(p(u.size)) + " • " + l(u.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", am, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", nm, [
          e("div", lm, [
            h[9] || (h[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", im, [
              h[8] || (h[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", rm, l(m.value) + " node" + l(m.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", dm, [
            (o(!0), s(H, null, Z(t.nodes.slice(0, t.maxPreviewItems), (u) => (o(), s("div", {
              key: u,
              class: "preview-item"
            }, [
              h[10] || (h[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", cm, l(u), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", um, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", mm, [
          h[11] || (h[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", vm, [
            t.gitBranch ? (o(), _(se, {
              key: 0,
              label: "Branch"
            }, {
              default: n(() => [
                c(ht, null, {
                  default: n(() => [
                    v(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (o(), _(se, {
              key: 1,
              label: "Commit"
            }, {
              default: n(() => [
                c(Ut, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), gm = /* @__PURE__ */ Y(fm, [["__scopeId", "data-v-182fe113"]]), hm = { class: "import-options" }, pm = { class: "options-container" }, ym = { class: "option-section" }, wm = { class: "conflict-options" }, bm = ["value", "checked", "onChange"], km = { class: "conflict-content" }, _m = { class: "conflict-label" }, $m = { class: "conflict-description" }, Cm = { class: "option-section" }, xm = { class: "component-toggles" }, Sm = /* @__PURE__ */ q({
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
    const a = r, i = [
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
    return (m, p) => (o(), s("div", hm, [
      c(_e, null, {
        default: n(() => [...p[4] || (p[4] = [
          v("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", pm, [
        e("div", ym, [
          c(gt, null, {
            default: n(() => [...p[5] || (p[5] = [
              v("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", wm, [
            (o(), s(H, null, Z(i, (g) => e("label", {
              key: g.value,
              class: J(["conflict-option", { active: t.conflictMode === g.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: g.value,
                checked: t.conflictMode === g.value,
                onChange: (h) => a("update:conflictMode", g.value)
              }, null, 40, bm),
              e("div", km, [
                e("span", _m, l(g.label), 1),
                e("span", $m, l(g.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Cm, [
          c(gt, null, {
            default: n(() => [...p[6] || (p[6] = [
              v("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", xm, [
            c(Ve, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: n(() => [
                c(Ge, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": p[0] || (p[0] = (g) => a("update:includeWorkflows", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            c(Ve, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: n(() => [
                c(Ge, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": p[1] || (p[1] = (g) => a("update:includeModels", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            c(Ve, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: n(() => [
                c(Ge, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": p[2] || (p[2] = (g) => a("update:includeNodes", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            c(Ve, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: n(() => [
                c(Ge, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": p[3] || (p[3] = (g) => a("update:includeGitHistory", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Im = /* @__PURE__ */ Y(Sm, [["__scopeId", "data-v-0ec212b0"]]), Em = {
  key: 0,
  class: "import-empty"
}, zm = { class: "import-help" }, Mm = {
  key: 1,
  class: "import-configure"
}, Lm = { class: "selected-file-bar" }, Rm = { class: "file-bar-content" }, Um = { class: "file-bar-info" }, Nm = { class: "file-bar-name" }, Tm = { class: "file-bar-size" }, Bm = { class: "import-actions" }, Dm = {
  key: 2,
  class: "import-progress"
}, Om = { class: "progress-content" }, Vm = { class: "progress-info" }, Am = { class: "progress-title" }, Fm = { class: "progress-detail" }, Wm = { class: "progress-bar" }, Pm = { class: "progress-status" }, Hm = {
  key: 3,
  class: "import-complete"
}, Gm = { class: "complete-message" }, jm = { class: "complete-title" }, Km = { class: "complete-details" }, qm = { class: "complete-actions" }, Ym = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const r = x(null), a = x(!1), i = x(!1), m = x(!1), p = x(""), g = x({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), h = x({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), u = x({
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
    }), f = D(() => g.value.includeWorkflows || g.value.includeModels || g.value.includeNodes || g.value.includeGitHistory);
    function k(C) {
      r.value = C;
    }
    function b() {
      r.value = null, i.value = !1, m.value = !1, p.value = "";
    }
    function y() {
      b(), a.value = !1, h.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function w() {
      if (r.value) {
        a.value = !0, i.value = !1;
        try {
          const C = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${u.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${u.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${u.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const z of C)
            h.value = z, await new Promise((M) => setTimeout(M, 800));
          h.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((z) => setTimeout(z, 500)), m.value = !0, p.value = `Successfully imported ${u.value.workflows.length} workflows, ${u.value.models.length} models, and ${u.value.nodes.length} custom nodes.`;
        } catch (C) {
          m.value = !1, p.value = C instanceof Error ? C.message : "Unknown error occurred during import";
        } finally {
          a.value = !1, i.value = !0;
        }
      }
    }
    function E(C) {
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (C, z) => (o(), _(ye, null, {
      header: n(() => [
        c(we, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: n(() => [
        !r.value && !a.value ? (o(), s("div", Em, [
          c(Ou, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: k
          }),
          e("div", zm, [
            c(_e, null, {
              default: n(() => [...z[5] || (z[5] = [
                v("How to Import", -1)
              ])]),
              _: 1
            }),
            z[6] || (z[6] = e("div", { class: "help-content" }, [
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
        ])) : r.value && !a.value && !i.value ? (o(), s("div", Mm, [
          e("div", Lm, [
            e("div", Rm, [
              z[7] || (z[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Um, [
                e("div", Nm, l(r.value.name), 1),
                e("div", Tm, l(E(r.value.size)), 1)
              ])
            ]),
            c(P, {
              variant: "ghost",
              size: "sm",
              onClick: b
            }, {
              default: n(() => [...z[8] || (z[8] = [
                v(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          c(gm, {
            "source-environment": u.value.sourceEnvironment,
            workflows: u.value.workflows,
            models: u.value.models,
            nodes: u.value.nodes,
            "git-branch": u.value.gitBranch,
            "git-commit": u.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          c(Im, {
            "conflict-mode": g.value.conflictMode,
            "onUpdate:conflictMode": z[0] || (z[0] = (M) => g.value.conflictMode = M),
            "include-workflows": g.value.includeWorkflows,
            "onUpdate:includeWorkflows": z[1] || (z[1] = (M) => g.value.includeWorkflows = M),
            "include-models": g.value.includeModels,
            "onUpdate:includeModels": z[2] || (z[2] = (M) => g.value.includeModels = M),
            "include-nodes": g.value.includeNodes,
            "onUpdate:includeNodes": z[3] || (z[3] = (M) => g.value.includeNodes = M),
            "include-git-history": g.value.includeGitHistory,
            "onUpdate:includeGitHistory": z[4] || (z[4] = (M) => g.value.includeGitHistory = M)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !g.value.includeModels && u.value.models.length > 0 ? (o(), _(He, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${u.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", Bm, [
            c(P, {
              variant: "primary",
              size: "md",
              disabled: !f.value,
              onClick: w
            }, {
              default: n(() => [...z[9] || (z[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                v(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            c(P, {
              variant: "secondary",
              size: "md",
              onClick: b
            }, {
              default: n(() => [...z[10] || (z[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : a.value ? (o(), s("div", Dm, [
          e("div", Om, [
            z[11] || (z[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Vm, [
              e("div", Am, l(h.value.message), 1),
              e("div", Fm, l(h.value.detail), 1)
            ])
          ]),
          e("div", Wm, [
            e("div", {
              class: "progress-bar-fill",
              style: ot({ width: `${h.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Pm, l(h.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), s("div", Hm, [
          e("div", {
            class: J(["complete-icon", m.value ? "success" : "error"])
          }, l(m.value ? "✓" : "✕"), 3),
          e("div", Gm, [
            e("div", jm, l(m.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Km, l(p.value), 1)
          ]),
          e("div", qm, [
            c(P, {
              variant: "primary",
              size: "md",
              onClick: y
            }, {
              default: n(() => [...z[12] || (z[12] = [
                v(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]),
      _: 1
    }));
  }
}), Xm = /* @__PURE__ */ Y(Ym, [["__scopeId", "data-v-18e18eb5"]]), Zm = { class: "header-info" }, Jm = { class: "commit-hash" }, Qm = {
  key: 0,
  class: "commit-refs"
}, ev = { class: "commit-message" }, tv = { class: "commit-date" }, ov = {
  key: 0,
  class: "loading"
}, sv = {
  key: 1,
  class: "changes-section"
}, av = { class: "stats-row" }, nv = { class: "stat" }, lv = { class: "stat insertions" }, iv = { class: "stat deletions" }, rv = {
  key: 0,
  class: "change-group"
}, dv = {
  key: 1,
  class: "change-group"
}, cv = {
  key: 0,
  class: "version"
}, uv = {
  key: 2,
  class: "change-group"
}, mv = { class: "change-item" }, vv = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: a } = be(), i = x(null), m = x(!0), p = D(() => {
      if (!i.value) return !1;
      const h = i.value.changes.workflows;
      return h.added.length > 0 || h.modified.length > 0 || h.deleted.length > 0;
    }), g = D(() => {
      if (!i.value) return !1;
      const h = i.value.changes.nodes;
      return h.added.length > 0 || h.removed.length > 0;
    });
    return ge(async () => {
      try {
        i.value = await a(r.commit.hash);
      } finally {
        m.value = !1;
      }
    }), (h, u) => (o(), _(ct, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (f) => h.$emit("close"))
    }, {
      header: n(() => {
        var f, k, b, y;
        return [
          e("div", Zm, [
            u[4] || (u[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Jm, l(((f = i.value) == null ? void 0 : f.short_hash) || t.commit.short_hash || ((k = t.commit.hash) == null ? void 0 : k.slice(0, 7))), 1),
            (y = (b = i.value) == null ? void 0 : b.refs) != null && y.length ? (o(), s("span", Qm, [
              (o(!0), s(H, null, Z(i.value.refs, (w) => (o(), s("span", {
                key: w,
                class: "ref-badge"
              }, l(w), 1))), 128))
            ])) : d("", !0)
          ]),
          c(ne, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (w) => h.$emit("close"))
          }, {
            default: n(() => [...u[5] || (u[5] = [
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
      body: n(() => {
        var f, k;
        return [
          e("div", ev, l(((f = i.value) == null ? void 0 : f.message) || t.commit.message), 1),
          e("div", tv, l(((k = i.value) == null ? void 0 : k.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          m.value ? (o(), s("div", ov, "Loading details...")) : i.value ? (o(), s("div", sv, [
            e("div", av, [
              e("span", nv, l(i.value.stats.files_changed) + " files", 1),
              e("span", lv, "+" + l(i.value.stats.insertions), 1),
              e("span", iv, "-" + l(i.value.stats.deletions), 1)
            ]),
            p.value ? (o(), s("div", rv, [
              c(Qe, { variant: "section" }, {
                default: n(() => [...u[6] || (u[6] = [
                  v("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(H, null, Z(i.value.changes.workflows.added, (b) => (o(), s("div", {
                key: "add-" + b,
                class: "change-item added"
              }, [
                u[7] || (u[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(b), 1)
              ]))), 128)),
              (o(!0), s(H, null, Z(i.value.changes.workflows.modified, (b) => (o(), s("div", {
                key: "mod-" + b,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(b), 1)
              ]))), 128)),
              (o(!0), s(H, null, Z(i.value.changes.workflows.deleted, (b) => (o(), s("div", {
                key: "del-" + b,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(b), 1)
              ]))), 128))
            ])) : d("", !0),
            g.value ? (o(), s("div", dv, [
              c(Qe, { variant: "section" }, {
                default: n(() => [...u[10] || (u[10] = [
                  v("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(H, null, Z(i.value.changes.nodes.added, (b) => (o(), s("div", {
                key: "add-" + b.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(b.name), 1),
                b.version ? (o(), s("span", cv, "(" + l(b.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (o(!0), s(H, null, Z(i.value.changes.nodes.removed, (b) => (o(), s("div", {
                key: "rem-" + b.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(b.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (o(), s("div", uv, [
              c(Qe, { variant: "section" }, {
                default: n(() => [...u[13] || (u[13] = [
                  v("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", mv, [
                u[14] || (u[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: n(() => [
        c(ne, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (f) => h.$emit("createBranch", t.commit))
        }, {
          default: n(() => [...u[15] || (u[15] = [
            v(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        c(ne, {
          variant: "primary",
          onClick: u[2] || (u[2] = (f) => h.$emit("checkout", t.commit))
        }, {
          default: n(() => [...u[16] || (u[16] = [
            v(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), fv = /* @__PURE__ */ Y(vv, [["__scopeId", "data-v-d256ff6d"]]), gv = { class: "dialog-message" }, hv = {
  key: 0,
  class: "dialog-details"
}, pv = {
  key: 1,
  class: "dialog-warning"
}, yv = /* @__PURE__ */ q({
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
    return (r, a) => (o(), _(ct, {
      title: t.title,
      size: "sm",
      onClose: a[3] || (a[3] = (i) => r.$emit("cancel"))
    }, {
      body: n(() => [
        e("p", gv, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", hv, [
          (o(!0), s(H, null, Z(t.details, (i, m) => (o(), s("div", {
            key: m,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (o(), s("p", pv, [
          a[4] || (a[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          v(" " + l(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: n(() => [
        c(ne, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (i) => r.$emit("cancel"))
        }, {
          default: n(() => [
            v(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), _(ne, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (i) => r.$emit("secondary"))
        }, {
          default: n(() => [
            v(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        c(ne, {
          variant: t.destructive ? "danger" : "primary",
          onClick: a[2] || (a[2] = (i) => r.$emit("confirm"))
        }, {
          default: n(() => [
            v(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), wv = /* @__PURE__ */ Y(yv, [["__scopeId", "data-v-3670b9f5"]]), bv = { class: "base-textarea-wrapper" }, kv = ["value", "rows", "placeholder", "disabled", "maxlength"], _v = {
  key: 0,
  class: "base-textarea-count"
}, $v = /* @__PURE__ */ q({
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
    return (r, a) => (o(), s("div", bv, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (i) => r.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          a[1] || (a[1] = Te(ve((i) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = Te(ve((i) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, kv),
      t.showCharCount && t.maxLength ? (o(), s("div", _v, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), St = /* @__PURE__ */ Y($v, [["__scopeId", "data-v-5516e6fc"]]), Cv = ["checked", "disabled"], xv = { class: "base-checkbox-box" }, Sv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Iv = {
  key: 0,
  class: "base-checkbox-label"
}, Ev = /* @__PURE__ */ q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (o(), s("label", {
      class: J(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: a[0] || (a[0] = (i) => r.$emit("update:modelValue", i.target.checked))
      }, null, 40, Cv),
      e("span", xv, [
        t.modelValue ? (o(), s("svg", Sv, [...a[1] || (a[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      r.$slots.default ? (o(), s("span", Iv, [
        le(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ Y(Ev, [["__scopeId", "data-v-bf17c831"]]), zv = { class: "popover-header" }, Mv = { class: "popover-body" }, Lv = {
  key: 0,
  class: "changes-summary"
}, Rv = {
  key: 0,
  class: "change-item"
}, Uv = {
  key: 1,
  class: "change-item"
}, Nv = {
  key: 2,
  class: "change-item"
}, Tv = {
  key: 3,
  class: "change-item"
}, Bv = {
  key: 4,
  class: "change-item"
}, Dv = {
  key: 1,
  class: "no-changes"
}, Ov = {
  key: 2,
  class: "loading"
}, Vv = {
  key: 3,
  class: "issues-warning"
}, Av = { class: "warning-header" }, Fv = { class: "warning-title" }, Wv = { class: "issues-list" }, Pv = { class: "message-section" }, Hv = { class: "popover-footer" }, Gv = {
  key: 1,
  class: "commit-popover"
}, jv = { class: "popover-header" }, Kv = { class: "popover-body" }, qv = {
  key: 0,
  class: "changes-summary"
}, Yv = {
  key: 0,
  class: "change-item"
}, Xv = {
  key: 1,
  class: "change-item"
}, Zv = {
  key: 2,
  class: "change-item"
}, Jv = {
  key: 3,
  class: "change-item"
}, Qv = {
  key: 4,
  class: "change-item"
}, ef = {
  key: 1,
  class: "no-changes"
}, tf = {
  key: 2,
  class: "loading"
}, of = {
  key: 3,
  class: "issues-warning"
}, sf = { class: "warning-header" }, af = { class: "warning-title" }, nf = { class: "issues-list" }, lf = { class: "message-section" }, rf = { class: "popover-footer" }, df = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const a = t, i = r, { commit: m } = be(), p = x(""), g = x(!1), h = x(!1), u = x(null), f = D(() => {
      if (!a.status) return !1;
      const E = a.status.workflows;
      return E.new.length > 0 || E.modified.length > 0 || E.deleted.length > 0 || a.status.has_changes;
    }), k = D(() => {
      var E;
      return (E = a.status) != null && E.workflows.analyzed ? a.status.workflows.analyzed.filter(
        (C) => C.has_issues && (C.sync_state === "new" || C.sync_state === "modified")
      ) : [];
    }), b = D(() => k.value.length > 0), y = D(() => b.value && !h.value);
    async function w() {
      var E, C, z;
      if (!(b.value && !h.value) && !(!f.value || !p.value.trim() || g.value)) {
        g.value = !0, u.value = null;
        try {
          const M = await m(p.value.trim(), h.value);
          M.status === "success" ? (u.value = {
            type: "success",
            message: `Committed: ${((E = M.summary) == null ? void 0 : E.new) || 0} new, ${((C = M.summary) == null ? void 0 : C.modified) || 0} modified, ${((z = M.summary) == null ? void 0 : z.deleted) || 0} deleted`
          }, p.value = "", h.value = !1, setTimeout(() => i("committed"), 1e3)) : M.status === "no_changes" ? u.value = { type: "error", message: "No changes to commit" } : M.status === "blocked" ? u.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : u.value = { type: "error", message: M.message || "Commit failed" };
        } catch (M) {
          u.value = { type: "error", message: M instanceof Error ? M.message : "Commit failed" };
        } finally {
          g.value = !1;
        }
      }
    }
    return (E, C) => t.asModal ? (o(), _(ze, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (z) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", zv, [
            C[11] || (C[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = (z) => i("close"))
            }, [...C[10] || (C[10] = [
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
          e("div", Mv, [
            t.status && f.value ? (o(), s("div", Lv, [
              t.status.workflows.new.length ? (o(), s("div", Rv, [
                C[12] || (C[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Uv, [
                C[13] || (C[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Nv, [
                C[14] || (C[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Tv, [
                C[15] || (C[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Bv, [
                C[16] || (C[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0)
            ])) : t.status ? (o(), s("div", Dv, " No changes to commit ")) : (o(), s("div", Ov, " Loading... ")),
            b.value ? (o(), s("div", Vv, [
              e("div", Av, [
                C[17] || (C[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Fv, l(k.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Wv, [
                (o(!0), s(H, null, Z(k.value, (z) => (o(), s("div", {
                  key: z.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(z.name), 1),
                  v(": " + l(z.issue_summary), 1)
                ]))), 128))
              ]),
              c(It, {
                modelValue: h.value,
                "onUpdate:modelValue": C[1] || (C[1] = (z) => h.value = z),
                class: "allow-issues-toggle"
              }, {
                default: n(() => [...C[18] || (C[18] = [
                  v(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", Pv, [
              c(St, {
                modelValue: p.value,
                "onUpdate:modelValue": C[2] || (C[2] = (z) => p.value = z),
                placeholder: y.value ? "Enable 'Allow issues' to commit" : f.value ? "Describe your changes..." : "No changes",
                disabled: !f.value || g.value || y.value,
                rows: 3,
                onCtrlEnter: w
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            u.value ? (o(), s("div", {
              key: 4,
              class: J(["result", u.value.type])
            }, l(u.value.message), 3)) : d("", !0)
          ]),
          e("div", Hv, [
            c(ne, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (z) => i("close"))
            }, {
              default: n(() => [...C[19] || (C[19] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            c(ne, {
              variant: h.value ? "danger" : "primary",
              disabled: !f.value || !p.value.trim() || g.value || y.value,
              loading: g.value,
              onClick: w
            }, {
              default: n(() => [
                v(l(g.value ? "Committing..." : h.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", Gv, [
      e("div", jv, [
        C[21] || (C[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = (z) => i("close"))
        }, [...C[20] || (C[20] = [
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
      e("div", Kv, [
        t.status && f.value ? (o(), s("div", qv, [
          t.status.workflows.new.length ? (o(), s("div", Yv, [
            C[22] || (C[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (o(), s("div", Xv, [
            C[23] || (C[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", Zv, [
            C[24] || (C[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", Jv, [
            C[25] || (C[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", Qv, [
            C[26] || (C[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : t.status ? (o(), s("div", ef, " No changes to commit ")) : (o(), s("div", tf, " Loading... ")),
        b.value ? (o(), s("div", of, [
          e("div", sf, [
            C[27] || (C[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", af, l(k.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", nf, [
            (o(!0), s(H, null, Z(k.value, (z) => (o(), s("div", {
              key: z.name,
              class: "issue-item"
            }, [
              e("strong", null, l(z.name), 1),
              v(": " + l(z.issue_summary), 1)
            ]))), 128))
          ]),
          c(It, {
            modelValue: h.value,
            "onUpdate:modelValue": C[7] || (C[7] = (z) => h.value = z),
            class: "allow-issues-toggle"
          }, {
            default: n(() => [...C[28] || (C[28] = [
              v(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", lf, [
          c(St, {
            modelValue: p.value,
            "onUpdate:modelValue": C[8] || (C[8] = (z) => p.value = z),
            placeholder: y.value ? "Enable 'Allow issues' to commit" : f.value ? "Describe your changes..." : "No changes",
            disabled: !f.value || g.value || y.value,
            rows: 3,
            onCtrlEnter: w
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        u.value ? (o(), s("div", {
          key: 4,
          class: J(["result", u.value.type])
        }, l(u.value.message), 3)) : d("", !0)
      ]),
      e("div", rf, [
        c(ne, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (z) => i("close"))
        }, {
          default: n(() => [...C[29] || (C[29] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c(ne, {
          variant: h.value ? "danger" : "primary",
          disabled: !f.value || !p.value.trim() || g.value || y.value,
          loading: g.value,
          onClick: w
        }, {
          default: n(() => [
            v(l(g.value ? "Committing..." : h.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Tt = /* @__PURE__ */ Y(df, [["__scopeId", "data-v-38b45183"]]), cf = { class: "modal-header" }, uf = { class: "modal-body" }, mf = { class: "switch-message" }, vf = { class: "switch-details" }, ff = { class: "modal-actions" }, gf = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", cf, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", uf, [
            e("p", mf, [
              a[6] || (a[6] = v(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              a[7] || (a[7] = v(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              a[8] || (a[8] = v("? ", -1))
            ]),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", vf, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            a[10] || (a[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", ff, [
            c(P, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (i) => r.$emit("close"))
            }, {
              default: n(() => [...a[11] || (a[11] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            c(P, {
              variant: "primary",
              onClick: a[2] || (a[2] = (i) => r.$emit("confirm"))
            }, {
              default: n(() => [...a[12] || (a[12] = [
                v(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), hf = /* @__PURE__ */ Y(gf, [["__scopeId", "data-v-e9c5253e"]]), pf = { class: "progress-bar" }, yf = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, a = D(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (i, m) => (o(), s("div", pf, [
      e("div", {
        class: J(["progress-fill", t.variant]),
        style: ot({ width: a.value })
      }, null, 6)
    ]));
  }
}), wf = /* @__PURE__ */ Y(yf, [["__scopeId", "data-v-1beb0512"]]), bf = {
  key: 0,
  class: "modal-overlay"
}, kf = { class: "modal-content" }, _f = { class: "modal-body" }, $f = { class: "progress-info" }, Cf = { class: "progress-percentage" }, xf = { class: "progress-state" }, Sf = { class: "switch-steps" }, If = { class: "step-icon" }, Ef = { class: "step-label" }, zf = /* @__PURE__ */ q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, a = D(() => {
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
      return r.message || p[r.state] || r.state;
    }), i = D(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), m = D(() => {
      const p = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], g = p.findIndex((h) => h.state === r.state);
      return p.map((h, u) => {
        let f = "pending", k = "○";
        return u < g ? (f = "completed", k = "✓") : u === g && (f = "active", k = "⟳"), {
          ...h,
          status: f,
          icon: k
        };
      });
    });
    return (p, g) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), s("div", bf, [
        e("div", kf, [
          g[1] || (g[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", _f, [
            c(wf, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", $f, [
              e("div", Cf, l(t.progress) + "%", 1),
              e("div", xf, l(a.value), 1)
            ]),
            e("div", Sf, [
              (o(!0), s(H, null, Z(m.value, (h) => (o(), s("div", {
                key: h.state,
                class: J(["switch-step", h.status])
              }, [
                e("span", If, l(h.icon), 1),
                e("span", Ef, l(h.label), 1)
              ], 2))), 128))
            ]),
            g[0] || (g[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Mf = /* @__PURE__ */ Y(zf, [["__scopeId", "data-v-768a5078"]]), Lf = { class: "modal-header" }, Rf = { class: "modal-body" }, Uf = {
  key: 0,
  class: "node-section"
}, Nf = { class: "node-list" }, Tf = {
  key: 1,
  class: "node-section"
}, Bf = { class: "node-list" }, Df = { class: "modal-actions" }, Of = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", Lf, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Rf, [
            a[8] || (a[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Uf, [
              a[6] || (a[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Nf, [
                (o(!0), s(H, null, Z(t.mismatchDetails.missing_nodes, (i) => (o(), s("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Tf, [
              a[7] || (a[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Bf, [
                (o(!0), s(H, null, Z(t.mismatchDetails.extra_nodes, (i) => (o(), s("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + l(i), 1))), 128))
              ])
            ])) : d("", !0),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Df, [
            c(P, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (i) => r.$emit("close"))
            }, {
              default: n(() => [...a[10] || (a[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            c(P, {
              variant: "primary",
              onClick: a[2] || (a[2] = (i) => r.$emit("confirm"))
            }, {
              default: n(() => [...a[11] || (a[11] = [
                v(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Vf = /* @__PURE__ */ Y(Of, [["__scopeId", "data-v-7cad7518"]]);
async function Ze(t, r = {}, a = 5e3) {
  const i = new AbortController(), m = setTimeout(() => i.abort(), a);
  try {
    const p = await fetch(t, {
      ...r,
      signal: i.signal
    });
    return clearTimeout(m), p;
  } catch (p) {
    throw clearTimeout(m), p.name === "AbortError" ? new Error(`Request timeout after ${a}ms`) : p;
  }
}
function Af() {
  const t = x(null);
  async function r() {
    try {
      const g = await Ze(
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
  async function a() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const g = await Ze(
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
      const g = await Ze(
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
  async function m() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ze(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ze(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: r,
    checkHealth: a,
    getStatus: i,
    restart: m,
    kill: p
  };
}
const Ff = { class: "comfygit-panel" }, Wf = { class: "panel-header" }, Pf = { class: "header-left" }, Hf = {
  key: 0,
  class: "header-info"
}, Gf = { class: "header-actions" }, jf = { class: "env-switcher" }, Kf = {
  key: 0,
  class: "header-info"
}, qf = { class: "branch-name" }, Yf = { class: "panel-main" }, Xf = { class: "sidebar" }, Zf = { class: "sidebar-section" }, Jf = { class: "sidebar-section" }, Qf = { class: "sidebar-section" }, eg = { class: "content-area" }, tg = {
  key: 0,
  class: "error-message"
}, og = {
  key: 1,
  class: "loading"
}, sg = { class: "dialog-content env-selector-dialog" }, ag = { class: "dialog-header" }, ng = { class: "dialog-body" }, lg = { class: "env-list" }, ig = { class: "env-info" }, rg = { class: "env-name-row" }, dg = { class: "env-indicator" }, cg = { class: "env-name" }, ug = {
  key: 0,
  class: "env-branch"
}, mg = {
  key: 1,
  class: "current-label"
}, vg = { class: "env-stats" }, fg = ["onClick"], gg = { class: "toast-container" }, hg = { class: "toast-icon" }, pg = { class: "toast-message" }, yg = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const a = r, {
      getStatus: i,
      getHistory: m,
      getBranches: p,
      checkout: g,
      createBranch: h,
      switchBranch: u,
      getEnvironments: f,
      switchEnvironment: k,
      getSwitchProgress: b,
      syncEnvironmentManually: y
    } = be(), w = Af(), E = x(null), C = x([]), z = x([]), M = x([]), T = D(() => M.value.find((F) => F.is_current)), W = x(!1), B = x(null), A = x(null), R = x(!1), O = x(!1), L = x(!1), U = x(""), N = x({ state: "idle", progress: 0, message: "" });
    let K = null, j = null;
    const I = x("status"), V = x("this-env");
    function te(F, S) {
      I.value = F, V.value = S;
    }
    function $e(F) {
      const ie = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[F];
      ie && te(ie.view, ie.section);
    }
    function xe() {
      te("branches", "this-env");
    }
    const oe = x(null), he = x(!1), Q = x(!1), Le = x([]);
    let Ye = 0;
    function ce(F, S = "info", ie = 3e3) {
      const ue = ++Ye;
      return Le.value.push({ id: ue, message: F, type: S }), ie > 0 && setTimeout(() => {
        Le.value = Le.value.filter((Se) => Se.id !== ue);
      }, ie), ue;
    }
    function Ce(F) {
      Le.value = Le.value.filter((S) => S.id !== F);
    }
    function X(F) {
      switch (F) {
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
    const $ = D(() => {
      if (!E.value) return "neutral";
      const F = E.value.workflows, S = F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? S ? "warning" : "success" : "error";
    });
    D(() => E.value ? $.value === "success" ? "All synced" : $.value === "warning" ? "Uncommitted changes" : $.value === "error" ? "Not synced" : "" : "");
    async function G() {
      W.value = !0, B.value = null;
      try {
        const [F, S, ie, ue] = await Promise.all([
          i(),
          m(),
          p(),
          f()
        ]);
        E.value = F, C.value = S.commits, z.value = ie.branches, M.value = ue, a("statusUpdate", F);
      } catch (F) {
        B.value = F instanceof Error ? F.message : "Failed to load status", E.value = null, C.value = [], z.value = [];
      } finally {
        W.value = !1;
      }
    }
    function ee(F) {
      A.value = F;
    }
    async function pe(F) {
      var ie;
      A.value = null;
      const S = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      oe.value = {
        title: S ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: S ? "You have uncommitted changes that will be lost." : `Checkout commit ${F.short_hash || ((ie = F.hash) == null ? void 0 : ie.slice(0, 7))}?`,
        details: S ? _t() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: S ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: S,
        onConfirm: async () => {
          var Ie;
          oe.value = null;
          const ue = ce(`Checking out ${F.short_hash || ((Ie = F.hash) == null ? void 0 : Ie.slice(0, 7))}...`, "info", 0), Se = await g(F.hash, S);
          Ce(ue), Se.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(Se.message || "Checkout failed", "error");
        }
      };
    }
    async function Re(F) {
      const S = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      oe.value = {
        title: S ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: S ? "You have uncommitted changes." : `Switch to branch "${F}"?`,
        details: S ? _t() : void 0,
        warning: S ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: S ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          oe.value = null;
          const ie = ce(`Switching to ${F}...`, "info", 0), ue = await u(F, S);
          Ce(ie), ue.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(ue.message || "Branch switch failed", "error");
        }
      };
    }
    async function Fe(F) {
      const S = ce(`Creating branch ${F}...`, "info", 0), ie = await h(F);
      Ce(S), ie.status === "success" ? (ce(`Branch "${F}" created`, "success"), await G()) : ce(ie.message || "Failed to create branch", "error");
    }
    async function st(F) {
      A.value = null;
      const S = prompt("Enter branch name:");
      if (S) {
        const ie = ce(`Creating branch ${S}...`, "info", 0), ue = await h(S, F.hash);
        Ce(ie), ue.status === "success" ? (ce(`Branch "${S}" created from ${F.short_hash}`, "success"), await G()) : ce(ue.message || "Failed to create branch", "error");
      }
    }
    async function Xe(F) {
      R.value = !1, U.value = F, O.value = !0;
    }
    async function At() {
      O.value = !1, L.value = !0, N.value = {
        progress: 10,
        state: at(10),
        message: nt(10)
      };
      try {
        await k(U.value), Ft(), Wt();
      } catch (F) {
        We(), L.value = !1, ce(`Failed to initiate switch: ${F instanceof Error ? F.message : "Unknown error"}`, "error"), N.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function at(F) {
      return F >= 100 ? "complete" : F >= 80 ? "validating" : F >= 60 ? "starting" : F >= 30 ? "syncing" : "preparing";
    }
    function nt(F) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[at(F)] || "";
    }
    function Ft() {
      if (j) return;
      let F = 10;
      const S = 60, ie = 5e3, ue = 100, Se = (S - F) / (ie / ue);
      j = window.setInterval(() => {
        if (F += Se, F >= S && (F = S, We()), N.value.progress < S) {
          const Ie = Math.floor(F);
          N.value = {
            progress: Ie,
            state: at(Ie),
            message: nt(Ie)
          };
        }
      }, ue);
    }
    function We() {
      j && (clearInterval(j), j = null);
    }
    function Wt() {
      K || (K = window.setInterval(async () => {
        try {
          let F = await w.getStatus();
          if ((!F || F.state === "idle") && (F = await b()), !F)
            return;
          const S = F.progress || 0;
          S >= 60 && We();
          const ie = Math.max(S, N.value.progress), ue = F.state && F.state !== "idle" && F.state !== "unknown", Se = ue ? F.state : at(ie), Ie = ue && F.message || nt(ie);
          N.value = {
            state: Se,
            progress: ie,
            message: Ie
          }, F.state === "complete" ? (We(), ut(), L.value = !1, ce(`✓ Switched to ${U.value}`, "success"), await G(), U.value = "") : F.state === "rolled_back" ? (We(), ut(), L.value = !1, ce("Switch failed, restored previous environment", "warning"), U.value = "") : F.state === "critical_failure" && (We(), ut(), L.value = !1, ce(`Critical error during switch: ${F.message}`, "error"), U.value = "");
        } catch (F) {
          console.error("Failed to poll switch progress:", F);
        }
      }, 1e3));
    }
    function ut() {
      We(), K && (clearInterval(K), K = null);
    }
    function Pt() {
      O.value = !1, U.value = "";
    }
    async function Ht() {
      he.value = !1, await G(), ce("✓ Changes committed", "success");
    }
    async function Gt() {
      Q.value = !1;
      const F = ce("Syncing environment...", "info", 0);
      try {
        const S = await y("skip", !0);
        if (Ce(F), S.status === "success") {
          const ie = [];
          S.nodes_installed.length && ie.push(`${S.nodes_installed.length} installed`), S.nodes_removed.length && ie.push(`${S.nodes_removed.length} removed`);
          const ue = ie.length ? `: ${ie.join(", ")}` : "";
          ce(`✓ Environment synced${ue}`, "success"), await G();
        } else {
          const ie = S.errors.length ? S.errors.join("; ") : S.message;
          ce(`Sync failed: ${ie}`, "error");
        }
      } catch (S) {
        Ce(F), ce(`Sync error: ${S instanceof Error ? S.message : "Unknown error"}`, "error");
      }
    }
    async function jt(F) {
      const S = ce(`Creating environment "${F}"...`, "info", 0);
      Ce(S), ce("Environment creation not yet implemented", "warning");
    }
    async function Kt(F) {
      const S = ce(`Deleting environment "${F}"...`, "info", 0);
      Ce(S), ce("Environment deletion not yet implemented", "warning");
    }
    function qt(F) {
      ce(`Viewing details for "${F}"`, "info"), te("models-env", "this-env");
    }
    function _t() {
      if (!E.value) return [];
      const F = [], S = E.value.workflows;
      return S.new.length && F.push(`${S.new.length} new workflow(s)`), S.modified.length && F.push(`${S.modified.length} modified workflow(s)`), S.deleted.length && F.push(`${S.deleted.length} deleted workflow(s)`), F;
    }
    return ge(G), (F, S) => {
      var ie, ue, Se, Ie;
      return o(), s("div", Ff, [
        e("div", Wf, [
          e("div", Pf, [
            S[27] || (S[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (o(), s("div", Hf)) : d("", !0)
          ]),
          e("div", Gf, [
            e("button", {
              class: J(["icon-btn", { spinning: W.value }]),
              onClick: G,
              title: "Refresh"
            }, [...S[28] || (S[28] = [
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
              onClick: S[0] || (S[0] = (ae) => a("close")),
              title: "Close"
            }, [...S[29] || (S[29] = [
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
        e("div", jf, [
          S[31] || (S[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: S[1] || (S[1] = (ae) => te("environments", "all-envs"))
          }, [
            E.value ? (o(), s("div", Kf, [
              e("span", null, l(((ie = T.value) == null ? void 0 : ie.name) || ((ue = E.value) == null ? void 0 : ue.environment) || "Loading..."), 1),
              e("span", qf, "(" + l(E.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            S[30] || (S[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Yf, [
          e("div", Xf, [
            e("div", Zf, [
              S[32] || (S[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "status" && V.value === "this-env" }]),
                onClick: S[2] || (S[2] = (ae) => te("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "workflows" }]),
                onClick: S[3] || (S[3] = (ae) => te("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "models-env" }]),
                onClick: S[4] || (S[4] = (ae) => te("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "branches" }]),
                onClick: S[5] || (S[5] = (ae) => te("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "history" }]),
                onClick: S[6] || (S[6] = (ae) => te("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "nodes" }]),
                onClick: S[7] || (S[7] = (ae) => te("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "debug-env" }]),
                onClick: S[8] || (S[8] = (ae) => te("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            S[35] || (S[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Jf, [
              S[33] || (S[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "environments" }]),
                onClick: S[9] || (S[9] = (ae) => te("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "model-index" }]),
                onClick: S[10] || (S[10] = (ae) => te("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "settings" }]),
                onClick: S[11] || (S[11] = (ae) => te("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "debug-workspace" }]),
                onClick: S[12] || (S[12] = (ae) => te("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            S[36] || (S[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Qf, [
              S[34] || (S[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "export" }]),
                onClick: S[13] || (S[13] = (ae) => te("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "import" }]),
                onClick: S[14] || (S[14] = (ae) => te("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: J(["sidebar-item", { active: I.value === "remotes" }]),
                onClick: S[15] || (S[15] = (ae) => te("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", eg, [
            B.value ? (o(), s("div", tg, l(B.value), 1)) : !E.value && I.value === "status" ? (o(), s("div", og, " Loading status... ")) : (o(), s(H, { key: 2 }, [
              I.value === "status" ? (o(), _(Ea, {
                key: 0,
                status: E.value,
                onSwitchBranch: xe,
                onCommitChanges: S[16] || (S[16] = (ae) => he.value = !0),
                onSyncEnvironment: S[17] || (S[17] = (ae) => Q.value = !0),
                onViewWorkflows: S[18] || (S[18] = (ae) => te("workflows", "this-env")),
                onViewHistory: S[19] || (S[19] = (ae) => te("history", "this-env")),
                onViewDebug: S[20] || (S[20] = (ae) => te("debug-env", "this-env"))
              }, null, 8, ["status"])) : I.value === "workflows" ? (o(), _(jd, {
                key: 1,
                onRefresh: G
              })) : I.value === "models-env" ? (o(), _(Yd, {
                key: 2,
                onNavigate: $e
              })) : I.value === "branches" ? (o(), _(Pa, {
                key: 3,
                branches: z.value,
                current: ((Se = E.value) == null ? void 0 : Se.branch) || null,
                onSwitch: Re,
                onCreate: Fe
              }, null, 8, ["branches", "current"])) : I.value === "history" ? (o(), _(en, {
                key: 4,
                commits: C.value,
                onSelect: ee,
                onCheckout: pe
              }, null, 8, ["commits"])) : I.value === "nodes" ? (o(), _(oc, { key: 5 })) : I.value === "debug-env" ? (o(), _(eu, { key: 6 })) : I.value === "environments" ? (o(), _(mu, {
                key: 7,
                onSwitch: Xe,
                onCreate: jt,
                onDelete: Kt,
                onViewDetails: qt
              })) : I.value === "model-index" ? (o(), _(Zd, { key: 8 })) : I.value === "settings" ? (o(), _(Xc, { key: 9 })) : I.value === "debug-workspace" ? (o(), _(Jc, { key: 10 })) : I.value === "export" ? (o(), _(_u, { key: 11 })) : I.value === "import" ? (o(), _(Xm, { key: 12 })) : I.value === "remotes" ? (o(), _(Rc, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        A.value ? (o(), _(fv, {
          key: 0,
          commit: A.value,
          onClose: S[21] || (S[21] = (ae) => A.value = null),
          onCheckout: pe,
          onCreateBranch: st
        }, null, 8, ["commit"])) : d("", !0),
        oe.value ? (o(), _(wv, {
          key: 1,
          title: oe.value.title,
          message: oe.value.message,
          details: oe.value.details,
          warning: oe.value.warning,
          confirmLabel: oe.value.confirmLabel,
          cancelLabel: oe.value.cancelLabel,
          secondaryLabel: oe.value.secondaryLabel,
          secondaryAction: oe.value.secondaryAction,
          destructive: oe.value.destructive,
          onConfirm: oe.value.onConfirm,
          onCancel: S[22] || (S[22] = (ae) => oe.value = null),
          onSecondary: oe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        c(hf, {
          show: O.value,
          "from-environment": ((Ie = T.value) == null ? void 0 : Ie.name) || "unknown",
          "to-environment": U.value,
          onConfirm: At,
          onClose: Pt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        he.value && E.value ? (o(), _(Tt, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: S[23] || (S[23] = (ae) => he.value = !1),
          onCommitted: Ht
        }, null, 8, ["status"])) : d("", !0),
        Q.value && E.value ? (o(), _(Vf, {
          key: 3,
          show: Q.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: Gt,
          onClose: S[24] || (S[24] = (ae) => Q.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        c(Mf, {
          show: L.value,
          state: N.value.state,
          progress: N.value.progress,
          message: N.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        R.value ? (o(), s("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: S[26] || (S[26] = ve((ae) => R.value = !1, ["self"]))
        }, [
          e("div", sg, [
            e("div", ag, [
              S[38] || (S[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: S[25] || (S[25] = (ae) => R.value = !1)
              }, [...S[37] || (S[37] = [
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
            e("div", ng, [
              S[39] || (S[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", lg, [
                (o(!0), s(H, null, Z(M.value, (ae) => (o(), s("div", {
                  key: ae.name,
                  class: J(["env-item", { current: ae.is_current }])
                }, [
                  e("div", ig, [
                    e("div", rg, [
                      e("span", dg, l(ae.is_current ? "●" : "○"), 1),
                      e("span", cg, l(ae.name), 1),
                      ae.current_branch ? (o(), s("span", ug, "(" + l(ae.current_branch) + ")", 1)) : d("", !0),
                      ae.is_current ? (o(), s("span", mg, "CURRENT")) : d("", !0)
                    ]),
                    e("div", vg, l(ae.workflow_count) + " workflows • " + l(ae.node_count) + " nodes ", 1)
                  ]),
                  ae.is_current ? d("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Mg) => Xe(ae.name)
                  }, " SWITCH ", 8, fg))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        e("div", gg, [
          c(Jt, { name: "toast" }, {
            default: n(() => [
              (o(!0), s(H, null, Z(Le.value, (ae) => (o(), s("div", {
                key: ae.id,
                class: J(["toast", ae.type])
              }, [
                e("span", hg, l(X(ae.type)), 1),
                e("span", pg, l(ae.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), wg = /* @__PURE__ */ Y(yg, [["__scopeId", "data-v-2c8b25b1"]]), bg = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', kg = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', _g = {
  comfy: bg,
  phosphor: kg
}, bt = "comfy", Bt = "comfygit-theme";
let Pe = null, Dt = bt;
function $g() {
  try {
    const t = localStorage.getItem(Bt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return bt;
}
function Ot(t = bt) {
  Pe && Pe.remove(), Pe = document.createElement("style"), Pe.id = "comfygit-theme-styles", Pe.setAttribute("data-theme", t), Pe.textContent = _g[t], document.head.appendChild(Pe), document.body.setAttribute("data-comfygit-theme", t), Dt = t;
  try {
    localStorage.setItem(Bt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Cg() {
  return Dt;
}
function xg(t) {
  Ot(t);
}
const kt = document.createElement("link");
kt.rel = "stylesheet";
kt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(kt);
const Sg = $g();
Ot(Sg);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), xg(t);
  },
  getTheme: () => {
    const t = Cg();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ee = null, ke = null, et = null;
const je = x(null);
async function pt() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const r = await window.app.api.fetchApi("/v2/comfygit/status");
    r.ok && (je.value = await r.json());
  } catch {
  }
}
function Ig() {
  if (!je.value) return !1;
  const t = je.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || je.value.has_changes;
}
function Eg() {
  Ee && Ee.remove(), Ee = document.createElement("div"), Ee.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ee.appendChild(t), Ee.addEventListener("click", (i) => {
    i.target === Ee && ft();
  });
  const r = (i) => {
    i.key === "Escape" && (ft(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Mt({
    render: () => Lt(wg, {
      onClose: ft,
      onStatusUpdate: (i) => {
        je.value = i, dt();
      }
    })
  }).mount(t), document.body.appendChild(Ee);
}
function ft() {
  Ee && (Ee.remove(), Ee = null);
}
function zg(t) {
  Je(), ke = document.createElement("div"), ke.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  ke.style.position = "fixed", ke.style.top = `${r.bottom + 8}px`, ke.style.right = `${window.innerWidth - r.right}px`, ke.style.zIndex = "10001";
  const a = (m) => {
    ke && !ke.contains(m.target) && m.target !== t && (Je(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const i = (m) => {
    m.key === "Escape" && (Je(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), et = Mt({
    render: () => Lt(Tt, {
      status: je.value,
      onClose: Je,
      onCommitted: () => {
        Je(), pt().then(dt);
      }
    })
  }), et.mount(ke), document.body.appendChild(ke);
}
function Je() {
  et && (et.unmount(), et = null), ke && (ke.remove(), ke = null);
}
let Ne = null;
function dt() {
  if (!Ne) return;
  const t = Ne.querySelector(".commit-indicator");
  t && (t.style.display = Ig() ? "block" : "none");
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
mt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var a, i;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = Eg, Ne = document.createElement("button"), Ne.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ne.innerHTML = 'Commit <span class="commit-indicator"></span>', Ne.title = "Quick Commit", Ne.onclick = () => zg(Ne), t.appendChild(r), t.appendChild(Ne), (i = (a = mt.menu) == null ? void 0 : a.settingsGroup) != null && i.element && (mt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await pt(), dt(), setInterval(async () => {
      await pt(), dt();
    }, 3e4);
  }
});
