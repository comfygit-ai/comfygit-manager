import { app as mt } from "../../scripts/app.js";
import { defineComponent as K, createElementBlock as a, openBlock as o, createCommentVNode as u, createElementVNode as e, renderSlot as ne, createBlock as b, resolveDynamicComponent as yt, normalizeClass as J, withCtx as n, toDisplayString as r, createVNode as m, createTextVNode as f, computed as D, Fragment as H, renderList as Q, normalizeStyle as ot, ref as x, onMounted as he, watch as Et, Teleport as ze, withModifiers as fe, Transition as Yt, withKeys as Te, onUnmounted as Zt, resolveComponent as Jt, createSlots as zt, TransitionGroup as Qt, createApp as Mt, h as Lt } from "vue";
const eo = { class: "panel-layout" }, to = {
  key: 0,
  class: "panel-layout-header"
}, oo = {
  key: 1,
  class: "panel-layout-search"
}, so = { class: "panel-layout-content" }, ao = {
  key: 2,
  class: "panel-layout-footer"
}, no = /* @__PURE__ */ K({
  __name: "PanelLayout",
  setup(t) {
    return (i, s) => (o(), a("div", eo, [
      i.$slots.header ? (o(), a("div", to, [
        ne(i.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      i.$slots.search ? (o(), a("div", oo, [
        ne(i.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      e("div", so, [
        ne(i.$slots, "content", {}, void 0, !0)
      ]),
      i.$slots.footer ? (o(), a("div", ao, [
        ne(i.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), q = (t, i) => {
  const s = t.__vccOpts || t;
  for (const [l, g] of i)
    s[l] = g;
  return s;
}, we = /* @__PURE__ */ q(no, [["__scopeId", "data-v-21565df9"]]), lo = {
  key: 0,
  class: "panel-title-prefix"
}, io = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ro = /* @__PURE__ */ K({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (i, s) => (o(), b(yt(`h${t.level}`), {
      class: J(["panel-title", t.variant])
    }, {
      default: n(() => [
        t.showPrefix ? (o(), a("span", lo, r(t.prefix), 1)) : (o(), a("span", io)),
        ne(i.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), co = /* @__PURE__ */ q(ro, [["__scopeId", "data-v-c3875efc"]]), uo = ["title"], mo = ["width", "height"], vo = /* @__PURE__ */ K({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (i, s) => (o(), a("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (l) => i.$emit("click"))
    }, [
      (o(), a("svg", {
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
}), Nt = /* @__PURE__ */ q(vo, [["__scopeId", "data-v-6fc7f16d"]]), fo = { class: "header-left" }, go = {
  key: 0,
  class: "header-actions"
}, ho = /* @__PURE__ */ K({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (i, s) => (o(), a("div", {
      class: J(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", fo, [
        m(co, { "show-prefix": t.showPrefix }, {
          default: n(() => [
            f(r(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), b(Nt, {
          key: 0,
          onClick: s[0] || (s[0] = (l) => i.$emit("info-click"))
        })) : u("", !0)
      ]),
      i.$slots.actions ? (o(), a("div", go, [
        ne(i.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), be = /* @__PURE__ */ q(ho, [["__scopeId", "data-v-55a62cd6"]]), po = {
  key: 0,
  class: "section-title-count"
}, yo = {
  key: 1,
  class: "section-title-icon"
}, wo = /* @__PURE__ */ K({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (i, s) => (o(), b(yt(`h${t.level}`), {
      class: J(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (l) => t.clickable && i.$emit("click"))
    }, {
      default: n(() => [
        ne(i.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), a("span", po, "(" + r(t.count) + ")", 1)) : u("", !0),
        t.clickable ? (o(), a("span", yo, r(t.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $e = /* @__PURE__ */ q(wo, [["__scopeId", "data-v-559361eb"]]), bo = { class: "status-grid" }, ko = { class: "status-grid__column" }, _o = { class: "status-grid__title" }, $o = { class: "status-grid__column status-grid__column--right" }, Co = { class: "status-grid__title" }, xo = /* @__PURE__ */ K({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (i, s) => (o(), a("div", bo, [
      e("div", ko, [
        e("h4", _o, r(t.leftTitle), 1),
        ne(i.$slots, "left", {}, void 0, !0)
      ]),
      e("div", $o, [
        e("h4", Co, r(t.rightTitle), 1),
        ne(i.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), So = /* @__PURE__ */ q(xo, [["__scopeId", "data-v-fe556068"]]), Io = {
  key: 0,
  class: "status-item__icon"
}, Eo = {
  key: 1,
  class: "status-item__count"
}, zo = { class: "status-item__label" }, Mo = /* @__PURE__ */ K({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const i = t, s = D(() => `status-item--${i.variant}`);
    return (l, g) => (o(), a("div", {
      class: J(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), a("span", Io, r(t.icon), 1)) : u("", !0),
      t.count !== void 0 ? (o(), a("span", Eo, r(t.count), 1)) : u("", !0),
      e("span", zo, r(t.label), 1)
    ], 2));
  }
}), Re = /* @__PURE__ */ q(Mo, [["__scopeId", "data-v-6f929183"]]), Lo = { class: "issue-card__header" }, No = { class: "issue-card__icon" }, Ro = { class: "issue-card__title" }, Uo = {
  key: 0,
  class: "issue-card__content"
}, To = {
  key: 0,
  class: "issue-card__description"
}, Bo = {
  key: 1,
  class: "issue-card__items"
}, Do = {
  key: 2,
  class: "issue-card__actions"
}, Oo = /* @__PURE__ */ K({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const i = t, s = D(() => `issue-card--${i.severity}`);
    return (l, g) => (o(), a("div", {
      class: J(["issue-card", s.value])
    }, [
      e("div", Lo, [
        e("span", No, r(t.icon), 1),
        e("h4", Ro, r(t.title), 1)
      ]),
      l.$slots.default || t.description ? (o(), a("div", Uo, [
        t.description ? (o(), a("p", To, r(t.description), 1)) : u("", !0),
        ne(l.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      t.items && t.items.length ? (o(), a("div", Bo, [
        (o(!0), a(H, null, Q(t.items, (h, v) => (o(), a("div", {
          key: v,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, r(h), 1)
        ]))), 128))
      ])) : u("", !0),
      l.$slots.actions ? (o(), a("div", Do, [
        ne(l.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ q(Oo, [["__scopeId", "data-v-df6aa348"]]), Vo = ["type", "disabled"], Ao = {
  key: 0,
  class: "spinner"
}, Fo = /* @__PURE__ */ K({
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
    return (i, s) => (o(), a("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: J(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (l) => i.$emit("click", l))
    }, [
      t.loading ? (o(), a("span", Ao)) : u("", !0),
      t.loading ? u("", !0) : ne(i.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Vo));
  }
}), W = /* @__PURE__ */ q(Fo, [["__scopeId", "data-v-772abe47"]]), Wo = { class: "empty-state" }, Po = {
  key: 0,
  class: "empty-icon"
}, Ho = { class: "empty-message" }, Go = /* @__PURE__ */ K({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (i, s) => (o(), a("div", Wo, [
      t.icon ? (o(), a("div", Po, r(t.icon), 1)) : u("", !0),
      e("p", Ho, r(t.message), 1),
      t.actionLabel ? (o(), b(W, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => i.$emit("action"))
      }, {
        default: n(() => [
          f(r(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ q(Go, [["__scopeId", "data-v-4466284f"]]), jo = { class: "branch-indicator" }, Ko = { class: "branch-indicator__info" }, qo = { class: "branch-indicator__label" }, Xo = { class: "branch-indicator__name" }, Yo = {
  key: 0,
  class: "branch-indicator__remote"
}, Zo = {
  key: 0,
  class: "branch-indicator__status"
}, Jo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Qo = {
  key: 1,
  class: "branch-indicator__behind"
}, es = {
  key: 1,
  class: "branch-indicator__actions"
}, ts = /* @__PURE__ */ K({
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
    return (i, s) => (o(), a("div", jo, [
      e("div", Ko, [
        e("span", qo, r(t.label), 1),
        e("span", Xo, r(t.branchName), 1),
        t.remote ? (o(), a("span", Yo, "@" + r(t.remote), 1)) : u("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), a("div", Zo, [
        t.commitsAhead ? (o(), a("span", Jo, " ↑ " + r(t.commitsAhead) + " ahead ", 1)) : u("", !0),
        t.commitsBehind ? (o(), a("span", Qo, " ↓ " + r(t.commitsBehind) + " behind ", 1)) : u("", !0)
      ])) : u("", !0),
      i.$slots.actions ? (o(), a("div", es, [
        ne(i.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), os = /* @__PURE__ */ q(ts, [["__scopeId", "data-v-cb8dd50e"]]), ss = /* @__PURE__ */ K({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (i, s) => (o(), a("span", {
      class: J(["detail-label"]),
      style: ot({ minWidth: t.minWidth })
    }, [
      ne(i.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), gt = /* @__PURE__ */ q(ss, [["__scopeId", "data-v-75e9eeb8"]]), as = /* @__PURE__ */ K({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (i, s) => (o(), a("span", {
      class: J(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ne(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ q(as, [["__scopeId", "data-v-2f186e4c"]]), ns = { class: "detail-row" }, ls = /* @__PURE__ */ K({
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
    return (i, s) => (o(), a("div", ns, [
      m(gt, { "min-width": t.labelMinWidth }, {
        default: n(() => [
          f(r(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), b(ht, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: n(() => [
          f(r(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ne(i.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), oe = /* @__PURE__ */ q(ls, [["__scopeId", "data-v-ef15664a"]]), is = { class: "modal-header" }, rs = { class: "modal-body" }, cs = { class: "status-section" }, ds = {
  key: 0,
  class: "status-section"
}, us = { class: "section-header-row" }, ms = {
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
}, Ms = { class: "workflow-group-header" }, Ls = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Rs = { class: "workflow-name" }, Us = {
  key: 4,
  class: "workflow-group"
}, Ts = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Ds = { class: "workflow-list" }, Os = { class: "workflow-name" }, Vs = {
  key: 5,
  class: "workflow-group"
}, As = { class: "workflow-group-title" }, Fs = { class: "expand-icon" }, Ws = {
  key: 0,
  class: "workflow-list"
}, Ps = { class: "workflow-name" }, Hs = {
  key: 1,
  class: "status-section"
}, Gs = {
  key: 0,
  class: "change-group"
}, js = { class: "change-group-header" }, Ks = { class: "change-group-title" }, qs = { class: "change-list" }, Xs = { class: "node-name" }, Ys = {
  key: 0,
  class: "dev-badge"
}, Zs = {
  key: 1,
  class: "change-group"
}, Js = { class: "change-group-header" }, Qs = { class: "change-group-title" }, ea = { class: "change-list" }, ta = { class: "node-name" }, oa = {
  key: 0,
  class: "dev-badge"
}, sa = {
  key: 2,
  class: "change-group"
}, aa = { class: "change-list" }, na = { class: "change-item" }, la = { class: "node-name" }, ia = {
  key: 3,
  class: "change-group"
}, ra = {
  key: 2,
  class: "status-section"
}, ca = {
  key: 0,
  class: "drift-item"
}, da = { class: "drift-list" }, ua = {
  key: 0,
  class: "drift-list-more"
}, ma = {
  key: 1,
  class: "drift-item"
}, va = { class: "drift-list" }, fa = {
  key: 0,
  class: "drift-list-more"
}, ga = {
  key: 2,
  class: "drift-item"
}, ha = {
  key: 3,
  class: "drift-item"
}, pa = {
  key: 3,
  class: "status-section"
}, ya = { class: "info-box" }, wa = { class: "drift-list" }, ba = {
  key: 0,
  class: "drift-list-more"
}, ka = {
  key: 4,
  class: "status-section"
}, _a = { class: "warning-box" }, $a = {
  key: 5,
  class: "empty-state-inline"
}, Ca = { class: "modal-actions" }, xa = /* @__PURE__ */ K({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows"],
  setup(t) {
    const i = t, s = x(!1);
    he(() => {
      console.log("StatusDetailModal mounted, initial show value:", i.show);
    }), Et(() => i.show, (y, w) => {
      console.log("StatusDetailModal show prop changed from", w, "to", y);
    }, { immediate: !0 });
    const l = D(() => {
      var y, w, E;
      return ((E = (w = (y = i.status) == null ? void 0 : y.workflows) == null ? void 0 : w.analyzed) == null ? void 0 : E.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), g = D(() => {
      var y, w, E;
      return ((E = (w = (y = i.status) == null ? void 0 : y.workflows) == null ? void 0 : w.analyzed) == null ? void 0 : E.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), h = D(() => {
      var y, w, E;
      return ((E = (w = (y = i.status) == null ? void 0 : y.workflows) == null ? void 0 : w.synced) == null ? void 0 : E.filter((C) => {
        var U, Z, A;
        const z = (A = (Z = (U = i.status) == null ? void 0 : U.workflows) == null ? void 0 : Z.analyzed) == null ? void 0 : A.find((_) => _.name === C);
        return !z || z.status !== "broken";
      })) || [];
    }), v = D(() => {
      var y, w, E, C, z;
      return (y = i.status) != null && y.workflows ? (((w = i.status.workflows.new) == null ? void 0 : w.length) ?? 0) > 0 || (((E = i.status.workflows.modified) == null ? void 0 : E.length) ?? 0) > 0 || (((C = i.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((z = i.status.workflows.synced) == null ? void 0 : z.length) ?? 0) > 0 : !1;
    }), d = D(() => {
      var w, E, C;
      const y = (w = i.status) == null ? void 0 : w.git_changes;
      return y ? (((E = y.nodes_added) == null ? void 0 : E.length) ?? 0) > 0 || (((C = y.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || y.workflow_changes || y.has_other_changes : !1;
    }), c = D(() => {
      var y, w, E, C, z, U;
      return !v.value && !d.value && ((w = (y = i.status) == null ? void 0 : y.comparison) == null ? void 0 : w.is_synced) && (((E = i.status) == null ? void 0 : E.missing_models_count) ?? 0) === 0 && (((U = (z = (C = i.status) == null ? void 0 : C.comparison) == null ? void 0 : z.disabled_nodes) == null ? void 0 : U.length) ?? 0) === 0;
    }), p = D(() => {
      var w, E;
      const y = (E = (w = i.status) == null ? void 0 : w.git_changes) == null ? void 0 : E.workflow_changes;
      return y ? typeof y == "number" ? y : Object.keys(y).length : 0;
    });
    function S(y) {
      return typeof y == "string" ? y : y.name;
    }
    function k(y) {
      return typeof y == "object" && y.is_development === !0;
    }
    return (y, w) => {
      var E, C, z, U, Z, A, _, B, N, V, M, R, T, G, O, L, X, j, pe, xe, de, ue;
      return o(), b(ze, { to: "body" }, [
        t.show ? (o(), a("div", {
          key: 0,
          class: "modal-overlay",
          onClick: w[5] || (w[5] = (ee) => y.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: w[4] || (w[4] = fe(() => {
            }, ["stop"]))
          }, [
            e("div", is, [
              w[6] || (w[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: w[0] || (w[0] = (ee) => y.$emit("close"))
              }, "✕")
            ]),
            e("div", rs, [
              e("div", cs, [
                m($e, { level: "4" }, {
                  default: n(() => [...w[7] || (w[7] = [
                    f("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                m(oe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              v.value ? (o(), a("div", ds, [
                e("div", us, [
                  m($e, { level: "4" }, {
                    default: n(() => [...w[8] || (w[8] = [
                      f("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: w[1] || (w[1] = (ee) => y.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                l.value.length ? (o(), a("div", ms, [
                  e("div", vs, [
                    w[9] || (w[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", fs, "BROKEN (COMMITTED) (" + r(l.value.length) + ")", 1)
                  ]),
                  e("div", gs, [
                    (o(!0), a(H, null, Q(l.value, (ee) => (o(), a("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", hs, r(ee.name), 1),
                      e("span", ps, r(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                g.value.length ? (o(), a("div", ys, [
                  e("div", ws, [
                    w[10] || (w[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", bs, "BROKEN (UNCOMMITTED) (" + r(g.value.length) + ")", 1)
                  ]),
                  e("div", ks, [
                    (o(!0), a(H, null, Q(g.value, (ee) => (o(), a("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", _s, r(ee.name), 1),
                      e("span", $s, r(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (C = (E = t.status.workflows) == null ? void 0 : E.new) != null && C.length ? (o(), a("div", Cs, [
                  e("div", xs, [
                    w[11] || (w[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ss, "NEW (" + r(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Is, [
                    (o(!0), a(H, null, Q(t.status.workflows.new, (ee) => (o(), a("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Es, r(ee), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (U = (z = t.status.workflows) == null ? void 0 : z.modified) != null && U.length ? (o(), a("div", zs, [
                  e("div", Ms, [
                    w[12] || (w[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ls, "MODIFIED (" + r(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), a(H, null, Q(t.status.workflows.modified, (ee) => (o(), a("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Rs, r(ee), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (A = (Z = t.status.workflows) == null ? void 0 : Z.deleted) != null && A.length ? (o(), a("div", Us, [
                  e("div", Ts, [
                    w[13] || (w[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Bs, "DELETED (" + r(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ds, [
                    (o(!0), a(H, null, Q(t.status.workflows.deleted, (ee) => (o(), a("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Os, r(ee), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                h.value.length ? (o(), a("div", Vs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: w[2] || (w[2] = (ee) => s.value = !s.value)
                  }, [
                    w[14] || (w[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", As, "SYNCED (" + r(h.value.length) + ")", 1),
                    e("span", Fs, r(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), a("div", Ws, [
                    (o(!0), a(H, null, Q(h.value, (ee) => (o(), a("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Ps, r(ee), 1)
                    ]))), 128))
                  ])) : u("", !0)
                ])) : u("", !0)
              ])) : u("", !0),
              d.value ? (o(), a("div", Hs, [
                m($e, { level: "4" }, {
                  default: n(() => [...w[15] || (w[15] = [
                    f("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (B = (_ = t.status.git_changes) == null ? void 0 : _.nodes_added) != null && B.length ? (o(), a("div", Gs, [
                  e("div", js, [
                    w[16] || (w[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Ks, "NODES ADDED (" + r(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", qs, [
                    (o(!0), a(H, null, Q(t.status.git_changes.nodes_added, (ee) => (o(), a("div", {
                      key: S(ee),
                      class: "change-item"
                    }, [
                      e("span", Xs, r(S(ee)), 1),
                      k(ee) ? (o(), a("span", Ys, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (V = (N = t.status.git_changes) == null ? void 0 : N.nodes_removed) != null && V.length ? (o(), a("div", Zs, [
                  e("div", Js, [
                    w[17] || (w[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Qs, "NODES REMOVED (" + r(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", ea, [
                    (o(!0), a(H, null, Q(t.status.git_changes.nodes_removed, (ee) => (o(), a("div", {
                      key: S(ee),
                      class: "change-item"
                    }, [
                      e("span", ta, r(S(ee)), 1),
                      k(ee) ? (o(), a("span", oa, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (M = t.status.git_changes) != null && M.workflow_changes ? (o(), a("div", sa, [
                  w[18] || (w[18] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", aa, [
                    e("div", na, [
                      e("span", la, r(p.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : u("", !0),
                (R = t.status.git_changes) != null && R.has_other_changes ? (o(), a("div", ia, [...w[19] || (w[19] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : u("", !0)
              ])) : u("", !0),
              (T = t.status.comparison) != null && T.is_synced ? u("", !0) : (o(), a("div", ra, [
                m($e, { level: "4" }, {
                  default: n(() => [...w[20] || (w[20] = [
                    f("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                w[21] || (w[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (O = (G = t.status.comparison) == null ? void 0 : G.missing_nodes) != null && O.length ? (o(), a("div", ca, [
                  m(oe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", da, [
                    (o(!0), a(H, null, Q(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), a("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + r(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), a("div", ua, " ... and " + r(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (X = (L = t.status.comparison) == null ? void 0 : L.extra_nodes) != null && X.length ? (o(), a("div", ma, [
                  m(oe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", va, [
                    (o(!0), a(H, null, Q(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), a("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + r(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), a("div", fa, " ... and " + r(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (pe = (j = t.status.comparison) == null ? void 0 : j.version_mismatches) != null && pe.length ? (o(), a("div", ga, [
                  m(oe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : u("", !0),
                (xe = t.status.comparison) != null && xe.packages_in_sync ? u("", !0) : (o(), a("div", ha, [
                  m(oe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ue = (de = t.status.comparison) == null ? void 0 : de.disabled_nodes) != null && ue.length ? (o(), a("div", pa, [
                m($e, { level: "4" }, {
                  default: n(() => [...w[22] || (w[22] = [
                    f("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ya, [
                  w[23] || (w[23] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, r(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", wa, [
                  (o(!0), a(H, null, Q(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), a("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + r(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), a("div", ba, " ... and " + r(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : u("", !0)
                ])
              ])) : u("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), a("div", ka, [
                m($e, { level: "4" }, {
                  default: n(() => [...w[24] || (w[24] = [
                    f("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", _a, [
                  w[25] || (w[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, r(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                w[26] || (w[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : u("", !0),
              c.value ? (o(), a("div", $a, [...w[27] || (w[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : u("", !0)
            ]),
            e("div", Ca, [
              m(W, {
                variant: "secondary",
                onClick: w[3] || (w[3] = (ee) => y.$emit("close"))
              }, {
                default: n(() => [...w[28] || (w[28] = [
                  f(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), $t = /* @__PURE__ */ q(xa, [["__scopeId", "data-v-cbde957e"]]), Sa = { class: "health-section-header" }, Ia = { style: { "margin-top": "var(--cg-space-1)" } }, Ea = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, za = /* @__PURE__ */ K({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: i }) {
    const s = t, l = x(!1), g = x(!1);
    he(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", $t);
    });
    function h() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    function v() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    function d() {
      l.value = !1, c("view-workflows");
    }
    const c = i, p = D(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), S = D(() => {
      const A = s.status.git_changes;
      return A.nodes_added.length > 0 || A.nodes_removed.length > 0 || A.workflow_changes || A.has_other_changes;
    }), k = D(() => p.value || S.value), y = D(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), w = D(() => s.status.git_changes.has_other_changes), E = D(() => {
      var A;
      return ((A = s.status.workflows.analyzed) == null ? void 0 : A.filter(
        (_) => _.status === "broken" && _.sync_state === "synced"
      )) || [];
    }), C = D(() => {
      var A;
      return ((A = s.status.workflows.analyzed) == null ? void 0 : A.filter(
        (_) => _.status === "broken" && _.sync_state !== "synced"
      )) || [];
    }), z = D(() => E.value.length > 0 || C.value.length > 0), U = D(() => z.value || s.status.missing_models_count > 0 || k.value || !s.status.comparison.is_synced), Z = D(() => {
      const A = [];
      return s.status.workflows.new.length > 0 && A.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && A.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && A.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && A.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && A.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${A.length > 0 ? A.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (A, _) => (o(), a(H, null, [
      m(we, null, {
        header: n(() => [
          m(be, { title: "STATUS" })
        ]),
        content: n(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: _[0] || (_[0] = (B) => g.value = !0),
            onMouseleave: _[1] || (_[1] = (B) => g.value = !1)
          }, [
            e("div", Sa, [
              m($e, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: n(() => [..._[11] || (_[11] = [
                  f(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              m(Yt, { name: "fade" }, {
                default: n(() => [
                  g.value ? (o(), b(W, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: h
                  }, {
                    default: n(() => [..._[12] || (_[12] = [
                      f(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : u("", !0)
                ]),
                _: 1
              })
            ]),
            m(So, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: n(() => [
                t.status.workflows.new.length ? (o(), b(Re, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.modified.length ? (o(), b(Re, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.deleted.length ? (o(), b(Re, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : u("", !0),
                m(Re, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: p.value
                }, null, 8, ["count", "separator"])
              ]),
              right: n(() => [
                t.status.git_changes.nodes_added.length ? (o(), b(Re, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), b(Re, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.workflow_changes ? (o(), b(Re, {
                  key: 2,
                  icon: "●",
                  count: y.value,
                  label: y.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : u("", !0),
                w.value ? (o(), b(Re, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : u("", !0),
                S.value ? u("", !0) : (o(), b(Re, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", Ia, [
            m(os, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: n(() => [
                m(W, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _[2] || (_[2] = (B) => A.$emit("switch-branch"))
                }, {
                  default: n(() => [..._[13] || (_[13] = [
                    f(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), b(He, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: n(() => [
              m(W, {
                variant: "primary",
                size: "sm",
                onClick: _[3] || (_[3] = (B) => A.$emit("create-branch"))
              }, {
                default: n(() => [..._[14] || (_[14] = [
                  f(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : u("", !0),
          U.value ? (o(), a("div", Ea, [
            m($e, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: n(() => [..._[15] || (_[15] = [
                f(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            E.value.length > 0 ? (o(), b(He, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${E.value.length} committed workflow${E.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: E.value.map((B) => `${B.name} — ${B.issue_summary}`)
            }, {
              actions: n(() => [
                m(W, {
                  variant: "primary",
                  size: "sm",
                  onClick: _[4] || (_[4] = (B) => A.$emit("view-workflows"))
                }, {
                  default: n(() => [..._[16] || (_[16] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            C.value.length > 0 ? (o(), b(He, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${C.value.length} workflow${C.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: C.value.map((B) => `${B.name} — ${B.issue_summary}`)
            }, {
              actions: n(() => [
                m(W, {
                  variant: "primary",
                  size: "sm",
                  onClick: _[5] || (_[5] = (B) => A.$emit("view-workflows"))
                }, {
                  default: n(() => [..._[17] || (_[17] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            t.status.missing_models_count > 0 && !z.value ? (o(), b(He, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: n(() => [
                m(W, {
                  variant: "primary",
                  size: "sm",
                  onClick: _[6] || (_[6] = (B) => A.$emit("view-workflows"))
                }, {
                  default: n(() => [..._[18] || (_[18] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : u("", !0),
            k.value ? (o(), b(He, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: Z.value
            }, {
              actions: n(() => [
                m(W, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: n(() => [..._[19] || (_[19] = [
                    f(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                m(W, {
                  variant: "primary",
                  size: "sm",
                  onClick: _[7] || (_[7] = (B) => A.$emit("commit-changes"))
                }, {
                  default: n(() => [..._[20] || (_[20] = [
                    f(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : u("", !0),
            t.status.comparison.is_synced ? u("", !0) : (o(), b(He, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: n(() => [
                m(W, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _[8] || (_[8] = (B) => A.$emit("view-debug"))
                }, {
                  default: n(() => [..._[21] || (_[21] = [
                    f(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                m(W, {
                  variant: "primary",
                  size: "sm",
                  onClick: _[9] || (_[9] = (B) => A.$emit("sync-environment"))
                }, {
                  default: n(() => [..._[22] || (_[22] = [
                    f(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : u("", !0),
          !U.value && !S.value ? (o(), b(Me, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : u("", !0)
        ]),
        _: 1
      }),
      m($t, {
        show: l.value,
        status: t.status,
        onClose: _[10] || (_[10] = (B) => l.value = !1),
        onNavigateWorkflows: d
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Ma = /* @__PURE__ */ q(za, [["__scopeId", "data-v-05737be6"]]), La = ["type", "value", "placeholder", "disabled"], Na = /* @__PURE__ */ K({
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
  setup(t, { expose: i, emit: s }) {
    const l = t, g = s, h = x(null);
    function v(d) {
      const c = d.target.value;
      g("update:modelValue", c);
    }
    return he(() => {
      l.autoFocus && h.value && h.value.focus();
    }), i({
      focus: () => {
        var d;
        return (d = h.value) == null ? void 0 : d.focus();
      },
      blur: () => {
        var d;
        return (d = h.value) == null ? void 0 : d.blur();
      }
    }), (d, c) => (o(), a("input", {
      ref_key: "inputRef",
      ref: h,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: J(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: v,
      onKeyup: [
        c[0] || (c[0] = Te((p) => d.$emit("enter"), ["enter"])),
        c[1] || (c[1] = Te((p) => d.$emit("escape"), ["escape"]))
      ],
      onFocus: c[2] || (c[2] = (p) => d.$emit("focus")),
      onBlur: c[3] || (c[3] = (p) => d.$emit("blur"))
    }, null, 42, La));
  }
}), tt = /* @__PURE__ */ q(Na, [["__scopeId", "data-v-0380d08f"]]), Ra = { class: "branch-create-form" }, Ua = { class: "form-actions" }, Ta = /* @__PURE__ */ K({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: i }) {
    const s = i, l = x(""), g = D(() => {
      const d = l.value.trim();
      return d.length > 0 && !d.startsWith("-") && !d.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(d);
    });
    function h() {
      g.value && (s("create", l.value.trim()), l.value = "");
    }
    function v() {
      l.value = "", s("cancel");
    }
    return (d, c) => (o(), a("div", Ra, [
      m(tt, {
        modelValue: l.value,
        "onUpdate:modelValue": c[0] || (c[0] = (p) => l.value = p),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: h,
        onEscape: v
      }, null, 8, ["modelValue"]),
      e("div", Ua, [
        m(W, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: h
        }, {
          default: n(() => [...c[1] || (c[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        m(W, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: n(() => [...c[2] || (c[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ba = /* @__PURE__ */ q(Ta, [["__scopeId", "data-v-7c500394"]]), Da = { class: "branch-list-item__indicator" }, Oa = { class: "branch-list-item__name" }, Va = {
  key: 0,
  class: "branch-list-item__actions"
}, Aa = {
  key: 0,
  class: "branch-list-item__current-label"
}, Fa = /* @__PURE__ */ K({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (i, s) => (o(), a("div", {
      class: J(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (l) => t.clickable && i.$emit("click"))
    }, [
      e("span", Da, r(t.isCurrent ? "●" : "○"), 1),
      e("span", Oa, r(t.branchName), 1),
      i.$slots.actions || t.showCurrentLabel ? (o(), a("div", Va, [
        ne(i.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), a("span", Aa, " current ")) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), Wa = /* @__PURE__ */ q(Fa, [["__scopeId", "data-v-c6581a24"]]), Pa = {
  key: 2,
  class: "branch-list"
}, Ha = /* @__PURE__ */ K({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: i }) {
    const s = i, l = x(!1);
    function g(v) {
      s("create", v), h();
    }
    function h() {
      l.value = !1;
    }
    return (v, d) => (o(), b(we, null, {
      header: n(() => [
        m(be, { title: "BRANCHES" }, {
          actions: n(() => [
            m(W, {
              variant: "ghost",
              size: "sm",
              onClick: d[0] || (d[0] = (c) => l.value = !0),
              title: "Create new branch"
            }, {
              default: n(() => [...d[1] || (d[1] = [
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
        l.value ? (o(), b(Ba, {
          key: 0,
          onCreate: g,
          onCancel: h
        })) : u("", !0),
        t.branches.length === 0 ? (o(), b(Me, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), a("div", Pa, [
          (o(!0), a(H, null, Q(t.branches, (c) => (o(), b(Wa, {
            key: c.name,
            "branch-name": c.name,
            "is-current": c.is_current
          }, {
            actions: n(() => [
              c.is_current ? u("", !0) : (o(), b(W, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (p) => v.$emit("switch", c.name)
              }, {
                default: n(() => [...d[2] || (d[2] = [
                  f(" Switch ", -1)
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
}), Ga = /* @__PURE__ */ q(Ha, [["__scopeId", "data-v-763d6ec4"]]), ja = { class: "commit-list" }, Ka = /* @__PURE__ */ K({
  __name: "CommitList",
  setup(t) {
    return (i, s) => (o(), a("div", ja, [
      ne(i.$slots, "default", {}, void 0, !0)
    ]));
  }
}), qa = /* @__PURE__ */ q(Ka, [["__scopeId", "data-v-8c5ee761"]]), Xa = { class: "commit-hash" }, Ya = /* @__PURE__ */ K({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const i = t, s = D(() => i.hash.slice(0, i.length));
    return (l, g) => (o(), a("span", Xa, r(s.value), 1));
  }
}), Rt = /* @__PURE__ */ q(Ya, [["__scopeId", "data-v-7c333cc6"]]), Za = { class: "commit-message" }, Ja = { class: "commit-date" }, Qa = /* @__PURE__ */ K({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: i }) {
    const s = t, l = i;
    function g() {
      s.clickable && l("click");
    }
    return (h, v) => (o(), a("div", {
      class: J(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      m(Rt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Za, r(t.message), 1),
      e("span", Ja, r(t.relativeDate), 1),
      h.$slots.actions ? (o(), a("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = fe(() => {
        }, ["stop"]))
      }, [
        ne(h.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), en = /* @__PURE__ */ q(Qa, [["__scopeId", "data-v-dd7c621b"]]), tn = /* @__PURE__ */ K({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (i, s) => (o(), b(we, null, {
      header: n(() => [
        m(be, { title: "HISTORY" })
      ]),
      content: n(() => [
        t.commits.length === 0 ? (o(), b(Me, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), b(qa, { key: 1 }, {
          default: n(() => [
            (o(!0), a(H, null, Q(t.commits, (l) => (o(), b(en, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (g) => i.$emit("select", l)
            }, {
              actions: n(() => [
                m(W, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => i.$emit("checkout", l),
                  title: "Checkout this commit"
                }, {
                  default: n(() => [...s[0] || (s[0] = [
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
}), on = /* @__PURE__ */ q(tn, [["__scopeId", "data-v-981c3c64"]]), Ct = [
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
  ...Array(12).fill(null).map((t, i) => ({
    name: `synced-workflow-${i + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + i,
    model_count: 1 + i % 3,
    sync_state: "synced"
  }))
], sn = {
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
}, Ut = [
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
], an = [
  ...Ut,
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
], nn = [
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
], re = {
  // Environment Management
  getEnvironments: async () => (await ie(300), [
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
    await ie(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, i, s) => {
    await ie(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${i}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (t) => {
    await ie(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ie(400), Ct),
  getWorkflowDetails: async (t) => (await ie(300), sn[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await ie(800), {
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
  installWorkflowDeps: async (t, i, s) => {
    await ie(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${i}, models=${s}`);
  },
  setModelImportance: async (t, i, s) => {
    await ie(200), console.log(`[MOCK] Setting ${i} importance to ${s} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ie(350), Ut),
  getWorkspaceModels: async () => (await ie(400), an),
  updateModelSource: async (t, i) => {
    await ie(300), console.log(`[MOCK] Updating source for ${t}: ${i}`);
  },
  deleteModel: async (t) => {
    await ie(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await ie(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await ie(350);
    const t = lt.filter((s) => s.installed), i = lt.filter((s) => !s.installed);
    return {
      nodes: lt,
      total_count: lt.length,
      installed_count: t.length,
      missing_count: i.length
    };
  },
  installNode: async (t) => {
    await ie(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await ie(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await ie(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await ie(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await ie(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, i) => (await ie(250), (t ? it.filter((l) => l.level === t) : it).slice(0, i || 100)),
  getWorkspaceLogs: async (t, i) => {
    await ie(300);
    const s = [...it, ...it.map((g) => ({
      ...g,
      name: "comfygit.workspace"
    }))];
    return (t ? s.filter((g) => g.level === t) : s).slice(0, i || 100);
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
  getStatus: async () => (await ie(400), {
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
  getCommitHistory: async (t = 10) => (await ie(300), nn.slice(0, t)),
  getBranches: async () => (await ie(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  // Git Remotes Management
  getRemotes: async () => (await ie(300), {
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
  addRemote: async (t, i) => {
    await ie(400), console.log(`[MOCK] Adding remote: ${t} -> ${i}`);
  },
  removeRemote: async (t) => {
    await ie(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, i, s) => {
    await ie(400), console.log(`[MOCK] Updating remote ${t}: ${i}${s ? ` (push: ${s})` : ""}`);
  },
  fetchRemote: async (t) => {
    await ie(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await ie(300), {
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
  analyzeWorkflow: async (t) => (await ie(600), {
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
  applyResolution: async (t, i, s) => {
    await ie(800);
    const l = [], g = [];
    return i.forEach((h, v) => {
      h.action === "install" && h.package_id && l.push(h.package_id);
    }), s.forEach((h, v) => {
      h.action === "download" && h.url ? g.push({
        filename: v,
        url: h.url,
        size: 65e8,
        target_path: h.target_path || `models/${v}`
      }) : h.action === "select" && h.selected_model && console.log(`[MOCK] Selected existing model: ${h.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: l,
      models_to_download: g,
      estimated_time_seconds: l.length * 30 + g.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, i = 10) => {
    await ie(400);
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
      results: s.slice(0, i),
      total: s.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (t, i = 10) => {
    await ie(400);
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
      results: s.slice(0, i),
      total: s.length
    };
  }
};
function ie(t) {
  return new Promise((i) => setTimeout(i, t));
}
function rt() {
  return !0;
}
function ke() {
  const t = x(!1), i = x(null);
  async function s($, P) {
    var ye;
    if (!((ye = window.app) != null && ye.api))
      throw new Error("ComfyUI API not available");
    const te = await window.app.api.fetchApi($, P);
    if (!te.ok) {
      const Ne = await te.json().catch(() => ({}));
      throw new Error(Ne.error || Ne.message || `Request failed: ${te.status}`);
    }
    return te.json();
  }
  async function l() {
    return re.getStatus();
  }
  async function g($, P = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: $, allow_issues: P })
    });
  }
  async function h($ = 10, P = 0) {
    {
      const te = await re.getCommitHistory($);
      return {
        commits: te,
        total: te.length,
        offset: P
      };
    }
  }
  async function v($) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: $ })
    });
  }
  async function d() {
    return re.getBranches();
  }
  async function c($) {
    return s(`/v2/comfygit/commit/${$}`);
  }
  async function p($, P = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: $, force: P })
    });
  }
  async function S($, P = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: $, start_point: P })
    });
  }
  async function k($, P = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: $, force: P })
    });
  }
  async function y() {
    return re.getEnvironments();
  }
  async function w($) {
    return re.switchEnvironment($);
  }
  async function E() {
    return null;
  }
  async function C($, P, te) {
    return await re.createEnvironment($, P, te), { status: "success" };
  }
  async function z($) {
    return await re.deleteEnvironment($), { status: "success" };
  }
  async function U() {
    return re.getWorkflows();
  }
  async function Z($) {
    return re.getWorkflowDetails($);
  }
  async function A($) {
    return re.resolveWorkflow($);
  }
  async function _($, P, te) {
    return await re.installWorkflowDeps($, P, te), { status: "success" };
  }
  async function B($, P, te) {
    return re.setModelImportance($, P, te);
  }
  async function N() {
    return re.getEnvironmentModels();
  }
  async function V() {
    return re.getWorkspaceModels();
  }
  async function M($, P) {
    return re.updateModelSource($, P);
  }
  async function R($) {
    return re.deleteModel($);
  }
  async function T($) {
    return await re.downloadModel($), { status: "success" };
  }
  async function G() {
    return re.getConfig();
  }
  async function O($) {
    return re.updateConfig($);
  }
  async function L($, P) {
    return re.getEnvironmentLogs($, P);
  }
  async function X($, P) {
    return re.getWorkspaceLogs($, P);
  }
  async function j() {
    return re.getNodes();
  }
  async function pe($) {
    return await re.installNode($), { status: "success" };
  }
  async function xe($) {
    return await re.updateNode($), { status: "success" };
  }
  async function de($) {
    return await re.uninstallNode($), { status: "success" };
  }
  async function ue() {
    return re.getRemotes();
  }
  async function ee($, P) {
    return await re.addRemote($, P), { status: "success", remote_name: $ };
  }
  async function Le($) {
    return await re.removeRemote($), { status: "success", remote_name: $ };
  }
  async function Xe($, P, te) {
    return await re.updateRemoteUrl($, P, te), { status: "success", remote_name: $ };
  }
  async function ce($) {
    return await re.fetchRemote($), { status: "success", remote_name: $ };
  }
  async function Ce($) {
    return re.getRemoteSyncStatus($);
  }
  async function Y($ = "skip", P = !0) {
    return await new Promise((te) => setTimeout(te, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  return {
    isLoading: t,
    error: i,
    getStatus: l,
    commit: g,
    getHistory: h,
    exportEnv: v,
    // Git Operations
    getBranches: d,
    getCommitDetail: c,
    checkout: p,
    createBranch: S,
    switchBranch: k,
    // Environment Management
    getEnvironments: y,
    switchEnvironment: w,
    getSwitchProgress: E,
    createEnvironment: C,
    deleteEnvironment: z,
    // Workflow Management
    getWorkflows: U,
    getWorkflowDetails: Z,
    resolveWorkflow: A,
    installWorkflowDeps: _,
    setModelImportance: B,
    // Model Management
    getEnvironmentModels: N,
    getWorkspaceModels: V,
    updateModelSource: M,
    deleteModel: R,
    downloadModel: T,
    // Settings
    getConfig: G,
    updateConfig: O,
    // Debug/Logs
    getEnvironmentLogs: L,
    getWorkspaceLogs: X,
    // Node Management
    getNodes: j,
    installNode: pe,
    updateNode: xe,
    uninstallNode: de,
    // Git Remotes
    getRemotes: ue,
    addRemote: ee,
    removeRemote: Le,
    updateRemoteUrl: Xe,
    fetchRemote: ce,
    getRemoteSyncStatus: Ce,
    // Environment Sync
    syncEnvironmentManually: Y
  };
}
const ln = { class: "base-modal-header" }, rn = {
  key: 0,
  class: "base-modal-title"
}, cn = { class: "base-modal-body" }, dn = {
  key: 0,
  class: "base-modal-loading"
}, un = {
  key: 1,
  class: "base-modal-error"
}, mn = {
  key: 0,
  class: "base-modal-footer"
}, vn = /* @__PURE__ */ K({
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
  setup(t, { emit: i }) {
    const s = t, l = i;
    function g() {
      s.closeOnOverlayClick && l("close");
    }
    function h(v) {
      v.key === "Escape" && l("close");
    }
    return he(() => {
      document.addEventListener("keydown", h), document.body.style.overflow = "hidden";
    }), Zt(() => {
      document.removeEventListener("keydown", h), document.body.style.overflow = "";
    }), (v, d) => (o(), b(ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: J(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: d[1] || (d[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", ln, [
            ne(v.$slots, "header", {}, () => [
              t.title ? (o(), a("h3", rn, r(t.title), 1)) : u("", !0)
            ], !0),
            t.showCloseButton ? (o(), a("button", {
              key: 0,
              class: "base-modal-close",
              onClick: d[0] || (d[0] = (c) => v.$emit("close"))
            }, [...d[2] || (d[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : u("", !0)
          ]),
          e("div", cn, [
            t.loading ? (o(), a("div", dn, "Loading...")) : t.error ? (o(), a("div", un, r(t.error), 1)) : ne(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (o(), a("div", mn, [
            ne(v.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), dt = /* @__PURE__ */ q(vn, [["__scopeId", "data-v-2125a0e6"]]), fn = ["type", "disabled"], gn = {
  key: 0,
  class: "spinner"
}, hn = /* @__PURE__ */ K({
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
    return (i, s) => (o(), a("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: J(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (l) => i.$emit("click", l))
    }, [
      t.loading ? (o(), a("span", gn)) : u("", !0),
      ne(i.$slots, "default", {}, void 0, !0)
    ], 10, fn));
  }
}), ae = /* @__PURE__ */ q(hn, [["__scopeId", "data-v-f3452606"]]), pn = {
  key: 0,
  class: "base-title-count"
}, yn = /* @__PURE__ */ K({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (i, s) => (o(), b(yt(`h${t.level}`), {
      class: J(["base-title", t.variant])
    }, {
      default: n(() => [
        ne(i.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), a("span", pn, "(" + r(t.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qe = /* @__PURE__ */ q(yn, [["__scopeId", "data-v-5a01561d"]]), wn = ["value", "disabled"], bn = {
  key: 0,
  value: "",
  disabled: ""
}, kn = ["value"], _n = {
  key: 0,
  class: "base-select-error"
}, $n = /* @__PURE__ */ K({
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
    function i(l) {
      return typeof l == "string" ? l : l.value;
    }
    function s(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, g) => (o(), a("div", {
      class: J(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: J(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (h) => l.$emit("update:modelValue", h.target.value))
      }, [
        t.placeholder ? (o(), a("option", bn, r(t.placeholder), 1)) : u("", !0),
        (o(!0), a(H, null, Q(t.options, (h) => (o(), a("option", {
          key: i(h),
          value: i(h)
        }, r(s(h)), 9, kn))), 128))
      ], 42, wn),
      t.error ? (o(), a("span", _n, r(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Cn = /* @__PURE__ */ q($n, [["__scopeId", "data-v-7436d745"]]), xn = { class: "popover-header" }, Sn = { class: "popover-title" }, In = { class: "popover-content" }, En = {
  key: 0,
  class: "popover-actions"
}, zn = /* @__PURE__ */ K({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (i, s) => (o(), b(ze, { to: "body" }, [
      t.show ? (o(), a("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (l) => i.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: ot({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", xn, [
            e("h4", Sn, r(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (l) => i.$emit("close"))
            }, "✕")
          ]),
          e("div", In, [
            ne(i.$slots, "content", {}, void 0, !0)
          ]),
          i.$slots.actions ? (o(), a("div", En, [
            ne(i.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ q(zn, [["__scopeId", "data-v-42815ace"]]), Mn = { class: "detail-section" }, Ln = {
  key: 0,
  class: "empty-message"
}, Nn = { class: "model-header" }, Rn = { class: "model-name" }, Un = { class: "model-details" }, Tn = { class: "model-row" }, Bn = { class: "model-row" }, Dn = { class: "label" }, On = {
  key: 0,
  class: "model-row model-row-nodes"
}, Vn = { class: "node-list" }, An = ["onClick"], Fn = {
  key: 1,
  class: "model-row"
}, Wn = { class: "value" }, Pn = {
  key: 0,
  class: "model-actions"
}, Hn = { class: "detail-section" }, Gn = {
  key: 0,
  class: "empty-message"
}, jn = { class: "node-name" }, Kn = {
  key: 0,
  class: "node-version"
}, qn = /* @__PURE__ */ K({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: i }) {
    const s = t, l = i, { getWorkflowDetails: g, setModelImportance: h, installWorkflowDeps: v } = ke(), d = x(null), c = x(!1), p = x(null), S = x(!1), k = x({}), y = x({}), w = x(!1), E = x(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function z(R) {
      switch (R) {
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
    function U(R) {
      switch (R) {
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
    function Z(R) {
      if (!R.loaded_by || R.loaded_by.length === 0) return [];
      const T = R.hash || R.filename;
      return E.value.has(T) ? R.loaded_by : R.loaded_by.slice(0, 3);
    }
    function A(R) {
      return E.value.has(R);
    }
    function _(R) {
      E.value.has(R) ? E.value.delete(R) : E.value.add(R), E.value = new Set(E.value);
    }
    async function B() {
      c.value = !0, p.value = null;
      try {
        d.value = await g(s.workflowName);
      } catch (R) {
        p.value = R instanceof Error ? R.message : "Failed to load workflow details";
      } finally {
        c.value = !1;
      }
    }
    function N(R, T) {
      k.value[R] = T, S.value = !0;
    }
    async function V() {
      if (!S.value) {
        l("close");
        return;
      }
      c.value = !0, p.value = null;
      try {
        for (const [R, T] of Object.entries(k.value))
          await h(s.workflowName, R, T);
        l("close");
      } catch (R) {
        p.value = R instanceof Error ? R.message : "Failed to save changes";
      } finally {
        c.value = !1;
      }
    }
    async function M(R) {
      y.value[R] = !0, p.value = null;
      try {
        await v(s.workflowName, !0, !1), await B();
      } catch (T) {
        p.value = T instanceof Error ? T.message : "Failed to install node";
      } finally {
        y.value[R] = !1;
      }
    }
    return he(B), (R, T) => (o(), a(H, null, [
      m(dt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: c.value,
        error: p.value || void 0,
        onClose: T[5] || (T[5] = (G) => l("close"))
      }, {
        body: n(() => [
          d.value ? (o(), a(H, { key: 0 }, [
            e("section", Mn, [
              m(Qe, { variant: "section" }, {
                default: n(() => [
                  f("MODELS USED (" + r(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (o(), a("div", Ln, " No models used in this workflow ")) : u("", !0),
              (o(!0), a(H, null, Q(d.value.models, (G) => (o(), a("div", {
                key: G.hash,
                class: "model-card"
              }, [
                e("div", Nn, [
                  T[7] || (T[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Rn, r(G.filename), 1)
                ]),
                e("div", Un, [
                  e("div", Tn, [
                    T[8] || (T[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: J(["value", z(G.status)])
                    }, r(U(G.status)), 3)
                  ]),
                  e("div", Bn, [
                    e("span", Dn, [
                      T[9] || (T[9] = f(" Importance: ", -1)),
                      m(Nt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: T[0] || (T[0] = (O) => w.value = !0)
                      })
                    ]),
                    m(Cn, {
                      "model-value": k.value[G.hash] || G.importance,
                      options: C,
                      "onUpdate:modelValue": (O) => N(G.hash, O)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  G.loaded_by && G.loaded_by.length > 0 ? (o(), a("div", On, [
                    T[10] || (T[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Vn, [
                      (o(!0), a(H, null, Q(Z(G), (O, L) => (o(), a("div", {
                        key: `${O.node_id}-${L}`,
                        class: "node-reference"
                      }, r(O.node_type) + " (Node #" + r(O.node_id) + ") ", 1))), 128)),
                      G.loaded_by.length > 3 ? (o(), a("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (O) => _(G.hash || G.filename)
                      }, r(A(G.hash || G.filename) ? "▼ Show less" : `▶ View all (${G.loaded_by.length})`), 9, An)) : u("", !0)
                    ])
                  ])) : u("", !0),
                  G.size_mb ? (o(), a("div", Fn, [
                    T[11] || (T[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Wn, r(G.size_mb) + " MB", 1)
                  ])) : u("", !0)
                ]),
                G.status !== "available" ? (o(), a("div", Pn, [
                  G.status === "downloadable" ? (o(), b(ae, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: T[1] || (T[1] = (O) => l("resolve"))
                  }, {
                    default: n(() => [...T[12] || (T[12] = [
                      f(" Download ", -1)
                    ])]),
                    _: 1
                  })) : G.status === "path_mismatch" ? (o(), b(ae, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: T[2] || (T[2] = (O) => l("resolve"))
                  }, {
                    default: n(() => [...T[13] || (T[13] = [
                      f(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), b(ae, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: T[3] || (T[3] = (O) => l("resolve"))
                  }, {
                    default: n(() => [...T[14] || (T[14] = [
                      f(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : u("", !0)
              ]))), 128))
            ]),
            e("section", Hn, [
              m(Qe, { variant: "section" }, {
                default: n(() => [
                  f("NODES USED (" + r(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (o(), a("div", Gn, " No custom nodes used in this workflow ")) : u("", !0),
              (o(!0), a(H, null, Q(d.value.nodes, (G) => (o(), a("div", {
                key: G.name,
                class: "node-item"
              }, [
                e("span", {
                  class: J(["node-status", G.status === "installed" ? "installed" : "missing"])
                }, r(G.status === "installed" ? "✓" : "✕"), 3),
                e("span", jn, r(G.name), 1),
                G.version ? (o(), a("span", Kn, "v" + r(G.version), 1)) : u("", !0),
                G.status === "missing" ? (o(), b(ae, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: y.value[G.name],
                  onClick: (O) => M(G.name),
                  class: "node-install-btn"
                }, {
                  default: n(() => [...T[15] || (T[15] = [
                    f(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : u("", !0)
              ]))), 128))
            ])
          ], 64)) : u("", !0)
        ]),
        footer: n(() => [
          m(ae, {
            variant: "secondary",
            onClick: T[4] || (T[4] = (G) => l("close"))
          }, {
            default: n(() => [...T[16] || (T[16] = [
              f(" Close ", -1)
            ])]),
            _: 1
          }),
          S.value ? (o(), b(ae, {
            key: 0,
            variant: "primary",
            onClick: V
          }, {
            default: n(() => [...T[17] || (T[17] = [
              f(" Save Changes ", -1)
            ])]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      m(Be, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: T[6] || (T[6] = (G) => w.value = !1)
      }, {
        content: n(() => [...T[18] || (T[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              f(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              f(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              f(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Xn = /* @__PURE__ */ q(qn, [["__scopeId", "data-v-1325d542"]]);
function Yn() {
  const t = x(null), i = x(null), s = x([]), l = x([]), g = x(!1), h = x(null);
  async function v(k, y) {
    var E;
    if (!((E = window.app) != null && E.api))
      throw new Error("ComfyUI API not available");
    const w = await window.app.api.fetchApi(k, y);
    if (!w.ok) {
      const C = await w.json().catch(() => ({})), z = C.error || C.message || `Request failed: ${w.status}`;
      throw new Error(z);
    }
    return w.json();
  }
  async function d(k) {
    g.value = !0, h.value = null;
    try {
      let y;
      return rt() && (y = await re.analyzeWorkflow(k)), t.value = y, y;
    } catch (y) {
      const w = y instanceof Error ? y.message : "Unknown error occurred";
      throw h.value = w, y;
    } finally {
      g.value = !1;
    }
  }
  async function c(k, y, w) {
    g.value = !0, h.value = null;
    try {
      let E;
      return rt() && (E = await re.applyResolution(k, y, w)), i.value = E, E;
    } catch (E) {
      const C = E instanceof Error ? E.message : "Unknown error occurred";
      throw h.value = C, E;
    } finally {
      g.value = !1;
    }
  }
  async function p(k, y = 10) {
    g.value = !0, h.value = null;
    try {
      let w;
      return rt() && (w = await re.searchNodes(k, y)), s.value = w.results, w.results;
    } catch (w) {
      const E = w instanceof Error ? w.message : "Unknown error occurred";
      throw h.value = E, w;
    } finally {
      g.value = !1;
    }
  }
  async function S(k, y = 10) {
    g.value = !0, h.value = null;
    try {
      let w;
      return rt() && (w = await re.searchModels(k, y)), l.value = w.results, w.results;
    } catch (w) {
      const E = w instanceof Error ? w.message : "Unknown error occurred";
      throw h.value = E, w;
    } finally {
      g.value = !1;
    }
  }
  return {
    // State
    result: t,
    appliedResult: i,
    searchResults: s,
    modelSearchResults: l,
    isLoading: g,
    error: h,
    // Methods
    analyzeWorkflow: d,
    applyResolution: c,
    searchNodes: p,
    searchModels: S
  };
}
const Zn = { class: "resolution-stepper" }, Jn = { class: "stepper-header" }, Qn = ["onClick"], el = {
  key: 0,
  class: "step-icon"
}, tl = {
  key: 1,
  class: "step-number"
}, ol = { class: "step-label" }, sl = {
  key: 0,
  class: "step-connector"
}, al = { class: "stepper-content" }, nl = /* @__PURE__ */ K({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: i }) {
    const s = t, l = i;
    function g(p) {
      var S;
      if ((S = s.stepStats) != null && S[p]) {
        const k = s.stepStats[p];
        return k.total > 0 && k.resolved === k.total;
      }
      return s.completedSteps.includes(p);
    }
    function h(p) {
      var S;
      if ((S = s.stepStats) != null && S[p]) {
        const k = s.stepStats[p];
        return k.resolved > 0 && k.resolved < k.total;
      }
      return !1;
    }
    function v(p) {
      return g(p) ? "state-complete" : h(p) ? "state-partial" : "state-pending";
    }
    function d(p) {
      return !1;
    }
    function c(p) {
      l("step-change", p);
    }
    return (p, S) => (o(), a("div", Zn, [
      e("div", Jn, [
        (o(!0), a(H, null, Q(t.steps, (k, y) => (o(), a("div", {
          key: k.id,
          class: J(["step", {
            active: t.currentStep === k.id,
            completed: g(k.id),
            "in-progress": h(k.id),
            disabled: d(k.id)
          }]),
          onClick: (w) => c(k.id)
        }, [
          e("div", {
            class: J(["step-indicator", v(k.id)])
          }, [
            g(k.id) ? (o(), a("span", el, "✓")) : (o(), a("span", tl, r(y + 1), 1))
          ], 2),
          e("div", ol, r(k.label), 1),
          y < t.steps.length - 1 ? (o(), a("div", sl)) : u("", !0)
        ], 10, Qn))), 128))
      ]),
      e("div", al, [
        ne(p.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ll = /* @__PURE__ */ q(nl, [["__scopeId", "data-v-2a7b3af8"]]), il = /* @__PURE__ */ K({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const i = t, s = D(() => i.confidence >= 0.9 ? "high" : i.confidence >= 0.7 ? "medium" : "low"), l = D(() => `confidence-${s.value}`), g = D(() => i.showPercentage ? `${Math.round(i.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (h, v) => (o(), a("span", {
      class: J(["confidence-badge", l.value, t.size])
    }, r(g.value), 3));
  }
}), wt = /* @__PURE__ */ q(il, [["__scopeId", "data-v-17ec4b80"]]), rl = { class: "item-body" }, cl = {
  key: 0,
  class: "resolved-state"
}, dl = {
  key: 1,
  class: "multiple-options"
}, ul = { class: "options-list" }, ml = ["onClick"], vl = ["name", "value", "checked", "onChange"], fl = { class: "option-content" }, gl = { class: "option-header" }, hl = { class: "option-package-id" }, pl = {
  key: 0,
  class: "option-title"
}, yl = { class: "option-meta" }, wl = {
  key: 0,
  class: "installed-badge"
}, bl = { class: "action-buttons" }, kl = {
  key: 2,
  class: "unresolved"
}, _l = { class: "action-buttons" }, $l = /* @__PURE__ */ K({
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
  setup(t, { emit: i }) {
    const s = t, l = i, g = D(() => !!s.choice);
    D(() => {
      var v;
      return (v = s.choice) == null ? void 0 : v.action;
    }), D(() => {
      var v;
      return (v = s.choice) == null ? void 0 : v.package_id;
    });
    function h(v) {
      l("option-selected", v);
    }
    return (v, d) => (o(), a("div", {
      class: J(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", rl, [
        g.value ? (o(), a("div", cl, [
          m(ae, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (c) => l("clear-choice"))
          }, {
            default: n(() => [...d[7] || (d[7] = [
              f(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), a("div", dl, [
          d[11] || (d[11] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", ul, [
            (o(!0), a(H, null, Q(t.options, (c, p) => (o(), a("label", {
              key: c.package_id,
              class: J(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: (S) => h(p)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: (S) => h(p)
              }, null, 40, vl),
              e("div", fl, [
                e("div", gl, [
                  e("span", hl, r(c.package_id), 1),
                  m(wt, {
                    confidence: c.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                c.title && c.title !== c.package_id ? (o(), a("div", pl, r(c.title), 1)) : u("", !0),
                e("div", yl, [
                  c.is_installed ? (o(), a("span", wl, "Already Installed")) : u("", !0)
                ])
              ])
            ], 10, ml))), 128))
          ]),
          e("div", bl, [
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: d[1] || (d[1] = (c) => l("search"))
            }, {
              default: n(() => [...d[8] || (d[8] = [
                f(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: d[2] || (d[2] = (c) => l("manual-entry"))
            }, {
              default: n(() => [...d[9] || (d[9] = [
                f(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: d[3] || (d[3] = (c) => l("mark-optional"))
            }, {
              default: n(() => [...d[10] || (d[10] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), a("div", kl, [
          d[15] || (d[15] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", _l, [
            m(ae, {
              variant: "primary",
              size: "sm",
              onClick: d[4] || (d[4] = (c) => l("search"))
            }, {
              default: n(() => [...d[12] || (d[12] = [
                f(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: d[5] || (d[5] = (c) => l("manual-entry"))
            }, {
              default: n(() => [...d[13] || (d[13] = [
                f(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: d[6] || (d[6] = (c) => l("mark-optional"))
            }, {
              default: n(() => [...d[14] || (d[14] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Cl = /* @__PURE__ */ q($l, [["__scopeId", "data-v-dbefa408"]]), xl = { class: "item-navigator" }, Sl = { class: "nav-item-info" }, Il = { class: "item-name" }, El = { class: "nav-controls" }, zl = { class: "nav-arrows" }, Ml = ["disabled"], Ll = ["disabled"], Nl = { class: "nav-position" }, Rl = /* @__PURE__ */ K({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    status: {},
    currentIndex: {},
    totalItems: {},
    statusLabelOverride: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: i }) {
    const s = t, l = i, g = D(() => {
      if (s.statusLabelOverride) return s.statusLabelOverride;
      switch (s.status) {
        case "not-found":
          return "Not Found";
        case "ambiguous":
          return "Multiple Matches";
        case "install":
          return "Installing";
        case "select":
          return "Selected";
        case "download":
          return "Downloading";
        case "optional":
          return "Optional";
        case "skip":
          return "Skipped";
        default:
          return "Pending";
      }
    }), h = D(() => {
      switch (s.status) {
        case "not-found":
          return "unresolved";
        case "ambiguous":
          return "ambiguous";
        case "install":
        case "select":
        case "download":
          return "resolved";
        case "optional":
          return "optional";
        case "skip":
          return "skip";
        default:
          return "unresolved";
      }
    });
    return (v, d) => (o(), a("div", xl, [
      e("div", Sl, [
        e("code", Il, r(t.itemName), 1),
        e("span", {
          class: J(["status-badge", h.value])
        }, r(g.value), 3)
      ]),
      e("div", El, [
        e("div", zl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: d[0] || (d[0] = (c) => l("prev")),
            title: "Previous item"
          }, " ← ", 8, Ml),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: d[1] || (d[1] = (c) => l("next")),
            title: "Next item"
          }, " → ", 8, Ll)
        ]),
        e("span", Nl, r(t.currentIndex + 1) + "/" + r(t.totalItems), 1)
      ])
    ]));
  }
}), Tt = /* @__PURE__ */ q(Rl, [["__scopeId", "data-v-4cda6265"]]), Ul = ["type", "value", "placeholder", "disabled"], Tl = {
  key: 0,
  class: "base-input-error"
}, Bl = /* @__PURE__ */ K({
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
    return (i, s) => (o(), a("div", {
      class: J(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: J(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (l) => i.$emit("update:modelValue", l.target.value)),
        onKeyup: [
          s[1] || (s[1] = Te((l) => i.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Te((l) => i.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ul),
      t.error ? (o(), a("span", Tl, r(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ q(Bl, [["__scopeId", "data-v-9ba02cdc"]]), Dl = { class: "node-resolution-step" }, Ol = { class: "step-header" }, Vl = { class: "stat-badge" }, Al = {
  key: 1,
  class: "step-body"
}, Fl = {
  key: 2,
  class: "empty-state"
}, Wl = { class: "node-search-modal" }, Pl = { class: "node-modal-body" }, Hl = {
  key: 0,
  class: "node-search-results"
}, Gl = ["onClick"], jl = { class: "node-result-header" }, Kl = { class: "node-result-package-id" }, ql = {
  key: 0,
  class: "node-result-description"
}, Xl = {
  key: 1,
  class: "node-no-results"
}, Yl = {
  key: 2,
  class: "node-searching"
}, Zl = { class: "node-manual-entry-modal" }, Jl = { class: "node-modal-body" }, Ql = { class: "node-modal-actions" }, ei = /* @__PURE__ */ K({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: i }) {
    const s = t, l = i, g = x(0), h = x(!1), v = x(!1), d = x(""), c = x(""), p = x([]), S = x(!1), k = D(() => s.nodes[g.value]), y = D(() => s.nodes.filter((G) => s.nodeChoices.has(G.node_type)).length), w = D(() => {
      var O;
      if (!k.value) return "not-found";
      const G = s.nodeChoices.get(k.value.node_type);
      if (G)
        switch (G.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (O = k.value.options) != null && O.length ? "ambiguous" : "not-found";
    }), E = D(() => {
      var O;
      if (!k.value) return;
      const G = s.nodeChoices.get(k.value.node_type);
      if (G)
        switch (G.action) {
          case "install":
            return G.package_id ? `→ ${G.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (O = k.value.options) != null && O.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function C(G) {
      G >= 0 && G < s.nodes.length && (g.value = G);
    }
    function z() {
      k.value && l("mark-optional", k.value.node_type);
    }
    function U() {
      k.value && l("skip", k.value.node_type);
    }
    function Z(G) {
      k.value && l("option-selected", k.value.node_type, G);
    }
    function A() {
      k.value && l("clear-choice", k.value.node_type);
    }
    function _() {
      k.value && (d.value = k.value.node_type, h.value = !0);
    }
    function B() {
      c.value = "", v.value = !0;
    }
    function N() {
      h.value = !1, d.value = "", p.value = [];
    }
    function V() {
      v.value = !1, c.value = "";
    }
    function M() {
      S.value = !0, setTimeout(() => {
        S.value = !1;
      }, 300);
    }
    function R(G) {
      k.value && (l("manual-entry", k.value.node_type, G.package_id), N());
    }
    function T() {
      !k.value || !c.value.trim() || (l("manual-entry", k.value.node_type, c.value.trim()), V());
    }
    return (G, O) => {
      var L, X;
      return o(), a("div", Dl, [
        e("div", Ol, [
          O[4] || (O[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Vl, r(y.value) + "/" + r(t.nodes.length) + " resolved", 1)
        ]),
        k.value ? (o(), b(Tt, {
          key: 0,
          "item-name": k.value.node_type,
          status: w.value,
          "status-label-override": E.value,
          "current-index": g.value,
          "total-items": t.nodes.length,
          onPrev: O[0] || (O[0] = (j) => C(g.value - 1)),
          onNext: O[1] || (O[1] = (j) => C(g.value + 1))
        }, null, 8, ["item-name", "status", "status-label-override", "current-index", "total-items"])) : u("", !0),
        k.value ? (o(), a("div", Al, [
          m(Cl, {
            "node-type": k.value.node_type,
            "has-multiple-options": !!((L = k.value.options) != null && L.length),
            options: k.value.options,
            choice: (X = t.nodeChoices) == null ? void 0 : X.get(k.value.node_type),
            onMarkOptional: z,
            onSkip: U,
            onManualEntry: B,
            onSearch: _,
            onOptionSelected: Z,
            onClearChoice: A
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice"])
        ])) : (o(), a("div", Fl, [...O[5] || (O[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), b(ze, { to: "body" }, [
          h.value ? (o(), a("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: fe(N, ["self"])
          }, [
            e("div", Wl, [
              e("div", { class: "node-modal-header" }, [
                O[6] || (O[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Pl, [
                m(Ae, {
                  modelValue: d.value,
                  "onUpdate:modelValue": O[2] || (O[2] = (j) => d.value = j),
                  placeholder: "Search by node type, package name...",
                  onInput: M
                }, null, 8, ["modelValue"]),
                p.value.length > 0 ? (o(), a("div", Hl, [
                  (o(!0), a(H, null, Q(p.value, (j) => (o(), a("div", {
                    key: j.package_id,
                    class: "node-search-result-item",
                    onClick: (pe) => R(j)
                  }, [
                    e("div", jl, [
                      e("code", Kl, r(j.package_id), 1),
                      j.match_confidence ? (o(), b(wt, {
                        key: 0,
                        confidence: j.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : u("", !0)
                    ]),
                    j.description ? (o(), a("div", ql, r(j.description), 1)) : u("", !0)
                  ], 8, Gl))), 128))
                ])) : d.value && !S.value ? (o(), a("div", Xl, ' No packages found matching "' + r(d.value) + '" ', 1)) : u("", !0),
                S.value ? (o(), a("div", Yl, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), b(ze, { to: "body" }, [
          v.value ? (o(), a("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: fe(V, ["self"])
          }, [
            e("div", Zl, [
              e("div", { class: "node-modal-header" }, [
                O[7] || (O[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", Jl, [
                m(Ae, {
                  modelValue: c.value,
                  "onUpdate:modelValue": O[3] || (O[3] = (j) => c.value = j),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Ql, [
                  m(ae, {
                    variant: "secondary",
                    onClick: V
                  }, {
                    default: n(() => [...O[8] || (O[8] = [
                      f("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(ae, {
                    variant: "primary",
                    disabled: !c.value.trim(),
                    onClick: T
                  }, {
                    default: n(() => [...O[9] || (O[9] = [
                      f(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : u("", !0)
        ]))
      ]);
    };
  }
}), ti = /* @__PURE__ */ q(ei, [["__scopeId", "data-v-dd0cf680"]]), oi = { class: "node-info" }, si = { class: "item-body" }, ai = {
  key: 0,
  class: "resolved-state"
}, ni = {
  key: 1,
  class: "multiple-options"
}, li = { class: "options-list" }, ii = ["onClick"], ri = ["name", "value", "checked", "onChange"], ci = { class: "option-content" }, di = { class: "option-header" }, ui = { class: "option-filename" }, mi = { class: "option-meta" }, vi = { class: "option-size" }, fi = { class: "option-category" }, gi = { class: "option-path" }, hi = { class: "action-buttons" }, pi = {
  key: 2,
  class: "unresolved"
}, yi = { class: "action-buttons" }, wi = /* @__PURE__ */ K({
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
  setup(t, { emit: i }) {
    const s = t, l = i, g = D(() => !!s.choice);
    D(() => {
      var d;
      return (d = s.choice) == null ? void 0 : d.action;
    }), D(() => {
      var d, c;
      return ((c = (d = s.choice) == null ? void 0 : d.selected_model) == null ? void 0 : c.filename) || "selected";
    });
    function h(d) {
      l("option-selected", d);
    }
    function v(d) {
      if (!d) return "Unknown";
      const c = d / (1024 * 1024 * 1024);
      return c >= 1 ? `${c.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, c) => (o(), a("div", {
      class: J(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", oi, [
        c[7] || (c[7] = f(" Used by: ", -1)),
        e("code", null, r(t.nodeType), 1)
      ]),
      e("div", si, [
        g.value ? (o(), a("div", ai, [
          m(ae, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (p) => l("clear-choice"))
          }, {
            default: n(() => [...c[8] || (c[8] = [
              f(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), a("div", ni, [
          c[12] || (c[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", li, [
            (o(!0), a(H, null, Q(t.options, (p, S) => (o(), a("label", {
              key: p.model.hash,
              class: J(["option-card", { selected: t.selectedOptionIndex === S }]),
              onClick: (k) => h(S)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: S,
                checked: t.selectedOptionIndex === S,
                onChange: (k) => h(S)
              }, null, 40, ri),
              e("div", ci, [
                e("div", di, [
                  e("span", ui, r(p.model.filename), 1),
                  m(wt, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", mi, [
                  e("span", vi, r(v(p.model.size)), 1),
                  e("span", fi, r(p.model.category), 1)
                ]),
                e("div", gi, r(p.model.relative_path), 1)
              ])
            ], 10, ii))), 128))
          ]),
          e("div", hi, [
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: c[1] || (c[1] = (p) => l("search"))
            }, {
              default: n(() => [...c[9] || (c[9] = [
                f(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: c[2] || (c[2] = (p) => l("download-url"))
            }, {
              default: n(() => [...c[10] || (c[10] = [
                f(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: c[3] || (c[3] = (p) => l("mark-optional"))
            }, {
              default: n(() => [...c[11] || (c[11] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), a("div", pi, [
          c[16] || (c[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", yi, [
            m(ae, {
              variant: "primary",
              size: "sm",
              onClick: c[4] || (c[4] = (p) => l("search"))
            }, {
              default: n(() => [...c[13] || (c[13] = [
                f(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: c[5] || (c[5] = (p) => l("download-url"))
            }, {
              default: n(() => [...c[14] || (c[14] = [
                f(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: c[6] || (c[6] = (p) => l("mark-optional"))
            }, {
              default: n(() => [...c[15] || (c[15] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), bi = /* @__PURE__ */ q(wi, [["__scopeId", "data-v-00deda48"]]), ki = { class: "model-resolution-step" }, _i = { class: "step-header" }, $i = { class: "stat-badge" }, Ci = {
  key: 1,
  class: "step-body"
}, xi = {
  key: 2,
  class: "empty-state"
}, Si = { class: "model-search-modal" }, Ii = { class: "model-modal-body" }, Ei = {
  key: 0,
  class: "model-search-results"
}, zi = ["onClick"], Mi = { class: "model-result-header" }, Li = { class: "model-result-filename" }, Ni = { class: "model-result-meta" }, Ri = { class: "model-result-category" }, Ui = { class: "model-result-size" }, Ti = {
  key: 0,
  class: "model-result-path"
}, Bi = {
  key: 1,
  class: "model-no-results"
}, Di = {
  key: 2,
  class: "model-searching"
}, Oi = { class: "model-download-url-modal" }, Vi = { class: "model-modal-body" }, Ai = { class: "model-modal-actions" }, Fi = /* @__PURE__ */ K({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: i }) {
    const s = t, l = i, g = x(0), h = x(!1), v = x(!1), d = x(""), c = x(""), p = x(""), S = x([]), k = x(!1), y = D(() => s.models[g.value]), w = D(() => s.models.filter((X) => s.modelChoices.has(X.filename)).length), E = D(() => y.value ? `checkpoints/${y.value.filename}` : "checkpoints/"), C = D(() => {
      var j;
      if (!y.value) return "not-found";
      const X = s.modelChoices.get(y.value.filename);
      if (X)
        switch (X.action) {
          case "select":
            return "select";
          case "download":
            return "download";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (j = y.value.options) != null && j.length ? "ambiguous" : "not-found";
    }), z = D(() => {
      var j, pe;
      if (!y.value) return;
      const X = s.modelChoices.get(y.value.filename);
      if (X)
        switch (X.action) {
          case "select":
            return (j = X.selected_model) != null && j.filename ? `→ ${X.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (pe = y.value.options) != null && pe.length ? `${y.value.options.length} matches` : "Not Found";
    });
    function U(X) {
      X >= 0 && X < s.models.length && (g.value = X);
    }
    function Z() {
      y.value && l("mark-optional", y.value.filename);
    }
    function A() {
      y.value && l("skip", y.value.filename);
    }
    function _(X) {
      y.value && l("option-selected", y.value.filename, X);
    }
    function B() {
      y.value && l("clear-choice", y.value.filename);
    }
    function N() {
      y.value && (d.value = y.value.filename, h.value = !0);
    }
    function V() {
      c.value = "", p.value = E.value, v.value = !0;
    }
    function M() {
      h.value = !1, d.value = "", S.value = [];
    }
    function R() {
      v.value = !1, c.value = "", p.value = "";
    }
    function T() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function G(X) {
      y.value && M();
    }
    function O() {
      !y.value || !c.value.trim() || (l("download-url", y.value.filename, c.value.trim(), p.value.trim() || void 0), R());
    }
    function L(X) {
      if (!X) return "Unknown";
      const j = X / (1024 * 1024 * 1024);
      return j >= 1 ? `${j.toFixed(2)} GB` : `${(X / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (X, j) => {
      var pe, xe, de;
      return o(), a("div", ki, [
        e("div", _i, [
          j[5] || (j[5] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Models"),
            e("p", { class: "step-description" }, " Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", $i, r(w.value) + "/" + r(t.models.length) + " resolved", 1)
        ]),
        y.value ? (o(), b(Tt, {
          key: 0,
          "item-name": y.value.filename,
          status: C.value,
          "status-label-override": z.value,
          "current-index": g.value,
          "total-items": t.models.length,
          onPrev: j[0] || (j[0] = (ue) => U(g.value - 1)),
          onNext: j[1] || (j[1] = (ue) => U(g.value + 1))
        }, null, 8, ["item-name", "status", "status-label-override", "current-index", "total-items"])) : u("", !0),
        y.value ? (o(), a("div", Ci, [
          m(bi, {
            filename: y.value.filename,
            "node-type": ((pe = y.value.reference) == null ? void 0 : pe.node_type) || "Unknown",
            "has-multiple-options": !!((xe = y.value.options) != null && xe.length),
            options: y.value.options,
            choice: (de = t.modelChoices) == null ? void 0 : de.get(y.value.filename),
            onMarkOptional: Z,
            onSkip: A,
            onDownloadUrl: V,
            onSearch: N,
            onOptionSelected: _,
            onClearChoice: B
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice"])
        ])) : (o(), a("div", xi, [...j[6] || (j[6] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), b(ze, { to: "body" }, [
          h.value ? (o(), a("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: fe(M, ["self"])
          }, [
            e("div", Si, [
              e("div", { class: "model-modal-header" }, [
                j[7] || (j[7] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", Ii, [
                m(Ae, {
                  modelValue: d.value,
                  "onUpdate:modelValue": j[2] || (j[2] = (ue) => d.value = ue),
                  placeholder: "Search by filename, category...",
                  onInput: T
                }, null, 8, ["modelValue"]),
                S.value.length > 0 ? (o(), a("div", Ei, [
                  (o(!0), a(H, null, Q(S.value, (ue) => (o(), a("div", {
                    key: ue.hash,
                    class: "model-search-result-item",
                    onClick: (ee) => G()
                  }, [
                    e("div", Mi, [
                      e("code", Li, r(ue.filename), 1)
                    ]),
                    e("div", Ni, [
                      e("span", Ri, r(ue.category), 1),
                      e("span", Ui, r(L(ue.size)), 1)
                    ]),
                    ue.relative_path ? (o(), a("div", Ti, r(ue.relative_path), 1)) : u("", !0)
                  ], 8, zi))), 128))
                ])) : d.value && !k.value ? (o(), a("div", Bi, ' No models found matching "' + r(d.value) + '" ', 1)) : u("", !0),
                k.value ? (o(), a("div", Di, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), b(ze, { to: "body" }, [
          v.value ? (o(), a("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: fe(R, ["self"])
          }, [
            e("div", Oi, [
              e("div", { class: "model-modal-header" }, [
                j[8] || (j[8] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              e("div", Vi, [
                m(Ae, {
                  modelValue: c.value,
                  "onUpdate:modelValue": j[3] || (j[3] = (ue) => c.value = ue),
                  label: "Download URL",
                  placeholder: "https://civitai.com/api/download/..."
                }, null, 8, ["modelValue"]),
                m(Ae, {
                  modelValue: p.value,
                  "onUpdate:modelValue": j[4] || (j[4] = (ue) => p.value = ue),
                  label: "Target Path (relative to models folder)",
                  placeholder: E.value
                }, null, 8, ["modelValue", "placeholder"]),
                e("div", Ai, [
                  m(ae, {
                    variant: "secondary",
                    onClick: R
                  }, {
                    default: n(() => [...j[9] || (j[9] = [
                      f("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(ae, {
                    variant: "primary",
                    disabled: !c.value.trim(),
                    onClick: O
                  }, {
                    default: n(() => [...j[10] || (j[10] = [
                      f(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : u("", !0)
        ]))
      ]);
    };
  }
}), Wi = /* @__PURE__ */ q(Fi, [["__scopeId", "data-v-189cb6c5"]]), Pi = {
  key: 0,
  class: "loading-state"
}, Hi = {
  key: 1,
  class: "wizard-content"
}, Gi = {
  key: 0,
  class: "step-content"
}, ji = { class: "analysis-summary" }, Ki = { class: "analysis-header" }, qi = { class: "summary-description" }, Xi = { class: "stats-grid" }, Yi = { class: "stat-card" }, Zi = { class: "stat-items" }, Ji = { class: "stat-item success" }, Qi = { class: "stat-count" }, er = {
  key: 0,
  class: "stat-item warning"
}, tr = { class: "stat-count" }, or = {
  key: 1,
  class: "stat-item error"
}, sr = { class: "stat-count" }, ar = { class: "stat-card" }, nr = { class: "stat-items" }, lr = { class: "stat-item success" }, ir = { class: "stat-count" }, rr = {
  key: 0,
  class: "stat-item warning"
}, cr = { class: "stat-count" }, dr = {
  key: 1,
  class: "stat-item error"
}, ur = { class: "stat-count" }, mr = {
  key: 0,
  class: "status-message warning"
}, vr = { class: "status-text" }, fr = {
  key: 1,
  class: "status-message success"
}, gr = {
  key: 3,
  class: "step-content"
}, hr = { class: "review-summary" }, pr = { class: "review-stats" }, yr = { class: "review-stat" }, wr = { class: "stat-value" }, br = { class: "review-stat" }, kr = { class: "stat-value" }, _r = { class: "review-stat" }, $r = { class: "stat-value" }, Cr = { class: "review-stat" }, xr = { class: "stat-value" }, Sr = {
  key: 0,
  class: "review-section"
}, Ir = { class: "section-title" }, Er = { class: "review-items" }, zr = { class: "item-name" }, Mr = { class: "item-choice" }, Lr = {
  key: 0,
  class: "choice-badge install"
}, Nr = {
  key: 1,
  class: "choice-badge optional"
}, Rr = {
  key: 2,
  class: "choice-badge skip"
}, Ur = {
  key: 1,
  class: "choice-badge pending"
}, Tr = {
  key: 1,
  class: "review-section"
}, Br = { class: "section-title" }, Dr = { class: "review-items" }, Or = { class: "item-name" }, Vr = { class: "item-choice" }, Ar = {
  key: 0,
  class: "choice-badge install"
}, Fr = {
  key: 1,
  class: "choice-badge download"
}, Wr = {
  key: 2,
  class: "choice-badge optional"
}, Pr = {
  key: 3,
  class: "choice-badge skip"
}, Hr = {
  key: 1,
  class: "choice-badge pending"
}, Gr = {
  key: 2,
  class: "no-choices"
}, jr = /* @__PURE__ */ K({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: i }) {
    const s = t, l = i, { analyzeWorkflow: g, applyResolution: h } = Yn(), v = x(null), d = x(!1), c = x(!1), p = x(null), S = x("analysis"), k = x([]), y = x(/* @__PURE__ */ new Map()), w = x(/* @__PURE__ */ new Map()), E = D(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return z.value && Y.push({ id: "nodes", label: "Nodes" }), U.value && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), Y;
    }), C = D(() => v.value ? v.value.stats.needs_user_input : !1), z = D(() => v.value ? v.value.nodes.unresolved.length > 0 || v.value.nodes.ambiguous.length > 0 : !1), U = D(() => v.value ? v.value.models.unresolved.length > 0 || v.value.models.ambiguous.length > 0 : !1), Z = D(() => {
      if (!v.value) return [];
      const Y = v.value.nodes.unresolved.map((P) => ({
        node_type: P.reference.node_type,
        reason: P.reason,
        is_unresolved: !0,
        options: void 0
      })), $ = v.value.nodes.ambiguous.map((P) => ({
        node_type: P.reference.node_type,
        has_multiple_options: !0,
        options: P.options.map((te) => ({
          package_id: te.package.package_id,
          title: te.package.title,
          match_confidence: te.match_confidence,
          match_type: te.match_type,
          is_installed: te.is_installed
        }))
      }));
      return [...Y, ...$];
    }), A = D(() => {
      if (!v.value) return [];
      const Y = v.value.models.unresolved.map((P) => ({
        filename: P.reference.widget_value,
        reference: P.reference,
        reason: P.reason,
        is_unresolved: !0,
        options: void 0
      })), $ = v.value.models.ambiguous.map((P) => ({
        filename: P.reference.widget_value,
        reference: P.reference,
        has_multiple_options: !0,
        options: P.options.map((te) => ({
          model: te.model,
          match_confidence: te.match_confidence,
          match_type: te.match_type,
          has_download_source: te.has_download_source
        }))
      }));
      return [...Y, ...$];
    }), _ = D(() => {
      let Y = 0;
      for (const $ of y.value.values())
        $.action === "install" && Y++;
      for (const $ of w.value.values())
        $.action === "select" && Y++;
      return Y;
    }), B = D(() => {
      let Y = 0;
      for (const $ of w.value.values())
        $.action === "download" && Y++;
      return Y;
    }), N = D(() => {
      let Y = 0;
      for (const $ of y.value.values())
        $.action === "optional" && Y++;
      for (const $ of w.value.values())
        $.action === "optional" && Y++;
      return Y;
    }), V = D(() => {
      let Y = 0;
      for (const $ of y.value.values())
        $.action === "skip" && Y++;
      for (const $ of w.value.values())
        $.action === "skip" && Y++;
      for (const $ of Z.value)
        y.value.has($.node_type) || Y++;
      for (const $ of A.value)
        w.value.has($.filename) || Y++;
      return Y;
    }), M = D(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, z.value) {
        const $ = Z.value.length, P = Z.value.filter(
          (te) => y.value.has(te.node_type)
        ).length;
        Y.nodes = { resolved: P, total: $ };
      }
      if (U.value) {
        const $ = A.value.length, P = A.value.filter(
          (te) => w.value.has(te.filename)
        ).length;
        Y.models = { resolved: P, total: $ };
      }
      return Y.review = { resolved: 1, total: 1 }, Y;
    });
    function R(Y) {
      S.value = Y;
    }
    function T() {
      const Y = E.value.findIndex(($) => $.id === S.value);
      Y > 0 && (S.value = E.value[Y - 1].id);
    }
    function G() {
      const Y = E.value.findIndex(($) => $.id === S.value);
      Y < E.value.length - 1 && (S.value = E.value[Y + 1].id);
    }
    async function O() {
      d.value = !0, p.value = null;
      try {
        v.value = await g(s.workflowName);
      } catch (Y) {
        p.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        d.value = !1;
      }
    }
    function L() {
      k.value.includes("analysis") || k.value.push("analysis"), z.value ? S.value = "nodes" : U.value ? S.value = "models" : S.value = "review";
    }
    function X(Y) {
      y.value.set(Y, { action: "optional" });
    }
    function j(Y) {
      y.value.set(Y, { action: "skip" });
    }
    function pe(Y, $) {
      var te;
      const P = Z.value.find((ye) => ye.node_type === Y);
      (te = P == null ? void 0 : P.options) != null && te[$] && y.value.set(Y, {
        action: "install",
        package_id: P.options[$].package_id
      });
    }
    function xe(Y, $) {
      y.value.set(Y, {
        action: "install",
        package_id: $
      });
    }
    function de(Y) {
      y.value.delete(Y);
    }
    function ue(Y) {
      w.value.set(Y, { action: "optional" });
    }
    function ee(Y) {
      w.value.set(Y, { action: "skip" });
    }
    function Le(Y, $) {
      var te;
      const P = A.value.find((ye) => ye.filename === Y);
      (te = P == null ? void 0 : P.options) != null && te[$] && w.value.set(Y, {
        action: "select",
        selected_model: P.options[$].model
      });
    }
    function Xe(Y, $, P) {
      w.value.set(Y, {
        action: "download",
        url: $,
        target_path: P
      });
    }
    function ce(Y) {
      w.value.delete(Y);
    }
    async function Ce() {
      c.value = !0, p.value = null;
      try {
        await h(s.workflowName, y.value, w.value), l("install"), l("refresh"), l("close");
      } catch (Y) {
        p.value = Y instanceof Error ? Y.message : "Failed to apply resolution";
      } finally {
        c.value = !1;
      }
    }
    return he(O), (Y, $) => (o(), b(dt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: d.value,
      error: p.value || void 0,
      "fixed-height": !0,
      onClose: $[1] || ($[1] = (P) => l("close"))
    }, {
      body: n(() => [
        d.value && !v.value ? (o(), a("div", Pi, [...$[2] || ($[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : v.value ? (o(), a("div", Hi, [
          m(ll, {
            steps: E.value,
            "current-step": S.value,
            "completed-steps": k.value,
            "step-stats": M.value,
            onStepChange: R
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          S.value === "analysis" ? (o(), a("div", Gi, [
            e("div", ji, [
              e("div", Ki, [
                $[3] || ($[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", qi, " Found " + r(v.value.stats.total_nodes) + " nodes and " + r(v.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Xi, [
                e("div", Yi, [
                  $[10] || ($[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Zi, [
                    e("div", Ji, [
                      $[4] || ($[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Qi, r(v.value.nodes.resolved.length), 1),
                      $[5] || ($[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    v.value.nodes.ambiguous.length > 0 ? (o(), a("div", er, [
                      $[6] || ($[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", tr, r(v.value.nodes.ambiguous.length), 1),
                      $[7] || ($[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    v.value.nodes.unresolved.length > 0 ? (o(), a("div", or, [
                      $[8] || ($[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", sr, r(v.value.nodes.unresolved.length), 1),
                      $[9] || ($[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ]),
                e("div", ar, [
                  $[17] || ($[17] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", nr, [
                    e("div", lr, [
                      $[11] || ($[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", ir, r(v.value.models.resolved.length), 1),
                      $[12] || ($[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    v.value.models.ambiguous.length > 0 ? (o(), a("div", rr, [
                      $[13] || ($[13] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", cr, r(v.value.models.ambiguous.length), 1),
                      $[14] || ($[14] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    v.value.models.unresolved.length > 0 ? (o(), a("div", dr, [
                      $[15] || ($[15] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", ur, r(v.value.models.unresolved.length), 1),
                      $[16] || ($[16] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ])
              ]),
              C.value ? (o(), a("div", mr, [
                $[18] || ($[18] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", vr, r(Z.value.length + A.value.length) + " items need your input", 1)
              ])) : (o(), a("div", fr, [...$[19] || ($[19] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : u("", !0),
          S.value === "nodes" ? (o(), b(ti, {
            key: 1,
            nodes: Z.value,
            "node-choices": y.value,
            onMarkOptional: X,
            onSkip: j,
            onOptionSelected: pe,
            onManualEntry: xe,
            onClearChoice: de
          }, null, 8, ["nodes", "node-choices"])) : u("", !0),
          S.value === "models" ? (o(), b(Wi, {
            key: 2,
            models: A.value,
            "model-choices": w.value,
            onMarkOptional: ue,
            onSkip: ee,
            onOptionSelected: Le,
            onDownloadUrl: Xe,
            onClearChoice: ce
          }, null, 8, ["models", "model-choices"])) : u("", !0),
          S.value === "review" ? (o(), a("div", gr, [
            e("div", hr, [
              $[24] || ($[24] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", pr, [
                e("div", yr, [
                  e("span", wr, r(_.value), 1),
                  $[20] || ($[20] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", br, [
                  e("span", kr, r(B.value), 1),
                  $[21] || ($[21] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", _r, [
                  e("span", $r, r(N.value), 1),
                  $[22] || ($[22] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Cr, [
                  e("span", xr, r(V.value), 1),
                  $[23] || ($[23] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Z.value.length > 0 ? (o(), a("div", Sr, [
                e("h4", Ir, "Node Packages (" + r(Z.value.length) + ")", 1),
                e("div", Er, [
                  (o(!0), a(H, null, Q(Z.value, (P) => {
                    var te, ye, Ne, Fe;
                    return o(), a("div", {
                      key: P.node_type,
                      class: "review-item"
                    }, [
                      e("code", zr, r(P.node_type), 1),
                      e("div", Mr, [
                        y.value.has(P.node_type) ? (o(), a(H, { key: 0 }, [
                          ((te = y.value.get(P.node_type)) == null ? void 0 : te.action) === "install" ? (o(), a("span", Lr, r((ye = y.value.get(P.node_type)) == null ? void 0 : ye.package_id), 1)) : ((Ne = y.value.get(P.node_type)) == null ? void 0 : Ne.action) === "optional" ? (o(), a("span", Nr, " Optional ")) : ((Fe = y.value.get(P.node_type)) == null ? void 0 : Fe.action) === "skip" ? (o(), a("span", Rr, " Skip ")) : u("", !0)
                        ], 64)) : (o(), a("span", Ur, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              A.value.length > 0 ? (o(), a("div", Tr, [
                e("h4", Br, "Models (" + r(A.value.length) + ")", 1),
                e("div", Dr, [
                  (o(!0), a(H, null, Q(A.value, (P) => {
                    var te, ye, Ne, Fe, st, Ye;
                    return o(), a("div", {
                      key: P.filename,
                      class: "review-item"
                    }, [
                      e("code", Or, r(P.filename), 1),
                      e("div", Vr, [
                        w.value.has(P.filename) ? (o(), a(H, { key: 0 }, [
                          ((te = w.value.get(P.filename)) == null ? void 0 : te.action) === "select" ? (o(), a("span", Ar, r((Ne = (ye = w.value.get(P.filename)) == null ? void 0 : ye.selected_model) == null ? void 0 : Ne.filename), 1)) : ((Fe = w.value.get(P.filename)) == null ? void 0 : Fe.action) === "download" ? (o(), a("span", Fr, " Download ")) : ((st = w.value.get(P.filename)) == null ? void 0 : st.action) === "optional" ? (o(), a("span", Wr, " Optional ")) : ((Ye = w.value.get(P.filename)) == null ? void 0 : Ye.action) === "skip" ? (o(), a("span", Pr, " Skip ")) : u("", !0)
                        ], 64)) : (o(), a("span", Hr, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              Z.value.length === 0 && A.value.length === 0 ? (o(), a("div", Gr, " No dependencies need resolution. ")) : u("", !0)
            ])
          ])) : u("", !0)
        ])) : u("", !0)
      ]),
      footer: n(() => [
        S.value !== "analysis" ? (o(), b(ae, {
          key: 0,
          variant: "secondary",
          disabled: c.value,
          onClick: T
        }, {
          default: n(() => [...$[25] || ($[25] = [
            f(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        $[29] || ($[29] = e("div", { class: "footer-spacer" }, null, -1)),
        m(ae, {
          variant: "secondary",
          onClick: $[0] || ($[0] = (P) => l("close"))
        }, {
          default: n(() => [...$[26] || ($[26] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        S.value === "analysis" ? (o(), b(ae, {
          key: 1,
          variant: "primary",
          disabled: d.value,
          onClick: L
        }, {
          default: n(() => [
            f(r(C.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        S.value === "nodes" ? (o(), b(ae, {
          key: 2,
          variant: "primary",
          onClick: G
        }, {
          default: n(() => [
            f(r(U.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : u("", !0),
        S.value === "models" ? (o(), b(ae, {
          key: 3,
          variant: "primary",
          onClick: G
        }, {
          default: n(() => [...$[27] || ($[27] = [
            f(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : u("", !0),
        S.value === "review" ? (o(), b(ae, {
          key: 4,
          variant: "primary",
          disabled: c.value,
          loading: c.value,
          onClick: Ce
        }, {
          default: n(() => [...$[28] || ($[28] = [
            f(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Kr = /* @__PURE__ */ q(jr, [["__scopeId", "data-v-c12ca3e4"]]), qr = { class: "search-input-wrapper" }, Xr = ["value", "placeholder"], Yr = /* @__PURE__ */ K({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: i }) {
    const s = t, l = i, g = x(null);
    let h;
    function v(c) {
      const p = c.target.value;
      s.debounce > 0 ? (clearTimeout(h), h = window.setTimeout(() => {
        l("update:modelValue", p);
      }, s.debounce)) : l("update:modelValue", p);
    }
    function d() {
      var c;
      l("update:modelValue", ""), l("clear"), (c = g.value) == null || c.focus();
    }
    return he(() => {
      s.autoFocus && g.value && g.value.focus();
    }), (c, p) => (o(), a("div", qr, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: Te(d, ["escape"])
      }, null, 40, Xr),
      t.clearable && t.modelValue ? (o(), a("button", {
        key: 0,
        class: "clear-button",
        onClick: d,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), Zr = /* @__PURE__ */ q(Yr, [["__scopeId", "data-v-266f857a"]]), Jr = { class: "search-bar" }, Qr = /* @__PURE__ */ K({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (i, s) => (o(), a("div", Jr, [
      m(Zr, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (l) => i.$emit("update:modelValue", l)),
        onClear: s[1] || (s[1] = (l) => i.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Ke = /* @__PURE__ */ q(Qr, [["__scopeId", "data-v-3d51bbfd"]]), ec = { class: "section-group" }, tc = {
  key: 0,
  class: "section-content"
}, oc = /* @__PURE__ */ K({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: i }) {
    const s = t, l = i, g = x(s.initiallyExpanded);
    function h() {
      s.collapsible && (g.value = !g.value, l("toggle", g.value));
    }
    return (v, d) => (o(), a("section", ec, [
      m($e, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: h
      }, {
        default: n(() => [
          f(r(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), a("div", tc, [
        ne(v.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), ve = /* @__PURE__ */ q(oc, [["__scopeId", "data-v-c48e33ed"]]), sc = { class: "item-header" }, ac = {
  key: 0,
  class: "item-icon"
}, nc = { class: "item-info" }, lc = {
  key: 0,
  class: "item-title"
}, ic = {
  key: 1,
  class: "item-subtitle"
}, rc = {
  key: 0,
  class: "item-details"
}, cc = {
  key: 1,
  class: "item-actions"
}, dc = /* @__PURE__ */ K({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: i }) {
    const s = t, l = D(() => s.status ? `status-${s.status}` : "");
    return (g, h) => (o(), a("div", {
      class: J(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: h[0] || (h[0] = (v) => t.clickable && g.$emit("click"))
    }, [
      e("div", sc, [
        g.$slots.icon ? (o(), a("span", ac, [
          ne(g.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        e("div", nc, [
          g.$slots.title ? (o(), a("div", lc, [
            ne(g.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          g.$slots.subtitle ? (o(), a("div", ic, [
            ne(g.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      g.$slots.details ? (o(), a("div", rc, [
        ne(g.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      g.$slots.actions ? (o(), a("div", cc, [
        ne(g.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), ge = /* @__PURE__ */ q(dc, [["__scopeId", "data-v-cc435e0e"]]), uc = { class: "loading-state" }, mc = { class: "loading-message" }, vc = /* @__PURE__ */ K({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (i, s) => (o(), a("div", uc, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", mc, r(t.message), 1)
    ]));
  }
}), De = /* @__PURE__ */ q(vc, [["__scopeId", "data-v-ad8436c9"]]), fc = { class: "error-state" }, gc = { class: "error-message" }, hc = /* @__PURE__ */ K({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (i, s) => (o(), a("div", fc, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", gc, r(t.message), 1),
      t.retry ? (o(), b(W, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => i.$emit("retry"))
      }, {
        default: n(() => [...s[1] || (s[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ q(hc, [["__scopeId", "data-v-5397be48"]]), pc = /* @__PURE__ */ K({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: i }) {
    const s = i, { getWorkflows: l } = ke(), g = x([]), h = x(!1), v = x(null), d = x(""), c = x(!0), p = x(!1), S = x(!1), k = x(!1), y = x(null), w = D(
      () => g.value.filter((O) => O.status === "broken")
    ), E = D(
      () => g.value.filter((O) => O.status === "new")
    ), C = D(
      () => g.value.filter((O) => O.status === "modified")
    ), z = D(
      () => g.value.filter((O) => O.status === "synced")
    ), U = D(() => {
      if (!d.value.trim()) return g.value;
      const O = d.value.toLowerCase();
      return g.value.filter((L) => L.name.toLowerCase().includes(O));
    }), Z = D(
      () => w.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = D(
      () => E.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), _ = D(
      () => C.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = D(
      () => z.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = D(
      () => p.value ? B.value : B.value.slice(0, 5)
    );
    async function V() {
      h.value = !0, v.value = null;
      try {
        g.value = await l();
      } catch (O) {
        v.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    function M(O) {
      y.value = O, S.value = !0;
    }
    function R(O) {
      y.value = O, k.value = !0;
    }
    function T() {
      alert("Bulk resolution not yet implemented");
    }
    function G() {
      s("refresh");
    }
    return he(V), (O, L) => (o(), a(H, null, [
      m(we, null, {
        header: n(() => [
          m(be, { title: "WORKFLOWS" }, {
            actions: n(() => [
              w.value.length > 0 ? (o(), b(W, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: n(() => [...L[7] || (L[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : u("", !0)
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          m(Ke, {
            modelValue: d.value,
            "onUpdate:modelValue": L[0] || (L[0] = (X) => d.value = X),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          h.value ? (o(), b(De, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), b(Oe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            Z.value.length ? (o(), b(ve, {
              key: 0,
              title: "BROKEN",
              count: Z.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(Z.value, (X) => (o(), b(ge, {
                  key: X.name,
                  status: "broken"
                }, {
                  icon: n(() => [...L[8] || (L[8] = [
                    f("⚠", -1)
                  ])]),
                  title: n(() => [
                    f(r(X.name), 1)
                  ]),
                  subtitle: n(() => [
                    f(" Missing: " + r(X.missing_nodes) + " nodes, " + r(X.missing_models) + " models ", 1)
                  ]),
                  actions: n(() => [
                    m(W, {
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => R(X.name)
                    }, {
                      default: n(() => [...L[9] || (L[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => M(X.name)
                    }, {
                      default: n(() => [...L[10] || (L[10] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            A.value.length ? (o(), b(ve, {
              key: 1,
              title: "NEW",
              count: A.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(A.value, (X) => (o(), b(ge, {
                  key: X.name,
                  status: "new"
                }, {
                  icon: n(() => [...L[11] || (L[11] = [
                    f("●", -1)
                  ])]),
                  title: n(() => [
                    f(r(X.name), 1)
                  ]),
                  subtitle: n(() => [...L[12] || (L[12] = [
                    f("New", -1)
                  ])]),
                  actions: n(() => [
                    m(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => M(X.name)
                    }, {
                      default: n(() => [...L[13] || (L[13] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            _.value.length ? (o(), b(ve, {
              key: 2,
              title: "MODIFIED",
              count: _.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(_.value, (X) => (o(), b(ge, {
                  key: X.name,
                  status: "modified"
                }, {
                  icon: n(() => [...L[14] || (L[14] = [
                    f("⚡", -1)
                  ])]),
                  title: n(() => [
                    f(r(X.name), 1)
                  ]),
                  subtitle: n(() => [...L[15] || (L[15] = [
                    f("Modified", -1)
                  ])]),
                  actions: n(() => [
                    m(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => M(X.name)
                    }, {
                      default: n(() => [...L[16] || (L[16] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            B.value.length ? (o(), b(ve, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": c.value,
              onToggle: L[2] || (L[2] = (X) => c.value = X)
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(N.value, (X) => (o(), b(ge, {
                  key: X.name,
                  status: "synced"
                }, {
                  icon: n(() => [...L[17] || (L[17] = [
                    f("✓", -1)
                  ])]),
                  title: n(() => [
                    f(r(X.name), 1)
                  ]),
                  subtitle: n(() => [...L[18] || (L[18] = [
                    f("Synced", -1)
                  ])]),
                  actions: n(() => [
                    m(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => M(X.name)
                    }, {
                      default: n(() => [...L[19] || (L[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !p.value && B.value.length > 5 ? (o(), b(W, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (X) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: n(() => [
                    f(" View all " + r(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : u("", !0),
            U.value.length ? u("", !0) : (o(), b(Me, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      S.value && y.value ? (o(), b(Xn, {
        key: 0,
        "workflow-name": y.value,
        onClose: L[3] || (L[3] = (X) => S.value = !1),
        onResolve: L[4] || (L[4] = (X) => R(y.value))
      }, null, 8, ["workflow-name"])) : u("", !0),
      k.value && y.value ? (o(), b(Kr, {
        key: 1,
        "workflow-name": y.value,
        onClose: L[5] || (L[5] = (X) => k.value = !1),
        onInstall: G,
        onRefresh: L[6] || (L[6] = (X) => s("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ], 64));
  }
}), yc = /* @__PURE__ */ q(pc, [["__scopeId", "data-v-ee63730e"]]), wc = /* @__PURE__ */ K({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (i, s) => (o(), a("div", {
      class: J(["summary-bar", t.variant])
    }, [
      ne(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ q(wc, [["__scopeId", "data-v-ccb7816e"]]), bc = /* @__PURE__ */ K({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: i }) {
    const s = i, { getEnvironmentModels: l, getStatus: g } = ke(), h = x([]), v = x([]), d = x("production"), c = x(!1), p = x(null), S = x(""), k = x(!1);
    function y() {
      k.value = !1, s("navigate", "model-index");
    }
    const w = D(
      () => h.value.reduce((M, R) => M + (R.size || 0), 0)
    ), E = D(() => {
      if (!S.value.trim()) return h.value;
      const M = S.value.toLowerCase();
      return h.value.filter((R) => R.filename.toLowerCase().includes(M));
    }), C = D(() => {
      if (!S.value.trim()) return v.value;
      const M = S.value.toLowerCase();
      return v.value.filter((R) => R.filename.toLowerCase().includes(M));
    }), z = D(
      () => E.value.filter((M) => M.type === "checkpoints")
    ), U = D(
      () => E.value.filter((M) => M.type === "loras")
    ), Z = D(
      () => E.value.filter((M) => M.type !== "checkpoints" && M.type !== "loras")
    );
    function A(M) {
      if (!M) return "Unknown";
      const R = M / (1024 * 1024);
      return R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB`;
    }
    function _(M) {
      s("navigate", "model-index");
    }
    function B(M) {
      s("navigate", "model-index");
    }
    function N(M) {
      alert(`Download functionality not yet implemented for ${M}`);
    }
    async function V() {
      c.value = !0, p.value = null;
      try {
        const M = await l();
        h.value = M, v.value = [];
        const R = await g();
        d.value = R.environment || "production";
      } catch (M) {
        p.value = M instanceof Error ? M.message : "Failed to load models";
      } finally {
        c.value = !1;
      }
    }
    return he(V), (M, R) => (o(), a(H, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (T) => k.value = !0)
          })
        ]),
        search: n(() => [
          m(Ke, {
            modelValue: S.value,
            "onUpdate:modelValue": R[1] || (R[1] = (T) => S.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          c.value ? (o(), b(De, {
            key: 0,
            message: "Loading environment models..."
          })) : p.value ? (o(), b(Oe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            h.value.length ? (o(), b(qe, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                f(" Total: " + r(h.value.length) + " models • " + r(A(w.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            z.value.length ? (o(), b(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: z.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(z.value, (T) => (o(), b(ge, {
                  key: T.hash || T.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...R[3] || (R[3] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(r(T.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(r(A(T.size)), 1)
                  ]),
                  details: n(() => [
                    m(oe, {
                      label: "Used by:",
                      value: (T.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    m(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (G) => _(T.hash)
                    }, {
                      default: n(() => [...R[4] || (R[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            U.value.length ? (o(), b(ve, {
              key: 2,
              title: "LORAS",
              count: U.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(U.value, (T) => (o(), b(ge, {
                  key: T.hash || T.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...R[5] || (R[5] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(r(T.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(r(A(T.size)), 1)
                  ]),
                  details: n(() => [
                    m(oe, {
                      label: "Used by:",
                      value: (T.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    m(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (G) => _(T.hash)
                    }, {
                      default: n(() => [...R[6] || (R[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            Z.value.length ? (o(), b(ve, {
              key: 3,
              title: "OTHER",
              count: Z.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(Z.value, (T) => (o(), b(ge, {
                  key: T.hash || T.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...R[7] || (R[7] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(r(T.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(r(A(T.size)), 1)
                  ]),
                  details: n(() => [
                    m(oe, {
                      label: "Type:",
                      value: T.type
                    }, null, 8, ["value"]),
                    m(oe, {
                      label: "Used by:",
                      value: (T.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    m(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (G) => _(T.hash)
                    }, {
                      default: n(() => [...R[8] || (R[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            C.value.length ? (o(), b(ve, {
              key: 4,
              title: "MISSING",
              count: C.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(C.value, (T) => (o(), b(ge, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: n(() => [...R[9] || (R[9] = [
                    f("⚠", -1)
                  ])]),
                  title: n(() => [
                    f(r(T.filename), 1)
                  ]),
                  subtitle: n(() => [...R[10] || (R[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: n(() => {
                    var G;
                    return [
                      m(oe, {
                        label: "Required by:",
                        value: ((G = T.workflow_names) == null ? void 0 : G.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: n(() => [
                    m(W, {
                      variant: "primary",
                      size: "sm",
                      onClick: (G) => N(T.filename)
                    }, {
                      default: n(() => [...R[11] || (R[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (G) => B(T.filename)
                    }, {
                      default: n(() => [...R[12] || (R[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !E.value.length && !C.value.length ? (o(), b(Me, {
              key: 5,
              icon: "📭",
              message: S.value ? `No models match '${S.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(Be, {
        show: k.value,
        title: "About Environment Models",
        onClose: R[2] || (R[2] = (T) => k.value = !1)
      }, {
        content: n(() => [
          e("p", null, [
            R[13] || (R[13] = f(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + r(d.value) + '"', 1),
            R[14] || (R[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: n(() => [
          m(W, {
            variant: "primary",
            onClick: y
          }, {
            default: n(() => [...R[15] || (R[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kc = /* @__PURE__ */ q(bc, [["__scopeId", "data-v-72675609"]]), _c = /* @__PURE__ */ K({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: i } = ke(), s = x([]), l = x(!1), g = x(null), h = x(""), v = x(!1), d = D(
      () => s.value.reduce((N, V) => N + (V.size_mb || V.size || 0), 0)
    ), c = D(() => {
      const N = /* @__PURE__ */ new Set();
      return s.value.forEach((V) => {
        V.used_in_environments && V.used_in_environments.length > 0 && V.used_in_environments.forEach((M) => N.add(M.env_name));
      }), N.size;
    }), p = D(() => {
      if (!h.value.trim()) return s.value;
      const N = h.value.toLowerCase();
      return s.value.filter((V) => {
        const M = V, R = V.sha256 || M.sha256_hash || "";
        return V.filename.toLowerCase().includes(N) || R.toLowerCase().includes(N);
      });
    }), S = D(
      () => p.value.filter((N) => N.type === "checkpoints")
    ), k = D(
      () => p.value.filter((N) => N.type === "loras")
    ), y = D(
      () => p.value.filter((N) => N.type !== "checkpoints" && N.type !== "loras")
    );
    function w(N) {
      return N ? N >= 1024 ? `${(N / 1024).toFixed(1)} GB` : `${N.toFixed(0)} MB` : "Unknown";
    }
    function E(N) {
      const V = N, M = N.used_in_workflows || V.used_by || [];
      return !M || M.length === 0 ? "Not used" : `${M.length} workflow(s)`;
    }
    function C(N) {
      navigator.clipboard.writeText(N), alert("Hash copied to clipboard");
    }
    function z(N) {
      prompt("Enter model source URL:", N.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function U(N) {
      const V = N, M = N.used_in_workflows || V.used_by || [], R = M && M.length > 0 ? `

⚠ WARNING: This model is used by ${M.length} workflow(s):
${M.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${N.filename}?${R}

This will free ${w(V.size_mb || N.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function Z() {
      alert("Scan for models not yet implemented");
    }
    function A() {
      alert("Change directory not yet implemented");
    }
    function _() {
      alert("Download new model not yet implemented");
    }
    async function B() {
      l.value = !0, g.value = null;
      try {
        s.value = await i(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", S.value), console.log("Filtered loras:", k.value), console.log("Filtered other:", y.value);
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        l.value = !1;
      }
    }
    return he(B), (N, V) => (o(), a(H, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: V[0] || (V[0] = (M) => v.value = !0)
          }, {
            actions: n(() => [
              m(W, {
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: n(() => [...V[3] || (V[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              m(W, {
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: n(() => [...V[4] || (V[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              m(W, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: n(() => [...V[5] || (V[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  f(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          m(Ke, {
            modelValue: h.value,
            "onUpdate:modelValue": V[1] || (V[1] = (M) => h.value = M),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          l.value ? (o(), b(De, {
            key: 0,
            message: "Loading workspace models..."
          })) : g.value ? (o(), b(Oe, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            s.value.length ? (o(), b(qe, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                f(" Total: " + r(s.value.length) + " models • " + r(w(d.value)) + " • Used in " + r(c.value) + " environments ", 1)
              ]),
              _: 1
            })) : u("", !0),
            S.value.length ? (o(), b(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: S.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(S.value, (M) => (o(), b(ge, {
                  key: M.sha256 || M.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...V[6] || (V[6] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(r(M.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(r(w(M.size_mb || M.size)), 1)
                  ]),
                  details: n(() => {
                    var R, T;
                    return [
                      M.sha256 || M.sha256_hash ? (o(), b(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (M.sha256 || M.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : u("", !0),
                      m(oe, {
                        label: "Used in:",
                        value: E(M)
                      }, null, 8, ["value"]),
                      M.source_url || (R = M.sources) != null && R[0] ? (o(), b(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: M.source_url || ((T = M.sources) == null ? void 0 : T[0])
                      }, null, 8, ["value"])) : (o(), b(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...V[7] || (V[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    m(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => z(M)
                    }, {
                      default: n(() => [...V[8] || (V[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    M.sha256 || M.sha256_hash ? (o(), b(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => C(M.sha256 || M.sha256_hash)
                    }, {
                      default: n(() => [...V[9] || (V[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    m(W, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => U(M)
                    }, {
                      default: n(() => [...V[10] || (V[10] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            k.value.length ? (o(), b(ve, {
              key: 2,
              title: "LORAS",
              count: k.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(k.value, (M) => (o(), b(ge, {
                  key: M.sha256 || M.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...V[11] || (V[11] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(r(M.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(r(w(M.size_mb || M.size)), 1)
                  ]),
                  details: n(() => {
                    var R, T;
                    return [
                      M.sha256 || M.sha256_hash ? (o(), b(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (M.sha256 || M.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : u("", !0),
                      m(oe, {
                        label: "Used in:",
                        value: E(M)
                      }, null, 8, ["value"]),
                      M.source_url || (R = M.sources) != null && R[0] ? (o(), b(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: M.source_url || ((T = M.sources) == null ? void 0 : T[0])
                      }, null, 8, ["value"])) : (o(), b(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...V[12] || (V[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    m(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => z(M)
                    }, {
                      default: n(() => [...V[13] || (V[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    M.sha256 || M.sha256_hash ? (o(), b(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => C(M.sha256 || M.sha256_hash)
                    }, {
                      default: n(() => [...V[14] || (V[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    m(W, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => U(M)
                    }, {
                      default: n(() => [...V[15] || (V[15] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            y.value.length ? (o(), b(ve, {
              key: 3,
              title: "OTHER",
              count: y.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(y.value, (M) => (o(), b(ge, {
                  key: M.sha256 || M.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...V[16] || (V[16] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(r(M.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(r(w(M.size_mb || M.size)), 1)
                  ]),
                  details: n(() => [
                    m(oe, {
                      label: "Type:",
                      value: M.type
                    }, null, 8, ["value"]),
                    M.sha256 || M.sha256_hash ? (o(), b(oe, {
                      key: 0,
                      label: "SHA256:",
                      value: (M.sha256 || M.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : u("", !0),
                    m(oe, {
                      label: "Used in:",
                      value: E(M)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    m(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => z(M)
                    }, {
                      default: n(() => [...V[17] || (V[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    M.sha256 || M.sha256_hash ? (o(), b(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => C(M.sha256 || M.sha256_hash)
                    }, {
                      default: n(() => [...V[18] || (V[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    m(W, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => U(M)
                    }, {
                      default: n(() => [...V[19] || (V[19] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            p.value.length ? u("", !0) : (o(), b(Me, {
              key: 4,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      m(Be, {
        show: v.value,
        title: "About Workspace Model Index",
        onClose: V[2] || (V[2] = (M) => v.value = !1)
      }, {
        content: n(() => [...V[20] || (V[20] = [
          e("p", null, [
            f(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            f(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), $c = /* @__PURE__ */ q(_c, [["__scopeId", "data-v-5a24af01"]]), Cc = { key: 0 }, xc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Sc = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Ic = /* @__PURE__ */ K({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: i, installNode: s, updateNode: l, uninstallNode: g } = ke(), h = x({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), v = x(!1), d = x(null), c = x(""), p = x(!1), S = D(() => {
      if (!c.value.trim()) return h.value.nodes;
      const _ = c.value.toLowerCase();
      return h.value.nodes.filter(
        (B) => {
          var N, V;
          return B.name.toLowerCase().includes(_) || ((N = B.description) == null ? void 0 : N.toLowerCase().includes(_)) || ((V = B.repository) == null ? void 0 : V.toLowerCase().includes(_));
        }
      );
    }), k = D(
      () => S.value.filter((_) => _.installed)
    ), y = D(
      () => S.value.filter((_) => !_.installed)
    );
    function w(_) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[_] || _;
    }
    function E(_) {
      return !_.used_in_workflows || _.used_in_workflows.length === 0 ? "Not used in any workflows" : _.used_in_workflows.length === 1 ? _.used_in_workflows[0] : `${_.used_in_workflows.length} workflows`;
    }
    function C(_) {
      window.open(_, "_blank");
    }
    async function z(_) {
      if (confirm(`Install node "${_}"?

This will download and install the node from its repository.`))
        try {
          v.value = !0;
          const B = await s(_);
          B.status === "success" ? (alert(`Node "${_}" installed successfully!`), await A()) : alert(`Failed to install node: ${B.message || "Unknown error"}`);
        } catch (B) {
          alert(`Error installing node: ${B instanceof Error ? B.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function U(_) {
      if (confirm(`Check for updates for "${_}"?`))
        try {
          v.value = !0;
          const B = await l(_);
          B.status === "success" ? (alert(`Node "${_}" is up to date or has been updated!`), await A()) : alert(`Update check failed: ${B.message || "Unknown error"}`);
        } catch (B) {
          alert(`Error checking for updates: ${B instanceof Error ? B.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function Z(_) {
      if (confirm(`Uninstall node "${_}"?

This will remove the node from this environment.`))
        try {
          v.value = !0;
          const B = await g(_);
          B.status === "success" ? (alert(`Node "${_}" uninstalled successfully!`), await A()) : alert(`Failed to uninstall node: ${B.message || "Unknown error"}`);
        } catch (B) {
          alert(`Error uninstalling node: ${B instanceof Error ? B.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function A() {
      v.value = !0, d.value = null;
      try {
        h.value = await i();
      } catch (_) {
        d.value = _ instanceof Error ? _.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return he(A), (_, B) => (o(), a(H, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (N) => p.value = !0)
          })
        ]),
        search: n(() => [
          m(Ke, {
            modelValue: c.value,
            "onUpdate:modelValue": B[1] || (B[1] = (N) => c.value = N),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          v.value ? (o(), b(De, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : d.value ? (o(), b(Oe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            h.value.total_count ? (o(), b(qe, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                f(" Total: " + r(h.value.total_count) + " nodes • " + r(h.value.installed_count) + " installed • " + r(h.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : u("", !0),
            k.value.length ? (o(), b(ve, {
              key: 1,
              title: "INSTALLED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(k.value, (N) => (o(), b(ge, {
                  key: N.name,
                  status: "synced"
                }, {
                  icon: n(() => [...B[4] || (B[4] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(r(N.name), 1)
                  ]),
                  subtitle: n(() => [
                    N.version ? (o(), a("span", Cc, "v" + r(N.version), 1)) : (o(), a("span", xc, "version unknown")),
                    N.source ? (o(), a("span", Sc, " • " + r(w(N.source)), 1)) : u("", !0)
                  ]),
                  details: n(() => [
                    N.description ? (o(), b(oe, {
                      key: 0,
                      label: "Description:",
                      value: N.description
                    }, null, 8, ["value"])) : u("", !0),
                    N.repository ? (o(), b(oe, {
                      key: 1,
                      label: "Repository:",
                      value: N.repository
                    }, null, 8, ["value"])) : u("", !0),
                    m(oe, {
                      label: "Used by:",
                      value: E(N)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    N.repository ? (o(), b(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => C(N.repository)
                    }, {
                      default: n(() => [...B[5] || (B[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    N.source === "registry" ? (o(), b(W, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => U(N.name)
                    }, {
                      default: n(() => [...B[6] || (B[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    N.source !== "unknown" ? (o(), b(W, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (V) => Z(N.name)
                    }, {
                      default: n(() => [...B[7] || (B[7] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            y.value.length ? (o(), b(ve, {
              key: 2,
              title: "MISSING",
              count: y.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(y.value, (N) => (o(), b(ge, {
                  key: N.name,
                  status: "missing"
                }, {
                  icon: n(() => [...B[8] || (B[8] = [
                    f("⚠", -1)
                  ])]),
                  title: n(() => [
                    f(r(N.name), 1)
                  ]),
                  subtitle: n(() => [...B[9] || (B[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: n(() => [
                    N.description ? (o(), b(oe, {
                      key: 0,
                      label: "Description:",
                      value: N.description
                    }, null, 8, ["value"])) : u("", !0),
                    N.repository ? (o(), b(oe, {
                      key: 1,
                      label: "Repository:",
                      value: N.repository
                    }, null, 8, ["value"])) : u("", !0),
                    m(oe, {
                      label: "Required by:",
                      value: E(N)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    N.download_url ? (o(), b(W, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => z(N.name)
                    }, {
                      default: n(() => [...B[10] || (B[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    N.repository ? (o(), b(W, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => C(N.repository)
                    }, {
                      default: n(() => [...B[11] || (B[11] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !k.value.length && !y.value.length ? (o(), b(Me, {
              key: 3,
              icon: "📭",
              message: c.value ? `No nodes match '${c.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(Be, {
        show: p.value,
        title: "About Git-Tracked Nodes",
        onClose: B[3] || (B[3] = (N) => p.value = !1)
      }, {
        content: n(() => [...B[12] || (B[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            f(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            f(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: n(() => [
          m(W, {
            variant: "primary",
            onClick: B[2] || (B[2] = (N) => p.value = !1)
          }, {
            default: n(() => [...B[13] || (B[13] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ec = /* @__PURE__ */ q(Ic, [["__scopeId", "data-v-c480e2c1"]]), zc = { class: "remote-url-display" }, Mc = ["title"], Lc = ["title"], Nc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Rc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Uc = /* @__PURE__ */ K({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const i = t, s = x(!1), l = D(() => {
      if (i.url.length <= i.maxLength)
        return i.url;
      const h = i.url.slice(0, Math.floor(i.maxLength * 0.6)), v = i.url.slice(-Math.floor(i.maxLength * 0.3));
      return `${h}...${v}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(i.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy URL:", h);
      }
    }
    return (h, v) => (o(), a("div", zc, [
      e("span", {
        class: "url-text",
        title: t.url
      }, r(l.value), 9, Mc),
      e("button", {
        class: J(["copy-btn", { copied: s.value }]),
        onClick: g,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), a("svg", Rc, [...v[1] || (v[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), a("svg", Nc, [...v[0] || (v[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Lc)
    ]));
  }
}), xt = /* @__PURE__ */ q(Uc, [["__scopeId", "data-v-7768a58d"]]), Tc = { class: "remote-title" }, Bc = {
  key: 0,
  class: "default-badge"
}, Dc = {
  key: 1,
  class: "sync-badge"
}, Oc = {
  key: 0,
  class: "ahead"
}, Vc = {
  key: 1,
  class: "behind"
}, Ac = {
  key: 0,
  class: "tracking-info"
}, Fc = /* @__PURE__ */ K({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: i }) {
    const s = t, l = D(() => s.fetchingRemote === s.remote.name), g = D(() => s.remote.is_default), h = D(() => !!s.trackingBranch);
    function v(d) {
      const c = new Date(d), S = (/* @__PURE__ */ new Date()).getTime() - c.getTime(), k = Math.floor(S / 6e4);
      if (k < 1) return "Just now";
      if (k < 60) return `${k}m ago`;
      const y = Math.floor(k / 60);
      if (y < 24) return `${y}h ago`;
      const w = Math.floor(y / 24);
      return w < 7 ? `${w}d ago` : c.toLocaleDateString();
    }
    return (d, c) => (o(), b(ge, {
      status: g.value ? "synced" : void 0
    }, {
      icon: n(() => [
        f(r(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: n(() => [
        e("div", Tc, [
          e("span", null, r(t.remote.name), 1),
          g.value ? (o(), a("span", Bc, "DEFAULT")) : u("", !0),
          t.syncStatus ? (o(), a("span", Dc, [
            t.syncStatus.ahead > 0 ? (o(), a("span", Oc, "↑" + r(t.syncStatus.ahead), 1)) : u("", !0),
            t.syncStatus.behind > 0 ? (o(), a("span", Vc, "↓" + r(t.syncStatus.behind), 1)) : u("", !0)
          ])) : u("", !0)
        ])
      ]),
      subtitle: n(() => [
        h.value ? (o(), a("span", Ac, " Tracking: " + r(t.trackingBranch), 1)) : u("", !0)
      ]),
      details: n(() => {
        var p;
        return [
          m(oe, { label: "Fetch:" }, {
            default: n(() => [
              m(xt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), b(oe, {
            key: 0,
            label: "Push:"
          }, {
            default: n(() => [
              m(xt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : u("", !0),
          (p = t.syncStatus) != null && p.last_fetch ? (o(), b(oe, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: n(() => [
              e("span", null, r(v(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : u("", !0)
        ];
      }),
      actions: n(() => [
        m(W, {
          variant: "primary",
          size: "xs",
          loading: l.value,
          onClick: c[0] || (c[0] = (p) => d.$emit("fetch", t.remote.name))
        }, {
          default: n(() => [...c[3] || (c[3] = [
            f(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        m(W, {
          variant: "secondary",
          size: "xs",
          onClick: c[1] || (c[1] = (p) => d.$emit("edit", t.remote.name))
        }, {
          default: n(() => [...c[4] || (c[4] = [
            f(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? u("", !0) : (o(), b(W, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: c[2] || (c[2] = (p) => d.$emit("remove", t.remote.name))
        }, {
          default: n(() => [...c[5] || (c[5] = [
            f(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Wc = /* @__PURE__ */ q(Fc, [["__scopeId", "data-v-17362e45"]]), Pc = ["for"], Hc = {
  key: 0,
  class: "base-form-field-required"
}, Gc = { class: "base-form-field-input" }, jc = {
  key: 1,
  class: "base-form-field-error"
}, Kc = {
  key: 2,
  class: "base-form-field-hint"
}, qc = /* @__PURE__ */ K({
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
    const i = t, s = D(() => i.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (l, g) => (o(), a("div", {
      class: J(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), a("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        f(r(t.label) + " ", 1),
        t.required ? (o(), a("span", Hc, "*")) : u("", !0)
      ], 8, Pc)) : u("", !0),
      e("div", Gc, [
        ne(l.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), a("span", jc, r(t.error), 1)) : t.hint ? (o(), a("span", Kc, r(t.hint), 1)) : u("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ q(qc, [["__scopeId", "data-v-9a1cf296"]]), Xc = { class: "remote-form" }, Yc = { class: "form-header" }, Zc = { class: "form-body" }, Jc = {
  key: 0,
  class: "form-error"
}, Qc = { class: "form-actions" }, ed = /* @__PURE__ */ K({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: i }) {
    const s = t, l = i, g = x({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), h = x(!1), v = x(null);
    Et(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      g.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const d = D(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function c() {
      if (!(!d.value || h.value)) {
        v.value = null, h.value = !0;
        try {
          l("submit", g.value);
        } catch (p) {
          v.value = p instanceof Error ? p.message : "Failed to submit form";
        } finally {
          h.value = !1;
        }
      }
    }
    return (p, S) => (o(), a("div", Xc, [
      e("div", Yc, [
        m($e, null, {
          default: n(() => [
            f(r(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Zc, [
        m(vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: n(() => [
            m(Ae, {
              modelValue: g.value.name,
              "onUpdate:modelValue": S[0] || (S[0] = (k) => g.value.name = k),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        m(vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: n(() => [
            m(Ae, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": S[1] || (S[1] = (k) => g.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m(vt, { label: "Push URL (optional)" }, {
          default: n(() => [
            m(Ae, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": S[2] || (S[2] = (k) => g.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (o(), a("div", Jc, r(v.value), 1)) : u("", !0)
      ]),
      e("div", Qc, [
        m(W, {
          variant: "primary",
          size: "md",
          disabled: !d.value,
          loading: h.value,
          onClick: c
        }, {
          default: n(() => [
            f(r(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        m(W, {
          variant: "ghost",
          size: "md",
          onClick: S[3] || (S[3] = (k) => p.$emit("cancel"))
        }, {
          default: n(() => [...S[4] || (S[4] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), td = /* @__PURE__ */ q(ed, [["__scopeId", "data-v-56021b18"]]), od = { key: 0 }, sd = /* @__PURE__ */ K({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: i,
      addRemote: s,
      removeRemote: l,
      updateRemoteUrl: g,
      fetchRemote: h,
      getRemoteSyncStatus: v
    } = ke(), d = x([]), c = x(null), p = x({}), S = x(!1), k = x(null), y = x(""), w = x(!1), E = x(null), C = x(!1), z = x("add"), U = x({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), Z = D(() => {
      if (!y.value.trim()) return d.value;
      const O = y.value.toLowerCase();
      return d.value.filter(
        (L) => L.name.toLowerCase().includes(O) || L.fetch_url.toLowerCase().includes(O) || L.push_url.toLowerCase().includes(O)
      );
    });
    function A(O) {
      var L;
      return ((L = c.value) == null ? void 0 : L.remote) === O;
    }
    async function _() {
      S.value = !0, k.value = null;
      try {
        const O = await i();
        d.value = O.remotes, c.value = O.current_branch_tracking || null, await Promise.all(
          O.remotes.map(async (L) => {
            const X = await v(L.name);
            X && (p.value[L.name] = X);
          })
        );
      } catch (O) {
        k.value = O instanceof Error ? O.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function B() {
      z.value = "add", U.value = { name: "", fetchUrl: "", pushUrl: "" }, C.value = !0;
    }
    function N(O) {
      const L = d.value.find((X) => X.name === O);
      L && (z.value = "edit", U.value = {
        name: L.name,
        fetchUrl: L.fetch_url,
        pushUrl: L.push_url
      }, C.value = !0);
    }
    async function V(O) {
      try {
        z.value === "add" ? await s(O.name, O.fetchUrl) : await g(O.name, O.fetchUrl, O.pushUrl || void 0), C.value = !1, await _();
      } catch (L) {
        k.value = L instanceof Error ? L.message : "Operation failed";
      }
    }
    function M() {
      C.value = !1, U.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function R(O) {
      E.value = O;
      try {
        await h(O);
        const L = await v(O);
        L && (p.value[O] = L);
      } catch (L) {
        k.value = L instanceof Error ? L.message : "Fetch failed";
      } finally {
        E.value = null;
      }
    }
    async function T(O) {
      if (confirm(`Remove remote "${O}"?`))
        try {
          await l(O), await _();
        } catch (L) {
          k.value = L instanceof Error ? L.message : "Failed to remove remote";
        }
    }
    function G() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return he(_), (O, L) => (o(), a(H, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (X) => w.value = !0)
          }, {
            actions: n(() => [
              C.value ? u("", !0) : (o(), b(W, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: n(() => [...L[3] || (L[3] = [
                  f(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          C.value ? u("", !0) : (o(), b(Ke, {
            key: 0,
            modelValue: y.value,
            "onUpdate:modelValue": L[1] || (L[1] = (X) => y.value = X),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: n(() => [
          S.value ? (o(), b(De, {
            key: 0,
            message: "Loading remotes..."
          })) : k.value ? (o(), b(Oe, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            C.value ? (o(), b(td, {
              key: 0,
              mode: z.value,
              "remote-name": U.value.name,
              "fetch-url": U.value.fetchUrl,
              "push-url": U.value.pushUrl,
              onSubmit: V,
              onCancel: M
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : u("", !0),
            d.value.length && !C.value ? (o(), b(qe, {
              key: 1,
              variant: "compact"
            }, {
              default: n(() => [
                f(" Total: " + r(d.value.length) + " remote" + r(d.value.length !== 1 ? "s" : "") + " ", 1),
                c.value ? (o(), a("span", od, " • Tracking: " + r(c.value.remote) + "/" + r(c.value.branch), 1)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            Z.value.length && !C.value ? (o(), b(ve, {
              key: 2,
              title: "REMOTES",
              count: Z.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(Z.value, (X) => {
                  var j;
                  return o(), b(Wc, {
                    key: X.name,
                    remote: X,
                    "sync-status": p.value[X.name],
                    "tracking-branch": A(X.name) ? (j = c.value) == null ? void 0 : j.branch : void 0,
                    "fetching-remote": E.value,
                    onFetch: R,
                    onEdit: N,
                    onRemove: T
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !Z.value.length && !C.value ? (o(), b(Me, {
              key: 3,
              icon: "🌐",
              message: y.value ? `No remotes match '${y.value}'` : "No remotes configured."
            }, {
              actions: n(() => [
                m(W, {
                  variant: "primary",
                  onClick: B
                }, {
                  default: n(() => [...L[4] || (L[4] = [
                    f(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(Be, {
        show: w.value,
        title: "About Git Remotes",
        onClose: L[2] || (L[2] = (X) => w.value = !1)
      }, {
        content: n(() => [...L[5] || (L[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            f(" The "),
            e("strong", null, '"origin"'),
            f(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: n(() => [
          m(W, {
            variant: "link",
            onClick: G
          }, {
            default: n(() => [...L[6] || (L[6] = [
              f(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ad = /* @__PURE__ */ q(sd, [["__scopeId", "data-v-a75719bb"]]), nd = { class: "setting-info" }, ld = { class: "setting-label" }, id = {
  key: 0,
  class: "required-marker"
}, rd = {
  key: 0,
  class: "setting-description"
}, cd = { class: "setting-control" }, dd = /* @__PURE__ */ K({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (i, s) => (o(), a("div", {
      class: J(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", nd, [
        e("div", ld, [
          f(r(t.label) + " ", 1),
          t.required ? (o(), a("span", id, "*")) : u("", !0)
        ]),
        t.description ? (o(), a("div", rd, r(t.description), 1)) : u("", !0)
      ]),
      e("div", cd, [
        ne(i.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ q(dd, [["__scopeId", "data-v-cb5d236c"]]), ud = { class: "toggle" }, md = ["checked", "disabled"], vd = /* @__PURE__ */ K({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (i, s) => (o(), a("label", ud, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (l) => i.$emit("update:modelValue", l.target.checked)),
        class: "toggle-input"
      }, null, 40, md),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ge = /* @__PURE__ */ q(vd, [["__scopeId", "data-v-71c0f550"]]), fd = { class: "settings-section" }, gd = { class: "path-setting" }, hd = { class: "path-value" }, pd = { class: "path-setting" }, yd = { class: "path-value" }, wd = { class: "settings-section" }, bd = { class: "settings-section" }, kd = /* @__PURE__ */ K({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: i, updateConfig: s } = ke(), l = x(!1), g = x(null), h = x(null), v = x(null), d = x(null), c = x(""), p = x(""), S = x(!0), k = x(!0), y = D(() => d.value ? c.value !== (d.value.civitai_api_key || "") : !1);
    async function w() {
      l.value = !0, g.value = null;
      try {
        v.value = await i(), d.value = { ...v.value }, c.value = v.value.civitai_api_key || "", p.value = v.value.huggingface_token || "", S.value = v.value.auto_sync_models, k.value = v.value.confirm_destructive;
      } catch (z) {
        g.value = z instanceof Error ? z.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function E() {
      var z;
      h.value = null;
      try {
        const U = {};
        c.value !== (((z = d.value) == null ? void 0 : z.civitai_api_key) || "") && (U.civitai_api_key = c.value || null), await s(U), await w(), h.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          h.value = null;
        }, 3e3);
      } catch (U) {
        h.value = {
          type: "error",
          message: U instanceof Error ? U.message : "Failed to save settings"
        };
      }
    }
    function C() {
      d.value && (c.value = d.value.civitai_api_key || "", p.value = d.value.huggingface_token || "", S.value = d.value.auto_sync_models, k.value = d.value.confirm_destructive, h.value = null);
    }
    return he(w), (z, U) => (o(), b(we, null, {
      header: n(() => [
        m(be, { title: "WORKSPACE SETTINGS" }, {
          actions: n(() => [
            m(W, {
              variant: "primary",
              size: "sm",
              disabled: !y.value,
              onClick: E
            }, {
              default: n(() => [...U[4] || (U[4] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            y.value ? (o(), b(W, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: C
            }, {
              default: n(() => [...U[5] || (U[5] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : u("", !0)
          ]),
          _: 1
        })
      ]),
      content: n(() => [
        l.value ? (o(), b(De, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), b(Oe, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: w
        }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
          m(ve, { title: "WORKSPACE PATHS" }, {
            default: n(() => {
              var Z, A;
              return [
                e("div", fd, [
                  e("div", gd, [
                    U[6] || (U[6] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    U[7] || (U[7] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", hd, r(((Z = v.value) == null ? void 0 : Z.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", pd, [
                    U[8] || (U[8] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    U[9] || (U[9] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", yd, r(((A = v.value) == null ? void 0 : A.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          m(ve, { title: "API CREDENTIALS" }, {
            default: n(() => [
              e("div", wd, [
                m(Ve, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: n(() => [
                    m(tt, {
                      modelValue: c.value,
                      "onUpdate:modelValue": U[0] || (U[0] = (Z) => c.value = Z),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(Ve, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    m(tt, {
                      modelValue: p.value,
                      "onUpdate:modelValue": U[1] || (U[1] = (Z) => p.value = Z),
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
          m(ve, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: n(() => [
              e("div", bd, [
                m(Ve, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    m(Ge, {
                      modelValue: S.value,
                      "onUpdate:modelValue": U[2] || (U[2] = (Z) => S.value = Z),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(Ve, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    m(Ge, {
                      modelValue: k.value,
                      "onUpdate:modelValue": U[3] || (U[3] = (Z) => k.value = Z),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          h.value ? (o(), b(qe, {
            key: 0,
            variant: (h.value.type === "success", "compact")
          }, {
            default: n(() => [
              e("span", {
                style: ot({ color: h.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, r(h.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : u("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), _d = /* @__PURE__ */ q(kd, [["__scopeId", "data-v-8b092643"]]), $d = /* @__PURE__ */ K({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: i } = ke(), s = x([]), l = x(!1), g = x(null), h = x(!1), v = x(null), d = D(() => s.value.length === 0 ? [] : s.value.map((p) => ({
      text: `${p.timestamp} - ${p.name} - ${p.level} - ${p.func}:${p.line} - ${p.message}`,
      level: p.level
    })));
    async function c() {
      l.value = !0, g.value = null;
      try {
        s.value = await i(void 0, 500);
      } catch (p) {
        g.value = p instanceof Error ? p.message : "Failed to load workspace logs";
      } finally {
        l.value = !1, setTimeout(() => {
          var p;
          (p = v.value) != null && p.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return he(c), (p, S) => (o(), a(H, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (k) => h.value = !0)
          }, {
            actions: n(() => [
              m(W, {
                variant: "secondary",
                size: "sm",
                onClick: c,
                disabled: l.value
              }, {
                default: n(() => [
                  f(r(l.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: n(() => [
          l.value ? (o(), b(De, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), b(Oe, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            s.value.length === 0 ? (o(), b(Me, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), a("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (o(!0), a(H, null, Q(d.value, (k, y) => (o(), a("div", {
                key: y,
                class: J(`log-line log-level-${k.level.toLowerCase()}`)
              }, r(k.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(Be, {
        show: h.value,
        title: "About Workspace Logs",
        onClose: S[2] || (S[2] = (k) => h.value = !1)
      }, {
        content: n(() => [...S[3] || (S[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            f(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            f(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: n(() => [
          m(W, {
            variant: "primary",
            onClick: S[1] || (S[1] = (k) => h.value = !1)
          }, {
            default: n(() => [...S[4] || (S[4] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Cd = /* @__PURE__ */ q($d, [["__scopeId", "data-v-39f6a756"]]), xd = /* @__PURE__ */ K({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: i, getStatus: s } = ke(), l = x([]), g = x(!1), h = x(null), v = x(!1), d = x("production"), c = x(null), p = D(() => l.value.length === 0 ? [] : l.value.map((k) => ({
      text: `${k.timestamp} - ${k.name} - ${k.level} - ${k.func}:${k.line} - ${k.message}`,
      level: k.level
    })));
    async function S() {
      g.value = !0, h.value = null;
      try {
        l.value = await i(void 0, 500);
        try {
          const k = await s();
          d.value = k.environment || "production";
        } catch {
        }
      } catch (k) {
        h.value = k instanceof Error ? k.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var k;
          (k = c.value) != null && k.parentElement && (c.value.parentElement.scrollTop = c.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return he(S), (k, y) => (o(), a(H, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: y[0] || (y[0] = (w) => v.value = !0)
          }, {
            actions: n(() => [
              m(W, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: g.value
              }, {
                default: n(() => [
                  f(r(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: n(() => [
          g.value ? (o(), b(De, {
            key: 0,
            message: "Loading environment logs..."
          })) : h.value ? (o(), b(Oe, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            l.value.length === 0 ? (o(), b(Me, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), a("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: c,
              class: "log-output"
            }, [
              (o(!0), a(H, null, Q(p.value, (w, E) => (o(), a("div", {
                key: E,
                class: J(`log-line log-level-${w.level.toLowerCase()}`)
              }, r(w.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(Be, {
        show: v.value,
        title: "About Environment Logs",
        onClose: y[2] || (y[2] = (w) => v.value = !1)
      }, {
        content: n(() => [
          e("p", null, [
            y[3] || (y[3] = f(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, r(d.value), 1),
            y[4] || (y[4] = f(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          y[5] || (y[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            f(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            f(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1)),
          y[6] || (y[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: n(() => [
          m(W, {
            variant: "primary",
            onClick: y[1] || (y[1] = (w) => v.value = !1)
          }, {
            default: n(() => [...y[7] || (y[7] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Sd = /* @__PURE__ */ q(xd, [["__scopeId", "data-v-4f1e6f72"]]), Id = { class: "env-title" }, Ed = {
  key: 0,
  class: "current-badge"
}, zd = {
  key: 0,
  class: "branch-info"
}, Md = /* @__PURE__ */ K({
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
    return (i, s) => (o(), b(ge, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: n(() => [
        f(r(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: n(() => [
        e("div", Id, [
          e("span", null, r(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), a("span", Ed, "CURRENT")) : u("", !0)
        ])
      ]),
      subtitle: n(() => [
        t.currentBranch ? (o(), a("span", zd, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          f(" " + r(t.currentBranch), 1)
        ])) : u("", !0)
      ]),
      details: n(() => [
        m(oe, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        m(oe, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        m(oe, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), b(oe, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : u("", !0)
      ]),
      actions: n(() => [
        ne(i.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Ld = /* @__PURE__ */ q(Md, [["__scopeId", "data-v-5238e57c"]]), Nd = {
  key: 0,
  class: "create-form"
}, Rd = { class: "create-form__header" }, Ud = { class: "create-form__body" }, Td = { class: "create-form__actions" }, Bd = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Dd = /* @__PURE__ */ K({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: i }) {
    const s = i, { getEnvironments: l } = ke(), g = x([]), h = x(!1), v = x(null), d = x(""), c = x(!1), p = x(!1), S = x(""), k = D(
      () => g.value.find((A) => A.is_current)
    ), y = D(() => {
      if (!d.value.trim()) return g.value;
      const A = d.value.toLowerCase();
      return g.value.filter(
        (_) => {
          var B;
          return _.name.toLowerCase().includes(A) || ((B = _.current_branch) == null ? void 0 : B.toLowerCase().includes(A));
        }
      );
    });
    function w(A) {
      if (!A) return "";
      try {
        const _ = new Date(A), N = (/* @__PURE__ */ new Date()).getTime() - _.getTime(), V = Math.floor(N / 6e4), M = Math.floor(N / 36e5), R = Math.floor(N / 864e5);
        return V < 1 ? "just now" : V < 60 ? `${V} ${V === 1 ? "minute" : "minutes"} ago` : M < 24 ? `${M} ${M === 1 ? "hour" : "hours"} ago` : R < 30 ? `${R} ${R === 1 ? "day" : "days"} ago` : _.toLocaleDateString();
      } catch {
        return A;
      }
    }
    function E() {
      const A = S.value.trim();
      A && (s("create", A), S.value = "", p.value = !1);
    }
    function C() {
      S.value = "", p.value = !1;
    }
    function z(A) {
      s("viewDetails", A);
    }
    function U(A) {
      confirm(`Delete environment "${A}"?

This action cannot be undone.`) && s("delete", A);
    }
    async function Z() {
      h.value = !0, v.value = null;
      try {
        g.value = await l();
      } catch (A) {
        v.value = A instanceof Error ? A.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return he(Z), (A, _) => {
      const B = Jt("SectionGroup");
      return o(), a(H, null, [
        m(we, null, {
          header: n(() => [
            m(be, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: _[1] || (_[1] = (N) => c.value = !0)
            }, {
              actions: n(() => [
                m(W, {
                  variant: "ghost",
                  size: "sm",
                  onClick: _[0] || (_[0] = (N) => p.value = !0),
                  title: "Create new environment"
                }, {
                  default: n(() => [..._[7] || (_[7] = [
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
                m(W, {
                  variant: "ghost",
                  size: "sm",
                  onClick: Z,
                  title: "Refresh environments"
                }, {
                  default: n(() => [..._[8] || (_[8] = [
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
            m(Ke, {
              modelValue: d.value,
              "onUpdate:modelValue": _[2] || (_[2] = (N) => d.value = N),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: n(() => [
            h.value ? (o(), b(De, {
              key: 0,
              message: "Loading environments..."
            })) : v.value ? (o(), b(Oe, {
              key: 1,
              message: v.value,
              retry: !0,
              onRetry: Z
            }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
              p.value ? (o(), a("div", Nd, [
                e("div", Rd, [
                  _[10] || (_[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  m(W, {
                    variant: "ghost",
                    size: "xs",
                    onClick: C
                  }, {
                    default: n(() => [..._[9] || (_[9] = [
                      f(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", Ud, [
                  m(tt, {
                    modelValue: S.value,
                    "onUpdate:modelValue": _[3] || (_[3] = (N) => S.value = N),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Te(E, ["enter"]),
                      Te(C, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Td, [
                    m(W, {
                      variant: "primary",
                      size: "sm",
                      onClick: E,
                      disabled: !S.value.trim()
                    }, {
                      default: n(() => [..._[11] || (_[11] = [
                        f(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    m(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: n(() => [..._[12] || (_[12] = [
                        f(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : u("", !0),
              g.value.length ? (o(), b(qe, {
                key: 1,
                variant: "compact"
              }, {
                default: n(() => [
                  f(" Total: " + r(g.value.length) + " " + r(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  k.value ? (o(), a(H, { key: 0 }, [
                    _[13] || (_[13] = f(" • Current: ", -1)),
                    e("strong", null, r(k.value.name), 1)
                  ], 64)) : u("", !0)
                ]),
                _: 1
              })) : u("", !0),
              y.value.length ? (o(), b(B, {
                key: 2,
                title: "ENVIRONMENTS",
                count: y.value.length
              }, {
                default: n(() => [
                  (o(!0), a(H, null, Q(y.value, (N) => (o(), b(Ld, {
                    key: N.name,
                    "environment-name": N.name,
                    "is-current": N.is_current,
                    "current-branch": N.current_branch,
                    "workflow-count": N.workflow_count,
                    "node-count": N.node_count,
                    "model-count": N.model_count,
                    "last-used": w(N.last_used),
                    "show-last-used": !!N.last_used
                  }, {
                    actions: n(() => [
                      N.is_current ? u("", !0) : (o(), b(W, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (V) => A.$emit("switch", N.name)
                      }, {
                        default: n(() => [..._[14] || (_[14] = [
                          f(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      m(W, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (V) => z(N.name),
                        title: "View environment details"
                      }, {
                        default: n(() => [..._[15] || (_[15] = [
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
                      !N.is_current && g.value.length > 1 ? (o(), b(W, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (V) => U(N.name),
                        title: "Delete environment"
                      }, {
                        default: n(() => [
                          (o(), a("svg", Bd, [..._[16] || (_[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : u("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : u("", !0),
              y.value.length ? u("", !0) : (o(), b(Me, {
                key: 3,
                icon: "🌍",
                message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
              }, zt({ _: 2 }, [
                d.value ? void 0 : {
                  name: "actions",
                  fn: n(() => [
                    m(W, {
                      variant: "primary",
                      onClick: _[4] || (_[4] = (N) => p.value = !0)
                    }, {
                      default: n(() => [..._[17] || (_[17] = [
                        f(" Create Environment ", -1)
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
        m(Be, {
          show: c.value,
          title: "About Environments",
          onClose: _[6] || (_[6] = (N) => c.value = !1)
        }, {
          content: n(() => [..._[18] || (_[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              f(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            m(W, {
              variant: "secondary",
              onClick: _[5] || (_[5] = (N) => c.value = !1)
            }, {
              default: n(() => [..._[19] || (_[19] = [
                f(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), Od = /* @__PURE__ */ q(Dd, [["__scopeId", "data-v-97d6527d"]]), Vd = { class: "file-path" }, Ad = { class: "file-path-text" }, Fd = ["title"], Wd = /* @__PURE__ */ K({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const i = t, s = x(!1);
    async function l() {
      try {
        await navigator.clipboard.writeText(i.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, h) => (o(), a("div", Vd, [
      h[0] || (h[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Ad, r(t.path), 1),
      t.copyable ? (o(), a("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: l
      }, r(s.value ? "✓" : "📋"), 9, Fd)) : u("", !0)
    ]));
  }
}), Pd = /* @__PURE__ */ q(Wd, [["__scopeId", "data-v-f0982173"]]), Hd = { class: "output-path-input" }, Gd = { class: "export-actions" }, jd = {
  key: 1,
  class: "export-warning"
}, Kd = /* @__PURE__ */ K({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: i } = ke(), s = x(""), l = x(!1), g = x(null), h = x(!1);
    async function v() {
      l.value = !0, g.value = null;
      try {
        const c = await i(s.value || void 0);
        g.value = c;
      } catch (c) {
        g.value = {
          status: "error",
          message: c instanceof Error ? c.message : "Unknown error occurred"
        };
      } finally {
        l.value = !1;
      }
    }
    async function d() {
      var c;
      if ((c = g.value) != null && c.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (p) {
          console.error("Failed to copy path:", p);
        }
    }
    return (c, p) => (o(), a(H, null, [
      m(we, null, {
        header: n(() => [
          m(be, { title: "EXPORT ENVIRONMENT" }, {
            actions: n(() => [
              m(W, {
                variant: "ghost",
                size: "sm",
                onClick: p[0] || (p[0] = (S) => h.value = !0),
                title: "About exporting"
              }, {
                default: n(() => [...p[5] || (p[5] = [
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
          m(ve, { title: "WHAT WILL BE EXPORTED" }, {
            default: n(() => [
              m(ge, { status: "synced" }, {
                icon: n(() => [...p[6] || (p[6] = [
                  f("📦", -1)
                ])]),
                title: n(() => [...p[7] || (p[7] = [
                  f("Environment Snapshot", -1)
                ])]),
                subtitle: n(() => [...p[8] || (p[8] = [
                  f(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: n(() => [
                  m(oe, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  m(oe, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  m(oe, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  m(oe, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(ve, { title: "EXPORT OPTIONS" }, {
            default: n(() => [
              m(ge, { status: "synced" }, {
                icon: n(() => [...p[9] || (p[9] = [
                  f("📁", -1)
                ])]),
                title: n(() => [...p[10] || (p[10] = [
                  f("Output Destination", -1)
                ])]),
                subtitle: n(() => [...p[11] || (p[11] = [
                  f(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: n(() => [
                  e("div", Hd, [
                    m(tt, {
                      modelValue: s.value,
                      "onUpdate:modelValue": p[1] || (p[1] = (S) => s.value = S),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(ve, { title: "EXPORT" }, {
            default: n(() => [
              e("div", Gd, [
                m(W, {
                  variant: "primary",
                  size: "md",
                  loading: l.value,
                  disabled: l.value,
                  onClick: v
                }, {
                  default: n(() => [
                    p[12] || (p[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    f(" " + r(l.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), b(W, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: l.value,
                  onClick: p[2] || (p[2] = (S) => s.value = "")
                }, {
                  default: n(() => [...p[13] || (p[13] = [
                    f(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : u("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), b(ve, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: n(() => [
              m(ge, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, zt({
                icon: n(() => [
                  f(r(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: n(() => [
                  f(r(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: n(() => [
                  f(r(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: n(() => [
                    m(oe, { label: "Saved to:" }, {
                      default: n(() => [
                        m(Pd, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), b(oe, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : u("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), a("div", jd, [...p[14] || (p[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : u("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: n(() => [
                    m(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: d
                    }, {
                      default: n(() => [...p[15] || (p[15] = [
                        f(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    m(W, {
                      variant: "ghost",
                      size: "sm",
                      onClick: p[3] || (p[3] = (S) => g.value = null)
                    }, {
                      default: n(() => [...p[16] || (p[16] = [
                        f(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }),
      m(Be, {
        show: h.value,
        title: "About Environment Export",
        onClose: p[4] || (p[4] = (S) => h.value = !1)
      }, {
        content: n(() => [...p[17] || (p[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            f(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), qd = /* @__PURE__ */ q(Kd, [["__scopeId", "data-v-1777a9d5"]]), Xd = { class: "file-input-wrapper" }, Yd = ["accept", "multiple", "disabled"], Zd = /* @__PURE__ */ K({
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
  setup(t, { expose: i, emit: s }) {
    const l = s, g = x(null);
    function h() {
      var d;
      (d = g.value) == null || d.click();
    }
    function v(d) {
      const c = d.target;
      c.files && c.files.length > 0 && (l("change", c.files), c.value = "");
    }
    return i({
      triggerInput: h
    }), (d, c) => (o(), a("div", Xd, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, Yd),
      m(W, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: h
      }, {
        default: n(() => [
          ne(d.$slots, "default", {}, () => [
            c[0] || (c[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            f(" " + r(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Jd = /* @__PURE__ */ q(Zd, [["__scopeId", "data-v-cd192091"]]), Qd = {
  key: 0,
  class: "drop-zone-empty"
}, eu = { class: "drop-zone-text" }, tu = { class: "drop-zone-primary" }, ou = { class: "drop-zone-secondary" }, su = { class: "drop-zone-actions" }, au = {
  key: 1,
  class: "drop-zone-file"
}, nu = { class: "file-info" }, lu = { class: "file-details" }, iu = { class: "file-name" }, ru = { class: "file-size" }, cu = /* @__PURE__ */ K({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: i }) {
    const s = i, l = x(!1), g = x(null), h = x(0), v = D(() => g.value !== null), d = D(() => {
      var z;
      return ((z = g.value) == null ? void 0 : z.name) || "";
    }), c = D(() => {
      if (!g.value) return "";
      const z = g.value.size;
      return z < 1024 ? `${z} B` : z < 1024 * 1024 ? `${(z / 1024).toFixed(1)} KB` : z < 1024 * 1024 * 1024 ? `${(z / (1024 * 1024)).toFixed(1)} MB` : `${(z / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function p(z) {
      var U;
      h.value++, (U = z.dataTransfer) != null && U.types.includes("Files") && (l.value = !0);
    }
    function S(z) {
      z.dataTransfer && (z.dataTransfer.dropEffect = "copy");
    }
    function k() {
      h.value--, h.value === 0 && (l.value = !1);
    }
    function y(z) {
      var Z;
      h.value = 0, l.value = !1;
      const U = (Z = z.dataTransfer) == null ? void 0 : Z.files;
      U && U.length > 0 && E(U[0]);
    }
    function w(z) {
      z.length > 0 && E(z[0]);
    }
    function E(z) {
      g.value = z, s("fileSelected", z);
    }
    function C() {
      g.value = null, s("clear");
    }
    return (z, U) => (o(), a("div", {
      class: J(["file-drop-zone", { "drop-active": l.value, "has-file": v.value }]),
      onDragenter: fe(p, ["prevent"]),
      onDragover: fe(S, ["prevent"]),
      onDragleave: fe(k, ["prevent"]),
      onDrop: fe(y, ["prevent"])
    }, [
      v.value ? (o(), a("div", au, [
        e("div", nu, [
          U[1] || (U[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", lu, [
            e("div", iu, r(d.value), 1),
            e("div", ru, r(c.value), 1)
          ])
        ]),
        m(W, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: n(() => [...U[2] || (U[2] = [
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
      ])) : (o(), a("div", Qd, [
        U[0] || (U[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", eu, [
          e("p", tu, r(t.primaryText), 1),
          e("p", ou, r(t.secondaryText), 1)
        ]),
        e("div", su, [
          m(Jd, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: w
          }, {
            default: n(() => [
              f(r(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), du = /* @__PURE__ */ q(cu, [["__scopeId", "data-v-e00abbca"]]), uu = { class: "import-preview" }, mu = { class: "preview-header" }, vu = {
  key: 0,
  class: "source-env"
}, fu = { class: "preview-content" }, gu = { class: "preview-section" }, hu = { class: "section-header" }, pu = { class: "section-info" }, yu = { class: "section-count" }, wu = {
  key: 0,
  class: "item-list"
}, bu = { class: "item-name" }, ku = {
  key: 0,
  class: "item-more"
}, _u = { class: "preview-section" }, $u = { class: "section-header" }, Cu = { class: "section-info" }, xu = { class: "section-count" }, Su = {
  key: 0,
  class: "item-list"
}, Iu = { class: "item-details" }, Eu = { class: "item-name" }, zu = { class: "item-meta" }, Mu = {
  key: 0,
  class: "item-more"
}, Lu = { class: "preview-section" }, Nu = { class: "section-header" }, Ru = { class: "section-info" }, Uu = { class: "section-count" }, Tu = {
  key: 0,
  class: "item-list"
}, Bu = { class: "item-name" }, Du = {
  key: 0,
  class: "item-more"
}, Ou = {
  key: 0,
  class: "preview-section"
}, Vu = { class: "git-info" }, Au = /* @__PURE__ */ K({
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
    const i = t, s = D(() => i.workflows.length), l = D(() => i.models.length), g = D(() => i.nodes.length);
    function h(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, d) => (o(), a("div", uu, [
      e("div", mu, [
        m($e, null, {
          default: n(() => [...d[0] || (d[0] = [
            f("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), a("span", vu, [
          d[1] || (d[1] = f(" From: ", -1)),
          m(ht, null, {
            default: n(() => [
              f(r(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : u("", !0)
      ]),
      e("div", fu, [
        e("div", gu, [
          e("div", hu, [
            d[3] || (d[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", pu, [
              d[2] || (d[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", yu, r(s.value) + " file" + r(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), a("div", wu, [
            (o(!0), a(H, null, Q(t.workflows.slice(0, t.maxPreviewItems), (c) => (o(), a("div", {
              key: c,
              class: "preview-item"
            }, [
              d[4] || (d[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", bu, r(c), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), a("div", ku, " +" + r(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", _u, [
          e("div", $u, [
            d[6] || (d[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Cu, [
              d[5] || (d[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", xu, r(l.value) + " file" + r(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), a("div", Su, [
            (o(!0), a(H, null, Q(t.models.slice(0, t.maxPreviewItems), (c) => (o(), a("div", {
              key: c.filename,
              class: "preview-item"
            }, [
              d[7] || (d[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Iu, [
                e("span", Eu, r(c.filename), 1),
                e("span", zu, r(h(c.size)) + " • " + r(c.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), a("div", Mu, " +" + r(t.models.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", Lu, [
          e("div", Nu, [
            d[9] || (d[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Ru, [
              d[8] || (d[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Uu, r(g.value) + " node" + r(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), a("div", Tu, [
            (o(!0), a(H, null, Q(t.nodes.slice(0, t.maxPreviewItems), (c) => (o(), a("div", {
              key: c,
              class: "preview-item"
            }, [
              d[10] || (d[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Bu, r(c), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), a("div", Du, " +" + r(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), a("div", Ou, [
          d[11] || (d[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Vu, [
            t.gitBranch ? (o(), b(oe, {
              key: 0,
              label: "Branch"
            }, {
              default: n(() => [
                m(ht, null, {
                  default: n(() => [
                    f(r(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : u("", !0),
            t.gitCommit ? (o(), b(oe, {
              key: 1,
              label: "Commit"
            }, {
              default: n(() => [
                m(Rt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : u("", !0)
          ])
        ])) : u("", !0)
      ])
    ]));
  }
}), Fu = /* @__PURE__ */ q(Au, [["__scopeId", "data-v-182fe113"]]), Wu = { class: "import-options" }, Pu = { class: "options-container" }, Hu = { class: "option-section" }, Gu = { class: "conflict-options" }, ju = ["value", "checked", "onChange"], Ku = { class: "conflict-content" }, qu = { class: "conflict-label" }, Xu = { class: "conflict-description" }, Yu = { class: "option-section" }, Zu = { class: "component-toggles" }, Ju = /* @__PURE__ */ K({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: i }) {
    const s = i, l = [
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
    return (g, h) => (o(), a("div", Wu, [
      m($e, null, {
        default: n(() => [...h[4] || (h[4] = [
          f("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Pu, [
        e("div", Hu, [
          m(gt, null, {
            default: n(() => [...h[5] || (h[5] = [
              f("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Gu, [
            (o(), a(H, null, Q(l, (v) => e("label", {
              key: v.value,
              class: J(["conflict-option", { active: t.conflictMode === v.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: v.value,
                checked: t.conflictMode === v.value,
                onChange: (d) => s("update:conflictMode", v.value)
              }, null, 40, ju),
              e("div", Ku, [
                e("span", qu, r(v.label), 1),
                e("span", Xu, r(v.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Yu, [
          m(gt, null, {
            default: n(() => [...h[6] || (h[6] = [
              f("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Zu, [
            m(Ve, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: n(() => [
                m(Ge, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": h[0] || (h[0] = (v) => s("update:includeWorkflows", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(Ve, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: n(() => [
                m(Ge, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": h[1] || (h[1] = (v) => s("update:includeModels", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(Ve, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: n(() => [
                m(Ge, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": h[2] || (h[2] = (v) => s("update:includeNodes", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(Ve, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: n(() => [
                m(Ge, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": h[3] || (h[3] = (v) => s("update:includeGitHistory", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Qu = /* @__PURE__ */ q(Ju, [["__scopeId", "data-v-0ec212b0"]]), em = {
  key: 0,
  class: "import-empty"
}, tm = { class: "import-help" }, om = {
  key: 1,
  class: "import-configure"
}, sm = { class: "selected-file-bar" }, am = { class: "file-bar-content" }, nm = { class: "file-bar-info" }, lm = { class: "file-bar-name" }, im = { class: "file-bar-size" }, rm = { class: "import-actions" }, cm = {
  key: 2,
  class: "import-progress"
}, dm = { class: "progress-content" }, um = { class: "progress-info" }, mm = { class: "progress-title" }, vm = { class: "progress-detail" }, fm = { class: "progress-bar" }, gm = { class: "progress-status" }, hm = {
  key: 3,
  class: "import-complete"
}, pm = { class: "complete-message" }, ym = { class: "complete-title" }, wm = { class: "complete-details" }, bm = { class: "complete-actions" }, km = /* @__PURE__ */ K({
  __name: "ImportSection",
  setup(t) {
    const i = x(null), s = x(!1), l = x(!1), g = x(!1), h = x(""), v = x({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), d = x({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), c = x({
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
    }), p = D(() => v.value.includeWorkflows || v.value.includeModels || v.value.includeNodes || v.value.includeGitHistory);
    function S(C) {
      i.value = C;
    }
    function k() {
      i.value = null, l.value = !1, g.value = !1, h.value = "";
    }
    function y() {
      k(), s.value = !1, d.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function w() {
      if (i.value) {
        s.value = !0, l.value = !1;
        try {
          const C = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${c.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${c.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${c.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const z of C)
            d.value = z, await new Promise((U) => setTimeout(U, 800));
          d.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((z) => setTimeout(z, 500)), g.value = !0, h.value = `Successfully imported ${c.value.workflows.length} workflows, ${c.value.models.length} models, and ${c.value.nodes.length} custom nodes.`;
        } catch (C) {
          g.value = !1, h.value = C instanceof Error ? C.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, l.value = !0;
        }
      }
    }
    function E(C) {
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (C, z) => (o(), b(we, null, {
      header: n(() => [
        m(be, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: n(() => [
        !i.value && !s.value ? (o(), a("div", em, [
          m(du, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: S
          }),
          e("div", tm, [
            m($e, null, {
              default: n(() => [...z[5] || (z[5] = [
                f("How to Import", -1)
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
        ])) : i.value && !s.value && !l.value ? (o(), a("div", om, [
          e("div", sm, [
            e("div", am, [
              z[7] || (z[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", nm, [
                e("div", lm, r(i.value.name), 1),
                e("div", im, r(E(i.value.size)), 1)
              ])
            ]),
            m(W, {
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: n(() => [...z[8] || (z[8] = [
                f(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          m(Fu, {
            "source-environment": c.value.sourceEnvironment,
            workflows: c.value.workflows,
            models: c.value.models,
            nodes: c.value.nodes,
            "git-branch": c.value.gitBranch,
            "git-commit": c.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          m(Qu, {
            "conflict-mode": v.value.conflictMode,
            "onUpdate:conflictMode": z[0] || (z[0] = (U) => v.value.conflictMode = U),
            "include-workflows": v.value.includeWorkflows,
            "onUpdate:includeWorkflows": z[1] || (z[1] = (U) => v.value.includeWorkflows = U),
            "include-models": v.value.includeModels,
            "onUpdate:includeModels": z[2] || (z[2] = (U) => v.value.includeModels = U),
            "include-nodes": v.value.includeNodes,
            "onUpdate:includeNodes": z[3] || (z[3] = (U) => v.value.includeNodes = U),
            "include-git-history": v.value.includeGitHistory,
            "onUpdate:includeGitHistory": z[4] || (z[4] = (U) => v.value.includeGitHistory = U)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !v.value.includeModels && c.value.models.length > 0 ? (o(), b(He, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${c.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : u("", !0),
          e("div", rm, [
            m(W, {
              variant: "primary",
              size: "md",
              disabled: !p.value,
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
                f(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            m(W, {
              variant: "secondary",
              size: "md",
              onClick: k
            }, {
              default: n(() => [...z[10] || (z[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), a("div", cm, [
          e("div", dm, [
            z[11] || (z[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", um, [
              e("div", mm, r(d.value.message), 1),
              e("div", vm, r(d.value.detail), 1)
            ])
          ]),
          e("div", fm, [
            e("div", {
              class: "progress-bar-fill",
              style: ot({ width: `${d.value.percent}%` })
            }, null, 4)
          ]),
          e("div", gm, r(d.value.percent) + "% complete ", 1)
        ])) : l.value ? (o(), a("div", hm, [
          e("div", {
            class: J(["complete-icon", g.value ? "success" : "error"])
          }, r(g.value ? "✓" : "✕"), 3),
          e("div", pm, [
            e("div", ym, r(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", wm, r(h.value), 1)
          ]),
          e("div", bm, [
            m(W, {
              variant: "primary",
              size: "md",
              onClick: y
            }, {
              default: n(() => [...z[12] || (z[12] = [
                f(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : u("", !0)
      ]),
      _: 1
    }));
  }
}), _m = /* @__PURE__ */ q(km, [["__scopeId", "data-v-18e18eb5"]]), $m = { class: "header-info" }, Cm = { class: "commit-hash" }, xm = {
  key: 0,
  class: "commit-refs"
}, Sm = { class: "commit-message" }, Im = { class: "commit-date" }, Em = {
  key: 0,
  class: "loading"
}, zm = {
  key: 1,
  class: "changes-section"
}, Mm = { class: "stats-row" }, Lm = { class: "stat" }, Nm = { class: "stat insertions" }, Rm = { class: "stat deletions" }, Um = {
  key: 0,
  class: "change-group"
}, Tm = {
  key: 1,
  class: "change-group"
}, Bm = {
  key: 0,
  class: "version"
}, Dm = {
  key: 2,
  class: "change-group"
}, Om = { class: "change-item" }, Vm = /* @__PURE__ */ K({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const i = t, { getCommitDetail: s } = ke(), l = x(null), g = x(!0), h = D(() => {
      if (!l.value) return !1;
      const d = l.value.changes.workflows;
      return d.added.length > 0 || d.modified.length > 0 || d.deleted.length > 0;
    }), v = D(() => {
      if (!l.value) return !1;
      const d = l.value.changes.nodes;
      return d.added.length > 0 || d.removed.length > 0;
    });
    return he(async () => {
      try {
        l.value = await s(i.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (d, c) => (o(), b(dt, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (p) => d.$emit("close"))
    }, {
      header: n(() => {
        var p, S, k, y;
        return [
          e("div", $m, [
            c[4] || (c[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Cm, r(((p = l.value) == null ? void 0 : p.short_hash) || t.commit.short_hash || ((S = t.commit.hash) == null ? void 0 : S.slice(0, 7))), 1),
            (y = (k = l.value) == null ? void 0 : k.refs) != null && y.length ? (o(), a("span", xm, [
              (o(!0), a(H, null, Q(l.value.refs, (w) => (o(), a("span", {
                key: w,
                class: "ref-badge"
              }, r(w), 1))), 128))
            ])) : u("", !0)
          ]),
          m(ae, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (w) => d.$emit("close"))
          }, {
            default: n(() => [...c[5] || (c[5] = [
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
        var p, S;
        return [
          e("div", Sm, r(((p = l.value) == null ? void 0 : p.message) || t.commit.message), 1),
          e("div", Im, r(((S = l.value) == null ? void 0 : S.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), a("div", Em, "Loading details...")) : l.value ? (o(), a("div", zm, [
            e("div", Mm, [
              e("span", Lm, r(l.value.stats.files_changed) + " files", 1),
              e("span", Nm, "+" + r(l.value.stats.insertions), 1),
              e("span", Rm, "-" + r(l.value.stats.deletions), 1)
            ]),
            h.value ? (o(), a("div", Um, [
              m(Qe, { variant: "section" }, {
                default: n(() => [...c[6] || (c[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), a(H, null, Q(l.value.changes.workflows.added, (k) => (o(), a("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                c[7] || (c[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, r(k), 1)
              ]))), 128)),
              (o(!0), a(H, null, Q(l.value.changes.workflows.modified, (k) => (o(), a("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                c[8] || (c[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, r(k), 1)
              ]))), 128)),
              (o(!0), a(H, null, Q(l.value.changes.workflows.deleted, (k) => (o(), a("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                c[9] || (c[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, r(k), 1)
              ]))), 128))
            ])) : u("", !0),
            v.value ? (o(), a("div", Tm, [
              m(Qe, { variant: "section" }, {
                default: n(() => [...c[10] || (c[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), a(H, null, Q(l.value.changes.nodes.added, (k) => (o(), a("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                c[11] || (c[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, r(k.name), 1),
                k.version ? (o(), a("span", Bm, "(" + r(k.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), a(H, null, Q(l.value.changes.nodes.removed, (k) => (o(), a("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                c[12] || (c[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, r(k.name), 1)
              ]))), 128))
            ])) : u("", !0),
            l.value.changes.models.resolved > 0 ? (o(), a("div", Dm, [
              m(Qe, { variant: "section" }, {
                default: n(() => [...c[13] || (c[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Om, [
                c[14] || (c[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, r(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: n(() => [
        m(ae, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (p) => d.$emit("createBranch", t.commit))
        }, {
          default: n(() => [...c[15] || (c[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        m(ae, {
          variant: "primary",
          onClick: c[2] || (c[2] = (p) => d.$emit("checkout", t.commit))
        }, {
          default: n(() => [...c[16] || (c[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Am = /* @__PURE__ */ q(Vm, [["__scopeId", "data-v-d256ff6d"]]), Fm = { class: "dialog-message" }, Wm = {
  key: 0,
  class: "dialog-details"
}, Pm = {
  key: 1,
  class: "dialog-warning"
}, Hm = /* @__PURE__ */ K({
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
    return (i, s) => (o(), b(dt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (l) => i.$emit("cancel"))
    }, {
      body: n(() => [
        e("p", Fm, r(t.message), 1),
        t.details && t.details.length ? (o(), a("div", Wm, [
          (o(!0), a(H, null, Q(t.details, (l, g) => (o(), a("div", {
            key: g,
            class: "detail-item"
          }, " • " + r(l), 1))), 128))
        ])) : u("", !0),
        t.warning ? (o(), a("p", Pm, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + r(t.warning), 1)
        ])) : u("", !0)
      ]),
      footer: n(() => [
        m(ae, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (l) => i.$emit("cancel"))
        }, {
          default: n(() => [
            f(r(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), b(ae, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (l) => i.$emit("secondary"))
        }, {
          default: n(() => [
            f(r(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        m(ae, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (l) => i.$emit("confirm"))
        }, {
          default: n(() => [
            f(r(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Gm = /* @__PURE__ */ q(Hm, [["__scopeId", "data-v-3670b9f5"]]), jm = { class: "base-textarea-wrapper" }, Km = ["value", "rows", "placeholder", "disabled", "maxlength"], qm = {
  key: 0,
  class: "base-textarea-count"
}, Xm = /* @__PURE__ */ K({
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
    return (i, s) => (o(), a("div", jm, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (l) => i.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          s[1] || (s[1] = Te(fe((l) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Te(fe((l) => i.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Km),
      t.showCharCount && t.maxLength ? (o(), a("div", qm, r(t.modelValue.length) + " / " + r(t.maxLength), 1)) : u("", !0)
    ]));
  }
}), St = /* @__PURE__ */ q(Xm, [["__scopeId", "data-v-5516e6fc"]]), Ym = ["checked", "disabled"], Zm = { class: "base-checkbox-box" }, Jm = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Qm = {
  key: 0,
  class: "base-checkbox-label"
}, ev = /* @__PURE__ */ K({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (i, s) => (o(), a("label", {
      class: J(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (l) => i.$emit("update:modelValue", l.target.checked))
      }, null, 40, Ym),
      e("span", Zm, [
        t.modelValue ? (o(), a("svg", Jm, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : u("", !0)
      ]),
      i.$slots.default ? (o(), a("span", Qm, [
        ne(i.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ q(ev, [["__scopeId", "data-v-bf17c831"]]), tv = { class: "popover-header" }, ov = { class: "popover-body" }, sv = {
  key: 0,
  class: "changes-summary"
}, av = {
  key: 0,
  class: "change-item"
}, nv = {
  key: 1,
  class: "change-item"
}, lv = {
  key: 2,
  class: "change-item"
}, iv = {
  key: 3,
  class: "change-item"
}, rv = {
  key: 4,
  class: "change-item"
}, cv = {
  key: 1,
  class: "no-changes"
}, dv = {
  key: 2,
  class: "loading"
}, uv = {
  key: 3,
  class: "issues-warning"
}, mv = { class: "warning-header" }, vv = { class: "warning-title" }, fv = { class: "issues-list" }, gv = { class: "message-section" }, hv = { class: "popover-footer" }, pv = {
  key: 1,
  class: "commit-popover"
}, yv = { class: "popover-header" }, wv = { class: "popover-body" }, bv = {
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
}, zv = { class: "warning-header" }, Mv = { class: "warning-title" }, Lv = { class: "issues-list" }, Nv = { class: "message-section" }, Rv = { class: "popover-footer" }, Uv = /* @__PURE__ */ K({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: i }) {
    const s = t, l = i, { commit: g } = ke(), h = x(""), v = x(!1), d = x(!1), c = x(null), p = D(() => {
      if (!s.status) return !1;
      const E = s.status.workflows;
      return E.new.length > 0 || E.modified.length > 0 || E.deleted.length > 0 || s.status.has_changes;
    }), S = D(() => {
      var E;
      return (E = s.status) != null && E.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (C) => C.has_issues && (C.sync_state === "new" || C.sync_state === "modified")
      ) : [];
    }), k = D(() => S.value.length > 0), y = D(() => k.value && !d.value);
    async function w() {
      var E, C, z;
      if (!(k.value && !d.value) && !(!p.value || !h.value.trim() || v.value)) {
        v.value = !0, c.value = null;
        try {
          const U = await g(h.value.trim(), d.value);
          U.status === "success" ? (c.value = {
            type: "success",
            message: `Committed: ${((E = U.summary) == null ? void 0 : E.new) || 0} new, ${((C = U.summary) == null ? void 0 : C.modified) || 0} modified, ${((z = U.summary) == null ? void 0 : z.deleted) || 0} deleted`
          }, h.value = "", d.value = !1, setTimeout(() => l("committed"), 1e3)) : U.status === "no_changes" ? c.value = { type: "error", message: "No changes to commit" } : U.status === "blocked" ? c.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : c.value = { type: "error", message: U.message || "Commit failed" };
        } catch (U) {
          c.value = { type: "error", message: U instanceof Error ? U.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (E, C) => t.asModal ? (o(), b(ze, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (z) => l("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", tv, [
            C[11] || (C[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = (z) => l("close"))
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
          e("div", ov, [
            t.status && p.value ? (o(), a("div", sv, [
              t.status.workflows.new.length ? (o(), a("div", av, [
                C[12] || (C[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, r(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : u("", !0),
              t.status.workflows.modified.length ? (o(), a("div", nv, [
                C[13] || (C[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, r(t.status.workflows.modified.length) + " modified", 1)
              ])) : u("", !0),
              t.status.workflows.deleted.length ? (o(), a("div", lv, [
                C[14] || (C[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, r(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_added.length ? (o(), a("div", iv, [
                C[15] || (C[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, r(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), a("div", rv, [
                C[16] || (C[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, r(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : u("", !0)
            ])) : t.status ? (o(), a("div", cv, " No changes to commit ")) : (o(), a("div", dv, " Loading... ")),
            k.value ? (o(), a("div", uv, [
              e("div", mv, [
                C[17] || (C[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", vv, r(S.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", fv, [
                (o(!0), a(H, null, Q(S.value, (z) => (o(), a("div", {
                  key: z.name,
                  class: "issue-item"
                }, [
                  e("strong", null, r(z.name), 1),
                  f(": " + r(z.issue_summary), 1)
                ]))), 128))
              ]),
              m(It, {
                modelValue: d.value,
                "onUpdate:modelValue": C[1] || (C[1] = (z) => d.value = z),
                class: "allow-issues-toggle"
              }, {
                default: n(() => [...C[18] || (C[18] = [
                  f(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : u("", !0),
            e("div", gv, [
              m(St, {
                modelValue: h.value,
                "onUpdate:modelValue": C[2] || (C[2] = (z) => h.value = z),
                placeholder: y.value ? "Enable 'Allow issues' to commit" : p.value ? "Describe your changes..." : "No changes",
                disabled: !p.value || v.value || y.value,
                rows: 3,
                onCtrlEnter: w
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            c.value ? (o(), a("div", {
              key: 4,
              class: J(["result", c.value.type])
            }, r(c.value.message), 3)) : u("", !0)
          ]),
          e("div", hv, [
            m(ae, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (z) => l("close"))
            }, {
              default: n(() => [...C[19] || (C[19] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: d.value ? "danger" : "primary",
              disabled: !p.value || !h.value.trim() || v.value || y.value,
              loading: v.value,
              onClick: w
            }, {
              default: n(() => [
                f(r(v.value ? "Committing..." : d.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), a("div", pv, [
      e("div", yv, [
        C[21] || (C[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = (z) => l("close"))
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
      e("div", wv, [
        t.status && p.value ? (o(), a("div", bv, [
          t.status.workflows.new.length ? (o(), a("div", kv, [
            C[22] || (C[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, r(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          t.status.workflows.modified.length ? (o(), a("div", _v, [
            C[23] || (C[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, r(t.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          t.status.workflows.deleted.length ? (o(), a("div", $v, [
            C[24] || (C[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, r(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_added.length ? (o(), a("div", Cv, [
            C[25] || (C[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, r(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), a("div", xv, [
            C[26] || (C[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, r(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : t.status ? (o(), a("div", Sv, " No changes to commit ")) : (o(), a("div", Iv, " Loading... ")),
        k.value ? (o(), a("div", Ev, [
          e("div", zv, [
            C[27] || (C[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", Mv, r(S.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", Lv, [
            (o(!0), a(H, null, Q(S.value, (z) => (o(), a("div", {
              key: z.name,
              class: "issue-item"
            }, [
              e("strong", null, r(z.name), 1),
              f(": " + r(z.issue_summary), 1)
            ]))), 128))
          ]),
          m(It, {
            modelValue: d.value,
            "onUpdate:modelValue": C[7] || (C[7] = (z) => d.value = z),
            class: "allow-issues-toggle"
          }, {
            default: n(() => [...C[28] || (C[28] = [
              f(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : u("", !0),
        e("div", Nv, [
          m(St, {
            modelValue: h.value,
            "onUpdate:modelValue": C[8] || (C[8] = (z) => h.value = z),
            placeholder: y.value ? "Enable 'Allow issues' to commit" : p.value ? "Describe your changes..." : "No changes",
            disabled: !p.value || v.value || y.value,
            rows: 3,
            onCtrlEnter: w
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        c.value ? (o(), a("div", {
          key: 4,
          class: J(["result", c.value.type])
        }, r(c.value.message), 3)) : u("", !0)
      ]),
      e("div", Rv, [
        m(ae, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (z) => l("close"))
        }, {
          default: n(() => [...C[29] || (C[29] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m(ae, {
          variant: d.value ? "danger" : "primary",
          disabled: !p.value || !h.value.trim() || v.value || y.value,
          loading: v.value,
          onClick: w
        }, {
          default: n(() => [
            f(r(v.value ? "Committing..." : d.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Bt = /* @__PURE__ */ q(Uv, [["__scopeId", "data-v-38b45183"]]), Tv = { class: "modal-header" }, Bv = { class: "modal-body" }, Dv = { class: "switch-message" }, Ov = { class: "switch-details" }, Vv = { class: "modal-actions" }, Av = /* @__PURE__ */ K({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (i, s) => (o(), b(ze, { to: "body" }, [
      t.show ? (o(), a("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (l) => i.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Tv, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (l) => i.$emit("close"))
            }, "✕")
          ]),
          e("div", Bv, [
            e("p", Dv, [
              s[6] || (s[6] = f(" Switch from ", -1)),
              e("strong", null, r(t.fromEnvironment), 1),
              s[7] || (s[7] = f(" to ", -1)),
              e("strong", null, r(t.toEnvironment), 1),
              s[8] || (s[8] = f("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Ov, ' Your current work will be preserved. You can switch back to "' + r(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Vv, [
            m(W, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (l) => i.$emit("close"))
            }, {
              default: n(() => [...s[11] || (s[11] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(W, {
              variant: "primary",
              onClick: s[2] || (s[2] = (l) => i.$emit("confirm"))
            }, {
              default: n(() => [...s[12] || (s[12] = [
                f(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Fv = /* @__PURE__ */ q(Av, [["__scopeId", "data-v-e9c5253e"]]), Wv = { class: "progress-bar" }, Pv = /* @__PURE__ */ K({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const i = t, s = D(() => `${Math.max(0, Math.min(100, i.progress))}%`);
    return (l, g) => (o(), a("div", Wv, [
      e("div", {
        class: J(["progress-fill", t.variant]),
        style: ot({ width: s.value })
      }, null, 6)
    ]));
  }
}), Hv = /* @__PURE__ */ q(Pv, [["__scopeId", "data-v-1beb0512"]]), Gv = {
  key: 0,
  class: "modal-overlay"
}, jv = { class: "modal-content" }, Kv = { class: "modal-body" }, qv = { class: "progress-info" }, Xv = { class: "progress-percentage" }, Yv = { class: "progress-state" }, Zv = { class: "switch-steps" }, Jv = { class: "step-icon" }, Qv = { class: "step-label" }, ef = /* @__PURE__ */ K({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const i = t, s = D(() => {
      const h = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return i.message || h[i.state] || i.state;
    }), l = D(() => i.state === "complete" ? "success" : i.state === "critical_failure" || i.state === "rolled_back" ? "error" : "default"), g = D(() => {
      const h = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], v = h.findIndex((d) => d.state === i.state);
      return h.map((d, c) => {
        let p = "pending", S = "○";
        return c < v ? (p = "completed", S = "✓") : c === v && (p = "active", S = "⟳"), {
          ...d,
          status: p,
          icon: S
        };
      });
    });
    return (h, v) => (o(), b(ze, { to: "body" }, [
      t.show ? (o(), a("div", Gv, [
        e("div", jv, [
          v[1] || (v[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Kv, [
            m(Hv, {
              progress: t.progress,
              variant: l.value
            }, null, 8, ["progress", "variant"]),
            e("div", qv, [
              e("div", Xv, r(t.progress) + "%", 1),
              e("div", Yv, r(s.value), 1)
            ]),
            e("div", Zv, [
              (o(!0), a(H, null, Q(g.value, (d) => (o(), a("div", {
                key: d.state,
                class: J(["switch-step", d.status])
              }, [
                e("span", Jv, r(d.icon), 1),
                e("span", Qv, r(d.label), 1)
              ], 2))), 128))
            ]),
            v[0] || (v[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), tf = /* @__PURE__ */ q(ef, [["__scopeId", "data-v-768a5078"]]), of = { class: "modal-header" }, sf = { class: "modal-body" }, af = {
  key: 0,
  class: "node-section"
}, nf = { class: "node-list" }, lf = {
  key: 1,
  class: "node-section"
}, rf = { class: "node-list" }, cf = { class: "modal-actions" }, df = /* @__PURE__ */ K({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (i, s) => (o(), b(ze, { to: "body" }, [
      t.show ? (o(), a("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (l) => i.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", of, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (l) => i.$emit("close"))
            }, "✕")
          ]),
          e("div", sf, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), a("div", af, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", nf, [
                (o(!0), a(H, null, Q(t.mismatchDetails.missing_nodes, (l) => (o(), a("div", {
                  key: l,
                  class: "node-item add"
                }, " + " + r(l), 1))), 128))
              ])
            ])) : u("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), a("div", lf, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", rf, [
                (o(!0), a(H, null, Q(t.mismatchDetails.extra_nodes, (l) => (o(), a("div", {
                  key: l,
                  class: "node-item remove"
                }, " - " + r(l), 1))), 128))
              ])
            ])) : u("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", cf, [
            m(W, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (l) => i.$emit("close"))
            }, {
              default: n(() => [...s[10] || (s[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(W, {
              variant: "primary",
              onClick: s[2] || (s[2] = (l) => i.$emit("confirm"))
            }, {
              default: n(() => [...s[11] || (s[11] = [
                f(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), uf = /* @__PURE__ */ q(df, [["__scopeId", "data-v-7cad7518"]]);
async function Ze(t, i = {}, s = 5e3) {
  const l = new AbortController(), g = setTimeout(() => l.abort(), s);
  try {
    const h = await fetch(t, {
      ...i,
      signal: l.signal
    });
    return clearTimeout(g), h;
  } catch (h) {
    throw clearTimeout(g), h.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : h;
  }
}
function mf() {
  const t = x(null);
  async function i() {
    try {
      const v = await Ze(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (v.ok)
        return (await v.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await i()), !t.value)
      return null;
    try {
      const v = await Ze(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Health check failed");
      return await v.json();
    } catch {
      return t.value = await i(), null;
    }
  }
  async function l() {
    if (t.value || (t.value = await i()), !t.value)
      return null;
    try {
      const v = await Ze(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Failed to get status");
      return await v.json();
    } catch {
      return null;
    }
  }
  async function g() {
    if (t.value || (t.value = await i()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ze(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function h() {
    if (t.value || (t.value = await i()), !t.value)
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
    discoverControlPort: i,
    checkHealth: s,
    getStatus: l,
    restart: g,
    kill: h
  };
}
const vf = { class: "comfygit-panel" }, ff = { class: "panel-header" }, gf = { class: "header-left" }, hf = {
  key: 0,
  class: "header-info"
}, pf = { class: "header-actions" }, yf = { class: "env-switcher" }, wf = {
  key: 0,
  class: "header-info"
}, bf = { class: "branch-name" }, kf = { class: "panel-main" }, _f = { class: "sidebar" }, $f = { class: "sidebar-section" }, Cf = { class: "sidebar-section" }, xf = { class: "sidebar-section" }, Sf = { class: "content-area" }, If = {
  key: 0,
  class: "error-message"
}, Ef = {
  key: 1,
  class: "loading"
}, zf = { class: "dialog-content env-selector-dialog" }, Mf = { class: "dialog-header" }, Lf = { class: "dialog-body" }, Nf = { class: "env-list" }, Rf = { class: "env-info" }, Uf = { class: "env-name-row" }, Tf = { class: "env-indicator" }, Bf = { class: "env-name" }, Df = {
  key: 0,
  class: "env-branch"
}, Of = {
  key: 1,
  class: "current-label"
}, Vf = { class: "env-stats" }, Af = ["onClick"], Ff = { class: "toast-container" }, Wf = { class: "toast-icon" }, Pf = { class: "toast-message" }, Hf = /* @__PURE__ */ K({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: i }) {
    const s = i, {
      getStatus: l,
      getHistory: g,
      getBranches: h,
      checkout: v,
      createBranch: d,
      switchBranch: c,
      getEnvironments: p,
      switchEnvironment: S,
      getSwitchProgress: k,
      syncEnvironmentManually: y
    } = ke(), w = mf(), E = x(null), C = x([]), z = x([]), U = x([]), Z = D(() => U.value.find((F) => F.is_current)), A = x(!1), _ = x(null), B = x(null), N = x(!1), V = x(!1), M = x(!1), R = x(""), T = x({ state: "idle", progress: 0, message: "" });
    let G = null, O = null;
    const L = x("status"), X = x("this-env");
    function j(F, I) {
      L.value = F, X.value = I;
    }
    function pe(F) {
      const le = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[F];
      le && j(le.view, le.section);
    }
    function xe() {
      j("branches", "this-env");
    }
    const de = x(null), ue = x(!1), ee = x(!1), Le = x([]);
    let Xe = 0;
    function ce(F, I = "info", le = 3e3) {
      const me = ++Xe;
      return Le.value.push({ id: me, message: F, type: I }), le > 0 && setTimeout(() => {
        Le.value = Le.value.filter((Se) => Se.id !== me);
      }, le), me;
    }
    function Ce(F) {
      Le.value = Le.value.filter((I) => I.id !== F);
    }
    function Y(F) {
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
      const F = E.value.workflows, I = F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? I ? "warning" : "success" : "error";
    });
    D(() => E.value ? $.value === "success" ? "All synced" : $.value === "warning" ? "Uncommitted changes" : $.value === "error" ? "Not synced" : "" : "");
    async function P() {
      A.value = !0, _.value = null;
      try {
        const [F, I, le, me] = await Promise.all([
          l(),
          g(),
          h(),
          p()
        ]);
        E.value = F, C.value = I.commits, z.value = le.branches, U.value = me, s("statusUpdate", F);
      } catch (F) {
        _.value = F instanceof Error ? F.message : "Failed to load status", E.value = null, C.value = [], z.value = [];
      } finally {
        A.value = !1;
      }
    }
    function te(F) {
      B.value = F;
    }
    async function ye(F) {
      var le;
      B.value = null;
      const I = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      de.value = {
        title: I ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: I ? "You have uncommitted changes that will be lost." : `Checkout commit ${F.short_hash || ((le = F.hash) == null ? void 0 : le.slice(0, 7))}?`,
        details: I ? _t() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: I,
        onConfirm: async () => {
          var Ie;
          de.value = null;
          const me = ce(`Checking out ${F.short_hash || ((Ie = F.hash) == null ? void 0 : Ie.slice(0, 7))}...`, "info", 0), Se = await v(F.hash, I);
          Ce(me), Se.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(Se.message || "Checkout failed", "error");
        }
      };
    }
    async function Ne(F) {
      const I = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      de.value = {
        title: I ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: I ? "You have uncommitted changes." : `Switch to branch "${F}"?`,
        details: I ? _t() : void 0,
        warning: I ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          de.value = null;
          const le = ce(`Switching to ${F}...`, "info", 0), me = await c(F, I);
          Ce(le), me.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(me.message || "Branch switch failed", "error");
        }
      };
    }
    async function Fe(F) {
      const I = ce(`Creating branch ${F}...`, "info", 0), le = await d(F);
      Ce(I), le.status === "success" ? (ce(`Branch "${F}" created`, "success"), await P()) : ce(le.message || "Failed to create branch", "error");
    }
    async function st(F) {
      B.value = null;
      const I = prompt("Enter branch name:");
      if (I) {
        const le = ce(`Creating branch ${I}...`, "info", 0), me = await d(I, F.hash);
        Ce(le), me.status === "success" ? (ce(`Branch "${I}" created from ${F.short_hash}`, "success"), await P()) : ce(me.message || "Failed to create branch", "error");
      }
    }
    async function Ye(F) {
      N.value = !1, R.value = F, V.value = !0;
    }
    async function Ft() {
      V.value = !1, M.value = !0, T.value = {
        progress: 10,
        state: at(10),
        message: nt(10)
      };
      try {
        await S(R.value), Wt(), Pt();
      } catch (F) {
        We(), M.value = !1, ce(`Failed to initiate switch: ${F instanceof Error ? F.message : "Unknown error"}`, "error"), T.value = { state: "idle", progress: 0, message: "" };
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
    function Wt() {
      if (O) return;
      let F = 10;
      const I = 60, le = 5e3, me = 100, Se = (I - F) / (le / me);
      O = window.setInterval(() => {
        if (F += Se, F >= I && (F = I, We()), T.value.progress < I) {
          const Ie = Math.floor(F);
          T.value = {
            progress: Ie,
            state: at(Ie),
            message: nt(Ie)
          };
        }
      }, me);
    }
    function We() {
      O && (clearInterval(O), O = null);
    }
    function Pt() {
      G || (G = window.setInterval(async () => {
        try {
          let F = await w.getStatus();
          if ((!F || F.state === "idle") && (F = await k()), !F)
            return;
          const I = F.progress || 0;
          I >= 60 && We();
          const le = Math.max(I, T.value.progress), me = F.state && F.state !== "idle" && F.state !== "unknown", Se = me ? F.state : at(le), Ie = me && F.message || nt(le);
          T.value = {
            state: Se,
            progress: le,
            message: Ie
          }, F.state === "complete" ? (We(), ut(), M.value = !1, ce(`✓ Switched to ${R.value}`, "success"), await P(), R.value = "") : F.state === "rolled_back" ? (We(), ut(), M.value = !1, ce("Switch failed, restored previous environment", "warning"), R.value = "") : F.state === "critical_failure" && (We(), ut(), M.value = !1, ce(`Critical error during switch: ${F.message}`, "error"), R.value = "");
        } catch (F) {
          console.error("Failed to poll switch progress:", F);
        }
      }, 1e3));
    }
    function ut() {
      We(), G && (clearInterval(G), G = null);
    }
    function Ht() {
      V.value = !1, R.value = "";
    }
    async function Gt() {
      ue.value = !1, await P(), ce("✓ Changes committed", "success");
    }
    async function jt() {
      ee.value = !1;
      const F = ce("Syncing environment...", "info", 0);
      try {
        const I = await y("skip", !0);
        if (Ce(F), I.status === "success") {
          const le = [];
          I.nodes_installed.length && le.push(`${I.nodes_installed.length} installed`), I.nodes_removed.length && le.push(`${I.nodes_removed.length} removed`);
          const me = le.length ? `: ${le.join(", ")}` : "";
          ce(`✓ Environment synced${me}`, "success"), await P();
        } else {
          const le = I.errors.length ? I.errors.join("; ") : I.message;
          ce(`Sync failed: ${le}`, "error");
        }
      } catch (I) {
        Ce(F), ce(`Sync error: ${I instanceof Error ? I.message : "Unknown error"}`, "error");
      }
    }
    async function Kt(F) {
      const I = ce(`Creating environment "${F}"...`, "info", 0);
      Ce(I), ce("Environment creation not yet implemented", "warning");
    }
    async function qt(F) {
      const I = ce(`Deleting environment "${F}"...`, "info", 0);
      Ce(I), ce("Environment deletion not yet implemented", "warning");
    }
    function Xt(F) {
      ce(`Viewing details for "${F}"`, "info"), j("models-env", "this-env");
    }
    function _t() {
      if (!E.value) return [];
      const F = [], I = E.value.workflows;
      return I.new.length && F.push(`${I.new.length} new workflow(s)`), I.modified.length && F.push(`${I.modified.length} modified workflow(s)`), I.deleted.length && F.push(`${I.deleted.length} deleted workflow(s)`), F;
    }
    return he(P), (F, I) => {
      var le, me, Se, Ie;
      return o(), a("div", vf, [
        e("div", ff, [
          e("div", gf, [
            I[27] || (I[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (o(), a("div", hf)) : u("", !0)
          ]),
          e("div", pf, [
            e("button", {
              class: J(["icon-btn", { spinning: A.value }]),
              onClick: P,
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
              onClick: I[0] || (I[0] = (se) => s("close")),
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
        e("div", yf, [
          I[31] || (I[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: I[1] || (I[1] = (se) => j("environments", "all-envs"))
          }, [
            E.value ? (o(), a("div", wf, [
              e("span", null, r(((le = Z.value) == null ? void 0 : le.name) || ((me = E.value) == null ? void 0 : me.environment) || "Loading..."), 1),
              e("span", bf, "(" + r(E.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            I[30] || (I[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", kf, [
          e("div", _f, [
            e("div", $f, [
              I[32] || (I[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "status" && X.value === "this-env" }]),
                onClick: I[2] || (I[2] = (se) => j("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "workflows" }]),
                onClick: I[3] || (I[3] = (se) => j("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "models-env" }]),
                onClick: I[4] || (I[4] = (se) => j("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "branches" }]),
                onClick: I[5] || (I[5] = (se) => j("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "history" }]),
                onClick: I[6] || (I[6] = (se) => j("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "nodes" }]),
                onClick: I[7] || (I[7] = (se) => j("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "debug-env" }]),
                onClick: I[8] || (I[8] = (se) => j("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            I[35] || (I[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Cf, [
              I[33] || (I[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "environments" }]),
                onClick: I[9] || (I[9] = (se) => j("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "model-index" }]),
                onClick: I[10] || (I[10] = (se) => j("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "settings" }]),
                onClick: I[11] || (I[11] = (se) => j("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "debug-workspace" }]),
                onClick: I[12] || (I[12] = (se) => j("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            I[36] || (I[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", xf, [
              I[34] || (I[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "export" }]),
                onClick: I[13] || (I[13] = (se) => j("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "import" }]),
                onClick: I[14] || (I[14] = (se) => j("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "remotes" }]),
                onClick: I[15] || (I[15] = (se) => j("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Sf, [
            _.value ? (o(), a("div", If, r(_.value), 1)) : !E.value && L.value === "status" ? (o(), a("div", Ef, " Loading status... ")) : (o(), a(H, { key: 2 }, [
              L.value === "status" ? (o(), b(Ma, {
                key: 0,
                status: E.value,
                onSwitchBranch: xe,
                onCommitChanges: I[16] || (I[16] = (se) => ue.value = !0),
                onSyncEnvironment: I[17] || (I[17] = (se) => ee.value = !0),
                onViewWorkflows: I[18] || (I[18] = (se) => j("workflows", "this-env")),
                onViewHistory: I[19] || (I[19] = (se) => j("history", "this-env")),
                onViewDebug: I[20] || (I[20] = (se) => j("debug-env", "this-env"))
              }, null, 8, ["status"])) : L.value === "workflows" ? (o(), b(yc, {
                key: 1,
                onRefresh: P
              })) : L.value === "models-env" ? (o(), b(kc, {
                key: 2,
                onNavigate: pe
              })) : L.value === "branches" ? (o(), b(Ga, {
                key: 3,
                branches: z.value,
                current: ((Se = E.value) == null ? void 0 : Se.branch) || null,
                onSwitch: Ne,
                onCreate: Fe
              }, null, 8, ["branches", "current"])) : L.value === "history" ? (o(), b(on, {
                key: 4,
                commits: C.value,
                onSelect: te,
                onCheckout: ye
              }, null, 8, ["commits"])) : L.value === "nodes" ? (o(), b(Ec, { key: 5 })) : L.value === "debug-env" ? (o(), b(Sd, { key: 6 })) : L.value === "environments" ? (o(), b(Od, {
                key: 7,
                onSwitch: Ye,
                onCreate: Kt,
                onDelete: qt,
                onViewDetails: Xt
              })) : L.value === "model-index" ? (o(), b($c, { key: 8 })) : L.value === "settings" ? (o(), b(_d, { key: 9 })) : L.value === "debug-workspace" ? (o(), b(Cd, { key: 10 })) : L.value === "export" ? (o(), b(qd, { key: 11 })) : L.value === "import" ? (o(), b(_m, { key: 12 })) : L.value === "remotes" ? (o(), b(ad, { key: 13 })) : u("", !0)
            ], 64))
          ])
        ]),
        B.value ? (o(), b(Am, {
          key: 0,
          commit: B.value,
          onClose: I[21] || (I[21] = (se) => B.value = null),
          onCheckout: ye,
          onCreateBranch: st
        }, null, 8, ["commit"])) : u("", !0),
        de.value ? (o(), b(Gm, {
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
          onCancel: I[22] || (I[22] = (se) => de.value = null),
          onSecondary: de.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        m(Fv, {
          show: V.value,
          "from-environment": ((Ie = Z.value) == null ? void 0 : Ie.name) || "unknown",
          "to-environment": R.value,
          onConfirm: Ft,
          onClose: Ht
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ue.value && E.value ? (o(), b(Bt, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: I[23] || (I[23] = (se) => ue.value = !1),
          onCommitted: Gt
        }, null, 8, ["status"])) : u("", !0),
        ee.value && E.value ? (o(), b(uf, {
          key: 3,
          show: ee.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: jt,
          onClose: I[24] || (I[24] = (se) => ee.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : u("", !0),
        m(tf, {
          show: M.value,
          state: T.value.state,
          progress: T.value.progress,
          message: T.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        N.value ? (o(), a("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: I[26] || (I[26] = fe((se) => N.value = !1, ["self"]))
        }, [
          e("div", zf, [
            e("div", Mf, [
              I[38] || (I[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: I[25] || (I[25] = (se) => N.value = !1)
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
            e("div", Lf, [
              I[39] || (I[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Nf, [
                (o(!0), a(H, null, Q(U.value, (se) => (o(), a("div", {
                  key: se.name,
                  class: J(["env-item", { current: se.is_current }])
                }, [
                  e("div", Rf, [
                    e("div", Uf, [
                      e("span", Tf, r(se.is_current ? "●" : "○"), 1),
                      e("span", Bf, r(se.name), 1),
                      se.current_branch ? (o(), a("span", Df, "(" + r(se.current_branch) + ")", 1)) : u("", !0),
                      se.is_current ? (o(), a("span", Of, "CURRENT")) : u("", !0)
                    ]),
                    e("div", Vf, r(se.workflow_count) + " workflows • " + r(se.node_count) + " nodes ", 1)
                  ]),
                  se.is_current ? u("", !0) : (o(), a("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (og) => Ye(se.name)
                  }, " SWITCH ", 8, Af))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        e("div", Ff, [
          m(Qt, { name: "toast" }, {
            default: n(() => [
              (o(!0), a(H, null, Q(Le.value, (se) => (o(), a("div", {
                key: se.id,
                class: J(["toast", se.type])
              }, [
                e("span", Wf, r(Y(se.type)), 1),
                e("span", Pf, r(se.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Gf = /* @__PURE__ */ q(Hf, [["__scopeId", "data-v-2c8b25b1"]]), jf = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Kf = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', qf = {
  comfy: jf,
  phosphor: Kf
}, bt = "comfy", Dt = "comfygit-theme";
let Pe = null, Ot = bt;
function Xf() {
  try {
    const t = localStorage.getItem(Dt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return bt;
}
function Vt(t = bt) {
  Pe && Pe.remove(), Pe = document.createElement("style"), Pe.id = "comfygit-theme-styles", Pe.setAttribute("data-theme", t), Pe.textContent = qf[t], document.head.appendChild(Pe), document.body.setAttribute("data-comfygit-theme", t), Ot = t;
  try {
    localStorage.setItem(Dt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Yf() {
  return Ot;
}
function Zf(t) {
  Vt(t);
}
const kt = document.createElement("link");
kt.rel = "stylesheet";
kt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(kt);
const Jf = Xf();
Vt(Jf);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Zf(t);
  },
  getTheme: () => {
    const t = Yf();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ee = null, _e = null, et = null;
const je = x(null);
async function pt() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const i = await window.app.api.fetchApi("/v2/comfygit/status");
    i.ok && (je.value = await i.json());
  } catch {
  }
}
function Qf() {
  if (!je.value) return !1;
  const t = je.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || je.value.has_changes;
}
function eg() {
  Ee && Ee.remove(), Ee = document.createElement("div"), Ee.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ee.appendChild(t), Ee.addEventListener("click", (l) => {
    l.target === Ee && ft();
  });
  const i = (l) => {
    l.key === "Escape" && (ft(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Mt({
    render: () => Lt(Gf, {
      onClose: ft,
      onStatusUpdate: (l) => {
        je.value = l, ct();
      }
    })
  }).mount(t), document.body.appendChild(Ee);
}
function ft() {
  Ee && (Ee.remove(), Ee = null);
}
function tg(t) {
  Je(), _e = document.createElement("div"), _e.className = "comfygit-commit-popover-container";
  const i = t.getBoundingClientRect();
  _e.style.position = "fixed", _e.style.top = `${i.bottom + 8}px`, _e.style.right = `${window.innerWidth - i.right}px`, _e.style.zIndex = "10001";
  const s = (g) => {
    _e && !_e.contains(g.target) && g.target !== t && (Je(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const l = (g) => {
    g.key === "Escape" && (Je(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), et = Mt({
    render: () => Lt(Bt, {
      status: je.value,
      onClose: Je,
      onCommitted: () => {
        Je(), pt().then(ct);
      }
    })
  }), et.mount(_e), document.body.appendChild(_e);
}
function Je() {
  et && (et.unmount(), et = null), _e && (_e.remove(), _e = null);
}
let Ue = null;
function ct() {
  if (!Ue) return;
  const t = Ue.querySelector(".commit-indicator");
  t && (t.style.display = Qf() ? "block" : "none");
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
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const i = document.createElement("button");
    i.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", i.textContent = "ComfyGit", i.title = "ComfyGit Control Panel", i.onclick = eg, Ue = document.createElement("button"), Ue.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ue.innerHTML = 'Commit <span class="commit-indicator"></span>', Ue.title = "Quick Commit", Ue.onclick = () => tg(Ue), t.appendChild(i), t.appendChild(Ue), (l = (s = mt.menu) == null ? void 0 : s.settingsGroup) != null && l.element && (mt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await pt(), ct(), setInterval(async () => {
      await pt(), ct();
    }, 3e4);
  }
});
