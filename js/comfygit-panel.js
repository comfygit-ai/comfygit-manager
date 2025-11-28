import { app as yt } from "../../scripts/app.js";
import { defineComponent as K, createElementBlock as s, openBlock as o, createCommentVNode as d, createElementVNode as e, renderSlot as ve, createBlock as S, resolveDynamicComponent as Gt, normalizeClass as oe, withCtx as i, toDisplayString as a, createVNode as p, createTextVNode as y, computed as D, Fragment as V, renderList as X, normalizeStyle as Ze, ref as C, onMounted as Se, watch as kt, Teleport as Te, withModifiers as $e, Transition as Io, createSlots as Nt, withKeys as rt, onUnmounted as Eo, reactive as so, readonly as Mo, unref as ge, withDirectives as Xe, vModelText as no, vModelRadio as Ot, vModelCheckbox as ao, nextTick as To, vModelSelect as Ut, TransitionGroup as Ro, createApp as jt, h as Ht } from "vue";
const zo = { class: "panel-layout" }, Lo = {
  key: 0,
  class: "panel-layout-header"
}, No = {
  key: 1,
  class: "panel-layout-search"
}, Do = { class: "panel-layout-content" }, Po = {
  key: 2,
  class: "panel-layout-footer"
}, Oo = /* @__PURE__ */ K({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (o(), s("div", zo, [
      c.$slots.header ? (o(), s("div", Lo, [
        ve(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (o(), s("div", No, [
        ve(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", Do, [
        ve(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), s("div", Po, [
        ve(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), J = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [r, h] of c)
    n[r] = h;
  return n;
}, Be = /* @__PURE__ */ J(Oo, [["__scopeId", "data-v-21565df9"]]), Uo = {
  key: 0,
  class: "panel-title-prefix"
}, Bo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ao = /* @__PURE__ */ K({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (o(), S(Gt(`h${t.level}`), {
      class: oe(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", Uo, a(t.prefix), 1)) : (o(), s("span", Bo)),
        ve(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Fo = /* @__PURE__ */ J(Ao, [["__scopeId", "data-v-c3875efc"]]), Vo = ["title"], Wo = ["width", "height"], Go = /* @__PURE__ */ K({
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
      ])], 8, Wo))
    ], 8, Vo));
  }
}), lo = /* @__PURE__ */ J(Go, [["__scopeId", "data-v-6fc7f16d"]]), jo = { class: "header-left" }, Ho = {
  key: 0,
  class: "header-actions"
}, qo = /* @__PURE__ */ K({
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
      class: oe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", jo, [
        p(Fo, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), S(lo, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (o(), s("div", Ho, [
        ve(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ J(qo, [["__scopeId", "data-v-55a62cd6"]]), Ko = {
  key: 0,
  class: "section-title-count"
}, Jo = {
  key: 1,
  class: "section-title-icon"
}, Yo = /* @__PURE__ */ K({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), S(Gt(`h${t.level}`), {
      class: oe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, {
      default: i(() => [
        ve(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Ko, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (o(), s("span", Jo, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ge = /* @__PURE__ */ J(Yo, [["__scopeId", "data-v-559361eb"]]), Qo = { class: "status-grid" }, Xo = { class: "status-grid__columns" }, Zo = { class: "status-grid__column" }, es = { class: "status-grid__title" }, ts = { class: "status-grid__column status-grid__column--right" }, os = { class: "status-grid__title" }, ss = {
  key: 0,
  class: "status-grid__footer"
}, ns = /* @__PURE__ */ K({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (o(), s("div", Qo, [
      e("div", Xo, [
        e("div", Zo, [
          e("h4", es, a(t.leftTitle), 1),
          ve(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", ts, [
          e("h4", os, a(t.rightTitle), 1),
          ve(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (o(), s("div", ss, [
        ve(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), as = /* @__PURE__ */ J(ns, [["__scopeId", "data-v-73b7ba3f"]]), ls = {
  key: 0,
  class: "status-item__icon"
}, is = {
  key: 1,
  class: "status-item__count"
}, rs = { class: "status-item__label" }, ds = /* @__PURE__ */ K({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = D(() => `status-item--${c.variant}`);
    return (r, h) => (o(), s("div", {
      class: oe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", ls, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (o(), s("span", is, a(t.count), 1)) : d("", !0),
      e("span", rs, a(t.label), 1)
    ], 2));
  }
}), Ye = /* @__PURE__ */ J(ds, [["__scopeId", "data-v-6f929183"]]), cs = { class: "issue-card__header" }, us = { class: "issue-card__icon" }, ms = { class: "issue-card__title" }, vs = {
  key: 0,
  class: "issue-card__content"
}, fs = {
  key: 0,
  class: "issue-card__description"
}, gs = {
  key: 1,
  class: "issue-card__items"
}, hs = {
  key: 2,
  class: "issue-card__actions"
}, ps = /* @__PURE__ */ K({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = D(() => `issue-card--${c.severity}`);
    return (r, h) => (o(), s("div", {
      class: oe(["issue-card", n.value])
    }, [
      e("div", cs, [
        e("span", us, a(t.icon), 1),
        e("h4", ms, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", vs, [
        t.description ? (o(), s("p", fs, a(t.description), 1)) : d("", !0),
        ve(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (o(), s("div", gs, [
        (o(!0), s(V, null, X(t.items, (g, m) => (o(), s("div", {
          key: m,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      r.$slots.actions ? (o(), s("div", hs, [
        ve(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ J(ps, [["__scopeId", "data-v-df6aa348"]]), ys = ["type", "disabled"], ws = {
  key: 0,
  class: "spinner"
}, ks = /* @__PURE__ */ K({
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
      class: oe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", ws)) : d("", !0),
      t.loading ? d("", !0) : ve(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, ys));
  }
}), Y = /* @__PURE__ */ J(ks, [["__scopeId", "data-v-772abe47"]]), bs = { class: "empty-state" }, _s = {
  key: 0,
  class: "empty-icon"
}, $s = { class: "empty-message" }, Cs = /* @__PURE__ */ K({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (o(), s("div", bs, [
      t.icon ? (o(), s("div", _s, a(t.icon), 1)) : d("", !0),
      e("p", $s, a(t.message), 1),
      t.actionLabel ? (o(), S(Y, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("action"))
      }, {
        default: i(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ J(Cs, [["__scopeId", "data-v-4466284f"]]), xs = /* @__PURE__ */ K({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: oe(["detail-label"]),
      style: Ze({ minWidth: t.minWidth })
    }, [
      ve(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Vt = /* @__PURE__ */ J(xs, [["__scopeId", "data-v-75e9eeb8"]]), Ss = /* @__PURE__ */ K({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: oe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ve(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Wt = /* @__PURE__ */ J(Ss, [["__scopeId", "data-v-2f186e4c"]]), Is = { class: "detail-row" }, Es = /* @__PURE__ */ K({
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
    return (c, n) => (o(), s("div", Is, [
      p(Vt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), S(Wt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ve(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ke = /* @__PURE__ */ J(Es, [["__scopeId", "data-v-ef15664a"]]), Ms = { class: "modal-header" }, Ts = { class: "modal-body" }, Rs = { class: "status-section" }, zs = {
  key: 0,
  class: "status-section"
}, Ls = { class: "section-header-row" }, Ns = {
  key: 0,
  class: "workflow-group"
}, Ds = { class: "workflow-group-header" }, Ps = { class: "workflow-group-title" }, Os = { class: "workflow-list" }, Us = { class: "workflow-name" }, Bs = { class: "workflow-issue" }, As = {
  key: 1,
  class: "workflow-group"
}, Fs = { class: "workflow-group-header" }, Vs = { class: "workflow-group-title" }, Ws = { class: "workflow-list" }, Gs = { class: "workflow-name" }, js = { class: "workflow-issue" }, Hs = {
  key: 2,
  class: "workflow-group"
}, qs = { class: "workflow-group-header" }, Ks = { class: "workflow-group-title" }, Js = { class: "workflow-list" }, Ys = { class: "workflow-name" }, Qs = {
  key: 3,
  class: "workflow-group"
}, Xs = { class: "workflow-group-header" }, Zs = { class: "workflow-group-title" }, en = { class: "workflow-list" }, tn = { class: "workflow-name" }, on = {
  key: 4,
  class: "workflow-group"
}, sn = { class: "workflow-group-header" }, nn = { class: "workflow-group-title" }, an = { class: "workflow-list" }, ln = { class: "workflow-name" }, rn = {
  key: 5,
  class: "workflow-group"
}, dn = { class: "workflow-group-title" }, cn = { class: "expand-icon" }, un = {
  key: 0,
  class: "workflow-list"
}, mn = { class: "workflow-name" }, vn = {
  key: 1,
  class: "status-section"
}, fn = {
  key: 0,
  class: "change-group"
}, gn = { class: "change-group-header" }, hn = { class: "change-group-title" }, pn = { class: "change-list" }, yn = { class: "node-name" }, wn = {
  key: 0,
  class: "dev-badge"
}, kn = {
  key: 1,
  class: "change-group"
}, bn = { class: "change-group-header" }, _n = { class: "change-group-title" }, $n = { class: "change-list" }, Cn = { class: "node-name" }, xn = {
  key: 0,
  class: "dev-badge"
}, Sn = {
  key: 2,
  class: "change-group"
}, In = { class: "change-list" }, En = { class: "change-item" }, Mn = { class: "node-name" }, Tn = {
  key: 3,
  class: "change-group"
}, Rn = {
  key: 2,
  class: "status-section"
}, zn = { class: "section-header-row" }, Ln = {
  key: 0,
  class: "drift-item"
}, Nn = { class: "drift-list" }, Dn = {
  key: 0,
  class: "drift-list-more"
}, Pn = {
  key: 1,
  class: "drift-item"
}, On = { class: "drift-list" }, Un = {
  key: 0,
  class: "drift-list-more"
}, Bn = {
  key: 2,
  class: "drift-item"
}, An = {
  key: 3,
  class: "drift-item"
}, Fn = {
  key: 3,
  class: "status-section"
}, Vn = { class: "info-box" }, Wn = { class: "drift-list" }, Gn = {
  key: 0,
  class: "drift-list-more"
}, jn = {
  key: 4,
  class: "status-section"
}, Hn = { class: "warning-box" }, qn = {
  key: 5,
  class: "empty-state-inline"
}, Kn = { class: "modal-actions" }, Jn = /* @__PURE__ */ K({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const c = t, n = C(!1);
    Se(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), kt(() => c.show, (I, _) => {
      console.log("StatusDetailModal show prop changed from", _, "to", I);
    }, { immediate: !0 });
    const r = D(() => {
      var I, _, L;
      return ((L = (_ = (I = c.status) == null ? void 0 : I.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : L.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), h = D(() => {
      var I, _, L;
      return ((L = (_ = (I = c.status) == null ? void 0 : I.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : L.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), g = D(() => {
      var I, _, L;
      return ((L = (_ = (I = c.status) == null ? void 0 : I.workflows) == null ? void 0 : _.synced) == null ? void 0 : L.filter((b) => {
        var $, B, O;
        const w = (O = (B = ($ = c.status) == null ? void 0 : $.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : O.find((E) => E.name === b);
        return !w || w.status !== "broken";
      })) || [];
    }), m = D(() => {
      var I, _, L, b, w;
      return (I = c.status) != null && I.workflows ? (((_ = c.status.workflows.new) == null ? void 0 : _.length) ?? 0) > 0 || (((L = c.status.workflows.modified) == null ? void 0 : L.length) ?? 0) > 0 || (((b = c.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((w = c.status.workflows.synced) == null ? void 0 : w.length) ?? 0) > 0 : !1;
    }), f = D(() => {
      var _, L, b;
      const I = (_ = c.status) == null ? void 0 : _.git_changes;
      return I ? (((L = I.nodes_added) == null ? void 0 : L.length) ?? 0) > 0 || (((b = I.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || I.workflow_changes || I.has_other_changes : !1;
    }), l = D(() => {
      var I, _, L, b, w, $;
      return !m.value && !f.value && ((_ = (I = c.status) == null ? void 0 : I.comparison) == null ? void 0 : _.is_synced) && (((L = c.status) == null ? void 0 : L.missing_models_count) ?? 0) === 0 && ((($ = (w = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : w.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
    }), u = D(() => {
      var _, L;
      const I = (L = (_ = c.status) == null ? void 0 : _.git_changes) == null ? void 0 : L.workflow_changes;
      return I ? typeof I == "number" ? I : Object.keys(I).length : 0;
    });
    function k(I) {
      return typeof I == "string" ? I : I.name;
    }
    function v(I) {
      return typeof I == "object" && I.is_development === !0;
    }
    return (I, _) => {
      var L, b, w, $, B, O, E, H, A, U, F, T, M, G, ae, we, ie, Q, Z, z, x, se;
      return o(), S(Te, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[6] || (_[6] = (ee) => I.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[5] || (_[5] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Ms, [
              _[7] || (_[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (ee) => I.$emit("close"))
              }, "✕")
            ]),
            e("div", Ts, [
              e("div", Rs, [
                p(Ge, { level: "4" }, {
                  default: i(() => [..._[8] || (_[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                p(ke, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              m.value ? (o(), s("div", zs, [
                e("div", Ls, [
                  p(Ge, { level: "4" }, {
                    default: i(() => [..._[9] || (_[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[1] || (_[1] = (ee) => I.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Ns, [
                  e("div", Ds, [
                    _[10] || (_[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ps, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", Os, [
                    (o(!0), s(V, null, X(r.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Us, a(ee.name), 1),
                      e("span", Bs, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                h.value.length ? (o(), s("div", As, [
                  e("div", Fs, [
                    _[11] || (_[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Vs, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", Ws, [
                    (o(!0), s(V, null, X(h.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Gs, a(ee.name), 1),
                      e("span", js, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (b = (L = t.status.workflows) == null ? void 0 : L.new) != null && b.length ? (o(), s("div", Hs, [
                  e("div", qs, [
                    _[12] || (_[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ks, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Js, [
                    (o(!0), s(V, null, X(t.status.workflows.new, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Ys, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                ($ = (w = t.status.workflows) == null ? void 0 : w.modified) != null && $.length ? (o(), s("div", Qs, [
                  e("div", Xs, [
                    _[13] || (_[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Zs, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", en, [
                    (o(!0), s(V, null, X(t.status.workflows.modified, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", tn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (O = (B = t.status.workflows) == null ? void 0 : B.deleted) != null && O.length ? (o(), s("div", on, [
                  e("div", sn, [
                    _[14] || (_[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", nn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", an, [
                    (o(!0), s(V, null, X(t.status.workflows.deleted, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", ln, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (o(), s("div", rn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: _[2] || (_[2] = (ee) => n.value = !n.value)
                  }, [
                    _[15] || (_[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", dn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", cn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", un, [
                    (o(!0), s(V, null, X(g.value, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", mn, a(ee), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              f.value ? (o(), s("div", vn, [
                p(Ge, { level: "4" }, {
                  default: i(() => [..._[16] || (_[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (E = t.status.git_changes) == null ? void 0 : E.nodes_added) != null && H.length ? (o(), s("div", fn, [
                  e("div", gn, [
                    _[17] || (_[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", hn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", pn, [
                    (o(!0), s(V, null, X(t.status.git_changes.nodes_added, (ee) => (o(), s("div", {
                      key: k(ee),
                      class: "change-item"
                    }, [
                      e("span", yn, a(k(ee)), 1),
                      v(ee) ? (o(), s("span", wn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (U = (A = t.status.git_changes) == null ? void 0 : A.nodes_removed) != null && U.length ? (o(), s("div", kn, [
                  e("div", bn, [
                    _[18] || (_[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", _n, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", $n, [
                    (o(!0), s(V, null, X(t.status.git_changes.nodes_removed, (ee) => (o(), s("div", {
                      key: k(ee),
                      class: "change-item"
                    }, [
                      e("span", Cn, a(k(ee)), 1),
                      v(ee) ? (o(), s("span", xn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (F = t.status.git_changes) != null && F.workflow_changes ? (o(), s("div", Sn, [
                  _[19] || (_[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", In, [
                    e("div", En, [
                      e("span", Mn, a(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (T = t.status.git_changes) != null && T.has_other_changes ? (o(), s("div", Tn, [..._[20] || (_[20] = [
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
              (M = t.status.comparison) != null && M.is_synced ? d("", !0) : (o(), s("div", Rn, [
                e("div", zn, [
                  p(Ge, { level: "4" }, {
                    default: i(() => [..._[21] || (_[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[3] || (_[3] = (ee) => I.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                _[22] || (_[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (ae = (G = t.status.comparison) == null ? void 0 : G.missing_nodes) != null && ae.length ? (o(), s("div", Ln, [
                  p(ke, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Nn, [
                    (o(!0), s(V, null, X(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", Dn, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (ie = (we = t.status.comparison) == null ? void 0 : we.extra_nodes) != null && ie.length ? (o(), s("div", Pn, [
                  p(ke, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", On, [
                    (o(!0), s(V, null, X(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Un, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (Z = (Q = t.status.comparison) == null ? void 0 : Q.version_mismatches) != null && Z.length ? (o(), s("div", Bn, [
                  p(ke, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (z = t.status.comparison) != null && z.packages_in_sync ? d("", !0) : (o(), s("div", An, [
                  p(ke, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (se = (x = t.status.comparison) == null ? void 0 : x.disabled_nodes) != null && se.length ? (o(), s("div", Fn, [
                p(Ge, { level: "4" }, {
                  default: i(() => [..._[23] || (_[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Vn, [
                  _[24] || (_[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Wn, [
                  (o(!0), s(V, null, X(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), s("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + a(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", Gn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", jn, [
                p(Ge, { level: "4" }, {
                  default: i(() => [..._[25] || (_[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Hn, [
                  _[26] || (_[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                _[27] || (_[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              l.value ? (o(), s("div", qn, [..._[28] || (_[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", Kn, [
              p(Y, {
                variant: "secondary",
                onClick: _[4] || (_[4] = (ee) => I.$emit("close"))
              }, {
                default: i(() => [..._[29] || (_[29] = [
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
}), Yn = /* @__PURE__ */ J(Jn, [["__scopeId", "data-v-c67eed17"]]), Qn = { class: "health-section-header" }, Xn = { class: "suggestions-content" }, Zn = { class: "suggestions-text" }, ea = { style: { "margin-top": "var(--cg-space-3)" } }, ta = {
  key: 1,
  class: "no-issues-text"
}, oa = /* @__PURE__ */ K({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: c }) {
    const n = t, r = C(!1), h = C(!1);
    function g() {
      r.value = !0;
    }
    function m() {
      r.value = !1, l("view-workflows");
    }
    function f() {
      r.value = !1, l("view-nodes");
    }
    const l = c, u = D(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), k = D(() => n.status.has_changes), v = D(() => {
      const A = n.status.git_changes;
      return A.nodes_added.length > 0 || A.nodes_removed.length > 0 || A.workflow_changes;
    }), I = D(() => n.status.has_changes || u.value), _ = D(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), L = D(() => n.status.git_changes.has_other_changes), b = D(() => {
      var A;
      return ((A = n.status.workflows.analyzed) == null ? void 0 : A.filter((U) => U.status === "broken")) || [];
    }), w = D(() => {
      var A;
      return ((A = n.status.workflows.analyzed) == null ? void 0 : A.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), $ = D(() => b.value.length > 0), B = D(() => $.value || w.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), O = D(() => {
      const A = [];
      return n.status.workflows.new.length > 0 && A.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && A.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && A.push(`${n.status.workflows.deleted.length} deleted`), A.length > 0 ? `${A.join(", ")} workflow${A.length === 1 && !A[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), E = D(() => {
      var F, T;
      const A = [], U = n.status.comparison;
      return (F = U.missing_nodes) != null && F.length && A.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (T = U.extra_nodes) != null && T.length && A.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), A.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${A.join(" and ")}.`;
    }), H = D(() => {
      var F, T;
      const A = [], U = n.status.comparison;
      return (F = U.extra_nodes) != null && F.length && (U.extra_nodes.slice(0, 3).forEach((M) => {
        A.push(`Untracked: ${M}`);
      }), U.extra_nodes.length > 3 && A.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (T = U.missing_nodes) != null && T.length && (U.missing_nodes.slice(0, 3).forEach((M) => {
        A.push(`Missing: ${M}`);
      }), U.missing_nodes.length > 3 && A.push(`...and ${U.missing_nodes.length - 3} more missing`)), A;
    });
    return (A, U) => (o(), s(V, null, [
      p(Be, null, {
        header: i(() => [
          p(Ae, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: U[1] || (U[1] = (F) => h.value = !0),
            onMouseleave: U[2] || (U[2] = (F) => h.value = !1)
          }, [
            e("div", Qn, [
              p(Ge, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...U[9] || (U[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              p(Io, { name: "fade" }, {
                default: i(() => [
                  h.value ? (o(), S(Y, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: g
                  }, {
                    default: i(() => [...U[10] || (U[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            p(as, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Nt({
              left: i(() => [
                t.status.workflows.new.length ? (o(), S(Ye, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (o(), S(Ye, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (o(), S(Ye, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                p(Ye, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (o(), S(Ye, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), S(Ye, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (o(), S(Ye, {
                  key: 2,
                  icon: "●",
                  count: _.value,
                  label: _.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                L.value ? (o(), S(Ye, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                k.value && !v.value && !L.value ? (o(), S(Ye, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                k.value ? d("", !0) : (o(), S(Ye, {
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
                  U[12] || (U[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Xn, [
                    e("span", Zn, a(O.value), 1),
                    p(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[0] || (U[0] = (F) => A.$emit("commit-changes"))
                    }, {
                      default: i(() => [...U[11] || (U[11] = [
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
          t.status.is_detached_head ? (o(), S(ht, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              p(Y, {
                variant: "primary",
                size: "sm",
                onClick: U[3] || (U[3] = (F) => A.$emit("create-branch"))
              }, {
                default: i(() => [...U[13] || (U[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", ea, [
            p(Ge, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...U[14] || (U[14] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            B.value ? (o(), s(V, { key: 0 }, [
              b.value.length > 0 ? (o(), S(ht, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${b.value.length} workflow${b.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: b.value.map((F) => `${F.name} — ${F.issue_summary}`)
              }, {
                actions: i(() => [
                  p(Y, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[4] || (U[4] = (F) => A.$emit("view-workflows"))
                  }, {
                    default: i(() => [...U[15] || (U[15] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              w.value.length > 0 ? (o(), S(ht, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: w.value.map((F) => `${F.name} — ${F.models_needing_path_sync_count} model path${F.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  p(Y, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[5] || (U[5] = (F) => A.$emit("view-workflows"))
                  }, {
                    default: i(() => [...U[16] || (U[16] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !$.value ? (o(), S(ht, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index."
              }, {
                actions: i(() => [
                  p(Y, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[6] || (U[6] = (F) => A.$emit("view-workflows"))
                  }, {
                    default: i(() => [...U[17] || (U[17] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (o(), S(ht, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: E.value,
                items: H.value
              }, {
                actions: i(() => [
                  p(Y, {
                    variant: "secondary",
                    size: "sm",
                    onClick: g
                  }, {
                    default: i(() => [...U[18] || (U[18] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  p(Y, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (F) => A.$emit("view-nodes"))
                  }, {
                    default: i(() => [...U[19] || (U[19] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : I.value ? (o(), s("span", ta, "No issues")) : (o(), S(Ke, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      p(Yn, {
        show: r.value,
        status: t.status,
        onClose: U[8] || (U[8] = (F) => r.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: f
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), sa = /* @__PURE__ */ J(oa, [["__scopeId", "data-v-bd67edd1"]]), na = ["type", "value", "placeholder", "disabled"], aa = /* @__PURE__ */ K({
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
    const r = t, h = n, g = C(null);
    function m(f) {
      const l = f.target.value;
      h("update:modelValue", l);
    }
    return Se(() => {
      r.autoFocus && g.value && g.value.focus();
    }), c({
      focus: () => {
        var f;
        return (f = g.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = g.value) == null ? void 0 : f.blur();
      }
    }), (f, l) => (o(), s("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: oe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: m,
      onKeyup: [
        l[0] || (l[0] = rt((u) => f.$emit("enter"), ["enter"])),
        l[1] || (l[1] = rt((u) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (u) => f.$emit("focus")),
      onBlur: l[3] || (l[3] = (u) => f.$emit("blur"))
    }, null, 42, na));
  }
}), Lt = /* @__PURE__ */ J(aa, [["__scopeId", "data-v-0380d08f"]]), la = { class: "branch-create-form" }, ia = { class: "form-actions" }, ra = /* @__PURE__ */ K({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, r = C(""), h = D(() => {
      const f = r.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function g() {
      h.value && (n("create", r.value.trim()), r.value = "");
    }
    function m() {
      r.value = "", n("cancel");
    }
    return (f, l) => (o(), s("div", la, [
      p(Lt, {
        modelValue: r.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => r.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: m
      }, null, 8, ["modelValue"]),
      e("div", ia, [
        p(Y, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: g
        }, {
          default: i(() => [...l[1] || (l[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        p(Y, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: i(() => [...l[2] || (l[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), da = /* @__PURE__ */ J(ra, [["__scopeId", "data-v-7c500394"]]), ca = { class: "branch-list-item__indicator" }, ua = { class: "branch-list-item__name" }, ma = {
  key: 0,
  class: "branch-list-item__actions"
}, va = {
  key: 0,
  class: "branch-list-item__current-label"
}, fa = /* @__PURE__ */ K({
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
      class: oe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, [
      e("span", ca, a(t.isCurrent ? "●" : "○"), 1),
      e("span", ua, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), s("div", ma, [
        ve(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", va, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), ga = /* @__PURE__ */ J(fa, [["__scopeId", "data-v-c6581a24"]]), ha = {
  key: 2,
  class: "branch-list"
}, pa = /* @__PURE__ */ K({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, r = C(!1);
    function h(m) {
      n("create", m), g();
    }
    function g() {
      r.value = !1;
    }
    return (m, f) => (o(), S(Be, null, {
      header: i(() => [
        p(Ae, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? d("", !0) : (o(), S(Y, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: f[0] || (f[0] = (l) => r.value = !0)
            }, {
              default: i(() => [...f[1] || (f[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), S(da, {
          key: 0,
          onCreate: h,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (o(), S(Ke, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", ha, [
          (o(!0), s(V, null, X(t.branches, (l) => (o(), S(ga, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? d("", !0) : (o(), S(Y, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (u) => m.$emit("delete", l.name)
              }, {
                default: i(() => [...f[2] || (f[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? d("", !0) : (o(), S(Y, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (u) => m.$emit("switch", l.name)
              }, {
                default: i(() => [...f[3] || (f[3] = [
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
}), ya = /* @__PURE__ */ J(pa, [["__scopeId", "data-v-86784ddd"]]), wa = { class: "commit-list" }, ka = /* @__PURE__ */ K({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (o(), s("div", wa, [
      ve(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ba = /* @__PURE__ */ J(ka, [["__scopeId", "data-v-8c5ee761"]]), _a = { class: "commit-hash" }, $a = /* @__PURE__ */ K({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = D(() => c.hash.slice(0, c.length));
    return (r, h) => (o(), s("span", _a, a(n.value), 1));
  }
}), io = /* @__PURE__ */ J($a, [["__scopeId", "data-v-7c333cc6"]]), Ca = { class: "commit-message" }, xa = { class: "commit-date" }, Sa = /* @__PURE__ */ K({
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
    function h() {
      n.clickable && r("click");
    }
    return (g, m) => (o(), s("div", {
      class: oe(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      p(io, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Ca, a(t.message), 1),
      e("span", xa, a(t.relativeDate), 1),
      g.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = $e(() => {
        }, ["stop"]))
      }, [
        ve(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ia = /* @__PURE__ */ J(Sa, [["__scopeId", "data-v-dd7c621b"]]), Ea = /* @__PURE__ */ K({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (o(), S(Be, null, {
      header: i(() => [
        p(Ae, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), S(Ke, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), S(ba, { key: 1 }, {
          default: i(() => [
            (o(!0), s(V, null, X(t.commits, (r) => (o(), S(Ia, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (h) => c.$emit("select", r)
            }, {
              actions: i(() => [
                p(Y, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (h) => c.$emit("checkout", r),
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
}), Ma = /* @__PURE__ */ J(Ea, [["__scopeId", "data-v-981c3c64"]]), U0 = [
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
], B0 = {
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
}, Ta = [
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
], A0 = [
  ...Ta,
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
function $t() {
  return !1;
}
function ze() {
  const t = C(!1), c = C(null);
  async function n(j, P) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const N = await window.app.api.fetchApi(j, P);
    if (!N.ok) {
      const ce = await N.json().catch(() => ({}));
      throw new Error(ce.error || ce.message || `Request failed: ${N.status}`);
    }
    return N.json();
  }
  async function r(j = !1) {
    return n(j ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function h(j, P = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: j, allow_issues: P })
    });
  }
  async function g(j = 10, P = 0) {
    return n(`/v2/comfygit/log?limit=${j}&offset=${P}`);
  }
  async function m(j) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: j })
    });
  }
  async function f() {
    return n("/v2/comfygit/branches");
  }
  async function l(j) {
    return n(`/v2/comfygit/commit/${j}`);
  }
  async function u(j, P = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: j, force: P })
    });
  }
  async function k(j, P = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, start_point: P })
    });
  }
  async function v(j, P = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: j, force: P })
    });
  }
  async function I(j, P = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(j)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: P })
    });
  }
  async function _() {
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
  async function b() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function w(j) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function $() {
    return n("/v2/workspace/environments/create_status");
  }
  async function B(j = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${j}`);
  }
  async function O(j) {
    return n(`/v2/workspace/environments/${j}`, {
      method: "DELETE"
    });
  }
  async function E(j = !1) {
    try {
      return n(j ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const P = await r(j), N = [];
      return P.workflows.new.forEach((q) => {
        N.push({ name: q, status: "new", missing_nodes: 0, missing_models: 0, path: q });
      }), P.workflows.modified.forEach((q) => {
        N.push({ name: q, status: "modified", missing_nodes: 0, missing_models: 0, path: q });
      }), P.workflows.synced.forEach((q) => {
        N.push({ name: q, status: "synced", missing_nodes: 0, missing_models: 0, path: q });
      }), N;
    }
  }
  async function H(j) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/details`);
  }
  async function A(j) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/resolve`, {
      method: "POST"
    });
  }
  async function U(j, P, N) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: P, install_models: N })
    });
  }
  async function F(j, P, N) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: P, importance: N })
    });
  }
  async function T() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function M() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function G(j) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(j)}`);
  }
  async function ae(j) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: j })
    });
  }
  async function we(j, P) {
    return n(`/v2/workspace/models/${j}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: P })
    });
  }
  async function ie(j, P) {
    return n(`/v2/workspace/models/${j}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: P })
    });
  }
  async function Q(j) {
    return n(`/v2/workspace/models/${j}`, {
      method: "DELETE"
    });
  }
  async function Z(j) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function z() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function x() {
    return n("/v2/workspace/models/directory");
  }
  async function se(j) {
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
  async function _e(j) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function pe(j, P) {
    try {
      const N = new URLSearchParams();
      return j && N.append("level", j), P && N.append("lines", P.toString()), n(`/v2/comfygit/debug/logs?${N}`);
    } catch {
      return [];
    }
  }
  async function me(j, P) {
    try {
      const N = new URLSearchParams();
      return j && N.append("level", j), P && N.append("lines", P.toString()), n(`/v2/workspace/debug/logs?${N}`);
    } catch {
      return [];
    }
  }
  async function Ce() {
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
  async function ye(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ne(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}/install`, {
      method: "POST"
    });
  }
  async function Re(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}/update`, {
      method: "POST"
    });
  }
  async function je(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function fe() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function De(j, P) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, url: P })
    });
  }
  async function Fe(j) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function Ve(j, P, N) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: P, push_url: N })
    });
  }
  async function dt(j) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/fetch`, {
      method: "POST"
    });
  }
  async function ue(j) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/status`);
    } catch {
      return null;
    }
  }
  async function Pe(j = "skip", P = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: j,
        remove_extra_nodes: P
      })
    });
  }
  async function ct(j, P) {
    const N = P ? `/v2/comfygit/remotes/${encodeURIComponent(j)}/pull-preview?branch=${encodeURIComponent(P)}` : `/v2/comfygit/remotes/${encodeURIComponent(j)}/pull-preview`;
    return n(N);
  }
  async function tt(j, P = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: P.modelStrategy || "skip",
        force: P.force || !1,
        resolutions: P.resolutions
      })
    });
  }
  async function Ie(j, P) {
    const N = P ? `/v2/comfygit/remotes/${encodeURIComponent(j)}/push-preview?branch=${encodeURIComponent(P)}` : `/v2/comfygit/remotes/${encodeURIComponent(j)}/push-preview`;
    return n(N);
  }
  async function ut(j, P = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: P.force || !1 })
    });
  }
  async function it(j, P) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: P })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: r,
    commit: h,
    getHistory: g,
    exportEnv: m,
    // Git Operations
    getBranches: f,
    getCommitDetail: l,
    checkout: u,
    createBranch: k,
    switchBranch: v,
    deleteBranch: I,
    // Environment Management
    getEnvironments: _,
    switchEnvironment: L,
    getSwitchProgress: b,
    createEnvironment: w,
    getCreateProgress: $,
    getComfyUIReleases: B,
    deleteEnvironment: O,
    // Workflow Management
    getWorkflows: E,
    getWorkflowDetails: H,
    resolveWorkflow: A,
    installWorkflowDeps: U,
    setModelImportance: F,
    // Model Management
    getEnvironmentModels: T,
    getWorkspaceModels: M,
    getModelDetails: G,
    openFileLocation: ae,
    addModelSource: we,
    removeModelSource: ie,
    deleteModel: Q,
    downloadModel: Z,
    scanWorkspaceModels: z,
    getModelsDirectory: x,
    setModelsDirectory: se,
    // Settings
    getConfig: ee,
    updateConfig: _e,
    // Debug/Logs
    getEnvironmentLogs: pe,
    getWorkspaceLogs: me,
    // Node Management
    getNodes: Ce,
    trackNodeAsDev: ye,
    installNode: Ne,
    updateNode: Re,
    uninstallNode: je,
    // Git Remotes
    getRemotes: fe,
    addRemote: De,
    removeRemote: Fe,
    updateRemoteUrl: Ve,
    fetchRemote: dt,
    getRemoteSyncStatus: ue,
    // Push/Pull
    getPullPreview: ct,
    pullFromRemote: tt,
    getPushPreview: Ie,
    pushToRemote: ut,
    validateMerge: it,
    // Environment Sync
    syncEnvironmentManually: Pe
  };
}
async function Ct(t, c = {}, n = 5e3) {
  const r = new AbortController(), h = setTimeout(() => r.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: r.signal
    });
    return clearTimeout(h), g;
  } catch (g) {
    throw clearTimeout(h), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function ro() {
  const t = C(null);
  async function c() {
    try {
      const m = await Ct(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (m.ok)
        return (await m.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const m = await Ct(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Health check failed");
      return await m.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const m = await Ct(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Failed to get status");
      return await m.json();
    } catch {
      return null;
    }
  }
  async function h() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ct(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ct(
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
    restart: h,
    kill: g
  };
}
const Ra = { class: "base-modal-header" }, za = {
  key: 0,
  class: "base-modal-title"
}, La = { class: "base-modal-body" }, Na = {
  key: 0,
  class: "base-modal-loading"
}, Da = {
  key: 1,
  class: "base-modal-error"
}, Pa = {
  key: 0,
  class: "base-modal-footer"
}, Oa = /* @__PURE__ */ K({
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
    function h() {
      n.closeOnOverlayClick && r("close");
    }
    function g(m) {
      m.key === "Escape" && r("close");
    }
    return Se(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Eo(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (m, f) => (o(), S(Te, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: oe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: f[1] || (f[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Ra, [
            ve(m.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", za, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (l) => m.$emit("close"))
            }, [...f[2] || (f[2] = [
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
          e("div", La, [
            t.loading ? (o(), s("div", Na, "Loading...")) : t.error ? (o(), s("div", Da, a(t.error), 1)) : ve(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (o(), s("div", Pa, [
            ve(m.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), et = /* @__PURE__ */ J(Oa, [["__scopeId", "data-v-2125a0e6"]]), Ua = ["type", "disabled"], Ba = {
  key: 0,
  class: "spinner"
}, Aa = /* @__PURE__ */ K({
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
      class: oe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Ba)) : d("", !0),
      ve(c.$slots, "default", {}, void 0, !0)
    ], 10, Ua));
  }
}), le = /* @__PURE__ */ J(Aa, [["__scopeId", "data-v-f3452606"]]), Fa = {
  key: 0,
  class: "base-title-count"
}, Va = /* @__PURE__ */ K({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (o(), S(Gt(`h${t.level}`), {
      class: oe(["base-title", t.variant])
    }, {
      default: i(() => [
        ve(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Fa, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Et = /* @__PURE__ */ J(Va, [["__scopeId", "data-v-5a01561d"]]), Wa = ["value", "disabled"], Ga = {
  key: 0,
  value: "",
  disabled: ""
}, ja = ["value"], Ha = {
  key: 0,
  class: "base-select-error"
}, qa = /* @__PURE__ */ K({
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
    return (r, h) => (o(), s("div", {
      class: oe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: oe(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (g) => r.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (o(), s("option", Ga, a(t.placeholder), 1)) : d("", !0),
        (o(!0), s(V, null, X(t.options, (g) => (o(), s("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, ja))), 128))
      ], 42, Wa),
      t.error ? (o(), s("span", Ha, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Ka = /* @__PURE__ */ J(qa, [["__scopeId", "data-v-7436d745"]]), Ja = { class: "popover-header" }, Ya = { class: "popover-title" }, Qa = { class: "popover-content" }, Xa = {
  key: 0,
  class: "popover-actions"
}, Za = /* @__PURE__ */ K({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (o(), S(Te, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Ze({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Ja, [
            e("h4", Ya, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Qa, [
            ve(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), s("div", Xa, [
            ve(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), nt = /* @__PURE__ */ J(Za, [["__scopeId", "data-v-42815ace"]]), el = { class: "detail-section" }, tl = {
  key: 0,
  class: "empty-message"
}, ol = { class: "model-header" }, sl = { class: "model-name" }, nl = { class: "model-details" }, al = { class: "model-row" }, ll = { class: "model-row" }, il = { class: "label" }, rl = {
  key: 0,
  class: "model-row model-row-nodes"
}, dl = { class: "node-list" }, cl = ["onClick"], ul = {
  key: 1,
  class: "model-row"
}, ml = { class: "value" }, vl = {
  key: 0,
  class: "model-actions"
}, fl = { class: "detail-section" }, gl = {
  key: 0,
  class: "empty-message"
}, hl = { class: "node-name" }, pl = {
  key: 0,
  class: "node-version"
}, yl = /* @__PURE__ */ K({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, r = c, { getWorkflowDetails: h, setModelImportance: g, installWorkflowDeps: m } = ze(), f = C(null), l = C(!1), u = C(null), k = C(!1), v = C({}), I = C({}), _ = C(!1), L = C(/* @__PURE__ */ new Set()), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function w(T) {
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
    function $(T) {
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
      const M = T.hash || T.filename;
      return L.value.has(M) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function O(T) {
      return L.value.has(T);
    }
    function E(T) {
      L.value.has(T) ? L.value.delete(T) : L.value.add(T), L.value = new Set(L.value);
    }
    async function H() {
      l.value = !0, u.value = null;
      try {
        f.value = await h(n.workflowName);
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function A(T, M) {
      v.value[T] = M, k.value = !0;
    }
    async function U() {
      if (!k.value) {
        r("close");
        return;
      }
      l.value = !0, u.value = null;
      try {
        for (const [T, M] of Object.entries(v.value))
          await g(n.workflowName, T, M);
        r("refresh"), r("close");
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function F(T) {
      I.value[T] = !0, u.value = null;
      try {
        await m(n.workflowName, !0, !1), await H();
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Failed to install node";
      } finally {
        I.value[T] = !1;
      }
    }
    return Se(H), (T, M) => (o(), s(V, null, [
      p(et, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: u.value || void 0,
        onClose: M[5] || (M[5] = (G) => r("close"))
      }, {
        body: i(() => [
          f.value ? (o(), s(V, { key: 0 }, [
            e("section", el, [
              p(Et, { variant: "section" }, {
                default: i(() => [
                  y("MODELS USED (" + a(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (o(), s("div", tl, " No models used in this workflow ")) : d("", !0),
              (o(!0), s(V, null, X(f.value.models, (G) => (o(), s("div", {
                key: G.hash || G.filename,
                class: "model-card"
              }, [
                e("div", ol, [
                  M[7] || (M[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", sl, a(G.filename), 1)
                ]),
                e("div", nl, [
                  e("div", al, [
                    M[8] || (M[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: oe(["value", w(G.status)])
                    }, a($(G.status)), 3)
                  ]),
                  e("div", ll, [
                    e("span", il, [
                      M[9] || (M[9] = y(" Importance: ", -1)),
                      p(lo, {
                        size: 14,
                        title: "About importance levels",
                        onClick: M[0] || (M[0] = (ae) => _.value = !0)
                      })
                    ]),
                    p(Ka, {
                      "model-value": v.value[G.filename] || G.importance,
                      options: b,
                      "onUpdate:modelValue": (ae) => A(G.filename, ae)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  G.loaded_by && G.loaded_by.length > 0 ? (o(), s("div", rl, [
                    M[10] || (M[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", dl, [
                      (o(!0), s(V, null, X(B(G), (ae, we) => (o(), s("div", {
                        key: `${ae.node_id}-${we}`,
                        class: "node-reference"
                      }, a(ae.node_type) + " (Node #" + a(ae.node_id) + ") ", 1))), 128)),
                      G.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (ae) => E(G.hash || G.filename)
                      }, a(O(G.hash || G.filename) ? "▼ Show less" : `▶ View all (${G.loaded_by.length})`), 9, cl)) : d("", !0)
                    ])
                  ])) : d("", !0),
                  G.size_mb ? (o(), s("div", ul, [
                    M[11] || (M[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", ml, a(G.size_mb) + " MB", 1)
                  ])) : d("", !0)
                ]),
                G.status !== "available" ? (o(), s("div", vl, [
                  G.status === "downloadable" ? (o(), S(le, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: M[1] || (M[1] = (ae) => r("resolve"))
                  }, {
                    default: i(() => [...M[12] || (M[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : G.status === "path_mismatch" ? (o(), S(le, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: M[2] || (M[2] = (ae) => r("resolve"))
                  }, {
                    default: i(() => [...M[13] || (M[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), S(le, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: M[3] || (M[3] = (ae) => r("resolve"))
                  }, {
                    default: i(() => [...M[14] || (M[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : d("", !0)
              ]))), 128))
            ]),
            e("section", fl, [
              p(Et, { variant: "section" }, {
                default: i(() => [
                  y("NODES USED (" + a(f.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.nodes.length === 0 ? (o(), s("div", gl, " No custom nodes used in this workflow ")) : d("", !0),
              (o(!0), s(V, null, X(f.value.nodes, (G) => (o(), s("div", {
                key: G.name,
                class: "node-item"
              }, [
                e("span", {
                  class: oe(["node-status", G.status === "installed" ? "installed" : "missing"])
                }, a(G.status === "installed" ? "✓" : "✕"), 3),
                e("span", hl, a(G.name), 1),
                G.version ? (o(), s("span", pl, "v" + a(G.version), 1)) : d("", !0),
                G.status === "missing" ? (o(), S(le, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: I.value[G.name],
                  onClick: (ae) => F(G.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...M[15] || (M[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: i(() => [
          p(le, {
            variant: "secondary",
            onClick: M[4] || (M[4] = (G) => r("close"))
          }, {
            default: i(() => [...M[16] || (M[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          k.value ? (o(), S(le, {
            key: 0,
            variant: "primary",
            onClick: U
          }, {
            default: i(() => [...M[17] || (M[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      p(nt, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: M[6] || (M[6] = (G) => _.value = !1)
      }, {
        content: i(() => [...M[18] || (M[18] = [
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
}), wl = /* @__PURE__ */ J(yl, [["__scopeId", "data-v-0b14d32e"]]), he = so({
  items: [],
  status: "idle"
});
let Qe = null;
function co() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Bt(t) {
  return he.items.find((c) => c.id === t);
}
async function pt() {
  if (he.status === "downloading") return;
  const t = he.items.find((c) => c.status === "queued");
  if (!t) {
    he.status = "idle";
    return;
  }
  he.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await kl(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    he.status = "idle", pt();
  }
}
async function kl(t) {
  return new Promise((c, n) => {
    Qe && (Qe.close(), Qe = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), h = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Qe = h;
    let g = Date.now(), m = 0, f = !1;
    h.onmessage = (l) => {
      try {
        const u = JSON.parse(l.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const k = Date.now(), v = (k - g) / 1e3;
            if (v > 0.5) {
              const I = t.downloaded - m;
              if (t.speed = I / v, g = k, m = t.downloaded, t.speed > 0 && t.size > 0) {
                const _ = t.size - t.downloaded;
                t.eta = _ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            f = !0, h.close(), Qe = null, c();
            break;
          case "error":
            f = !0, h.close(), Qe = null, n(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, h.onerror = () => {
      h.close(), Qe = null, f || n(new Error("Connection lost"));
    };
  });
}
async function bl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (he.items.some((h) => h.url === n.url && h.filename === n.filename))
        continue;
      const r = {
        id: co(),
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
      he.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Rt() {
  function t(w) {
    for (const $ of w) {
      if (he.items.some(
        (E) => E.url === $.url && E.targetPath === $.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${$.filename}`);
        continue;
      }
      const O = {
        id: co(),
        workflow: $.workflow,
        filename: $.filename,
        url: $.url,
        targetPath: $.targetPath,
        size: $.size || 0,
        type: $.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      he.items.push(O);
    }
    he.status === "idle" && pt();
  }
  async function c(w) {
    const $ = Bt(w);
    if ($) {
      if ($.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent($.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Qe && (Qe.close(), Qe = null), $.status = "failed", $.error = "Cancelled by user", he.status = "idle", pt();
      } else if ($.status === "queued") {
        const B = he.items.findIndex((O) => O.id === w);
        B >= 0 && he.items.splice(B, 1);
      }
    }
  }
  function n(w) {
    const $ = Bt(w);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, he.status === "idle" && pt());
  }
  function r(w) {
    const $ = Bt(w);
    !$ || $.status !== "paused" || ($.status = "queued", he.status === "idle" && pt());
  }
  function h() {
    const w = he.items.filter(($) => $.status === "paused");
    for (const $ of w)
      $.status = "queued";
    he.status === "idle" && pt();
  }
  function g(w) {
    const $ = he.items.findIndex((B) => B.id === w);
    $ >= 0 && ["completed", "failed", "paused"].includes(he.items[$].status) && he.items.splice($, 1);
  }
  function m() {
    he.items = he.items.filter((w) => w.status !== "completed");
  }
  function f() {
    he.items = he.items.filter((w) => w.status !== "failed");
  }
  const l = D(
    () => he.items.find((w) => w.status === "downloading")
  ), u = D(
    () => he.items.filter((w) => w.status === "queued")
  ), k = D(
    () => he.items.filter((w) => w.status === "completed")
  ), v = D(
    () => he.items.filter((w) => w.status === "failed")
  ), I = D(
    () => he.items.filter((w) => w.status === "paused")
  ), _ = D(() => he.items.length > 0), L = D(
    () => he.items.filter((w) => w.status === "queued" || w.status === "downloading").length
  ), b = D(
    () => he.items.some((w) => w.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Mo(he),
    // Computed
    currentDownload: l,
    queuedItems: u,
    completedItems: k,
    failedItems: v,
    pausedItems: I,
    hasItems: _,
    activeCount: L,
    hasPaused: b,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: h,
    removeItem: g,
    clearCompleted: m,
    clearFailed: f,
    loadPendingDownloads: bl
  };
}
function _l() {
  const t = C(null), c = C(null), n = C([]), r = C([]), h = C(!1), g = C(null);
  async function m(B, O) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(B, O);
    if (!E.ok) {
      const A = await E.json().catch(() => ({})), U = A.error || A.message || `Request failed: ${E.status}`;
      throw new Error(U);
    }
    return E.json();
  }
  async function f(B) {
    h.value = !0, g.value = null;
    try {
      let O;
      return $t() || (O = await m(
        `/v2/comfygit/workflow/${B}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = O, O;
    } catch (O) {
      const E = O instanceof Error ? O.message : "Unknown error occurred";
      throw g.value = E, O;
    } finally {
      h.value = !1;
    }
  }
  async function l(B, O, E, H) {
    h.value = !0, g.value = null;
    try {
      let A;
      if (!$t()) {
        const U = Object.fromEntries(O), F = Object.fromEntries(E), T = H ? Array.from(H) : [];
        A = await m(
          `/v2/comfygit/workflow/${B}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: U,
              model_choices: F,
              skipped_packages: T
            })
          }
        );
      }
      return c.value = A, A;
    } catch (A) {
      const U = A instanceof Error ? A.message : "Unknown error occurred";
      throw g.value = U, A;
    } finally {
      h.value = !1;
    }
  }
  async function u(B, O = 10) {
    h.value = !0, g.value = null;
    try {
      let E;
      return $t() || (E = await m(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: O })
        }
      )), n.value = E.results, E.results;
    } catch (E) {
      const H = E instanceof Error ? E.message : "Unknown error occurred";
      throw g.value = H, E;
    } finally {
      h.value = !1;
    }
  }
  async function k(B, O = 10) {
    h.value = !0, g.value = null;
    try {
      let E;
      return $t() || (E = await m(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: O })
        }
      )), r.value = E.results, E.results;
    } catch (E) {
      const H = E instanceof Error ? E.message : "Unknown error occurred";
      throw g.value = H, E;
    } finally {
      h.value = !1;
    }
  }
  const v = so({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function I() {
    v.phase = "idle", v.currentFile = void 0, v.currentFileIndex = void 0, v.totalFiles = void 0, v.bytesDownloaded = void 0, v.bytesTotal = void 0, v.completedFiles = [], v.nodesToInstall = [], v.nodesInstalled = [], v.installError = void 0, v.needsRestart = void 0, v.error = void 0, v.nodeInstallProgress = void 0;
  }
  async function _(B) {
    v.phase = "installing", v.nodesInstalled = [], v.installError = void 0, v.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return $t(), await L(B);
    } catch (O) {
      const E = O instanceof Error ? O.message : "Failed to install nodes";
      throw v.installError = E, O;
    }
  }
  async function L(B) {
    var E;
    const O = await m(
      `/v2/comfygit/workflow/${B}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: v.nodesToInstall
        })
      }
    );
    if (v.nodeInstallProgress) {
      v.nodeInstallProgress.totalNodes = v.nodesToInstall.length;
      const H = new Map(((E = O.failed) == null ? void 0 : E.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < v.nodesToInstall.length; A++) {
        const U = v.nodesToInstall[A], F = H.get(U);
        v.nodeInstallProgress.completedNodes.push({
          node_id: U,
          success: !F,
          error: F
        });
      }
    }
    return v.nodesInstalled = O.nodes_installed, v.needsRestart = O.nodes_installed.length > 0, O.failed && O.failed.length > 0 && (v.installError = `${O.failed.length} package(s) failed to install`), O;
  }
  async function b(B, O, E) {
    I(), v.phase = "resolving", g.value = null;
    const H = Object.fromEntries(O), A = Object.fromEntries(E);
    try {
      const U = await fetch(`/v2/comfygit/workflow/${B}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: A
        })
      });
      if (!U.ok)
        throw new Error(`Request failed: ${U.status}`);
      if (!U.body)
        throw new Error("No response body");
      const F = U.body.getReader(), T = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: G, value: ae } = await F.read();
        if (G) break;
        M += T.decode(ae, { stream: !0 });
        const we = M.split(`

`);
        M = we.pop() || "";
        for (const ie of we) {
          if (!ie.trim()) continue;
          const Q = ie.split(`
`);
          let Z = "", z = "";
          for (const x of Q)
            x.startsWith("event: ") ? Z = x.slice(7) : x.startsWith("data: ") && (z = x.slice(6));
          if (z)
            try {
              const x = JSON.parse(z);
              w(Z, x);
            } catch (x) {
              console.warn("Failed to parse SSE event:", x);
            }
        }
      }
    } catch (U) {
      const F = U instanceof Error ? U.message : "Unknown error occurred";
      throw g.value = F, v.error = F, v.phase = "error", U;
    }
  }
  function w(B, O) {
    switch (B) {
      case "batch_start":
        v.phase = "downloading", v.totalFiles = O.total;
        break;
      case "file_start":
        v.currentFile = O.filename, v.currentFileIndex = O.index, v.bytesDownloaded = 0, v.bytesTotal = void 0;
        break;
      case "file_progress":
        v.bytesDownloaded = O.downloaded, v.bytesTotal = O.total;
        break;
      case "file_complete":
        v.completedFiles.push({
          filename: O.filename,
          success: O.success,
          error: O.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        v.nodesToInstall = O.nodes_to_install || [], O.download_results && (v.completedFiles = O.download_results), v.phase = "complete";
        break;
      case "error":
        v.error = O.message, v.phase = "error", g.value = O.message;
        break;
    }
  }
  function $(B, O) {
    const { addToQueue: E } = Rt(), H = O.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: B,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return H.length > 0 && E(H), H.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: r,
    isLoading: h,
    error: g,
    progress: v,
    // Methods
    analyzeWorkflow: f,
    applyResolution: l,
    applyResolutionWithProgress: b,
    installNodes: _,
    searchNodes: u,
    searchModels: k,
    resetProgress: I,
    queueModelDownloads: $
  };
}
const $l = { class: "resolution-stepper" }, Cl = { class: "stepper-header" }, xl = ["onClick"], Sl = {
  key: 0,
  class: "step-icon"
}, Il = {
  key: 1,
  class: "step-number"
}, El = { class: "step-label" }, Ml = {
  key: 0,
  class: "step-connector"
}, Tl = { class: "stepper-content" }, Rl = /* @__PURE__ */ K({
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
    function h(u) {
      var k;
      if ((k = n.stepStats) != null && k[u]) {
        const v = n.stepStats[u];
        return v.total > 0 && v.resolved === v.total;
      }
      return n.completedSteps.includes(u);
    }
    function g(u) {
      var k;
      if ((k = n.stepStats) != null && k[u]) {
        const v = n.stepStats[u];
        return v.resolved > 0 && v.resolved < v.total;
      }
      return !1;
    }
    function m(u) {
      return h(u) ? "state-complete" : g(u) ? "state-partial" : "state-pending";
    }
    function f(u) {
      return !1;
    }
    function l(u) {
      r("step-change", u);
    }
    return (u, k) => (o(), s("div", $l, [
      e("div", Cl, [
        (o(!0), s(V, null, X(t.steps, (v, I) => (o(), s("div", {
          key: v.id,
          class: oe(["step", {
            active: t.currentStep === v.id,
            completed: h(v.id),
            "in-progress": g(v.id),
            disabled: f(v.id)
          }]),
          onClick: (_) => l(v.id)
        }, [
          e("div", {
            class: oe(["step-indicator", m(v.id)])
          }, [
            h(v.id) ? (o(), s("span", Sl, "✓")) : (o(), s("span", Il, a(I + 1), 1))
          ], 2),
          e("div", El, a(v.label), 1),
          I < t.steps.length - 1 ? (o(), s("div", Ml)) : d("", !0)
        ], 10, xl))), 128))
      ]),
      e("div", Tl, [
        ve(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), zl = /* @__PURE__ */ J(Rl, [["__scopeId", "data-v-2a7b3af8"]]), Ll = /* @__PURE__ */ K({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = D(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), r = D(() => `confidence-${n.value}`), h = D(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, m) => (o(), s("span", {
      class: oe(["confidence-badge", r.value, t.size])
    }, a(h.value), 3));
  }
}), qt = /* @__PURE__ */ J(Ll, [["__scopeId", "data-v-17ec4b80"]]), Nl = { class: "node-info" }, Dl = { class: "node-info-text" }, Pl = { class: "item-body" }, Ol = {
  key: 0,
  class: "resolved-state"
}, Ul = {
  key: 1,
  class: "multiple-options"
}, Bl = { class: "options-list" }, Al = ["onClick"], Fl = ["name", "value", "checked", "onChange"], Vl = { class: "option-content" }, Wl = { class: "option-header" }, Gl = { class: "option-package-id" }, jl = {
  key: 0,
  class: "option-title"
}, Hl = { class: "option-meta" }, ql = {
  key: 0,
  class: "installed-badge"
}, Kl = { class: "action-buttons" }, Jl = {
  key: 2,
  class: "unresolved"
}, Yl = { class: "action-buttons" }, Ql = /* @__PURE__ */ K({
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
    const n = t, r = c, h = D(() => !!n.choice);
    D(() => {
      var f;
      return (f = n.choice) == null ? void 0 : f.action;
    }), D(() => {
      var f;
      return (f = n.choice) == null ? void 0 : f.package_id;
    });
    const g = D(() => {
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
    function m(f) {
      r("option-selected", f);
    }
    return (f, l) => (o(), s("div", {
      class: oe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: h.value }])
    }, [
      e("div", Nl, [
        e("span", Dl, [
          l[7] || (l[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: oe(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Pl, [
        h.value ? (o(), s("div", Ol, [
          p(le, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (u) => r("clear-choice"))
          }, {
            default: i(() => [...l[8] || (l[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Ul, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Bl, [
            (o(!0), s(V, null, X(t.options, (u, k) => (o(), s("label", {
              key: u.package_id,
              class: oe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (v) => m(k)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (v) => m(k)
              }, null, 40, Fl),
              e("div", Vl, [
                e("div", Wl, [
                  e("span", Gl, a(u.package_id), 1),
                  p(qt, {
                    confidence: u.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                u.title && u.title !== u.package_id ? (o(), s("div", jl, a(u.title), 1)) : d("", !0),
                e("div", Hl, [
                  u.is_installed ? (o(), s("span", ql, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, Al))), 128))
          ]),
          e("div", Kl, [
            p(le, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (u) => r("search"))
            }, {
              default: i(() => [...l[9] || (l[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (u) => r("manual-entry"))
            }, {
              default: i(() => [...l[10] || (l[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (u) => r("mark-optional"))
            }, {
              default: i(() => [...l[11] || (l[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Jl, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Yl, [
            p(le, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (u) => r("search"))
            }, {
              default: i(() => [...l[13] || (l[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (u) => r("manual-entry"))
            }, {
              default: i(() => [...l[14] || (l[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (u) => r("mark-optional"))
            }, {
              default: i(() => [...l[15] || (l[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Xl = /* @__PURE__ */ J(Ql, [["__scopeId", "data-v-e02629e7"]]), Zl = { class: "item-navigator" }, ei = { class: "nav-item-info" }, ti = ["title"], oi = { class: "nav-controls" }, si = { class: "nav-arrows" }, ni = ["disabled"], ai = ["disabled"], li = { class: "nav-position" }, ii = /* @__PURE__ */ K({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (r, h) => (o(), s("div", Zl, [
      e("div", ei, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, ti)
      ]),
      e("div", oi, [
        e("div", si, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: h[0] || (h[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, ni),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, ai)
        ]),
        e("span", li, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), uo = /* @__PURE__ */ J(ii, [["__scopeId", "data-v-74af7920"]]), ri = ["type", "value", "placeholder", "disabled"], di = {
  key: 0,
  class: "base-input-error"
}, ci = /* @__PURE__ */ K({
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
      class: oe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: oe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = rt((r) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = rt((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ri),
      t.error ? (o(), s("span", di, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ J(ci, [["__scopeId", "data-v-9ba02cdc"]]), ui = { class: "node-resolution-step" }, mi = {
  key: 0,
  class: "auto-resolved-section"
}, vi = { class: "section-header" }, fi = { class: "stat-badge" }, gi = { class: "resolved-packages-list" }, hi = { class: "package-info" }, pi = { class: "package-id" }, yi = { class: "node-count" }, wi = { class: "package-actions" }, ki = {
  key: 0,
  class: "status-badge install"
}, bi = {
  key: 1,
  class: "status-badge skip"
}, _i = ["onClick"], $i = {
  key: 1,
  class: "section-divider"
}, Ci = { class: "step-header" }, xi = { class: "stat-badge" }, Si = {
  key: 1,
  class: "step-body"
}, Ii = {
  key: 3,
  class: "empty-state"
}, Ei = { class: "node-search-modal" }, Mi = { class: "node-modal-body" }, Ti = {
  key: 0,
  class: "node-search-results"
}, Ri = ["onClick"], zi = { class: "node-result-header" }, Li = { class: "node-result-package-id" }, Ni = {
  key: 0,
  class: "node-result-description"
}, Di = {
  key: 1,
  class: "node-no-results"
}, Pi = {
  key: 2,
  class: "node-searching"
}, Oi = { class: "node-manual-entry-modal" }, Ui = { class: "node-modal-body" }, Bi = { class: "node-modal-actions" }, Ai = /* @__PURE__ */ K({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = C(0), g = C(!1), m = C(!1), f = C(""), l = C(""), u = C([]), k = C(!1), v = D(() => n.nodes[h.value]), I = D(() => n.nodes.filter((ie) => n.nodeChoices.has(ie.node_type)).length), _ = D(() => n.autoResolvedPackages.filter((ie) => !n.skippedPackages.has(ie.package_id)).length);
    function L(ie) {
      return n.skippedPackages.has(ie);
    }
    function b(ie) {
      r("package-skip", ie);
    }
    const w = D(() => {
      var Q;
      if (!v.value) return "not-found";
      const ie = n.nodeChoices.get(v.value.node_type);
      if (ie)
        switch (ie.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Q = v.value.options) != null && Q.length ? "ambiguous" : "not-found";
    }), $ = D(() => {
      var Q;
      if (!v.value) return;
      const ie = n.nodeChoices.get(v.value.node_type);
      if (ie)
        switch (ie.action) {
          case "install":
            return ie.package_id ? `→ ${ie.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Q = v.value.options) != null && Q.length ? `${v.value.options.length} matches` : "Not Found";
    });
    function B(ie) {
      ie >= 0 && ie < n.nodes.length && (h.value = ie);
    }
    function O() {
      v.value && r("mark-optional", v.value.node_type);
    }
    function E() {
      v.value && r("skip", v.value.node_type);
    }
    function H(ie) {
      v.value && r("option-selected", v.value.node_type, ie);
    }
    function A() {
      v.value && r("clear-choice", v.value.node_type);
    }
    function U() {
      v.value && (f.value = v.value.node_type, g.value = !0);
    }
    function F() {
      l.value = "", m.value = !0;
    }
    function T() {
      g.value = !1, f.value = "", u.value = [];
    }
    function M() {
      m.value = !1, l.value = "";
    }
    function G() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function ae(ie) {
      v.value && (r("manual-entry", v.value.node_type, ie.package_id), T());
    }
    function we() {
      !v.value || !l.value.trim() || (r("manual-entry", v.value.node_type, l.value.trim()), M());
    }
    return (ie, Q) => {
      var Z, z;
      return o(), s("div", ui, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", mi, [
          e("div", vi, [
            Q[4] || (Q[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", fi, a(_.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", gi, [
            (o(!0), s(V, null, X(t.autoResolvedPackages, (x) => (o(), s("div", {
              key: x.package_id,
              class: "resolved-package-item"
            }, [
              e("div", hi, [
                e("code", pi, a(x.package_id), 1),
                e("span", yi, a(x.node_types_count) + " node type" + a(x.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", wi, [
                L(x.package_id) ? (o(), s("span", bi, " SKIPPED ")) : (o(), s("span", ki, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (se) => b(x.package_id)
                }, a(L(x.package_id) ? "Include" : "Skip"), 9, _i)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", $i)) : d("", !0),
        t.nodes.length > 0 ? (o(), s(V, { key: 2 }, [
          e("div", Ci, [
            Q[5] || (Q[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", xi, a(I.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          v.value ? (o(), S(uo, {
            key: 0,
            "item-name": v.value.node_type,
            "current-index": h.value,
            "total-items": t.nodes.length,
            onPrev: Q[0] || (Q[0] = (x) => B(h.value - 1)),
            onNext: Q[1] || (Q[1] = (x) => B(h.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          v.value ? (o(), s("div", Si, [
            p(Xl, {
              "node-type": v.value.node_type,
              "has-multiple-options": !!((Z = v.value.options) != null && Z.length),
              options: v.value.options,
              choice: (z = t.nodeChoices) == null ? void 0 : z.get(v.value.node_type),
              status: w.value,
              "status-label": $.value,
              onMarkOptional: O,
              onSkip: E,
              onManualEntry: F,
              onSearch: U,
              onOptionSelected: H,
              onClearChoice: A
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", Ii, [...Q[6] || (Q[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (o(), S(Te, { to: "body" }, [
          g.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(T, ["self"])
          }, [
            e("div", Ei, [
              e("div", { class: "node-modal-header" }, [
                Q[7] || (Q[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", Mi, [
                p(qe, {
                  modelValue: f.value,
                  "onUpdate:modelValue": Q[2] || (Q[2] = (x) => f.value = x),
                  placeholder: "Search by node type, package name...",
                  onInput: G
                }, null, 8, ["modelValue"]),
                u.value.length > 0 ? (o(), s("div", Ti, [
                  (o(!0), s(V, null, X(u.value, (x) => (o(), s("div", {
                    key: x.package_id,
                    class: "node-search-result-item",
                    onClick: (se) => ae(x)
                  }, [
                    e("div", zi, [
                      e("code", Li, a(x.package_id), 1),
                      x.match_confidence ? (o(), S(qt, {
                        key: 0,
                        confidence: x.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : d("", !0)
                    ]),
                    x.description ? (o(), s("div", Ni, a(x.description), 1)) : d("", !0)
                  ], 8, Ri))), 128))
                ])) : f.value && !k.value ? (o(), s("div", Di, ' No packages found matching "' + a(f.value) + '" ', 1)) : d("", !0),
                k.value ? (o(), s("div", Pi, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), S(Te, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(M, ["self"])
          }, [
            e("div", Oi, [
              e("div", { class: "node-modal-header" }, [
                Q[8] || (Q[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", Ui, [
                p(qe, {
                  modelValue: l.value,
                  "onUpdate:modelValue": Q[3] || (Q[3] = (x) => l.value = x),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Bi, [
                  p(le, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: i(() => [...Q[9] || (Q[9] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  p(le, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: we
                  }, {
                    default: i(() => [...Q[10] || (Q[10] = [
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
}), Fi = /* @__PURE__ */ J(Ai, [["__scopeId", "data-v-6474069a"]]), Vi = { class: "node-info" }, Wi = { class: "node-info-text" }, Gi = { class: "item-body" }, ji = {
  key: 0,
  class: "resolved-state"
}, Hi = {
  key: 1,
  class: "multiple-options"
}, qi = { class: "options-list" }, Ki = ["onClick"], Ji = ["name", "value", "checked", "onChange"], Yi = { class: "option-content" }, Qi = { class: "option-header" }, Xi = { class: "option-filename" }, Zi = { class: "option-meta" }, er = { class: "option-size" }, tr = { class: "option-category" }, or = { class: "option-path" }, sr = { class: "action-buttons" }, nr = {
  key: 2,
  class: "unresolved"
}, ar = { class: "action-buttons" }, lr = /* @__PURE__ */ K({
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
    const n = t, r = c, h = D(() => !!n.choice);
    D(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), D(() => {
      var l, u;
      return ((u = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const g = D(() => {
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
    function m(l) {
      r("option-selected", l);
    }
    function f(l) {
      if (!l) return "Unknown";
      const u = l / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, u) => (o(), s("div", {
      class: oe(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Vi, [
        e("span", Wi, [
          u[7] || (u[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: oe(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Gi, [
        h.value ? (o(), s("div", ji, [
          p(le, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (k) => r("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Hi, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", qi, [
            (o(!0), s(V, null, X(t.options, (k, v) => (o(), s("label", {
              key: k.model.hash,
              class: oe(["option-card", { selected: t.selectedOptionIndex === v }]),
              onClick: (I) => m(v)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: v,
                checked: t.selectedOptionIndex === v,
                onChange: (I) => m(v)
              }, null, 40, Ji),
              e("div", Yi, [
                e("div", Qi, [
                  e("span", Xi, a(k.model.filename), 1),
                  p(qt, {
                    confidence: k.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Zi, [
                  e("span", er, a(f(k.model.size)), 1),
                  e("span", tr, a(k.model.category), 1)
                ]),
                e("div", or, a(k.model.relative_path), 1)
              ])
            ], 10, Ki))), 128))
          ]),
          e("div", sr, [
            p(le, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (k) => r("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (k) => r("download-url"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (k) => r("mark-optional"))
            }, {
              default: i(() => [...u[11] || (u[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", nr, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", ar, [
            p(le, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (k) => r("search"))
            }, {
              default: i(() => [...u[13] || (u[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (k) => r("download-url"))
            }, {
              default: i(() => [...u[14] || (u[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (k) => r("mark-optional"))
            }, {
              default: i(() => [...u[15] || (u[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ir = /* @__PURE__ */ J(lr, [["__scopeId", "data-v-8a82fefa"]]), rr = { class: "model-resolution-step" }, dr = { class: "step-header" }, cr = { class: "step-info" }, ur = { class: "step-title" }, mr = { class: "step-description" }, vr = { class: "stat-badge" }, fr = {
  key: 1,
  class: "step-body"
}, gr = {
  key: 2,
  class: "empty-state"
}, hr = { class: "model-search-modal" }, pr = { class: "model-modal-body" }, yr = {
  key: 0,
  class: "model-search-results"
}, wr = ["onClick"], kr = { class: "model-result-header" }, br = { class: "model-result-filename" }, _r = { class: "model-result-meta" }, $r = { class: "model-result-category" }, Cr = { class: "model-result-size" }, xr = {
  key: 0,
  class: "model-result-path"
}, Sr = {
  key: 1,
  class: "model-no-results"
}, Ir = {
  key: 2,
  class: "model-searching"
}, Er = { class: "model-download-url-modal" }, Mr = { class: "model-modal-body" }, Tr = { class: "model-input-group" }, Rr = { class: "model-input-group" }, zr = { class: "model-modal-actions" }, Lr = /* @__PURE__ */ K({
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
    function r(z) {
      var x;
      return z && ((x = n[z]) == null ? void 0 : x[0]) || null;
    }
    const h = t, g = c, m = C(0), f = C(!1), l = C(!1), u = C(""), k = C(""), v = C(""), I = C([]), _ = C(!1), L = D(() => h.models[m.value]), b = D(() => h.models.some((z) => z.is_download_intent)), w = D(() => h.models.filter(
      (z) => h.modelChoices.has(z.filename) || z.is_download_intent
    ).length), $ = D(() => {
      var x;
      if (!L.value) return "";
      const z = r((x = L.value.reference) == null ? void 0 : x.node_type);
      return z ? `${z}/${L.value.filename}` : "";
    }), B = D(() => {
      var x;
      if (!L.value) return "not-found";
      const z = h.modelChoices.get(L.value.filename);
      if (z)
        switch (z.action) {
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
      return L.value.is_download_intent ? "download" : (x = L.value.options) != null && x.length ? "ambiguous" : "not-found";
    }), O = D(() => {
      var x, se;
      if (!L.value) return;
      const z = h.modelChoices.get(L.value.filename);
      if (z)
        switch (z.action) {
          case "select":
            return (x = z.selected_model) != null && x.filename ? `→ ${z.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return L.value.is_download_intent ? "Pending Download" : (se = L.value.options) != null && se.length ? `${L.value.options.length} matches` : "Not Found";
    });
    function E(z) {
      z >= 0 && z < h.models.length && (m.value = z);
    }
    function H() {
      L.value && g("mark-optional", L.value.filename);
    }
    function A() {
      L.value && g("skip", L.value.filename);
    }
    function U(z) {
      L.value && g("option-selected", L.value.filename, z);
    }
    function F() {
      L.value && g("clear-choice", L.value.filename);
    }
    function T() {
      L.value && (u.value = L.value.filename, f.value = !0);
    }
    function M() {
      L.value && (k.value = L.value.download_source || "", v.value = L.value.target_path || $.value, l.value = !0);
    }
    function G() {
      f.value = !1, u.value = "", I.value = [];
    }
    function ae() {
      l.value = !1, k.value = "", v.value = "";
    }
    function we() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function ie(z) {
      L.value && G();
    }
    function Q() {
      !L.value || !k.value.trim() || (g("download-url", L.value.filename, k.value.trim(), v.value.trim() || void 0), ae());
    }
    function Z(z) {
      if (!z) return "Unknown";
      const x = z / (1024 * 1024 * 1024);
      return x >= 1 ? `${x.toFixed(2)} GB` : `${(z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (z, x) => {
      var se, ee, _e;
      return o(), s("div", rr, [
        e("div", dr, [
          e("div", cr, [
            e("h3", ur, a(b.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", mr, a(b.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", vr, a(w.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        L.value ? (o(), S(uo, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": m.value,
          "total-items": t.models.length,
          onPrev: x[0] || (x[0] = (pe) => E(m.value - 1)),
          onNext: x[1] || (x[1] = (pe) => E(m.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        L.value ? (o(), s("div", fr, [
          p(ir, {
            filename: L.value.filename,
            "node-type": ((se = L.value.reference) == null ? void 0 : se.node_type) || "Unknown",
            "has-multiple-options": !!((ee = L.value.options) != null && ee.length),
            options: L.value.options,
            choice: (_e = t.modelChoices) == null ? void 0 : _e.get(L.value.filename),
            status: B.value,
            "status-label": O.value,
            onMarkOptional: H,
            onSkip: A,
            onDownloadUrl: M,
            onSearch: T,
            onOptionSelected: U,
            onClearChoice: F
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", gr, [...x[5] || (x[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), S(Te, { to: "body" }, [
          f.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(G, ["self"])
          }, [
            e("div", hr, [
              e("div", { class: "model-modal-header" }, [
                x[6] || (x[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: G
                }, "✕")
              ]),
              e("div", pr, [
                p(qe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": x[2] || (x[2] = (pe) => u.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: we
                }, null, 8, ["modelValue"]),
                I.value.length > 0 ? (o(), s("div", yr, [
                  (o(!0), s(V, null, X(I.value, (pe) => (o(), s("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (me) => ie()
                  }, [
                    e("div", kr, [
                      e("code", br, a(pe.filename), 1)
                    ]),
                    e("div", _r, [
                      e("span", $r, a(pe.category), 1),
                      e("span", Cr, a(Z(pe.size)), 1)
                    ]),
                    pe.relative_path ? (o(), s("div", xr, a(pe.relative_path), 1)) : d("", !0)
                  ], 8, wr))), 128))
                ])) : u.value && !_.value ? (o(), s("div", Sr, ' No models found matching "' + a(u.value) + '" ', 1)) : d("", !0),
                _.value ? (o(), s("div", Ir, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), S(Te, { to: "body" }, [
          l.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(ae, ["self"])
          }, [
            e("div", Er, [
              e("div", { class: "model-modal-header" }, [
                x[7] || (x[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ae
                }, "✕")
              ]),
              e("div", Mr, [
                e("div", Tr, [
                  x[8] || (x[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  p(qe, {
                    modelValue: k.value,
                    "onUpdate:modelValue": x[3] || (x[3] = (pe) => k.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Rr, [
                  x[9] || (x[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  p(qe, {
                    modelValue: v.value,
                    "onUpdate:modelValue": x[4] || (x[4] = (pe) => v.value = pe),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", zr, [
                  p(le, {
                    variant: "secondary",
                    onClick: ae
                  }, {
                    default: i(() => [...x[10] || (x[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  p(le, {
                    variant: "primary",
                    disabled: !k.value.trim() || !v.value.trim(),
                    onClick: Q
                  }, {
                    default: i(() => [...x[11] || (x[11] = [
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
}), Nr = /* @__PURE__ */ J(Lr, [["__scopeId", "data-v-c6acbada"]]), Dr = { class: "applying-step" }, Pr = {
  key: 0,
  class: "phase-content"
}, Or = {
  key: 1,
  class: "phase-content"
}, Ur = { class: "phase-description" }, Br = { class: "overall-progress" }, Ar = { class: "progress-bar" }, Fr = { class: "progress-label" }, Vr = { class: "install-list" }, Wr = { class: "install-icon" }, Gr = { key: 0 }, jr = {
  key: 1,
  class: "spinner"
}, Hr = { key: 2 }, qr = { key: 3 }, Kr = {
  key: 0,
  class: "install-error"
}, Jr = {
  key: 2,
  class: "phase-content"
}, Yr = { class: "phase-header" }, Qr = { class: "phase-title" }, Xr = { class: "completion-summary" }, Zr = {
  key: 0,
  class: "summary-item success"
}, ed = { class: "summary-text" }, td = {
  key: 1,
  class: "summary-item error"
}, od = { class: "summary-text" }, sd = {
  key: 2,
  class: "failed-list"
}, nd = { class: "failed-node-id" }, ad = { class: "failed-error" }, ld = {
  key: 4,
  class: "summary-item success"
}, id = {
  key: 5,
  class: "restart-prompt"
}, rd = {
  key: 3,
  class: "phase-content error"
}, dd = { class: "error-message" }, cd = /* @__PURE__ */ K({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = D(() => {
      var u, k;
      const f = ((u = c.progress.nodeInstallProgress) == null ? void 0 : u.totalNodes) || c.progress.nodesToInstall.length;
      if (!f) return 0;
      const l = ((k = c.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0;
      return Math.round(l / f * 100);
    }), r = D(() => {
      var f;
      return ((f = c.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.filter((l) => !l.success)) || [];
    }), h = D(() => r.value.length > 0);
    function g(f, l) {
      var k, v;
      const u = (k = c.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.find((I) => I.node_id === f);
      return u ? u.success ? "complete" : "failed" : ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) === l ? "installing" : "pending";
    }
    function m(f) {
      var l, u;
      return (u = (l = c.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((k) => k.node_id === f)) == null ? void 0 : u.error;
    }
    return (f, l) => {
      var u, k, v, I;
      return o(), s("div", Dr, [
        t.progress.phase === "resolving" ? (o(), s("div", Pr, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", Or, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Ur, " Installing " + a((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Br, [
            e("div", Ar, [
              e("div", {
                class: "progress-fill",
                style: Ze({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Fr, a(((v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0) + " / " + a(((I = t.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Vr, [
            (o(!0), s(V, null, X(t.progress.nodesToInstall, (_, L) => (o(), s("div", {
              key: _,
              class: oe(["install-item", g(_, L)])
            }, [
              e("span", Wr, [
                g(_, L) === "pending" ? (o(), s("span", Gr, "○")) : g(_, L) === "installing" ? (o(), s("span", jr, "◌")) : g(_, L) === "complete" ? (o(), s("span", Hr, "✓")) : g(_, L) === "failed" ? (o(), s("span", qr, "✗")) : d("", !0)
              ]),
              e("code", null, a(_), 1),
              m(_) ? (o(), s("span", Kr, a(m(_)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", Jr, [
          e("div", Yr, [
            e("span", {
              class: oe(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", Qr, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Xr, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", Zr, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", ed, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            r.value.length > 0 ? (o(), s("div", td, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", od, a(r.value.length) + " package" + a(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            r.value.length > 0 ? (o(), s("div", sd, [
              (o(!0), s(V, null, X(r.value, (_) => (o(), s("div", {
                key: _.node_id,
                class: "failed-item"
              }, [
                e("code", nd, a(_.node_id), 1),
                e("span", ad, a(_.error), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (_) => f.$emit("retry-failed"))
            }, " Retry Failed (" + a(r.value.length) + ") ", 1)) : d("", !0),
            h.value ? d("", !0) : (o(), s("div", ld, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", id, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = (_) => f.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (o(), s("div", rd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", dd, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), ud = /* @__PURE__ */ J(cd, [["__scopeId", "data-v-5efaae58"]]), md = {
  key: 0,
  class: "loading-state"
}, vd = {
  key: 1,
  class: "wizard-content"
}, fd = {
  key: 0,
  class: "step-content"
}, gd = { class: "analysis-summary" }, hd = { class: "analysis-header" }, pd = { class: "summary-description" }, yd = { class: "stats-grid" }, wd = { class: "stat-card" }, kd = { class: "stat-items" }, bd = {
  key: 0,
  class: "stat-item success"
}, _d = { class: "stat-count" }, $d = {
  key: 1,
  class: "stat-item info"
}, Cd = { class: "stat-count" }, xd = {
  key: 2,
  class: "stat-item warning"
}, Sd = { class: "stat-count" }, Id = {
  key: 3,
  class: "stat-item error"
}, Ed = { class: "stat-count" }, Md = { class: "stat-card" }, Td = { class: "stat-items" }, Rd = { class: "stat-item success" }, zd = { class: "stat-count" }, Ld = {
  key: 0,
  class: "stat-item info"
}, Nd = { class: "stat-count" }, Dd = {
  key: 1,
  class: "stat-item warning"
}, Pd = { class: "stat-count" }, Od = {
  key: 2,
  class: "stat-item error"
}, Ud = { class: "stat-count" }, Bd = {
  key: 0,
  class: "status-message warning"
}, Ad = { class: "status-text" }, Fd = {
  key: 1,
  class: "status-message info"
}, Vd = { class: "status-text" }, Wd = {
  key: 2,
  class: "status-message info"
}, Gd = { class: "status-text" }, jd = {
  key: 3,
  class: "status-message success"
}, Hd = {
  key: 3,
  class: "step-content"
}, qd = { class: "review-summary" }, Kd = { class: "review-stats" }, Jd = { class: "review-stat" }, Yd = { class: "stat-value" }, Qd = { class: "review-stat" }, Xd = { class: "stat-value" }, Zd = { class: "review-stat" }, ec = { class: "stat-value" }, tc = { class: "review-stat" }, oc = { class: "stat-value" }, sc = {
  key: 0,
  class: "review-section"
}, nc = { class: "section-title" }, ac = { class: "review-items" }, lc = { class: "item-name" }, ic = { class: "item-choice" }, rc = {
  key: 0,
  class: "choice-badge install"
}, dc = {
  key: 1,
  class: "choice-badge skip"
}, cc = {
  key: 1,
  class: "review-section"
}, uc = { class: "section-title" }, mc = { class: "review-items" }, vc = { class: "item-name" }, fc = { class: "item-choice" }, gc = {
  key: 0,
  class: "choice-badge install"
}, hc = {
  key: 1,
  class: "choice-badge optional"
}, pc = {
  key: 2,
  class: "choice-badge skip"
}, yc = {
  key: 1,
  class: "choice-badge pending"
}, wc = {
  key: 2,
  class: "review-section"
}, kc = { class: "section-title" }, bc = { class: "review-items" }, _c = { class: "item-name" }, $c = { class: "item-choice" }, Cc = {
  key: 0,
  class: "choice-badge install"
}, xc = {
  key: 1,
  class: "choice-badge download"
}, Sc = {
  key: 2,
  class: "choice-badge optional"
}, Ic = {
  key: 3,
  class: "choice-badge skip"
}, Ec = {
  key: 4,
  class: "choice-badge skip"
}, Mc = {
  key: 1,
  class: "choice-badge download"
}, Tc = {
  key: 2,
  class: "choice-badge pending"
}, Rc = {
  key: 3,
  class: "no-choices"
}, zc = /* @__PURE__ */ K({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, r = c, { analyzeWorkflow: h, applyResolution: g, installNodes: m, queueModelDownloads: f, progress: l, resetProgress: u } = _l(), { loadPendingDownloads: k } = Rt(), v = C(null), I = C(!1), _ = C(!1), L = C(null), b = C("analysis"), w = C([]), $ = C(/* @__PURE__ */ new Map()), B = C(/* @__PURE__ */ new Map()), O = C(/* @__PURE__ */ new Set()), E = D(() => {
      const P = [
        { id: "analysis", label: "Analysis" }
      ];
      return (A.value || T.value) && P.push({ id: "nodes", label: "Nodes" }), (U.value || F.value) && P.push({ id: "models", label: "Models" }), P.push({ id: "review", label: "Review" }), b.value === "applying" && P.push({ id: "applying", label: "Applying" }), P;
    }), H = D(() => v.value ? v.value.stats.needs_user_input : !1), A = D(() => v.value ? v.value.nodes.unresolved.length > 0 || v.value.nodes.ambiguous.length > 0 : !1), U = D(() => v.value ? v.value.models.unresolved.length > 0 || v.value.models.ambiguous.length > 0 : !1), F = D(() => v.value ? v.value.stats.download_intents > 0 : !1), T = D(() => v.value ? v.value.stats.nodes_needing_installation > 0 : !1), M = D(() => v.value ? v.value.nodes.resolved.length : 0), G = D(() => {
      if (!v.value) return [];
      const P = v.value.nodes.resolved.filter((q) => !q.is_installed), N = /* @__PURE__ */ new Set();
      return P.filter((q) => N.has(q.package.package_id) ? !1 : (N.add(q.package.package_id), !0));
    }), ae = D(() => {
      if (!v.value) return [];
      const P = v.value.nodes.resolved.filter((q) => !q.is_installed), N = /* @__PURE__ */ new Map();
      for (const q of P) {
        const ce = N.get(q.package.package_id);
        ce ? ce.node_types_count++ : N.set(q.package.package_id, {
          package_id: q.package.package_id,
          title: q.package.title,
          node_types_count: 1
        });
      }
      return Array.from(N.values());
    }), we = D(() => G.value.filter((P) => !O.value.has(P.package.package_id))), ie = D(() => v.value ? v.value.models.resolved.filter((P) => P.match_type === "download_intent").map((P) => ({
      filename: P.reference.widget_value,
      reference: P.reference,
      is_download_intent: !0,
      resolved_model: P.model,
      download_source: P.download_source,
      target_path: P.target_path
    })) : []), Q = D(() => {
      if (!v.value) return [];
      const P = v.value.nodes.unresolved.map((q) => ({
        node_type: q.reference.node_type,
        reason: q.reason,
        is_unresolved: !0,
        options: void 0
      })), N = v.value.nodes.ambiguous.map((q) => ({
        node_type: q.reference.node_type,
        has_multiple_options: !0,
        options: q.options.map((ce) => ({
          package_id: ce.package.package_id,
          title: ce.package.title,
          match_confidence: ce.match_confidence,
          match_type: ce.match_type,
          is_installed: ce.is_installed
        }))
      }));
      return [...P, ...N];
    }), Z = D(() => {
      if (!v.value) return [];
      const P = v.value.models.unresolved.map((q) => ({
        filename: q.reference.widget_value,
        reference: q.reference,
        reason: q.reason,
        is_unresolved: !0,
        options: void 0
      })), N = v.value.models.ambiguous.map((q) => ({
        filename: q.reference.widget_value,
        reference: q.reference,
        has_multiple_options: !0,
        options: q.options.map((ce) => ({
          model: ce.model,
          match_confidence: ce.match_confidence,
          match_type: ce.match_type,
          has_download_source: ce.has_download_source
        }))
      }));
      return [...P, ...N];
    }), z = D(() => {
      const P = Z.value, N = ie.value.map((q) => ({
        filename: q.filename,
        reference: q.reference,
        is_download_intent: !0,
        resolved_model: q.resolved_model,
        download_source: q.download_source,
        target_path: q.target_path,
        options: void 0
      }));
      return [...P, ...N];
    }), x = D(() => {
      let P = we.value.length;
      for (const N of $.value.values())
        N.action === "install" && P++;
      for (const N of B.value.values())
        N.action === "select" && P++;
      return P;
    }), se = D(() => {
      let P = 0;
      for (const N of B.value.values())
        N.action === "download" && P++;
      return P;
    }), ee = D(() => {
      let P = 0;
      for (const N of $.value.values())
        N.action === "optional" && P++;
      for (const N of B.value.values())
        N.action === "optional" && P++;
      return P;
    }), _e = D(() => {
      let P = O.value.size;
      for (const N of $.value.values())
        N.action === "skip" && P++;
      for (const N of B.value.values())
        N.action === "skip" && P++;
      for (const N of Q.value)
        $.value.has(N.node_type) || P++;
      for (const N of Z.value)
        B.value.has(N.filename) || P++;
      return P;
    }), pe = D(() => {
      const P = {};
      if (P.analysis = { resolved: 1, total: 1 }, A.value) {
        const N = Q.value.length, q = Q.value.filter(
          (ce) => $.value.has(ce.node_type)
        ).length;
        P.nodes = { resolved: q, total: N };
      }
      if (U.value || F.value) {
        const N = z.value.length, q = z.value.filter(
          (ce) => B.value.has(ce.filename) || ce.is_download_intent
        ).length;
        P.models = { resolved: q, total: N };
      }
      if (P.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const N = l.totalFiles || 1, q = l.completedFiles.length;
        P.applying = { resolved: q, total: N };
      }
      return P;
    });
    function me(P) {
      b.value = P;
    }
    function Ce() {
      const P = E.value.findIndex((N) => N.id === b.value);
      P > 0 && (b.value = E.value[P - 1].id);
    }
    function ye() {
      const P = E.value.findIndex((N) => N.id === b.value);
      P < E.value.length - 1 && (b.value = E.value[P + 1].id);
    }
    async function Ne() {
      I.value = !0, L.value = null;
      try {
        v.value = await h(n.workflowName);
      } catch (P) {
        L.value = P instanceof Error ? P.message : "Failed to analyze workflow";
      } finally {
        I.value = !1;
      }
    }
    function Re() {
      w.value.includes("analysis") || w.value.push("analysis"), A.value || T.value ? b.value = "nodes" : U.value || F.value ? b.value = "models" : b.value = "review";
    }
    function je(P) {
      $.value.set(P, { action: "optional" });
    }
    function fe(P) {
      $.value.set(P, { action: "skip" });
    }
    function De(P, N) {
      var ce;
      const q = Q.value.find((Me) => Me.node_type === P);
      (ce = q == null ? void 0 : q.options) != null && ce[N] && $.value.set(P, {
        action: "install",
        package_id: q.options[N].package_id
      });
    }
    function Fe(P, N) {
      $.value.set(P, {
        action: "install",
        package_id: N
      });
    }
    function Ve(P) {
      $.value.delete(P);
    }
    function dt(P) {
      O.value.has(P) ? O.value.delete(P) : O.value.add(P);
    }
    function ue(P) {
      B.value.set(P, { action: "optional" });
    }
    function Pe(P) {
      B.value.set(P, { action: "skip" });
    }
    function ct(P, N) {
      var ce;
      const q = Z.value.find((Me) => Me.filename === P);
      (ce = q == null ? void 0 : q.options) != null && ce[N] && B.value.set(P, {
        action: "select",
        selected_model: q.options[N].model
      });
    }
    function tt(P, N, q) {
      B.value.set(P, {
        action: "download",
        url: N,
        target_path: q
      });
    }
    function Ie(P) {
      B.value.delete(P);
    }
    async function ut() {
      var P;
      _.value = !0, L.value = null, u(), l.phase = "resolving", b.value = "applying";
      try {
        const N = await g(n.workflowName, $.value, B.value, O.value);
        N.models_to_download && N.models_to_download.length > 0 && f(n.workflowName, N.models_to_download);
        const q = [
          ...N.nodes_to_install || [],
          ...we.value.map((Me) => Me.package.package_id)
        ];
        l.nodesToInstall = [...new Set(q)], l.nodesToInstall.length > 0 && await m(n.workflowName), l.phase = "complete", await k();
        const ce = l.installError || ((P = l.nodeInstallProgress) == null ? void 0 : P.completedNodes.some((Me) => !Me.success));
        !l.needsRestart && !ce && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (N) {
        L.value = N instanceof Error ? N.message : "Failed to apply resolution", l.error = L.value, l.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function it() {
      r("refresh"), r("restart"), r("close");
    }
    async function j() {
      var N;
      const P = ((N = l.nodeInstallProgress) == null ? void 0 : N.completedNodes.filter((q) => !q.success).map((q) => q.node_id)) || [];
      if (P.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: P.length
        }, l.nodesToInstall = P, l.nodesInstalled = [], l.installError = void 0;
        try {
          await m(n.workflowName), l.phase = "complete";
        } catch (q) {
          l.error = q instanceof Error ? q.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Se(Ne), (P, N) => (o(), S(et, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: I.value,
      error: L.value || void 0,
      "fixed-height": !0,
      onClose: N[1] || (N[1] = (q) => r("close"))
    }, {
      body: i(() => [
        I.value && !v.value ? (o(), s("div", md, [...N[2] || (N[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : v.value ? (o(), s("div", vd, [
          p(zl, {
            steps: E.value,
            "current-step": b.value,
            "completed-steps": w.value,
            "step-stats": pe.value,
            onStepChange: me
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (o(), s("div", fd, [
            e("div", gd, [
              e("div", hd, [
                N[3] || (N[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", pd, " Found " + a(v.value.stats.total_nodes) + " nodes and " + a(v.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", yd, [
                e("div", wd, [
                  N[12] || (N[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", kd, [
                    M.value > 0 ? (o(), s("div", bd, [
                      N[4] || (N[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", _d, a(M.value), 1),
                      N[5] || (N[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    v.value.stats.packages_needing_installation > 0 ? (o(), s("div", $d, [
                      N[6] || (N[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Cd, a(v.value.stats.packages_needing_installation), 1),
                      N[7] || (N[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    v.value.nodes.ambiguous.length > 0 ? (o(), s("div", xd, [
                      N[8] || (N[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Sd, a(v.value.nodes.ambiguous.length), 1),
                      N[9] || (N[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    v.value.nodes.unresolved.length > 0 ? (o(), s("div", Id, [
                      N[10] || (N[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ed, a(v.value.nodes.unresolved.length), 1),
                      N[11] || (N[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Md, [
                  N[21] || (N[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Td, [
                    e("div", Rd, [
                      N[13] || (N[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zd, a(v.value.models.resolved.length - v.value.stats.download_intents), 1),
                      N[14] || (N[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    v.value.stats.download_intents > 0 ? (o(), s("div", Ld, [
                      N[15] || (N[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Nd, a(v.value.stats.download_intents), 1),
                      N[16] || (N[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    v.value.models.ambiguous.length > 0 ? (o(), s("div", Dd, [
                      N[17] || (N[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Pd, a(v.value.models.ambiguous.length), 1),
                      N[18] || (N[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    v.value.models.unresolved.length > 0 ? (o(), s("div", Od, [
                      N[19] || (N[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ud, a(v.value.models.unresolved.length), 1),
                      N[20] || (N[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              H.value ? (o(), s("div", Bd, [
                N[22] || (N[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Ad, a(Q.value.length + Z.value.length) + " items need your input", 1)
              ])) : T.value ? (o(), s("div", Fd, [
                N[23] || (N[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Vd, a(v.value.stats.packages_needing_installation) + " package" + a(v.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(v.value.stats.nodes_needing_installation) + " node type" + a(v.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(F.value ? `, ${v.value.stats.download_intents} model${v.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : F.value ? (o(), s("div", Wd, [
                N[24] || (N[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gd, a(v.value.stats.download_intents) + " model" + a(v.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", jd, [...N[25] || (N[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : d("", !0),
          b.value === "nodes" ? (o(), S(Fi, {
            key: 1,
            nodes: Q.value,
            "node-choices": $.value,
            "auto-resolved-packages": ae.value,
            "skipped-packages": O.value,
            onMarkOptional: je,
            onSkip: fe,
            onOptionSelected: De,
            onManualEntry: Fe,
            onClearChoice: Ve,
            onPackageSkip: dt
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          b.value === "models" ? (o(), S(Nr, {
            key: 2,
            models: z.value,
            "model-choices": B.value,
            onMarkOptional: ue,
            onSkip: Pe,
            onOptionSelected: ct,
            onDownloadUrl: tt,
            onClearChoice: Ie
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          b.value === "review" ? (o(), s("div", Hd, [
            e("div", qd, [
              N[30] || (N[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Kd, [
                e("div", Jd, [
                  e("span", Yd, a(x.value), 1),
                  N[26] || (N[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Qd, [
                  e("span", Xd, a(se.value), 1),
                  N[27] || (N[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Zd, [
                  e("span", ec, a(ee.value), 1),
                  N[28] || (N[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", tc, [
                  e("span", oc, a(_e.value), 1),
                  N[29] || (N[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ae.value.length > 0 ? (o(), s("div", sc, [
                e("h4", nc, "Node Packages (" + a(ae.value.length) + ")", 1),
                e("div", ac, [
                  (o(!0), s(V, null, X(ae.value, (q) => (o(), s("div", {
                    key: q.package_id,
                    class: "review-item"
                  }, [
                    e("code", lc, a(q.package_id), 1),
                    e("div", ic, [
                      O.value.has(q.package_id) ? (o(), s("span", dc, "Skipped")) : (o(), s("span", rc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              Q.value.length > 0 ? (o(), s("div", cc, [
                e("h4", uc, "Node Choices (" + a(Q.value.length) + ")", 1),
                e("div", mc, [
                  (o(!0), s(V, null, X(Q.value, (q) => {
                    var ce, Me, ne, te;
                    return o(), s("div", {
                      key: q.node_type,
                      class: "review-item"
                    }, [
                      e("code", vc, a(q.node_type), 1),
                      e("div", fc, [
                        $.value.has(q.node_type) ? (o(), s(V, { key: 0 }, [
                          ((ce = $.value.get(q.node_type)) == null ? void 0 : ce.action) === "install" ? (o(), s("span", gc, a((Me = $.value.get(q.node_type)) == null ? void 0 : Me.package_id), 1)) : ((ne = $.value.get(q.node_type)) == null ? void 0 : ne.action) === "optional" ? (o(), s("span", hc, " Optional ")) : ((te = $.value.get(q.node_type)) == null ? void 0 : te.action) === "skip" ? (o(), s("span", pc, " Skip ")) : d("", !0)
                        ], 64)) : (o(), s("span", yc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              z.value.length > 0 ? (o(), s("div", wc, [
                e("h4", kc, "Models (" + a(z.value.length) + ")", 1),
                e("div", bc, [
                  (o(!0), s(V, null, X(z.value, (q) => {
                    var ce, Me, ne, te, Ee, Je, mt;
                    return o(), s("div", {
                      key: q.filename,
                      class: "review-item"
                    }, [
                      e("code", _c, a(q.filename), 1),
                      e("div", $c, [
                        B.value.has(q.filename) ? (o(), s(V, { key: 0 }, [
                          ((ce = B.value.get(q.filename)) == null ? void 0 : ce.action) === "select" ? (o(), s("span", Cc, a((ne = (Me = B.value.get(q.filename)) == null ? void 0 : Me.selected_model) == null ? void 0 : ne.filename), 1)) : ((te = B.value.get(q.filename)) == null ? void 0 : te.action) === "download" ? (o(), s("span", xc, " Download ")) : ((Ee = B.value.get(q.filename)) == null ? void 0 : Ee.action) === "optional" ? (o(), s("span", Sc, " Optional ")) : ((Je = B.value.get(q.filename)) == null ? void 0 : Je.action) === "skip" ? (o(), s("span", Ic, " Skip ")) : ((mt = B.value.get(q.filename)) == null ? void 0 : mt.action) === "cancel_download" ? (o(), s("span", Ec, " Cancel Download ")) : d("", !0)
                        ], 64)) : q.is_download_intent ? (o(), s("span", Mc, " Pending Download ")) : (o(), s("span", Tc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              G.value.length === 0 && Q.value.length === 0 && z.value.length === 0 ? (o(), s("div", Rc, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          b.value === "applying" ? (o(), S(ud, {
            key: 4,
            progress: ge(l),
            onRestart: it,
            onRetryFailed: j
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        b.value !== "analysis" && b.value !== "applying" ? (o(), S(le, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Ce
        }, {
          default: i(() => [...N[31] || (N[31] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        N[35] || (N[35] = e("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || ge(l).phase === "complete" || ge(l).phase === "error" ? (o(), S(le, {
          key: 1,
          variant: "secondary",
          onClick: N[0] || (N[0] = (q) => r("close"))
        }, {
          default: i(() => [
            y(a(ge(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        b.value === "analysis" ? (o(), S(le, {
          key: 2,
          variant: "primary",
          disabled: I.value,
          onClick: Re
        }, {
          default: i(() => [...N[32] || (N[32] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        b.value === "nodes" ? (o(), S(le, {
          key: 3,
          variant: "primary",
          onClick: ye
        }, {
          default: i(() => [
            y(a(U.value || F.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        b.value === "models" ? (o(), S(le, {
          key: 4,
          variant: "primary",
          onClick: ye
        }, {
          default: i(() => [...N[33] || (N[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        b.value === "review" ? (o(), S(le, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: ut
        }, {
          default: i(() => [...N[34] || (N[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Lc = /* @__PURE__ */ J(zc, [["__scopeId", "data-v-0d3f93e6"]]), Nc = { class: "search-input-wrapper" }, Dc = ["value", "placeholder"], Pc = /* @__PURE__ */ K({
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
    const n = t, r = c, h = C(null);
    let g;
    function m(l) {
      const u = l.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        r("update:modelValue", u);
      }, n.debounce)) : r("update:modelValue", u);
    }
    function f() {
      var l;
      r("update:modelValue", ""), r("clear"), (l = h.value) == null || l.focus();
    }
    return Se(() => {
      n.autoFocus && h.value && h.value.focus();
    }), (l, u) => (o(), s("div", Nc, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: rt(f, ["escape"])
      }, null, 40, Dc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: f,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Oc = /* @__PURE__ */ J(Pc, [["__scopeId", "data-v-266f857a"]]), Uc = { class: "search-bar" }, Bc = /* @__PURE__ */ K({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (o(), s("div", Uc, [
      p(Oc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), bt = /* @__PURE__ */ J(Bc, [["__scopeId", "data-v-3d51bbfd"]]), Ac = { class: "section-group" }, Fc = {
  key: 0,
  class: "section-content"
}, Vc = /* @__PURE__ */ K({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = C(n.initiallyExpanded);
    function g() {
      n.collapsible && (h.value = !h.value, r("toggle", h.value));
    }
    return (m, f) => (o(), s("section", Ac, [
      p(Ge, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: g
      }, {
        default: i(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (o(), s("div", Fc, [
        ve(m.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), xe = /* @__PURE__ */ J(Vc, [["__scopeId", "data-v-c48e33ed"]]), Wc = { class: "item-header" }, Gc = {
  key: 0,
  class: "item-icon"
}, jc = { class: "item-info" }, Hc = {
  key: 0,
  class: "item-title"
}, qc = {
  key: 1,
  class: "item-subtitle"
}, Kc = {
  key: 0,
  class: "item-details"
}, Jc = {
  key: 1,
  class: "item-actions"
}, Yc = /* @__PURE__ */ K({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = D(() => n.status ? `status-${n.status}` : "");
    return (h, g) => (o(), s("div", {
      class: oe(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: g[0] || (g[0] = (m) => t.clickable && h.$emit("click"))
    }, [
      e("div", Wc, [
        h.$slots.icon ? (o(), s("span", Gc, [
          ve(h.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", jc, [
          h.$slots.title ? (o(), s("div", Hc, [
            ve(h.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          h.$slots.subtitle ? (o(), s("div", qc, [
            ve(h.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      h.$slots.details ? (o(), s("div", Kc, [
        ve(h.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      h.$slots.actions ? (o(), s("div", Jc, [
        ve(h.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Le = /* @__PURE__ */ J(Yc, [["__scopeId", "data-v-cc435e0e"]]), Qc = { class: "loading-state" }, Xc = { class: "loading-message" }, Zc = /* @__PURE__ */ K({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (o(), s("div", Qc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Xc, a(t.message), 1)
    ]));
  }
}), at = /* @__PURE__ */ J(Zc, [["__scopeId", "data-v-ad8436c9"]]), eu = { class: "error-state" }, tu = { class: "error-message" }, ou = /* @__PURE__ */ K({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (o(), s("div", eu, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", tu, a(t.message), 1),
      t.retry ? (o(), S(Y, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ J(ou, [["__scopeId", "data-v-5397be48"]]), su = /* @__PURE__ */ K({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getWorkflows: h } = ze();
    ro();
    const g = C([]), m = C(!1), f = C(null), l = C(""), u = C(!0), k = C(!1), v = C(!1), I = C(!1), _ = C(null), L = D(
      () => g.value.filter((Z) => Z.status === "broken")
    ), b = D(
      () => g.value.filter((Z) => Z.status === "new")
    ), w = D(
      () => g.value.filter((Z) => Z.status === "modified")
    ), $ = D(
      () => g.value.filter((Z) => Z.status === "synced")
    ), B = D(() => {
      if (!l.value.trim()) return g.value;
      const Z = l.value.toLowerCase();
      return g.value.filter((z) => z.name.toLowerCase().includes(Z));
    }), O = D(
      () => L.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), E = D(
      () => b.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), H = D(
      () => w.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), A = D(
      () => $.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), U = D(
      () => k.value ? A.value : A.value.slice(0, 5)
    );
    async function F(Z = !1) {
      m.value = !0, f.value = null;
      try {
        g.value = await h(Z);
      } catch (z) {
        f.value = z instanceof Error ? z.message : "Failed to load workflows";
      } finally {
        m.value = !1;
      }
    }
    c({ loadWorkflows: F });
    function T(Z) {
      _.value = Z, v.value = !0;
    }
    function M(Z) {
      _.value = Z, I.value = !0;
    }
    function G() {
      alert("Bulk resolution not yet implemented");
    }
    function ae() {
      r("refresh");
    }
    async function we() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ie(Z) {
      const z = [];
      return Z.missing_nodes > 0 && z.push(`${Z.missing_nodes} missing node${Z.missing_nodes > 1 ? "s" : ""}`), Z.missing_models > 0 && z.push(`${Z.missing_models} missing model${Z.missing_models > 1 ? "s" : ""}`), Z.pending_downloads && Z.pending_downloads > 0 && z.push(`${Z.pending_downloads} pending download${Z.pending_downloads > 1 ? "s" : ""}`), z.length > 0 ? z.join(", ") : "Has issues";
    }
    function Q(Z) {
      const z = Z.sync_state === "new" ? "New" : Z.sync_state === "modified" ? "Modified" : Z.sync_state === "synced" ? "Synced" : Z.sync_state;
      return Z.has_path_sync_issues && Z.models_needing_path_sync && Z.models_needing_path_sync > 0 ? `${Z.models_needing_path_sync} model path${Z.models_needing_path_sync > 1 ? "s" : ""} need${Z.models_needing_path_sync === 1 ? "s" : ""} sync` : z || "Unknown";
    }
    return Se(F), (Z, z) => (o(), s(V, null, [
      p(Be, null, {
        header: i(() => [
          p(Ae, { title: "WORKFLOWS" }, {
            actions: i(() => [
              L.value.length > 0 ? (o(), S(Y, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: i(() => [...z[8] || (z[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(bt, {
            modelValue: l.value,
            "onUpdate:modelValue": z[0] || (z[0] = (x) => l.value = x),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (o(), S(at, {
            key: 0,
            message: "Loading workflows..."
          })) : f.value ? (o(), S(lt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            O.value.length ? (o(), S(xe, {
              key: 0,
              title: "BROKEN",
              count: O.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(O.value, (x) => (o(), S(Le, {
                  key: x.name,
                  status: "broken"
                }, {
                  icon: i(() => [...z[9] || (z[9] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(a(x.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(ie(x)), 1)
                  ]),
                  actions: i(() => [
                    p(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => M(x.name)
                    }, {
                      default: i(() => [...z[10] || (z[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => T(x.name)
                    }, {
                      default: i(() => [...z[11] || (z[11] = [
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
            E.value.length ? (o(), S(xe, {
              key: 1,
              title: "NEW",
              count: E.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(E.value, (x) => (o(), S(Le, {
                  key: x.name,
                  status: x.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    y(a(x.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    y(a(x.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(x)), 1)
                  ]),
                  actions: i(() => [
                    p(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => T(x.name)
                    }, {
                      default: i(() => [...z[12] || (z[12] = [
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
            H.value.length ? (o(), S(xe, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(H.value, (x) => (o(), S(Le, {
                  key: x.name,
                  status: x.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...z[13] || (z[13] = [
                    y("⚡", -1)
                  ])]),
                  title: i(() => [
                    y(a(x.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(x)), 1)
                  ]),
                  actions: i(() => [
                    p(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => T(x.name)
                    }, {
                      default: i(() => [...z[14] || (z[14] = [
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
            A.value.length ? (o(), S(xe, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: z[2] || (z[2] = (x) => u.value = x)
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(U.value, (x) => (o(), S(Le, {
                  key: x.name,
                  status: x.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    y(a(x.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    y(a(x.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(x)), 1)
                  ]),
                  actions: i(() => [
                    p(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => T(x.name)
                    }, {
                      default: i(() => [...z[15] || (z[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !k.value && A.value.length > 5 ? (o(), S(Y, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: z[1] || (z[1] = (x) => k.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    y(" View all " + a(A.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            B.value.length ? d("", !0) : (o(), S(Ke, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      v.value && _.value ? (o(), S(wl, {
        key: 0,
        "workflow-name": _.value,
        onClose: z[3] || (z[3] = (x) => v.value = !1),
        onResolve: z[4] || (z[4] = (x) => M(_.value)),
        onRefresh: z[5] || (z[5] = (x) => r("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      I.value && _.value ? (o(), S(Lc, {
        key: 1,
        "workflow-name": _.value,
        onClose: z[6] || (z[6] = (x) => I.value = !1),
        onInstall: ae,
        onRefresh: z[7] || (z[7] = (x) => r("refresh")),
        onRestart: we
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), nu = /* @__PURE__ */ J(su, [["__scopeId", "data-v-b7939cb4"]]), au = /* @__PURE__ */ K({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: oe(["summary-bar", t.variant])
    }, [
      ve(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _t = /* @__PURE__ */ J(au, [["__scopeId", "data-v-ccb7816e"]]), lu = {
  key: 0,
  class: "model-details"
}, iu = { class: "detail-section" }, ru = { class: "detail-row" }, du = { class: "detail-value mono" }, cu = { class: "detail-row" }, uu = { class: "detail-value mono" }, mu = { class: "detail-row" }, vu = { class: "detail-value mono" }, fu = { class: "detail-row" }, gu = { class: "detail-value" }, hu = { class: "detail-row" }, pu = { class: "detail-value" }, yu = { class: "detail-row" }, wu = { class: "detail-value" }, ku = { class: "detail-section" }, bu = { class: "section-header" }, _u = {
  key: 0,
  class: "locations-list"
}, $u = { class: "location-path mono" }, Cu = {
  key: 0,
  class: "location-modified"
}, xu = ["onClick"], Su = {
  key: 1,
  class: "empty-state"
}, Iu = { class: "detail-section" }, Eu = { class: "section-header" }, Mu = {
  key: 0,
  class: "sources-list"
}, Tu = { class: "source-type" }, Ru = ["href"], zu = ["disabled", "onClick"], Lu = {
  key: 1,
  class: "empty-state"
}, Nu = { class: "add-source-form" }, Du = ["disabled"], Pu = {
  key: 2,
  class: "source-error"
}, Ou = {
  key: 3,
  class: "source-success"
}, Uu = /* @__PURE__ */ K({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: r, addModelSource: h, removeModelSource: g, openFileLocation: m } = ze(), f = C(null), l = C(!0), u = C(null), k = C(""), v = C(!1), I = C(null), _ = C(null), L = C(null), b = C(null);
    let w = null;
    function $(F, T = "success", M = 2e3) {
      w && clearTimeout(w), b.value = { message: F, type: T }, w = setTimeout(() => {
        b.value = null;
      }, M);
    }
    function B(F) {
      if (!F) return "Unknown";
      const T = 1024 * 1024 * 1024, M = 1024 * 1024;
      return F >= T ? `${(F / T).toFixed(1)} GB` : F >= M ? `${(F / M).toFixed(0)} MB` : `${(F / 1024).toFixed(0)} KB`;
    }
    function O(F) {
      navigator.clipboard.writeText(F), $("Copied to clipboard!");
    }
    async function E(F) {
      try {
        await m(F), $("Opening file location...");
      } catch {
        $("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!k.value.trim() || !f.value)) {
        v.value = !0, _.value = null, L.value = null;
        try {
          await h(f.value.hash, k.value.trim()), L.value = "Source added successfully!", k.value = "", await U();
        } catch (F) {
          _.value = F instanceof Error ? F.message : "Failed to add source";
        } finally {
          v.value = !1;
        }
      }
    }
    async function A(F) {
      if (f.value) {
        I.value = F, _.value = null, L.value = null;
        try {
          await g(f.value.hash, F), $("Source removed"), await U();
        } catch (T) {
          _.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          I.value = null;
        }
      }
    }
    async function U() {
      l.value = !0, u.value = null;
      try {
        f.value = await r(n.identifier);
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Se(U), (F, T) => {
      var M;
      return o(), s(V, null, [
        p(et, {
          title: `Model Details: ${((M = f.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: u.value,
          onClose: T[5] || (T[5] = (G) => F.$emit("close"))
        }, {
          body: i(() => {
            var G, ae, we, ie;
            return [
              f.value ? (o(), s("div", lu, [
                e("section", iu, [
                  e("div", ru, [
                    T[6] || (T[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", du, a(f.value.hash || "Not computed"), 1),
                    f.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (Q) => O(f.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", cu, [
                    T[7] || (T[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", uu, a(f.value.blake3 || "Not computed"), 1),
                    f.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (Q) => O(f.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", mu, [
                    T[8] || (T[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", vu, a(f.value.sha256 || "Not computed"), 1),
                    f.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (Q) => O(f.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", fu, [
                    T[9] || (T[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", gu, a(B(f.value.size)), 1)
                  ]),
                  e("div", hu, [
                    T[10] || (T[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", pu, a(f.value.category), 1)
                  ]),
                  e("div", yu, [
                    T[11] || (T[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", wu, a(f.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", ku, [
                  e("h4", bu, "Locations (" + a(((G = f.value.locations) == null ? void 0 : G.length) || 0) + ")", 1),
                  (ae = f.value.locations) != null && ae.length ? (o(), s("div", _u, [
                    (o(!0), s(V, null, X(f.value.locations, (Q, Z) => (o(), s("div", {
                      key: Z,
                      class: "location-item"
                    }, [
                      e("span", $u, a(Q.path), 1),
                      Q.modified ? (o(), s("span", Cu, "Modified: " + a(Q.modified), 1)) : d("", !0),
                      Q.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (z) => E(Q.path)
                      }, " Open File Location ", 8, xu)) : d("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Su, "No locations found"))
                ]),
                e("section", Iu, [
                  e("h4", Eu, "Download Sources (" + a(((we = f.value.sources) == null ? void 0 : we.length) || 0) + ")", 1),
                  (ie = f.value.sources) != null && ie.length ? (o(), s("div", Mu, [
                    (o(!0), s(V, null, X(f.value.sources, (Q, Z) => (o(), s("div", {
                      key: Z,
                      class: "source-item"
                    }, [
                      e("span", Tu, a(Q.type) + ":", 1),
                      e("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Q.url), 9, Ru),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: I.value === Q.url,
                        onClick: (z) => A(Q.url)
                      }, a(I.value === Q.url ? "..." : "×"), 9, zu)
                    ]))), 128))
                  ])) : (o(), s("div", Lu, " No download sources configured ")),
                  e("div", Nu, [
                    Xe(e("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (Q) => k.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [no, k.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !k.value.trim() || v.value,
                      onClick: H
                    }, a(v.value ? "Adding..." : "Add Source"), 9, Du)
                  ]),
                  _.value ? (o(), s("p", Pu, a(_.value), 1)) : d("", !0),
                  L.value ? (o(), s("p", Ou, a(L.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (G) => F.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), S(Te, { to: "body" }, [
          b.value ? (o(), s("div", {
            key: 0,
            class: oe(["toast", b.value.type])
          }, a(b.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), mo = /* @__PURE__ */ J(Uu, [["__scopeId", "data-v-f15cbb56"]]), Bu = /* @__PURE__ */ K({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: r, getStatus: h } = ze(), g = C([]), m = C([]), f = C("production"), l = C(!1), u = C(null), k = C(""), v = C(!1), I = C(null);
    function _() {
      v.value = !1, n("navigate", "model-index");
    }
    const L = D(
      () => g.value.reduce((U, F) => U + (F.size || 0), 0)
    ), b = D(() => {
      if (!k.value.trim()) return g.value;
      const U = k.value.toLowerCase();
      return g.value.filter((F) => F.filename.toLowerCase().includes(U));
    }), w = D(() => {
      if (!k.value.trim()) return m.value;
      const U = k.value.toLowerCase();
      return m.value.filter((F) => F.filename.toLowerCase().includes(U));
    }), $ = D(() => {
      const U = {};
      for (const T of b.value) {
        const M = T.type || "other";
        U[M] || (U[M] = []), U[M].push(T);
      }
      const F = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([T], [M]) => {
        const G = F.indexOf(T), ae = F.indexOf(M);
        return G >= 0 && ae >= 0 ? G - ae : G >= 0 ? -1 : ae >= 0 ? 1 : T.localeCompare(M);
      }).map(([T, M]) => ({ type: T, models: M }));
    });
    function B(U) {
      if (!U) return "Unknown";
      const F = U / (1024 * 1024);
      return F >= 1024 ? `${(F / 1024).toFixed(1)} GB` : `${F.toFixed(0)} MB`;
    }
    function O(U) {
      I.value = U.hash || U.filename;
    }
    function E(U) {
      n("navigate", "model-index");
    }
    function H(U) {
      alert(`Download functionality not yet implemented for ${U}`);
    }
    async function A() {
      l.value = !0, u.value = null;
      try {
        const U = await r();
        g.value = U, m.value = [];
        const F = await h();
        f.value = F.environment || "production";
      } catch (U) {
        u.value = U instanceof Error ? U.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Se(A), (U, F) => (o(), s(V, null, [
      p(Be, null, {
        header: i(() => [
          p(Ae, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: F[0] || (F[0] = (T) => v.value = !0)
          })
        ]),
        search: i(() => [
          p(bt, {
            modelValue: k.value,
            "onUpdate:modelValue": F[1] || (F[1] = (T) => k.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (o(), S(at, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (o(), S(lt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            g.value.length ? (o(), S(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(g.value.length) + " models • " + a(B(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (o(!0), s(V, null, X($.value, (T) => (o(), S(xe, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(T.models, (M) => (o(), S(Le, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...F[4] || (F[4] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(a(M.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(B(M.size)), 1)
                  ]),
                  details: i(() => [
                    p(ke, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    p(ke, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (G) => O(M)
                    }, {
                      default: i(() => [...F[5] || (F[5] = [
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
            w.value.length ? (o(), S(xe, {
              key: 1,
              title: "MISSING",
              count: w.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(w.value, (T) => (o(), S(Le, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...F[6] || (F[6] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(a(T.filename), 1)
                  ]),
                  subtitle: i(() => [...F[7] || (F[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var M;
                    return [
                      p(ke, {
                        label: "Required by:",
                        value: ((M = T.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    p(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => H(T.filename)
                    }, {
                      default: i(() => [...F[8] || (F[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => E(T.filename)
                    }, {
                      default: i(() => [...F[9] || (F[9] = [
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
            !b.value.length && !w.value.length ? (o(), S(Ke, {
              key: 2,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      p(nt, {
        show: v.value,
        title: "About Environment Models",
        onClose: F[2] || (F[2] = (T) => v.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            F[10] || (F[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(f.value) + '"', 1),
            F[11] || (F[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          p(Y, {
            variant: "primary",
            onClick: _
          }, {
            default: i(() => [...F[12] || (F[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), S(mo, {
        key: 0,
        identifier: I.value,
        onClose: F[3] || (F[3] = (T) => I.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Au = /* @__PURE__ */ J(Bu, [["__scopeId", "data-v-cb4f12b3"]]), Fu = {
  key: 0,
  class: "indexing-progress"
}, Vu = { class: "progress-info" }, Wu = { class: "progress-label" }, Gu = { class: "progress-count" }, ju = { class: "progress-bar" }, Hu = { class: "modal-content" }, qu = { class: "modal-header" }, Ku = { class: "modal-body" }, Ju = { class: "input-group" }, Yu = { class: "current-path" }, Qu = { class: "input-group" }, Xu = { class: "modal-footer" }, Zu = { class: "modal-content" }, em = { class: "modal-header" }, tm = { class: "modal-body" }, om = { class: "input-group" }, sm = { class: "input-group" }, nm = { class: "modal-footer" }, am = /* @__PURE__ */ K({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: h,
      setModelsDirectory: g
    } = ze(), { addToQueue: m } = Rt(), f = c, l = C([]), u = C(!1), k = C(!1), v = C(null), I = C(""), _ = C(!1), L = C(null), b = C(!1), w = C(null), $ = C(""), B = C(!1), O = C(!1), E = C(""), H = C(""), A = C(null), U = D(
      () => l.value.reduce((z, x) => z + (x.size || 0), 0)
    ), F = D(() => {
      if (!I.value.trim()) return l.value;
      const z = I.value.toLowerCase();
      return l.value.filter((x) => {
        const se = x, ee = x.sha256 || se.sha256_hash || "";
        return x.filename.toLowerCase().includes(z) || ee.toLowerCase().includes(z);
      });
    }), T = D(() => {
      const z = {};
      for (const se of F.value) {
        const ee = se.type || "other";
        z[ee] || (z[ee] = []), z[ee].push(se);
      }
      const x = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([se], [ee]) => {
        const _e = x.indexOf(se), pe = x.indexOf(ee);
        return _e >= 0 && pe >= 0 ? _e - pe : _e >= 0 ? -1 : pe >= 0 ? 1 : se.localeCompare(ee);
      }).map(([se, ee]) => ({ type: se, models: ee }));
    });
    function M(z) {
      if (!z) return "Unknown";
      const x = 1024 * 1024 * 1024, se = 1024 * 1024;
      return z >= x ? `${(z / x).toFixed(1)} GB` : z >= se ? `${(z / se).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function G(z) {
      L.value = z.hash || z.filename;
    }
    async function ae() {
      k.value = !0, v.value = null;
      try {
        const z = await r();
        await Q(), z.changes > 0 && console.log(`Scan complete: ${z.changes} changes detected`);
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to scan models";
      } finally {
        k.value = !1;
      }
    }
    async function we() {
      if ($.value.trim()) {
        B.value = !0, v.value = null;
        try {
          const z = await g($.value.trim());
          w.value = z.path, b.value = !1, $.value = "", await Q(), console.log(`Directory changed: ${z.models_indexed} models indexed`), f("refresh");
        } catch (z) {
          v.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          B.value = !1;
        }
      }
    }
    function ie() {
      if (!E.value.trim() || !H.value.trim()) return;
      const z = H.value.split("/").pop() || "model.safetensors";
      m([{
        workflow: "__manual__",
        filename: z,
        url: E.value.trim(),
        targetPath: H.value.trim()
      }]), E.value = "", H.value = "", O.value = !1;
    }
    async function Q() {
      u.value = !0, v.value = null;
      try {
        l.value = await n();
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load workspace models";
      } finally {
        u.value = !1;
      }
    }
    async function Z() {
      try {
        const z = await h();
        w.value = z.path;
      } catch {
      }
    }
    return Se(() => {
      Q(), Z();
    }), (z, x) => (o(), s(V, null, [
      p(Be, null, {
        header: i(() => [
          p(Ae, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: x[2] || (x[2] = (se) => _.value = !0)
          }, {
            actions: i(() => [
              p(Y, {
                variant: "primary",
                size: "sm",
                disabled: k.value,
                onClick: ae
              }, {
                default: i(() => [
                  y(a(k.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              p(Y, {
                variant: "primary",
                size: "sm",
                onClick: x[0] || (x[0] = (se) => b.value = !0)
              }, {
                default: i(() => [...x[15] || (x[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              p(Y, {
                variant: "primary",
                size: "sm",
                onClick: x[1] || (x[1] = (se) => O.value = !0)
              }, {
                default: i(() => [...x[16] || (x[16] = [
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
          A.value ? (o(), s("div", Fu, [
            e("div", Vu, [
              e("span", Wu, a(A.value.message), 1),
              e("span", Gu, a(A.value.current) + "/" + a(A.value.total), 1)
            ]),
            e("div", ju, [
              e("div", {
                class: "progress-fill",
                style: Ze({ width: `${A.value.current / A.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          p(bt, {
            modelValue: I.value,
            "onUpdate:modelValue": x[3] || (x[3] = (se) => I.value = se),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value || A.value ? (o(), S(at, {
            key: 0,
            message: A.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (o(), S(lt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            l.value.length ? (o(), S(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(l.value.length) + " models • " + a(M(U.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (o(!0), s(V, null, X(T.value, (se) => (o(), S(xe, {
              key: se.type,
              title: se.type.toUpperCase(),
              count: se.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(se.models, (ee) => (o(), S(Le, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...x[17] || (x[17] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(a(ee.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(M(ee.size)), 1)
                  ]),
                  details: i(() => [
                    p(ke, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (_e) => G(ee)
                    }, {
                      default: i(() => [...x[18] || (x[18] = [
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
            F.value.length ? d("", !0) : (o(), S(Ke, {
              key: 1,
              icon: "📭",
              message: I.value ? `No models match '${I.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p(nt, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: x[4] || (x[4] = (se) => _.value = !1)
      }, {
        content: i(() => [...x[19] || (x[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      L.value ? (o(), S(mo, {
        key: 0,
        identifier: L.value,
        onClose: x[5] || (x[5] = (se) => L.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (o(), S(Te, { to: "body" }, [
        b.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[9] || (x[9] = $e((se) => b.value = !1, ["self"]))
        }, [
          e("div", Hu, [
            e("div", qu, [
              x[20] || (x[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: x[6] || (x[6] = (se) => b.value = !1)
              }, "✕")
            ]),
            e("div", Ku, [
              e("div", Ju, [
                x[21] || (x[21] = e("label", null, "Current Directory", -1)),
                e("code", Yu, a(w.value || "Not set"), 1)
              ]),
              e("div", Qu, [
                x[22] || (x[22] = e("label", null, "New Directory Path", -1)),
                p(qe, {
                  modelValue: $.value,
                  "onUpdate:modelValue": x[7] || (x[7] = (se) => $.value = se),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              x[23] || (x[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Xu, [
              p(le, {
                variant: "secondary",
                onClick: x[8] || (x[8] = (se) => b.value = !1)
              }, {
                default: i(() => [...x[24] || (x[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              p(le, {
                variant: "primary",
                disabled: !$.value.trim() || B.value,
                loading: B.value,
                onClick: we
              }, {
                default: i(() => [
                  y(a(B.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (o(), S(Te, { to: "body" }, [
        O.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[14] || (x[14] = $e((se) => O.value = !1, ["self"]))
        }, [
          e("div", Zu, [
            e("div", em, [
              x[25] || (x[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: x[10] || (x[10] = (se) => O.value = !1)
              }, "✕")
            ]),
            e("div", tm, [
              e("div", om, [
                x[26] || (x[26] = e("label", null, "Download URL", -1)),
                p(qe, {
                  modelValue: E.value,
                  "onUpdate:modelValue": x[11] || (x[11] = (se) => E.value = se),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", sm, [
                x[27] || (x[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                p(qe, {
                  modelValue: H.value,
                  "onUpdate:modelValue": x[12] || (x[12] = (se) => H.value = se),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              x[28] || (x[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", nm, [
              p(le, {
                variant: "secondary",
                onClick: x[13] || (x[13] = (se) => O.value = !1)
              }, {
                default: i(() => [...x[29] || (x[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              p(le, {
                variant: "primary",
                disabled: !E.value.trim() || !H.value.trim(),
                onClick: ie
              }, {
                default: i(() => [...x[30] || (x[30] = [
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
}), lm = /* @__PURE__ */ J(am, [["__scopeId", "data-v-73b78d84"]]), im = { class: "node-details" }, rm = { class: "status-row" }, dm = {
  key: 0,
  class: "detail-row"
}, cm = { class: "value" }, um = { class: "detail-row" }, mm = { class: "value" }, vm = {
  key: 1,
  class: "detail-row"
}, fm = { class: "value mono" }, gm = {
  key: 2,
  class: "detail-row"
}, hm = ["href"], pm = {
  key: 3,
  class: "detail-row"
}, ym = { class: "value mono small" }, wm = { class: "detail-row" }, km = {
  key: 0,
  class: "value"
}, bm = {
  key: 1,
  class: "workflow-list"
}, _m = /* @__PURE__ */ K({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), m = D(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (f, l) => (o(), S(et, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (u) => r("close"))
    }, {
      body: i(() => [
        e("div", im, [
          e("div", rm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: oe(["status-badge", h.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (o(), s("div", dm, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", cm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", um, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", mm, a(m.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", vm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", fm, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (o(), s("div", gm, [
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
            ], 8, hm)
          ])) : d("", !0),
          t.node.download_url ? (o(), s("div", pm, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", ym, a(t.node.download_url), 1)
          ])) : d("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", wm, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", km, " Not used in any workflows ")) : (o(), s("div", bm, [
              (o(!0), s(V, null, X(t.node.used_in_workflows, (u) => (o(), s("span", {
                key: u,
                class: "workflow-tag"
              }, a(u), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        p(le, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (u) => r("close"))
        }, {
          default: i(() => [...l[11] || (l[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), $m = /* @__PURE__ */ J(_m, [["__scopeId", "data-v-b342f626"]]), Cm = { key: 0 }, xm = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Sm = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Im = /* @__PURE__ */ K({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: r, trackNodeAsDev: h, installNode: g, uninstallNode: m } = ze(), f = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = C(!1), u = C(null), k = C(""), v = C(!1), I = C(null), _ = D(() => {
      if (!k.value.trim()) return f.value.nodes;
      const T = k.value.toLowerCase();
      return f.value.nodes.filter(
        (M) => {
          var G, ae;
          return M.name.toLowerCase().includes(T) || ((G = M.description) == null ? void 0 : G.toLowerCase().includes(T)) || ((ae = M.repository) == null ? void 0 : ae.toLowerCase().includes(T));
        }
      );
    }), L = D(
      () => _.value.filter((T) => T.installed && T.tracked)
    ), b = D(
      () => _.value.filter((T) => !T.installed && T.tracked)
    ), w = D(
      () => _.value.filter((T) => T.installed && !T.tracked)
    );
    function $(T) {
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
    function O(T) {
      I.value = T;
    }
    function E() {
      n("open-node-manager");
    }
    async function H(T) {
      if (confirm(`Track "${T}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const M = await h(T);
          M.status === "success" ? (alert(`Node "${T}" is now tracked as development!`), await F()) : alert(`Failed to track node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error tracking node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function A(T) {
      if (confirm(`Remove untracked node "${T}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const M = await m(T);
          M.status === "success" ? (alert(`Node "${T}" removed!`), await F()) : alert(`Failed to remove node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error removing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function U(T) {
      if (confirm(`Install node "${T}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const M = await g(T);
          M.status === "success" ? (alert(`Node "${T}" installed successfully!`), await F()) : alert(`Failed to install node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function F() {
      l.value = !0, u.value = null;
      try {
        f.value = await r();
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Se(F), (T, M) => (o(), s(V, null, [
      p(Be, null, {
        header: i(() => [
          p(Ae, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (G) => v.value = !0)
          }, {
            actions: i(() => [
              p(Y, {
                variant: "primary",
                size: "sm",
                onClick: E
              }, {
                default: i(() => [...M[5] || (M[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(bt, {
            modelValue: k.value,
            "onUpdate:modelValue": M[1] || (M[1] = (G) => k.value = G),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (o(), S(at, {
            key: 0,
            message: "Loading nodes..."
          })) : u.value ? (o(), S(lt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            f.value.total_count ? (o(), S(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(a(f.value.installed_count) + " installed ", 1),
                f.value.missing_count ? (o(), s(V, { key: 0 }, [
                  y(" • " + a(f.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                f.value.untracked_count ? (o(), s(V, { key: 1 }, [
                  y(" • " + a(f.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            w.value.length ? (o(), S(xe, {
              key: 1,
              title: "UNTRACKED",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(w.value, (G) => (o(), S(Le, {
                  key: G.name,
                  status: "warning"
                }, {
                  icon: i(() => [...M[6] || (M[6] = [
                    y("?", -1)
                  ])]),
                  title: i(() => [
                    y(a(G.name), 1)
                  ]),
                  subtitle: i(() => [...M[7] || (M[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    p(ke, {
                      label: "Used by:",
                      value: B(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ae) => O(G)
                    }, {
                      default: i(() => [...M[8] || (M[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => H(G.name)
                    }, {
                      default: i(() => [...M[9] || (M[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Y, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (ae) => A(G.name)
                    }, {
                      default: i(() => [...M[10] || (M[10] = [
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
            L.value.length ? (o(), S(xe, {
              key: 2,
              title: "INSTALLED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(L.value, (G) => (o(), S(Le, {
                  key: G.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    y(a(G.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    y(a(G.name), 1)
                  ]),
                  subtitle: i(() => [
                    G.version ? (o(), s("span", Cm, a(G.source === "development" ? "" : "v") + a(G.version), 1)) : (o(), s("span", xm, "version unknown")),
                    e("span", Sm, " • " + a($(G.source)), 1)
                  ]),
                  details: i(() => [
                    p(ke, {
                      label: "Used by:",
                      value: B(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ae) => O(G)
                    }, {
                      default: i(() => [...M[11] || (M[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: E
                    }, {
                      default: i(() => [...M[12] || (M[12] = [
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
            b.value.length ? (o(), S(xe, {
              key: 3,
              title: "MISSING",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(b.value, (G) => (o(), S(Le, {
                  key: G.name,
                  status: "missing"
                }, {
                  icon: i(() => [...M[13] || (M[13] = [
                    y("!", -1)
                  ])]),
                  title: i(() => [
                    y(a(G.name), 1)
                  ]),
                  subtitle: i(() => [...M[14] || (M[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    p(ke, {
                      label: "Required by:",
                      value: B(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ae) => O(G)
                    }, {
                      default: i(() => [...M[15] || (M[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => U(G.name)
                    }, {
                      default: i(() => [...M[16] || (M[16] = [
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
            !L.value.length && !b.value.length && !w.value.length ? (o(), S(Ke, {
              key: 4,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      p(nt, {
        show: v.value,
        title: "About Custom Nodes",
        onClose: M[3] || (M[3] = (G) => v.value = !1)
      }, {
        content: i(() => [...M[17] || (M[17] = [
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
          p(Y, {
            variant: "primary",
            onClick: M[2] || (M[2] = (G) => v.value = !1)
          }, {
            default: i(() => [...M[18] || (M[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), S($m, {
        key: 0,
        node: I.value,
        onClose: M[4] || (M[4] = (G) => I.value = null)
      }, null, 8, ["node"])) : d("", !0)
    ], 64));
  }
}), Em = /* @__PURE__ */ J(Im, [["__scopeId", "data-v-4ac1465a"]]);
function vo(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Mm = { class: "remote-url-display" }, Tm = ["title"], Rm = ["title"], zm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Lm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Nm = /* @__PURE__ */ K({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = C(!1), r = D(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), m = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${m}`;
    });
    async function h() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, m) => (o(), s("div", Mm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, Tm),
      e("button", {
        class: oe(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Lm, [...m[1] || (m[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", zm, [...m[0] || (m[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Rm)
    ]));
  }
}), Xt = /* @__PURE__ */ J(Nm, [["__scopeId", "data-v-7768a58d"]]), Dm = { class: "remote-title" }, Pm = {
  key: 0,
  class: "default-badge"
}, Om = {
  key: 1,
  class: "sync-badge"
}, Um = {
  key: 0,
  class: "ahead"
}, Bm = {
  key: 1,
  class: "behind"
}, Am = {
  key: 0,
  class: "tracking-info"
}, Fm = /* @__PURE__ */ K({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = D(() => c.fetchingRemote === c.remote.name), r = D(() => c.remote.is_default), h = D(() => !!c.trackingBranch), g = D(() => c.syncStatus && c.syncStatus.behind > 0), m = D(() => c.syncStatus && c.syncStatus.ahead > 0);
    function f(l) {
      const u = new Date(l), v = (/* @__PURE__ */ new Date()).getTime() - u.getTime(), I = Math.floor(v / 6e4);
      if (I < 1) return "Just now";
      if (I < 60) return `${I}m ago`;
      const _ = Math.floor(I / 60);
      if (_ < 24) return `${_}h ago`;
      const L = Math.floor(_ / 24);
      return L < 7 ? `${L}d ago` : u.toLocaleDateString();
    }
    return (l, u) => (o(), S(Le, {
      status: r.value ? "synced" : void 0
    }, {
      icon: i(() => [
        y(a(r.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Dm, [
          e("span", null, a(t.remote.name), 1),
          r.value ? (o(), s("span", Pm, "DEFAULT")) : d("", !0),
          t.syncStatus ? (o(), s("span", Om, [
            t.syncStatus.ahead > 0 ? (o(), s("span", Um, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", Bm, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: i(() => [
        h.value ? (o(), s("span", Am, " Tracking: " + a(t.trackingBranch), 1)) : d("", !0)
      ]),
      details: i(() => {
        var k;
        return [
          p(ke, { label: "Fetch:" }, {
            default: i(() => [
              p(Xt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), S(ke, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              p(Xt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (k = t.syncStatus) != null && k.last_fetch ? (o(), S(ke, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, a(f(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: i(() => [
        p(Y, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: u[0] || (u[0] = (k) => l.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...u[5] || (u[5] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        p(Y, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: u[1] || (u[1] = (k) => l.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        p(Y, {
          variant: m.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: u[2] || (u[2] = (k) => l.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        p(Y, {
          variant: "secondary",
          size: "xs",
          onClick: u[3] || (u[3] = (k) => l.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...u[6] || (u[6] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        r.value ? d("", !0) : (o(), S(Y, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: u[4] || (u[4] = (k) => l.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...u[7] || (u[7] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Vm = /* @__PURE__ */ J(Fm, [["__scopeId", "data-v-f9018fc6"]]), Wm = ["for"], Gm = {
  key: 0,
  class: "base-form-field-required"
}, jm = { class: "base-form-field-input" }, Hm = {
  key: 1,
  class: "base-form-field-error"
}, qm = {
  key: 2,
  class: "base-form-field-hint"
}, Km = /* @__PURE__ */ K({
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
    const c = t, n = D(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, h) => (o(), s("div", {
      class: oe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (o(), s("span", Gm, "*")) : d("", !0)
      ], 8, Wm)) : d("", !0),
      e("div", jm, [
        ve(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Hm, a(t.error), 1)) : t.hint ? (o(), s("span", qm, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ J(Km, [["__scopeId", "data-v-9a1cf296"]]), Jm = { class: "remote-form" }, Ym = { class: "form-header" }, Qm = { class: "form-body" }, Xm = {
  key: 0,
  class: "form-error"
}, Zm = { class: "form-actions" }, ev = /* @__PURE__ */ K({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = C({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = C(!1), m = C(null);
    kt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const f = D(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!f.value || g.value)) {
        m.value = null, g.value = !0;
        try {
          r("submit", h.value);
        } catch (u) {
          m.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (u, k) => (o(), s("div", Jm, [
      e("div", Ym, [
        p(Ge, null, {
          default: i(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Qm, [
        p(At, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            p(qe, {
              modelValue: h.value.name,
              "onUpdate:modelValue": k[0] || (k[0] = (v) => h.value.name = v),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        p(At, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            p(qe, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": k[1] || (k[1] = (v) => h.value.fetchUrl = v),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p(At, { label: "Push URL (optional)" }, {
          default: i(() => [
            p(qe, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": k[2] || (k[2] = (v) => h.value.pushUrl = v),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (o(), s("div", Xm, a(m.value), 1)) : d("", !0)
      ]),
      e("div", Zm, [
        p(Y, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: g.value,
          onClick: l
        }, {
          default: i(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        p(Y, {
          variant: "ghost",
          size: "md",
          onClick: k[3] || (k[3] = (v) => u.$emit("cancel"))
        }, {
          default: i(() => [...k[4] || (k[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), tv = /* @__PURE__ */ J(ev, [["__scopeId", "data-v-56021b18"]]), ov = { class: "conflict-summary-box" }, sv = { class: "summary-header" }, nv = { class: "summary-text" }, av = { key: 0 }, lv = {
  key: 1,
  class: "all-resolved"
}, iv = { class: "summary-progress" }, rv = { class: "progress-bar" }, dv = { class: "progress-text" }, cv = /* @__PURE__ */ K({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = D(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (r, h) => (o(), s("div", ov, [
      e("div", sv, [
        h[0] || (h[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", nv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (o(), s("p", av, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (o(), s("p", lv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", iv, [
        e("div", rv, [
          e("div", {
            class: "progress-fill",
            style: Ze({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", dv, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), uv = /* @__PURE__ */ J(cv, [["__scopeId", "data-v-4e9e6cc9"]]), mv = { class: "modal-header" }, vv = { class: "modal-title" }, fv = { class: "modal-body" }, gv = {
  key: 0,
  class: "error-box"
}, hv = {
  key: 0,
  class: "error-hint"
}, pv = {
  key: 1,
  class: "loading-state"
}, yv = { class: "commit-summary" }, wv = {
  key: 0,
  class: "changes-section"
}, kv = {
  key: 0,
  class: "change-group",
  open: ""
}, bv = { class: "change-count" }, _v = { class: "change-list" }, $v = {
  key: 0,
  class: "conflict-badge"
}, Cv = {
  key: 1,
  class: "change-group"
}, xv = { class: "change-count" }, Sv = { class: "change-list" }, Iv = {
  key: 2,
  class: "change-group"
}, Ev = { class: "change-count" }, Mv = { class: "change-list" }, Tv = {
  key: 2,
  class: "strategy-section"
}, Rv = { class: "radio-group" }, zv = { class: "radio-option" }, Lv = { class: "radio-option" }, Nv = { class: "radio-option" }, Dv = {
  key: 3,
  class: "up-to-date"
}, Pv = { class: "modal-actions" }, Zt = "comfygit.pullModelStrategy", Ov = /* @__PURE__ */ K({
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
  setup(t, { emit: c }) {
    const n = t, r = c, h = C(localStorage.getItem(Zt) || "skip");
    kt(h, (w) => {
      localStorage.setItem(Zt, w);
    });
    const g = D(() => {
      var w;
      return ((w = n.error) == null ? void 0 : w.toLowerCase().includes("unrelated histories")) ?? !1;
    }), m = D(() => {
      if (!n.preview) return 0;
      const w = n.preview.changes.workflows;
      return w.added.length + w.modified.length + w.deleted.length;
    }), f = D(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), l = D(() => {
      var w;
      return m.value > 0 || f.value > 0 || (((w = n.preview) == null ? void 0 : w.changes.models.count) || 0) > 0;
    }), u = D(() => n.preview && vo(n.preview) ? n.preview : null), k = D(() => {
      var w;
      return ((w = u.value) == null ? void 0 : w.workflow_conflicts.length) ?? 0;
    }), v = D(() => {
      var w;
      return ((w = n.conflictResolutions) == null ? void 0 : w.size) ?? 0;
    }), I = D(
      () => k.value > 0 && v.value === k.value
    ), _ = D(() => !(!n.preview || n.preview.has_uncommitted_changes || u.value && !I.value));
    function L(w) {
      if (!u.value) return !1;
      const $ = w.replace(/\.json$/, "");
      return u.value.workflow_conflicts.some((B) => B.name === $);
    }
    function b(w) {
      const $ = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      r("pull", { modelStrategy: h.value, force: w, resolutions: $ });
    }
    return (w, $) => {
      var B, O;
      return o(), S(Te, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[11] || ($[11] = (E) => w.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[10] || ($[10] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", mv, [
              e("h3", vv, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (E) => w.$emit("close"))
              }, "✕")
            ]),
            e("div", fv, [
              t.error ? (o(), s("div", gv, [
                $[13] || ($[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  $[12] || ($[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (o(), s("p", hv, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (o(), s("div", pv, [...$[14] || ($[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (B = t.preview) != null && B.has_uncommitted_changes ? (o(), s(V, { key: 2 }, [
                $[15] || ($[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                $[16] || ($[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (o(), s(V, { key: 3 }, [
                e("div", yv, [
                  $[17] || ($[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                l.value ? (o(), s("div", wv, [
                  $[21] || ($[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  m.value > 0 ? (o(), s("details", kv, [
                    e("summary", null, [
                      $[18] || ($[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", bv, a(m.value) + " changes", 1)
                    ]),
                    e("div", _v, [
                      (o(!0), s(V, null, X(t.preview.changes.workflows.added, (E) => (o(), s("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + a(E), 1))), 128)),
                      (o(!0), s(V, null, X(t.preview.changes.workflows.modified, (E) => (o(), s("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(E) + " ", 1),
                        L(E) ? (o(), s("span", $v, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (o(!0), s(V, null, X(t.preview.changes.workflows.deleted, (E) => (o(), s("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + a(E), 1))), 128))
                    ])
                  ])) : d("", !0),
                  f.value > 0 ? (o(), s("details", Cv, [
                    e("summary", null, [
                      $[19] || ($[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", xv, a(f.value) + " to install", 1)
                    ]),
                    e("div", Sv, [
                      (o(!0), s(V, null, X(t.preview.changes.nodes.to_install, (E) => (o(), s("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + a(E), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (o(), s("details", Iv, [
                    e("summary", null, [
                      $[20] || ($[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Ev, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Mv, [
                      (o(!0), s(V, null, X(t.preview.changes.models.referenced, (E) => (o(), s("div", {
                        key: E,
                        class: "change-item"
                      }, a(E), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                u.value ? (o(), S(uv, {
                  key: 1,
                  "conflict-count": k.value,
                  "resolved-count": v.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (o(), s("div", Tv, [
                  $[26] || ($[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Rv, [
                    e("label", zv, [
                      Xe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[1] || ($[1] = (E) => h.value = E),
                        value: "all"
                      }, null, 512), [
                        [Ot, h.value]
                      ]),
                      $[22] || ($[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Lv, [
                      Xe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[2] || ($[2] = (E) => h.value = E),
                        value: "required"
                      }, null, 512), [
                        [Ot, h.value]
                      ]),
                      $[23] || ($[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Nv, [
                      Xe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[3] || ($[3] = (E) => h.value = E),
                        value: "skip"
                      }, null, 512), [
                        [Ot, h.value]
                      ]),
                      $[24] || ($[24] = e("span", null, "Skip model downloads", -1)),
                      $[25] || ($[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  $[27] || ($[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (o(), s("div", Dv, [
                  $[28] || ($[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Pv, [
              p(Y, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (E) => w.$emit("close"))
              }, {
                default: i(() => [...$[29] || ($[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (o(), s(V, { key: 0 }, [
                p(Y, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: $[5] || ($[5] = (E) => b(!1))
                }, {
                  default: i(() => [...$[30] || ($[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                p(Y, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: $[6] || ($[6] = (E) => b(!0))
                }, {
                  default: i(() => [...$[31] || ($[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (O = t.preview) != null && O.has_uncommitted_changes ? (o(), S(Y, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: $[7] || ($[7] = (E) => b(!0))
              }, {
                default: i(() => [...$[32] || ($[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (o(), s(V, { key: 2 }, [
                u.value && !I.value ? (o(), S(Y, {
                  key: 0,
                  variant: "primary",
                  onClick: $[8] || ($[8] = (E) => r("openConflictResolution"))
                }, {
                  default: i(() => [
                    y(" Resolve Conflicts (" + a(v.value) + "/" + a(k.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (o(), S(Y, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !_.value,
                  onClick: $[9] || ($[9] = (E) => b(!1))
                }, {
                  default: i(() => [...$[33] || ($[33] = [
                    y(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Uv = /* @__PURE__ */ J(Ov, [["__scopeId", "data-v-300c7b2f"]]), Bv = { class: "modal-header" }, Av = { class: "modal-title" }, Fv = { class: "modal-body" }, Vv = {
  key: 0,
  class: "loading-state"
}, Wv = {
  key: 1,
  class: "warning-box"
}, Gv = {
  key: 0,
  class: "commits-section"
}, jv = { class: "commit-list" }, Hv = { class: "commit-hash" }, qv = { class: "commit-message" }, Kv = { class: "commit-date" }, Jv = { class: "force-option" }, Yv = { class: "checkbox-option" }, Qv = { class: "commit-summary" }, Xv = {
  key: 0,
  class: "commits-section"
}, Zv = { class: "commit-list" }, ef = { class: "commit-hash" }, tf = { class: "commit-message" }, of = { class: "commit-date" }, sf = {
  key: 1,
  class: "up-to-date"
}, nf = { class: "modal-actions" }, af = /* @__PURE__ */ K({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: c }) {
    const n = c, r = C(!1);
    function h(g) {
      n("push", { force: g });
    }
    return (g, m) => {
      var f, l, u;
      return o(), S(Te, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: m[7] || (m[7] = (k) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: m[6] || (m[6] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Bv, [
              e("h3", Av, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: m[0] || (m[0] = (k) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Fv, [
              t.loading ? (o(), s("div", Vv, [...m[8] || (m[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (f = t.preview) != null && f.has_uncommitted_changes ? (o(), s("div", Wv, [...m[9] || (m[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (l = t.preview) != null && l.remote_has_new_commits ? (o(), s(V, { key: 2 }, [
                m[13] || (m[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (o(), s("div", Gv, [
                  m[10] || (m[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", jv, [
                    (o(!0), s(V, null, X(t.preview.commits, (k) => (o(), s("div", {
                      key: k.hash,
                      class: "commit-item"
                    }, [
                      e("span", Hv, a(k.short_hash || k.hash.slice(0, 7)), 1),
                      e("span", qv, a(k.message), 1),
                      e("span", Kv, a(k.date_relative || k.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", Jv, [
                  e("label", Yv, [
                    Xe(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": m[1] || (m[1] = (k) => r.value = k)
                    }, null, 512), [
                      [ao, r.value]
                    ]),
                    m[11] || (m[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  m[12] || (m[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (o(), s(V, { key: 3 }, [
                e("div", Qv, [
                  m[14] || (m[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (o(), s("div", Xv, [
                  m[15] || (m[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Zv, [
                    (o(!0), s(V, null, X(t.preview.commits, (k) => (o(), s("div", {
                      key: k.hash,
                      class: "commit-item"
                    }, [
                      e("span", ef, a(k.short_hash || k.hash.slice(0, 7)), 1),
                      e("span", tf, a(k.message), 1),
                      e("span", of, a(k.date_relative || k.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (o(), s("div", sf, [
                  m[16] || (m[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", nf, [
              p(Y, {
                variant: "secondary",
                onClick: m[2] || (m[2] = (k) => g.$emit("close"))
              }, {
                default: i(() => [...m[17] || (m[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (u = t.preview) != null && u.remote_has_new_commits ? (o(), s(V, { key: 0 }, [
                p(Y, {
                  variant: "secondary",
                  onClick: m[3] || (m[3] = (k) => g.$emit("pull-first"))
                }, {
                  default: i(() => [...m[18] || (m[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                p(Y, {
                  variant: "destructive",
                  disabled: !r.value,
                  loading: t.pushing,
                  onClick: m[4] || (m[4] = (k) => h(!0))
                }, {
                  default: i(() => [...m[19] || (m[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (o(), S(Y, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: m[5] || (m[5] = (k) => h(!1))
              }, {
                default: i(() => [...m[20] || (m[20] = [
                  y(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), lf = /* @__PURE__ */ J(af, [["__scopeId", "data-v-bc6ded53"]]), rf = { class: "resolution-choice-group" }, df = ["disabled"], cf = ["disabled"], uf = /* @__PURE__ */ K({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("div", rf, [
      e("button", {
        class: oe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (r) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, df),
      e("button", {
        class: oe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (r) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, cf)
    ]));
  }
}), mf = /* @__PURE__ */ J(uf, [["__scopeId", "data-v-985715ed"]]), vf = { class: "conflict-header" }, ff = { class: "conflict-info" }, gf = { class: "workflow-name" }, hf = { class: "conflict-description" }, pf = {
  key: 0,
  class: "resolved-badge"
}, yf = { class: "resolved-text" }, wf = { class: "conflict-hashes" }, kf = { class: "hash-item" }, bf = { class: "hash-item" }, _f = { class: "conflict-actions" }, $f = /* @__PURE__ */ K({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = C(n.resolution);
    kt(() => n.resolution, (l) => {
      h.value = l;
    }), kt(h, (l) => {
      l && r("resolve", l);
    });
    const g = D(() => h.value !== null), m = D(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), f = D(() => {
      switch (h.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (l, u) => {
      var k, v;
      return o(), s("div", {
        class: oe(["conflict-item", { resolved: g.value }])
      }, [
        e("div", vf, [
          u[2] || (u[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", ff, [
            e("code", gf, a(t.conflict.name) + ".json", 1),
            e("div", hf, a(m.value), 1)
          ]),
          g.value ? (o(), s("div", pf, [
            u[1] || (u[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", yf, a(f.value), 1)
          ])) : d("", !0)
        ]),
        e("div", wf, [
          e("span", kf, [
            u[3] || (u[3] = y("Your: ", -1)),
            e("code", null, a(((k = t.conflict.base_hash) == null ? void 0 : k.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", bf, [
            u[4] || (u[4] = y("Theirs: ", -1)),
            e("code", null, a(((v = t.conflict.target_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", _f, [
          p(mf, {
            modelValue: h.value,
            "onUpdate:modelValue": u[0] || (u[0] = (I) => h.value = I),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Cf = /* @__PURE__ */ J($f, [["__scopeId", "data-v-506d3bbf"]]), xf = { class: "resolution-content" }, Sf = {
  key: 0,
  class: "error-box"
}, If = { class: "resolution-header" }, Ef = { class: "header-stats" }, Mf = { class: "stat" }, Tf = { class: "stat-value" }, Rf = { class: "stat resolved" }, zf = { class: "stat-value" }, Lf = {
  key: 0,
  class: "stat pending"
}, Nf = { class: "stat-value" }, Df = { class: "conflicts-list" }, Pf = {
  key: 1,
  class: "all-resolved-message"
}, Of = /* @__PURE__ */ K({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = D(() => n.resolutions.size), g = D(() => n.workflowConflicts.length - h.value), m = D(() => h.value === n.workflowConflicts.length), f = D(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function l(I) {
      const _ = n.resolutions.get(I);
      return (_ == null ? void 0 : _.resolution) ?? null;
    }
    function u(I, _) {
      r("resolve", I, _);
    }
    function k() {
      r("close");
    }
    function v() {
      r("apply");
    }
    return (I, _) => (o(), S(et, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: k
    }, {
      body: i(() => [
        e("div", xf, [
          t.error ? (o(), s("div", Sf, [
            _[1] || (_[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              _[0] || (_[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", If, [
            e("div", Ef, [
              e("div", Mf, [
                e("span", Tf, a(t.workflowConflicts.length), 1),
                _[2] || (_[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Rf, [
                e("span", zf, a(h.value), 1),
                _[3] || (_[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (o(), s("div", Lf, [
                e("span", Nf, a(g.value), 1),
                _[4] || (_[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            _[5] || (_[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Df, [
            (o(!0), s(V, null, X(t.workflowConflicts, (L) => (o(), S(Cf, {
              key: L.name,
              conflict: L,
              resolution: l(L.name),
              onResolve: (b) => u(L.name, b)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          m.value ? (o(), s("div", Pf, [
            _[6] || (_[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(f.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        p(le, {
          variant: "secondary",
          onClick: k
        }, {
          default: i(() => [..._[7] || (_[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _[8] || (_[8] = e("div", { class: "footer-spacer" }, null, -1)),
        p(le, {
          variant: "primary",
          disabled: !m.value || t.validating,
          loading: t.validating,
          onClick: v
        }, {
          default: i(() => [
            y(a(f.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Uf = /* @__PURE__ */ J(Of, [["__scopeId", "data-v-c58d150d"]]), Bf = { class: "node-conflict-item" }, Af = { class: "node-header" }, Ff = { class: "node-name" }, Vf = { class: "node-id" }, Wf = { class: "version-comparison" }, Gf = { class: "version yours" }, jf = { class: "version theirs" }, Hf = { class: "chosen-version" }, qf = { class: "chosen" }, Kf = { class: "chosen-reason" }, Jf = { class: "affected-workflows" }, Yf = { class: "wf-source" }, Qf = { class: "wf-version" }, Xf = /* @__PURE__ */ K({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (o(), s("div", Bf, [
      e("div", Af, [
        e("code", Ff, a(t.conflict.node_name), 1),
        e("span", Vf, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Wf, [
        e("div", Gf, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", jf, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Hf, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", qf, a(t.conflict.chosen_version), 1),
        e("span", Kf, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Jf, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (o(!0), s(V, null, X(t.conflict.affected_workflows, (r) => (o(), s("li", {
            key: r.name
          }, [
            e("code", null, a(r.name), 1),
            e("span", Yf, "(" + a(r.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Qf, "needs v" + a(r.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Zf = /* @__PURE__ */ J(Xf, [["__scopeId", "data-v-8b626725"]]), eg = { class: "validation-content" }, tg = {
  key: 0,
  class: "compatible-message"
}, og = { class: "conflicts-list" }, sg = {
  key: 2,
  class: "warnings-section"
}, ng = /* @__PURE__ */ K({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = D(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, m) => (o(), S(et, {
      title: "Compatibility Check",
      size: "lg",
      onClose: m[3] || (m[3] = (f) => r("cancel"))
    }, {
      body: i(() => [
        e("div", eg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (o(), s("div", tg, [
            m[5] || (m[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              m[4] || (m[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (o(), s(V, { key: 1 }, [
            m[6] || (m[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", og, [
              (o(!0), s(V, null, X(t.validation.node_conflicts, (f) => (o(), S(Zf, {
                key: f.node_id,
                conflict: f
              }, null, 8, ["conflict"]))), 128))
            ]),
            m[7] || (m[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (o(), s("div", sg, [
            m[8] || (m[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (o(!0), s(V, null, X(t.validation.warnings, (f, l) => (o(), s("li", { key: l }, a(f), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        p(le, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (f) => r("cancel"))
        }, {
          default: i(() => [...m[9] || (m[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m[11] || (m[11] = e("div", { class: "footer-spacer" }, null, -1)),
        p(le, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => r("goBack"))
        }, {
          default: i(() => [...m[10] || (m[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        p(le, {
          variant: "primary",
          loading: t.executing,
          onClick: m[2] || (m[2] = (f) => r("proceed"))
        }, {
          default: i(() => [
            y(a(h.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), ag = /* @__PURE__ */ J(ng, [["__scopeId", "data-v-fefd26ed"]]), lg = { key: 0 }, ig = /* @__PURE__ */ K({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: h,
      fetchRemote: g,
      getRemoteSyncStatus: m,
      getPullPreview: f,
      pullFromRemote: l,
      getPushPreview: u,
      pushToRemote: k,
      validateMerge: v
    } = ze(), I = C([]), _ = C(null), L = C({}), b = C(!1), w = C(null), $ = C(""), B = C(!1), O = C(null), E = C(!1), H = C("add"), A = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), U = D(() => {
      if (!$.value.trim()) return I.value;
      const ne = $.value.toLowerCase();
      return I.value.filter(
        (te) => te.name.toLowerCase().includes(ne) || te.fetch_url.toLowerCase().includes(ne) || te.push_url.toLowerCase().includes(ne)
      );
    });
    function F(ne) {
      var te;
      return ((te = _.value) == null ? void 0 : te.remote) === ne;
    }
    async function T() {
      b.value = !0, w.value = null;
      try {
        const ne = await c();
        I.value = ne.remotes, _.value = ne.current_branch_tracking || null, await Promise.all(
          ne.remotes.map(async (te) => {
            const Ee = await m(te.name);
            Ee && (L.value[te.name] = Ee);
          })
        );
      } catch (ne) {
        w.value = ne instanceof Error ? ne.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function M() {
      H.value = "add", A.value = { name: "", fetchUrl: "", pushUrl: "" }, E.value = !0;
    }
    function G(ne) {
      const te = I.value.find((Ee) => Ee.name === ne);
      te && (H.value = "edit", A.value = {
        name: te.name,
        fetchUrl: te.fetch_url,
        pushUrl: te.push_url
      }, E.value = !0);
    }
    async function ae(ne) {
      try {
        H.value === "add" ? await n(ne.name, ne.fetchUrl) : await h(ne.name, ne.fetchUrl, ne.pushUrl || void 0), E.value = !1, await T();
      } catch (te) {
        w.value = te instanceof Error ? te.message : "Operation failed";
      }
    }
    function we() {
      E.value = !1, A.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function ie(ne) {
      O.value = ne;
      try {
        await g(ne);
        const te = await m(ne);
        te && (L.value[ne] = te);
      } catch (te) {
        w.value = te instanceof Error ? te.message : "Fetch failed";
      } finally {
        O.value = null;
      }
    }
    async function Q(ne) {
      if (confirm(`Remove remote "${ne}"?`))
        try {
          await r(ne), await T();
        } catch (te) {
          w.value = te instanceof Error ? te.message : "Failed to remove remote";
        }
    }
    function Z() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const z = C("idle"), x = D(() => z.value === "pull_preview"), se = D(
      () => z.value === "resolving" || z.value === "validating"
    ), ee = D(
      () => z.value === "validation_review" || z.value === "executing"
    ), _e = C(!1), pe = C(null), me = C(!1), Ce = C(null), ye = C(!1), Ne = C(null), Re = C(null), je = C(/* @__PURE__ */ new Map()), fe = C(null), De = C(null), Fe = D(() => Ne.value && vo(Ne.value) ? Ne.value : null);
    async function Ve(ne) {
      Ce.value = ne, z.value = "pull_preview", ye.value = !0, Ne.value = null, Re.value = null;
      try {
        Ne.value = await f(ne);
      } catch (te) {
        Re.value = te instanceof Error ? te.message : "Failed to load pull preview";
      } finally {
        ye.value = !1;
      }
    }
    function dt() {
      z.value = "idle", Ne.value = null, Re.value = null, Ce.value = null;
    }
    async function ue(ne) {
      if (Ce.value) {
        z.value = "executing", Re.value = null;
        try {
          const te = await l(Ce.value, ne);
          if (te.rolled_back) {
            Re.value = `Pull failed and was rolled back: ${te.error || "Unknown error"}`, z.value = "pull_preview";
            return;
          }
          P(), z.value = "idle", await T();
        } catch (te) {
          Re.value = te instanceof Error ? te.message : "Pull failed", z.value = "pull_preview";
        }
      }
    }
    function Pe() {
      Fe.value && (z.value = "resolving", De.value = null);
    }
    function ct(ne, te) {
      je.value.set(ne, { name: ne, resolution: te });
    }
    function tt() {
      z.value = "pull_preview";
    }
    async function Ie() {
      z.value = "validating", De.value = null;
      try {
        const ne = Array.from(je.value.values());
        fe.value = await v(Ce.value, ne), z.value = "validation_review";
      } catch (ne) {
        De.value = ne instanceof Error ? ne.message : "Validation failed", z.value = "resolving";
      }
    }
    async function ut() {
      z.value = "executing";
      try {
        const ne = Array.from(je.value.values()), te = await l(Ce.value, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ne
        });
        if (te.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${te.error || "Unknown error"}`, z.value = "pull_preview";
          return;
        }
        P(), z.value = "idle", await T();
      } catch (ne) {
        Re.value = ne instanceof Error ? ne.message : "Pull failed", z.value = "validation_review";
      }
    }
    function it() {
      z.value = "resolving";
    }
    function j() {
      P(), z.value = "idle";
    }
    function P() {
      je.value.clear(), fe.value = null, De.value = null, Re.value = null, Ne.value = null, Ce.value = null;
    }
    async function N(ne) {
      Ce.value = ne, _e.value = !0, ye.value = !0, pe.value = null;
      try {
        pe.value = await u(ne);
      } catch (te) {
        w.value = te instanceof Error ? te.message : "Failed to load push preview";
      } finally {
        ye.value = !1;
      }
    }
    function q() {
      _e.value = !1, pe.value = null, Ce.value = null;
    }
    async function ce(ne) {
      if (Ce.value) {
        me.value = !0;
        try {
          await k(Ce.value, ne), q(), await T();
        } catch (te) {
          w.value = te instanceof Error ? te.message : "Push failed";
        } finally {
          me.value = !1;
        }
      }
    }
    function Me() {
      const ne = Ce.value;
      q(), ne && Ve(ne);
    }
    return Se(T), (ne, te) => (o(), s(V, null, [
      p(Be, null, {
        header: i(() => [
          p(Ae, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: te[0] || (te[0] = (Ee) => B.value = !0)
          }, {
            actions: i(() => [
              E.value ? d("", !0) : (o(), S(Y, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: M
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
          E.value ? d("", !0) : (o(), S(bt, {
            key: 0,
            modelValue: $.value,
            "onUpdate:modelValue": te[1] || (te[1] = (Ee) => $.value = Ee),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          b.value ? (o(), S(at, {
            key: 0,
            message: "Loading remotes..."
          })) : w.value ? (o(), S(lt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            E.value ? (o(), S(tv, {
              key: 0,
              mode: H.value,
              "remote-name": A.value.name,
              "fetch-url": A.value.fetchUrl,
              "push-url": A.value.pushUrl,
              onSubmit: ae,
              onCancel: we
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            I.value.length && !E.value ? (o(), S(_t, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(I.value.length) + " remote" + a(I.value.length !== 1 ? "s" : "") + " ", 1),
                _.value ? (o(), s("span", lg, " • Tracking: " + a(_.value.remote) + "/" + a(_.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            U.value.length && !E.value ? (o(), S(xe, {
              key: 2,
              title: "REMOTES",
              count: U.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(U.value, (Ee) => {
                  var Je;
                  return o(), S(Vm, {
                    key: Ee.name,
                    remote: Ee,
                    "sync-status": L.value[Ee.name],
                    "tracking-branch": F(Ee.name) ? (Je = _.value) == null ? void 0 : Je.branch : void 0,
                    "fetching-remote": O.value,
                    onFetch: ie,
                    onEdit: G,
                    onRemove: Q,
                    onPull: Ve,
                    onPush: N
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !U.value.length && !E.value ? (o(), S(Ke, {
              key: 3,
              icon: "🌐",
              message: $.value ? `No remotes match '${$.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                p(Y, {
                  variant: "primary",
                  onClick: M
                }, {
                  default: i(() => [...te[4] || (te[4] = [
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
      p(nt, {
        show: B.value,
        title: "About Git Remotes",
        onClose: te[2] || (te[2] = (Ee) => B.value = !1)
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
          p(Y, {
            variant: "link",
            onClick: Z
          }, {
            default: i(() => [...te[6] || (te[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p(Uv, {
        show: x.value,
        "remote-name": Ce.value || "",
        preview: Ne.value,
        loading: ye.value,
        pulling: z.value === "executing",
        error: Re.value,
        "conflict-resolutions": je.value,
        onClose: dt,
        onPull: ue,
        onOpenConflictResolution: Pe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      p(lf, {
        show: _e.value,
        "remote-name": Ce.value || "",
        preview: pe.value,
        loading: ye.value,
        pushing: me.value,
        onClose: q,
        onPush: ce,
        onPullFirst: Me
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      se.value && Fe.value ? (o(), S(Uf, {
        key: 0,
        "workflow-conflicts": Fe.value.workflow_conflicts,
        resolutions: je.value,
        "operation-type": "pull",
        validating: z.value === "validating",
        error: De.value,
        onClose: tt,
        onResolve: ct,
        onApply: Ie
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      ee.value && fe.value ? (o(), S(ag, {
        key: 1,
        validation: fe.value,
        "operation-type": "pull",
        executing: z.value === "executing",
        onProceed: ut,
        onGoBack: it,
        onCancel: j
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), rg = /* @__PURE__ */ J(ig, [["__scopeId", "data-v-02b374b5"]]), dg = { class: "setting-info" }, cg = { class: "setting-label" }, ug = {
  key: 0,
  class: "required-marker"
}, mg = {
  key: 0,
  class: "setting-description"
}, vg = { class: "setting-control" }, fg = /* @__PURE__ */ K({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: oe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", dg, [
        e("div", cg, [
          y(a(t.label) + " ", 1),
          t.required ? (o(), s("span", ug, "*")) : d("", !0)
        ]),
        t.description ? (o(), s("div", mg, a(t.description), 1)) : d("", !0)
      ]),
      e("div", vg, [
        ve(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), st = /* @__PURE__ */ J(fg, [["__scopeId", "data-v-cb5d236c"]]), gg = { class: "toggle" }, hg = ["checked", "disabled"], pg = /* @__PURE__ */ K({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", gg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, hg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), gt = /* @__PURE__ */ J(pg, [["__scopeId", "data-v-71c0f550"]]), yg = { class: "settings-section" }, wg = { class: "path-setting" }, kg = { class: "path-value" }, bg = { class: "path-setting" }, _g = { class: "path-value" }, $g = { class: "settings-section" }, Cg = { class: "settings-section" }, xg = { class: "settings-section" }, Sg = /* @__PURE__ */ K({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = ze(), r = C(!1), h = C(null), g = C(null), m = C(null), f = C(null), l = C(""), u = C(""), k = C(!0), v = C(!0), I = C(!1), _ = D(() => f.value ? l.value !== (f.value.civitai_api_key || "") : !1);
    async function L() {
      r.value = !0, h.value = null;
      try {
        m.value = await c(), f.value = { ...m.value }, l.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", k.value = m.value.auto_sync_models, v.value = m.value.confirm_destructive;
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        I.value = B === "true";
      } catch (B) {
        h.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function b() {
      var B;
      g.value = null;
      try {
        const O = {};
        l.value !== (((B = f.value) == null ? void 0 : B.civitai_api_key) || "") && (O.civitai_api_key = l.value || null), await n(O), await L(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (O) {
        g.value = {
          type: "error",
          message: O instanceof Error ? O.message : "Failed to save settings"
        };
      }
    }
    function w() {
      f.value && (l.value = f.value.civitai_api_key || "", u.value = f.value.huggingface_token || "", k.value = f.value.auto_sync_models, v.value = f.value.confirm_destructive, g.value = null);
    }
    function $(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return Se(L), (B, O) => (o(), S(Be, null, {
      header: i(() => [
        p(Ae, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            p(Y, {
              variant: "primary",
              size: "sm",
              disabled: !_.value,
              onClick: b
            }, {
              default: i(() => [...O[5] || (O[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            _.value ? (o(), S(Y, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: w
            }, {
              default: i(() => [...O[6] || (O[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), S(at, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (o(), S(lt, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: L
        }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
          p(xe, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var E, H;
              return [
                e("div", yg, [
                  e("div", wg, [
                    O[7] || (O[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    O[8] || (O[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", kg, a(((E = m.value) == null ? void 0 : E.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", bg, [
                    O[9] || (O[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    O[10] || (O[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", _g, a(((H = m.value) == null ? void 0 : H.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          p(xe, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", $g, [
                p(st, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    p(Lt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": O[0] || (O[0] = (E) => l.value = E),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                p(st, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(Lt, {
                      modelValue: u.value,
                      "onUpdate:modelValue": O[1] || (O[1] = (E) => u.value = E),
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
          p(xe, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", Cg, [
                p(st, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    p(gt, {
                      modelValue: I.value,
                      "onUpdate:modelValue": [
                        O[2] || (O[2] = (E) => I.value = E),
                        $
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          p(xe, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", xg, [
                p(st, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(gt, {
                      modelValue: k.value,
                      "onUpdate:modelValue": O[3] || (O[3] = (E) => k.value = E),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                p(st, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(gt, {
                      modelValue: v.value,
                      "onUpdate:modelValue": O[4] || (O[4] = (E) => v.value = E),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), S(_t, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: Ze({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Ig = /* @__PURE__ */ J(Sg, [["__scopeId", "data-v-7861bd35"]]), Eg = /* @__PURE__ */ K({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = ze(), n = C([]), r = C(!1), h = C(null), g = C(!1), m = C(null), f = D(() => n.value.length === 0 ? [] : n.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function l() {
      r.value = !0, h.value = null;
      try {
        n.value = await c(void 0, 500);
      } catch (u) {
        h.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var u;
          (u = m.value) != null && u.parentElement && (m.value.parentElement.scrollTop = m.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Se(l), (u, k) => (o(), s(V, null, [
      p(Be, null, {
        header: i(() => [
          p(Ae, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = (v) => g.value = !0)
          }, {
            actions: i(() => [
              p(Y, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: r.value
              }, {
                default: i(() => [
                  y(a(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          r.value ? (o(), S(at, {
            key: 0,
            message: "Loading workspace logs..."
          })) : h.value ? (o(), S(lt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            n.value.length === 0 ? (o(), S(Ke, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: m,
              class: "log-output"
            }, [
              (o(!0), s(V, null, X(f.value, (v, I) => (o(), s("div", {
                key: I,
                class: oe(`log-line log-level-${v.level.toLowerCase()}`)
              }, a(v.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      p(nt, {
        show: g.value,
        title: "About Workspace Logs",
        onClose: k[2] || (k[2] = (v) => g.value = !1)
      }, {
        content: i(() => [...k[3] || (k[3] = [
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
          p(Y, {
            variant: "primary",
            onClick: k[1] || (k[1] = (v) => g.value = !1)
          }, {
            default: i(() => [...k[4] || (k[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Mg = /* @__PURE__ */ J(Eg, [["__scopeId", "data-v-39f6a756"]]), Tg = /* @__PURE__ */ K({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n } = ze(), r = C([]), h = C(!1), g = C(null), m = C(!1), f = C("production"), l = C(null), u = D(() => r.value.length === 0 ? [] : r.value.map((v) => ({
      text: `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function k() {
      h.value = !0, g.value = null;
      try {
        r.value = await c(void 0, 500);
        try {
          const v = await n();
          f.value = v.environment || "production";
        } catch {
        }
      } catch (v) {
        g.value = v instanceof Error ? v.message : "Failed to load environment logs";
      } finally {
        h.value = !1, setTimeout(() => {
          var v;
          (v = l.value) != null && v.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Se(k), (v, I) => (o(), s(V, null, [
      p(Be, null, {
        header: i(() => [
          p(Ae, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (_) => m.value = !0)
          }, {
            actions: i(() => [
              p(Y, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: h.value
              }, {
                default: i(() => [
                  y(a(h.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          h.value ? (o(), S(at, {
            key: 0,
            message: "Loading environment logs..."
          })) : g.value ? (o(), S(lt, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            r.value.length === 0 ? (o(), S(Ke, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (o(!0), s(V, null, X(u.value, (_, L) => (o(), s("div", {
                key: L,
                class: oe(`log-line log-level-${_.level.toLowerCase()}`)
              }, a(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      p(nt, {
        show: m.value,
        title: "About Environment Logs",
        onClose: I[2] || (I[2] = (_) => m.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            I[3] || (I[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(f.value), 1),
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
          p(Y, {
            variant: "primary",
            onClick: I[1] || (I[1] = (_) => m.value = !1)
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
}), Rg = /* @__PURE__ */ J(Tg, [["__scopeId", "data-v-4f1e6f72"]]), zg = { class: "env-title" }, Lg = {
  key: 0,
  class: "current-badge"
}, Ng = {
  key: 0,
  class: "branch-info"
}, Dg = /* @__PURE__ */ K({
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
    return (c, n) => (o(), S(Le, {
      status: t.isCurrent ? "synced" : void 0
    }, Nt({
      icon: i(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", zg, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Lg, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", Ng, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: i(() => [
        ve(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          p(ke, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          p(ke, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          p(ke, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (o(), S(ke, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Pg = /* @__PURE__ */ J(Dg, [["__scopeId", "data-v-9231917a"]]), Og = { class: "env-details" }, Ug = { class: "status-row" }, Bg = {
  key: 0,
  class: "detail-row"
}, Ag = { class: "value mono" }, Fg = {
  key: 1,
  class: "detail-row"
}, Vg = { class: "value mono small" }, Wg = { class: "detail-row" }, Gg = { class: "value" }, jg = { class: "detail-row" }, Hg = { class: "value" }, qg = { class: "detail-row" }, Kg = { class: "value" }, Jg = {
  key: 2,
  class: "section-divider"
}, Yg = {
  key: 3,
  class: "detail-row"
}, Qg = { class: "value" }, Xg = {
  key: 4,
  class: "detail-row"
}, Zg = { class: "value" }, eh = { class: "footer-actions" }, th = /* @__PURE__ */ K({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function r(h) {
      if (!h) return "Unknown";
      try {
        const g = new Date(h), f = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), l = Math.floor(f / 6e4), u = Math.floor(f / 36e5), k = Math.floor(f / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : u < 24 ? `${u} ${u === 1 ? "hour" : "hours"} ago` : k < 30 ? `${k} ${k === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return h;
      }
    }
    return (h, g) => (o(), S(et, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (m) => n("close"))
    }, {
      body: i(() => [
        e("div", Og, [
          e("div", Ug, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: oe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (o(), s("div", Bg, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Ag, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (o(), s("div", Fg, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Vg, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Wg, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Gg, a(t.environment.workflow_count), 1)
          ]),
          e("div", jg, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Hg, a(t.environment.node_count), 1)
          ]),
          e("div", qg, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Kg, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (o(), s("div", Jg)) : d("", !0),
          t.environment.created_at ? (o(), s("div", Yg, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Qg, a(r(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (o(), s("div", Xg, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Zg, a(r(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", eh, [
          t.canDelete ? (o(), S(le, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (m) => n("delete", t.environment.name))
          }, {
            default: i(() => [...g[12] || (g[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          p(le, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (m) => n("close"))
          }, {
            default: i(() => [...g[13] || (g[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), oh = /* @__PURE__ */ J(th, [["__scopeId", "data-v-59855453"]]), sh = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], nh = "3.12", ah = [
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
], lh = "auto", ih = { class: "create-env-form" }, rh = { class: "form-field" }, dh = { class: "form-field" }, ch = ["value"], uh = { class: "form-field" }, mh = ["disabled"], vh = ["value"], fh = { class: "form-field" }, gh = ["value"], hh = { class: "form-field form-field--checkbox" }, ph = { class: "form-checkbox" }, yh = /* @__PURE__ */ K({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: r } = ze(), h = C(""), g = C(nh), m = C("latest"), f = C(lh), l = C(!1), u = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), k = C(!1), v = C(null);
    function I() {
      const L = h.value.trim();
      if (!L) return;
      const b = {
        name: L,
        python_version: g.value,
        comfyui_version: m.value,
        torch_backend: f.value,
        switch_after: l.value
      };
      n("create", b);
    }
    async function _() {
      k.value = !0;
      try {
        u.value = await r();
      } catch (L) {
        console.error("Failed to load ComfyUI releases:", L);
      } finally {
        k.value = !1;
      }
    }
    return Se(async () => {
      var L;
      await To(), (L = v.value) == null || L.focus(), _();
    }), (L, b) => (o(), S(et, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: b[6] || (b[6] = (w) => n("close"))
    }, {
      body: i(() => [
        e("div", ih, [
          e("div", rh, [
            b[7] || (b[7] = e("label", { class: "form-label" }, "Name", -1)),
            Xe(e("input", {
              ref_key: "nameInput",
              ref: v,
              "onUpdate:modelValue": b[0] || (b[0] = (w) => h.value = w),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: rt(I, ["enter"])
            }, null, 544), [
              [no, h.value]
            ])
          ]),
          e("div", dh, [
            b[8] || (b[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Xe(e("select", {
              "onUpdate:modelValue": b[1] || (b[1] = (w) => g.value = w),
              class: "form-select"
            }, [
              (o(!0), s(V, null, X(ge(sh), (w) => (o(), s("option", {
                key: w,
                value: w
              }, a(w), 9, ch))), 128))
            ], 512), [
              [Ut, g.value]
            ])
          ]),
          e("div", uh, [
            b[9] || (b[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Xe(e("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (w) => m.value = w),
              class: "form-select",
              disabled: k.value
            }, [
              (o(!0), s(V, null, X(u.value, (w) => (o(), s("option", {
                key: w.tag_name,
                value: w.tag_name
              }, a(w.name), 9, vh))), 128))
            ], 8, mh), [
              [Ut, m.value]
            ])
          ]),
          e("div", fh, [
            b[10] || (b[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Xe(e("select", {
              "onUpdate:modelValue": b[3] || (b[3] = (w) => f.value = w),
              class: "form-select"
            }, [
              (o(!0), s(V, null, X(ge(ah), (w) => (o(), s("option", {
                key: w,
                value: w
              }, a(w) + a(w === "auto" ? " (detect GPU)" : ""), 9, gh))), 128))
            ], 512), [
              [Ut, f.value]
            ])
          ]),
          e("div", hh, [
            e("label", ph, [
              Xe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": b[4] || (b[4] = (w) => l.value = w)
              }, null, 512), [
                [ao, l.value]
              ]),
              b[11] || (b[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        p(le, {
          variant: "primary",
          disabled: !h.value.trim(),
          onClick: I
        }, {
          default: i(() => [...b[12] || (b[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        p(le, {
          variant: "secondary",
          onClick: b[5] || (b[5] = (w) => n("close"))
        }, {
          default: i(() => [...b[13] || (b[13] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), wh = /* @__PURE__ */ J(yh, [["__scopeId", "data-v-a2f13447"]]), kh = /* @__PURE__ */ K({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getEnvironments: h } = ze(), g = C([]), m = C(!1), f = C(null), l = C(""), u = C(!1), k = C(!1), v = C(null), I = D(
      () => g.value.find((O) => O.is_current)
    ), _ = D(() => {
      if (!l.value.trim()) return g.value;
      const O = l.value.toLowerCase();
      return g.value.filter(
        (E) => {
          var H;
          return E.name.toLowerCase().includes(O) || ((H = E.current_branch) == null ? void 0 : H.toLowerCase().includes(O));
        }
      );
    });
    function L(O) {
      r("create", O), k.value = !1;
    }
    function b() {
      k.value = !0;
    }
    function w(O) {
      v.value = O;
    }
    function $(O) {
      v.value = null, r("delete", O);
    }
    async function B() {
      m.value = !0, f.value = null;
      try {
        g.value = await h();
      } catch (O) {
        f.value = O instanceof Error ? O.message : "Failed to load environments";
      } finally {
        m.value = !1;
      }
    }
    return Se(B), c({
      loadEnvironments: B
    }), (O, E) => (o(), s(V, null, [
      p(Be, null, {
        header: i(() => [
          p(Ae, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (H) => u.value = !0)
          }, {
            actions: i(() => [
              p(Y, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: i(() => [...E[6] || (E[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              p(Y, {
                variant: "secondary",
                size: "sm",
                onClick: B
              }, {
                default: i(() => [...E[7] || (E[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(bt, {
            modelValue: l.value,
            "onUpdate:modelValue": E[1] || (E[1] = (H) => l.value = H),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (o(), S(at, {
            key: 0,
            message: "Loading environments..."
          })) : f.value ? (o(), S(lt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            g.value.length ? (o(), S(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(g.value.length) + " " + a(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                I.value ? (o(), s(V, { key: 0 }, [
                  E[8] || (E[8] = y(" • Current: ", -1)),
                  e("strong", null, a(I.value.name), 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            _.value.length ? (o(), S(xe, {
              key: 1,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, X(_.value, (H) => (o(), S(Pg, {
                  key: H.name,
                  "environment-name": H.name,
                  "is-current": H.is_current,
                  "current-branch": H.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    H.is_current ? d("", !0) : (o(), S(Y, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => O.$emit("switch", H.name)
                    }, {
                      default: i(() => [...E[9] || (E[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    p(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => w(H)
                    }, {
                      default: i(() => [...E[10] || (E[10] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            _.value.length ? d("", !0) : (o(), S(Ke, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Nt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  p(Y, {
                    variant: "primary",
                    onClick: b
                  }, {
                    default: i(() => [...E[11] || (E[11] = [
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
      p(nt, {
        show: u.value,
        title: "About Environments",
        onClose: E[3] || (E[3] = (H) => u.value = !1)
      }, {
        content: i(() => [...E[12] || (E[12] = [
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
          p(Y, {
            variant: "secondary",
            onClick: E[2] || (E[2] = (H) => u.value = !1)
          }, {
            default: i(() => [...E[13] || (E[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      v.value ? (o(), S(oh, {
        key: 0,
        environment: v.value,
        "can-delete": g.value.length > 1,
        onClose: E[4] || (E[4] = (H) => v.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      k.value ? (o(), S(wh, {
        key: 1,
        onClose: E[5] || (E[5] = (H) => k.value = !1),
        onCreate: L
      })) : d("", !0)
    ], 64));
  }
}), bh = /* @__PURE__ */ J(kh, [["__scopeId", "data-v-307d9926"]]), _h = { class: "file-path" }, $h = { class: "file-path-text" }, Ch = ["title"], xh = /* @__PURE__ */ K({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = C(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy:", h);
      }
    }
    return (h, g) => (o(), s("div", _h, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", $h, a(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, Ch)) : d("", !0)
    ]));
  }
}), Sh = /* @__PURE__ */ J(xh, [["__scopeId", "data-v-f0982173"]]), Ih = { class: "output-path-input" }, Eh = { class: "export-actions" }, Mh = {
  key: 1,
  class: "export-warning"
}, Th = /* @__PURE__ */ K({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = ze(), n = C(""), r = C(!1), h = C(null), g = C(!1);
    async function m() {
      r.value = !0, h.value = null;
      try {
        const l = await c(n.value || void 0);
        h.value = l;
      } catch (l) {
        h.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function f() {
      var l;
      if ((l = h.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(h.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (l, u) => (o(), s(V, null, [
      p(Be, null, {
        header: i(() => [
          p(Ae, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              p(Y, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (k) => g.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...u[5] || (u[5] = [
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
          p(xe, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              p(Le, { status: "synced" }, {
                icon: i(() => [...u[6] || (u[6] = [
                  y("📦", -1)
                ])]),
                title: i(() => [...u[7] || (u[7] = [
                  y("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...u[8] || (u[8] = [
                  y(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  p(ke, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  p(ke, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  p(ke, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  p(ke, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          p(xe, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              p(Le, { status: "synced" }, {
                icon: i(() => [...u[9] || (u[9] = [
                  y("📁", -1)
                ])]),
                title: i(() => [...u[10] || (u[10] = [
                  y("Output Destination", -1)
                ])]),
                subtitle: i(() => [...u[11] || (u[11] = [
                  y(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", Ih, [
                    p(Lt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (k) => n.value = k),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          p(xe, { title: "EXPORT" }, {
            default: i(() => [
              e("div", Eh, [
                p(Y, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: m
                }, {
                  default: i(() => [
                    u[12] || (u[12] = e("svg", {
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
                n.value ? (o(), S(Y, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: u[2] || (u[2] = (k) => n.value = "")
                }, {
                  default: i(() => [...u[13] || (u[13] = [
                    y(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          h.value ? (o(), S(xe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              p(Le, {
                status: h.value.status === "success" ? "synced" : "broken"
              }, Nt({
                icon: i(() => [
                  y(a(h.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  y(a(h.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  y(a(h.value.status === "success" ? "Your environment has been exported" : h.value.message), 1)
                ]),
                _: 2
              }, [
                h.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    p(ke, { label: "Saved to:" }, {
                      default: i(() => [
                        p(Sh, {
                          path: h.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    h.value.models_without_sources !== void 0 ? (o(), S(ke, {
                      key: 0,
                      label: "Models without sources:",
                      value: h.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    h.value.models_without_sources && h.value.models_without_sources > 0 ? (o(), s("div", Mh, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                h.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    p(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: f
                    }, {
                      default: i(() => [...u[15] || (u[15] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    p(Y, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (k) => h.value = null)
                    }, {
                      default: i(() => [...u[16] || (u[16] = [
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
      p(nt, {
        show: g.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (k) => g.value = !1)
      }, {
        content: i(() => [...u[17] || (u[17] = [
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
}), Rh = /* @__PURE__ */ J(Th, [["__scopeId", "data-v-1777a9d5"]]), zh = { class: "file-input-wrapper" }, Lh = ["accept", "multiple", "disabled"], Nh = /* @__PURE__ */ K({
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
    const r = n, h = C(null);
    function g() {
      var f;
      (f = h.value) == null || f.click();
    }
    function m(f) {
      const l = f.target;
      l.files && l.files.length > 0 && (r("change", l.files), l.value = "");
    }
    return c({
      triggerInput: g
    }), (f, l) => (o(), s("div", zh, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, Lh),
      p(Y, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: i(() => [
          ve(f.$slots, "default", {}, () => [
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
}), Dh = /* @__PURE__ */ J(Nh, [["__scopeId", "data-v-cd192091"]]), Ph = {
  key: 0,
  class: "drop-zone-empty"
}, Oh = { class: "drop-zone-text" }, Uh = { class: "drop-zone-primary" }, Bh = { class: "drop-zone-secondary" }, Ah = { class: "drop-zone-actions" }, Fh = {
  key: 1,
  class: "drop-zone-file"
}, Vh = { class: "file-info" }, Wh = { class: "file-details" }, Gh = { class: "file-name" }, jh = { class: "file-size" }, Hh = /* @__PURE__ */ K({
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
    const n = c, r = C(!1), h = C(null), g = C(0), m = D(() => h.value !== null), f = D(() => {
      var w;
      return ((w = h.value) == null ? void 0 : w.name) || "";
    }), l = D(() => {
      if (!h.value) return "";
      const w = h.value.size;
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(w) {
      var $;
      g.value++, ($ = w.dataTransfer) != null && $.types.includes("Files") && (r.value = !0);
    }
    function k(w) {
      w.dataTransfer && (w.dataTransfer.dropEffect = "copy");
    }
    function v() {
      g.value--, g.value === 0 && (r.value = !1);
    }
    function I(w) {
      var B;
      g.value = 0, r.value = !1;
      const $ = (B = w.dataTransfer) == null ? void 0 : B.files;
      $ && $.length > 0 && L($[0]);
    }
    function _(w) {
      w.length > 0 && L(w[0]);
    }
    function L(w) {
      h.value = w, n("fileSelected", w);
    }
    function b() {
      h.value = null, n("clear");
    }
    return (w, $) => (o(), s("div", {
      class: oe(["file-drop-zone", { "drop-active": r.value, "has-file": m.value }]),
      onDragenter: $e(u, ["prevent"]),
      onDragover: $e(k, ["prevent"]),
      onDragleave: $e(v, ["prevent"]),
      onDrop: $e(I, ["prevent"])
    }, [
      m.value ? (o(), s("div", Fh, [
        e("div", Vh, [
          $[1] || ($[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Wh, [
            e("div", Gh, a(f.value), 1),
            e("div", jh, a(l.value), 1)
          ])
        ]),
        p(Y, {
          variant: "ghost",
          size: "xs",
          onClick: b,
          title: "Remove file"
        }, {
          default: i(() => [...$[2] || ($[2] = [
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
      ])) : (o(), s("div", Ph, [
        $[0] || ($[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Oh, [
          e("p", Uh, a(t.primaryText), 1),
          e("p", Bh, a(t.secondaryText), 1)
        ]),
        e("div", Ah, [
          p(Dh, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: _
          }, {
            default: i(() => [
              y(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), qh = /* @__PURE__ */ J(Hh, [["__scopeId", "data-v-e00abbca"]]), Kh = { class: "import-preview" }, Jh = { class: "preview-header" }, Yh = {
  key: 0,
  class: "source-env"
}, Qh = { class: "preview-content" }, Xh = { class: "preview-section" }, Zh = { class: "section-header" }, ep = { class: "section-info" }, tp = { class: "section-count" }, op = {
  key: 0,
  class: "item-list"
}, sp = { class: "item-name" }, np = {
  key: 0,
  class: "item-more"
}, ap = { class: "preview-section" }, lp = { class: "section-header" }, ip = { class: "section-info" }, rp = { class: "section-count" }, dp = {
  key: 0,
  class: "item-list"
}, cp = { class: "item-details" }, up = { class: "item-name" }, mp = { class: "item-meta" }, vp = {
  key: 0,
  class: "item-more"
}, fp = { class: "preview-section" }, gp = { class: "section-header" }, hp = { class: "section-info" }, pp = { class: "section-count" }, yp = {
  key: 0,
  class: "item-list"
}, wp = { class: "item-name" }, kp = {
  key: 0,
  class: "item-more"
}, bp = {
  key: 0,
  class: "preview-section"
}, _p = { class: "git-info" }, $p = /* @__PURE__ */ K({
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
    const c = t, n = D(() => c.workflows.length), r = D(() => c.models.length), h = D(() => c.nodes.length);
    function g(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, f) => (o(), s("div", Kh, [
      e("div", Jh, [
        p(Ge, null, {
          default: i(() => [...f[0] || (f[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Yh, [
          f[1] || (f[1] = y(" From: ", -1)),
          p(Wt, null, {
            default: i(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", Qh, [
        e("div", Xh, [
          e("div", Zh, [
            f[3] || (f[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", ep, [
              f[2] || (f[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", tp, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", op, [
            (o(!0), s(V, null, X(t.workflows.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              f[4] || (f[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", sp, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", np, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", ap, [
          e("div", lp, [
            f[6] || (f[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", ip, [
              f[5] || (f[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", rp, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", dp, [
            (o(!0), s(V, null, X(t.models.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", cp, [
                e("span", up, a(l.filename), 1),
                e("span", mp, a(g(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", vp, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", fp, [
          e("div", gp, [
            f[9] || (f[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", hp, [
              f[8] || (f[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", pp, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", yp, [
            (o(!0), s(V, null, X(t.nodes.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              f[10] || (f[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", wp, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", kp, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", bp, [
          f[11] || (f[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", _p, [
            t.gitBranch ? (o(), S(ke, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                p(Wt, null, {
                  default: i(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (o(), S(ke, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                p(io, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Cp = /* @__PURE__ */ J($p, [["__scopeId", "data-v-182fe113"]]), xp = { class: "import-options" }, Sp = { class: "options-container" }, Ip = { class: "option-section" }, Ep = { class: "conflict-options" }, Mp = ["value", "checked", "onChange"], Tp = { class: "conflict-content" }, Rp = { class: "conflict-label" }, zp = { class: "conflict-description" }, Lp = { class: "option-section" }, Np = { class: "component-toggles" }, Dp = /* @__PURE__ */ K({
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
    return (h, g) => (o(), s("div", xp, [
      p(Ge, null, {
        default: i(() => [...g[4] || (g[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Sp, [
        e("div", Ip, [
          p(Vt, null, {
            default: i(() => [...g[5] || (g[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Ep, [
            (o(), s(V, null, X(r, (m) => e("label", {
              key: m.value,
              class: oe(["conflict-option", { active: t.conflictMode === m.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: m.value,
                checked: t.conflictMode === m.value,
                onChange: (f) => n("update:conflictMode", m.value)
              }, null, 40, Mp),
              e("div", Tp, [
                e("span", Rp, a(m.label), 1),
                e("span", zp, a(m.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Lp, [
          p(Vt, null, {
            default: i(() => [...g[6] || (g[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Np, [
            p(st, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                p(gt, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": g[0] || (g[0] = (m) => n("update:includeWorkflows", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(st, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                p(gt, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": g[1] || (g[1] = (m) => n("update:includeModels", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(st, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                p(gt, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": g[2] || (g[2] = (m) => n("update:includeNodes", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(st, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                p(gt, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": g[3] || (g[3] = (m) => n("update:includeGitHistory", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Pp = /* @__PURE__ */ J(Dp, [["__scopeId", "data-v-0ec212b0"]]), Op = {
  key: 0,
  class: "import-empty"
}, Up = { class: "import-help" }, Bp = {
  key: 1,
  class: "import-configure"
}, Ap = { class: "selected-file-bar" }, Fp = { class: "file-bar-content" }, Vp = { class: "file-bar-info" }, Wp = { class: "file-bar-name" }, Gp = { class: "file-bar-size" }, jp = { class: "import-actions" }, Hp = {
  key: 2,
  class: "import-progress"
}, qp = { class: "progress-content" }, Kp = { class: "progress-info" }, Jp = { class: "progress-title" }, Yp = { class: "progress-detail" }, Qp = { class: "progress-bar" }, Xp = { class: "progress-status" }, Zp = {
  key: 3,
  class: "import-complete"
}, e1 = { class: "complete-message" }, t1 = { class: "complete-title" }, o1 = { class: "complete-details" }, s1 = { class: "complete-actions" }, n1 = /* @__PURE__ */ K({
  __name: "ImportSection",
  setup(t) {
    const c = C(null), n = C(!1), r = C(!1), h = C(!1), g = C(""), m = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), f = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = C({
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
    }), u = D(() => m.value.includeWorkflows || m.value.includeModels || m.value.includeNodes || m.value.includeGitHistory);
    function k(b) {
      c.value = b;
    }
    function v() {
      c.value = null, r.value = !1, h.value = !1, g.value = "";
    }
    function I() {
      v(), n.value = !1, f.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function _() {
      if (c.value) {
        n.value = !0, r.value = !1;
        try {
          const b = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const w of b)
            f.value = w, await new Promise(($) => setTimeout($, 800));
          f.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((w) => setTimeout(w, 500)), h.value = !0, g.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (b) {
          h.value = !1, g.value = b instanceof Error ? b.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function L(b) {
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (b, w) => (o(), S(Be, null, {
      header: i(() => [
        p(Ae, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !c.value && !n.value ? (o(), s("div", Op, [
          p(qh, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: k
          }),
          e("div", Up, [
            p(Ge, null, {
              default: i(() => [...w[5] || (w[5] = [
                y("How to Import", -1)
              ])]),
              _: 1
            }),
            w[6] || (w[6] = e("div", { class: "help-content" }, [
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
        ])) : c.value && !n.value && !r.value ? (o(), s("div", Bp, [
          e("div", Ap, [
            e("div", Fp, [
              w[7] || (w[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Vp, [
                e("div", Wp, a(c.value.name), 1),
                e("div", Gp, a(L(c.value.size)), 1)
              ])
            ]),
            p(Y, {
              variant: "ghost",
              size: "sm",
              onClick: v
            }, {
              default: i(() => [...w[8] || (w[8] = [
                y(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          p(Cp, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          p(Pp, {
            "conflict-mode": m.value.conflictMode,
            "onUpdate:conflictMode": w[0] || (w[0] = ($) => m.value.conflictMode = $),
            "include-workflows": m.value.includeWorkflows,
            "onUpdate:includeWorkflows": w[1] || (w[1] = ($) => m.value.includeWorkflows = $),
            "include-models": m.value.includeModels,
            "onUpdate:includeModels": w[2] || (w[2] = ($) => m.value.includeModels = $),
            "include-nodes": m.value.includeNodes,
            "onUpdate:includeNodes": w[3] || (w[3] = ($) => m.value.includeNodes = $),
            "include-git-history": m.value.includeGitHistory,
            "onUpdate:includeGitHistory": w[4] || (w[4] = ($) => m.value.includeGitHistory = $)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !m.value.includeModels && l.value.models.length > 0 ? (o(), S(ht, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", jp, [
            p(Y, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: _
            }, {
              default: i(() => [...w[9] || (w[9] = [
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
            p(Y, {
              variant: "secondary",
              size: "md",
              onClick: v
            }, {
              default: i(() => [...w[10] || (w[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Hp, [
          e("div", qp, [
            w[11] || (w[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Kp, [
              e("div", Jp, a(f.value.message), 1),
              e("div", Yp, a(f.value.detail), 1)
            ])
          ]),
          e("div", Qp, [
            e("div", {
              class: "progress-bar-fill",
              style: Ze({ width: `${f.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Xp, a(f.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", Zp, [
          e("div", {
            class: oe(["complete-icon", h.value ? "success" : "error"])
          }, a(h.value ? "✓" : "✕"), 3),
          e("div", e1, [
            e("div", t1, a(h.value ? "Import Successful" : "Import Failed"), 1),
            e("div", o1, a(g.value), 1)
          ]),
          e("div", s1, [
            p(Y, {
              variant: "primary",
              size: "md",
              onClick: I
            }, {
              default: i(() => [...w[12] || (w[12] = [
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
}), a1 = /* @__PURE__ */ J(n1, [["__scopeId", "data-v-18e18eb5"]]), l1 = { class: "header-info" }, i1 = { class: "commit-hash" }, r1 = {
  key: 0,
  class: "commit-refs"
}, d1 = { class: "commit-message" }, c1 = { class: "commit-date" }, u1 = {
  key: 0,
  class: "loading"
}, m1 = {
  key: 1,
  class: "changes-section"
}, v1 = { class: "stats-row" }, f1 = { class: "stat" }, g1 = { class: "stat insertions" }, h1 = { class: "stat deletions" }, p1 = {
  key: 0,
  class: "change-group"
}, y1 = {
  key: 1,
  class: "change-group"
}, w1 = {
  key: 0,
  class: "version"
}, k1 = {
  key: 2,
  class: "change-group"
}, b1 = { class: "change-item" }, _1 = /* @__PURE__ */ K({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = ze(), r = C(null), h = C(!0), g = D(() => {
      if (!r.value) return !1;
      const f = r.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), m = D(() => {
      if (!r.value) return !1;
      const f = r.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return Se(async () => {
      try {
        r.value = await n(c.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (f, l) => (o(), S(et, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (u) => f.$emit("close"))
    }, {
      header: i(() => {
        var u, k, v, I;
        return [
          e("div", l1, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", i1, a(((u = r.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((k = t.commit.hash) == null ? void 0 : k.slice(0, 7))), 1),
            (I = (v = r.value) == null ? void 0 : v.refs) != null && I.length ? (o(), s("span", r1, [
              (o(!0), s(V, null, X(r.value.refs, (_) => (o(), s("span", {
                key: _,
                class: "ref-badge"
              }, a(_), 1))), 128))
            ])) : d("", !0)
          ]),
          p(le, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (_) => f.$emit("close"))
          }, {
            default: i(() => [...l[5] || (l[5] = [
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
        var u, k;
        return [
          e("div", d1, a(((u = r.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", c1, a(((k = r.value) == null ? void 0 : k.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (o(), s("div", u1, "Loading details...")) : r.value ? (o(), s("div", m1, [
            e("div", v1, [
              e("span", f1, a(r.value.stats.files_changed) + " files", 1),
              e("span", g1, "+" + a(r.value.stats.insertions), 1),
              e("span", h1, "-" + a(r.value.stats.deletions), 1)
            ]),
            g.value ? (o(), s("div", p1, [
              p(Et, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(V, null, X(r.value.changes.workflows.added, (v) => (o(), s("div", {
                key: "add-" + v,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(v), 1)
              ]))), 128)),
              (o(!0), s(V, null, X(r.value.changes.workflows.modified, (v) => (o(), s("div", {
                key: "mod-" + v,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(v), 1)
              ]))), 128)),
              (o(!0), s(V, null, X(r.value.changes.workflows.deleted, (v) => (o(), s("div", {
                key: "del-" + v,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(v), 1)
              ]))), 128))
            ])) : d("", !0),
            m.value ? (o(), s("div", y1, [
              p(Et, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(V, null, X(r.value.changes.nodes.added, (v) => (o(), s("div", {
                key: "add-" + v.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(v.name), 1),
                v.version ? (o(), s("span", w1, "(" + a(v.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (o(!0), s(V, null, X(r.value.changes.nodes.removed, (v) => (o(), s("div", {
                key: "rem-" + v.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(v.name), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", k1, [
              p(Et, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", b1, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: i(() => [
        p(le, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (u) => f.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        p(le, {
          variant: "primary",
          onClick: l[2] || (l[2] = (u) => f.$emit("checkout", t.commit))
        }, {
          default: i(() => [...l[16] || (l[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), $1 = /* @__PURE__ */ J(_1, [["__scopeId", "data-v-d256ff6d"]]), C1 = { class: "dialog-message" }, x1 = {
  key: 0,
  class: "dialog-details"
}, S1 = {
  key: 1,
  class: "dialog-warning"
}, I1 = /* @__PURE__ */ K({
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
    return (c, n) => (o(), S(et, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => c.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", C1, a(t.message), 1),
        t.details && t.details.length ? (o(), s("div", x1, [
          (o(!0), s(V, null, X(t.details, (r, h) => (o(), s("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : d("", !0),
        t.warning ? (o(), s("p", S1, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        p(le, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => c.$emit("cancel"))
        }, {
          default: i(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), S(le, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => c.$emit("secondary"))
        }, {
          default: i(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        p(le, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
        }, {
          default: i(() => [
            y(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), E1 = /* @__PURE__ */ J(I1, [["__scopeId", "data-v-3670b9f5"]]), M1 = { class: "base-textarea-wrapper" }, T1 = ["value", "rows", "placeholder", "disabled", "maxlength"], R1 = {
  key: 0,
  class: "base-textarea-count"
}, z1 = /* @__PURE__ */ K({
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
    return (c, n) => (o(), s("div", M1, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = rt($e((r) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = rt($e((r) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, T1),
      t.showCharCount && t.maxLength ? (o(), s("div", R1, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), eo = /* @__PURE__ */ J(z1, [["__scopeId", "data-v-5516e6fc"]]), L1 = ["checked", "disabled"], N1 = { class: "base-checkbox-box" }, D1 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, P1 = {
  key: 0,
  class: "base-checkbox-label"
}, O1 = /* @__PURE__ */ K({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", {
      class: oe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked))
      }, null, 40, L1),
      e("span", N1, [
        t.modelValue ? (o(), s("svg", D1, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      c.$slots.default ? (o(), s("span", P1, [
        ve(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), to = /* @__PURE__ */ J(O1, [["__scopeId", "data-v-bf17c831"]]), U1 = { class: "popover-header" }, B1 = { class: "popover-body" }, A1 = {
  key: 0,
  class: "changes-summary"
}, F1 = {
  key: 0,
  class: "change-item"
}, V1 = {
  key: 1,
  class: "change-item"
}, W1 = {
  key: 2,
  class: "change-item"
}, G1 = {
  key: 3,
  class: "change-item"
}, j1 = {
  key: 4,
  class: "change-item"
}, H1 = {
  key: 1,
  class: "no-changes"
}, q1 = {
  key: 2,
  class: "loading"
}, K1 = {
  key: 3,
  class: "issues-error"
}, J1 = { class: "error-header" }, Y1 = { class: "error-title" }, Q1 = { class: "issues-list" }, X1 = { class: "message-section" }, Z1 = { class: "popover-footer" }, ey = {
  key: 1,
  class: "commit-popover"
}, ty = { class: "popover-header" }, oy = { class: "popover-body" }, sy = {
  key: 0,
  class: "changes-summary"
}, ny = {
  key: 0,
  class: "change-item"
}, ay = {
  key: 1,
  class: "change-item"
}, ly = {
  key: 2,
  class: "change-item"
}, iy = {
  key: 3,
  class: "change-item"
}, ry = {
  key: 4,
  class: "change-item"
}, dy = {
  key: 1,
  class: "no-changes"
}, cy = {
  key: 2,
  class: "loading"
}, uy = {
  key: 3,
  class: "issues-error"
}, my = { class: "error-header" }, vy = { class: "error-title" }, fy = { class: "issues-list" }, gy = { class: "message-section" }, hy = { class: "popover-footer" }, py = /* @__PURE__ */ K({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, r = c, { commit: h } = ze(), g = C(""), m = C(!1), f = C(!1), l = C(null), u = D(() => {
      if (!n.status) return !1;
      const L = n.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || n.status.has_changes;
    }), k = D(() => {
      var L;
      return (L = n.status) != null && L.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (b) => b.has_issues && (b.sync_state === "new" || b.sync_state === "modified")
      ) : [];
    }), v = D(() => k.value.length > 0), I = D(() => v.value && !f.value);
    async function _() {
      var L, b, w;
      if (!(v.value && !f.value) && !(!u.value || !g.value.trim() || m.value)) {
        m.value = !0, l.value = null;
        try {
          const $ = await h(g.value.trim(), f.value);
          $.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((L = $.summary) == null ? void 0 : L.new) || 0} new, ${((b = $.summary) == null ? void 0 : b.modified) || 0} modified, ${((w = $.summary) == null ? void 0 : w.deleted) || 0} deleted`
          }, g.value = "", f.value = !1, setTimeout(() => r("committed"), 1e3)) : $.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : $.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: $.message || "Commit failed" };
        } catch ($) {
          l.value = { type: "error", message: $ instanceof Error ? $.message : "Commit failed" };
        } finally {
          m.value = !1;
        }
      }
    }
    return (L, b) => t.asModal ? (o(), S(Te, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (w) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", U1, [
            b[11] || (b[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (w) => r("close"))
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
          e("div", B1, [
            t.status && u.value ? (o(), s("div", A1, [
              t.status.workflows.new.length ? (o(), s("div", F1, [
                b[12] || (b[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (o(), s("div", V1, [
                b[13] || (b[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", W1, [
                b[14] || (b[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", G1, [
                b[15] || (b[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", j1, [
                b[16] || (b[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0)
            ])) : t.status ? (o(), s("div", H1, " No changes to commit ")) : (o(), s("div", q1, " Loading... ")),
            v.value ? (o(), s("div", K1, [
              e("div", J1, [
                b[17] || (b[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Y1, a(k.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Q1, [
                (o(!0), s(V, null, X(k.value, (w) => (o(), s("div", {
                  key: w.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(w.name), 1),
                  y(": " + a(w.issue_summary), 1)
                ]))), 128))
              ]),
              p(to, {
                modelValue: f.value,
                "onUpdate:modelValue": b[1] || (b[1] = (w) => f.value = w),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...b[18] || (b[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", X1, [
              p(eo, {
                modelValue: g.value,
                "onUpdate:modelValue": b[2] || (b[2] = (w) => g.value = w),
                placeholder: I.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || m.value || I.value,
                rows: 3,
                onCtrlEnter: _
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (o(), s("div", {
              key: 4,
              class: oe(["result", l.value.type])
            }, a(l.value.message), 3)) : d("", !0)
          ]),
          e("div", Z1, [
            p(le, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (w) => r("close"))
            }, {
              default: i(() => [...b[19] || (b[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(le, {
              variant: f.value ? "danger" : "primary",
              disabled: !u.value || !g.value.trim() || m.value || I.value,
              loading: m.value,
              onClick: _
            }, {
              default: i(() => [
                y(a(m.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", ey, [
      e("div", ty, [
        b[21] || (b[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (w) => r("close"))
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
      e("div", oy, [
        t.status && u.value ? (o(), s("div", sy, [
          t.status.workflows.new.length ? (o(), s("div", ny, [
            b[22] || (b[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (o(), s("div", ay, [
            b[23] || (b[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", ly, [
            b[24] || (b[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", iy, [
            b[25] || (b[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", ry, [
            b[26] || (b[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : t.status ? (o(), s("div", dy, " No changes to commit ")) : (o(), s("div", cy, " Loading... ")),
        v.value ? (o(), s("div", uy, [
          e("div", my, [
            b[27] || (b[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", vy, a(k.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", fy, [
            (o(!0), s(V, null, X(k.value, (w) => (o(), s("div", {
              key: w.name,
              class: "issue-item"
            }, [
              e("strong", null, a(w.name), 1),
              y(": " + a(w.issue_summary), 1)
            ]))), 128))
          ]),
          p(to, {
            modelValue: f.value,
            "onUpdate:modelValue": b[7] || (b[7] = (w) => f.value = w),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...b[28] || (b[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", gy, [
          p(eo, {
            modelValue: g.value,
            "onUpdate:modelValue": b[8] || (b[8] = (w) => g.value = w),
            placeholder: I.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || m.value || I.value,
            rows: 3,
            onCtrlEnter: _
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (o(), s("div", {
          key: 4,
          class: oe(["result", l.value.type])
        }, a(l.value.message), 3)) : d("", !0)
      ]),
      e("div", hy, [
        p(le, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (w) => r("close"))
        }, {
          default: i(() => [...b[29] || (b[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p(le, {
          variant: f.value ? "danger" : "primary",
          disabled: !u.value || !g.value.trim() || m.value || I.value,
          loading: m.value,
          onClick: _
        }, {
          default: i(() => [
            y(a(m.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), fo = /* @__PURE__ */ J(py, [["__scopeId", "data-v-d92153de"]]), yy = { class: "modal-header" }, wy = { class: "modal-body" }, ky = { class: "switch-message" }, by = { class: "switch-details" }, _y = { class: "modal-actions" }, $y = /* @__PURE__ */ K({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), S(Te, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", yy, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", wy, [
            e("p", ky, [
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
            e("p", by, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", _y, [
            p(Y, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(Y, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Cy = /* @__PURE__ */ J($y, [["__scopeId", "data-v-e9c5253e"]]), xy = { class: "progress-bar" }, Sy = /* @__PURE__ */ K({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = D(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (r, h) => (o(), s("div", xy, [
      e("div", {
        class: oe(["progress-fill", t.variant]),
        style: Ze({ width: n.value })
      }, null, 6)
    ]));
  }
}), Iy = /* @__PURE__ */ J(Sy, [["__scopeId", "data-v-1beb0512"]]), Ey = {
  key: 0,
  class: "modal-overlay"
}, My = { class: "modal-content" }, Ty = { class: "modal-body" }, Ry = { class: "progress-info" }, zy = { class: "progress-percentage" }, Ly = { class: "progress-state" }, Ny = { class: "switch-steps" }, Dy = { class: "step-icon" }, Py = { class: "step-label" }, Oy = /* @__PURE__ */ K({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = D(() => {
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
    }), r = D(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), h = D(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = g.findIndex((f) => f.state === c.state);
      return g.map((f, l) => {
        let u = "pending", k = "○";
        return l < m ? (u = "completed", k = "✓") : l === m && (u = "active", k = "⟳"), {
          ...f,
          status: u,
          icon: k
        };
      });
    });
    return (g, m) => (o(), S(Te, { to: "body" }, [
      t.show ? (o(), s("div", Ey, [
        e("div", My, [
          m[1] || (m[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Ty, [
            p(Iy, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Ry, [
              e("div", zy, a(t.progress) + "%", 1),
              e("div", Ly, a(n.value), 1)
            ]),
            e("div", Ny, [
              (o(!0), s(V, null, X(h.value, (f) => (o(), s("div", {
                key: f.state,
                class: oe(["switch-step", f.status])
              }, [
                e("span", Dy, a(f.icon), 1),
                e("span", Py, a(f.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Uy = /* @__PURE__ */ J(Oy, [["__scopeId", "data-v-768a5078"]]), By = { class: "modal-header" }, Ay = { class: "modal-body" }, Fy = {
  key: 0,
  class: "node-section"
}, Vy = { class: "node-list" }, Wy = {
  key: 1,
  class: "node-section"
}, Gy = { class: "node-list" }, jy = { class: "modal-actions" }, Hy = /* @__PURE__ */ K({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), S(Te, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", By, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Ay, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Fy, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Vy, [
                (o(!0), s(V, null, X(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Wy, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Gy, [
                (o(!0), s(V, null, X(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
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
          e("div", jy, [
            p(Y, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(Y, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), qy = /* @__PURE__ */ J(Hy, [["__scopeId", "data-v-7cad7518"]]), Ky = { class: "comfygit-panel" }, Jy = { class: "panel-header" }, Yy = { class: "header-left" }, Qy = {
  key: 0,
  class: "header-info"
}, Xy = { class: "header-actions" }, Zy = { class: "env-switcher" }, ew = {
  key: 0,
  class: "header-info"
}, tw = { class: "branch-name" }, ow = { class: "panel-main" }, sw = { class: "sidebar" }, nw = { class: "sidebar-section" }, aw = { class: "sidebar-section" }, lw = { class: "sidebar-section" }, iw = { class: "content-area" }, rw = {
  key: 0,
  class: "error-message"
}, dw = {
  key: 1,
  class: "loading"
}, cw = {
  key: 4,
  class: "dialog-overlay"
}, uw = { class: "dialog-content create-progress-dialog" }, mw = { class: "dialog-body create-progress-body" }, vw = { class: "create-progress-message" }, fw = { class: "dialog-content env-selector-dialog" }, gw = { class: "dialog-header" }, hw = { class: "dialog-body" }, pw = { class: "env-list" }, yw = { class: "env-info" }, ww = { class: "env-name-row" }, kw = { class: "env-indicator" }, bw = { class: "env-name" }, _w = {
  key: 0,
  class: "env-branch"
}, $w = {
  key: 1,
  class: "current-label"
}, Cw = { class: "env-stats" }, xw = ["onClick"], Sw = { class: "toast-container" }, Iw = { class: "toast-icon" }, Ew = { class: "toast-message" }, Mw = /* @__PURE__ */ K({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = c, {
      getStatus: r,
      getHistory: h,
      getBranches: g,
      checkout: m,
      createBranch: f,
      switchBranch: l,
      deleteBranch: u,
      getEnvironments: k,
      switchEnvironment: v,
      getSwitchProgress: I,
      createEnvironment: _,
      getCreateProgress: L,
      deleteEnvironment: b,
      syncEnvironmentManually: w
    } = ze(), $ = ro(), B = C(null), O = C([]), E = C([]), H = C([]), A = D(() => H.value.find((W) => W.is_current)), U = C(!1), F = C(null), T = C(null), M = C(!1), G = C(null), ae = C(null), we = C(!1), ie = C(!1), Q = C(""), Z = C({ state: "idle", progress: 0, message: "" });
    let z = null, x = null;
    const se = C(!1), ee = C({ state: "idle", message: "" }), _e = C(null);
    let pe = null;
    const me = C("status"), Ce = C("this-env");
    function ye(W, R) {
      me.value = W, Ce.value = R;
    }
    function Ne(W) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      de && ye(de.view, de.section);
    }
    function Re() {
      ye("branches", "this-env");
    }
    function je() {
      n("close"), setTimeout(() => {
        var R;
        const W = document.querySelectorAll("button.comfyui-button");
        for (const de of W)
          if (((R = de.textContent) == null ? void 0 : R.trim()) === "Manager") {
            de.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const fe = C(null), De = C(!1), Fe = C(!1), Ve = C([]);
    let dt = 0;
    function ue(W, R = "info", de = 3e3) {
      const be = ++dt;
      return Ve.value.push({ id: be, message: W, type: R }), de > 0 && setTimeout(() => {
        Ve.value = Ve.value.filter((Oe) => Oe.id !== be);
      }, de), be;
    }
    function Pe(W) {
      Ve.value = Ve.value.filter((R) => R.id !== W);
    }
    function ct(W) {
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
    const tt = D(() => {
      if (!B.value) return "neutral";
      const W = B.value.workflows, R = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || B.value.has_changes;
      return B.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    D(() => B.value ? tt.value === "success" ? "All synced" : tt.value === "warning" ? "Uncommitted changes" : tt.value === "error" ? "Not synced" : "" : "");
    async function Ie() {
      U.value = !0, F.value = null;
      try {
        const [W, R, de, be] = await Promise.all([
          r(!0),
          h(),
          g(),
          k()
        ]);
        B.value = W, O.value = R.commits, E.value = de.branches, H.value = be, n("statusUpdate", W), G.value && await G.value.loadWorkflows(!0);
      } catch (W) {
        F.value = W instanceof Error ? W.message : "Failed to load status", B.value = null, O.value = [], E.value = [];
      } finally {
        U.value = !1;
      }
    }
    function ut(W) {
      T.value = W;
    }
    async function it(W) {
      var de;
      T.value = null;
      const R = B.value && (B.value.workflows.new.length > 0 || B.value.workflows.modified.length > 0 || B.value.workflows.deleted.length > 0 || B.value.has_changes);
      fe.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((de = W.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: R ? Qt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var Ue;
          fe.value = null, ce();
          const be = ue(`Checking out ${W.short_hash || ((Ue = W.hash) == null ? void 0 : Ue.slice(0, 7))}...`, "info", 0), Oe = await m(W.hash, R);
          Pe(be), Oe.status === "success" ? ue("Restarting ComfyUI...", "success") : ue(Oe.message || "Checkout failed", "error");
        }
      };
    }
    async function j(W) {
      const R = B.value && (B.value.workflows.new.length > 0 || B.value.workflows.modified.length > 0 || B.value.workflows.deleted.length > 0 || B.value.has_changes);
      fe.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: R ? Qt() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, ce();
          const de = ue(`Switching to ${W}...`, "info", 0), be = await l(W, R);
          Pe(de), be.status === "success" ? ue("Restarting ComfyUI...", "success") : ue(be.message || "Branch switch failed", "error");
        }
      };
    }
    async function P(W) {
      const R = ue(`Creating branch ${W}...`, "info", 0), de = await f(W);
      Pe(R), de.status === "success" ? (ue(`Branch "${W}" created`, "success"), await Ie()) : ue(de.message || "Failed to create branch", "error");
    }
    async function N(W, R = !1) {
      const de = async (be) => {
        var Ue;
        const Oe = ue(`Deleting branch ${W}...`, "info", 0);
        try {
          const re = await u(W, be);
          Pe(Oe), re.status === "success" ? (ue(`Branch "${W}" deleted`, "success"), await Ie()) : (Ue = re.message) != null && Ue.includes("not fully merged") ? fe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              fe.value = null, await de(!0);
            }
          } : ue(re.message || "Failed to delete branch", "error");
        } catch (re) {
          Pe(Oe);
          const Pt = re instanceof Error ? re.message : "Failed to delete branch";
          Pt.includes("not fully merged") ? fe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              fe.value = null, await de(!0);
            }
          } : ue(Pt, "error");
        }
      };
      fe.value = {
        title: "Delete Branch",
        message: `Delete branch "${W}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, await de(R);
        }
      };
    }
    async function q(W) {
      T.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const de = ue(`Creating branch ${R}...`, "info", 0), be = await f(R, W.hash);
        Pe(de), be.status === "success" ? (ue(`Branch "${R}" created from ${W.short_hash}`, "success"), await Ie()) : ue(be.message || "Failed to create branch", "error");
      }
    }
    function ce() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Me() {
      fe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          fe.value = null, ce(), ue("Restarting environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ne() {
      fe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          fe.value = null, ue("Stopping environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function te(W) {
      M.value = !1, Q.value = W, we.value = !0;
    }
    async function Ee() {
      we.value = !1, ie.value = !0, ce(), Z.value = {
        progress: 10,
        state: Je(10),
        message: mt(10)
      };
      try {
        await v(Q.value), wo(), ko();
      } catch (W) {
        vt(), ie.value = !1, ue(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), Z.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Je(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function mt(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Je(W)] || "";
    }
    function wo() {
      if (x) return;
      let W = 10;
      const R = 60, de = 5e3, be = 100, Oe = (R - W) / (de / be);
      x = window.setInterval(() => {
        if (W += Oe, W >= R && (W = R, vt()), Z.value.progress < R) {
          const Ue = Math.floor(W);
          Z.value = {
            progress: Ue,
            state: Je(Ue),
            message: mt(Ue)
          };
        }
      }, be);
    }
    function vt() {
      x && (clearInterval(x), x = null);
    }
    function ko() {
      z || (z = window.setInterval(async () => {
        try {
          let W = await $.getStatus();
          if ((!W || W.state === "idle") && (W = await I()), !W)
            return;
          const R = W.progress || 0;
          R >= 60 && vt();
          const de = Math.max(R, Z.value.progress), be = W.state && W.state !== "idle" && W.state !== "unknown", Oe = be ? W.state : Je(de), Ue = be && W.message || mt(de);
          Z.value = {
            state: Oe,
            progress: de,
            message: Ue
          }, W.state === "complete" ? (vt(), Dt(), ie.value = !1, ue(`✓ Switched to ${Q.value}`, "success"), await Ie(), Q.value = "") : W.state === "rolled_back" ? (vt(), Dt(), ie.value = !1, ue("Switch failed, restored previous environment", "warning"), Q.value = "") : W.state === "critical_failure" && (vt(), Dt(), ie.value = !1, ue(`Critical error during switch: ${W.message}`, "error"), Q.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function Dt() {
      vt(), z && (clearInterval(z), z = null);
    }
    function bo() {
      we.value = !1, Q.value = "";
    }
    async function _o() {
      De.value = !1, await Ie(), ue("✓ Changes committed", "success");
    }
    async function $o() {
      Fe.value = !1;
      const W = ue("Syncing environment...", "info", 0);
      try {
        const R = await w("skip", !0);
        if (Pe(W), R.status === "success") {
          const de = [];
          R.nodes_installed.length && de.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && de.push(`${R.nodes_removed.length} removed`);
          const be = de.length ? `: ${de.join(", ")}` : "";
          ue(`✓ Environment synced${be}`, "success"), await Ie();
        } else {
          const de = R.errors.length ? R.errors.join("; ") : R.message;
          ue(`Sync failed: ${de}`, "error");
        }
      } catch (R) {
        Pe(W), ue(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function Co(W) {
      _e.value = W, se.value = !0, ee.value = { state: "creating", message: `Creating environment '${W.name}'...` };
      try {
        const R = await _(W);
        R.status === "started" ? xo() : R.status === "error" && (se.value = !1, ue(`Failed to create environment: ${R.message}. Check debug logs for details.`, "error"), _e.value = null);
      } catch (R) {
        se.value = !1, ue(`Error creating environment: ${R instanceof Error ? R.message : "Unknown error"}. Check debug logs.`, "error"), _e.value = null;
      }
    }
    function xo() {
      pe || (pe = window.setInterval(async () => {
        var W;
        try {
          const R = await L();
          ee.value = { state: R.state, message: R.message }, R.state === "complete" ? (Yt(), se.value = !1, ue(`✓ Environment '${R.environment_name}' created`, "success"), await Ie(), ae.value && await ae.value.loadEnvironments(), (W = _e.value) != null && W.switch_after && R.environment_name && await te(R.environment_name), _e.value = null) : R.state === "error" && (Yt(), se.value = !1, ue(`Failed to create environment: ${R.error || R.message}. Check debug logs.`, "error"), _e.value = null);
        } catch (R) {
          console.error("Failed to poll create progress:", R);
        }
      }, 2e3));
    }
    function Yt() {
      pe && (clearInterval(pe), pe = null);
    }
    async function So(W) {
      var R;
      if (((R = A.value) == null ? void 0 : R.name) === W) {
        ue("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      fe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${W}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          fe.value = null;
          try {
            const de = await b(W);
            de.status === "success" ? (ue(`Environment "${W}" deleted`, "success"), await Ie(), ae.value && await ae.value.loadEnvironments()) : ue(de.message || "Failed to delete environment", "error");
          } catch (de) {
            ue(`Error deleting environment: ${de instanceof Error ? de.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Qt() {
      if (!B.value) return [];
      const W = [], R = B.value.workflows;
      return R.new.length && W.push(`${R.new.length} new workflow(s)`), R.modified.length && W.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && W.push(`${R.deleted.length} deleted workflow(s)`), W;
    }
    return Se(Ie), (W, R) => {
      var de, be, Oe, Ue;
      return o(), s("div", Ky, [
        e("div", Jy, [
          e("div", Yy, [
            R[27] || (R[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            B.value ? (o(), s("div", Qy)) : d("", !0)
          ]),
          e("div", Xy, [
            e("button", {
              class: oe(["icon-btn", { spinning: U.value }]),
              onClick: Ie,
              title: "Refresh"
            }, [...R[28] || (R[28] = [
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
              onClick: R[0] || (R[0] = (re) => n("close")),
              title: "Close"
            }, [...R[29] || (R[29] = [
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
        e("div", Zy, [
          e("div", { class: "env-switcher-header" }, [
            R[30] || (R[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Me
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ne
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[1] || (R[1] = (re) => ye("environments", "all-envs"))
          }, [
            B.value ? (o(), s("div", ew, [
              e("span", null, a(((de = A.value) == null ? void 0 : de.name) || ((be = B.value) == null ? void 0 : be.environment) || "Loading..."), 1),
              e("span", tw, "(" + a(B.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            R[31] || (R[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", ow, [
          e("div", sw, [
            e("div", nw, [
              R[32] || (R[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "status" && Ce.value === "this-env" }]),
                onClick: R[2] || (R[2] = (re) => ye("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "workflows" }]),
                onClick: R[3] || (R[3] = (re) => ye("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "models-env" }]),
                onClick: R[4] || (R[4] = (re) => ye("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "branches" }]),
                onClick: R[5] || (R[5] = (re) => ye("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "history" }]),
                onClick: R[6] || (R[6] = (re) => ye("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "nodes" }]),
                onClick: R[7] || (R[7] = (re) => ye("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "debug-env" }]),
                onClick: R[8] || (R[8] = (re) => ye("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            R[35] || (R[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", aw, [
              R[33] || (R[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "environments" }]),
                onClick: R[9] || (R[9] = (re) => ye("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "model-index" }]),
                onClick: R[10] || (R[10] = (re) => ye("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "settings" }]),
                onClick: R[11] || (R[11] = (re) => ye("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "debug-workspace" }]),
                onClick: R[12] || (R[12] = (re) => ye("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            R[36] || (R[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", lw, [
              R[34] || (R[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "export" }]),
                onClick: R[13] || (R[13] = (re) => ye("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "import" }]),
                onClick: R[14] || (R[14] = (re) => ye("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: me.value === "remotes" }]),
                onClick: R[15] || (R[15] = (re) => ye("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", iw, [
            F.value ? (o(), s("div", rw, a(F.value), 1)) : !B.value && me.value === "status" ? (o(), s("div", dw, " Loading status... ")) : (o(), s(V, { key: 2 }, [
              me.value === "status" ? (o(), S(sa, {
                key: 0,
                status: B.value,
                onSwitchBranch: Re,
                onCommitChanges: R[16] || (R[16] = (re) => De.value = !0),
                onSyncEnvironment: R[17] || (R[17] = (re) => Fe.value = !0),
                onViewWorkflows: R[18] || (R[18] = (re) => ye("workflows", "this-env")),
                onViewHistory: R[19] || (R[19] = (re) => ye("history", "this-env")),
                onViewDebug: R[20] || (R[20] = (re) => ye("debug-env", "this-env"))
              }, null, 8, ["status"])) : me.value === "workflows" ? (o(), S(nu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: G,
                onRefresh: Ie
              }, null, 512)) : me.value === "models-env" ? (o(), S(Au, {
                key: 2,
                onNavigate: Ne
              })) : me.value === "branches" ? (o(), S(ya, {
                key: 3,
                branches: E.value,
                current: ((Oe = B.value) == null ? void 0 : Oe.branch) || null,
                onSwitch: j,
                onCreate: P,
                onDelete: N
              }, null, 8, ["branches", "current"])) : me.value === "history" ? (o(), S(Ma, {
                key: 4,
                commits: O.value,
                onSelect: ut,
                onCheckout: it
              }, null, 8, ["commits"])) : me.value === "nodes" ? (o(), S(Em, {
                key: 5,
                onOpenNodeManager: je
              })) : me.value === "debug-env" ? (o(), S(Rg, { key: 6 })) : me.value === "environments" ? (o(), S(bh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: ae,
                onSwitch: te,
                onCreate: Co,
                onDelete: So
              }, null, 512)) : me.value === "model-index" ? (o(), S(lm, {
                key: 8,
                onRefresh: Ie
              })) : me.value === "settings" ? (o(), S(Ig, { key: 9 })) : me.value === "debug-workspace" ? (o(), S(Mg, { key: 10 })) : me.value === "export" ? (o(), S(Rh, { key: 11 })) : me.value === "import" ? (o(), S(a1, { key: 12 })) : me.value === "remotes" ? (o(), S(rg, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        T.value ? (o(), S($1, {
          key: 0,
          commit: T.value,
          onClose: R[21] || (R[21] = (re) => T.value = null),
          onCheckout: it,
          onCreateBranch: q
        }, null, 8, ["commit"])) : d("", !0),
        fe.value ? (o(), S(E1, {
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
          onCancel: R[22] || (R[22] = (re) => fe.value = null),
          onSecondary: fe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        p(Cy, {
          show: we.value,
          "from-environment": ((Ue = A.value) == null ? void 0 : Ue.name) || "unknown",
          "to-environment": Q.value,
          onConfirm: Ee,
          onClose: bo
        }, null, 8, ["show", "from-environment", "to-environment"]),
        De.value && B.value ? (o(), S(fo, {
          key: 2,
          status: B.value,
          "as-modal": !0,
          onClose: R[23] || (R[23] = (re) => De.value = !1),
          onCommitted: _o
        }, null, 8, ["status"])) : d("", !0),
        Fe.value && B.value ? (o(), S(qy, {
          key: 3,
          show: Fe.value,
          "mismatch-details": {
            missing_nodes: B.value.comparison.missing_nodes,
            extra_nodes: B.value.comparison.extra_nodes
          },
          onConfirm: $o,
          onClose: R[24] || (R[24] = (re) => Fe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        p(Uy, {
          show: ie.value,
          state: Z.value.state,
          progress: Z.value.progress,
          message: Z.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        se.value ? (o(), s("div", cw, [
          e("div", uw, [
            R[39] || (R[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", mw, [
              R[37] || (R[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", vw, a(ee.value.message), 1),
              R[38] || (R[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : d("", !0),
        M.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: R[26] || (R[26] = $e((re) => M.value = !1, ["self"]))
        }, [
          e("div", fw, [
            e("div", gw, [
              R[41] || (R[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[25] || (R[25] = (re) => M.value = !1)
              }, [...R[40] || (R[40] = [
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
            e("div", hw, [
              R[42] || (R[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", pw, [
                (o(!0), s(V, null, X(H.value, (re) => (o(), s("div", {
                  key: re.name,
                  class: oe(["env-item", { current: re.is_current }])
                }, [
                  e("div", yw, [
                    e("div", ww, [
                      e("span", kw, a(re.is_current ? "●" : "○"), 1),
                      e("span", bw, a(re.name), 1),
                      re.current_branch ? (o(), s("span", _w, "(" + a(re.current_branch) + ")", 1)) : d("", !0),
                      re.is_current ? (o(), s("span", $w, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Cw, a(re.workflow_count) + " workflows • " + a(re.node_count) + " nodes ", 1)
                  ]),
                  re.is_current ? d("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Pt) => te(re.name)
                  }, " SWITCH ", 8, xw))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        e("div", Sw, [
          p(Ro, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(V, null, X(Ve.value, (re) => (o(), s("div", {
                key: re.id,
                class: oe(["toast", re.type])
              }, [
                e("span", Iw, a(ct(re.type)), 1),
                e("span", Ew, a(re.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Tw = /* @__PURE__ */ J(Mw, [["__scopeId", "data-v-97ffaacd"]]), Rw = { class: "item-header" }, zw = { class: "item-info" }, Lw = { class: "filename" }, Nw = { class: "metadata" }, Dw = { class: "size" }, Pw = {
  key: 0,
  class: "type"
}, Ow = { class: "item-actions" }, Uw = {
  key: 0,
  class: "progress-section"
}, Bw = { class: "progress-bar" }, Aw = { class: "progress-stats" }, Fw = { class: "downloaded" }, Vw = { class: "speed" }, Ww = {
  key: 0,
  class: "eta"
}, Gw = {
  key: 1,
  class: "status-msg paused"
}, jw = {
  key: 2,
  class: "status-msg queued"
}, Hw = {
  key: 3,
  class: "status-msg completed"
}, qw = {
  key: 4,
  class: "status-msg failed"
}, Kw = {
  key: 0,
  class: "retries"
}, Jw = /* @__PURE__ */ K({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function r(m) {
      if (m === 0) return "?";
      const f = m / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    function h(m) {
      return m === 0 ? "-" : `${(m / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(m) {
      if (m < 60) return `${Math.round(m)}s`;
      const f = Math.floor(m / 60);
      return f < 60 ? `${f}m` : `${Math.floor(f / 60)}h ${f % 60}m`;
    }
    return (m, f) => (o(), s("div", {
      class: oe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Rw, [
        e("div", zw, [
          e("div", Lw, a(t.item.filename), 1),
          e("div", Nw, [
            e("span", Dw, a(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Pw, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Ow, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: f[0] || (f[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: f[1] || (f[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: f[2] || (f[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: f[3] || (f[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Uw, [
        e("div", Bw, [
          e("div", {
            class: "progress-fill",
            style: Ze({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Aw, [
          e("span", Fw, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", Vw, a(h(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Ww, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Gw, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", jw, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Hw, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", qw, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Kw, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), xt = /* @__PURE__ */ J(Jw, [["__scopeId", "data-v-2110df65"]]), Yw = { class: "queue-title" }, Qw = { class: "count" }, Xw = { class: "queue-actions" }, Zw = { class: "action-label" }, e0 = {
  key: 0,
  class: "overall-progress"
}, t0 = { class: "progress-bar" }, o0 = {
  key: 0,
  class: "current-mini"
}, s0 = { class: "filename" }, n0 = { class: "speed" }, a0 = {
  key: 1,
  class: "queue-content"
}, l0 = {
  key: 0,
  class: "section"
}, i0 = {
  key: 1,
  class: "section"
}, r0 = { class: "section-header" }, d0 = { class: "section-label paused" }, c0 = { class: "items-list" }, u0 = {
  key: 2,
  class: "section"
}, m0 = { class: "section-header" }, v0 = { class: "section-label" }, f0 = { class: "items-list" }, g0 = {
  key: 3,
  class: "section"
}, h0 = { class: "section-header" }, p0 = { class: "section-label" }, y0 = { class: "items-list" }, w0 = {
  key: 4,
  class: "section"
}, k0 = { class: "section-header" }, b0 = { class: "section-label failed" }, _0 = { class: "items-list" }, $0 = /* @__PURE__ */ K({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: r,
      completedItems: h,
      failedItems: g,
      pausedItems: m,
      hasItems: f,
      activeCount: l,
      cancelDownload: u,
      retryDownload: k,
      resumeDownload: v,
      resumeAllPaused: I,
      removeItem: _,
      clearCompleted: L
    } = Rt(), b = C(!1);
    let w = null;
    kt(
      () => ({
        active: l.value,
        failed: g.value.length,
        paused: m.value.length,
        completed: h.value.length
      }),
      (E, H) => {
        w && (clearTimeout(w), w = null);
        const A = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, U = H && (H.active > 0 || H.paused > 0);
        A && U && (w = setTimeout(() => {
          L(), w = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = D(() => {
      var A;
      if (c.items.length === 0) return 0;
      const E = h.value.length, H = ((A = n.value) == null ? void 0 : A.progress) || 0;
      return Math.round((E + H / 100) / c.items.length * 100);
    });
    function B(E) {
      u(E);
    }
    function O(E) {
      return E === 0 ? "" : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, H) => (o(), S(Te, { to: "body" }, [
      ge(f) ? (o(), s("div", {
        key: 0,
        class: oe(["model-download-queue", { minimized: !b.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (A) => b.value = !b.value)
        }, [
          e("div", Yw, [
            H[4] || (H[4] = e("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Qw, "(" + a(ge(l)) + "/" + a(ge(c).items.length) + ")", 1)
          ]),
          e("div", Xw, [
            e("span", Zw, a(b.value ? "minimize" : "expand"), 1)
          ])
        ]),
        b.value ? (o(), s("div", a0, [
          ge(n) ? (o(), s("div", l0, [
            H[6] || (H[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            p(xt, {
              item: ge(n),
              onCancel: H[1] || (H[1] = (A) => B(ge(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          ge(m).length > 0 ? (o(), s("div", i0, [
            e("div", r0, [
              e("span", d0, "Paused (" + a(ge(m).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...A) => ge(I) && ge(I)(...A))
              }, "Resume All")
            ]),
            e("div", c0, [
              (o(!0), s(V, null, X(ge(m), (A) => (o(), S(xt, {
                key: A.id,
                item: A,
                onResume: (U) => ge(v)(A.id),
                onRemove: (U) => ge(_)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          ge(r).length > 0 ? (o(), s("div", u0, [
            e("div", m0, [
              e("span", v0, "Queued (" + a(ge(r).length) + ")", 1)
            ]),
            e("div", f0, [
              (o(!0), s(V, null, X(ge(r), (A) => (o(), S(xt, {
                key: A.id,
                item: A,
                onCancel: (U) => B(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          ge(h).length > 0 ? (o(), s("div", g0, [
            e("div", h0, [
              e("span", p0, "Completed (" + a(ge(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...A) => ge(L) && ge(L)(...A))
              }, "Clear")
            ]),
            e("div", y0, [
              (o(!0), s(V, null, X(ge(h).slice(0, 3), (A) => (o(), S(xt, {
                key: A.id,
                item: A,
                onRemove: (U) => ge(_)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          ge(g).length > 0 ? (o(), s("div", w0, [
            e("div", k0, [
              e("span", b0, "Failed (" + a(ge(g).length) + ")", 1)
            ]),
            e("div", _0, [
              (o(!0), s(V, null, X(ge(g), (A) => (o(), S(xt, {
                key: A.id,
                item: A,
                onRetry: (U) => ge(k)(A.id),
                onRemove: (U) => ge(_)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (o(), s("div", e0, [
          e("div", t0, [
            e("div", {
              class: "progress-fill",
              style: Ze({ width: `${$.value}%` })
            }, null, 4)
          ]),
          ge(n) ? (o(), s("div", o0, [
            e("span", s0, a(ge(n).filename), 1),
            e("span", n0, a(O(ge(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), C0 = /* @__PURE__ */ J($0, [["__scopeId", "data-v-60751cfa"]]), x0 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', S0 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', I0 = {
  comfy: x0,
  phosphor: S0
}, Kt = "comfy", go = "comfygit-theme";
let ft = null, ho = Kt;
function E0() {
  try {
    const t = localStorage.getItem(go);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Kt;
}
function po(t = Kt) {
  ft && ft.remove(), ft = document.createElement("style"), ft.id = "comfygit-theme-styles", ft.setAttribute("data-theme", t), ft.textContent = I0[t], document.head.appendChild(ft), document.body.setAttribute("data-comfygit-theme", t), ho = t;
  try {
    localStorage.setItem(go, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function M0() {
  return ho;
}
function T0(t) {
  po(t);
}
const Jt = document.createElement("link");
Jt.rel = "stylesheet";
Jt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Jt);
const R0 = E0();
po(R0);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), T0(t);
  },
  getTheme: () => {
    const t = M0();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let He = null, We = null, Mt = null, St = null, oo = null;
const wt = C(null);
async function zt() {
  var t;
  if (!((t = yt) != null && t.api)) return null;
  try {
    const c = await yt.api.fetchApi("/v2/comfygit/status");
    c.ok && (wt.value = await c.json());
  } catch {
  }
}
function z0() {
  if (!wt.value) return !1;
  const t = wt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || wt.value.has_changes;
}
function L0() {
  He && He.remove(), He = document.createElement("div"), He.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", He.appendChild(t), He.addEventListener("click", (r) => {
    r.target === He && Ft();
  });
  const c = (r) => {
    r.key === "Escape" && (Ft(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), jt({
    render: () => Ht(Tw, {
      onClose: Ft,
      onStatusUpdate: (r) => {
        wt.value = r, Tt();
      }
    })
  }).mount(t), document.body.appendChild(He);
}
function Ft() {
  He && (He.remove(), He = null);
}
function N0(t) {
  It(), We = document.createElement("div"), We.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  We.style.position = "fixed", We.style.top = `${c.bottom + 8}px`, We.style.right = `${window.innerWidth - c.right}px`, We.style.zIndex = "10001";
  const n = (h) => {
    We && !We.contains(h.target) && h.target !== t && (It(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (h) => {
    h.key === "Escape" && (It(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Mt = jt({
    render: () => Ht(fo, {
      status: wt.value,
      onClose: It,
      onCommitted: () => {
        It(), zt().then(Tt);
      }
    })
  }), Mt.mount(We), document.body.appendChild(We);
}
function It() {
  Mt && (Mt.unmount(), Mt = null), We && (We.remove(), We = null);
}
function D0() {
  St || (St = document.createElement("div"), St.className = "comfygit-download-queue-root", oo = jt({
    render: () => Ht(C0)
  }), oo.mount(St), document.body.appendChild(St), console.log("[ComfyGit] Model download queue mounted"));
}
let ot = null;
function Tt() {
  if (!ot) return;
  const t = ot.querySelector(".commit-indicator");
  t && (t.style.display = z0() ? "block" : "none");
}
const yo = document.createElement("style");
yo.textContent = `
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
document.head.appendChild(yo);
yt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = L0, ot = document.createElement("button"), ot.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ot.innerHTML = 'Commit <span class="commit-indicator"></span>', ot.title = "Quick Commit", ot.onclick = () => N0(ot), t.appendChild(c), t.appendChild(ot), (g = (h = yt.menu) == null ? void 0 : h.settingsGroup) != null && g.element && (yt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), D0();
    const { loadPendingDownloads: n } = Rt();
    n(), await zt(), Tt(), setInterval(async () => {
      await zt(), Tt();
    }, 3e4);
    const r = yt.api;
    if (r) {
      let m = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((u) => {
          (u.startsWith("workflow:") || u.startsWith("Comfy.OpenWorkflowsPaths:") || u.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(u);
        }), window.location.reload();
      }, f = function() {
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
        const k = document.createElement("span");
        k.textContent = "Workflows updated - refresh required", u.appendChild(k);
        const v = document.createElement("button");
        v.textContent = "Refresh", v.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, v.onmouseover = () => v.style.background = "var(--comfy-input-bg)", v.onmouseout = () => v.style.background = "var(--comfy-menu-bg)", v.onclick = () => m(), u.appendChild(v);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => u.remove(), u.appendChild(I), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: k, workflow_name: v } = u.detail;
        console.log(`[ComfyGit] Workflow ${k}: ${v}`), await zt(), Tt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      r.addEventListener("status", async (u) => {
        const k = u.detail != null;
        k && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), m()) : f()), l = k;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
