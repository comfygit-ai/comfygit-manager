import { app as Qe } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as n, openBlock as o, createCommentVNode as u, createElementVNode as e, renderSlot as le, createBlock as k, resolveDynamicComponent as $t, normalizeClass as Z, withCtx as a, toDisplayString as l, createVNode as m, createTextVNode as h, computed as O, Fragment as G, renderList as Q, normalizeStyle as Xe, ref as I, onMounted as we, watch as Ot, Teleport as Se, withModifiers as pe, Transition as oo, withKeys as Pe, onUnmounted as so, reactive as Ut, readonly as no, unref as re, resolveComponent as ao, createSlots as Bt, TransitionGroup as lo, createApp as Ct, h as xt } from "vue";
const io = { class: "panel-layout" }, ro = {
  key: 0,
  class: "panel-layout-header"
}, co = {
  key: 1,
  class: "panel-layout-search"
}, uo = { class: "panel-layout-content" }, mo = {
  key: 2,
  class: "panel-layout-footer"
}, vo = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (c, s) => (o(), n("div", io, [
      c.$slots.header ? (o(), n("div", ro, [
        le(c.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      c.$slots.search ? (o(), n("div", co, [
        le(c.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      e("div", uo, [
        le(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), n("div", mo, [
        le(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), J = (t, c) => {
  const s = t.__vccOpts || t;
  for (const [r, f] of c)
    s[r] = f;
  return s;
}, be = /* @__PURE__ */ J(vo, [["__scopeId", "data-v-21565df9"]]), fo = {
  key: 0,
  class: "panel-title-prefix"
}, go = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ho = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, s) => (o(), k($t(`h${t.level}`), {
      class: Z(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", fo, l(t.prefix), 1)) : (o(), n("span", go)),
        le(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), po = /* @__PURE__ */ J(ho, [["__scopeId", "data-v-c3875efc"]]), yo = ["title"], wo = ["width", "height"], bo = /* @__PURE__ */ q({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (r) => c.$emit("click"))
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
      ])], 8, wo))
    ], 8, yo));
  }
}), Pt = /* @__PURE__ */ J(bo, [["__scopeId", "data-v-6fc7f16d"]]), ko = { class: "header-left" }, _o = {
  key: 0,
  class: "header-actions"
}, $o = /* @__PURE__ */ q({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Z(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", ko, [
        m(po, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            h(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), k(Pt, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => c.$emit("info-click"))
        })) : u("", !0)
      ]),
      c.$slots.actions ? (o(), n("div", _o, [
        le(c.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ J($o, [["__scopeId", "data-v-55a62cd6"]]), Co = {
  key: 0,
  class: "section-title-count"
}, xo = {
  key: 1,
  class: "section-title-icon"
}, So = /* @__PURE__ */ q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), k($t(`h${t.level}`), {
      class: Z(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (r) => t.clickable && c.$emit("click"))
    }, {
      default: a(() => [
        le(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Co, "(" + l(t.count) + ")", 1)) : u("", !0),
        t.clickable ? (o(), n("span", xo, l(t.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ce = /* @__PURE__ */ J(So, [["__scopeId", "data-v-559361eb"]]), Io = { class: "status-grid" }, Eo = { class: "status-grid__column" }, zo = { class: "status-grid__title" }, Mo = { class: "status-grid__column status-grid__column--right" }, Lo = { class: "status-grid__title" }, To = /* @__PURE__ */ q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, s) => (o(), n("div", Io, [
      e("div", Eo, [
        e("h4", zo, l(t.leftTitle), 1),
        le(c.$slots, "left", {}, void 0, !0)
      ]),
      e("div", Mo, [
        e("h4", Lo, l(t.rightTitle), 1),
        le(c.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Ro = /* @__PURE__ */ J(To, [["__scopeId", "data-v-fe556068"]]), No = {
  key: 0,
  class: "status-item__icon"
}, Do = {
  key: 1,
  class: "status-item__count"
}, Oo = { class: "status-item__label" }, Uo = /* @__PURE__ */ q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, s = O(() => `status-item--${c.variant}`);
    return (r, f) => (o(), n("div", {
      class: Z(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", No, l(t.icon), 1)) : u("", !0),
      t.count !== void 0 ? (o(), n("span", Do, l(t.count), 1)) : u("", !0),
      e("span", Oo, l(t.label), 1)
    ], 2));
  }
}), Oe = /* @__PURE__ */ J(Uo, [["__scopeId", "data-v-6f929183"]]), Bo = { class: "issue-card__header" }, Po = { class: "issue-card__icon" }, Vo = { class: "issue-card__title" }, Ao = {
  key: 0,
  class: "issue-card__content"
}, Fo = {
  key: 0,
  class: "issue-card__description"
}, Wo = {
  key: 1,
  class: "issue-card__items"
}, Go = {
  key: 2,
  class: "issue-card__actions"
}, jo = /* @__PURE__ */ q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, s = O(() => `issue-card--${c.severity}`);
    return (r, f) => (o(), n("div", {
      class: Z(["issue-card", s.value])
    }, [
      e("div", Bo, [
        e("span", Po, l(t.icon), 1),
        e("h4", Vo, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), n("div", Ao, [
        t.description ? (o(), n("p", Fo, l(t.description), 1)) : u("", !0),
        le(r.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      t.items && t.items.length ? (o(), n("div", Wo, [
        (o(!0), n(G, null, Q(t.items, (y, g) => (o(), n("div", {
          key: g,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : u("", !0),
      r.$slots.actions ? (o(), n("div", Go, [
        le(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ J(jo, [["__scopeId", "data-v-df6aa348"]]), Ho = ["type", "disabled"], Ko = {
  key: 0,
  class: "spinner"
}, qo = /* @__PURE__ */ q({
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
    return (c, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: Z(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), n("span", Ko)) : u("", !0),
      t.loading ? u("", !0) : le(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ho));
  }
}), j = /* @__PURE__ */ J(qo, [["__scopeId", "data-v-772abe47"]]), Jo = { class: "empty-state" }, Xo = {
  key: 0,
  class: "empty-icon"
}, Yo = { class: "empty-message" }, Qo = /* @__PURE__ */ q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, s) => (o(), n("div", Jo, [
      t.icon ? (o(), n("div", Xo, l(t.icon), 1)) : u("", !0),
      e("p", Yo, l(t.message), 1),
      t.actionLabel ? (o(), k(j, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => c.$emit("action"))
      }, {
        default: a(() => [
          h(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Te = /* @__PURE__ */ J(Qo, [["__scopeId", "data-v-4466284f"]]), Zo = { class: "branch-indicator" }, es = { class: "branch-indicator__info" }, ts = { class: "branch-indicator__label" }, os = { class: "branch-indicator__name" }, ss = {
  key: 0,
  class: "branch-indicator__remote"
}, ns = {
  key: 0,
  class: "branch-indicator__status"
}, as = {
  key: 0,
  class: "branch-indicator__ahead"
}, ls = {
  key: 1,
  class: "branch-indicator__behind"
}, is = {
  key: 1,
  class: "branch-indicator__actions"
}, rs = /* @__PURE__ */ q({
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
    return (c, s) => (o(), n("div", Zo, [
      e("div", es, [
        e("span", ts, l(t.label), 1),
        e("span", os, l(t.branchName), 1),
        t.remote ? (o(), n("span", ss, "@" + l(t.remote), 1)) : u("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", ns, [
        t.commitsAhead ? (o(), n("span", as, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : u("", !0),
        t.commitsBehind ? (o(), n("span", ls, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : u("", !0)
      ])) : u("", !0),
      c.$slots.actions ? (o(), n("div", is, [
        le(c.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), ds = /* @__PURE__ */ J(rs, [["__scopeId", "data-v-cb8dd50e"]]), cs = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, s) => (o(), n("span", {
      class: Z(["detail-label"]),
      style: Xe({ minWidth: t.minWidth })
    }, [
      le(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), kt = /* @__PURE__ */ J(cs, [["__scopeId", "data-v-75e9eeb8"]]), us = /* @__PURE__ */ q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, s) => (o(), n("span", {
      class: Z(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      le(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _t = /* @__PURE__ */ J(us, [["__scopeId", "data-v-2f186e4c"]]), ms = { class: "detail-row" }, vs = /* @__PURE__ */ q({
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
    return (c, s) => (o(), n("div", ms, [
      m(kt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          h(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), k(_t, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          h(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : le(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), se = /* @__PURE__ */ J(vs, [["__scopeId", "data-v-ef15664a"]]), fs = { class: "modal-header" }, gs = { class: "modal-body" }, hs = { class: "status-section" }, ps = {
  key: 0,
  class: "status-section"
}, ys = { class: "section-header-row" }, ws = {
  key: 0,
  class: "workflow-group"
}, bs = { class: "workflow-group-header" }, ks = { class: "workflow-group-title" }, _s = { class: "workflow-list" }, $s = { class: "workflow-name" }, Cs = { class: "workflow-issue" }, xs = {
  key: 1,
  class: "workflow-group"
}, Ss = { class: "workflow-group-header" }, Is = { class: "workflow-group-title" }, Es = { class: "workflow-list" }, zs = { class: "workflow-name" }, Ms = { class: "workflow-issue" }, Ls = {
  key: 2,
  class: "workflow-group"
}, Ts = { class: "workflow-group-header" }, Rs = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Ds = { class: "workflow-name" }, Os = {
  key: 3,
  class: "workflow-group"
}, Us = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Ps = { class: "workflow-list" }, Vs = { class: "workflow-name" }, As = {
  key: 4,
  class: "workflow-group"
}, Fs = { class: "workflow-group-header" }, Ws = { class: "workflow-group-title" }, Gs = { class: "workflow-list" }, js = { class: "workflow-name" }, Hs = {
  key: 5,
  class: "workflow-group"
}, Ks = { class: "workflow-group-title" }, qs = { class: "expand-icon" }, Js = {
  key: 0,
  class: "workflow-list"
}, Xs = { class: "workflow-name" }, Ys = {
  key: 1,
  class: "status-section"
}, Qs = {
  key: 0,
  class: "change-group"
}, Zs = { class: "change-group-header" }, en = { class: "change-group-title" }, tn = { class: "change-list" }, on = { class: "node-name" }, sn = {
  key: 0,
  class: "dev-badge"
}, nn = {
  key: 1,
  class: "change-group"
}, an = { class: "change-group-header" }, ln = { class: "change-group-title" }, rn = { class: "change-list" }, dn = { class: "node-name" }, cn = {
  key: 0,
  class: "dev-badge"
}, un = {
  key: 2,
  class: "change-group"
}, mn = { class: "change-list" }, vn = { class: "change-item" }, fn = { class: "node-name" }, gn = {
  key: 3,
  class: "change-group"
}, hn = {
  key: 2,
  class: "status-section"
}, pn = {
  key: 0,
  class: "drift-item"
}, yn = { class: "drift-list" }, wn = {
  key: 0,
  class: "drift-list-more"
}, bn = {
  key: 1,
  class: "drift-item"
}, kn = { class: "drift-list" }, _n = {
  key: 0,
  class: "drift-list-more"
}, $n = {
  key: 2,
  class: "drift-item"
}, Cn = {
  key: 3,
  class: "drift-item"
}, xn = {
  key: 3,
  class: "status-section"
}, Sn = { class: "info-box" }, In = { class: "drift-list" }, En = {
  key: 0,
  class: "drift-list-more"
}, zn = {
  key: 4,
  class: "status-section"
}, Mn = { class: "warning-box" }, Ln = {
  key: 5,
  class: "empty-state-inline"
}, Tn = { class: "modal-actions" }, Rn = /* @__PURE__ */ q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows"],
  setup(t) {
    const c = t, s = I(!1);
    we(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), Ot(() => c.show, (_, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", _);
    }, { immediate: !0 });
    const r = O(() => {
      var _, C, N;
      return ((N = (C = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : N.filter(
        ($) => $.status === "broken" && $.sync_state === "synced"
      )) || [];
    }), f = O(() => {
      var _, C, N;
      return ((N = (C = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : N.filter(
        ($) => $.status === "broken" && $.sync_state !== "synced"
      )) || [];
    }), y = O(() => {
      var _, C, N;
      return ((N = (C = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : C.synced) == null ? void 0 : N.filter(($) => {
        var x, F, z;
        const b = (z = (F = (x = c.status) == null ? void 0 : x.workflows) == null ? void 0 : F.analyzed) == null ? void 0 : z.find((p) => p.name === $);
        return !b || b.status !== "broken";
      })) || [];
    }), g = O(() => {
      var _, C, N, $, b;
      return (_ = c.status) != null && _.workflows ? (((C = c.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((N = c.status.workflows.modified) == null ? void 0 : N.length) ?? 0) > 0 || ((($ = c.status.workflows.deleted) == null ? void 0 : $.length) ?? 0) > 0 || (((b = c.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), i = O(() => {
      var C, N, $;
      const _ = (C = c.status) == null ? void 0 : C.git_changes;
      return _ ? (((N = _.nodes_added) == null ? void 0 : N.length) ?? 0) > 0 || ((($ = _.nodes_removed) == null ? void 0 : $.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), d = O(() => {
      var _, C, N, $, b, x;
      return !g.value && !i.value && ((C = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : C.is_synced) && (((N = c.status) == null ? void 0 : N.missing_models_count) ?? 0) === 0 && (((x = (b = ($ = c.status) == null ? void 0 : $.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), v = O(() => {
      var C, N;
      const _ = (N = (C = c.status) == null ? void 0 : C.git_changes) == null ? void 0 : N.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function E(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function w(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, C) => {
      var N, $, b, x, F, z, p, S, M, V, T, D, U, K, B, R, X, H, fe, Ie, me, ve;
      return o(), k(Se, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[5] || (C[5] = (te) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[4] || (C[4] = pe(() => {
            }, ["stop"]))
          }, [
            e("div", fs, [
              C[6] || (C[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (te) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", gs, [
              e("div", hs, [
                m(Ce, { level: "4" }, {
                  default: a(() => [...C[7] || (C[7] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                m(se, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              g.value ? (o(), n("div", ps, [
                e("div", ys, [
                  m(Ce, { level: "4" }, {
                    default: a(() => [...C[8] || (C[8] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (te) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), n("div", ws, [
                  e("div", bs, [
                    C[9] || (C[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ks, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", _s, [
                    (o(!0), n(G, null, Q(r.value, (te) => (o(), n("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", $s, l(te.name), 1),
                      e("span", Cs, l(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                f.value.length ? (o(), n("div", xs, [
                  e("div", Ss, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Is, "BROKEN (UNCOMMITTED) (" + l(f.value.length) + ")", 1)
                  ]),
                  e("div", Es, [
                    (o(!0), n(G, null, Q(f.value, (te) => (o(), n("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", zs, l(te.name), 1),
                      e("span", Ms, l(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                ($ = (N = t.status.workflows) == null ? void 0 : N.new) != null && $.length ? (o(), n("div", Ls, [
                  e("div", Ts, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Rs, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), n(G, null, Q(t.status.workflows.new, (te) => (o(), n("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Ds, l(te), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (x = (b = t.status.workflows) == null ? void 0 : b.modified) != null && x.length ? (o(), n("div", Os, [
                  e("div", Us, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Bs, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ps, [
                    (o(!0), n(G, null, Q(t.status.workflows.modified, (te) => (o(), n("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, l(te), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (z = (F = t.status.workflows) == null ? void 0 : F.deleted) != null && z.length ? (o(), n("div", As, [
                  e("div", Fs, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Ws, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Gs, [
                    (o(!0), n(G, null, Q(t.status.workflows.deleted, (te) => (o(), n("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", js, l(te), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                y.value.length ? (o(), n("div", Hs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (te) => s.value = !s.value)
                  }, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Ks, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", qs, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Js, [
                    (o(!0), n(G, null, Q(y.value, (te) => (o(), n("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, l(te), 1)
                    ]))), 128))
                  ])) : u("", !0)
                ])) : u("", !0)
              ])) : u("", !0),
              i.value ? (o(), n("div", Ys, [
                m(Ce, { level: "4" }, {
                  default: a(() => [...C[15] || (C[15] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (S = (p = t.status.git_changes) == null ? void 0 : p.nodes_added) != null && S.length ? (o(), n("div", Qs, [
                  e("div", Zs, [
                    C[16] || (C[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", en, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", tn, [
                    (o(!0), n(G, null, Q(t.status.git_changes.nodes_added, (te) => (o(), n("div", {
                      key: E(te),
                      class: "change-item"
                    }, [
                      e("span", on, l(E(te)), 1),
                      w(te) ? (o(), n("span", sn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (V = (M = t.status.git_changes) == null ? void 0 : M.nodes_removed) != null && V.length ? (o(), n("div", nn, [
                  e("div", an, [
                    C[17] || (C[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ln, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", rn, [
                    (o(!0), n(G, null, Q(t.status.git_changes.nodes_removed, (te) => (o(), n("div", {
                      key: E(te),
                      class: "change-item"
                    }, [
                      e("span", dn, l(E(te)), 1),
                      w(te) ? (o(), n("span", cn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (T = t.status.git_changes) != null && T.workflow_changes ? (o(), n("div", un, [
                  C[18] || (C[18] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", mn, [
                    e("div", vn, [
                      e("span", fn, l(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : u("", !0),
                (D = t.status.git_changes) != null && D.has_other_changes ? (o(), n("div", gn, [...C[19] || (C[19] = [
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
              (U = t.status.comparison) != null && U.is_synced ? u("", !0) : (o(), n("div", hn, [
                m(Ce, { level: "4" }, {
                  default: a(() => [...C[20] || (C[20] = [
                    h("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                C[21] || (C[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (B = (K = t.status.comparison) == null ? void 0 : K.missing_nodes) != null && B.length ? (o(), n("div", pn, [
                  m(se, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", yn, [
                    (o(!0), n(G, null, Q(t.status.comparison.missing_nodes.slice(0, 10), (te) => (o(), n("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + l(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", wn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (X = (R = t.status.comparison) == null ? void 0 : R.extra_nodes) != null && X.length ? (o(), n("div", bn, [
                  m(se, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", kn, [
                    (o(!0), n(G, null, Q(t.status.comparison.extra_nodes.slice(0, 10), (te) => (o(), n("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + l(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", _n, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (fe = (H = t.status.comparison) == null ? void 0 : H.version_mismatches) != null && fe.length ? (o(), n("div", $n, [
                  m(se, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : u("", !0),
                (Ie = t.status.comparison) != null && Ie.packages_in_sync ? u("", !0) : (o(), n("div", Cn, [
                  m(se, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ve = (me = t.status.comparison) == null ? void 0 : me.disabled_nodes) != null && ve.length ? (o(), n("div", xn, [
                m(Ce, { level: "4" }, {
                  default: a(() => [...C[22] || (C[22] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Sn, [
                  C[23] || (C[23] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", In, [
                  (o(!0), n(G, null, Q(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (o(), n("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + l(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", En, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : u("", !0)
                ])
              ])) : u("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", zn, [
                m(Ce, { level: "4" }, {
                  default: a(() => [...C[24] || (C[24] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Mn, [
                  C[25] || (C[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[26] || (C[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : u("", !0),
              d.value ? (o(), n("div", Ln, [...C[27] || (C[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : u("", !0)
            ]),
            e("div", Tn, [
              m(j, {
                variant: "secondary",
                onClick: C[3] || (C[3] = (te) => _.$emit("close"))
              }, {
                default: a(() => [...C[28] || (C[28] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), Lt = /* @__PURE__ */ J(Rn, [["__scopeId", "data-v-cbde957e"]]), Nn = { class: "health-section-header" }, Dn = { style: { "margin-top": "var(--cg-space-1)" } }, On = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Un = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: c }) {
    const s = t, r = I(!1), f = I(!1);
    we(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Lt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function g() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function i() {
      r.value = !1, d("view-workflows");
    }
    const d = c, v = O(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), E = O(() => {
      const z = s.status.git_changes;
      return z.nodes_added.length > 0 || z.nodes_removed.length > 0 || z.workflow_changes || z.has_other_changes;
    }), w = O(() => v.value || E.value), _ = O(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), C = O(() => s.status.git_changes.has_other_changes), N = O(() => {
      var z;
      return ((z = s.status.workflows.analyzed) == null ? void 0 : z.filter(
        (p) => p.status === "broken" && p.sync_state === "synced"
      )) || [];
    }), $ = O(() => {
      var z;
      return ((z = s.status.workflows.analyzed) == null ? void 0 : z.filter(
        (p) => p.status === "broken" && p.sync_state !== "synced"
      )) || [];
    }), b = O(() => N.value.length > 0 || $.value.length > 0), x = O(() => b.value || s.status.missing_models_count > 0 || w.value || !s.status.comparison.is_synced), F = O(() => {
      const z = [];
      return s.status.workflows.new.length > 0 && z.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && z.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && z.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && z.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && z.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${z.length > 0 ? z.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (z, p) => (o(), n(G, null, [
      m(be, null, {
        header: a(() => [
          m(ke, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: p[0] || (p[0] = (S) => f.value = !0),
            onMouseleave: p[1] || (p[1] = (S) => f.value = !1)
          }, [
            e("div", Nn, [
              m(Ce, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...p[11] || (p[11] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              m(oo, { name: "fade" }, {
                default: a(() => [
                  f.value ? (o(), k(j, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...p[12] || (p[12] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : u("", !0)
                ]),
                _: 1
              })
            ]),
            m(Ro, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), k(Oe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.modified.length ? (o(), k(Oe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.deleted.length ? (o(), k(Oe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : u("", !0),
                m(Oe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: v.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), k(Oe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), k(Oe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.workflow_changes ? (o(), k(Oe, {
                  key: 2,
                  icon: "●",
                  count: _.value,
                  label: _.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : u("", !0),
                C.value ? (o(), k(Oe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : u("", !0),
                E.value ? u("", !0) : (o(), k(Oe, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", Dn, [
            m(ds, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                m(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: p[2] || (p[2] = (S) => z.$emit("switch-branch"))
                }, {
                  default: a(() => [...p[13] || (p[13] = [
                    h(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), k(qe, {
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
                onClick: p[3] || (p[3] = (S) => z.$emit("create-branch"))
              }, {
                default: a(() => [...p[14] || (p[14] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : u("", !0),
          x.value ? (o(), n("div", On, [
            m(Ce, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...p[15] || (p[15] = [
                h(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            N.value.length > 0 ? (o(), k(qe, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${N.value.length} committed workflow${N.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: N.value.map((S) => `${S.name} — ${S.issue_summary}`)
            }, {
              actions: a(() => [
                m(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[4] || (p[4] = (S) => z.$emit("view-workflows"))
                }, {
                  default: a(() => [...p[16] || (p[16] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            $.value.length > 0 ? (o(), k(qe, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${$.value.length} workflow${$.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: $.value.map((S) => `${S.name} — ${S.issue_summary}`)
            }, {
              actions: a(() => [
                m(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[5] || (p[5] = (S) => z.$emit("view-workflows"))
                }, {
                  default: a(() => [...p[17] || (p[17] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            t.status.missing_models_count > 0 && !b.value ? (o(), k(qe, {
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
                  onClick: p[6] || (p[6] = (S) => z.$emit("view-workflows"))
                }, {
                  default: a(() => [...p[18] || (p[18] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : u("", !0),
            w.value ? (o(), k(qe, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: F.value
            }, {
              actions: a(() => [
                m(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: g
                }, {
                  default: a(() => [...p[19] || (p[19] = [
                    h(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                m(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[7] || (p[7] = (S) => z.$emit("commit-changes"))
                }, {
                  default: a(() => [...p[20] || (p[20] = [
                    h(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : u("", !0),
            t.status.comparison.is_synced ? u("", !0) : (o(), k(qe, {
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
                  onClick: p[8] || (p[8] = (S) => z.$emit("view-debug"))
                }, {
                  default: a(() => [...p[21] || (p[21] = [
                    h(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                m(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[9] || (p[9] = (S) => z.$emit("sync-environment"))
                }, {
                  default: a(() => [...p[22] || (p[22] = [
                    h(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : u("", !0),
          !x.value && !E.value ? (o(), k(Te, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : u("", !0)
        ]),
        _: 1
      }),
      m(Lt, {
        show: r.value,
        status: t.status,
        onClose: p[10] || (p[10] = (S) => r.value = !1),
        onNavigateWorkflows: i
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Bn = /* @__PURE__ */ J(Un, [["__scopeId", "data-v-05737be6"]]), Pn = ["type", "value", "placeholder", "disabled"], Vn = /* @__PURE__ */ q({
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
  setup(t, { expose: c, emit: s }) {
    const r = t, f = s, y = I(null);
    function g(i) {
      const d = i.target.value;
      f("update:modelValue", d);
    }
    return we(() => {
      r.autoFocus && y.value && y.value.focus();
    }), c({
      focus: () => {
        var i;
        return (i = y.value) == null ? void 0 : i.focus();
      },
      blur: () => {
        var i;
        return (i = y.value) == null ? void 0 : i.blur();
      }
    }), (i, d) => (o(), n("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: Z(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: g,
      onKeyup: [
        d[0] || (d[0] = Pe((v) => i.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Pe((v) => i.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => i.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => i.$emit("blur"))
    }, null, 42, Pn));
  }
}), ut = /* @__PURE__ */ J(Vn, [["__scopeId", "data-v-0380d08f"]]), An = { class: "branch-create-form" }, Fn = { class: "form-actions" }, Wn = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const s = c, r = I(""), f = O(() => {
      const i = r.value.trim();
      return i.length > 0 && !i.startsWith("-") && !i.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(i);
    });
    function y() {
      f.value && (s("create", r.value.trim()), r.value = "");
    }
    function g() {
      r.value = "", s("cancel");
    }
    return (i, d) => (o(), n("div", An, [
      m(ut, {
        modelValue: r.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => r.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: g
      }, null, 8, ["modelValue"]),
      e("div", Fn, [
        m(j, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: y
        }, {
          default: a(() => [...d[1] || (d[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        m(j, {
          variant: "secondary",
          size: "sm",
          onClick: g
        }, {
          default: a(() => [...d[2] || (d[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Gn = /* @__PURE__ */ J(Wn, [["__scopeId", "data-v-7c500394"]]), jn = { class: "branch-list-item__indicator" }, Hn = { class: "branch-list-item__name" }, Kn = {
  key: 0,
  class: "branch-list-item__actions"
}, qn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Jn = /* @__PURE__ */ q({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Z(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (r) => t.clickable && c.$emit("click"))
    }, [
      e("span", jn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Hn, l(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), n("div", Kn, [
        le(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", qn, " current ")) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), Xn = /* @__PURE__ */ J(Jn, [["__scopeId", "data-v-c6581a24"]]), Yn = {
  key: 2,
  class: "branch-list"
}, Qn = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const s = c, r = I(!1);
    function f(g) {
      s("create", g), y();
    }
    function y() {
      r.value = !1;
    }
    return (g, i) => (o(), k(be, null, {
      header: a(() => [
        m(ke, { title: "BRANCHES" }, {
          actions: a(() => [
            m(j, {
              variant: "ghost",
              size: "sm",
              onClick: i[0] || (i[0] = (d) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...i[1] || (i[1] = [
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
        r.value ? (o(), k(Gn, {
          key: 0,
          onCreate: f,
          onCancel: y
        })) : u("", !0),
        t.branches.length === 0 ? (o(), k(Te, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Yn, [
          (o(!0), n(G, null, Q(t.branches, (d) => (o(), k(Xn, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: a(() => [
              d.is_current ? u("", !0) : (o(), k(j, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (v) => g.$emit("switch", d.name)
              }, {
                default: a(() => [...i[2] || (i[2] = [
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
}), Zn = /* @__PURE__ */ J(Qn, [["__scopeId", "data-v-763d6ec4"]]), ea = { class: "commit-list" }, ta = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (c, s) => (o(), n("div", ea, [
      le(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), oa = /* @__PURE__ */ J(ta, [["__scopeId", "data-v-8c5ee761"]]), sa = { class: "commit-hash" }, na = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, s = O(() => c.hash.slice(0, c.length));
    return (r, f) => (o(), n("span", sa, l(s.value), 1));
  }
}), Vt = /* @__PURE__ */ J(na, [["__scopeId", "data-v-7c333cc6"]]), aa = { class: "commit-message" }, la = { class: "commit-date" }, ia = /* @__PURE__ */ q({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const s = t, r = c;
    function f() {
      s.clickable && r("click");
    }
    return (y, g) => (o(), n("div", {
      class: Z(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      m(Vt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", aa, l(t.message), 1),
      e("span", la, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: g[0] || (g[0] = pe(() => {
        }, ["stop"]))
      }, [
        le(y.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), ra = /* @__PURE__ */ J(ia, [["__scopeId", "data-v-dd7c621b"]]), da = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, s) => (o(), k(be, null, {
      header: a(() => [
        m(ke, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), k(Te, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), k(oa, { key: 1 }, {
          default: a(() => [
            (o(!0), n(G, null, Q(t.commits, (r) => (o(), k(ra, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (f) => c.$emit("select", r)
            }, {
              actions: a(() => [
                m(j, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => c.$emit("checkout", r),
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
}), ca = /* @__PURE__ */ J(da, [["__scopeId", "data-v-981c3c64"]]), yh = [
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
], wh = {
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
}, ua = [
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
], bh = [
  ...ua,
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
function ft() {
  return !1;
}
function _e() {
  const t = I(!1), c = I(null);
  async function s(Y, oe) {
    var A;
    if (!((A = window.app) != null && A.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(Y, oe);
    if (!P.ok) {
      const ee = await P.json().catch(() => ({}));
      throw new Error(ee.error || ee.message || `Request failed: ${P.status}`);
    }
    return P.json();
  }
  async function r() {
    return s("/v2/comfygit/status");
  }
  async function f(Y, oe = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: oe })
    });
  }
  async function y(Y = 10, oe = 0) {
    return s(`/v2/comfygit/log?limit=${Y}&offset=${oe}`);
  }
  async function g(Y) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function i() {
    return s("/v2/comfygit/branches");
  }
  async function d(Y) {
    return s(`/v2/comfygit/commit/${Y}`);
  }
  async function v(Y, oe = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: oe })
    });
  }
  async function E(Y, oe = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: oe })
    });
  }
  async function w(Y, oe = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: oe })
    });
  }
  async function _() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Y = await r();
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
  async function C(Y) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: Y })
    });
  }
  async function N() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function $(Y, oe, P) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, pytorch_backend: oe, clone_from: P })
    });
  }
  async function b(Y) {
    return s(`/v2/workspace/environments/${Y}`, {
      method: "DELETE"
    });
  }
  async function x() {
    try {
      return s("/v2/comfygit/workflows");
    } catch {
      const Y = await r(), oe = [];
      return Y.workflows.new.forEach((P) => {
        oe.push({ name: P, status: "new", missing_nodes: 0, missing_models: 0, path: P });
      }), Y.workflows.modified.forEach((P) => {
        oe.push({ name: P, status: "modified", missing_nodes: 0, missing_models: 0, path: P });
      }), Y.workflows.synced.forEach((P) => {
        oe.push({ name: P, status: "synced", missing_nodes: 0, missing_models: 0, path: P });
      }), oe;
    }
  }
  async function F(Y) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/details`);
  }
  async function z(Y) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/resolve`, {
      method: "POST"
    });
  }
  async function p(Y, oe, P) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: oe, install_models: P })
    });
  }
  async function S(Y, oe, P) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: oe, importance: P })
    });
  }
  async function M() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function V() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function T(Y, oe) {
    return s(`/v2/workspace/models/${Y}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: oe })
    });
  }
  async function D(Y) {
    return s(`/v2/workspace/models/${Y}`, {
      method: "DELETE"
    });
  }
  async function U(Y) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function K() {
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
  async function B(Y) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function R(Y, oe) {
    try {
      const P = new URLSearchParams();
      return Y && P.append("level", Y), oe && P.append("lines", oe.toString()), s(`/v2/comfygit/debug/logs?${P}`);
    } catch {
      return [];
    }
  }
  async function X(Y, oe) {
    try {
      const P = new URLSearchParams();
      return Y && P.append("level", Y), oe && P.append("lines", oe.toString()), s(`/v2/workspace/debug/logs?${P}`);
    } catch {
      return [];
    }
  }
  async function H() {
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
  async function fe(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/install`, {
      method: "POST"
    });
  }
  async function Ie(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/update`, {
      method: "POST"
    });
  }
  async function me(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function ve() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function te(Y, oe) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, url: oe })
    });
  }
  async function Re(Y) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function ot(Y, oe, P) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: oe, push_url: P })
    });
  }
  async function ce(Y) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/fetch`, {
      method: "POST"
    });
  }
  async function xe(Y) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/status`);
    } catch {
      return null;
    }
  }
  async function st(Y = "skip", oe = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Y,
        remove_extra_nodes: oe
      })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: r,
    commit: f,
    getHistory: y,
    exportEnv: g,
    // Git Operations
    getBranches: i,
    getCommitDetail: d,
    checkout: v,
    createBranch: E,
    switchBranch: w,
    // Environment Management
    getEnvironments: _,
    switchEnvironment: C,
    getSwitchProgress: N,
    createEnvironment: $,
    deleteEnvironment: b,
    // Workflow Management
    getWorkflows: x,
    getWorkflowDetails: F,
    resolveWorkflow: z,
    installWorkflowDeps: p,
    setModelImportance: S,
    // Model Management
    getEnvironmentModels: M,
    getWorkspaceModels: V,
    updateModelSource: T,
    deleteModel: D,
    downloadModel: U,
    // Settings
    getConfig: K,
    updateConfig: B,
    // Debug/Logs
    getEnvironmentLogs: R,
    getWorkspaceLogs: X,
    // Node Management
    getNodes: H,
    installNode: fe,
    updateNode: Ie,
    uninstallNode: me,
    // Git Remotes
    getRemotes: ve,
    addRemote: te,
    removeRemote: Re,
    updateRemoteUrl: ot,
    fetchRemote: ce,
    getRemoteSyncStatus: xe,
    // Environment Sync
    syncEnvironmentManually: st
  };
}
const ma = { class: "base-modal-header" }, va = {
  key: 0,
  class: "base-modal-title"
}, fa = { class: "base-modal-body" }, ga = {
  key: 0,
  class: "base-modal-loading"
}, ha = {
  key: 1,
  class: "base-modal-error"
}, pa = {
  key: 0,
  class: "base-modal-footer"
}, ya = /* @__PURE__ */ q({
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
    const s = t, r = c;
    function f() {
      s.closeOnOverlayClick && r("close");
    }
    function y(g) {
      g.key === "Escape" && r("close");
    }
    return we(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), so(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (g, i) => (o(), k(Se, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: Z(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: i[1] || (i[1] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", ma, [
            le(g.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", va, l(t.title), 1)) : u("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: i[0] || (i[0] = (d) => g.$emit("close"))
            }, [...i[2] || (i[2] = [
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
          e("div", fa, [
            t.loading ? (o(), n("div", ga, "Loading...")) : t.error ? (o(), n("div", ha, l(t.error), 1)) : le(g.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          g.$slots.footer ? (o(), n("div", pa, [
            le(g.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), ht = /* @__PURE__ */ J(ya, [["__scopeId", "data-v-2125a0e6"]]), wa = ["type", "disabled"], ba = {
  key: 0,
  class: "spinner"
}, ka = /* @__PURE__ */ q({
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
    return (c, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: Z(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), n("span", ba)) : u("", !0),
      le(c.$slots, "default", {}, void 0, !0)
    ], 10, wa));
  }
}), ae = /* @__PURE__ */ J(ka, [["__scopeId", "data-v-f3452606"]]), _a = {
  key: 0,
  class: "base-title-count"
}, $a = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, s) => (o(), k($t(`h${t.level}`), {
      class: Z(["base-title", t.variant])
    }, {
      default: a(() => [
        le(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", _a, "(" + l(t.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), rt = /* @__PURE__ */ J($a, [["__scopeId", "data-v-5a01561d"]]), Ca = ["value", "disabled"], xa = {
  key: 0,
  value: "",
  disabled: ""
}, Sa = ["value"], Ia = {
  key: 0,
  class: "base-select-error"
}, Ea = /* @__PURE__ */ q({
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
    function s(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, f) => (o(), n("div", {
      class: Z(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: Z(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (y) => r.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", xa, l(t.placeholder), 1)) : u("", !0),
        (o(!0), n(G, null, Q(t.options, (y) => (o(), n("option", {
          key: c(y),
          value: c(y)
        }, l(s(y)), 9, Sa))), 128))
      ], 42, Ca),
      t.error ? (o(), n("span", Ia, l(t.error), 1)) : u("", !0)
    ], 2));
  }
}), za = /* @__PURE__ */ J(Ea, [["__scopeId", "data-v-7436d745"]]), Ma = { class: "popover-header" }, La = { class: "popover-title" }, Ta = { class: "popover-content" }, Ra = {
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
    return (c, s) => (o(), k(Se, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Xe({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Ma, [
            e("h4", La, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Ta, [
            le(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), n("div", Ra, [
            le(c.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), Ve = /* @__PURE__ */ J(Na, [["__scopeId", "data-v-42815ace"]]), Da = { class: "detail-section" }, Oa = {
  key: 0,
  class: "empty-message"
}, Ua = { class: "model-header" }, Ba = { class: "model-name" }, Pa = { class: "model-details" }, Va = { class: "model-row" }, Aa = { class: "model-row" }, Fa = { class: "label" }, Wa = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ga = { class: "node-list" }, ja = ["onClick"], Ha = {
  key: 1,
  class: "model-row"
}, Ka = { class: "value" }, qa = {
  key: 0,
  class: "model-actions"
}, Ja = { class: "detail-section" }, Xa = {
  key: 0,
  class: "empty-message"
}, Ya = { class: "node-name" }, Qa = {
  key: 0,
  class: "node-version"
}, Za = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: c }) {
    const s = t, r = c, { getWorkflowDetails: f, setModelImportance: y, installWorkflowDeps: g } = _e(), i = I(null), d = I(!1), v = I(null), E = I(!1), w = I({}), _ = I({}), C = I(!1), N = I(/* @__PURE__ */ new Set()), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function b(D) {
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
    function x(D) {
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
    function F(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const U = D.hash || D.filename;
      return N.value.has(U) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function z(D) {
      return N.value.has(D);
    }
    function p(D) {
      N.value.has(D) ? N.value.delete(D) : N.value.add(D), N.value = new Set(N.value);
    }
    async function S() {
      d.value = !0, v.value = null;
      try {
        i.value = await f(s.workflowName);
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function M(D, U) {
      w.value[D] = U, E.value = !0;
    }
    async function V() {
      if (!E.value) {
        r("close");
        return;
      }
      d.value = !0, v.value = null;
      try {
        for (const [D, U] of Object.entries(w.value))
          await y(s.workflowName, D, U);
        r("close");
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    async function T(D) {
      _.value[D] = !0, v.value = null;
      try {
        await g(s.workflowName, !0, !1), await S();
      } catch (U) {
        v.value = U instanceof Error ? U.message : "Failed to install node";
      } finally {
        _.value[D] = !1;
      }
    }
    return we(S), (D, U) => (o(), n(G, null, [
      m(ht, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: v.value || void 0,
        onClose: U[5] || (U[5] = (K) => r("close"))
      }, {
        body: a(() => [
          i.value ? (o(), n(G, { key: 0 }, [
            e("section", Da, [
              m(rt, { variant: "section" }, {
                default: a(() => [
                  h("MODELS USED (" + l(i.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              i.value.models.length === 0 ? (o(), n("div", Oa, " No models used in this workflow ")) : u("", !0),
              (o(!0), n(G, null, Q(i.value.models, (K) => (o(), n("div", {
                key: K.hash,
                class: "model-card"
              }, [
                e("div", Ua, [
                  U[7] || (U[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Ba, l(K.filename), 1)
                ]),
                e("div", Pa, [
                  e("div", Va, [
                    U[8] || (U[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: Z(["value", b(K.status)])
                    }, l(x(K.status)), 3)
                  ]),
                  e("div", Aa, [
                    e("span", Fa, [
                      U[9] || (U[9] = h(" Importance: ", -1)),
                      m(Pt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: U[0] || (U[0] = (B) => C.value = !0)
                      })
                    ]),
                    m(za, {
                      "model-value": w.value[K.hash] || K.importance,
                      options: $,
                      "onUpdate:modelValue": (B) => M(K.hash, B)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  K.loaded_by && K.loaded_by.length > 0 ? (o(), n("div", Wa, [
                    U[10] || (U[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ga, [
                      (o(!0), n(G, null, Q(F(K), (B, R) => (o(), n("div", {
                        key: `${B.node_id}-${R}`,
                        class: "node-reference"
                      }, l(B.node_type) + " (Node #" + l(B.node_id) + ") ", 1))), 128)),
                      K.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (B) => p(K.hash || K.filename)
                      }, l(z(K.hash || K.filename) ? "▼ Show less" : `▶ View all (${K.loaded_by.length})`), 9, ja)) : u("", !0)
                    ])
                  ])) : u("", !0),
                  K.size_mb ? (o(), n("div", Ha, [
                    U[11] || (U[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Ka, l(K.size_mb) + " MB", 1)
                  ])) : u("", !0)
                ]),
                K.status !== "available" ? (o(), n("div", qa, [
                  K.status === "downloadable" ? (o(), k(ae, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: U[1] || (U[1] = (B) => r("resolve"))
                  }, {
                    default: a(() => [...U[12] || (U[12] = [
                      h(" Download ", -1)
                    ])]),
                    _: 1
                  })) : K.status === "path_mismatch" ? (o(), k(ae, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: U[2] || (U[2] = (B) => r("resolve"))
                  }, {
                    default: a(() => [...U[13] || (U[13] = [
                      h(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), k(ae, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: U[3] || (U[3] = (B) => r("resolve"))
                  }, {
                    default: a(() => [...U[14] || (U[14] = [
                      h(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : u("", !0)
              ]))), 128))
            ]),
            e("section", Ja, [
              m(rt, { variant: "section" }, {
                default: a(() => [
                  h("NODES USED (" + l(i.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              i.value.nodes.length === 0 ? (o(), n("div", Xa, " No custom nodes used in this workflow ")) : u("", !0),
              (o(!0), n(G, null, Q(i.value.nodes, (K) => (o(), n("div", {
                key: K.name,
                class: "node-item"
              }, [
                e("span", {
                  class: Z(["node-status", K.status === "installed" ? "installed" : "missing"])
                }, l(K.status === "installed" ? "✓" : "✕"), 3),
                e("span", Ya, l(K.name), 1),
                K.version ? (o(), n("span", Qa, "v" + l(K.version), 1)) : u("", !0),
                K.status === "missing" ? (o(), k(ae, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: _.value[K.name],
                  onClick: (B) => T(K.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...U[15] || (U[15] = [
                    h(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : u("", !0)
              ]))), 128))
            ])
          ], 64)) : u("", !0)
        ]),
        footer: a(() => [
          m(ae, {
            variant: "secondary",
            onClick: U[4] || (U[4] = (K) => r("close"))
          }, {
            default: a(() => [...U[16] || (U[16] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          E.value ? (o(), k(ae, {
            key: 0,
            variant: "primary",
            onClick: V
          }, {
            default: a(() => [...U[17] || (U[17] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      m(Ve, {
        show: C.value,
        title: "Model Importance Levels",
        onClose: U[6] || (U[6] = (K) => C.value = !1)
      }, {
        content: a(() => [...U[18] || (U[18] = [
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
}), el = /* @__PURE__ */ J(Za, [["__scopeId", "data-v-1325d542"]]), de = Ut({
  items: [],
  status: "idle"
});
let Ne = null;
function At() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function yt(t) {
  return de.items.find((c) => c.id === t);
}
async function Ye() {
  if (de.status === "downloading") return;
  const t = de.items.find((c) => c.status === "queued");
  if (!t) {
    de.status = "idle";
    return;
  }
  de.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await tl(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    de.status = "idle", Ye();
  }
}
async function tl(t) {
  return new Promise((c, s) => {
    Ne && (Ne.close(), Ne = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ne = f;
    let y = Date.now(), g = 0;
    f.onmessage = (i) => {
      try {
        const d = JSON.parse(i.data);
        switch (d.type) {
          case "progress":
            t.downloaded = d.downloaded || 0, t.size = d.total || t.size;
            const v = Date.now(), E = (v - y) / 1e3;
            if (E > 0.5) {
              const w = t.downloaded - g;
              if (t.speed = w / E, y = v, g = t.downloaded, t.speed > 0 && t.size > 0) {
                const _ = t.size - t.downloaded;
                t.eta = _ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            f.close(), Ne = null, c();
            break;
          case "error":
            f.close(), Ne = null, s(new Error(d.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Ne = null, s(new Error("Connection lost"));
    };
  });
}
async function ol() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const s of c.pending_downloads) {
      if (de.items.some((f) => f.url === s.url && f.filename === s.filename))
        continue;
      const r = {
        id: At(),
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
      de.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function St() {
  function t(b) {
    for (const x of b) {
      const F = {
        id: At(),
        workflow: x.workflow,
        filename: x.filename,
        url: x.url,
        targetPath: x.targetPath,
        size: x.size || 0,
        type: x.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      de.items.push(F);
    }
    de.status === "idle" && Ye();
  }
  async function c(b) {
    const x = yt(b);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ne && (Ne.close(), Ne = null), x.status = "failed", x.error = "Cancelled by user", de.status = "idle", Ye();
      } else if (x.status === "queued") {
        const F = de.items.findIndex((z) => z.id === b);
        F >= 0 && de.items.splice(F, 1);
      }
    }
  }
  function s(b) {
    const x = yt(b);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, de.status === "idle" && Ye());
  }
  function r(b) {
    const x = yt(b);
    !x || x.status !== "paused" || (x.status = "queued", de.status === "idle" && Ye());
  }
  function f() {
    const b = de.items.filter((x) => x.status === "paused");
    for (const x of b)
      x.status = "queued";
    de.status === "idle" && Ye();
  }
  function y(b) {
    const x = de.items.findIndex((F) => F.id === b);
    x >= 0 && (de.items[x].status === "completed" || de.items[x].status === "failed") && de.items.splice(x, 1);
  }
  function g() {
    de.items = de.items.filter((b) => b.status !== "completed");
  }
  function i() {
    de.items = de.items.filter((b) => b.status !== "failed");
  }
  const d = O(
    () => de.items.find((b) => b.status === "downloading")
  ), v = O(
    () => de.items.filter((b) => b.status === "queued")
  ), E = O(
    () => de.items.filter((b) => b.status === "completed")
  ), w = O(
    () => de.items.filter((b) => b.status === "failed")
  ), _ = O(
    () => de.items.filter((b) => b.status === "paused")
  ), C = O(() => de.items.length > 0), N = O(
    () => de.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), $ = O(
    () => de.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: no(de),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: E,
    failedItems: w,
    pausedItems: _,
    hasItems: C,
    activeCount: N,
    hasPaused: $,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: s,
    resumeDownload: r,
    resumeAllPaused: f,
    removeItem: y,
    clearCompleted: g,
    clearFailed: i,
    loadPendingDownloads: ol
  };
}
function sl() {
  const t = I(null), c = I(null), s = I([]), r = I([]), f = I(!1), y = I(null);
  async function g(b, x) {
    var z;
    if (!((z = window.app) != null && z.api))
      throw new Error("ComfyUI API not available");
    const F = await window.app.api.fetchApi(b, x);
    if (!F.ok) {
      const p = await F.json().catch(() => ({})), S = p.error || p.message || `Request failed: ${F.status}`;
      throw new Error(S);
    }
    return F.json();
  }
  async function i(b) {
    f.value = !0, y.value = null;
    try {
      let x;
      return ft() || (x = await g(
        `/v2/comfygit/workflow/${b}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = x, x;
    } catch (x) {
      const F = x instanceof Error ? x.message : "Unknown error occurred";
      throw y.value = F, x;
    } finally {
      f.value = !1;
    }
  }
  async function d(b, x, F) {
    f.value = !0, y.value = null;
    try {
      let z;
      if (!ft()) {
        const p = Object.fromEntries(x), S = Object.fromEntries(F);
        z = await g(
          `/v2/comfygit/workflow/${b}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: p,
              model_choices: S
            })
          }
        );
      }
      return c.value = z, z;
    } catch (z) {
      const p = z instanceof Error ? z.message : "Unknown error occurred";
      throw y.value = p, z;
    } finally {
      f.value = !1;
    }
  }
  async function v(b, x = 10) {
    f.value = !0, y.value = null;
    try {
      let F;
      return ft() || (F = await g(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: b, limit: x })
        }
      )), s.value = F.results, F.results;
    } catch (F) {
      const z = F instanceof Error ? F.message : "Unknown error occurred";
      throw y.value = z, F;
    } finally {
      f.value = !1;
    }
  }
  async function E(b, x = 10) {
    f.value = !0, y.value = null;
    try {
      let F;
      return ft() || (F = await g(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: b, limit: x })
        }
      )), r.value = F.results, F.results;
    } catch (F) {
      const z = F instanceof Error ? F.message : "Unknown error occurred";
      throw y.value = z, F;
    } finally {
      f.value = !1;
    }
  }
  const w = Ut({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function _() {
    w.phase = "idle", w.currentFile = void 0, w.currentFileIndex = void 0, w.totalFiles = void 0, w.bytesDownloaded = void 0, w.bytesTotal = void 0, w.completedFiles = [], w.nodesToInstall = [], w.error = void 0;
  }
  async function C(b, x, F) {
    _(), w.phase = "resolving", y.value = null;
    const z = Object.fromEntries(x), p = Object.fromEntries(F);
    try {
      const S = await fetch(`/v2/comfygit/workflow/${b}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: z,
          model_choices: p
        })
      });
      if (!S.ok)
        throw new Error(`Request failed: ${S.status}`);
      if (!S.body)
        throw new Error("No response body");
      const M = S.body.getReader(), V = new TextDecoder();
      let T = "";
      for (; ; ) {
        const { done: D, value: U } = await M.read();
        if (D) break;
        T += V.decode(U, { stream: !0 });
        const K = T.split(`

`);
        T = K.pop() || "";
        for (const B of K) {
          if (!B.trim()) continue;
          const R = B.split(`
`);
          let X = "", H = "";
          for (const fe of R)
            fe.startsWith("event: ") ? X = fe.slice(7) : fe.startsWith("data: ") && (H = fe.slice(6));
          if (H)
            try {
              const fe = JSON.parse(H);
              N(X, fe);
            } catch (fe) {
              console.warn("Failed to parse SSE event:", fe);
            }
        }
      }
    } catch (S) {
      const M = S instanceof Error ? S.message : "Unknown error occurred";
      throw y.value = M, w.error = M, w.phase = "error", S;
    }
  }
  function N(b, x) {
    switch (b) {
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
        w.error = x.message, w.phase = "error", y.value = x.message;
        break;
    }
  }
  function $(b, x) {
    const { addToQueue: F } = St(), z = x.filter((p) => p.url && p.target_path).map((p) => ({
      workflow: b,
      filename: p.filename,
      url: p.url,
      targetPath: p.target_path,
      size: p.size || 0,
      type: "model"
    }));
    return z.length > 0 && F(z), z.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: s,
    modelSearchResults: r,
    isLoading: f,
    error: y,
    progress: w,
    // Methods
    analyzeWorkflow: i,
    applyResolution: d,
    applyResolutionWithProgress: C,
    searchNodes: v,
    searchModels: E,
    resetProgress: _,
    queueModelDownloads: $
  };
}
const nl = { class: "resolution-stepper" }, al = { class: "stepper-header" }, ll = ["onClick"], il = {
  key: 0,
  class: "step-icon"
}, rl = {
  key: 1,
  class: "step-number"
}, dl = { class: "step-label" }, cl = {
  key: 0,
  class: "step-connector"
}, ul = { class: "stepper-content" }, ml = /* @__PURE__ */ q({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: c }) {
    const s = t, r = c;
    function f(v) {
      var E;
      if ((E = s.stepStats) != null && E[v]) {
        const w = s.stepStats[v];
        return w.total > 0 && w.resolved === w.total;
      }
      return s.completedSteps.includes(v);
    }
    function y(v) {
      var E;
      if ((E = s.stepStats) != null && E[v]) {
        const w = s.stepStats[v];
        return w.resolved > 0 && w.resolved < w.total;
      }
      return !1;
    }
    function g(v) {
      return f(v) ? "state-complete" : y(v) ? "state-partial" : "state-pending";
    }
    function i(v) {
      return !1;
    }
    function d(v) {
      r("step-change", v);
    }
    return (v, E) => (o(), n("div", nl, [
      e("div", al, [
        (o(!0), n(G, null, Q(t.steps, (w, _) => (o(), n("div", {
          key: w.id,
          class: Z(["step", {
            active: t.currentStep === w.id,
            completed: f(w.id),
            "in-progress": y(w.id),
            disabled: i(w.id)
          }]),
          onClick: (C) => d(w.id)
        }, [
          e("div", {
            class: Z(["step-indicator", g(w.id)])
          }, [
            f(w.id) ? (o(), n("span", il, "✓")) : (o(), n("span", rl, l(_ + 1), 1))
          ], 2),
          e("div", dl, l(w.label), 1),
          _ < t.steps.length - 1 ? (o(), n("div", cl)) : u("", !0)
        ], 10, ll))), 128))
      ]),
      e("div", ul, [
        le(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), vl = /* @__PURE__ */ J(ml, [["__scopeId", "data-v-2a7b3af8"]]), fl = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, s = O(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), r = O(() => `confidence-${s.value}`), f = O(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (y, g) => (o(), n("span", {
      class: Z(["confidence-badge", r.value, t.size])
    }, l(f.value), 3));
  }
}), It = /* @__PURE__ */ J(fl, [["__scopeId", "data-v-17ec4b80"]]), gl = { class: "item-body" }, hl = {
  key: 0,
  class: "resolved-state"
}, pl = {
  key: 1,
  class: "multiple-options"
}, yl = { class: "options-list" }, wl = ["onClick"], bl = ["name", "value", "checked", "onChange"], kl = { class: "option-content" }, _l = { class: "option-header" }, $l = { class: "option-package-id" }, Cl = {
  key: 0,
  class: "option-title"
}, xl = { class: "option-meta" }, Sl = {
  key: 0,
  class: "installed-badge"
}, Il = { class: "action-buttons" }, El = {
  key: 2,
  class: "unresolved"
}, zl = { class: "action-buttons" }, Ml = /* @__PURE__ */ q({
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
  setup(t, { emit: c }) {
    const s = t, r = c, f = O(() => !!s.choice);
    O(() => {
      var g;
      return (g = s.choice) == null ? void 0 : g.action;
    }), O(() => {
      var g;
      return (g = s.choice) == null ? void 0 : g.package_id;
    });
    function y(g) {
      r("option-selected", g);
    }
    return (g, i) => (o(), n("div", {
      class: Z(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: f.value }])
    }, [
      e("div", gl, [
        f.value ? (o(), n("div", hl, [
          m(ae, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (d) => r("clear-choice"))
          }, {
            default: a(() => [...i[7] || (i[7] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", pl, [
          i[11] || (i[11] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", yl, [
            (o(!0), n(G, null, Q(t.options, (d, v) => (o(), n("label", {
              key: d.package_id,
              class: Z(["option-card", { selected: t.selectedOptionIndex === v }]),
              onClick: (E) => y(v)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: v,
                checked: t.selectedOptionIndex === v,
                onChange: (E) => y(v)
              }, null, 40, bl),
              e("div", kl, [
                e("div", _l, [
                  e("span", $l, l(d.package_id), 1),
                  m(It, {
                    confidence: d.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                d.title && d.title !== d.package_id ? (o(), n("div", Cl, l(d.title), 1)) : u("", !0),
                e("div", xl, [
                  d.is_installed ? (o(), n("span", Sl, "Already Installed")) : u("", !0)
                ])
              ])
            ], 10, wl))), 128))
          ]),
          e("div", Il, [
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: i[1] || (i[1] = (d) => r("search"))
            }, {
              default: a(() => [...i[8] || (i[8] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: i[2] || (i[2] = (d) => r("manual-entry"))
            }, {
              default: a(() => [...i[9] || (i[9] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: i[3] || (i[3] = (d) => r("mark-optional"))
            }, {
              default: a(() => [...i[10] || (i[10] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", El, [
          i[15] || (i[15] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", zl, [
            m(ae, {
              variant: "primary",
              size: "sm",
              onClick: i[4] || (i[4] = (d) => r("search"))
            }, {
              default: a(() => [...i[12] || (i[12] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: i[5] || (i[5] = (d) => r("manual-entry"))
            }, {
              default: a(() => [...i[13] || (i[13] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: i[6] || (i[6] = (d) => r("mark-optional"))
            }, {
              default: a(() => [...i[14] || (i[14] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ll = /* @__PURE__ */ J(Ml, [["__scopeId", "data-v-dbefa408"]]), Tl = { class: "item-navigator" }, Rl = { class: "nav-item-info" }, Nl = { class: "item-name" }, Dl = { class: "nav-controls" }, Ol = { class: "nav-arrows" }, Ul = ["disabled"], Bl = ["disabled"], Pl = { class: "nav-position" }, Vl = /* @__PURE__ */ q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    status: {},
    currentIndex: {},
    totalItems: {},
    statusLabelOverride: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const s = t, r = c, f = O(() => {
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
    }), y = O(() => {
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
    return (g, i) => (o(), n("div", Tl, [
      e("div", Rl, [
        e("code", Nl, l(t.itemName), 1),
        e("span", {
          class: Z(["status-badge", y.value])
        }, l(f.value), 3)
      ]),
      e("div", Dl, [
        e("div", Ol, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: i[0] || (i[0] = (d) => r("prev")),
            title: "Previous item"
          }, " ← ", 8, Ul),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: i[1] || (i[1] = (d) => r("next")),
            title: "Next item"
          }, " → ", 8, Bl)
        ]),
        e("span", Pl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), Ft = /* @__PURE__ */ J(Vl, [["__scopeId", "data-v-4cda6265"]]), Al = ["type", "value", "placeholder", "disabled"], Fl = {
  key: 0,
  class: "base-input-error"
}, Wl = /* @__PURE__ */ q({
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
    return (c, s) => (o(), n("div", {
      class: Z(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: Z(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          s[1] || (s[1] = Pe((r) => c.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Pe((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Al),
      t.error ? (o(), n("span", Fl, l(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Ge = /* @__PURE__ */ J(Wl, [["__scopeId", "data-v-9ba02cdc"]]), Gl = { class: "node-resolution-step" }, jl = { class: "step-header" }, Hl = { class: "stat-badge" }, Kl = {
  key: 1,
  class: "step-body"
}, ql = {
  key: 2,
  class: "empty-state"
}, Jl = { class: "node-search-modal" }, Xl = { class: "node-modal-body" }, Yl = {
  key: 0,
  class: "node-search-results"
}, Ql = ["onClick"], Zl = { class: "node-result-header" }, ei = { class: "node-result-package-id" }, ti = {
  key: 0,
  class: "node-result-description"
}, oi = {
  key: 1,
  class: "node-no-results"
}, si = {
  key: 2,
  class: "node-searching"
}, ni = { class: "node-manual-entry-modal" }, ai = { class: "node-modal-body" }, li = { class: "node-modal-actions" }, ii = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: c }) {
    const s = t, r = c, f = I(0), y = I(!1), g = I(!1), i = I(""), d = I(""), v = I([]), E = I(!1), w = O(() => s.nodes[f.value]), _ = O(() => s.nodes.filter((K) => s.nodeChoices.has(K.node_type)).length), C = O(() => {
      var B;
      if (!w.value) return "not-found";
      const K = s.nodeChoices.get(w.value.node_type);
      if (K)
        switch (K.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (B = w.value.options) != null && B.length ? "ambiguous" : "not-found";
    }), N = O(() => {
      var B;
      if (!w.value) return;
      const K = s.nodeChoices.get(w.value.node_type);
      if (K)
        switch (K.action) {
          case "install":
            return K.package_id ? `→ ${K.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (B = w.value.options) != null && B.length ? `${w.value.options.length} matches` : "Not Found";
    });
    function $(K) {
      K >= 0 && K < s.nodes.length && (f.value = K);
    }
    function b() {
      w.value && r("mark-optional", w.value.node_type);
    }
    function x() {
      w.value && r("skip", w.value.node_type);
    }
    function F(K) {
      w.value && r("option-selected", w.value.node_type, K);
    }
    function z() {
      w.value && r("clear-choice", w.value.node_type);
    }
    function p() {
      w.value && (i.value = w.value.node_type, y.value = !0);
    }
    function S() {
      d.value = "", g.value = !0;
    }
    function M() {
      y.value = !1, i.value = "", v.value = [];
    }
    function V() {
      g.value = !1, d.value = "";
    }
    function T() {
      E.value = !0, setTimeout(() => {
        E.value = !1;
      }, 300);
    }
    function D(K) {
      w.value && (r("manual-entry", w.value.node_type, K.package_id), M());
    }
    function U() {
      !w.value || !d.value.trim() || (r("manual-entry", w.value.node_type, d.value.trim()), V());
    }
    return (K, B) => {
      var R, X;
      return o(), n("div", Gl, [
        e("div", jl, [
          B[4] || (B[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Hl, l(_.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        w.value ? (o(), k(Ft, {
          key: 0,
          "item-name": w.value.node_type,
          status: C.value,
          "status-label-override": N.value,
          "current-index": f.value,
          "total-items": t.nodes.length,
          onPrev: B[0] || (B[0] = (H) => $(f.value - 1)),
          onNext: B[1] || (B[1] = (H) => $(f.value + 1))
        }, null, 8, ["item-name", "status", "status-label-override", "current-index", "total-items"])) : u("", !0),
        w.value ? (o(), n("div", Kl, [
          m(Ll, {
            "node-type": w.value.node_type,
            "has-multiple-options": !!((R = w.value.options) != null && R.length),
            options: w.value.options,
            choice: (X = t.nodeChoices) == null ? void 0 : X.get(w.value.node_type),
            onMarkOptional: b,
            onSkip: x,
            onManualEntry: S,
            onSearch: p,
            onOptionSelected: F,
            onClearChoice: z
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice"])
        ])) : (o(), n("div", ql, [...B[5] || (B[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), k(Se, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pe(M, ["self"])
          }, [
            e("div", Jl, [
              e("div", { class: "node-modal-header" }, [
                B[6] || (B[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", Xl, [
                m(Ge, {
                  modelValue: i.value,
                  "onUpdate:modelValue": B[2] || (B[2] = (H) => i.value = H),
                  placeholder: "Search by node type, package name...",
                  onInput: T
                }, null, 8, ["modelValue"]),
                v.value.length > 0 ? (o(), n("div", Yl, [
                  (o(!0), n(G, null, Q(v.value, (H) => (o(), n("div", {
                    key: H.package_id,
                    class: "node-search-result-item",
                    onClick: (fe) => D(H)
                  }, [
                    e("div", Zl, [
                      e("code", ei, l(H.package_id), 1),
                      H.match_confidence ? (o(), k(It, {
                        key: 0,
                        confidence: H.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : u("", !0)
                    ]),
                    H.description ? (o(), n("div", ti, l(H.description), 1)) : u("", !0)
                  ], 8, Ql))), 128))
                ])) : i.value && !E.value ? (o(), n("div", oi, ' No packages found matching "' + l(i.value) + '" ', 1)) : u("", !0),
                E.value ? (o(), n("div", si, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), k(Se, { to: "body" }, [
          g.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pe(V, ["self"])
          }, [
            e("div", ni, [
              e("div", { class: "node-modal-header" }, [
                B[7] || (B[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", ai, [
                m(Ge, {
                  modelValue: d.value,
                  "onUpdate:modelValue": B[3] || (B[3] = (H) => d.value = H),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", li, [
                  m(ae, {
                    variant: "secondary",
                    onClick: V
                  }, {
                    default: a(() => [...B[8] || (B[8] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(ae, {
                    variant: "primary",
                    disabled: !d.value.trim(),
                    onClick: U
                  }, {
                    default: a(() => [...B[9] || (B[9] = [
                      h(" Add Package ", -1)
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
}), ri = /* @__PURE__ */ J(ii, [["__scopeId", "data-v-dd0cf680"]]), di = { class: "node-info" }, ci = { class: "item-body" }, ui = {
  key: 0,
  class: "resolved-state"
}, mi = {
  key: 1,
  class: "multiple-options"
}, vi = { class: "options-list" }, fi = ["onClick"], gi = ["name", "value", "checked", "onChange"], hi = { class: "option-content" }, pi = { class: "option-header" }, yi = { class: "option-filename" }, wi = { class: "option-meta" }, bi = { class: "option-size" }, ki = { class: "option-category" }, _i = { class: "option-path" }, $i = { class: "action-buttons" }, Ci = {
  key: 2,
  class: "unresolved"
}, xi = { class: "action-buttons" }, Si = /* @__PURE__ */ q({
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
  setup(t, { emit: c }) {
    const s = t, r = c, f = O(() => !!s.choice);
    O(() => {
      var i;
      return (i = s.choice) == null ? void 0 : i.action;
    }), O(() => {
      var i, d;
      return ((d = (i = s.choice) == null ? void 0 : i.selected_model) == null ? void 0 : d.filename) || "selected";
    });
    function y(i) {
      r("option-selected", i);
    }
    function g(i) {
      if (!i) return "Unknown";
      const d = i / (1024 * 1024 * 1024);
      return d >= 1 ? `${d.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, d) => (o(), n("div", {
      class: Z(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", di, [
        d[7] || (d[7] = h(" Used by: ", -1)),
        e("code", null, l(t.nodeType), 1)
      ]),
      e("div", ci, [
        f.value ? (o(), n("div", ui, [
          m(ae, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (v) => r("clear-choice"))
          }, {
            default: a(() => [...d[8] || (d[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", mi, [
          d[12] || (d[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", vi, [
            (o(!0), n(G, null, Q(t.options, (v, E) => (o(), n("label", {
              key: v.model.hash,
              class: Z(["option-card", { selected: t.selectedOptionIndex === E }]),
              onClick: (w) => y(E)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: E,
                checked: t.selectedOptionIndex === E,
                onChange: (w) => y(E)
              }, null, 40, gi),
              e("div", hi, [
                e("div", pi, [
                  e("span", yi, l(v.model.filename), 1),
                  m(It, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", wi, [
                  e("span", bi, l(g(v.model.size)), 1),
                  e("span", ki, l(v.model.category), 1)
                ]),
                e("div", _i, l(v.model.relative_path), 1)
              ])
            ], 10, fi))), 128))
          ]),
          e("div", $i, [
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: d[1] || (d[1] = (v) => r("search"))
            }, {
              default: a(() => [...d[9] || (d[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: d[2] || (d[2] = (v) => r("download-url"))
            }, {
              default: a(() => [...d[10] || (d[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: d[3] || (d[3] = (v) => r("mark-optional"))
            }, {
              default: a(() => [...d[11] || (d[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Ci, [
          d[16] || (d[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", xi, [
            m(ae, {
              variant: "primary",
              size: "sm",
              onClick: d[4] || (d[4] = (v) => r("search"))
            }, {
              default: a(() => [...d[13] || (d[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: d[5] || (d[5] = (v) => r("download-url"))
            }, {
              default: a(() => [...d[14] || (d[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: d[6] || (d[6] = (v) => r("mark-optional"))
            }, {
              default: a(() => [...d[15] || (d[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ii = /* @__PURE__ */ J(Si, [["__scopeId", "data-v-00deda48"]]), Ei = { class: "model-resolution-step" }, zi = { class: "step-header" }, Mi = { class: "stat-badge" }, Li = {
  key: 1,
  class: "step-body"
}, Ti = {
  key: 2,
  class: "empty-state"
}, Ri = { class: "model-search-modal" }, Ni = { class: "model-modal-body" }, Di = {
  key: 0,
  class: "model-search-results"
}, Oi = ["onClick"], Ui = { class: "model-result-header" }, Bi = { class: "model-result-filename" }, Pi = { class: "model-result-meta" }, Vi = { class: "model-result-category" }, Ai = { class: "model-result-size" }, Fi = {
  key: 0,
  class: "model-result-path"
}, Wi = {
  key: 1,
  class: "model-no-results"
}, Gi = {
  key: 2,
  class: "model-searching"
}, ji = { class: "model-download-url-modal" }, Hi = { class: "model-modal-body" }, Ki = { class: "model-modal-actions" }, qi = /* @__PURE__ */ q({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: c }) {
    const s = t, r = c, f = I(0), y = I(!1), g = I(!1), i = I(""), d = I(""), v = I(""), E = I([]), w = I(!1), _ = O(() => s.models[f.value]), C = O(() => s.models.filter((X) => s.modelChoices.has(X.filename)).length), N = O(() => _.value ? `checkpoints/${_.value.filename}` : "checkpoints/"), $ = O(() => {
      var H;
      if (!_.value) return "not-found";
      const X = s.modelChoices.get(_.value.filename);
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
      return (H = _.value.options) != null && H.length ? "ambiguous" : "not-found";
    }), b = O(() => {
      var H, fe;
      if (!_.value) return;
      const X = s.modelChoices.get(_.value.filename);
      if (X)
        switch (X.action) {
          case "select":
            return (H = X.selected_model) != null && H.filename ? `→ ${X.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (fe = _.value.options) != null && fe.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function x(X) {
      X >= 0 && X < s.models.length && (f.value = X);
    }
    function F() {
      _.value && r("mark-optional", _.value.filename);
    }
    function z() {
      _.value && r("skip", _.value.filename);
    }
    function p(X) {
      _.value && r("option-selected", _.value.filename, X);
    }
    function S() {
      _.value && r("clear-choice", _.value.filename);
    }
    function M() {
      _.value && (i.value = _.value.filename, y.value = !0);
    }
    function V() {
      d.value = "", v.value = N.value, g.value = !0;
    }
    function T() {
      y.value = !1, i.value = "", E.value = [];
    }
    function D() {
      g.value = !1, d.value = "", v.value = "";
    }
    function U() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function K(X) {
      _.value && T();
    }
    function B() {
      !_.value || !d.value.trim() || (r("download-url", _.value.filename, d.value.trim(), v.value.trim() || void 0), D());
    }
    function R(X) {
      if (!X) return "Unknown";
      const H = X / (1024 * 1024 * 1024);
      return H >= 1 ? `${H.toFixed(2)} GB` : `${(X / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (X, H) => {
      var fe, Ie, me;
      return o(), n("div", Ei, [
        e("div", zi, [
          H[5] || (H[5] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Models"),
            e("p", { class: "step-description" }, " Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Mi, l(C.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        _.value ? (o(), k(Ft, {
          key: 0,
          "item-name": _.value.filename,
          status: $.value,
          "status-label-override": b.value,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: H[0] || (H[0] = (ve) => x(f.value - 1)),
          onNext: H[1] || (H[1] = (ve) => x(f.value + 1))
        }, null, 8, ["item-name", "status", "status-label-override", "current-index", "total-items"])) : u("", !0),
        _.value ? (o(), n("div", Li, [
          m(Ii, {
            filename: _.value.filename,
            "node-type": ((fe = _.value.reference) == null ? void 0 : fe.node_type) || "Unknown",
            "has-multiple-options": !!((Ie = _.value.options) != null && Ie.length),
            options: _.value.options,
            choice: (me = t.modelChoices) == null ? void 0 : me.get(_.value.filename),
            onMarkOptional: F,
            onSkip: z,
            onDownloadUrl: V,
            onSearch: M,
            onOptionSelected: p,
            onClearChoice: S
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice"])
        ])) : (o(), n("div", Ti, [...H[6] || (H[6] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), k(Se, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pe(T, ["self"])
          }, [
            e("div", Ri, [
              e("div", { class: "model-modal-header" }, [
                H[7] || (H[7] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", Ni, [
                m(Ge, {
                  modelValue: i.value,
                  "onUpdate:modelValue": H[2] || (H[2] = (ve) => i.value = ve),
                  placeholder: "Search by filename, category...",
                  onInput: U
                }, null, 8, ["modelValue"]),
                E.value.length > 0 ? (o(), n("div", Di, [
                  (o(!0), n(G, null, Q(E.value, (ve) => (o(), n("div", {
                    key: ve.hash,
                    class: "model-search-result-item",
                    onClick: (te) => K()
                  }, [
                    e("div", Ui, [
                      e("code", Bi, l(ve.filename), 1)
                    ]),
                    e("div", Pi, [
                      e("span", Vi, l(ve.category), 1),
                      e("span", Ai, l(R(ve.size)), 1)
                    ]),
                    ve.relative_path ? (o(), n("div", Fi, l(ve.relative_path), 1)) : u("", !0)
                  ], 8, Oi))), 128))
                ])) : i.value && !w.value ? (o(), n("div", Wi, ' No models found matching "' + l(i.value) + '" ', 1)) : u("", !0),
                w.value ? (o(), n("div", Gi, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), k(Se, { to: "body" }, [
          g.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pe(D, ["self"])
          }, [
            e("div", ji, [
              e("div", { class: "model-modal-header" }, [
                H[8] || (H[8] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: D
                }, "✕")
              ]),
              e("div", Hi, [
                m(Ge, {
                  modelValue: d.value,
                  "onUpdate:modelValue": H[3] || (H[3] = (ve) => d.value = ve),
                  label: "Download URL",
                  placeholder: "https://civitai.com/api/download/..."
                }, null, 8, ["modelValue"]),
                m(Ge, {
                  modelValue: v.value,
                  "onUpdate:modelValue": H[4] || (H[4] = (ve) => v.value = ve),
                  label: "Target Path (relative to models folder)",
                  placeholder: N.value
                }, null, 8, ["modelValue", "placeholder"]),
                e("div", Ki, [
                  m(ae, {
                    variant: "secondary",
                    onClick: D
                  }, {
                    default: a(() => [...H[9] || (H[9] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(ae, {
                    variant: "primary",
                    disabled: !d.value.trim(),
                    onClick: B
                  }, {
                    default: a(() => [...H[10] || (H[10] = [
                      h(" Queue Download ", -1)
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
}), Ji = /* @__PURE__ */ J(qi, [["__scopeId", "data-v-189cb6c5"]]), Xi = { class: "applying-step" }, Yi = {
  key: 0,
  class: "phase-content"
}, Qi = {
  key: 1,
  class: "phase-content"
}, Zi = { class: "completion-summary" }, er = {
  key: 0,
  class: "summary-item info"
}, tr = { class: "summary-text" }, or = {
  key: 2,
  class: "phase-content error"
}, sr = { class: "error-message" }, nr = /* @__PURE__ */ q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (c, s) => (o(), n("div", Xi, [
      t.progress.phase === "resolving" ? (o(), n("div", Yi, [...s[0] || (s[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), n("div", Qi, [
        s[4] || (s[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", Zi, [
          t.progress.nodesToInstall.length > 0 ? (o(), n("div", er, [
            s[1] || (s[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", tr, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : u("", !0),
          s[2] || (s[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          s[3] || (s[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), n("div", or, [
        s[5] || (s[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", sr, l(t.progress.error), 1)
      ])) : u("", !0)
    ]));
  }
}), ar = /* @__PURE__ */ J(nr, [["__scopeId", "data-v-b4d7e0eb"]]), lr = {
  key: 0,
  class: "loading-state"
}, ir = {
  key: 1,
  class: "wizard-content"
}, rr = {
  key: 0,
  class: "step-content"
}, dr = { class: "analysis-summary" }, cr = { class: "analysis-header" }, ur = { class: "summary-description" }, mr = { class: "stats-grid" }, vr = { class: "stat-card" }, fr = { class: "stat-items" }, gr = { class: "stat-item success" }, hr = { class: "stat-count" }, pr = {
  key: 0,
  class: "stat-item warning"
}, yr = { class: "stat-count" }, wr = {
  key: 1,
  class: "stat-item error"
}, br = { class: "stat-count" }, kr = { class: "stat-card" }, _r = { class: "stat-items" }, $r = { class: "stat-item success" }, Cr = { class: "stat-count" }, xr = {
  key: 0,
  class: "stat-item warning"
}, Sr = { class: "stat-count" }, Ir = {
  key: 1,
  class: "stat-item error"
}, Er = { class: "stat-count" }, zr = {
  key: 0,
  class: "status-message warning"
}, Mr = { class: "status-text" }, Lr = {
  key: 1,
  class: "status-message success"
}, Tr = {
  key: 3,
  class: "step-content"
}, Rr = { class: "review-summary" }, Nr = { class: "review-stats" }, Dr = { class: "review-stat" }, Or = { class: "stat-value" }, Ur = { class: "review-stat" }, Br = { class: "stat-value" }, Pr = { class: "review-stat" }, Vr = { class: "stat-value" }, Ar = { class: "review-stat" }, Fr = { class: "stat-value" }, Wr = {
  key: 0,
  class: "review-section"
}, Gr = { class: "section-title" }, jr = { class: "review-items" }, Hr = { class: "item-name" }, Kr = { class: "item-choice" }, qr = {
  key: 0,
  class: "choice-badge install"
}, Jr = {
  key: 1,
  class: "choice-badge optional"
}, Xr = {
  key: 2,
  class: "choice-badge skip"
}, Yr = {
  key: 1,
  class: "choice-badge pending"
}, Qr = {
  key: 1,
  class: "review-section"
}, Zr = { class: "section-title" }, ed = { class: "review-items" }, td = { class: "item-name" }, od = { class: "item-choice" }, sd = {
  key: 0,
  class: "choice-badge install"
}, nd = {
  key: 1,
  class: "choice-badge download"
}, ad = {
  key: 2,
  class: "choice-badge optional"
}, ld = {
  key: 3,
  class: "choice-badge skip"
}, id = {
  key: 1,
  class: "choice-badge pending"
}, rd = {
  key: 2,
  class: "no-choices"
}, dd = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: c }) {
    const s = t, r = c, { analyzeWorkflow: f, applyResolution: y, queueModelDownloads: g, progress: i, resetProgress: d } = sl(), v = I(null), E = I(!1), w = I(!1), _ = I(null), C = I("analysis"), N = I([]), $ = I(/* @__PURE__ */ new Map()), b = I(/* @__PURE__ */ new Map()), x = O(() => {
      const P = [
        { id: "analysis", label: "Analysis" }
      ];
      return z.value && P.push({ id: "nodes", label: "Nodes" }), p.value && P.push({ id: "models", label: "Models" }), P.push({ id: "review", label: "Review" }), C.value === "applying" && P.push({ id: "applying", label: "Applying" }), P;
    }), F = O(() => v.value ? v.value.stats.needs_user_input : !1), z = O(() => v.value ? v.value.nodes.unresolved.length > 0 || v.value.nodes.ambiguous.length > 0 : !1), p = O(() => v.value ? v.value.models.unresolved.length > 0 || v.value.models.ambiguous.length > 0 : !1), S = O(() => {
      if (!v.value) return [];
      const P = v.value.nodes.unresolved.map((ee) => ({
        node_type: ee.reference.node_type,
        reason: ee.reason,
        is_unresolved: !0,
        options: void 0
      })), A = v.value.nodes.ambiguous.map((ee) => ({
        node_type: ee.reference.node_type,
        has_multiple_options: !0,
        options: ee.options.map((ue) => ({
          package_id: ue.package.package_id,
          title: ue.package.title,
          match_confidence: ue.match_confidence,
          match_type: ue.match_type,
          is_installed: ue.is_installed
        }))
      }));
      return [...P, ...A];
    }), M = O(() => {
      if (!v.value) return [];
      const P = v.value.models.unresolved.map((ee) => ({
        filename: ee.reference.widget_value,
        reference: ee.reference,
        reason: ee.reason,
        is_unresolved: !0,
        options: void 0
      })), A = v.value.models.ambiguous.map((ee) => ({
        filename: ee.reference.widget_value,
        reference: ee.reference,
        has_multiple_options: !0,
        options: ee.options.map((ue) => ({
          model: ue.model,
          match_confidence: ue.match_confidence,
          match_type: ue.match_type,
          has_download_source: ue.has_download_source
        }))
      }));
      return [...P, ...A];
    }), V = O(() => {
      let P = 0;
      for (const A of $.value.values())
        A.action === "install" && P++;
      for (const A of b.value.values())
        A.action === "select" && P++;
      return P;
    }), T = O(() => {
      let P = 0;
      for (const A of b.value.values())
        A.action === "download" && P++;
      return P;
    }), D = O(() => {
      let P = 0;
      for (const A of $.value.values())
        A.action === "optional" && P++;
      for (const A of b.value.values())
        A.action === "optional" && P++;
      return P;
    }), U = O(() => {
      let P = 0;
      for (const A of $.value.values())
        A.action === "skip" && P++;
      for (const A of b.value.values())
        A.action === "skip" && P++;
      for (const A of S.value)
        $.value.has(A.node_type) || P++;
      for (const A of M.value)
        b.value.has(A.filename) || P++;
      return P;
    }), K = O(() => {
      const P = {};
      if (P.analysis = { resolved: 1, total: 1 }, z.value) {
        const A = S.value.length, ee = S.value.filter(
          (ue) => $.value.has(ue.node_type)
        ).length;
        P.nodes = { resolved: ee, total: A };
      }
      if (p.value) {
        const A = M.value.length, ee = M.value.filter(
          (ue) => b.value.has(ue.filename)
        ).length;
        P.models = { resolved: ee, total: A };
      }
      if (P.review = { resolved: 1, total: 1 }, C.value === "applying") {
        const A = i.totalFiles || 1, ee = i.completedFiles.length;
        P.applying = { resolved: ee, total: A };
      }
      return P;
    });
    function B(P) {
      C.value = P;
    }
    function R() {
      const P = x.value.findIndex((A) => A.id === C.value);
      P > 0 && (C.value = x.value[P - 1].id);
    }
    function X() {
      const P = x.value.findIndex((A) => A.id === C.value);
      P < x.value.length - 1 && (C.value = x.value[P + 1].id);
    }
    async function H() {
      E.value = !0, _.value = null;
      try {
        v.value = await f(s.workflowName);
      } catch (P) {
        _.value = P instanceof Error ? P.message : "Failed to analyze workflow";
      } finally {
        E.value = !1;
      }
    }
    function fe() {
      N.value.includes("analysis") || N.value.push("analysis"), z.value ? C.value = "nodes" : p.value ? C.value = "models" : C.value = "review";
    }
    function Ie(P) {
      $.value.set(P, { action: "optional" });
    }
    function me(P) {
      $.value.set(P, { action: "skip" });
    }
    function ve(P, A) {
      var ue;
      const ee = S.value.find((Ee) => Ee.node_type === P);
      (ue = ee == null ? void 0 : ee.options) != null && ue[A] && $.value.set(P, {
        action: "install",
        package_id: ee.options[A].package_id
      });
    }
    function te(P, A) {
      $.value.set(P, {
        action: "install",
        package_id: A
      });
    }
    function Re(P) {
      $.value.delete(P);
    }
    function ot(P) {
      b.value.set(P, { action: "optional" });
    }
    function ce(P) {
      b.value.set(P, { action: "skip" });
    }
    function xe(P, A) {
      var ue;
      const ee = M.value.find((Ee) => Ee.filename === P);
      (ue = ee == null ? void 0 : ee.options) != null && ue[A] && b.value.set(P, {
        action: "select",
        selected_model: ee.options[A].model
      });
    }
    function st(P, A, ee) {
      b.value.set(P, {
        action: "download",
        url: A,
        target_path: ee
      });
    }
    function Y(P) {
      b.value.delete(P);
    }
    async function oe() {
      w.value = !0, _.value = null, d(), i.phase = "resolving", C.value = "applying";
      try {
        const P = await y(s.workflowName, $.value, b.value);
        P.models_to_download && P.models_to_download.length > 0 && g(s.workflowName, P.models_to_download), i.nodesToInstall = P.nodes_to_install || [], i.phase = "complete", setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (P) {
        _.value = P instanceof Error ? P.message : "Failed to apply resolution", i.error = _.value, i.phase = "error";
      } finally {
        w.value = !1;
      }
    }
    return we(H), (P, A) => (o(), k(ht, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: E.value,
      error: _.value || void 0,
      "fixed-height": !0,
      onClose: A[1] || (A[1] = (ee) => r("close"))
    }, {
      body: a(() => [
        E.value && !v.value ? (o(), n("div", lr, [...A[2] || (A[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : v.value ? (o(), n("div", ir, [
          m(vl, {
            steps: x.value,
            "current-step": C.value,
            "completed-steps": N.value,
            "step-stats": K.value,
            onStepChange: B
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          C.value === "analysis" ? (o(), n("div", rr, [
            e("div", dr, [
              e("div", cr, [
                A[3] || (A[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", ur, " Found " + l(v.value.stats.total_nodes) + " nodes and " + l(v.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", mr, [
                e("div", vr, [
                  A[10] || (A[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", fr, [
                    e("div", gr, [
                      A[4] || (A[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", hr, l(v.value.nodes.resolved.length), 1),
                      A[5] || (A[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    v.value.nodes.ambiguous.length > 0 ? (o(), n("div", pr, [
                      A[6] || (A[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", yr, l(v.value.nodes.ambiguous.length), 1),
                      A[7] || (A[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    v.value.nodes.unresolved.length > 0 ? (o(), n("div", wr, [
                      A[8] || (A[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", br, l(v.value.nodes.unresolved.length), 1),
                      A[9] || (A[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ]),
                e("div", kr, [
                  A[17] || (A[17] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", _r, [
                    e("div", $r, [
                      A[11] || (A[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Cr, l(v.value.models.resolved.length), 1),
                      A[12] || (A[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    v.value.models.ambiguous.length > 0 ? (o(), n("div", xr, [
                      A[13] || (A[13] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Sr, l(v.value.models.ambiguous.length), 1),
                      A[14] || (A[14] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    v.value.models.unresolved.length > 0 ? (o(), n("div", Ir, [
                      A[15] || (A[15] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Er, l(v.value.models.unresolved.length), 1),
                      A[16] || (A[16] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ])
              ]),
              F.value ? (o(), n("div", zr, [
                A[18] || (A[18] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Mr, l(S.value.length + M.value.length) + " items need your input", 1)
              ])) : (o(), n("div", Lr, [...A[19] || (A[19] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : u("", !0),
          C.value === "nodes" ? (o(), k(ri, {
            key: 1,
            nodes: S.value,
            "node-choices": $.value,
            onMarkOptional: Ie,
            onSkip: me,
            onOptionSelected: ve,
            onManualEntry: te,
            onClearChoice: Re
          }, null, 8, ["nodes", "node-choices"])) : u("", !0),
          C.value === "models" ? (o(), k(Ji, {
            key: 2,
            models: M.value,
            "model-choices": b.value,
            onMarkOptional: ot,
            onSkip: ce,
            onOptionSelected: xe,
            onDownloadUrl: st,
            onClearChoice: Y
          }, null, 8, ["models", "model-choices"])) : u("", !0),
          C.value === "review" ? (o(), n("div", Tr, [
            e("div", Rr, [
              A[24] || (A[24] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Nr, [
                e("div", Dr, [
                  e("span", Or, l(V.value), 1),
                  A[20] || (A[20] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Ur, [
                  e("span", Br, l(T.value), 1),
                  A[21] || (A[21] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Pr, [
                  e("span", Vr, l(D.value), 1),
                  A[22] || (A[22] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Ar, [
                  e("span", Fr, l(U.value), 1),
                  A[23] || (A[23] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              S.value.length > 0 ? (o(), n("div", Wr, [
                e("h4", Gr, "Node Packages (" + l(S.value.length) + ")", 1),
                e("div", jr, [
                  (o(!0), n(G, null, Q(S.value, (ee) => {
                    var ue, Ee, De, We;
                    return o(), n("div", {
                      key: ee.node_type,
                      class: "review-item"
                    }, [
                      e("code", Hr, l(ee.node_type), 1),
                      e("div", Kr, [
                        $.value.has(ee.node_type) ? (o(), n(G, { key: 0 }, [
                          ((ue = $.value.get(ee.node_type)) == null ? void 0 : ue.action) === "install" ? (o(), n("span", qr, l((Ee = $.value.get(ee.node_type)) == null ? void 0 : Ee.package_id), 1)) : ((De = $.value.get(ee.node_type)) == null ? void 0 : De.action) === "optional" ? (o(), n("span", Jr, " Optional ")) : ((We = $.value.get(ee.node_type)) == null ? void 0 : We.action) === "skip" ? (o(), n("span", Xr, " Skip ")) : u("", !0)
                        ], 64)) : (o(), n("span", Yr, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              M.value.length > 0 ? (o(), n("div", Qr, [
                e("h4", Zr, "Models (" + l(M.value.length) + ")", 1),
                e("div", ed, [
                  (o(!0), n(G, null, Q(M.value, (ee) => {
                    var ue, Ee, De, We, mt, je;
                    return o(), n("div", {
                      key: ee.filename,
                      class: "review-item"
                    }, [
                      e("code", td, l(ee.filename), 1),
                      e("div", od, [
                        b.value.has(ee.filename) ? (o(), n(G, { key: 0 }, [
                          ((ue = b.value.get(ee.filename)) == null ? void 0 : ue.action) === "select" ? (o(), n("span", sd, l((De = (Ee = b.value.get(ee.filename)) == null ? void 0 : Ee.selected_model) == null ? void 0 : De.filename), 1)) : ((We = b.value.get(ee.filename)) == null ? void 0 : We.action) === "download" ? (o(), n("span", nd, " Download ")) : ((mt = b.value.get(ee.filename)) == null ? void 0 : mt.action) === "optional" ? (o(), n("span", ad, " Optional ")) : ((je = b.value.get(ee.filename)) == null ? void 0 : je.action) === "skip" ? (o(), n("span", ld, " Skip ")) : u("", !0)
                        ], 64)) : (o(), n("span", id, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              S.value.length === 0 && M.value.length === 0 ? (o(), n("div", rd, " No dependencies need resolution. ")) : u("", !0)
            ])
          ])) : u("", !0),
          C.value === "applying" ? (o(), k(ar, {
            key: 4,
            progress: re(i)
          }, null, 8, ["progress"])) : u("", !0)
        ])) : u("", !0)
      ]),
      footer: a(() => [
        C.value !== "analysis" && C.value !== "applying" ? (o(), k(ae, {
          key: 0,
          variant: "secondary",
          disabled: w.value,
          onClick: R
        }, {
          default: a(() => [...A[25] || (A[25] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        A[28] || (A[28] = e("div", { class: "footer-spacer" }, null, -1)),
        C.value !== "applying" || re(i).phase === "complete" || re(i).phase === "error" ? (o(), k(ae, {
          key: 1,
          variant: "secondary",
          onClick: A[0] || (A[0] = (ee) => r("close"))
        }, {
          default: a(() => [
            h(l(re(i).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : u("", !0),
        C.value === "analysis" ? (o(), k(ae, {
          key: 2,
          variant: "primary",
          disabled: E.value,
          onClick: fe
        }, {
          default: a(() => [
            h(l(F.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        C.value === "nodes" ? (o(), k(ae, {
          key: 3,
          variant: "primary",
          onClick: X
        }, {
          default: a(() => [
            h(l(p.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : u("", !0),
        C.value === "models" ? (o(), k(ae, {
          key: 4,
          variant: "primary",
          onClick: X
        }, {
          default: a(() => [...A[26] || (A[26] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : u("", !0),
        C.value === "review" ? (o(), k(ae, {
          key: 5,
          variant: "primary",
          disabled: w.value,
          loading: w.value,
          onClick: oe
        }, {
          default: a(() => [...A[27] || (A[27] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), cd = /* @__PURE__ */ J(dd, [["__scopeId", "data-v-898049ad"]]), ud = { class: "search-input-wrapper" }, md = ["value", "placeholder"], vd = /* @__PURE__ */ q({
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
    const s = t, r = c, f = I(null);
    let y;
    function g(d) {
      const v = d.target.value;
      s.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", v);
      }, s.debounce)) : r("update:modelValue", v);
    }
    function i() {
      var d;
      r("update:modelValue", ""), r("clear"), (d = f.value) == null || d.focus();
    }
    return we(() => {
      s.autoFocus && f.value && f.value.focus();
    }), (d, v) => (o(), n("div", ud, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: g,
        onKeyup: Pe(i, ["escape"])
      }, null, 40, md),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: i,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), fd = /* @__PURE__ */ J(vd, [["__scopeId", "data-v-266f857a"]]), gd = { class: "search-bar" }, hd = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, s) => (o(), n("div", gd, [
      m(fd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), et = /* @__PURE__ */ J(hd, [["__scopeId", "data-v-3d51bbfd"]]), pd = { class: "section-group" }, yd = {
  key: 0,
  class: "section-content"
}, wd = /* @__PURE__ */ q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const s = t, r = c, f = I(s.initiallyExpanded);
    function y() {
      s.collapsible && (f.value = !f.value, r("toggle", f.value));
    }
    return (g, i) => (o(), n("section", pd, [
      m(Ce, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: y
      }, {
        default: a(() => [
          h(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (o(), n("div", yd, [
        le(g.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), he = /* @__PURE__ */ J(wd, [["__scopeId", "data-v-c48e33ed"]]), bd = { class: "item-header" }, kd = {
  key: 0,
  class: "item-icon"
}, _d = { class: "item-info" }, $d = {
  key: 0,
  class: "item-title"
}, Cd = {
  key: 1,
  class: "item-subtitle"
}, xd = {
  key: 0,
  class: "item-details"
}, Sd = {
  key: 1,
  class: "item-actions"
}, Id = /* @__PURE__ */ q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const s = t, r = O(() => s.status ? `status-${s.status}` : "");
    return (f, y) => (o(), n("div", {
      class: Z(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (g) => t.clickable && f.$emit("click"))
    }, [
      e("div", bd, [
        f.$slots.icon ? (o(), n("span", kd, [
          le(f.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        e("div", _d, [
          f.$slots.title ? (o(), n("div", $d, [
            le(f.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          f.$slots.subtitle ? (o(), n("div", Cd, [
            le(f.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      f.$slots.details ? (o(), n("div", xd, [
        le(f.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      f.$slots.actions ? (o(), n("div", Sd, [
        le(f.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), ye = /* @__PURE__ */ J(Id, [["__scopeId", "data-v-cc435e0e"]]), Ed = { class: "loading-state" }, zd = { class: "loading-message" }, Md = /* @__PURE__ */ q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, s) => (o(), n("div", Ed, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", zd, l(t.message), 1)
    ]));
  }
}), Ae = /* @__PURE__ */ J(Md, [["__scopeId", "data-v-ad8436c9"]]), Ld = { class: "error-state" }, Td = { class: "error-message" }, Rd = /* @__PURE__ */ q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, s) => (o(), n("div", Ld, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Td, l(t.message), 1),
      t.retry ? (o(), k(j, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => c.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), Fe = /* @__PURE__ */ J(Rd, [["__scopeId", "data-v-5397be48"]]), Nd = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const s = c, { getWorkflows: r } = _e(), f = I([]), y = I(!1), g = I(null), i = I(""), d = I(!0), v = I(!1), E = I(!1), w = I(!1), _ = I(null), C = O(
      () => f.value.filter((B) => B.status === "broken")
    ), N = O(
      () => f.value.filter((B) => B.status === "new")
    ), $ = O(
      () => f.value.filter((B) => B.status === "modified")
    ), b = O(
      () => f.value.filter((B) => B.status === "synced")
    ), x = O(() => {
      if (!i.value.trim()) return f.value;
      const B = i.value.toLowerCase();
      return f.value.filter((R) => R.name.toLowerCase().includes(B));
    }), F = O(
      () => C.value.filter(
        (B) => !i.value.trim() || B.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), z = O(
      () => N.value.filter(
        (B) => !i.value.trim() || B.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), p = O(
      () => $.value.filter(
        (B) => !i.value.trim() || B.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), S = O(
      () => b.value.filter(
        (B) => !i.value.trim() || B.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), M = O(
      () => v.value ? S.value : S.value.slice(0, 5)
    );
    async function V() {
      y.value = !0, g.value = null;
      try {
        f.value = await r();
      } catch (B) {
        g.value = B instanceof Error ? B.message : "Failed to load workflows";
      } finally {
        y.value = !1;
      }
    }
    function T(B) {
      _.value = B, E.value = !0;
    }
    function D(B) {
      _.value = B, w.value = !0;
    }
    function U() {
      alert("Bulk resolution not yet implemented");
    }
    function K() {
      s("refresh");
    }
    return we(V), (B, R) => (o(), n(G, null, [
      m(be, null, {
        header: a(() => [
          m(ke, { title: "WORKFLOWS" }, {
            actions: a(() => [
              C.value.length > 0 ? (o(), k(j, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: a(() => [...R[7] || (R[7] = [
                  h(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : u("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          m(et, {
            modelValue: i.value,
            "onUpdate:modelValue": R[0] || (R[0] = (X) => i.value = X),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          y.value ? (o(), k(Ae, {
            key: 0,
            message: "Loading workflows..."
          })) : g.value ? (o(), k(Fe, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            F.value.length ? (o(), k(he, {
              key: 0,
              title: "BROKEN",
              count: F.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(F.value, (X) => (o(), k(ye, {
                  key: X.name,
                  status: "broken"
                }, {
                  icon: a(() => [...R[8] || (R[8] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(l(X.name), 1)
                  ]),
                  subtitle: a(() => [
                    h(" Missing: " + l(X.missing_nodes) + " nodes, " + l(X.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    m(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => D(X.name)
                    }, {
                      default: a(() => [...R[9] || (R[9] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => T(X.name)
                    }, {
                      default: a(() => [...R[10] || (R[10] = [
                        h(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            z.value.length ? (o(), k(he, {
              key: 1,
              title: "NEW",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(z.value, (X) => (o(), k(ye, {
                  key: X.name,
                  status: "new"
                }, {
                  icon: a(() => [...R[11] || (R[11] = [
                    h("●", -1)
                  ])]),
                  title: a(() => [
                    h(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...R[12] || (R[12] = [
                    h("New", -1)
                  ])]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => T(X.name)
                    }, {
                      default: a(() => [...R[13] || (R[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            p.value.length ? (o(), k(he, {
              key: 2,
              title: "MODIFIED",
              count: p.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(p.value, (X) => (o(), k(ye, {
                  key: X.name,
                  status: "modified"
                }, {
                  icon: a(() => [...R[14] || (R[14] = [
                    h("⚡", -1)
                  ])]),
                  title: a(() => [
                    h(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...R[15] || (R[15] = [
                    h("Modified", -1)
                  ])]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => T(X.name)
                    }, {
                      default: a(() => [...R[16] || (R[16] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            S.value.length ? (o(), k(he, {
              key: 3,
              title: "SYNCED",
              count: S.value.length,
              collapsible: !0,
              "initially-expanded": d.value,
              onToggle: R[2] || (R[2] = (X) => d.value = X)
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(M.value, (X) => (o(), k(ye, {
                  key: X.name,
                  status: "synced"
                }, {
                  icon: a(() => [...R[17] || (R[17] = [
                    h("✓", -1)
                  ])]),
                  title: a(() => [
                    h(l(X.name), 1)
                  ]),
                  subtitle: a(() => [...R[18] || (R[18] = [
                    h("Synced", -1)
                  ])]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => T(X.name)
                    }, {
                      default: a(() => [...R[19] || (R[19] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !v.value && S.value.length > 5 ? (o(), k(j, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: R[1] || (R[1] = (X) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    h(" View all " + l(S.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : u("", !0),
            x.value.length ? u("", !0) : (o(), k(Te, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      E.value && _.value ? (o(), k(el, {
        key: 0,
        "workflow-name": _.value,
        onClose: R[3] || (R[3] = (X) => E.value = !1),
        onResolve: R[4] || (R[4] = (X) => D(_.value))
      }, null, 8, ["workflow-name"])) : u("", !0),
      w.value && _.value ? (o(), k(cd, {
        key: 1,
        "workflow-name": _.value,
        onClose: R[5] || (R[5] = (X) => w.value = !1),
        onInstall: K,
        onRefresh: R[6] || (R[6] = (X) => s("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ], 64));
  }
}), Dd = /* @__PURE__ */ J(Nd, [["__scopeId", "data-v-ee63730e"]]), Od = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Z(["summary-bar", t.variant])
    }, [
      le(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), tt = /* @__PURE__ */ J(Od, [["__scopeId", "data-v-ccb7816e"]]), Ud = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const s = c, { getEnvironmentModels: r, getStatus: f } = _e(), y = I([]), g = I([]), i = I("production"), d = I(!1), v = I(null), E = I(""), w = I(!1);
    function _() {
      w.value = !1, s("navigate", "model-index");
    }
    const C = O(
      () => y.value.reduce((T, D) => T + (D.size || 0), 0)
    ), N = O(() => {
      if (!E.value.trim()) return y.value;
      const T = E.value.toLowerCase();
      return y.value.filter((D) => D.filename.toLowerCase().includes(T));
    }), $ = O(() => {
      if (!E.value.trim()) return g.value;
      const T = E.value.toLowerCase();
      return g.value.filter((D) => D.filename.toLowerCase().includes(T));
    }), b = O(
      () => N.value.filter((T) => T.type === "checkpoints")
    ), x = O(
      () => N.value.filter((T) => T.type === "loras")
    ), F = O(
      () => N.value.filter((T) => T.type !== "checkpoints" && T.type !== "loras")
    );
    function z(T) {
      if (!T) return "Unknown";
      const D = T / (1024 * 1024);
      return D >= 1024 ? `${(D / 1024).toFixed(1)} GB` : `${D.toFixed(0)} MB`;
    }
    function p(T) {
      s("navigate", "model-index");
    }
    function S(T) {
      s("navigate", "model-index");
    }
    function M(T) {
      alert(`Download functionality not yet implemented for ${T}`);
    }
    async function V() {
      d.value = !0, v.value = null;
      try {
        const T = await r();
        y.value = T, g.value = [];
        const D = await f();
        i.value = D.environment || "production";
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return we(V), (T, D) => (o(), n(G, null, [
      m(be, null, {
        header: a(() => [
          m(ke, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (U) => w.value = !0)
          })
        ]),
        search: a(() => [
          m(et, {
            modelValue: E.value,
            "onUpdate:modelValue": D[1] || (D[1] = (U) => E.value = U),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          d.value ? (o(), k(Ae, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (o(), k(Fe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            y.value.length ? (o(), k(tt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + l(y.value.length) + " models • " + l(z(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            b.value.length ? (o(), k(he, {
              key: 1,
              title: "CHECKPOINTS",
              count: b.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(b.value, (U) => (o(), k(ye, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[3] || (D[3] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(l(z(U.size)), 1)
                  ]),
                  details: a(() => [
                    m(se, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(se, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => p(U.hash)
                    }, {
                      default: a(() => [...D[4] || (D[4] = [
                        h(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            x.value.length ? (o(), k(he, {
              key: 2,
              title: "LORAS",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(x.value, (U) => (o(), k(ye, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[5] || (D[5] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(l(z(U.size)), 1)
                  ]),
                  details: a(() => [
                    m(se, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(se, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => p(U.hash)
                    }, {
                      default: a(() => [...D[6] || (D[6] = [
                        h(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            F.value.length ? (o(), k(he, {
              key: 3,
              title: "OTHER",
              count: F.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(F.value, (U) => (o(), k(ye, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[7] || (D[7] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(l(z(U.size)), 1)
                  ]),
                  details: a(() => [
                    m(se, {
                      label: "Type:",
                      value: U.type
                    }, null, 8, ["value"]),
                    m(se, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => p(U.hash)
                    }, {
                      default: a(() => [...D[8] || (D[8] = [
                        h(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            $.value.length ? (o(), k(he, {
              key: 4,
              title: "MISSING",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q($.value, (U) => (o(), k(ye, {
                  key: U.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...D[9] || (D[9] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [...D[10] || (D[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var K;
                    return [
                      m(se, {
                        label: "Required by:",
                        value: ((K = U.workflow_names) == null ? void 0 : K.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    m(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => M(U.filename)
                    }, {
                      default: a(() => [...D[11] || (D[11] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => S(U.filename)
                    }, {
                      default: a(() => [...D[12] || (D[12] = [
                        h(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !N.value.length && !$.value.length ? (o(), k(Te, {
              key: 5,
              icon: "📭",
              message: E.value ? `No models match '${E.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(Ve, {
        show: w.value,
        title: "About Environment Models",
        onClose: D[2] || (D[2] = (U) => w.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            D[13] || (D[13] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(i.value) + '"', 1),
            D[14] || (D[14] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          m(j, {
            variant: "primary",
            onClick: _
          }, {
            default: a(() => [...D[15] || (D[15] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Bd = /* @__PURE__ */ J(Ud, [["__scopeId", "data-v-72675609"]]), Pd = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: c } = _e(), s = I([]), r = I(!1), f = I(null), y = I(""), g = I(!1), i = O(
      () => s.value.reduce((M, V) => M + (V.size_mb || V.size || 0), 0)
    ), d = O(() => {
      const M = /* @__PURE__ */ new Set();
      return s.value.forEach((V) => {
        V.used_in_environments && V.used_in_environments.length > 0 && V.used_in_environments.forEach((T) => M.add(T.env_name));
      }), M.size;
    }), v = O(() => {
      if (!y.value.trim()) return s.value;
      const M = y.value.toLowerCase();
      return s.value.filter((V) => {
        const T = V, D = V.sha256 || T.sha256_hash || "";
        return V.filename.toLowerCase().includes(M) || D.toLowerCase().includes(M);
      });
    }), E = O(
      () => v.value.filter((M) => M.type === "checkpoints")
    ), w = O(
      () => v.value.filter((M) => M.type === "loras")
    ), _ = O(
      () => v.value.filter((M) => M.type !== "checkpoints" && M.type !== "loras")
    );
    function C(M) {
      return M ? M >= 1024 ? `${(M / 1024).toFixed(1)} GB` : `${M.toFixed(0)} MB` : "Unknown";
    }
    function N(M) {
      const V = M, T = M.used_in_workflows || V.used_by || [];
      return !T || T.length === 0 ? "Not used" : `${T.length} workflow(s)`;
    }
    function $(M) {
      navigator.clipboard.writeText(M), alert("Hash copied to clipboard");
    }
    function b(M) {
      prompt("Enter model source URL:", M.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function x(M) {
      const V = M, T = M.used_in_workflows || V.used_by || [], D = T && T.length > 0 ? `

⚠ WARNING: This model is used by ${T.length} workflow(s):
${T.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${M.filename}?${D}

This will free ${C(V.size_mb || M.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function F() {
      alert("Scan for models not yet implemented");
    }
    function z() {
      alert("Change directory not yet implemented");
    }
    function p() {
      alert("Download new model not yet implemented");
    }
    async function S() {
      r.value = !0, f.value = null;
      try {
        s.value = await c(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", E.value), console.log("Filtered loras:", w.value), console.log("Filtered other:", _.value);
      } catch (M) {
        f.value = M instanceof Error ? M.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return we(S), (M, V) => (o(), n(G, null, [
      m(be, null, {
        header: a(() => [
          m(ke, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: V[0] || (V[0] = (T) => g.value = !0)
          }, {
            actions: a(() => [
              m(j, {
                variant: "primary",
                size: "sm",
                onClick: F
              }, {
                default: a(() => [...V[3] || (V[3] = [
                  h(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              m(j, {
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: a(() => [...V[4] || (V[4] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              m(j, {
                variant: "primary",
                size: "sm",
                onClick: p
              }, {
                default: a(() => [...V[5] || (V[5] = [
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
          m(et, {
            modelValue: y.value,
            "onUpdate:modelValue": V[1] || (V[1] = (T) => y.value = T),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), k(Ae, {
            key: 0,
            message: "Loading workspace models..."
          })) : f.value ? (o(), k(Fe, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            s.value.length ? (o(), k(tt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + l(s.value.length) + " models • " + l(C(i.value)) + " • Used in " + l(d.value) + " environments ", 1)
              ]),
              _: 1
            })) : u("", !0),
            E.value.length ? (o(), k(he, {
              key: 1,
              title: "CHECKPOINTS",
              count: E.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(E.value, (T) => (o(), k(ye, {
                  key: T.sha256 || T.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...V[6] || (V[6] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(l(T.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(l(C(T.size_mb || T.size)), 1)
                  ]),
                  details: a(() => {
                    var D, U;
                    return [
                      T.sha256 || T.sha256_hash ? (o(), k(se, {
                        key: 0,
                        label: "SHA256:",
                        value: (T.sha256 || T.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : u("", !0),
                      m(se, {
                        label: "Used in:",
                        value: N(T)
                      }, null, 8, ["value"]),
                      T.source_url || (D = T.sources) != null && D[0] ? (o(), k(se, {
                        key: 1,
                        label: "Source URL:",
                        value: T.source_url || ((U = T.sources) == null ? void 0 : U[0])
                      }, null, 8, ["value"])) : (o(), k(se, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...V[7] || (V[7] = [
                          h("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => b(T)
                    }, {
                      default: a(() => [...V[8] || (V[8] = [
                        h(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    T.sha256 || T.sha256_hash ? (o(), k(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => $(T.sha256 || T.sha256_hash)
                    }, {
                      default: a(() => [...V[9] || (V[9] = [
                        h(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    m(j, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => x(T)
                    }, {
                      default: a(() => [...V[10] || (V[10] = [
                        h(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            w.value.length ? (o(), k(he, {
              key: 2,
              title: "LORAS",
              count: w.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(w.value, (T) => (o(), k(ye, {
                  key: T.sha256 || T.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...V[11] || (V[11] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(l(T.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(l(C(T.size_mb || T.size)), 1)
                  ]),
                  details: a(() => {
                    var D, U;
                    return [
                      T.sha256 || T.sha256_hash ? (o(), k(se, {
                        key: 0,
                        label: "SHA256:",
                        value: (T.sha256 || T.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : u("", !0),
                      m(se, {
                        label: "Used in:",
                        value: N(T)
                      }, null, 8, ["value"]),
                      T.source_url || (D = T.sources) != null && D[0] ? (o(), k(se, {
                        key: 1,
                        label: "Source URL:",
                        value: T.source_url || ((U = T.sources) == null ? void 0 : U[0])
                      }, null, 8, ["value"])) : (o(), k(se, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...V[12] || (V[12] = [
                          h("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => b(T)
                    }, {
                      default: a(() => [...V[13] || (V[13] = [
                        h(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    T.sha256 || T.sha256_hash ? (o(), k(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => $(T.sha256 || T.sha256_hash)
                    }, {
                      default: a(() => [...V[14] || (V[14] = [
                        h(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    m(j, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => x(T)
                    }, {
                      default: a(() => [...V[15] || (V[15] = [
                        h(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            _.value.length ? (o(), k(he, {
              key: 3,
              title: "OTHER",
              count: _.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(_.value, (T) => (o(), k(ye, {
                  key: T.sha256 || T.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...V[16] || (V[16] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(l(T.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(l(C(T.size_mb || T.size)), 1)
                  ]),
                  details: a(() => [
                    m(se, {
                      label: "Type:",
                      value: T.type
                    }, null, 8, ["value"]),
                    T.sha256 || T.sha256_hash ? (o(), k(se, {
                      key: 0,
                      label: "SHA256:",
                      value: (T.sha256 || T.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : u("", !0),
                    m(se, {
                      label: "Used in:",
                      value: N(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => b(T)
                    }, {
                      default: a(() => [...V[17] || (V[17] = [
                        h(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    T.sha256 || T.sha256_hash ? (o(), k(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => $(T.sha256 || T.sha256_hash)
                    }, {
                      default: a(() => [...V[18] || (V[18] = [
                        h(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    m(j, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => x(T)
                    }, {
                      default: a(() => [...V[19] || (V[19] = [
                        h(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            v.value.length ? u("", !0) : (o(), k(Te, {
              key: 4,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      m(Ve, {
        show: g.value,
        title: "About Workspace Model Index",
        onClose: V[2] || (V[2] = (T) => g.value = !1)
      }, {
        content: a(() => [...V[20] || (V[20] = [
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
}), Vd = /* @__PURE__ */ J(Pd, [["__scopeId", "data-v-5a24af01"]]), Ad = { key: 0 }, Fd = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Wd = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Gd = /* @__PURE__ */ q({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: c, installNode: s, updateNode: r, uninstallNode: f } = _e(), y = I({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), g = I(!1), i = I(null), d = I(""), v = I(!1), E = O(() => {
      if (!d.value.trim()) return y.value.nodes;
      const p = d.value.toLowerCase();
      return y.value.nodes.filter(
        (S) => {
          var M, V;
          return S.name.toLowerCase().includes(p) || ((M = S.description) == null ? void 0 : M.toLowerCase().includes(p)) || ((V = S.repository) == null ? void 0 : V.toLowerCase().includes(p));
        }
      );
    }), w = O(
      () => E.value.filter((p) => p.installed)
    ), _ = O(
      () => E.value.filter((p) => !p.installed)
    );
    function C(p) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[p] || p;
    }
    function N(p) {
      return !p.used_in_workflows || p.used_in_workflows.length === 0 ? "Not used in any workflows" : p.used_in_workflows.length === 1 ? p.used_in_workflows[0] : `${p.used_in_workflows.length} workflows`;
    }
    function $(p) {
      window.open(p, "_blank");
    }
    async function b(p) {
      if (confirm(`Install node "${p}"?

This will download and install the node from its repository.`))
        try {
          g.value = !0;
          const S = await s(p);
          S.status === "success" ? (alert(`Node "${p}" installed successfully!`), await z()) : alert(`Failed to install node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error installing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          g.value = !1;
        }
    }
    async function x(p) {
      if (confirm(`Check for updates for "${p}"?`))
        try {
          g.value = !0;
          const S = await r(p);
          S.status === "success" ? (alert(`Node "${p}" is up to date or has been updated!`), await z()) : alert(`Update check failed: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error checking for updates: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          g.value = !1;
        }
    }
    async function F(p) {
      if (confirm(`Uninstall node "${p}"?

This will remove the node from this environment.`))
        try {
          g.value = !0;
          const S = await f(p);
          S.status === "success" ? (alert(`Node "${p}" uninstalled successfully!`), await z()) : alert(`Failed to uninstall node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error uninstalling node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          g.value = !1;
        }
    }
    async function z() {
      g.value = !0, i.value = null;
      try {
        y.value = await c();
      } catch (p) {
        i.value = p instanceof Error ? p.message : "Failed to load nodes";
      } finally {
        g.value = !1;
      }
    }
    return we(z), (p, S) => (o(), n(G, null, [
      m(be, null, {
        header: a(() => [
          m(ke, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (M) => v.value = !0)
          })
        ]),
        search: a(() => [
          m(et, {
            modelValue: d.value,
            "onUpdate:modelValue": S[1] || (S[1] = (M) => d.value = M),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          g.value ? (o(), k(Ae, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : i.value ? (o(), k(Fe, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            y.value.total_count ? (o(), k(tt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + l(y.value.total_count) + " nodes • " + l(y.value.installed_count) + " installed • " + l(y.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : u("", !0),
            w.value.length ? (o(), k(he, {
              key: 1,
              title: "INSTALLED",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(w.value, (M) => (o(), k(ye, {
                  key: M.name,
                  status: "synced"
                }, {
                  icon: a(() => [...S[4] || (S[4] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(l(M.name), 1)
                  ]),
                  subtitle: a(() => [
                    M.version ? (o(), n("span", Ad, "v" + l(M.version), 1)) : (o(), n("span", Fd, "version unknown")),
                    M.source ? (o(), n("span", Wd, " • " + l(C(M.source)), 1)) : u("", !0)
                  ]),
                  details: a(() => [
                    M.description ? (o(), k(se, {
                      key: 0,
                      label: "Description:",
                      value: M.description
                    }, null, 8, ["value"])) : u("", !0),
                    M.repository ? (o(), k(se, {
                      key: 1,
                      label: "Repository:",
                      value: M.repository
                    }, null, 8, ["value"])) : u("", !0),
                    m(se, {
                      label: "Used by:",
                      value: N(M)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    M.repository ? (o(), k(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => $(M.repository)
                    }, {
                      default: a(() => [...S[5] || (S[5] = [
                        h(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    M.source === "registry" ? (o(), k(j, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => x(M.name)
                    }, {
                      default: a(() => [...S[6] || (S[6] = [
                        h(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    M.source !== "unknown" ? (o(), k(j, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (V) => F(M.name)
                    }, {
                      default: a(() => [...S[7] || (S[7] = [
                        h(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            _.value.length ? (o(), k(he, {
              key: 2,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(_.value, (M) => (o(), k(ye, {
                  key: M.name,
                  status: "missing"
                }, {
                  icon: a(() => [...S[8] || (S[8] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(l(M.name), 1)
                  ]),
                  subtitle: a(() => [...S[9] || (S[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    M.description ? (o(), k(se, {
                      key: 0,
                      label: "Description:",
                      value: M.description
                    }, null, 8, ["value"])) : u("", !0),
                    M.repository ? (o(), k(se, {
                      key: 1,
                      label: "Repository:",
                      value: M.repository
                    }, null, 8, ["value"])) : u("", !0),
                    m(se, {
                      label: "Required by:",
                      value: N(M)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    M.download_url ? (o(), k(j, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => b(M.name)
                    }, {
                      default: a(() => [...S[10] || (S[10] = [
                        h(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    M.repository ? (o(), k(j, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => $(M.repository)
                    }, {
                      default: a(() => [...S[11] || (S[11] = [
                        h(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !w.value.length && !_.value.length ? (o(), k(Te, {
              key: 3,
              icon: "📭",
              message: d.value ? `No nodes match '${d.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(Ve, {
        show: v.value,
        title: "About Git-Tracked Nodes",
        onClose: S[3] || (S[3] = (M) => v.value = !1)
      }, {
        content: a(() => [...S[12] || (S[12] = [
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
          m(j, {
            variant: "primary",
            onClick: S[2] || (S[2] = (M) => v.value = !1)
          }, {
            default: a(() => [...S[13] || (S[13] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jd = /* @__PURE__ */ J(Gd, [["__scopeId", "data-v-c480e2c1"]]), Hd = { class: "remote-url-display" }, Kd = ["title"], qd = ["title"], Jd = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Xd = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Yd = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, s = I(!1), r = O(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const y = c.url.slice(0, Math.floor(c.maxLength * 0.6)), g = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${y}...${g}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(c.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, g) => (o(), n("div", Hd, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, Kd),
      e("button", {
        class: Z(["copy-btn", { copied: s.value }]),
        onClick: f,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Xd, [...g[1] || (g[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Jd, [...g[0] || (g[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, qd)
    ]));
  }
}), Tt = /* @__PURE__ */ J(Yd, [["__scopeId", "data-v-7768a58d"]]), Qd = { class: "remote-title" }, Zd = {
  key: 0,
  class: "default-badge"
}, ec = {
  key: 1,
  class: "sync-badge"
}, tc = {
  key: 0,
  class: "ahead"
}, oc = {
  key: 1,
  class: "behind"
}, sc = {
  key: 0,
  class: "tracking-info"
}, nc = /* @__PURE__ */ q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const s = t, r = O(() => s.fetchingRemote === s.remote.name), f = O(() => s.remote.is_default), y = O(() => !!s.trackingBranch);
    function g(i) {
      const d = new Date(i), E = (/* @__PURE__ */ new Date()).getTime() - d.getTime(), w = Math.floor(E / 6e4);
      if (w < 1) return "Just now";
      if (w < 60) return `${w}m ago`;
      const _ = Math.floor(w / 60);
      if (_ < 24) return `${_}h ago`;
      const C = Math.floor(_ / 24);
      return C < 7 ? `${C}d ago` : d.toLocaleDateString();
    }
    return (i, d) => (o(), k(ye, {
      status: f.value ? "synced" : void 0
    }, {
      icon: a(() => [
        h(l(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", Qd, [
          e("span", null, l(t.remote.name), 1),
          f.value ? (o(), n("span", Zd, "DEFAULT")) : u("", !0),
          t.syncStatus ? (o(), n("span", ec, [
            t.syncStatus.ahead > 0 ? (o(), n("span", tc, "↑" + l(t.syncStatus.ahead), 1)) : u("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", oc, "↓" + l(t.syncStatus.behind), 1)) : u("", !0)
          ])) : u("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), n("span", sc, " Tracking: " + l(t.trackingBranch), 1)) : u("", !0)
      ]),
      details: a(() => {
        var v;
        return [
          m(se, { label: "Fetch:" }, {
            default: a(() => [
              m(Tt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), k(se, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              m(Tt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : u("", !0),
          (v = t.syncStatus) != null && v.last_fetch ? (o(), k(se, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(g(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : u("", !0)
        ];
      }),
      actions: a(() => [
        m(j, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: d[0] || (d[0] = (v) => i.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...d[3] || (d[3] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        m(j, {
          variant: "secondary",
          size: "xs",
          onClick: d[1] || (d[1] = (v) => i.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...d[4] || (d[4] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        f.value ? u("", !0) : (o(), k(j, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: d[2] || (d[2] = (v) => i.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...d[5] || (d[5] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), ac = /* @__PURE__ */ J(nc, [["__scopeId", "data-v-17362e45"]]), lc = ["for"], ic = {
  key: 0,
  class: "base-form-field-required"
}, rc = { class: "base-form-field-input" }, dc = {
  key: 1,
  class: "base-form-field-error"
}, cc = {
  key: 2,
  class: "base-form-field-hint"
}, uc = /* @__PURE__ */ q({
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
    const c = t, s = O(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, f) => (o(), n("div", {
      class: Z(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        h(l(t.label) + " ", 1),
        t.required ? (o(), n("span", ic, "*")) : u("", !0)
      ], 8, lc)) : u("", !0),
      e("div", rc, [
        le(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", dc, l(t.error), 1)) : t.hint ? (o(), n("span", cc, l(t.hint), 1)) : u("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ J(uc, [["__scopeId", "data-v-9a1cf296"]]), mc = { class: "remote-form" }, vc = { class: "form-header" }, fc = { class: "form-body" }, gc = {
  key: 0,
  class: "form-error"
}, hc = { class: "form-actions" }, pc = /* @__PURE__ */ q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const s = t, r = c, f = I({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), y = I(!1), g = I(null);
    Ot(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      f.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const i = O(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!i.value || y.value)) {
        g.value = null, y.value = !0;
        try {
          r("submit", f.value);
        } catch (v) {
          g.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (v, E) => (o(), n("div", mc, [
      e("div", vc, [
        m(Ce, null, {
          default: a(() => [
            h(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", fc, [
        m(wt, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            m(Ge, {
              modelValue: f.value.name,
              "onUpdate:modelValue": E[0] || (E[0] = (w) => f.value.name = w),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        m(wt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            m(Ge, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": E[1] || (E[1] = (w) => f.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m(wt, { label: "Push URL (optional)" }, {
          default: a(() => [
            m(Ge, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": E[2] || (E[2] = (w) => f.value.pushUrl = w),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g.value ? (o(), n("div", gc, l(g.value), 1)) : u("", !0)
      ]),
      e("div", hc, [
        m(j, {
          variant: "primary",
          size: "md",
          disabled: !i.value,
          loading: y.value,
          onClick: d
        }, {
          default: a(() => [
            h(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        m(j, {
          variant: "ghost",
          size: "md",
          onClick: E[3] || (E[3] = (w) => v.$emit("cancel"))
        }, {
          default: a(() => [...E[4] || (E[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), yc = /* @__PURE__ */ J(pc, [["__scopeId", "data-v-56021b18"]]), wc = { key: 0 }, bc = /* @__PURE__ */ q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: s,
      removeRemote: r,
      updateRemoteUrl: f,
      fetchRemote: y,
      getRemoteSyncStatus: g
    } = _e(), i = I([]), d = I(null), v = I({}), E = I(!1), w = I(null), _ = I(""), C = I(!1), N = I(null), $ = I(!1), b = I("add"), x = I({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), F = O(() => {
      if (!_.value.trim()) return i.value;
      const B = _.value.toLowerCase();
      return i.value.filter(
        (R) => R.name.toLowerCase().includes(B) || R.fetch_url.toLowerCase().includes(B) || R.push_url.toLowerCase().includes(B)
      );
    });
    function z(B) {
      var R;
      return ((R = d.value) == null ? void 0 : R.remote) === B;
    }
    async function p() {
      E.value = !0, w.value = null;
      try {
        const B = await c();
        i.value = B.remotes, d.value = B.current_branch_tracking || null, await Promise.all(
          B.remotes.map(async (R) => {
            const X = await g(R.name);
            X && (v.value[R.name] = X);
          })
        );
      } catch (B) {
        w.value = B instanceof Error ? B.message : "Failed to load remotes";
      } finally {
        E.value = !1;
      }
    }
    function S() {
      b.value = "add", x.value = { name: "", fetchUrl: "", pushUrl: "" }, $.value = !0;
    }
    function M(B) {
      const R = i.value.find((X) => X.name === B);
      R && (b.value = "edit", x.value = {
        name: R.name,
        fetchUrl: R.fetch_url,
        pushUrl: R.push_url
      }, $.value = !0);
    }
    async function V(B) {
      try {
        b.value === "add" ? await s(B.name, B.fetchUrl) : await f(B.name, B.fetchUrl, B.pushUrl || void 0), $.value = !1, await p();
      } catch (R) {
        w.value = R instanceof Error ? R.message : "Operation failed";
      }
    }
    function T() {
      $.value = !1, x.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function D(B) {
      N.value = B;
      try {
        await y(B);
        const R = await g(B);
        R && (v.value[B] = R);
      } catch (R) {
        w.value = R instanceof Error ? R.message : "Fetch failed";
      } finally {
        N.value = null;
      }
    }
    async function U(B) {
      if (confirm(`Remove remote "${B}"?`))
        try {
          await r(B), await p();
        } catch (R) {
          w.value = R instanceof Error ? R.message : "Failed to remove remote";
        }
    }
    function K() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return we(p), (B, R) => (o(), n(G, null, [
      m(be, null, {
        header: a(() => [
          m(ke, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (X) => C.value = !0)
          }, {
            actions: a(() => [
              $.value ? u("", !0) : (o(), k(j, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: a(() => [...R[3] || (R[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          $.value ? u("", !0) : (o(), k(et, {
            key: 0,
            modelValue: _.value,
            "onUpdate:modelValue": R[1] || (R[1] = (X) => _.value = X),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          E.value ? (o(), k(Ae, {
            key: 0,
            message: "Loading remotes..."
          })) : w.value ? (o(), k(Fe, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            $.value ? (o(), k(yc, {
              key: 0,
              mode: b.value,
              "remote-name": x.value.name,
              "fetch-url": x.value.fetchUrl,
              "push-url": x.value.pushUrl,
              onSubmit: V,
              onCancel: T
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : u("", !0),
            i.value.length && !$.value ? (o(), k(tt, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + l(i.value.length) + " remote" + l(i.value.length !== 1 ? "s" : "") + " ", 1),
                d.value ? (o(), n("span", wc, " • Tracking: " + l(d.value.remote) + "/" + l(d.value.branch), 1)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            F.value.length && !$.value ? (o(), k(he, {
              key: 2,
              title: "REMOTES",
              count: F.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, Q(F.value, (X) => {
                  var H;
                  return o(), k(ac, {
                    key: X.name,
                    remote: X,
                    "sync-status": v.value[X.name],
                    "tracking-branch": z(X.name) ? (H = d.value) == null ? void 0 : H.branch : void 0,
                    "fetching-remote": N.value,
                    onFetch: D,
                    onEdit: M,
                    onRemove: U
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !F.value.length && !$.value ? (o(), k(Te, {
              key: 3,
              icon: "🌐",
              message: _.value ? `No remotes match '${_.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                m(j, {
                  variant: "primary",
                  onClick: S
                }, {
                  default: a(() => [...R[4] || (R[4] = [
                    h(" Add Your First Remote ", -1)
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
      m(Ve, {
        show: C.value,
        title: "About Git Remotes",
        onClose: R[2] || (R[2] = (X) => C.value = !1)
      }, {
        content: a(() => [...R[5] || (R[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          m(j, {
            variant: "link",
            onClick: K
          }, {
            default: a(() => [...R[6] || (R[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kc = /* @__PURE__ */ J(bc, [["__scopeId", "data-v-a75719bb"]]), _c = { class: "setting-info" }, $c = { class: "setting-label" }, Cc = {
  key: 0,
  class: "required-marker"
}, xc = {
  key: 0,
  class: "setting-description"
}, Sc = { class: "setting-control" }, Ic = /* @__PURE__ */ q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Z(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", _c, [
        e("div", $c, [
          h(l(t.label) + " ", 1),
          t.required ? (o(), n("span", Cc, "*")) : u("", !0)
        ]),
        t.description ? (o(), n("div", xc, l(t.description), 1)) : u("", !0)
      ]),
      e("div", Sc, [
        le(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Be = /* @__PURE__ */ J(Ic, [["__scopeId", "data-v-cb5d236c"]]), Ec = { class: "toggle" }, zc = ["checked", "disabled"], Mc = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, s) => (o(), n("label", Ec, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, zc),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Je = /* @__PURE__ */ J(Mc, [["__scopeId", "data-v-71c0f550"]]), Lc = { class: "settings-section" }, Tc = { class: "path-setting" }, Rc = { class: "path-value" }, Nc = { class: "path-setting" }, Dc = { class: "path-value" }, Oc = { class: "settings-section" }, Uc = { class: "settings-section" }, Bc = { class: "settings-section" }, Pc = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: s } = _e(), r = I(!1), f = I(null), y = I(null), g = I(null), i = I(null), d = I(""), v = I(""), E = I(!0), w = I(!0), _ = I(!1), C = O(() => i.value ? d.value !== (i.value.civitai_api_key || "") : !1);
    async function N() {
      r.value = !0, f.value = null;
      try {
        g.value = await c(), i.value = { ...g.value }, d.value = g.value.civitai_api_key || "", v.value = g.value.huggingface_token || "", E.value = g.value.auto_sync_models, w.value = g.value.confirm_destructive;
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = F === "true";
      } catch (F) {
        f.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function $() {
      var F;
      y.value = null;
      try {
        const z = {};
        d.value !== (((F = i.value) == null ? void 0 : F.civitai_api_key) || "") && (z.civitai_api_key = d.value || null), await s(z), await N(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (z) {
        y.value = {
          type: "error",
          message: z instanceof Error ? z.message : "Failed to save settings"
        };
      }
    }
    function b() {
      i.value && (d.value = i.value.civitai_api_key || "", v.value = i.value.huggingface_token || "", E.value = i.value.auto_sync_models, w.value = i.value.confirm_destructive, y.value = null);
    }
    function x(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return we(N), (F, z) => (o(), k(be, null, {
      header: a(() => [
        m(ke, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            m(j, {
              variant: "primary",
              size: "sm",
              disabled: !C.value,
              onClick: $
            }, {
              default: a(() => [...z[5] || (z[5] = [
                h(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            C.value ? (o(), k(j, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: b
            }, {
              default: a(() => [...z[6] || (z[6] = [
                h(" Reset ", -1)
              ])]),
              _: 1
            })) : u("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        r.value ? (o(), k(Ae, {
          key: 0,
          message: "Loading workspace settings..."
        })) : f.value ? (o(), k(Fe, {
          key: 1,
          message: f.value,
          retry: !0,
          onRetry: N
        }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
          m(he, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var p, S;
              return [
                e("div", Lc, [
                  e("div", Tc, [
                    z[7] || (z[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    z[8] || (z[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Rc, l(((p = g.value) == null ? void 0 : p.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Nc, [
                    z[9] || (z[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    z[10] || (z[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Dc, l(((S = g.value) == null ? void 0 : S.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          m(he, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Oc, [
                m(Be, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    m(ut, {
                      modelValue: d.value,
                      "onUpdate:modelValue": z[0] || (z[0] = (p) => d.value = p),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(Be, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(ut, {
                      modelValue: v.value,
                      "onUpdate:modelValue": z[1] || (z[1] = (p) => v.value = p),
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
          m(he, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Uc, [
                m(Be, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    m(Je, {
                      modelValue: _.value,
                      "onUpdate:modelValue": [
                        z[2] || (z[2] = (p) => _.value = p),
                        x
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          m(he, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Bc, [
                m(Be, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(Je, {
                      modelValue: E.value,
                      "onUpdate:modelValue": z[3] || (z[3] = (p) => E.value = p),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(Be, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(Je, {
                      modelValue: w.value,
                      "onUpdate:modelValue": z[4] || (z[4] = (p) => w.value = p),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), k(tt, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Xe({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : u("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Vc = /* @__PURE__ */ J(Pc, [["__scopeId", "data-v-7861bd35"]]), Ac = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = _e(), s = I([]), r = I(!1), f = I(null), y = I(!1), g = I(null), i = O(() => s.value.length === 0 ? [] : s.value.map((v) => ({
      text: `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function d() {
      r.value = !0, f.value = null;
      try {
        s.value = await c(void 0, 500);
      } catch (v) {
        f.value = v instanceof Error ? v.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var v;
          (v = g.value) != null && v.parentElement && (g.value.parentElement.scrollTop = g.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return we(d), (v, E) => (o(), n(G, null, [
      m(be, null, {
        header: a(() => [
          m(ke, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (w) => y.value = !0)
          }, {
            actions: a(() => [
              m(j, {
                variant: "secondary",
                size: "sm",
                onClick: d,
                disabled: r.value
              }, {
                default: a(() => [
                  h(l(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          r.value ? (o(), k(Ae, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (o(), k(Fe, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: d
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            s.value.length === 0 ? (o(), k(Te, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: g,
              class: "log-output"
            }, [
              (o(!0), n(G, null, Q(i.value, (w, _) => (o(), n("div", {
                key: _,
                class: Z(`log-line log-level-${w.level.toLowerCase()}`)
              }, l(w.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(Ve, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: E[2] || (E[2] = (w) => y.value = !1)
      }, {
        content: a(() => [...E[3] || (E[3] = [
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
          m(j, {
            variant: "primary",
            onClick: E[1] || (E[1] = (w) => y.value = !1)
          }, {
            default: a(() => [...E[4] || (E[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Fc = /* @__PURE__ */ J(Ac, [["__scopeId", "data-v-39f6a756"]]), Wc = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: s } = _e(), r = I([]), f = I(!1), y = I(null), g = I(!1), i = I("production"), d = I(null), v = O(() => r.value.length === 0 ? [] : r.value.map((w) => ({
      text: `${w.timestamp} - ${w.name} - ${w.level} - ${w.func}:${w.line} - ${w.message}`,
      level: w.level
    })));
    async function E() {
      f.value = !0, y.value = null;
      try {
        r.value = await c(void 0, 500);
        try {
          const w = await s();
          i.value = w.environment || "production";
        } catch {
        }
      } catch (w) {
        y.value = w instanceof Error ? w.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var w;
          (w = d.value) != null && w.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return we(E), (w, _) => (o(), n(G, null, [
      m(be, null, {
        header: a(() => [
          m(ke, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (C) => g.value = !0)
          }, {
            actions: a(() => [
              m(j, {
                variant: "secondary",
                size: "sm",
                onClick: E,
                disabled: f.value
              }, {
                default: a(() => [
                  h(l(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          f.value ? (o(), k(Ae, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), k(Fe, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            r.value.length === 0 ? (o(), k(Te, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: d,
              class: "log-output"
            }, [
              (o(!0), n(G, null, Q(v.value, (C, N) => (o(), n("div", {
                key: N,
                class: Z(`log-line log-level-${C.level.toLowerCase()}`)
              }, l(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(Ve, {
        show: g.value,
        title: "About Environment Logs",
        onClose: _[2] || (_[2] = (C) => g.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            _[3] || (_[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(i.value), 1),
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
          m(j, {
            variant: "primary",
            onClick: _[1] || (_[1] = (C) => g.value = !1)
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
}), Gc = /* @__PURE__ */ J(Wc, [["__scopeId", "data-v-4f1e6f72"]]), jc = { class: "env-title" }, Hc = {
  key: 0,
  class: "current-badge"
}, Kc = {
  key: 0,
  class: "branch-info"
}, qc = /* @__PURE__ */ q({
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
    return (c, s) => (o(), k(ye, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        h(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", jc, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Hc, "CURRENT")) : u("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", Kc, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + l(t.currentBranch), 1)
        ])) : u("", !0)
      ]),
      details: a(() => [
        m(se, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        m(se, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        m(se, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), k(se, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : u("", !0)
      ]),
      actions: a(() => [
        le(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Jc = /* @__PURE__ */ J(qc, [["__scopeId", "data-v-5238e57c"]]), Xc = {
  key: 0,
  class: "create-form"
}, Yc = { class: "create-form__header" }, Qc = { class: "create-form__body" }, Zc = { class: "create-form__actions" }, eu = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, tu = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: c }) {
    const s = c, { getEnvironments: r } = _e(), f = I([]), y = I(!1), g = I(null), i = I(""), d = I(!1), v = I(!1), E = I(""), w = O(
      () => f.value.find((z) => z.is_current)
    ), _ = O(() => {
      if (!i.value.trim()) return f.value;
      const z = i.value.toLowerCase();
      return f.value.filter(
        (p) => {
          var S;
          return p.name.toLowerCase().includes(z) || ((S = p.current_branch) == null ? void 0 : S.toLowerCase().includes(z));
        }
      );
    });
    function C(z) {
      if (!z) return "";
      try {
        const p = new Date(z), M = (/* @__PURE__ */ new Date()).getTime() - p.getTime(), V = Math.floor(M / 6e4), T = Math.floor(M / 36e5), D = Math.floor(M / 864e5);
        return V < 1 ? "just now" : V < 60 ? `${V} ${V === 1 ? "minute" : "minutes"} ago` : T < 24 ? `${T} ${T === 1 ? "hour" : "hours"} ago` : D < 30 ? `${D} ${D === 1 ? "day" : "days"} ago` : p.toLocaleDateString();
      } catch {
        return z;
      }
    }
    function N() {
      const z = E.value.trim();
      z && (s("create", z), E.value = "", v.value = !1);
    }
    function $() {
      E.value = "", v.value = !1;
    }
    function b(z) {
      s("viewDetails", z);
    }
    function x(z) {
      confirm(`Delete environment "${z}"?

This action cannot be undone.`) && s("delete", z);
    }
    async function F() {
      y.value = !0, g.value = null;
      try {
        f.value = await r();
      } catch (z) {
        g.value = z instanceof Error ? z.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return we(F), (z, p) => {
      const S = ao("SectionGroup");
      return o(), n(G, null, [
        m(be, null, {
          header: a(() => [
            m(ke, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: p[1] || (p[1] = (M) => d.value = !0)
            }, {
              actions: a(() => [
                m(j, {
                  variant: "ghost",
                  size: "sm",
                  onClick: p[0] || (p[0] = (M) => v.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...p[7] || (p[7] = [
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
                  onClick: F,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...p[8] || (p[8] = [
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
            m(et, {
              modelValue: i.value,
              "onUpdate:modelValue": p[2] || (p[2] = (M) => i.value = M),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), k(Ae, {
              key: 0,
              message: "Loading environments..."
            })) : g.value ? (o(), k(Fe, {
              key: 1,
              message: g.value,
              retry: !0,
              onRetry: F
            }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
              v.value ? (o(), n("div", Xc, [
                e("div", Yc, [
                  p[10] || (p[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  m(j, {
                    variant: "ghost",
                    size: "xs",
                    onClick: $
                  }, {
                    default: a(() => [...p[9] || (p[9] = [
                      h(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", Qc, [
                  m(ut, {
                    modelValue: E.value,
                    "onUpdate:modelValue": p[3] || (p[3] = (M) => E.value = M),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Pe(N, ["enter"]),
                      Pe($, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Zc, [
                    m(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: N,
                      disabled: !E.value.trim()
                    }, {
                      default: a(() => [...p[11] || (p[11] = [
                        h(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: $
                    }, {
                      default: a(() => [...p[12] || (p[12] = [
                        h(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : u("", !0),
              f.value.length ? (o(), k(tt, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  h(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                  w.value ? (o(), n(G, { key: 0 }, [
                    p[13] || (p[13] = h(" • Current: ", -1)),
                    e("strong", null, l(w.value.name), 1)
                  ], 64)) : u("", !0)
                ]),
                _: 1
              })) : u("", !0),
              _.value.length ? (o(), k(S, {
                key: 2,
                title: "ENVIRONMENTS",
                count: _.value.length
              }, {
                default: a(() => [
                  (o(!0), n(G, null, Q(_.value, (M) => (o(), k(Jc, {
                    key: M.name,
                    "environment-name": M.name,
                    "is-current": M.is_current,
                    "current-branch": M.current_branch,
                    "workflow-count": M.workflow_count,
                    "node-count": M.node_count,
                    "model-count": M.model_count,
                    "last-used": C(M.last_used),
                    "show-last-used": !!M.last_used
                  }, {
                    actions: a(() => [
                      M.is_current ? u("", !0) : (o(), k(j, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (V) => z.$emit("switch", M.name)
                      }, {
                        default: a(() => [...p[14] || (p[14] = [
                          h(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      m(j, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (V) => b(M.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...p[15] || (p[15] = [
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
                      !M.is_current && f.value.length > 1 ? (o(), k(j, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (V) => x(M.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", eu, [...p[16] || (p[16] = [
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
              _.value.length ? u("", !0) : (o(), k(Te, {
                key: 3,
                icon: "🌍",
                message: i.value ? `No environments match '${i.value}'` : "No environments found. Create one to get started!"
              }, Bt({ _: 2 }, [
                i.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    m(j, {
                      variant: "primary",
                      onClick: p[4] || (p[4] = (M) => v.value = !0)
                    }, {
                      default: a(() => [...p[17] || (p[17] = [
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
        m(Ve, {
          show: d.value,
          title: "About Environments",
          onClose: p[6] || (p[6] = (M) => d.value = !1)
        }, {
          content: a(() => [...p[18] || (p[18] = [
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
            m(j, {
              variant: "secondary",
              onClick: p[5] || (p[5] = (M) => d.value = !1)
            }, {
              default: a(() => [...p[19] || (p[19] = [
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
}), ou = /* @__PURE__ */ J(tu, [["__scopeId", "data-v-97d6527d"]]), su = { class: "file-path" }, nu = { class: "file-path-text" }, au = ["title"], lu = /* @__PURE__ */ q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, s = I(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(c.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, y) => (o(), n("div", su, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", nu, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(s.value ? "✓" : "📋"), 9, au)) : u("", !0)
    ]));
  }
}), iu = /* @__PURE__ */ J(lu, [["__scopeId", "data-v-f0982173"]]), ru = { class: "output-path-input" }, du = { class: "export-actions" }, cu = {
  key: 1,
  class: "export-warning"
}, uu = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = _e(), s = I(""), r = I(!1), f = I(null), y = I(!1);
    async function g() {
      r.value = !0, f.value = null;
      try {
        const d = await c(s.value || void 0);
        f.value = d;
      } catch (d) {
        f.value = {
          status: "error",
          message: d instanceof Error ? d.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function i() {
      var d;
      if ((d = f.value) != null && d.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (v) {
          console.error("Failed to copy path:", v);
        }
    }
    return (d, v) => (o(), n(G, null, [
      m(be, null, {
        header: a(() => [
          m(ke, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              m(j, {
                variant: "ghost",
                size: "sm",
                onClick: v[0] || (v[0] = (E) => y.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...v[5] || (v[5] = [
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
          m(he, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              m(ye, { status: "synced" }, {
                icon: a(() => [...v[6] || (v[6] = [
                  h("📦", -1)
                ])]),
                title: a(() => [...v[7] || (v[7] = [
                  h("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...v[8] || (v[8] = [
                  h(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  m(se, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  m(se, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  m(se, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  m(se, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(he, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              m(ye, { status: "synced" }, {
                icon: a(() => [...v[9] || (v[9] = [
                  h("📁", -1)
                ])]),
                title: a(() => [...v[10] || (v[10] = [
                  h("Output Destination", -1)
                ])]),
                subtitle: a(() => [...v[11] || (v[11] = [
                  h(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", ru, [
                    m(ut, {
                      modelValue: s.value,
                      "onUpdate:modelValue": v[1] || (v[1] = (E) => s.value = E),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(he, { title: "EXPORT" }, {
            default: a(() => [
              e("div", du, [
                m(j, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: g
                }, {
                  default: a(() => [
                    v[12] || (v[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    h(" " + l(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), k(j, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: v[2] || (v[2] = (E) => s.value = "")
                }, {
                  default: a(() => [...v[13] || (v[13] = [
                    h(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : u("", !0)
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), k(he, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              m(ye, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Bt({
                icon: a(() => [
                  h(l(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  h(l(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  h(l(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    m(se, { label: "Saved to:" }, {
                      default: a(() => [
                        m(iu, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (o(), k(se, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : u("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), n("div", cu, [...v[14] || (v[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : u("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    m(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: i
                    }, {
                      default: a(() => [...v[15] || (v[15] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    m(j, {
                      variant: "ghost",
                      size: "sm",
                      onClick: v[3] || (v[3] = (E) => f.value = null)
                    }, {
                      default: a(() => [...v[16] || (v[16] = [
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
          })) : u("", !0)
        ]),
        _: 1
      }),
      m(Ve, {
        show: y.value,
        title: "About Environment Export",
        onClose: v[4] || (v[4] = (E) => y.value = !1)
      }, {
        content: a(() => [...v[17] || (v[17] = [
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
}), mu = /* @__PURE__ */ J(uu, [["__scopeId", "data-v-1777a9d5"]]), vu = { class: "file-input-wrapper" }, fu = ["accept", "multiple", "disabled"], gu = /* @__PURE__ */ q({
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
  setup(t, { expose: c, emit: s }) {
    const r = s, f = I(null);
    function y() {
      var i;
      (i = f.value) == null || i.click();
    }
    function g(i) {
      const d = i.target;
      d.files && d.files.length > 0 && (r("change", d.files), d.value = "");
    }
    return c({
      triggerInput: y
    }), (i, d) => (o(), n("div", vu, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: g
      }, null, 40, fu),
      m(j, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          le(i.$slots, "default", {}, () => [
            d[0] || (d[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            h(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), hu = /* @__PURE__ */ J(gu, [["__scopeId", "data-v-cd192091"]]), pu = {
  key: 0,
  class: "drop-zone-empty"
}, yu = { class: "drop-zone-text" }, wu = { class: "drop-zone-primary" }, bu = { class: "drop-zone-secondary" }, ku = { class: "drop-zone-actions" }, _u = {
  key: 1,
  class: "drop-zone-file"
}, $u = { class: "file-info" }, Cu = { class: "file-details" }, xu = { class: "file-name" }, Su = { class: "file-size" }, Iu = /* @__PURE__ */ q({
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
    const s = c, r = I(!1), f = I(null), y = I(0), g = O(() => f.value !== null), i = O(() => {
      var b;
      return ((b = f.value) == null ? void 0 : b.name) || "";
    }), d = O(() => {
      if (!f.value) return "";
      const b = f.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(b) {
      var x;
      y.value++, (x = b.dataTransfer) != null && x.types.includes("Files") && (r.value = !0);
    }
    function E(b) {
      b.dataTransfer && (b.dataTransfer.dropEffect = "copy");
    }
    function w() {
      y.value--, y.value === 0 && (r.value = !1);
    }
    function _(b) {
      var F;
      y.value = 0, r.value = !1;
      const x = (F = b.dataTransfer) == null ? void 0 : F.files;
      x && x.length > 0 && N(x[0]);
    }
    function C(b) {
      b.length > 0 && N(b[0]);
    }
    function N(b) {
      f.value = b, s("fileSelected", b);
    }
    function $() {
      f.value = null, s("clear");
    }
    return (b, x) => (o(), n("div", {
      class: Z(["file-drop-zone", { "drop-active": r.value, "has-file": g.value }]),
      onDragenter: pe(v, ["prevent"]),
      onDragover: pe(E, ["prevent"]),
      onDragleave: pe(w, ["prevent"]),
      onDrop: pe(_, ["prevent"])
    }, [
      g.value ? (o(), n("div", _u, [
        e("div", $u, [
          x[1] || (x[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Cu, [
            e("div", xu, l(i.value), 1),
            e("div", Su, l(d.value), 1)
          ])
        ]),
        m(j, {
          variant: "ghost",
          size: "xs",
          onClick: $,
          title: "Remove file"
        }, {
          default: a(() => [...x[2] || (x[2] = [
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
      ])) : (o(), n("div", pu, [
        x[0] || (x[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", yu, [
          e("p", wu, l(t.primaryText), 1),
          e("p", bu, l(t.secondaryText), 1)
        ]),
        e("div", ku, [
          m(hu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: C
          }, {
            default: a(() => [
              h(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Eu = /* @__PURE__ */ J(Iu, [["__scopeId", "data-v-e00abbca"]]), zu = { class: "import-preview" }, Mu = { class: "preview-header" }, Lu = {
  key: 0,
  class: "source-env"
}, Tu = { class: "preview-content" }, Ru = { class: "preview-section" }, Nu = { class: "section-header" }, Du = { class: "section-info" }, Ou = { class: "section-count" }, Uu = {
  key: 0,
  class: "item-list"
}, Bu = { class: "item-name" }, Pu = {
  key: 0,
  class: "item-more"
}, Vu = { class: "preview-section" }, Au = { class: "section-header" }, Fu = { class: "section-info" }, Wu = { class: "section-count" }, Gu = {
  key: 0,
  class: "item-list"
}, ju = { class: "item-details" }, Hu = { class: "item-name" }, Ku = { class: "item-meta" }, qu = {
  key: 0,
  class: "item-more"
}, Ju = { class: "preview-section" }, Xu = { class: "section-header" }, Yu = { class: "section-info" }, Qu = { class: "section-count" }, Zu = {
  key: 0,
  class: "item-list"
}, em = { class: "item-name" }, tm = {
  key: 0,
  class: "item-more"
}, om = {
  key: 0,
  class: "preview-section"
}, sm = { class: "git-info" }, nm = /* @__PURE__ */ q({
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
    const c = t, s = O(() => c.workflows.length), r = O(() => c.models.length), f = O(() => c.nodes.length);
    function y(g) {
      return g < 1024 ? `${g} B` : g < 1024 * 1024 ? `${(g / 1024).toFixed(1)} KB` : g < 1024 * 1024 * 1024 ? `${(g / (1024 * 1024)).toFixed(1)} MB` : `${(g / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (g, i) => (o(), n("div", zu, [
      e("div", Mu, [
        m(Ce, null, {
          default: a(() => [...i[0] || (i[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Lu, [
          i[1] || (i[1] = h(" From: ", -1)),
          m(_t, null, {
            default: a(() => [
              h(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : u("", !0)
      ]),
      e("div", Tu, [
        e("div", Ru, [
          e("div", Nu, [
            i[3] || (i[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Du, [
              i[2] || (i[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Ou, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Uu, [
            (o(!0), n(G, null, Q(t.workflows.slice(0, t.maxPreviewItems), (d) => (o(), n("div", {
              key: d,
              class: "preview-item"
            }, [
              i[4] || (i[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Bu, l(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Pu, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", Vu, [
          e("div", Au, [
            i[6] || (i[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Fu, [
              i[5] || (i[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Wu, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Gu, [
            (o(!0), n(G, null, Q(t.models.slice(0, t.maxPreviewItems), (d) => (o(), n("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              i[7] || (i[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", ju, [
                e("span", Hu, l(d.filename), 1),
                e("span", Ku, l(y(d.size)) + " • " + l(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", qu, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", Ju, [
          e("div", Xu, [
            i[9] || (i[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Yu, [
              i[8] || (i[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Qu, l(f.value) + " node" + l(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", Zu, [
            (o(!0), n(G, null, Q(t.nodes.slice(0, t.maxPreviewItems), (d) => (o(), n("div", {
              key: d,
              class: "preview-item"
            }, [
              i[10] || (i[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", em, l(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", tm, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", om, [
          i[11] || (i[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", sm, [
            t.gitBranch ? (o(), k(se, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                m(_t, null, {
                  default: a(() => [
                    h(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : u("", !0),
            t.gitCommit ? (o(), k(se, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                m(Vt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : u("", !0)
          ])
        ])) : u("", !0)
      ])
    ]));
  }
}), am = /* @__PURE__ */ J(nm, [["__scopeId", "data-v-182fe113"]]), lm = { class: "import-options" }, im = { class: "options-container" }, rm = { class: "option-section" }, dm = { class: "conflict-options" }, cm = ["value", "checked", "onChange"], um = { class: "conflict-content" }, mm = { class: "conflict-label" }, vm = { class: "conflict-description" }, fm = { class: "option-section" }, gm = { class: "component-toggles" }, hm = /* @__PURE__ */ q({
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
    const s = c, r = [
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
    return (f, y) => (o(), n("div", lm, [
      m(Ce, null, {
        default: a(() => [...y[4] || (y[4] = [
          h("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", im, [
        e("div", rm, [
          m(kt, null, {
            default: a(() => [...y[5] || (y[5] = [
              h("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", dm, [
            (o(), n(G, null, Q(r, (g) => e("label", {
              key: g.value,
              class: Z(["conflict-option", { active: t.conflictMode === g.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: g.value,
                checked: t.conflictMode === g.value,
                onChange: (i) => s("update:conflictMode", g.value)
              }, null, 40, cm),
              e("div", um, [
                e("span", mm, l(g.label), 1),
                e("span", vm, l(g.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", fm, [
          m(kt, null, {
            default: a(() => [...y[6] || (y[6] = [
              h("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", gm, [
            m(Be, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                m(Je, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (g) => s("update:includeWorkflows", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(Be, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                m(Je, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (g) => s("update:includeModels", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(Be, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                m(Je, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (g) => s("update:includeNodes", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(Be, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                m(Je, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (g) => s("update:includeGitHistory", g))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), pm = /* @__PURE__ */ J(hm, [["__scopeId", "data-v-0ec212b0"]]), ym = {
  key: 0,
  class: "import-empty"
}, wm = { class: "import-help" }, bm = {
  key: 1,
  class: "import-configure"
}, km = { class: "selected-file-bar" }, _m = { class: "file-bar-content" }, $m = { class: "file-bar-info" }, Cm = { class: "file-bar-name" }, xm = { class: "file-bar-size" }, Sm = { class: "import-actions" }, Im = {
  key: 2,
  class: "import-progress"
}, Em = { class: "progress-content" }, zm = { class: "progress-info" }, Mm = { class: "progress-title" }, Lm = { class: "progress-detail" }, Tm = { class: "progress-bar" }, Rm = { class: "progress-status" }, Nm = {
  key: 3,
  class: "import-complete"
}, Dm = { class: "complete-message" }, Om = { class: "complete-title" }, Um = { class: "complete-details" }, Bm = { class: "complete-actions" }, Pm = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const c = I(null), s = I(!1), r = I(!1), f = I(!1), y = I(""), g = I({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), i = I({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), d = I({
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
    }), v = O(() => g.value.includeWorkflows || g.value.includeModels || g.value.includeNodes || g.value.includeGitHistory);
    function E($) {
      c.value = $;
    }
    function w() {
      c.value = null, r.value = !1, f.value = !1, y.value = "";
    }
    function _() {
      w(), s.value = !1, i.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function C() {
      if (c.value) {
        s.value = !0, r.value = !1;
        try {
          const $ = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${d.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${d.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${d.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const b of $)
            i.value = b, await new Promise((x) => setTimeout(x, 800));
          i.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((b) => setTimeout(b, 500)), f.value = !0, y.value = `Successfully imported ${d.value.workflows.length} workflows, ${d.value.models.length} models, and ${d.value.nodes.length} custom nodes.`;
        } catch ($) {
          f.value = !1, y.value = $ instanceof Error ? $.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, r.value = !0;
        }
      }
    }
    function N($) {
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ($, b) => (o(), k(be, null, {
      header: a(() => [
        m(ke, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !c.value && !s.value ? (o(), n("div", ym, [
          m(Eu, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: E
          }),
          e("div", wm, [
            m(Ce, null, {
              default: a(() => [...b[5] || (b[5] = [
                h("How to Import", -1)
              ])]),
              _: 1
            }),
            b[6] || (b[6] = e("div", { class: "help-content" }, [
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
        ])) : c.value && !s.value && !r.value ? (o(), n("div", bm, [
          e("div", km, [
            e("div", _m, [
              b[7] || (b[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", $m, [
                e("div", Cm, l(c.value.name), 1),
                e("div", xm, l(N(c.value.size)), 1)
              ])
            ]),
            m(j, {
              variant: "ghost",
              size: "sm",
              onClick: w
            }, {
              default: a(() => [...b[8] || (b[8] = [
                h(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          m(am, {
            "source-environment": d.value.sourceEnvironment,
            workflows: d.value.workflows,
            models: d.value.models,
            nodes: d.value.nodes,
            "git-branch": d.value.gitBranch,
            "git-commit": d.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          m(pm, {
            "conflict-mode": g.value.conflictMode,
            "onUpdate:conflictMode": b[0] || (b[0] = (x) => g.value.conflictMode = x),
            "include-workflows": g.value.includeWorkflows,
            "onUpdate:includeWorkflows": b[1] || (b[1] = (x) => g.value.includeWorkflows = x),
            "include-models": g.value.includeModels,
            "onUpdate:includeModels": b[2] || (b[2] = (x) => g.value.includeModels = x),
            "include-nodes": g.value.includeNodes,
            "onUpdate:includeNodes": b[3] || (b[3] = (x) => g.value.includeNodes = x),
            "include-git-history": g.value.includeGitHistory,
            "onUpdate:includeGitHistory": b[4] || (b[4] = (x) => g.value.includeGitHistory = x)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !g.value.includeModels && d.value.models.length > 0 ? (o(), k(qe, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${d.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : u("", !0),
          e("div", Sm, [
            m(j, {
              variant: "primary",
              size: "md",
              disabled: !v.value,
              onClick: C
            }, {
              default: a(() => [...b[9] || (b[9] = [
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
            m(j, {
              variant: "secondary",
              size: "md",
              onClick: w
            }, {
              default: a(() => [...b[10] || (b[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Im, [
          e("div", Em, [
            b[11] || (b[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", zm, [
              e("div", Mm, l(i.value.message), 1),
              e("div", Lm, l(i.value.detail), 1)
            ])
          ]),
          e("div", Tm, [
            e("div", {
              class: "progress-bar-fill",
              style: Xe({ width: `${i.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Rm, l(i.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), n("div", Nm, [
          e("div", {
            class: Z(["complete-icon", f.value ? "success" : "error"])
          }, l(f.value ? "✓" : "✕"), 3),
          e("div", Dm, [
            e("div", Om, l(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Um, l(y.value), 1)
          ]),
          e("div", Bm, [
            m(j, {
              variant: "primary",
              size: "md",
              onClick: _
            }, {
              default: a(() => [...b[12] || (b[12] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : u("", !0)
      ]),
      _: 1
    }));
  }
}), Vm = /* @__PURE__ */ J(Pm, [["__scopeId", "data-v-18e18eb5"]]), Am = { class: "header-info" }, Fm = { class: "commit-hash" }, Wm = {
  key: 0,
  class: "commit-refs"
}, Gm = { class: "commit-message" }, jm = { class: "commit-date" }, Hm = {
  key: 0,
  class: "loading"
}, Km = {
  key: 1,
  class: "changes-section"
}, qm = { class: "stats-row" }, Jm = { class: "stat" }, Xm = { class: "stat insertions" }, Ym = { class: "stat deletions" }, Qm = {
  key: 0,
  class: "change-group"
}, Zm = {
  key: 1,
  class: "change-group"
}, ev = {
  key: 0,
  class: "version"
}, tv = {
  key: 2,
  class: "change-group"
}, ov = { class: "change-item" }, sv = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: s } = _e(), r = I(null), f = I(!0), y = O(() => {
      if (!r.value) return !1;
      const i = r.value.changes.workflows;
      return i.added.length > 0 || i.modified.length > 0 || i.deleted.length > 0;
    }), g = O(() => {
      if (!r.value) return !1;
      const i = r.value.changes.nodes;
      return i.added.length > 0 || i.removed.length > 0;
    });
    return we(async () => {
      try {
        r.value = await s(c.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (i, d) => (o(), k(ht, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => i.$emit("close"))
    }, {
      header: a(() => {
        var v, E, w, _;
        return [
          e("div", Am, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Fm, l(((v = r.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((E = t.commit.hash) == null ? void 0 : E.slice(0, 7))), 1),
            (_ = (w = r.value) == null ? void 0 : w.refs) != null && _.length ? (o(), n("span", Wm, [
              (o(!0), n(G, null, Q(r.value.refs, (C) => (o(), n("span", {
                key: C,
                class: "ref-badge"
              }, l(C), 1))), 128))
            ])) : u("", !0)
          ]),
          m(ae, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (C) => i.$emit("close"))
          }, {
            default: a(() => [...d[5] || (d[5] = [
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
        var v, E;
        return [
          e("div", Gm, l(((v = r.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", jm, l(((E = r.value) == null ? void 0 : E.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (o(), n("div", Hm, "Loading details...")) : r.value ? (o(), n("div", Km, [
            e("div", qm, [
              e("span", Jm, l(r.value.stats.files_changed) + " files", 1),
              e("span", Xm, "+" + l(r.value.stats.insertions), 1),
              e("span", Ym, "-" + l(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", Qm, [
              m(rt, { variant: "section" }, {
                default: a(() => [...d[6] || (d[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(G, null, Q(r.value.changes.workflows.added, (w) => (o(), n("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(w), 1)
              ]))), 128)),
              (o(!0), n(G, null, Q(r.value.changes.workflows.modified, (w) => (o(), n("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(w), 1)
              ]))), 128)),
              (o(!0), n(G, null, Q(r.value.changes.workflows.deleted, (w) => (o(), n("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(w), 1)
              ]))), 128))
            ])) : u("", !0),
            g.value ? (o(), n("div", Zm, [
              m(rt, { variant: "section" }, {
                default: a(() => [...d[10] || (d[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(G, null, Q(r.value.changes.nodes.added, (w) => (o(), n("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(w.name), 1),
                w.version ? (o(), n("span", ev, "(" + l(w.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), n(G, null, Q(r.value.changes.nodes.removed, (w) => (o(), n("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(w.name), 1)
              ]))), 128))
            ])) : u("", !0),
            r.value.changes.models.resolved > 0 ? (o(), n("div", tv, [
              m(rt, { variant: "section" }, {
                default: a(() => [...d[13] || (d[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", ov, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: a(() => [
        m(ae, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => i.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...d[15] || (d[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        m(ae, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => i.$emit("checkout", t.commit))
        }, {
          default: a(() => [...d[16] || (d[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), nv = /* @__PURE__ */ J(sv, [["__scopeId", "data-v-d256ff6d"]]), av = { class: "dialog-message" }, lv = {
  key: 0,
  class: "dialog-details"
}, iv = {
  key: 1,
  class: "dialog-warning"
}, rv = /* @__PURE__ */ q({
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
    return (c, s) => (o(), k(ht, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => c.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", av, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", lv, [
          (o(!0), n(G, null, Q(t.details, (r, f) => (o(), n("div", {
            key: f,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : u("", !0),
        t.warning ? (o(), n("p", iv, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + l(t.warning), 1)
        ])) : u("", !0)
      ]),
      footer: a(() => [
        m(ae, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => c.$emit("cancel"))
        }, {
          default: a(() => [
            h(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), k(ae, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => c.$emit("secondary"))
        }, {
          default: a(() => [
            h(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        m(ae, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => c.$emit("confirm"))
        }, {
          default: a(() => [
            h(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), dv = /* @__PURE__ */ J(rv, [["__scopeId", "data-v-3670b9f5"]]), cv = { class: "base-textarea-wrapper" }, uv = ["value", "rows", "placeholder", "disabled", "maxlength"], mv = {
  key: 0,
  class: "base-textarea-count"
}, vv = /* @__PURE__ */ q({
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
    return (c, s) => (o(), n("div", cv, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = Pe(pe((r) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Pe(pe((r) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, uv),
      t.showCharCount && t.maxLength ? (o(), n("div", mv, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : u("", !0)
    ]));
  }
}), Rt = /* @__PURE__ */ J(vv, [["__scopeId", "data-v-5516e6fc"]]), fv = ["checked", "disabled"], gv = { class: "base-checkbox-box" }, hv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, pv = {
  key: 0,
  class: "base-checkbox-label"
}, yv = /* @__PURE__ */ q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, s) => (o(), n("label", {
      class: Z(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (r) => c.$emit("update:modelValue", r.target.checked))
      }, null, 40, fv),
      e("span", gv, [
        t.modelValue ? (o(), n("svg", hv, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : u("", !0)
      ]),
      c.$slots.default ? (o(), n("span", pv, [
        le(c.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ J(yv, [["__scopeId", "data-v-bf17c831"]]), wv = { class: "popover-header" }, bv = { class: "popover-body" }, kv = {
  key: 0,
  class: "changes-summary"
}, _v = {
  key: 0,
  class: "change-item"
}, $v = {
  key: 1,
  class: "change-item"
}, Cv = {
  key: 2,
  class: "change-item"
}, xv = {
  key: 3,
  class: "change-item"
}, Sv = {
  key: 4,
  class: "change-item"
}, Iv = {
  key: 1,
  class: "no-changes"
}, Ev = {
  key: 2,
  class: "loading"
}, zv = {
  key: 3,
  class: "issues-warning"
}, Mv = { class: "warning-header" }, Lv = { class: "warning-title" }, Tv = { class: "issues-list" }, Rv = { class: "message-section" }, Nv = { class: "popover-footer" }, Dv = {
  key: 1,
  class: "commit-popover"
}, Ov = { class: "popover-header" }, Uv = { class: "popover-body" }, Bv = {
  key: 0,
  class: "changes-summary"
}, Pv = {
  key: 0,
  class: "change-item"
}, Vv = {
  key: 1,
  class: "change-item"
}, Av = {
  key: 2,
  class: "change-item"
}, Fv = {
  key: 3,
  class: "change-item"
}, Wv = {
  key: 4,
  class: "change-item"
}, Gv = {
  key: 1,
  class: "no-changes"
}, jv = {
  key: 2,
  class: "loading"
}, Hv = {
  key: 3,
  class: "issues-warning"
}, Kv = { class: "warning-header" }, qv = { class: "warning-title" }, Jv = { class: "issues-list" }, Xv = { class: "message-section" }, Yv = { class: "popover-footer" }, Qv = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const s = t, r = c, { commit: f } = _e(), y = I(""), g = I(!1), i = I(!1), d = I(null), v = O(() => {
      if (!s.status) return !1;
      const N = s.status.workflows;
      return N.new.length > 0 || N.modified.length > 0 || N.deleted.length > 0 || s.status.has_changes;
    }), E = O(() => {
      var N;
      return (N = s.status) != null && N.workflows.analyzed ? s.status.workflows.analyzed.filter(
        ($) => $.has_issues && ($.sync_state === "new" || $.sync_state === "modified")
      ) : [];
    }), w = O(() => E.value.length > 0), _ = O(() => w.value && !i.value);
    async function C() {
      var N, $, b;
      if (!(w.value && !i.value) && !(!v.value || !y.value.trim() || g.value)) {
        g.value = !0, d.value = null;
        try {
          const x = await f(y.value.trim(), i.value);
          x.status === "success" ? (d.value = {
            type: "success",
            message: `Committed: ${((N = x.summary) == null ? void 0 : N.new) || 0} new, ${(($ = x.summary) == null ? void 0 : $.modified) || 0} modified, ${((b = x.summary) == null ? void 0 : b.deleted) || 0} deleted`
          }, y.value = "", i.value = !1, setTimeout(() => r("committed"), 1e3)) : x.status === "no_changes" ? d.value = { type: "error", message: "No changes to commit" } : x.status === "blocked" ? d.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : d.value = { type: "error", message: x.message || "Commit failed" };
        } catch (x) {
          d.value = { type: "error", message: x instanceof Error ? x.message : "Commit failed" };
        } finally {
          g.value = !1;
        }
      }
    }
    return (N, $) => t.asModal ? (o(), k(Se, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (b) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", wv, [
            $[11] || ($[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: $[0] || ($[0] = (b) => r("close"))
            }, [...$[10] || ($[10] = [
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
          e("div", bv, [
            t.status && v.value ? (o(), n("div", kv, [
              t.status.workflows.new.length ? (o(), n("div", _v, [
                $[12] || ($[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : u("", !0),
              t.status.workflows.modified.length ? (o(), n("div", $v, [
                $[13] || ($[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : u("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", Cv, [
                $[14] || ($[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", xv, [
                $[15] || ($[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Sv, [
                $[16] || ($[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : u("", !0)
            ])) : t.status ? (o(), n("div", Iv, " No changes to commit ")) : (o(), n("div", Ev, " Loading... ")),
            w.value ? (o(), n("div", zv, [
              e("div", Mv, [
                $[17] || ($[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Lv, l(E.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Tv, [
                (o(!0), n(G, null, Q(E.value, (b) => (o(), n("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(b.name), 1),
                  h(": " + l(b.issue_summary), 1)
                ]))), 128))
              ]),
              m(Nt, {
                modelValue: i.value,
                "onUpdate:modelValue": $[1] || ($[1] = (b) => i.value = b),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...$[18] || ($[18] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : u("", !0),
            e("div", Rv, [
              m(Rt, {
                modelValue: y.value,
                "onUpdate:modelValue": $[2] || ($[2] = (b) => y.value = b),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || g.value || _.value,
                rows: 3,
                onCtrlEnter: C
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            d.value ? (o(), n("div", {
              key: 4,
              class: Z(["result", d.value.type])
            }, l(d.value.message), 3)) : u("", !0)
          ]),
          e("div", Nv, [
            m(ae, {
              variant: "secondary",
              onClick: $[3] || ($[3] = (b) => r("close"))
            }, {
              default: a(() => [...$[19] || ($[19] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: i.value ? "danger" : "primary",
              disabled: !v.value || !y.value.trim() || g.value || _.value,
              loading: g.value,
              onClick: C
            }, {
              default: a(() => [
                h(l(g.value ? "Committing..." : i.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Dv, [
      e("div", Ov, [
        $[21] || ($[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: $[6] || ($[6] = (b) => r("close"))
        }, [...$[20] || ($[20] = [
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
      e("div", Uv, [
        t.status && v.value ? (o(), n("div", Bv, [
          t.status.workflows.new.length ? (o(), n("div", Pv, [
            $[22] || ($[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          t.status.workflows.modified.length ? (o(), n("div", Vv, [
            $[23] || ($[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", Av, [
            $[24] || ($[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", Fv, [
            $[25] || ($[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", Wv, [
            $[26] || ($[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : t.status ? (o(), n("div", Gv, " No changes to commit ")) : (o(), n("div", jv, " Loading... ")),
        w.value ? (o(), n("div", Hv, [
          e("div", Kv, [
            $[27] || ($[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", qv, l(E.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", Jv, [
            (o(!0), n(G, null, Q(E.value, (b) => (o(), n("div", {
              key: b.name,
              class: "issue-item"
            }, [
              e("strong", null, l(b.name), 1),
              h(": " + l(b.issue_summary), 1)
            ]))), 128))
          ]),
          m(Nt, {
            modelValue: i.value,
            "onUpdate:modelValue": $[7] || ($[7] = (b) => i.value = b),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...$[28] || ($[28] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : u("", !0),
        e("div", Xv, [
          m(Rt, {
            modelValue: y.value,
            "onUpdate:modelValue": $[8] || ($[8] = (b) => y.value = b),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || g.value || _.value,
            rows: 3,
            onCtrlEnter: C
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        d.value ? (o(), n("div", {
          key: 4,
          class: Z(["result", d.value.type])
        }, l(d.value.message), 3)) : u("", !0)
      ]),
      e("div", Yv, [
        m(ae, {
          variant: "secondary",
          onClick: $[9] || ($[9] = (b) => r("close"))
        }, {
          default: a(() => [...$[29] || ($[29] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m(ae, {
          variant: i.value ? "danger" : "primary",
          disabled: !v.value || !y.value.trim() || g.value || _.value,
          loading: g.value,
          onClick: C
        }, {
          default: a(() => [
            h(l(g.value ? "Committing..." : i.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Wt = /* @__PURE__ */ J(Qv, [["__scopeId", "data-v-38b45183"]]), Zv = { class: "modal-header" }, ef = { class: "modal-body" }, tf = { class: "switch-message" }, of = { class: "switch-details" }, sf = { class: "modal-actions" }, nf = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, s) => (o(), k(Se, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Zv, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", ef, [
            e("p", tf, [
              s[6] || (s[6] = h(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = h(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = h("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", of, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", sf, [
            m(j, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => c.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(j, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => c.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                h(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), af = /* @__PURE__ */ J(nf, [["__scopeId", "data-v-e9c5253e"]]), lf = { class: "progress-bar" }, rf = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, s = O(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (r, f) => (o(), n("div", lf, [
      e("div", {
        class: Z(["progress-fill", t.variant]),
        style: Xe({ width: s.value })
      }, null, 6)
    ]));
  }
}), df = /* @__PURE__ */ J(rf, [["__scopeId", "data-v-1beb0512"]]), cf = {
  key: 0,
  class: "modal-overlay"
}, uf = { class: "modal-content" }, mf = { class: "modal-body" }, vf = { class: "progress-info" }, ff = { class: "progress-percentage" }, gf = { class: "progress-state" }, hf = { class: "switch-steps" }, pf = { class: "step-icon" }, yf = { class: "step-label" }, wf = /* @__PURE__ */ q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, s = O(() => {
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
      return c.message || y[c.state] || c.state;
    }), r = O(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), f = O(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], g = y.findIndex((i) => i.state === c.state);
      return y.map((i, d) => {
        let v = "pending", E = "○";
        return d < g ? (v = "completed", E = "✓") : d === g && (v = "active", E = "⟳"), {
          ...i,
          status: v,
          icon: E
        };
      });
    });
    return (y, g) => (o(), k(Se, { to: "body" }, [
      t.show ? (o(), n("div", cf, [
        e("div", uf, [
          g[1] || (g[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", mf, [
            m(df, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", vf, [
              e("div", ff, l(t.progress) + "%", 1),
              e("div", gf, l(s.value), 1)
            ]),
            e("div", hf, [
              (o(!0), n(G, null, Q(f.value, (i) => (o(), n("div", {
                key: i.state,
                class: Z(["switch-step", i.status])
              }, [
                e("span", pf, l(i.icon), 1),
                e("span", yf, l(i.label), 1)
              ], 2))), 128))
            ]),
            g[0] || (g[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), bf = /* @__PURE__ */ J(wf, [["__scopeId", "data-v-768a5078"]]), kf = { class: "modal-header" }, _f = { class: "modal-body" }, $f = {
  key: 0,
  class: "node-section"
}, Cf = { class: "node-list" }, xf = {
  key: 1,
  class: "node-section"
}, Sf = { class: "node-list" }, If = { class: "modal-actions" }, Ef = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, s) => (o(), k(Se, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", kf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", _f, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", $f, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Cf, [
                (o(!0), n(G, null, Q(t.mismatchDetails.missing_nodes, (r) => (o(), n("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : u("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", xf, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Sf, [
                (o(!0), n(G, null, Q(t.mismatchDetails.extra_nodes, (r) => (o(), n("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + l(r), 1))), 128))
              ])
            ])) : u("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", If, [
            m(j, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => c.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(j, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => c.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                h(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), zf = /* @__PURE__ */ J(Ef, [["__scopeId", "data-v-7cad7518"]]);
async function nt(t, c = {}, s = 5e3) {
  const r = new AbortController(), f = setTimeout(() => r.abort(), s);
  try {
    const y = await fetch(t, {
      ...c,
      signal: r.signal
    });
    return clearTimeout(f), y;
  } catch (y) {
    throw clearTimeout(f), y.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : y;
  }
}
function Mf() {
  const t = I(null);
  async function c() {
    try {
      const g = await nt(
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
  async function s() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const g = await nt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!g.ok) throw new Error("Health check failed");
      return await g.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const g = await nt(
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
  async function f() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await nt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await nt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: c,
    checkHealth: s,
    getStatus: r,
    restart: f,
    kill: y
  };
}
const Lf = { class: "comfygit-panel" }, Tf = { class: "panel-header" }, Rf = { class: "header-left" }, Nf = {
  key: 0,
  class: "header-info"
}, Df = { class: "header-actions" }, Of = { class: "env-switcher" }, Uf = {
  key: 0,
  class: "header-info"
}, Bf = { class: "branch-name" }, Pf = { class: "panel-main" }, Vf = { class: "sidebar" }, Af = { class: "sidebar-section" }, Ff = { class: "sidebar-section" }, Wf = { class: "sidebar-section" }, Gf = { class: "content-area" }, jf = {
  key: 0,
  class: "error-message"
}, Hf = {
  key: 1,
  class: "loading"
}, Kf = { class: "dialog-content env-selector-dialog" }, qf = { class: "dialog-header" }, Jf = { class: "dialog-body" }, Xf = { class: "env-list" }, Yf = { class: "env-info" }, Qf = { class: "env-name-row" }, Zf = { class: "env-indicator" }, eg = { class: "env-name" }, tg = {
  key: 0,
  class: "env-branch"
}, og = {
  key: 1,
  class: "current-label"
}, sg = { class: "env-stats" }, ng = ["onClick"], ag = { class: "toast-container" }, lg = { class: "toast-icon" }, ig = { class: "toast-message" }, rg = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const s = c, {
      getStatus: r,
      getHistory: f,
      getBranches: y,
      checkout: g,
      createBranch: i,
      switchBranch: d,
      getEnvironments: v,
      switchEnvironment: E,
      getSwitchProgress: w,
      syncEnvironmentManually: _
    } = _e(), C = Mf(), N = I(null), $ = I([]), b = I([]), x = I([]), F = O(() => x.value.find((W) => W.is_current)), z = I(!1), p = I(null), S = I(null), M = I(!1), V = I(!1), T = I(!1), D = I(""), U = I({ state: "idle", progress: 0, message: "" });
    let K = null, B = null;
    const R = I("status"), X = I("this-env");
    function H(W, L) {
      R.value = W, X.value = L;
    }
    function fe(W) {
      const ie = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      ie && H(ie.view, ie.section);
    }
    function Ie() {
      H("branches", "this-env");
    }
    const me = I(null), ve = I(!1), te = I(!1), Re = I([]);
    let ot = 0;
    function ce(W, L = "info", ie = 3e3) {
      const ge = ++ot;
      return Re.value.push({ id: ge, message: W, type: L }), ie > 0 && setTimeout(() => {
        Re.value = Re.value.filter((ze) => ze.id !== ge);
      }, ie), ge;
    }
    function xe(W) {
      Re.value = Re.value.filter((L) => L.id !== W);
    }
    function st(W) {
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
    const Y = O(() => {
      if (!N.value) return "neutral";
      const W = N.value.workflows, L = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? L ? "warning" : "success" : "error";
    });
    O(() => N.value ? Y.value === "success" ? "All synced" : Y.value === "warning" ? "Uncommitted changes" : Y.value === "error" ? "Not synced" : "" : "");
    async function oe() {
      z.value = !0, p.value = null;
      try {
        const [W, L, ie, ge] = await Promise.all([
          r(),
          f(),
          y(),
          v()
        ]);
        N.value = W, $.value = L.commits, b.value = ie.branches, x.value = ge, s("statusUpdate", W);
      } catch (W) {
        p.value = W instanceof Error ? W.message : "Failed to load status", N.value = null, $.value = [], b.value = [];
      } finally {
        z.value = !1;
      }
    }
    function P(W) {
      S.value = W;
    }
    async function A(W) {
      var ie;
      S.value = null;
      const L = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      me.value = {
        title: L ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: L ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((ie = W.hash) == null ? void 0 : ie.slice(0, 7))}?`,
        details: L ? Mt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: L,
        onConfirm: async () => {
          var Me;
          me.value = null, De();
          const ge = ce(`Checking out ${W.short_hash || ((Me = W.hash) == null ? void 0 : Me.slice(0, 7))}...`, "info", 0), ze = await g(W.hash, L);
          xe(ge), ze.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(ze.message || "Checkout failed", "error");
        }
      };
    }
    async function ee(W) {
      const L = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      me.value = {
        title: L ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: L ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: L ? Mt() : void 0,
        warning: L ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          me.value = null, De();
          const ie = ce(`Switching to ${W}...`, "info", 0), ge = await d(W, L);
          xe(ie), ge.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(ge.message || "Branch switch failed", "error");
        }
      };
    }
    async function ue(W) {
      const L = ce(`Creating branch ${W}...`, "info", 0), ie = await i(W);
      xe(L), ie.status === "success" ? (ce(`Branch "${W}" created`, "success"), await oe()) : ce(ie.message || "Failed to create branch", "error");
    }
    async function Ee(W) {
      S.value = null;
      const L = prompt("Enter branch name:");
      if (L) {
        const ie = ce(`Creating branch ${L}...`, "info", 0), ge = await i(L, W.hash);
        xe(ie), ge.status === "success" ? (ce(`Branch "${L}" created from ${W.short_hash}`, "success"), await oe()) : ce(ge.message || "Failed to create branch", "error");
      }
    }
    function De() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function We(W) {
      M.value = !1, D.value = W, V.value = !0;
    }
    async function mt() {
      V.value = !1, T.value = !0, De(), U.value = {
        progress: 10,
        state: je(10),
        message: vt(10)
      };
      try {
        await E(D.value), qt(), Jt();
      } catch (W) {
        He(), T.value = !1, ce(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), U.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function je(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function vt(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[je(W)] || "";
    }
    function qt() {
      if (B) return;
      let W = 10;
      const L = 60, ie = 5e3, ge = 100, ze = (L - W) / (ie / ge);
      B = window.setInterval(() => {
        if (W += ze, W >= L && (W = L, He()), U.value.progress < L) {
          const Me = Math.floor(W);
          U.value = {
            progress: Me,
            state: je(Me),
            message: vt(Me)
          };
        }
      }, ge);
    }
    function He() {
      B && (clearInterval(B), B = null);
    }
    function Jt() {
      K || (K = window.setInterval(async () => {
        try {
          let W = await C.getStatus();
          if ((!W || W.state === "idle") && (W = await w()), !W)
            return;
          const L = W.progress || 0;
          L >= 60 && He();
          const ie = Math.max(L, U.value.progress), ge = W.state && W.state !== "idle" && W.state !== "unknown", ze = ge ? W.state : je(ie), Me = ge && W.message || vt(ie);
          U.value = {
            state: ze,
            progress: ie,
            message: Me
          }, W.state === "complete" ? (He(), pt(), T.value = !1, ce(`✓ Switched to ${D.value}`, "success"), await oe(), D.value = "") : W.state === "rolled_back" ? (He(), pt(), T.value = !1, ce("Switch failed, restored previous environment", "warning"), D.value = "") : W.state === "critical_failure" && (He(), pt(), T.value = !1, ce(`Critical error during switch: ${W.message}`, "error"), D.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function pt() {
      He(), K && (clearInterval(K), K = null);
    }
    function Xt() {
      V.value = !1, D.value = "";
    }
    async function Yt() {
      ve.value = !1, await oe(), ce("✓ Changes committed", "success");
    }
    async function Qt() {
      te.value = !1;
      const W = ce("Syncing environment...", "info", 0);
      try {
        const L = await _("skip", !0);
        if (xe(W), L.status === "success") {
          const ie = [];
          L.nodes_installed.length && ie.push(`${L.nodes_installed.length} installed`), L.nodes_removed.length && ie.push(`${L.nodes_removed.length} removed`);
          const ge = ie.length ? `: ${ie.join(", ")}` : "";
          ce(`✓ Environment synced${ge}`, "success"), await oe();
        } else {
          const ie = L.errors.length ? L.errors.join("; ") : L.message;
          ce(`Sync failed: ${ie}`, "error");
        }
      } catch (L) {
        xe(W), ce(`Sync error: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
      }
    }
    async function Zt(W) {
      const L = ce(`Creating environment "${W}"...`, "info", 0);
      xe(L), ce("Environment creation not yet implemented", "warning");
    }
    async function eo(W) {
      const L = ce(`Deleting environment "${W}"...`, "info", 0);
      xe(L), ce("Environment deletion not yet implemented", "warning");
    }
    function to(W) {
      ce(`Viewing details for "${W}"`, "info"), H("models-env", "this-env");
    }
    function Mt() {
      if (!N.value) return [];
      const W = [], L = N.value.workflows;
      return L.new.length && W.push(`${L.new.length} new workflow(s)`), L.modified.length && W.push(`${L.modified.length} modified workflow(s)`), L.deleted.length && W.push(`${L.deleted.length} deleted workflow(s)`), W;
    }
    return we(oe), (W, L) => {
      var ie, ge, ze, Me;
      return o(), n("div", Lf, [
        e("div", Tf, [
          e("div", Rf, [
            L[27] || (L[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (o(), n("div", Nf)) : u("", !0)
          ]),
          e("div", Df, [
            e("button", {
              class: Z(["icon-btn", { spinning: z.value }]),
              onClick: oe,
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
              onClick: L[0] || (L[0] = (ne) => s("close")),
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
        e("div", Of, [
          L[31] || (L[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: L[1] || (L[1] = (ne) => H("environments", "all-envs"))
          }, [
            N.value ? (o(), n("div", Uf, [
              e("span", null, l(((ie = F.value) == null ? void 0 : ie.name) || ((ge = N.value) == null ? void 0 : ge.environment) || "Loading..."), 1),
              e("span", Bf, "(" + l(N.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            L[30] || (L[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Pf, [
          e("div", Vf, [
            e("div", Af, [
              L[32] || (L[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "status" && X.value === "this-env" }]),
                onClick: L[2] || (L[2] = (ne) => H("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "workflows" }]),
                onClick: L[3] || (L[3] = (ne) => H("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "models-env" }]),
                onClick: L[4] || (L[4] = (ne) => H("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "branches" }]),
                onClick: L[5] || (L[5] = (ne) => H("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "history" }]),
                onClick: L[6] || (L[6] = (ne) => H("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "nodes" }]),
                onClick: L[7] || (L[7] = (ne) => H("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "debug-env" }]),
                onClick: L[8] || (L[8] = (ne) => H("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            L[35] || (L[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Ff, [
              L[33] || (L[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "environments" }]),
                onClick: L[9] || (L[9] = (ne) => H("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "model-index" }]),
                onClick: L[10] || (L[10] = (ne) => H("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "settings" }]),
                onClick: L[11] || (L[11] = (ne) => H("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "debug-workspace" }]),
                onClick: L[12] || (L[12] = (ne) => H("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            L[36] || (L[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Wf, [
              L[34] || (L[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "export" }]),
                onClick: L[13] || (L[13] = (ne) => H("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "import" }]),
                onClick: L[14] || (L[14] = (ne) => H("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: R.value === "remotes" }]),
                onClick: L[15] || (L[15] = (ne) => H("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Gf, [
            p.value ? (o(), n("div", jf, l(p.value), 1)) : !N.value && R.value === "status" ? (o(), n("div", Hf, " Loading status... ")) : (o(), n(G, { key: 2 }, [
              R.value === "status" ? (o(), k(Bn, {
                key: 0,
                status: N.value,
                onSwitchBranch: Ie,
                onCommitChanges: L[16] || (L[16] = (ne) => ve.value = !0),
                onSyncEnvironment: L[17] || (L[17] = (ne) => te.value = !0),
                onViewWorkflows: L[18] || (L[18] = (ne) => H("workflows", "this-env")),
                onViewHistory: L[19] || (L[19] = (ne) => H("history", "this-env")),
                onViewDebug: L[20] || (L[20] = (ne) => H("debug-env", "this-env"))
              }, null, 8, ["status"])) : R.value === "workflows" ? (o(), k(Dd, {
                key: 1,
                onRefresh: oe
              })) : R.value === "models-env" ? (o(), k(Bd, {
                key: 2,
                onNavigate: fe
              })) : R.value === "branches" ? (o(), k(Zn, {
                key: 3,
                branches: b.value,
                current: ((ze = N.value) == null ? void 0 : ze.branch) || null,
                onSwitch: ee,
                onCreate: ue
              }, null, 8, ["branches", "current"])) : R.value === "history" ? (o(), k(ca, {
                key: 4,
                commits: $.value,
                onSelect: P,
                onCheckout: A
              }, null, 8, ["commits"])) : R.value === "nodes" ? (o(), k(jd, { key: 5 })) : R.value === "debug-env" ? (o(), k(Gc, { key: 6 })) : R.value === "environments" ? (o(), k(ou, {
                key: 7,
                onSwitch: We,
                onCreate: Zt,
                onDelete: eo,
                onViewDetails: to
              })) : R.value === "model-index" ? (o(), k(Vd, { key: 8 })) : R.value === "settings" ? (o(), k(Vc, { key: 9 })) : R.value === "debug-workspace" ? (o(), k(Fc, { key: 10 })) : R.value === "export" ? (o(), k(mu, { key: 11 })) : R.value === "import" ? (o(), k(Vm, { key: 12 })) : R.value === "remotes" ? (o(), k(kc, { key: 13 })) : u("", !0)
            ], 64))
          ])
        ]),
        S.value ? (o(), k(nv, {
          key: 0,
          commit: S.value,
          onClose: L[21] || (L[21] = (ne) => S.value = null),
          onCheckout: A,
          onCreateBranch: Ee
        }, null, 8, ["commit"])) : u("", !0),
        me.value ? (o(), k(dv, {
          key: 1,
          title: me.value.title,
          message: me.value.message,
          details: me.value.details,
          warning: me.value.warning,
          confirmLabel: me.value.confirmLabel,
          cancelLabel: me.value.cancelLabel,
          secondaryLabel: me.value.secondaryLabel,
          secondaryAction: me.value.secondaryAction,
          destructive: me.value.destructive,
          onConfirm: me.value.onConfirm,
          onCancel: L[22] || (L[22] = (ne) => me.value = null),
          onSecondary: me.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        m(af, {
          show: V.value,
          "from-environment": ((Me = F.value) == null ? void 0 : Me.name) || "unknown",
          "to-environment": D.value,
          onConfirm: mt,
          onClose: Xt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ve.value && N.value ? (o(), k(Wt, {
          key: 2,
          status: N.value,
          "as-modal": !0,
          onClose: L[23] || (L[23] = (ne) => ve.value = !1),
          onCommitted: Yt
        }, null, 8, ["status"])) : u("", !0),
        te.value && N.value ? (o(), k(zf, {
          key: 3,
          show: te.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: Qt,
          onClose: L[24] || (L[24] = (ne) => te.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : u("", !0),
        m(bf, {
          show: T.value,
          state: U.value.state,
          progress: U.value.progress,
          message: U.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        M.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: L[26] || (L[26] = pe((ne) => M.value = !1, ["self"]))
        }, [
          e("div", Kf, [
            e("div", qf, [
              L[38] || (L[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: L[25] || (L[25] = (ne) => M.value = !1)
              }, [...L[37] || (L[37] = [
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
            e("div", Jf, [
              L[39] || (L[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Xf, [
                (o(!0), n(G, null, Q(x.value, (ne) => (o(), n("div", {
                  key: ne.name,
                  class: Z(["env-item", { current: ne.is_current }])
                }, [
                  e("div", Yf, [
                    e("div", Qf, [
                      e("span", Zf, l(ne.is_current ? "●" : "○"), 1),
                      e("span", eg, l(ne.name), 1),
                      ne.current_branch ? (o(), n("span", tg, "(" + l(ne.current_branch) + ")", 1)) : u("", !0),
                      ne.is_current ? (o(), n("span", og, "CURRENT")) : u("", !0)
                    ]),
                    e("div", sg, l(ne.workflow_count) + " workflows • " + l(ne.node_count) + " nodes ", 1)
                  ]),
                  ne.is_current ? u("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (gh) => We(ne.name)
                  }, " SWITCH ", 8, ng))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        e("div", ag, [
          m(lo, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(G, null, Q(Re.value, (ne) => (o(), n("div", {
                key: ne.id,
                class: Z(["toast", ne.type])
              }, [
                e("span", lg, l(st(ne.type)), 1),
                e("span", ig, l(ne.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), dg = /* @__PURE__ */ J(rg, [["__scopeId", "data-v-d9e68767"]]), cg = { class: "item-header" }, ug = { class: "item-info" }, mg = { class: "filename" }, vg = { class: "metadata" }, fg = { class: "size" }, gg = {
  key: 0,
  class: "type"
}, hg = { class: "item-actions" }, pg = {
  key: 0,
  class: "progress-section"
}, yg = { class: "progress-bar" }, wg = { class: "progress-stats" }, bg = { class: "downloaded" }, kg = { class: "speed" }, _g = {
  key: 0,
  class: "eta"
}, $g = {
  key: 1,
  class: "status-msg paused"
}, Cg = {
  key: 2,
  class: "status-msg queued"
}, xg = {
  key: 3,
  class: "status-msg completed"
}, Sg = {
  key: 4,
  class: "status-msg failed"
}, Ig = {
  key: 0,
  class: "retries"
}, Eg = /* @__PURE__ */ q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const s = c;
    function r(g) {
      if (g === 0) return "?";
      const i = g / (1024 * 1024 * 1024);
      return i >= 1 ? `${i.toFixed(2)} GB` : `${(g / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(g) {
      return g === 0 ? "-" : `${(g / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(g) {
      if (g < 60) return `${Math.round(g)}s`;
      const i = Math.floor(g / 60);
      return i < 60 ? `${i}m` : `${Math.floor(i / 60)}h ${i % 60}m`;
    }
    return (g, i) => (o(), n("div", {
      class: Z(["download-item", `status-${t.item.status}`])
    }, [
      e("div", cg, [
        e("div", ug, [
          e("div", mg, l(t.item.filename), 1),
          e("div", vg, [
            e("span", fg, l(r(t.item.size)), 1),
            t.item.type ? (o(), n("span", gg, l(t.item.type), 1)) : u("", !0)
          ])
        ]),
        e("div", hg, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), n("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: i[0] || (i[0] = (d) => s("cancel")),
            title: "Cancel"
          }, " × ")) : u("", !0),
          t.item.status === "paused" ? (o(), n("button", {
            key: 1,
            class: "action-icon resume",
            onClick: i[1] || (i[1] = (d) => s("resume")),
            title: "Resume"
          }, " ▶ ")) : u("", !0),
          t.item.status === "failed" ? (o(), n("button", {
            key: 2,
            class: "action-icon retry",
            onClick: i[2] || (i[2] = (d) => s("retry")),
            title: "Retry"
          }, " ↻ ")) : u("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), n("button", {
            key: 3,
            class: "action-icon remove",
            onClick: i[3] || (i[3] = (d) => s("remove")),
            title: "Remove"
          }, " × ")) : u("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), n("div", pg, [
        e("div", yg, [
          e("div", {
            class: "progress-fill",
            style: Xe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", wg, [
          e("span", bg, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", kg, l(f(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", _g, l(y(t.item.eta)), 1)) : u("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", $g, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", Cg, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", xg, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", Sg, [
        h(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", Ig, "(" + l(t.item.retries) + " retries)", 1)) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ J(Eg, [["__scopeId", "data-v-2110df65"]]), zg = { class: "queue-title" }, Mg = { class: "count" }, Lg = { class: "queue-actions" }, Tg = { class: "action-label" }, Rg = {
  key: 0,
  class: "overall-progress"
}, Ng = { class: "progress-bar" }, Dg = {
  key: 0,
  class: "current-mini"
}, Og = { class: "filename" }, Ug = { class: "speed" }, Bg = {
  key: 1,
  class: "queue-content"
}, Pg = {
  key: 0,
  class: "section"
}, Vg = {
  key: 1,
  class: "section"
}, Ag = { class: "section-header" }, Fg = { class: "section-label paused" }, Wg = { class: "items-list" }, Gg = {
  key: 2,
  class: "section"
}, jg = { class: "section-header" }, Hg = { class: "section-label" }, Kg = { class: "items-list" }, qg = {
  key: 3,
  class: "section"
}, Jg = { class: "section-header" }, Xg = { class: "section-label" }, Yg = { class: "items-list" }, Qg = {
  key: 4,
  class: "section"
}, Zg = { class: "section-header" }, eh = { class: "section-label failed" }, th = { class: "items-list" }, oh = /* @__PURE__ */ q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: s,
      queuedItems: r,
      completedItems: f,
      failedItems: y,
      pausedItems: g,
      hasItems: i,
      activeCount: d,
      cancelDownload: v,
      retryDownload: E,
      resumeDownload: w,
      resumeAllPaused: _,
      removeItem: C,
      clearCompleted: N
    } = St(), $ = I(!1), b = O(() => {
      var S;
      if (c.items.length === 0) return 0;
      const z = f.value.length, p = ((S = s.value) == null ? void 0 : S.progress) || 0;
      return Math.round((z + p / 100) / c.items.length * 100);
    });
    function x(z) {
      v(z);
    }
    function F(z) {
      return z === 0 ? "" : `${(z / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (z, p) => (o(), k(Se, { to: "body" }, [
      re(i) ? (o(), n("div", {
        key: 0,
        class: Z(["model-download-queue", { minimized: !$.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: p[0] || (p[0] = (S) => $.value = !$.value)
        }, [
          e("div", zg, [
            p[4] || (p[4] = e("span", { class: "icon" }, "↓", -1)),
            p[5] || (p[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Mg, "(" + l(re(d)) + "/" + l(re(c).items.length) + ")", 1)
          ]),
          e("div", Lg, [
            e("span", Tg, l($.value ? "minimize" : "expand"), 1)
          ])
        ]),
        $.value ? (o(), n("div", Bg, [
          re(s) ? (o(), n("div", Pg, [
            p[6] || (p[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            m(at, {
              item: re(s),
              onCancel: p[1] || (p[1] = (S) => x(re(s).id))
            }, null, 8, ["item"])
          ])) : u("", !0),
          re(g).length > 0 ? (o(), n("div", Vg, [
            e("div", Ag, [
              e("span", Fg, "Paused (" + l(re(g).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: p[2] || (p[2] = //@ts-ignore
                (...S) => re(_) && re(_)(...S))
              }, "Resume All")
            ]),
            e("div", Wg, [
              (o(!0), n(G, null, Q(re(g), (S) => (o(), k(at, {
                key: S.id,
                item: S,
                onResume: (M) => re(w)(S.id),
                onRemove: (M) => re(C)(S.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          re(r).length > 0 ? (o(), n("div", Gg, [
            e("div", jg, [
              e("span", Hg, "Queued (" + l(re(r).length) + ")", 1)
            ]),
            e("div", Kg, [
              (o(!0), n(G, null, Q(re(r), (S) => (o(), k(at, {
                key: S.id,
                item: S,
                onCancel: (M) => x(S.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : u("", !0),
          re(f).length > 0 ? (o(), n("div", qg, [
            e("div", Jg, [
              e("span", Xg, "Completed (" + l(re(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: p[3] || (p[3] = //@ts-ignore
                (...S) => re(N) && re(N)(...S))
              }, "Clear")
            ]),
            e("div", Yg, [
              (o(!0), n(G, null, Q(re(f).slice(0, 3), (S) => (o(), k(at, {
                key: S.id,
                item: S,
                onRemove: (M) => re(C)(S.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          re(y).length > 0 ? (o(), n("div", Qg, [
            e("div", Zg, [
              e("span", eh, "Failed (" + l(re(y).length) + ")", 1)
            ]),
            e("div", th, [
              (o(!0), n(G, null, Q(re(y), (S) => (o(), k(at, {
                key: S.id,
                item: S,
                onRetry: (M) => re(E)(S.id),
                onRemove: (M) => re(C)(S.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : u("", !0)
        ])) : (o(), n("div", Rg, [
          e("div", Ng, [
            e("div", {
              class: "progress-fill",
              style: Xe({ width: `${b.value}%` })
            }, null, 4)
          ]),
          re(s) ? (o(), n("div", Dg, [
            e("span", Og, l(re(s).filename), 1),
            e("span", Ug, l(F(re(s).speed)), 1)
          ])) : u("", !0)
        ]))
      ], 2)) : u("", !0)
    ]));
  }
}), sh = /* @__PURE__ */ J(oh, [["__scopeId", "data-v-152a0c0c"]]), nh = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', ah = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', lh = {
  comfy: nh,
  phosphor: ah
}, Et = "comfy", Gt = "comfygit-theme";
let Ke = null, jt = Et;
function ih() {
  try {
    const t = localStorage.getItem(Gt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Et;
}
function Ht(t = Et) {
  Ke && Ke.remove(), Ke = document.createElement("style"), Ke.id = "comfygit-theme-styles", Ke.setAttribute("data-theme", t), Ke.textContent = lh[t], document.head.appendChild(Ke), document.body.setAttribute("data-comfygit-theme", t), jt = t;
  try {
    localStorage.setItem(Gt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function rh() {
  return jt;
}
function dh(t) {
  Ht(t);
}
const zt = document.createElement("link");
zt.rel = "stylesheet";
zt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(zt);
const ch = ih();
Ht(ch);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), dh(t);
  },
  getTheme: () => {
    const t = rh();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Le = null, $e = null, dt = null, lt = null, Dt = null;
const Ze = I(null);
async function gt() {
  var t;
  if (!((t = Qe) != null && t.api)) return null;
  try {
    const c = await Qe.api.fetchApi("/v2/comfygit/status");
    c.ok && (Ze.value = await c.json());
  } catch {
  }
}
function uh() {
  if (!Ze.value) return !1;
  const t = Ze.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ze.value.has_changes;
}
function mh() {
  Le && Le.remove(), Le = document.createElement("div"), Le.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Le.appendChild(t), Le.addEventListener("click", (r) => {
    r.target === Le && bt();
  });
  const c = (r) => {
    r.key === "Escape" && (bt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), Ct({
    render: () => xt(dg, {
      onClose: bt,
      onStatusUpdate: (r) => {
        Ze.value = r, ct();
      }
    })
  }).mount(t), document.body.appendChild(Le);
}
function bt() {
  Le && (Le.remove(), Le = null);
}
function vh(t) {
  it(), $e = document.createElement("div"), $e.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  $e.style.position = "fixed", $e.style.top = `${c.bottom + 8}px`, $e.style.right = `${window.innerWidth - c.right}px`, $e.style.zIndex = "10001";
  const s = (f) => {
    $e && !$e.contains(f.target) && f.target !== t && (it(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (f) => {
    f.key === "Escape" && (it(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), dt = Ct({
    render: () => xt(Wt, {
      status: Ze.value,
      onClose: it,
      onCommitted: () => {
        it(), gt().then(ct);
      }
    })
  }), dt.mount($e), document.body.appendChild($e);
}
function it() {
  dt && (dt.unmount(), dt = null), $e && ($e.remove(), $e = null);
}
function fh() {
  lt || (lt = document.createElement("div"), lt.className = "comfygit-download-queue-root", Dt = Ct({
    render: () => xt(sh)
  }), Dt.mount(lt), document.body.appendChild(lt), console.log("[ComfyGit] Model download queue mounted"));
}
let Ue = null;
function ct() {
  if (!Ue) return;
  const t = Ue.querySelector(".commit-indicator");
  t && (t.style.display = uh() ? "block" : "none");
}
const Kt = document.createElement("style");
Kt.textContent = `
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
document.head.appendChild(Kt);
Qe.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = mh, Ue = document.createElement("button"), Ue.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ue.innerHTML = 'Commit <span class="commit-indicator"></span>', Ue.title = "Quick Commit", Ue.onclick = () => vh(Ue), t.appendChild(c), t.appendChild(Ue), (y = (f = Qe.menu) == null ? void 0 : f.settingsGroup) != null && y.element && (Qe.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), fh();
    const { loadPendingDownloads: s } = St();
    s(), await gt(), ct(), setInterval(async () => {
      await gt(), ct();
    }, 3e4);
    const r = Qe.api;
    if (r) {
      let g = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((v) => {
          (v.startsWith("workflow:") || v.startsWith("Comfy.OpenWorkflowsPaths:") || v.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(v);
        }), window.location.reload();
      }, i = function() {
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
        const E = document.createElement("span");
        E.textContent = "Workflows updated - refresh required", v.appendChild(E);
        const w = document.createElement("button");
        w.textContent = "Refresh", w.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, w.onmouseover = () => w.style.background = "var(--comfy-input-bg)", w.onmouseout = () => w.style.background = "var(--comfy-menu-bg)", w.onclick = () => g(), v.appendChild(w);
        const _ = document.createElement("button");
        _.textContent = "×", _.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, _.onmouseover = () => _.style.opacity = "1", _.onmouseout = () => _.style.opacity = "0.6", _.onclick = () => v.remove(), v.appendChild(_), document.body.appendChild(v), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: E, workflow_name: w } = v.detail;
        console.log(`[ComfyGit] Workflow ${E}: ${w}`), await gt(), ct();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let d = !1;
      r.addEventListener("status", async (v) => {
        const E = v.detail != null;
        E && !d && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), g()) : i()), d = E;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
