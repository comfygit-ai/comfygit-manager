import { app as vt } from "../../scripts/app.js";
import { defineComponent as K, createElementBlock as s, openBlock as o, createCommentVNode as d, createElementVNode as e, renderSlot as ue, createBlock as I, resolveDynamicComponent as Gt, normalizeClass as se, withCtx as i, toDisplayString as l, createVNode as g, createTextVNode as y, computed as B, Fragment as W, renderList as ee, normalizeStyle as Je, ref as x, onMounted as xe, watch as jt, Teleport as ze, withModifiers as $e, Transition as $o, createSlots as Tt, withKeys as et, onUnmounted as Co, reactive as so, readonly as xo, unref as fe, withDirectives as ct, vModelText as no, nextTick as So, vModelSelect as Pt, vModelCheckbox as Io, TransitionGroup as Eo, createApp as Ht, h as qt } from "vue";
const Mo = { class: "panel-layout" }, zo = {
  key: 0,
  class: "panel-layout-header"
}, Lo = {
  key: 1,
  class: "panel-layout-search"
}, To = { class: "panel-layout-content" }, Ro = {
  key: 2,
  class: "panel-layout-footer"
}, Do = /* @__PURE__ */ K({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (o(), s("div", Mo, [
      c.$slots.header ? (o(), s("div", zo, [
        ue(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (o(), s("div", Lo, [
        ue(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", To, [
        ue(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), s("div", Ro, [
        ue(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), J = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [r, p] of c)
    n[r] = p;
  return n;
}, Re = /* @__PURE__ */ J(Do, [["__scopeId", "data-v-21565df9"]]), No = {
  key: 0,
  class: "panel-title-prefix"
}, Oo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Uo = /* @__PURE__ */ K({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (o(), I(Gt(`h${t.level}`), {
      class: se(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", No, l(t.prefix), 1)) : (o(), s("span", Oo)),
        ue(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Po = /* @__PURE__ */ J(Uo, [["__scopeId", "data-v-c3875efc"]]), Bo = ["title"], Fo = ["width", "height"], Ao = /* @__PURE__ */ K({
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
      ])], 8, Fo))
    ], 8, Bo));
  }
}), ao = /* @__PURE__ */ J(Ao, [["__scopeId", "data-v-6fc7f16d"]]), Vo = { class: "header-left" }, Wo = {
  key: 0,
  class: "header-actions"
}, Go = /* @__PURE__ */ K({
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
      class: se(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Vo, [
        g(Po, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            y(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), I(ao, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (o(), s("div", Wo, [
        ue(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), De = /* @__PURE__ */ J(Go, [["__scopeId", "data-v-55a62cd6"]]), jo = {
  key: 0,
  class: "section-title-count"
}, Ho = {
  key: 1,
  class: "section-title-icon"
}, qo = /* @__PURE__ */ K({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), I(Gt(`h${t.level}`), {
      class: se(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, {
      default: i(() => [
        ue(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", jo, "(" + l(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (o(), s("span", Ho, l(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Oe = /* @__PURE__ */ J(qo, [["__scopeId", "data-v-559361eb"]]), Ko = { class: "status-grid" }, Jo = { class: "status-grid__columns" }, Yo = { class: "status-grid__column" }, Xo = { class: "status-grid__title" }, Qo = { class: "status-grid__column status-grid__column--right" }, Zo = { class: "status-grid__title" }, es = {
  key: 0,
  class: "status-grid__footer"
}, ts = /* @__PURE__ */ K({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (o(), s("div", Ko, [
      e("div", Jo, [
        e("div", Yo, [
          e("h4", Xo, l(t.leftTitle), 1),
          ue(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Qo, [
          e("h4", Zo, l(t.rightTitle), 1),
          ue(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (o(), s("div", es, [
        ue(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), os = /* @__PURE__ */ J(ts, [["__scopeId", "data-v-73b7ba3f"]]), ss = {
  key: 0,
  class: "status-item__icon"
}, ns = {
  key: 1,
  class: "status-item__count"
}, as = { class: "status-item__label" }, ls = /* @__PURE__ */ K({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = B(() => `status-item--${c.variant}`);
    return (r, p) => (o(), s("div", {
      class: se(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", ss, l(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (o(), s("span", ns, l(t.count), 1)) : d("", !0),
      e("span", as, l(t.label), 1)
    ], 2));
  }
}), Ge = /* @__PURE__ */ J(ls, [["__scopeId", "data-v-6f929183"]]), is = { class: "issue-card__header" }, rs = { class: "issue-card__icon" }, ds = { class: "issue-card__title" }, cs = {
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
}, fs = /* @__PURE__ */ K({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = B(() => `issue-card--${c.severity}`);
    return (r, p) => (o(), s("div", {
      class: se(["issue-card", n.value])
    }, [
      e("div", is, [
        e("span", rs, l(t.icon), 1),
        e("h4", ds, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", cs, [
        t.description ? (o(), s("p", us, l(t.description), 1)) : d("", !0),
        ue(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (o(), s("div", ms, [
        (o(!0), s(W, null, ee(t.items, (v, h) => (o(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(v), 1)
        ]))), 128))
      ])) : d("", !0),
      r.$slots.actions ? (o(), s("div", vs, [
        ue(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ut = /* @__PURE__ */ J(fs, [["__scopeId", "data-v-df6aa348"]]), gs = ["type", "disabled"], ps = {
  key: 0,
  class: "spinner"
}, hs = /* @__PURE__ */ K({
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
      class: se(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", ps)) : d("", !0),
      t.loading ? d("", !0) : ue(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, gs));
  }
}), Z = /* @__PURE__ */ J(hs, [["__scopeId", "data-v-772abe47"]]), ys = { class: "empty-state" }, ws = {
  key: 0,
  class: "empty-icon"
}, ks = { class: "empty-message" }, bs = /* @__PURE__ */ K({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (o(), s("div", ys, [
      t.icon ? (o(), s("div", ws, l(t.icon), 1)) : d("", !0),
      e("p", ks, l(t.message), 1),
      t.actionLabel ? (o(), I(Z, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("action"))
      }, {
        default: i(() => [
          y(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), Ae = /* @__PURE__ */ J(bs, [["__scopeId", "data-v-4466284f"]]), _s = /* @__PURE__ */ K({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: se(["detail-label"]),
      style: Je({ minWidth: t.minWidth })
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Vt = /* @__PURE__ */ J(_s, [["__scopeId", "data-v-75e9eeb8"]]), $s = /* @__PURE__ */ K({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: se(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Wt = /* @__PURE__ */ J($s, [["__scopeId", "data-v-2f186e4c"]]), Cs = { class: "detail-row" }, xs = /* @__PURE__ */ K({
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
    return (c, n) => (o(), s("div", Cs, [
      g(Vt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          y(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), I(Wt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          y(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ue(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), we = /* @__PURE__ */ J(xs, [["__scopeId", "data-v-ef15664a"]]), Ss = { class: "modal-header" }, Is = { class: "modal-body" }, Es = { class: "status-section" }, Ms = {
  key: 0,
  class: "status-section"
}, zs = { class: "section-header-row" }, Ls = {
  key: 0,
  class: "workflow-group"
}, Ts = { class: "workflow-group-header" }, Rs = { class: "workflow-group-title" }, Ds = { class: "workflow-list" }, Ns = { class: "workflow-name" }, Os = { class: "workflow-issue" }, Us = {
  key: 1,
  class: "workflow-group"
}, Ps = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Fs = { class: "workflow-list" }, As = { class: "workflow-name" }, Vs = { class: "workflow-issue" }, Ws = {
  key: 2,
  class: "workflow-group"
}, Gs = { class: "workflow-group-header" }, js = { class: "workflow-group-title" }, Hs = { class: "workflow-list" }, qs = { class: "workflow-name" }, Ks = {
  key: 3,
  class: "workflow-group"
}, Js = { class: "workflow-group-header" }, Ys = { class: "workflow-group-title" }, Xs = { class: "workflow-list" }, Qs = { class: "workflow-name" }, Zs = {
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
}, Dn = { class: "drift-list" }, Nn = {
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
}, jn = { class: "modal-actions" }, Hn = /* @__PURE__ */ K({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const c = t, n = x(!1);
    xe(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), jt(() => c.show, (k, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", k);
    }, { immediate: !0 });
    const r = B(() => {
      var k, $, R;
      return ((R = ($ = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : R.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), p = B(() => {
      var k, $, R;
      return ((R = ($ = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : R.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), v = B(() => {
      var k, $, R;
      return ((R = ($ = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : $.synced) == null ? void 0 : R.filter((b) => {
        var F, U, L;
        const w = (L = (U = (F = c.status) == null ? void 0 : F.workflows) == null ? void 0 : U.analyzed) == null ? void 0 : L.find((D) => D.name === b);
        return !w || w.status !== "broken";
      })) || [];
    }), h = B(() => {
      var k, $, R, b, w;
      return (k = c.status) != null && k.workflows ? ((($ = c.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((R = c.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((b = c.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((w = c.status.workflows.synced) == null ? void 0 : w.length) ?? 0) > 0 : !1;
    }), u = B(() => {
      var $, R, b;
      const k = ($ = c.status) == null ? void 0 : $.git_changes;
      return k ? (((R = k.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((b = k.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), a = B(() => {
      var k, $, R, b, w, F;
      return !h.value && !u.value && (($ = (k = c.status) == null ? void 0 : k.comparison) == null ? void 0 : $.is_synced) && (((R = c.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && (((F = (w = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : w.disabled_nodes) == null ? void 0 : F.length) ?? 0) === 0;
    }), m = B(() => {
      var $, R;
      const k = (R = ($ = c.status) == null ? void 0 : $.git_changes) == null ? void 0 : R.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function C(k) {
      return typeof k == "string" ? k : k.name;
    }
    function f(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, $) => {
      var R, b, w, F, U, L, D, V, P, N, z, S, M, oe, q, te, ae, X, Y, O, _, ne;
      return o(), I(ze, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (Q) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Ss, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (Q) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", Is, [
              e("div", Es, [
                g(Oe, { level: "4" }, {
                  default: i(() => [...$[8] || ($[8] = [
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
                    default: i(() => [...$[9] || ($[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (Q) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Ls, [
                  e("div", Ts, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Rs, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", Ds, [
                    (o(!0), s(W, null, ee(r.value, (Q) => (o(), s("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ns, l(Q.name), 1),
                      e("span", Os, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                p.value.length ? (o(), s("div", Us, [
                  e("div", Ps, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Bs, "BROKEN (UNCOMMITTED) (" + l(p.value.length) + ")", 1)
                  ]),
                  e("div", Fs, [
                    (o(!0), s(W, null, ee(p.value, (Q) => (o(), s("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", As, l(Q.name), 1),
                      e("span", Vs, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (b = (R = t.status.workflows) == null ? void 0 : R.new) != null && b.length ? (o(), s("div", Ws, [
                  e("div", Gs, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", js, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Hs, [
                    (o(!0), s(W, null, ee(t.status.workflows.new, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", qs, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (F = (w = t.status.workflows) == null ? void 0 : w.modified) != null && F.length ? (o(), s("div", Ks, [
                  e("div", Js, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ys, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Xs, [
                    (o(!0), s(W, null, ee(t.status.workflows.modified, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Qs, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (L = (U = t.status.workflows) == null ? void 0 : U.deleted) != null && L.length ? (o(), s("div", Zs, [
                  e("div", en, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", tn, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), s(W, null, ee(t.status.workflows.deleted, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", sn, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                v.value.length ? (o(), s("div", nn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (Q) => n.value = !n.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", an, "SYNCED (" + l(v.value.length) + ")", 1),
                    e("span", ln, l(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", rn, [
                    (o(!0), s(W, null, ee(v.value, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", dn, l(Q), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              u.value ? (o(), s("div", cn, [
                g(Oe, { level: "4" }, {
                  default: i(() => [...$[16] || ($[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (V = (D = t.status.git_changes) == null ? void 0 : D.nodes_added) != null && V.length ? (o(), s("div", un, [
                  e("div", mn, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", vn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", fn, [
                    (o(!0), s(W, null, ee(t.status.git_changes.nodes_added, (Q) => (o(), s("div", {
                      key: C(Q),
                      class: "change-item"
                    }, [
                      e("span", gn, l(C(Q)), 1),
                      f(Q) ? (o(), s("span", pn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (N = (P = t.status.git_changes) == null ? void 0 : P.nodes_removed) != null && N.length ? (o(), s("div", hn, [
                  e("div", yn, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", wn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (o(!0), s(W, null, ee(t.status.git_changes.nodes_removed, (Q) => (o(), s("div", {
                      key: C(Q),
                      class: "change-item"
                    }, [
                      e("span", bn, l(C(Q)), 1),
                      f(Q) ? (o(), s("span", _n, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (z = t.status.git_changes) != null && z.workflow_changes ? (o(), s("div", $n, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Cn, [
                    e("div", xn, [
                      e("span", Sn, l(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (S = t.status.git_changes) != null && S.has_other_changes ? (o(), s("div", In, [...$[20] || ($[20] = [
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
              (M = t.status.comparison) != null && M.is_synced ? d("", !0) : (o(), s("div", En, [
                e("div", Mn, [
                  g(Oe, { level: "4" }, {
                    default: i(() => [...$[21] || ($[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (Q) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[22] || ($[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (q = (oe = t.status.comparison) == null ? void 0 : oe.missing_nodes) != null && q.length ? (o(), s("div", zn, [
                  g(we, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Ln, [
                    (o(!0), s(W, null, ee(t.status.comparison.missing_nodes.slice(0, 10), (Q) => (o(), s("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", Tn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (ae = (te = t.status.comparison) == null ? void 0 : te.extra_nodes) != null && ae.length ? (o(), s("div", Rn, [
                  g(we, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Dn, [
                    (o(!0), s(W, null, ee(t.status.comparison.extra_nodes.slice(0, 10), (Q) => (o(), s("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Nn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (Y = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && Y.length ? (o(), s("div", On, [
                  g(we, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (O = t.status.comparison) != null && O.packages_in_sync ? d("", !0) : (o(), s("div", Un, [
                  g(we, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ne = (_ = t.status.comparison) == null ? void 0 : _.disabled_nodes) != null && ne.length ? (o(), s("div", Pn, [
                g(Oe, { level: "4" }, {
                  default: i(() => [...$[23] || ($[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Bn, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Fn, [
                  (o(!0), s(W, null, ee(t.status.comparison.disabled_nodes.slice(0, 10), (Q) => (o(), s("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + l(Q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", An, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Vn, [
                g(Oe, { level: "4" }, {
                  default: i(() => [...$[25] || ($[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Wn, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              a.value ? (o(), s("div", Gn, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", jn, [
              g(Z, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (Q) => k.$emit("close"))
              }, {
                default: i(() => [...$[29] || ($[29] = [
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
}), qn = /* @__PURE__ */ J(Hn, [["__scopeId", "data-v-c67eed17"]]), Kn = { class: "health-section-header" }, Jn = { class: "suggestions-content" }, Yn = { class: "suggestions-text" }, Xn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, Qn = /* @__PURE__ */ K({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: c }) {
    const n = t, r = x(!1), p = x(!1);
    function v() {
      r.value = !0;
    }
    function h() {
      r.value = !1, a("view-workflows");
    }
    function u() {
      r.value = !1, a("view-nodes");
    }
    const a = c, m = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), C = B(() => n.status.has_changes), f = B(() => {
      const P = n.status.git_changes;
      return P.nodes_added.length > 0 || P.nodes_removed.length > 0 || P.workflow_changes;
    }), k = B(() => n.status.has_changes || m.value), $ = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), R = B(() => n.status.git_changes.has_other_changes), b = B(() => {
      var P;
      return ((P = n.status.workflows.analyzed) == null ? void 0 : P.filter((N) => N.status === "broken")) || [];
    }), w = B(() => {
      var P;
      return ((P = n.status.workflows.analyzed) == null ? void 0 : P.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), F = B(() => b.value.length > 0), U = B(() => F.value || w.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), L = B(() => {
      const P = [];
      return n.status.workflows.new.length > 0 && P.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && P.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && P.push(`${n.status.workflows.deleted.length} deleted`), P.length > 0 ? `${P.join(", ")} workflow${P.length === 1 && !P[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), D = B(() => {
      var z, S;
      const P = [], N = n.status.comparison;
      return (z = N.missing_nodes) != null && z.length && P.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (S = N.extra_nodes) != null && S.length && P.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), P.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${P.join(" and ")}.`;
    }), V = B(() => {
      var z, S;
      const P = [], N = n.status.comparison;
      return (z = N.extra_nodes) != null && z.length && (N.extra_nodes.slice(0, 3).forEach((M) => {
        P.push(`Untracked: ${M}`);
      }), N.extra_nodes.length > 3 && P.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (S = N.missing_nodes) != null && S.length && (N.missing_nodes.slice(0, 3).forEach((M) => {
        P.push(`Missing: ${M}`);
      }), N.missing_nodes.length > 3 && P.push(`...and ${N.missing_nodes.length - 3} more missing`)), P;
    });
    return (P, N) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(De, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[1] || (N[1] = (z) => p.value = !0),
            onMouseleave: N[2] || (N[2] = (z) => p.value = !1)
          }, [
            e("div", Kn, [
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
                  p.value ? (o(), I(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...N[10] || (N[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            g(os, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Tt({
              left: i(() => [
                t.status.workflows.new.length ? (o(), I(Ge, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (o(), I(Ge, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (o(), I(Ge, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                g(Ge, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: m.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (o(), I(Ge, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), I(Ge, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (o(), I(Ge, {
                  key: 2,
                  icon: "●",
                  count: $.value,
                  label: $.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                R.value ? (o(), I(Ge, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                C.value && !f.value && !R.value ? (o(), I(Ge, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                C.value ? d("", !0) : (o(), I(Ge, {
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
                  N[12] || (N[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Jn, [
                    e("span", Yn, l(L.value), 1),
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[0] || (N[0] = (z) => P.$emit("commit-changes"))
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
          t.status.is_detached_head ? (o(), I(ut, {
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
                onClick: N[3] || (N[3] = (z) => P.$emit("create-branch"))
              }, {
                default: i(() => [...N[13] || (N[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          U.value ? (o(), s("div", Xn, [
            g(Oe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...N[14] || (N[14] = [
                y(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            b.value.length > 0 ? (o(), I(ut, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${b.value.length} workflow${b.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: b.value.map((z) => `${z.name} — ${z.issue_summary}`)
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[4] || (N[4] = (z) => P.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[15] || (N[15] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : d("", !0),
            w.value.length > 0 ? (o(), I(ut, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: w.value.map((z) => `${z.name} — ${z.models_needing_path_sync_count} model path${z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[5] || (N[5] = (z) => P.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[16] || (N[16] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : d("", !0),
            t.status.missing_models_count > 0 && !F.value ? (o(), I(ut, {
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
                  onClick: N[6] || (N[6] = (z) => P.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[17] || (N[17] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : d("", !0),
            t.status.comparison.is_synced ? d("", !0) : (o(), I(ut, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: D.value,
              items: V.value
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: i(() => [...N[18] || (N[18] = [
                    y(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                g(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[7] || (N[7] = (z) => P.$emit("view-nodes"))
                }, {
                  default: i(() => [...N[19] || (N[19] = [
                    y(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : d("", !0),
          !U.value && !k.value ? (o(), I(Ae, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : d("", !0)
        ]),
        _: 1
      }),
      g(qn, {
        show: r.value,
        status: t.status,
        onClose: N[8] || (N[8] = (z) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: u
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Zn = /* @__PURE__ */ J(Qn, [["__scopeId", "data-v-698b3f43"]]), ea = ["type", "value", "placeholder", "disabled"], ta = /* @__PURE__ */ K({
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
    const r = t, p = n, v = x(null);
    function h(u) {
      const a = u.target.value;
      p("update:modelValue", a);
    }
    return xe(() => {
      r.autoFocus && v.value && v.value.focus();
    }), c({
      focus: () => {
        var u;
        return (u = v.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = v.value) == null ? void 0 : u.blur();
      }
    }), (u, a) => (o(), s("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: se(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        a[0] || (a[0] = et((m) => u.$emit("enter"), ["enter"])),
        a[1] || (a[1] = et((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: a[2] || (a[2] = (m) => u.$emit("focus")),
      onBlur: a[3] || (a[3] = (m) => u.$emit("blur"))
    }, null, 42, ea));
  }
}), Lt = /* @__PURE__ */ J(ta, [["__scopeId", "data-v-0380d08f"]]), oa = { class: "branch-create-form" }, sa = { class: "form-actions" }, na = /* @__PURE__ */ K({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, r = x(""), p = B(() => {
      const u = r.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function v() {
      p.value && (n("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", n("cancel");
    }
    return (u, a) => (o(), s("div", oa, [
      g(Lt, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (m) => r.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", sa, [
        g(Z, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: v
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
}), aa = /* @__PURE__ */ J(na, [["__scopeId", "data-v-7c500394"]]), la = { class: "branch-list-item__indicator" }, ia = { class: "branch-list-item__name" }, ra = {
  key: 0,
  class: "branch-list-item__actions"
}, da = {
  key: 0,
  class: "branch-list-item__current-label"
}, ca = /* @__PURE__ */ K({
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
      class: se(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, [
      e("span", la, l(t.isCurrent ? "●" : "○"), 1),
      e("span", ia, l(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), s("div", ra, [
        ue(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", da, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), ua = /* @__PURE__ */ J(ca, [["__scopeId", "data-v-c6581a24"]]), ma = {
  key: 2,
  class: "branch-list"
}, va = /* @__PURE__ */ K({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, r = x(!1);
    function p(h) {
      n("create", h), v();
    }
    function v() {
      r.value = !1;
    }
    return (h, u) => (o(), I(Re, null, {
      header: i(() => [
        g(De, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? d("", !0) : (o(), I(Z, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (a) => r.value = !0)
            }, {
              default: i(() => [...u[1] || (u[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), I(aa, {
          key: 0,
          onCreate: p,
          onCancel: v
        })) : d("", !0),
        t.branches.length === 0 ? (o(), I(Ae, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", ma, [
          (o(!0), s(W, null, ee(t.branches, (a) => (o(), I(ua, {
            key: a.name,
            "branch-name": a.name,
            "is-current": a.is_current
          }, {
            actions: i(() => [
              a.is_current ? d("", !0) : (o(), I(Z, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => h.$emit("delete", a.name)
              }, {
                default: i(() => [...u[2] || (u[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              a.is_current ? d("", !0) : (o(), I(Z, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => h.$emit("switch", a.name)
              }, {
                default: i(() => [...u[3] || (u[3] = [
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
}), fa = /* @__PURE__ */ J(va, [["__scopeId", "data-v-86784ddd"]]), ga = { class: "commit-list" }, pa = /* @__PURE__ */ K({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (o(), s("div", ga, [
      ue(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ha = /* @__PURE__ */ J(pa, [["__scopeId", "data-v-8c5ee761"]]), ya = { class: "commit-hash" }, wa = /* @__PURE__ */ K({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = B(() => c.hash.slice(0, c.length));
    return (r, p) => (o(), s("span", ya, l(n.value), 1));
  }
}), lo = /* @__PURE__ */ J(wa, [["__scopeId", "data-v-7c333cc6"]]), ka = { class: "commit-message" }, ba = { class: "commit-date" }, _a = /* @__PURE__ */ K({
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
    function p() {
      n.clickable && r("click");
    }
    return (v, h) => (o(), s("div", {
      class: se(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      g(lo, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ka, l(t.message), 1),
      e("span", ba, l(t.relativeDate), 1),
      v.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = $e(() => {
        }, ["stop"]))
      }, [
        ue(v.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), $a = /* @__PURE__ */ J(_a, [["__scopeId", "data-v-dd7c621b"]]), Ca = /* @__PURE__ */ K({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (o(), I(Re, null, {
      header: i(() => [
        g(De, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), I(Ae, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), I(ha, { key: 1 }, {
          default: i(() => [
            (o(!0), s(W, null, ee(t.commits, (r) => (o(), I($a, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (p) => c.$emit("select", r)
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => c.$emit("checkout", r),
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
}), xa = /* @__PURE__ */ J(Ca, [["__scopeId", "data-v-981c3c64"]]), Ay = [
  // BROKEN workflows (4) - Missing dependencies or category mismatch
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
  // Category mismatch example - model exists but in wrong directory
  {
    name: "lora-wrong-dir.json",
    status: "broken",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 8,
    model_count: 2,
    sync_state: "synced",
    has_category_mismatch_issues: !0,
    models_with_category_mismatch: 1
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
], Vy = {
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
  },
  // Category mismatch example - LoRA in wrong directory
  "lora-wrong-dir.json": {
    name: "lora-wrong-dir.json",
    status: "broken",
    nodes: [
      {
        name: "comfyui-core",
        installed: !0,
        registry_id: "comfyui-core",
        repository: null,
        version: "0.3.0",
        source: "builtin",
        download_url: null
      }
    ],
    models: [
      {
        filename: "my_character_lora.safetensors",
        hash: "f8c9e2d1",
        // CRC32
        sha256_hash: "f8c9e2d1a0b1c2d3e4f5678901234567890abcdef1234567890abcdef12345678",
        blake3_hash: null,
        status: "category_mismatch",
        // Wrong directory!
        importance: "required",
        size_mb: 185,
        file_size: 194e6,
        node_type: "LoraLoader",
        node_id: "7",
        relative_path: "checkpoints/my_character_lora.safetensors",
        // Wrong! Should be loras/
        category: "checkpoints",
        // Wrong category
        mtime: Date.now() / 1e3 - 86400 * 3,
        metadata: {
          model_type: "lora",
          base_model: "SDXL"
        },
        // Category mismatch details
        has_category_mismatch: !0,
        expected_categories: ["loras"],
        actual_category: "checkpoints"
      },
      {
        filename: "sdxl_base_1.0.safetensors",
        hash: "b22f3f8c",
        sha256_hash: "b22f3f8c90d1e2f3456789abcdef01234567890abcdef1234567890abcdef012",
        blake3_hash: null,
        status: "available",
        importance: "required",
        size_mb: 6938,
        file_size: 7275159552,
        node_type: "CheckpointLoader",
        node_id: "4",
        relative_path: "checkpoints/sdxl_base_1.0.safetensors",
        category: "checkpoints",
        mtime: Date.now() / 1e3 - 86400 * 30,
        metadata: {
          model_type: "checkpoint",
          base_model: "SDXL"
        },
        has_category_mismatch: !1,
        expected_categories: ["checkpoints"],
        actual_category: "checkpoints"
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
], Wy = [
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
function Ie() {
  const t = x(!1), c = x(null);
  async function n(H, de) {
    var Ee;
    if (!((Ee = window.app) != null && Ee.api))
      throw new Error("ComfyUI API not available");
    const me = await window.app.api.fetchApi(H, de);
    if (!me.ok) {
      const ot = await me.json().catch(() => ({}));
      throw new Error(ot.error || ot.message || `Request failed: ${me.status}`);
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
  async function v(H = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${de}`);
  }
  async function h(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function u() {
    return n("/v2/comfygit/branches");
  }
  async function a(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function m(H, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: de })
    });
  }
  async function C(H, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: de })
    });
  }
  async function f(H, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: de })
    });
  }
  async function k(H, de = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de })
    });
  }
  async function $() {
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
  async function R(H) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: H })
    });
  }
  async function b() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function w(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function F() {
    return n("/v2/workspace/environments/create_status");
  }
  async function U(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function L(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function D(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await r(H), me = [];
      return de.workflows.new.forEach((Ee) => {
        me.push({ name: Ee, status: "new", missing_nodes: 0, missing_models: 0, path: Ee });
      }), de.workflows.modified.forEach((Ee) => {
        me.push({ name: Ee, status: "modified", missing_nodes: 0, missing_models: 0, path: Ee });
      }), de.workflows.synced.forEach((Ee) => {
        me.push({ name: Ee, status: "synced", missing_nodes: 0, missing_models: 0, path: Ee });
      }), me;
    }
  }
  async function V(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function P(H) {
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
  async function z(H, de, me) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: me })
    });
  }
  async function S() {
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
  async function oe(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function q(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function te(H, de) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function ae(H, de) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function X(H) {
    return n(`/v2/workspace/models/${H}`, {
      method: "DELETE"
    });
  }
  async function Y(H) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
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
  async function ne(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function Q() {
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
  async function Se(H) {
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
  async function lt() {
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
  async function ht(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function yt(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function it(H) {
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
  async function Ze(H, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: de })
    });
  }
  async function He(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Ve(H, de, me) {
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
    error: c,
    getStatus: r,
    commit: p,
    getHistory: v,
    exportEnv: h,
    // Git Operations
    getBranches: u,
    getCommitDetail: a,
    checkout: m,
    createBranch: C,
    switchBranch: f,
    deleteBranch: k,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: R,
    getSwitchProgress: b,
    createEnvironment: w,
    getCreateProgress: F,
    getComfyUIReleases: U,
    deleteEnvironment: L,
    // Workflow Management
    getWorkflows: D,
    getWorkflowDetails: V,
    resolveWorkflow: P,
    installWorkflowDeps: N,
    setModelImportance: z,
    // Model Management
    getEnvironmentModels: S,
    getWorkspaceModels: M,
    getModelDetails: oe,
    openFileLocation: q,
    addModelSource: te,
    removeModelSource: ae,
    deleteModel: X,
    downloadModel: Y,
    scanWorkspaceModels: O,
    getModelsDirectory: _,
    setModelsDirectory: ne,
    // Settings
    getConfig: Q,
    updateConfig: Se,
    // Debug/Logs
    getEnvironmentLogs: ye,
    getWorkspaceLogs: ge,
    // Node Management
    getNodes: lt,
    trackNodeAsDev: be,
    installNode: ht,
    updateNode: yt,
    uninstallNode: it,
    // Git Remotes
    getRemotes: he,
    addRemote: Ze,
    removeRemote: He,
    updateRemoteUrl: Ve,
    fetchRemote: wt,
    getRemoteSyncStatus: ce,
    // Environment Sync
    syncEnvironmentManually: Ue
  };
}
async function bt(t, c = {}, n = 5e3) {
  const r = new AbortController(), p = setTimeout(() => r.abort(), n);
  try {
    const v = await fetch(t, {
      ...c,
      signal: r.signal
    });
    return clearTimeout(p), v;
  } catch (v) {
    throw clearTimeout(p), v.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : v;
  }
}
function io() {
  const t = x(null);
  async function c() {
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
    if (t.value || (t.value = await c()), !t.value)
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
      return t.value = await c(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await c()), !t.value)
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
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await bt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await c()), !t.value)
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
    discoverControlPort: c,
    checkHealth: n,
    getStatus: r,
    restart: p,
    kill: v
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
}, Ra = /* @__PURE__ */ K({
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
    function p() {
      n.closeOnOverlayClick && r("close");
    }
    function v(h) {
      h.key === "Escape" && r("close");
    }
    return xe(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), Co(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (h, u) => (o(), I(ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: se(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: u[1] || (u[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Ia, [
            ue(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", Ea, l(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (a) => h.$emit("close"))
            }, [...u[2] || (u[2] = [
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
          e("div", Ma, [
            t.loading ? (o(), s("div", za, "Loading...")) : t.error ? (o(), s("div", La, l(t.error), 1)) : ue(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", Ta, [
            ue(h.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ J(Ra, [["__scopeId", "data-v-2125a0e6"]]), Da = ["type", "disabled"], Na = {
  key: 0,
  class: "spinner"
}, Oa = /* @__PURE__ */ K({
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
      class: se(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Na)) : d("", !0),
      ue(c.$slots, "default", {}, void 0, !0)
    ], 10, Da));
  }
}), ie = /* @__PURE__ */ J(Oa, [["__scopeId", "data-v-f3452606"]]), Ua = {
  key: 0,
  class: "base-title-count"
}, Pa = /* @__PURE__ */ K({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (o(), I(Gt(`h${t.level}`), {
      class: se(["base-title", t.variant])
    }, {
      default: i(() => [
        ue(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Ua, "(" + l(t.count) + ")", 1)) : d("", !0)
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
}, Wa = /* @__PURE__ */ K({
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
    return (r, p) => (o(), s("div", {
      class: se(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: se(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (v) => r.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (o(), s("option", Fa, l(t.placeholder), 1)) : d("", !0),
        (o(!0), s(W, null, ee(t.options, (v) => (o(), s("option", {
          key: c(v),
          value: c(v)
        }, l(n(v)), 9, Aa))), 128))
      ], 42, Ba),
      t.error ? (o(), s("span", Va, l(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Ga = /* @__PURE__ */ J(Wa, [["__scopeId", "data-v-7436d745"]]), ja = { class: "popover-header" }, Ha = { class: "popover-title" }, qa = { class: "popover-content" }, Ka = {
  key: 0,
  class: "popover-actions"
}, Ja = /* @__PURE__ */ K({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (o(), I(ze, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Je({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", ja, [
            e("h4", Ha, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", qa, [
            ue(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), s("div", Ka, [
            ue(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Ye = /* @__PURE__ */ J(Ja, [["__scopeId", "data-v-42815ace"]]), Ya = { class: "detail-section" }, Xa = {
  key: 0,
  class: "empty-message"
}, Qa = { class: "model-header" }, Za = { class: "model-name" }, el = { class: "model-details" }, tl = { class: "model-row" }, ol = { class: "model-row" }, sl = { class: "label" }, nl = {
  key: 0,
  class: "model-row model-row-nodes"
}, al = { class: "node-list" }, ll = ["onClick"], il = {
  key: 1,
  class: "model-row"
}, rl = { class: "value" }, dl = {
  key: 2,
  class: "model-row"
}, cl = { class: "value error" }, ul = {
  key: 0,
  class: "model-actions"
}, ml = { class: "detail-section" }, vl = {
  key: 0,
  class: "empty-message"
}, fl = { class: "node-name" }, gl = {
  key: 0,
  class: "node-version"
}, pl = /* @__PURE__ */ K({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, r = c, { getWorkflowDetails: p, setModelImportance: v, openFileLocation: h } = Ie(), u = x(null), a = x(!1), m = x(null), C = x(!1), f = x({}), k = x(!1), $ = x(/* @__PURE__ */ new Set()), R = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function b(z) {
      switch (z) {
        case "available":
          return "success";
        case "path_mismatch":
          return "warning";
        case "downloadable":
          return "info";
        case "category_mismatch":
          return "error";
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
        case "category_mismatch":
          return "✗ Wrong Directory";
        case "downloadable":
          return "⬇ Downloadable";
        case "missing":
        default:
          return "✗ Missing";
      }
    }
    function F(z) {
      if (!z.loaded_by || z.loaded_by.length === 0) return [];
      const S = z.hash || z.filename;
      return $.value.has(S) ? z.loaded_by : z.loaded_by.slice(0, 3);
    }
    function U(z) {
      return $.value.has(z);
    }
    function L(z) {
      $.value.has(z) ? $.value.delete(z) : $.value.add(z), $.value = new Set($.value);
    }
    async function D() {
      a.value = !0, m.value = null;
      try {
        u.value = await p(n.workflowName);
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load workflow details";
      } finally {
        a.value = !1;
      }
    }
    function V(z, S) {
      f.value[z] = S, C.value = !0;
    }
    async function P(z) {
      try {
        await h(z);
      } catch (S) {
        m.value = S instanceof Error ? S.message : "Failed to open file location";
      }
    }
    async function N() {
      if (!C.value) {
        r("close");
        return;
      }
      a.value = !0, m.value = null;
      try {
        for (const [z, S] of Object.entries(f.value))
          await v(n.workflowName, z, S);
        r("refresh"), r("close");
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to save changes";
      } finally {
        a.value = !1;
      }
    }
    return xe(D), (z, S) => (o(), s(W, null, [
      g(tt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: a.value,
        error: m.value || void 0,
        onClose: S[4] || (S[4] = (M) => r("close"))
      }, {
        body: i(() => [
          u.value ? (o(), s(W, { key: 0 }, [
            e("section", Ya, [
              g(xt, { variant: "section" }, {
                default: i(() => [
                  y("MODELS USED (" + l(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (o(), s("div", Xa, " No models used in this workflow ")) : d("", !0),
              (o(!0), s(W, null, ee(u.value.models, (M) => {
                var oe;
                return o(), s("div", {
                  key: M.hash || M.filename,
                  class: "model-card"
                }, [
                  e("div", Qa, [
                    S[6] || (S[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Za, l(M.filename), 1)
                  ]),
                  e("div", el, [
                    e("div", tl, [
                      S[7] || (S[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: se(["value", b(M.status)])
                      }, l(w(M.status)), 3)
                    ]),
                    e("div", ol, [
                      e("span", sl, [
                        S[8] || (S[8] = y(" Importance: ", -1)),
                        g(ao, {
                          size: 14,
                          title: "About importance levels",
                          onClick: S[0] || (S[0] = (q) => k.value = !0)
                        })
                      ]),
                      g(Ga, {
                        "model-value": f.value[M.filename] || M.importance,
                        options: R,
                        "onUpdate:modelValue": (q) => V(M.filename, q)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    M.loaded_by && M.loaded_by.length > 0 ? (o(), s("div", nl, [
                      S[9] || (S[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", al, [
                        (o(!0), s(W, null, ee(F(M), (q, te) => (o(), s("div", {
                          key: `${q.node_id}-${te}`,
                          class: "node-reference"
                        }, l(q.node_type) + " (Node #" + l(q.node_id) + ") ", 1))), 128)),
                        M.loaded_by.length > 3 ? (o(), s("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (q) => L(M.hash || M.filename)
                        }, l(U(M.hash || M.filename) ? "▼ Show less" : `▶ View all (${M.loaded_by.length})`), 9, ll)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    M.size_mb ? (o(), s("div", il, [
                      S[10] || (S[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", rl, l(M.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    M.has_category_mismatch ? (o(), s("div", dl, [
                      S[13] || (S[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", cl, [
                        S[11] || (S[11] = y(" In ", -1)),
                        e("code", null, l(M.actual_category) + "/", 1),
                        S[12] || (S[12] = y(" but loader needs ", -1)),
                        e("code", null, l((oe = M.expected_categories) == null ? void 0 : oe[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  M.status !== "available" ? (o(), s("div", ul, [
                    M.status === "downloadable" ? (o(), I(ie, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: S[1] || (S[1] = (q) => r("resolve"))
                    }, {
                      default: i(() => [...S[14] || (S[14] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    })) : M.status === "category_mismatch" && M.file_path ? (o(), I(ie, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => P(M.file_path)
                    }, {
                      default: i(() => [...S[15] || (S[15] = [
                        y(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : M.status !== "path_mismatch" ? (o(), I(ie, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: S[2] || (S[2] = (q) => r("resolve"))
                    }, {
                      default: i(() => [...S[16] || (S[16] = [
                        y(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", ml, [
              g(xt, { variant: "section" }, {
                default: i(() => [
                  y("NODES USED (" + l(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (o(), s("div", vl, " No custom nodes used in this workflow ")) : d("", !0),
              (o(!0), s(W, null, ee(u.value.nodes, (M) => (o(), s("div", {
                key: M.name,
                class: "node-item"
              }, [
                e("span", {
                  class: se(["node-status", M.status === "installed" ? "installed" : "missing"])
                }, l(M.status === "installed" ? "✓" : "✕"), 3),
                e("span", fl, l(M.name), 1),
                M.version ? (o(), s("span", gl, "v" + l(M.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: i(() => [
          g(ie, {
            variant: "secondary",
            onClick: S[3] || (S[3] = (M) => r("close"))
          }, {
            default: i(() => [...S[17] || (S[17] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          C.value ? (o(), I(ie, {
            key: 0,
            variant: "primary",
            onClick: N
          }, {
            default: i(() => [...S[18] || (S[18] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(Ye, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: S[5] || (S[5] = (M) => k.value = !1)
      }, {
        content: i(() => [...S[19] || (S[19] = [
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
}), hl = /* @__PURE__ */ J(pl, [["__scopeId", "data-v-668728e6"]]), pe = so({
  items: [],
  status: "idle"
});
let je = null;
function ro() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Bt(t) {
  return pe.items.find((c) => c.id === t);
}
async function mt() {
  if (pe.status === "downloading") return;
  const t = pe.items.find((c) => c.status === "queued");
  if (!t) {
    pe.status = "idle";
    return;
  }
  pe.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await yl(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    pe.status = "idle", mt();
  }
}
async function yl(t) {
  return new Promise((c, n) => {
    je && (je.close(), je = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    je = p;
    let v = Date.now(), h = 0, u = !1;
    p.onmessage = (a) => {
      try {
        const m = JSON.parse(a.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const C = Date.now(), f = (C - v) / 1e3;
            if (f > 0.5) {
              const k = t.downloaded - h;
              if (t.speed = k / f, v = C, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            u = !0, p.close(), je = null, c();
            break;
          case "error":
            u = !0, p.close(), je = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), je = null, u || n(new Error("Connection lost"));
    };
  });
}
async function wl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (pe.items.some((p) => p.url === n.url && p.filename === n.filename))
        continue;
      const r = {
        id: ro(),
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
function Et() {
  function t(w) {
    for (const F of w) {
      if (pe.items.some(
        (D) => D.url === F.url && D.targetPath === F.targetPath && ["queued", "downloading", "paused", "completed"].includes(D.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${F.filename}`);
        continue;
      }
      const L = {
        id: ro(),
        workflow: F.workflow,
        filename: F.filename,
        url: F.url,
        targetPath: F.targetPath,
        size: F.size || 0,
        type: F.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      pe.items.push(L);
    }
    pe.status === "idle" && mt();
  }
  async function c(w) {
    const F = Bt(w);
    if (F) {
      if (F.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(F.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        je && (je.close(), je = null), F.status = "failed", F.error = "Cancelled by user", pe.status = "idle", mt();
      } else if (F.status === "queued") {
        const U = pe.items.findIndex((L) => L.id === w);
        U >= 0 && pe.items.splice(U, 1);
      }
    }
  }
  function n(w) {
    const F = Bt(w);
    !F || F.status !== "failed" || (F.status = "queued", F.error = void 0, F.progress = 0, F.downloaded = 0, pe.status === "idle" && mt());
  }
  function r(w) {
    const F = Bt(w);
    !F || F.status !== "paused" || (F.status = "queued", pe.status === "idle" && mt());
  }
  function p() {
    const w = pe.items.filter((F) => F.status === "paused");
    for (const F of w)
      F.status = "queued";
    pe.status === "idle" && mt();
  }
  function v(w) {
    const F = pe.items.findIndex((U) => U.id === w);
    F >= 0 && ["completed", "failed", "paused"].includes(pe.items[F].status) && pe.items.splice(F, 1);
  }
  function h() {
    pe.items = pe.items.filter((w) => w.status !== "completed");
  }
  function u() {
    pe.items = pe.items.filter((w) => w.status !== "failed");
  }
  const a = B(
    () => pe.items.find((w) => w.status === "downloading")
  ), m = B(
    () => pe.items.filter((w) => w.status === "queued")
  ), C = B(
    () => pe.items.filter((w) => w.status === "completed")
  ), f = B(
    () => pe.items.filter((w) => w.status === "failed")
  ), k = B(
    () => pe.items.filter((w) => w.status === "paused")
  ), $ = B(() => pe.items.length > 0), R = B(
    () => pe.items.filter((w) => w.status === "queued" || w.status === "downloading").length
  ), b = B(
    () => pe.items.some((w) => w.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: xo(pe),
    // Computed
    currentDownload: a,
    queuedItems: m,
    completedItems: C,
    failedItems: f,
    pausedItems: k,
    hasItems: $,
    activeCount: R,
    hasPaused: b,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: p,
    removeItem: v,
    clearCompleted: h,
    clearFailed: u,
    loadPendingDownloads: wl
  };
}
function kl() {
  const t = x(null), c = x(null), n = x([]), r = x([]), p = x(!1), v = x(null);
  async function h(U, L) {
    var V;
    if (!((V = window.app) != null && V.api))
      throw new Error("ComfyUI API not available");
    const D = await window.app.api.fetchApi(U, L);
    if (!D.ok) {
      const P = await D.json().catch(() => ({})), N = P.error || P.message || `Request failed: ${D.status}`;
      throw new Error(N);
    }
    return D.json();
  }
  async function u(U) {
    p.value = !0, v.value = null;
    try {
      let L;
      return kt() || (L = await h(
        `/v2/comfygit/workflow/${U}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = L, L;
    } catch (L) {
      const D = L instanceof Error ? L.message : "Unknown error occurred";
      throw v.value = D, L;
    } finally {
      p.value = !1;
    }
  }
  async function a(U, L, D, V) {
    p.value = !0, v.value = null;
    try {
      let P;
      if (!kt()) {
        const N = Object.fromEntries(L), z = Object.fromEntries(D), S = V ? Array.from(V) : [];
        P = await h(
          `/v2/comfygit/workflow/${U}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: N,
              model_choices: z,
              skipped_packages: S
            })
          }
        );
      }
      return c.value = P, P;
    } catch (P) {
      const N = P instanceof Error ? P.message : "Unknown error occurred";
      throw v.value = N, P;
    } finally {
      p.value = !1;
    }
  }
  async function m(U, L = 10) {
    p.value = !0, v.value = null;
    try {
      let D;
      return kt() || (D = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: L })
        }
      )), n.value = D.results, D.results;
    } catch (D) {
      const V = D instanceof Error ? D.message : "Unknown error occurred";
      throw v.value = V, D;
    } finally {
      p.value = !1;
    }
  }
  async function C(U, L = 10) {
    p.value = !0, v.value = null;
    try {
      let D;
      return kt() || (D = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: L })
        }
      )), r.value = D.results, D.results;
    } catch (D) {
      const V = D instanceof Error ? D.message : "Unknown error occurred";
      throw v.value = V, D;
    } finally {
      p.value = !1;
    }
  }
  const f = so({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    f.phase = "idle", f.currentFile = void 0, f.currentFileIndex = void 0, f.totalFiles = void 0, f.bytesDownloaded = void 0, f.bytesTotal = void 0, f.completedFiles = [], f.nodesToInstall = [], f.nodesInstalled = [], f.installError = void 0, f.needsRestart = void 0, f.error = void 0, f.nodeInstallProgress = void 0;
  }
  async function $(U) {
    f.phase = "installing", f.nodesInstalled = [], f.installError = void 0, f.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return kt(), await R(U);
    } catch (L) {
      const D = L instanceof Error ? L.message : "Failed to install nodes";
      throw f.installError = D, L;
    }
  }
  async function R(U) {
    var D;
    const L = await h(
      `/v2/comfygit/workflow/${U}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: f.nodesToInstall
        })
      }
    );
    if (f.nodeInstallProgress) {
      f.nodeInstallProgress.totalNodes = f.nodesToInstall.length;
      const V = new Map(((D = L.failed) == null ? void 0 : D.map((P) => [P.node_id, P.error])) || []);
      for (let P = 0; P < f.nodesToInstall.length; P++) {
        const N = f.nodesToInstall[P], z = V.get(N);
        f.nodeInstallProgress.completedNodes.push({
          node_id: N,
          success: !z,
          error: z
        });
      }
    }
    return f.nodesInstalled = L.nodes_installed, f.needsRestart = L.nodes_installed.length > 0, L.failed && L.failed.length > 0 && (f.installError = `${L.failed.length} package(s) failed to install`), L;
  }
  async function b(U, L, D) {
    k(), f.phase = "resolving", v.value = null;
    const V = Object.fromEntries(L), P = Object.fromEntries(D);
    try {
      const N = await fetch(`/v2/comfygit/workflow/${U}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: V,
          model_choices: P
        })
      });
      if (!N.ok)
        throw new Error(`Request failed: ${N.status}`);
      if (!N.body)
        throw new Error("No response body");
      const z = N.body.getReader(), S = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: oe, value: q } = await z.read();
        if (oe) break;
        M += S.decode(q, { stream: !0 });
        const te = M.split(`

`);
        M = te.pop() || "";
        for (const ae of te) {
          if (!ae.trim()) continue;
          const X = ae.split(`
`);
          let Y = "", O = "";
          for (const _ of X)
            _.startsWith("event: ") ? Y = _.slice(7) : _.startsWith("data: ") && (O = _.slice(6));
          if (O)
            try {
              const _ = JSON.parse(O);
              w(Y, _);
            } catch (_) {
              console.warn("Failed to parse SSE event:", _);
            }
        }
      }
    } catch (N) {
      const z = N instanceof Error ? N.message : "Unknown error occurred";
      throw v.value = z, f.error = z, f.phase = "error", N;
    }
  }
  function w(U, L) {
    switch (U) {
      case "batch_start":
        f.phase = "downloading", f.totalFiles = L.total;
        break;
      case "file_start":
        f.currentFile = L.filename, f.currentFileIndex = L.index, f.bytesDownloaded = 0, f.bytesTotal = void 0;
        break;
      case "file_progress":
        f.bytesDownloaded = L.downloaded, f.bytesTotal = L.total;
        break;
      case "file_complete":
        f.completedFiles.push({
          filename: L.filename,
          success: L.success,
          error: L.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        f.nodesToInstall = L.nodes_to_install || [], L.download_results && (f.completedFiles = L.download_results), f.phase = "complete";
        break;
      case "error":
        f.error = L.message, f.phase = "error", v.value = L.message;
        break;
    }
  }
  function F(U, L) {
    const { addToQueue: D } = Et(), V = L.filter((P) => P.url && P.target_path).map((P) => ({
      workflow: U,
      filename: P.filename,
      url: P.url,
      targetPath: P.target_path,
      size: P.size || 0,
      type: "model"
    }));
    return V.length > 0 && D(V), V.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: r,
    isLoading: p,
    error: v,
    progress: f,
    // Methods
    analyzeWorkflow: u,
    applyResolution: a,
    applyResolutionWithProgress: b,
    installNodes: $,
    searchNodes: m,
    searchModels: C,
    resetProgress: k,
    queueModelDownloads: F
  };
}
const bl = { class: "resolution-stepper" }, _l = { class: "stepper-header" }, $l = ["onClick"], Cl = {
  key: 0,
  class: "step-icon"
}, xl = {
  key: 1,
  class: "step-number"
}, Sl = { class: "step-label" }, Il = {
  key: 0,
  class: "step-connector"
}, El = { class: "stepper-content" }, Ml = /* @__PURE__ */ K({
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
    function p(m) {
      var C;
      if ((C = n.stepStats) != null && C[m]) {
        const f = n.stepStats[m];
        return f.total > 0 && f.resolved === f.total;
      }
      return n.completedSteps.includes(m);
    }
    function v(m) {
      var C;
      if ((C = n.stepStats) != null && C[m]) {
        const f = n.stepStats[m];
        return f.resolved > 0 && f.resolved < f.total;
      }
      return !1;
    }
    function h(m) {
      return p(m) ? "state-complete" : v(m) ? "state-partial" : "state-pending";
    }
    function u(m) {
      return !1;
    }
    function a(m) {
      r("step-change", m);
    }
    return (m, C) => (o(), s("div", bl, [
      e("div", _l, [
        (o(!0), s(W, null, ee(t.steps, (f, k) => (o(), s("div", {
          key: f.id,
          class: se(["step", {
            active: t.currentStep === f.id,
            completed: p(f.id),
            "in-progress": v(f.id),
            disabled: u(f.id)
          }]),
          onClick: ($) => a(f.id)
        }, [
          e("div", {
            class: se(["step-indicator", h(f.id)])
          }, [
            p(f.id) ? (o(), s("span", Cl, "✓")) : (o(), s("span", xl, l(k + 1), 1))
          ], 2),
          e("div", Sl, l(f.label), 1),
          k < t.steps.length - 1 ? (o(), s("div", Il)) : d("", !0)
        ], 10, $l))), 128))
      ]),
      e("div", El, [
        ue(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), zl = /* @__PURE__ */ J(Ml, [["__scopeId", "data-v-2a7b3af8"]]), Ll = /* @__PURE__ */ K({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = B(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), r = B(() => `confidence-${n.value}`), p = B(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (v, h) => (o(), s("span", {
      class: se(["confidence-badge", r.value, t.size])
    }, l(p.value), 3));
  }
}), Kt = /* @__PURE__ */ J(Ll, [["__scopeId", "data-v-17ec4b80"]]), Tl = { class: "node-info" }, Rl = { class: "node-info-text" }, Dl = { class: "item-body" }, Nl = {
  key: 0,
  class: "resolved-state"
}, Ol = {
  key: 1,
  class: "multiple-options"
}, Ul = { class: "options-list" }, Pl = ["onClick"], Bl = ["name", "value", "checked", "onChange"], Fl = { class: "option-content" }, Al = { class: "option-header" }, Vl = { class: "option-package-id" }, Wl = {
  key: 0,
  class: "option-title"
}, Gl = { class: "option-meta" }, jl = {
  key: 0,
  class: "installed-badge"
}, Hl = { class: "action-buttons" }, ql = {
  key: 2,
  class: "unresolved"
}, Kl = { class: "action-buttons" }, Jl = /* @__PURE__ */ K({
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
    const n = t, r = c, p = B(() => !!n.choice);
    B(() => {
      var u;
      return (u = n.choice) == null ? void 0 : u.action;
    }), B(() => {
      var u;
      return (u = n.choice) == null ? void 0 : u.package_id;
    });
    const v = B(() => {
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
    function h(u) {
      r("option-selected", u);
    }
    return (u, a) => (o(), s("div", {
      class: se(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", Tl, [
        e("span", Rl, [
          a[7] || (a[7] = y("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", v.value])
        }, l(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Dl, [
        p.value ? (o(), s("div", Nl, [
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (m) => r("clear-choice"))
          }, {
            default: i(() => [...a[8] || (a[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Ol, [
          a[12] || (a[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ul, [
            (o(!0), s(W, null, ee(t.options, (m, C) => (o(), s("label", {
              key: m.package_id,
              class: se(["option-card", { selected: t.selectedOptionIndex === C }]),
              onClick: (f) => h(C)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: C,
                checked: t.selectedOptionIndex === C,
                onChange: (f) => h(C)
              }, null, 40, Bl),
              e("div", Fl, [
                e("div", Al, [
                  e("span", Vl, l(m.package_id), 1),
                  g(Kt, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                m.title && m.title !== m.package_id ? (o(), s("div", Wl, l(m.title), 1)) : d("", !0),
                e("div", Gl, [
                  m.is_installed ? (o(), s("span", jl, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, Pl))), 128))
          ]),
          e("div", Hl, [
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: a[1] || (a[1] = (m) => r("search"))
            }, {
              default: i(() => [...a[9] || (a[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: a[2] || (a[2] = (m) => r("manual-entry"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: a[3] || (a[3] = (m) => r("mark-optional"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", ql, [
          a[16] || (a[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Kl, [
            g(ie, {
              variant: "primary",
              size: "sm",
              onClick: a[4] || (a[4] = (m) => r("search"))
            }, {
              default: i(() => [...a[13] || (a[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: a[5] || (a[5] = (m) => r("manual-entry"))
            }, {
              default: i(() => [...a[14] || (a[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: a[6] || (a[6] = (m) => r("mark-optional"))
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
}), Yl = /* @__PURE__ */ J(Jl, [["__scopeId", "data-v-e02629e7"]]), Xl = { class: "item-navigator" }, Ql = { class: "nav-item-info" }, Zl = ["title"], ei = { class: "nav-controls" }, ti = { class: "nav-arrows" }, oi = ["disabled"], si = ["disabled"], ni = { class: "nav-position" }, ai = /* @__PURE__ */ K({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (r, p) => (o(), s("div", Xl, [
      e("div", Ql, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Zl)
      ]),
      e("div", ei, [
        e("div", ti, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (v) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, oi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (v) => n("next")),
            title: "Next item"
          }, " → ", 8, si)
        ]),
        e("span", ni, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), co = /* @__PURE__ */ J(ai, [["__scopeId", "data-v-74af7920"]]), li = ["type", "value", "placeholder", "disabled"], ii = {
  key: 0,
  class: "base-input-error"
}, ri = /* @__PURE__ */ K({
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
      class: se(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: se(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = et((r) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = et((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, li),
      t.error ? (o(), s("span", ii, l(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ J(ri, [["__scopeId", "data-v-9ba02cdc"]]), di = { class: "node-resolution-step" }, ci = {
  key: 0,
  class: "auto-resolved-section"
}, ui = { class: "section-header" }, mi = { class: "stat-badge" }, vi = { class: "resolved-packages-list" }, fi = { class: "package-info" }, gi = { class: "package-id" }, pi = { class: "node-count" }, hi = { class: "package-actions" }, yi = {
  key: 0,
  class: "status-badge install"
}, wi = {
  key: 1,
  class: "status-badge skip"
}, ki = ["onClick"], bi = {
  key: 1,
  class: "section-divider"
}, _i = { class: "step-header" }, $i = { class: "stat-badge" }, Ci = {
  key: 1,
  class: "step-body"
}, xi = {
  key: 3,
  class: "empty-state"
}, Si = { class: "node-search-modal" }, Ii = { class: "node-modal-body" }, Ei = {
  key: 0,
  class: "node-search-results"
}, Mi = ["onClick"], zi = { class: "node-result-header" }, Li = { class: "node-result-package-id" }, Ti = {
  key: 0,
  class: "node-result-description"
}, Ri = {
  key: 1,
  class: "node-no-results"
}, Di = {
  key: 2,
  class: "node-searching"
}, Ni = { class: "node-manual-entry-modal" }, Oi = { class: "node-modal-body" }, Ui = { class: "node-modal-actions" }, Pi = /* @__PURE__ */ K({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = x(0), v = x(!1), h = x(!1), u = x(""), a = x(""), m = x([]), C = x(!1), f = B(() => n.nodes[p.value]), k = B(() => n.nodes.filter((ae) => n.nodeChoices.has(ae.node_type)).length), $ = B(() => n.autoResolvedPackages.filter((ae) => !n.skippedPackages.has(ae.package_id)).length);
    function R(ae) {
      return n.skippedPackages.has(ae);
    }
    function b(ae) {
      r("package-skip", ae);
    }
    const w = B(() => {
      var X;
      if (!f.value) return "not-found";
      const ae = n.nodeChoices.get(f.value.node_type);
      if (ae)
        switch (ae.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (X = f.value.options) != null && X.length ? "ambiguous" : "not-found";
    }), F = B(() => {
      var X;
      if (!f.value) return;
      const ae = n.nodeChoices.get(f.value.node_type);
      if (ae)
        switch (ae.action) {
          case "install":
            return ae.package_id ? `→ ${ae.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (X = f.value.options) != null && X.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function U(ae) {
      ae >= 0 && ae < n.nodes.length && (p.value = ae);
    }
    function L() {
      f.value && r("mark-optional", f.value.node_type);
    }
    function D() {
      f.value && r("skip", f.value.node_type);
    }
    function V(ae) {
      f.value && r("option-selected", f.value.node_type, ae);
    }
    function P() {
      f.value && r("clear-choice", f.value.node_type);
    }
    function N() {
      f.value && (u.value = f.value.node_type, v.value = !0);
    }
    function z() {
      a.value = "", h.value = !0;
    }
    function S() {
      v.value = !1, u.value = "", m.value = [];
    }
    function M() {
      h.value = !1, a.value = "";
    }
    function oe() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function q(ae) {
      f.value && (r("manual-entry", f.value.node_type, ae.package_id), S());
    }
    function te() {
      !f.value || !a.value.trim() || (r("manual-entry", f.value.node_type, a.value.trim()), M());
    }
    return (ae, X) => {
      var Y, O;
      return o(), s("div", di, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", ci, [
          e("div", ui, [
            X[4] || (X[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", mi, l($.value) + "/" + l(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", vi, [
            (o(!0), s(W, null, ee(t.autoResolvedPackages, (_) => (o(), s("div", {
              key: _.package_id,
              class: "resolved-package-item"
            }, [
              e("div", fi, [
                e("code", gi, l(_.package_id), 1),
                e("span", pi, l(_.node_types_count) + " node type" + l(_.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", hi, [
                R(_.package_id) ? (o(), s("span", wi, " SKIPPED ")) : (o(), s("span", yi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ne) => b(_.package_id)
                }, l(R(_.package_id) ? "Include" : "Skip"), 9, ki)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", bi)) : d("", !0),
        t.nodes.length > 0 ? (o(), s(W, { key: 2 }, [
          e("div", _i, [
            X[5] || (X[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", $i, l(k.value) + "/" + l(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (o(), I(co, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: X[0] || (X[0] = (_) => U(p.value - 1)),
            onNext: X[1] || (X[1] = (_) => U(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          f.value ? (o(), s("div", Ci, [
            g(Yl, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((Y = f.value.options) != null && Y.length),
              options: f.value.options,
              choice: (O = t.nodeChoices) == null ? void 0 : O.get(f.value.node_type),
              status: w.value,
              "status-label": F.value,
              onMarkOptional: L,
              onSkip: D,
              onManualEntry: z,
              onSearch: N,
              onOptionSelected: V,
              onClearChoice: P
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", xi, [...X[6] || (X[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (o(), I(ze, { to: "body" }, [
          v.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(S, ["self"])
          }, [
            e("div", Si, [
              e("div", { class: "node-modal-header" }, [
                X[7] || (X[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", Ii, [
                g(Fe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": X[2] || (X[2] = (_) => u.value = _),
                  placeholder: "Search by node type, package name...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (o(), s("div", Ei, [
                  (o(!0), s(W, null, ee(m.value, (_) => (o(), s("div", {
                    key: _.package_id,
                    class: "node-search-result-item",
                    onClick: (ne) => q(_)
                  }, [
                    e("div", zi, [
                      e("code", Li, l(_.package_id), 1),
                      _.match_confidence ? (o(), I(Kt, {
                        key: 0,
                        confidence: _.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : d("", !0)
                    ]),
                    _.description ? (o(), s("div", Ti, l(_.description), 1)) : d("", !0)
                  ], 8, Mi))), 128))
                ])) : u.value && !C.value ? (o(), s("div", Ri, ' No packages found matching "' + l(u.value) + '" ', 1)) : d("", !0),
                C.value ? (o(), s("div", Di, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), I(ze, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(M, ["self"])
          }, [
            e("div", Ni, [
              e("div", { class: "node-modal-header" }, [
                X[8] || (X[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", Oi, [
                g(Fe, {
                  modelValue: a.value,
                  "onUpdate:modelValue": X[3] || (X[3] = (_) => a.value = _),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Ui, [
                  g(ie, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: i(() => [...X[9] || (X[9] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(ie, {
                    variant: "primary",
                    disabled: !a.value.trim(),
                    onClick: te
                  }, {
                    default: i(() => [...X[10] || (X[10] = [
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
}), Bi = /* @__PURE__ */ J(Pi, [["__scopeId", "data-v-6474069a"]]), Fi = { class: "node-info" }, Ai = { class: "node-info-text" }, Vi = { class: "item-body" }, Wi = {
  key: 0,
  class: "resolved-state"
}, Gi = {
  key: 1,
  class: "multiple-options"
}, ji = { class: "options-list" }, Hi = ["onClick"], qi = ["name", "value", "checked", "onChange"], Ki = { class: "option-content" }, Ji = { class: "option-header" }, Yi = { class: "option-filename" }, Xi = { class: "option-meta" }, Qi = { class: "option-size" }, Zi = { class: "option-category" }, er = { class: "option-path" }, tr = { class: "action-buttons" }, or = {
  key: 2,
  class: "unresolved"
}, sr = { class: "action-buttons" }, nr = /* @__PURE__ */ K({
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
    const n = t, r = c, p = B(() => !!n.choice);
    B(() => {
      var a;
      return (a = n.choice) == null ? void 0 : a.action;
    }), B(() => {
      var a, m;
      return ((m = (a = n.choice) == null ? void 0 : a.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const v = B(() => {
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
    function u(a) {
      if (!a) return "Unknown";
      const m = a / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(a / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (a, m) => (o(), s("div", {
      class: se(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Fi, [
        e("span", Ai, [
          m[7] || (m[7] = y("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", v.value])
        }, l(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Vi, [
        p.value ? (o(), s("div", Wi, [
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (C) => r("clear-choice"))
          }, {
            default: i(() => [...m[8] || (m[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Gi, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", ji, [
            (o(!0), s(W, null, ee(t.options, (C, f) => (o(), s("label", {
              key: C.model.hash,
              class: se(["option-card", { selected: t.selectedOptionIndex === f }]),
              onClick: (k) => h(f)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: f,
                checked: t.selectedOptionIndex === f,
                onChange: (k) => h(f)
              }, null, 40, qi),
              e("div", Ki, [
                e("div", Ji, [
                  e("span", Yi, l(C.model.filename), 1),
                  g(Kt, {
                    confidence: C.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Xi, [
                  e("span", Qi, l(u(C.model.size)), 1),
                  e("span", Zi, l(C.model.category), 1)
                ]),
                e("div", er, l(C.model.relative_path), 1)
              ])
            ], 10, Hi))), 128))
          ]),
          e("div", tr, [
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (C) => r("search"))
            }, {
              default: i(() => [...m[9] || (m[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (C) => r("download-url"))
            }, {
              default: i(() => [...m[10] || (m[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (C) => r("mark-optional"))
            }, {
              default: i(() => [...m[11] || (m[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", or, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", sr, [
            g(ie, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (C) => r("search"))
            }, {
              default: i(() => [...m[13] || (m[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (C) => r("download-url"))
            }, {
              default: i(() => [...m[14] || (m[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (C) => r("mark-optional"))
            }, {
              default: i(() => [...m[15] || (m[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ar = /* @__PURE__ */ J(nr, [["__scopeId", "data-v-8a82fefa"]]), lr = { class: "model-resolution-step" }, ir = { class: "step-header" }, rr = { class: "step-info" }, dr = { class: "step-title" }, cr = { class: "step-description" }, ur = { class: "stat-badge" }, mr = {
  key: 1,
  class: "step-body"
}, vr = {
  key: 2,
  class: "empty-state"
}, fr = { class: "model-search-modal" }, gr = { class: "model-modal-body" }, pr = {
  key: 0,
  class: "model-search-results"
}, hr = ["onClick"], yr = { class: "model-result-header" }, wr = { class: "model-result-filename" }, kr = { class: "model-result-meta" }, br = { class: "model-result-category" }, _r = { class: "model-result-size" }, $r = {
  key: 0,
  class: "model-result-path"
}, Cr = {
  key: 1,
  class: "model-no-results"
}, xr = {
  key: 2,
  class: "model-searching"
}, Sr = { class: "model-download-url-modal" }, Ir = { class: "model-modal-body" }, Er = { class: "model-input-group" }, Mr = { class: "model-input-group" }, zr = { class: "model-modal-actions" }, Lr = /* @__PURE__ */ K({
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
    function r(O) {
      var _;
      return O && ((_ = n[O]) == null ? void 0 : _[0]) || null;
    }
    const p = t, v = c, h = x(0), u = x(!1), a = x(!1), m = x(""), C = x(""), f = x(""), k = x([]), $ = x(!1), R = B(() => p.models[h.value]), b = B(() => p.models.some((O) => O.is_download_intent)), w = B(() => p.models.filter(
      (O) => p.modelChoices.has(O.filename) || O.is_download_intent
    ).length), F = B(() => {
      var _;
      if (!R.value) return "";
      const O = r((_ = R.value.reference) == null ? void 0 : _.node_type);
      return O ? `${O}/${R.value.filename}` : "";
    }), U = B(() => {
      var _;
      if (!R.value) return "not-found";
      const O = p.modelChoices.get(R.value.filename);
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
      return R.value.is_download_intent ? "download" : (_ = R.value.options) != null && _.length ? "ambiguous" : "not-found";
    }), L = B(() => {
      var _, ne;
      if (!R.value) return;
      const O = p.modelChoices.get(R.value.filename);
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
      return R.value.is_download_intent ? "Pending Download" : (ne = R.value.options) != null && ne.length ? `${R.value.options.length} matches` : "Not Found";
    });
    function D(O) {
      O >= 0 && O < p.models.length && (h.value = O);
    }
    function V() {
      R.value && v("mark-optional", R.value.filename);
    }
    function P() {
      R.value && v("skip", R.value.filename);
    }
    function N(O) {
      R.value && v("option-selected", R.value.filename, O);
    }
    function z() {
      R.value && v("clear-choice", R.value.filename);
    }
    function S() {
      R.value && (m.value = R.value.filename, u.value = !0);
    }
    function M() {
      R.value && (C.value = R.value.download_source || "", f.value = R.value.target_path || F.value, a.value = !0);
    }
    function oe() {
      u.value = !1, m.value = "", k.value = [];
    }
    function q() {
      a.value = !1, C.value = "", f.value = "";
    }
    function te() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function ae(O) {
      R.value && oe();
    }
    function X() {
      !R.value || !C.value.trim() || (v("download-url", R.value.filename, C.value.trim(), f.value.trim() || void 0), q());
    }
    function Y(O) {
      if (!O) return "Unknown";
      const _ = O / (1024 * 1024 * 1024);
      return _ >= 1 ? `${_.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, _) => {
      var ne, Q, Se;
      return o(), s("div", lr, [
        e("div", ir, [
          e("div", rr, [
            e("h3", dr, l(b.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", cr, l(b.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", ur, l(w.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        R.value ? (o(), I(co, {
          key: 0,
          "item-name": R.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: _[0] || (_[0] = (ye) => D(h.value - 1)),
          onNext: _[1] || (_[1] = (ye) => D(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        R.value ? (o(), s("div", mr, [
          g(ar, {
            filename: R.value.filename,
            "node-type": ((ne = R.value.reference) == null ? void 0 : ne.node_type) || "Unknown",
            "has-multiple-options": !!((Q = R.value.options) != null && Q.length),
            options: R.value.options,
            choice: (Se = t.modelChoices) == null ? void 0 : Se.get(R.value.filename),
            status: U.value,
            "status-label": L.value,
            onMarkOptional: V,
            onSkip: P,
            onDownloadUrl: M,
            onSearch: S,
            onOptionSelected: N,
            onClearChoice: z
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", vr, [..._[5] || (_[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), I(ze, { to: "body" }, [
          u.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(oe, ["self"])
          }, [
            e("div", fr, [
              e("div", { class: "model-modal-header" }, [
                _[6] || (_[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: oe
                }, "✕")
              ]),
              e("div", gr, [
                g(Fe, {
                  modelValue: m.value,
                  "onUpdate:modelValue": _[2] || (_[2] = (ye) => m.value = ye),
                  placeholder: "Search by filename, category...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (o(), s("div", pr, [
                  (o(!0), s(W, null, ee(k.value, (ye) => (o(), s("div", {
                    key: ye.hash,
                    class: "model-search-result-item",
                    onClick: (ge) => ae()
                  }, [
                    e("div", yr, [
                      e("code", wr, l(ye.filename), 1)
                    ]),
                    e("div", kr, [
                      e("span", br, l(ye.category), 1),
                      e("span", _r, l(Y(ye.size)), 1)
                    ]),
                    ye.relative_path ? (o(), s("div", $r, l(ye.relative_path), 1)) : d("", !0)
                  ], 8, hr))), 128))
                ])) : m.value && !$.value ? (o(), s("div", Cr, ' No models found matching "' + l(m.value) + '" ', 1)) : d("", !0),
                $.value ? (o(), s("div", xr, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), I(ze, { to: "body" }, [
          a.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(q, ["self"])
          }, [
            e("div", Sr, [
              e("div", { class: "model-modal-header" }, [
                _[7] || (_[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: q
                }, "✕")
              ]),
              e("div", Ir, [
                e("div", Er, [
                  _[8] || (_[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(Fe, {
                    modelValue: C.value,
                    "onUpdate:modelValue": _[3] || (_[3] = (ye) => C.value = ye),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Mr, [
                  _[9] || (_[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(Fe, {
                    modelValue: f.value,
                    "onUpdate:modelValue": _[4] || (_[4] = (ye) => f.value = ye),
                    placeholder: F.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", zr, [
                  g(ie, {
                    variant: "secondary",
                    onClick: q
                  }, {
                    default: i(() => [..._[10] || (_[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(ie, {
                    variant: "primary",
                    disabled: !C.value.trim() || !f.value.trim(),
                    onClick: X
                  }, {
                    default: i(() => [..._[11] || (_[11] = [
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
}), Tr = /* @__PURE__ */ J(Lr, [["__scopeId", "data-v-c6acbada"]]), Rr = { class: "applying-step" }, Dr = {
  key: 0,
  class: "phase-content"
}, Nr = {
  key: 1,
  class: "phase-content"
}, Or = { class: "phase-description" }, Ur = { class: "overall-progress" }, Pr = { class: "progress-bar" }, Br = { class: "progress-label" }, Fr = { class: "install-list" }, Ar = { class: "install-icon" }, Vr = { key: 0 }, Wr = {
  key: 1,
  class: "spinner"
}, Gr = { key: 2 }, jr = { key: 3 }, Hr = {
  key: 0,
  class: "install-error"
}, qr = {
  key: 2,
  class: "phase-content"
}, Kr = { class: "phase-header" }, Jr = { class: "phase-title" }, Yr = { class: "completion-summary" }, Xr = {
  key: 0,
  class: "summary-item success"
}, Qr = { class: "summary-text" }, Zr = {
  key: 1,
  class: "summary-item error"
}, ed = { class: "summary-text" }, td = {
  key: 2,
  class: "failed-list"
}, od = { class: "failed-node-id" }, sd = { class: "failed-error" }, nd = {
  key: 4,
  class: "summary-item success"
}, ad = {
  key: 5,
  class: "restart-prompt"
}, ld = {
  key: 3,
  class: "phase-content error"
}, id = { class: "error-message" }, rd = /* @__PURE__ */ K({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = B(() => {
      var m, C;
      const u = ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || c.progress.nodesToInstall.length;
      if (!u) return 0;
      const a = ((C = c.progress.nodeInstallProgress) == null ? void 0 : C.completedNodes.length) ?? 0;
      return Math.round(a / u * 100);
    }), r = B(() => {
      var u;
      return ((u = c.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((a) => !a.success)) || [];
    }), p = B(() => r.value.length > 0);
    function v(u, a) {
      var C, f;
      const m = (C = c.progress.nodeInstallProgress) == null ? void 0 : C.completedNodes.find((k) => k.node_id === u);
      return m ? m.success ? "complete" : "failed" : ((f = c.progress.nodeInstallProgress) == null ? void 0 : f.currentIndex) === a ? "installing" : "pending";
    }
    function h(u) {
      var a, m;
      return (m = (a = c.progress.nodeInstallProgress) == null ? void 0 : a.completedNodes.find((C) => C.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, a) => {
      var m, C, f, k;
      return o(), s("div", Rr, [
        t.progress.phase === "resolving" ? (o(), s("div", Dr, [...a[2] || (a[2] = [
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
          e("p", Or, " Installing " + l((((m = t.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + l(((C = t.progress.nodeInstallProgress) == null ? void 0 : C.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Ur, [
            e("div", Pr, [
              e("div", {
                class: "progress-fill",
                style: Je({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Br, l(((f = t.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.length) ?? 0) + " / " + l(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Fr, [
            (o(!0), s(W, null, ee(t.progress.nodesToInstall, ($, R) => (o(), s("div", {
              key: $,
              class: se(["install-item", v($, R)])
            }, [
              e("span", Ar, [
                v($, R) === "pending" ? (o(), s("span", Vr, "○")) : v($, R) === "installing" ? (o(), s("span", Wr, "◌")) : v($, R) === "complete" ? (o(), s("span", Gr, "✓")) : v($, R) === "failed" ? (o(), s("span", jr, "✗")) : d("", !0)
              ]),
              e("code", null, l($), 1),
              h($) ? (o(), s("span", Hr, l(h($)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", qr, [
          e("div", Kr, [
            e("span", {
              class: se(["phase-icon", p.value ? "warning" : "success"])
            }, l(p.value ? "⚠" : "✓"), 3),
            e("h3", Jr, l(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Yr, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", Xr, [
              a[4] || (a[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Qr, l(t.progress.nodesInstalled.length) + " node package" + l(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            r.value.length > 0 ? (o(), s("div", Zr, [
              a[5] || (a[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", ed, l(r.value.length) + " package" + l(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            r.value.length > 0 ? (o(), s("div", td, [
              (o(!0), s(W, null, ee(r.value, ($) => (o(), s("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", od, l($.node_id), 1),
                e("span", sd, l($.error), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: a[0] || (a[0] = ($) => u.$emit("retry-failed"))
            }, " Retry Failed (" + l(r.value.length) + ") ", 1)) : d("", !0),
            p.value ? d("", !0) : (o(), s("div", nd, [...a[6] || (a[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            a[8] || (a[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", ad, [
              a[7] || (a[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: a[1] || (a[1] = ($) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (o(), s("div", ld, [
          a[9] || (a[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", id, l(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), dd = /* @__PURE__ */ J(rd, [["__scopeId", "data-v-5efaae58"]]), cd = {
  key: 0,
  class: "loading-state"
}, ud = {
  key: 1,
  class: "wizard-content"
}, md = {
  key: 0,
  class: "step-content"
}, vd = { class: "analysis-summary" }, fd = { class: "analysis-header" }, gd = { class: "summary-description" }, pd = { class: "stats-grid" }, hd = { class: "stat-card" }, yd = { class: "stat-items" }, wd = {
  key: 0,
  class: "stat-item success"
}, kd = { class: "stat-count" }, bd = {
  key: 1,
  class: "stat-item info"
}, _d = { class: "stat-count" }, $d = {
  key: 2,
  class: "stat-item warning"
}, Cd = { class: "stat-count" }, xd = {
  key: 3,
  class: "stat-item error"
}, Sd = { class: "stat-count" }, Id = { class: "stat-card" }, Ed = { class: "stat-items" }, Md = { class: "stat-item success" }, zd = { class: "stat-count" }, Ld = {
  key: 0,
  class: "stat-item info"
}, Td = { class: "stat-count" }, Rd = {
  key: 1,
  class: "stat-item warning"
}, Dd = { class: "stat-count" }, Nd = {
  key: 2,
  class: "stat-item warning"
}, Od = { class: "stat-count" }, Ud = {
  key: 3,
  class: "stat-item error"
}, Pd = { class: "stat-count" }, Bd = {
  key: 0,
  class: "status-message warning"
}, Fd = { class: "status-text" }, Ad = {
  key: 1,
  class: "status-message info"
}, Vd = { class: "status-text" }, Wd = {
  key: 2,
  class: "status-message info"
}, Gd = { class: "status-text" }, jd = {
  key: 3,
  class: "status-message warning"
}, Hd = { class: "status-text" }, qd = {
  key: 4,
  class: "status-message success"
}, Kd = {
  key: 5,
  class: "category-mismatch-section"
}, Jd = { class: "mismatch-list" }, Yd = { class: "mismatch-path" }, Xd = { class: "mismatch-target" }, Qd = {
  key: 3,
  class: "step-content"
}, Zd = { class: "review-summary" }, ec = { class: "review-stats" }, tc = { class: "review-stat" }, oc = { class: "stat-value" }, sc = { class: "review-stat" }, nc = { class: "stat-value" }, ac = { class: "review-stat" }, lc = { class: "stat-value" }, ic = { class: "review-stat" }, rc = { class: "stat-value" }, dc = {
  key: 0,
  class: "review-section"
}, cc = { class: "section-title" }, uc = { class: "review-items" }, mc = { class: "item-name" }, vc = { class: "item-choice" }, fc = {
  key: 0,
  class: "choice-badge install"
}, gc = {
  key: 1,
  class: "choice-badge skip"
}, pc = {
  key: 1,
  class: "review-section"
}, hc = { class: "section-title" }, yc = { class: "review-items" }, wc = { class: "item-name" }, kc = { class: "item-choice" }, bc = {
  key: 0,
  class: "choice-badge install"
}, _c = {
  key: 1,
  class: "choice-badge optional"
}, $c = {
  key: 2,
  class: "choice-badge skip"
}, Cc = {
  key: 1,
  class: "choice-badge pending"
}, xc = {
  key: 2,
  class: "review-section"
}, Sc = { class: "section-title" }, Ic = { class: "review-items" }, Ec = { class: "item-name" }, Mc = { class: "item-choice" }, zc = {
  key: 0,
  class: "choice-badge install"
}, Lc = {
  key: 1,
  class: "choice-badge download"
}, Tc = {
  key: 2,
  class: "choice-badge optional"
}, Rc = {
  key: 3,
  class: "choice-badge skip"
}, Dc = {
  key: 4,
  class: "choice-badge skip"
}, Nc = {
  key: 1,
  class: "choice-badge download"
}, Oc = {
  key: 2,
  class: "choice-badge pending"
}, Uc = {
  key: 3,
  class: "no-choices"
}, Pc = /* @__PURE__ */ K({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, r = c, { analyzeWorkflow: p, applyResolution: v, installNodes: h, queueModelDownloads: u, progress: a, resetProgress: m } = kl(), { loadPendingDownloads: C } = Et(), { openFileLocation: f } = Ie(), k = x(null), $ = x(!1), R = x(!1), b = x(null), w = x("analysis"), F = x([]), U = x(/* @__PURE__ */ new Map()), L = x(/* @__PURE__ */ new Map()), D = x(/* @__PURE__ */ new Set()), V = B(() => {
      const G = [
        { id: "analysis", label: "Analysis" }
      ];
      return (N.value || M.value) && G.push({ id: "nodes", label: "Nodes" }), (z.value || S.value) && G.push({ id: "models", label: "Models" }), G.push({ id: "review", label: "Review" }), w.value === "applying" && G.push({ id: "applying", label: "Applying" }), G;
    }), P = B(() => k.value ? k.value.stats.needs_user_input : !1), N = B(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), z = B(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), S = B(() => k.value ? k.value.stats.download_intents > 0 : !1), M = B(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), oe = B(() => k.value ? k.value.nodes.resolved.length : 0), q = B(() => k.value ? k.value.models.resolved.filter((G) => G.has_category_mismatch) : []), te = B(() => q.value.length > 0), ae = B(() => {
      if (!k.value) return [];
      const G = k.value.nodes.resolved.filter((j) => !j.is_installed), T = /* @__PURE__ */ new Set();
      return G.filter((j) => T.has(j.package.package_id) ? !1 : (T.add(j.package.package_id), !0));
    }), X = B(() => {
      if (!k.value) return [];
      const G = k.value.nodes.resolved.filter((j) => !j.is_installed), T = /* @__PURE__ */ new Map();
      for (const j of G) {
        const ve = T.get(j.package.package_id);
        ve ? ve.node_types_count++ : T.set(j.package.package_id, {
          package_id: j.package.package_id,
          title: j.package.title,
          node_types_count: 1
        });
      }
      return Array.from(T.values());
    }), Y = B(() => ae.value.filter((G) => !D.value.has(G.package.package_id))), O = B(() => k.value ? k.value.models.resolved.filter((G) => G.match_type === "download_intent").map((G) => ({
      filename: G.reference.widget_value,
      reference: G.reference,
      is_download_intent: !0,
      resolved_model: G.model,
      download_source: G.download_source,
      target_path: G.target_path
    })) : []), _ = B(() => {
      if (!k.value) return [];
      const G = k.value.nodes.unresolved.map((j) => ({
        node_type: j.reference.node_type,
        reason: j.reason,
        is_unresolved: !0,
        options: void 0
      })), T = k.value.nodes.ambiguous.map((j) => ({
        node_type: j.reference.node_type,
        has_multiple_options: !0,
        options: j.options.map((ve) => ({
          package_id: ve.package.package_id,
          title: ve.package.title,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          is_installed: ve.is_installed
        }))
      }));
      return [...G, ...T];
    }), ne = B(() => {
      if (!k.value) return [];
      const G = k.value.models.unresolved.map((j) => ({
        filename: j.reference.widget_value,
        reference: j.reference,
        reason: j.reason,
        is_unresolved: !0,
        options: void 0
      })), T = k.value.models.ambiguous.map((j) => ({
        filename: j.reference.widget_value,
        reference: j.reference,
        has_multiple_options: !0,
        options: j.options.map((ve) => ({
          model: ve.model,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          has_download_source: ve.has_download_source
        }))
      }));
      return [...G, ...T];
    }), Q = B(() => {
      const G = ne.value, T = O.value.map((j) => ({
        filename: j.filename,
        reference: j.reference,
        is_download_intent: !0,
        resolved_model: j.resolved_model,
        download_source: j.download_source,
        target_path: j.target_path,
        options: void 0
      }));
      return [...G, ...T];
    }), Se = B(() => {
      let G = Y.value.length;
      for (const T of U.value.values())
        T.action === "install" && G++;
      for (const T of L.value.values())
        T.action === "select" && G++;
      return G;
    }), ye = B(() => {
      let G = 0;
      for (const T of L.value.values())
        T.action === "download" && G++;
      return G;
    }), ge = B(() => {
      let G = 0;
      for (const T of U.value.values())
        T.action === "optional" && G++;
      for (const T of L.value.values())
        T.action === "optional" && G++;
      return G;
    }), lt = B(() => {
      let G = D.value.size;
      for (const T of U.value.values())
        T.action === "skip" && G++;
      for (const T of L.value.values())
        T.action === "skip" && G++;
      for (const T of _.value)
        U.value.has(T.node_type) || G++;
      for (const T of ne.value)
        L.value.has(T.filename) || G++;
      return G;
    }), be = B(() => {
      const G = {};
      if (G.analysis = { resolved: 1, total: 1 }, N.value) {
        const T = _.value.length, j = _.value.filter(
          (ve) => U.value.has(ve.node_type)
        ).length;
        G.nodes = { resolved: j, total: T };
      }
      if (z.value || S.value) {
        const T = Q.value.length, j = Q.value.filter(
          (ve) => L.value.has(ve.filename) || ve.is_download_intent
        ).length;
        G.models = { resolved: j, total: T };
      }
      if (G.review = { resolved: 1, total: 1 }, w.value === "applying") {
        const T = a.totalFiles || 1, j = a.completedFiles.length;
        G.applying = { resolved: j, total: T };
      }
      return G;
    });
    function ht(G) {
      w.value = G;
    }
    function yt() {
      const G = V.value.findIndex((T) => T.id === w.value);
      G > 0 && (w.value = V.value[G - 1].id);
    }
    function it() {
      const G = V.value.findIndex((T) => T.id === w.value);
      G < V.value.length - 1 && (w.value = V.value[G + 1].id);
    }
    async function he() {
      $.value = !0, b.value = null;
      try {
        k.value = await p(n.workflowName);
      } catch (G) {
        b.value = G instanceof Error ? G.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function Ze() {
      F.value.includes("analysis") || F.value.push("analysis"), N.value || M.value ? w.value = "nodes" : z.value || S.value ? w.value = "models" : w.value = "review";
    }
    function He(G) {
      U.value.set(G, { action: "optional" });
    }
    function Ve(G) {
      U.value.set(G, { action: "skip" });
    }
    function wt(G, T) {
      var ve;
      const j = _.value.find((_e) => _e.node_type === G);
      (ve = j == null ? void 0 : j.options) != null && ve[T] && U.value.set(G, {
        action: "install",
        package_id: j.options[T].package_id
      });
    }
    function ce(G, T) {
      U.value.set(G, {
        action: "install",
        package_id: T
      });
    }
    function Ue(G) {
      U.value.delete(G);
    }
    function H(G) {
      D.value.has(G) ? D.value.delete(G) : D.value.add(G);
    }
    function de(G) {
      L.value.set(G, { action: "optional" });
    }
    function me(G) {
      L.value.set(G, { action: "skip" });
    }
    function Ee(G, T) {
      var ve;
      const j = ne.value.find((_e) => _e.filename === G);
      (ve = j == null ? void 0 : j.options) != null && ve[T] && L.value.set(G, {
        action: "select",
        selected_model: j.options[T].model
      });
    }
    function ot(G, T, j) {
      L.value.set(G, {
        action: "download",
        url: T,
        target_path: j
      });
    }
    function Rt(G) {
      L.value.delete(G);
    }
    async function Dt(G) {
      try {
        await f(G);
      } catch (T) {
        b.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function Nt() {
      var G;
      R.value = !0, b.value = null, m(), a.phase = "resolving", w.value = "applying";
      try {
        const T = await v(n.workflowName, U.value, L.value, D.value);
        T.models_to_download && T.models_to_download.length > 0 && u(n.workflowName, T.models_to_download);
        const j = [
          ...T.nodes_to_install || [],
          ...Y.value.map((_e) => _e.package.package_id)
        ];
        a.nodesToInstall = [...new Set(j)], a.nodesToInstall.length > 0 && await h(n.workflowName), a.phase = "complete", await C();
        const ve = a.installError || ((G = a.nodeInstallProgress) == null ? void 0 : G.completedNodes.some((_e) => !_e.success));
        !a.needsRestart && !ve && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (T) {
        b.value = T instanceof Error ? T.message : "Failed to apply resolution", a.error = b.value, a.phase = "error";
      } finally {
        R.value = !1;
      }
    }
    function Ot() {
      r("refresh"), r("restart"), r("close");
    }
    async function rt() {
      var T;
      const G = ((T = a.nodeInstallProgress) == null ? void 0 : T.completedNodes.filter((j) => !j.success).map((j) => j.node_id)) || [];
      if (G.length !== 0) {
        a.phase = "installing", a.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: G.length
        }, a.nodesToInstall = G, a.nodesInstalled = [], a.installError = void 0;
        try {
          await h(n.workflowName), a.phase = "complete";
        } catch (j) {
          a.error = j instanceof Error ? j.message : "Retry failed", a.phase = "error";
        }
      }
    }
    return xe(he), (G, T) => (o(), I(tt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: $.value,
      error: b.value || void 0,
      "fixed-height": !0,
      onClose: T[1] || (T[1] = (j) => r("close"))
    }, {
      body: i(() => [
        $.value && !k.value ? (o(), s("div", cd, [...T[2] || (T[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (o(), s("div", ud, [
          g(zl, {
            steps: V.value,
            "current-step": w.value,
            "completed-steps": F.value,
            "step-stats": be.value,
            onStepChange: ht
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          w.value === "analysis" ? (o(), s("div", md, [
            e("div", vd, [
              e("div", fd, [
                T[3] || (T[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", gd, " Found " + l(k.value.stats.total_nodes) + " nodes and " + l(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", pd, [
                e("div", hd, [
                  T[12] || (T[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", yd, [
                    oe.value > 0 ? (o(), s("div", wd, [
                      T[4] || (T[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", kd, l(oe.value), 1),
                      T[5] || (T[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (o(), s("div", bd, [
                      T[6] || (T[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", _d, l(k.value.stats.packages_needing_installation), 1),
                      T[7] || (T[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (o(), s("div", $d, [
                      T[8] || (T[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Cd, l(k.value.nodes.ambiguous.length), 1),
                      T[9] || (T[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    k.value.nodes.unresolved.length > 0 ? (o(), s("div", xd, [
                      T[10] || (T[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Sd, l(k.value.nodes.unresolved.length), 1),
                      T[11] || (T[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Id, [
                  T[23] || (T[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Ed, [
                    e("div", Md, [
                      T[13] || (T[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zd, l(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      T[14] || (T[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (o(), s("div", Ld, [
                      T[15] || (T[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Td, l(k.value.stats.download_intents), 1),
                      T[16] || (T[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    te.value ? (o(), s("div", Rd, [
                      T[17] || (T[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Dd, l(q.value.length), 1),
                      T[18] || (T[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    k.value.models.ambiguous.length > 0 ? (o(), s("div", Nd, [
                      T[19] || (T[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Od, l(k.value.models.ambiguous.length), 1),
                      T[20] || (T[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    k.value.models.unresolved.length > 0 ? (o(), s("div", Ud, [
                      T[21] || (T[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Pd, l(k.value.models.unresolved.length), 1),
                      T[22] || (T[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              P.value ? (o(), s("div", Bd, [
                T[24] || (T[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Fd, l(_.value.length + ne.value.length) + " items need your input", 1)
              ])) : M.value ? (o(), s("div", Ad, [
                T[25] || (T[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Vd, l(k.value.stats.packages_needing_installation) + " package" + l(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + l(k.value.stats.nodes_needing_installation) + " node type" + l(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + l(S.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : S.value ? (o(), s("div", Wd, [
                T[26] || (T[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gd, l(k.value.stats.download_intents) + " model" + l(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : te.value ? (o(), s("div", jd, [
                T[27] || (T[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Hd, l(q.value.length) + " model" + l(q.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (o(), s("div", qd, [...T[28] || (T[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              te.value ? (o(), s("div", Kd, [
                T[31] || (T[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Jd, [
                  (o(!0), s(W, null, ee(q.value, (j) => {
                    var ve, _e;
                    return o(), s("div", {
                      key: j.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Yd, l(j.actual_category) + "/" + l((ve = j.model) == null ? void 0 : ve.filename), 1),
                      T[30] || (T[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Xd, l((_e = j.expected_categories) == null ? void 0 : _e[0]) + "/", 1),
                      j.file_path ? (o(), I(ie, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Pe) => Dt(j.file_path)
                      }, {
                        default: i(() => [...T[29] || (T[29] = [
                          y(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]);
                  }), 128))
                ])
              ])) : d("", !0)
            ])
          ])) : d("", !0),
          w.value === "nodes" ? (o(), I(Bi, {
            key: 1,
            nodes: _.value,
            "node-choices": U.value,
            "auto-resolved-packages": X.value,
            "skipped-packages": D.value,
            onMarkOptional: He,
            onSkip: Ve,
            onOptionSelected: wt,
            onManualEntry: ce,
            onClearChoice: Ue,
            onPackageSkip: H
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          w.value === "models" ? (o(), I(Tr, {
            key: 2,
            models: Q.value,
            "model-choices": L.value,
            onMarkOptional: de,
            onSkip: me,
            onOptionSelected: Ee,
            onDownloadUrl: ot,
            onClearChoice: Rt
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          w.value === "review" ? (o(), s("div", Qd, [
            e("div", Zd, [
              T[36] || (T[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", ec, [
                e("div", tc, [
                  e("span", oc, l(Se.value), 1),
                  T[32] || (T[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", sc, [
                  e("span", nc, l(ye.value), 1),
                  T[33] || (T[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", ac, [
                  e("span", lc, l(ge.value), 1),
                  T[34] || (T[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", ic, [
                  e("span", rc, l(lt.value), 1),
                  T[35] || (T[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              X.value.length > 0 ? (o(), s("div", dc, [
                e("h4", cc, "Node Packages (" + l(X.value.length) + ")", 1),
                e("div", uc, [
                  (o(!0), s(W, null, ee(X.value, (j) => (o(), s("div", {
                    key: j.package_id,
                    class: "review-item"
                  }, [
                    e("code", mc, l(j.package_id), 1),
                    e("div", vc, [
                      D.value.has(j.package_id) ? (o(), s("span", gc, "Skipped")) : (o(), s("span", fc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              _.value.length > 0 ? (o(), s("div", pc, [
                e("h4", hc, "Node Choices (" + l(_.value.length) + ")", 1),
                e("div", yc, [
                  (o(!0), s(W, null, ee(_.value, (j) => {
                    var ve, _e, Pe, st;
                    return o(), s("div", {
                      key: j.node_type,
                      class: "review-item"
                    }, [
                      e("code", wc, l(j.node_type), 1),
                      e("div", kc, [
                        U.value.has(j.node_type) ? (o(), s(W, { key: 0 }, [
                          ((ve = U.value.get(j.node_type)) == null ? void 0 : ve.action) === "install" ? (o(), s("span", bc, l((_e = U.value.get(j.node_type)) == null ? void 0 : _e.package_id), 1)) : ((Pe = U.value.get(j.node_type)) == null ? void 0 : Pe.action) === "optional" ? (o(), s("span", _c, " Optional ")) : ((st = U.value.get(j.node_type)) == null ? void 0 : st.action) === "skip" ? (o(), s("span", $c, " Skip ")) : d("", !0)
                        ], 64)) : (o(), s("span", Cc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              Q.value.length > 0 ? (o(), s("div", xc, [
                e("h4", Sc, "Models (" + l(Q.value.length) + ")", 1),
                e("div", Ic, [
                  (o(!0), s(W, null, ee(Q.value, (j) => {
                    var ve, _e, Pe, st, We, Mt, dt;
                    return o(), s("div", {
                      key: j.filename,
                      class: "review-item"
                    }, [
                      e("code", Ec, l(j.filename), 1),
                      e("div", Mc, [
                        L.value.has(j.filename) ? (o(), s(W, { key: 0 }, [
                          ((ve = L.value.get(j.filename)) == null ? void 0 : ve.action) === "select" ? (o(), s("span", zc, l((Pe = (_e = L.value.get(j.filename)) == null ? void 0 : _e.selected_model) == null ? void 0 : Pe.filename), 1)) : ((st = L.value.get(j.filename)) == null ? void 0 : st.action) === "download" ? (o(), s("span", Lc, " Download ")) : ((We = L.value.get(j.filename)) == null ? void 0 : We.action) === "optional" ? (o(), s("span", Tc, " Optional ")) : ((Mt = L.value.get(j.filename)) == null ? void 0 : Mt.action) === "skip" ? (o(), s("span", Rc, " Skip ")) : ((dt = L.value.get(j.filename)) == null ? void 0 : dt.action) === "cancel_download" ? (o(), s("span", Dc, " Cancel Download ")) : d("", !0)
                        ], 64)) : j.is_download_intent ? (o(), s("span", Nc, " Pending Download ")) : (o(), s("span", Oc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              ae.value.length === 0 && _.value.length === 0 && Q.value.length === 0 ? (o(), s("div", Uc, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          w.value === "applying" ? (o(), I(dd, {
            key: 4,
            progress: fe(a),
            onRestart: Ot,
            onRetryFailed: rt
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        w.value !== "analysis" && w.value !== "applying" ? (o(), I(ie, {
          key: 0,
          variant: "secondary",
          disabled: R.value,
          onClick: yt
        }, {
          default: i(() => [...T[37] || (T[37] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        T[41] || (T[41] = e("div", { class: "footer-spacer" }, null, -1)),
        w.value !== "applying" || fe(a).phase === "complete" || fe(a).phase === "error" ? (o(), I(ie, {
          key: 1,
          variant: "secondary",
          onClick: T[0] || (T[0] = (j) => r("close"))
        }, {
          default: i(() => [
            y(l(fe(a).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        w.value === "analysis" ? (o(), I(ie, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: Ze
        }, {
          default: i(() => [...T[38] || (T[38] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        w.value === "nodes" ? (o(), I(ie, {
          key: 3,
          variant: "primary",
          onClick: it
        }, {
          default: i(() => [
            y(l(z.value || S.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        w.value === "models" ? (o(), I(ie, {
          key: 4,
          variant: "primary",
          onClick: it
        }, {
          default: i(() => [...T[39] || (T[39] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        w.value === "review" ? (o(), I(ie, {
          key: 5,
          variant: "primary",
          disabled: R.value,
          loading: R.value,
          onClick: Nt
        }, {
          default: i(() => [...T[40] || (T[40] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Bc = /* @__PURE__ */ J(Pc, [["__scopeId", "data-v-6276cf1d"]]), Fc = { class: "search-input-wrapper" }, Ac = ["value", "placeholder"], Vc = /* @__PURE__ */ K({
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
    const n = t, r = c, p = x(null);
    let v;
    function h(a) {
      const m = a.target.value;
      n.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        r("update:modelValue", m);
      }, n.debounce)) : r("update:modelValue", m);
    }
    function u() {
      var a;
      r("update:modelValue", ""), r("clear"), (a = p.value) == null || a.focus();
    }
    return xe(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (a, m) => (o(), s("div", Fc, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: et(u, ["escape"])
      }, null, 40, Ac),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Wc = /* @__PURE__ */ J(Vc, [["__scopeId", "data-v-266f857a"]]), Gc = { class: "search-bar" }, jc = /* @__PURE__ */ K({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (o(), s("div", Gc, [
      g(Wc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), gt = /* @__PURE__ */ J(jc, [["__scopeId", "data-v-3d51bbfd"]]), Hc = { class: "section-group" }, qc = {
  key: 0,
  class: "section-content"
}, Kc = /* @__PURE__ */ K({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = x(n.initiallyExpanded);
    function v() {
      n.collapsible && (p.value = !p.value, r("toggle", p.value));
    }
    return (h, u) => (o(), s("section", Hc, [
      g(Oe, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: v
      }, {
        default: i(() => [
          y(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (o(), s("div", qc, [
        ue(h.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Ce = /* @__PURE__ */ J(Kc, [["__scopeId", "data-v-c48e33ed"]]), Jc = { class: "item-header" }, Yc = {
  key: 0,
  class: "item-icon"
}, Xc = { class: "item-info" }, Qc = {
  key: 0,
  class: "item-title"
}, Zc = {
  key: 1,
  class: "item-subtitle"
}, eu = {
  key: 0,
  class: "item-details"
}, tu = {
  key: 1,
  class: "item-actions"
}, ou = /* @__PURE__ */ K({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = B(() => n.status ? `status-${n.status}` : "");
    return (p, v) => (o(), s("div", {
      class: se(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: v[0] || (v[0] = (h) => t.clickable && p.$emit("click"))
    }, [
      e("div", Jc, [
        p.$slots.icon ? (o(), s("span", Yc, [
          ue(p.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Xc, [
          p.$slots.title ? (o(), s("div", Qc, [
            ue(p.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          p.$slots.subtitle ? (o(), s("div", Zc, [
            ue(p.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      p.$slots.details ? (o(), s("div", eu, [
        ue(p.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      p.$slots.actions ? (o(), s("div", tu, [
        ue(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Me = /* @__PURE__ */ J(ou, [["__scopeId", "data-v-cc435e0e"]]), su = { class: "loading-state" }, nu = { class: "loading-message" }, au = /* @__PURE__ */ K({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (o(), s("div", su, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", nu, l(t.message), 1)
    ]));
  }
}), Xe = /* @__PURE__ */ J(au, [["__scopeId", "data-v-ad8436c9"]]), lu = { class: "error-state" }, iu = { class: "error-message" }, ru = /* @__PURE__ */ K({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (o(), s("div", lu, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", iu, l(t.message), 1),
      t.retry ? (o(), I(Z, {
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
}), Qe = /* @__PURE__ */ J(ru, [["__scopeId", "data-v-5397be48"]]), du = /* @__PURE__ */ K({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getWorkflows: p } = Ie();
    io();
    const v = x([]), h = x(!1), u = x(null), a = x(""), m = x(!0), C = x(!1), f = x(!1), k = x(!1), $ = x(null), R = B(
      () => v.value.filter((Y) => Y.status === "broken")
    ), b = B(
      () => v.value.filter((Y) => Y.status === "new")
    ), w = B(
      () => v.value.filter((Y) => Y.status === "modified")
    ), F = B(
      () => v.value.filter((Y) => Y.status === "synced")
    ), U = B(() => {
      if (!a.value.trim()) return v.value;
      const Y = a.value.toLowerCase();
      return v.value.filter((O) => O.name.toLowerCase().includes(Y));
    }), L = B(
      () => R.value.filter(
        (Y) => !a.value.trim() || Y.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), D = B(
      () => b.value.filter(
        (Y) => !a.value.trim() || Y.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), V = B(
      () => w.value.filter(
        (Y) => !a.value.trim() || Y.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), P = B(
      () => F.value.filter(
        (Y) => !a.value.trim() || Y.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), N = B(
      () => C.value ? P.value : P.value.slice(0, 5)
    );
    async function z(Y = !1) {
      h.value = !0, u.value = null;
      try {
        v.value = await p(Y);
      } catch (O) {
        u.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    c({ loadWorkflows: z });
    function S(Y) {
      $.value = Y, f.value = !0;
    }
    function M(Y) {
      $.value = Y, k.value = !0;
    }
    function oe() {
      alert("Bulk resolution not yet implemented");
    }
    function q() {
      r("refresh");
    }
    async function te() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ae(Y) {
      const O = [];
      return Y.missing_nodes > 0 && O.push(`${Y.missing_nodes} missing node${Y.missing_nodes > 1 ? "s" : ""}`), Y.missing_models > 0 && O.push(`${Y.missing_models} missing model${Y.missing_models > 1 ? "s" : ""}`), Y.models_with_category_mismatch && Y.models_with_category_mismatch > 0 && O.push(`${Y.models_with_category_mismatch} model${Y.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), Y.pending_downloads && Y.pending_downloads > 0 && O.push(`${Y.pending_downloads} pending download${Y.pending_downloads > 1 ? "s" : ""}`), O.length > 0 ? O.join(", ") : "Has issues";
    }
    function X(Y) {
      const O = Y.sync_state === "new" ? "New" : Y.sync_state === "modified" ? "Modified" : Y.sync_state === "synced" ? "Synced" : Y.sync_state;
      return Y.has_path_sync_issues && Y.models_needing_path_sync && Y.models_needing_path_sync > 0 ? `${Y.models_needing_path_sync} model path${Y.models_needing_path_sync > 1 ? "s" : ""} need${Y.models_needing_path_sync === 1 ? "s" : ""} sync` : O || "Unknown";
    }
    return xe(z), (Y, O) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(De, { title: "WORKFLOWS" }, {
            actions: i(() => [
              R.value.length > 0 ? (o(), I(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: oe
              }, {
                default: i(() => [...O[8] || (O[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(gt, {
            modelValue: a.value,
            "onUpdate:modelValue": O[0] || (O[0] = (_) => a.value = _),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          h.value ? (o(), I(Xe, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), I(Qe, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            L.value.length ? (o(), I(Ce, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(L.value, (_) => (o(), I(Me, {
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
                    y(l(ae(_)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => M(_.name)
                    }, {
                      default: i(() => [...O[10] || (O[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(_.name)
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
            }, 8, ["count"])) : d("", !0),
            D.value.length ? (o(), I(Ce, {
              key: 1,
              title: "NEW",
              count: D.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(D.value, (_) => (o(), I(Me, {
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
                    y(l(X(_)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(_.name)
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
            }, 8, ["count"])) : d("", !0),
            V.value.length ? (o(), I(Ce, {
              key: 2,
              title: "MODIFIED",
              count: V.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(V.value, (_) => (o(), I(Me, {
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
                    y(l(X(_)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(_.name)
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
            }, 8, ["count"])) : d("", !0),
            P.value.length ? (o(), I(Ce, {
              key: 3,
              title: "SYNCED",
              count: P.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: O[2] || (O[2] = (_) => m.value = _)
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(N.value, (_) => (o(), I(Me, {
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
                    y(l(X(_)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(_.name)
                    }, {
                      default: i(() => [...O[15] || (O[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !C.value && P.value.length > 5 ? (o(), I(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: O[1] || (O[1] = (_) => C.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    y(" View all " + l(P.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            U.value.length ? d("", !0) : (o(), I(Ae, {
              key: 4,
              icon: "📭",
              message: a.value ? `No workflows match '${a.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f.value && $.value ? (o(), I(hl, {
        key: 0,
        "workflow-name": $.value,
        onClose: O[3] || (O[3] = (_) => f.value = !1),
        onResolve: O[4] || (O[4] = (_) => M($.value)),
        onRefresh: O[5] || (O[5] = (_) => r("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      k.value && $.value ? (o(), I(Bc, {
        key: 1,
        "workflow-name": $.value,
        onClose: O[6] || (O[6] = (_) => k.value = !1),
        onInstall: q,
        onRefresh: O[7] || (O[7] = (_) => r("refresh")),
        onRestart: te
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), cu = /* @__PURE__ */ J(du, [["__scopeId", "data-v-591d06d5"]]), uu = /* @__PURE__ */ K({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: se(["summary-bar", t.variant])
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ J(uu, [["__scopeId", "data-v-ccb7816e"]]), mu = {
  key: 0,
  class: "model-details"
}, vu = { class: "detail-section" }, fu = { class: "detail-row" }, gu = { class: "detail-value mono" }, pu = { class: "detail-row" }, hu = { class: "detail-value mono" }, yu = { class: "detail-row" }, wu = { class: "detail-value mono" }, ku = { class: "detail-row" }, bu = { class: "detail-value" }, _u = { class: "detail-row" }, $u = { class: "detail-value" }, Cu = { class: "detail-row" }, xu = { class: "detail-value" }, Su = { class: "detail-section" }, Iu = { class: "section-header" }, Eu = {
  key: 0,
  class: "locations-list"
}, Mu = { class: "location-path mono" }, zu = {
  key: 0,
  class: "location-modified"
}, Lu = ["onClick"], Tu = {
  key: 1,
  class: "empty-state"
}, Ru = { class: "detail-section" }, Du = { class: "section-header" }, Nu = {
  key: 0,
  class: "sources-list"
}, Ou = { class: "source-type" }, Uu = ["href"], Pu = ["disabled", "onClick"], Bu = {
  key: 1,
  class: "empty-state"
}, Fu = { class: "add-source-form" }, Au = ["disabled"], Vu = {
  key: 2,
  class: "source-error"
}, Wu = {
  key: 3,
  class: "source-success"
}, Gu = /* @__PURE__ */ K({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: r, addModelSource: p, removeModelSource: v, openFileLocation: h } = Ie(), u = x(null), a = x(!0), m = x(null), C = x(""), f = x(!1), k = x(null), $ = x(null), R = x(null), b = x(null);
    let w = null;
    function F(z, S = "success", M = 2e3) {
      w && clearTimeout(w), b.value = { message: z, type: S }, w = setTimeout(() => {
        b.value = null;
      }, M);
    }
    function U(z) {
      if (!z) return "Unknown";
      const S = 1024 * 1024 * 1024, M = 1024 * 1024;
      return z >= S ? `${(z / S).toFixed(1)} GB` : z >= M ? `${(z / M).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function L(z) {
      navigator.clipboard.writeText(z), F("Copied to clipboard!");
    }
    async function D(z) {
      try {
        await h(z), F("Opening file location...");
      } catch {
        F("Failed to open location", "error");
      }
    }
    async function V() {
      if (!(!C.value.trim() || !u.value)) {
        f.value = !0, $.value = null, R.value = null;
        try {
          await p(u.value.hash, C.value.trim()), R.value = "Source added successfully!", C.value = "", await N();
        } catch (z) {
          $.value = z instanceof Error ? z.message : "Failed to add source";
        } finally {
          f.value = !1;
        }
      }
    }
    async function P(z) {
      if (u.value) {
        k.value = z, $.value = null, R.value = null;
        try {
          await v(u.value.hash, z), F("Source removed"), await N();
        } catch (S) {
          $.value = S instanceof Error ? S.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function N() {
      a.value = !0, m.value = null;
      try {
        u.value = await r(n.identifier);
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load model details";
      } finally {
        a.value = !1;
      }
    }
    return xe(N), (z, S) => {
      var M;
      return o(), s(W, null, [
        g(tt, {
          title: `Model Details: ${((M = u.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: a.value,
          error: m.value,
          onClose: S[5] || (S[5] = (oe) => z.$emit("close"))
        }, {
          body: i(() => {
            var oe, q, te, ae;
            return [
              u.value ? (o(), s("div", mu, [
                e("section", vu, [
                  e("div", fu, [
                    S[6] || (S[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", gu, l(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[0] || (S[0] = (X) => L(u.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", pu, [
                    S[7] || (S[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", hu, l(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[1] || (S[1] = (X) => L(u.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", yu, [
                    S[8] || (S[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", wu, l(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[2] || (S[2] = (X) => L(u.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", ku, [
                    S[9] || (S[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", bu, l(U(u.value.size)), 1)
                  ]),
                  e("div", _u, [
                    S[10] || (S[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", $u, l(u.value.category), 1)
                  ]),
                  e("div", Cu, [
                    S[11] || (S[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", xu, l(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Su, [
                  e("h4", Iu, "Locations (" + l(((oe = u.value.locations) == null ? void 0 : oe.length) || 0) + ")", 1),
                  (q = u.value.locations) != null && q.length ? (o(), s("div", Eu, [
                    (o(!0), s(W, null, ee(u.value.locations, (X, Y) => (o(), s("div", {
                      key: Y,
                      class: "location-item"
                    }, [
                      e("span", Mu, l(X.path), 1),
                      X.modified ? (o(), s("span", zu, "Modified: " + l(X.modified), 1)) : d("", !0),
                      X.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (O) => D(X.path)
                      }, " Open File Location ", 8, Lu)) : d("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Tu, "No locations found"))
                ]),
                e("section", Ru, [
                  e("h4", Du, "Download Sources (" + l(((te = u.value.sources) == null ? void 0 : te.length) || 0) + ")", 1),
                  (ae = u.value.sources) != null && ae.length ? (o(), s("div", Nu, [
                    (o(!0), s(W, null, ee(u.value.sources, (X, Y) => (o(), s("div", {
                      key: Y,
                      class: "source-item"
                    }, [
                      e("span", Ou, l(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(X.url), 9, Uu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === X.url,
                        onClick: (O) => P(X.url)
                      }, l(k.value === X.url ? "..." : "×"), 9, Pu)
                    ]))), 128))
                  ])) : (o(), s("div", Bu, " No download sources configured ")),
                  e("div", Fu, [
                    ct(e("input", {
                      "onUpdate:modelValue": S[3] || (S[3] = (X) => C.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [no, C.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !C.value.trim() || f.value,
                      onClick: V
                    }, l(f.value ? "Adding..." : "Add Source"), 9, Au)
                  ]),
                  $.value ? (o(), s("p", Vu, l($.value), 1)) : d("", !0),
                  R.value ? (o(), s("p", Wu, l(R.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: S[4] || (S[4] = (oe) => z.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), I(ze, { to: "body" }, [
          b.value ? (o(), s("div", {
            key: 0,
            class: se(["toast", b.value.type])
          }, l(b.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), uo = /* @__PURE__ */ J(Gu, [["__scopeId", "data-v-f15cbb56"]]), ju = /* @__PURE__ */ K({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: r, getStatus: p } = Ie(), v = x([]), h = x([]), u = x("production"), a = x(!1), m = x(null), C = x(""), f = x(!1), k = x(null);
    function $() {
      f.value = !1, n("navigate", "model-index");
    }
    const R = B(
      () => v.value.reduce((N, z) => N + (z.size || 0), 0)
    ), b = B(() => {
      if (!C.value.trim()) return v.value;
      const N = C.value.toLowerCase();
      return v.value.filter((z) => z.filename.toLowerCase().includes(N));
    }), w = B(() => {
      if (!C.value.trim()) return h.value;
      const N = C.value.toLowerCase();
      return h.value.filter((z) => z.filename.toLowerCase().includes(N));
    }), F = B(() => {
      const N = {};
      for (const S of b.value) {
        const M = S.type || "other";
        N[M] || (N[M] = []), N[M].push(S);
      }
      const z = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([S], [M]) => {
        const oe = z.indexOf(S), q = z.indexOf(M);
        return oe >= 0 && q >= 0 ? oe - q : oe >= 0 ? -1 : q >= 0 ? 1 : S.localeCompare(M);
      }).map(([S, M]) => ({ type: S, models: M }));
    });
    function U(N) {
      if (!N) return "Unknown";
      const z = N / (1024 * 1024);
      return z >= 1024 ? `${(z / 1024).toFixed(1)} GB` : `${z.toFixed(0)} MB`;
    }
    function L(N) {
      k.value = N.hash || N.filename;
    }
    function D(N) {
      n("navigate", "model-index");
    }
    function V(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function P() {
      a.value = !0, m.value = null;
      try {
        const N = await r();
        v.value = N, h.value = [];
        const z = await p();
        u.value = z.environment || "production";
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        a.value = !1;
      }
    }
    return xe(P), (N, z) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(De, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (S) => f.value = !0)
          })
        ]),
        search: i(() => [
          g(gt, {
            modelValue: C.value,
            "onUpdate:modelValue": z[1] || (z[1] = (S) => C.value = S),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), I(Xe, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (o(), I(Qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            v.value.length ? (o(), I(pt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(v.value.length) + " models • " + l(U(R.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (o(!0), s(W, null, ee(F.value, (S) => (o(), I(Ce, {
              key: S.type,
              title: S.type.toUpperCase(),
              count: S.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(S.models, (M) => (o(), I(Me, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...z[4] || (z[4] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(l(M.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(U(M.size)), 1)
                  ]),
                  details: i(() => [
                    g(we, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(we, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (oe) => L(M)
                    }, {
                      default: i(() => [...z[5] || (z[5] = [
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
            w.value.length ? (o(), I(Ce, {
              key: 1,
              title: "MISSING",
              count: w.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(w.value, (S) => (o(), I(Me, {
                  key: S.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...z[6] || (z[6] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(l(S.filename), 1)
                  ]),
                  subtitle: i(() => [...z[7] || (z[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var M;
                    return [
                      g(we, {
                        label: "Required by:",
                        value: ((M = S.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => V(S.filename)
                    }, {
                      default: i(() => [...z[8] || (z[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => D(S.filename)
                    }, {
                      default: i(() => [...z[9] || (z[9] = [
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
            !b.value.length && !w.value.length ? (o(), I(Ae, {
              key: 2,
              icon: "📭",
              message: C.value ? `No models match '${C.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(Ye, {
        show: f.value,
        title: "About Environment Models",
        onClose: z[2] || (z[2] = (S) => f.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            z[10] || (z[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(u.value) + '"', 1),
            z[11] || (z[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          g(Z, {
            variant: "primary",
            onClick: $
          }, {
            default: i(() => [...z[12] || (z[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (o(), I(uo, {
        key: 0,
        identifier: k.value,
        onClose: z[3] || (z[3] = (S) => k.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Hu = /* @__PURE__ */ J(ju, [["__scopeId", "data-v-cb4f12b3"]]), qu = {
  key: 0,
  class: "indexing-progress"
}, Ku = { class: "progress-info" }, Ju = { class: "progress-label" }, Yu = { class: "progress-count" }, Xu = { class: "progress-bar" }, Qu = { class: "modal-content" }, Zu = { class: "modal-header" }, em = { class: "modal-body" }, tm = { class: "input-group" }, om = { class: "current-path" }, sm = { class: "input-group" }, nm = { class: "modal-footer" }, am = { class: "modal-content" }, lm = { class: "modal-header" }, im = { class: "modal-body" }, rm = { class: "input-group" }, dm = { class: "input-group" }, cm = { class: "modal-footer" }, um = /* @__PURE__ */ K({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: p,
      setModelsDirectory: v
    } = Ie(), { addToQueue: h } = Et(), u = c, a = x([]), m = x(!1), C = x(!1), f = x(null), k = x(""), $ = x(!1), R = x(null), b = x(!1), w = x(null), F = x(""), U = x(!1), L = x(!1), D = x(""), V = x(""), P = x(null), N = B(
      () => a.value.reduce((O, _) => O + (_.size || 0), 0)
    ), z = B(() => {
      if (!k.value.trim()) return a.value;
      const O = k.value.toLowerCase();
      return a.value.filter((_) => {
        const ne = _, Q = _.sha256 || ne.sha256_hash || "";
        return _.filename.toLowerCase().includes(O) || Q.toLowerCase().includes(O);
      });
    }), S = B(() => {
      const O = {};
      for (const ne of z.value) {
        const Q = ne.type || "other";
        O[Q] || (O[Q] = []), O[Q].push(ne);
      }
      const _ = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([ne], [Q]) => {
        const Se = _.indexOf(ne), ye = _.indexOf(Q);
        return Se >= 0 && ye >= 0 ? Se - ye : Se >= 0 ? -1 : ye >= 0 ? 1 : ne.localeCompare(Q);
      }).map(([ne, Q]) => ({ type: ne, models: Q }));
    });
    function M(O) {
      if (!O) return "Unknown";
      const _ = 1024 * 1024 * 1024, ne = 1024 * 1024;
      return O >= _ ? `${(O / _).toFixed(1)} GB` : O >= ne ? `${(O / ne).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function oe(O) {
      R.value = O.hash || O.filename;
    }
    async function q() {
      C.value = !0, f.value = null;
      try {
        const O = await r();
        await X(), O.changes > 0 && console.log(`Scan complete: ${O.changes} changes detected`);
      } catch (O) {
        f.value = O instanceof Error ? O.message : "Failed to scan models";
      } finally {
        C.value = !1;
      }
    }
    async function te() {
      if (F.value.trim()) {
        U.value = !0, f.value = null;
        try {
          const O = await v(F.value.trim());
          w.value = O.path, b.value = !1, F.value = "", await X(), console.log(`Directory changed: ${O.models_indexed} models indexed`), u("refresh");
        } catch (O) {
          f.value = O instanceof Error ? O.message : "Failed to change directory";
        } finally {
          U.value = !1;
        }
      }
    }
    function ae() {
      if (!D.value.trim() || !V.value.trim()) return;
      const O = V.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: O,
        url: D.value.trim(),
        targetPath: V.value.trim()
      }]), D.value = "", V.value = "", L.value = !1;
    }
    async function X() {
      m.value = !0, f.value = null;
      try {
        a.value = await n();
      } catch (O) {
        f.value = O instanceof Error ? O.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function Y() {
      try {
        const O = await p();
        w.value = O.path;
      } catch {
      }
    }
    return xe(() => {
      X(), Y();
    }), (O, _) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(De, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: _[2] || (_[2] = (ne) => $.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                disabled: C.value,
                onClick: q
              }, {
                default: i(() => [
                  y(l(C.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: _[0] || (_[0] = (ne) => b.value = !0)
              }, {
                default: i(() => [..._[15] || (_[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: _[1] || (_[1] = (ne) => L.value = !0)
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
          P.value ? (o(), s("div", qu, [
            e("div", Ku, [
              e("span", Ju, l(P.value.message), 1),
              e("span", Yu, l(P.value.current) + "/" + l(P.value.total), 1)
            ]),
            e("div", Xu, [
              e("div", {
                class: "progress-fill",
                style: Je({ width: `${P.value.current / P.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          g(gt, {
            modelValue: k.value,
            "onUpdate:modelValue": _[3] || (_[3] = (ne) => k.value = ne),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value || P.value ? (o(), I(Xe, {
            key: 0,
            message: P.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (o(), I(Qe, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            a.value.length ? (o(), I(pt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(a.value.length) + " models • " + l(M(N.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (o(!0), s(W, null, ee(S.value, (ne) => (o(), I(Ce, {
              key: ne.type,
              title: ne.type.toUpperCase(),
              count: ne.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(ne.models, (Q) => (o(), I(Me, {
                  key: Q.sha256 || Q.filename,
                  status: "synced"
                }, {
                  icon: i(() => [..._[17] || (_[17] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(l(Q.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(M(Q.size)), 1)
                  ]),
                  details: i(() => [
                    g(we, {
                      label: "Hash:",
                      value: Q.hash ? Q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Se) => oe(Q)
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
            z.value.length ? d("", !0) : (o(), I(Ae, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(Ye, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: _[4] || (_[4] = (ne) => $.value = !1)
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
      R.value ? (o(), I(uo, {
        key: 0,
        identifier: R.value,
        onClose: _[5] || (_[5] = (ne) => R.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (o(), I(ze, { to: "body" }, [
        b.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[9] || (_[9] = $e((ne) => b.value = !1, ["self"]))
        }, [
          e("div", Qu, [
            e("div", Zu, [
              _[20] || (_[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[6] || (_[6] = (ne) => b.value = !1)
              }, "✕")
            ]),
            e("div", em, [
              e("div", tm, [
                _[21] || (_[21] = e("label", null, "Current Directory", -1)),
                e("code", om, l(w.value || "Not set"), 1)
              ]),
              e("div", sm, [
                _[22] || (_[22] = e("label", null, "New Directory Path", -1)),
                g(Fe, {
                  modelValue: F.value,
                  "onUpdate:modelValue": _[7] || (_[7] = (ne) => F.value = ne),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              _[23] || (_[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", nm, [
              g(ie, {
                variant: "secondary",
                onClick: _[8] || (_[8] = (ne) => b.value = !1)
              }, {
                default: i(() => [..._[24] || (_[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(ie, {
                variant: "primary",
                disabled: !F.value.trim() || U.value,
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
        ])) : d("", !0)
      ])),
      (o(), I(ze, { to: "body" }, [
        L.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[14] || (_[14] = $e((ne) => L.value = !1, ["self"]))
        }, [
          e("div", am, [
            e("div", lm, [
              _[25] || (_[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[10] || (_[10] = (ne) => L.value = !1)
              }, "✕")
            ]),
            e("div", im, [
              e("div", rm, [
                _[26] || (_[26] = e("label", null, "Download URL", -1)),
                g(Fe, {
                  modelValue: D.value,
                  "onUpdate:modelValue": _[11] || (_[11] = (ne) => D.value = ne),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", dm, [
                _[27] || (_[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(Fe, {
                  modelValue: V.value,
                  "onUpdate:modelValue": _[12] || (_[12] = (ne) => V.value = ne),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              _[28] || (_[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", cm, [
              g(ie, {
                variant: "secondary",
                onClick: _[13] || (_[13] = (ne) => L.value = !1)
              }, {
                default: i(() => [..._[29] || (_[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(ie, {
                variant: "primary",
                disabled: !D.value.trim() || !V.value.trim(),
                onClick: ae
              }, {
                default: i(() => [..._[30] || (_[30] = [
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
}), mm = /* @__PURE__ */ J(um, [["__scopeId", "data-v-73b78d84"]]), vm = { class: "node-details" }, fm = { class: "status-row" }, gm = {
  key: 0,
  class: "detail-row"
}, pm = { class: "value" }, hm = { class: "detail-row" }, ym = { class: "value" }, wm = {
  key: 1,
  class: "detail-row"
}, km = { class: "value mono" }, bm = {
  key: 2,
  class: "detail-row"
}, _m = ["href"], $m = {
  key: 3,
  class: "detail-row"
}, Cm = { class: "value mono small" }, xm = { class: "detail-row" }, Sm = {
  key: 0,
  class: "value"
}, Im = {
  key: 1,
  class: "workflow-list"
}, Em = /* @__PURE__ */ K({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (u, a) => (o(), I(tt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: a[1] || (a[1] = (m) => r("close"))
    }, {
      body: i(() => [
        e("div", vm, [
          e("div", fm, [
            a[2] || (a[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", p.value])
            }, l(v.value), 3)
          ]),
          t.node.version ? (o(), s("div", gm, [
            a[3] || (a[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", pm, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : d("", !0),
          e("div", hm, [
            a[4] || (a[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", ym, l(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", wm, [
            a[5] || (a[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", km, l(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (o(), s("div", bm, [
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
            ], 8, _m)
          ])) : d("", !0),
          t.node.download_url ? (o(), s("div", $m, [
            a[8] || (a[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Cm, l(t.node.download_url), 1)
          ])) : d("", !0),
          a[10] || (a[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", xm, [
            a[9] || (a[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", Sm, " Not used in any workflows ")) : (o(), s("div", Im, [
              (o(!0), s(W, null, ee(t.node.used_in_workflows, (m) => (o(), s("span", {
                key: m,
                class: "workflow-tag"
              }, l(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (m) => r("close"))
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
}), Mm = /* @__PURE__ */ J(Em, [["__scopeId", "data-v-b342f626"]]), zm = { key: 0 }, Lm = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Tm = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Rm = /* @__PURE__ */ K({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: r, trackNodeAsDev: p, installNode: v, uninstallNode: h } = Ie(), u = x({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), a = x(!1), m = x(null), C = x(""), f = x(!1), k = x(null), $ = B(() => {
      if (!C.value.trim()) return u.value.nodes;
      const S = C.value.toLowerCase();
      return u.value.nodes.filter(
        (M) => {
          var oe, q;
          return M.name.toLowerCase().includes(S) || ((oe = M.description) == null ? void 0 : oe.toLowerCase().includes(S)) || ((q = M.repository) == null ? void 0 : q.toLowerCase().includes(S));
        }
      );
    }), R = B(
      () => $.value.filter((S) => S.installed && S.tracked)
    ), b = B(
      () => $.value.filter((S) => !S.installed && S.tracked)
    ), w = B(
      () => $.value.filter((S) => S.installed && !S.tracked)
    );
    function F(S) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[S] || S;
    }
    function U(S) {
      return !S.used_in_workflows || S.used_in_workflows.length === 0 ? "Not used in any workflows" : S.used_in_workflows.length === 1 ? S.used_in_workflows[0] : `${S.used_in_workflows.length} workflows`;
    }
    function L(S) {
      k.value = S;
    }
    function D() {
      n("open-node-manager");
    }
    async function V(S) {
      if (confirm(`Track "${S}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          a.value = !0;
          const M = await p(S);
          M.status === "success" ? (alert(`Node "${S}" is now tracked as development!`), await z()) : alert(`Failed to track node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error tracking node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function P(S) {
      if (confirm(`Remove untracked node "${S}"?

This will delete the node directory from custom_nodes/.`))
        try {
          a.value = !0;
          const M = await h(S);
          M.status === "success" ? (alert(`Node "${S}" removed!`), await z()) : alert(`Failed to remove node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error removing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function N(S) {
      if (confirm(`Install node "${S}"?

This will download and install the node.`))
        try {
          a.value = !0;
          const M = await v(S);
          M.status === "success" ? (alert(`Node "${S}" installed successfully!`), await z()) : alert(`Failed to install node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function z() {
      a.value = !0, m.value = null;
      try {
        u.value = await r();
      } catch (S) {
        m.value = S instanceof Error ? S.message : "Failed to load nodes";
      } finally {
        a.value = !1;
      }
    }
    return xe(z), (S, M) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(De, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (oe) => f.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: D
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
          g(gt, {
            modelValue: C.value,
            "onUpdate:modelValue": M[1] || (M[1] = (oe) => C.value = oe),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), I(Xe, {
            key: 0,
            message: "Loading nodes..."
          })) : m.value ? (o(), I(Qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            u.value.total_count ? (o(), I(pt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(l(u.value.installed_count) + " installed ", 1),
                u.value.missing_count ? (o(), s(W, { key: 0 }, [
                  y(" • " + l(u.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                u.value.untracked_count ? (o(), s(W, { key: 1 }, [
                  y(" • " + l(u.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            w.value.length ? (o(), I(Ce, {
              key: 1,
              title: "UNTRACKED",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(w.value, (oe) => (o(), I(Me, {
                  key: oe.name,
                  status: "warning"
                }, {
                  icon: i(() => [...M[6] || (M[6] = [
                    y("?", -1)
                  ])]),
                  title: i(() => [
                    y(l(oe.name), 1)
                  ]),
                  subtitle: i(() => [...M[7] || (M[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(we, {
                      label: "Used by:",
                      value: U(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => L(oe)
                    }, {
                      default: i(() => [...M[8] || (M[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => V(oe.name)
                    }, {
                      default: i(() => [...M[9] || (M[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (q) => P(oe.name)
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
            R.value.length ? (o(), I(Ce, {
              key: 2,
              title: "INSTALLED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(R.value, (oe) => (o(), I(Me, {
                  key: oe.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    y(l(oe.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    y(l(oe.name), 1)
                  ]),
                  subtitle: i(() => [
                    oe.version ? (o(), s("span", zm, l(oe.source === "development" ? "" : "v") + l(oe.version), 1)) : (o(), s("span", Lm, "version unknown")),
                    e("span", Tm, " • " + l(F(oe.source)), 1)
                  ]),
                  details: i(() => [
                    g(we, {
                      label: "Used by:",
                      value: U(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => L(oe)
                    }, {
                      default: i(() => [...M[11] || (M[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: D
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
            b.value.length ? (o(), I(Ce, {
              key: 3,
              title: "MISSING",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(b.value, (oe) => (o(), I(Me, {
                  key: oe.name,
                  status: "missing"
                }, {
                  icon: i(() => [...M[13] || (M[13] = [
                    y("!", -1)
                  ])]),
                  title: i(() => [
                    y(l(oe.name), 1)
                  ]),
                  subtitle: i(() => [...M[14] || (M[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(we, {
                      label: "Required by:",
                      value: U(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => L(oe)
                    }, {
                      default: i(() => [...M[15] || (M[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => N(oe.name)
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
            !R.value.length && !b.value.length && !w.value.length ? (o(), I(Ae, {
              key: 4,
              icon: "📭",
              message: C.value ? `No nodes match '${C.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(Ye, {
        show: f.value,
        title: "About Custom Nodes",
        onClose: M[3] || (M[3] = (oe) => f.value = !1)
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
          g(Z, {
            variant: "primary",
            onClick: M[2] || (M[2] = (oe) => f.value = !1)
          }, {
            default: i(() => [...M[18] || (M[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (o(), I(Mm, {
        key: 0,
        node: k.value,
        onClose: M[4] || (M[4] = (oe) => k.value = null)
      }, null, 8, ["node"])) : d("", !0)
    ], 64));
  }
}), Dm = /* @__PURE__ */ J(Rm, [["__scopeId", "data-v-4ac1465a"]]), Nm = { class: "remote-url-display" }, Om = ["title"], Um = ["title"], Pm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Bm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Fm = /* @__PURE__ */ K({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = x(!1), r = B(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const v = c.url.slice(0, Math.floor(c.maxLength * 0.6)), h = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${v}...${h}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, h) => (o(), s("div", Nm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, Om),
      e("button", {
        class: se(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Bm, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", Pm, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Um)
    ]));
  }
}), Zt = /* @__PURE__ */ J(Fm, [["__scopeId", "data-v-7768a58d"]]), Am = { class: "remote-title" }, Vm = {
  key: 0,
  class: "default-badge"
}, Wm = {
  key: 1,
  class: "sync-badge"
}, Gm = {
  key: 0,
  class: "ahead"
}, jm = {
  key: 1,
  class: "behind"
}, Hm = {
  key: 0,
  class: "tracking-info"
}, qm = /* @__PURE__ */ K({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const n = t, r = B(() => n.fetchingRemote === n.remote.name), p = B(() => n.remote.is_default), v = B(() => !!n.trackingBranch);
    function h(u) {
      const a = new Date(u), C = (/* @__PURE__ */ new Date()).getTime() - a.getTime(), f = Math.floor(C / 6e4);
      if (f < 1) return "Just now";
      if (f < 60) return `${f}m ago`;
      const k = Math.floor(f / 60);
      if (k < 24) return `${k}h ago`;
      const $ = Math.floor(k / 24);
      return $ < 7 ? `${$}d ago` : a.toLocaleDateString();
    }
    return (u, a) => (o(), I(Me, {
      status: p.value ? "synced" : void 0
    }, {
      icon: i(() => [
        y(l(p.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Am, [
          e("span", null, l(t.remote.name), 1),
          p.value ? (o(), s("span", Vm, "DEFAULT")) : d("", !0),
          t.syncStatus ? (o(), s("span", Wm, [
            t.syncStatus.ahead > 0 ? (o(), s("span", Gm, "↑" + l(t.syncStatus.ahead), 1)) : d("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", jm, "↓" + l(t.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: i(() => [
        v.value ? (o(), s("span", Hm, " Tracking: " + l(t.trackingBranch), 1)) : d("", !0)
      ]),
      details: i(() => {
        var m;
        return [
          g(we, { label: "Fetch:" }, {
            default: i(() => [
              g(Zt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), I(we, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              g(Zt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (m = t.syncStatus) != null && m.last_fetch ? (o(), I(we, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, l(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: i(() => [
        g(Z, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: a[0] || (a[0] = (m) => u.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...a[3] || (a[3] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        g(Z, {
          variant: "secondary",
          size: "xs",
          onClick: a[1] || (a[1] = (m) => u.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...a[4] || (a[4] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        p.value ? d("", !0) : (o(), I(Z, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: a[2] || (a[2] = (m) => u.$emit("remove", t.remote.name))
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
}), Km = /* @__PURE__ */ J(qm, [["__scopeId", "data-v-17362e45"]]), Jm = ["for"], Ym = {
  key: 0,
  class: "base-form-field-required"
}, Xm = { class: "base-form-field-input" }, Qm = {
  key: 1,
  class: "base-form-field-error"
}, Zm = {
  key: 2,
  class: "base-form-field-hint"
}, ev = /* @__PURE__ */ K({
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
    const c = t, n = B(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, p) => (o(), s("div", {
      class: se(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(l(t.label) + " ", 1),
        t.required ? (o(), s("span", Ym, "*")) : d("", !0)
      ], 8, Jm)) : d("", !0),
      e("div", Xm, [
        ue(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Qm, l(t.error), 1)) : t.hint ? (o(), s("span", Zm, l(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), Ft = /* @__PURE__ */ J(ev, [["__scopeId", "data-v-9a1cf296"]]), tv = { class: "remote-form" }, ov = { class: "form-header" }, sv = { class: "form-body" }, nv = {
  key: 0,
  class: "form-error"
}, av = { class: "form-actions" }, lv = /* @__PURE__ */ K({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = x({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), v = x(!1), h = x(null);
    jt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const u = B(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function a() {
      if (!(!u.value || v.value)) {
        h.value = null, v.value = !0;
        try {
          r("submit", p.value);
        } catch (m) {
          h.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (m, C) => (o(), s("div", tv, [
      e("div", ov, [
        g(Oe, null, {
          default: i(() => [
            y(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", sv, [
        g(Ft, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            g(Fe, {
              modelValue: p.value.name,
              "onUpdate:modelValue": C[0] || (C[0] = (f) => p.value.name = f),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g(Ft, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            g(Fe, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": C[1] || (C[1] = (f) => p.value.fetchUrl = f),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g(Ft, { label: "Push URL (optional)" }, {
          default: i(() => [
            g(Fe, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": C[2] || (C[2] = (f) => p.value.pushUrl = f),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), s("div", nv, l(h.value), 1)) : d("", !0)
      ]),
      e("div", av, [
        g(Z, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: v.value,
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
          onClick: C[3] || (C[3] = (f) => m.$emit("cancel"))
        }, {
          default: i(() => [...C[4] || (C[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), iv = /* @__PURE__ */ J(lv, [["__scopeId", "data-v-56021b18"]]), rv = { key: 0 }, dv = /* @__PURE__ */ K({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: p,
      fetchRemote: v,
      getRemoteSyncStatus: h
    } = Ie(), u = x([]), a = x(null), m = x({}), C = x(!1), f = x(null), k = x(""), $ = x(!1), R = x(null), b = x(!1), w = x("add"), F = x({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), U = B(() => {
      if (!k.value.trim()) return u.value;
      const q = k.value.toLowerCase();
      return u.value.filter(
        (te) => te.name.toLowerCase().includes(q) || te.fetch_url.toLowerCase().includes(q) || te.push_url.toLowerCase().includes(q)
      );
    });
    function L(q) {
      var te;
      return ((te = a.value) == null ? void 0 : te.remote) === q;
    }
    async function D() {
      C.value = !0, f.value = null;
      try {
        const q = await c();
        u.value = q.remotes, a.value = q.current_branch_tracking || null, await Promise.all(
          q.remotes.map(async (te) => {
            const ae = await h(te.name);
            ae && (m.value[te.name] = ae);
          })
        );
      } catch (q) {
        f.value = q instanceof Error ? q.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function V() {
      w.value = "add", F.value = { name: "", fetchUrl: "", pushUrl: "" }, b.value = !0;
    }
    function P(q) {
      const te = u.value.find((ae) => ae.name === q);
      te && (w.value = "edit", F.value = {
        name: te.name,
        fetchUrl: te.fetch_url,
        pushUrl: te.push_url
      }, b.value = !0);
    }
    async function N(q) {
      try {
        w.value === "add" ? await n(q.name, q.fetchUrl) : await p(q.name, q.fetchUrl, q.pushUrl || void 0), b.value = !1, await D();
      } catch (te) {
        f.value = te instanceof Error ? te.message : "Operation failed";
      }
    }
    function z() {
      b.value = !1, F.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function S(q) {
      R.value = q;
      try {
        await v(q);
        const te = await h(q);
        te && (m.value[q] = te);
      } catch (te) {
        f.value = te instanceof Error ? te.message : "Fetch failed";
      } finally {
        R.value = null;
      }
    }
    async function M(q) {
      if (confirm(`Remove remote "${q}"?`))
        try {
          await r(q), await D();
        } catch (te) {
          f.value = te instanceof Error ? te.message : "Failed to remove remote";
        }
    }
    function oe() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return xe(D), (q, te) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(De, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: te[0] || (te[0] = (ae) => $.value = !0)
          }, {
            actions: i(() => [
              b.value ? d("", !0) : (o(), I(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
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
          b.value ? d("", !0) : (o(), I(gt, {
            key: 0,
            modelValue: k.value,
            "onUpdate:modelValue": te[1] || (te[1] = (ae) => k.value = ae),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          C.value ? (o(), I(Xe, {
            key: 0,
            message: "Loading remotes..."
          })) : f.value ? (o(), I(Qe, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            b.value ? (o(), I(iv, {
              key: 0,
              mode: w.value,
              "remote-name": F.value.name,
              "fetch-url": F.value.fetchUrl,
              "push-url": F.value.pushUrl,
              onSubmit: N,
              onCancel: z
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            u.value.length && !b.value ? (o(), I(pt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(u.value.length) + " remote" + l(u.value.length !== 1 ? "s" : "") + " ", 1),
                a.value ? (o(), s("span", rv, " • Tracking: " + l(a.value.remote) + "/" + l(a.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            U.value.length && !b.value ? (o(), I(Ce, {
              key: 2,
              title: "REMOTES",
              count: U.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(U.value, (ae) => {
                  var X;
                  return o(), I(Km, {
                    key: ae.name,
                    remote: ae,
                    "sync-status": m.value[ae.name],
                    "tracking-branch": L(ae.name) ? (X = a.value) == null ? void 0 : X.branch : void 0,
                    "fetching-remote": R.value,
                    onFetch: S,
                    onEdit: P,
                    onRemove: M
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !U.value.length && !b.value ? (o(), I(Ae, {
              key: 3,
              icon: "🌐",
              message: k.value ? `No remotes match '${k.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "primary",
                  onClick: V
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
      g(Ye, {
        show: $.value,
        title: "About Git Remotes",
        onClose: te[2] || (te[2] = (ae) => $.value = !1)
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
          g(Z, {
            variant: "link",
            onClick: oe
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
}), cv = /* @__PURE__ */ J(dv, [["__scopeId", "data-v-a75719bb"]]), uv = { class: "setting-info" }, mv = { class: "setting-label" }, vv = {
  key: 0,
  class: "required-marker"
}, fv = {
  key: 0,
  class: "setting-description"
}, gv = { class: "setting-control" }, pv = /* @__PURE__ */ K({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: se(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", uv, [
        e("div", mv, [
          y(l(t.label) + " ", 1),
          t.required ? (o(), s("span", vv, "*")) : d("", !0)
        ]),
        t.description ? (o(), s("div", fv, l(t.description), 1)) : d("", !0)
      ]),
      e("div", gv, [
        ue(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ke = /* @__PURE__ */ J(pv, [["__scopeId", "data-v-cb5d236c"]]), hv = { class: "toggle" }, yv = ["checked", "disabled"], wv = /* @__PURE__ */ K({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", hv, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, yv),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), at = /* @__PURE__ */ J(wv, [["__scopeId", "data-v-71c0f550"]]), kv = { class: "settings-section" }, bv = { class: "path-setting" }, _v = { class: "path-value" }, $v = { class: "path-setting" }, Cv = { class: "path-value" }, xv = { class: "settings-section" }, Sv = { class: "settings-section" }, Iv = { class: "settings-section" }, Ev = /* @__PURE__ */ K({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Ie(), r = x(!1), p = x(null), v = x(null), h = x(null), u = x(null), a = x(""), m = x(""), C = x(!0), f = x(!0), k = x(!1), $ = B(() => u.value ? a.value !== (u.value.civitai_api_key || "") : !1);
    async function R() {
      r.value = !0, p.value = null;
      try {
        h.value = await c(), u.value = { ...h.value }, a.value = h.value.civitai_api_key || "", m.value = h.value.huggingface_token || "", C.value = h.value.auto_sync_models, f.value = h.value.confirm_destructive;
        const U = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = U === "true";
      } catch (U) {
        p.value = U instanceof Error ? U.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function b() {
      var U;
      v.value = null;
      try {
        const L = {};
        a.value !== (((U = u.value) == null ? void 0 : U.civitai_api_key) || "") && (L.civitai_api_key = a.value || null), await n(L), await R(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (L) {
        v.value = {
          type: "error",
          message: L instanceof Error ? L.message : "Failed to save settings"
        };
      }
    }
    function w() {
      u.value && (a.value = u.value.civitai_api_key || "", m.value = u.value.huggingface_token || "", C.value = u.value.auto_sync_models, f.value = u.value.confirm_destructive, v.value = null);
    }
    function F(U) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(U)), console.log("[ComfyGit] Auto-refresh setting saved:", U);
    }
    return xe(R), (U, L) => (o(), I(Re, null, {
      header: i(() => [
        g(De, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            g(Z, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: b
            }, {
              default: i(() => [...L[5] || (L[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (o(), I(Z, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: w
            }, {
              default: i(() => [...L[6] || (L[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), I(Xe, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (o(), I(Qe, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: R
        }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
          g(Ce, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var D, V;
              return [
                e("div", kv, [
                  e("div", bv, [
                    L[7] || (L[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    L[8] || (L[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", _v, l(((D = h.value) == null ? void 0 : D.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", $v, [
                    L[9] || (L[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    L[10] || (L[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Cv, l(((V = h.value) == null ? void 0 : V.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(Ce, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", xv, [
                g(Ke, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    g(Lt, {
                      modelValue: a.value,
                      "onUpdate:modelValue": L[0] || (L[0] = (D) => a.value = D),
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
                      modelValue: m.value,
                      "onUpdate:modelValue": L[1] || (L[1] = (D) => m.value = D),
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
          g(Ce, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", Sv, [
                g(Ke, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    g(at, {
                      modelValue: k.value,
                      "onUpdate:modelValue": [
                        L[2] || (L[2] = (D) => k.value = D),
                        F
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g(Ce, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", Iv, [
                g(Ke, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(at, {
                      modelValue: C.value,
                      "onUpdate:modelValue": L[3] || (L[3] = (D) => C.value = D),
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
                    g(at, {
                      modelValue: f.value,
                      "onUpdate:modelValue": L[4] || (L[4] = (D) => f.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v.value ? (o(), I(pt, {
            key: 0,
            variant: (v.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: Je({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Mv = /* @__PURE__ */ J(Ev, [["__scopeId", "data-v-7861bd35"]]), zv = /* @__PURE__ */ K({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = Ie(), n = x([]), r = x(!1), p = x(null), v = x(!1), h = x(null), u = B(() => n.value.length === 0 ? [] : n.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function a() {
      r.value = !0, p.value = null;
      try {
        n.value = await c(void 0, 500);
      } catch (m) {
        p.value = m instanceof Error ? m.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var m;
          (m = h.value) != null && m.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return xe(a), (m, C) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(De, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (f) => v.value = !0)
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
          r.value ? (o(), I(Xe, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (o(), I(Qe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: a
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            n.value.length === 0 ? (o(), I(Ae, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(W, null, ee(u.value, (f, k) => (o(), s("div", {
                key: k,
                class: se(`log-line log-level-${f.level.toLowerCase()}`)
              }, l(f.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(Ye, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: C[2] || (C[2] = (f) => v.value = !1)
      }, {
        content: i(() => [...C[3] || (C[3] = [
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
            onClick: C[1] || (C[1] = (f) => v.value = !1)
          }, {
            default: i(() => [...C[4] || (C[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Lv = /* @__PURE__ */ J(zv, [["__scopeId", "data-v-39f6a756"]]), Tv = /* @__PURE__ */ K({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n } = Ie(), r = x([]), p = x(!1), v = x(null), h = x(!1), u = x("production"), a = x(null), m = B(() => r.value.length === 0 ? [] : r.value.map((f) => ({
      text: `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function C() {
      p.value = !0, v.value = null;
      try {
        r.value = await c(void 0, 500);
        try {
          const f = await n();
          u.value = f.environment || "production";
        } catch {
        }
      } catch (f) {
        v.value = f instanceof Error ? f.message : "Failed to load environment logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var f;
          (f = a.value) != null && f.parentElement && (a.value.parentElement.scrollTop = a.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return xe(C), (f, k) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(De, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = ($) => h.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "secondary",
                size: "sm",
                onClick: C,
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
          p.value ? (o(), I(Xe, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (o(), I(Qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            r.value.length === 0 ? (o(), I(Ae, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: a,
              class: "log-output"
            }, [
              (o(!0), s(W, null, ee(m.value, ($, R) => (o(), s("div", {
                key: R,
                class: se(`log-line log-level-${$.level.toLowerCase()}`)
              }, l($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(Ye, {
        show: h.value,
        title: "About Environment Logs",
        onClose: k[2] || (k[2] = ($) => h.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            k[3] || (k[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(u.value), 1),
            k[4] || (k[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          k[5] || (k[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          k[6] || (k[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          g(Z, {
            variant: "primary",
            onClick: k[1] || (k[1] = ($) => h.value = !1)
          }, {
            default: i(() => [...k[7] || (k[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Rv = /* @__PURE__ */ J(Tv, [["__scopeId", "data-v-4f1e6f72"]]), Dv = { class: "env-title" }, Nv = {
  key: 0,
  class: "current-badge"
}, Ov = {
  key: 0,
  class: "branch-info"
}, Uv = /* @__PURE__ */ K({
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
    return (c, n) => (o(), I(Me, {
      status: t.isCurrent ? "synced" : void 0
    }, Tt({
      icon: i(() => [
        y(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", Dv, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Nv, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", Ov, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + l(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: i(() => [
        ue(c.$slots, "actions", {}, void 0, !0)
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
          t.lastUsed && t.showLastUsed ? (o(), I(we, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Pv = /* @__PURE__ */ J(Uv, [["__scopeId", "data-v-9231917a"]]), Bv = { class: "env-details" }, Fv = { class: "status-row" }, Av = {
  key: 0,
  class: "detail-row"
}, Vv = { class: "value mono" }, Wv = {
  key: 1,
  class: "detail-row"
}, Gv = { class: "value mono small" }, jv = { class: "detail-row" }, Hv = { class: "value" }, qv = { class: "detail-row" }, Kv = { class: "value" }, Jv = { class: "detail-row" }, Yv = { class: "value" }, Xv = {
  key: 2,
  class: "section-divider"
}, Qv = {
  key: 3,
  class: "detail-row"
}, Zv = { class: "value" }, ef = {
  key: 4,
  class: "detail-row"
}, tf = { class: "value" }, of = { class: "footer-actions" }, sf = /* @__PURE__ */ K({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function r(p) {
      if (!p) return "Unknown";
      try {
        const v = new Date(p), u = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), a = Math.floor(u / 6e4), m = Math.floor(u / 36e5), C = Math.floor(u / 864e5);
        return a < 1 ? "just now" : a < 60 ? `${a} ${a === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : C < 30 ? `${C} ${C === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, v) => (o(), I(tt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (h) => n("close"))
    }, {
      body: i(() => [
        e("div", Bv, [
          e("div", Fv, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, l(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (o(), s("div", Av, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Vv, l(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (o(), s("div", Wv, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Gv, l(t.environment.path), 1)
          ])) : d("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", jv, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Hv, l(t.environment.workflow_count), 1)
          ]),
          e("div", qv, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Kv, l(t.environment.node_count), 1)
          ]),
          e("div", Jv, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Yv, l(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (o(), s("div", Xv)) : d("", !0),
          t.environment.created_at ? (o(), s("div", Qv, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Zv, l(r(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (o(), s("div", ef, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", tf, l(r(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", of, [
          t.canDelete ? (o(), I(ie, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (h) => n("delete", t.environment.name))
          }, {
            default: i(() => [...v[12] || (v[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          g(ie, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (h) => n("close"))
          }, {
            default: i(() => [...v[13] || (v[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), nf = /* @__PURE__ */ J(sf, [["__scopeId", "data-v-59855453"]]), af = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], lf = "3.12", rf = [
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
], df = "auto", cf = { class: "create-env-form" }, uf = { class: "form-field" }, mf = { class: "form-field" }, vf = ["value"], ff = { class: "form-field" }, gf = ["disabled"], pf = ["value"], hf = { class: "form-field" }, yf = ["value"], wf = { class: "form-field form-field--checkbox" }, kf = { class: "form-checkbox" }, bf = /* @__PURE__ */ K({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: r } = Ie(), p = x(""), v = x(lf), h = x("latest"), u = x(df), a = x(!1), m = x([{ tag_name: "latest", name: "Latest", published_at: "" }]), C = x(!1), f = x(null);
    function k() {
      const R = p.value.trim();
      if (!R) return;
      const b = {
        name: R,
        python_version: v.value,
        comfyui_version: h.value,
        torch_backend: u.value,
        switch_after: a.value
      };
      n("create", b);
    }
    async function $() {
      C.value = !0;
      try {
        m.value = await r();
      } catch (R) {
        console.error("Failed to load ComfyUI releases:", R);
      } finally {
        C.value = !1;
      }
    }
    return xe(async () => {
      var R;
      await So(), (R = f.value) == null || R.focus(), $();
    }), (R, b) => (o(), I(tt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: b[6] || (b[6] = (w) => n("close"))
    }, {
      body: i(() => [
        e("div", cf, [
          e("div", uf, [
            b[7] || (b[7] = e("label", { class: "form-label" }, "Name", -1)),
            ct(e("input", {
              ref_key: "nameInput",
              ref: f,
              "onUpdate:modelValue": b[0] || (b[0] = (w) => p.value = w),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: et(k, ["enter"])
            }, null, 544), [
              [no, p.value]
            ])
          ]),
          e("div", mf, [
            b[8] || (b[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            ct(e("select", {
              "onUpdate:modelValue": b[1] || (b[1] = (w) => v.value = w),
              class: "form-select"
            }, [
              (o(!0), s(W, null, ee(fe(af), (w) => (o(), s("option", {
                key: w,
                value: w
              }, l(w), 9, vf))), 128))
            ], 512), [
              [Pt, v.value]
            ])
          ]),
          e("div", ff, [
            b[9] || (b[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            ct(e("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (w) => h.value = w),
              class: "form-select",
              disabled: C.value
            }, [
              (o(!0), s(W, null, ee(m.value, (w) => (o(), s("option", {
                key: w.tag_name,
                value: w.tag_name
              }, l(w.name), 9, pf))), 128))
            ], 8, gf), [
              [Pt, h.value]
            ])
          ]),
          e("div", hf, [
            b[10] || (b[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            ct(e("select", {
              "onUpdate:modelValue": b[3] || (b[3] = (w) => u.value = w),
              class: "form-select"
            }, [
              (o(!0), s(W, null, ee(fe(rf), (w) => (o(), s("option", {
                key: w,
                value: w
              }, l(w) + l(w === "auto" ? " (detect GPU)" : ""), 9, yf))), 128))
            ], 512), [
              [Pt, u.value]
            ])
          ]),
          e("div", wf, [
            e("label", kf, [
              ct(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": b[4] || (b[4] = (w) => a.value = w)
              }, null, 512), [
                [Io, a.value]
              ]),
              b[11] || (b[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        g(ie, {
          variant: "primary",
          disabled: !p.value.trim(),
          onClick: k
        }, {
          default: i(() => [...b[12] || (b[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(ie, {
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
}), _f = /* @__PURE__ */ J(bf, [["__scopeId", "data-v-a2f13447"]]), $f = /* @__PURE__ */ K({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getEnvironments: p } = Ie(), v = x([]), h = x(!1), u = x(null), a = x(""), m = x(!1), C = x(!1), f = x(null), k = B(
      () => v.value.find((L) => L.is_current)
    ), $ = B(() => {
      if (!a.value.trim()) return v.value;
      const L = a.value.toLowerCase();
      return v.value.filter(
        (D) => {
          var V;
          return D.name.toLowerCase().includes(L) || ((V = D.current_branch) == null ? void 0 : V.toLowerCase().includes(L));
        }
      );
    });
    function R(L) {
      r("create", L), C.value = !1;
    }
    function b() {
      C.value = !0;
    }
    function w(L) {
      f.value = L;
    }
    function F(L) {
      f.value = null, r("delete", L);
    }
    async function U() {
      h.value = !0, u.value = null;
      try {
        v.value = await p();
      } catch (L) {
        u.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return xe(U), c({
      loadEnvironments: U
    }), (L, D) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(De, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (V) => m.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: i(() => [...D[6] || (D[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              g(Z, {
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
          g(gt, {
            modelValue: a.value,
            "onUpdate:modelValue": D[1] || (D[1] = (V) => a.value = V),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          h.value ? (o(), I(Xe, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (o(), I(Qe, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            v.value.length ? (o(), I(pt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(v.value.length) + " " + l(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                k.value ? (o(), s(W, { key: 0 }, [
                  D[8] || (D[8] = y(" • Current: ", -1)),
                  e("strong", null, l(k.value.name), 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            $.value.length ? (o(), I(Ce, {
              key: 1,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee($.value, (V) => (o(), I(Pv, {
                  key: V.name,
                  "environment-name": V.name,
                  "is-current": V.is_current,
                  "current-branch": V.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    V.is_current ? d("", !0) : (o(), I(Z, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => L.$emit("switch", V.name)
                    }, {
                      default: i(() => [...D[9] || (D[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => w(V)
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
            }, 8, ["count"])) : d("", !0),
            $.value.length ? d("", !0) : (o(), I(Ae, {
              key: 2,
              icon: "🌍",
              message: a.value ? `No environments match '${a.value}'` : "No environments found. Create one to get started!"
            }, Tt({ _: 2 }, [
              a.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  g(Z, {
                    variant: "primary",
                    onClick: b
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
      g(Ye, {
        show: m.value,
        title: "About Environments",
        onClose: D[3] || (D[3] = (V) => m.value = !1)
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
          g(Z, {
            variant: "secondary",
            onClick: D[2] || (D[2] = (V) => m.value = !1)
          }, {
            default: i(() => [...D[13] || (D[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      f.value ? (o(), I(nf, {
        key: 0,
        environment: f.value,
        "can-delete": v.value.length > 1,
        onClose: D[4] || (D[4] = (V) => f.value = null),
        onDelete: F
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      C.value ? (o(), I(_f, {
        key: 1,
        onClose: D[5] || (D[5] = (V) => C.value = !1),
        onCreate: R
      })) : d("", !0)
    ], 64));
  }
}), Cf = /* @__PURE__ */ J($f, [["__scopeId", "data-v-307d9926"]]), xf = { class: "file-path" }, Sf = { class: "file-path-text" }, If = ["title"], Ef = /* @__PURE__ */ K({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = x(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, v) => (o(), s("div", xf, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Sf, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(n.value ? "✓" : "📋"), 9, If)) : d("", !0)
    ]));
  }
}), Mf = /* @__PURE__ */ J(Ef, [["__scopeId", "data-v-f0982173"]]), zf = { class: "output-path-input" }, Lf = { class: "export-actions" }, Tf = {
  key: 1,
  class: "export-warning"
}, Rf = /* @__PURE__ */ K({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = Ie(), n = x(""), r = x(!1), p = x(null), v = x(!1);
    async function h() {
      r.value = !0, p.value = null;
      try {
        const a = await c(n.value || void 0);
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
    async function u() {
      var a;
      if ((a = p.value) != null && a.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (m) {
          console.error("Failed to copy path:", m);
        }
    }
    return (a, m) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(De, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              g(Z, {
                variant: "ghost",
                size: "sm",
                onClick: m[0] || (m[0] = (C) => v.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...m[5] || (m[5] = [
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
          g(Ce, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              g(Me, { status: "synced" }, {
                icon: i(() => [...m[6] || (m[6] = [
                  y("📦", -1)
                ])]),
                title: i(() => [...m[7] || (m[7] = [
                  y("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...m[8] || (m[8] = [
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
          g(Ce, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              g(Me, { status: "synced" }, {
                icon: i(() => [...m[9] || (m[9] = [
                  y("📁", -1)
                ])]),
                title: i(() => [...m[10] || (m[10] = [
                  y("Output Destination", -1)
                ])]),
                subtitle: i(() => [...m[11] || (m[11] = [
                  y(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", zf, [
                    g(Lt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (C) => n.value = C),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(Ce, { title: "EXPORT" }, {
            default: i(() => [
              e("div", Lf, [
                g(Z, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
                }, {
                  default: i(() => [
                    m[12] || (m[12] = e("svg", {
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
                n.value ? (o(), I(Z, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: m[2] || (m[2] = (C) => n.value = "")
                }, {
                  default: i(() => [...m[13] || (m[13] = [
                    y(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          p.value ? (o(), I(Ce, {
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
                        g(Mf, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (o(), I(we, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (o(), s("div", Tf, [...m[14] || (m[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: u
                    }, {
                      default: i(() => [...m[15] || (m[15] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m[3] || (m[3] = (C) => p.value = null)
                    }, {
                      default: i(() => [...m[16] || (m[16] = [
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
      g(Ye, {
        show: v.value,
        title: "About Environment Export",
        onClose: m[4] || (m[4] = (C) => v.value = !1)
      }, {
        content: i(() => [...m[17] || (m[17] = [
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
}), Df = /* @__PURE__ */ J(Rf, [["__scopeId", "data-v-1777a9d5"]]), Nf = { class: "file-input-wrapper" }, Of = ["accept", "multiple", "disabled"], Uf = /* @__PURE__ */ K({
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
    const r = n, p = x(null);
    function v() {
      var u;
      (u = p.value) == null || u.click();
    }
    function h(u) {
      const a = u.target;
      a.files && a.files.length > 0 && (r("change", a.files), a.value = "");
    }
    return c({
      triggerInput: v
    }), (u, a) => (o(), s("div", Nf, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Of),
      g(Z, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: i(() => [
          ue(u.$slots, "default", {}, () => [
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
}), Pf = /* @__PURE__ */ J(Uf, [["__scopeId", "data-v-cd192091"]]), Bf = {
  key: 0,
  class: "drop-zone-empty"
}, Ff = { class: "drop-zone-text" }, Af = { class: "drop-zone-primary" }, Vf = { class: "drop-zone-secondary" }, Wf = { class: "drop-zone-actions" }, Gf = {
  key: 1,
  class: "drop-zone-file"
}, jf = { class: "file-info" }, Hf = { class: "file-details" }, qf = { class: "file-name" }, Kf = { class: "file-size" }, Jf = /* @__PURE__ */ K({
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
    const n = c, r = x(!1), p = x(null), v = x(0), h = B(() => p.value !== null), u = B(() => {
      var w;
      return ((w = p.value) == null ? void 0 : w.name) || "";
    }), a = B(() => {
      if (!p.value) return "";
      const w = p.value.size;
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(w) {
      var F;
      v.value++, (F = w.dataTransfer) != null && F.types.includes("Files") && (r.value = !0);
    }
    function C(w) {
      w.dataTransfer && (w.dataTransfer.dropEffect = "copy");
    }
    function f() {
      v.value--, v.value === 0 && (r.value = !1);
    }
    function k(w) {
      var U;
      v.value = 0, r.value = !1;
      const F = (U = w.dataTransfer) == null ? void 0 : U.files;
      F && F.length > 0 && R(F[0]);
    }
    function $(w) {
      w.length > 0 && R(w[0]);
    }
    function R(w) {
      p.value = w, n("fileSelected", w);
    }
    function b() {
      p.value = null, n("clear");
    }
    return (w, F) => (o(), s("div", {
      class: se(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: $e(m, ["prevent"]),
      onDragover: $e(C, ["prevent"]),
      onDragleave: $e(f, ["prevent"]),
      onDrop: $e(k, ["prevent"])
    }, [
      h.value ? (o(), s("div", Gf, [
        e("div", jf, [
          F[1] || (F[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Hf, [
            e("div", qf, l(u.value), 1),
            e("div", Kf, l(a.value), 1)
          ])
        ]),
        g(Z, {
          variant: "ghost",
          size: "xs",
          onClick: b,
          title: "Remove file"
        }, {
          default: i(() => [...F[2] || (F[2] = [
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
      ])) : (o(), s("div", Bf, [
        F[0] || (F[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Ff, [
          e("p", Af, l(t.primaryText), 1),
          e("p", Vf, l(t.secondaryText), 1)
        ]),
        e("div", Wf, [
          g(Pf, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
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
}), Yf = /* @__PURE__ */ J(Jf, [["__scopeId", "data-v-e00abbca"]]), Xf = { class: "import-preview" }, Qf = { class: "preview-header" }, Zf = {
  key: 0,
  class: "source-env"
}, eg = { class: "preview-content" }, tg = { class: "preview-section" }, og = { class: "section-header" }, sg = { class: "section-info" }, ng = { class: "section-count" }, ag = {
  key: 0,
  class: "item-list"
}, lg = { class: "item-name" }, ig = {
  key: 0,
  class: "item-more"
}, rg = { class: "preview-section" }, dg = { class: "section-header" }, cg = { class: "section-info" }, ug = { class: "section-count" }, mg = {
  key: 0,
  class: "item-list"
}, vg = { class: "item-details" }, fg = { class: "item-name" }, gg = { class: "item-meta" }, pg = {
  key: 0,
  class: "item-more"
}, hg = { class: "preview-section" }, yg = { class: "section-header" }, wg = { class: "section-info" }, kg = { class: "section-count" }, bg = {
  key: 0,
  class: "item-list"
}, _g = { class: "item-name" }, $g = {
  key: 0,
  class: "item-more"
}, Cg = {
  key: 0,
  class: "preview-section"
}, xg = { class: "git-info" }, Sg = /* @__PURE__ */ K({
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
    const c = t, n = B(() => c.workflows.length), r = B(() => c.models.length), p = B(() => c.nodes.length);
    function v(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, u) => (o(), s("div", Xf, [
      e("div", Qf, [
        g(Oe, null, {
          default: i(() => [...u[0] || (u[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Zf, [
          u[1] || (u[1] = y(" From: ", -1)),
          g(Wt, null, {
            default: i(() => [
              y(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", eg, [
        e("div", tg, [
          e("div", og, [
            u[3] || (u[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", sg, [
              u[2] || (u[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", ng, l(n.value) + " file" + l(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", ag, [
            (o(!0), s(W, null, ee(t.workflows.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              u[4] || (u[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", lg, l(a), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", ig, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", rg, [
          e("div", dg, [
            u[6] || (u[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", cg, [
              u[5] || (u[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", ug, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", mg, [
            (o(!0), s(W, null, ee(t.models.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", vg, [
                e("span", fg, l(a.filename), 1),
                e("span", gg, l(v(a.size)) + " • " + l(a.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", pg, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", hg, [
          e("div", yg, [
            u[9] || (u[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", wg, [
              u[8] || (u[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", kg, l(p.value) + " node" + l(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", bg, [
            (o(!0), s(W, null, ee(t.nodes.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              u[10] || (u[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", _g, l(a), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", $g, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", Cg, [
          u[11] || (u[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", xg, [
            t.gitBranch ? (o(), I(we, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                g(Wt, null, {
                  default: i(() => [
                    y(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (o(), I(we, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                g(lo, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Ig = /* @__PURE__ */ J(Sg, [["__scopeId", "data-v-182fe113"]]), Eg = { class: "import-options" }, Mg = { class: "options-container" }, zg = { class: "option-section" }, Lg = { class: "conflict-options" }, Tg = ["value", "checked", "onChange"], Rg = { class: "conflict-content" }, Dg = { class: "conflict-label" }, Ng = { class: "conflict-description" }, Og = { class: "option-section" }, Ug = { class: "component-toggles" }, Pg = /* @__PURE__ */ K({
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
    return (p, v) => (o(), s("div", Eg, [
      g(Oe, null, {
        default: i(() => [...v[4] || (v[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Mg, [
        e("div", zg, [
          g(Vt, null, {
            default: i(() => [...v[5] || (v[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Lg, [
            (o(), s(W, null, ee(r, (h) => e("label", {
              key: h.value,
              class: se(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (u) => n("update:conflictMode", h.value)
              }, null, 40, Tg),
              e("div", Rg, [
                e("span", Dg, l(h.label), 1),
                e("span", Ng, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Og, [
          g(Vt, null, {
            default: i(() => [...v[6] || (v[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Ug, [
            g(Ke, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                g(at, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": v[0] || (v[0] = (h) => n("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Ke, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                g(at, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": v[1] || (v[1] = (h) => n("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Ke, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                g(at, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": v[2] || (v[2] = (h) => n("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Ke, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                g(at, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": v[3] || (v[3] = (h) => n("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Bg = /* @__PURE__ */ J(Pg, [["__scopeId", "data-v-0ec212b0"]]), Fg = {
  key: 0,
  class: "import-empty"
}, Ag = { class: "import-help" }, Vg = {
  key: 1,
  class: "import-configure"
}, Wg = { class: "selected-file-bar" }, Gg = { class: "file-bar-content" }, jg = { class: "file-bar-info" }, Hg = { class: "file-bar-name" }, qg = { class: "file-bar-size" }, Kg = { class: "import-actions" }, Jg = {
  key: 2,
  class: "import-progress"
}, Yg = { class: "progress-content" }, Xg = { class: "progress-info" }, Qg = { class: "progress-title" }, Zg = { class: "progress-detail" }, ep = { class: "progress-bar" }, tp = { class: "progress-status" }, op = {
  key: 3,
  class: "import-complete"
}, sp = { class: "complete-message" }, np = { class: "complete-title" }, ap = { class: "complete-details" }, lp = { class: "complete-actions" }, ip = /* @__PURE__ */ K({
  __name: "ImportSection",
  setup(t) {
    const c = x(null), n = x(!1), r = x(!1), p = x(!1), v = x(""), h = x({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), u = x({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), a = x({
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
    }), m = B(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function C(b) {
      c.value = b;
    }
    function f() {
      c.value = null, r.value = !1, p.value = !1, v.value = "";
    }
    function k() {
      f(), n.value = !1, u.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function $() {
      if (c.value) {
        n.value = !0, r.value = !1;
        try {
          const b = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${a.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${a.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${a.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const w of b)
            u.value = w, await new Promise((F) => setTimeout(F, 800));
          u.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((w) => setTimeout(w, 500)), p.value = !0, v.value = `Successfully imported ${a.value.workflows.length} workflows, ${a.value.models.length} models, and ${a.value.nodes.length} custom nodes.`;
        } catch (b) {
          p.value = !1, v.value = b instanceof Error ? b.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function R(b) {
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (b, w) => (o(), I(Re, null, {
      header: i(() => [
        g(De, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !c.value && !n.value ? (o(), s("div", Fg, [
          g(Yf, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: C
          }),
          e("div", Ag, [
            g(Oe, null, {
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
        ])) : c.value && !n.value && !r.value ? (o(), s("div", Vg, [
          e("div", Wg, [
            e("div", Gg, [
              w[7] || (w[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", jg, [
                e("div", Hg, l(c.value.name), 1),
                e("div", qg, l(R(c.value.size)), 1)
              ])
            ]),
            g(Z, {
              variant: "ghost",
              size: "sm",
              onClick: f
            }, {
              default: i(() => [...w[8] || (w[8] = [
                y(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(Ig, {
            "source-environment": a.value.sourceEnvironment,
            workflows: a.value.workflows,
            models: a.value.models,
            nodes: a.value.nodes,
            "git-branch": a.value.gitBranch,
            "git-commit": a.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(Bg, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": w[0] || (w[0] = (F) => h.value.conflictMode = F),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": w[1] || (w[1] = (F) => h.value.includeWorkflows = F),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": w[2] || (w[2] = (F) => h.value.includeModels = F),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": w[3] || (w[3] = (F) => h.value.includeNodes = F),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": w[4] || (w[4] = (F) => h.value.includeGitHistory = F)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && a.value.models.length > 0 ? (o(), I(ut, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${a.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", Kg, [
            g(Z, {
              variant: "primary",
              size: "md",
              disabled: !m.value,
              onClick: $
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
            g(Z, {
              variant: "secondary",
              size: "md",
              onClick: f
            }, {
              default: i(() => [...w[10] || (w[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Jg, [
          e("div", Yg, [
            w[11] || (w[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Xg, [
              e("div", Qg, l(u.value.message), 1),
              e("div", Zg, l(u.value.detail), 1)
            ])
          ]),
          e("div", ep, [
            e("div", {
              class: "progress-bar-fill",
              style: Je({ width: `${u.value.percent}%` })
            }, null, 4)
          ]),
          e("div", tp, l(u.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", op, [
          e("div", {
            class: se(["complete-icon", p.value ? "success" : "error"])
          }, l(p.value ? "✓" : "✕"), 3),
          e("div", sp, [
            e("div", np, l(p.value ? "Import Successful" : "Import Failed"), 1),
            e("div", ap, l(v.value), 1)
          ]),
          e("div", lp, [
            g(Z, {
              variant: "primary",
              size: "md",
              onClick: k
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
}), rp = /* @__PURE__ */ J(ip, [["__scopeId", "data-v-18e18eb5"]]), dp = { class: "header-info" }, cp = { class: "commit-hash" }, up = {
  key: 0,
  class: "commit-refs"
}, mp = { class: "commit-message" }, vp = { class: "commit-date" }, fp = {
  key: 0,
  class: "loading"
}, gp = {
  key: 1,
  class: "changes-section"
}, pp = { class: "stats-row" }, hp = { class: "stat" }, yp = { class: "stat insertions" }, wp = { class: "stat deletions" }, kp = {
  key: 0,
  class: "change-group"
}, bp = {
  key: 1,
  class: "change-group"
}, _p = {
  key: 0,
  class: "version"
}, $p = {
  key: 2,
  class: "change-group"
}, Cp = { class: "change-item" }, xp = /* @__PURE__ */ K({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Ie(), r = x(null), p = x(!0), v = B(() => {
      if (!r.value) return !1;
      const u = r.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), h = B(() => {
      if (!r.value) return !1;
      const u = r.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return xe(async () => {
      try {
        r.value = await n(c.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (u, a) => (o(), I(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: a[3] || (a[3] = (m) => u.$emit("close"))
    }, {
      header: i(() => {
        var m, C, f, k;
        return [
          e("div", dp, [
            a[4] || (a[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", cp, l(((m = r.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((C = t.commit.hash) == null ? void 0 : C.slice(0, 7))), 1),
            (k = (f = r.value) == null ? void 0 : f.refs) != null && k.length ? (o(), s("span", up, [
              (o(!0), s(W, null, ee(r.value.refs, ($) => (o(), s("span", {
                key: $,
                class: "ref-badge"
              }, l($), 1))), 128))
            ])) : d("", !0)
          ]),
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = ($) => u.$emit("close"))
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
        var m, C;
        return [
          e("div", mp, l(((m = r.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", vp, l(((C = r.value) == null ? void 0 : C.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (o(), s("div", fp, "Loading details...")) : r.value ? (o(), s("div", gp, [
            e("div", pp, [
              e("span", hp, l(r.value.stats.files_changed) + " files", 1),
              e("span", yp, "+" + l(r.value.stats.insertions), 1),
              e("span", wp, "-" + l(r.value.stats.deletions), 1)
            ]),
            v.value ? (o(), s("div", kp, [
              g(xt, { variant: "section" }, {
                default: i(() => [...a[6] || (a[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(W, null, ee(r.value.changes.workflows.added, (f) => (o(), s("div", {
                key: "add-" + f,
                class: "change-item added"
              }, [
                a[7] || (a[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(f), 1)
              ]))), 128)),
              (o(!0), s(W, null, ee(r.value.changes.workflows.modified, (f) => (o(), s("div", {
                key: "mod-" + f,
                class: "change-item modified"
              }, [
                a[8] || (a[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(f), 1)
              ]))), 128)),
              (o(!0), s(W, null, ee(r.value.changes.workflows.deleted, (f) => (o(), s("div", {
                key: "del-" + f,
                class: "change-item deleted"
              }, [
                a[9] || (a[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(f), 1)
              ]))), 128))
            ])) : d("", !0),
            h.value ? (o(), s("div", bp, [
              g(xt, { variant: "section" }, {
                default: i(() => [...a[10] || (a[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(W, null, ee(r.value.changes.nodes.added, (f) => (o(), s("div", {
                key: "add-" + f.name,
                class: "change-item added"
              }, [
                a[11] || (a[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(f.name), 1),
                f.version ? (o(), s("span", _p, "(" + l(f.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (o(!0), s(W, null, ee(r.value.changes.nodes.removed, (f) => (o(), s("div", {
                key: "rem-" + f.name,
                class: "change-item deleted"
              }, [
                a[12] || (a[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(f.name), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", $p, [
              g(xt, { variant: "section" }, {
                default: i(() => [...a[13] || (a[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Cp, [
                a[14] || (a[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: a[1] || (a[1] = (m) => u.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...a[15] || (a[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(ie, {
          variant: "primary",
          onClick: a[2] || (a[2] = (m) => u.$emit("checkout", t.commit))
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
}), Sp = /* @__PURE__ */ J(xp, [["__scopeId", "data-v-d256ff6d"]]), Ip = { class: "dialog-message" }, Ep = {
  key: 0,
  class: "dialog-details"
}, Mp = {
  key: 1,
  class: "dialog-warning"
}, zp = /* @__PURE__ */ K({
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
    return (c, n) => (o(), I(tt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => c.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", Ip, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", Ep, [
          (o(!0), s(W, null, ee(t.details, (r, p) => (o(), s("div", {
            key: p,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : d("", !0),
        t.warning ? (o(), s("p", Mp, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + l(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => c.$emit("cancel"))
        }, {
          default: i(() => [
            y(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), I(ie, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => c.$emit("secondary"))
        }, {
          default: i(() => [
            y(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        g(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
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
}), Lp = /* @__PURE__ */ J(zp, [["__scopeId", "data-v-3670b9f5"]]), Tp = { class: "base-textarea-wrapper" }, Rp = ["value", "rows", "placeholder", "disabled", "maxlength"], Dp = {
  key: 0,
  class: "base-textarea-count"
}, Np = /* @__PURE__ */ K({
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
    return (c, n) => (o(), s("div", Tp, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = et($e((r) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = et($e((r) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Rp),
      t.showCharCount && t.maxLength ? (o(), s("div", Dp, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), eo = /* @__PURE__ */ J(Np, [["__scopeId", "data-v-5516e6fc"]]), Op = ["checked", "disabled"], Up = { class: "base-checkbox-box" }, Pp = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Bp = {
  key: 0,
  class: "base-checkbox-label"
}, Fp = /* @__PURE__ */ K({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", {
      class: se(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked))
      }, null, 40, Op),
      e("span", Up, [
        t.modelValue ? (o(), s("svg", Pp, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      c.$slots.default ? (o(), s("span", Bp, [
        ue(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), to = /* @__PURE__ */ J(Fp, [["__scopeId", "data-v-bf17c831"]]), Ap = { class: "popover-header" }, Vp = { class: "popover-body" }, Wp = {
  key: 0,
  class: "changes-summary"
}, Gp = {
  key: 0,
  class: "change-item"
}, jp = {
  key: 1,
  class: "change-item"
}, Hp = {
  key: 2,
  class: "change-item"
}, qp = {
  key: 3,
  class: "change-item"
}, Kp = {
  key: 4,
  class: "change-item"
}, Jp = {
  key: 1,
  class: "no-changes"
}, Yp = {
  key: 2,
  class: "loading"
}, Xp = {
  key: 3,
  class: "issues-error"
}, Qp = { class: "error-header" }, Zp = { class: "error-title" }, eh = { class: "issues-list" }, th = { class: "message-section" }, oh = { class: "popover-footer" }, sh = {
  key: 1,
  class: "commit-popover"
}, nh = { class: "popover-header" }, ah = { class: "popover-body" }, lh = {
  key: 0,
  class: "changes-summary"
}, ih = {
  key: 0,
  class: "change-item"
}, rh = {
  key: 1,
  class: "change-item"
}, dh = {
  key: 2,
  class: "change-item"
}, ch = {
  key: 3,
  class: "change-item"
}, uh = {
  key: 4,
  class: "change-item"
}, mh = {
  key: 1,
  class: "no-changes"
}, vh = {
  key: 2,
  class: "loading"
}, fh = {
  key: 3,
  class: "issues-error"
}, gh = { class: "error-header" }, ph = { class: "error-title" }, hh = { class: "issues-list" }, yh = { class: "message-section" }, wh = { class: "popover-footer" }, kh = /* @__PURE__ */ K({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, r = c, { commit: p } = Ie(), v = x(""), h = x(!1), u = x(!1), a = x(null), m = B(() => {
      if (!n.status) return !1;
      const R = n.status.workflows;
      return R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || n.status.has_changes;
    }), C = B(() => {
      var R;
      return (R = n.status) != null && R.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (b) => b.has_issues && (b.sync_state === "new" || b.sync_state === "modified")
      ) : [];
    }), f = B(() => C.value.length > 0), k = B(() => f.value && !u.value);
    async function $() {
      var R, b, w;
      if (!(f.value && !u.value) && !(!m.value || !v.value.trim() || h.value)) {
        h.value = !0, a.value = null;
        try {
          const F = await p(v.value.trim(), u.value);
          F.status === "success" ? (a.value = {
            type: "success",
            message: `Committed: ${((R = F.summary) == null ? void 0 : R.new) || 0} new, ${((b = F.summary) == null ? void 0 : b.modified) || 0} modified, ${((w = F.summary) == null ? void 0 : w.deleted) || 0} deleted`
          }, v.value = "", u.value = !1, setTimeout(() => r("committed"), 1e3)) : F.status === "no_changes" ? a.value = { type: "error", message: "No changes to commit" } : F.status === "blocked" ? a.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : a.value = { type: "error", message: F.message || "Commit failed" };
        } catch (F) {
          a.value = { type: "error", message: F instanceof Error ? F.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (R, b) => t.asModal ? (o(), I(ze, {
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
          e("div", Ap, [
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
          e("div", Vp, [
            t.status && m.value ? (o(), s("div", Wp, [
              t.status.workflows.new.length ? (o(), s("div", Gp, [
                b[12] || (b[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (o(), s("div", jp, [
                b[13] || (b[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Hp, [
                b[14] || (b[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", qp, [
                b[15] || (b[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Kp, [
                b[16] || (b[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0)
            ])) : t.status ? (o(), s("div", Jp, " No changes to commit ")) : (o(), s("div", Yp, " Loading... ")),
            f.value ? (o(), s("div", Xp, [
              e("div", Qp, [
                b[17] || (b[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Zp, l(C.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", eh, [
                (o(!0), s(W, null, ee(C.value, (w) => (o(), s("div", {
                  key: w.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(w.name), 1),
                  y(": " + l(w.issue_summary), 1)
                ]))), 128))
              ]),
              g(to, {
                modelValue: u.value,
                "onUpdate:modelValue": b[1] || (b[1] = (w) => u.value = w),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...b[18] || (b[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", th, [
              g(eo, {
                modelValue: v.value,
                "onUpdate:modelValue": b[2] || (b[2] = (w) => v.value = w),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || h.value || k.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            a.value ? (o(), s("div", {
              key: 4,
              class: se(["result", a.value.type])
            }, l(a.value.message), 3)) : d("", !0)
          ]),
          e("div", oh, [
            g(ie, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (w) => r("close"))
            }, {
              default: i(() => [...b[19] || (b[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: u.value ? "danger" : "primary",
              disabled: !m.value || !v.value.trim() || h.value || k.value,
              loading: h.value,
              onClick: $
            }, {
              default: i(() => [
                y(l(h.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", sh, [
      e("div", nh, [
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
      e("div", ah, [
        t.status && m.value ? (o(), s("div", lh, [
          t.status.workflows.new.length ? (o(), s("div", ih, [
            b[22] || (b[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (o(), s("div", rh, [
            b[23] || (b[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", dh, [
            b[24] || (b[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", ch, [
            b[25] || (b[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", uh, [
            b[26] || (b[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : t.status ? (o(), s("div", mh, " No changes to commit ")) : (o(), s("div", vh, " Loading... ")),
        f.value ? (o(), s("div", fh, [
          e("div", gh, [
            b[27] || (b[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", ph, l(C.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", hh, [
            (o(!0), s(W, null, ee(C.value, (w) => (o(), s("div", {
              key: w.name,
              class: "issue-item"
            }, [
              e("strong", null, l(w.name), 1),
              y(": " + l(w.issue_summary), 1)
            ]))), 128))
          ]),
          g(to, {
            modelValue: u.value,
            "onUpdate:modelValue": b[7] || (b[7] = (w) => u.value = w),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...b[28] || (b[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", yh, [
          g(eo, {
            modelValue: v.value,
            "onUpdate:modelValue": b[8] || (b[8] = (w) => v.value = w),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || h.value || k.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        a.value ? (o(), s("div", {
          key: 4,
          class: se(["result", a.value.type])
        }, l(a.value.message), 3)) : d("", !0)
      ]),
      e("div", wh, [
        g(ie, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (w) => r("close"))
        }, {
          default: i(() => [...b[29] || (b[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(ie, {
          variant: u.value ? "danger" : "primary",
          disabled: !m.value || !v.value.trim() || h.value || k.value,
          loading: h.value,
          onClick: $
        }, {
          default: i(() => [
            y(l(h.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), mo = /* @__PURE__ */ J(kh, [["__scopeId", "data-v-d92153de"]]), bh = { class: "modal-header" }, _h = { class: "modal-body" }, $h = { class: "switch-message" }, Ch = { class: "switch-details" }, xh = { class: "modal-actions" }, Sh = /* @__PURE__ */ K({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), I(ze, { to: "body" }, [
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
          e("div", bh, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", _h, [
            e("p", $h, [
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
            e("p", Ch, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", xh, [
            g(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Z, {
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
}), Ih = /* @__PURE__ */ J(Sh, [["__scopeId", "data-v-e9c5253e"]]), Eh = { class: "progress-bar" }, Mh = /* @__PURE__ */ K({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = B(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (r, p) => (o(), s("div", Eh, [
      e("div", {
        class: se(["progress-fill", t.variant]),
        style: Je({ width: n.value })
      }, null, 6)
    ]));
  }
}), zh = /* @__PURE__ */ J(Mh, [["__scopeId", "data-v-1beb0512"]]), Lh = {
  key: 0,
  class: "modal-overlay"
}, Th = { class: "modal-content" }, Rh = { class: "modal-body" }, Dh = { class: "progress-info" }, Nh = { class: "progress-percentage" }, Oh = { class: "progress-state" }, Uh = { class: "switch-steps" }, Ph = { class: "step-icon" }, Bh = { class: "step-label" }, Fh = /* @__PURE__ */ K({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = B(() => {
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
      return c.message || v[c.state] || c.state;
    }), r = B(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), p = B(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = v.findIndex((u) => u.state === c.state);
      return v.map((u, a) => {
        let m = "pending", C = "○";
        return a < h ? (m = "completed", C = "✓") : a === h && (m = "active", C = "⟳"), {
          ...u,
          status: m,
          icon: C
        };
      });
    });
    return (v, h) => (o(), I(ze, { to: "body" }, [
      t.show ? (o(), s("div", Lh, [
        e("div", Th, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Rh, [
            g(zh, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Dh, [
              e("div", Nh, l(t.progress) + "%", 1),
              e("div", Oh, l(n.value), 1)
            ]),
            e("div", Uh, [
              (o(!0), s(W, null, ee(p.value, (u) => (o(), s("div", {
                key: u.state,
                class: se(["switch-step", u.status])
              }, [
                e("span", Ph, l(u.icon), 1),
                e("span", Bh, l(u.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Ah = /* @__PURE__ */ J(Fh, [["__scopeId", "data-v-768a5078"]]), Vh = { class: "modal-header" }, Wh = { class: "modal-body" }, Gh = {
  key: 0,
  class: "node-section"
}, jh = { class: "node-list" }, Hh = {
  key: 1,
  class: "node-section"
}, qh = { class: "node-list" }, Kh = { class: "modal-actions" }, Jh = /* @__PURE__ */ K({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), I(ze, { to: "body" }, [
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
          e("div", Vh, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Wh, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Gh, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", jh, [
                (o(!0), s(W, null, ee(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Hh, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", qh, [
                (o(!0), s(W, null, ee(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + l(r), 1))), 128))
              ])
            ])) : d("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Kh, [
            g(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Z, {
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
}), Yh = /* @__PURE__ */ J(Jh, [["__scopeId", "data-v-7cad7518"]]), Xh = { class: "comfygit-panel" }, Qh = { class: "panel-header" }, Zh = { class: "header-left" }, e1 = {
  key: 0,
  class: "header-info"
}, t1 = { class: "header-actions" }, o1 = { class: "env-switcher" }, s1 = {
  key: 0,
  class: "header-info"
}, n1 = { class: "branch-name" }, a1 = { class: "panel-main" }, l1 = { class: "sidebar" }, i1 = { class: "sidebar-section" }, r1 = { class: "sidebar-section" }, d1 = { class: "sidebar-section" }, c1 = { class: "content-area" }, u1 = {
  key: 0,
  class: "error-message"
}, m1 = {
  key: 1,
  class: "loading"
}, v1 = {
  key: 4,
  class: "dialog-overlay"
}, f1 = { class: "dialog-content create-progress-dialog" }, g1 = { class: "dialog-body create-progress-body" }, p1 = { class: "create-progress-message" }, h1 = { class: "dialog-content env-selector-dialog" }, y1 = { class: "dialog-header" }, w1 = { class: "dialog-body" }, k1 = { class: "env-list" }, b1 = { class: "env-info" }, _1 = { class: "env-name-row" }, $1 = { class: "env-indicator" }, C1 = { class: "env-name" }, x1 = {
  key: 0,
  class: "env-branch"
}, S1 = {
  key: 1,
  class: "current-label"
}, I1 = { class: "env-stats" }, E1 = ["onClick"], M1 = { class: "toast-container" }, z1 = { class: "toast-icon" }, L1 = { class: "toast-message" }, T1 = /* @__PURE__ */ K({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = c, {
      getStatus: r,
      getHistory: p,
      getBranches: v,
      checkout: h,
      createBranch: u,
      switchBranch: a,
      deleteBranch: m,
      getEnvironments: C,
      switchEnvironment: f,
      getSwitchProgress: k,
      createEnvironment: $,
      getCreateProgress: R,
      deleteEnvironment: b,
      syncEnvironmentManually: w
    } = Ie(), F = io(), U = x(null), L = x([]), D = x([]), V = x([]), P = B(() => V.value.find((A) => A.is_current)), N = x(!1), z = x(null), S = x(null), M = x(!1), oe = x(null), q = x(null), te = x(!1), ae = x(!1), X = x(""), Y = x({ state: "idle", progress: 0, message: "" });
    let O = null, _ = null;
    const ne = x(!1), Q = x({ state: "idle", message: "" }), Se = x(null);
    let ye = null;
    const ge = x("status"), lt = x("this-env");
    function be(A, E) {
      ge.value = A, lt.value = E;
    }
    function ht(A) {
      const re = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[A];
      re && be(re.view, re.section);
    }
    function yt() {
      be("branches", "this-env");
    }
    function it() {
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
    const he = x(null), Ze = x(!1), He = x(!1), Ve = x([]);
    let wt = 0;
    function ce(A, E = "info", re = 3e3) {
      const ke = ++wt;
      return Ve.value.push({ id: ke, message: A, type: E }), re > 0 && setTimeout(() => {
        Ve.value = Ve.value.filter((Le) => Le.id !== ke);
      }, re), ke;
    }
    function Ue(A) {
      Ve.value = Ve.value.filter((E) => E.id !== A);
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
    const de = B(() => {
      if (!U.value) return "neutral";
      const A = U.value.workflows, E = A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || U.value.has_changes;
      return U.value.comparison.is_synced ? E ? "warning" : "success" : "error";
    });
    B(() => U.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function me() {
      N.value = !0, z.value = null;
      try {
        const [A, E, re, ke] = await Promise.all([
          r(!0),
          p(),
          v(),
          C()
        ]);
        U.value = A, L.value = E.commits, D.value = re.branches, V.value = ke, n("statusUpdate", A), oe.value && await oe.value.loadWorkflows(!0);
      } catch (A) {
        z.value = A instanceof Error ? A.message : "Failed to load status", U.value = null, L.value = [], D.value = [];
      } finally {
        N.value = !1;
      }
    }
    function Ee(A) {
      S.value = A;
    }
    async function ot(A) {
      var re;
      S.value = null;
      const E = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      he.value = {
        title: E ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: E ? "You have uncommitted changes that will be lost." : `Checkout commit ${A.short_hash || ((re = A.hash) == null ? void 0 : re.slice(0, 7))}?`,
        details: E ? Qt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: E,
        onConfirm: async () => {
          var Te;
          he.value = null, rt();
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
        details: E ? Qt() : void 0,
        warning: E ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, rt();
          const re = ce(`Switching to ${A}...`, "info", 0), ke = await a(A, E);
          Ue(re), ke.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function Dt(A) {
      const E = ce(`Creating branch ${A}...`, "info", 0), re = await u(A);
      Ue(E), re.status === "success" ? (ce(`Branch "${A}" created`, "success"), await me()) : ce(re.message || "Failed to create branch", "error");
    }
    async function Nt(A, E = !1) {
      const re = async (ke) => {
        var Te;
        const Le = ce(`Deleting branch ${A}...`, "info", 0);
        try {
          const le = await m(A, ke);
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
          const Ut = le instanceof Error ? le.message : "Failed to delete branch";
          Ut.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${A}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await re(!0);
            }
          } : ce(Ut, "error");
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
    async function Ot(A) {
      S.value = null;
      const E = prompt("Enter branch name:");
      if (E) {
        const re = ce(`Creating branch ${E}...`, "info", 0), ke = await u(E, A.hash);
        Ue(re), ke.status === "success" ? (ce(`Branch "${E}" created from ${A.short_hash}`, "success"), await me()) : ce(ke.message || "Failed to create branch", "error");
      }
    }
    function rt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function G() {
      he.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var A;
          he.value = null, rt(), ce("Restarting environment...", "info");
          try {
            (A = window.app) != null && A.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function T() {
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
    async function j(A) {
      M.value = !1, X.value = A, te.value = !0;
    }
    async function ve() {
      te.value = !1, ae.value = !0, rt(), Y.value = {
        progress: 10,
        state: _e(10),
        message: Pe(10)
      };
      try {
        await f(X.value), st(), Mt();
      } catch (A) {
        We(), ae.value = !1, ce(`Failed to initiate switch: ${A instanceof Error ? A.message : "Unknown error"}`, "error"), Y.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function _e(A) {
      return A >= 100 ? "complete" : A >= 80 ? "validating" : A >= 60 ? "starting" : A >= 30 ? "syncing" : "preparing";
    }
    function Pe(A) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[_e(A)] || "";
    }
    function st() {
      if (_) return;
      let A = 10;
      const E = 60, re = 5e3, ke = 100, Le = (E - A) / (re / ke);
      _ = window.setInterval(() => {
        if (A += Le, A >= E && (A = E, We()), Y.value.progress < E) {
          const Te = Math.floor(A);
          Y.value = {
            progress: Te,
            state: _e(Te),
            message: Pe(Te)
          };
        }
      }, ke);
    }
    function We() {
      _ && (clearInterval(_), _ = null);
    }
    function Mt() {
      O || (O = window.setInterval(async () => {
        try {
          let A = await F.getStatus();
          if ((!A || A.state === "idle") && (A = await k()), !A)
            return;
          const E = A.progress || 0;
          E >= 60 && We();
          const re = Math.max(E, Y.value.progress), ke = A.state && A.state !== "idle" && A.state !== "unknown", Le = ke ? A.state : _e(re), Te = ke && A.message || Pe(re);
          Y.value = {
            state: Le,
            progress: re,
            message: Te
          }, A.state === "complete" ? (We(), dt(), ae.value = !1, ce(`✓ Switched to ${X.value}`, "success"), await me(), X.value = "") : A.state === "rolled_back" ? (We(), dt(), ae.value = !1, ce("Switch failed, restored previous environment", "warning"), X.value = "") : A.state === "critical_failure" && (We(), dt(), ae.value = !1, ce(`Critical error during switch: ${A.message}`, "error"), X.value = "");
        } catch (A) {
          console.error("Failed to poll switch progress:", A);
        }
      }, 1e3));
    }
    function dt() {
      We(), O && (clearInterval(O), O = null);
    }
    function ho() {
      te.value = !1, X.value = "";
    }
    async function yo() {
      Ze.value = !1, await me(), ce("✓ Changes committed", "success");
    }
    async function wo() {
      He.value = !1;
      const A = ce("Syncing environment...", "info", 0);
      try {
        const E = await w("skip", !0);
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
      Se.value = A, ne.value = !0, Q.value = { state: "creating", message: `Creating environment '${A.name}'...` };
      try {
        const E = await $(A);
        E.status === "started" ? bo() : E.status === "error" && (ne.value = !1, ce(`Failed to create environment: ${E.message}. Check debug logs for details.`, "error"), Se.value = null);
      } catch (E) {
        ne.value = !1, ce(`Error creating environment: ${E instanceof Error ? E.message : "Unknown error"}. Check debug logs.`, "error"), Se.value = null;
      }
    }
    function bo() {
      ye || (ye = window.setInterval(async () => {
        var A;
        try {
          const E = await R();
          Q.value = { state: E.state, message: E.message }, E.state === "complete" ? (Xt(), ne.value = !1, ce(`✓ Environment '${E.environment_name}' created`, "success"), await me(), q.value && await q.value.loadEnvironments(), (A = Se.value) != null && A.switch_after && E.environment_name && await j(E.environment_name), Se.value = null) : E.state === "error" && (Xt(), ne.value = !1, ce(`Failed to create environment: ${E.error || E.message}. Check debug logs.`, "error"), Se.value = null);
        } catch (E) {
          console.error("Failed to poll create progress:", E);
        }
      }, 2e3));
    }
    function Xt() {
      ye && (clearInterval(ye), ye = null);
    }
    async function _o(A) {
      var E;
      if (((E = P.value) == null ? void 0 : E.name) === A) {
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
            const re = await b(A);
            re.status === "success" ? (ce(`Environment "${A}" deleted`, "success"), await me(), q.value && await q.value.loadEnvironments()) : ce(re.message || "Failed to delete environment", "error");
          } catch (re) {
            ce(`Error deleting environment: ${re instanceof Error ? re.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Qt() {
      if (!U.value) return [];
      const A = [], E = U.value.workflows;
      return E.new.length && A.push(`${E.new.length} new workflow(s)`), E.modified.length && A.push(`${E.modified.length} modified workflow(s)`), E.deleted.length && A.push(`${E.deleted.length} deleted workflow(s)`), A;
    }
    return xe(me), (A, E) => {
      var re, ke, Le, Te;
      return o(), s("div", Xh, [
        e("div", Qh, [
          e("div", Zh, [
            E[27] || (E[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            U.value ? (o(), s("div", e1)) : d("", !0)
          ]),
          e("div", t1, [
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
        e("div", o1, [
          e("div", { class: "env-switcher-header" }, [
            E[30] || (E[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: G
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: T
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: E[1] || (E[1] = (le) => be("environments", "all-envs"))
          }, [
            U.value ? (o(), s("div", s1, [
              e("span", null, l(((re = P.value) == null ? void 0 : re.name) || ((ke = U.value) == null ? void 0 : ke.environment) || "Loading..."), 1),
              e("span", n1, "(" + l(U.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            E[31] || (E[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", a1, [
          e("div", l1, [
            e("div", i1, [
              E[32] || (E[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "status" && lt.value === "this-env" }]),
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
            e("div", r1, [
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
            e("div", d1, [
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
          e("div", c1, [
            z.value ? (o(), s("div", u1, l(z.value), 1)) : !U.value && ge.value === "status" ? (o(), s("div", m1, " Loading status... ")) : (o(), s(W, { key: 2 }, [
              ge.value === "status" ? (o(), I(Zn, {
                key: 0,
                status: U.value,
                onSwitchBranch: yt,
                onCommitChanges: E[16] || (E[16] = (le) => Ze.value = !0),
                onSyncEnvironment: E[17] || (E[17] = (le) => He.value = !0),
                onViewWorkflows: E[18] || (E[18] = (le) => be("workflows", "this-env")),
                onViewHistory: E[19] || (E[19] = (le) => be("history", "this-env")),
                onViewDebug: E[20] || (E[20] = (le) => be("debug-env", "this-env"))
              }, null, 8, ["status"])) : ge.value === "workflows" ? (o(), I(cu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: oe,
                onRefresh: me
              }, null, 512)) : ge.value === "models-env" ? (o(), I(Hu, {
                key: 2,
                onNavigate: ht
              })) : ge.value === "branches" ? (o(), I(fa, {
                key: 3,
                branches: D.value,
                current: ((Le = U.value) == null ? void 0 : Le.branch) || null,
                onSwitch: Rt,
                onCreate: Dt,
                onDelete: Nt
              }, null, 8, ["branches", "current"])) : ge.value === "history" ? (o(), I(xa, {
                key: 4,
                commits: L.value,
                onSelect: Ee,
                onCheckout: ot
              }, null, 8, ["commits"])) : ge.value === "nodes" ? (o(), I(Dm, {
                key: 5,
                onOpenNodeManager: it
              })) : ge.value === "debug-env" ? (o(), I(Rv, { key: 6 })) : ge.value === "environments" ? (o(), I(Cf, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: q,
                onSwitch: j,
                onCreate: ko,
                onDelete: _o
              }, null, 512)) : ge.value === "model-index" ? (o(), I(mm, {
                key: 8,
                onRefresh: me
              })) : ge.value === "settings" ? (o(), I(Mv, { key: 9 })) : ge.value === "debug-workspace" ? (o(), I(Lv, { key: 10 })) : ge.value === "export" ? (o(), I(Df, { key: 11 })) : ge.value === "import" ? (o(), I(rp, { key: 12 })) : ge.value === "remotes" ? (o(), I(cv, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        S.value ? (o(), I(Sp, {
          key: 0,
          commit: S.value,
          onClose: E[21] || (E[21] = (le) => S.value = null),
          onCheckout: ot,
          onCreateBranch: Ot
        }, null, 8, ["commit"])) : d("", !0),
        he.value ? (o(), I(Lp, {
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
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        g(Ih, {
          show: te.value,
          "from-environment": ((Te = P.value) == null ? void 0 : Te.name) || "unknown",
          "to-environment": X.value,
          onConfirm: ve,
          onClose: ho
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ze.value && U.value ? (o(), I(mo, {
          key: 2,
          status: U.value,
          "as-modal": !0,
          onClose: E[23] || (E[23] = (le) => Ze.value = !1),
          onCommitted: yo
        }, null, 8, ["status"])) : d("", !0),
        He.value && U.value ? (o(), I(Yh, {
          key: 3,
          show: He.value,
          "mismatch-details": {
            missing_nodes: U.value.comparison.missing_nodes,
            extra_nodes: U.value.comparison.extra_nodes
          },
          onConfirm: wo,
          onClose: E[24] || (E[24] = (le) => He.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        g(Ah, {
          show: ae.value,
          state: Y.value.state,
          progress: Y.value.progress,
          message: Y.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ne.value ? (o(), s("div", v1, [
          e("div", f1, [
            E[39] || (E[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", g1, [
              E[37] || (E[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", p1, l(Q.value.message), 1),
              E[38] || (E[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : d("", !0),
        M.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: E[26] || (E[26] = $e((le) => M.value = !1, ["self"]))
        }, [
          e("div", h1, [
            e("div", y1, [
              E[41] || (E[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: E[25] || (E[25] = (le) => M.value = !1)
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
            e("div", w1, [
              E[42] || (E[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", k1, [
                (o(!0), s(W, null, ee(V.value, (le) => (o(), s("div", {
                  key: le.name,
                  class: se(["env-item", { current: le.is_current }])
                }, [
                  e("div", b1, [
                    e("div", _1, [
                      e("span", $1, l(le.is_current ? "●" : "○"), 1),
                      e("span", C1, l(le.name), 1),
                      le.current_branch ? (o(), s("span", x1, "(" + l(le.current_branch) + ")", 1)) : d("", !0),
                      le.is_current ? (o(), s("span", S1, "CURRENT")) : d("", !0)
                    ]),
                    e("div", I1, l(le.workflow_count) + " workflows • " + l(le.node_count) + " nodes ", 1)
                  ]),
                  le.is_current ? d("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ut) => j(le.name)
                  }, " SWITCH ", 8, E1))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        e("div", M1, [
          g(Eo, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(W, null, ee(Ve.value, (le) => (o(), s("div", {
                key: le.id,
                class: se(["toast", le.type])
              }, [
                e("span", z1, l(H(le.type)), 1),
                e("span", L1, l(le.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), R1 = /* @__PURE__ */ J(T1, [["__scopeId", "data-v-97ffaacd"]]), D1 = { class: "item-header" }, N1 = { class: "item-info" }, O1 = { class: "filename" }, U1 = { class: "metadata" }, P1 = { class: "size" }, B1 = {
  key: 0,
  class: "type"
}, F1 = { class: "item-actions" }, A1 = {
  key: 0,
  class: "progress-section"
}, V1 = { class: "progress-bar" }, W1 = { class: "progress-stats" }, G1 = { class: "downloaded" }, j1 = { class: "speed" }, H1 = {
  key: 0,
  class: "eta"
}, q1 = {
  key: 1,
  class: "status-msg paused"
}, K1 = {
  key: 2,
  class: "status-msg queued"
}, J1 = {
  key: 3,
  class: "status-msg completed"
}, Y1 = {
  key: 4,
  class: "status-msg failed"
}, X1 = {
  key: 0,
  class: "retries"
}, Q1 = /* @__PURE__ */ K({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function r(h) {
      if (h === 0) return "?";
      const u = h / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const u = Math.floor(h / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (h, u) => (o(), s("div", {
      class: se(["download-item", `status-${t.item.status}`])
    }, [
      e("div", D1, [
        e("div", N1, [
          e("div", O1, l(t.item.filename), 1),
          e("div", U1, [
            e("span", P1, l(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", B1, l(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", F1, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (a) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (a) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (a) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (a) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", A1, [
        e("div", V1, [
          e("div", {
            class: "progress-fill",
            style: Je({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", W1, [
          e("span", G1, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", j1, l(p(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", H1, l(v(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", q1, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", K1, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", J1, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", Y1, [
        y(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", X1, "(" + l(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), _t = /* @__PURE__ */ J(Q1, [["__scopeId", "data-v-2110df65"]]), Z1 = { class: "queue-title" }, ey = { class: "count" }, ty = { class: "queue-actions" }, oy = { class: "action-label" }, sy = {
  key: 0,
  class: "overall-progress"
}, ny = { class: "progress-bar" }, ay = {
  key: 0,
  class: "current-mini"
}, ly = { class: "filename" }, iy = { class: "speed" }, ry = {
  key: 1,
  class: "queue-content"
}, dy = {
  key: 0,
  class: "section"
}, cy = {
  key: 1,
  class: "section"
}, uy = { class: "section-header" }, my = { class: "section-label paused" }, vy = { class: "items-list" }, fy = {
  key: 2,
  class: "section"
}, gy = { class: "section-header" }, py = { class: "section-label" }, hy = { class: "items-list" }, yy = {
  key: 3,
  class: "section"
}, wy = { class: "section-header" }, ky = { class: "section-label" }, by = { class: "items-list" }, _y = {
  key: 4,
  class: "section"
}, $y = { class: "section-header" }, Cy = { class: "section-label failed" }, xy = { class: "items-list" }, Sy = /* @__PURE__ */ K({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: r,
      completedItems: p,
      failedItems: v,
      pausedItems: h,
      hasItems: u,
      activeCount: a,
      cancelDownload: m,
      retryDownload: C,
      resumeDownload: f,
      resumeAllPaused: k,
      removeItem: $,
      clearCompleted: R
    } = Et(), b = x(!1);
    let w = null;
    jt(
      () => ({
        active: a.value,
        failed: v.value.length,
        paused: h.value.length,
        completed: p.value.length
      }),
      (D, V) => {
        w && (clearTimeout(w), w = null);
        const P = D.active === 0 && D.failed === 0 && D.paused === 0 && D.completed > 0, N = V && (V.active > 0 || V.paused > 0);
        P && N && (w = setTimeout(() => {
          R(), w = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const F = B(() => {
      var P;
      if (c.items.length === 0) return 0;
      const D = p.value.length, V = ((P = n.value) == null ? void 0 : P.progress) || 0;
      return Math.round((D + V / 100) / c.items.length * 100);
    });
    function U(D) {
      m(D);
    }
    function L(D) {
      return D === 0 ? "" : `${(D / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (D, V) => (o(), I(ze, { to: "body" }, [
      fe(u) ? (o(), s("div", {
        key: 0,
        class: se(["model-download-queue", { minimized: !b.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: V[0] || (V[0] = (P) => b.value = !b.value)
        }, [
          e("div", Z1, [
            V[4] || (V[4] = e("span", { class: "icon" }, "↓", -1)),
            V[5] || (V[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", ey, "(" + l(fe(a)) + "/" + l(fe(c).items.length) + ")", 1)
          ]),
          e("div", ty, [
            e("span", oy, l(b.value ? "minimize" : "expand"), 1)
          ])
        ]),
        b.value ? (o(), s("div", ry, [
          fe(n) ? (o(), s("div", dy, [
            V[6] || (V[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(_t, {
              item: fe(n),
              onCancel: V[1] || (V[1] = (P) => U(fe(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          fe(h).length > 0 ? (o(), s("div", cy, [
            e("div", uy, [
              e("span", my, "Paused (" + l(fe(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: V[2] || (V[2] = //@ts-ignore
                (...P) => fe(k) && fe(k)(...P))
              }, "Resume All")
            ]),
            e("div", vy, [
              (o(!0), s(W, null, ee(fe(h), (P) => (o(), I(_t, {
                key: P.id,
                item: P,
                onResume: (N) => fe(f)(P.id),
                onRemove: (N) => fe($)(P.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          fe(r).length > 0 ? (o(), s("div", fy, [
            e("div", gy, [
              e("span", py, "Queued (" + l(fe(r).length) + ")", 1)
            ]),
            e("div", hy, [
              (o(!0), s(W, null, ee(fe(r), (P) => (o(), I(_t, {
                key: P.id,
                item: P,
                onCancel: (N) => U(P.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          fe(p).length > 0 ? (o(), s("div", yy, [
            e("div", wy, [
              e("span", ky, "Completed (" + l(fe(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: V[3] || (V[3] = //@ts-ignore
                (...P) => fe(R) && fe(R)(...P))
              }, "Clear")
            ]),
            e("div", by, [
              (o(!0), s(W, null, ee(fe(p).slice(0, 3), (P) => (o(), I(_t, {
                key: P.id,
                item: P,
                onRemove: (N) => fe($)(P.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          fe(v).length > 0 ? (o(), s("div", _y, [
            e("div", $y, [
              e("span", Cy, "Failed (" + l(fe(v).length) + ")", 1)
            ]),
            e("div", xy, [
              (o(!0), s(W, null, ee(fe(v), (P) => (o(), I(_t, {
                key: P.id,
                item: P,
                onRetry: (N) => fe(C)(P.id),
                onRemove: (N) => fe($)(P.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (o(), s("div", sy, [
          e("div", ny, [
            e("div", {
              class: "progress-fill",
              style: Je({ width: `${F.value}%` })
            }, null, 4)
          ]),
          fe(n) ? (o(), s("div", ay, [
            e("span", ly, l(fe(n).filename), 1),
            e("span", iy, l(L(fe(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), Iy = /* @__PURE__ */ J(Sy, [["__scopeId", "data-v-60751cfa"]]), Ey = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', My = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', zy = {
  comfy: Ey,
  phosphor: My
}, Jt = "comfy", vo = "comfygit-theme";
let nt = null, fo = Jt;
function Ly() {
  try {
    const t = localStorage.getItem(vo);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Jt;
}
function go(t = Jt) {
  nt && nt.remove(), nt = document.createElement("style"), nt.id = "comfygit-theme-styles", nt.setAttribute("data-theme", t), nt.textContent = zy[t], document.head.appendChild(nt), document.body.setAttribute("data-comfygit-theme", t), fo = t;
  try {
    localStorage.setItem(vo, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Ty() {
  return fo;
}
function Ry(t) {
  go(t);
}
const Yt = document.createElement("link");
Yt.rel = "stylesheet";
Yt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Yt);
const Dy = Ly();
go(Dy);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Ry(t);
  },
  getTheme: () => {
    const t = Ty();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Be = null, Ne = null, St = null, $t = null, oo = null;
const ft = x(null);
async function zt() {
  var t;
  if (!((t = vt) != null && t.api)) return null;
  try {
    const c = await vt.api.fetchApi("/v2/comfygit/status");
    c.ok && (ft.value = await c.json());
  } catch {
  }
}
function Ny() {
  if (!ft.value) return !1;
  const t = ft.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || ft.value.has_changes;
}
function Oy() {
  Be && Be.remove(), Be = document.createElement("div"), Be.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Be.appendChild(t), Be.addEventListener("click", (r) => {
    r.target === Be && At();
  });
  const c = (r) => {
    r.key === "Escape" && (At(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), Ht({
    render: () => qt(R1, {
      onClose: At,
      onStatusUpdate: (r) => {
        ft.value = r, It();
      }
    })
  }).mount(t), document.body.appendChild(Be);
}
function At() {
  Be && (Be.remove(), Be = null);
}
function Uy(t) {
  Ct(), Ne = document.createElement("div"), Ne.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Ne.style.position = "fixed", Ne.style.top = `${c.bottom + 8}px`, Ne.style.right = `${window.innerWidth - c.right}px`, Ne.style.zIndex = "10001";
  const n = (p) => {
    Ne && !Ne.contains(p.target) && p.target !== t && (Ct(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (p) => {
    p.key === "Escape" && (Ct(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), St = Ht({
    render: () => qt(mo, {
      status: ft.value,
      onClose: Ct,
      onCommitted: () => {
        Ct(), zt().then(It);
      }
    })
  }), St.mount(Ne), document.body.appendChild(Ne);
}
function Ct() {
  St && (St.unmount(), St = null), Ne && (Ne.remove(), Ne = null);
}
function Py() {
  $t || ($t = document.createElement("div"), $t.className = "comfygit-download-queue-root", oo = Ht({
    render: () => qt(Iy)
  }), oo.mount($t), document.body.appendChild($t), console.log("[ComfyGit] Model download queue mounted"));
}
let qe = null;
function It() {
  if (!qe) return;
  const t = qe.querySelector(".commit-indicator");
  t && (t.style.display = Ny() ? "block" : "none");
}
const po = document.createElement("style");
po.textContent = `
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
document.head.appendChild(po);
vt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Oy, qe = document.createElement("button"), qe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", qe.innerHTML = 'Commit <span class="commit-indicator"></span>', qe.title = "Quick Commit", qe.onclick = () => Uy(qe), t.appendChild(c), t.appendChild(qe), (v = (p = vt.menu) == null ? void 0 : p.settingsGroup) != null && v.element && (vt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Py();
    const { loadPendingDownloads: n } = Et();
    n(), await zt(), It(), setInterval(async () => {
      await zt(), It();
    }, 3e4);
    const r = vt.api;
    if (r) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((m) => {
          (m.startsWith("workflow:") || m.startsWith("Comfy.OpenWorkflowsPaths:") || m.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(m);
        }), window.location.reload();
      }, u = function() {
        const m = document.createElement("div");
        m.style.cssText = `
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
        const C = document.createElement("span");
        C.textContent = "Workflows updated - refresh required", m.appendChild(C);
        const f = document.createElement("button");
        f.textContent = "Refresh", f.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, f.onmouseover = () => f.style.background = "var(--comfy-input-bg)", f.onmouseout = () => f.style.background = "var(--comfy-menu-bg)", f.onclick = () => h(), m.appendChild(f);
        const k = document.createElement("button");
        k.textContent = "×", k.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => m.remove(), m.appendChild(k), document.body.appendChild(m), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (m) => {
        const { change_type: C, workflow_name: f } = m.detail;
        console.log(`[ComfyGit] Workflow ${C}: ${f}`), await zt(), It();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let a = !1;
      r.addEventListener("status", async (m) => {
        const C = m.detail != null;
        C && !a && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : u()), a = C;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
