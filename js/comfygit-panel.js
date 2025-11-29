import { app as ht } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as s, openBlock as o, createCommentVNode as u, createElementVNode as e, renderSlot as fe, createBlock as E, resolveDynamicComponent as Ht, normalizeClass as te, withCtx as i, toDisplayString as a, createVNode as p, createTextVNode as y, computed as P, Fragment as F, renderList as X, normalizeStyle as et, ref as C, onMounted as Se, watch as wt, Teleport as Ee, withModifiers as be, Transition as Mo, createSlots as Rt, withKeys as rt, onUnmounted as Ro, reactive as no, readonly as To, unref as ge, withDirectives as Ze, vModelText as ao, vModelRadio as Bt, vModelCheckbox as lo, nextTick as Lo, vModelSelect as Ft, TransitionGroup as zo, createApp as qt, h as Kt } from "vue";
const No = { class: "panel-layout" }, Do = {
  key: 0,
  class: "panel-layout-header"
}, Po = {
  key: 1,
  class: "panel-layout-search"
}, Uo = { class: "panel-layout-content" }, Oo = {
  key: 2,
  class: "panel-layout-footer"
}, Bo = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (o(), s("div", No, [
      c.$slots.header ? (o(), s("div", Do, [
        fe(c.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      c.$slots.search ? (o(), s("div", Po, [
        fe(c.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      e("div", Uo, [
        fe(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), s("div", Oo, [
        fe(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), K = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [r, h] of c)
    n[r] = h;
  return n;
}, De = /* @__PURE__ */ K(Bo, [["__scopeId", "data-v-21565df9"]]), Fo = {
  key: 0,
  class: "panel-title-prefix"
}, Ao = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Vo = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (o(), E(Ht(`h${t.level}`), {
      class: te(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", Fo, a(t.prefix), 1)) : (o(), s("span", Ao)),
        fe(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Wo = /* @__PURE__ */ K(Vo, [["__scopeId", "data-v-c3875efc"]]), Go = ["title"], jo = ["width", "height"], Ho = /* @__PURE__ */ q({
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
      ])], 8, jo))
    ], 8, Go));
  }
}), io = /* @__PURE__ */ K(Ho, [["__scopeId", "data-v-6fc7f16d"]]), qo = { class: "header-left" }, Ko = {
  key: 0,
  class: "header-actions"
}, Yo = /* @__PURE__ */ q({
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
      class: te(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", qo, [
        p(Wo, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), E(io, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => c.$emit("info-click"))
        })) : u("", !0)
      ]),
      c.$slots.actions ? (o(), s("div", Ko, [
        fe(c.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Pe = /* @__PURE__ */ K(Yo, [["__scopeId", "data-v-55a62cd6"]]), Jo = {
  key: 0,
  class: "section-title-count"
}, Qo = {
  key: 1,
  class: "section-title-icon"
}, Xo = /* @__PURE__ */ q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), E(Ht(`h${t.level}`), {
      class: te(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, {
      default: i(() => [
        fe(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Jo, "(" + a(t.count) + ")", 1)) : u("", !0),
        t.clickable ? (o(), s("span", Qo, a(t.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), He = /* @__PURE__ */ K(Xo, [["__scopeId", "data-v-559361eb"]]), Zo = { class: "status-grid" }, es = { class: "status-grid__columns" }, ts = { class: "status-grid__column" }, os = { class: "status-grid__title" }, ss = { class: "status-grid__column status-grid__column--right" }, ns = { class: "status-grid__title" }, as = {
  key: 0,
  class: "status-grid__footer"
}, ls = /* @__PURE__ */ q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (o(), s("div", Zo, [
      e("div", es, [
        e("div", ts, [
          e("h4", os, a(t.leftTitle), 1),
          fe(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", ss, [
          e("h4", ns, a(t.rightTitle), 1),
          fe(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (o(), s("div", as, [
        fe(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), is = /* @__PURE__ */ K(ls, [["__scopeId", "data-v-73b7ba3f"]]), rs = {
  key: 0,
  class: "status-item__icon"
}, ds = {
  key: 1,
  class: "status-item__count"
}, cs = { class: "status-item__label" }, us = /* @__PURE__ */ q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = P(() => `status-item--${c.variant}`);
    return (r, h) => (o(), s("div", {
      class: te(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", rs, a(t.icon), 1)) : u("", !0),
      t.count !== void 0 ? (o(), s("span", ds, a(t.count), 1)) : u("", !0),
      e("span", cs, a(t.label), 1)
    ], 2));
  }
}), Qe = /* @__PURE__ */ K(us, [["__scopeId", "data-v-6f929183"]]), ms = { class: "issue-card__header" }, vs = { class: "issue-card__icon" }, fs = { class: "issue-card__title" }, gs = {
  key: 0,
  class: "issue-card__content"
}, ps = {
  key: 0,
  class: "issue-card__description"
}, hs = {
  key: 1,
  class: "issue-card__items"
}, ys = {
  key: 2,
  class: "issue-card__actions"
}, ws = /* @__PURE__ */ q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = P(() => `issue-card--${c.severity}`);
    return (r, h) => (o(), s("div", {
      class: te(["issue-card", n.value])
    }, [
      e("div", ms, [
        e("span", vs, a(t.icon), 1),
        e("h4", fs, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", gs, [
        t.description ? (o(), s("p", ps, a(t.description), 1)) : u("", !0),
        fe(r.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      t.items && t.items.length ? (o(), s("div", hs, [
        (o(!0), s(F, null, X(t.items, (f, v) => (o(), s("div", {
          key: v,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(f), 1)
        ]))), 128))
      ])) : u("", !0),
      r.$slots.actions ? (o(), s("div", ys, [
        fe(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ K(ws, [["__scopeId", "data-v-df6aa348"]]), ks = ["type", "disabled"], bs = {
  key: 0,
  class: "spinner"
}, _s = /* @__PURE__ */ q({
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
      class: te(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", bs)) : u("", !0),
      t.loading ? u("", !0) : fe(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, ks));
  }
}), J = /* @__PURE__ */ K(_s, [["__scopeId", "data-v-772abe47"]]), $s = { class: "empty-state" }, Cs = {
  key: 0,
  class: "empty-icon"
}, xs = { class: "empty-message" }, Ss = /* @__PURE__ */ q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (o(), s("div", $s, [
      t.icon ? (o(), s("div", Cs, a(t.icon), 1)) : u("", !0),
      e("p", xs, a(t.message), 1),
      t.actionLabel ? (o(), E(J, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("action"))
      }, {
        default: i(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Ye = /* @__PURE__ */ K(Ss, [["__scopeId", "data-v-4466284f"]]), Is = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: te(["detail-label"]),
      style: et({ minWidth: t.minWidth })
    }, [
      fe(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ K(Is, [["__scopeId", "data-v-75e9eeb8"]]), Es = /* @__PURE__ */ q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: te(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      fe(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ K(Es, [["__scopeId", "data-v-2f186e4c"]]), Ms = { class: "detail-row" }, Rs = /* @__PURE__ */ q({
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
    return (c, n) => (o(), s("div", Ms, [
      p(Gt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), E(jt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : fe(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), _e = /* @__PURE__ */ K(Rs, [["__scopeId", "data-v-ef15664a"]]), Ts = { class: "modal-header" }, Ls = { class: "modal-body" }, zs = { class: "status-section" }, Ns = {
  key: 0,
  class: "status-section"
}, Ds = { class: "section-header-row" }, Ps = {
  key: 0,
  class: "workflow-group"
}, Us = { class: "workflow-group-header" }, Os = { class: "workflow-group-title" }, Bs = { class: "workflow-list" }, Fs = { class: "workflow-name" }, As = { class: "workflow-issue" }, Vs = {
  key: 1,
  class: "workflow-group"
}, Ws = { class: "workflow-group-header" }, Gs = { class: "workflow-group-title" }, js = { class: "workflow-list" }, Hs = { class: "workflow-name" }, qs = { class: "workflow-issue" }, Ks = {
  key: 2,
  class: "workflow-group"
}, Ys = { class: "workflow-group-header" }, Js = { class: "workflow-group-title" }, Qs = { class: "workflow-list" }, Xs = { class: "workflow-name" }, Zs = {
  key: 3,
  class: "workflow-group"
}, en = { class: "workflow-group-header" }, tn = { class: "workflow-group-title" }, on = { class: "workflow-list" }, sn = { class: "workflow-name" }, nn = {
  key: 4,
  class: "workflow-group"
}, an = { class: "workflow-group-header" }, ln = { class: "workflow-group-title" }, rn = { class: "workflow-list" }, dn = { class: "workflow-name" }, cn = {
  key: 5,
  class: "workflow-group"
}, un = { class: "workflow-group-title" }, mn = { class: "expand-icon" }, vn = {
  key: 0,
  class: "workflow-list"
}, fn = { class: "workflow-name" }, gn = {
  key: 1,
  class: "status-section"
}, pn = {
  key: 0,
  class: "change-group"
}, hn = { class: "change-group-header" }, yn = { class: "change-group-title" }, wn = { class: "change-list" }, kn = { class: "node-name" }, bn = {
  key: 0,
  class: "dev-badge"
}, _n = {
  key: 1,
  class: "change-group"
}, $n = { class: "change-group-header" }, Cn = { class: "change-group-title" }, xn = { class: "change-list" }, Sn = { class: "node-name" }, In = {
  key: 0,
  class: "dev-badge"
}, En = {
  key: 2,
  class: "change-group"
}, Mn = { class: "change-list" }, Rn = { class: "change-item" }, Tn = { class: "node-name" }, Ln = {
  key: 3,
  class: "change-group"
}, zn = {
  key: 2,
  class: "status-section"
}, Nn = { class: "section-header-row" }, Dn = {
  key: 0,
  class: "drift-item"
}, Pn = { class: "drift-list" }, Un = {
  key: 0,
  class: "drift-list-more"
}, On = {
  key: 1,
  class: "drift-item"
}, Bn = { class: "drift-list" }, Fn = {
  key: 0,
  class: "drift-list-more"
}, An = {
  key: 2,
  class: "drift-item"
}, Vn = {
  key: 3,
  class: "drift-item"
}, Wn = {
  key: 3,
  class: "status-section"
}, Gn = { class: "info-box" }, jn = { class: "drift-list" }, Hn = {
  key: 0,
  class: "drift-list-more"
}, qn = {
  key: 4,
  class: "status-section"
}, Kn = { class: "warning-box" }, Yn = {
  key: 5,
  class: "empty-state-inline"
}, Jn = { class: "modal-actions" }, Qn = /* @__PURE__ */ q({
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
    }), wt(() => c.show, (R, _) => {
      console.log("StatusDetailModal show prop changed from", _, "to", R);
    }, { immediate: !0 });
    const r = P(() => {
      var R, _, N;
      return ((N = (_ = (R = c.status) == null ? void 0 : R.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : N.filter(
        ($) => $.status === "broken" && $.sync_state === "synced"
      )) || [];
    }), h = P(() => {
      var R, _, N;
      return ((N = (_ = (R = c.status) == null ? void 0 : R.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : N.filter(
        ($) => $.status === "broken" && $.sync_state !== "synced"
      )) || [];
    }), f = P(() => {
      var R, _, N;
      return ((N = (_ = (R = c.status) == null ? void 0 : R.workflows) == null ? void 0 : _.synced) == null ? void 0 : N.filter(($) => {
        var k, B, M;
        const x = (M = (B = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : M.find((L) => L.name === $);
        return !x || x.status !== "broken";
      })) || [];
    }), v = P(() => {
      var R, _, N, $, x;
      return (R = c.status) != null && R.workflows ? (((_ = c.status.workflows.new) == null ? void 0 : _.length) ?? 0) > 0 || (((N = c.status.workflows.modified) == null ? void 0 : N.length) ?? 0) > 0 || ((($ = c.status.workflows.deleted) == null ? void 0 : $.length) ?? 0) > 0 || (((x = c.status.workflows.synced) == null ? void 0 : x.length) ?? 0) > 0 : !1;
    }), m = P(() => {
      var _, N, $;
      const R = (_ = c.status) == null ? void 0 : _.git_changes;
      return R ? (((N = R.nodes_added) == null ? void 0 : N.length) ?? 0) > 0 || ((($ = R.nodes_removed) == null ? void 0 : $.length) ?? 0) > 0 || R.workflow_changes || R.has_other_changes : !1;
    }), l = P(() => {
      var R, _, N, $, x, k;
      return !v.value && !m.value && ((_ = (R = c.status) == null ? void 0 : R.comparison) == null ? void 0 : _.is_synced) && (((N = c.status) == null ? void 0 : N.missing_models_count) ?? 0) === 0 && (((k = (x = ($ = c.status) == null ? void 0 : $.comparison) == null ? void 0 : x.disabled_nodes) == null ? void 0 : k.length) ?? 0) === 0;
    }), g = P(() => {
      var _, N;
      const R = (N = (_ = c.status) == null ? void 0 : _.git_changes) == null ? void 0 : N.workflow_changes;
      return R ? typeof R == "number" ? R : Object.keys(R).length : 0;
    });
    function w(R) {
      return typeof R == "string" ? R : R.name;
    }
    function d(R) {
      return typeof R == "object" && R.is_development === !0;
    }
    return (R, _) => {
      var N, $, x, k, B, M, L, H, G, Y, V, D, T, O, A, ae, ie, Q, Z, U, b, oe;
      return o(), E(Ee, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[6] || (_[6] = (ee) => R.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[5] || (_[5] = be(() => {
            }, ["stop"]))
          }, [
            e("div", Ts, [
              _[7] || (_[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (ee) => R.$emit("close"))
              }, "✕")
            ]),
            e("div", Ls, [
              e("div", zs, [
                p(He, { level: "4" }, {
                  default: i(() => [..._[8] || (_[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                p(_e, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              v.value ? (o(), s("div", Ns, [
                e("div", Ds, [
                  p(He, { level: "4" }, {
                    default: i(() => [..._[9] || (_[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[1] || (_[1] = (ee) => R.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Ps, [
                  e("div", Us, [
                    _[10] || (_[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Os, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", Bs, [
                    (o(!0), s(F, null, X(r.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Fs, a(ee.name), 1),
                      e("span", As, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                h.value.length ? (o(), s("div", Vs, [
                  e("div", Ws, [
                    _[11] || (_[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Gs, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", js, [
                    (o(!0), s(F, null, X(h.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Hs, a(ee.name), 1),
                      e("span", qs, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                ($ = (N = t.status.workflows) == null ? void 0 : N.new) != null && $.length ? (o(), s("div", Ks, [
                  e("div", Ys, [
                    _[12] || (_[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Js, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Qs, [
                    (o(!0), s(F, null, X(t.status.workflows.new, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (k = (x = t.status.workflows) == null ? void 0 : x.modified) != null && k.length ? (o(), s("div", Zs, [
                  e("div", en, [
                    _[13] || (_[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", tn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), s(F, null, X(t.status.workflows.modified, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", sn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (M = (B = t.status.workflows) == null ? void 0 : B.deleted) != null && M.length ? (o(), s("div", nn, [
                  e("div", an, [
                    _[14] || (_[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", ln, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", rn, [
                    (o(!0), s(F, null, X(t.status.workflows.deleted, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", dn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                f.value.length ? (o(), s("div", cn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: _[2] || (_[2] = (ee) => n.value = !n.value)
                  }, [
                    _[15] || (_[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", un, "SYNCED (" + a(f.value.length) + ")", 1),
                    e("span", mn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", vn, [
                    (o(!0), s(F, null, X(f.value, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", fn, a(ee), 1)
                    ]))), 128))
                  ])) : u("", !0)
                ])) : u("", !0)
              ])) : u("", !0),
              m.value ? (o(), s("div", gn, [
                p(He, { level: "4" }, {
                  default: i(() => [..._[16] || (_[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (L = t.status.git_changes) == null ? void 0 : L.nodes_added) != null && H.length ? (o(), s("div", pn, [
                  e("div", hn, [
                    _[17] || (_[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", yn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", wn, [
                    (o(!0), s(F, null, X(t.status.git_changes.nodes_added, (ee) => (o(), s("div", {
                      key: w(ee),
                      class: "change-item"
                    }, [
                      e("span", kn, a(w(ee)), 1),
                      d(ee) ? (o(), s("span", bn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (Y = (G = t.status.git_changes) == null ? void 0 : G.nodes_removed) != null && Y.length ? (o(), s("div", _n, [
                  e("div", $n, [
                    _[18] || (_[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Cn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", xn, [
                    (o(!0), s(F, null, X(t.status.git_changes.nodes_removed, (ee) => (o(), s("div", {
                      key: w(ee),
                      class: "change-item"
                    }, [
                      e("span", Sn, a(w(ee)), 1),
                      d(ee) ? (o(), s("span", In, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (V = t.status.git_changes) != null && V.workflow_changes ? (o(), s("div", En, [
                  _[19] || (_[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Mn, [
                    e("div", Rn, [
                      e("span", Tn, a(g.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : u("", !0),
                (D = t.status.git_changes) != null && D.has_other_changes ? (o(), s("div", Ln, [..._[20] || (_[20] = [
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
              (T = t.status.comparison) != null && T.is_synced ? u("", !0) : (o(), s("div", zn, [
                e("div", Nn, [
                  p(He, { level: "4" }, {
                    default: i(() => [..._[21] || (_[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[3] || (_[3] = (ee) => R.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                _[22] || (_[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (A = (O = t.status.comparison) == null ? void 0 : O.missing_nodes) != null && A.length ? (o(), s("div", Dn, [
                  p(_e, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Pn, [
                    (o(!0), s(F, null, X(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", Un, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (ie = (ae = t.status.comparison) == null ? void 0 : ae.extra_nodes) != null && ie.length ? (o(), s("div", On, [
                  p(_e, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Bn, [
                    (o(!0), s(F, null, X(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Fn, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (Z = (Q = t.status.comparison) == null ? void 0 : Q.version_mismatches) != null && Z.length ? (o(), s("div", An, [
                  p(_e, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : u("", !0),
                (U = t.status.comparison) != null && U.packages_in_sync ? u("", !0) : (o(), s("div", Vn, [
                  p(_e, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (oe = (b = t.status.comparison) == null ? void 0 : b.disabled_nodes) != null && oe.length ? (o(), s("div", Wn, [
                p(He, { level: "4" }, {
                  default: i(() => [..._[23] || (_[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Gn, [
                  _[24] || (_[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", jn, [
                  (o(!0), s(F, null, X(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), s("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + a(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", Hn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : u("", !0)
                ])
              ])) : u("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", qn, [
                p(He, { level: "4" }, {
                  default: i(() => [..._[25] || (_[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Kn, [
                  _[26] || (_[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                _[27] || (_[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : u("", !0),
              l.value ? (o(), s("div", Yn, [..._[28] || (_[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : u("", !0)
            ]),
            e("div", Jn, [
              p(J, {
                variant: "secondary",
                onClick: _[4] || (_[4] = (ee) => R.$emit("close"))
              }, {
                default: i(() => [..._[29] || (_[29] = [
                  y(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), Xn = /* @__PURE__ */ K(Qn, [["__scopeId", "data-v-c67eed17"]]), Zn = { class: "health-section-header" }, ea = { class: "suggestions-content" }, ta = { class: "suggestions-text" }, oa = { style: { "margin-top": "var(--cg-space-3)" } }, sa = {
  key: 1,
  class: "no-issues-text"
}, na = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models"],
  setup(t, { expose: c, emit: n }) {
    const r = t, h = C(!1), f = C(!1);
    function v() {
      h.value = !0;
    }
    function m() {
      h.value = !1, g("view-workflows");
    }
    function l() {
      h.value = !1, g("view-nodes");
    }
    const g = n, w = C(!1), d = P(() => {
      const O = r.status.workflows.analyzed || [], A = O.filter(
        (ae) => ae.unresolved_models_count > 0 || ae.ambiguous_models_count > 0
      );
      return A.length === 0 && r.status.missing_models_count > 0 ? O.filter((ae) => ae.sync_state === "synced") : A;
    });
    function R() {
      const O = d.value;
      O.length !== 0 && (w.value = !0, g("repair-missing-models", O.map((A) => A.name)));
    }
    function _() {
      w.value = !1;
    }
    c({ resetRepairingState: _ });
    const N = P(() => r.status.workflows.new.length > 0 || r.status.workflows.modified.length > 0 || r.status.workflows.deleted.length > 0), $ = P(() => r.status.has_changes), x = P(() => {
      const O = r.status.git_changes;
      return O.nodes_added.length > 0 || O.nodes_removed.length > 0 || O.workflow_changes;
    }), k = P(() => r.status.has_changes || N.value), B = P(() => Object.keys(r.status.git_changes.workflow_changes_detail).length), M = P(() => r.status.git_changes.has_other_changes), L = P(() => {
      var O;
      return ((O = r.status.workflows.analyzed) == null ? void 0 : O.filter((A) => A.status === "broken")) || [];
    }), H = P(() => {
      var O;
      return ((O = r.status.workflows.analyzed) == null ? void 0 : O.filter(
        (A) => A.has_path_sync_issues && !A.has_issues
      )) || [];
    }), G = P(() => L.value.length > 0), Y = P(() => G.value || H.value.length > 0 || r.status.missing_models_count > 0 || !r.status.comparison.is_synced), V = P(() => {
      const O = [];
      return r.status.workflows.new.length > 0 && O.push(`${r.status.workflows.new.length} new`), r.status.workflows.modified.length > 0 && O.push(`${r.status.workflows.modified.length} modified`), r.status.workflows.deleted.length > 0 && O.push(`${r.status.workflows.deleted.length} deleted`), O.length > 0 ? `${O.join(", ")} workflow${O.length === 1 && !O[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), D = P(() => {
      var ae, ie;
      const O = [], A = r.status.comparison;
      return (ae = A.missing_nodes) != null && ae.length && O.push(`${A.missing_nodes.length} missing node${A.missing_nodes.length === 1 ? "" : "s"}`), (ie = A.extra_nodes) != null && ie.length && O.push(`${A.extra_nodes.length} untracked node${A.extra_nodes.length === 1 ? "" : "s"}`), O.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${O.join(" and ")}.`;
    }), T = P(() => {
      var ae, ie;
      const O = [], A = r.status.comparison;
      return (ae = A.extra_nodes) != null && ae.length && (A.extra_nodes.slice(0, 3).forEach((Q) => {
        O.push(`Untracked: ${Q}`);
      }), A.extra_nodes.length > 3 && O.push(`...and ${A.extra_nodes.length - 3} more untracked`)), (ie = A.missing_nodes) != null && ie.length && (A.missing_nodes.slice(0, 3).forEach((Q) => {
        O.push(`Missing: ${Q}`);
      }), A.missing_nodes.length > 3 && O.push(`...and ${A.missing_nodes.length - 3} more missing`)), O;
    });
    return (O, A) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: A[1] || (A[1] = (ae) => f.value = !0),
            onMouseleave: A[2] || (A[2] = (ae) => f.value = !1)
          }, [
            e("div", Zn, [
              p(He, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...A[9] || (A[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              p(Mo, { name: "fade" }, {
                default: i(() => [
                  f.value ? (o(), E(J, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...A[10] || (A[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : u("", !0)
                ]),
                _: 1
              })
            ]),
            p(is, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Rt({
              left: i(() => [
                t.status.workflows.new.length ? (o(), E(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.modified.length ? (o(), E(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.deleted.length ? (o(), E(Qe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : u("", !0),
                p(Qe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: N.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (o(), E(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), E(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.workflow_changes ? (o(), E(Qe, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : u("", !0),
                M.value ? (o(), E(Qe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : u("", !0),
                $.value && !x.value && !M.value ? (o(), E(Qe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : u("", !0),
                $.value ? u("", !0) : (o(), E(Qe, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              k.value ? {
                name: "footer",
                fn: i(() => [
                  A[12] || (A[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", ea, [
                    e("span", ta, a(V.value), 1),
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: A[0] || (A[0] = (ae) => O.$emit("commit-changes"))
                    }, {
                      default: i(() => [...A[11] || (A[11] = [
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
          t.status.is_detached_head ? (o(), E(gt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              p(J, {
                variant: "primary",
                size: "sm",
                onClick: A[3] || (A[3] = (ae) => O.$emit("create-branch"))
              }, {
                default: i(() => [...A[13] || (A[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : u("", !0),
          e("div", oa, [
            p(He, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...A[14] || (A[14] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            Y.value ? (o(), s(F, { key: 0 }, [
              L.value.length > 0 ? (o(), E(gt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${L.value.length} workflow${L.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: L.value.map((ae) => `${ae.name} — ${ae.issue_summary}`)
              }, {
                actions: i(() => [
                  p(J, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[4] || (A[4] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...A[15] || (A[15] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : u("", !0),
              H.value.length > 0 ? (o(), E(gt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${H.value.length} workflow${H.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: H.value.map((ae) => `${ae.name} — ${ae.models_needing_path_sync_count} model path${ae.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  p(J, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[5] || (A[5] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...A[16] || (A[16] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : u("", !0),
              t.status.missing_models_count > 0 && !G.value ? (o(), E(gt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: i(() => [
                  p(J, {
                    variant: "primary",
                    size: "sm",
                    disabled: w.value,
                    onClick: R
                  }, {
                    default: i(() => [
                      y(a(w.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  p(J, {
                    variant: "secondary",
                    size: "sm",
                    onClick: A[6] || (A[6] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...A[17] || (A[17] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : u("", !0),
              t.status.comparison.is_synced ? u("", !0) : (o(), E(gt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: D.value,
                items: T.value
              }, {
                actions: i(() => [
                  p(J, {
                    variant: "secondary",
                    size: "sm",
                    onClick: v
                  }, {
                    default: i(() => [...A[18] || (A[18] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  p(J, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[7] || (A[7] = (ae) => O.$emit("view-nodes"))
                  }, {
                    default: i(() => [...A[19] || (A[19] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : k.value ? (o(), s("span", sa, "No issues")) : (o(), E(Ye, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      p(Xn, {
        show: h.value,
        status: t.status,
        onClose: A[8] || (A[8] = (ae) => h.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: l
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), aa = /* @__PURE__ */ K(na, [["__scopeId", "data-v-5f863725"]]), la = ["type", "value", "placeholder", "disabled"], ia = /* @__PURE__ */ q({
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
    const r = t, h = n, f = C(null);
    function v(m) {
      const l = m.target.value;
      h("update:modelValue", l);
    }
    return Se(() => {
      r.autoFocus && f.value && f.value.focus();
    }), c({
      focus: () => {
        var m;
        return (m = f.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = f.value) == null ? void 0 : m.blur();
      }
    }), (m, l) => (o(), s("input", {
      ref_key: "inputRef",
      ref: f,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: te(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: v,
      onKeyup: [
        l[0] || (l[0] = rt((g) => m.$emit("enter"), ["enter"])),
        l[1] || (l[1] = rt((g) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (g) => m.$emit("focus")),
      onBlur: l[3] || (l[3] = (g) => m.$emit("blur"))
    }, null, 42, la));
  }
}), Pt = /* @__PURE__ */ K(ia, [["__scopeId", "data-v-0380d08f"]]), ra = { class: "branch-create-form" }, da = { class: "form-actions" }, ca = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, r = C(""), h = P(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function f() {
      h.value && (n("create", r.value.trim()), r.value = "");
    }
    function v() {
      r.value = "", n("cancel");
    }
    return (m, l) => (o(), s("div", ra, [
      p(Pt, {
        modelValue: r.value,
        "onUpdate:modelValue": l[0] || (l[0] = (g) => r.value = g),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: f,
        onEscape: v
      }, null, 8, ["modelValue"]),
      e("div", da, [
        p(J, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: f
        }, {
          default: i(() => [...l[1] || (l[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        p(J, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: i(() => [...l[2] || (l[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ua = /* @__PURE__ */ K(ca, [["__scopeId", "data-v-7c500394"]]), ma = { class: "branch-list-item__indicator" }, va = { class: "branch-list-item__name" }, fa = {
  key: 0,
  class: "branch-list-item__actions"
}, ga = {
  key: 0,
  class: "branch-list-item__current-label"
}, pa = /* @__PURE__ */ q({
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
      class: te(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, [
      e("span", ma, a(t.isCurrent ? "●" : "○"), 1),
      e("span", va, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), s("div", fa, [
        fe(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", ga, " current ")) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), ha = /* @__PURE__ */ K(pa, [["__scopeId", "data-v-c6581a24"]]), ya = {
  key: 2,
  class: "branch-list"
}, wa = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, r = C(!1);
    function h(v) {
      n("create", v), f();
    }
    function f() {
      r.value = !1;
    }
    return (v, m) => (o(), E(De, null, {
      header: i(() => [
        p(Pe, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? u("", !0) : (o(), E(J, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (l) => r.value = !0)
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
        r.value ? (o(), E(ua, {
          key: 0,
          onCreate: h,
          onCancel: f
        })) : u("", !0),
        t.branches.length === 0 ? (o(), E(Ye, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", ya, [
          (o(!0), s(F, null, X(t.branches, (l) => (o(), E(ha, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? u("", !0) : (o(), E(J, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (g) => v.$emit("delete", l.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? u("", !0) : (o(), E(J, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (g) => v.$emit("switch", l.name)
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
}), ka = /* @__PURE__ */ K(wa, [["__scopeId", "data-v-86784ddd"]]), ba = { class: "commit-list" }, _a = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (o(), s("div", ba, [
      fe(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), $a = /* @__PURE__ */ K(_a, [["__scopeId", "data-v-8c5ee761"]]), Ca = { class: "commit-hash" }, xa = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = P(() => c.hash.slice(0, c.length));
    return (r, h) => (o(), s("span", Ca, a(n.value), 1));
  }
}), ro = /* @__PURE__ */ K(xa, [["__scopeId", "data-v-7c333cc6"]]), Sa = { class: "commit-message" }, Ia = { class: "commit-date" }, Ea = /* @__PURE__ */ q({
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
    return (f, v) => (o(), s("div", {
      class: te(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      p(ro, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Sa, a(t.message), 1),
      e("span", Ia, a(t.relativeDate), 1),
      f.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = be(() => {
        }, ["stop"]))
      }, [
        fe(f.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ K(Ea, [["__scopeId", "data-v-dd7c621b"]]), Ra = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (o(), E(De, null, {
      header: i(() => [
        p(Pe, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), E(Ye, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), E($a, { key: 1 }, {
          default: i(() => [
            (o(!0), s(F, null, X(t.commits, (r) => (o(), E(Ma, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (h) => c.$emit("select", r)
            }, {
              actions: i(() => [
                p(J, {
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
}), Ta = /* @__PURE__ */ K(Ra, [["__scopeId", "data-v-981c3c64"]]), V0 = [
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
], W0 = {
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
}, La = [
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
], G0 = [
  ...La,
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
function _t() {
  return !1;
}
function Te() {
  const t = C(!1), c = C(null);
  async function n(S, I) {
    var de;
    if (!((de = window.app) != null && de.api))
      throw new Error("ComfyUI API not available");
    const W = await window.app.api.fetchApi(S, I);
    if (!W.ok) {
      const Ce = await W.json().catch(() => ({}));
      throw new Error(Ce.error || Ce.message || `Request failed: ${W.status}`);
    }
    return W.json();
  }
  async function r(S = !1) {
    return n(S ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function h(S, I = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: S, allow_issues: I })
    });
  }
  async function f(S = 10, I = 0) {
    return n(`/v2/comfygit/log?limit=${S}&offset=${I}`);
  }
  async function v(S) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: S })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function l(S) {
    return n(`/v2/comfygit/commit/${S}`);
  }
  async function g(S, I = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: S, force: I })
    });
  }
  async function w(S, I = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: S, start_point: I })
    });
  }
  async function d(S, I = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: S, force: I })
    });
  }
  async function R(S, I = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(S)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: I })
    });
  }
  async function _() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const S = await r();
        return [{
          name: S.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + S.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: S.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: S.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function N(S) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: S })
    });
  }
  async function $() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function x(S) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(S)
    });
  }
  async function k() {
    return n("/v2/workspace/environments/create_status");
  }
  async function B(S = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${S}`);
  }
  async function M(S) {
    return n(`/v2/workspace/environments/${S}`, {
      method: "DELETE"
    });
  }
  async function L(S = !1) {
    try {
      return n(S ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const I = await r(S), W = [];
      return I.workflows.new.forEach((de) => {
        W.push({ name: de, status: "new", missing_nodes: 0, missing_models: 0, path: de });
      }), I.workflows.modified.forEach((de) => {
        W.push({ name: de, status: "modified", missing_nodes: 0, missing_models: 0, path: de });
      }), I.workflows.synced.forEach((de) => {
        W.push({ name: de, status: "synced", missing_nodes: 0, missing_models: 0, path: de });
      }), W;
    }
  }
  async function H(S) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(S)}/details`);
  }
  async function G(S) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(S)}/resolve`, {
      method: "POST"
    });
  }
  async function Y(S, I, W) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(S)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: I, install_models: W })
    });
  }
  async function V(S, I, W) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(S)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: I, importance: W })
    });
  }
  async function D() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function T() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function O(S) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(S)}`);
  }
  async function A(S) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: S })
    });
  }
  async function ae(S, I) {
    return n(`/v2/workspace/models/${S}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: I })
    });
  }
  async function ie(S, I) {
    return n(`/v2/workspace/models/${S}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: I })
    });
  }
  async function Q(S) {
    return n(`/v2/workspace/models/${S}`, {
      method: "DELETE"
    });
  }
  async function Z(S) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(S)
    });
  }
  async function U() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function b() {
    return n("/v2/workspace/models/directory");
  }
  async function oe(S) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: S })
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
  async function $e(S) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(S)
    });
  }
  async function we(S, I) {
    try {
      const W = new URLSearchParams();
      return S && W.append("level", S), I && W.append("lines", I.toString()), n(`/v2/comfygit/debug/logs?${W}`);
    } catch {
      return [];
    }
  }
  async function Me(S, I) {
    try {
      const W = new URLSearchParams();
      return S && W.append("level", S), I && W.append("lines", I.toString()), n(`/v2/workspace/debug/logs?${W}`);
    } catch {
      return [];
    }
  }
  async function Ue() {
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
  async function ce(S) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(S)}/track-dev`, {
      method: "POST"
    });
  }
  async function Oe(S) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(S)}/install`, {
      method: "POST"
    });
  }
  async function he(S) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(S)}/update`, {
      method: "POST"
    });
  }
  async function Re(S) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(S)}`, {
      method: "DELETE"
    });
  }
  async function Ae() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Je(S, I) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: S, url: I })
    });
  }
  async function ve(S) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}`, {
      method: "DELETE"
    });
  }
  async function Ve(S, I, W) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: I, push_url: W })
    });
  }
  async function We(S) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}/fetch`, {
      method: "POST"
    });
  }
  async function Ge(S) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}/status`);
    } catch {
      return null;
    }
  }
  async function dt(S = "skip", I = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: S,
        remove_extra_nodes: I
      })
    });
  }
  async function me(S, I) {
    const W = I ? `/v2/comfygit/remotes/${encodeURIComponent(S)}/pull-preview?branch=${encodeURIComponent(I)}` : `/v2/comfygit/remotes/${encodeURIComponent(S)}/pull-preview`;
    return n(W);
  }
  async function Le(S, I = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: I.modelStrategy || "skip",
        force: I.force || !1,
        resolutions: I.resolutions
      })
    });
  }
  async function ct(S, I) {
    const W = I ? `/v2/comfygit/remotes/${encodeURIComponent(S)}/push-preview?branch=${encodeURIComponent(I)}` : `/v2/comfygit/remotes/${encodeURIComponent(S)}/push-preview`;
    return n(W);
  }
  async function st(S, I = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: I.force || !1 })
    });
  }
  async function xe(S, I) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(S)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: I })
    });
  }
  async function ut(S) {
    const I = {
      success: 0,
      failed: []
    };
    for (const W of S)
      try {
        await G(W), I.success++;
      } catch (de) {
        I.failed.push({
          name: W,
          error: de instanceof Error ? de.message : "Unknown error"
        });
      }
    return I;
  }
  return {
    isLoading: t,
    error: c,
    getStatus: r,
    commit: h,
    getHistory: f,
    exportEnv: v,
    // Git Operations
    getBranches: m,
    getCommitDetail: l,
    checkout: g,
    createBranch: w,
    switchBranch: d,
    deleteBranch: R,
    // Environment Management
    getEnvironments: _,
    switchEnvironment: N,
    getSwitchProgress: $,
    createEnvironment: x,
    getCreateProgress: k,
    getComfyUIReleases: B,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: L,
    getWorkflowDetails: H,
    resolveWorkflow: G,
    installWorkflowDeps: Y,
    setModelImportance: V,
    // Model Management
    getEnvironmentModels: D,
    getWorkspaceModels: T,
    getModelDetails: O,
    openFileLocation: A,
    addModelSource: ae,
    removeModelSource: ie,
    deleteModel: Q,
    downloadModel: Z,
    scanWorkspaceModels: U,
    getModelsDirectory: b,
    setModelsDirectory: oe,
    // Settings
    getConfig: ee,
    updateConfig: $e,
    // Debug/Logs
    getEnvironmentLogs: we,
    getWorkspaceLogs: Me,
    // Node Management
    getNodes: Ue,
    trackNodeAsDev: ce,
    installNode: Oe,
    updateNode: he,
    uninstallNode: Re,
    // Git Remotes
    getRemotes: Ae,
    addRemote: Je,
    removeRemote: ve,
    updateRemoteUrl: Ve,
    fetchRemote: We,
    getRemoteSyncStatus: Ge,
    // Push/Pull
    getPullPreview: me,
    pullFromRemote: Le,
    getPushPreview: ct,
    pushToRemote: st,
    validateMerge: xe,
    // Environment Sync
    syncEnvironmentManually: dt,
    // Workflow Repair
    repairWorkflowModels: ut
  };
}
async function $t(t, c = {}, n = 5e3) {
  const r = new AbortController(), h = setTimeout(() => r.abort(), n);
  try {
    const f = await fetch(t, {
      ...c,
      signal: r.signal
    });
    return clearTimeout(h), f;
  } catch (f) {
    throw clearTimeout(h), f.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : f;
  }
}
function co() {
  const t = C(null);
  async function c() {
    try {
      const v = await $t(
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
  async function n() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const v = await $t(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Health check failed");
      return await v.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const v = await $t(
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
  async function h() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await $t(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function f() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await $t(
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
    kill: f
  };
}
const za = { class: "base-modal-header" }, Na = {
  key: 0,
  class: "base-modal-title"
}, Da = { class: "base-modal-body" }, Pa = {
  key: 0,
  class: "base-modal-loading"
}, Ua = {
  key: 1,
  class: "base-modal-error"
}, Oa = {
  key: 0,
  class: "base-modal-footer"
}, Ba = /* @__PURE__ */ q({
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
    function f(v) {
      v.key === "Escape" && r("close");
    }
    return Se(() => {
      document.addEventListener("keydown", f), document.body.style.overflow = "hidden";
    }), Ro(() => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    }), (v, m) => (o(), E(Ee, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: te(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", za, [
            fe(v.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", Na, a(t.title), 1)) : u("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (l) => v.$emit("close"))
            }, [...m[2] || (m[2] = [
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
          e("div", Da, [
            t.loading ? (o(), s("div", Pa, "Loading...")) : t.error ? (o(), s("div", Ua, a(t.error), 1)) : fe(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (o(), s("div", Oa, [
            fe(v.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ K(Ba, [["__scopeId", "data-v-2125a0e6"]]), Fa = ["type", "disabled"], Aa = {
  key: 0,
  class: "spinner"
}, Va = /* @__PURE__ */ q({
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
      class: te(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Aa)) : u("", !0),
      fe(c.$slots, "default", {}, void 0, !0)
    ], 10, Fa));
  }
}), re = /* @__PURE__ */ K(Va, [["__scopeId", "data-v-f3452606"]]), Wa = {
  key: 0,
  class: "base-title-count"
}, Ga = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (o(), E(Ht(`h${t.level}`), {
      class: te(["base-title", t.variant])
    }, {
      default: i(() => [
        fe(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Wa, "(" + a(t.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), It = /* @__PURE__ */ K(Ga, [["__scopeId", "data-v-5a01561d"]]), ja = ["value", "disabled"], Ha = {
  key: 0,
  value: "",
  disabled: ""
}, qa = ["value"], Ka = {
  key: 0,
  class: "base-select-error"
}, Ya = /* @__PURE__ */ q({
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
      class: te(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: te(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (f) => r.$emit("update:modelValue", f.target.value))
      }, [
        t.placeholder ? (o(), s("option", Ha, a(t.placeholder), 1)) : u("", !0),
        (o(!0), s(F, null, X(t.options, (f) => (o(), s("option", {
          key: c(f),
          value: c(f)
        }, a(n(f)), 9, qa))), 128))
      ], 42, ja),
      t.error ? (o(), s("span", Ka, a(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Ja = /* @__PURE__ */ K(Ya, [["__scopeId", "data-v-7436d745"]]), Qa = { class: "popover-header" }, Xa = { class: "popover-title" }, Za = { class: "popover-content" }, el = {
  key: 0,
  class: "popover-actions"
}, tl = /* @__PURE__ */ q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (o(), E(Ee, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: et({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", Qa, [
            e("h4", Xa, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Za, [
            fe(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), s("div", el, [
            fe(c.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), ot = /* @__PURE__ */ K(tl, [["__scopeId", "data-v-42815ace"]]), ol = { class: "detail-section" }, sl = {
  key: 0,
  class: "empty-message"
}, nl = { class: "model-header" }, al = { class: "model-name" }, ll = { class: "model-details" }, il = { class: "model-row" }, rl = { class: "model-row" }, dl = { class: "label" }, cl = {
  key: 0,
  class: "model-row model-row-nodes"
}, ul = { class: "node-list" }, ml = ["onClick"], vl = {
  key: 1,
  class: "model-row"
}, fl = { class: "value" }, gl = {
  key: 0,
  class: "model-actions"
}, pl = { class: "detail-section" }, hl = {
  key: 0,
  class: "empty-message"
}, yl = { class: "node-name" }, wl = {
  key: 0,
  class: "node-version"
}, kl = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, r = c, { getWorkflowDetails: h, setModelImportance: f, installWorkflowDeps: v } = Te(), m = C(null), l = C(!1), g = C(null), w = C(!1), d = C({}), R = C({}), _ = C(!1), N = C(/* @__PURE__ */ new Set()), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(D) {
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
    function k(D) {
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
    function B(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const T = D.hash || D.filename;
      return N.value.has(T) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function M(D) {
      return N.value.has(D);
    }
    function L(D) {
      N.value.has(D) ? N.value.delete(D) : N.value.add(D), N.value = new Set(N.value);
    }
    async function H() {
      l.value = !0, g.value = null;
      try {
        m.value = await h(n.workflowName);
      } catch (D) {
        g.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function G(D, T) {
      d.value[D] = T, w.value = !0;
    }
    async function Y() {
      if (!w.value) {
        r("close");
        return;
      }
      l.value = !0, g.value = null;
      try {
        for (const [D, T] of Object.entries(d.value))
          await f(n.workflowName, D, T);
        r("refresh"), r("close");
      } catch (D) {
        g.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function V(D) {
      R.value[D] = !0, g.value = null;
      try {
        await v(n.workflowName, !0, !1), await H();
      } catch (T) {
        g.value = T instanceof Error ? T.message : "Failed to install node";
      } finally {
        R.value[D] = !1;
      }
    }
    return Se(H), (D, T) => (o(), s(F, null, [
      p(tt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: g.value || void 0,
        onClose: T[5] || (T[5] = (O) => r("close"))
      }, {
        body: i(() => [
          m.value ? (o(), s(F, { key: 0 }, [
            e("section", ol, [
              p(It, { variant: "section" }, {
                default: i(() => [
                  y("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), s("div", sl, " No models used in this workflow ")) : u("", !0),
              (o(!0), s(F, null, X(m.value.models, (O) => (o(), s("div", {
                key: O.hash || O.filename,
                class: "model-card"
              }, [
                e("div", nl, [
                  T[7] || (T[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", al, a(O.filename), 1)
                ]),
                e("div", ll, [
                  e("div", il, [
                    T[8] || (T[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: te(["value", x(O.status)])
                    }, a(k(O.status)), 3)
                  ]),
                  e("div", rl, [
                    e("span", dl, [
                      T[9] || (T[9] = y(" Importance: ", -1)),
                      p(io, {
                        size: 14,
                        title: "About importance levels",
                        onClick: T[0] || (T[0] = (A) => _.value = !0)
                      })
                    ]),
                    p(Ja, {
                      "model-value": d.value[O.filename] || O.importance,
                      options: $,
                      "onUpdate:modelValue": (A) => G(O.filename, A)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  O.loaded_by && O.loaded_by.length > 0 ? (o(), s("div", cl, [
                    T[10] || (T[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", ul, [
                      (o(!0), s(F, null, X(B(O), (A, ae) => (o(), s("div", {
                        key: `${A.node_id}-${ae}`,
                        class: "node-reference"
                      }, a(A.node_type) + " (Node #" + a(A.node_id) + ") ", 1))), 128)),
                      O.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (A) => L(O.hash || O.filename)
                      }, a(M(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, ml)) : u("", !0)
                    ])
                  ])) : u("", !0),
                  O.size_mb ? (o(), s("div", vl, [
                    T[11] || (T[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", fl, a(O.size_mb) + " MB", 1)
                  ])) : u("", !0)
                ]),
                O.status !== "available" ? (o(), s("div", gl, [
                  O.status === "downloadable" ? (o(), E(re, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: T[1] || (T[1] = (A) => r("resolve"))
                  }, {
                    default: i(() => [...T[12] || (T[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : O.status === "path_mismatch" ? (o(), E(re, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: T[2] || (T[2] = (A) => r("resolve"))
                  }, {
                    default: i(() => [...T[13] || (T[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), E(re, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: T[3] || (T[3] = (A) => r("resolve"))
                  }, {
                    default: i(() => [...T[14] || (T[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : u("", !0)
              ]))), 128))
            ]),
            e("section", pl, [
              p(It, { variant: "section" }, {
                default: i(() => [
                  y("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), s("div", hl, " No custom nodes used in this workflow ")) : u("", !0),
              (o(!0), s(F, null, X(m.value.nodes, (O) => (o(), s("div", {
                key: O.name,
                class: "node-item"
              }, [
                e("span", {
                  class: te(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, a(O.status === "installed" ? "✓" : "✕"), 3),
                e("span", yl, a(O.name), 1),
                O.version ? (o(), s("span", wl, "v" + a(O.version), 1)) : u("", !0),
                O.status === "missing" ? (o(), E(re, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: R.value[O.name],
                  onClick: (A) => V(O.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...T[15] || (T[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : u("", !0)
              ]))), 128))
            ])
          ], 64)) : u("", !0)
        ]),
        footer: i(() => [
          p(re, {
            variant: "secondary",
            onClick: T[4] || (T[4] = (O) => r("close"))
          }, {
            default: i(() => [...T[16] || (T[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (o(), E(re, {
            key: 0,
            variant: "primary",
            onClick: Y
          }, {
            default: i(() => [...T[17] || (T[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      p(ot, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: T[6] || (T[6] = (O) => _.value = !1)
      }, {
        content: i(() => [...T[18] || (T[18] = [
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
}), bl = /* @__PURE__ */ K(kl, [["__scopeId", "data-v-0b14d32e"]]), pe = no({
  items: [],
  status: "idle"
});
let Xe = null;
function uo() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function At(t) {
  return pe.items.find((c) => c.id === t);
}
async function pt() {
  if (pe.status === "downloading") return;
  const t = pe.items.find((c) => c.status === "queued");
  if (!t) {
    pe.status = "idle";
    return;
  }
  pe.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await _l(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    pe.status = "idle", pt();
  }
}
async function _l(t) {
  return new Promise((c, n) => {
    Xe && (Xe.close(), Xe = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), h = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Xe = h;
    let f = Date.now(), v = 0, m = !1;
    h.onmessage = (l) => {
      try {
        const g = JSON.parse(l.data);
        switch (g.type) {
          case "progress":
            t.downloaded = g.downloaded || 0, t.size = g.total || t.size;
            const w = Date.now(), d = (w - f) / 1e3;
            if (d > 0.5) {
              const R = t.downloaded - v;
              if (t.speed = R / d, f = w, v = t.downloaded, t.speed > 0 && t.size > 0) {
                const _ = t.size - t.downloaded;
                t.eta = _ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, h.close(), Xe = null, c();
            break;
          case "error":
            m = !0, h.close(), Xe = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, h.onerror = () => {
      h.close(), Xe = null, m || n(new Error("Connection lost"));
    };
  });
}
async function $l() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (pe.items.some((h) => h.url === n.url && h.filename === n.filename))
        continue;
      const r = {
        id: uo(),
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
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Tt() {
  function t(x) {
    for (const k of x) {
      if (pe.items.some(
        (L) => L.url === k.url && L.targetPath === k.targetPath && ["queued", "downloading", "paused", "completed"].includes(L.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${k.filename}`);
        continue;
      }
      const M = {
        id: uo(),
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
      pe.items.push(M);
    }
    pe.status === "idle" && pt();
  }
  async function c(x) {
    const k = At(x);
    if (k) {
      if (k.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(k.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Xe && (Xe.close(), Xe = null), k.status = "failed", k.error = "Cancelled by user", pe.status = "idle", pt();
      } else if (k.status === "queued") {
        const B = pe.items.findIndex((M) => M.id === x);
        B >= 0 && pe.items.splice(B, 1);
      }
    }
  }
  function n(x) {
    const k = At(x);
    !k || k.status !== "failed" || (k.status = "queued", k.error = void 0, k.progress = 0, k.downloaded = 0, pe.status === "idle" && pt());
  }
  function r(x) {
    const k = At(x);
    !k || k.status !== "paused" || (k.status = "queued", pe.status === "idle" && pt());
  }
  function h() {
    const x = pe.items.filter((k) => k.status === "paused");
    for (const k of x)
      k.status = "queued";
    pe.status === "idle" && pt();
  }
  function f(x) {
    const k = pe.items.findIndex((B) => B.id === x);
    k >= 0 && ["completed", "failed", "paused"].includes(pe.items[k].status) && pe.items.splice(k, 1);
  }
  function v() {
    pe.items = pe.items.filter((x) => x.status !== "completed");
  }
  function m() {
    pe.items = pe.items.filter((x) => x.status !== "failed");
  }
  const l = P(
    () => pe.items.find((x) => x.status === "downloading")
  ), g = P(
    () => pe.items.filter((x) => x.status === "queued")
  ), w = P(
    () => pe.items.filter((x) => x.status === "completed")
  ), d = P(
    () => pe.items.filter((x) => x.status === "failed")
  ), R = P(
    () => pe.items.filter((x) => x.status === "paused")
  ), _ = P(() => pe.items.length > 0), N = P(
    () => pe.items.filter((x) => x.status === "queued" || x.status === "downloading").length
  ), $ = P(
    () => pe.items.some((x) => x.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: To(pe),
    // Computed
    currentDownload: l,
    queuedItems: g,
    completedItems: w,
    failedItems: d,
    pausedItems: R,
    hasItems: _,
    activeCount: N,
    hasPaused: $,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: h,
    removeItem: f,
    clearCompleted: v,
    clearFailed: m,
    loadPendingDownloads: $l
  };
}
function Cl() {
  const t = C(null), c = C(null), n = C([]), r = C([]), h = C(!1), f = C(null);
  async function v(B, M) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const L = await window.app.api.fetchApi(B, M);
    if (!L.ok) {
      const G = await L.json().catch(() => ({})), Y = G.error || G.message || `Request failed: ${L.status}`;
      throw new Error(Y);
    }
    return L.json();
  }
  async function m(B) {
    h.value = !0, f.value = null;
    try {
      let M;
      return _t() || (M = await v(
        `/v2/comfygit/workflow/${B}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = M, M;
    } catch (M) {
      const L = M instanceof Error ? M.message : "Unknown error occurred";
      throw f.value = L, M;
    } finally {
      h.value = !1;
    }
  }
  async function l(B, M, L, H) {
    h.value = !0, f.value = null;
    try {
      let G;
      if (!_t()) {
        const Y = Object.fromEntries(M), V = Object.fromEntries(L), D = H ? Array.from(H) : [];
        G = await v(
          `/v2/comfygit/workflow/${B}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: Y,
              model_choices: V,
              skipped_packages: D
            })
          }
        );
      }
      return c.value = G, G;
    } catch (G) {
      const Y = G instanceof Error ? G.message : "Unknown error occurred";
      throw f.value = Y, G;
    } finally {
      h.value = !1;
    }
  }
  async function g(B, M = 10) {
    h.value = !0, f.value = null;
    try {
      let L;
      return _t() || (L = await v(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: M })
        }
      )), n.value = L.results, L.results;
    } catch (L) {
      const H = L instanceof Error ? L.message : "Unknown error occurred";
      throw f.value = H, L;
    } finally {
      h.value = !1;
    }
  }
  async function w(B, M = 10) {
    h.value = !0, f.value = null;
    try {
      let L;
      return _t() || (L = await v(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: M })
        }
      )), r.value = L.results, L.results;
    } catch (L) {
      const H = L instanceof Error ? L.message : "Unknown error occurred";
      throw f.value = H, L;
    } finally {
      h.value = !1;
    }
  }
  const d = no({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function R() {
    d.phase = "idle", d.currentFile = void 0, d.currentFileIndex = void 0, d.totalFiles = void 0, d.bytesDownloaded = void 0, d.bytesTotal = void 0, d.completedFiles = [], d.nodesToInstall = [], d.nodesInstalled = [], d.installError = void 0, d.needsRestart = void 0, d.error = void 0, d.nodeInstallProgress = void 0;
  }
  async function _(B) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0, d.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return _t(), await N(B);
    } catch (M) {
      const L = M instanceof Error ? M.message : "Failed to install nodes";
      throw d.installError = L, M;
    }
  }
  async function N(B) {
    var L;
    const M = await v(
      `/v2/comfygit/workflow/${B}/install`,
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
      const H = new Map(((L = M.failed) == null ? void 0 : L.map((G) => [G.node_id, G.error])) || []);
      for (let G = 0; G < d.nodesToInstall.length; G++) {
        const Y = d.nodesToInstall[G], V = H.get(Y);
        d.nodeInstallProgress.completedNodes.push({
          node_id: Y,
          success: !V,
          error: V
        });
      }
    }
    return d.nodesInstalled = M.nodes_installed, d.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (d.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function $(B, M, L) {
    R(), d.phase = "resolving", f.value = null;
    const H = Object.fromEntries(M), G = Object.fromEntries(L);
    try {
      const Y = await fetch(`/v2/comfygit/workflow/${B}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: G
        })
      });
      if (!Y.ok)
        throw new Error(`Request failed: ${Y.status}`);
      if (!Y.body)
        throw new Error("No response body");
      const V = Y.body.getReader(), D = new TextDecoder();
      let T = "";
      for (; ; ) {
        const { done: O, value: A } = await V.read();
        if (O) break;
        T += D.decode(A, { stream: !0 });
        const ae = T.split(`

`);
        T = ae.pop() || "";
        for (const ie of ae) {
          if (!ie.trim()) continue;
          const Q = ie.split(`
`);
          let Z = "", U = "";
          for (const b of Q)
            b.startsWith("event: ") ? Z = b.slice(7) : b.startsWith("data: ") && (U = b.slice(6));
          if (U)
            try {
              const b = JSON.parse(U);
              x(Z, b);
            } catch (b) {
              console.warn("Failed to parse SSE event:", b);
            }
        }
      }
    } catch (Y) {
      const V = Y instanceof Error ? Y.message : "Unknown error occurred";
      throw f.value = V, d.error = V, d.phase = "error", Y;
    }
  }
  function x(B, M) {
    switch (B) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = M.total;
        break;
      case "file_start":
        d.currentFile = M.filename, d.currentFileIndex = M.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = M.downloaded, d.bytesTotal = M.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: M.filename,
          success: M.success,
          error: M.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = M.nodes_to_install || [], M.download_results && (d.completedFiles = M.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = M.message, d.phase = "error", f.value = M.message;
        break;
    }
  }
  function k(B, M) {
    const { addToQueue: L } = Tt(), H = M.filter((G) => G.url && G.target_path).map((G) => ({
      workflow: B,
      filename: G.filename,
      url: G.url,
      targetPath: G.target_path,
      size: G.size || 0,
      type: "model"
    }));
    return H.length > 0 && L(H), H.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: r,
    isLoading: h,
    error: f,
    progress: d,
    // Methods
    analyzeWorkflow: m,
    applyResolution: l,
    applyResolutionWithProgress: $,
    installNodes: _,
    searchNodes: g,
    searchModels: w,
    resetProgress: R,
    queueModelDownloads: k
  };
}
const xl = { class: "resolution-stepper" }, Sl = { class: "stepper-header" }, Il = ["onClick"], El = {
  key: 0,
  class: "step-icon"
}, Ml = {
  key: 1,
  class: "step-number"
}, Rl = { class: "step-label" }, Tl = {
  key: 0,
  class: "step-connector"
}, Ll = { class: "stepper-content" }, zl = /* @__PURE__ */ q({
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
    function h(g) {
      var w;
      if ((w = n.stepStats) != null && w[g]) {
        const d = n.stepStats[g];
        return d.total > 0 && d.resolved === d.total;
      }
      return n.completedSteps.includes(g);
    }
    function f(g) {
      var w;
      if ((w = n.stepStats) != null && w[g]) {
        const d = n.stepStats[g];
        return d.resolved > 0 && d.resolved < d.total;
      }
      return !1;
    }
    function v(g) {
      return h(g) ? "state-complete" : f(g) ? "state-partial" : "state-pending";
    }
    function m(g) {
      return !1;
    }
    function l(g) {
      r("step-change", g);
    }
    return (g, w) => (o(), s("div", xl, [
      e("div", Sl, [
        (o(!0), s(F, null, X(t.steps, (d, R) => (o(), s("div", {
          key: d.id,
          class: te(["step", {
            active: t.currentStep === d.id,
            completed: h(d.id),
            "in-progress": f(d.id),
            disabled: m(d.id)
          }]),
          onClick: (_) => l(d.id)
        }, [
          e("div", {
            class: te(["step-indicator", v(d.id)])
          }, [
            h(d.id) ? (o(), s("span", El, "✓")) : (o(), s("span", Ml, a(R + 1), 1))
          ], 2),
          e("div", Rl, a(d.label), 1),
          R < t.steps.length - 1 ? (o(), s("div", Tl)) : u("", !0)
        ], 10, Il))), 128))
      ]),
      e("div", Ll, [
        fe(g.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Nl = /* @__PURE__ */ K(zl, [["__scopeId", "data-v-2a7b3af8"]]), Dl = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = P(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), r = P(() => `confidence-${n.value}`), h = P(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (f, v) => (o(), s("span", {
      class: te(["confidence-badge", r.value, t.size])
    }, a(h.value), 3));
  }
}), Yt = /* @__PURE__ */ K(Dl, [["__scopeId", "data-v-17ec4b80"]]), Pl = { class: "node-info" }, Ul = { class: "node-info-text" }, Ol = { class: "item-body" }, Bl = {
  key: 0,
  class: "resolved-state"
}, Fl = {
  key: 1,
  class: "multiple-options"
}, Al = { class: "options-list" }, Vl = ["onClick"], Wl = ["name", "value", "checked", "onChange"], Gl = { class: "option-content" }, jl = { class: "option-header" }, Hl = { class: "option-package-id" }, ql = {
  key: 0,
  class: "option-title"
}, Kl = { class: "option-meta" }, Yl = {
  key: 0,
  class: "installed-badge"
}, Jl = { class: "action-buttons" }, Ql = {
  key: 2,
  class: "unresolved"
}, Xl = { class: "action-buttons" }, Zl = /* @__PURE__ */ q({
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
    const n = t, r = c, h = P(() => !!n.choice);
    P(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.action;
    }), P(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.package_id;
    });
    const f = P(() => {
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
    function v(m) {
      r("option-selected", m);
    }
    return (m, l) => (o(), s("div", {
      class: te(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: h.value }])
    }, [
      e("div", Pl, [
        e("span", Ul, [
          l[7] || (l[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: te(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", Ol, [
        h.value ? (o(), s("div", Bl, [
          p(re, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (g) => r("clear-choice"))
          }, {
            default: i(() => [...l[8] || (l[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Fl, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Al, [
            (o(!0), s(F, null, X(t.options, (g, w) => (o(), s("label", {
              key: g.package_id,
              class: te(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (d) => v(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (d) => v(w)
              }, null, 40, Wl),
              e("div", Gl, [
                e("div", jl, [
                  e("span", Hl, a(g.package_id), 1),
                  p(Yt, {
                    confidence: g.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                g.title && g.title !== g.package_id ? (o(), s("div", ql, a(g.title), 1)) : u("", !0),
                e("div", Kl, [
                  g.is_installed ? (o(), s("span", Yl, "Already Installed")) : u("", !0)
                ])
              ])
            ], 10, Vl))), 128))
          ]),
          e("div", Jl, [
            p(re, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (g) => r("search"))
            }, {
              default: i(() => [...l[9] || (l[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (g) => r("manual-entry"))
            }, {
              default: i(() => [...l[10] || (l[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (g) => r("mark-optional"))
            }, {
              default: i(() => [...l[11] || (l[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Ql, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Xl, [
            p(re, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (g) => r("search"))
            }, {
              default: i(() => [...l[13] || (l[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (g) => r("manual-entry"))
            }, {
              default: i(() => [...l[14] || (l[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (g) => r("mark-optional"))
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
}), ei = /* @__PURE__ */ K(Zl, [["__scopeId", "data-v-e02629e7"]]), ti = { class: "item-navigator" }, oi = { class: "nav-item-info" }, si = ["title"], ni = { class: "nav-controls" }, ai = { class: "nav-arrows" }, li = ["disabled"], ii = ["disabled"], ri = { class: "nav-position" }, di = /* @__PURE__ */ q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (r, h) => (o(), s("div", ti, [
      e("div", oi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, si)
      ]),
      e("div", ni, [
        e("div", ai, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: h[0] || (h[0] = (f) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, li),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (f) => n("next")),
            title: "Next item"
          }, " → ", 8, ii)
        ]),
        e("span", ri, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), mo = /* @__PURE__ */ K(di, [["__scopeId", "data-v-74af7920"]]), ci = ["type", "value", "placeholder", "disabled"], ui = {
  key: 0,
  class: "base-input-error"
}, mi = /* @__PURE__ */ q({
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
      class: te(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: te(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = rt((r) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = rt((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ci),
      t.error ? (o(), s("span", ui, a(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ K(mi, [["__scopeId", "data-v-9ba02cdc"]]), vi = { class: "node-resolution-step" }, fi = {
  key: 0,
  class: "auto-resolved-section"
}, gi = { class: "section-header" }, pi = { class: "stat-badge" }, hi = { class: "resolved-packages-list" }, yi = { class: "package-info" }, wi = { class: "package-id" }, ki = { class: "node-count" }, bi = { class: "package-actions" }, _i = {
  key: 0,
  class: "status-badge install"
}, $i = {
  key: 1,
  class: "status-badge skip"
}, Ci = ["onClick"], xi = {
  key: 1,
  class: "section-divider"
}, Si = { class: "step-header" }, Ii = { class: "stat-badge" }, Ei = {
  key: 1,
  class: "step-body"
}, Mi = {
  key: 3,
  class: "empty-state"
}, Ri = { class: "node-search-modal" }, Ti = { class: "node-modal-body" }, Li = {
  key: 0,
  class: "node-search-results"
}, zi = ["onClick"], Ni = { class: "node-result-header" }, Di = { class: "node-result-package-id" }, Pi = {
  key: 0,
  class: "node-result-description"
}, Ui = {
  key: 1,
  class: "node-no-results"
}, Oi = {
  key: 2,
  class: "node-searching"
}, Bi = { class: "node-manual-entry-modal" }, Fi = { class: "node-modal-body" }, Ai = { class: "node-modal-actions" }, Vi = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = C(0), f = C(!1), v = C(!1), m = C(""), l = C(""), g = C([]), w = C(!1), d = P(() => n.nodes[h.value]), R = P(() => n.nodes.filter((ie) => n.nodeChoices.has(ie.node_type)).length), _ = P(() => n.autoResolvedPackages.filter((ie) => !n.skippedPackages.has(ie.package_id)).length);
    function N(ie) {
      return n.skippedPackages.has(ie);
    }
    function $(ie) {
      r("package-skip", ie);
    }
    const x = P(() => {
      var Q;
      if (!d.value) return "not-found";
      const ie = n.nodeChoices.get(d.value.node_type);
      if (ie)
        switch (ie.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Q = d.value.options) != null && Q.length ? "ambiguous" : "not-found";
    }), k = P(() => {
      var Q;
      if (!d.value) return;
      const ie = n.nodeChoices.get(d.value.node_type);
      if (ie)
        switch (ie.action) {
          case "install":
            return ie.package_id ? `→ ${ie.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Q = d.value.options) != null && Q.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function B(ie) {
      ie >= 0 && ie < n.nodes.length && (h.value = ie);
    }
    function M() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function L() {
      d.value && r("skip", d.value.node_type);
    }
    function H(ie) {
      d.value && r("option-selected", d.value.node_type, ie);
    }
    function G() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function Y() {
      d.value && (m.value = d.value.node_type, f.value = !0);
    }
    function V() {
      l.value = "", v.value = !0;
    }
    function D() {
      f.value = !1, m.value = "", g.value = [];
    }
    function T() {
      v.value = !1, l.value = "";
    }
    function O() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function A(ie) {
      d.value && (r("manual-entry", d.value.node_type, ie.package_id), D());
    }
    function ae() {
      !d.value || !l.value.trim() || (r("manual-entry", d.value.node_type, l.value.trim()), T());
    }
    return (ie, Q) => {
      var Z, U;
      return o(), s("div", vi, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", fi, [
          e("div", gi, [
            Q[4] || (Q[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", pi, a(_.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", hi, [
            (o(!0), s(F, null, X(t.autoResolvedPackages, (b) => (o(), s("div", {
              key: b.package_id,
              class: "resolved-package-item"
            }, [
              e("div", yi, [
                e("code", wi, a(b.package_id), 1),
                e("span", ki, a(b.node_types_count) + " node type" + a(b.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", bi, [
                N(b.package_id) ? (o(), s("span", $i, " SKIPPED ")) : (o(), s("span", _i, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (oe) => $(b.package_id)
                }, a(N(b.package_id) ? "Include" : "Skip"), 9, Ci)
              ])
            ]))), 128))
          ])
        ])) : u("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", xi)) : u("", !0),
        t.nodes.length > 0 ? (o(), s(F, { key: 2 }, [
          e("div", Si, [
            Q[5] || (Q[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Ii, a(R.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          d.value ? (o(), E(mo, {
            key: 0,
            "item-name": d.value.node_type,
            "current-index": h.value,
            "total-items": t.nodes.length,
            onPrev: Q[0] || (Q[0] = (b) => B(h.value - 1)),
            onNext: Q[1] || (Q[1] = (b) => B(h.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
          d.value ? (o(), s("div", Ei, [
            p(ei, {
              "node-type": d.value.node_type,
              "has-multiple-options": !!((Z = d.value.options) != null && Z.length),
              options: d.value.options,
              choice: (U = t.nodeChoices) == null ? void 0 : U.get(d.value.node_type),
              status: x.value,
              "status-label": k.value,
              onMarkOptional: M,
              onSkip: L,
              onManualEntry: V,
              onSearch: Y,
              onOptionSelected: H,
              onClearChoice: G
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : u("", !0)
        ], 64)) : u("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", Mi, [...Q[6] || (Q[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : u("", !0),
        (o(), E(Ee, { to: "body" }, [
          f.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(D, ["self"])
          }, [
            e("div", Ri, [
              e("div", { class: "node-modal-header" }, [
                Q[7] || (Q[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: D
                }, "✕")
              ]),
              e("div", Ti, [
                p(Ke, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Q[2] || (Q[2] = (b) => m.value = b),
                  placeholder: "Search by node type, package name...",
                  onInput: O
                }, null, 8, ["modelValue"]),
                g.value.length > 0 ? (o(), s("div", Li, [
                  (o(!0), s(F, null, X(g.value, (b) => (o(), s("div", {
                    key: b.package_id,
                    class: "node-search-result-item",
                    onClick: (oe) => A(b)
                  }, [
                    e("div", Ni, [
                      e("code", Di, a(b.package_id), 1),
                      b.match_confidence ? (o(), E(Yt, {
                        key: 0,
                        confidence: b.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : u("", !0)
                    ]),
                    b.description ? (o(), s("div", Pi, a(b.description), 1)) : u("", !0)
                  ], 8, zi))), 128))
                ])) : m.value && !w.value ? (o(), s("div", Ui, ' No packages found matching "' + a(m.value) + '" ', 1)) : u("", !0),
                w.value ? (o(), s("div", Oi, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), E(Ee, { to: "body" }, [
          v.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(T, ["self"])
          }, [
            e("div", Bi, [
              e("div", { class: "node-modal-header" }, [
                Q[8] || (Q[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", Fi, [
                p(Ke, {
                  modelValue: l.value,
                  "onUpdate:modelValue": Q[3] || (Q[3] = (b) => l.value = b),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Ai, [
                  p(re, {
                    variant: "secondary",
                    onClick: T
                  }, {
                    default: i(() => [...Q[9] || (Q[9] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  p(re, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: ae
                  }, {
                    default: i(() => [...Q[10] || (Q[10] = [
                      y(" Add Package ", -1)
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
}), Wi = /* @__PURE__ */ K(Vi, [["__scopeId", "data-v-6474069a"]]), Gi = { class: "node-info" }, ji = { class: "node-info-text" }, Hi = { class: "item-body" }, qi = {
  key: 0,
  class: "resolved-state"
}, Ki = {
  key: 1,
  class: "multiple-options"
}, Yi = { class: "options-list" }, Ji = ["onClick"], Qi = ["name", "value", "checked", "onChange"], Xi = { class: "option-content" }, Zi = { class: "option-header" }, er = { class: "option-filename" }, tr = { class: "option-meta" }, or = { class: "option-size" }, sr = { class: "option-category" }, nr = { class: "option-path" }, ar = { class: "action-buttons" }, lr = {
  key: 2,
  class: "unresolved"
}, ir = { class: "action-buttons" }, rr = /* @__PURE__ */ q({
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
    const n = t, r = c, h = P(() => !!n.choice);
    P(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), P(() => {
      var l, g;
      return ((g = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : g.filename) || "selected";
    });
    const f = P(() => {
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
    function v(l) {
      r("option-selected", l);
    }
    function m(l) {
      if (!l) return "Unknown";
      const g = l / (1024 * 1024 * 1024);
      return g >= 1 ? `${g.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, g) => (o(), s("div", {
      class: te(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Gi, [
        e("span", ji, [
          g[7] || (g[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: te(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", Hi, [
        h.value ? (o(), s("div", qi, [
          p(re, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (w) => r("clear-choice"))
          }, {
            default: i(() => [...g[8] || (g[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Ki, [
          g[12] || (g[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Yi, [
            (o(!0), s(F, null, X(t.options, (w, d) => (o(), s("label", {
              key: w.model.hash,
              class: te(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (R) => v(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (R) => v(d)
              }, null, 40, Qi),
              e("div", Xi, [
                e("div", Zi, [
                  e("span", er, a(w.model.filename), 1),
                  p(Yt, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", tr, [
                  e("span", or, a(m(w.model.size)), 1),
                  e("span", sr, a(w.model.category), 1)
                ]),
                e("div", nr, a(w.model.relative_path), 1)
              ])
            ], 10, Ji))), 128))
          ]),
          e("div", ar, [
            p(re, {
              variant: "ghost",
              size: "sm",
              onClick: g[1] || (g[1] = (w) => r("search"))
            }, {
              default: i(() => [...g[9] || (g[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "ghost",
              size: "sm",
              onClick: g[2] || (g[2] = (w) => r("download-url"))
            }, {
              default: i(() => [...g[10] || (g[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (w) => r("mark-optional"))
            }, {
              default: i(() => [...g[11] || (g[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", lr, [
          g[16] || (g[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", ir, [
            p(re, {
              variant: "primary",
              size: "sm",
              onClick: g[4] || (g[4] = (w) => r("search"))
            }, {
              default: i(() => [...g[13] || (g[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (w) => r("download-url"))
            }, {
              default: i(() => [...g[14] || (g[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (w) => r("mark-optional"))
            }, {
              default: i(() => [...g[15] || (g[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), dr = /* @__PURE__ */ K(rr, [["__scopeId", "data-v-8a82fefa"]]), cr = { class: "model-resolution-step" }, ur = { class: "step-header" }, mr = { class: "step-info" }, vr = { class: "step-title" }, fr = { class: "step-description" }, gr = { class: "stat-badge" }, pr = {
  key: 1,
  class: "step-body"
}, hr = {
  key: 2,
  class: "empty-state"
}, yr = { class: "model-search-modal" }, wr = { class: "model-modal-body" }, kr = {
  key: 0,
  class: "model-search-results"
}, br = ["onClick"], _r = { class: "model-result-header" }, $r = { class: "model-result-filename" }, Cr = { class: "model-result-meta" }, xr = { class: "model-result-category" }, Sr = { class: "model-result-size" }, Ir = {
  key: 0,
  class: "model-result-path"
}, Er = {
  key: 1,
  class: "model-no-results"
}, Mr = {
  key: 2,
  class: "model-searching"
}, Rr = { class: "model-download-url-modal" }, Tr = { class: "model-modal-body" }, Lr = { class: "model-input-group" }, zr = { class: "model-input-group" }, Nr = { class: "model-modal-actions" }, Dr = /* @__PURE__ */ q({
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
    function r(U) {
      var b;
      return U && ((b = n[U]) == null ? void 0 : b[0]) || null;
    }
    const h = t, f = c, v = C(0), m = C(!1), l = C(!1), g = C(""), w = C(""), d = C(""), R = C([]), _ = C(!1), N = P(() => h.models[v.value]), $ = P(() => h.models.some((U) => U.is_download_intent)), x = P(() => h.models.filter(
      (U) => h.modelChoices.has(U.filename) || U.is_download_intent
    ).length), k = P(() => {
      var b;
      if (!N.value) return "";
      const U = r((b = N.value.reference) == null ? void 0 : b.node_type);
      return U ? `${U}/${N.value.filename}` : "";
    }), B = P(() => {
      var b;
      if (!N.value) return "not-found";
      const U = h.modelChoices.get(N.value.filename);
      if (U)
        switch (U.action) {
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
      return N.value.is_download_intent ? "download" : (b = N.value.options) != null && b.length ? "ambiguous" : "not-found";
    }), M = P(() => {
      var b, oe;
      if (!N.value) return;
      const U = h.modelChoices.get(N.value.filename);
      if (U)
        switch (U.action) {
          case "select":
            return (b = U.selected_model) != null && b.filename ? `→ ${U.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return N.value.is_download_intent ? "Pending Download" : (oe = N.value.options) != null && oe.length ? `${N.value.options.length} matches` : "Not Found";
    });
    function L(U) {
      U >= 0 && U < h.models.length && (v.value = U);
    }
    function H() {
      N.value && f("mark-optional", N.value.filename);
    }
    function G() {
      N.value && f("skip", N.value.filename);
    }
    function Y(U) {
      N.value && f("option-selected", N.value.filename, U);
    }
    function V() {
      N.value && f("clear-choice", N.value.filename);
    }
    function D() {
      N.value && (g.value = N.value.filename, m.value = !0);
    }
    function T() {
      N.value && (w.value = N.value.download_source || "", d.value = N.value.target_path || k.value, l.value = !0);
    }
    function O() {
      m.value = !1, g.value = "", R.value = [];
    }
    function A() {
      l.value = !1, w.value = "", d.value = "";
    }
    function ae() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function ie(U) {
      N.value && O();
    }
    function Q() {
      !N.value || !w.value.trim() || (f("download-url", N.value.filename, w.value.trim(), d.value.trim() || void 0), A());
    }
    function Z(U) {
      if (!U) return "Unknown";
      const b = U / (1024 * 1024 * 1024);
      return b >= 1 ? `${b.toFixed(2)} GB` : `${(U / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (U, b) => {
      var oe, ee, $e;
      return o(), s("div", cr, [
        e("div", ur, [
          e("div", mr, [
            e("h3", vr, a($.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", fr, a($.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", gr, a(x.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        N.value ? (o(), E(mo, {
          key: 0,
          "item-name": N.value.filename,
          "current-index": v.value,
          "total-items": t.models.length,
          onPrev: b[0] || (b[0] = (we) => L(v.value - 1)),
          onNext: b[1] || (b[1] = (we) => L(v.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        N.value ? (o(), s("div", pr, [
          p(dr, {
            filename: N.value.filename,
            "node-type": ((oe = N.value.reference) == null ? void 0 : oe.node_type) || "Unknown",
            "has-multiple-options": !!((ee = N.value.options) != null && ee.length),
            options: N.value.options,
            choice: ($e = t.modelChoices) == null ? void 0 : $e.get(N.value.filename),
            status: B.value,
            "status-label": M.value,
            onMarkOptional: H,
            onSkip: G,
            onDownloadUrl: T,
            onSearch: D,
            onOptionSelected: Y,
            onClearChoice: V
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", hr, [...b[5] || (b[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), E(Ee, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(O, ["self"])
          }, [
            e("div", yr, [
              e("div", { class: "model-modal-header" }, [
                b[6] || (b[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", wr, [
                p(Ke, {
                  modelValue: g.value,
                  "onUpdate:modelValue": b[2] || (b[2] = (we) => g.value = we),
                  placeholder: "Search by filename, category...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                R.value.length > 0 ? (o(), s("div", kr, [
                  (o(!0), s(F, null, X(R.value, (we) => (o(), s("div", {
                    key: we.hash,
                    class: "model-search-result-item",
                    onClick: (Me) => ie()
                  }, [
                    e("div", _r, [
                      e("code", $r, a(we.filename), 1)
                    ]),
                    e("div", Cr, [
                      e("span", xr, a(we.category), 1),
                      e("span", Sr, a(Z(we.size)), 1)
                    ]),
                    we.relative_path ? (o(), s("div", Ir, a(we.relative_path), 1)) : u("", !0)
                  ], 8, br))), 128))
                ])) : g.value && !_.value ? (o(), s("div", Er, ' No models found matching "' + a(g.value) + '" ', 1)) : u("", !0),
                _.value ? (o(), s("div", Mr, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), E(Ee, { to: "body" }, [
          l.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(A, ["self"])
          }, [
            e("div", Rr, [
              e("div", { class: "model-modal-header" }, [
                b[7] || (b[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              e("div", Tr, [
                e("div", Lr, [
                  b[8] || (b[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  p(Ke, {
                    modelValue: w.value,
                    "onUpdate:modelValue": b[3] || (b[3] = (we) => w.value = we),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", zr, [
                  b[9] || (b[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  p(Ke, {
                    modelValue: d.value,
                    "onUpdate:modelValue": b[4] || (b[4] = (we) => d.value = we),
                    placeholder: k.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Nr, [
                  p(re, {
                    variant: "secondary",
                    onClick: A
                  }, {
                    default: i(() => [...b[10] || (b[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  p(re, {
                    variant: "primary",
                    disabled: !w.value.trim() || !d.value.trim(),
                    onClick: Q
                  }, {
                    default: i(() => [...b[11] || (b[11] = [
                      y(" Queue Download ", -1)
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
}), Pr = /* @__PURE__ */ K(Dr, [["__scopeId", "data-v-c6acbada"]]), Ur = { class: "applying-step" }, Or = {
  key: 0,
  class: "phase-content"
}, Br = {
  key: 1,
  class: "phase-content"
}, Fr = { class: "phase-description" }, Ar = { class: "overall-progress" }, Vr = { class: "progress-bar" }, Wr = { class: "progress-label" }, Gr = { class: "install-list" }, jr = { class: "install-icon" }, Hr = { key: 0 }, qr = {
  key: 1,
  class: "spinner"
}, Kr = { key: 2 }, Yr = { key: 3 }, Jr = {
  key: 0,
  class: "install-error"
}, Qr = {
  key: 2,
  class: "phase-content"
}, Xr = { class: "phase-header" }, Zr = { class: "phase-title" }, ed = { class: "completion-summary" }, td = {
  key: 0,
  class: "summary-item success"
}, od = { class: "summary-text" }, sd = {
  key: 1,
  class: "summary-item error"
}, nd = { class: "summary-text" }, ad = {
  key: 2,
  class: "failed-list"
}, ld = { class: "failed-node-id" }, id = { class: "failed-error" }, rd = {
  key: 4,
  class: "summary-item success"
}, dd = {
  key: 5,
  class: "restart-prompt"
}, cd = {
  key: 3,
  class: "phase-content error"
}, ud = { class: "error-message" }, md = /* @__PURE__ */ q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = P(() => {
      var g, w;
      const m = ((g = c.progress.nodeInstallProgress) == null ? void 0 : g.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const l = ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0;
      return Math.round(l / m * 100);
    }), r = P(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((l) => !l.success)) || [];
    }), h = P(() => r.value.length > 0);
    function f(m, l) {
      var w, d;
      const g = (w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.find((R) => R.node_id === m);
      return g ? g.success ? "complete" : "failed" : ((d = c.progress.nodeInstallProgress) == null ? void 0 : d.currentIndex) === l ? "installing" : "pending";
    }
    function v(m) {
      var l, g;
      return (g = (l = c.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((w) => w.node_id === m)) == null ? void 0 : g.error;
    }
    return (m, l) => {
      var g, w, d, R;
      return o(), s("div", Ur, [
        t.progress.phase === "resolving" ? (o(), s("div", Or, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", Br, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Fr, " Installing " + a((((g = t.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) ?? 0) + 1) + " of " + a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Ar, [
            e("div", Vr, [
              e("div", {
                class: "progress-fill",
                style: et({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Wr, a(((d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.length) ?? 0) + " / " + a(((R = t.progress.nodeInstallProgress) == null ? void 0 : R.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Gr, [
            (o(!0), s(F, null, X(t.progress.nodesToInstall, (_, N) => (o(), s("div", {
              key: _,
              class: te(["install-item", f(_, N)])
            }, [
              e("span", jr, [
                f(_, N) === "pending" ? (o(), s("span", Hr, "○")) : f(_, N) === "installing" ? (o(), s("span", qr, "◌")) : f(_, N) === "complete" ? (o(), s("span", Kr, "✓")) : f(_, N) === "failed" ? (o(), s("span", Yr, "✗")) : u("", !0)
              ]),
              e("code", null, a(_), 1),
              v(_) ? (o(), s("span", Jr, a(v(_)), 1)) : u("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", Qr, [
          e("div", Xr, [
            e("span", {
              class: te(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", Zr, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", ed, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", td, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", od, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : u("", !0),
            r.value.length > 0 ? (o(), s("div", sd, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", nd, a(r.value.length) + " package" + a(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : u("", !0),
            r.value.length > 0 ? (o(), s("div", ad, [
              (o(!0), s(F, null, X(r.value, (_) => (o(), s("div", {
                key: _.node_id,
                class: "failed-item"
              }, [
                e("code", ld, a(_.node_id), 1),
                e("span", id, a(_.error), 1)
              ]))), 128))
            ])) : u("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (_) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(r.value.length) + ") ", 1)) : u("", !0),
            h.value ? u("", !0) : (o(), s("div", rd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", dd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = (_) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : u("", !0)
          ])
        ])) : t.progress.phase === "error" ? (o(), s("div", cd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", ud, a(t.progress.error), 1)
        ])) : u("", !0)
      ]);
    };
  }
}), vd = /* @__PURE__ */ K(md, [["__scopeId", "data-v-5efaae58"]]), fd = {
  key: 0,
  class: "loading-state"
}, gd = {
  key: 1,
  class: "wizard-content"
}, pd = {
  key: 0,
  class: "step-content"
}, hd = { class: "analysis-summary" }, yd = { class: "analysis-header" }, wd = { class: "summary-description" }, kd = { class: "stats-grid" }, bd = { class: "stat-card" }, _d = { class: "stat-items" }, $d = {
  key: 0,
  class: "stat-item success"
}, Cd = { class: "stat-count" }, xd = {
  key: 1,
  class: "stat-item info"
}, Sd = { class: "stat-count" }, Id = {
  key: 2,
  class: "stat-item warning"
}, Ed = { class: "stat-count" }, Md = {
  key: 3,
  class: "stat-item error"
}, Rd = { class: "stat-count" }, Td = { class: "stat-card" }, Ld = { class: "stat-items" }, zd = { class: "stat-item success" }, Nd = { class: "stat-count" }, Dd = {
  key: 0,
  class: "stat-item info"
}, Pd = { class: "stat-count" }, Ud = {
  key: 1,
  class: "stat-item warning"
}, Od = { class: "stat-count" }, Bd = {
  key: 2,
  class: "stat-item error"
}, Fd = { class: "stat-count" }, Ad = {
  key: 0,
  class: "status-message warning"
}, Vd = { class: "status-text" }, Wd = {
  key: 1,
  class: "status-message info"
}, Gd = { class: "status-text" }, jd = {
  key: 2,
  class: "status-message info"
}, Hd = { class: "status-text" }, qd = {
  key: 3,
  class: "status-message success"
}, Kd = {
  key: 3,
  class: "step-content"
}, Yd = { class: "review-summary" }, Jd = { class: "review-stats" }, Qd = { class: "review-stat" }, Xd = { class: "stat-value" }, Zd = { class: "review-stat" }, ec = { class: "stat-value" }, tc = { class: "review-stat" }, oc = { class: "stat-value" }, sc = { class: "review-stat" }, nc = { class: "stat-value" }, ac = {
  key: 0,
  class: "review-section"
}, lc = { class: "section-title" }, ic = { class: "review-items" }, rc = { class: "item-name" }, dc = { class: "item-choice" }, cc = {
  key: 0,
  class: "choice-badge install"
}, uc = {
  key: 1,
  class: "choice-badge skip"
}, mc = {
  key: 1,
  class: "review-section"
}, vc = { class: "section-title" }, fc = { class: "review-items" }, gc = { class: "item-name" }, pc = { class: "item-choice" }, hc = {
  key: 0,
  class: "choice-badge install"
}, yc = {
  key: 1,
  class: "choice-badge optional"
}, wc = {
  key: 2,
  class: "choice-badge skip"
}, kc = {
  key: 1,
  class: "choice-badge pending"
}, bc = {
  key: 2,
  class: "review-section"
}, _c = { class: "section-title" }, $c = { class: "review-items" }, Cc = { class: "item-name" }, xc = { class: "item-choice" }, Sc = {
  key: 0,
  class: "choice-badge install"
}, Ic = {
  key: 1,
  class: "choice-badge download"
}, Ec = {
  key: 2,
  class: "choice-badge optional"
}, Mc = {
  key: 3,
  class: "choice-badge skip"
}, Rc = {
  key: 4,
  class: "choice-badge skip"
}, Tc = {
  key: 1,
  class: "choice-badge download"
}, Lc = {
  key: 2,
  class: "choice-badge pending"
}, zc = {
  key: 3,
  class: "no-choices"
}, Nc = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, r = c, { analyzeWorkflow: h, applyResolution: f, installNodes: v, queueModelDownloads: m, progress: l, resetProgress: g } = Cl(), { loadPendingDownloads: w } = Tt(), d = C(null), R = C(!1), _ = C(!1), N = C(null), $ = C("analysis"), x = C([]), k = C(/* @__PURE__ */ new Map()), B = C(/* @__PURE__ */ new Map()), M = C(/* @__PURE__ */ new Set()), L = P(() => {
      const S = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || D.value) && S.push({ id: "nodes", label: "Nodes" }), (Y.value || V.value) && S.push({ id: "models", label: "Models" }), S.push({ id: "review", label: "Review" }), $.value === "applying" && S.push({ id: "applying", label: "Applying" }), S;
    }), H = P(() => d.value ? d.value.stats.needs_user_input : !1), G = P(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), Y = P(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), V = P(() => d.value ? d.value.stats.download_intents > 0 : !1), D = P(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), T = P(() => d.value ? d.value.nodes.resolved.length : 0), O = P(() => {
      if (!d.value) return [];
      const S = d.value.nodes.resolved.filter((W) => !W.is_installed), I = /* @__PURE__ */ new Set();
      return S.filter((W) => I.has(W.package.package_id) ? !1 : (I.add(W.package.package_id), !0));
    }), A = P(() => {
      if (!d.value) return [];
      const S = d.value.nodes.resolved.filter((W) => !W.is_installed), I = /* @__PURE__ */ new Map();
      for (const W of S) {
        const de = I.get(W.package.package_id);
        de ? de.node_types_count++ : I.set(W.package.package_id, {
          package_id: W.package.package_id,
          title: W.package.title,
          node_types_count: 1
        });
      }
      return Array.from(I.values());
    }), ae = P(() => O.value.filter((S) => !M.value.has(S.package.package_id))), ie = P(() => d.value ? d.value.models.resolved.filter((S) => S.match_type === "download_intent").map((S) => ({
      filename: S.reference.widget_value,
      reference: S.reference,
      is_download_intent: !0,
      resolved_model: S.model,
      download_source: S.download_source,
      target_path: S.target_path
    })) : []), Q = P(() => {
      if (!d.value) return [];
      const S = d.value.nodes.unresolved.map((W) => ({
        node_type: W.reference.node_type,
        reason: W.reason,
        is_unresolved: !0,
        options: void 0
      })), I = d.value.nodes.ambiguous.map((W) => ({
        node_type: W.reference.node_type,
        has_multiple_options: !0,
        options: W.options.map((de) => ({
          package_id: de.package.package_id,
          title: de.package.title,
          match_confidence: de.match_confidence,
          match_type: de.match_type,
          is_installed: de.is_installed
        }))
      }));
      return [...S, ...I];
    }), Z = P(() => {
      if (!d.value) return [];
      const S = d.value.models.unresolved.map((W) => ({
        filename: W.reference.widget_value,
        reference: W.reference,
        reason: W.reason,
        is_unresolved: !0,
        options: void 0
      })), I = d.value.models.ambiguous.map((W) => ({
        filename: W.reference.widget_value,
        reference: W.reference,
        has_multiple_options: !0,
        options: W.options.map((de) => ({
          model: de.model,
          match_confidence: de.match_confidence,
          match_type: de.match_type,
          has_download_source: de.has_download_source
        }))
      }));
      return [...S, ...I];
    }), U = P(() => {
      const S = Z.value, I = ie.value.map((W) => ({
        filename: W.filename,
        reference: W.reference,
        is_download_intent: !0,
        resolved_model: W.resolved_model,
        download_source: W.download_source,
        target_path: W.target_path,
        options: void 0
      }));
      return [...S, ...I];
    }), b = P(() => {
      let S = ae.value.length;
      for (const I of k.value.values())
        I.action === "install" && S++;
      for (const I of B.value.values())
        I.action === "select" && S++;
      return S;
    }), oe = P(() => {
      let S = 0;
      for (const I of B.value.values())
        I.action === "download" && S++;
      return S;
    }), ee = P(() => {
      let S = 0;
      for (const I of k.value.values())
        I.action === "optional" && S++;
      for (const I of B.value.values())
        I.action === "optional" && S++;
      return S;
    }), $e = P(() => {
      let S = M.value.size;
      for (const I of k.value.values())
        I.action === "skip" && S++;
      for (const I of B.value.values())
        I.action === "skip" && S++;
      for (const I of Q.value)
        k.value.has(I.node_type) || S++;
      for (const I of Z.value)
        B.value.has(I.filename) || S++;
      return S;
    }), we = P(() => {
      const S = {};
      if (S.analysis = { resolved: 1, total: 1 }, G.value) {
        const I = Q.value.length, W = Q.value.filter(
          (de) => k.value.has(de.node_type)
        ).length;
        S.nodes = { resolved: W, total: I };
      }
      if (Y.value || V.value) {
        const I = U.value.length, W = U.value.filter(
          (de) => B.value.has(de.filename) || de.is_download_intent
        ).length;
        S.models = { resolved: W, total: I };
      }
      if (S.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const I = l.totalFiles || 1, W = l.completedFiles.length;
        S.applying = { resolved: W, total: I };
      }
      return S;
    });
    function Me(S) {
      $.value = S;
    }
    function Ue() {
      const S = L.value.findIndex((I) => I.id === $.value);
      S > 0 && ($.value = L.value[S - 1].id);
    }
    function ce() {
      const S = L.value.findIndex((I) => I.id === $.value);
      S < L.value.length - 1 && ($.value = L.value[S + 1].id);
    }
    async function Oe() {
      R.value = !0, N.value = null;
      try {
        d.value = await h(n.workflowName);
      } catch (S) {
        N.value = S instanceof Error ? S.message : "Failed to analyze workflow";
      } finally {
        R.value = !1;
      }
    }
    function he() {
      x.value.includes("analysis") || x.value.push("analysis"), G.value || D.value ? $.value = "nodes" : Y.value || V.value ? $.value = "models" : $.value = "review";
    }
    function Re(S) {
      k.value.set(S, { action: "optional" });
    }
    function Ae(S) {
      k.value.set(S, { action: "skip" });
    }
    function Je(S, I) {
      var de;
      const W = Q.value.find((Ce) => Ce.node_type === S);
      (de = W == null ? void 0 : W.options) != null && de[I] && k.value.set(S, {
        action: "install",
        package_id: W.options[I].package_id
      });
    }
    function ve(S, I) {
      k.value.set(S, {
        action: "install",
        package_id: I
      });
    }
    function Ve(S) {
      k.value.delete(S);
    }
    function We(S) {
      M.value.has(S) ? M.value.delete(S) : M.value.add(S);
    }
    function Ge(S) {
      B.value.set(S, { action: "optional" });
    }
    function dt(S) {
      B.value.set(S, { action: "skip" });
    }
    function me(S, I) {
      var de;
      const W = Z.value.find((Ce) => Ce.filename === S);
      (de = W == null ? void 0 : W.options) != null && de[I] && B.value.set(S, {
        action: "select",
        selected_model: W.options[I].model
      });
    }
    function Le(S, I, W) {
      B.value.set(S, {
        action: "download",
        url: I,
        target_path: W
      });
    }
    function ct(S) {
      B.value.delete(S);
    }
    async function st() {
      var S;
      _.value = !0, N.value = null, g(), l.phase = "resolving", $.value = "applying";
      try {
        const I = await f(n.workflowName, k.value, B.value, M.value);
        I.models_to_download && I.models_to_download.length > 0 && m(n.workflowName, I.models_to_download);
        const W = [
          ...I.nodes_to_install || [],
          ...ae.value.map((Ce) => Ce.package.package_id)
        ];
        l.nodesToInstall = [...new Set(W)], l.nodesToInstall.length > 0 && await v(n.workflowName), l.phase = "complete", await w();
        const de = l.installError || ((S = l.nodeInstallProgress) == null ? void 0 : S.completedNodes.some((Ce) => !Ce.success));
        !l.needsRestart && !de && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (I) {
        N.value = I instanceof Error ? I.message : "Failed to apply resolution", l.error = N.value, l.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function xe() {
      r("refresh"), r("restart"), r("close");
    }
    async function ut() {
      var I;
      const S = ((I = l.nodeInstallProgress) == null ? void 0 : I.completedNodes.filter((W) => !W.success).map((W) => W.node_id)) || [];
      if (S.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: S.length
        }, l.nodesToInstall = S, l.nodesInstalled = [], l.installError = void 0;
        try {
          await v(n.workflowName), l.phase = "complete";
        } catch (W) {
          l.error = W instanceof Error ? W.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Se(Oe), (S, I) => (o(), E(tt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: R.value,
      error: N.value || void 0,
      "fixed-height": !0,
      onClose: I[1] || (I[1] = (W) => r("close"))
    }, {
      body: i(() => [
        R.value && !d.value ? (o(), s("div", fd, [...I[2] || (I[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", gd, [
          p(Nl, {
            steps: L.value,
            "current-step": $.value,
            "completed-steps": x.value,
            "step-stats": we.value,
            onStepChange: Me
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (o(), s("div", pd, [
            e("div", hd, [
              e("div", yd, [
                I[3] || (I[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", wd, " Found " + a(d.value.stats.total_nodes) + " nodes and " + a(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", kd, [
                e("div", bd, [
                  I[12] || (I[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", _d, [
                    T.value > 0 ? (o(), s("div", $d, [
                      I[4] || (I[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Cd, a(T.value), 1),
                      I[5] || (I[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : u("", !0),
                    d.value.stats.packages_needing_installation > 0 ? (o(), s("div", xd, [
                      I[6] || (I[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Sd, a(d.value.stats.packages_needing_installation), 1),
                      I[7] || (I[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : u("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", Id, [
                      I[8] || (I[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ed, a(d.value.nodes.ambiguous.length), 1),
                      I[9] || (I[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", Md, [
                      I[10] || (I[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Rd, a(d.value.nodes.unresolved.length), 1),
                      I[11] || (I[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ]),
                e("div", Td, [
                  I[21] || (I[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Ld, [
                    e("div", zd, [
                      I[13] || (I[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Nd, a(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      I[14] || (I[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", Dd, [
                      I[15] || (I[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Pd, a(d.value.stats.download_intents), 1),
                      I[16] || (I[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : u("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", Ud, [
                      I[17] || (I[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Od, a(d.value.models.ambiguous.length), 1),
                      I[18] || (I[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", Bd, [
                      I[19] || (I[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fd, a(d.value.models.unresolved.length), 1),
                      I[20] || (I[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ])
              ]),
              H.value ? (o(), s("div", Ad, [
                I[22] || (I[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Vd, a(Q.value.length + Z.value.length) + " items need your input", 1)
              ])) : D.value ? (o(), s("div", Wd, [
                I[23] || (I[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gd, a(d.value.stats.packages_needing_installation) + " package" + a(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(d.value.stats.nodes_needing_installation) + " node type" + a(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(V.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : V.value ? (o(), s("div", jd, [
                I[24] || (I[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hd, a(d.value.stats.download_intents) + " model" + a(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", qd, [...I[25] || (I[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : u("", !0),
          $.value === "nodes" ? (o(), E(Wi, {
            key: 1,
            nodes: Q.value,
            "node-choices": k.value,
            "auto-resolved-packages": A.value,
            "skipped-packages": M.value,
            onMarkOptional: Re,
            onSkip: Ae,
            onOptionSelected: Je,
            onManualEntry: ve,
            onClearChoice: Ve,
            onPackageSkip: We
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : u("", !0),
          $.value === "models" ? (o(), E(Pr, {
            key: 2,
            models: U.value,
            "model-choices": B.value,
            onMarkOptional: Ge,
            onSkip: dt,
            onOptionSelected: me,
            onDownloadUrl: Le,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : u("", !0),
          $.value === "review" ? (o(), s("div", Kd, [
            e("div", Yd, [
              I[30] || (I[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Jd, [
                e("div", Qd, [
                  e("span", Xd, a(b.value), 1),
                  I[26] || (I[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Zd, [
                  e("span", ec, a(oe.value), 1),
                  I[27] || (I[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", tc, [
                  e("span", oc, a(ee.value), 1),
                  I[28] || (I[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", sc, [
                  e("span", nc, a($e.value), 1),
                  I[29] || (I[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              A.value.length > 0 ? (o(), s("div", ac, [
                e("h4", lc, "Node Packages (" + a(A.value.length) + ")", 1),
                e("div", ic, [
                  (o(!0), s(F, null, X(A.value, (W) => (o(), s("div", {
                    key: W.package_id,
                    class: "review-item"
                  }, [
                    e("code", rc, a(W.package_id), 1),
                    e("div", dc, [
                      M.value.has(W.package_id) ? (o(), s("span", uc, "Skipped")) : (o(), s("span", cc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : u("", !0),
              Q.value.length > 0 ? (o(), s("div", mc, [
                e("h4", vc, "Node Choices (" + a(Q.value.length) + ")", 1),
                e("div", fc, [
                  (o(!0), s(F, null, X(Q.value, (W) => {
                    var de, Ce, je, ne;
                    return o(), s("div", {
                      key: W.node_type,
                      class: "review-item"
                    }, [
                      e("code", gc, a(W.node_type), 1),
                      e("div", pc, [
                        k.value.has(W.node_type) ? (o(), s(F, { key: 0 }, [
                          ((de = k.value.get(W.node_type)) == null ? void 0 : de.action) === "install" ? (o(), s("span", hc, a((Ce = k.value.get(W.node_type)) == null ? void 0 : Ce.package_id), 1)) : ((je = k.value.get(W.node_type)) == null ? void 0 : je.action) === "optional" ? (o(), s("span", yc, " Optional ")) : ((ne = k.value.get(W.node_type)) == null ? void 0 : ne.action) === "skip" ? (o(), s("span", wc, " Skip ")) : u("", !0)
                        ], 64)) : (o(), s("span", kc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              U.value.length > 0 ? (o(), s("div", bc, [
                e("h4", _c, "Models (" + a(U.value.length) + ")", 1),
                e("div", $c, [
                  (o(!0), s(F, null, X(U.value, (W) => {
                    var de, Ce, je, ne, se, ye, Lt;
                    return o(), s("div", {
                      key: W.filename,
                      class: "review-item"
                    }, [
                      e("code", Cc, a(W.filename), 1),
                      e("div", xc, [
                        B.value.has(W.filename) ? (o(), s(F, { key: 0 }, [
                          ((de = B.value.get(W.filename)) == null ? void 0 : de.action) === "select" ? (o(), s("span", Sc, a((je = (Ce = B.value.get(W.filename)) == null ? void 0 : Ce.selected_model) == null ? void 0 : je.filename), 1)) : ((ne = B.value.get(W.filename)) == null ? void 0 : ne.action) === "download" ? (o(), s("span", Ic, " Download ")) : ((se = B.value.get(W.filename)) == null ? void 0 : se.action) === "optional" ? (o(), s("span", Ec, " Optional ")) : ((ye = B.value.get(W.filename)) == null ? void 0 : ye.action) === "skip" ? (o(), s("span", Mc, " Skip ")) : ((Lt = B.value.get(W.filename)) == null ? void 0 : Lt.action) === "cancel_download" ? (o(), s("span", Rc, " Cancel Download ")) : u("", !0)
                        ], 64)) : W.is_download_intent ? (o(), s("span", Tc, " Pending Download ")) : (o(), s("span", Lc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              O.value.length === 0 && Q.value.length === 0 && U.value.length === 0 ? (o(), s("div", zc, " No dependencies need resolution. ")) : u("", !0)
            ])
          ])) : u("", !0),
          $.value === "applying" ? (o(), E(vd, {
            key: 4,
            progress: ge(l),
            onRestart: xe,
            onRetryFailed: ut
          }, null, 8, ["progress"])) : u("", !0)
        ])) : u("", !0)
      ]),
      footer: i(() => [
        $.value !== "analysis" && $.value !== "applying" ? (o(), E(re, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Ue
        }, {
          default: i(() => [...I[31] || (I[31] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        I[35] || (I[35] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || ge(l).phase === "complete" || ge(l).phase === "error" ? (o(), E(re, {
          key: 1,
          variant: "secondary",
          onClick: I[0] || (I[0] = (W) => r("close"))
        }, {
          default: i(() => [
            y(a(ge(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : u("", !0),
        $.value === "analysis" ? (o(), E(re, {
          key: 2,
          variant: "primary",
          disabled: R.value,
          onClick: he
        }, {
          default: i(() => [...I[32] || (I[32] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        $.value === "nodes" ? (o(), E(re, {
          key: 3,
          variant: "primary",
          onClick: ce
        }, {
          default: i(() => [
            y(a(Y.value || V.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : u("", !0),
        $.value === "models" ? (o(), E(re, {
          key: 4,
          variant: "primary",
          onClick: ce
        }, {
          default: i(() => [...I[33] || (I[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : u("", !0),
        $.value === "review" ? (o(), E(re, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: st
        }, {
          default: i(() => [...I[34] || (I[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Dc = /* @__PURE__ */ K(Nc, [["__scopeId", "data-v-0d3f93e6"]]), Pc = { class: "search-input-wrapper" }, Uc = ["value", "placeholder"], Oc = /* @__PURE__ */ q({
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
    let f;
    function v(l) {
      const g = l.target.value;
      n.debounce > 0 ? (clearTimeout(f), f = window.setTimeout(() => {
        r("update:modelValue", g);
      }, n.debounce)) : r("update:modelValue", g);
    }
    function m() {
      var l;
      r("update:modelValue", ""), r("clear"), (l = h.value) == null || l.focus();
    }
    return Se(() => {
      n.autoFocus && h.value && h.value.focus();
    }), (l, g) => (o(), s("div", Pc, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: rt(m, ["escape"])
      }, null, 40, Uc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), Bc = /* @__PURE__ */ K(Oc, [["__scopeId", "data-v-266f857a"]]), Fc = { class: "search-bar" }, Ac = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (o(), s("div", Fc, [
      p(Bc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), kt = /* @__PURE__ */ K(Ac, [["__scopeId", "data-v-3d51bbfd"]]), Vc = { class: "section-group" }, Wc = {
  key: 0,
  class: "section-content"
}, Gc = /* @__PURE__ */ q({
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
    function f() {
      n.collapsible && (h.value = !h.value, r("toggle", h.value));
    }
    return (v, m) => (o(), s("section", Vc, [
      p(He, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: f
      }, {
        default: i(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (o(), s("div", Wc, [
        fe(v.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), Ie = /* @__PURE__ */ K(Gc, [["__scopeId", "data-v-c48e33ed"]]), jc = { class: "item-header" }, Hc = {
  key: 0,
  class: "item-icon"
}, qc = { class: "item-info" }, Kc = {
  key: 0,
  class: "item-title"
}, Yc = {
  key: 1,
  class: "item-subtitle"
}, Jc = {
  key: 0,
  class: "item-details"
}, Qc = {
  key: 1,
  class: "item-actions"
}, Xc = /* @__PURE__ */ q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = P(() => n.status ? `status-${n.status}` : "");
    return (h, f) => (o(), s("div", {
      class: te(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: f[0] || (f[0] = (v) => t.clickable && h.$emit("click"))
    }, [
      e("div", jc, [
        h.$slots.icon ? (o(), s("span", Hc, [
          fe(h.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        e("div", qc, [
          h.$slots.title ? (o(), s("div", Kc, [
            fe(h.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          h.$slots.subtitle ? (o(), s("div", Yc, [
            fe(h.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      h.$slots.details ? (o(), s("div", Jc, [
        fe(h.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      h.$slots.actions ? (o(), s("div", Qc, [
        fe(h.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ K(Xc, [["__scopeId", "data-v-cc435e0e"]]), Zc = { class: "loading-state" }, eu = { class: "loading-message" }, tu = /* @__PURE__ */ q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (o(), s("div", Zc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", eu, a(t.message), 1)
    ]));
  }
}), lt = /* @__PURE__ */ K(tu, [["__scopeId", "data-v-ad8436c9"]]), ou = { class: "error-state" }, su = { class: "error-message" }, nu = /* @__PURE__ */ q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (o(), s("div", ou, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", su, a(t.message), 1),
      t.retry ? (o(), E(J, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), it = /* @__PURE__ */ K(nu, [["__scopeId", "data-v-5397be48"]]), au = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getWorkflows: h } = Te();
    co();
    const f = C([]), v = C(!1), m = C(null), l = C(""), g = C(!0), w = C(!1), d = C(!1), R = C(!1), _ = C(null), N = P(
      () => f.value.filter((Z) => Z.status === "broken")
    ), $ = P(
      () => f.value.filter((Z) => Z.status === "new")
    ), x = P(
      () => f.value.filter((Z) => Z.status === "modified")
    ), k = P(
      () => f.value.filter((Z) => Z.status === "synced")
    ), B = P(() => {
      if (!l.value.trim()) return f.value;
      const Z = l.value.toLowerCase();
      return f.value.filter((U) => U.name.toLowerCase().includes(Z));
    }), M = P(
      () => N.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), L = P(
      () => $.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), H = P(
      () => x.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), G = P(
      () => k.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), Y = P(
      () => w.value ? G.value : G.value.slice(0, 5)
    );
    async function V(Z = !1) {
      v.value = !0, m.value = null;
      try {
        f.value = await h(Z);
      } catch (U) {
        m.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        v.value = !1;
      }
    }
    c({ loadWorkflows: V });
    function D(Z) {
      _.value = Z, d.value = !0;
    }
    function T(Z) {
      _.value = Z, R.value = !0;
    }
    function O() {
      alert("Bulk resolution not yet implemented");
    }
    function A() {
      r("refresh");
    }
    async function ae() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ie(Z) {
      const U = [];
      return Z.missing_nodes > 0 && U.push(`${Z.missing_nodes} missing node${Z.missing_nodes > 1 ? "s" : ""}`), Z.missing_models > 0 && U.push(`${Z.missing_models} missing model${Z.missing_models > 1 ? "s" : ""}`), Z.pending_downloads && Z.pending_downloads > 0 && U.push(`${Z.pending_downloads} pending download${Z.pending_downloads > 1 ? "s" : ""}`), U.length > 0 ? U.join(", ") : "Has issues";
    }
    function Q(Z) {
      const U = Z.sync_state === "new" ? "New" : Z.sync_state === "modified" ? "Modified" : Z.sync_state === "synced" ? "Synced" : Z.sync_state;
      return Z.has_path_sync_issues && Z.models_needing_path_sync && Z.models_needing_path_sync > 0 ? `${Z.models_needing_path_sync} model path${Z.models_needing_path_sync > 1 ? "s" : ""} need${Z.models_needing_path_sync === 1 ? "s" : ""} sync` : U || "Unknown";
    }
    return Se(V), (Z, U) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, { title: "WORKFLOWS" }, {
            actions: i(() => [
              N.value.length > 0 ? (o(), E(J, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...U[8] || (U[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : u("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(kt, {
            modelValue: l.value,
            "onUpdate:modelValue": U[0] || (U[0] = (b) => l.value = b),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value ? (o(), E(lt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), E(it, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            M.value.length ? (o(), E(Ie, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(M.value, (b) => (o(), E(Fe, {
                  key: b.name,
                  status: "broken"
                }, {
                  icon: i(() => [...U[9] || (U[9] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(a(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(ie(b)), 1)
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (oe) => T(b.name)
                    }, {
                      default: i(() => [...U[10] || (U[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => D(b.name)
                    }, {
                      default: i(() => [...U[11] || (U[11] = [
                        y(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            L.value.length ? (o(), E(Ie, {
              key: 1,
              title: "NEW",
              count: L.value.length
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(L.value, (b) => (o(), E(Fe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    y(a(b.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    y(a(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(b)), 1)
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => D(b.name)
                    }, {
                      default: i(() => [...U[12] || (U[12] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            H.value.length ? (o(), E(Ie, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(H.value, (b) => (o(), E(Fe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...U[13] || (U[13] = [
                    y("⚡", -1)
                  ])]),
                  title: i(() => [
                    y(a(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(b)), 1)
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => D(b.name)
                    }, {
                      default: i(() => [...U[14] || (U[14] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            G.value.length ? (o(), E(Ie, {
              key: 3,
              title: "SYNCED",
              count: G.value.length,
              collapsible: !0,
              "initially-expanded": g.value,
              onToggle: U[2] || (U[2] = (b) => g.value = b)
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(Y.value, (b) => (o(), E(Fe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    y(a(b.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    y(a(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(b)), 1)
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => D(b.name)
                    }, {
                      default: i(() => [...U[15] || (U[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && G.value.length > 5 ? (o(), E(J, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (b) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    y(" View all " + a(G.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : u("", !0),
            B.value.length ? u("", !0) : (o(), E(Ye, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && _.value ? (o(), E(bl, {
        key: 0,
        "workflow-name": _.value,
        onClose: U[3] || (U[3] = (b) => d.value = !1),
        onResolve: U[4] || (U[4] = (b) => T(_.value)),
        onRefresh: U[5] || (U[5] = (b) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0),
      R.value && _.value ? (o(), E(Dc, {
        key: 1,
        "workflow-name": _.value,
        onClose: U[6] || (U[6] = (b) => R.value = !1),
        onInstall: A,
        onRefresh: U[7] || (U[7] = (b) => r("refresh")),
        onRestart: ae
      }, null, 8, ["workflow-name"])) : u("", !0)
    ], 64));
  }
}), lu = /* @__PURE__ */ K(au, [["__scopeId", "data-v-b7939cb4"]]), iu = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: te(["summary-bar", t.variant])
    }, [
      fe(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ K(iu, [["__scopeId", "data-v-ccb7816e"]]), ru = {
  key: 0,
  class: "model-details"
}, du = { class: "detail-section" }, cu = { class: "detail-row" }, uu = { class: "detail-value mono" }, mu = { class: "detail-row" }, vu = { class: "detail-value mono" }, fu = { class: "detail-row" }, gu = { class: "detail-value mono" }, pu = { class: "detail-row" }, hu = { class: "detail-value" }, yu = { class: "detail-row" }, wu = { class: "detail-value" }, ku = { class: "detail-row" }, bu = { class: "detail-value" }, _u = { class: "detail-section" }, $u = { class: "section-header" }, Cu = {
  key: 0,
  class: "locations-list"
}, xu = { class: "location-path mono" }, Su = {
  key: 0,
  class: "location-modified"
}, Iu = ["onClick"], Eu = {
  key: 1,
  class: "empty-state"
}, Mu = { class: "detail-section" }, Ru = { class: "section-header" }, Tu = {
  key: 0,
  class: "sources-list"
}, Lu = { class: "source-type" }, zu = ["href"], Nu = ["disabled", "onClick"], Du = {
  key: 1,
  class: "empty-state"
}, Pu = { class: "add-source-form" }, Uu = ["disabled"], Ou = {
  key: 2,
  class: "source-error"
}, Bu = {
  key: 3,
  class: "source-success"
}, Fu = /* @__PURE__ */ q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: r, addModelSource: h, removeModelSource: f, openFileLocation: v } = Te(), m = C(null), l = C(!0), g = C(null), w = C(""), d = C(!1), R = C(null), _ = C(null), N = C(null), $ = C(null);
    let x = null;
    function k(V, D = "success", T = 2e3) {
      x && clearTimeout(x), $.value = { message: V, type: D }, x = setTimeout(() => {
        $.value = null;
      }, T);
    }
    function B(V) {
      if (!V) return "Unknown";
      const D = 1024 * 1024 * 1024, T = 1024 * 1024;
      return V >= D ? `${(V / D).toFixed(1)} GB` : V >= T ? `${(V / T).toFixed(0)} MB` : `${(V / 1024).toFixed(0)} KB`;
    }
    function M(V) {
      navigator.clipboard.writeText(V), k("Copied to clipboard!");
    }
    async function L(V) {
      try {
        await v(V), k("Opening file location...");
      } catch {
        k("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!w.value.trim() || !m.value)) {
        d.value = !0, _.value = null, N.value = null;
        try {
          await h(m.value.hash, w.value.trim()), N.value = "Source added successfully!", w.value = "", await Y();
        } catch (V) {
          _.value = V instanceof Error ? V.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function G(V) {
      if (m.value) {
        R.value = V, _.value = null, N.value = null;
        try {
          await f(m.value.hash, V), k("Source removed"), await Y();
        } catch (D) {
          _.value = D instanceof Error ? D.message : "Failed to remove source";
        } finally {
          R.value = null;
        }
      }
    }
    async function Y() {
      l.value = !0, g.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (V) {
        g.value = V instanceof Error ? V.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Se(Y), (V, D) => {
      var T;
      return o(), s(F, null, [
        p(tt, {
          title: `Model Details: ${((T = m.value) == null ? void 0 : T.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: g.value,
          onClose: D[5] || (D[5] = (O) => V.$emit("close"))
        }, {
          body: i(() => {
            var O, A, ae, ie;
            return [
              m.value ? (o(), s("div", ru, [
                e("section", du, [
                  e("div", cu, [
                    D[6] || (D[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", uu, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[0] || (D[0] = (Q) => M(m.value.hash))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", mu, [
                    D[7] || (D[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", vu, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[1] || (D[1] = (Q) => M(m.value.blake3))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", fu, [
                    D[8] || (D[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", gu, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[2] || (D[2] = (Q) => M(m.value.sha256))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", pu, [
                    D[9] || (D[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", hu, a(B(m.value.size)), 1)
                  ]),
                  e("div", yu, [
                    D[10] || (D[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", wu, a(m.value.category), 1)
                  ]),
                  e("div", ku, [
                    D[11] || (D[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", bu, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", _u, [
                  e("h4", $u, "Locations (" + a(((O = m.value.locations) == null ? void 0 : O.length) || 0) + ")", 1),
                  (A = m.value.locations) != null && A.length ? (o(), s("div", Cu, [
                    (o(!0), s(F, null, X(m.value.locations, (Q, Z) => (o(), s("div", {
                      key: Z,
                      class: "location-item"
                    }, [
                      e("span", xu, a(Q.path), 1),
                      Q.modified ? (o(), s("span", Su, "Modified: " + a(Q.modified), 1)) : u("", !0),
                      Q.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => L(Q.path)
                      }, " Open File Location ", 8, Iu)) : u("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Eu, "No locations found"))
                ]),
                e("section", Mu, [
                  e("h4", Ru, "Download Sources (" + a(((ae = m.value.sources) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (ie = m.value.sources) != null && ie.length ? (o(), s("div", Tu, [
                    (o(!0), s(F, null, X(m.value.sources, (Q, Z) => (o(), s("div", {
                      key: Z,
                      class: "source-item"
                    }, [
                      e("span", Lu, a(Q.type) + ":", 1),
                      e("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Q.url), 9, zu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: R.value === Q.url,
                        onClick: (U) => G(Q.url)
                      }, a(R.value === Q.url ? "..." : "×"), 9, Nu)
                    ]))), 128))
                  ])) : (o(), s("div", Du, " No download sources configured ")),
                  e("div", Pu, [
                    Ze(e("input", {
                      "onUpdate:modelValue": D[3] || (D[3] = (Q) => w.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ao, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || d.value,
                      onClick: H
                    }, a(d.value ? "Adding..." : "Add Source"), 9, Uu)
                  ]),
                  _.value ? (o(), s("p", Ou, a(_.value), 1)) : u("", !0),
                  N.value ? (o(), s("p", Bu, a(N.value), 1)) : u("", !0)
                ])
              ])) : u("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: D[4] || (D[4] = (O) => V.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), E(Ee, { to: "body" }, [
          $.value ? (o(), s("div", {
            key: 0,
            class: te(["toast", $.value.type])
          }, a($.value.message), 3)) : u("", !0)
        ]))
      ], 64);
    };
  }
}), vo = /* @__PURE__ */ K(Fu, [["__scopeId", "data-v-f15cbb56"]]), Au = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: r, getStatus: h } = Te(), f = C([]), v = C([]), m = C("production"), l = C(!1), g = C(null), w = C(""), d = C(!1), R = C(null);
    function _() {
      d.value = !1, n("navigate", "model-index");
    }
    const N = P(
      () => f.value.reduce((Y, V) => Y + (V.size || 0), 0)
    ), $ = P(() => {
      if (!w.value.trim()) return f.value;
      const Y = w.value.toLowerCase();
      return f.value.filter((V) => V.filename.toLowerCase().includes(Y));
    }), x = P(() => {
      if (!w.value.trim()) return v.value;
      const Y = w.value.toLowerCase();
      return v.value.filter((V) => V.filename.toLowerCase().includes(Y));
    }), k = P(() => {
      const Y = {};
      for (const D of $.value) {
        const T = D.type || "other";
        Y[T] || (Y[T] = []), Y[T].push(D);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(Y).sort(([D], [T]) => {
        const O = V.indexOf(D), A = V.indexOf(T);
        return O >= 0 && A >= 0 ? O - A : O >= 0 ? -1 : A >= 0 ? 1 : D.localeCompare(T);
      }).map(([D, T]) => ({ type: D, models: T }));
    });
    function B(Y) {
      if (!Y) return "Unknown";
      const V = Y / (1024 * 1024);
      return V >= 1024 ? `${(V / 1024).toFixed(1)} GB` : `${V.toFixed(0)} MB`;
    }
    function M(Y) {
      R.value = Y.hash || Y.filename;
    }
    function L(Y) {
      n("navigate", "model-index");
    }
    function H(Y) {
      alert(`Download functionality not yet implemented for ${Y}`);
    }
    async function G() {
      l.value = !0, g.value = null;
      try {
        const Y = await r();
        f.value = Y, v.value = [];
        const V = await h();
        m.value = V.environment || "production";
      } catch (Y) {
        g.value = Y instanceof Error ? Y.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Se(G), (Y, V) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: V[0] || (V[0] = (D) => d.value = !0)
          })
        ]),
        search: i(() => [
          p(kt, {
            modelValue: w.value,
            "onUpdate:modelValue": V[1] || (V[1] = (D) => w.value = D),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (o(), E(lt, {
            key: 0,
            message: "Loading environment models..."
          })) : g.value ? (o(), E(it, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            f.value.length ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(f.value.length) + " models • " + a(B(N.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(F, null, X(k.value, (D) => (o(), E(Ie, {
              key: D.type,
              title: D.type.toUpperCase(),
              count: D.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(D.models, (T) => (o(), E(Fe, {
                  key: T.hash || T.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...V[4] || (V[4] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(a(T.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(B(T.size)), 1)
                  ]),
                  details: i(() => [
                    p(_e, {
                      label: "Used by:",
                      value: (T.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    p(_e, {
                      label: "Path:",
                      value: T.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => M(T)
                    }, {
                      default: i(() => [...V[5] || (V[5] = [
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
            x.value.length ? (o(), E(Ie, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(x.value, (D) => (o(), E(Fe, {
                  key: D.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...V[6] || (V[6] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(a(D.filename), 1)
                  ]),
                  subtitle: i(() => [...V[7] || (V[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var T;
                    return [
                      p(_e, {
                        label: "Required by:",
                        value: ((T = D.workflow_names) == null ? void 0 : T.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (T) => H(D.filename)
                    }, {
                      default: i(() => [...V[8] || (V[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (T) => L(D.filename)
                    }, {
                      default: i(() => [...V[9] || (V[9] = [
                        y(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !$.value.length && !x.value.length ? (o(), E(Ye, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      p(ot, {
        show: d.value,
        title: "About Environment Models",
        onClose: V[2] || (V[2] = (D) => d.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            V[10] || (V[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            V[11] || (V[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          p(J, {
            variant: "primary",
            onClick: _
          }, {
            default: i(() => [...V[12] || (V[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      R.value ? (o(), E(vo, {
        key: 0,
        identifier: R.value,
        onClose: V[3] || (V[3] = (D) => R.value = null)
      }, null, 8, ["identifier"])) : u("", !0)
    ], 64));
  }
}), Vu = /* @__PURE__ */ K(Au, [["__scopeId", "data-v-cb4f12b3"]]), Wu = {
  key: 0,
  class: "indexing-progress"
}, Gu = { class: "progress-info" }, ju = { class: "progress-label" }, Hu = { class: "progress-count" }, qu = { class: "progress-bar" }, Ku = { class: "modal-content" }, Yu = { class: "modal-header" }, Ju = { class: "modal-body" }, Qu = { class: "input-group" }, Xu = { class: "current-path" }, Zu = { class: "input-group" }, em = { class: "modal-footer" }, tm = { class: "modal-content" }, om = { class: "modal-header" }, sm = { class: "modal-body" }, nm = { class: "input-group" }, am = { class: "input-group" }, lm = { class: "modal-footer" }, im = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: h,
      setModelsDirectory: f
    } = Te(), { addToQueue: v } = Tt(), m = c, l = C([]), g = C(!1), w = C(!1), d = C(null), R = C(""), _ = C(!1), N = C(null), $ = C(!1), x = C(null), k = C(""), B = C(!1), M = C(!1), L = C(""), H = C(""), G = C(null), Y = P(
      () => l.value.reduce((U, b) => U + (b.size || 0), 0)
    ), V = P(() => {
      if (!R.value.trim()) return l.value;
      const U = R.value.toLowerCase();
      return l.value.filter((b) => {
        const oe = b, ee = b.sha256 || oe.sha256_hash || "";
        return b.filename.toLowerCase().includes(U) || ee.toLowerCase().includes(U);
      });
    }), D = P(() => {
      const U = {};
      for (const oe of V.value) {
        const ee = oe.type || "other";
        U[ee] || (U[ee] = []), U[ee].push(oe);
      }
      const b = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([oe], [ee]) => {
        const $e = b.indexOf(oe), we = b.indexOf(ee);
        return $e >= 0 && we >= 0 ? $e - we : $e >= 0 ? -1 : we >= 0 ? 1 : oe.localeCompare(ee);
      }).map(([oe, ee]) => ({ type: oe, models: ee }));
    });
    function T(U) {
      if (!U) return "Unknown";
      const b = 1024 * 1024 * 1024, oe = 1024 * 1024;
      return U >= b ? `${(U / b).toFixed(1)} GB` : U >= oe ? `${(U / oe).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function O(U) {
      N.value = U.hash || U.filename;
    }
    async function A() {
      w.value = !0, d.value = null;
      try {
        const U = await r();
        await Q(), U.changes > 0 && console.log(`Scan complete: ${U.changes} changes detected`);
      } catch (U) {
        d.value = U instanceof Error ? U.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function ae() {
      if (k.value.trim()) {
        B.value = !0, d.value = null;
        try {
          const U = await f(k.value.trim());
          x.value = U.path, $.value = !1, k.value = "", await Q(), console.log(`Directory changed: ${U.models_indexed} models indexed`), m("refresh");
        } catch (U) {
          d.value = U instanceof Error ? U.message : "Failed to change directory";
        } finally {
          B.value = !1;
        }
      }
    }
    function ie() {
      if (!L.value.trim() || !H.value.trim()) return;
      const U = H.value.split("/").pop() || "model.safetensors";
      v([{
        workflow: "__manual__",
        filename: U,
        url: L.value.trim(),
        targetPath: H.value.trim()
      }]), L.value = "", H.value = "", M.value = !1;
    }
    async function Q() {
      g.value = !0, d.value = null;
      try {
        l.value = await n();
      } catch (U) {
        d.value = U instanceof Error ? U.message : "Failed to load workspace models";
      } finally {
        g.value = !1;
      }
    }
    async function Z() {
      try {
        const U = await h();
        x.value = U.path;
      } catch {
      }
    }
    return Se(() => {
      Q(), Z();
    }), (U, b) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: b[2] || (b[2] = (oe) => _.value = !0)
          }, {
            actions: i(() => [
              p(J, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: A
              }, {
                default: i(() => [
                  y(a(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              p(J, {
                variant: "primary",
                size: "sm",
                onClick: b[0] || (b[0] = (oe) => $.value = !0)
              }, {
                default: i(() => [...b[15] || (b[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              p(J, {
                variant: "primary",
                size: "sm",
                onClick: b[1] || (b[1] = (oe) => M.value = !0)
              }, {
                default: i(() => [...b[16] || (b[16] = [
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
          G.value ? (o(), s("div", Wu, [
            e("div", Gu, [
              e("span", ju, a(G.value.message), 1),
              e("span", Hu, a(G.value.current) + "/" + a(G.value.total), 1)
            ]),
            e("div", qu, [
              e("div", {
                class: "progress-fill",
                style: et({ width: `${G.value.current / G.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : u("", !0),
          p(kt, {
            modelValue: R.value,
            "onUpdate:modelValue": b[3] || (b[3] = (oe) => R.value = oe),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          g.value || G.value ? (o(), E(lt, {
            key: 0,
            message: G.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), E(it, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            l.value.length ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(l.value.length) + " models • " + a(T(Y.value)), 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(F, null, X(D.value, (oe) => (o(), E(Ie, {
              key: oe.type,
              title: oe.type.toUpperCase(),
              count: oe.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(oe.models, (ee) => (o(), E(Fe, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...b[17] || (b[17] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(a(ee.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(T(ee.size)), 1)
                  ]),
                  details: i(() => [
                    p(_e, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($e) => O(ee)
                    }, {
                      default: i(() => [...b[18] || (b[18] = [
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
            V.value.length ? u("", !0) : (o(), E(Ye, {
              key: 1,
              icon: "📭",
              message: R.value ? `No models match '${R.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p(ot, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: b[4] || (b[4] = (oe) => _.value = !1)
      }, {
        content: i(() => [...b[19] || (b[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      N.value ? (o(), E(vo, {
        key: 0,
        identifier: N.value,
        onClose: b[5] || (b[5] = (oe) => N.value = null)
      }, null, 8, ["identifier"])) : u("", !0),
      (o(), E(Ee, { to: "body" }, [
        $.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[9] || (b[9] = be((oe) => $.value = !1, ["self"]))
        }, [
          e("div", Ku, [
            e("div", Yu, [
              b[20] || (b[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[6] || (b[6] = (oe) => $.value = !1)
              }, "✕")
            ]),
            e("div", Ju, [
              e("div", Qu, [
                b[21] || (b[21] = e("label", null, "Current Directory", -1)),
                e("code", Xu, a(x.value || "Not set"), 1)
              ]),
              e("div", Zu, [
                b[22] || (b[22] = e("label", null, "New Directory Path", -1)),
                p(Ke, {
                  modelValue: k.value,
                  "onUpdate:modelValue": b[7] || (b[7] = (oe) => k.value = oe),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              b[23] || (b[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", em, [
              p(re, {
                variant: "secondary",
                onClick: b[8] || (b[8] = (oe) => $.value = !1)
              }, {
                default: i(() => [...b[24] || (b[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              p(re, {
                variant: "primary",
                disabled: !k.value.trim() || B.value,
                loading: B.value,
                onClick: ae
              }, {
                default: i(() => [
                  y(a(B.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : u("", !0)
      ])),
      (o(), E(Ee, { to: "body" }, [
        M.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[14] || (b[14] = be((oe) => M.value = !1, ["self"]))
        }, [
          e("div", tm, [
            e("div", om, [
              b[25] || (b[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[10] || (b[10] = (oe) => M.value = !1)
              }, "✕")
            ]),
            e("div", sm, [
              e("div", nm, [
                b[26] || (b[26] = e("label", null, "Download URL", -1)),
                p(Ke, {
                  modelValue: L.value,
                  "onUpdate:modelValue": b[11] || (b[11] = (oe) => L.value = oe),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", am, [
                b[27] || (b[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                p(Ke, {
                  modelValue: H.value,
                  "onUpdate:modelValue": b[12] || (b[12] = (oe) => H.value = oe),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              b[28] || (b[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", lm, [
              p(re, {
                variant: "secondary",
                onClick: b[13] || (b[13] = (oe) => M.value = !1)
              }, {
                default: i(() => [...b[29] || (b[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              p(re, {
                variant: "primary",
                disabled: !L.value.trim() || !H.value.trim(),
                onClick: ie
              }, {
                default: i(() => [...b[30] || (b[30] = [
                  y(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : u("", !0)
      ]))
    ], 64));
  }
}), rm = /* @__PURE__ */ K(im, [["__scopeId", "data-v-73b78d84"]]), dm = { class: "node-details" }, cm = { class: "status-row" }, um = {
  key: 0,
  class: "detail-row"
}, mm = { class: "value" }, vm = { class: "detail-row" }, fm = { class: "value" }, gm = {
  key: 1,
  class: "detail-row"
}, pm = { class: "value mono" }, hm = {
  key: 2,
  class: "detail-row"
}, ym = ["href"], wm = {
  key: 3,
  class: "detail-row"
}, km = { class: "value mono small" }, bm = { class: "detail-row" }, _m = {
  key: 0,
  class: "value"
}, $m = {
  key: 1,
  class: "workflow-list"
}, Cm = /* @__PURE__ */ q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), f = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), v = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, l) => (o(), E(tt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (g) => r("close"))
    }, {
      body: i(() => [
        e("div", dm, [
          e("div", cm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: te(["status-badge", h.value])
            }, a(f.value), 3)
          ]),
          t.node.version ? (o(), s("div", um, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", mm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : u("", !0),
          e("div", vm, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", fm, a(v.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", gm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", pm, a(t.node.registry_id), 1)
          ])) : u("", !0),
          t.node.repository ? (o(), s("div", hm, [
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
            ], 8, ym)
          ])) : u("", !0),
          t.node.download_url ? (o(), s("div", wm, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", km, a(t.node.download_url), 1)
          ])) : u("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", bm, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", _m, " Not used in any workflows ")) : (o(), s("div", $m, [
              (o(!0), s(F, null, X(t.node.used_in_workflows, (g) => (o(), s("span", {
                key: g,
                class: "workflow-tag"
              }, a(g), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        p(re, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (g) => r("close"))
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
}), xm = /* @__PURE__ */ K(Cm, [["__scopeId", "data-v-b342f626"]]), Sm = { key: 0 }, Im = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Em = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Mm = /* @__PURE__ */ q({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: r, trackNodeAsDev: h, installNode: f, uninstallNode: v } = Te(), m = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = C(!1), g = C(null), w = C(""), d = C(!1), R = C(null), _ = P(() => {
      if (!w.value.trim()) return m.value.nodes;
      const D = w.value.toLowerCase();
      return m.value.nodes.filter(
        (T) => {
          var O, A;
          return T.name.toLowerCase().includes(D) || ((O = T.description) == null ? void 0 : O.toLowerCase().includes(D)) || ((A = T.repository) == null ? void 0 : A.toLowerCase().includes(D));
        }
      );
    }), N = P(
      () => _.value.filter((D) => D.installed && D.tracked)
    ), $ = P(
      () => _.value.filter((D) => !D.installed && D.tracked)
    ), x = P(
      () => _.value.filter((D) => D.installed && !D.tracked)
    );
    function k(D) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[D] || D;
    }
    function B(D) {
      return !D.used_in_workflows || D.used_in_workflows.length === 0 ? "Not used in any workflows" : D.used_in_workflows.length === 1 ? D.used_in_workflows[0] : `${D.used_in_workflows.length} workflows`;
    }
    function M(D) {
      R.value = D;
    }
    function L() {
      n("open-node-manager");
    }
    async function H(D) {
      if (confirm(`Track "${D}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const T = await h(D);
          T.status === "success" ? (alert(`Node "${D}" is now tracked as development!`), await V()) : alert(`Failed to track node: ${T.message || "Unknown error"}`);
        } catch (T) {
          alert(`Error tracking node: ${T instanceof Error ? T.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function G(D) {
      if (confirm(`Remove untracked node "${D}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const T = await v(D);
          T.status === "success" ? (alert(`Node "${D}" removed!`), await V()) : alert(`Failed to remove node: ${T.message || "Unknown error"}`);
        } catch (T) {
          alert(`Error removing node: ${T instanceof Error ? T.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function Y(D) {
      if (confirm(`Install node "${D}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const T = await f(D);
          T.status === "success" ? (alert(`Node "${D}" installed successfully!`), await V()) : alert(`Failed to install node: ${T.message || "Unknown error"}`);
        } catch (T) {
          alert(`Error installing node: ${T instanceof Error ? T.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function V() {
      l.value = !0, g.value = null;
      try {
        m.value = await r();
      } catch (D) {
        g.value = D instanceof Error ? D.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Se(V), (D, T) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (O) => d.value = !0)
          }, {
            actions: i(() => [
              p(J, {
                variant: "primary",
                size: "sm",
                onClick: L
              }, {
                default: i(() => [...T[5] || (T[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(kt, {
            modelValue: w.value,
            "onUpdate:modelValue": T[1] || (T[1] = (O) => w.value = O),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (o(), E(lt, {
            key: 0,
            message: "Loading nodes..."
          })) : g.value ? (o(), E(it, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            m.value.total_count ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(a(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (o(), s(F, { key: 0 }, [
                  y(" • " + a(m.value.missing_count) + " missing", 1)
                ], 64)) : u("", !0),
                m.value.untracked_count ? (o(), s(F, { key: 1 }, [
                  y(" • " + a(m.value.untracked_count) + " untracked", 1)
                ], 64)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            x.value.length ? (o(), E(Ie, {
              key: 1,
              title: "UNTRACKED",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(x.value, (O) => (o(), E(Fe, {
                  key: O.name,
                  status: "warning"
                }, {
                  icon: i(() => [...T[6] || (T[6] = [
                    y("?", -1)
                  ])]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [...T[7] || (T[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    p(_e, {
                      label: "Used by:",
                      value: B(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => M(O)
                    }, {
                      default: i(() => [...T[8] || (T[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => H(O.name)
                    }, {
                      default: i(() => [...T[9] || (T[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (A) => G(O.name)
                    }, {
                      default: i(() => [...T[10] || (T[10] = [
                        y(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            N.value.length ? (o(), E(Ie, {
              key: 2,
              title: "INSTALLED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(N.value, (O) => (o(), E(Fe, {
                  key: O.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    y(a(O.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [
                    O.version ? (o(), s("span", Sm, a(O.source === "development" ? "" : "v") + a(O.version), 1)) : (o(), s("span", Im, "version unknown")),
                    e("span", Em, " • " + a(k(O.source)), 1)
                  ]),
                  details: i(() => [
                    p(_e, {
                      label: "Used by:",
                      value: B(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => M(O)
                    }, {
                      default: i(() => [...T[11] || (T[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: L
                    }, {
                      default: i(() => [...T[12] || (T[12] = [
                        y(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            $.value.length ? (o(), E(Ie, {
              key: 3,
              title: "MISSING",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(F, null, X($.value, (O) => (o(), E(Fe, {
                  key: O.name,
                  status: "missing"
                }, {
                  icon: i(() => [...T[13] || (T[13] = [
                    y("!", -1)
                  ])]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [...T[14] || (T[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    p(_e, {
                      label: "Required by:",
                      value: B(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => M(O)
                    }, {
                      default: i(() => [...T[15] || (T[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Y(O.name)
                    }, {
                      default: i(() => [...T[16] || (T[16] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !N.value.length && !$.value.length && !x.value.length ? (o(), E(Ye, {
              key: 4,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      p(ot, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: T[3] || (T[3] = (O) => d.value = !1)
      }, {
        content: i(() => [...T[17] || (T[17] = [
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
          p(J, {
            variant: "primary",
            onClick: T[2] || (T[2] = (O) => d.value = !1)
          }, {
            default: i(() => [...T[18] || (T[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      R.value ? (o(), E(xm, {
        key: 0,
        node: R.value,
        onClose: T[4] || (T[4] = (O) => R.value = null)
      }, null, 8, ["node"])) : u("", !0)
    ], 64));
  }
}), Rm = /* @__PURE__ */ K(Mm, [["__scopeId", "data-v-4ac1465a"]]);
function fo(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Tm = { class: "remote-url-display" }, Lm = ["title"], zm = ["title"], Nm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Dm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Pm = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = C(!1), r = P(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const f = c.url.slice(0, Math.floor(c.maxLength * 0.6)), v = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${f}...${v}`;
    });
    async function h() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy URL:", f);
      }
    }
    return (f, v) => (o(), s("div", Tm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, Lm),
      e("button", {
        class: te(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Dm, [...v[1] || (v[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", Nm, [...v[0] || (v[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, zm)
    ]));
  }
}), Um = /* @__PURE__ */ K(Pm, [["__scopeId", "data-v-7768a58d"]]), Om = { class: "remote-title" }, Bm = {
  key: 0,
  class: "default-badge"
}, Fm = {
  key: 1,
  class: "sync-badge"
}, Am = {
  key: 0,
  class: "ahead"
}, Vm = {
  key: 1,
  class: "behind"
}, Wm = {
  key: 1,
  class: "synced"
}, Gm = ["href"], jm = {
  key: 1,
  class: "remote-url-text"
}, Hm = /* @__PURE__ */ q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = P(() => c.fetchingRemote === c.remote.name), r = P(() => c.remote.is_default), h = P(() => c.syncStatus && c.syncStatus.behind > 0), f = P(() => c.syncStatus && c.syncStatus.ahead > 0), v = P(() => c.remote.push_url !== c.remote.fetch_url), m = P(() => {
      const g = c.remote.fetch_url, w = g.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return w ? `https://${w[1]}/${w[2]}` : g.startsWith("https://") || g.startsWith("http://") ? g.replace(/\.git$/, "") : null;
    }), l = P(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (g, w) => (o(), E(Fe, {
      status: r.value ? "synced" : void 0
    }, Rt({
      icon: i(() => [
        y(a(r.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Om, [
          e("span", null, a(t.remote.name), 1),
          r.value ? (o(), s("span", Bm, "DEFAULT")) : u("", !0),
          t.syncStatus ? (o(), s("span", Fm, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (o(), s(F, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (o(), s("span", Am, "↑" + a(t.syncStatus.ahead), 1)) : u("", !0),
              t.syncStatus.behind > 0 ? (o(), s("span", Vm, "↓" + a(t.syncStatus.behind), 1)) : u("", !0)
            ], 64)) : (o(), s("span", Wm, "✓ synced"))
          ])) : u("", !0)
        ])
      ]),
      subtitle: i(() => [
        m.value ? (o(), s("a", {
          key: 0,
          href: m.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: w[0] || (w[0] = be(() => {
          }, ["stop"]))
        }, a(l.value), 9, Gm)) : (o(), s("span", jm, a(l.value), 1))
      ]),
      actions: i(() => [
        p(J, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: w[1] || (w[1] = (d) => g.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...w[6] || (w[6] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        p(J, {
          variant: h.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[2] || (w[2] = (d) => g.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        p(J, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[3] || (w[3] = (d) => g.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        p(J, {
          variant: "secondary",
          size: "xs",
          onClick: w[4] || (w[4] = (d) => g.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...w[7] || (w[7] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        r.value ? u("", !0) : (o(), E(J, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: w[5] || (w[5] = (d) => g.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...w[8] || (w[8] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      v.value ? {
        name: "details",
        fn: i(() => [
          t.remote.push_url !== t.remote.fetch_url ? (o(), E(_e, {
            key: 0,
            label: "Push URL:"
          }, {
            default: i(() => [
              p(Um, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : u("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), qm = /* @__PURE__ */ K(Hm, [["__scopeId", "data-v-8310f3a8"]]), Km = ["for"], Ym = {
  key: 0,
  class: "base-form-field-required"
}, Jm = { class: "base-form-field-input" }, Qm = {
  key: 1,
  class: "base-form-field-error"
}, Xm = {
  key: 2,
  class: "base-form-field-hint"
}, Zm = /* @__PURE__ */ q({
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
    const c = t, n = P(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, h) => (o(), s("div", {
      class: te(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (o(), s("span", Ym, "*")) : u("", !0)
      ], 8, Km)) : u("", !0),
      e("div", Jm, [
        fe(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Qm, a(t.error), 1)) : t.hint ? (o(), s("span", Xm, a(t.hint), 1)) : u("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ K(Zm, [["__scopeId", "data-v-9a1cf296"]]), ev = { class: "remote-form" }, tv = { class: "form-header" }, ov = { class: "form-body" }, sv = {
  key: 0,
  class: "form-error"
}, nv = { class: "form-actions" }, av = /* @__PURE__ */ q({
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
    }), f = C(!1), v = C(null);
    wt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = P(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!m.value || f.value)) {
        v.value = null, f.value = !0;
        try {
          r("submit", h.value);
        } catch (g) {
          v.value = g instanceof Error ? g.message : "Failed to submit form";
        } finally {
          f.value = !1;
        }
      }
    }
    return (g, w) => (o(), s("div", ev, [
      e("div", tv, [
        p(He, null, {
          default: i(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", ov, [
        p(Vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            p(Ke, {
              modelValue: h.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (d) => h.value.name = d),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        p(Vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            p(Ke, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (d) => h.value.fetchUrl = d),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p(Vt, { label: "Push URL (optional)" }, {
          default: i(() => [
            p(Ke, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (d) => h.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (o(), s("div", sv, a(v.value), 1)) : u("", !0)
      ]),
      e("div", nv, [
        p(J, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: f.value,
          onClick: l
        }, {
          default: i(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        p(J, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (d) => g.$emit("cancel"))
        }, {
          default: i(() => [...w[4] || (w[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), lv = /* @__PURE__ */ K(av, [["__scopeId", "data-v-56021b18"]]), iv = { class: "conflict-summary-box" }, rv = { class: "summary-header" }, dv = { class: "summary-text" }, cv = { key: 0 }, uv = {
  key: 1,
  class: "all-resolved"
}, mv = { class: "summary-progress" }, vv = { class: "progress-bar" }, fv = { class: "progress-text" }, gv = /* @__PURE__ */ q({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = P(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (r, h) => (o(), s("div", iv, [
      e("div", rv, [
        h[0] || (h[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", dv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (o(), s("p", cv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (o(), s("p", uv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", mv, [
        e("div", vv, [
          e("div", {
            class: "progress-fill",
            style: et({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", fv, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), pv = /* @__PURE__ */ K(gv, [["__scopeId", "data-v-4e9e6cc9"]]), hv = { class: "modal-header" }, yv = { class: "modal-title" }, wv = { class: "modal-body" }, kv = {
  key: 0,
  class: "error-box"
}, bv = {
  key: 0,
  class: "error-hint"
}, _v = {
  key: 1,
  class: "loading-state"
}, $v = { class: "commit-summary" }, Cv = {
  key: 0,
  class: "changes-section"
}, xv = {
  key: 0,
  class: "change-group",
  open: ""
}, Sv = { class: "change-count" }, Iv = { class: "change-list" }, Ev = {
  key: 0,
  class: "conflict-badge"
}, Mv = {
  key: 1,
  class: "change-group"
}, Rv = { class: "change-count" }, Tv = { class: "change-list" }, Lv = {
  key: 2,
  class: "change-group"
}, zv = { class: "change-count" }, Nv = { class: "change-list" }, Dv = {
  key: 2,
  class: "strategy-section"
}, Pv = { class: "radio-group" }, Uv = { class: "radio-option" }, Ov = { class: "radio-option" }, Bv = { class: "radio-option" }, Fv = {
  key: 3,
  class: "up-to-date"
}, Av = { class: "modal-actions" }, eo = "comfygit.pullModelStrategy", Vv = /* @__PURE__ */ q({
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
    const n = t, r = c, h = C(localStorage.getItem(eo) || "skip");
    wt(h, (x) => {
      localStorage.setItem(eo, x);
    });
    const f = P(() => {
      var x;
      return ((x = n.error) == null ? void 0 : x.toLowerCase().includes("unrelated histories")) ?? !1;
    }), v = P(() => {
      if (!n.preview) return 0;
      const x = n.preview.changes.workflows;
      return x.added.length + x.modified.length + x.deleted.length;
    }), m = P(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), l = P(() => {
      var x;
      return v.value > 0 || m.value > 0 || (((x = n.preview) == null ? void 0 : x.changes.models.count) || 0) > 0;
    }), g = P(() => n.preview && fo(n.preview) ? n.preview : null), w = P(() => {
      var x;
      return ((x = g.value) == null ? void 0 : x.workflow_conflicts.length) ?? 0;
    }), d = P(() => {
      var x;
      return ((x = n.conflictResolutions) == null ? void 0 : x.size) ?? 0;
    }), R = P(
      () => w.value > 0 && d.value === w.value
    ), _ = P(() => !(!n.preview || n.preview.has_uncommitted_changes || g.value && !R.value));
    function N(x) {
      if (!g.value) return !1;
      const k = x.replace(/\.json$/, "");
      return g.value.workflow_conflicts.some((B) => B.name === k);
    }
    function $(x) {
      const k = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      r("pull", { modelStrategy: h.value, force: x, resolutions: k });
    }
    return (x, k) => {
      var B, M;
      return o(), E(Ee, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[11] || (k[11] = (L) => x.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[10] || (k[10] = be(() => {
            }, ["stop"]))
          }, [
            e("div", hv, [
              e("h3", yv, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (L) => x.$emit("close"))
              }, "✕")
            ]),
            e("div", wv, [
              t.error ? (o(), s("div", kv, [
                k[13] || (k[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  k[12] || (k[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  f.value ? (o(), s("p", bv, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : u("", !0)
                ])
              ])) : t.loading ? (o(), s("div", _v, [...k[14] || (k[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (B = t.preview) != null && B.has_uncommitted_changes ? (o(), s(F, { key: 2 }, [
                k[15] || (k[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                k[16] || (k[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (o(), s(F, { key: 3 }, [
                e("div", $v, [
                  k[17] || (k[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                l.value ? (o(), s("div", Cv, [
                  k[21] || (k[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  v.value > 0 ? (o(), s("details", xv, [
                    e("summary", null, [
                      k[18] || (k[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Sv, a(v.value) + " changes", 1)
                    ]),
                    e("div", Iv, [
                      (o(!0), s(F, null, X(t.preview.changes.workflows.added, (L) => (o(), s("div", {
                        key: "a-" + L,
                        class: "change-item add"
                      }, " + " + a(L), 1))), 128)),
                      (o(!0), s(F, null, X(t.preview.changes.workflows.modified, (L) => (o(), s("div", {
                        key: "m-" + L,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(L) + " ", 1),
                        N(L) ? (o(), s("span", Ev, "CONFLICT")) : u("", !0)
                      ]))), 128)),
                      (o(!0), s(F, null, X(t.preview.changes.workflows.deleted, (L) => (o(), s("div", {
                        key: "d-" + L,
                        class: "change-item delete"
                      }, " - " + a(L), 1))), 128))
                    ])
                  ])) : u("", !0),
                  m.value > 0 ? (o(), s("details", Mv, [
                    e("summary", null, [
                      k[19] || (k[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Rv, a(m.value) + " to install", 1)
                    ]),
                    e("div", Tv, [
                      (o(!0), s(F, null, X(t.preview.changes.nodes.to_install, (L) => (o(), s("div", {
                        key: L,
                        class: "change-item add"
                      }, " + " + a(L), 1))), 128))
                    ])
                  ])) : u("", !0),
                  t.preview.changes.models.count > 0 ? (o(), s("details", Lv, [
                    e("summary", null, [
                      k[20] || (k[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", zv, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Nv, [
                      (o(!0), s(F, null, X(t.preview.changes.models.referenced, (L) => (o(), s("div", {
                        key: L,
                        class: "change-item"
                      }, a(L), 1))), 128))
                    ])
                  ])) : u("", !0)
                ])) : u("", !0),
                g.value ? (o(), E(pv, {
                  key: 1,
                  "conflict-count": w.value,
                  "resolved-count": d.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : u("", !0),
                t.preview.changes.models.count > 0 ? (o(), s("div", Dv, [
                  k[26] || (k[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Pv, [
                    e("label", Uv, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[1] || (k[1] = (L) => h.value = L),
                        value: "all"
                      }, null, 512), [
                        [Bt, h.value]
                      ]),
                      k[22] || (k[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Ov, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[2] || (k[2] = (L) => h.value = L),
                        value: "required"
                      }, null, 512), [
                        [Bt, h.value]
                      ]),
                      k[23] || (k[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Bv, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[3] || (k[3] = (L) => h.value = L),
                        value: "skip"
                      }, null, 512), [
                        [Bt, h.value]
                      ]),
                      k[24] || (k[24] = e("span", null, "Skip model downloads", -1)),
                      k[25] || (k[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  k[27] || (k[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : u("", !0),
                t.preview.commits_behind === 0 ? (o(), s("div", Fv, [
                  k[28] || (k[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : u("", !0)
              ], 64)) : u("", !0)
            ]),
            e("div", Av, [
              p(J, {
                variant: "secondary",
                onClick: k[4] || (k[4] = (L) => x.$emit("close"))
              }, {
                default: i(() => [...k[29] || (k[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (o(), s(F, { key: 0 }, [
                p(J, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: k[5] || (k[5] = (L) => $(!1))
                }, {
                  default: i(() => [...k[30] || (k[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                p(J, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: k[6] || (k[6] = (L) => $(!0))
                }, {
                  default: i(() => [...k[31] || (k[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (M = t.preview) != null && M.has_uncommitted_changes ? (o(), E(J, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: k[7] || (k[7] = (L) => $(!0))
              }, {
                default: i(() => [...k[32] || (k[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (o(), s(F, { key: 2 }, [
                g.value && !R.value ? (o(), E(J, {
                  key: 0,
                  variant: "primary",
                  onClick: k[8] || (k[8] = (L) => r("openConflictResolution"))
                }, {
                  default: i(() => [
                    y(" Resolve Conflicts (" + a(d.value) + "/" + a(w.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (o(), E(J, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !_.value,
                  onClick: k[9] || (k[9] = (L) => $(!1))
                }, {
                  default: i(() => [...k[33] || (k[33] = [
                    y(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : u("", !0)
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), Wv = /* @__PURE__ */ K(Vv, [["__scopeId", "data-v-300c7b2f"]]), Gv = { class: "modal-header" }, jv = { class: "modal-title" }, Hv = { class: "modal-body" }, qv = {
  key: 0,
  class: "loading-state"
}, Kv = {
  key: 1,
  class: "warning-box"
}, Yv = {
  key: 0,
  class: "commits-section"
}, Jv = { class: "commit-list" }, Qv = { class: "commit-hash" }, Xv = { class: "commit-message" }, Zv = { class: "commit-date" }, ef = { class: "force-option" }, tf = { class: "checkbox-option" }, of = { class: "commit-summary" }, sf = {
  key: 0,
  class: "commits-section"
}, nf = { class: "commit-list" }, af = { class: "commit-hash" }, lf = { class: "commit-message" }, rf = { class: "commit-date" }, df = {
  key: 1,
  class: "up-to-date"
}, cf = { class: "modal-actions" }, uf = /* @__PURE__ */ q({
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
    function h(f) {
      n("push", { force: f });
    }
    return (f, v) => {
      var m, l, g;
      return o(), E(Ee, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: v[7] || (v[7] = (w) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: v[6] || (v[6] = be(() => {
            }, ["stop"]))
          }, [
            e("div", Gv, [
              e("h3", jv, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: v[0] || (v[0] = (w) => f.$emit("close"))
              }, "✕")
            ]),
            e("div", Hv, [
              t.loading ? (o(), s("div", qv, [...v[8] || (v[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (o(), s("div", Kv, [...v[9] || (v[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (l = t.preview) != null && l.remote_has_new_commits ? (o(), s(F, { key: 2 }, [
                v[13] || (v[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (o(), s("div", Yv, [
                  v[10] || (v[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Jv, [
                    (o(!0), s(F, null, X(t.preview.commits, (w) => (o(), s("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Qv, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Xv, a(w.message), 1),
                      e("span", Zv, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                e("div", ef, [
                  e("label", tf, [
                    Ze(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": v[1] || (v[1] = (w) => r.value = w)
                    }, null, 512), [
                      [lo, r.value]
                    ]),
                    v[11] || (v[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  v[12] || (v[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (o(), s(F, { key: 3 }, [
                e("div", of, [
                  v[14] || (v[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (o(), s("div", sf, [
                  v[15] || (v[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", nf, [
                    (o(!0), s(F, null, X(t.preview.commits, (w) => (o(), s("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", af, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", lf, a(w.message), 1),
                      e("span", rf, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (o(), s("div", df, [
                  v[16] || (v[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : u("", !0)
            ]),
            e("div", cf, [
              p(J, {
                variant: "secondary",
                onClick: v[2] || (v[2] = (w) => f.$emit("close"))
              }, {
                default: i(() => [...v[17] || (v[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (g = t.preview) != null && g.remote_has_new_commits ? (o(), s(F, { key: 0 }, [
                p(J, {
                  variant: "secondary",
                  onClick: v[3] || (v[3] = (w) => f.$emit("pull-first"))
                }, {
                  default: i(() => [...v[18] || (v[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                p(J, {
                  variant: "destructive",
                  disabled: !r.value,
                  loading: t.pushing,
                  onClick: v[4] || (v[4] = (w) => h(!0))
                }, {
                  default: i(() => [...v[19] || (v[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (o(), E(J, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: v[5] || (v[5] = (w) => h(!1))
              }, {
                default: i(() => [...v[20] || (v[20] = [
                  y(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : u("", !0)
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), mf = /* @__PURE__ */ K(uf, [["__scopeId", "data-v-bc6ded53"]]), vf = { class: "resolution-choice-group" }, ff = ["disabled"], gf = ["disabled"], pf = /* @__PURE__ */ q({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("div", vf, [
      e("button", {
        class: te(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (r) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, ff),
      e("button", {
        class: te(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (r) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, gf)
    ]));
  }
}), hf = /* @__PURE__ */ K(pf, [["__scopeId", "data-v-985715ed"]]), yf = { class: "conflict-header" }, wf = { class: "conflict-info" }, kf = { class: "workflow-name" }, bf = { class: "conflict-description" }, _f = {
  key: 0,
  class: "resolved-badge"
}, $f = { class: "resolved-text" }, Cf = { class: "conflict-hashes" }, xf = { class: "hash-item" }, Sf = { class: "hash-item" }, If = { class: "conflict-actions" }, Ef = /* @__PURE__ */ q({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = C(n.resolution);
    wt(() => n.resolution, (l) => {
      h.value = l;
    }), wt(h, (l) => {
      l && r("resolve", l);
    });
    const f = P(() => h.value !== null), v = P(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = P(() => {
      switch (h.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (l, g) => {
      var w, d;
      return o(), s("div", {
        class: te(["conflict-item", { resolved: f.value }])
      }, [
        e("div", yf, [
          g[2] || (g[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", wf, [
            e("code", kf, a(t.conflict.name) + ".json", 1),
            e("div", bf, a(v.value), 1)
          ]),
          f.value ? (o(), s("div", _f, [
            g[1] || (g[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", $f, a(m.value), 1)
          ])) : u("", !0)
        ]),
        e("div", Cf, [
          e("span", xf, [
            g[3] || (g[3] = y("Your: ", -1)),
            e("code", null, a(((w = t.conflict.base_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Sf, [
            g[4] || (g[4] = y("Theirs: ", -1)),
            e("code", null, a(((d = t.conflict.target_hash) == null ? void 0 : d.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", If, [
          p(hf, {
            modelValue: h.value,
            "onUpdate:modelValue": g[0] || (g[0] = (R) => h.value = R),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Mf = /* @__PURE__ */ K(Ef, [["__scopeId", "data-v-506d3bbf"]]), Rf = { class: "resolution-content" }, Tf = {
  key: 0,
  class: "error-box"
}, Lf = { class: "resolution-header" }, zf = { class: "header-stats" }, Nf = { class: "stat" }, Df = { class: "stat-value" }, Pf = { class: "stat resolved" }, Uf = { class: "stat-value" }, Of = {
  key: 0,
  class: "stat pending"
}, Bf = { class: "stat-value" }, Ff = { class: "conflicts-list" }, Af = {
  key: 1,
  class: "all-resolved-message"
}, Vf = /* @__PURE__ */ q({
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
    const n = t, r = c, h = P(() => n.resolutions.size), f = P(() => n.workflowConflicts.length - h.value), v = P(() => h.value === n.workflowConflicts.length), m = P(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function l(R) {
      const _ = n.resolutions.get(R);
      return (_ == null ? void 0 : _.resolution) ?? null;
    }
    function g(R, _) {
      r("resolve", R, _);
    }
    function w() {
      r("close");
    }
    function d() {
      r("apply");
    }
    return (R, _) => (o(), E(tt, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: w
    }, {
      body: i(() => [
        e("div", Rf, [
          t.error ? (o(), s("div", Tf, [
            _[1] || (_[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              _[0] || (_[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : u("", !0),
          e("div", Lf, [
            e("div", zf, [
              e("div", Nf, [
                e("span", Df, a(t.workflowConflicts.length), 1),
                _[2] || (_[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Pf, [
                e("span", Uf, a(h.value), 1),
                _[3] || (_[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              f.value > 0 ? (o(), s("div", Of, [
                e("span", Bf, a(f.value), 1),
                _[4] || (_[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : u("", !0)
            ]),
            _[5] || (_[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Ff, [
            (o(!0), s(F, null, X(t.workflowConflicts, (N) => (o(), E(Mf, {
              key: N.name,
              conflict: N,
              resolution: l(N.name),
              onResolve: ($) => g(N.name, $)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          v.value ? (o(), s("div", Af, [
            _[6] || (_[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : u("", !0)
        ])
      ]),
      footer: i(() => [
        p(re, {
          variant: "secondary",
          onClick: w
        }, {
          default: i(() => [..._[7] || (_[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _[8] || (_[8] = e("div", { class: "footer-spacer" }, null, -1)),
        p(re, {
          variant: "primary",
          disabled: !v.value || t.validating,
          loading: t.validating,
          onClick: d
        }, {
          default: i(() => [
            y(a(m.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Wf = /* @__PURE__ */ K(Vf, [["__scopeId", "data-v-c58d150d"]]), Gf = { class: "node-conflict-item" }, jf = { class: "node-header" }, Hf = { class: "node-name" }, qf = { class: "node-id" }, Kf = { class: "version-comparison" }, Yf = { class: "version yours" }, Jf = { class: "version theirs" }, Qf = { class: "chosen-version" }, Xf = { class: "chosen" }, Zf = { class: "chosen-reason" }, eg = { class: "affected-workflows" }, tg = { class: "wf-source" }, og = { class: "wf-version" }, sg = /* @__PURE__ */ q({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (o(), s("div", Gf, [
      e("div", jf, [
        e("code", Hf, a(t.conflict.node_name), 1),
        e("span", qf, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Kf, [
        e("div", Yf, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Jf, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Qf, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Xf, a(t.conflict.chosen_version), 1),
        e("span", Zf, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", eg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (o(!0), s(F, null, X(t.conflict.affected_workflows, (r) => (o(), s("li", {
            key: r.name
          }, [
            e("code", null, a(r.name), 1),
            e("span", tg, "(" + a(r.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", og, "needs v" + a(r.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), ng = /* @__PURE__ */ K(sg, [["__scopeId", "data-v-8b626725"]]), ag = { class: "validation-content" }, lg = {
  key: 0,
  class: "compatible-message"
}, ig = { class: "conflicts-list" }, rg = {
  key: 2,
  class: "warnings-section"
}, dg = /* @__PURE__ */ q({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, r = c, h = P(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (f, v) => (o(), E(tt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: v[3] || (v[3] = (m) => r("cancel"))
    }, {
      body: i(() => [
        e("div", ag, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (o(), s("div", lg, [
            v[5] || (v[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              v[4] || (v[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (o(), s(F, { key: 1 }, [
            v[6] || (v[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", ig, [
              (o(!0), s(F, null, X(t.validation.node_conflicts, (m) => (o(), E(ng, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            v[7] || (v[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : u("", !0),
          t.validation.warnings.length > 0 ? (o(), s("div", rg, [
            v[8] || (v[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (o(!0), s(F, null, X(t.validation.warnings, (m, l) => (o(), s("li", { key: l }, a(m), 1))), 128))
            ])
          ])) : u("", !0)
        ])
      ]),
      footer: i(() => [
        p(re, {
          variant: "secondary",
          onClick: v[0] || (v[0] = (m) => r("cancel"))
        }, {
          default: i(() => [...v[9] || (v[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v[11] || (v[11] = e("div", { class: "footer-spacer" }, null, -1)),
        p(re, {
          variant: "secondary",
          onClick: v[1] || (v[1] = (m) => r("goBack"))
        }, {
          default: i(() => [...v[10] || (v[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        p(re, {
          variant: "primary",
          loading: t.executing,
          onClick: v[2] || (v[2] = (m) => r("proceed"))
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
}), cg = /* @__PURE__ */ K(dg, [["__scopeId", "data-v-fefd26ed"]]), ug = { key: 0 }, mg = /* @__PURE__ */ q({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: r,
      addRemote: h,
      removeRemote: f,
      updateRemoteUrl: v,
      fetchRemote: m,
      getRemoteSyncStatus: l,
      getPullPreview: g,
      pullFromRemote: w,
      getPushPreview: d,
      pushToRemote: R,
      validateMerge: _
    } = Te(), N = C([]), $ = C(null), x = C({}), k = C(!1), B = C(null), M = C(""), L = C(!1), H = C(null), G = C(!1), Y = C("add"), V = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = P(() => {
      if (!M.value.trim()) return N.value;
      const ne = M.value.toLowerCase();
      return N.value.filter(
        (se) => se.name.toLowerCase().includes(ne) || se.fetch_url.toLowerCase().includes(ne) || se.push_url.toLowerCase().includes(ne)
      );
    });
    async function T() {
      k.value = !0, B.value = null;
      try {
        const ne = await r();
        N.value = ne.remotes, $.value = ne.current_branch_tracking || null, await Promise.all(
          ne.remotes.map(async (se) => {
            const ye = await l(se.name);
            ye && (x.value[se.name] = ye);
          })
        );
      } catch (ne) {
        B.value = ne instanceof Error ? ne.message : "Failed to load remotes";
      } finally {
        k.value = !1;
      }
    }
    function O() {
      Y.value = "add", V.value = { name: "", fetchUrl: "", pushUrl: "" }, G.value = !0;
    }
    function A(ne) {
      const se = N.value.find((ye) => ye.name === ne);
      se && (Y.value = "edit", V.value = {
        name: se.name,
        fetchUrl: se.fetch_url,
        pushUrl: se.push_url
      }, G.value = !0);
    }
    async function ae(ne) {
      try {
        Y.value === "add" ? await h(ne.name, ne.fetchUrl) : await v(ne.name, ne.fetchUrl, ne.pushUrl || void 0), G.value = !1, await T();
      } catch (se) {
        B.value = se instanceof Error ? se.message : "Operation failed";
      }
    }
    function ie() {
      G.value = !1, V.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(ne) {
      H.value = ne;
      try {
        await m(ne);
        const se = await l(ne);
        se && (x.value[ne] = se), n("toast", `✓ Fetched from ${ne}`, "success");
      } catch (se) {
        n("toast", se instanceof Error ? se.message : "Fetch failed", "error");
      } finally {
        H.value = null;
      }
    }
    async function Z(ne) {
      if (confirm(`Remove remote "${ne}"?`))
        try {
          await f(ne), await T();
        } catch (se) {
          B.value = se instanceof Error ? se.message : "Failed to remove remote";
        }
    }
    function U() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const b = C("idle"), oe = P(() => b.value === "pull_preview"), ee = P(
      () => b.value === "resolving" || b.value === "validating"
    ), $e = P(
      () => b.value === "validation_review" || b.value === "executing"
    ), we = C(!1), Me = C(null), Ue = C(!1), ce = C(null), Oe = C(!1), he = C(null), Re = C(null), Ae = C(/* @__PURE__ */ new Map()), Je = C(null), ve = C(null), Ve = P(() => he.value && fo(he.value) ? he.value : null);
    async function We(ne) {
      ce.value = ne, b.value = "pull_preview", Oe.value = !0, he.value = null, Re.value = null;
      try {
        he.value = await g(ne);
      } catch (se) {
        Re.value = se instanceof Error ? se.message : "Failed to load pull preview";
      } finally {
        Oe.value = !1;
      }
    }
    function Ge() {
      b.value = "idle", he.value = null, Re.value = null, ce.value = null;
    }
    async function dt(ne) {
      if (!ce.value) return;
      b.value = "executing", Re.value = null;
      const se = ce.value;
      try {
        const ye = await w(se, ne);
        if (ye.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${ye.error || "Unknown error"}`, b.value = "pull_preview";
          return;
        }
        I(), b.value = "idle", n("toast", `✓ Pulled from ${se}`, "success"), await T();
      } catch (ye) {
        Re.value = ye instanceof Error ? ye.message : "Pull failed", b.value = "pull_preview";
      }
    }
    function me() {
      Ve.value && (b.value = "resolving", ve.value = null);
    }
    function Le(ne, se) {
      Ae.value.set(ne, { name: ne, resolution: se });
    }
    function ct() {
      b.value = "pull_preview";
    }
    async function st() {
      b.value = "validating", ve.value = null;
      try {
        const ne = Array.from(Ae.value.values());
        Je.value = await _(ce.value, ne), b.value = "validation_review";
      } catch (ne) {
        ve.value = ne instanceof Error ? ne.message : "Validation failed", b.value = "resolving";
      }
    }
    async function xe() {
      b.value = "executing";
      const ne = ce.value;
      try {
        const se = Array.from(Ae.value.values()), ye = await w(ne, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: se
        });
        if (ye.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${ye.error || "Unknown error"}`, b.value = "pull_preview";
          return;
        }
        I(), b.value = "idle", n("toast", `✓ Pulled from ${ne}`, "success"), await T();
      } catch (se) {
        Re.value = se instanceof Error ? se.message : "Pull failed", b.value = "validation_review";
      }
    }
    function ut() {
      b.value = "resolving";
    }
    function S() {
      I(), b.value = "idle";
    }
    function I() {
      Ae.value.clear(), Je.value = null, ve.value = null, Re.value = null, he.value = null, ce.value = null;
    }
    async function W(ne) {
      ce.value = ne, we.value = !0, Oe.value = !0, Me.value = null;
      try {
        Me.value = await d(ne);
      } catch (se) {
        B.value = se instanceof Error ? se.message : "Failed to load push preview";
      } finally {
        Oe.value = !1;
      }
    }
    function de() {
      we.value = !1, Me.value = null, ce.value = null;
    }
    async function Ce(ne) {
      if (!ce.value) return;
      Ue.value = !0;
      const se = ce.value;
      try {
        await R(se, ne), de(), n("toast", `✓ Pushed to ${se}`, "success"), await T();
      } catch (ye) {
        n("toast", ye instanceof Error ? ye.message : "Push failed", "error");
      } finally {
        Ue.value = !1;
      }
    }
    function je() {
      const ne = ce.value;
      de(), ne && We(ne);
    }
    return Se(T), (ne, se) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: se[0] || (se[0] = (ye) => L.value = !0)
          }, {
            actions: i(() => [
              G.value ? u("", !0) : (o(), E(J, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...se[3] || (se[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          G.value ? u("", !0) : (o(), E(kt, {
            key: 0,
            modelValue: M.value,
            "onUpdate:modelValue": se[1] || (se[1] = (ye) => M.value = ye),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          k.value ? (o(), E(lt, {
            key: 0,
            message: "Loading remotes..."
          })) : B.value ? (o(), E(it, {
            key: 1,
            message: B.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            G.value ? (o(), E(lv, {
              key: 0,
              mode: Y.value,
              "remote-name": V.value.name,
              "fetch-url": V.value.fetchUrl,
              "push-url": V.value.pushUrl,
              onSubmit: ae,
              onCancel: ie
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : u("", !0),
            N.value.length && !G.value ? (o(), E(bt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(N.value.length) + " remote" + a(N.value.length !== 1 ? "s" : "") + " ", 1),
                $.value ? (o(), s("span", ug, " • Tracking: " + a($.value.remote) + "/" + a($.value.branch), 1)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            D.value.length && !G.value ? (o(), E(Ie, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(D.value, (ye) => (o(), E(qm, {
                  key: ye.name,
                  remote: ye,
                  "sync-status": x.value[ye.name],
                  "fetching-remote": H.value,
                  onFetch: Q,
                  onEdit: A,
                  onRemove: Z,
                  onPull: We,
                  onPush: W
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !D.value.length && !G.value ? (o(), E(Ye, {
              key: 3,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                p(J, {
                  variant: "primary",
                  onClick: O
                }, {
                  default: i(() => [...se[4] || (se[4] = [
                    y(" Add Your First Remote ", -1)
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
      p(ot, {
        show: L.value,
        title: "About Git Remotes",
        onClose: se[2] || (se[2] = (ye) => L.value = !1)
      }, {
        content: i(() => [...se[5] || (se[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          p(J, {
            variant: "link",
            onClick: U
          }, {
            default: i(() => [...se[6] || (se[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p(Wv, {
        show: oe.value,
        "remote-name": ce.value || "",
        preview: he.value,
        loading: Oe.value,
        pulling: b.value === "executing",
        error: Re.value,
        "conflict-resolutions": Ae.value,
        onClose: Ge,
        onPull: dt,
        onOpenConflictResolution: me
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      p(mf, {
        show: we.value,
        "remote-name": ce.value || "",
        preview: Me.value,
        loading: Oe.value,
        pushing: Ue.value,
        onClose: de,
        onPush: Ce,
        onPullFirst: je
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ee.value && Ve.value ? (o(), E(Wf, {
        key: 0,
        "workflow-conflicts": Ve.value.workflow_conflicts,
        resolutions: Ae.value,
        "operation-type": "pull",
        validating: b.value === "validating",
        error: ve.value,
        onClose: ct,
        onResolve: Le,
        onApply: st
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : u("", !0),
      $e.value && Je.value ? (o(), E(cg, {
        key: 1,
        validation: Je.value,
        "operation-type": "pull",
        executing: b.value === "executing",
        onProceed: xe,
        onGoBack: ut,
        onCancel: S
      }, null, 8, ["validation", "executing"])) : u("", !0)
    ], 64));
  }
}), vg = /* @__PURE__ */ K(mg, [["__scopeId", "data-v-9ae3b76d"]]), fg = { class: "setting-info" }, gg = { class: "setting-label" }, pg = {
  key: 0,
  class: "required-marker"
}, hg = {
  key: 0,
  class: "setting-description"
}, yg = { class: "setting-control" }, wg = /* @__PURE__ */ q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: te(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", fg, [
        e("div", gg, [
          y(a(t.label) + " ", 1),
          t.required ? (o(), s("span", pg, "*")) : u("", !0)
        ]),
        t.description ? (o(), s("div", hg, a(t.description), 1)) : u("", !0)
      ]),
      e("div", yg, [
        fe(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), at = /* @__PURE__ */ K(wg, [["__scopeId", "data-v-cb5d236c"]]), kg = { class: "toggle" }, bg = ["checked", "disabled"], _g = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", kg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, bg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ft = /* @__PURE__ */ K(_g, [["__scopeId", "data-v-71c0f550"]]), $g = { class: "settings-section" }, Cg = { class: "path-setting" }, xg = { class: "path-value" }, Sg = { class: "path-setting" }, Ig = { class: "path-value" }, Eg = { class: "settings-section" }, Mg = { class: "settings-section" }, Rg = { class: "settings-section" }, Tg = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Te(), r = C(!1), h = C(null), f = C(null), v = C(null), m = C(null), l = C(""), g = C(""), w = C(!0), d = C(!0), R = C(!1), _ = P(() => m.value ? l.value !== (m.value.civitai_api_key || "") : !1);
    async function N() {
      r.value = !0, h.value = null;
      try {
        v.value = await c(), m.value = { ...v.value }, l.value = v.value.civitai_api_key || "", g.value = v.value.huggingface_token || "", w.value = v.value.auto_sync_models, d.value = v.value.confirm_destructive;
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        R.value = B === "true";
      } catch (B) {
        h.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function $() {
      var B;
      f.value = null;
      try {
        const M = {};
        l.value !== (((B = m.value) == null ? void 0 : B.civitai_api_key) || "") && (M.civitai_api_key = l.value || null), await n(M), await N(), f.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (M) {
        f.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to save settings"
        };
      }
    }
    function x() {
      m.value && (l.value = m.value.civitai_api_key || "", g.value = m.value.huggingface_token || "", w.value = m.value.auto_sync_models, d.value = m.value.confirm_destructive, f.value = null);
    }
    function k(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return Se(N), (B, M) => (o(), E(De, null, {
      header: i(() => [
        p(Pe, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            p(J, {
              variant: "primary",
              size: "sm",
              disabled: !_.value,
              onClick: $
            }, {
              default: i(() => [...M[5] || (M[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            _.value ? (o(), E(J, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: x
            }, {
              default: i(() => [...M[6] || (M[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : u("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), E(lt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (o(), E(it, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: N
        }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
          p(Ie, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var L, H;
              return [
                e("div", $g, [
                  e("div", Cg, [
                    M[7] || (M[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    M[8] || (M[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", xg, a(((L = v.value) == null ? void 0 : L.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Sg, [
                    M[9] || (M[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    M[10] || (M[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Ig, a(((H = v.value) == null ? void 0 : H.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          p(Ie, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", Eg, [
                p(at, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    p(Pt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": M[0] || (M[0] = (L) => l.value = L),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                p(at, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(Pt, {
                      modelValue: g.value,
                      "onUpdate:modelValue": M[1] || (M[1] = (L) => g.value = L),
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
          p(Ie, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", Mg, [
                p(at, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    p(ft, {
                      modelValue: R.value,
                      "onUpdate:modelValue": [
                        M[2] || (M[2] = (L) => R.value = L),
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
          p(Ie, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", Rg, [
                p(at, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(ft, {
                      modelValue: w.value,
                      "onUpdate:modelValue": M[3] || (M[3] = (L) => w.value = L),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                p(at, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(ft, {
                      modelValue: d.value,
                      "onUpdate:modelValue": M[4] || (M[4] = (L) => d.value = L),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), E(bt, {
            key: 0,
            variant: (f.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: et({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(f.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : u("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Lg = /* @__PURE__ */ K(Tg, [["__scopeId", "data-v-7861bd35"]]), zg = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = Te(), n = C([]), r = C(!1), h = C(null), f = C(!1), v = C(null), m = P(() => n.value.length === 0 ? [] : n.value.map((g) => ({
      text: `${g.timestamp} - ${g.name} - ${g.level} - ${g.func}:${g.line} - ${g.message}`,
      level: g.level
    })));
    async function l() {
      r.value = !0, h.value = null;
      try {
        n.value = await c(void 0, 500);
      } catch (g) {
        h.value = g instanceof Error ? g.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var g;
          (g = v.value) != null && g.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Se(l), (g, w) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (d) => f.value = !0)
          }, {
            actions: i(() => [
              p(J, {
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
          r.value ? (o(), E(lt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : h.value ? (o(), E(it, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            n.value.length === 0 ? (o(), E(Ye, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (o(!0), s(F, null, X(m.value, (d, R) => (o(), s("div", {
                key: R,
                class: te(`log-line log-level-${d.level.toLowerCase()}`)
              }, a(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      p(ot, {
        show: f.value,
        title: "About Workspace Logs",
        onClose: w[2] || (w[2] = (d) => f.value = !1)
      }, {
        content: i(() => [...w[3] || (w[3] = [
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
          p(J, {
            variant: "primary",
            onClick: w[1] || (w[1] = (d) => f.value = !1)
          }, {
            default: i(() => [...w[4] || (w[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ng = /* @__PURE__ */ K(zg, [["__scopeId", "data-v-39f6a756"]]), Dg = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n } = Te(), r = C([]), h = C(!1), f = C(null), v = C(!1), m = C("production"), l = C(null), g = P(() => r.value.length === 0 ? [] : r.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function w() {
      h.value = !0, f.value = null;
      try {
        r.value = await c(void 0, 500);
        try {
          const d = await n();
          m.value = d.environment || "production";
        } catch {
        }
      } catch (d) {
        f.value = d instanceof Error ? d.message : "Failed to load environment logs";
      } finally {
        h.value = !1, setTimeout(() => {
          var d;
          (d = l.value) != null && d.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Se(w), (d, R) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (_) => v.value = !0)
          }, {
            actions: i(() => [
              p(J, {
                variant: "secondary",
                size: "sm",
                onClick: w,
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
          h.value ? (o(), E(lt, {
            key: 0,
            message: "Loading environment logs..."
          })) : f.value ? (o(), E(it, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            r.value.length === 0 ? (o(), E(Ye, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (o(!0), s(F, null, X(g.value, (_, N) => (o(), s("div", {
                key: N,
                class: te(`log-line log-level-${_.level.toLowerCase()}`)
              }, a(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      p(ot, {
        show: v.value,
        title: "About Environment Logs",
        onClose: R[2] || (R[2] = (_) => v.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            R[3] || (R[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
            R[4] || (R[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          R[5] || (R[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          R[6] || (R[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          p(J, {
            variant: "primary",
            onClick: R[1] || (R[1] = (_) => v.value = !1)
          }, {
            default: i(() => [...R[7] || (R[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Pg = /* @__PURE__ */ K(Dg, [["__scopeId", "data-v-4f1e6f72"]]), Ug = { class: "env-title" }, Og = {
  key: 0,
  class: "current-badge"
}, Bg = {
  key: 0,
  class: "branch-info"
}, Fg = /* @__PURE__ */ q({
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
    return (c, n) => (o(), E(Fe, {
      status: t.isCurrent ? "synced" : void 0
    }, Rt({
      icon: i(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", Ug, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Og, "CURRENT")) : u("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", Bg, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : u("", !0)
      ]),
      actions: i(() => [
        fe(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          p(_e, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          p(_e, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          p(_e, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (o(), E(_e, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : u("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Ag = /* @__PURE__ */ K(Fg, [["__scopeId", "data-v-9231917a"]]), Vg = { class: "env-details" }, Wg = { class: "status-row" }, Gg = {
  key: 0,
  class: "detail-row"
}, jg = { class: "value mono" }, Hg = {
  key: 1,
  class: "detail-row"
}, qg = { class: "value mono small" }, Kg = { class: "detail-row" }, Yg = { class: "value" }, Jg = { class: "detail-row" }, Qg = { class: "value" }, Xg = { class: "detail-row" }, Zg = { class: "value" }, ep = {
  key: 2,
  class: "section-divider"
}, tp = {
  key: 3,
  class: "detail-row"
}, op = { class: "value" }, sp = {
  key: 4,
  class: "detail-row"
}, np = { class: "value" }, ap = { class: "footer-actions" }, lp = /* @__PURE__ */ q({
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
        const f = new Date(h), m = (/* @__PURE__ */ new Date()).getTime() - f.getTime(), l = Math.floor(m / 6e4), g = Math.floor(m / 36e5), w = Math.floor(m / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : g < 24 ? `${g} ${g === 1 ? "hour" : "hours"} ago` : w < 30 ? `${w} ${w === 1 ? "day" : "days"} ago` : f.toLocaleDateString();
      } catch {
        return h;
      }
    }
    return (h, f) => (o(), E(tt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[2] || (f[2] = (v) => n("close"))
    }, {
      body: i(() => [
        e("div", Vg, [
          e("div", Wg, [
            f[3] || (f[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: te(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (o(), s("div", Gg, [
            f[4] || (f[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", jg, a(t.environment.current_branch), 1)
          ])) : u("", !0),
          t.environment.path ? (o(), s("div", Hg, [
            f[5] || (f[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", qg, a(t.environment.path), 1)
          ])) : u("", !0),
          f[11] || (f[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Kg, [
            f[6] || (f[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Yg, a(t.environment.workflow_count), 1)
          ]),
          e("div", Jg, [
            f[7] || (f[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Qg, a(t.environment.node_count), 1)
          ]),
          e("div", Xg, [
            f[8] || (f[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Zg, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (o(), s("div", ep)) : u("", !0),
          t.environment.created_at ? (o(), s("div", tp, [
            f[9] || (f[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", op, a(r(t.environment.created_at)), 1)
          ])) : u("", !0),
          t.environment.last_used ? (o(), s("div", sp, [
            f[10] || (f[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", np, a(r(t.environment.last_used)), 1)
          ])) : u("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", ap, [
          t.canDelete ? (o(), E(re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => n("delete", t.environment.name))
          }, {
            default: i(() => [...f[12] || (f[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : u("", !0),
          f[14] || (f[14] = e("div", { class: "footer-spacer" }, null, -1)),
          p(re, {
            variant: "secondary",
            size: "sm",
            onClick: f[1] || (f[1] = (v) => n("close"))
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
}), ip = /* @__PURE__ */ K(lp, [["__scopeId", "data-v-59855453"]]), rp = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], dp = "3.12", cp = [
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
], up = "auto", mp = { class: "create-env-form" }, vp = { class: "form-field" }, fp = { class: "form-field" }, gp = ["value"], pp = { class: "form-field" }, hp = ["disabled"], yp = ["value"], wp = { class: "form-field" }, kp = ["value"], bp = { class: "form-field form-field--checkbox" }, _p = { class: "form-checkbox" }, $p = /* @__PURE__ */ q({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: r } = Te(), h = C(""), f = C(dp), v = C("latest"), m = C(up), l = C(!1), g = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = C(!1), d = C(null);
    function R() {
      const N = h.value.trim();
      if (!N) return;
      const $ = {
        name: N,
        python_version: f.value,
        comfyui_version: v.value,
        torch_backend: m.value,
        switch_after: l.value
      };
      n("create", $);
    }
    async function _() {
      w.value = !0;
      try {
        g.value = await r();
      } catch (N) {
        console.error("Failed to load ComfyUI releases:", N);
      } finally {
        w.value = !1;
      }
    }
    return Se(async () => {
      var N;
      await Lo(), (N = d.value) == null || N.focus(), _();
    }), (N, $) => (o(), E(tt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: $[6] || ($[6] = (x) => n("close"))
    }, {
      body: i(() => [
        e("div", mp, [
          e("div", vp, [
            $[7] || ($[7] = e("label", { class: "form-label" }, "Name", -1)),
            Ze(e("input", {
              ref_key: "nameInput",
              ref: d,
              "onUpdate:modelValue": $[0] || ($[0] = (x) => h.value = x),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: rt(R, ["enter"])
            }, null, 544), [
              [ao, h.value]
            ])
          ]),
          e("div", fp, [
            $[8] || ($[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": $[1] || ($[1] = (x) => f.value = x),
              class: "form-select"
            }, [
              (o(!0), s(F, null, X(ge(rp), (x) => (o(), s("option", {
                key: x,
                value: x
              }, a(x), 9, gp))), 128))
            ], 512), [
              [Ft, f.value]
            ])
          ]),
          e("div", pp, [
            $[9] || ($[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": $[2] || ($[2] = (x) => v.value = x),
              class: "form-select",
              disabled: w.value
            }, [
              (o(!0), s(F, null, X(g.value, (x) => (o(), s("option", {
                key: x.tag_name,
                value: x.tag_name
              }, a(x.name), 9, yp))), 128))
            ], 8, hp), [
              [Ft, v.value]
            ])
          ]),
          e("div", wp, [
            $[10] || ($[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": $[3] || ($[3] = (x) => m.value = x),
              class: "form-select"
            }, [
              (o(!0), s(F, null, X(ge(cp), (x) => (o(), s("option", {
                key: x,
                value: x
              }, a(x) + a(x === "auto" ? " (detect GPU)" : ""), 9, kp))), 128))
            ], 512), [
              [Ft, m.value]
            ])
          ]),
          e("div", bp, [
            e("label", _p, [
              Ze(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": $[4] || ($[4] = (x) => l.value = x)
              }, null, 512), [
                [lo, l.value]
              ]),
              $[11] || ($[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        p(re, {
          variant: "primary",
          disabled: !h.value.trim(),
          onClick: R
        }, {
          default: i(() => [...$[12] || ($[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        p(re, {
          variant: "secondary",
          onClick: $[5] || ($[5] = (x) => n("close"))
        }, {
          default: i(() => [...$[13] || ($[13] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Cp = /* @__PURE__ */ K($p, [["__scopeId", "data-v-a2f13447"]]), xp = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getEnvironments: h } = Te(), f = C([]), v = C(!1), m = C(null), l = C(""), g = C(!1), w = C(!1), d = C(null), R = P(
      () => f.value.find((M) => M.is_current)
    ), _ = P(() => {
      if (!l.value.trim()) return f.value;
      const M = l.value.toLowerCase();
      return f.value.filter(
        (L) => {
          var H;
          return L.name.toLowerCase().includes(M) || ((H = L.current_branch) == null ? void 0 : H.toLowerCase().includes(M));
        }
      );
    });
    function N(M) {
      r("create", M), w.value = !1;
    }
    function $() {
      w.value = !0;
    }
    function x(M) {
      d.value = M;
    }
    function k(M) {
      d.value = null, r("delete", M);
    }
    async function B() {
      v.value = !0, m.value = null;
      try {
        f.value = await h();
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load environments";
      } finally {
        v.value = !1;
      }
    }
    return Se(B), c({
      loadEnvironments: B
    }), (M, L) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (H) => g.value = !0)
          }, {
            actions: i(() => [
              p(J, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: i(() => [...L[6] || (L[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              p(J, {
                variant: "secondary",
                size: "sm",
                onClick: B
              }, {
                default: i(() => [...L[7] || (L[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(kt, {
            modelValue: l.value,
            "onUpdate:modelValue": L[1] || (L[1] = (H) => l.value = H),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value ? (o(), E(lt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (o(), E(it, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            f.value.length ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(f.value.length) + " " + a(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                R.value ? (o(), s(F, { key: 0 }, [
                  L[8] || (L[8] = y(" • Current: ", -1)),
                  e("strong", null, a(R.value.name), 1)
                ], 64)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            _.value.length ? (o(), E(Ie, {
              key: 1,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: i(() => [
                (o(!0), s(F, null, X(_.value, (H) => (o(), E(Ag, {
                  key: H.name,
                  "environment-name": H.name,
                  "is-current": H.is_current,
                  "current-branch": H.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    H.is_current ? u("", !0) : (o(), E(J, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (G) => M.$emit("switch", H.name)
                    }, {
                      default: i(() => [...L[9] || (L[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (G) => x(H)
                    }, {
                      default: i(() => [...L[10] || (L[10] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            _.value.length ? u("", !0) : (o(), E(Ye, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Rt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  p(J, {
                    variant: "primary",
                    onClick: $
                  }, {
                    default: i(() => [...L[11] || (L[11] = [
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
      p(ot, {
        show: g.value,
        title: "About Environments",
        onClose: L[3] || (L[3] = (H) => g.value = !1)
      }, {
        content: i(() => [...L[12] || (L[12] = [
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
          p(J, {
            variant: "secondary",
            onClick: L[2] || (L[2] = (H) => g.value = !1)
          }, {
            default: i(() => [...L[13] || (L[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      d.value ? (o(), E(ip, {
        key: 0,
        environment: d.value,
        "can-delete": f.value.length > 1,
        onClose: L[4] || (L[4] = (H) => d.value = null),
        onDelete: k
      }, null, 8, ["environment", "can-delete"])) : u("", !0),
      w.value ? (o(), E(Cp, {
        key: 1,
        onClose: L[5] || (L[5] = (H) => w.value = !1),
        onCreate: N
      })) : u("", !0)
    ], 64));
  }
}), Sp = /* @__PURE__ */ K(xp, [["__scopeId", "data-v-307d9926"]]), Ip = { class: "file-path" }, Ep = { class: "file-path-text" }, Mp = ["title"], Rp = /* @__PURE__ */ q({
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
    return (h, f) => (o(), s("div", Ip, [
      f[0] || (f[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Ep, a(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, Mp)) : u("", !0)
    ]));
  }
}), Tp = /* @__PURE__ */ K(Rp, [["__scopeId", "data-v-f0982173"]]), Lp = { class: "export-card" }, zp = { class: "export-path-row" }, Np = { class: "export-actions" }, Dp = {
  key: 1,
  class: "export-warning"
}, Pp = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = Te(), n = C(""), r = C(!1), h = C(!1), f = C(null), v = C(!1);
    async function m() {
      r.value = !0, f.value = null;
      try {
        const w = await c(n.value || void 0);
        f.value = w;
      } catch (w) {
        f.value = {
          status: "error",
          message: w instanceof Error ? w.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function l() {
      var w;
      if ((w = f.value) != null && w.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (d) {
          console.error("Failed to copy path:", d);
        }
    }
    async function g() {
      var w;
      if ((w = f.value) != null && w.path) {
        h.value = !0;
        try {
          const d = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!d.ok)
            throw new Error(`Download failed: ${d.statusText}`);
          const R = await d.blob(), _ = URL.createObjectURL(R), N = f.value.path.split("/").pop() || "environment-export.tar.gz", $ = document.createElement("a");
          $.href = _, $.download = N, document.body.appendChild($), $.click(), document.body.removeChild($), URL.revokeObjectURL(_);
        } catch (d) {
          console.error("Failed to download:", d), alert(`Download failed: ${d instanceof Error ? d.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
      }
    }
    return (w, d) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: d[0] || (d[0] = (R) => v.value = !0)
          })
        ]),
        content: i(() => [
          p(Ie, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              e("div", Lp, [
                d[5] || (d[5] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", zp, [
                  p(Pt, {
                    modelValue: n.value,
                    "onUpdate:modelValue": d[1] || (d[1] = (R) => n.value = R),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Np, [
                  p(J, {
                    variant: "primary",
                    size: "md",
                    loading: r.value,
                    disabled: r.value,
                    onClick: m
                  }, {
                    default: i(() => [
                      d[4] || (d[4] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      y(" " + a(r.value ? "Exporting..." : "Export Environment"), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), E(Ie, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              p(Fe, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Rt({
                icon: i(() => [
                  y(a(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  y(a(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  y(a(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    p(_e, { label: "Saved to:" }, {
                      default: i(() => [
                        p(Tp, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (o(), E(_e, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : u("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), s("div", Dp, [...d[6] || (d[6] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : u("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      loading: h.value,
                      onClick: g
                    }, {
                      default: i(() => [...d[7] || (d[7] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: l
                    }, {
                      default: i(() => [...d[8] || (d[8] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    p(J, {
                      variant: "ghost",
                      size: "sm",
                      onClick: d[2] || (d[2] = (R) => f.value = null)
                    }, {
                      default: i(() => [...d[9] || (d[9] = [
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
          })) : u("", !0)
        ]),
        _: 1
      }),
      p(ot, {
        show: v.value,
        title: "What Gets Exported",
        onClose: d[3] || (d[3] = (R) => v.value = !1)
      }, {
        content: i(() => [...d[10] || (d[10] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  y(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  y(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  y(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  y(" — Environment settings and metadata")
                ])
              ])
            ]),
            e("div", { class: "info-section" }, [
              e("strong", null, "Use Cases:"),
              e("ul", null, [
                e("li", null, "Share environments with collaborators"),
                e("li", null, "Back up your setup for safekeeping"),
                e("li", null, "Import into other ComfyGit workspaces")
              ])
            ]),
            e("p", { class: "info-note" }, [
              e("strong", null, "Note:"),
              y(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Up = /* @__PURE__ */ K(Pp, [["__scopeId", "data-v-33124fb3"]]), Op = { class: "file-input-wrapper" }, Bp = ["accept", "multiple", "disabled"], Fp = /* @__PURE__ */ q({
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
    function f() {
      var m;
      (m = h.value) == null || m.click();
    }
    function v(m) {
      const l = m.target;
      l.files && l.files.length > 0 && (r("change", l.files), l.value = "");
    }
    return c({
      triggerInput: f
    }), (m, l) => (o(), s("div", Op, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, Bp),
      p(J, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: f
      }, {
        default: i(() => [
          fe(m.$slots, "default", {}, () => [
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
}), Ap = /* @__PURE__ */ K(Fp, [["__scopeId", "data-v-cd192091"]]), Vp = {
  key: 0,
  class: "drop-zone-empty"
}, Wp = { class: "drop-zone-text" }, Gp = { class: "drop-zone-primary" }, jp = { class: "drop-zone-secondary" }, Hp = { class: "drop-zone-actions" }, qp = {
  key: 1,
  class: "drop-zone-file"
}, Kp = { class: "file-info" }, Yp = { class: "file-details" }, Jp = { class: "file-name" }, Qp = { class: "file-size" }, Xp = /* @__PURE__ */ q({
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
    const n = c, r = C(!1), h = C(null), f = C(0), v = P(() => h.value !== null), m = P(() => {
      var x;
      return ((x = h.value) == null ? void 0 : x.name) || "";
    }), l = P(() => {
      if (!h.value) return "";
      const x = h.value.size;
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function g(x) {
      var k;
      f.value++, (k = x.dataTransfer) != null && k.types.includes("Files") && (r.value = !0);
    }
    function w(x) {
      x.dataTransfer && (x.dataTransfer.dropEffect = "copy");
    }
    function d() {
      f.value--, f.value === 0 && (r.value = !1);
    }
    function R(x) {
      var B;
      f.value = 0, r.value = !1;
      const k = (B = x.dataTransfer) == null ? void 0 : B.files;
      k && k.length > 0 && N(k[0]);
    }
    function _(x) {
      x.length > 0 && N(x[0]);
    }
    function N(x) {
      h.value = x, n("fileSelected", x);
    }
    function $() {
      h.value = null, n("clear");
    }
    return (x, k) => (o(), s("div", {
      class: te(["file-drop-zone", { "drop-active": r.value, "has-file": v.value }]),
      onDragenter: be(g, ["prevent"]),
      onDragover: be(w, ["prevent"]),
      onDragleave: be(d, ["prevent"]),
      onDrop: be(R, ["prevent"])
    }, [
      v.value ? (o(), s("div", qp, [
        e("div", Kp, [
          k[1] || (k[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Yp, [
            e("div", Jp, a(m.value), 1),
            e("div", Qp, a(l.value), 1)
          ])
        ]),
        p(J, {
          variant: "ghost",
          size: "xs",
          onClick: $,
          title: "Remove file"
        }, {
          default: i(() => [...k[2] || (k[2] = [
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
      ])) : (o(), s("div", Vp, [
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
        e("div", Wp, [
          e("p", Gp, a(t.primaryText), 1),
          e("p", jp, a(t.secondaryText), 1)
        ]),
        e("div", Hp, [
          p(Ap, {
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
}), Zp = /* @__PURE__ */ K(Xp, [["__scopeId", "data-v-e00abbca"]]), eh = { class: "import-preview" }, th = { class: "preview-header" }, oh = {
  key: 0,
  class: "source-env"
}, sh = { class: "preview-content" }, nh = { class: "preview-section" }, ah = { class: "section-header" }, lh = { class: "section-info" }, ih = { class: "section-count" }, rh = {
  key: 0,
  class: "item-list"
}, dh = { class: "item-name" }, ch = {
  key: 0,
  class: "item-more"
}, uh = { class: "preview-section" }, mh = { class: "section-header" }, vh = { class: "section-info" }, fh = { class: "section-count" }, gh = {
  key: 0,
  class: "item-list"
}, ph = { class: "item-details" }, hh = { class: "item-name" }, yh = { class: "item-meta" }, wh = {
  key: 0,
  class: "item-more"
}, kh = { class: "preview-section" }, bh = { class: "section-header" }, _h = { class: "section-info" }, $h = { class: "section-count" }, Ch = {
  key: 0,
  class: "item-list"
}, xh = { class: "item-name" }, Sh = {
  key: 0,
  class: "item-more"
}, Ih = {
  key: 0,
  class: "preview-section"
}, Eh = { class: "git-info" }, Mh = /* @__PURE__ */ q({
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
    const c = t, n = P(() => c.workflows.length), r = P(() => c.models.length), h = P(() => c.nodes.length);
    function f(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, m) => (o(), s("div", eh, [
      e("div", th, [
        p(He, null, {
          default: i(() => [...m[0] || (m[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", oh, [
          m[1] || (m[1] = y(" From: ", -1)),
          p(jt, null, {
            default: i(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : u("", !0)
      ]),
      e("div", sh, [
        e("div", nh, [
          e("div", ah, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", lh, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", ih, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", rh, [
            (o(!0), s(F, null, X(t.workflows.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", dh, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", ch, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", uh, [
          e("div", mh, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", vh, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", fh, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", gh, [
            (o(!0), s(F, null, X(t.models.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", ph, [
                e("span", hh, a(l.filename), 1),
                e("span", yh, a(f(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", wh, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", kh, [
          e("div", bh, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", _h, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", $h, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", Ch, [
            (o(!0), s(F, null, X(t.nodes.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", xh, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", Sh, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", Ih, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Eh, [
            t.gitBranch ? (o(), E(_e, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                p(jt, null, {
                  default: i(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : u("", !0),
            t.gitCommit ? (o(), E(_e, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                p(ro, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : u("", !0)
          ])
        ])) : u("", !0)
      ])
    ]));
  }
}), Rh = /* @__PURE__ */ K(Mh, [["__scopeId", "data-v-182fe113"]]), Th = { class: "import-options" }, Lh = { class: "options-container" }, zh = { class: "option-section" }, Nh = { class: "conflict-options" }, Dh = ["value", "checked", "onChange"], Ph = { class: "conflict-content" }, Uh = { class: "conflict-label" }, Oh = { class: "conflict-description" }, Bh = { class: "option-section" }, Fh = { class: "component-toggles" }, Ah = /* @__PURE__ */ q({
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
    return (h, f) => (o(), s("div", Th, [
      p(He, null, {
        default: i(() => [...f[4] || (f[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Lh, [
        e("div", zh, [
          p(Gt, null, {
            default: i(() => [...f[5] || (f[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Nh, [
            (o(), s(F, null, X(r, (v) => e("label", {
              key: v.value,
              class: te(["conflict-option", { active: t.conflictMode === v.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: v.value,
                checked: t.conflictMode === v.value,
                onChange: (m) => n("update:conflictMode", v.value)
              }, null, 40, Dh),
              e("div", Ph, [
                e("span", Uh, a(v.label), 1),
                e("span", Oh, a(v.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Bh, [
          p(Gt, null, {
            default: i(() => [...f[6] || (f[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Fh, [
            p(at, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                p(ft, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": f[0] || (f[0] = (v) => n("update:includeWorkflows", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(at, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                p(ft, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": f[1] || (f[1] = (v) => n("update:includeModels", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(at, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                p(ft, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": f[2] || (f[2] = (v) => n("update:includeNodes", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(at, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                p(ft, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": f[3] || (f[3] = (v) => n("update:includeGitHistory", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Vh = /* @__PURE__ */ K(Ah, [["__scopeId", "data-v-0ec212b0"]]), Wh = {
  key: 0,
  class: "import-empty"
}, Gh = {
  key: 1,
  class: "import-configure"
}, jh = { class: "selected-file-bar" }, Hh = { class: "file-bar-content" }, qh = { class: "file-bar-info" }, Kh = { class: "file-bar-name" }, Yh = { class: "file-bar-size" }, Jh = { class: "import-actions" }, Qh = {
  key: 2,
  class: "import-progress"
}, Xh = { class: "progress-content" }, Zh = { class: "progress-info" }, e1 = { class: "progress-title" }, t1 = { class: "progress-detail" }, o1 = { class: "progress-bar" }, s1 = { class: "progress-status" }, n1 = {
  key: 3,
  class: "import-complete"
}, a1 = { class: "complete-message" }, l1 = { class: "complete-title" }, i1 = { class: "complete-details" }, r1 = { class: "complete-actions" }, d1 = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const c = C(!1), n = C(null), r = C(!1), h = C(!1), f = C(!1), v = C(""), m = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), l = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), g = C({
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
    }), w = P(() => m.value.includeWorkflows || m.value.includeModels || m.value.includeNodes || m.value.includeGitHistory);
    function d(x) {
      n.value = x;
    }
    function R() {
      n.value = null, h.value = !1, f.value = !1, v.value = "";
    }
    function _() {
      R(), r.value = !1, l.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function N() {
      if (n.value) {
        r.value = !0, h.value = !1;
        try {
          const x = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${g.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${g.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${g.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of x)
            l.value = k, await new Promise((B) => setTimeout(B, 800));
          l.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), f.value = !0, v.value = `Successfully imported ${g.value.workflows.length} workflows, ${g.value.models.length} models, and ${g.value.nodes.length} custom nodes.`;
        } catch (x) {
          f.value = !1, v.value = x instanceof Error ? x.message : "Unknown error occurred during import";
        } finally {
          r.value = !1, h.value = !0;
        }
      }
    }
    function $(x) {
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (x, k) => (o(), s(F, null, [
      p(De, null, {
        header: i(() => [
          p(Pe, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = (B) => c.value = !0)
          })
        ]),
        content: i(() => [
          !n.value && !r.value ? (o(), s("div", Wh, [
            p(Zp, {
              accept: ".tar.gz,.tgz,.zip",
              "primary-text": "Drag & drop environment export here",
              "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
              "button-text": "Select Export File",
              onFileSelected: d
            })
          ])) : n.value && !r.value && !h.value ? (o(), s("div", Gh, [
            e("div", jh, [
              e("div", Hh, [
                k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                e("div", qh, [
                  e("div", Kh, a(n.value.name), 1),
                  e("div", Yh, a($(n.value.size)), 1)
                ])
              ]),
              p(J, {
                variant: "ghost",
                size: "sm",
                onClick: R
              }, {
                default: i(() => [...k[8] || (k[8] = [
                  y(" Change File ", -1)
                ])]),
                _: 1
              })
            ]),
            p(Rh, {
              "source-environment": g.value.sourceEnvironment,
              workflows: g.value.workflows,
              models: g.value.models,
              nodes: g.value.nodes,
              "git-branch": g.value.gitBranch,
              "git-commit": g.value.gitCommit
            }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
            p(Vh, {
              "conflict-mode": m.value.conflictMode,
              "onUpdate:conflictMode": k[1] || (k[1] = (B) => m.value.conflictMode = B),
              "include-workflows": m.value.includeWorkflows,
              "onUpdate:includeWorkflows": k[2] || (k[2] = (B) => m.value.includeWorkflows = B),
              "include-models": m.value.includeModels,
              "onUpdate:includeModels": k[3] || (k[3] = (B) => m.value.includeModels = B),
              "include-nodes": m.value.includeNodes,
              "onUpdate:includeNodes": k[4] || (k[4] = (B) => m.value.includeNodes = B),
              "include-git-history": m.value.includeGitHistory,
              "onUpdate:includeGitHistory": k[5] || (k[5] = (B) => m.value.includeGitHistory = B)
            }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
            !m.value.includeModels && g.value.models.length > 0 ? (o(), E(gt, {
              key: 0,
              type: "warning",
              title: "Models Will Not Be Imported",
              details: [
                `${g.value.models.length} model file(s) will be skipped`,
                "Workflows may not function without required models",
                "You can download models manually from the MODEL INDEX"
              ]
            }, null, 8, ["details"])) : u("", !0),
            e("div", Jh, [
              p(J, {
                variant: "primary",
                size: "md",
                disabled: !w.value,
                onClick: N
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
              p(J, {
                variant: "secondary",
                size: "md",
                onClick: R
              }, {
                default: i(() => [...k[10] || (k[10] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              })
            ])
          ])) : r.value ? (o(), s("div", Qh, [
            e("div", Xh, [
              k[11] || (k[11] = e("div", { class: "progress-icon" }, [
                e("div", { class: "spinner" })
              ], -1)),
              e("div", Zh, [
                e("div", e1, a(l.value.message), 1),
                e("div", t1, a(l.value.detail), 1)
              ])
            ]),
            e("div", o1, [
              e("div", {
                class: "progress-bar-fill",
                style: et({ width: `${l.value.percent}%` })
              }, null, 4)
            ]),
            e("div", s1, a(l.value.percent) + "% complete ", 1)
          ])) : h.value ? (o(), s("div", n1, [
            e("div", {
              class: te(["complete-icon", f.value ? "success" : "error"])
            }, a(f.value ? "✓" : "✕"), 3),
            e("div", a1, [
              e("div", l1, a(f.value ? "Import Successful" : "Import Failed"), 1),
              e("div", i1, a(v.value), 1)
            ]),
            e("div", r1, [
              p(J, {
                variant: "primary",
                size: "md",
                onClick: _
              }, {
                default: i(() => [...k[12] || (k[12] = [
                  y(" Import Another ", -1)
                ])]),
                _: 1
              })
            ])
          ])) : u("", !0)
        ]),
        _: 1
      }),
      p(ot, {
        show: c.value,
        title: "How to Import",
        onClose: k[6] || (k[6] = (B) => c.value = !1)
      }, {
        content: i(() => [...k[13] || (k[13] = [
          e("div", { class: "help-steps" }, [
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "1"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Select Export File"),
                e("p", null, "Choose a ComfyGit environment export file created with the EXPORT feature")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "2"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Review Preview"),
                e("p", null, "Check what workflows, models, and nodes will be imported")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "3"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Configure Options"),
                e("p", null, "Choose how to handle conflicts and which components to import")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "4"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Import"),
                e("p", null, "Start the import process and wait for completion")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), c1 = /* @__PURE__ */ K(d1, [["__scopeId", "data-v-a9ffc82d"]]), u1 = { class: "header-info" }, m1 = { class: "commit-hash" }, v1 = {
  key: 0,
  class: "commit-refs"
}, f1 = { class: "commit-message" }, g1 = { class: "commit-date" }, p1 = {
  key: 0,
  class: "loading"
}, h1 = {
  key: 1,
  class: "changes-section"
}, y1 = { class: "stats-row" }, w1 = { class: "stat" }, k1 = { class: "stat insertions" }, b1 = { class: "stat deletions" }, _1 = {
  key: 0,
  class: "change-group"
}, $1 = {
  key: 1,
  class: "change-group"
}, C1 = {
  key: 0,
  class: "version"
}, x1 = {
  key: 2,
  class: "change-group"
}, S1 = { class: "change-item" }, I1 = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Te(), r = C(null), h = C(!0), f = P(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), v = P(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Se(async () => {
      try {
        r.value = await n(c.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (m, l) => (o(), E(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (g) => m.$emit("close"))
    }, {
      header: i(() => {
        var g, w, d, R;
        return [
          e("div", u1, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", m1, a(((g = r.value) == null ? void 0 : g.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (R = (d = r.value) == null ? void 0 : d.refs) != null && R.length ? (o(), s("span", v1, [
              (o(!0), s(F, null, X(r.value.refs, (_) => (o(), s("span", {
                key: _,
                class: "ref-badge"
              }, a(_), 1))), 128))
            ])) : u("", !0)
          ]),
          p(re, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (_) => m.$emit("close"))
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
        var g, w;
        return [
          e("div", f1, a(((g = r.value) == null ? void 0 : g.message) || t.commit.message), 1),
          e("div", g1, a(((w = r.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (o(), s("div", p1, "Loading details...")) : r.value ? (o(), s("div", h1, [
            e("div", y1, [
              e("span", w1, a(r.value.stats.files_changed) + " files", 1),
              e("span", k1, "+" + a(r.value.stats.insertions), 1),
              e("span", b1, "-" + a(r.value.stats.deletions), 1)
            ]),
            f.value ? (o(), s("div", _1, [
              p(It, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(F, null, X(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(d), 1)
              ]))), 128)),
              (o(!0), s(F, null, X(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(d), 1)
              ]))), 128)),
              (o(!0), s(F, null, X(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(d), 1)
              ]))), 128))
            ])) : u("", !0),
            v.value ? (o(), s("div", $1, [
              p(It, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(F, null, X(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(d.name), 1),
                d.version ? (o(), s("span", C1, "(" + a(d.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), s(F, null, X(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(d.name), 1)
              ]))), 128))
            ])) : u("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", x1, [
              p(It, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", S1, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: i(() => [
        p(re, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (g) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        p(re, {
          variant: "primary",
          onClick: l[2] || (l[2] = (g) => m.$emit("checkout", t.commit))
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
}), E1 = /* @__PURE__ */ K(I1, [["__scopeId", "data-v-d256ff6d"]]), M1 = { class: "dialog-message" }, R1 = {
  key: 0,
  class: "dialog-details"
}, T1 = {
  key: 1,
  class: "dialog-warning"
}, L1 = /* @__PURE__ */ q({
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
    return (c, n) => (o(), E(tt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => c.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", M1, a(t.message), 1),
        t.details && t.details.length ? (o(), s("div", R1, [
          (o(!0), s(F, null, X(t.details, (r, h) => (o(), s("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : u("", !0),
        t.warning ? (o(), s("p", T1, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : u("", !0)
      ]),
      footer: i(() => [
        p(re, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => c.$emit("cancel"))
        }, {
          default: i(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), E(re, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => c.$emit("secondary"))
        }, {
          default: i(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        p(re, {
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
}), z1 = /* @__PURE__ */ K(L1, [["__scopeId", "data-v-3670b9f5"]]), N1 = { class: "base-textarea-wrapper" }, D1 = ["value", "rows", "placeholder", "disabled", "maxlength"], P1 = {
  key: 0,
  class: "base-textarea-count"
}, U1 = /* @__PURE__ */ q({
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
    return (c, n) => (o(), s("div", N1, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = rt(be((r) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = rt(be((r) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, D1),
      t.showCharCount && t.maxLength ? (o(), s("div", P1, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : u("", !0)
    ]));
  }
}), to = /* @__PURE__ */ K(U1, [["__scopeId", "data-v-5516e6fc"]]), O1 = ["checked", "disabled"], B1 = { class: "base-checkbox-box" }, F1 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, A1 = {
  key: 0,
  class: "base-checkbox-label"
}, V1 = /* @__PURE__ */ q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", {
      class: te(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked))
      }, null, 40, O1),
      e("span", B1, [
        t.modelValue ? (o(), s("svg", F1, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : u("", !0)
      ]),
      c.$slots.default ? (o(), s("span", A1, [
        fe(c.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), oo = /* @__PURE__ */ K(V1, [["__scopeId", "data-v-bf17c831"]]), W1 = { class: "popover-header" }, G1 = { class: "popover-body" }, j1 = {
  key: 0,
  class: "changes-summary"
}, H1 = {
  key: 0,
  class: "change-item"
}, q1 = {
  key: 1,
  class: "change-item"
}, K1 = {
  key: 2,
  class: "change-item"
}, Y1 = {
  key: 3,
  class: "change-item"
}, J1 = {
  key: 4,
  class: "change-item"
}, Q1 = {
  key: 1,
  class: "no-changes"
}, X1 = {
  key: 2,
  class: "loading"
}, Z1 = {
  key: 3,
  class: "issues-error"
}, ey = { class: "error-header" }, ty = { class: "error-title" }, oy = { class: "issues-list" }, sy = { class: "message-section" }, ny = { class: "popover-footer" }, ay = {
  key: 1,
  class: "commit-popover"
}, ly = { class: "popover-header" }, iy = { class: "popover-body" }, ry = {
  key: 0,
  class: "changes-summary"
}, dy = {
  key: 0,
  class: "change-item"
}, cy = {
  key: 1,
  class: "change-item"
}, uy = {
  key: 2,
  class: "change-item"
}, my = {
  key: 3,
  class: "change-item"
}, vy = {
  key: 4,
  class: "change-item"
}, fy = {
  key: 1,
  class: "no-changes"
}, gy = {
  key: 2,
  class: "loading"
}, py = {
  key: 3,
  class: "issues-error"
}, hy = { class: "error-header" }, yy = { class: "error-title" }, wy = { class: "issues-list" }, ky = { class: "message-section" }, by = { class: "popover-footer" }, _y = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, r = c, { commit: h } = Te(), f = C(""), v = C(!1), m = C(!1), l = C(null), g = P(() => {
      if (!n.status) return !1;
      const N = n.status.workflows;
      return N.new.length > 0 || N.modified.length > 0 || N.deleted.length > 0 || n.status.has_changes;
    }), w = P(() => {
      var N;
      return (N = n.status) != null && N.workflows.analyzed ? n.status.workflows.analyzed.filter(
        ($) => $.has_issues && ($.sync_state === "new" || $.sync_state === "modified")
      ) : [];
    }), d = P(() => w.value.length > 0), R = P(() => d.value && !m.value);
    async function _() {
      var N, $, x;
      if (!(d.value && !m.value) && !(!g.value || !f.value.trim() || v.value)) {
        v.value = !0, l.value = null;
        try {
          const k = await h(f.value.trim(), m.value);
          k.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((N = k.summary) == null ? void 0 : N.new) || 0} new, ${(($ = k.summary) == null ? void 0 : $.modified) || 0} modified, ${((x = k.summary) == null ? void 0 : x.deleted) || 0} deleted`
          }, f.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : k.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : k.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: k.message || "Commit failed" };
        } catch (k) {
          l.value = { type: "error", message: k instanceof Error ? k.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (N, $) => t.asModal ? (o(), E(Ee, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (x) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = be(() => {
          }, ["stop"]))
        }, [
          e("div", W1, [
            $[11] || ($[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: $[0] || ($[0] = (x) => r("close"))
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
          e("div", G1, [
            t.status && g.value ? (o(), s("div", j1, [
              t.status.workflows.new.length ? (o(), s("div", H1, [
                $[12] || ($[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : u("", !0),
              t.status.workflows.modified.length ? (o(), s("div", q1, [
                $[13] || ($[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : u("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", K1, [
                $[14] || ($[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Y1, [
                $[15] || ($[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", J1, [
                $[16] || ($[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : u("", !0)
            ])) : t.status ? (o(), s("div", Q1, " No changes to commit ")) : (o(), s("div", X1, " Loading... ")),
            d.value ? (o(), s("div", Z1, [
              e("div", ey, [
                $[17] || ($[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", ty, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", oy, [
                (o(!0), s(F, null, X(w.value, (x) => (o(), s("div", {
                  key: x.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(x.name), 1),
                  y(": " + a(x.issue_summary), 1)
                ]))), 128))
              ]),
              p(oo, {
                modelValue: m.value,
                "onUpdate:modelValue": $[1] || ($[1] = (x) => m.value = x),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...$[18] || ($[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : u("", !0),
            e("div", sy, [
              p(to, {
                modelValue: f.value,
                "onUpdate:modelValue": $[2] || ($[2] = (x) => f.value = x),
                placeholder: R.value ? "Enable 'Allow issues' to commit" : g.value ? "Describe your changes..." : "No changes",
                disabled: !g.value || v.value || R.value,
                rows: 3,
                onCtrlEnter: _
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (o(), s("div", {
              key: 4,
              class: te(["result", l.value.type])
            }, a(l.value.message), 3)) : u("", !0)
          ]),
          e("div", ny, [
            p(re, {
              variant: "secondary",
              onClick: $[3] || ($[3] = (x) => r("close"))
            }, {
              default: i(() => [...$[19] || ($[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: m.value ? "danger" : "primary",
              disabled: !g.value || !f.value.trim() || v.value || R.value,
              loading: v.value,
              onClick: _
            }, {
              default: i(() => [
                y(a(v.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", ay, [
      e("div", ly, [
        $[21] || ($[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: $[6] || ($[6] = (x) => r("close"))
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
      e("div", iy, [
        t.status && g.value ? (o(), s("div", ry, [
          t.status.workflows.new.length ? (o(), s("div", dy, [
            $[22] || ($[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          t.status.workflows.modified.length ? (o(), s("div", cy, [
            $[23] || ($[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", uy, [
            $[24] || ($[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", my, [
            $[25] || ($[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", vy, [
            $[26] || ($[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : t.status ? (o(), s("div", fy, " No changes to commit ")) : (o(), s("div", gy, " Loading... ")),
        d.value ? (o(), s("div", py, [
          e("div", hy, [
            $[27] || ($[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", yy, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", wy, [
            (o(!0), s(F, null, X(w.value, (x) => (o(), s("div", {
              key: x.name,
              class: "issue-item"
            }, [
              e("strong", null, a(x.name), 1),
              y(": " + a(x.issue_summary), 1)
            ]))), 128))
          ]),
          p(oo, {
            modelValue: m.value,
            "onUpdate:modelValue": $[7] || ($[7] = (x) => m.value = x),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...$[28] || ($[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : u("", !0),
        e("div", ky, [
          p(to, {
            modelValue: f.value,
            "onUpdate:modelValue": $[8] || ($[8] = (x) => f.value = x),
            placeholder: R.value ? "Enable 'Allow issues' to commit" : g.value ? "Describe your changes..." : "No changes",
            disabled: !g.value || v.value || R.value,
            rows: 3,
            onCtrlEnter: _
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (o(), s("div", {
          key: 4,
          class: te(["result", l.value.type])
        }, a(l.value.message), 3)) : u("", !0)
      ]),
      e("div", by, [
        p(re, {
          variant: "secondary",
          onClick: $[9] || ($[9] = (x) => r("close"))
        }, {
          default: i(() => [...$[29] || ($[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p(re, {
          variant: m.value ? "danger" : "primary",
          disabled: !g.value || !f.value.trim() || v.value || R.value,
          loading: v.value,
          onClick: _
        }, {
          default: i(() => [
            y(a(v.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), go = /* @__PURE__ */ K(_y, [["__scopeId", "data-v-d92153de"]]), $y = { class: "modal-header" }, Cy = { class: "modal-body" }, xy = { class: "switch-message" }, Sy = { class: "switch-details" }, Iy = { class: "modal-actions" }, Ey = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), E(Ee, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = be(() => {
          }, ["stop"]))
        }, [
          e("div", $y, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Cy, [
            e("p", xy, [
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
            e("p", Sy, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Iy, [
            p(J, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(J, {
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
      ])) : u("", !0)
    ]));
  }
}), My = /* @__PURE__ */ K(Ey, [["__scopeId", "data-v-e9c5253e"]]), Ry = { class: "progress-bar" }, Ty = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = P(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (r, h) => (o(), s("div", Ry, [
      e("div", {
        class: te(["progress-fill", t.variant]),
        style: et({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ly = /* @__PURE__ */ K(Ty, [["__scopeId", "data-v-1beb0512"]]), zy = {
  key: 0,
  class: "modal-overlay"
}, Ny = { class: "modal-content" }, Dy = { class: "modal-body" }, Py = { class: "progress-info" }, Uy = { class: "progress-percentage" }, Oy = { class: "progress-state" }, By = { class: "switch-steps" }, Fy = { class: "step-icon" }, Ay = { class: "step-label" }, Vy = /* @__PURE__ */ q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = P(() => {
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
      return c.message || f[c.state] || c.state;
    }), r = P(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), h = P(() => {
      const f = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], v = f.findIndex((m) => m.state === c.state);
      return f.map((m, l) => {
        let g = "pending", w = "○";
        return l < v ? (g = "completed", w = "✓") : l === v && (g = "active", w = "⟳"), {
          ...m,
          status: g,
          icon: w
        };
      });
    });
    return (f, v) => (o(), E(Ee, { to: "body" }, [
      t.show ? (o(), s("div", zy, [
        e("div", Ny, [
          v[1] || (v[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Dy, [
            p(Ly, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Py, [
              e("div", Uy, a(t.progress) + "%", 1),
              e("div", Oy, a(n.value), 1)
            ]),
            e("div", By, [
              (o(!0), s(F, null, X(h.value, (m) => (o(), s("div", {
                key: m.state,
                class: te(["switch-step", m.status])
              }, [
                e("span", Fy, a(m.icon), 1),
                e("span", Ay, a(m.label), 1)
              ], 2))), 128))
            ]),
            v[0] || (v[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Wy = /* @__PURE__ */ K(Vy, [["__scopeId", "data-v-768a5078"]]), Gy = { class: "modal-header" }, jy = { class: "modal-body" }, Hy = {
  key: 0,
  class: "node-section"
}, qy = { class: "node-list" }, Ky = {
  key: 1,
  class: "node-section"
}, Yy = { class: "node-list" }, Jy = { class: "modal-actions" }, Qy = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), E(Ee, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = be(() => {
          }, ["stop"]))
        }, [
          e("div", Gy, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", jy, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Hy, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", qy, [
                (o(!0), s(F, null, X(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : u("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Ky, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Yy, [
                (o(!0), s(F, null, X(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + a(r), 1))), 128))
              ])
            ])) : u("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Jy, [
            p(J, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(J, {
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
      ])) : u("", !0)
    ]));
  }
}), Xy = /* @__PURE__ */ K(Qy, [["__scopeId", "data-v-7cad7518"]]), Zy = { class: "comfygit-panel" }, ew = { class: "panel-header" }, tw = { class: "header-left" }, ow = {
  key: 0,
  class: "header-info"
}, sw = { class: "header-actions" }, nw = { class: "env-switcher" }, aw = {
  key: 0,
  class: "header-info"
}, lw = { class: "branch-name" }, iw = { class: "panel-main" }, rw = { class: "sidebar" }, dw = { class: "sidebar-section" }, cw = { class: "sidebar-section" }, uw = { class: "sidebar-section" }, mw = { class: "content-area" }, vw = {
  key: 0,
  class: "error-message"
}, fw = {
  key: 1,
  class: "loading"
}, gw = {
  key: 4,
  class: "dialog-overlay"
}, pw = { class: "dialog-content create-progress-dialog" }, hw = { class: "dialog-body create-progress-body" }, yw = { class: "create-progress-message" }, ww = { class: "dialog-content env-selector-dialog" }, kw = { class: "dialog-header" }, bw = { class: "dialog-body" }, _w = { class: "env-list" }, $w = { class: "env-info" }, Cw = { class: "env-name-row" }, xw = { class: "env-indicator" }, Sw = { class: "env-name" }, Iw = {
  key: 0,
  class: "env-branch"
}, Ew = {
  key: 1,
  class: "current-label"
}, Mw = { class: "env-stats" }, Rw = ["onClick"], Tw = { class: "toast-container" }, Lw = { class: "toast-message" }, zw = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = c, {
      getStatus: r,
      getHistory: h,
      getBranches: f,
      checkout: v,
      createBranch: m,
      switchBranch: l,
      deleteBranch: g,
      getEnvironments: w,
      switchEnvironment: d,
      getSwitchProgress: R,
      createEnvironment: _,
      getCreateProgress: N,
      deleteEnvironment: $,
      syncEnvironmentManually: x,
      repairWorkflowModels: k
    } = Te(), B = co(), M = C(null), L = C([]), H = C([]), G = C([]), Y = P(() => G.value.find((j) => j.is_current)), V = C(!1), D = C(null), T = C(null), O = C(!1), A = C(null), ae = C(null), ie = C(null), Q = C(!1), Z = C(!1), U = C(""), b = C({ state: "idle", progress: 0, message: "" });
    let oe = null, ee = null;
    const $e = C(!1), we = C({ state: "idle", message: "" }), Me = C(null);
    let Ue = null;
    const ce = C("status"), Oe = C("this-env");
    function he(j, z) {
      ce.value = j, Oe.value = z;
    }
    function Re(j) {
      const le = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      le && he(le.view, le.section);
    }
    function Ae() {
      he("branches", "this-env");
    }
    function Je() {
      n("close"), setTimeout(() => {
        var z;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const le of j)
          if (((z = le.textContent) == null ? void 0 : z.trim()) === "Manager") {
            le.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ve = C(null), Ve = C(!1), We = C(!1), Ge = C([]);
    let dt = 0;
    function me(j, z = "info", le = 3e3) {
      const ke = ++dt;
      return Ge.value.push({ id: ke, message: j, type: z }), le > 0 && setTimeout(() => {
        Ge.value = Ge.value.filter((ze) => ze.id !== ke);
      }, le), ke;
    }
    function Le(j) {
      Ge.value = Ge.value.filter((z) => z.id !== j);
    }
    function ct(j, z) {
      me(j, z);
    }
    const st = P(() => {
      if (!M.value) return "neutral";
      const j = M.value.workflows, z = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || M.value.has_changes;
      return M.value.comparison.is_synced ? z ? "warning" : "success" : "error";
    });
    P(() => M.value ? st.value === "success" ? "All synced" : st.value === "warning" ? "Uncommitted changes" : st.value === "error" ? "Not synced" : "" : "");
    async function xe() {
      V.value = !0, D.value = null;
      try {
        const [j, z, le, ke] = await Promise.all([
          r(!0),
          h(),
          f(),
          w()
        ]);
        M.value = j, L.value = z.commits, H.value = le.branches, G.value = ke, n("statusUpdate", j), A.value && await A.value.loadWorkflows(!0);
      } catch (j) {
        D.value = j instanceof Error ? j.message : "Failed to load status", M.value = null, L.value = [], H.value = [];
      } finally {
        V.value = !1;
      }
    }
    function ut(j) {
      T.value = j;
    }
    async function S(j) {
      var le;
      T.value = null;
      const z = M.value && (M.value.workflows.new.length > 0 || M.value.workflows.modified.length > 0 || M.value.workflows.deleted.length > 0 || M.value.has_changes);
      ve.value = {
        title: z ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: z ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((le = j.hash) == null ? void 0 : le.slice(0, 7))}?`,
        details: z ? Zt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: z,
        onConfirm: async () => {
          var Ne;
          ve.value = null, je();
          const ke = me(`Checking out ${j.short_hash || ((Ne = j.hash) == null ? void 0 : Ne.slice(0, 7))}...`, "info", 0), ze = await v(j.hash, z);
          Le(ke), ze.status === "success" ? me("Restarting ComfyUI...", "success") : me(ze.message || "Checkout failed", "error");
        }
      };
    }
    async function I(j) {
      const z = M.value && (M.value.workflows.new.length > 0 || M.value.workflows.modified.length > 0 || M.value.workflows.deleted.length > 0 || M.value.has_changes);
      ve.value = {
        title: z ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: z ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: z ? Zt() : void 0,
        warning: z ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ve.value = null, je();
          const le = me(`Switching to ${j}...`, "info", 0), ke = await l(j, z);
          Le(le), ke.status === "success" ? me("Restarting ComfyUI...", "success") : me(ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function W(j) {
      const z = me(`Creating branch ${j}...`, "info", 0), le = await m(j);
      Le(z), le.status === "success" ? (me(`Branch "${j}" created`, "success"), await xe()) : me(le.message || "Failed to create branch", "error");
    }
    async function de(j, z = !1) {
      const le = async (ke) => {
        var Ne;
        const ze = me(`Deleting branch ${j}...`, "info", 0);
        try {
          const ue = await g(j, ke);
          Le(ze), ue.status === "success" ? (me(`Branch "${j}" deleted`, "success"), await xe()) : (Ne = ue.message) != null && Ne.includes("not fully merged") ? ve.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ve.value = null, await le(!0);
            }
          } : me(ue.message || "Failed to delete branch", "error");
        } catch (ue) {
          Le(ze);
          const Ot = ue instanceof Error ? ue.message : "Failed to delete branch";
          Ot.includes("not fully merged") ? ve.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ve.value = null, await le(!0);
            }
          } : me(Ot, "error");
        }
      };
      ve.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ve.value = null, await le(z);
        }
      };
    }
    async function Ce(j) {
      T.value = null;
      const z = prompt("Enter branch name:");
      if (z) {
        const le = me(`Creating branch ${z}...`, "info", 0), ke = await m(z, j.hash);
        Le(le), ke.status === "success" ? (me(`Branch "${z}" created from ${j.short_hash}`, "success"), await xe()) : me(ke.message || "Failed to create branch", "error");
      }
    }
    function je() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ne() {
      ve.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          ve.value = null, je(), me("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function se() {
      ve.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          ve.value = null, me("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function ye(j) {
      O.value = !1, U.value = j, Q.value = !0;
    }
    async function Lt() {
      Q.value = !1, Z.value = !0, je(), b.value = {
        progress: 10,
        state: zt(10),
        message: Nt(10)
      };
      try {
        await d(U.value), ko(), bo();
      } catch (j) {
        mt(), Z.value = !1, me(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), b.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function zt(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function Nt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[zt(j)] || "";
    }
    function ko() {
      if (ee) return;
      let j = 10;
      const z = 60, le = 5e3, ke = 100, ze = (z - j) / (le / ke);
      ee = window.setInterval(() => {
        if (j += ze, j >= z && (j = z, mt()), b.value.progress < z) {
          const Ne = Math.floor(j);
          b.value = {
            progress: Ne,
            state: zt(Ne),
            message: Nt(Ne)
          };
        }
      }, ke);
    }
    function mt() {
      ee && (clearInterval(ee), ee = null);
    }
    function bo() {
      oe || (oe = window.setInterval(async () => {
        try {
          let j = await B.getStatus();
          if ((!j || j.state === "idle") && (j = await R()), !j)
            return;
          const z = j.progress || 0;
          z >= 60 && mt();
          const le = Math.max(z, b.value.progress), ke = j.state && j.state !== "idle" && j.state !== "unknown", ze = ke ? j.state : zt(le), Ne = ke && j.message || Nt(le);
          b.value = {
            state: ze,
            progress: le,
            message: Ne
          }, j.state === "complete" ? (mt(), Ut(), Z.value = !1, me(`✓ Switched to ${U.value}`, "success"), await xe(), U.value = "") : j.state === "rolled_back" ? (mt(), Ut(), Z.value = !1, me("Switch failed, restored previous environment", "warning"), U.value = "") : j.state === "critical_failure" && (mt(), Ut(), Z.value = !1, me(`Critical error during switch: ${j.message}`, "error"), U.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function Ut() {
      mt(), oe && (clearInterval(oe), oe = null);
    }
    function _o() {
      Q.value = !1, U.value = "";
    }
    async function $o() {
      Ve.value = !1, await xe(), me("✓ Changes committed", "success");
    }
    async function Co() {
      We.value = !1;
      const j = me("Syncing environment...", "info", 0);
      try {
        const z = await x("skip", !0);
        if (Le(j), z.status === "success") {
          const le = [];
          z.nodes_installed.length && le.push(`${z.nodes_installed.length} installed`), z.nodes_removed.length && le.push(`${z.nodes_removed.length} removed`);
          const ke = le.length ? `: ${le.join(", ")}` : "";
          me(`✓ Environment synced${ke}`, "success"), await xe();
        } else {
          const le = z.errors.length ? z.errors.join("; ") : z.message;
          me(`Sync failed: ${le}`, "error");
        }
      } catch (z) {
        Le(j), me(`Sync error: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
      }
    }
    async function xo(j) {
      var z;
      try {
        const le = await k(j);
        le.failed.length === 0 ? me(`✓ Repaired ${le.success} workflow${le.success === 1 ? "" : "s"}`, "success") : me(`Repaired ${le.success}, failed: ${le.failed.length}`, "warning"), await xe();
      } catch (le) {
        me(`Repair failed: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
      } finally {
        (z = ie.value) == null || z.resetRepairingState();
      }
    }
    async function So(j) {
      Me.value = j, $e.value = !0, we.value = { state: "creating", message: `Creating environment '${j.name}'...` };
      try {
        const z = await _(j);
        z.status === "started" ? Io() : z.status === "error" && ($e.value = !1, me(`Failed to create environment: ${z.message}. Check debug logs for details.`, "error"), Me.value = null);
      } catch (z) {
        $e.value = !1, me(`Error creating environment: ${z instanceof Error ? z.message : "Unknown error"}. Check debug logs.`, "error"), Me.value = null;
      }
    }
    function Io() {
      Ue || (Ue = window.setInterval(async () => {
        var j;
        try {
          const z = await N();
          we.value = { state: z.state, message: z.message }, z.state === "complete" ? (Xt(), $e.value = !1, me(`✓ Environment '${z.environment_name}' created`, "success"), await xe(), ae.value && await ae.value.loadEnvironments(), (j = Me.value) != null && j.switch_after && z.environment_name && await ye(z.environment_name), Me.value = null) : z.state === "error" && (Xt(), $e.value = !1, me(`Failed to create environment: ${z.error || z.message}. Check debug logs.`, "error"), Me.value = null);
        } catch (z) {
          console.error("Failed to poll create progress:", z);
        }
      }, 2e3));
    }
    function Xt() {
      Ue && (clearInterval(Ue), Ue = null);
    }
    async function Eo(j) {
      var z;
      if (((z = Y.value) == null ? void 0 : z.name) === j) {
        me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ve.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ve.value = null;
          try {
            const le = await $(j);
            le.status === "success" ? (me(`Environment "${j}" deleted`, "success"), await xe(), ae.value && await ae.value.loadEnvironments()) : me(le.message || "Failed to delete environment", "error");
          } catch (le) {
            me(`Error deleting environment: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Zt() {
      if (!M.value) return [];
      const j = [], z = M.value.workflows;
      return z.new.length && j.push(`${z.new.length} new workflow(s)`), z.modified.length && j.push(`${z.modified.length} modified workflow(s)`), z.deleted.length && j.push(`${z.deleted.length} deleted workflow(s)`), j;
    }
    return Se(xe), (j, z) => {
      var le, ke, ze, Ne;
      return o(), s("div", Zy, [
        e("div", ew, [
          e("div", tw, [
            z[27] || (z[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            M.value ? (o(), s("div", ow)) : u("", !0)
          ]),
          e("div", sw, [
            e("button", {
              class: te(["icon-btn", { spinning: V.value }]),
              onClick: xe,
              title: "Refresh"
            }, [...z[28] || (z[28] = [
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
              onClick: z[0] || (z[0] = (ue) => n("close")),
              title: "Close"
            }, [...z[29] || (z[29] = [
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
        e("div", nw, [
          e("div", { class: "env-switcher-header" }, [
            z[30] || (z[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ne
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: se
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: z[1] || (z[1] = (ue) => he("environments", "all-envs"))
          }, [
            M.value ? (o(), s("div", aw, [
              e("span", null, a(((le = Y.value) == null ? void 0 : le.name) || ((ke = M.value) == null ? void 0 : ke.environment) || "Loading..."), 1),
              e("span", lw, "(" + a(M.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            z[31] || (z[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", iw, [
          e("div", rw, [
            e("div", dw, [
              z[32] || (z[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "status" && Oe.value === "this-env" }]),
                onClick: z[2] || (z[2] = (ue) => he("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "workflows" }]),
                onClick: z[3] || (z[3] = (ue) => he("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "models-env" }]),
                onClick: z[4] || (z[4] = (ue) => he("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "branches" }]),
                onClick: z[5] || (z[5] = (ue) => he("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "history" }]),
                onClick: z[6] || (z[6] = (ue) => he("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "nodes" }]),
                onClick: z[7] || (z[7] = (ue) => he("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "debug-env" }]),
                onClick: z[8] || (z[8] = (ue) => he("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            z[35] || (z[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", cw, [
              z[33] || (z[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "environments" }]),
                onClick: z[9] || (z[9] = (ue) => he("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "model-index" }]),
                onClick: z[10] || (z[10] = (ue) => he("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "settings" }]),
                onClick: z[11] || (z[11] = (ue) => he("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "debug-workspace" }]),
                onClick: z[12] || (z[12] = (ue) => he("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            z[36] || (z[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", uw, [
              z[34] || (z[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "export" }]),
                onClick: z[13] || (z[13] = (ue) => he("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "import" }]),
                onClick: z[14] || (z[14] = (ue) => he("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: ce.value === "remotes" }]),
                onClick: z[15] || (z[15] = (ue) => he("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", mw, [
            D.value ? (o(), s("div", vw, a(D.value), 1)) : !M.value && ce.value === "status" ? (o(), s("div", fw, " Loading status... ")) : (o(), s(F, { key: 2 }, [
              ce.value === "status" ? (o(), E(aa, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ie,
                status: M.value,
                onSwitchBranch: Ae,
                onCommitChanges: z[16] || (z[16] = (ue) => Ve.value = !0),
                onSyncEnvironment: z[17] || (z[17] = (ue) => We.value = !0),
                onViewWorkflows: z[18] || (z[18] = (ue) => he("workflows", "this-env")),
                onViewHistory: z[19] || (z[19] = (ue) => he("history", "this-env")),
                onViewDebug: z[20] || (z[20] = (ue) => he("debug-env", "this-env")),
                onRepairMissingModels: xo
              }, null, 8, ["status"])) : ce.value === "workflows" ? (o(), E(lu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: A,
                onRefresh: xe
              }, null, 512)) : ce.value === "models-env" ? (o(), E(Vu, {
                key: 2,
                onNavigate: Re
              })) : ce.value === "branches" ? (o(), E(ka, {
                key: 3,
                branches: H.value,
                current: ((ze = M.value) == null ? void 0 : ze.branch) || null,
                onSwitch: I,
                onCreate: W,
                onDelete: de
              }, null, 8, ["branches", "current"])) : ce.value === "history" ? (o(), E(Ta, {
                key: 4,
                commits: L.value,
                onSelect: ut,
                onCheckout: S
              }, null, 8, ["commits"])) : ce.value === "nodes" ? (o(), E(Rm, {
                key: 5,
                onOpenNodeManager: Je
              })) : ce.value === "debug-env" ? (o(), E(Pg, { key: 6 })) : ce.value === "environments" ? (o(), E(Sp, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: ae,
                onSwitch: ye,
                onCreate: So,
                onDelete: Eo
              }, null, 512)) : ce.value === "model-index" ? (o(), E(rm, {
                key: 8,
                onRefresh: xe
              })) : ce.value === "settings" ? (o(), E(Lg, { key: 9 })) : ce.value === "debug-workspace" ? (o(), E(Ng, { key: 10 })) : ce.value === "export" ? (o(), E(Up, { key: 11 })) : ce.value === "import" ? (o(), E(c1, { key: 12 })) : ce.value === "remotes" ? (o(), E(vg, {
                key: 13,
                onToast: ct
              })) : u("", !0)
            ], 64))
          ])
        ]),
        T.value ? (o(), E(E1, {
          key: 0,
          commit: T.value,
          onClose: z[21] || (z[21] = (ue) => T.value = null),
          onCheckout: S,
          onCreateBranch: Ce
        }, null, 8, ["commit"])) : u("", !0),
        ve.value ? (o(), E(z1, {
          key: 1,
          title: ve.value.title,
          message: ve.value.message,
          details: ve.value.details,
          warning: ve.value.warning,
          confirmLabel: ve.value.confirmLabel,
          cancelLabel: ve.value.cancelLabel,
          secondaryLabel: ve.value.secondaryLabel,
          secondaryAction: ve.value.secondaryAction,
          destructive: ve.value.destructive,
          onConfirm: ve.value.onConfirm,
          onCancel: z[22] || (z[22] = (ue) => ve.value = null),
          onSecondary: ve.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        p(My, {
          show: Q.value,
          "from-environment": ((Ne = Y.value) == null ? void 0 : Ne.name) || "unknown",
          "to-environment": U.value,
          onConfirm: Lt,
          onClose: _o
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ve.value && M.value ? (o(), E(go, {
          key: 2,
          status: M.value,
          "as-modal": !0,
          onClose: z[23] || (z[23] = (ue) => Ve.value = !1),
          onCommitted: $o
        }, null, 8, ["status"])) : u("", !0),
        We.value && M.value ? (o(), E(Xy, {
          key: 3,
          show: We.value,
          "mismatch-details": {
            missing_nodes: M.value.comparison.missing_nodes,
            extra_nodes: M.value.comparison.extra_nodes
          },
          onConfirm: Co,
          onClose: z[24] || (z[24] = (ue) => We.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : u("", !0),
        p(Wy, {
          show: Z.value,
          state: b.value.state,
          progress: b.value.progress,
          message: b.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        $e.value ? (o(), s("div", gw, [
          e("div", pw, [
            z[39] || (z[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", hw, [
              z[37] || (z[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", yw, a(we.value.message), 1),
              z[38] || (z[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : u("", !0),
        O.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: z[26] || (z[26] = be((ue) => O.value = !1, ["self"]))
        }, [
          e("div", ww, [
            e("div", kw, [
              z[41] || (z[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: z[25] || (z[25] = (ue) => O.value = !1)
              }, [...z[40] || (z[40] = [
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
            e("div", bw, [
              z[42] || (z[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", _w, [
                (o(!0), s(F, null, X(G.value, (ue) => (o(), s("div", {
                  key: ue.name,
                  class: te(["env-item", { current: ue.is_current }])
                }, [
                  e("div", $w, [
                    e("div", Cw, [
                      e("span", xw, a(ue.is_current ? "●" : "○"), 1),
                      e("span", Sw, a(ue.name), 1),
                      ue.current_branch ? (o(), s("span", Iw, "(" + a(ue.current_branch) + ")", 1)) : u("", !0),
                      ue.is_current ? (o(), s("span", Ew, "CURRENT")) : u("", !0)
                    ]),
                    e("div", Mw, a(ue.workflow_count) + " workflows • " + a(ue.node_count) + " nodes ", 1)
                  ]),
                  ue.is_current ? u("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ot) => ye(ue.name)
                  }, " SWITCH ", 8, Rw))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        e("div", Tw, [
          p(zo, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(F, null, X(Ge.value, (ue) => (o(), s("div", {
                key: ue.id,
                class: te(["toast", ue.type])
              }, [
                e("span", Lw, a(ue.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Nw = /* @__PURE__ */ K(zw, [["__scopeId", "data-v-44184278"]]), Dw = { class: "item-header" }, Pw = { class: "item-info" }, Uw = { class: "filename" }, Ow = { class: "metadata" }, Bw = { class: "size" }, Fw = {
  key: 0,
  class: "type"
}, Aw = { class: "item-actions" }, Vw = {
  key: 0,
  class: "progress-section"
}, Ww = { class: "progress-bar" }, Gw = { class: "progress-stats" }, jw = { class: "downloaded" }, Hw = { class: "speed" }, qw = {
  key: 0,
  class: "eta"
}, Kw = {
  key: 1,
  class: "status-msg paused"
}, Yw = {
  key: 2,
  class: "status-msg queued"
}, Jw = {
  key: 3,
  class: "status-msg completed"
}, Qw = {
  key: 4,
  class: "status-msg failed"
}, Xw = {
  key: 0,
  class: "retries"
}, Zw = /* @__PURE__ */ q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function r(v) {
      if (v === 0) return "?";
      const m = v / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(v / (1024 * 1024)).toFixed(1)} MB`;
    }
    function h(v) {
      return v === 0 ? "-" : `${(v / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function f(v) {
      if (v < 60) return `${Math.round(v)}s`;
      const m = Math.floor(v / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (v, m) => (o(), s("div", {
      class: te(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Dw, [
        e("div", Pw, [
          e("div", Uw, a(t.item.filename), 1),
          e("div", Ow, [
            e("span", Bw, a(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Fw, a(t.item.type), 1)) : u("", !0)
          ])
        ]),
        e("div", Aw, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : u("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : u("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : u("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : u("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Vw, [
        e("div", Ww, [
          e("div", {
            class: "progress-fill",
            style: et({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Gw, [
          e("span", jw, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", Hw, a(h(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", qw, a(f(t.item.eta)), 1)) : u("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Kw, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", Yw, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Jw, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", Qw, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Xw, "(" + a(t.item.retries) + " retries)", 1)) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), Ct = /* @__PURE__ */ K(Zw, [["__scopeId", "data-v-2110df65"]]), e0 = { class: "queue-title" }, t0 = { class: "count" }, o0 = { class: "queue-actions" }, s0 = { class: "action-label" }, n0 = {
  key: 0,
  class: "overall-progress"
}, a0 = { class: "progress-bar" }, l0 = {
  key: 0,
  class: "current-mini"
}, i0 = { class: "filename" }, r0 = { class: "speed" }, d0 = {
  key: 1,
  class: "queue-content"
}, c0 = {
  key: 0,
  class: "section"
}, u0 = {
  key: 1,
  class: "section"
}, m0 = { class: "section-header" }, v0 = { class: "section-label paused" }, f0 = { class: "items-list" }, g0 = {
  key: 2,
  class: "section"
}, p0 = { class: "section-header" }, h0 = { class: "section-label" }, y0 = { class: "items-list" }, w0 = {
  key: 3,
  class: "section"
}, k0 = { class: "section-header" }, b0 = { class: "section-label" }, _0 = { class: "items-list" }, $0 = {
  key: 4,
  class: "section"
}, C0 = { class: "section-header" }, x0 = { class: "section-label failed" }, S0 = { class: "items-list" }, I0 = /* @__PURE__ */ q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: r,
      completedItems: h,
      failedItems: f,
      pausedItems: v,
      hasItems: m,
      activeCount: l,
      cancelDownload: g,
      retryDownload: w,
      resumeDownload: d,
      resumeAllPaused: R,
      removeItem: _,
      clearCompleted: N
    } = Tt(), $ = C(!1);
    let x = null;
    wt(
      () => ({
        active: l.value,
        failed: f.value.length,
        paused: v.value.length,
        completed: h.value.length
      }),
      (L, H) => {
        x && (clearTimeout(x), x = null);
        const G = L.active === 0 && L.failed === 0 && L.paused === 0 && L.completed > 0, Y = H && (H.active > 0 || H.paused > 0);
        G && Y && (x = setTimeout(() => {
          N(), x = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const k = P(() => {
      var G;
      if (c.items.length === 0) return 0;
      const L = h.value.length, H = ((G = n.value) == null ? void 0 : G.progress) || 0;
      return Math.round((L + H / 100) / c.items.length * 100);
    });
    function B(L) {
      g(L);
    }
    function M(L) {
      return L === 0 ? "" : `${(L / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (L, H) => (o(), E(Ee, { to: "body" }, [
      ge(m) ? (o(), s("div", {
        key: 0,
        class: te(["model-download-queue", { minimized: !$.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (G) => $.value = !$.value)
        }, [
          e("div", e0, [
            H[4] || (H[4] = e("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", t0, "(" + a(ge(l)) + "/" + a(ge(c).items.length) + ")", 1)
          ]),
          e("div", o0, [
            e("span", s0, a($.value ? "minimize" : "expand"), 1)
          ])
        ]),
        $.value ? (o(), s("div", d0, [
          ge(n) ? (o(), s("div", c0, [
            H[6] || (H[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            p(Ct, {
              item: ge(n),
              onCancel: H[1] || (H[1] = (G) => B(ge(n).id))
            }, null, 8, ["item"])
          ])) : u("", !0),
          ge(v).length > 0 ? (o(), s("div", u0, [
            e("div", m0, [
              e("span", v0, "Paused (" + a(ge(v).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...G) => ge(R) && ge(R)(...G))
              }, "Resume All")
            ]),
            e("div", f0, [
              (o(!0), s(F, null, X(ge(v), (G) => (o(), E(Ct, {
                key: G.id,
                item: G,
                onResume: (Y) => ge(d)(G.id),
                onRemove: (Y) => ge(_)(G.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          ge(r).length > 0 ? (o(), s("div", g0, [
            e("div", p0, [
              e("span", h0, "Queued (" + a(ge(r).length) + ")", 1)
            ]),
            e("div", y0, [
              (o(!0), s(F, null, X(ge(r), (G) => (o(), E(Ct, {
                key: G.id,
                item: G,
                onCancel: (Y) => B(G.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : u("", !0),
          ge(h).length > 0 ? (o(), s("div", w0, [
            e("div", k0, [
              e("span", b0, "Completed (" + a(ge(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...G) => ge(N) && ge(N)(...G))
              }, "Clear")
            ]),
            e("div", _0, [
              (o(!0), s(F, null, X(ge(h).slice(0, 3), (G) => (o(), E(Ct, {
                key: G.id,
                item: G,
                onRemove: (Y) => ge(_)(G.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          ge(f).length > 0 ? (o(), s("div", $0, [
            e("div", C0, [
              e("span", x0, "Failed (" + a(ge(f).length) + ")", 1)
            ]),
            e("div", S0, [
              (o(!0), s(F, null, X(ge(f), (G) => (o(), E(Ct, {
                key: G.id,
                item: G,
                onRetry: (Y) => ge(w)(G.id),
                onRemove: (Y) => ge(_)(G.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : u("", !0)
        ])) : (o(), s("div", n0, [
          e("div", a0, [
            e("div", {
              class: "progress-fill",
              style: et({ width: `${k.value}%` })
            }, null, 4)
          ]),
          ge(n) ? (o(), s("div", l0, [
            e("span", i0, a(ge(n).filename), 1),
            e("span", r0, a(M(ge(n).speed)), 1)
          ])) : u("", !0)
        ]))
      ], 2)) : u("", !0)
    ]));
  }
}), E0 = /* @__PURE__ */ K(I0, [["__scopeId", "data-v-60751cfa"]]), M0 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', R0 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', T0 = {
  comfy: M0,
  phosphor: R0
}, Jt = "comfy", po = "comfygit-theme";
let vt = null, ho = Jt;
function L0() {
  try {
    const t = localStorage.getItem(po);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Jt;
}
function yo(t = Jt) {
  vt && vt.remove(), vt = document.createElement("style"), vt.id = "comfygit-theme-styles", vt.setAttribute("data-theme", t), vt.textContent = T0[t], document.head.appendChild(vt), document.body.setAttribute("data-comfygit-theme", t), ho = t;
  try {
    localStorage.setItem(po, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function z0() {
  return ho;
}
function N0(t) {
  yo(t);
}
const Qt = document.createElement("link");
Qt.rel = "stylesheet";
Qt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Qt);
const D0 = L0();
yo(D0);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), N0(t);
  },
  getTheme: () => {
    const t = z0();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let qe = null, Be = null, Et = null, xt = null, so = null;
const yt = C(null);
async function Dt() {
  var t;
  if (!((t = ht) != null && t.api)) return null;
  try {
    const c = await ht.api.fetchApi("/v2/comfygit/status");
    c.ok && (yt.value = await c.json());
  } catch {
  }
}
function P0() {
  if (!yt.value) return !1;
  const t = yt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || yt.value.has_changes;
}
function U0() {
  qe && qe.remove(), qe = document.createElement("div"), qe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", qe.appendChild(t), qe.addEventListener("click", (r) => {
    r.target === qe && Wt();
  });
  const c = (r) => {
    r.key === "Escape" && (Wt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), qt({
    render: () => Kt(Nw, {
      onClose: Wt,
      onStatusUpdate: (r) => {
        yt.value = r, Mt();
      }
    })
  }).mount(t), document.body.appendChild(qe);
}
function Wt() {
  qe && (qe.remove(), qe = null);
}
function O0(t) {
  St(), Be = document.createElement("div"), Be.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Be.style.position = "fixed", Be.style.top = `${c.bottom + 8}px`, Be.style.right = `${window.innerWidth - c.right}px`, Be.style.zIndex = "10001";
  const n = (h) => {
    Be && !Be.contains(h.target) && h.target !== t && (St(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (h) => {
    h.key === "Escape" && (St(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Et = qt({
    render: () => Kt(go, {
      status: yt.value,
      onClose: St,
      onCommitted: () => {
        St(), Dt().then(Mt);
      }
    })
  }), Et.mount(Be), document.body.appendChild(Be);
}
function St() {
  Et && (Et.unmount(), Et = null), Be && (Be.remove(), Be = null);
}
function B0() {
  xt || (xt = document.createElement("div"), xt.className = "comfygit-download-queue-root", so = qt({
    render: () => Kt(E0)
  }), so.mount(xt), document.body.appendChild(xt), console.log("[ComfyGit] Model download queue mounted"));
}
let nt = null;
function Mt() {
  if (!nt) return;
  const t = nt.querySelector(".commit-indicator");
  t && (t.style.display = P0() ? "block" : "none");
}
const wo = document.createElement("style");
wo.textContent = `
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
document.head.appendChild(wo);
ht.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, f;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = U0, nt = document.createElement("button"), nt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", nt.innerHTML = 'Commit <span class="commit-indicator"></span>', nt.title = "Quick Commit", nt.onclick = () => O0(nt), t.appendChild(c), t.appendChild(nt), (f = (h = ht.menu) == null ? void 0 : h.settingsGroup) != null && f.element && (ht.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), B0();
    const { loadPendingDownloads: n } = Tt();
    n(), await Dt(), Mt(), setInterval(async () => {
      await Dt(), Mt();
    }, 3e4);
    const r = ht.api;
    if (r) {
      let v = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, m = function() {
        const g = document.createElement("div");
        g.style.cssText = `
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
        const w = document.createElement("span");
        w.textContent = "Workflows updated - refresh required", g.appendChild(w);
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
        `, d.onmouseover = () => d.style.background = "var(--comfy-input-bg)", d.onmouseout = () => d.style.background = "var(--comfy-menu-bg)", d.onclick = () => v(), g.appendChild(d);
        const R = document.createElement("button");
        R.textContent = "×", R.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, R.onmouseover = () => R.style.opacity = "1", R.onmouseout = () => R.style.opacity = "0.6", R.onclick = () => g.remove(), g.appendChild(R), document.body.appendChild(g), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: d } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${d}`), await Dt(), Mt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      r.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), v()) : m()), l = w;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
