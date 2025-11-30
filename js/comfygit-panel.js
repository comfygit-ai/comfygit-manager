import { app as ft } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as _e, createBlock as M, resolveDynamicComponent as as, normalizeClass as ae, withCtx as l, toDisplayString as a, createVNode as k, createTextVNode as y, computed as P, Fragment as A, renderList as ee, normalizeStyle as at, ref as _, onMounted as De, watch as gt, Teleport as Fe, withModifiers as Te, Transition as qs, createSlots as Bt, withKeys as pt, reactive as Jt, onUnmounted as ks, readonly as Hs, unref as be, withDirectives as Ue, vModelText as Dt, vModelRadio as jt, vModelCheckbox as Ht, nextTick as Ks, vModelSelect as Ct, TransitionGroup as Ys, createApp as ls, h as is } from "vue";
const Js = { class: "panel-layout" }, Qs = {
  key: 0,
  class: "panel-layout-header"
}, Xs = {
  key: 1,
  class: "panel-layout-search"
}, Zs = { class: "panel-layout-content" }, eo = {
  key: 2,
  class: "panel-layout-footer"
}, to = /* @__PURE__ */ X({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (s(), o("div", Js, [
      u.$slots.header ? (s(), o("div", Qs, [
        _e(u.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      u.$slots.search ? (s(), o("div", Xs, [
        _e(u.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", Zs, [
        _e(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (s(), o("div", eo, [
        _e(u.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Z = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, w] of u)
    n[r] = w;
  return n;
}, Ge = /* @__PURE__ */ Z(to, [["__scopeId", "data-v-21565df9"]]), so = {
  key: 0,
  class: "panel-title-prefix"
}, oo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, no = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (s(), M(as(`h${t.level}`), {
      class: ae(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", so, a(t.prefix), 1)) : (s(), o("span", oo)),
        _e(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ao = /* @__PURE__ */ Z(no, [["__scopeId", "data-v-c3875efc"]]), lo = ["title"], io = ["width", "height"], ro = /* @__PURE__ */ X({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => u.$emit("click"))
    }, [
      (s(), o("svg", {
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
      ])], 8, io))
    ], 8, lo));
  }
}), bs = /* @__PURE__ */ Z(ro, [["__scopeId", "data-v-6fc7f16d"]]), co = { class: "header-left" }, uo = {
  key: 0,
  class: "header-actions"
}, mo = /* @__PURE__ */ X({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: ae(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", co, [
        k(ao, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), M(bs, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : d("", !0)
      ]),
      u.$slots.actions ? (s(), o("div", uo, [
        _e(u.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ Z(mo, [["__scopeId", "data-v-55a62cd6"]]), vo = {
  key: 0,
  class: "section-title-count"
}, fo = {
  key: 1,
  class: "section-title-icon"
}, go = /* @__PURE__ */ X({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), M(as(`h${t.level}`), {
      class: ae(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, {
      default: l(() => [
        _e(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", vo, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", fo, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xe = /* @__PURE__ */ Z(go, [["__scopeId", "data-v-559361eb"]]), po = { class: "status-grid" }, ho = { class: "status-grid__columns" }, yo = { class: "status-grid__column" }, wo = { class: "status-grid__title" }, ko = { class: "status-grid__column status-grid__column--right" }, bo = { class: "status-grid__title" }, _o = {
  key: 0,
  class: "status-grid__footer"
}, $o = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (s(), o("div", po, [
      e("div", ho, [
        e("div", yo, [
          e("h4", wo, a(t.leftTitle), 1),
          _e(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", ko, [
          e("h4", bo, a(t.rightTitle), 1),
          _e(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (s(), o("div", _o, [
        _e(u.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Co = /* @__PURE__ */ Z($o, [["__scopeId", "data-v-73b7ba3f"]]), xo = {
  key: 0,
  class: "status-item__icon"
}, So = {
  key: 1,
  class: "status-item__count"
}, Io = { class: "status-item__label" }, Eo = /* @__PURE__ */ X({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = P(() => `status-item--${u.variant}`);
    return (r, w) => (s(), o("div", {
      class: ae(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", xo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", So, a(t.count), 1)) : d("", !0),
      e("span", Io, a(t.label), 1)
    ], 2));
  }
}), ot = /* @__PURE__ */ Z(Eo, [["__scopeId", "data-v-6f929183"]]), Mo = { class: "issue-card__header" }, To = { class: "issue-card__icon" }, Ro = { class: "issue-card__title" }, zo = {
  key: 0,
  class: "issue-card__content"
}, Lo = {
  key: 0,
  class: "issue-card__description"
}, Po = {
  key: 1,
  class: "issue-card__items"
}, Do = {
  key: 2,
  class: "issue-card__actions"
}, No = /* @__PURE__ */ X({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = P(() => `issue-card--${u.severity}`);
    return (r, w) => (s(), o("div", {
      class: ae(["issue-card", n.value])
    }, [
      e("div", Mo, [
        e("span", To, a(t.icon), 1),
        e("h4", Ro, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (s(), o("div", zo, [
        t.description ? (s(), o("p", Lo, a(t.description), 1)) : d("", !0),
        _e(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Po, [
        (s(!0), o(A, null, ee(t.items, (g, v) => (s(), o("div", {
          key: v,
          class: "issue-card__item"
        }, [
          w[0] || (w[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      r.$slots.actions ? (s(), o("div", Do, [
        _e(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ Z(No, [["__scopeId", "data-v-df6aa348"]]), Uo = ["type", "disabled"], Oo = {
  key: 0,
  class: "spinner"
}, Bo = /* @__PURE__ */ X({
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
    return (u, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ae(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (s(), o("span", Oo)) : d("", !0),
      t.loading ? d("", !0) : _e(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Uo));
  }
}), te = /* @__PURE__ */ Z(Bo, [["__scopeId", "data-v-772abe47"]]), Fo = { class: "empty-state" }, Ao = {
  key: 0,
  class: "empty-icon"
}, Vo = { class: "empty-message" }, Wo = /* @__PURE__ */ X({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (s(), o("div", Fo, [
      t.icon ? (s(), o("div", Ao, a(t.icon), 1)) : d("", !0),
      e("p", Vo, a(t.message), 1),
      t.actionLabel ? (s(), M(te, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("action"))
      }, {
        default: l(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), st = /* @__PURE__ */ Z(Wo, [["__scopeId", "data-v-4466284f"]]), jo = /* @__PURE__ */ X({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: ae(["detail-label"]),
      style: at({ minWidth: t.minWidth })
    }, [
      _e(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ Z(jo, [["__scopeId", "data-v-75e9eeb8"]]), Go = /* @__PURE__ */ X({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: ae(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      _e(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ts = /* @__PURE__ */ Z(Go, [["__scopeId", "data-v-2f186e4c"]]), qo = { class: "detail-row" }, Ho = /* @__PURE__ */ X({
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
    return (u, n) => (s(), o("div", qo, [
      k(Gt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), M(ts, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : _e(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ze = /* @__PURE__ */ Z(Ho, [["__scopeId", "data-v-ef15664a"]]), Ko = { class: "modal-header" }, Yo = { class: "modal-body" }, Jo = { class: "status-section" }, Qo = {
  key: 0,
  class: "status-section"
}, Xo = { class: "section-header-row" }, Zo = {
  key: 0,
  class: "workflow-group"
}, en = { class: "workflow-group-header" }, tn = { class: "workflow-group-title" }, sn = { class: "workflow-list" }, on = { class: "workflow-name" }, nn = { class: "workflow-issue" }, an = {
  key: 1,
  class: "workflow-group"
}, ln = { class: "workflow-group-header" }, rn = { class: "workflow-group-title" }, dn = { class: "workflow-list" }, cn = { class: "workflow-name" }, un = { class: "workflow-issue" }, mn = {
  key: 2,
  class: "workflow-group"
}, vn = { class: "workflow-group-header" }, fn = { class: "workflow-group-title" }, gn = { class: "workflow-list" }, pn = { class: "workflow-name" }, hn = {
  key: 3,
  class: "workflow-group"
}, yn = { class: "workflow-group-header" }, wn = { class: "workflow-group-title" }, kn = { class: "workflow-list" }, bn = { class: "workflow-name" }, _n = {
  key: 4,
  class: "workflow-group"
}, $n = { class: "workflow-group-header" }, Cn = { class: "workflow-group-title" }, xn = { class: "workflow-list" }, Sn = { class: "workflow-name" }, In = {
  key: 5,
  class: "workflow-group"
}, En = { class: "workflow-group-title" }, Mn = { class: "expand-icon" }, Tn = {
  key: 0,
  class: "workflow-list"
}, Rn = { class: "workflow-name" }, zn = {
  key: 1,
  class: "status-section"
}, Ln = {
  key: 0,
  class: "change-group"
}, Pn = { class: "change-group-header" }, Dn = { class: "change-group-title" }, Nn = { class: "change-list" }, Un = { class: "node-name" }, On = {
  key: 0,
  class: "dev-badge"
}, Bn = {
  key: 1,
  class: "change-group"
}, Fn = { class: "change-group-header" }, An = { class: "change-group-title" }, Vn = { class: "change-list" }, Wn = { class: "node-name" }, jn = {
  key: 0,
  class: "dev-badge"
}, Gn = {
  key: 2,
  class: "change-group"
}, qn = { class: "change-list" }, Hn = { class: "change-item" }, Kn = { class: "node-name" }, Yn = {
  key: 3,
  class: "change-group"
}, Jn = {
  key: 2,
  class: "status-section"
}, Qn = { class: "section-header-row" }, Xn = {
  key: 0,
  class: "drift-item"
}, Zn = { class: "drift-list" }, ea = {
  key: 0,
  class: "drift-list-more"
}, ta = {
  key: 1,
  class: "drift-item"
}, sa = { class: "drift-list" }, oa = {
  key: 0,
  class: "drift-list-more"
}, na = {
  key: 2,
  class: "drift-item"
}, aa = {
  key: 3,
  class: "drift-item"
}, la = {
  key: 3,
  class: "status-section"
}, ia = { class: "info-box" }, ra = { class: "drift-list" }, da = {
  key: 0,
  class: "drift-list-more"
}, ca = {
  key: 4,
  class: "status-section"
}, ua = { class: "warning-box" }, ma = {
  key: 5,
  class: "empty-state-inline"
}, va = { class: "modal-actions" }, fa = /* @__PURE__ */ X({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = _(!1);
    De(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), gt(() => u.show, (b, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", b);
    }, { immediate: !0 });
    const r = P(() => {
      var b, $, z;
      return ((z = ($ = (b = u.status) == null ? void 0 : b.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : z.filter(
        (V) => V.status === "broken" && V.sync_state === "synced"
      )) || [];
    }), w = P(() => {
      var b, $, z;
      return ((z = ($ = (b = u.status) == null ? void 0 : b.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : z.filter(
        (V) => V.status === "broken" && V.sync_state !== "synced"
      )) || [];
    }), g = P(() => {
      var b, $, z;
      return ((z = ($ = (b = u.status) == null ? void 0 : b.workflows) == null ? void 0 : $.synced) == null ? void 0 : z.filter((V) => {
        var x, L, T;
        const f = (T = (L = (x = u.status) == null ? void 0 : x.workflows) == null ? void 0 : L.analyzed) == null ? void 0 : T.find((C) => C.name === V);
        return !f || f.status !== "broken";
      })) || [];
    }), v = P(() => {
      var b, $, z, V, f;
      return (b = u.status) != null && b.workflows ? ((($ = u.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((z = u.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((V = u.status.workflows.deleted) == null ? void 0 : V.length) ?? 0) > 0 || (((f = u.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), m = P(() => {
      var $, z, V;
      const b = ($ = u.status) == null ? void 0 : $.git_changes;
      return b ? (((z = b.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((V = b.nodes_removed) == null ? void 0 : V.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), i = P(() => {
      var b, $, z, V, f, x;
      return !v.value && !m.value && (($ = (b = u.status) == null ? void 0 : b.comparison) == null ? void 0 : $.is_synced) && (((z = u.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((x = (f = (V = u.status) == null ? void 0 : V.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), c = P(() => {
      var $, z;
      const b = (z = ($ = u.status) == null ? void 0 : $.git_changes) == null ? void 0 : z.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function p(b) {
      return typeof b == "string" ? b : b.name;
    }
    function h(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, $) => {
      var z, V, f, x, L, T, C, W, j, Y, D, S, E, O, R, K, he, ce, oe, F, I, ne;
      return s(), M(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (se) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = Te(() => {
            }, ["stop"]))
          }, [
            e("div", Ko, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (se) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", Yo, [
              e("div", Jo, [
                k(Xe, { level: "4" }, {
                  default: l(() => [...$[8] || ($[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(ze, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              v.value ? (s(), o("div", Qo, [
                e("div", Xo, [
                  k(Xe, { level: "4" }, {
                    default: l(() => [...$[9] || ($[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (se) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (s(), o("div", Zo, [
                  e("div", en, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", tn, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", sn, [
                    (s(!0), o(A, null, ee(r.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", on, a(se.name), 1),
                      e("span", nn, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                w.value.length ? (s(), o("div", an, [
                  e("div", ln, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", rn, "BROKEN (UNCOMMITTED) (" + a(w.value.length) + ")", 1)
                  ]),
                  e("div", dn, [
                    (s(!0), o(A, null, ee(w.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", cn, a(se.name), 1),
                      e("span", un, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (V = (z = t.status.workflows) == null ? void 0 : z.new) != null && V.length ? (s(), o("div", mn, [
                  e("div", vn, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", fn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", gn, [
                    (s(!0), o(A, null, ee(t.status.workflows.new, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", pn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (x = (f = t.status.workflows) == null ? void 0 : f.modified) != null && x.length ? (s(), o("div", hn, [
                  e("div", yn, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", wn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (s(!0), o(A, null, ee(t.status.workflows.modified, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", bn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (T = (L = t.status.workflows) == null ? void 0 : L.deleted) != null && T.length ? (s(), o("div", _n, [
                  e("div", $n, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Cn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", xn, [
                    (s(!0), o(A, null, ee(t.status.workflows.deleted, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Sn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", In, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (se) => n.value = !n.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", En, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", Mn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", Tn, [
                    (s(!0), o(A, null, ee(g.value, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Rn, a(se), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              m.value ? (s(), o("div", zn, [
                k(Xe, { level: "4" }, {
                  default: l(() => [...$[16] || ($[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (W = (C = t.status.git_changes) == null ? void 0 : C.nodes_added) != null && W.length ? (s(), o("div", Ln, [
                  e("div", Pn, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Dn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Nn, [
                    (s(!0), o(A, null, ee(t.status.git_changes.nodes_added, (se) => (s(), o("div", {
                      key: p(se),
                      class: "change-item"
                    }, [
                      e("span", Un, a(p(se)), 1),
                      h(se) ? (s(), o("span", On, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (Y = (j = t.status.git_changes) == null ? void 0 : j.nodes_removed) != null && Y.length ? (s(), o("div", Bn, [
                  e("div", Fn, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", An, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Vn, [
                    (s(!0), o(A, null, ee(t.status.git_changes.nodes_removed, (se) => (s(), o("div", {
                      key: p(se),
                      class: "change-item"
                    }, [
                      e("span", Wn, a(p(se)), 1),
                      h(se) ? (s(), o("span", jn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (D = t.status.git_changes) != null && D.workflow_changes ? (s(), o("div", Gn, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", qn, [
                    e("div", Hn, [
                      e("span", Kn, a(c.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (S = t.status.git_changes) != null && S.has_other_changes ? (s(), o("div", Yn, [...$[20] || ($[20] = [
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
              (E = t.status.comparison) != null && E.is_synced ? d("", !0) : (s(), o("div", Jn, [
                e("div", Qn, [
                  k(Xe, { level: "4" }, {
                    default: l(() => [...$[21] || ($[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (se) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[22] || ($[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (R = (O = t.status.comparison) == null ? void 0 : O.missing_nodes) != null && R.length ? (s(), o("div", Xn, [
                  k(ze, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Zn, [
                    (s(!0), o(A, null, ee(t.status.comparison.missing_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ea, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (he = (K = t.status.comparison) == null ? void 0 : K.extra_nodes) != null && he.length ? (s(), o("div", ta, [
                  k(ze, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", sa, [
                    (s(!0), o(A, null, ee(t.status.comparison.extra_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", oa, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (oe = (ce = t.status.comparison) == null ? void 0 : ce.version_mismatches) != null && oe.length ? (s(), o("div", na, [
                  k(ze, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (F = t.status.comparison) != null && F.packages_in_sync ? d("", !0) : (s(), o("div", aa, [
                  k(ze, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ne = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && ne.length ? (s(), o("div", la, [
                k(Xe, { level: "4" }, {
                  default: l(() => [...$[23] || ($[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ia, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", ra, [
                  (s(!0), o(A, null, ee(t.status.comparison.disabled_nodes.slice(0, 10), (se) => (s(), o("div", {
                    key: se,
                    class: "drift-list-item"
                  }, " • " + a(se), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", da, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", ca, [
                k(Xe, { level: "4" }, {
                  default: l(() => [...$[25] || ($[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", ua, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              i.value ? (s(), o("div", ma, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", va, [
              k(te, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (se) => b.$emit("close"))
              }, {
                default: l(() => [...$[29] || ($[29] = [
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
}), ga = /* @__PURE__ */ Z(fa, [["__scopeId", "data-v-c67eed17"]]), pa = { class: "health-section-header" }, ha = { class: "suggestions-content" }, ya = { class: "suggestions-text" }, wa = { style: { "margin-top": "var(--cg-space-3)" } }, ka = {
  key: 1,
  class: "no-issues-text"
}, ba = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: u, emit: n }) {
    const r = t, w = _(!1), g = _(!1);
    function v() {
      w.value = !0;
    }
    function m() {
      w.value = !1, c("view-workflows");
    }
    function i() {
      w.value = !1, c("view-nodes");
    }
    const c = n, p = _(!1), h = P(() => {
      const O = r.status.workflows.analyzed || [], R = O.filter(
        (K) => K.unresolved_models_count > 0 || K.ambiguous_models_count > 0
      );
      return R.length === 0 && r.status.missing_models_count > 0 ? O.filter((K) => K.sync_state === "synced") : R;
    });
    function b() {
      const O = h.value;
      O.length !== 0 && (p.value = !0, c("repair-missing-models", O.map((R) => R.name)));
    }
    function $() {
      p.value = !1;
    }
    u({ resetRepairingState: $ });
    const z = P(() => r.status.workflows.new.length > 0 || r.status.workflows.modified.length > 0 || r.status.workflows.deleted.length > 0), V = P(() => r.status.has_changes), f = P(() => {
      const O = r.status.git_changes;
      return O.nodes_added.length > 0 || O.nodes_removed.length > 0 || O.workflow_changes;
    }), x = P(() => r.status.has_changes || z.value), L = P(() => Object.keys(r.status.git_changes.workflow_changes_detail).length), T = P(() => r.status.git_changes.has_other_changes), C = P(() => {
      var O;
      return ((O = r.status.workflows.analyzed) == null ? void 0 : O.filter((R) => R.status === "broken")) || [];
    }), W = P(() => {
      var O;
      return ((O = r.status.workflows.analyzed) == null ? void 0 : O.filter(
        (R) => R.has_path_sync_issues && !R.has_issues
      )) || [];
    }), j = P(() => C.value.length > 0), Y = P(() => j.value || W.value.length > 0 || r.status.missing_models_count > 0 || !r.status.comparison.is_synced || r.status.has_legacy_manager), D = P(() => {
      const O = [];
      return r.status.workflows.new.length > 0 && O.push(`${r.status.workflows.new.length} new`), r.status.workflows.modified.length > 0 && O.push(`${r.status.workflows.modified.length} modified`), r.status.workflows.deleted.length > 0 && O.push(`${r.status.workflows.deleted.length} deleted`), O.length > 0 ? `${O.join(", ")} workflow${O.length === 1 && !O[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), S = P(() => {
      var K, he;
      const O = [], R = r.status.comparison;
      return (K = R.missing_nodes) != null && K.length && O.push(`${R.missing_nodes.length} missing node${R.missing_nodes.length === 1 ? "" : "s"}`), (he = R.extra_nodes) != null && he.length && O.push(`${R.extra_nodes.length} untracked node${R.extra_nodes.length === 1 ? "" : "s"}`), O.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${O.join(" and ")}.`;
    }), E = P(() => {
      var K, he;
      const O = [], R = r.status.comparison;
      return (K = R.extra_nodes) != null && K.length && (R.extra_nodes.slice(0, 3).forEach((ce) => {
        O.push(`Untracked: ${ce}`);
      }), R.extra_nodes.length > 3 && O.push(`...and ${R.extra_nodes.length - 3} more untracked`)), (he = R.missing_nodes) != null && he.length && (R.missing_nodes.slice(0, 3).forEach((ce) => {
        O.push(`Missing: ${ce}`);
      }), R.missing_nodes.length > 3 && O.push(`...and ${R.missing_nodes.length - 3} more missing`)), O;
    });
    return (O, R) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, { title: "STATUS" })
        ]),
        content: l(() => [
          r.setupState === "no_workspace" ? (s(), M(Ze, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: R[0] || (R[0] = (K) => O.$emit("start-setup"))
              }, {
                default: l(() => [...R[13] || (R[13] = [
                  y(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r.setupState === "unmanaged" ? (s(), M(Ze, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: R[1] || (R[1] = (K) => O.$emit("view-environments"))
              }, {
                default: l(() => [...R[14] || (R[14] = [
                  y(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r.setupState === "empty_workspace" ? (s(), M(Ze, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: R[2] || (R[2] = (K) => O.$emit("create-environment"))
              }, {
                default: l(() => [...R[15] || (R[15] = [
                  y(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: R[4] || (R[4] = (K) => g.value = !0),
            onMouseleave: R[5] || (R[5] = (K) => g.value = !1)
          }, [
            e("div", pa, [
              k(Xe, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...R[16] || (R[16] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(qs, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), M(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: l(() => [...R[17] || (R[17] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            k(Co, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Bt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), M(ot, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), M(ot, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), M(ot, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                k(ot, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), M(ot, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), M(ot, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), M(ot, {
                  key: 2,
                  icon: "●",
                  count: L.value,
                  label: L.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                T.value ? (s(), M(ot, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                V.value && !f.value && !T.value ? (s(), M(ot, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                V.value ? d("", !0) : (s(), M(ot, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              x.value ? {
                name: "footer",
                fn: l(() => [
                  R[19] || (R[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", ha, [
                    e("span", ya, a(D.value), 1),
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: R[3] || (R[3] = (K) => O.$emit("commit-changes"))
                    }, {
                      default: l(() => [...R[18] || (R[18] = [
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
          t.status.is_detached_head ? (s(), M(Ze, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: R[6] || (R[6] = (K) => O.$emit("create-branch"))
              }, {
                default: l(() => [...R[20] || (R[20] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", wa, [
            k(Xe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...R[21] || (R[21] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            Y.value ? (s(), o(A, { key: 0 }, [
              C.value.length > 0 ? (s(), M(Ze, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${C.value.length} workflow${C.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: C.value.map((K) => `${K.name} — ${K.issue_summary}`)
              }, {
                actions: l(() => [
                  k(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: R[7] || (R[7] = (K) => O.$emit("view-workflows"))
                  }, {
                    default: l(() => [...R[22] || (R[22] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              W.value.length > 0 ? (s(), M(Ze, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${W.value.length} workflow${W.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: W.value.map((K) => `${K.name} — ${K.models_needing_path_sync_count} model path${K.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  k(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: R[8] || (R[8] = (K) => O.$emit("view-workflows"))
                  }, {
                    default: l(() => [...R[23] || (R[23] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !j.value ? (s(), M(Ze, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  k(te, {
                    variant: "primary",
                    size: "sm",
                    disabled: p.value,
                    onClick: b
                  }, {
                    default: l(() => [
                      y(a(p.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: R[9] || (R[9] = (K) => O.$emit("view-workflows"))
                  }, {
                    default: l(() => [...R[24] || (R[24] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), M(Ze, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: S.value,
                items: E.value
              }, {
                actions: l(() => [
                  k(te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: v
                  }, {
                    default: l(() => [...R[25] || (R[25] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: R[10] || (R[10] = (K) => O.$emit("view-nodes"))
                  }, {
                    default: l(() => [...R[26] || (R[26] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), M(Ze, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  k(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: R[11] || (R[11] = (K) => O.$emit("view-nodes"))
                  }, {
                    default: l(() => [...R[27] || (R[27] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : x.value ? (s(), o("span", ka, "No issues")) : (s(), M(st, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(ga, {
        show: w.value,
        status: t.status,
        onClose: R[12] || (R[12] = (K) => w.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: i
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), _a = /* @__PURE__ */ Z(ba, [["__scopeId", "data-v-0398c02e"]]), $a = ["type", "value", "placeholder", "disabled"], Ca = /* @__PURE__ */ X({
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
    const r = t, w = n, g = _(null);
    function v(m) {
      const i = m.target.value;
      w("update:modelValue", i);
    }
    return De(() => {
      r.autoFocus && g.value && g.value.focus();
    }), u({
      focus: () => {
        var m;
        return (m = g.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = g.value) == null ? void 0 : m.blur();
      }
    }), (m, i) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ae(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: v,
      onKeyup: [
        i[0] || (i[0] = pt((c) => m.$emit("enter"), ["enter"])),
        i[1] || (i[1] = pt((c) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: i[2] || (i[2] = (c) => m.$emit("focus")),
      onBlur: i[3] || (i[3] = (c) => m.$emit("blur"))
    }, null, 42, $a));
  }
}), Kt = /* @__PURE__ */ Z(Ca, [["__scopeId", "data-v-0380d08f"]]), xa = { class: "branch-create-form" }, Sa = { class: "form-actions" }, Ia = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, r = _(""), w = P(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function g() {
      w.value && (n("create", r.value.trim()), r.value = "");
    }
    function v() {
      r.value = "", n("cancel");
    }
    return (m, i) => (s(), o("div", xa, [
      k(Kt, {
        modelValue: r.value,
        "onUpdate:modelValue": i[0] || (i[0] = (c) => r.value = c),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: v
      }, null, 8, ["modelValue"]),
      e("div", Sa, [
        k(te, {
          variant: "primary",
          size: "sm",
          disabled: !w.value,
          onClick: g
        }, {
          default: l(() => [...i[1] || (i[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(te, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: l(() => [...i[2] || (i[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ea = /* @__PURE__ */ Z(Ia, [["__scopeId", "data-v-7c500394"]]), Ma = { class: "branch-list-item__indicator" }, Ta = { class: "branch-list-item__name" }, Ra = {
  key: 0,
  class: "branch-list-item__actions"
}, za = {
  key: 0,
  class: "branch-list-item__current-label"
}, La = /* @__PURE__ */ X({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: ae(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, [
      e("span", Ma, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Ta, a(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (s(), o("div", Ra, [
        _e(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", za, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Pa = /* @__PURE__ */ Z(La, [["__scopeId", "data-v-c6581a24"]]), Da = {
  key: 2,
  class: "branch-list"
}, Na = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, r = _(!1);
    function w(v) {
      n("create", v), g();
    }
    function g() {
      r.value = !1;
    }
    return (v, m) => (s(), M(Ge, null, {
      header: l(() => [
        k(qe, { title: "BRANCHES" }, {
          actions: l(() => [
            r.value ? d("", !0) : (s(), M(te, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (i) => r.value = !0)
            }, {
              default: l(() => [...m[1] || (m[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        r.value ? (s(), M(Ea, {
          key: 0,
          onCreate: w,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), M(st, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Da, [
          (s(!0), o(A, null, ee(t.branches, (i) => (s(), M(Pa, {
            key: i.name,
            "branch-name": i.name,
            "is-current": i.is_current
          }, {
            actions: l(() => [
              i.is_current ? d("", !0) : (s(), M(te, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (c) => v.$emit("delete", i.name)
              }, {
                default: l(() => [...m[2] || (m[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              i.is_current ? d("", !0) : (s(), M(te, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (c) => v.$emit("switch", i.name)
              }, {
                default: l(() => [...m[3] || (m[3] = [
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
}), Ua = /* @__PURE__ */ Z(Na, [["__scopeId", "data-v-86784ddd"]]), Oa = { class: "commit-list" }, Ba = /* @__PURE__ */ X({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (s(), o("div", Oa, [
      _e(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Fa = /* @__PURE__ */ Z(Ba, [["__scopeId", "data-v-8c5ee761"]]), Aa = { class: "commit-hash" }, Va = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = P(() => u.hash.slice(0, u.length));
    return (r, w) => (s(), o("span", Aa, a(n.value), 1));
  }
}), _s = /* @__PURE__ */ Z(Va, [["__scopeId", "data-v-7c333cc6"]]), Wa = { class: "commit-message" }, ja = { class: "commit-date" }, Ga = /* @__PURE__ */ X({
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
    function w() {
      n.clickable && r("click");
    }
    return (g, v) => (s(), o("div", {
      class: ae(["commit-item", { clickable: t.clickable }]),
      onClick: w
    }, [
      k(_s, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Wa, a(t.message), 1),
      e("span", ja, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = Te(() => {
        }, ["stop"]))
      }, [
        _e(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), qa = /* @__PURE__ */ Z(Ga, [["__scopeId", "data-v-dd7c621b"]]), Ha = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (s(), M(Ge, null, {
      header: l(() => [
        k(qe, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), M(st, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), M(Fa, { key: 1 }, {
          default: l(() => [
            (s(!0), o(A, null, ee(t.commits, (r) => (s(), M(qa, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (w) => u.$emit("select", r)
            }, {
              actions: l(() => [
                k(te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (w) => u.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: l(() => [...n[0] || (n[0] = [
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
}), Ka = /* @__PURE__ */ Z(Ha, [["__scopeId", "data-v-981c3c64"]]), Qb = Jt({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const Xb = [
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
  ...Array(12).fill(null).map((t, u) => ({
    name: `synced-workflow-${u + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + u,
    model_count: 1 + u % 3,
    sync_state: "synced"
  }))
], Zb = {
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
}, Ya = [
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
], e_ = [
  ...Ya,
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
function Mt() {
  return !1;
}
function Oe() {
  const t = _(!1), u = _(null);
  async function n(H, ie) {
    var Me;
    if (!((Me = window.app) != null && Me.api))
      throw new Error("ComfyUI API not available");
    const ve = await window.app.api.fetchApi(H, ie);
    if (!ve.ok) {
      const Ve = await ve.json().catch(() => ({}));
      throw new Error(Ve.error || Ve.message || `Request failed: ${ve.status}`);
    }
    return ve.json();
  }
  async function r(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(H, ie = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: ie })
    });
  }
  async function g(H = 10, ie = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${ie}`);
  }
  async function v(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function m() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function i(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H, force: !0 })
    });
  }
  async function c() {
    return n("/v2/comfygit/branches");
  }
  async function p(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function h(H, ie = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: ie })
    });
  }
  async function b(H, ie = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: ie })
    });
  }
  async function $(H, ie = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: ie })
    });
  }
  async function z(H, ie = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ie })
    });
  }
  async function V() {
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
  async function f(H) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: H })
    });
  }
  async function x() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function L(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function T() {
    return n("/v2/workspace/environments/create_status");
  }
  async function C(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function W(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function j(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ie = await r(H), ve = [];
      return ie.workflows.new.forEach((Me) => {
        ve.push({ name: Me, status: "new", missing_nodes: 0, missing_models: 0, path: Me });
      }), ie.workflows.modified.forEach((Me) => {
        ve.push({ name: Me, status: "modified", missing_nodes: 0, missing_models: 0, path: Me });
      }), ie.workflows.synced.forEach((Me) => {
        ve.push({ name: Me, status: "synced", missing_nodes: 0, missing_models: 0, path: Me });
      }), ve;
    }
  }
  async function Y(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function D(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function S(H, ie, ve) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ie, install_models: ve })
    });
  }
  async function E(H, ie, ve) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ie, importance: ve })
    });
  }
  async function O() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function R() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function K(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function he(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function ce(H, ie) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function oe(H, ie) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function F(H) {
    return n(`/v2/workspace/models/${H}`, {
      method: "DELETE"
    });
  }
  async function I(H) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ne() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function se() {
    return n("/v2/workspace/models/directory");
  }
  async function Ie(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function $e() {
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
  async function Le(H) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ye(H, ie) {
    try {
      const ve = new URLSearchParams();
      return H && ve.append("level", H), ie && ve.append("lines", ie.toString()), n(`/v2/comfygit/debug/logs?${ve}`);
    } catch {
      return [];
    }
  }
  async function re(H, ie) {
    try {
      const ve = new URLSearchParams();
      return H && ve.append("level", H), ie && ve.append("lines", ie.toString()), n(`/v2/workspace/debug/logs?${ve}`);
    } catch {
      return [];
    }
  }
  async function le() {
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
  async function Pe(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function Re(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function ue(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function G(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Ce() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function we(H, ie) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: ie })
    });
  }
  async function Se(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function ke(H, ie, ve) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ie, push_url: ve })
    });
  }
  async function ge(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function Ae(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function ht(H = "skip", ie = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: ie
      })
    });
  }
  async function it(H, ie) {
    const ve = ie ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(ie)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n(ve);
  }
  async function Ne(H, ie = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ie.modelStrategy || "skip",
        force: ie.force || !1,
        resolutions: ie.resolutions
      })
    });
  }
  async function yt(H, ie) {
    const ve = ie ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(ie)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n(ve);
  }
  async function vt(H, ie = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ie.force || !1 })
    });
  }
  async function wt(H, ie) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ie })
    });
  }
  async function rt(H) {
    const ie = {
      success: 0,
      failed: []
    };
    for (const ve of H)
      try {
        await D(ve), ie.success++;
      } catch (Me) {
        ie.failed.push({
          name: ve,
          error: Me instanceof Error ? Me.message : "Unknown error"
        });
      }
    return ie;
  }
  async function kt(H) {
    var Me;
    const ie = new FormData();
    if (ie.append("file", H), !((Me = window.app) != null && Me.api))
      throw new Error("ComfyUI API not available");
    const ve = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ie
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!ve.ok) {
      const Ve = await ve.json().catch(() => ({}));
      throw new Error(Ve.error || `Preview failed: ${ve.status}`);
    }
    return ve.json();
  }
  async function dt(H) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(H)}`
    );
  }
  async function J(H, ie, ve, Me) {
    var At;
    const Ve = new FormData();
    if (Ve.append("file", H), Ve.append("name", ie), Ve.append("model_strategy", ve), Ve.append("torch_backend", Me), !((At = window.app) != null && At.api))
      throw new Error("ComfyUI API not available");
    const _t = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ve
    });
    if (!_t.ok) {
      const Vt = await _t.json().catch(() => ({}));
      throw new Error(Vt.message || Vt.error || `Import failed: ${_t.status}`);
    }
    return _t.json();
  }
  async function U() {
    return n("/v2/workspace/import/status");
  }
  async function B() {
    return n("/v2/setup/status");
  }
  async function Q(H) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function fe() {
    return n("/v2/setup/initialize_status");
  }
  async function He(H) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  return {
    isLoading: t,
    error: u,
    getStatus: r,
    commit: w,
    getHistory: g,
    exportEnv: v,
    validateExport: m,
    exportEnvWithForce: i,
    // Git Operations
    getBranches: c,
    getCommitDetail: p,
    checkout: h,
    createBranch: b,
    switchBranch: $,
    deleteBranch: z,
    // Environment Management
    getEnvironments: V,
    switchEnvironment: f,
    getSwitchProgress: x,
    createEnvironment: L,
    getCreateProgress: T,
    getComfyUIReleases: C,
    deleteEnvironment: W,
    // Workflow Management
    getWorkflows: j,
    getWorkflowDetails: Y,
    resolveWorkflow: D,
    installWorkflowDeps: S,
    setModelImportance: E,
    // Model Management
    getEnvironmentModels: O,
    getWorkspaceModels: R,
    getModelDetails: K,
    openFileLocation: he,
    addModelSource: ce,
    removeModelSource: oe,
    deleteModel: F,
    downloadModel: I,
    scanWorkspaceModels: ne,
    getModelsDirectory: se,
    setModelsDirectory: Ie,
    // Settings
    getConfig: $e,
    updateConfig: Le,
    // Debug/Logs
    getEnvironmentLogs: ye,
    getWorkspaceLogs: re,
    // Node Management
    getNodes: le,
    trackNodeAsDev: Pe,
    installNode: Re,
    updateNode: ue,
    uninstallNode: G,
    // Git Remotes
    getRemotes: Ce,
    addRemote: we,
    removeRemote: Se,
    updateRemoteUrl: ke,
    fetchRemote: ge,
    getRemoteSyncStatus: Ae,
    // Push/Pull
    getPullPreview: it,
    pullFromRemote: Ne,
    getPushPreview: yt,
    pushToRemote: vt,
    validateMerge: wt,
    // Environment Sync
    syncEnvironmentManually: ht,
    // Workflow Repair
    repairWorkflowModels: rt,
    // Import Operations
    previewTarballImport: kt,
    validateEnvironmentName: dt,
    executeImport: J,
    getImportProgress: U,
    // First-Time Setup
    getSetupStatus: B,
    initializeWorkspace: Q,
    getInitializeProgress: fe,
    validatePath: He
  };
}
async function Tt(t, u = {}, n = 5e3) {
  const r = new AbortController(), w = setTimeout(() => r.abort(), n);
  try {
    const g = await fetch(t, {
      ...u,
      signal: r.signal
    });
    return clearTimeout(w), g;
  } catch (g) {
    throw clearTimeout(w), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function $s() {
  const t = _(null);
  async function u() {
    try {
      const v = await Tt(
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
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const v = await Tt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Health check failed");
      return await v.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const v = await Tt(
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
  async function w() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await Tt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await Tt(
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
    restart: w,
    kill: g
  };
}
const Ja = { class: "base-modal-header" }, Qa = {
  key: 0,
  class: "base-modal-title"
}, Xa = { class: "base-modal-body" }, Za = {
  key: 0,
  class: "base-modal-loading"
}, el = {
  key: 1,
  class: "base-modal-error"
}, tl = {
  key: 0,
  class: "base-modal-footer"
}, sl = /* @__PURE__ */ X({
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
    function w() {
      n.closeOnOverlayClick && r("close");
    }
    function g(v) {
      v.key === "Escape" && n.showCloseButton && r("close");
    }
    return De(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), ks(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (v, m) => (s(), M(Fe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: w
      }, [
        e("div", {
          class: ae(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Te(() => {
          }, ["stop"]))
        }, [
          e("div", Ja, [
            _e(v.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Qa, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (i) => v.$emit("close"))
            }, [...m[2] || (m[2] = [
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
          e("div", Xa, [
            t.loading ? (s(), o("div", Za, "Loading...")) : t.error ? (s(), o("div", el, a(t.error), 1)) : _e(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (s(), o("div", tl, [
            _e(v.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Je = /* @__PURE__ */ Z(sl, [["__scopeId", "data-v-8dab1081"]]), ol = ["type", "disabled"], nl = {
  key: 0,
  class: "spinner"
}, al = /* @__PURE__ */ X({
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
    return (u, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ae(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (s(), o("span", nl)) : d("", !0),
      _e(u.$slots, "default", {}, void 0, !0)
    ], 10, ol));
  }
}), de = /* @__PURE__ */ Z(al, [["__scopeId", "data-v-f3452606"]]), ll = {
  key: 0,
  class: "base-title-count"
}, il = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (s(), M(as(`h${t.level}`), {
      class: ae(["base-title", t.variant])
    }, {
      default: l(() => [
        _e(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", ll, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Nt = /* @__PURE__ */ Z(il, [["__scopeId", "data-v-5a01561d"]]), rl = ["value", "disabled"], dl = {
  key: 0,
  value: "",
  disabled: ""
}, cl = ["value"], ul = {
  key: 0,
  class: "base-select-error"
}, ml = /* @__PURE__ */ X({
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
    return (r, w) => (s(), o("div", {
      class: ae(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ae(["base-select", { error: !!t.error }]),
        onChange: w[0] || (w[0] = (g) => r.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", dl, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(A, null, ee(t.options, (g) => (s(), o("option", {
          key: u(g),
          value: u(g)
        }, a(n(g)), 9, cl))), 128))
      ], 42, rl),
      t.error ? (s(), o("span", ul, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), vl = /* @__PURE__ */ Z(ml, [["__scopeId", "data-v-7436d745"]]), fl = { class: "popover-header" }, gl = { class: "popover-title" }, pl = { class: "popover-content" }, hl = {
  key: 0,
  class: "popover-actions"
}, yl = /* @__PURE__ */ X({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (s(), M(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: at({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Te(() => {
          }, ["stop"]))
        }, [
          e("div", fl, [
            e("h4", gl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", pl, [
            _e(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (s(), o("div", hl, [
            _e(u.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ Z(yl, [["__scopeId", "data-v-42815ace"]]), wl = { class: "detail-section" }, kl = {
  key: 0,
  class: "empty-message"
}, bl = { class: "model-header" }, _l = { class: "model-name" }, $l = { class: "model-details" }, Cl = { class: "model-row" }, xl = { class: "model-row" }, Sl = { class: "label" }, Il = {
  key: 0,
  class: "model-row model-row-nodes"
}, El = { class: "node-list" }, Ml = ["onClick"], Tl = {
  key: 1,
  class: "model-row"
}, Rl = { class: "value" }, zl = {
  key: 2,
  class: "model-row"
}, Ll = { class: "value error" }, Pl = {
  key: 0,
  class: "model-actions"
}, Dl = { class: "detail-section" }, Nl = {
  key: 0,
  class: "empty-message"
}, Ul = { class: "node-name" }, Ol = {
  key: 0,
  class: "node-version"
}, Bl = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: w, setModelImportance: g, openFileLocation: v } = Oe(), m = _(null), i = _(!1), c = _(null), p = _(!1), h = _({}), b = _(!1), $ = _(/* @__PURE__ */ new Set()), z = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function V(D) {
      switch (D) {
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
    function f(D) {
      switch (D) {
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
    function x(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const S = D.hash || D.filename;
      return $.value.has(S) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function L(D) {
      return $.value.has(D);
    }
    function T(D) {
      $.value.has(D) ? $.value.delete(D) : $.value.add(D), $.value = new Set($.value);
    }
    async function C() {
      i.value = !0, c.value = null;
      try {
        m.value = await w(n.workflowName);
      } catch (D) {
        c.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        i.value = !1;
      }
    }
    function W(D, S) {
      h.value[D] = S, p.value = !0;
    }
    async function j(D) {
      try {
        await v(D);
      } catch (S) {
        c.value = S instanceof Error ? S.message : "Failed to open file location";
      }
    }
    async function Y() {
      if (!p.value) {
        r("close");
        return;
      }
      i.value = !0, c.value = null;
      try {
        for (const [D, S] of Object.entries(h.value))
          await g(n.workflowName, D, S);
        r("refresh"), r("close");
      } catch (D) {
        c.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        i.value = !1;
      }
    }
    return De(C), (D, S) => (s(), o(A, null, [
      k(Je, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: i.value,
        error: c.value || void 0,
        onClose: S[4] || (S[4] = (E) => r("close"))
      }, {
        body: l(() => [
          m.value ? (s(), o(A, { key: 0 }, [
            e("section", wl, [
              k(Nt, { variant: "section" }, {
                default: l(() => [
                  y("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", kl, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(A, null, ee(m.value.models, (E) => {
                var O;
                return s(), o("div", {
                  key: E.hash || E.filename,
                  class: "model-card"
                }, [
                  e("div", bl, [
                    S[6] || (S[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", _l, a(E.filename), 1)
                  ]),
                  e("div", $l, [
                    e("div", Cl, [
                      S[7] || (S[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: ae(["value", V(E.status)])
                      }, a(f(E.status)), 3)
                    ]),
                    e("div", xl, [
                      e("span", Sl, [
                        S[8] || (S[8] = y(" Importance: ", -1)),
                        k(bs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: S[0] || (S[0] = (R) => b.value = !0)
                        })
                      ]),
                      k(vl, {
                        "model-value": h.value[E.filename] || E.importance,
                        options: z,
                        "onUpdate:modelValue": (R) => W(E.filename, R)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    E.loaded_by && E.loaded_by.length > 0 ? (s(), o("div", Il, [
                      S[9] || (S[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", El, [
                        (s(!0), o(A, null, ee(x(E), (R, K) => (s(), o("div", {
                          key: `${R.node_id}-${K}`,
                          class: "node-reference"
                        }, a(R.node_type) + " (Node #" + a(R.node_id) + ") ", 1))), 128)),
                        E.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (R) => T(E.hash || E.filename)
                        }, a(L(E.hash || E.filename) ? "▼ Show less" : `▶ View all (${E.loaded_by.length})`), 9, Ml)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    E.size_mb ? (s(), o("div", Tl, [
                      S[10] || (S[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Rl, a(E.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    E.has_category_mismatch ? (s(), o("div", zl, [
                      S[13] || (S[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Ll, [
                        S[11] || (S[11] = y(" In ", -1)),
                        e("code", null, a(E.actual_category) + "/", 1),
                        S[12] || (S[12] = y(" but loader needs ", -1)),
                        e("code", null, a((O = E.expected_categories) == null ? void 0 : O[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  E.status !== "available" ? (s(), o("div", Pl, [
                    E.status === "downloadable" ? (s(), M(de, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: S[1] || (S[1] = (R) => r("resolve"))
                    }, {
                      default: l(() => [...S[14] || (S[14] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    })) : E.status === "category_mismatch" && E.file_path ? (s(), M(de, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => j(E.file_path)
                    }, {
                      default: l(() => [...S[15] || (S[15] = [
                        y(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : E.status !== "path_mismatch" ? (s(), M(de, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: S[2] || (S[2] = (R) => r("resolve"))
                    }, {
                      default: l(() => [...S[16] || (S[16] = [
                        y(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", Dl, [
              k(Nt, { variant: "section" }, {
                default: l(() => [
                  y("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", Nl, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(A, null, ee(m.value.nodes, (E) => (s(), o("div", {
                key: E.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ae(["node-status", E.status === "installed" ? "installed" : "missing"])
                }, a(E.status === "installed" ? "✓" : "✕"), 3),
                e("span", Ul, a(E.name), 1),
                E.version ? (s(), o("span", Ol, "v" + a(E.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          k(de, {
            variant: "secondary",
            onClick: S[3] || (S[3] = (E) => r("close"))
          }, {
            default: l(() => [...S[17] || (S[17] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (s(), M(de, {
            key: 0,
            variant: "primary",
            onClick: Y
          }, {
            default: l(() => [...S[18] || (S[18] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(lt, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: S[5] || (S[5] = (E) => b.value = !1)
      }, {
        content: l(() => [...S[19] || (S[19] = [
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
}), Fl = /* @__PURE__ */ Z(Bl, [["__scopeId", "data-v-668728e6"]]), xe = Jt({
  items: [],
  status: "idle"
});
let nt = null;
function Cs() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Qt(t) {
  return xe.items.find((u) => u.id === t);
}
async function $t() {
  if (xe.status === "downloading") return;
  const t = xe.items.find((u) => u.status === "queued");
  if (!t) {
    xe.status = "idle";
    return;
  }
  xe.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Al(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    xe.status = "idle", $t();
  }
}
async function Al(t) {
  return new Promise((u, n) => {
    nt && (nt.close(), nt = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), w = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    nt = w;
    let g = Date.now(), v = 0, m = !1;
    w.onmessage = (i) => {
      try {
        const c = JSON.parse(i.data);
        switch (c.type) {
          case "progress":
            t.downloaded = c.downloaded || 0, t.size = c.total || t.size;
            const p = Date.now(), h = (p - g) / 1e3;
            if (h > 0.5) {
              const b = t.downloaded - v;
              if (t.speed = b / h, g = p, v = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, w.close(), nt = null, u();
            break;
          case "error":
            m = !0, w.close(), nt = null, n(new Error(c.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, w.onerror = () => {
      w.close(), nt = null, m || n(new Error("Connection lost"));
    };
  });
}
async function Vl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (xe.items.some((w) => w.url === n.url && w.filename === n.filename))
        continue;
      const r = {
        id: Cs(),
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
      xe.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Ft() {
  function t(f) {
    for (const x of f) {
      if (xe.items.some(
        (C) => C.url === x.url && C.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(C.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const T = {
        id: Cs(),
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
      xe.items.push(T);
    }
    xe.status === "idle" && $t();
  }
  async function u(f) {
    const x = Qt(f);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        nt && (nt.close(), nt = null), x.status = "failed", x.error = "Cancelled by user", xe.status = "idle", $t();
      } else if (x.status === "queued") {
        const L = xe.items.findIndex((T) => T.id === f);
        L >= 0 && xe.items.splice(L, 1);
      }
    }
  }
  function n(f) {
    const x = Qt(f);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, xe.status === "idle" && $t());
  }
  function r(f) {
    const x = Qt(f);
    !x || x.status !== "paused" || (x.status = "queued", xe.status === "idle" && $t());
  }
  function w() {
    const f = xe.items.filter((x) => x.status === "paused");
    for (const x of f)
      x.status = "queued";
    xe.status === "idle" && $t();
  }
  function g(f) {
    const x = xe.items.findIndex((L) => L.id === f);
    x >= 0 && ["completed", "failed", "paused"].includes(xe.items[x].status) && xe.items.splice(x, 1);
  }
  function v() {
    xe.items = xe.items.filter((f) => f.status !== "completed");
  }
  function m() {
    xe.items = xe.items.filter((f) => f.status !== "failed");
  }
  const i = P(
    () => xe.items.find((f) => f.status === "downloading")
  ), c = P(
    () => xe.items.filter((f) => f.status === "queued")
  ), p = P(
    () => xe.items.filter((f) => f.status === "completed")
  ), h = P(
    () => xe.items.filter((f) => f.status === "failed")
  ), b = P(
    () => xe.items.filter((f) => f.status === "paused")
  ), $ = P(() => xe.items.length > 0), z = P(
    () => xe.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), V = P(
    () => xe.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Hs(xe),
    // Computed
    currentDownload: i,
    queuedItems: c,
    completedItems: p,
    failedItems: h,
    pausedItems: b,
    hasItems: $,
    activeCount: z,
    hasPaused: V,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: w,
    removeItem: g,
    clearCompleted: v,
    clearFailed: m,
    loadPendingDownloads: Vl
  };
}
function xs() {
  const t = _(null), u = _(null), n = _([]), r = _([]), w = _(!1), g = _(null);
  async function v(L, T) {
    var W;
    if (!((W = window.app) != null && W.api))
      throw new Error("ComfyUI API not available");
    const C = await window.app.api.fetchApi(L, T);
    if (!C.ok) {
      const j = await C.json().catch(() => ({})), Y = j.error || j.message || `Request failed: ${C.status}`;
      throw new Error(Y);
    }
    return C.json();
  }
  async function m(L) {
    w.value = !0, g.value = null;
    try {
      let T;
      return Mt() || (T = await v(
        `/v2/comfygit/workflow/${L}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = T, T;
    } catch (T) {
      const C = T instanceof Error ? T.message : "Unknown error occurred";
      throw g.value = C, T;
    } finally {
      w.value = !1;
    }
  }
  async function i(L, T, C, W) {
    w.value = !0, g.value = null;
    try {
      let j;
      if (!Mt()) {
        const Y = Object.fromEntries(T), D = Object.fromEntries(C), S = W ? Array.from(W) : [];
        j = await v(
          `/v2/comfygit/workflow/${L}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: Y,
              model_choices: D,
              skipped_packages: S
            })
          }
        );
      }
      return u.value = j, j;
    } catch (j) {
      const Y = j instanceof Error ? j.message : "Unknown error occurred";
      throw g.value = Y, j;
    } finally {
      w.value = !1;
    }
  }
  async function c(L, T = 10) {
    w.value = !0, g.value = null;
    try {
      let C;
      return Mt() || (C = await v(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: T })
        }
      )), n.value = C.results, C.results;
    } catch (C) {
      const W = C instanceof Error ? C.message : "Unknown error occurred";
      throw g.value = W, C;
    } finally {
      w.value = !1;
    }
  }
  async function p(L, T = 10) {
    w.value = !0, g.value = null;
    try {
      let C;
      return Mt() || (C = await v(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: T })
        }
      )), r.value = C.results, C.results;
    } catch (C) {
      const W = C instanceof Error ? C.message : "Unknown error occurred";
      throw g.value = W, C;
    } finally {
      w.value = !1;
    }
  }
  const h = Jt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.nodesInstalled = [], h.installError = void 0, h.needsRestart = void 0, h.error = void 0, h.nodeInstallProgress = void 0;
  }
  async function $(L) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Mt(), await z(L);
    } catch (T) {
      const C = T instanceof Error ? T.message : "Failed to install nodes";
      throw h.installError = C, T;
    }
  }
  async function z(L) {
    var C;
    const T = await v(
      `/v2/comfygit/workflow/${L}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: h.nodesToInstall
        })
      }
    );
    if (h.nodeInstallProgress) {
      h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
      const W = new Map(((C = T.failed) == null ? void 0 : C.map((j) => [j.node_id, j.error])) || []);
      for (let j = 0; j < h.nodesToInstall.length; j++) {
        const Y = h.nodesToInstall[j], D = W.get(Y);
        h.nodeInstallProgress.completedNodes.push({
          node_id: Y,
          success: !D,
          error: D
        });
      }
    }
    return h.nodesInstalled = T.nodes_installed, h.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (h.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function V(L, T, C) {
    b(), h.phase = "resolving", g.value = null;
    const W = Object.fromEntries(T), j = Object.fromEntries(C);
    try {
      const Y = await fetch(`/v2/comfygit/workflow/${L}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: W,
          model_choices: j
        })
      });
      if (!Y.ok)
        throw new Error(`Request failed: ${Y.status}`);
      if (!Y.body)
        throw new Error("No response body");
      const D = Y.body.getReader(), S = new TextDecoder();
      let E = "";
      for (; ; ) {
        const { done: O, value: R } = await D.read();
        if (O) break;
        E += S.decode(R, { stream: !0 });
        const K = E.split(`

`);
        E = K.pop() || "";
        for (const he of K) {
          if (!he.trim()) continue;
          const ce = he.split(`
`);
          let oe = "", F = "";
          for (const I of ce)
            I.startsWith("event: ") ? oe = I.slice(7) : I.startsWith("data: ") && (F = I.slice(6));
          if (F)
            try {
              const I = JSON.parse(F);
              f(oe, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (Y) {
      const D = Y instanceof Error ? Y.message : "Unknown error occurred";
      throw g.value = D, h.error = D, h.phase = "error", Y;
    }
  }
  function f(L, T) {
    switch (L) {
      case "batch_start":
        h.phase = "downloading", h.totalFiles = T.total;
        break;
      case "file_start":
        h.currentFile = T.filename, h.currentFileIndex = T.index, h.bytesDownloaded = 0, h.bytesTotal = void 0;
        break;
      case "file_progress":
        h.bytesDownloaded = T.downloaded, h.bytesTotal = T.total;
        break;
      case "file_complete":
        h.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        h.nodesToInstall = T.nodes_to_install || [], T.download_results && (h.completedFiles = T.download_results), h.phase = "complete";
        break;
      case "error":
        h.error = T.message, h.phase = "error", g.value = T.message;
        break;
    }
  }
  function x(L, T) {
    const { addToQueue: C } = Ft(), W = T.filter((j) => j.url && j.target_path).map((j) => ({
      workflow: L,
      filename: j.filename,
      url: j.url,
      targetPath: j.target_path,
      size: j.size || 0,
      type: "model"
    }));
    return W.length > 0 && C(W), W.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: r,
    isLoading: w,
    error: g,
    progress: h,
    // Methods
    analyzeWorkflow: m,
    applyResolution: i,
    applyResolutionWithProgress: V,
    installNodes: $,
    searchNodes: c,
    searchModels: p,
    resetProgress: b,
    queueModelDownloads: x
  };
}
const Wl = { class: "resolution-stepper" }, jl = { class: "stepper-header" }, Gl = ["onClick"], ql = {
  key: 0,
  class: "step-icon"
}, Hl = {
  key: 1,
  class: "step-number"
}, Kl = { class: "step-label" }, Yl = {
  key: 0,
  class: "step-connector"
}, Jl = { class: "stepper-content" }, Ql = /* @__PURE__ */ X({
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
    function w(c) {
      var p;
      if ((p = n.stepStats) != null && p[c]) {
        const h = n.stepStats[c];
        return h.total > 0 && h.resolved === h.total;
      }
      return n.completedSteps.includes(c);
    }
    function g(c) {
      var p;
      if ((p = n.stepStats) != null && p[c]) {
        const h = n.stepStats[c];
        return h.resolved > 0 && h.resolved < h.total;
      }
      return !1;
    }
    function v(c) {
      return w(c) ? "state-complete" : g(c) ? "state-partial" : "state-pending";
    }
    function m(c) {
      return !1;
    }
    function i(c) {
      r("step-change", c);
    }
    return (c, p) => (s(), o("div", Wl, [
      e("div", jl, [
        (s(!0), o(A, null, ee(t.steps, (h, b) => (s(), o("div", {
          key: h.id,
          class: ae(["step", {
            active: t.currentStep === h.id,
            completed: w(h.id),
            "in-progress": g(h.id),
            disabled: m(h.id)
          }]),
          onClick: ($) => i(h.id)
        }, [
          e("div", {
            class: ae(["step-indicator", v(h.id)])
          }, [
            w(h.id) ? (s(), o("span", ql, "✓")) : (s(), o("span", Hl, a(b + 1), 1))
          ], 2),
          e("div", Kl, a(h.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", Yl)) : d("", !0)
        ], 10, Gl))), 128))
      ]),
      e("div", Jl, [
        _e(c.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Xl = /* @__PURE__ */ Z(Ql, [["__scopeId", "data-v-2a7b3af8"]]), Zl = /* @__PURE__ */ X({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = P(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = P(() => `confidence-${n.value}`), w = P(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, v) => (s(), o("span", {
      class: ae(["confidence-badge", r.value, t.size])
    }, a(w.value), 3));
  }
}), Yt = /* @__PURE__ */ Z(Zl, [["__scopeId", "data-v-17ec4b80"]]), ei = { class: "node-info" }, ti = { class: "node-info-text" }, si = { class: "item-body" }, oi = {
  key: 0,
  class: "resolved-state"
}, ni = {
  key: 1,
  class: "multiple-options"
}, ai = { class: "options-list" }, li = ["onClick"], ii = ["name", "value", "checked", "onChange"], ri = { class: "option-content" }, di = { class: "option-header" }, ci = { class: "option-package-id" }, ui = {
  key: 0,
  class: "option-title"
}, mi = { class: "option-meta" }, vi = {
  key: 0,
  class: "installed-badge"
}, fi = { class: "action-buttons" }, gi = {
  key: 2,
  class: "unresolved"
}, pi = {
  key: 0,
  class: "searching-state"
}, hi = { class: "options-list" }, yi = ["onClick"], wi = ["name", "value"], ki = { class: "option-content" }, bi = { class: "option-header" }, _i = { class: "option-package-id" }, $i = {
  key: 0,
  class: "option-description"
}, Ci = { class: "option-meta" }, xi = {
  key: 0,
  class: "installed-badge"
}, Si = {
  key: 2,
  class: "unresolved-message"
}, Ii = { class: "action-buttons" }, Ei = /* @__PURE__ */ X({
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
    statusLabel: {},
    searchResults: {},
    isSearching: { type: Boolean }
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice", "search-result-selected"],
  setup(t, { emit: u }) {
    const n = t, r = u;
    function w(i, c = 80) {
      return i.length <= c ? i : i.slice(0, c - 3) + "...";
    }
    const g = P(() => !!n.choice);
    P(() => {
      var i;
      return (i = n.choice) == null ? void 0 : i.action;
    }), P(() => {
      var i;
      return (i = n.choice) == null ? void 0 : i.package_id;
    });
    const v = P(() => {
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
    function m(i) {
      r("option-selected", i);
    }
    return (i, c) => (s(), o("div", {
      class: ae(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", ei, [
        e("span", ti, [
          c[7] || (c[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ae(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", si, [
        g.value ? (s(), o("div", oi, [
          k(de, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (p) => r("clear-choice"))
          }, {
            default: l(() => [...c[8] || (c[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ni, [
          c[12] || (c[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", ai, [
            (s(!0), o(A, null, ee(t.options, (p, h) => (s(), o("label", {
              key: p.package_id,
              class: ae(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (b) => m(h)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (b) => m(h)
              }, null, 40, ii),
              e("div", ri, [
                e("div", di, [
                  e("span", ci, a(p.package_id), 1),
                  k(Yt, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                p.title && p.title !== p.package_id ? (s(), o("div", ui, a(p.title), 1)) : d("", !0),
                e("div", mi, [
                  p.is_installed ? (s(), o("span", vi, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, li))), 128))
          ]),
          e("div", fi, [
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[1] || (c[1] = (p) => r("search"))
            }, {
              default: l(() => [...c[9] || (c[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[2] || (c[2] = (p) => r("manual-entry"))
            }, {
              default: l(() => [...c[10] || (c[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[3] || (c[3] = (p) => r("mark-optional"))
            }, {
              default: l(() => [...c[11] || (c[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", gi, [
          t.isSearching ? (s(), o("div", pi, [...c[13] || (c[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(A, { key: 1 }, [
            c[14] || (c[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", hi, [
              (s(!0), o(A, null, ee(t.searchResults.slice(0, 5), (p, h) => (s(), o("label", {
                key: p.package_id,
                class: "option-card",
                onClick: (b) => r("search-result-selected", p)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: h
                }, null, 8, wi),
                e("div", ki, [
                  e("div", bi, [
                    e("span", _i, a(p.package_id), 1),
                    k(Yt, {
                      confidence: p.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  p.description ? (s(), o("div", $i, a(w(p.description)), 1)) : d("", !0),
                  e("div", Ci, [
                    p.is_installed ? (s(), o("span", xi, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, yi))), 128))
            ])
          ], 64)) : (s(), o("div", Si, [...c[15] || (c[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ii, [
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[4] || (c[4] = (p) => r("search"))
            }, {
              default: l(() => {
                var p;
                return [
                  y(a((p = t.searchResults) != null && p.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[5] || (c[5] = (p) => r("manual-entry"))
            }, {
              default: l(() => [...c[16] || (c[16] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[6] || (c[6] = (p) => r("mark-optional"))
            }, {
              default: l(() => [...c[17] || (c[17] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Mi = /* @__PURE__ */ Z(Ei, [["__scopeId", "data-v-c2997d1d"]]), Ti = { class: "item-navigator" }, Ri = { class: "nav-item-info" }, zi = ["title"], Li = { class: "nav-controls" }, Pi = { class: "nav-arrows" }, Di = ["disabled"], Ni = ["disabled"], Ui = { class: "nav-position" }, Oi = /* @__PURE__ */ X({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, w) => (s(), o("div", Ti, [
      e("div", Ri, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, zi)
      ]),
      e("div", Li, [
        e("div", Pi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: w[0] || (w[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Di),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: w[1] || (w[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, Ni)
        ]),
        e("span", Ui, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Ss = /* @__PURE__ */ Z(Oi, [["__scopeId", "data-v-74af7920"]]), Bi = ["type", "value", "placeholder", "disabled"], Fi = {
  key: 0,
  class: "base-input-error"
}, Ai = /* @__PURE__ */ X({
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
    return (u, n) => (s(), o("div", {
      class: ae(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ae(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = pt((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = pt((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Bi),
      t.error ? (s(), o("span", Fi, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), tt = /* @__PURE__ */ Z(Ai, [["__scopeId", "data-v-9ba02cdc"]]), Vi = { class: "node-resolution-step" }, Wi = {
  key: 0,
  class: "auto-resolved-section"
}, ji = { class: "section-header" }, Gi = { class: "stat-badge" }, qi = { class: "resolved-packages-list" }, Hi = { class: "package-info" }, Ki = { class: "package-id" }, Yi = { class: "node-count" }, Ji = { class: "package-actions" }, Qi = {
  key: 0,
  class: "status-badge install"
}, Xi = {
  key: 1,
  class: "status-badge skip"
}, Zi = ["onClick"], er = {
  key: 1,
  class: "section-divider"
}, tr = { class: "step-header" }, sr = { class: "stat-badge" }, or = {
  key: 1,
  class: "step-body"
}, nr = {
  key: 3,
  class: "empty-state"
}, ar = { class: "node-modal-body" }, lr = { class: "node-search-results-container" }, ir = {
  key: 0,
  class: "node-search-results"
}, rr = ["onClick"], dr = { class: "node-result-header" }, cr = { class: "node-result-package-id" }, ur = {
  key: 0,
  class: "node-result-description"
}, mr = {
  key: 1,
  class: "node-empty-state"
}, vr = {
  key: 2,
  class: "node-empty-state"
}, fr = {
  key: 3,
  class: "node-empty-state"
}, gr = { class: "node-manual-entry-modal" }, pr = { class: "node-modal-body" }, hr = { class: "node-modal-actions" }, yr = /* @__PURE__ */ X({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, { searchNodes: w } = xs(), g = _(0), v = _(!1), m = _(!1), i = _(""), c = _(""), p = _([]), h = _(!1), b = _(/* @__PURE__ */ new Map()), $ = _(/* @__PURE__ */ new Set()), z = _(!1);
    function V() {
      z.value && F(), z.value = !1;
    }
    const f = P(() => n.nodes[g.value]), x = P(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), L = P(() => f.value ? b.value.get(f.value.node_type) || [] : []), T = P(() => f.value ? $.value.has(f.value.node_type) : !1);
    gt(f, async (re) => {
      var le;
      re && ((le = re.options) != null && le.length || b.value.has(re.node_type) || $.value.has(re.node_type) || n.nodeChoices.has(re.node_type) || await C(re.node_type));
    }, { immediate: !0 });
    async function C(re) {
      $.value.add(re);
      try {
        const le = await w(re, 5);
        b.value.set(re, le);
      } catch {
        b.value.set(re, []);
      } finally {
        $.value.delete(re);
      }
    }
    const W = P(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function j(re) {
      return n.skippedPackages.has(re);
    }
    function Y(re) {
      r("package-skip", re);
    }
    const D = P(() => {
      var le;
      if (!f.value) return "not-found";
      const re = n.nodeChoices.get(f.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (le = f.value.options) != null && le.length ? "ambiguous" : "not-found";
    }), S = P(() => {
      var le;
      if (!f.value) return;
      const re = n.nodeChoices.get(f.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (le = f.value.options) != null && le.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function E(re) {
      re >= 0 && re < n.nodes.length && (g.value = re);
    }
    function O() {
      f.value && r("mark-optional", f.value.node_type);
    }
    function R() {
      f.value && r("skip", f.value.node_type);
    }
    function K(re) {
      f.value && r("option-selected", f.value.node_type, re);
    }
    function he() {
      f.value && r("clear-choice", f.value.node_type);
    }
    function ce() {
      f.value && (i.value = f.value.node_type, p.value = L.value, v.value = !0, Ie(i.value));
    }
    function oe() {
      c.value = "", m.value = !0;
    }
    function F() {
      v.value = !1, i.value = "", p.value = [];
    }
    function I() {
      m.value = !1, c.value = "";
    }
    let ne = null;
    function se() {
      ne && clearTimeout(ne), ne = setTimeout(() => {
        Ie(i.value);
      }, 300);
    }
    async function Ie(re) {
      if (!re.trim()) {
        p.value = [];
        return;
      }
      h.value = !0;
      try {
        p.value = await w(re, 10);
      } catch {
        p.value = [];
      } finally {
        h.value = !1;
      }
    }
    function $e(re) {
      f.value && (r("manual-entry", f.value.node_type, re.package_id), F());
    }
    function Le(re) {
      f.value && r("manual-entry", f.value.node_type, re.package_id);
    }
    function ye() {
      !f.value || !c.value.trim() || (r("manual-entry", f.value.node_type, c.value.trim()), I());
    }
    return (re, le) => {
      var Pe, Re;
      return s(), o("div", Vi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Wi, [
          e("div", ji, [
            le[6] || (le[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Gi, a(W.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", qi, [
            (s(!0), o(A, null, ee(t.autoResolvedPackages, (ue) => (s(), o("div", {
              key: ue.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Hi, [
                e("code", Ki, a(ue.package_id), 1),
                e("span", Yi, a(ue.node_types_count) + " node type" + a(ue.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Ji, [
                j(ue.package_id) ? (s(), o("span", Xi, " SKIPPED ")) : (s(), o("span", Qi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (G) => Y(ue.package_id)
                }, a(j(ue.package_id) ? "Include" : "Skip"), 9, Zi)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", er)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(A, { key: 2 }, [
          e("div", tr, [
            le[7] || (le[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", sr, a(x.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (s(), M(Ss, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: le[0] || (le[0] = (ue) => E(g.value - 1)),
            onNext: le[1] || (le[1] = (ue) => E(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          f.value ? (s(), o("div", or, [
            k(Mi, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((Pe = f.value.options) != null && Pe.length),
              options: f.value.options,
              choice: (Re = t.nodeChoices) == null ? void 0 : Re.get(f.value.node_type),
              status: D.value,
              "status-label": S.value,
              "search-results": L.value,
              "is-searching": T.value,
              onMarkOptional: O,
              onSkip: R,
              onManualEntry: oe,
              onSearch: ce,
              onOptionSelected: K,
              onClearChoice: he,
              onSearchResultSelected: Le
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", nr, [...le[8] || (le[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), M(Fe, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: le[4] || (le[4] = Te((ue) => z.value = !0, ["self"])),
            onMouseup: Te(V, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: le[3] || (le[3] = (ue) => z.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                le[9] || (le[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              e("div", ar, [
                k(tt, {
                  modelValue: i.value,
                  "onUpdate:modelValue": le[2] || (le[2] = (ue) => i.value = ue),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                e("div", lr, [
                  p.value.length > 0 ? (s(), o("div", ir, [
                    (s(!0), o(A, null, ee(p.value, (ue) => (s(), o("div", {
                      key: ue.package_id,
                      class: "node-search-result-item",
                      onClick: (G) => $e(ue)
                    }, [
                      e("div", dr, [
                        e("code", cr, a(ue.package_id), 1),
                        ue.match_confidence ? (s(), M(Yt, {
                          key: 0,
                          confidence: ue.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      ue.description ? (s(), o("div", ur, a(ue.description), 1)) : d("", !0)
                    ], 8, rr))), 128))
                  ])) : h.value ? (s(), o("div", mr, "Searching...")) : i.value ? (s(), o("div", vr, 'No packages found matching "' + a(i.value) + '"', 1)) : (s(), o("div", fr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), M(Fe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Te(I, ["self"])
          }, [
            e("div", gr, [
              e("div", { class: "node-modal-header" }, [
                le[10] || (le[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", pr, [
                k(tt, {
                  modelValue: c.value,
                  "onUpdate:modelValue": le[5] || (le[5] = (ue) => c.value = ue),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", hr, [
                  k(de, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...le[11] || (le[11] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(de, {
                    variant: "primary",
                    disabled: !c.value.trim(),
                    onClick: ye
                  }, {
                    default: l(() => [...le[12] || (le[12] = [
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
}), wr = /* @__PURE__ */ Z(yr, [["__scopeId", "data-v-281581bc"]]), kr = { class: "node-info" }, br = { class: "node-info-text" }, _r = { class: "item-body" }, $r = {
  key: 0,
  class: "resolved-state"
}, Cr = {
  key: 1,
  class: "multiple-options"
}, xr = { class: "options-list" }, Sr = ["onClick"], Ir = ["name", "value", "checked", "onChange"], Er = { class: "option-content" }, Mr = { class: "option-header" }, Tr = { class: "option-filename" }, Rr = { class: "option-meta" }, zr = { class: "option-size" }, Lr = { class: "option-category" }, Pr = { class: "option-path" }, Dr = { class: "action-buttons" }, Nr = {
  key: 2,
  class: "unresolved"
}, Ur = { class: "action-buttons" }, Or = /* @__PURE__ */ X({
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
    const n = t, r = u, w = P(() => !!n.choice);
    P(() => {
      var i;
      return (i = n.choice) == null ? void 0 : i.action;
    }), P(() => {
      var i, c;
      return ((c = (i = n.choice) == null ? void 0 : i.selected_model) == null ? void 0 : c.filename) || "selected";
    });
    const g = P(() => {
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
    function v(i) {
      r("option-selected", i);
    }
    function m(i) {
      if (!i) return "Unknown";
      const c = i / (1024 * 1024 * 1024);
      return c >= 1 ? `${c.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, c) => (s(), o("div", {
      class: ae(["model-resolution-item", { resolved: w.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", kr, [
        e("span", br, [
          c[7] || (c[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ae(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", _r, [
        w.value ? (s(), o("div", $r, [
          k(de, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (p) => r("clear-choice"))
          }, {
            default: l(() => [...c[8] || (c[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Cr, [
          c[12] || (c[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", xr, [
            (s(!0), o(A, null, ee(t.options, (p, h) => (s(), o("label", {
              key: p.model.hash,
              class: ae(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (b) => v(h)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (b) => v(h)
              }, null, 40, Ir),
              e("div", Er, [
                e("div", Mr, [
                  e("span", Tr, a(p.model.filename), 1),
                  k(Yt, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Rr, [
                  e("span", zr, a(m(p.model.size)), 1),
                  e("span", Lr, a(p.model.category), 1)
                ]),
                e("div", Pr, a(p.model.relative_path), 1)
              ])
            ], 10, Sr))), 128))
          ]),
          e("div", Dr, [
            k(de, {
              variant: "ghost",
              size: "sm",
              onClick: c[1] || (c[1] = (p) => r("search"))
            }, {
              default: l(() => [...c[9] || (c[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "ghost",
              size: "sm",
              onClick: c[2] || (c[2] = (p) => r("download-url"))
            }, {
              default: l(() => [...c[10] || (c[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[3] || (c[3] = (p) => r("mark-optional"))
            }, {
              default: l(() => [...c[11] || (c[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Nr, [
          c[16] || (c[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Ur, [
            k(de, {
              variant: "primary",
              size: "sm",
              onClick: c[4] || (c[4] = (p) => r("search"))
            }, {
              default: l(() => [...c[13] || (c[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[5] || (c[5] = (p) => r("download-url"))
            }, {
              default: l(() => [...c[14] || (c[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[6] || (c[6] = (p) => r("mark-optional"))
            }, {
              default: l(() => [...c[15] || (c[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Br = /* @__PURE__ */ Z(Or, [["__scopeId", "data-v-8a82fefa"]]), Fr = { class: "model-resolution-step" }, Ar = { class: "step-header" }, Vr = { class: "step-info" }, Wr = { class: "step-title" }, jr = { class: "step-description" }, Gr = { class: "stat-badge" }, qr = {
  key: 1,
  class: "step-body"
}, Hr = {
  key: 2,
  class: "empty-state"
}, Kr = { class: "model-search-modal" }, Yr = { class: "model-modal-body" }, Jr = {
  key: 0,
  class: "model-search-results"
}, Qr = ["onClick"], Xr = { class: "model-result-header" }, Zr = { class: "model-result-filename" }, ed = { class: "model-result-meta" }, td = { class: "model-result-category" }, sd = { class: "model-result-size" }, od = {
  key: 0,
  class: "model-result-path"
}, nd = {
  key: 1,
  class: "model-no-results"
}, ad = {
  key: 2,
  class: "model-searching"
}, ld = { class: "model-download-url-modal" }, id = { class: "model-modal-body" }, rd = { class: "model-input-group" }, dd = { class: "model-input-group" }, cd = { class: "model-modal-actions" }, ud = /* @__PURE__ */ X({
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
    function r(F) {
      var I;
      return F && ((I = n[F]) == null ? void 0 : I[0]) || null;
    }
    const w = t, g = u, v = _(0), m = _(!1), i = _(!1), c = _(""), p = _(""), h = _(""), b = _([]), $ = _(!1), z = P(() => w.models[v.value]), V = P(() => w.models.some((F) => F.is_download_intent)), f = P(() => w.models.filter(
      (F) => w.modelChoices.has(F.filename) || F.is_download_intent
    ).length), x = P(() => {
      var I;
      if (!z.value) return "";
      const F = r((I = z.value.reference) == null ? void 0 : I.node_type);
      return F ? `${F}/${z.value.filename}` : "";
    }), L = P(() => {
      var I;
      if (!z.value) return "not-found";
      const F = w.modelChoices.get(z.value.filename);
      if (F)
        switch (F.action) {
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
      return z.value.is_download_intent ? "download" : (I = z.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), T = P(() => {
      var I, ne;
      if (!z.value) return;
      const F = w.modelChoices.get(z.value.filename);
      if (F)
        switch (F.action) {
          case "select":
            return (I = F.selected_model) != null && I.filename ? `→ ${F.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return z.value.is_download_intent ? "Pending Download" : (ne = z.value.options) != null && ne.length ? `${z.value.options.length} matches` : "Not Found";
    });
    function C(F) {
      F >= 0 && F < w.models.length && (v.value = F);
    }
    function W() {
      z.value && g("mark-optional", z.value.filename);
    }
    function j() {
      z.value && g("skip", z.value.filename);
    }
    function Y(F) {
      z.value && g("option-selected", z.value.filename, F);
    }
    function D() {
      z.value && g("clear-choice", z.value.filename);
    }
    function S() {
      z.value && (c.value = z.value.filename, m.value = !0);
    }
    function E() {
      z.value && (p.value = z.value.download_source || "", h.value = z.value.target_path || x.value, i.value = !0);
    }
    function O() {
      m.value = !1, c.value = "", b.value = [];
    }
    function R() {
      i.value = !1, p.value = "", h.value = "";
    }
    function K() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function he(F) {
      z.value && O();
    }
    function ce() {
      !z.value || !p.value.trim() || (g("download-url", z.value.filename, p.value.trim(), h.value.trim() || void 0), R());
    }
    function oe(F) {
      if (!F) return "Unknown";
      const I = F / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(F / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (F, I) => {
      var ne, se, Ie;
      return s(), o("div", Fr, [
        e("div", Ar, [
          e("div", Vr, [
            e("h3", Wr, a(V.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", jr, a(V.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Gr, a(f.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        z.value ? (s(), M(Ss, {
          key: 0,
          "item-name": z.value.filename,
          "current-index": v.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = ($e) => C(v.value - 1)),
          onNext: I[1] || (I[1] = ($e) => C(v.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        z.value ? (s(), o("div", qr, [
          k(Br, {
            filename: z.value.filename,
            "node-type": ((ne = z.value.reference) == null ? void 0 : ne.node_type) || "Unknown",
            "has-multiple-options": !!((se = z.value.options) != null && se.length),
            options: z.value.options,
            choice: (Ie = t.modelChoices) == null ? void 0 : Ie.get(z.value.filename),
            status: L.value,
            "status-label": T.value,
            onMarkOptional: W,
            onSkip: j,
            onDownloadUrl: E,
            onSearch: S,
            onOptionSelected: Y,
            onClearChoice: D
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Hr, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), M(Fe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Te(O, ["self"])
          }, [
            e("div", Kr, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", Yr, [
                k(tt, {
                  modelValue: c.value,
                  "onUpdate:modelValue": I[2] || (I[2] = ($e) => c.value = $e),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", Jr, [
                  (s(!0), o(A, null, ee(b.value, ($e) => (s(), o("div", {
                    key: $e.hash,
                    class: "model-search-result-item",
                    onClick: (Le) => he()
                  }, [
                    e("div", Xr, [
                      e("code", Zr, a($e.filename), 1)
                    ]),
                    e("div", ed, [
                      e("span", td, a($e.category), 1),
                      e("span", sd, a(oe($e.size)), 1)
                    ]),
                    $e.relative_path ? (s(), o("div", od, a($e.relative_path), 1)) : d("", !0)
                  ], 8, Qr))), 128))
                ])) : c.value && !$.value ? (s(), o("div", nd, ' No models found matching "' + a(c.value) + '" ', 1)) : d("", !0),
                $.value ? (s(), o("div", ad, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), M(Fe, { to: "body" }, [
          i.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Te(R, ["self"])
          }, [
            e("div", ld, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              e("div", id, [
                e("div", rd, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(tt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": I[3] || (I[3] = ($e) => p.value = $e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", dd, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(tt, {
                    modelValue: h.value,
                    "onUpdate:modelValue": I[4] || (I[4] = ($e) => h.value = $e),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", cd, [
                  k(de, {
                    variant: "secondary",
                    onClick: R
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(de, {
                    variant: "primary",
                    disabled: !p.value.trim() || !h.value.trim(),
                    onClick: ce
                  }, {
                    default: l(() => [...I[11] || (I[11] = [
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
}), md = /* @__PURE__ */ Z(ud, [["__scopeId", "data-v-c6acbada"]]), vd = { class: "applying-step" }, fd = {
  key: 0,
  class: "phase-content"
}, gd = {
  key: 1,
  class: "phase-content"
}, pd = { class: "phase-description" }, hd = { class: "overall-progress" }, yd = { class: "progress-bar" }, wd = { class: "progress-label" }, kd = { class: "install-list" }, bd = { class: "install-icon" }, _d = { key: 0 }, $d = {
  key: 1,
  class: "spinner"
}, Cd = { key: 2 }, xd = { key: 3 }, Sd = {
  key: 0,
  class: "install-error"
}, Id = {
  key: 2,
  class: "phase-content"
}, Ed = { class: "phase-header" }, Md = { class: "phase-title" }, Td = { class: "completion-summary" }, Rd = {
  key: 0,
  class: "summary-item success"
}, zd = { class: "summary-text" }, Ld = {
  key: 1,
  class: "summary-item error"
}, Pd = { class: "summary-text" }, Dd = {
  key: 2,
  class: "failed-list"
}, Nd = { class: "failed-node-id" }, Ud = { class: "failed-error" }, Od = {
  key: 4,
  class: "summary-item success"
}, Bd = {
  key: 5,
  class: "restart-prompt"
}, Fd = {
  key: 3,
  class: "phase-content error"
}, Ad = { class: "error-message" }, Vd = /* @__PURE__ */ X({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = P(() => {
      var c, p;
      const m = ((c = u.progress.nodeInstallProgress) == null ? void 0 : c.totalNodes) || u.progress.nodesToInstall.length;
      if (!m) return 0;
      const i = ((p = u.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0;
      return Math.round(i / m * 100);
    }), r = P(() => {
      var m;
      return ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((i) => !i.success)) || [];
    }), w = P(() => r.value.length > 0);
    function g(m, i) {
      var p, h;
      const c = (p = u.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.find((b) => b.node_id === m);
      return c ? c.success ? "complete" : "failed" : ((h = u.progress.nodeInstallProgress) == null ? void 0 : h.currentIndex) === i ? "installing" : "pending";
    }
    function v(m) {
      var i, c;
      return (c = (i = u.progress.nodeInstallProgress) == null ? void 0 : i.completedNodes.find((p) => p.node_id === m)) == null ? void 0 : c.error;
    }
    return (m, i) => {
      var c, p, h, b;
      return s(), o("div", vd, [
        t.progress.phase === "resolving" ? (s(), o("div", fd, [...i[2] || (i[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", gd, [
          i[3] || (i[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", pd, " Installing " + a((((c = t.progress.nodeInstallProgress) == null ? void 0 : c.currentIndex) ?? 0) + 1) + " of " + a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", hd, [
            e("div", yd, [
              e("div", {
                class: "progress-fill",
                style: at({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", wd, a(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", kd, [
            (s(!0), o(A, null, ee(t.progress.nodesToInstall, ($, z) => (s(), o("div", {
              key: $,
              class: ae(["install-item", g($, z)])
            }, [
              e("span", bd, [
                g($, z) === "pending" ? (s(), o("span", _d, "○")) : g($, z) === "installing" ? (s(), o("span", $d, "◌")) : g($, z) === "complete" ? (s(), o("span", Cd, "✓")) : g($, z) === "failed" ? (s(), o("span", xd, "✗")) : d("", !0)
              ]),
              e("code", null, a($), 1),
              v($) ? (s(), o("span", Sd, a(v($)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Id, [
          e("div", Ed, [
            e("span", {
              class: ae(["phase-icon", w.value ? "warning" : "success"])
            }, a(w.value ? "⚠" : "✓"), 3),
            e("h3", Md, a(w.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Td, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Rd, [
              i[4] || (i[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", zd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            r.value.length > 0 ? (s(), o("div", Ld, [
              i[5] || (i[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Pd, a(r.value.length) + " package" + a(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            r.value.length > 0 ? (s(), o("div", Dd, [
              (s(!0), o(A, null, ee(r.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", Nd, a($.node_id), 1),
                e("span", Ud, a($.error), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: i[0] || (i[0] = ($) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(r.value.length) + ") ", 1)) : d("", !0),
            w.value ? d("", !0) : (s(), o("div", Od, [...i[6] || (i[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            i[8] || (i[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Bd, [
              i[7] || (i[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: i[1] || (i[1] = ($) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Fd, [
          i[9] || (i[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Ad, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), Wd = /* @__PURE__ */ Z(Vd, [["__scopeId", "data-v-5efaae58"]]), jd = {
  key: 0,
  class: "loading-state"
}, Gd = {
  key: 1,
  class: "wizard-content"
}, qd = {
  key: 0,
  class: "step-content"
}, Hd = { class: "analysis-summary" }, Kd = { class: "analysis-header" }, Yd = { class: "summary-description" }, Jd = { class: "stats-grid" }, Qd = { class: "stat-card" }, Xd = { class: "stat-items" }, Zd = {
  key: 0,
  class: "stat-item success"
}, ec = { class: "stat-count" }, tc = {
  key: 1,
  class: "stat-item info"
}, sc = { class: "stat-count" }, oc = {
  key: 2,
  class: "stat-item warning"
}, nc = { class: "stat-count" }, ac = {
  key: 3,
  class: "stat-item error"
}, lc = { class: "stat-count" }, ic = { class: "stat-card" }, rc = { class: "stat-items" }, dc = { class: "stat-item success" }, cc = { class: "stat-count" }, uc = {
  key: 0,
  class: "stat-item info"
}, mc = { class: "stat-count" }, vc = {
  key: 1,
  class: "stat-item warning"
}, fc = { class: "stat-count" }, gc = {
  key: 2,
  class: "stat-item warning"
}, pc = { class: "stat-count" }, hc = {
  key: 3,
  class: "stat-item error"
}, yc = { class: "stat-count" }, wc = {
  key: 0,
  class: "status-message warning"
}, kc = { class: "status-text" }, bc = {
  key: 1,
  class: "status-message info"
}, _c = { class: "status-text" }, $c = {
  key: 2,
  class: "status-message info"
}, Cc = { class: "status-text" }, xc = {
  key: 3,
  class: "status-message warning"
}, Sc = { class: "status-text" }, Ic = {
  key: 4,
  class: "status-message success"
}, Ec = {
  key: 5,
  class: "category-mismatch-section"
}, Mc = { class: "mismatch-list" }, Tc = { class: "mismatch-path" }, Rc = { class: "mismatch-target" }, zc = {
  key: 3,
  class: "step-content"
}, Lc = { class: "review-summary" }, Pc = { class: "review-stats" }, Dc = { class: "review-stat" }, Nc = { class: "stat-value" }, Uc = { class: "review-stat" }, Oc = { class: "stat-value" }, Bc = { class: "review-stat" }, Fc = { class: "stat-value" }, Ac = { class: "review-stat" }, Vc = { class: "stat-value" }, Wc = {
  key: 0,
  class: "review-section"
}, jc = { class: "section-title" }, Gc = { class: "review-items" }, qc = { class: "item-name" }, Hc = { class: "item-choice" }, Kc = {
  key: 0,
  class: "choice-badge install"
}, Yc = {
  key: 1,
  class: "choice-badge skip"
}, Jc = {
  key: 1,
  class: "review-section"
}, Qc = { class: "section-title" }, Xc = { class: "review-items" }, Zc = { class: "item-name" }, eu = { class: "item-choice" }, tu = {
  key: 0,
  class: "choice-badge install"
}, su = {
  key: 1,
  class: "choice-badge optional"
}, ou = {
  key: 2,
  class: "choice-badge skip"
}, nu = {
  key: 1,
  class: "choice-badge pending"
}, au = {
  key: 2,
  class: "review-section"
}, lu = { class: "section-title" }, iu = { class: "review-items" }, ru = { class: "item-name" }, du = { class: "item-choice" }, cu = {
  key: 0,
  class: "choice-badge install"
}, uu = {
  key: 1,
  class: "choice-badge download"
}, mu = {
  key: 2,
  class: "choice-badge optional"
}, vu = {
  key: 3,
  class: "choice-badge skip"
}, fu = {
  key: 4,
  class: "choice-badge skip"
}, gu = {
  key: 1,
  class: "choice-badge download"
}, pu = {
  key: 2,
  class: "choice-badge pending"
}, hu = {
  key: 3,
  class: "no-choices"
}, yu = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: w, applyResolution: g, installNodes: v, queueModelDownloads: m, progress: i, resetProgress: c } = xs(), { loadPendingDownloads: p } = Ft(), { openFileLocation: h } = Oe(), b = _(null), $ = _(!1), z = _(!1), V = _(null), f = _("analysis"), x = _([]), L = _(/* @__PURE__ */ new Map()), T = _(/* @__PURE__ */ new Map()), C = _(/* @__PURE__ */ new Set()), W = P(() => {
      const J = [
        { id: "analysis", label: "Analysis" }
      ];
      return (Y.value || E.value) && J.push({ id: "nodes", label: "Nodes" }), (D.value || S.value) && J.push({ id: "models", label: "Models" }), J.push({ id: "review", label: "Review" }), f.value === "applying" && J.push({ id: "applying", label: "Applying" }), J;
    }), j = P(() => b.value ? b.value.stats.needs_user_input : !1), Y = P(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), D = P(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), S = P(() => b.value ? b.value.stats.download_intents > 0 : !1), E = P(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), O = P(() => b.value ? b.value.nodes.resolved.length : 0), R = P(() => b.value ? b.value.models.resolved.filter((J) => J.has_category_mismatch) : []), K = P(() => R.value.length > 0), he = P(() => {
      if (!b.value) return [];
      const J = b.value.nodes.resolved.filter((B) => !B.is_installed), U = /* @__PURE__ */ new Set();
      return J.filter((B) => U.has(B.package.package_id) ? !1 : (U.add(B.package.package_id), !0));
    }), ce = P(() => {
      if (!b.value) return [];
      const J = b.value.nodes.resolved.filter((B) => !B.is_installed), U = /* @__PURE__ */ new Map();
      for (const B of J) {
        const Q = U.get(B.package.package_id);
        Q ? Q.node_types_count++ : U.set(B.package.package_id, {
          package_id: B.package.package_id,
          title: B.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), oe = P(() => he.value.filter((J) => !C.value.has(J.package.package_id))), F = P(() => b.value ? b.value.models.resolved.filter((J) => J.match_type === "download_intent").map((J) => ({
      filename: J.reference.widget_value,
      reference: J.reference,
      is_download_intent: !0,
      resolved_model: J.model,
      download_source: J.download_source,
      target_path: J.target_path
    })) : []), I = P(() => {
      if (!b.value) return [];
      const J = b.value.nodes.unresolved.map((B) => ({
        node_type: B.reference.node_type,
        reason: B.reason,
        is_unresolved: !0,
        options: void 0
      })), U = b.value.nodes.ambiguous.map((B) => ({
        node_type: B.reference.node_type,
        has_multiple_options: !0,
        options: B.options.map((Q) => ({
          package_id: Q.package.package_id,
          title: Q.package.title,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          is_installed: Q.is_installed
        }))
      }));
      return [...J, ...U];
    }), ne = P(() => {
      if (!b.value) return [];
      const J = b.value.models.unresolved.map((B) => ({
        filename: B.reference.widget_value,
        reference: B.reference,
        reason: B.reason,
        is_unresolved: !0,
        options: void 0
      })), U = b.value.models.ambiguous.map((B) => ({
        filename: B.reference.widget_value,
        reference: B.reference,
        has_multiple_options: !0,
        options: B.options.map((Q) => ({
          model: Q.model,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          has_download_source: Q.has_download_source
        }))
      }));
      return [...J, ...U];
    }), se = P(() => {
      const J = ne.value, U = F.value.map((B) => ({
        filename: B.filename,
        reference: B.reference,
        is_download_intent: !0,
        resolved_model: B.resolved_model,
        download_source: B.download_source,
        target_path: B.target_path,
        options: void 0
      }));
      return [...J, ...U];
    }), Ie = P(() => {
      let J = oe.value.length;
      for (const U of L.value.values())
        U.action === "install" && J++;
      for (const U of T.value.values())
        U.action === "select" && J++;
      return J;
    }), $e = P(() => {
      let J = 0;
      for (const U of T.value.values())
        U.action === "download" && J++;
      return J;
    }), Le = P(() => {
      let J = 0;
      for (const U of L.value.values())
        U.action === "optional" && J++;
      for (const U of T.value.values())
        U.action === "optional" && J++;
      return J;
    }), ye = P(() => {
      let J = C.value.size;
      for (const U of L.value.values())
        U.action === "skip" && J++;
      for (const U of T.value.values())
        U.action === "skip" && J++;
      for (const U of I.value)
        L.value.has(U.node_type) || J++;
      for (const U of ne.value)
        T.value.has(U.filename) || J++;
      return J;
    }), re = P(() => {
      const J = {};
      if (J.analysis = { resolved: 1, total: 1 }, Y.value) {
        const U = I.value.length, B = I.value.filter(
          (Q) => L.value.has(Q.node_type)
        ).length;
        J.nodes = { resolved: B, total: U };
      }
      if (D.value || S.value) {
        const U = se.value.length, B = se.value.filter(
          (Q) => T.value.has(Q.filename) || Q.is_download_intent
        ).length;
        J.models = { resolved: B, total: U };
      }
      if (J.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const U = i.totalFiles || 1, B = i.completedFiles.length;
        J.applying = { resolved: B, total: U };
      }
      return J;
    });
    function le(J) {
      f.value = J;
    }
    function Pe() {
      const J = W.value.findIndex((U) => U.id === f.value);
      J > 0 && (f.value = W.value[J - 1].id);
    }
    function Re() {
      const J = W.value.findIndex((U) => U.id === f.value);
      J < W.value.length - 1 && (f.value = W.value[J + 1].id);
    }
    async function ue() {
      $.value = !0, V.value = null;
      try {
        b.value = await w(n.workflowName);
      } catch (J) {
        V.value = J instanceof Error ? J.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function G() {
      x.value.includes("analysis") || x.value.push("analysis"), Y.value || E.value ? f.value = "nodes" : D.value || S.value ? f.value = "models" : f.value = "review";
    }
    function Ce(J) {
      L.value.set(J, { action: "optional" });
    }
    function we(J) {
      L.value.set(J, { action: "skip" });
    }
    function Se(J, U) {
      var Q;
      const B = I.value.find((fe) => fe.node_type === J);
      (Q = B == null ? void 0 : B.options) != null && Q[U] && L.value.set(J, {
        action: "install",
        package_id: B.options[U].package_id
      });
    }
    function ke(J, U) {
      L.value.set(J, {
        action: "install",
        package_id: U
      });
    }
    function ge(J) {
      L.value.delete(J);
    }
    function Ae(J) {
      C.value.has(J) ? C.value.delete(J) : C.value.add(J);
    }
    function ht(J) {
      T.value.set(J, { action: "optional" });
    }
    function it(J) {
      T.value.set(J, { action: "skip" });
    }
    function Ne(J, U) {
      var Q;
      const B = ne.value.find((fe) => fe.filename === J);
      (Q = B == null ? void 0 : B.options) != null && Q[U] && T.value.set(J, {
        action: "select",
        selected_model: B.options[U].model
      });
    }
    function yt(J, U, B) {
      T.value.set(J, {
        action: "download",
        url: U,
        target_path: B
      });
    }
    function vt(J) {
      T.value.delete(J);
    }
    async function wt(J) {
      try {
        await h(J);
      } catch (U) {
        V.value = U instanceof Error ? U.message : "Failed to open file location";
      }
    }
    async function rt() {
      var J;
      z.value = !0, V.value = null, c(), i.phase = "resolving", f.value = "applying";
      try {
        const U = await g(n.workflowName, L.value, T.value, C.value);
        U.models_to_download && U.models_to_download.length > 0 && m(n.workflowName, U.models_to_download);
        const B = [
          ...U.nodes_to_install || [],
          ...oe.value.map((fe) => fe.package.package_id)
        ];
        i.nodesToInstall = [...new Set(B)], i.nodesToInstall.length > 0 && await v(n.workflowName), i.phase = "complete", await p();
        const Q = i.installError || ((J = i.nodeInstallProgress) == null ? void 0 : J.completedNodes.some((fe) => !fe.success));
        !i.needsRestart && !Q && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (U) {
        V.value = U instanceof Error ? U.message : "Failed to apply resolution", i.error = V.value, i.phase = "error";
      } finally {
        z.value = !1;
      }
    }
    function kt() {
      r("refresh"), r("restart"), r("close");
    }
    async function dt() {
      var U;
      const J = ((U = i.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((B) => !B.success).map((B) => B.node_id)) || [];
      if (J.length !== 0) {
        i.phase = "installing", i.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: J.length
        }, i.nodesToInstall = J, i.nodesInstalled = [], i.installError = void 0;
        try {
          await v(n.workflowName), i.phase = "complete";
        } catch (B) {
          i.error = B instanceof Error ? B.message : "Retry failed", i.phase = "error";
        }
      }
    }
    return De(ue), (J, U) => (s(), M(Je, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: $.value,
      error: V.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (B) => r("close"))
    }, {
      body: l(() => [
        $.value && !b.value ? (s(), o("div", jd, [...U[2] || (U[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", Gd, [
          k(Xl, {
            steps: W.value,
            "current-step": f.value,
            "completed-steps": x.value,
            "step-stats": re.value,
            onStepChange: le
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", qd, [
            e("div", Hd, [
              e("div", Kd, [
                U[3] || (U[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Yd, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Jd, [
                e("div", Qd, [
                  U[12] || (U[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Xd, [
                    O.value > 0 ? (s(), o("div", Zd, [
                      U[4] || (U[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", ec, a(O.value), 1),
                      U[5] || (U[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", tc, [
                      U[6] || (U[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", sc, a(b.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", oc, [
                      U[8] || (U[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", nc, a(b.value.nodes.ambiguous.length), 1),
                      U[9] || (U[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", ac, [
                      U[10] || (U[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", lc, a(b.value.nodes.unresolved.length), 1),
                      U[11] || (U[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", ic, [
                  U[23] || (U[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", rc, [
                    e("div", dc, [
                      U[13] || (U[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", cc, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      U[14] || (U[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", uc, [
                      U[15] || (U[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", mc, a(b.value.stats.download_intents), 1),
                      U[16] || (U[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    K.value ? (s(), o("div", vc, [
                      U[17] || (U[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", fc, a(R.value.length), 1),
                      U[18] || (U[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", gc, [
                      U[19] || (U[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", pc, a(b.value.models.ambiguous.length), 1),
                      U[20] || (U[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", hc, [
                      U[21] || (U[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", yc, a(b.value.models.unresolved.length), 1),
                      U[22] || (U[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              j.value ? (s(), o("div", wc, [
                U[24] || (U[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", kc, a(I.value.length + ne.value.length) + " items need your input", 1)
              ])) : E.value ? (s(), o("div", bc, [
                U[25] || (U[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", _c, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(S.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : S.value ? (s(), o("div", $c, [
                U[26] || (U[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Cc, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : K.value ? (s(), o("div", xc, [
                U[27] || (U[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Sc, a(R.value.length) + " model" + a(R.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Ic, [...U[28] || (U[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              K.value ? (s(), o("div", Ec, [
                U[31] || (U[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Mc, [
                  (s(!0), o(A, null, ee(R.value, (B) => {
                    var Q, fe;
                    return s(), o("div", {
                      key: B.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Tc, a(B.actual_category) + "/" + a((Q = B.model) == null ? void 0 : Q.filename), 1),
                      U[30] || (U[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Rc, a((fe = B.expected_categories) == null ? void 0 : fe[0]) + "/", 1),
                      B.file_path ? (s(), M(de, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (He) => wt(B.file_path)
                      }, {
                        default: l(() => [...U[29] || (U[29] = [
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
          f.value === "nodes" ? (s(), M(wr, {
            key: 1,
            nodes: I.value,
            "node-choices": L.value,
            "auto-resolved-packages": ce.value,
            "skipped-packages": C.value,
            onMarkOptional: Ce,
            onSkip: we,
            onOptionSelected: Se,
            onManualEntry: ke,
            onClearChoice: ge,
            onPackageSkip: Ae
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          f.value === "models" ? (s(), M(md, {
            key: 2,
            models: se.value,
            "model-choices": T.value,
            onMarkOptional: ht,
            onSkip: it,
            onOptionSelected: Ne,
            onDownloadUrl: yt,
            onClearChoice: vt
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          f.value === "review" ? (s(), o("div", zc, [
            e("div", Lc, [
              U[36] || (U[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Pc, [
                e("div", Dc, [
                  e("span", Nc, a(Ie.value), 1),
                  U[32] || (U[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Uc, [
                  e("span", Oc, a($e.value), 1),
                  U[33] || (U[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Bc, [
                  e("span", Fc, a(Le.value), 1),
                  U[34] || (U[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Ac, [
                  e("span", Vc, a(ye.value), 1),
                  U[35] || (U[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ce.value.length > 0 ? (s(), o("div", Wc, [
                e("h4", jc, "Node Packages (" + a(ce.value.length) + ")", 1),
                e("div", Gc, [
                  (s(!0), o(A, null, ee(ce.value, (B) => (s(), o("div", {
                    key: B.package_id,
                    class: "review-item"
                  }, [
                    e("code", qc, a(B.package_id), 1),
                    e("div", Hc, [
                      C.value.has(B.package_id) ? (s(), o("span", Yc, "Skipped")) : (s(), o("span", Kc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              I.value.length > 0 ? (s(), o("div", Jc, [
                e("h4", Qc, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", Xc, [
                  (s(!0), o(A, null, ee(I.value, (B) => {
                    var Q, fe, He, H;
                    return s(), o("div", {
                      key: B.node_type,
                      class: "review-item"
                    }, [
                      e("code", Zc, a(B.node_type), 1),
                      e("div", eu, [
                        L.value.has(B.node_type) ? (s(), o(A, { key: 0 }, [
                          ((Q = L.value.get(B.node_type)) == null ? void 0 : Q.action) === "install" ? (s(), o("span", tu, a((fe = L.value.get(B.node_type)) == null ? void 0 : fe.package_id), 1)) : ((He = L.value.get(B.node_type)) == null ? void 0 : He.action) === "optional" ? (s(), o("span", su, " Optional ")) : ((H = L.value.get(B.node_type)) == null ? void 0 : H.action) === "skip" ? (s(), o("span", ou, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", nu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              se.value.length > 0 ? (s(), o("div", au, [
                e("h4", lu, "Models (" + a(se.value.length) + ")", 1),
                e("div", iu, [
                  (s(!0), o(A, null, ee(se.value, (B) => {
                    var Q, fe, He, H, ie, ve, Me;
                    return s(), o("div", {
                      key: B.filename,
                      class: "review-item"
                    }, [
                      e("code", ru, a(B.filename), 1),
                      e("div", du, [
                        T.value.has(B.filename) ? (s(), o(A, { key: 0 }, [
                          ((Q = T.value.get(B.filename)) == null ? void 0 : Q.action) === "select" ? (s(), o("span", cu, a((He = (fe = T.value.get(B.filename)) == null ? void 0 : fe.selected_model) == null ? void 0 : He.filename), 1)) : ((H = T.value.get(B.filename)) == null ? void 0 : H.action) === "download" ? (s(), o("span", uu, " Download ")) : ((ie = T.value.get(B.filename)) == null ? void 0 : ie.action) === "optional" ? (s(), o("span", mu, " Optional ")) : ((ve = T.value.get(B.filename)) == null ? void 0 : ve.action) === "skip" ? (s(), o("span", vu, " Skip ")) : ((Me = T.value.get(B.filename)) == null ? void 0 : Me.action) === "cancel_download" ? (s(), o("span", fu, " Cancel Download ")) : d("", !0)
                        ], 64)) : B.is_download_intent ? (s(), o("span", gu, " Pending Download ")) : (s(), o("span", pu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              he.value.length === 0 && I.value.length === 0 && se.value.length === 0 ? (s(), o("div", hu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          f.value === "applying" ? (s(), M(Wd, {
            key: 4,
            progress: be(i),
            onRestart: kt,
            onRetryFailed: dt
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), M(de, {
          key: 0,
          variant: "secondary",
          disabled: z.value,
          onClick: Pe
        }, {
          default: l(() => [...U[37] || (U[37] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        U[41] || (U[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || be(i).phase === "complete" || be(i).phase === "error" ? (s(), M(de, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (B) => r("close"))
        }, {
          default: l(() => [
            y(a(be(i).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "analysis" ? (s(), M(de, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: G
        }, {
          default: l(() => [...U[38] || (U[38] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        f.value === "nodes" ? (s(), M(de, {
          key: 3,
          variant: "primary",
          onClick: Re
        }, {
          default: l(() => [
            y(a(D.value || S.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "models" ? (s(), M(de, {
          key: 4,
          variant: "primary",
          onClick: Re
        }, {
          default: l(() => [...U[39] || (U[39] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        f.value === "review" ? (s(), M(de, {
          key: 5,
          variant: "primary",
          disabled: z.value,
          loading: z.value,
          onClick: rt
        }, {
          default: l(() => [...U[40] || (U[40] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), wu = /* @__PURE__ */ Z(yu, [["__scopeId", "data-v-6276cf1d"]]), ku = { class: "search-input-wrapper" }, bu = ["value", "placeholder"], _u = /* @__PURE__ */ X({
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
    const n = t, r = u, w = _(null);
    let g;
    function v(i) {
      const c = i.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        r("update:modelValue", c);
      }, n.debounce)) : r("update:modelValue", c);
    }
    function m() {
      var i;
      r("update:modelValue", ""), r("clear"), (i = w.value) == null || i.focus();
    }
    return De(() => {
      n.autoFocus && w.value && w.value.focus();
    }), (i, c) => (s(), o("div", ku, [
      e("input", {
        ref_key: "inputRef",
        ref: w,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: pt(m, ["escape"])
      }, null, 40, bu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), $u = /* @__PURE__ */ Z(_u, [["__scopeId", "data-v-266f857a"]]), Cu = { class: "search-bar" }, xu = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (s(), o("div", Cu, [
      k($u, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), St = /* @__PURE__ */ Z(xu, [["__scopeId", "data-v-3d51bbfd"]]), Su = { class: "section-group" }, Iu = {
  key: 0,
  class: "section-content"
}, Eu = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, r = u, w = _(n.initiallyExpanded);
    function g() {
      n.collapsible && (w.value = !w.value, r("toggle", w.value));
    }
    return (v, m) => (s(), o("section", Su, [
      k(Xe, {
        count: t.count,
        clickable: t.collapsible,
        expanded: w.value,
        onClick: g
      }, {
        default: l(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || w.value ? (s(), o("div", Iu, [
        _e(v.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ Z(Eu, [["__scopeId", "data-v-c48e33ed"]]), Mu = { class: "item-header" }, Tu = {
  key: 0,
  class: "item-icon"
}, Ru = { class: "item-info" }, zu = {
  key: 0,
  class: "item-title"
}, Lu = {
  key: 1,
  class: "item-subtitle"
}, Pu = {
  key: 0,
  class: "item-details"
}, Du = {
  key: 1,
  class: "item-actions"
}, Nu = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = P(() => n.status ? `status-${n.status}` : "");
    return (w, g) => (s(), o("div", {
      class: ae(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: g[0] || (g[0] = (v) => t.clickable && w.$emit("click"))
    }, [
      e("div", Mu, [
        w.$slots.icon ? (s(), o("span", Tu, [
          _e(w.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Ru, [
          w.$slots.title ? (s(), o("div", zu, [
            _e(w.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          w.$slots.subtitle ? (s(), o("div", Lu, [
            _e(w.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      w.$slots.details ? (s(), o("div", Pu, [
        _e(w.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      w.$slots.actions ? (s(), o("div", Du, [
        _e(w.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ Z(Nu, [["__scopeId", "data-v-cc435e0e"]]), Uu = { class: "loading-state" }, Ou = { class: "loading-message" }, Bu = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (s(), o("div", Uu, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Ou, a(t.message), 1)
    ]));
  }
}), ut = /* @__PURE__ */ Z(Bu, [["__scopeId", "data-v-ad8436c9"]]), Fu = { class: "error-state" }, Au = { class: "error-message" }, Vu = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (s(), o("div", Fu, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Au, a(t.message), 1),
      t.retry ? (s(), M(te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), mt = /* @__PURE__ */ Z(Vu, [["__scopeId", "data-v-5397be48"]]), Wu = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: w } = Oe();
    $s();
    const g = _([]), v = _(!1), m = _(null), i = _(""), c = _(!0), p = _(!1), h = _(!1), b = _(!1), $ = _(null), z = P(
      () => g.value.filter((oe) => oe.status === "broken")
    ), V = P(
      () => g.value.filter((oe) => oe.status === "new")
    ), f = P(
      () => g.value.filter((oe) => oe.status === "modified")
    ), x = P(
      () => g.value.filter((oe) => oe.status === "synced")
    ), L = P(() => {
      if (!i.value.trim()) return g.value;
      const oe = i.value.toLowerCase();
      return g.value.filter((F) => F.name.toLowerCase().includes(oe));
    }), T = P(
      () => z.value.filter(
        (oe) => !i.value.trim() || oe.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), C = P(
      () => V.value.filter(
        (oe) => !i.value.trim() || oe.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), W = P(
      () => f.value.filter(
        (oe) => !i.value.trim() || oe.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), j = P(
      () => x.value.filter(
        (oe) => !i.value.trim() || oe.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), Y = P(
      () => p.value ? j.value : j.value.slice(0, 5)
    );
    async function D(oe = !1) {
      v.value = !0, m.value = null;
      try {
        g.value = await w(oe);
      } catch (F) {
        m.value = F instanceof Error ? F.message : "Failed to load workflows";
      } finally {
        v.value = !1;
      }
    }
    u({ loadWorkflows: D });
    function S(oe) {
      $.value = oe, h.value = !0;
    }
    function E(oe) {
      $.value = oe, b.value = !0;
    }
    function O() {
      alert("Bulk resolution not yet implemented");
    }
    function R() {
      r("refresh");
    }
    async function K() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function he(oe) {
      const F = [];
      return oe.missing_nodes > 0 && F.push(`${oe.missing_nodes} missing node${oe.missing_nodes > 1 ? "s" : ""}`), oe.missing_models > 0 && F.push(`${oe.missing_models} missing model${oe.missing_models > 1 ? "s" : ""}`), oe.models_with_category_mismatch && oe.models_with_category_mismatch > 0 && F.push(`${oe.models_with_category_mismatch} model${oe.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), oe.pending_downloads && oe.pending_downloads > 0 && F.push(`${oe.pending_downloads} pending download${oe.pending_downloads > 1 ? "s" : ""}`), F.length > 0 ? F.join(", ") : "Has issues";
    }
    function ce(oe) {
      const F = oe.sync_state === "new" ? "New" : oe.sync_state === "modified" ? "Modified" : oe.sync_state === "synced" ? "Synced" : oe.sync_state;
      return oe.has_path_sync_issues && oe.models_needing_path_sync && oe.models_needing_path_sync > 0 ? `${oe.models_needing_path_sync} model path${oe.models_needing_path_sync > 1 ? "s" : ""} need${oe.models_needing_path_sync === 1 ? "s" : ""} sync` : F || "Unknown";
    }
    return De(D), (oe, F) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, { title: "WORKFLOWS" }, {
            actions: l(() => [
              z.value.length > 0 ? (s(), M(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: l(() => [...F[8] || (F[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(St, {
            modelValue: i.value,
            "onUpdate:modelValue": F[0] || (F[0] = (I) => i.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), M(ut, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), M(mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            T.value.length ? (s(), M(Be, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(T.value, (I) => (s(), M(Ye, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: l(() => [...F[9] || (F[9] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(he(I)), 1)
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => E(I.name)
                    }, {
                      default: l(() => [...F[10] || (F[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(I.name)
                    }, {
                      default: l(() => [...F[11] || (F[11] = [
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
            C.value.length ? (s(), M(Be, {
              key: 1,
              title: "NEW",
              count: C.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(C.value, (I) => (s(), M(Ye, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    y(a(I.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    y(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(ce(I)), 1)
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(I.name)
                    }, {
                      default: l(() => [...F[12] || (F[12] = [
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
            W.value.length ? (s(), M(Be, {
              key: 2,
              title: "MODIFIED",
              count: W.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(W.value, (I) => (s(), M(Ye, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...F[13] || (F[13] = [
                    y("⚡", -1)
                  ])]),
                  title: l(() => [
                    y(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(ce(I)), 1)
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(I.name)
                    }, {
                      default: l(() => [...F[14] || (F[14] = [
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
            j.value.length ? (s(), M(Be, {
              key: 3,
              title: "SYNCED",
              count: j.value.length,
              collapsible: !0,
              "initially-expanded": c.value,
              onToggle: F[2] || (F[2] = (I) => c.value = I)
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(Y.value, (I) => (s(), M(Ye, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    y(a(I.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    y(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(ce(I)), 1)
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => S(I.name)
                    }, {
                      default: l(() => [...F[15] || (F[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && j.value.length > 5 ? (s(), M(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: F[1] || (F[1] = (I) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    y(" View all " + a(j.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            L.value.length ? d("", !0) : (s(), M(st, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && $.value ? (s(), M(Fl, {
        key: 0,
        "workflow-name": $.value,
        onClose: F[3] || (F[3] = (I) => h.value = !1),
        onResolve: F[4] || (F[4] = (I) => E($.value)),
        onRefresh: F[5] || (F[5] = (I) => r("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && $.value ? (s(), M(wu, {
        key: 1,
        "workflow-name": $.value,
        onClose: F[6] || (F[6] = (I) => b.value = !1),
        onInstall: R,
        onRefresh: F[7] || (F[7] = (I) => r("refresh")),
        onRestart: K
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), ju = /* @__PURE__ */ Z(Wu, [["__scopeId", "data-v-591d06d5"]]), Gu = /* @__PURE__ */ X({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: ae(["summary-bar", t.variant])
    }, [
      _e(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), It = /* @__PURE__ */ Z(Gu, [["__scopeId", "data-v-ccb7816e"]]), qu = {
  key: 0,
  class: "model-details"
}, Hu = { class: "detail-section" }, Ku = { class: "detail-row" }, Yu = { class: "detail-value mono" }, Ju = { class: "detail-row" }, Qu = { class: "detail-value mono" }, Xu = { class: "detail-row" }, Zu = { class: "detail-value mono" }, em = { class: "detail-row" }, tm = { class: "detail-value" }, sm = { class: "detail-row" }, om = { class: "detail-value" }, nm = { class: "detail-row" }, am = { class: "detail-value" }, lm = { class: "detail-section" }, im = { class: "section-header" }, rm = {
  key: 0,
  class: "locations-list"
}, dm = { class: "location-path mono" }, cm = {
  key: 0,
  class: "location-modified"
}, um = ["onClick"], mm = {
  key: 1,
  class: "empty-state"
}, vm = { class: "detail-section" }, fm = { class: "section-header" }, gm = {
  key: 0,
  class: "sources-list"
}, pm = { class: "source-type" }, hm = ["href"], ym = ["disabled", "onClick"], wm = {
  key: 1,
  class: "empty-state"
}, km = { class: "add-source-form" }, bm = ["disabled"], _m = {
  key: 2,
  class: "source-error"
}, $m = {
  key: 3,
  class: "source-success"
}, Cm = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: w, removeModelSource: g, openFileLocation: v } = Oe(), m = _(null), i = _(!0), c = _(null), p = _(""), h = _(!1), b = _(null), $ = _(null), z = _(null), V = _(null);
    let f = null;
    function x(D, S = "success", E = 2e3) {
      f && clearTimeout(f), V.value = { message: D, type: S }, f = setTimeout(() => {
        V.value = null;
      }, E);
    }
    function L(D) {
      if (!D) return "Unknown";
      const S = 1024 * 1024 * 1024, E = 1024 * 1024;
      return D >= S ? `${(D / S).toFixed(1)} GB` : D >= E ? `${(D / E).toFixed(0)} MB` : `${(D / 1024).toFixed(0)} KB`;
    }
    function T(D) {
      navigator.clipboard.writeText(D), x("Copied to clipboard!");
    }
    async function C(D) {
      try {
        await v(D), x("Opening file location...");
      } catch {
        x("Failed to open location", "error");
      }
    }
    async function W() {
      if (!(!p.value.trim() || !m.value)) {
        h.value = !0, $.value = null, z.value = null;
        try {
          await w(m.value.hash, p.value.trim()), z.value = "Source added successfully!", p.value = "", await Y();
        } catch (D) {
          $.value = D instanceof Error ? D.message : "Failed to add source";
        } finally {
          h.value = !1;
        }
      }
    }
    async function j(D) {
      if (m.value) {
        b.value = D, $.value = null, z.value = null;
        try {
          await g(m.value.hash, D), x("Source removed"), await Y();
        } catch (S) {
          $.value = S instanceof Error ? S.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function Y() {
      i.value = !0, c.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (D) {
        c.value = D instanceof Error ? D.message : "Failed to load model details";
      } finally {
        i.value = !1;
      }
    }
    return De(Y), (D, S) => {
      var E;
      return s(), o(A, null, [
        k(Je, {
          title: `Model Details: ${((E = m.value) == null ? void 0 : E.filename) || "Loading..."}`,
          size: "lg",
          loading: i.value,
          error: c.value,
          onClose: S[5] || (S[5] = (O) => D.$emit("close"))
        }, {
          body: l(() => {
            var O, R, K, he;
            return [
              m.value ? (s(), o("div", qu, [
                e("section", Hu, [
                  e("div", Ku, [
                    S[6] || (S[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Yu, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[0] || (S[0] = (ce) => T(m.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Ju, [
                    S[7] || (S[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Qu, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[1] || (S[1] = (ce) => T(m.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Xu, [
                    S[8] || (S[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Zu, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[2] || (S[2] = (ce) => T(m.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", em, [
                    S[9] || (S[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", tm, a(L(m.value.size)), 1)
                  ]),
                  e("div", sm, [
                    S[10] || (S[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", om, a(m.value.category), 1)
                  ]),
                  e("div", nm, [
                    S[11] || (S[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", am, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", lm, [
                  e("h4", im, "Locations (" + a(((O = m.value.locations) == null ? void 0 : O.length) || 0) + ")", 1),
                  (R = m.value.locations) != null && R.length ? (s(), o("div", rm, [
                    (s(!0), o(A, null, ee(m.value.locations, (ce, oe) => (s(), o("div", {
                      key: oe,
                      class: "location-item"
                    }, [
                      e("span", dm, a(ce.path), 1),
                      ce.modified ? (s(), o("span", cm, "Modified: " + a(ce.modified), 1)) : d("", !0),
                      ce.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (F) => C(ce.path)
                      }, " Open File Location ", 8, um)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", mm, "No locations found"))
                ]),
                e("section", vm, [
                  e("h4", fm, "Download Sources (" + a(((K = m.value.sources) == null ? void 0 : K.length) || 0) + ")", 1),
                  (he = m.value.sources) != null && he.length ? (s(), o("div", gm, [
                    (s(!0), o(A, null, ee(m.value.sources, (ce, oe) => (s(), o("div", {
                      key: oe,
                      class: "source-item"
                    }, [
                      e("span", pm, a(ce.type) + ":", 1),
                      e("a", {
                        href: ce.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(ce.url), 9, hm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === ce.url,
                        onClick: (F) => j(ce.url)
                      }, a(b.value === ce.url ? "..." : "×"), 9, ym)
                    ]))), 128))
                  ])) : (s(), o("div", wm, " No download sources configured ")),
                  e("div", km, [
                    Ue(e("input", {
                      "onUpdate:modelValue": S[3] || (S[3] = (ce) => p.value = ce),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Dt, p.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !p.value.trim() || h.value,
                      onClick: W
                    }, a(h.value ? "Adding..." : "Add Source"), 9, bm)
                  ]),
                  $.value ? (s(), o("p", _m, a($.value), 1)) : d("", !0),
                  z.value ? (s(), o("p", $m, a(z.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: S[4] || (S[4] = (O) => D.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), M(Fe, { to: "body" }, [
          V.value ? (s(), o("div", {
            key: 0,
            class: ae(["toast", V.value.type])
          }, a(V.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), rs = /* @__PURE__ */ Z(Cm, [["__scopeId", "data-v-f15cbb56"]]), xm = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: w } = Oe(), g = _([]), v = _([]), m = _("production"), i = _(!1), c = _(null), p = _(""), h = _(!1), b = _(null);
    function $() {
      h.value = !1, n("navigate", "model-index");
    }
    const z = P(
      () => g.value.reduce((Y, D) => Y + (D.size || 0), 0)
    ), V = P(() => {
      if (!p.value.trim()) return g.value;
      const Y = p.value.toLowerCase();
      return g.value.filter((D) => D.filename.toLowerCase().includes(Y));
    }), f = P(() => {
      if (!p.value.trim()) return v.value;
      const Y = p.value.toLowerCase();
      return v.value.filter((D) => D.filename.toLowerCase().includes(Y));
    }), x = P(() => {
      const Y = {};
      for (const S of V.value) {
        const E = S.type || "other";
        Y[E] || (Y[E] = []), Y[E].push(S);
      }
      const D = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(Y).sort(([S], [E]) => {
        const O = D.indexOf(S), R = D.indexOf(E);
        return O >= 0 && R >= 0 ? O - R : O >= 0 ? -1 : R >= 0 ? 1 : S.localeCompare(E);
      }).map(([S, E]) => ({ type: S, models: E }));
    });
    function L(Y) {
      if (!Y) return "Unknown";
      const D = Y / (1024 * 1024);
      return D >= 1024 ? `${(D / 1024).toFixed(1)} GB` : `${D.toFixed(0)} MB`;
    }
    function T(Y) {
      b.value = Y.hash || Y.filename;
    }
    function C(Y) {
      n("navigate", "model-index");
    }
    function W(Y) {
      alert(`Download functionality not yet implemented for ${Y}`);
    }
    async function j() {
      i.value = !0, c.value = null;
      try {
        const Y = await r();
        g.value = Y, v.value = [];
        const D = await w();
        m.value = D.environment || "production";
      } catch (Y) {
        c.value = Y instanceof Error ? Y.message : "Failed to load models";
      } finally {
        i.value = !1;
      }
    }
    return De(j), (Y, D) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (S) => h.value = !0)
          })
        ]),
        search: l(() => [
          k(St, {
            modelValue: p.value,
            "onUpdate:modelValue": D[1] || (D[1] = (S) => p.value = S),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          i.value ? (s(), M(ut, {
            key: 0,
            message: "Loading environment models..."
          })) : c.value ? (s(), M(mt, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length ? (s(), M(It, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(g.value.length) + " models • " + a(L(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(A, null, ee(x.value, (S) => (s(), M(Be, {
              key: S.type,
              title: S.type.toUpperCase(),
              count: S.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(S.models, (E) => (s(), M(Ye, {
                  key: E.hash || E.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...D[4] || (D[4] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(E.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(L(E.size)), 1)
                  ]),
                  details: l(() => [
                    k(ze, {
                      label: "Used by:",
                      value: (E.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(ze, {
                      label: "Path:",
                      value: E.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => T(E)
                    }, {
                      default: l(() => [...D[5] || (D[5] = [
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
            f.value.length ? (s(), M(Be, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(f.value, (S) => (s(), M(Ye, {
                  key: S.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...D[6] || (D[6] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(S.filename), 1)
                  ]),
                  subtitle: l(() => [...D[7] || (D[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var E;
                    return [
                      k(ze, {
                        label: "Required by:",
                        value: ((E = S.workflow_names) == null ? void 0 : E.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (E) => W(S.filename)
                    }, {
                      default: l(() => [...D[8] || (D[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => C(S.filename)
                    }, {
                      default: l(() => [...D[9] || (D[9] = [
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
            !V.value.length && !f.value.length ? (s(), M(st, {
              key: 2,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(lt, {
        show: h.value,
        title: "About Environment Models",
        onClose: D[2] || (D[2] = (S) => h.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            D[10] || (D[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            D[11] || (D[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          k(te, {
            variant: "primary",
            onClick: $
          }, {
            default: l(() => [...D[12] || (D[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), M(rs, {
        key: 0,
        identifier: b.value,
        onClose: D[3] || (D[3] = (S) => b.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Sm = /* @__PURE__ */ Z(xm, [["__scopeId", "data-v-cb4f12b3"]]), Im = {
  key: 0,
  class: "indexing-progress"
}, Em = { class: "progress-info" }, Mm = { class: "progress-label" }, Tm = { class: "progress-count" }, Rm = { class: "progress-bar" }, zm = { class: "modal-content" }, Lm = { class: "modal-header" }, Pm = { class: "modal-body" }, Dm = { class: "input-group" }, Nm = { class: "current-path" }, Um = { class: "input-group" }, Om = { class: "modal-footer" }, Bm = { class: "modal-content" }, Fm = { class: "modal-header" }, Am = { class: "modal-body" }, Vm = { class: "input-group" }, Wm = { class: "input-group" }, jm = { class: "modal-footer" }, Gm = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: w,
      setModelsDirectory: g
    } = Oe(), { addToQueue: v } = Ft(), m = u, i = _([]), c = _(!1), p = _(!1), h = _(null), b = _(""), $ = _(!1), z = _(null), V = _(!1), f = _(null), x = _(""), L = _(!1), T = _(!1), C = _(""), W = _(""), j = _(null), Y = P(
      () => i.value.reduce((F, I) => F + (I.size || 0), 0)
    ), D = P(() => {
      if (!b.value.trim()) return i.value;
      const F = b.value.toLowerCase();
      return i.value.filter((I) => {
        const ne = I, se = I.sha256 || ne.sha256_hash || "";
        return I.filename.toLowerCase().includes(F) || se.toLowerCase().includes(F);
      });
    }), S = P(() => {
      const F = {};
      for (const ne of D.value) {
        const se = ne.type || "other";
        F[se] || (F[se] = []), F[se].push(ne);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(F).sort(([ne], [se]) => {
        const Ie = I.indexOf(ne), $e = I.indexOf(se);
        return Ie >= 0 && $e >= 0 ? Ie - $e : Ie >= 0 ? -1 : $e >= 0 ? 1 : ne.localeCompare(se);
      }).map(([ne, se]) => ({ type: ne, models: se }));
    });
    function E(F) {
      if (!F) return "Unknown";
      const I = 1024 * 1024 * 1024, ne = 1024 * 1024;
      return F >= I ? `${(F / I).toFixed(1)} GB` : F >= ne ? `${(F / ne).toFixed(0)} MB` : `${(F / 1024).toFixed(0)} KB`;
    }
    function O(F) {
      z.value = F.hash || F.filename;
    }
    async function R() {
      p.value = !0, h.value = null;
      try {
        const F = await r();
        await ce(), F.changes > 0 && console.log(`Scan complete: ${F.changes} changes detected`);
      } catch (F) {
        h.value = F instanceof Error ? F.message : "Failed to scan models";
      } finally {
        p.value = !1;
      }
    }
    async function K() {
      if (x.value.trim()) {
        L.value = !0, h.value = null;
        try {
          const F = await g(x.value.trim());
          f.value = F.path, V.value = !1, x.value = "", await ce(), console.log(`Directory changed: ${F.models_indexed} models indexed`), m("refresh");
        } catch (F) {
          h.value = F instanceof Error ? F.message : "Failed to change directory";
        } finally {
          L.value = !1;
        }
      }
    }
    function he() {
      if (!C.value.trim() || !W.value.trim()) return;
      const F = W.value.split("/").pop() || "model.safetensors";
      v([{
        workflow: "__manual__",
        filename: F,
        url: C.value.trim(),
        targetPath: W.value.trim()
      }]), C.value = "", W.value = "", T.value = !1;
    }
    async function ce() {
      c.value = !0, h.value = null;
      try {
        i.value = await n();
      } catch (F) {
        h.value = F instanceof Error ? F.message : "Failed to load workspace models";
      } finally {
        c.value = !1;
      }
    }
    async function oe() {
      try {
        const F = await w();
        f.value = F.path;
      } catch {
      }
    }
    return De(() => {
      ce(), oe();
    }), (F, I) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (ne) => $.value = !0)
          }, {
            actions: l(() => [
              k(te, {
                variant: "primary",
                size: "sm",
                disabled: p.value,
                onClick: R
              }, {
                default: l(() => [
                  y(a(p.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (ne) => V.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (ne) => T.value = !0)
              }, {
                default: l(() => [...I[16] || (I[16] = [
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
        search: l(() => [
          j.value ? (s(), o("div", Im, [
            e("div", Em, [
              e("span", Mm, a(j.value.message), 1),
              e("span", Tm, a(j.value.current) + "/" + a(j.value.total), 1)
            ]),
            e("div", Rm, [
              e("div", {
                class: "progress-fill",
                style: at({ width: `${j.value.current / j.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          k(St, {
            modelValue: b.value,
            "onUpdate:modelValue": I[3] || (I[3] = (ne) => b.value = ne),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          c.value || j.value ? (s(), M(ut, {
            key: 0,
            message: j.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (s(), M(mt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: ce
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            i.value.length ? (s(), M(It, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(i.value.length) + " models • " + a(E(Y.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(A, null, ee(S.value, (ne) => (s(), M(Be, {
              key: ne.type,
              title: ne.type.toUpperCase(),
              count: ne.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(ne.models, (se) => (s(), M(Ye, {
                  key: se.sha256 || se.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(se.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(E(se.size)), 1)
                  ]),
                  details: l(() => [
                    k(ze, {
                      label: "Hash:",
                      value: se.hash ? se.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ie) => O(se)
                    }, {
                      default: l(() => [...I[18] || (I[18] = [
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
            D.value.length ? d("", !0) : (s(), M(st, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(lt, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (ne) => $.value = !1)
      }, {
        content: l(() => [...I[19] || (I[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      z.value ? (s(), M(rs, {
        key: 0,
        identifier: z.value,
        onClose: I[5] || (I[5] = (ne) => z.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), M(Fe, { to: "body" }, [
        V.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Te((ne) => V.value = !1, ["self"]))
        }, [
          e("div", zm, [
            e("div", Lm, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (ne) => V.value = !1)
              }, "✕")
            ]),
            e("div", Pm, [
              e("div", Dm, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", Nm, a(f.value || "Not set"), 1)
              ]),
              e("div", Um, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                k(tt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (ne) => x.value = ne),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Om, [
              k(de, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (ne) => V.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(de, {
                variant: "primary",
                disabled: !x.value.trim() || L.value,
                loading: L.value,
                onClick: K
              }, {
                default: l(() => [
                  y(a(L.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), M(Fe, { to: "body" }, [
        T.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Te((ne) => T.value = !1, ["self"]))
        }, [
          e("div", Bm, [
            e("div", Fm, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (ne) => T.value = !1)
              }, "✕")
            ]),
            e("div", Am, [
              e("div", Vm, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                k(tt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (ne) => C.value = ne),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Wm, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(tt, {
                  modelValue: W.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (ne) => W.value = ne),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", jm, [
              k(de, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (ne) => T.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(de, {
                variant: "primary",
                disabled: !C.value.trim() || !W.value.trim(),
                onClick: he
              }, {
                default: l(() => [...I[30] || (I[30] = [
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
}), qm = /* @__PURE__ */ Z(Gm, [["__scopeId", "data-v-73b78d84"]]), Hm = { class: "node-details" }, Km = { class: "status-row" }, Ym = {
  key: 0,
  class: "detail-row"
}, Jm = { class: "value" }, Qm = { class: "detail-row" }, Xm = { class: "value" }, Zm = {
  key: 1,
  class: "detail-row"
}, ev = { class: "value mono" }, tv = {
  key: 2,
  class: "detail-row"
}, sv = ["href"], ov = {
  key: 3,
  class: "detail-row"
}, nv = { class: "value mono small" }, av = { class: "detail-row" }, lv = {
  key: 0,
  class: "value"
}, iv = {
  key: 1,
  class: "workflow-list"
}, rv = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, w = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), v = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, i) => (s(), M(Je, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: i[1] || (i[1] = (c) => r("close"))
    }, {
      body: l(() => [
        e("div", Hm, [
          e("div", Km, [
            i[2] || (i[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ae(["status-badge", w.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", Ym, [
            i[3] || (i[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Jm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", Qm, [
            i[4] || (i[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Xm, a(v.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Zm, [
            i[5] || (i[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", ev, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", tv, [
            i[7] || (i[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              y(a(t.node.repository) + " ", 1),
              i[6] || (i[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, sv)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", ov, [
            i[8] || (i[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", nv, a(t.node.download_url), 1)
          ])) : d("", !0),
          i[10] || (i[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", av, [
            i[9] || (i[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", lv, " Not used in any workflows ")) : (s(), o("div", iv, [
              (s(!0), o(A, null, ee(t.node.used_in_workflows, (c) => (s(), o("span", {
                key: c,
                class: "workflow-tag"
              }, a(c), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        k(de, {
          variant: "secondary",
          onClick: i[0] || (i[0] = (c) => r("close"))
        }, {
          default: l(() => [...i[11] || (i[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), dv = /* @__PURE__ */ Z(rv, [["__scopeId", "data-v-b342f626"]]), cv = { key: 0 }, uv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, mv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, vv = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: w, installNode: g, uninstallNode: v } = Oe(), m = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), i = _(!1), c = _(null), p = _(""), h = _(!1), b = _(null), $ = P(() => {
      if (!p.value.trim()) return m.value.nodes;
      const S = p.value.toLowerCase();
      return m.value.nodes.filter(
        (E) => {
          var O, R;
          return E.name.toLowerCase().includes(S) || ((O = E.description) == null ? void 0 : O.toLowerCase().includes(S)) || ((R = E.repository) == null ? void 0 : R.toLowerCase().includes(S));
        }
      );
    }), z = P(
      () => $.value.filter((S) => S.installed && S.tracked)
    ), V = P(
      () => $.value.filter((S) => !S.installed && S.tracked)
    ), f = P(
      () => $.value.filter((S) => S.installed && !S.tracked)
    );
    function x(S) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[S] || S;
    }
    function L(S) {
      return !S.used_in_workflows || S.used_in_workflows.length === 0 ? "Not used in any workflows" : S.used_in_workflows.length === 1 ? S.used_in_workflows[0] : `${S.used_in_workflows.length} workflows`;
    }
    function T(S) {
      b.value = S;
    }
    function C() {
      n("open-node-manager");
    }
    async function W(S) {
      if (confirm(`Track "${S}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          i.value = !0;
          const E = await w(S);
          E.status === "success" ? (alert(`Node "${S}" is now tracked as development!`), await D()) : alert(`Failed to track node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error tracking node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function j(S) {
      if (confirm(`Remove untracked node "${S}"?

This will delete the node directory from custom_nodes/.`))
        try {
          i.value = !0;
          const E = await v(S);
          E.status === "success" ? (alert(`Node "${S}" removed!`), await D()) : alert(`Failed to remove node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error removing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function Y(S) {
      if (confirm(`Install node "${S}"?

This will download and install the node.`))
        try {
          i.value = !0;
          const E = await g(S);
          E.status === "success" ? (alert(`Node "${S}" installed successfully!`), await D()) : alert(`Failed to install node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error installing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function D() {
      i.value = !0, c.value = null;
      try {
        m.value = await r();
      } catch (S) {
        c.value = S instanceof Error ? S.message : "Failed to load nodes";
      } finally {
        i.value = !1;
      }
    }
    return De(D), (S, E) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (O) => h.value = !0)
          }, {
            actions: l(() => [
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: l(() => [...E[5] || (E[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(St, {
            modelValue: p.value,
            "onUpdate:modelValue": E[1] || (E[1] = (O) => p.value = O),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          i.value ? (s(), M(ut, {
            key: 0,
            message: "Loading nodes..."
          })) : c.value ? (s(), M(mt, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            m.value.total_count ? (s(), M(It, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(a(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (s(), o(A, { key: 0 }, [
                  y(" • " + a(m.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                m.value.untracked_count ? (s(), o(A, { key: 1 }, [
                  y(" • " + a(m.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            f.value.length ? (s(), M(Be, {
              key: 1,
              title: "UNTRACKED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(f.value, (O) => (s(), M(Ye, {
                  key: O.name,
                  status: "warning"
                }, {
                  icon: l(() => [...E[6] || (E[6] = [
                    y("?", -1)
                  ])]),
                  title: l(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: l(() => [...E[7] || (E[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    k(ze, {
                      label: "Used by:",
                      value: L(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => T(O)
                    }, {
                      default: l(() => [...E[8] || (E[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => W(O.name)
                    }, {
                      default: l(() => [...E[9] || (E[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (R) => j(O.name)
                    }, {
                      default: l(() => [...E[10] || (E[10] = [
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
            z.value.length ? (s(), M(Be, {
              key: 2,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(z.value, (O) => (s(), M(Ye, {
                  key: O.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    y(a(O.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: l(() => [
                    O.version ? (s(), o("span", cv, a(O.source === "development" ? "" : "v") + a(O.version), 1)) : (s(), o("span", uv, "version unknown")),
                    e("span", mv, " • " + a(x(O.source)), 1)
                  ]),
                  details: l(() => [
                    k(ze, {
                      label: "Used by:",
                      value: L(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => T(O)
                    }, {
                      default: l(() => [...E[11] || (E[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: C
                    }, {
                      default: l(() => [...E[12] || (E[12] = [
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
            V.value.length ? (s(), M(Be, {
              key: 3,
              title: "MISSING",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(V.value, (O) => (s(), M(Ye, {
                  key: O.name,
                  status: "missing"
                }, {
                  icon: l(() => [...E[13] || (E[13] = [
                    y("!", -1)
                  ])]),
                  title: l(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: l(() => [...E[14] || (E[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    k(ze, {
                      label: "Required by:",
                      value: L(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => T(O)
                    }, {
                      default: l(() => [...E[15] || (E[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => Y(O.name)
                    }, {
                      default: l(() => [...E[16] || (E[16] = [
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
            !z.value.length && !V.value.length && !f.value.length ? (s(), M(st, {
              key: 4,
              icon: "📭",
              message: p.value ? `No nodes match '${p.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(lt, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: E[3] || (E[3] = (O) => h.value = !1)
      }, {
        content: l(() => [...E[17] || (E[17] = [
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
        actions: l(() => [
          k(te, {
            variant: "primary",
            onClick: E[2] || (E[2] = (O) => h.value = !1)
          }, {
            default: l(() => [...E[18] || (E[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), M(dv, {
        key: 0,
        node: b.value,
        onClose: E[4] || (E[4] = (O) => b.value = null)
      }, null, 8, ["node"])) : d("", !0)
    ], 64));
  }
}), fv = /* @__PURE__ */ Z(vv, [["__scopeId", "data-v-4ac1465a"]]);
function Is(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const gv = { class: "remote-url-display" }, pv = ["title"], hv = ["title"], yv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, wv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, kv = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = _(!1), r = P(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const g = u.url.slice(0, Math.floor(u.maxLength * 0.6)), v = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${g}...${v}`;
    });
    async function w() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, v) => (s(), o("div", gv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, pv),
      e("button", {
        class: ae(["copy-btn", { copied: n.value }]),
        onClick: w,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", wv, [...v[1] || (v[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", yv, [...v[0] || (v[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, hv)
    ]));
  }
}), bv = /* @__PURE__ */ Z(kv, [["__scopeId", "data-v-7768a58d"]]), _v = { class: "remote-title" }, $v = {
  key: 0,
  class: "default-badge"
}, Cv = {
  key: 1,
  class: "sync-badge"
}, xv = {
  key: 0,
  class: "ahead"
}, Sv = {
  key: 1,
  class: "behind"
}, Iv = {
  key: 1,
  class: "synced"
}, Ev = ["href"], Mv = {
  key: 1,
  class: "remote-url-text"
}, Tv = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const u = t, n = P(() => u.fetchingRemote === u.remote.name), r = P(() => u.remote.is_default), w = P(() => u.syncStatus && u.syncStatus.behind > 0), g = P(() => u.syncStatus && u.syncStatus.ahead > 0), v = P(() => u.remote.push_url !== u.remote.fetch_url), m = P(() => {
      const c = u.remote.fetch_url, p = c.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : c.startsWith("https://") || c.startsWith("http://") ? c.replace(/\.git$/, "") : null;
    }), i = P(() => u.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (c, p) => (s(), M(Ye, {
      status: r.value ? "synced" : void 0
    }, Bt({
      icon: l(() => [
        y(a(r.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", _v, [
          e("span", null, a(t.remote.name), 1),
          r.value ? (s(), o("span", $v, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", Cv, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(A, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", xv, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Sv, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", Iv, "✓ synced"))
          ])) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        m.value ? (s(), o("a", {
          key: 0,
          href: m.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: p[0] || (p[0] = Te(() => {
          }, ["stop"]))
        }, a(i.value), 9, Ev)) : (s(), o("span", Mv, a(i.value), 1))
      ]),
      actions: l(() => [
        k(te, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: p[1] || (p[1] = (h) => c.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...p[6] || (p[6] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(te, {
          variant: w.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[2] || (p[2] = (h) => c.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(te, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[3] || (p[3] = (h) => c.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(te, {
          variant: "secondary",
          size: "xs",
          onClick: p[4] || (p[4] = (h) => c.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...p[7] || (p[7] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        r.value ? d("", !0) : (s(), M(te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: p[5] || (p[5] = (h) => c.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...p[8] || (p[8] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      v.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), M(ze, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              k(bv, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Rv = /* @__PURE__ */ Z(Tv, [["__scopeId", "data-v-8310f3a8"]]), zv = ["for"], Lv = {
  key: 0,
  class: "base-form-field-required"
}, Pv = { class: "base-form-field-input" }, Dv = {
  key: 1,
  class: "base-form-field-error"
}, Nv = {
  key: 2,
  class: "base-form-field-hint"
}, Uv = /* @__PURE__ */ X({
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
    const u = t, n = P(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, w) => (s(), o("div", {
      class: ae(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Lv, "*")) : d("", !0)
      ], 8, zv)) : d("", !0),
      e("div", Pv, [
        _e(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Dv, a(t.error), 1)) : t.hint ? (s(), o("span", Nv, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), Xt = /* @__PURE__ */ Z(Uv, [["__scopeId", "data-v-9a1cf296"]]), Ov = { class: "remote-form" }, Bv = { class: "form-header" }, Fv = { class: "form-body" }, Av = {
  key: 0,
  class: "form-error"
}, Vv = { class: "form-actions" }, Wv = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, w = _({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = _(!1), v = _(null);
    gt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      w.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = P(() => w.value.name.trim() !== "" && w.value.fetchUrl.trim() !== "");
    async function i() {
      if (!(!m.value || g.value)) {
        v.value = null, g.value = !0;
        try {
          r("submit", w.value);
        } catch (c) {
          v.value = c instanceof Error ? c.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (c, p) => (s(), o("div", Ov, [
      e("div", Bv, [
        k(Xe, null, {
          default: l(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Fv, [
        k(Xt, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            k(tt, {
              modelValue: w.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (h) => w.value.name = h),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(Xt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            k(tt, {
              modelValue: w.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (h) => w.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(Xt, { label: "Push URL (optional)" }, {
          default: l(() => [
            k(tt, {
              modelValue: w.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (h) => w.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (s(), o("div", Av, a(v.value), 1)) : d("", !0)
      ]),
      e("div", Vv, [
        k(te, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: g.value,
          onClick: i
        }, {
          default: l(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(te, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (h) => c.$emit("cancel"))
        }, {
          default: l(() => [...p[4] || (p[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), jv = /* @__PURE__ */ Z(Wv, [["__scopeId", "data-v-56021b18"]]), Gv = { class: "conflict-summary-box" }, qv = { class: "summary-header" }, Hv = { class: "summary-text" }, Kv = { key: 0 }, Yv = {
  key: 1,
  class: "all-resolved"
}, Jv = { class: "summary-progress" }, Qv = { class: "progress-bar" }, Xv = { class: "progress-text" }, Zv = /* @__PURE__ */ X({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const u = t, n = P(
      () => u.conflictCount > 0 ? u.resolvedCount / u.conflictCount * 100 : 0
    );
    return (r, w) => (s(), o("div", Gv, [
      e("div", qv, [
        w[0] || (w[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Hv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Kv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Yv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Jv, [
        e("div", Qv, [
          e("div", {
            class: "progress-fill",
            style: at({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Xv, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), ef = /* @__PURE__ */ Z(Zv, [["__scopeId", "data-v-4e9e6cc9"]]), tf = { class: "modal-header" }, sf = { class: "modal-title" }, of = { class: "modal-body" }, nf = {
  key: 0,
  class: "error-box"
}, af = {
  key: 0,
  class: "error-hint"
}, lf = {
  key: 1,
  class: "loading-state"
}, rf = { class: "commit-summary" }, df = {
  key: 0,
  class: "changes-section"
}, cf = {
  key: 0,
  class: "change-group",
  open: ""
}, uf = { class: "change-count" }, mf = { class: "change-list" }, vf = {
  key: 0,
  class: "conflict-badge"
}, ff = {
  key: 1,
  class: "change-group"
}, gf = { class: "change-count" }, pf = { class: "change-list" }, hf = {
  key: 2,
  class: "change-group"
}, yf = { class: "change-count" }, wf = { class: "change-list" }, kf = {
  key: 2,
  class: "strategy-section"
}, bf = { class: "radio-group" }, _f = { class: "radio-option" }, $f = { class: "radio-option" }, Cf = { class: "radio-option" }, xf = {
  key: 3,
  class: "up-to-date"
}, Sf = { class: "modal-actions" }, ps = "comfygit.pullModelStrategy", If = /* @__PURE__ */ X({
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
  setup(t, { emit: u }) {
    const n = t, r = u, w = _(localStorage.getItem(ps) || "skip");
    gt(w, (f) => {
      localStorage.setItem(ps, f);
    });
    const g = P(() => {
      var f;
      return ((f = n.error) == null ? void 0 : f.toLowerCase().includes("unrelated histories")) ?? !1;
    }), v = P(() => {
      if (!n.preview) return 0;
      const f = n.preview.changes.workflows;
      return f.added.length + f.modified.length + f.deleted.length;
    }), m = P(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), i = P(() => {
      var f;
      return v.value > 0 || m.value > 0 || (((f = n.preview) == null ? void 0 : f.changes.models.count) || 0) > 0;
    }), c = P(() => n.preview && Is(n.preview) ? n.preview : null), p = P(() => {
      var f;
      return ((f = c.value) == null ? void 0 : f.workflow_conflicts.length) ?? 0;
    }), h = P(() => {
      var f;
      return ((f = n.conflictResolutions) == null ? void 0 : f.size) ?? 0;
    }), b = P(
      () => p.value > 0 && h.value === p.value
    ), $ = P(() => !(!n.preview || n.preview.has_uncommitted_changes || c.value && !b.value));
    function z(f) {
      if (!c.value) return !1;
      const x = f.replace(/\.json$/, "");
      return c.value.workflow_conflicts.some((L) => L.name === x);
    }
    function V(f) {
      const x = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      r("pull", { modelStrategy: w.value, force: f, resolutions: x });
    }
    return (f, x) => {
      var L, T;
      return s(), M(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[11] || (x[11] = (C) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: x[10] || (x[10] = Te(() => {
            }, ["stop"]))
          }, [
            e("div", tf, [
              e("h3", sf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (C) => f.$emit("close"))
              }, "✕")
            ]),
            e("div", of, [
              t.error ? (s(), o("div", nf, [
                x[13] || (x[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  x[12] || (x[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", af, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", lf, [...x[14] || (x[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (L = t.preview) != null && L.has_uncommitted_changes ? (s(), o(A, { key: 2 }, [
                x[15] || (x[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                x[16] || (x[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", rf, [
                  x[17] || (x[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                i.value ? (s(), o("div", df, [
                  x[21] || (x[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  v.value > 0 ? (s(), o("details", cf, [
                    e("summary", null, [
                      x[18] || (x[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", uf, a(v.value) + " changes", 1)
                    ]),
                    e("div", mf, [
                      (s(!0), o(A, null, ee(t.preview.changes.workflows.added, (C) => (s(), o("div", {
                        key: "a-" + C,
                        class: "change-item add"
                      }, " + " + a(C), 1))), 128)),
                      (s(!0), o(A, null, ee(t.preview.changes.workflows.modified, (C) => (s(), o("div", {
                        key: "m-" + C,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(C) + " ", 1),
                        z(C) ? (s(), o("span", vf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(A, null, ee(t.preview.changes.workflows.deleted, (C) => (s(), o("div", {
                        key: "d-" + C,
                        class: "change-item delete"
                      }, " - " + a(C), 1))), 128))
                    ])
                  ])) : d("", !0),
                  m.value > 0 ? (s(), o("details", ff, [
                    e("summary", null, [
                      x[19] || (x[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", gf, a(m.value) + " to install", 1)
                    ]),
                    e("div", pf, [
                      (s(!0), o(A, null, ee(t.preview.changes.nodes.to_install, (C) => (s(), o("div", {
                        key: C,
                        class: "change-item add"
                      }, " + " + a(C), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", hf, [
                    e("summary", null, [
                      x[20] || (x[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", yf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", wf, [
                      (s(!0), o(A, null, ee(t.preview.changes.models.referenced, (C) => (s(), o("div", {
                        key: C,
                        class: "change-item"
                      }, a(C), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                c.value ? (s(), M(ef, {
                  key: 1,
                  "conflict-count": p.value,
                  "resolved-count": h.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", kf, [
                  x[26] || (x[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", bf, [
                    e("label", _f, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (C) => w.value = C),
                        value: "all"
                      }, null, 512), [
                        [jt, w.value]
                      ]),
                      x[22] || (x[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", $f, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (C) => w.value = C),
                        value: "required"
                      }, null, 512), [
                        [jt, w.value]
                      ]),
                      x[23] || (x[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Cf, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (C) => w.value = C),
                        value: "skip"
                      }, null, 512), [
                        [jt, w.value]
                      ]),
                      x[24] || (x[24] = e("span", null, "Skip model downloads", -1)),
                      x[25] || (x[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[27] || (x[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", xf, [
                  x[28] || (x[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Sf, [
              k(te, {
                variant: "secondary",
                onClick: x[4] || (x[4] = (C) => f.$emit("close"))
              }, {
                default: l(() => [...x[29] || (x[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(A, { key: 0 }, [
                k(te, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: x[5] || (x[5] = (C) => V(!1))
                }, {
                  default: l(() => [...x[30] || (x[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(te, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: x[6] || (x[6] = (C) => V(!0))
                }, {
                  default: l(() => [...x[31] || (x[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = t.preview) != null && T.has_uncommitted_changes ? (s(), M(te, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: x[7] || (x[7] = (C) => V(!0))
              }, {
                default: l(() => [...x[32] || (x[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(A, { key: 2 }, [
                c.value && !b.value ? (s(), M(te, {
                  key: 0,
                  variant: "primary",
                  onClick: x[8] || (x[8] = (C) => r("openConflictResolution"))
                }, {
                  default: l(() => [
                    y(" Resolve Conflicts (" + a(h.value) + "/" + a(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), M(te, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !$.value,
                  onClick: x[9] || (x[9] = (C) => V(!1))
                }, {
                  default: l(() => [...x[33] || (x[33] = [
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
}), Ef = /* @__PURE__ */ Z(If, [["__scopeId", "data-v-300c7b2f"]]), Mf = { class: "modal-header" }, Tf = { class: "modal-title" }, Rf = { class: "modal-body" }, zf = {
  key: 0,
  class: "loading-state"
}, Lf = {
  key: 1,
  class: "warning-box"
}, Pf = {
  key: 0,
  class: "commits-section"
}, Df = { class: "commit-list" }, Nf = { class: "commit-hash" }, Uf = { class: "commit-message" }, Of = { class: "commit-date" }, Bf = { class: "force-option" }, Ff = { class: "checkbox-option" }, Af = { class: "commit-summary" }, Vf = {
  key: 0,
  class: "commits-section"
}, Wf = { class: "commit-list" }, jf = { class: "commit-hash" }, Gf = { class: "commit-message" }, qf = { class: "commit-date" }, Hf = {
  key: 1,
  class: "up-to-date"
}, Kf = { class: "modal-actions" }, Yf = /* @__PURE__ */ X({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: u }) {
    const n = u, r = _(!1);
    function w(g) {
      n("push", { force: g });
    }
    return (g, v) => {
      var m, i, c;
      return s(), M(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: v[7] || (v[7] = (p) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: v[6] || (v[6] = Te(() => {
            }, ["stop"]))
          }, [
            e("div", Mf, [
              e("h3", Tf, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: v[0] || (v[0] = (p) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Rf, [
              t.loading ? (s(), o("div", zf, [...v[8] || (v[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (s(), o("div", Lf, [...v[9] || (v[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (i = t.preview) != null && i.remote_has_new_commits ? (s(), o(A, { key: 2 }, [
                v[13] || (v[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Pf, [
                  v[10] || (v[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Df, [
                    (s(!0), o(A, null, ee(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Nf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Uf, a(p.message), 1),
                      e("span", Of, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", Bf, [
                  e("label", Ff, [
                    Ue(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": v[1] || (v[1] = (p) => r.value = p)
                    }, null, 512), [
                      [Ht, r.value]
                    ]),
                    v[11] || (v[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  v[12] || (v[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", Af, [
                  v[14] || (v[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Vf, [
                  v[15] || (v[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Wf, [
                    (s(!0), o(A, null, ee(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", jf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Gf, a(p.message), 1),
                      e("span", qf, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Hf, [
                  v[16] || (v[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", Kf, [
              k(te, {
                variant: "secondary",
                onClick: v[2] || (v[2] = (p) => g.$emit("close"))
              }, {
                default: l(() => [...v[17] || (v[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (c = t.preview) != null && c.remote_has_new_commits ? (s(), o(A, { key: 0 }, [
                k(te, {
                  variant: "secondary",
                  onClick: v[3] || (v[3] = (p) => g.$emit("pull-first"))
                }, {
                  default: l(() => [...v[18] || (v[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(te, {
                  variant: "destructive",
                  disabled: !r.value,
                  loading: t.pushing,
                  onClick: v[4] || (v[4] = (p) => w(!0))
                }, {
                  default: l(() => [...v[19] || (v[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), M(te, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: v[5] || (v[5] = (p) => w(!1))
              }, {
                default: l(() => [...v[20] || (v[20] = [
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
}), Jf = /* @__PURE__ */ Z(Yf, [["__scopeId", "data-v-bc6ded53"]]), Qf = { class: "resolution-choice-group" }, Xf = ["disabled"], Zf = ["disabled"], eg = /* @__PURE__ */ X({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("div", Qf, [
      e("button", {
        class: ae(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (r) => u.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Xf),
      e("button", {
        class: ae(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (r) => u.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Zf)
    ]));
  }
}), tg = /* @__PURE__ */ Z(eg, [["__scopeId", "data-v-985715ed"]]), sg = { class: "conflict-header" }, og = { class: "conflict-info" }, ng = { class: "workflow-name" }, ag = { class: "conflict-description" }, lg = {
  key: 0,
  class: "resolved-badge"
}, ig = { class: "resolved-text" }, rg = { class: "conflict-hashes" }, dg = { class: "hash-item" }, cg = { class: "hash-item" }, ug = { class: "conflict-actions" }, mg = /* @__PURE__ */ X({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: u }) {
    const n = t, r = u, w = _(n.resolution);
    gt(() => n.resolution, (i) => {
      w.value = i;
    }), gt(w, (i) => {
      i && r("resolve", i);
    });
    const g = P(() => w.value !== null), v = P(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = P(() => {
      switch (w.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (i, c) => {
      var p, h;
      return s(), o("div", {
        class: ae(["conflict-item", { resolved: g.value }])
      }, [
        e("div", sg, [
          c[2] || (c[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", og, [
            e("code", ng, a(t.conflict.name) + ".json", 1),
            e("div", ag, a(v.value), 1)
          ]),
          g.value ? (s(), o("div", lg, [
            c[1] || (c[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", ig, a(m.value), 1)
          ])) : d("", !0)
        ]),
        e("div", rg, [
          e("span", dg, [
            c[3] || (c[3] = y("Your: ", -1)),
            e("code", null, a(((p = t.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", cg, [
            c[4] || (c[4] = y("Theirs: ", -1)),
            e("code", null, a(((h = t.conflict.target_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", ug, [
          k(tg, {
            modelValue: w.value,
            "onUpdate:modelValue": c[0] || (c[0] = (b) => w.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), vg = /* @__PURE__ */ Z(mg, [["__scopeId", "data-v-506d3bbf"]]), fg = { class: "resolution-content" }, gg = {
  key: 0,
  class: "error-box"
}, pg = { class: "resolution-header" }, hg = { class: "header-stats" }, yg = { class: "stat" }, wg = { class: "stat-value" }, kg = { class: "stat resolved" }, bg = { class: "stat-value" }, _g = {
  key: 0,
  class: "stat pending"
}, $g = { class: "stat-value" }, Cg = { class: "conflicts-list" }, xg = {
  key: 1,
  class: "all-resolved-message"
}, Sg = /* @__PURE__ */ X({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: u }) {
    const n = t, r = u, w = P(() => n.resolutions.size), g = P(() => n.workflowConflicts.length - w.value), v = P(() => w.value === n.workflowConflicts.length), m = P(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function i(b) {
      const $ = n.resolutions.get(b);
      return ($ == null ? void 0 : $.resolution) ?? null;
    }
    function c(b, $) {
      r("resolve", b, $);
    }
    function p() {
      r("close");
    }
    function h() {
      r("apply");
    }
    return (b, $) => (s(), M(Je, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: l(() => [
        e("div", fg, [
          t.error ? (s(), o("div", gg, [
            $[1] || ($[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              $[0] || ($[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", pg, [
            e("div", hg, [
              e("div", yg, [
                e("span", wg, a(t.workflowConflicts.length), 1),
                $[2] || ($[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", kg, [
                e("span", bg, a(w.value), 1),
                $[3] || ($[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", _g, [
                e("span", $g, a(g.value), 1),
                $[4] || ($[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            $[5] || ($[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Cg, [
            (s(!0), o(A, null, ee(t.workflowConflicts, (z) => (s(), M(vg, {
              key: z.name,
              conflict: z,
              resolution: i(z.name),
              onResolve: (V) => c(z.name, V)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          v.value ? (s(), o("div", xg, [
            $[6] || ($[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(de, {
          variant: "secondary",
          onClick: p
        }, {
          default: l(() => [...$[7] || ($[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $[8] || ($[8] = e("div", { class: "footer-spacer" }, null, -1)),
        k(de, {
          variant: "primary",
          disabled: !v.value || t.validating,
          loading: t.validating,
          onClick: h
        }, {
          default: l(() => [
            y(a(m.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ig = /* @__PURE__ */ Z(Sg, [["__scopeId", "data-v-c58d150d"]]), Eg = { class: "node-conflict-item" }, Mg = { class: "node-header" }, Tg = { class: "node-name" }, Rg = { class: "node-id" }, zg = { class: "version-comparison" }, Lg = { class: "version yours" }, Pg = { class: "version theirs" }, Dg = { class: "chosen-version" }, Ng = { class: "chosen" }, Ug = { class: "chosen-reason" }, Og = { class: "affected-workflows" }, Bg = { class: "wf-source" }, Fg = { class: "wf-version" }, Ag = /* @__PURE__ */ X({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (u, n) => (s(), o("div", Eg, [
      e("div", Mg, [
        e("code", Tg, a(t.conflict.node_name), 1),
        e("span", Rg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", zg, [
        e("div", Lg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Pg, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Dg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Ng, a(t.conflict.chosen_version), 1),
        e("span", Ug, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Og, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(A, null, ee(t.conflict.affected_workflows, (r) => (s(), o("li", {
            key: r.name
          }, [
            e("code", null, a(r.name), 1),
            e("span", Bg, "(" + a(r.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Fg, "needs v" + a(r.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Vg = /* @__PURE__ */ Z(Ag, [["__scopeId", "data-v-8b626725"]]), Wg = { class: "validation-content" }, jg = {
  key: 0,
  class: "compatible-message"
}, Gg = { class: "conflicts-list" }, qg = {
  key: 2,
  class: "warnings-section"
}, Hg = /* @__PURE__ */ X({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, w = P(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, v) => (s(), M(Je, {
      title: "Compatibility Check",
      size: "lg",
      onClose: v[3] || (v[3] = (m) => r("cancel"))
    }, {
      body: l(() => [
        e("div", Wg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", jg, [
            v[5] || (v[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              v[4] || (v[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(A, { key: 1 }, [
            v[6] || (v[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Gg, [
              (s(!0), o(A, null, ee(t.validation.node_conflicts, (m) => (s(), M(Vg, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            v[7] || (v[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", qg, [
            v[8] || (v[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(A, null, ee(t.validation.warnings, (m, i) => (s(), o("li", { key: i }, a(m), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(de, {
          variant: "secondary",
          onClick: v[0] || (v[0] = (m) => r("cancel"))
        }, {
          default: l(() => [...v[9] || (v[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v[11] || (v[11] = e("div", { class: "footer-spacer" }, null, -1)),
        k(de, {
          variant: "secondary",
          onClick: v[1] || (v[1] = (m) => r("goBack"))
        }, {
          default: l(() => [...v[10] || (v[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(de, {
          variant: "primary",
          loading: t.executing,
          onClick: v[2] || (v[2] = (m) => r("proceed"))
        }, {
          default: l(() => [
            y(a(w.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Kg = /* @__PURE__ */ Z(Hg, [["__scopeId", "data-v-fefd26ed"]]), Yg = { key: 0 }, Jg = /* @__PURE__ */ X({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: u }) {
    const n = u, {
      getRemotes: r,
      addRemote: w,
      removeRemote: g,
      updateRemoteUrl: v,
      fetchRemote: m,
      getRemoteSyncStatus: i,
      getPullPreview: c,
      pullFromRemote: p,
      getPushPreview: h,
      pushToRemote: b,
      validateMerge: $
    } = Oe(), z = _([]), V = _(null), f = _({}), x = _(!1), L = _(null), T = _(""), C = _(!1), W = _(null), j = _(!1), Y = _("add"), D = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), S = P(() => {
      if (!T.value.trim()) return z.value;
      const B = T.value.toLowerCase();
      return z.value.filter(
        (Q) => Q.name.toLowerCase().includes(B) || Q.fetch_url.toLowerCase().includes(B) || Q.push_url.toLowerCase().includes(B)
      );
    });
    async function E() {
      x.value = !0, L.value = null;
      try {
        const B = await r();
        z.value = B.remotes, V.value = B.current_branch_tracking || null, await Promise.all(
          B.remotes.map(async (Q) => {
            const fe = await i(Q.name);
            fe && (f.value[Q.name] = fe);
          })
        );
      } catch (B) {
        L.value = B instanceof Error ? B.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function O() {
      Y.value = "add", D.value = { name: "", fetchUrl: "", pushUrl: "" }, j.value = !0;
    }
    function R(B) {
      const Q = z.value.find((fe) => fe.name === B);
      Q && (Y.value = "edit", D.value = {
        name: Q.name,
        fetchUrl: Q.fetch_url,
        pushUrl: Q.push_url
      }, j.value = !0);
    }
    async function K(B) {
      try {
        Y.value === "add" ? await w(B.name, B.fetchUrl) : await v(B.name, B.fetchUrl, B.pushUrl || void 0), j.value = !1, await E();
      } catch (Q) {
        L.value = Q instanceof Error ? Q.message : "Operation failed";
      }
    }
    function he() {
      j.value = !1, D.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function ce(B) {
      W.value = B;
      try {
        await m(B);
        const Q = await i(B);
        Q && (f.value[B] = Q), n("toast", `✓ Fetched from ${B}`, "success");
      } catch (Q) {
        n("toast", Q instanceof Error ? Q.message : "Fetch failed", "error");
      } finally {
        W.value = null;
      }
    }
    async function oe(B) {
      if (confirm(`Remove remote "${B}"?`))
        try {
          await g(B), await E();
        } catch (Q) {
          L.value = Q instanceof Error ? Q.message : "Failed to remove remote";
        }
    }
    function F() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = _("idle"), ne = P(() => I.value === "pull_preview"), se = P(
      () => I.value === "resolving" || I.value === "validating"
    ), Ie = P(
      () => I.value === "validation_review" || I.value === "executing"
    ), $e = _(!1), Le = _(null), ye = _(!1), re = _(null), le = _(!1), Pe = _(null), Re = _(null), ue = _(/* @__PURE__ */ new Map()), G = _(null), Ce = _(null), we = P(() => Pe.value && Is(Pe.value) ? Pe.value : null);
    async function Se(B) {
      re.value = B, I.value = "pull_preview", le.value = !0, Pe.value = null, Re.value = null;
      try {
        Pe.value = await c(B);
      } catch (Q) {
        Re.value = Q instanceof Error ? Q.message : "Failed to load pull preview";
      } finally {
        le.value = !1;
      }
    }
    function ke() {
      I.value = "idle", Pe.value = null, Re.value = null, re.value = null;
    }
    async function ge(B) {
      if (!re.value) return;
      I.value = "executing", Re.value = null;
      const Q = re.value;
      try {
        const fe = await p(Q, B);
        if (fe.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${fe.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        rt(), I.value = "idle", n("toast", `✓ Pulled from ${Q}`, "success"), await E();
      } catch (fe) {
        Re.value = fe instanceof Error ? fe.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function Ae() {
      we.value && (I.value = "resolving", Ce.value = null);
    }
    function ht(B, Q) {
      ue.value.set(B, { name: B, resolution: Q });
    }
    function it() {
      I.value = "pull_preview";
    }
    async function Ne() {
      I.value = "validating", Ce.value = null;
      try {
        const B = Array.from(ue.value.values());
        G.value = await $(re.value, B), I.value = "validation_review";
      } catch (B) {
        Ce.value = B instanceof Error ? B.message : "Validation failed", I.value = "resolving";
      }
    }
    async function yt() {
      I.value = "executing";
      const B = re.value;
      try {
        const Q = Array.from(ue.value.values()), fe = await p(B, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Q
        });
        if (fe.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${fe.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        rt(), I.value = "idle", n("toast", `✓ Pulled from ${B}`, "success"), await E();
      } catch (Q) {
        Re.value = Q instanceof Error ? Q.message : "Pull failed", I.value = "validation_review";
      }
    }
    function vt() {
      I.value = "resolving";
    }
    function wt() {
      rt(), I.value = "idle";
    }
    function rt() {
      ue.value.clear(), G.value = null, Ce.value = null, Re.value = null, Pe.value = null, re.value = null;
    }
    async function kt(B) {
      re.value = B, $e.value = !0, le.value = !0, Le.value = null;
      try {
        Le.value = await h(B);
      } catch (Q) {
        L.value = Q instanceof Error ? Q.message : "Failed to load push preview";
      } finally {
        le.value = !1;
      }
    }
    function dt() {
      $e.value = !1, Le.value = null, re.value = null;
    }
    async function J(B) {
      if (!re.value) return;
      ye.value = !0;
      const Q = re.value;
      try {
        await b(Q, B), dt(), n("toast", `✓ Pushed to ${Q}`, "success"), await E();
      } catch (fe) {
        n("toast", fe instanceof Error ? fe.message : "Push failed", "error");
      } finally {
        ye.value = !1;
      }
    }
    function U() {
      const B = re.value;
      dt(), B && Se(B);
    }
    return De(E), (B, Q) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (fe) => C.value = !0)
          }, {
            actions: l(() => [
              j.value ? d("", !0) : (s(), M(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: l(() => [...Q[3] || (Q[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          j.value ? d("", !0) : (s(), M(St, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (fe) => T.value = fe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          x.value ? (s(), M(ut, {
            key: 0,
            message: "Loading remotes..."
          })) : L.value ? (s(), M(mt, {
            key: 1,
            message: L.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            j.value ? (s(), M(jv, {
              key: 0,
              mode: Y.value,
              "remote-name": D.value.name,
              "fetch-url": D.value.fetchUrl,
              "push-url": D.value.pushUrl,
              onSubmit: K,
              onCancel: he
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            z.value.length && !j.value ? (s(), M(It, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(z.value.length) + " remote" + a(z.value.length !== 1 ? "s" : "") + " ", 1),
                V.value ? (s(), o("span", Yg, " • Tracking: " + a(V.value.remote) + "/" + a(V.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            S.value.length && !j.value ? (s(), M(Be, {
              key: 2,
              title: "REMOTES",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee(S.value, (fe) => (s(), M(Rv, {
                  key: fe.name,
                  remote: fe,
                  "sync-status": f.value[fe.name],
                  "fetching-remote": W.value,
                  onFetch: ce,
                  onEdit: R,
                  onRemove: oe,
                  onPull: Se,
                  onPush: kt
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !S.value.length && !j.value ? (s(), M(st, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                k(te, {
                  variant: "primary",
                  onClick: O
                }, {
                  default: l(() => [...Q[4] || (Q[4] = [
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
      k(lt, {
        show: C.value,
        title: "About Git Remotes",
        onClose: Q[2] || (Q[2] = (fe) => C.value = !1)
      }, {
        content: l(() => [...Q[5] || (Q[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          k(te, {
            variant: "link",
            onClick: F
          }, {
            default: l(() => [...Q[6] || (Q[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(Ef, {
        show: ne.value,
        "remote-name": re.value || "",
        preview: Pe.value,
        loading: le.value,
        pulling: I.value === "executing",
        error: Re.value,
        "conflict-resolutions": ue.value,
        onClose: ke,
        onPull: ge,
        onOpenConflictResolution: Ae
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(Jf, {
        show: $e.value,
        "remote-name": re.value || "",
        preview: Le.value,
        loading: le.value,
        pushing: ye.value,
        onClose: dt,
        onPush: J,
        onPullFirst: U
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      se.value && we.value ? (s(), M(Ig, {
        key: 0,
        "workflow-conflicts": we.value.workflow_conflicts,
        resolutions: ue.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: Ce.value,
        onClose: it,
        onResolve: ht,
        onApply: Ne
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Ie.value && G.value ? (s(), M(Kg, {
        key: 1,
        validation: G.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: yt,
        onGoBack: vt,
        onCancel: wt
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), Qg = /* @__PURE__ */ Z(Jg, [["__scopeId", "data-v-9ae3b76d"]]), Xg = { class: "setting-info" }, Zg = { class: "setting-label" }, ep = {
  key: 0,
  class: "required-marker"
}, tp = {
  key: 0,
  class: "setting-description"
}, sp = { class: "setting-control" }, op = /* @__PURE__ */ X({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: ae(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Xg, [
        e("div", Zg, [
          y(a(t.label) + " ", 1),
          t.required ? (s(), o("span", ep, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", tp, a(t.description), 1)) : d("", !0)
      ]),
      e("div", sp, [
        _e(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Rt = /* @__PURE__ */ Z(op, [["__scopeId", "data-v-cb5d236c"]]), np = { class: "toggle" }, ap = ["checked", "disabled"], lp = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", np, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, ap),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Zt = /* @__PURE__ */ Z(lp, [["__scopeId", "data-v-71c0f550"]]), ip = { class: "settings-section" }, rp = { class: "path-setting" }, dp = { class: "path-value" }, cp = { class: "path-setting" }, up = { class: "path-value" }, mp = { class: "settings-section" }, vp = { class: "settings-section" }, fp = { class: "settings-section" }, gp = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Oe(), r = _(!1), w = _(null), g = _(null), v = _(null), m = _(null), i = _(""), c = _(""), p = _(!0), h = _(!0), b = _(!1), $ = P(() => m.value ? i.value !== (m.value.civitai_api_key || "") : !1);
    async function z() {
      r.value = !0, w.value = null;
      try {
        v.value = await u(), m.value = { ...v.value }, i.value = v.value.civitai_api_key || "", c.value = v.value.huggingface_token || "", p.value = v.value.auto_sync_models, h.value = v.value.confirm_destructive;
        const L = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        b.value = L === "true";
      } catch (L) {
        w.value = L instanceof Error ? L.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function V() {
      var L;
      g.value = null;
      try {
        const T = {};
        i.value !== (((L = m.value) == null ? void 0 : L.civitai_api_key) || "") && (T.civitai_api_key = i.value || null), await n(T), await z(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (T) {
        g.value = {
          type: "error",
          message: T instanceof Error ? T.message : "Failed to save settings"
        };
      }
    }
    function f() {
      m.value && (i.value = m.value.civitai_api_key || "", c.value = m.value.huggingface_token || "", p.value = m.value.auto_sync_models, h.value = m.value.confirm_destructive, g.value = null);
    }
    function x(L) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(L)), console.log("[ComfyGit] Auto-refresh setting saved:", L);
    }
    return De(z), (L, T) => (s(), M(Ge, null, {
      header: l(() => [
        k(qe, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => [
            k(te, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: V
            }, {
              default: l(() => [...T[5] || (T[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (s(), M(te, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: f
            }, {
              default: l(() => [...T[6] || (T[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        r.value ? (s(), M(ut, {
          key: 0,
          message: "Loading workspace settings..."
        })) : w.value ? (s(), M(mt, {
          key: 1,
          message: w.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
          k(Be, { title: "WORKSPACE PATHS" }, {
            default: l(() => {
              var C, W;
              return [
                e("div", ip, [
                  e("div", rp, [
                    T[7] || (T[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    T[8] || (T[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", dp, a(((C = v.value) == null ? void 0 : C.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", cp, [
                    T[9] || (T[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    T[10] || (T[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", up, a(((W = v.value) == null ? void 0 : W.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          k(Be, { title: "API CREDENTIALS" }, {
            default: l(() => [
              e("div", mp, [
                k(Rt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: l(() => [
                    k(Kt, {
                      modelValue: i.value,
                      "onUpdate:modelValue": T[0] || (T[0] = (C) => i.value = C),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Rt, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(Kt, {
                      modelValue: c.value,
                      "onUpdate:modelValue": T[1] || (T[1] = (C) => c.value = C),
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
          k(Be, { title: "UI SETTINGS" }, {
            default: l(() => [
              e("div", vp, [
                k(Rt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: l(() => [
                    k(Zt, {
                      modelValue: b.value,
                      "onUpdate:modelValue": [
                        T[2] || (T[2] = (C) => b.value = C),
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
          k(Be, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: l(() => [
              e("div", fp, [
                k(Rt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(Zt, {
                      modelValue: p.value,
                      "onUpdate:modelValue": T[3] || (T[3] = (C) => p.value = C),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Rt, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(Zt, {
                      modelValue: h.value,
                      "onUpdate:modelValue": T[4] || (T[4] = (C) => h.value = C),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), M(It, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: l(() => [
              e("span", {
                style: at({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), pp = /* @__PURE__ */ Z(gp, [["__scopeId", "data-v-7861bd35"]]), hp = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Oe(), n = _([]), r = _(!1), w = _(null), g = _(!1), v = _(null), m = P(() => n.value.length === 0 ? [] : n.value.map((c) => ({
      text: `${c.timestamp} - ${c.name} - ${c.level} - ${c.func}:${c.line} - ${c.message}`,
      level: c.level
    })));
    async function i() {
      r.value = !0, w.value = null;
      try {
        n.value = await u(void 0, 500);
      } catch (c) {
        w.value = c instanceof Error ? c.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var c;
          (c = v.value) != null && c.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return De(i), (c, p) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: p[0] || (p[0] = (h) => g.value = !0)
          }, {
            actions: l(() => [
              k(te, {
                variant: "secondary",
                size: "sm",
                onClick: i,
                disabled: r.value
              }, {
                default: l(() => [
                  y(a(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          r.value ? (s(), M(ut, {
            key: 0,
            message: "Loading workspace logs..."
          })) : w.value ? (s(), M(mt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: i
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            n.value.length === 0 ? (s(), M(st, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (s(!0), o(A, null, ee(m.value, (h, b) => (s(), o("div", {
                key: b,
                class: ae(`log-line log-level-${h.level.toLowerCase()}`)
              }, a(h.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(lt, {
        show: g.value,
        title: "About Workspace Logs",
        onClose: p[2] || (p[2] = (h) => g.value = !1)
      }, {
        content: l(() => [...p[3] || (p[3] = [
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
        actions: l(() => [
          k(te, {
            variant: "primary",
            onClick: p[1] || (p[1] = (h) => g.value = !1)
          }, {
            default: l(() => [...p[4] || (p[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), yp = /* @__PURE__ */ Z(hp, [["__scopeId", "data-v-39f6a756"]]), wp = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Oe(), r = _([]), w = _(!1), g = _(null), v = _(!1), m = _("production"), i = _(null), c = P(() => r.value.length === 0 ? [] : r.value.map((h) => ({
      text: `${h.timestamp} - ${h.name} - ${h.level} - ${h.func}:${h.line} - ${h.message}`,
      level: h.level
    })));
    async function p() {
      w.value = !0, g.value = null;
      try {
        r.value = await u(void 0, 500);
        try {
          const h = await n();
          m.value = h.environment || "production";
        } catch {
        }
      } catch (h) {
        g.value = h instanceof Error ? h.message : "Failed to load environment logs";
      } finally {
        w.value = !1, setTimeout(() => {
          var h;
          (h = i.value) != null && h.parentElement && (i.value.parentElement.scrollTop = i.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return De(p), (h, b) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = ($) => v.value = !0)
          }, {
            actions: l(() => [
              k(te, {
                variant: "secondary",
                size: "sm",
                onClick: p,
                disabled: w.value
              }, {
                default: l(() => [
                  y(a(w.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          w.value ? (s(), M(ut, {
            key: 0,
            message: "Loading environment logs..."
          })) : g.value ? (s(), M(mt, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            r.value.length === 0 ? (s(), M(st, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: i,
              class: "log-output"
            }, [
              (s(!0), o(A, null, ee(c.value, ($, z) => (s(), o("div", {
                key: z,
                class: ae(`log-line log-level-${$.level.toLowerCase()}`)
              }, a($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(lt, {
        show: v.value,
        title: "About Environment Logs",
        onClose: b[2] || (b[2] = ($) => v.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            b[3] || (b[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
            b[4] || (b[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          b[5] || (b[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          b[6] || (b[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          k(te, {
            variant: "primary",
            onClick: b[1] || (b[1] = ($) => v.value = !1)
          }, {
            default: l(() => [...b[7] || (b[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kp = /* @__PURE__ */ Z(wp, [["__scopeId", "data-v-4f1e6f72"]]), bp = { class: "env-title" }, _p = {
  key: 0,
  class: "current-badge"
}, $p = {
  key: 0,
  class: "branch-info"
}, Cp = /* @__PURE__ */ X({
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
    return (u, n) => (s(), M(Ye, {
      status: t.isCurrent ? "synced" : void 0
    }, Bt({
      icon: l(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", bp, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", _p, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", $p, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: l(() => [
        _e(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          k(ze, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          k(ze, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          k(ze, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), M(ze, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), xp = /* @__PURE__ */ Z(Cp, [["__scopeId", "data-v-9231917a"]]), Sp = { class: "env-details" }, Ip = { class: "status-row" }, Ep = {
  key: 0,
  class: "detail-row"
}, Mp = { class: "value mono" }, Tp = {
  key: 1,
  class: "detail-row"
}, Rp = { class: "value mono small" }, zp = { class: "detail-row" }, Lp = { class: "value" }, Pp = { class: "detail-row" }, Dp = { class: "value" }, Np = { class: "detail-row" }, Up = { class: "value" }, Op = {
  key: 2,
  class: "section-divider"
}, Bp = {
  key: 3,
  class: "detail-row"
}, Fp = { class: "value" }, Ap = {
  key: 4,
  class: "detail-row"
}, Vp = { class: "value" }, Wp = { class: "footer-actions" }, jp = /* @__PURE__ */ X({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: u }) {
    const n = u;
    function r(w) {
      if (!w) return "Unknown";
      try {
        const g = new Date(w), m = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), i = Math.floor(m / 6e4), c = Math.floor(m / 36e5), p = Math.floor(m / 864e5);
        return i < 1 ? "just now" : i < 60 ? `${i} ${i === 1 ? "minute" : "minutes"} ago` : c < 24 ? `${c} ${c === 1 ? "hour" : "hours"} ago` : p < 30 ? `${p} ${p === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return w;
      }
    }
    return (w, g) => (s(), M(Je, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (v) => n("close"))
    }, {
      body: l(() => [
        e("div", Sp, [
          e("div", Ip, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ae(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Ep, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Mp, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", Tp, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Rp, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", zp, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Lp, a(t.environment.workflow_count), 1)
          ]),
          e("div", Pp, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Dp, a(t.environment.node_count), 1)
          ]),
          e("div", Np, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Up, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Op)) : d("", !0),
          t.environment.created_at ? (s(), o("div", Bp, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Fp, a(r(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", Ap, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Vp, a(r(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", Wp, [
          t.canDelete ? (s(), M(de, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (v) => n("delete", t.environment.name))
          }, {
            default: l(() => [...g[12] || (g[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          k(de, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (v) => n("close"))
          }, {
            default: l(() => [...g[13] || (g[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Gp = /* @__PURE__ */ Z(jp, [["__scopeId", "data-v-59855453"]]), Es = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Ms = "3.12", ds = [
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
], Ts = "auto", qp = { class: "progress-bar" }, Hp = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = P(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, w) => (s(), o("div", qp, [
      e("div", {
        class: ae(["progress-fill", t.variant]),
        style: at({ width: n.value })
      }, null, 6)
    ]));
  }
}), Rs = /* @__PURE__ */ Z(Hp, [["__scopeId", "data-v-1beb0512"]]), Kp = { class: "task-progress" }, Yp = { class: "progress-info" }, Jp = { class: "progress-percentage" }, Qp = { class: "progress-message" }, Xp = {
  key: 0,
  class: "progress-steps"
}, Zp = { class: "step-icon" }, eh = { class: "step-label" }, th = /* @__PURE__ */ X({
  __name: "TaskProgressDisplay",
  props: {
    progress: {},
    message: {},
    currentPhase: {},
    variant: { default: "default" },
    showSteps: { type: Boolean, default: !1 },
    steps: { default: () => [] }
  },
  setup(t) {
    const u = t;
    function n(w) {
      const g = u.steps.find((v) => v.id === w);
      return g ? u.progress >= g.progressThreshold ? "completed" : u.currentPhase === w ? "active" : "pending" : "pending";
    }
    function r(w) {
      const g = n(w);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (w, g) => (s(), o("div", Kp, [
      k(Rs, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Yp, [
        e("span", Jp, a(t.progress) + "%", 1),
        e("span", Qp, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Xp, [
        (s(!0), o(A, null, ee(t.steps, (v) => (s(), o("div", {
          key: v.id,
          class: ae(["step", n(v.id)])
        }, [
          e("span", Zp, a(r(v.id)), 1),
          e("span", eh, a(v.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ Z(th, [["__scopeId", "data-v-9d1de66c"]]), sh = {
  key: 0,
  class: "create-env-form"
}, oh = { class: "form-field" }, nh = { class: "form-field" }, ah = ["value"], lh = { class: "form-field" }, ih = ["disabled"], rh = ["value"], dh = { class: "form-field" }, ch = ["value"], uh = { class: "form-field form-field--checkbox" }, mh = { class: "form-checkbox" }, vh = {
  key: 1,
  class: "create-env-progress"
}, fh = { class: "creating-intro" }, gh = {
  key: 0,
  class: "progress-warning"
}, ph = {
  key: 1,
  class: "create-error"
}, hh = { class: "error-message" }, yh = {
  key: 1,
  class: "footer-status"
}, wh = 10, kh = /* @__PURE__ */ X({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: r, createEnvironment: w, getCreateProgress: g } = Oe(), v = _(""), m = _(Ms), i = _("latest"), c = _(Ts), p = _(!1), h = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = _(!1), $ = _(!1), z = _({
      progress: 0,
      message: ""
    });
    let V = null, f = 0;
    const x = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], L = _(null);
    function T() {
      $.value || n("close");
    }
    async function C() {
      const S = v.value.trim();
      if (S) {
        $.value = !0, z.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const E = {
            name: S,
            python_version: m.value,
            comfyui_version: i.value,
            torch_backend: c.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, O = await w(E);
          O.status === "started" ? W() : O.status === "error" && (z.value = {
            progress: 0,
            message: O.message || "Failed to start creation",
            error: O.message
          });
        } catch (E) {
          z.value = {
            progress: 0,
            message: E instanceof Error ? E.message : "Unknown error",
            error: E instanceof Error ? E.message : "Unknown error"
          };
        }
      }
    }
    function W() {
      V || (f = 0, V = window.setInterval(async () => {
        try {
          const S = await g();
          f = 0, z.value = {
            progress: S.progress ?? 0,
            message: S.message,
            phase: S.phase,
            error: S.error
          }, S.state === "complete" ? (j(), n("created", S.environment_name || v.value.trim(), p.value)) : S.state === "error" ? (j(), z.value.error = S.error || S.message) : S.state === "idle" && $.value && (j(), z.value.error = "Creation was interrupted. Please try again.");
        } catch {
          f++, f >= wh && (j(), z.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function j() {
      V && (clearInterval(V), V = null);
    }
    function Y() {
      $.value = !1, z.value = { progress: 0, message: "" }, n("close");
    }
    async function D() {
      b.value = !0;
      try {
        h.value = await r();
      } catch (S) {
        console.error("Failed to load ComfyUI releases:", S);
      } finally {
        b.value = !1;
      }
    }
    return De(async () => {
      var S;
      await Ks(), (S = L.value) == null || S.focus(), D();
    }), ks(() => {
      j();
    }), (S, E) => (s(), M(Je, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !$.value,
      onClose: T
    }, {
      body: l(() => [
        $.value ? (s(), o("div", vh, [
          e("p", fh, [
            E[11] || (E[11] = y(" Creating environment ", -1)),
            e("strong", null, a(v.value), 1),
            E[12] || (E[12] = y("... ", -1))
          ]),
          k(ss, {
            progress: z.value.progress,
            message: z.value.message,
            "current-phase": z.value.phase,
            variant: z.value.error ? "error" : "default",
            "show-steps": !0,
            steps: x
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          z.value.error ? d("", !0) : (s(), o("p", gh, " This may take several minutes. Please wait... ")),
          z.value.error ? (s(), o("div", ph, [
            e("p", hh, a(z.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", sh, [
          e("div", oh, [
            E[6] || (E[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ue(e("input", {
              ref_key: "nameInput",
              ref: L,
              "onUpdate:modelValue": E[0] || (E[0] = (O) => v.value = O),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: pt(C, ["enter"])
            }, null, 544), [
              [Dt, v.value]
            ])
          ]),
          e("div", nh, [
            E[7] || (E[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (O) => m.value = O),
              class: "form-select"
            }, [
              (s(!0), o(A, null, ee(be(Es), (O) => (s(), o("option", {
                key: O,
                value: O
              }, a(O), 9, ah))), 128))
            ], 512), [
              [Ct, m.value]
            ])
          ]),
          e("div", lh, [
            E[8] || (E[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": E[2] || (E[2] = (O) => i.value = O),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(A, null, ee(h.value, (O) => (s(), o("option", {
                key: O.tag_name,
                value: O.tag_name
              }, a(O.name), 9, rh))), 128))
            ], 8, ih), [
              [Ct, i.value]
            ])
          ]),
          e("div", dh, [
            E[9] || (E[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": E[3] || (E[3] = (O) => c.value = O),
              class: "form-select"
            }, [
              (s(!0), o(A, null, ee(be(ds), (O) => (s(), o("option", {
                key: O,
                value: O
              }, a(O) + a(O === "auto" ? " (detect GPU)" : ""), 9, ch))), 128))
            ], 512), [
              [Ct, c.value]
            ])
          ]),
          e("div", uh, [
            e("label", mh, [
              Ue(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": E[4] || (E[4] = (O) => p.value = O)
              }, null, 512), [
                [Ht, p.value]
              ]),
              E[10] || (E[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        $.value ? (s(), o(A, { key: 1 }, [
          z.value.error ? (s(), M(de, {
            key: 0,
            variant: "secondary",
            onClick: Y
          }, {
            default: l(() => [...E[15] || (E[15] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", yh, " Creating environment... "))
        ], 64)) : (s(), o(A, { key: 0 }, [
          k(de, {
            variant: "primary",
            disabled: !v.value.trim(),
            onClick: C
          }, {
            default: l(() => [...E[13] || (E[13] = [
              y(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(de, {
            variant: "secondary",
            onClick: E[5] || (E[5] = (O) => n("close"))
          }, {
            default: l(() => [...E[14] || (E[14] = [
              y(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), bh = /* @__PURE__ */ Z(kh, [["__scopeId", "data-v-f37eaa42"]]), _h = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getEnvironments: w } = Oe(), g = _([]), v = _(!1), m = _(null), i = _(""), c = _(!1), p = _(!1), h = _(null), b = P(
      () => g.value.find((T) => T.is_current)
    ), $ = P(() => {
      if (!i.value.trim()) return g.value;
      const T = i.value.toLowerCase();
      return g.value.filter(
        (C) => {
          var W;
          return C.name.toLowerCase().includes(T) || ((W = C.current_branch) == null ? void 0 : W.toLowerCase().includes(T));
        }
      );
    });
    function z(T, C) {
      p.value = !1, r("created", T, C);
    }
    function V() {
      p.value = !0;
    }
    function f(T) {
      h.value = T;
    }
    function x(T) {
      h.value = null, r("delete", T);
    }
    async function L() {
      v.value = !0, m.value = null;
      try {
        g.value = await w();
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load environments";
      } finally {
        v.value = !1;
      }
    }
    return De(L), u({
      loadEnvironments: L,
      openCreateModal: V
    }), (T, C) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (W) => c.value = !0)
          }, {
            actions: l(() => [
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: l(() => [...C[6] || (C[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              k(te, {
                variant: "secondary",
                size: "sm",
                onClick: L
              }, {
                default: l(() => [...C[7] || (C[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(St, {
            modelValue: i.value,
            "onUpdate:modelValue": C[1] || (C[1] = (W) => i.value = W),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), M(ut, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), M(mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length ? (s(), M(It, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(g.value.length) + " " + a(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                b.value ? (s(), o(A, { key: 0 }, [
                  C[8] || (C[8] = y(" • Current: ", -1)),
                  e("strong", null, a(b.value.name), 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            $.value.length ? (s(), M(Be, {
              key: 1,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, ee($.value, (W) => (s(), M(xp, {
                  key: W.name,
                  "environment-name": W.name,
                  "is-current": W.is_current,
                  "current-branch": W.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    W.is_current ? d("", !0) : (s(), M(te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => T.$emit("switch", W.name)
                    }, {
                      default: l(() => [...C[9] || (C[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => f(W)
                    }, {
                      default: l(() => [...C[10] || (C[10] = [
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
            $.value.length ? d("", !0) : (s(), M(st, {
              key: 2,
              icon: "🌍",
              message: i.value ? `No environments match '${i.value}'` : "No environments found. Create one to get started!"
            }, Bt({ _: 2 }, [
              i.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  k(te, {
                    variant: "primary",
                    onClick: V
                  }, {
                    default: l(() => [...C[11] || (C[11] = [
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
      k(lt, {
        show: c.value,
        title: "About Environments",
        onClose: C[3] || (C[3] = (W) => c.value = !1)
      }, {
        content: l(() => [...C[12] || (C[12] = [
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
        actions: l(() => [
          k(te, {
            variant: "secondary",
            onClick: C[2] || (C[2] = (W) => c.value = !1)
          }, {
            default: l(() => [...C[13] || (C[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (s(), M(Gp, {
        key: 0,
        environment: h.value,
        "can-delete": g.value.length > 1,
        onClose: C[4] || (C[4] = (W) => h.value = null),
        onDelete: x
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      p.value ? (s(), M(bh, {
        key: 1,
        onClose: C[5] || (C[5] = (W) => p.value = !1),
        onCreated: z
      })) : d("", !0)
    ], 64));
  }
}), $h = /* @__PURE__ */ Z(_h, [["__scopeId", "data-v-d6dc0255"]]), Ch = { class: "file-path" }, xh = { class: "file-path-text" }, Sh = ["title"], Ih = /* @__PURE__ */ X({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = _(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (w) {
        console.error("Failed to copy:", w);
      }
    }
    return (w, g) => (s(), o("div", Ch, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", xh, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, Sh)) : d("", !0)
    ]));
  }
}), Eh = /* @__PURE__ */ Z(Ih, [["__scopeId", "data-v-f0982173"]]), Mh = { class: "export-blocked" }, Th = { class: "issues-list" }, Rh = { class: "issue-message" }, zh = {
  key: 0,
  class: "issue-details"
}, Lh = ["onClick"], Ph = { class: "issue-fix" }, Dh = /* @__PURE__ */ X({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const u = t, n = Jt({});
    function r(w) {
      const g = u.issues[w];
      return n[w] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (w, g) => (s(), M(Je, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (v) => w.$emit("close"))
    }, {
      body: l(() => [
        e("div", Mh, [
          g[2] || (g[2] = e("div", { class: "error-header" }, [
            e("span", { class: "error-icon" }, [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ]),
            e("div", { class: "error-summary" }, [
              e("h3", { class: "error-title" }, "Export blocked"),
              e("p", { class: "error-description" }, " The following issues must be resolved before exporting. ")
            ])
          ], -1)),
          e("div", Th, [
            (s(!0), o(A, null, ee(t.issues, (v, m) => (s(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", Rh, a(v.message), 1),
              v.details.length ? (s(), o("div", zh, [
                (s(!0), o(A, null, ee(r(m), (i, c) => (s(), o("div", {
                  key: c,
                  class: "issue-detail"
                }, a(i), 1))), 128)),
                v.details.length > 3 && !n[m] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (i) => n[m] = !0
                }, " +" + a(v.details.length - 3) + " more ", 9, Lh)) : d("", !0)
              ])) : d("", !0),
              e("div", Ph, [
                v.type === "uncommitted_workflows" ? (s(), o(A, { key: 0 }, [
                  y(" Commit your workflow changes before exporting. ")
                ], 64)) : v.type === "uncommitted_git_changes" ? (s(), o(A, { key: 1 }, [
                  y(" Commit your changes before exporting. ")
                ], 64)) : v.type === "unresolved_issues" ? (s(), o(A, { key: 2 }, [
                  y(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        k(de, {
          variant: "primary",
          onClick: g[0] || (g[0] = (v) => w.$emit("close"))
        }, {
          default: l(() => [...g[3] || (g[3] = [
            y(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Nh = /* @__PURE__ */ Z(Dh, [["__scopeId", "data-v-b52f5e32"]]), Uh = { class: "export-warnings" }, Oh = {
  key: 0,
  class: "success-header"
}, Bh = { class: "warning-header" }, Fh = { class: "warning-summary" }, Ah = { class: "warning-title" }, Vh = { class: "models-section" }, Wh = { class: "models-list" }, jh = { class: "model-info" }, Gh = { class: "model-filename" }, qh = { class: "model-workflows" }, Hh = ["onClick"], Kh = /* @__PURE__ */ X({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: u }) {
    const n = t, r = u, w = _(!1), g = _(null), v = P(() => w.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      g.value = null, r("revalidate");
    }
    return (i, c) => (s(), o(A, null, [
      k(Je, {
        title: "Export Warnings",
        size: "md",
        onClose: c[3] || (c[3] = (p) => i.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", Uh, [
            t.models.length === 0 ? (s(), o("div", Oh, [...c[4] || (c[4] = [
              e("span", { class: "success-icon" }, [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1),
              e("div", { class: "success-summary" }, [
                e("h3", { class: "success-title" }, "All models have source URLs"),
                e("p", { class: "success-description" }, " Your environment is ready to export. Recipients will be able to download all models automatically. ")
              ], -1)
            ])])) : (s(), o(A, { key: 1 }, [
              e("div", Bh, [
                c[6] || (c[6] = e("span", { class: "warning-icon" }, [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" }),
                    e("path", { d: "M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })
                  ])
                ], -1)),
                e("div", Fh, [
                  e("h3", Ah, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  c[5] || (c[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", Vh, [
                e("div", Wh, [
                  (s(!0), o(A, null, ee(v.value, (p) => (s(), o("div", {
                    key: p.hash,
                    class: "model-item"
                  }, [
                    e("div", jh, [
                      e("div", Gh, a(p.filename), 1),
                      e("div", qh, " Used by: " + a(p.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (h) => g.value = p.hash
                    }, " Add Source ", 8, Hh)
                  ]))), 128))
                ]),
                t.models.length > 3 && !w.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: c[0] || (c[0] = (p) => w.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          k(de, {
            variant: "secondary",
            onClick: c[1] || (c[1] = (p) => i.$emit("cancel"))
          }, {
            default: l(() => [...c[7] || (c[7] = [
              y(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(de, {
            variant: "primary",
            onClick: c[2] || (c[2] = (p) => i.$emit("confirm"))
          }, {
            default: l(() => [
              y(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), M(rs, {
        key: 0,
        identifier: g.value,
        onClose: m
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Yh = /* @__PURE__ */ Z(Kh, [["__scopeId", "data-v-b698d882"]]), Jh = { class: "export-card" }, Qh = { class: "export-path-row" }, Xh = { class: "export-actions" }, Zh = {
  key: 1,
  class: "export-warning"
}, e1 = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: u, exportEnvWithForce: n } = Oe(), r = _(""), w = _(!1), g = _(!1), v = _(!1), m = _(null), i = _(!1), c = _(null), p = _(!1), h = _(!1), b = P(() => w.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function $() {
      w.value = !0, m.value = null;
      try {
        const T = await u();
        c.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? h.value = !0 : await f() : p.value = !0;
      } catch (T) {
        m.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Validation failed"
        };
      } finally {
        w.value = !1;
      }
    }
    async function z() {
      h.value = !1, await f();
    }
    async function V() {
      try {
        const T = await u();
        c.value = T;
      } catch (T) {
        console.error("Re-validation failed:", T);
      }
    }
    async function f() {
      g.value = !0;
      try {
        const T = await n(r.value || void 0);
        m.value = T;
      } catch (T) {
        m.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function x() {
      var T;
      if ((T = m.value) != null && T.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (C) {
          console.error("Failed to copy path:", C);
        }
    }
    async function L() {
      var T;
      if ((T = m.value) != null && T.path) {
        v.value = !0;
        try {
          const C = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!C.ok)
            throw new Error(`Download failed: ${C.statusText}`);
          const W = await C.blob(), j = URL.createObjectURL(W), Y = m.value.path.split("/").pop() || "environment-export.tar.gz", D = document.createElement("a");
          D.href = j, D.download = Y, document.body.appendChild(D), D.click(), document.body.removeChild(D), URL.revokeObjectURL(j);
        } catch (C) {
          console.error("Failed to download:", C), alert(`Download failed: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return (T, C) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (W) => i.value = !0)
          })
        ]),
        content: l(() => [
          k(Be, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", Jh, [
                C[7] || (C[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", Qh, [
                  k(Kt, {
                    modelValue: r.value,
                    "onUpdate:modelValue": C[1] || (C[1] = (W) => r.value = W),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Xh, [
                  k(te, {
                    variant: "primary",
                    size: "md",
                    loading: w.value || g.value,
                    disabled: w.value || g.value,
                    onClick: $
                  }, {
                    default: l(() => [
                      C[6] || (C[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      y(" " + a(b.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          m.value ? (s(), M(Be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              k(Ye, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Bt({
                icon: l(() => [
                  y(a(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  y(a(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  y(a(m.value.status === "success" ? "Your environment has been exported" : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    k(ze, { label: "Saved to:" }, {
                      default: l(() => [
                        k(Eh, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), M(ze, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", Zh, [...C[8] || (C[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: L
                    }, {
                      default: l(() => [...C[9] || (C[9] = [
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
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: x
                    }, {
                      default: l(() => [...C[10] || (C[10] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: C[2] || (C[2] = (W) => m.value = null)
                    }, {
                      default: l(() => [...C[11] || (C[11] = [
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
      k(lt, {
        show: i.value,
        title: "What Gets Exported",
        onClose: C[3] || (C[3] = (W) => i.value = !1)
      }, {
        content: l(() => [...C[12] || (C[12] = [
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
      }, 8, ["show"]),
      p.value && c.value ? (s(), M(Nh, {
        key: 0,
        issues: c.value.blocking_issues,
        onClose: C[4] || (C[4] = (W) => p.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      h.value && c.value ? (s(), M(Yh, {
        key: 1,
        models: c.value.warnings.models_without_sources,
        onConfirm: z,
        onCancel: C[5] || (C[5] = (W) => h.value = !1),
        onRevalidate: V
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), t1 = /* @__PURE__ */ Z(e1, [["__scopeId", "data-v-f4d120f2"]]), s1 = { class: "file-input-wrapper" }, o1 = ["accept", "multiple", "disabled"], n1 = /* @__PURE__ */ X({
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
    const r = n, w = _(null);
    function g() {
      var m;
      (m = w.value) == null || m.click();
    }
    function v(m) {
      const i = m.target;
      i.files && i.files.length > 0 && (r("change", i.files), i.value = "");
    }
    return u({
      triggerInput: g
    }), (m, i) => (s(), o("div", s1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: w,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, o1),
      k(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          _e(m.$slots, "default", {}, () => [
            i[0] || (i[0] = e("svg", {
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
}), a1 = /* @__PURE__ */ Z(n1, [["__scopeId", "data-v-cd192091"]]), l1 = {
  key: 0,
  class: "drop-zone-empty"
}, i1 = { class: "drop-zone-text" }, r1 = { class: "drop-zone-primary" }, d1 = { class: "drop-zone-secondary" }, c1 = { class: "drop-zone-actions" }, u1 = {
  key: 1,
  class: "drop-zone-file"
}, m1 = { class: "file-info" }, v1 = { class: "file-details" }, f1 = { class: "file-name" }, g1 = { class: "file-size" }, p1 = /* @__PURE__ */ X({
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
    const n = u, r = _(!1), w = _(null), g = _(0), v = P(() => w.value !== null), m = P(() => {
      var f;
      return ((f = w.value) == null ? void 0 : f.name) || "";
    }), i = P(() => {
      if (!w.value) return "";
      const f = w.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function c(f) {
      var x;
      f.stopPropagation(), g.value++, (x = f.dataTransfer) != null && x.types.includes("Files") && (r.value = !0);
    }
    function p(f) {
      f.stopPropagation(), f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function h(f) {
      f.stopPropagation(), g.value--, g.value === 0 && (r.value = !1);
    }
    function b(f) {
      var L;
      f.stopPropagation(), g.value = 0, r.value = !1;
      const x = (L = f.dataTransfer) == null ? void 0 : L.files;
      x && x.length > 0 && z(x[0]);
    }
    function $(f) {
      f.length > 0 && z(f[0]);
    }
    function z(f) {
      w.value = f, n("fileSelected", f);
    }
    function V() {
      w.value = null, n("clear");
    }
    return (f, x) => (s(), o("div", {
      class: ae(["file-drop-zone", { "drop-active": r.value, "has-file": v.value }]),
      onDragenter: Te(c, ["prevent"]),
      onDragover: Te(p, ["prevent"]),
      onDragleave: Te(h, ["prevent"]),
      onDrop: Te(b, ["prevent"])
    }, [
      v.value ? (s(), o("div", u1, [
        e("div", m1, [
          x[1] || (x[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", v1, [
            e("div", f1, a(m.value), 1),
            e("div", g1, a(i.value), 1)
          ])
        ]),
        k(te, {
          variant: "ghost",
          size: "xs",
          onClick: V,
          title: "Remove file"
        }, {
          default: l(() => [...x[2] || (x[2] = [
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
      ])) : (s(), o("div", l1, [
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
        e("div", i1, [
          e("p", r1, a(t.primaryText), 1),
          e("p", d1, a(t.secondaryText), 1)
        ]),
        e("div", c1, [
          k(a1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
          }, {
            default: l(() => [
              y(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), h1 = /* @__PURE__ */ Z(p1, [["__scopeId", "data-v-b774d3bb"]]), y1 = { class: "import-preview" }, w1 = { class: "preview-header" }, k1 = {
  key: 0,
  class: "source-env"
}, b1 = { class: "preview-content" }, _1 = { class: "preview-section" }, $1 = { class: "section-header" }, C1 = { class: "section-info" }, x1 = { class: "section-count" }, S1 = {
  key: 0,
  class: "item-list"
}, I1 = { class: "item-name" }, E1 = {
  key: 0,
  class: "item-more"
}, M1 = { class: "preview-section" }, T1 = { class: "section-header" }, R1 = { class: "section-info" }, z1 = { class: "section-count" }, L1 = {
  key: 0,
  class: "item-list"
}, P1 = { class: "item-details" }, D1 = { class: "item-name" }, N1 = { class: "item-meta" }, U1 = {
  key: 0,
  class: "item-more"
}, O1 = { class: "preview-section" }, B1 = { class: "section-header" }, F1 = { class: "section-info" }, A1 = { class: "section-count" }, V1 = {
  key: 0,
  class: "item-list"
}, W1 = { class: "item-name" }, j1 = {
  key: 0,
  class: "item-more"
}, G1 = {
  key: 0,
  class: "preview-section"
}, q1 = { class: "git-info" }, H1 = /* @__PURE__ */ X({
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
    const u = t, n = P(() => u.workflows.length), r = P(() => u.models.length), w = P(() => u.nodes.length);
    function g(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, m) => (s(), o("div", y1, [
      e("div", w1, [
        k(Xe, null, {
          default: l(() => [...m[0] || (m[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", k1, [
          m[1] || (m[1] = y(" From: ", -1)),
          k(ts, null, {
            default: l(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", b1, [
        e("div", _1, [
          e("div", $1, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", C1, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", x1, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", S1, [
            (s(!0), o(A, null, ee(t.workflows.slice(0, t.maxPreviewItems), (i) => (s(), o("div", {
              key: i,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", I1, a(i), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", E1, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", M1, [
          e("div", T1, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", R1, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", z1, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", L1, [
            (s(!0), o(A, null, ee(t.models.slice(0, t.maxPreviewItems), (i) => (s(), o("div", {
              key: i.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", P1, [
                e("span", D1, a(i.filename), 1),
                e("span", N1, a(g(i.size)) + " • " + a(i.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", U1, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", O1, [
          e("div", B1, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", F1, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", A1, a(w.value) + " node" + a(w.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", V1, [
            (s(!0), o(A, null, ee(t.nodes.slice(0, t.maxPreviewItems), (i) => (s(), o("div", {
              key: i,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", W1, a(i), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", j1, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", G1, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", q1, [
            t.gitBranch ? (s(), M(ze, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                k(ts, null, {
                  default: l(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (s(), M(ze, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                k(_s, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), K1 = /* @__PURE__ */ Z(H1, [["__scopeId", "data-v-182fe113"]]), Y1 = { class: "import-config" }, J1 = { class: "config-container" }, Q1 = { class: "config-field" }, X1 = { class: "input-wrapper" }, Z1 = ["value"], ey = {
  key: 0,
  class: "validating-indicator"
}, ty = {
  key: 1,
  class: "valid-indicator"
}, sy = {
  key: 0,
  class: "field-error"
}, oy = { class: "config-field" }, ny = { class: "strategy-options" }, ay = ["value", "checked", "onChange"], ly = { class: "strategy-content" }, iy = { class: "strategy-label" }, ry = { class: "strategy-description" }, dy = { class: "advanced-section" }, cy = { class: "advanced-content" }, uy = { class: "config-field" }, my = ["value"], vy = ["value"], fy = /* @__PURE__ */ X({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "validate-name"],
  setup(t, { emit: u }) {
    const n = t, r = u, w = _(!1), g = _(!1);
    gt(() => n.nameError, (p) => {
      w.value = !1, g.value = !p && n.name.length > 0;
    });
    const v = [
      {
        value: "all",
        label: "Download All",
        description: "Download all models with available sources"
      },
      {
        value: "required",
        label: "Required Only",
        description: "Only download models marked as required in workflows"
      },
      {
        value: "skip",
        label: "Skip Downloads",
        description: "Don't download any models now (resolve later)"
      }
    ];
    let m = null;
    function i(p) {
      const h = p.target.value;
      r("update:name", h), g.value = !1, m && clearTimeout(m), h.length > 0 ? (w.value = !0, m = setTimeout(() => {
        r("validate-name", h);
      }, 400)) : w.value = !1;
    }
    function c() {
      n.name.length > 0 && r("validate-name", n.name);
    }
    return (p, h) => (s(), o("div", Y1, [
      k(Xe, null, {
        default: l(() => [...h[1] || (h[1] = [
          y("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", J1, [
        e("div", Q1, [
          k(Gt, { required: "" }, {
            default: l(() => [...h[2] || (h[2] = [
              y("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", X1, [
            e("input", {
              type: "text",
              class: ae(["name-input", { error: t.nameError, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: i,
              onBlur: c
            }, null, 42, Z1),
            w.value ? (s(), o("span", ey, "...")) : g.value ? (s(), o("span", ty, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", sy, a(t.nameError), 1)) : d("", !0),
          h[3] || (h[3] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", oy, [
          k(Gt, null, {
            default: l(() => [...h[4] || (h[4] = [
              y("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", ny, [
            (s(), o(A, null, ee(v, (b) => e("label", {
              key: b.value,
              class: ae(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: ($) => r("update:modelStrategy", b.value)
              }, null, 40, ay),
              e("div", ly, [
                e("span", iy, a(b.label), 1),
                e("span", ry, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("details", dy, [
          h[6] || (h[6] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", cy, [
            e("div", uy, [
              k(Gt, null, {
                default: l(() => [...h[5] || (h[5] = [
                  y("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: h[0] || (h[0] = (b) => r("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(A, null, ee(be(ds), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, vy))), 128))
              ], 40, my)
            ])
          ])
        ])
      ])
    ]));
  }
}), gy = /* @__PURE__ */ Z(fy, [["__scopeId", "data-v-ea63af76"]]), py = {
  key: 0,
  class: "import-empty"
}, hy = {
  key: 1,
  class: "import-configure"
}, yy = { class: "selected-file-bar" }, wy = { class: "file-bar-content" }, ky = { class: "file-bar-info" }, by = { class: "file-bar-name" }, _y = { class: "file-bar-size" }, $y = {
  key: 0,
  class: "preview-loading"
}, Cy = { class: "import-actions" }, xy = {
  key: 2,
  class: "import-progress"
}, Sy = { class: "progress-content" }, Iy = { class: "progress-info" }, Ey = { class: "progress-title" }, My = { class: "progress-detail" }, Ty = { class: "progress-bar" }, Ry = { class: "progress-status" }, zy = {
  key: 3,
  class: "import-complete"
}, Ly = { class: "complete-message" }, Py = { class: "complete-title" }, Dy = { class: "complete-details" }, Ny = { class: "complete-actions" }, Uy = /* @__PURE__ */ X({
  __name: "ImportSection",
  setup(t) {
    const { previewTarballImport: u, validateEnvironmentName: n, executeImport: r, getImportProgress: w } = Oe();
    let g = null;
    const v = _(!1), m = _(null), i = _(!1), c = _(!1), p = _(!1), h = _(""), b = _(!1), $ = _(null), z = _(null), V = _({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto"
    }), f = _(null), x = _({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), L = P(() => {
      if (!z.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const R = z.value;
      return {
        sourceEnvironment: R.comfyui_version ? `ComfyUI ${R.comfyui_version}` : "Unknown",
        workflows: R.workflows.map((K) => K.name),
        models: R.models.map((K) => ({
          filename: K.filename,
          size: 0,
          type: K.relative_path.split("/")[0] || "model"
        })),
        nodes: R.nodes.map((K) => K.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), T = P(() => !b.value && !$.value && z.value && V.value.name.length > 0 && !f.value);
    async function C(R) {
      m.value = R, b.value = !0, $.value = null, z.value = null;
      try {
        const K = await u(R);
        z.value = K;
      } catch (K) {
        $.value = K instanceof Error ? K.message : "Failed to analyze file", console.error("Preview error:", K);
      } finally {
        b.value = !1;
      }
    }
    function W() {
      m.value = null, c.value = !1, p.value = !1, h.value = "", z.value = null, $.value = null, V.value = { name: "", modelStrategy: "required", torchBackend: "auto" }, f.value = null;
    }
    function j() {
      E(), W(), i.value = !1, b.value = !1, x.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function Y(R) {
      if (!R) {
        f.value = "Environment name is required";
        return;
      }
      try {
        const K = await n(R);
        f.value = K.valid ? null : K.error || "Invalid name";
      } catch {
        f.value = "Failed to validate name";
      }
    }
    async function D() {
      if (!(!m.value || !V.value.name)) {
        i.value = !0, c.value = !1, x.value = { message: `Creating environment '${V.value.name}'...`, detail: "", percent: 0 };
        try {
          const R = await r(
            m.value,
            V.value.name,
            V.value.modelStrategy,
            V.value.torchBackend
          );
          R.status === "started" ? S() : (p.value = !1, h.value = R.message, i.value = !1, c.value = !0);
        } catch (R) {
          p.value = !1, h.value = R instanceof Error ? R.message : "Unknown error occurred during import", i.value = !1, c.value = !0;
        }
      }
    }
    function S() {
      g || (g = setInterval(async () => {
        try {
          const R = await w();
          x.value = {
            message: R.message,
            detail: "",
            percent: R.state === "importing" ? 50 : R.state === "complete" ? 100 : 0
          }, R.state === "complete" ? (E(), p.value = !0, h.value = `Environment '${R.environment_name}' created successfully`, i.value = !1, c.value = !0) : R.state === "error" && (E(), p.value = !1, h.value = R.error || R.message, i.value = !1, c.value = !0);
        } catch (R) {
          console.error("Failed to poll import progress:", R);
        }
      }, 2e3));
    }
    function E() {
      g && (clearInterval(g), g = null);
    }
    function O(R) {
      return R < 1024 ? `${R} B` : R < 1024 * 1024 ? `${(R / 1024).toFixed(1)} KB` : R < 1024 * 1024 * 1024 ? `${(R / (1024 * 1024)).toFixed(1)} MB` : `${(R / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (R, K) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: K[0] || (K[0] = (he) => v.value = !0)
          })
        ]),
        content: l(() => {
          var he;
          return [
            !m.value && !i.value ? (s(), o("div", py, [
              k(h1, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: C
              })
            ])) : m.value && !i.value && !c.value ? (s(), o("div", hy, [
              e("div", yy, [
                e("div", wy, [
                  K[5] || (K[5] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", ky, [
                    e("div", by, a(m.value.name), 1),
                    e("div", _y, a(O(m.value.size)), 1)
                  ])
                ]),
                k(te, {
                  variant: "ghost",
                  size: "sm",
                  onClick: W
                }, {
                  default: l(() => [...K[6] || (K[6] = [
                    y(" Change File ", -1)
                  ])]),
                  _: 1
                })
              ]),
              b.value ? (s(), o("div", $y, [...K[7] || (K[7] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : $.value ? (s(), M(Ze, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [$.value]
              }, null, 8, ["details"])) : z.value ? (s(), M(K1, {
                key: 2,
                "source-environment": L.value.sourceEnvironment,
                workflows: L.value.workflows,
                models: L.value.models,
                nodes: L.value.nodes,
                "git-branch": L.value.gitBranch,
                "git-commit": L.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
              z.value ? (s(), M(gy, {
                key: 3,
                name: V.value.name,
                "onUpdate:name": K[1] || (K[1] = (ce) => V.value.name = ce),
                "model-strategy": V.value.modelStrategy,
                "onUpdate:modelStrategy": K[2] || (K[2] = (ce) => V.value.modelStrategy = ce),
                "torch-backend": V.value.torchBackend,
                "onUpdate:torchBackend": K[3] || (K[3] = (ce) => V.value.torchBackend = ce),
                "name-error": f.value,
                onValidateName: Y
              }, null, 8, ["name", "model-strategy", "torch-backend", "name-error"])) : d("", !0),
              V.value.modelStrategy === "skip" && ((he = z.value) != null && he.models_needing_download) ? (s(), M(Ze, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${z.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : d("", !0),
              e("div", Cy, [
                k(te, {
                  variant: "primary",
                  size: "md",
                  disabled: !T.value,
                  onClick: D
                }, {
                  default: l(() => [...K[8] || (K[8] = [
                    e("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM8 4v4h3l-4 4-4-4h3V4h2z" })
                    ], -1),
                    y(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"]),
                k(te, {
                  variant: "secondary",
                  size: "md",
                  onClick: W
                }, {
                  default: l(() => [...K[9] || (K[9] = [
                    y(" Cancel ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : i.value ? (s(), o("div", xy, [
              e("div", Sy, [
                K[10] || (K[10] = e("div", { class: "progress-icon" }, [
                  e("div", { class: "spinner" })
                ], -1)),
                e("div", Iy, [
                  e("div", Ey, a(x.value.message), 1),
                  e("div", My, a(x.value.detail), 1)
                ])
              ]),
              e("div", Ty, [
                e("div", {
                  class: "progress-bar-fill",
                  style: at({ width: `${x.value.percent}%` })
                }, null, 4)
              ]),
              e("div", Ry, a(x.value.percent) + "% complete ", 1)
            ])) : c.value ? (s(), o("div", zy, [
              e("div", {
                class: ae(["complete-icon", p.value ? "success" : "error"])
              }, a(p.value ? "✓" : "✕"), 3),
              e("div", Ly, [
                e("div", Py, a(p.value ? "Import Successful" : "Import Failed"), 1),
                e("div", Dy, a(h.value), 1)
              ]),
              e("div", Ny, [
                k(te, {
                  variant: "primary",
                  size: "md",
                  onClick: j
                }, {
                  default: l(() => [...K[11] || (K[11] = [
                    y(" Import Another ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0)
          ];
        }),
        _: 1
      }),
      k(lt, {
        show: v.value,
        title: "How Import Works",
        onClose: K[4] || (K[4] = (he) => v.value = !1)
      }, {
        content: l(() => [...K[12] || (K[12] = [
          e("div", { class: "help-steps" }, [
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "1"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Creates a New Environment"),
                e("p", null, "Import does not modify your current environment - it creates a brand new one")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "2"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Preview Before Import"),
                e("p", null, "See what nodes, models, and workflows will be set up")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "3"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Choose Model Strategy"),
                e("p", null, "Download all models, only required ones, or skip for later")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "4"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Switch When Ready"),
                e("p", null, "After creation, switch to the new environment to start using it")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Oy = /* @__PURE__ */ Z(Uy, [["__scopeId", "data-v-f9c61799"]]), By = { class: "header-info" }, Fy = { class: "commit-hash" }, Ay = {
  key: 0,
  class: "commit-refs"
}, Vy = { class: "commit-message" }, Wy = { class: "commit-date" }, jy = {
  key: 0,
  class: "loading"
}, Gy = {
  key: 1,
  class: "changes-section"
}, qy = { class: "stats-row" }, Hy = { class: "stat" }, Ky = { class: "stat insertions" }, Yy = { class: "stat deletions" }, Jy = {
  key: 0,
  class: "change-group"
}, Qy = {
  key: 1,
  class: "change-group"
}, Xy = {
  key: 0,
  class: "version"
}, Zy = {
  key: 2,
  class: "change-group"
}, ew = { class: "change-item" }, tw = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Oe(), r = _(null), w = _(!0), g = P(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), v = P(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return De(async () => {
      try {
        r.value = await n(u.commit.hash);
      } finally {
        w.value = !1;
      }
    }), (m, i) => (s(), M(Je, {
      size: "md",
      "show-close-button": !1,
      onClose: i[3] || (i[3] = (c) => m.$emit("close"))
    }, {
      header: l(() => {
        var c, p, h, b;
        return [
          e("div", By, [
            i[4] || (i[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Fy, a(((c = r.value) == null ? void 0 : c.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (b = (h = r.value) == null ? void 0 : h.refs) != null && b.length ? (s(), o("span", Ay, [
              (s(!0), o(A, null, ee(r.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, a($), 1))), 128))
            ])) : d("", !0)
          ]),
          k(de, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = ($) => m.$emit("close"))
          }, {
            default: l(() => [...i[5] || (i[5] = [
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
      body: l(() => {
        var c, p;
        return [
          e("div", Vy, a(((c = r.value) == null ? void 0 : c.message) || t.commit.message), 1),
          e("div", Wy, a(((p = r.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          w.value ? (s(), o("div", jy, "Loading details...")) : r.value ? (s(), o("div", Gy, [
            e("div", qy, [
              e("span", Hy, a(r.value.stats.files_changed) + " files", 1),
              e("span", Ky, "+" + a(r.value.stats.insertions), 1),
              e("span", Yy, "-" + a(r.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", Jy, [
              k(Nt, { variant: "section" }, {
                default: l(() => [...i[6] || (i[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, ee(r.value.changes.workflows.added, (h) => (s(), o("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                i[7] || (i[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(h), 1)
              ]))), 128)),
              (s(!0), o(A, null, ee(r.value.changes.workflows.modified, (h) => (s(), o("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                i[8] || (i[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(h), 1)
              ]))), 128)),
              (s(!0), o(A, null, ee(r.value.changes.workflows.deleted, (h) => (s(), o("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                i[9] || (i[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(h), 1)
              ]))), 128))
            ])) : d("", !0),
            v.value ? (s(), o("div", Qy, [
              k(Nt, { variant: "section" }, {
                default: l(() => [...i[10] || (i[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, ee(r.value.changes.nodes.added, (h) => (s(), o("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                i[11] || (i[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(h.name), 1),
                h.version ? (s(), o("span", Xy, "(" + a(h.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(A, null, ee(r.value.changes.nodes.removed, (h) => (s(), o("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                i[12] || (i[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(h.name), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.changes.models.resolved > 0 ? (s(), o("div", Zy, [
              k(Nt, { variant: "section" }, {
                default: l(() => [...i[13] || (i[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", ew, [
                i[14] || (i[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => [
        k(de, {
          variant: "secondary",
          onClick: i[1] || (i[1] = (c) => m.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...i[15] || (i[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(de, {
          variant: "primary",
          onClick: i[2] || (i[2] = (c) => m.$emit("checkout", t.commit))
        }, {
          default: l(() => [...i[16] || (i[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), sw = /* @__PURE__ */ Z(tw, [["__scopeId", "data-v-d256ff6d"]]), ow = { class: "dialog-message" }, nw = {
  key: 0,
  class: "dialog-details"
}, aw = {
  key: 1,
  class: "dialog-warning"
}, lw = /* @__PURE__ */ X({
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
    return (u, n) => (s(), M(Je, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", ow, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", nw, [
          (s(!0), o(A, null, ee(t.details, (r, w) => (s(), o("div", {
            key: w,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", aw, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        k(de, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: l(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), M(de, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: l(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        k(de, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
        }, {
          default: l(() => [
            y(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), iw = /* @__PURE__ */ Z(lw, [["__scopeId", "data-v-3670b9f5"]]), rw = { class: "base-textarea-wrapper" }, dw = ["value", "rows", "placeholder", "disabled", "maxlength"], cw = {
  key: 0,
  class: "base-textarea-count"
}, uw = /* @__PURE__ */ X({
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
    return (u, n) => (s(), o("div", rw, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = pt(Te((r) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = pt(Te((r) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, dw),
      t.showCharCount && t.maxLength ? (s(), o("div", cw, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), hs = /* @__PURE__ */ Z(uw, [["__scopeId", "data-v-5516e6fc"]]), mw = ["checked", "disabled"], vw = { class: "base-checkbox-box" }, fw = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, gw = {
  key: 0,
  class: "base-checkbox-label"
}, pw = /* @__PURE__ */ X({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", {
      class: ae(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked))
      }, null, 40, mw),
      e("span", vw, [
        t.modelValue ? (s(), o("svg", fw, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      u.$slots.default ? (s(), o("span", gw, [
        _e(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ys = /* @__PURE__ */ Z(pw, [["__scopeId", "data-v-bf17c831"]]), hw = { class: "popover-header" }, yw = { class: "popover-body" }, ww = {
  key: 0,
  class: "changes-summary"
}, kw = {
  key: 0,
  class: "change-item"
}, bw = {
  key: 1,
  class: "change-item"
}, _w = {
  key: 2,
  class: "change-item"
}, $w = {
  key: 3,
  class: "change-item"
}, Cw = {
  key: 4,
  class: "change-item"
}, xw = {
  key: 5,
  class: "change-item"
}, Sw = {
  key: 1,
  class: "no-changes"
}, Iw = {
  key: 2,
  class: "loading"
}, Ew = {
  key: 3,
  class: "issues-error"
}, Mw = { class: "error-header" }, Tw = { class: "error-title" }, Rw = { class: "issues-list" }, zw = { class: "message-section" }, Lw = { class: "popover-footer" }, Pw = {
  key: 1,
  class: "commit-popover"
}, Dw = { class: "popover-header" }, Nw = { class: "popover-body" }, Uw = {
  key: 0,
  class: "changes-summary"
}, Ow = {
  key: 0,
  class: "change-item"
}, Bw = {
  key: 1,
  class: "change-item"
}, Fw = {
  key: 2,
  class: "change-item"
}, Aw = {
  key: 3,
  class: "change-item"
}, Vw = {
  key: 4,
  class: "change-item"
}, Ww = {
  key: 5,
  class: "change-item"
}, jw = {
  key: 1,
  class: "no-changes"
}, Gw = {
  key: 2,
  class: "loading"
}, qw = {
  key: 3,
  class: "issues-error"
}, Hw = { class: "error-header" }, Kw = { class: "error-title" }, Yw = { class: "issues-list" }, Jw = { class: "message-section" }, Qw = { class: "popover-footer" }, Xw = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: w } = Oe(), g = _(""), v = _(!1), m = _(!1), i = _(null), c = P(() => {
      if (!n.status) return !1;
      const V = n.status.workflows;
      return V.new.length > 0 || V.modified.length > 0 || V.deleted.length > 0 || n.status.has_changes;
    }), p = P(() => {
      if (!n.status) return !1;
      const V = n.status.workflows, f = n.status.git_changes;
      return V.new.length > 0 || V.modified.length > 0 || V.deleted.length > 0 || f.nodes_added.length > 0 || f.nodes_removed.length > 0;
    }), h = P(() => {
      var V;
      return (V = n.status) != null && V.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (f) => f.has_issues && (f.sync_state === "new" || f.sync_state === "modified")
      ) : [];
    }), b = P(() => h.value.length > 0), $ = P(() => b.value && !m.value);
    async function z() {
      var V, f, x;
      if (!(b.value && !m.value) && !(!c.value || !g.value.trim() || v.value)) {
        v.value = !0, i.value = null;
        try {
          const L = await w(g.value.trim(), m.value);
          L.status === "success" ? (i.value = {
            type: "success",
            message: `Committed: ${((V = L.summary) == null ? void 0 : V.new) || 0} new, ${((f = L.summary) == null ? void 0 : f.modified) || 0} modified, ${((x = L.summary) == null ? void 0 : x.deleted) || 0} deleted`
          }, g.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : L.status === "no_changes" ? i.value = { type: "error", message: "No changes to commit" } : L.status === "blocked" ? i.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : i.value = { type: "error", message: L.message || "Commit failed" };
        } catch (L) {
          i.value = { type: "error", message: L instanceof Error ? L.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (V, f) => t.asModal ? (s(), M(Fe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: f[5] || (f[5] = (x) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: f[4] || (f[4] = Te(() => {
          }, ["stop"]))
        }, [
          e("div", hw, [
            f[11] || (f[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: f[0] || (f[0] = (x) => r("close"))
            }, [...f[10] || (f[10] = [
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
          e("div", yw, [
            t.status && c.value ? (s(), o("div", ww, [
              t.status.workflows.new.length ? (s(), o("div", kw, [
                f[12] || (f[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", bw, [
                f[13] || (f[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", _w, [
                f[14] || (f[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", $w, [
                f[15] || (f[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Cw, [
                f[16] || (f[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              p.value ? d("", !0) : (s(), o("div", xw, [...f[17] || (f[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Sw, " No changes to commit ")) : (s(), o("div", Iw, " Loading... ")),
            b.value ? (s(), o("div", Ew, [
              e("div", Mw, [
                f[18] || (f[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Tw, a(h.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Rw, [
                (s(!0), o(A, null, ee(h.value, (x) => (s(), o("div", {
                  key: x.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(x.name), 1),
                  y(": " + a(x.issue_summary), 1)
                ]))), 128))
              ]),
              k(ys, {
                modelValue: m.value,
                "onUpdate:modelValue": f[1] || (f[1] = (x) => m.value = x),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...f[19] || (f[19] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", zw, [
              k(hs, {
                modelValue: g.value,
                "onUpdate:modelValue": f[2] || (f[2] = (x) => g.value = x),
                placeholder: $.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
                disabled: !c.value || v.value || $.value,
                rows: 3,
                onCtrlEnter: z
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            i.value ? (s(), o("div", {
              key: 4,
              class: ae(["result", i.value.type])
            }, a(i.value.message), 3)) : d("", !0)
          ]),
          e("div", Lw, [
            k(de, {
              variant: "secondary",
              onClick: f[3] || (f[3] = (x) => r("close"))
            }, {
              default: l(() => [...f[20] || (f[20] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: m.value ? "danger" : "primary",
              disabled: !c.value || !g.value.trim() || v.value || $.value,
              loading: v.value,
              onClick: z
            }, {
              default: l(() => [
                y(a(v.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Pw, [
      e("div", Dw, [
        f[22] || (f[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: f[6] || (f[6] = (x) => r("close"))
        }, [...f[21] || (f[21] = [
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
      e("div", Nw, [
        t.status && c.value ? (s(), o("div", Uw, [
          t.status.workflows.new.length ? (s(), o("div", Ow, [
            f[23] || (f[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Bw, [
            f[24] || (f[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Fw, [
            f[25] || (f[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Aw, [
            f[26] || (f[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Vw, [
            f[27] || (f[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          p.value ? d("", !0) : (s(), o("div", Ww, [...f[28] || (f[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", jw, " No changes to commit ")) : (s(), o("div", Gw, " Loading... ")),
        b.value ? (s(), o("div", qw, [
          e("div", Hw, [
            f[29] || (f[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Kw, a(h.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", Yw, [
            (s(!0), o(A, null, ee(h.value, (x) => (s(), o("div", {
              key: x.name,
              class: "issue-item"
            }, [
              e("strong", null, a(x.name), 1),
              y(": " + a(x.issue_summary), 1)
            ]))), 128))
          ]),
          k(ys, {
            modelValue: m.value,
            "onUpdate:modelValue": f[7] || (f[7] = (x) => m.value = x),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...f[30] || (f[30] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", Jw, [
          k(hs, {
            modelValue: g.value,
            "onUpdate:modelValue": f[8] || (f[8] = (x) => g.value = x),
            placeholder: $.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
            disabled: !c.value || v.value || $.value,
            rows: 3,
            onCtrlEnter: z
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        i.value ? (s(), o("div", {
          key: 4,
          class: ae(["result", i.value.type])
        }, a(i.value.message), 3)) : d("", !0)
      ]),
      e("div", Qw, [
        k(de, {
          variant: "secondary",
          onClick: f[9] || (f[9] = (x) => r("close"))
        }, {
          default: l(() => [...f[31] || (f[31] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(de, {
          variant: m.value ? "danger" : "primary",
          disabled: !c.value || !g.value.trim() || v.value || $.value,
          loading: v.value,
          onClick: z
        }, {
          default: l(() => [
            y(a(v.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), zs = /* @__PURE__ */ Z(Xw, [["__scopeId", "data-v-aa2a9bdf"]]), Zw = { class: "modal-header" }, e0 = { class: "modal-body" }, t0 = { class: "switch-message" }, s0 = { class: "switch-details" }, o0 = { class: "modal-actions" }, n0 = /* @__PURE__ */ X({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), M(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Te(() => {
          }, ["stop"]))
        }, [
          e("div", Zw, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", e0, [
            e("p", t0, [
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
            e("p", s0, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", o0, [
            k(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(te, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), a0 = /* @__PURE__ */ Z(n0, [["__scopeId", "data-v-e9c5253e"]]), l0 = {
  key: 0,
  class: "modal-overlay"
}, i0 = { class: "modal-content" }, r0 = { class: "modal-body" }, d0 = { class: "progress-info" }, c0 = { class: "progress-percentage" }, u0 = { class: "progress-state" }, m0 = { class: "switch-steps" }, v0 = { class: "step-icon" }, f0 = { class: "step-label" }, g0 = /* @__PURE__ */ X({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = P(() => {
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
      return u.message || g[u.state] || u.state;
    }), r = P(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), w = P(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], v = g.findIndex((m) => m.state === u.state);
      return g.map((m, i) => {
        let c = "pending", p = "○";
        return i < v ? (c = "completed", p = "✓") : i === v && (c = "active", p = "⟳"), {
          ...m,
          status: c,
          icon: p
        };
      });
    });
    return (g, v) => (s(), M(Fe, { to: "body" }, [
      t.show ? (s(), o("div", l0, [
        e("div", i0, [
          v[1] || (v[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", r0, [
            k(Rs, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", d0, [
              e("div", c0, a(t.progress) + "%", 1),
              e("div", u0, a(n.value), 1)
            ]),
            e("div", m0, [
              (s(!0), o(A, null, ee(w.value, (m) => (s(), o("div", {
                key: m.state,
                class: ae(["switch-step", m.status])
              }, [
                e("span", v0, a(m.icon), 1),
                e("span", f0, a(m.label), 1)
              ], 2))), 128))
            ]),
            v[0] || (v[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), p0 = /* @__PURE__ */ Z(g0, [["__scopeId", "data-v-768a5078"]]), h0 = { class: "modal-header" }, y0 = { class: "modal-body" }, w0 = {
  key: 0,
  class: "node-section"
}, k0 = { class: "node-list" }, b0 = {
  key: 1,
  class: "node-section"
}, _0 = { class: "node-list" }, $0 = { class: "modal-actions" }, C0 = /* @__PURE__ */ X({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), M(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Te(() => {
          }, ["stop"]))
        }, [
          e("div", h0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", y0, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", w0, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", k0, [
                (s(!0), o(A, null, ee(t.mismatchDetails.missing_nodes, (r) => (s(), o("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", b0, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", _0, [
                (s(!0), o(A, null, ee(t.mismatchDetails.extra_nodes, (r) => (s(), o("div", {
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
          e("div", $0, [
            k(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(te, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), x0 = /* @__PURE__ */ Z(C0, [["__scopeId", "data-v-7cad7518"]]), S0 = {
  key: 0,
  class: "wizard-steps"
}, I0 = { class: "step-number" }, E0 = {
  key: 1,
  class: "wizard-steps wizard-steps--single"
}, M0 = {
  key: 2,
  class: "wizard-step"
}, T0 = { class: "form-field" }, R0 = ["placeholder"], z0 = {
  key: 0,
  class: "form-error"
}, L0 = { class: "form-field form-field--checkbox" }, P0 = { class: "form-checkbox" }, D0 = {
  key: 0,
  class: "form-field"
}, N0 = ["placeholder"], U0 = {
  key: 0,
  class: "form-info"
}, O0 = {
  key: 1,
  class: "form-suggestion"
}, B0 = {
  key: 2,
  class: "form-error"
}, F0 = {
  key: 3,
  class: "form-info"
}, A0 = {
  key: 3,
  class: "wizard-step"
}, V0 = {
  key: 0,
  class: "cli-warning"
}, W0 = {
  key: 1,
  class: "env-selection"
}, j0 = { class: "env-list" }, G0 = ["value"], q0 = { class: "env-name" }, H0 = { class: "env-actions" }, K0 = { key: 2 }, Y0 = { class: "wizard-intro" }, J0 = { class: "form-field" }, Q0 = { class: "form-field" }, X0 = ["value"], Z0 = { class: "form-field" }, ek = ["disabled"], tk = ["value"], sk = { class: "form-field" }, ok = ["value"], nk = { class: "form-field form-field--checkbox" }, ak = { class: "form-checkbox" }, lk = {
  key: 1,
  class: "form-error"
}, Wt = 10, ik = 600 * 1e3, rk = 1800 * 1e3, dk = /* @__PURE__ */ X({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {},
    initialStep: {},
    existingEnvironments: {},
    cliInstalled: { type: Boolean },
    setupState: {}
  },
  emits: ["complete", "close", "switch-environment", "environment-created-no-switch"],
  setup(t, { emit: u }) {
    const n = t, r = u, {
      initializeWorkspace: w,
      getInitializeProgress: g,
      validatePath: v,
      createEnvironment: m,
      getCreateProgress: i,
      getComfyUIReleases: c
    } = Oe(), p = _(n.initialStep || 1), h = _(null), b = _(!1), $ = _(n.defaultPath), z = _(!!n.detectedModelsDir), V = _(n.detectedModelsDir || ""), f = _(null), x = _(null), L = _(null), T = _(null), C = _("my-new-env"), W = _(Ms), j = _("latest"), Y = _(Ts), D = _(!0), S = _(null), E = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), O = _(!1), R = _(!1), K = _(!1), he = _({ progress: 0, message: "" }), ce = _({ progress: 0, message: "" }), oe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], F = _(0), I = _(null), ne = _(0), se = _(null), Ie = P(() => {
      var we, Se;
      const ue = (we = $.value) == null ? void 0 : we.trim(), G = !f.value, Ce = !z.value || !x.value && ((Se = V.value) == null ? void 0 : Se.trim());
      return ue && G && Ce;
    }), $e = P(() => {
      var ue;
      return (ue = C.value) == null ? void 0 : ue.trim();
    });
    async function Le() {
      var ue;
      if (f.value = null, !!((ue = $.value) != null && ue.trim()))
        try {
          const G = await v({ path: $.value, type: "workspace" });
          G.valid || (f.value = G.error || "Invalid path");
        } catch (G) {
          f.value = G instanceof Error ? G.message : "Validation failed";
        }
    }
    async function ye() {
      var ue;
      if (x.value = null, L.value = null, T.value = null, !!((ue = V.value) != null && ue.trim()))
        try {
          const G = await v({ path: V.value, type: "models" });
          if (G.valid)
            T.value = G.model_count ?? null;
          else if (x.value = G.error || "Invalid path", G.suggestion) {
            L.value = G.suggestion, V.value = G.suggestion, x.value = null;
            const Ce = await v({ path: G.suggestion, type: "models" });
            Ce.valid && (T.value = Ce.model_count ?? null);
          }
        } catch (G) {
          x.value = G instanceof Error ? G.message : "Validation failed";
        }
    }
    async function re() {
      var ue, G, Ce;
      if (f.value = null, x.value = null, await Le(), !f.value && !(z.value && ((ue = V.value) != null && ue.trim()) && (await ye(), x.value))) {
        R.value = !0;
        try {
          await w({
            workspace_path: ((G = $.value) == null ? void 0 : G.trim()) || n.defaultPath,
            models_directory: z.value && ((Ce = V.value) == null ? void 0 : Ce.trim()) || null
          }), F.value = 0, I.value = Date.now();
          const we = setInterval(async () => {
            if (I.value && Date.now() - I.value > ik) {
              clearInterval(we), R.value = !1, f.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Se = await g();
              if (F.value = 0, Se.state === "idle" && R.value) {
                clearInterval(we), R.value = !1, f.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              he.value = { progress: Se.progress, message: Se.message }, Se.state === "complete" ? (clearInterval(we), R.value = !1, p.value = 2, Pe()) : Se.state === "error" && (clearInterval(we), R.value = !1, f.value = Se.error || "Workspace creation failed");
            } catch (Se) {
              F.value++, console.warn(`Polling failure ${F.value}/${Wt}:`, Se), F.value >= Wt && (clearInterval(we), R.value = !1, f.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (we) {
          R.value = !1, f.value = we instanceof Error ? we.message : "Failed to create workspace";
        }
      }
    }
    async function le() {
      K.value = !0, S.value = null;
      try {
        const ue = {
          name: C.value.trim() || "my-new-env",
          python_version: W.value,
          comfyui_version: j.value,
          torch_backend: Y.value,
          switch_after: D.value
        };
        if ((await m(ue)).status === "started") {
          ne.value = 0, se.value = Date.now();
          const Ce = setInterval(async () => {
            if (se.value && Date.now() - se.value > rk) {
              clearInterval(Ce), K.value = !1, S.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const we = await i();
              if (ne.value = 0, we.state === "idle" && K.value) {
                clearInterval(Ce), K.value = !1, S.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ce.value = {
                progress: we.progress ?? 0,
                message: we.message,
                phase: we.phase
              }, we.state === "complete") {
                clearInterval(Ce), K.value = !1;
                const Se = we.environment_name || ue.name;
                D.value ? r("complete", Se) : (b.value = !1, r("environment-created-no-switch", Se));
              } else we.state === "error" && (clearInterval(Ce), K.value = !1, S.value = we.error || "Environment creation failed");
            } catch (we) {
              ne.value++, console.warn(`Polling failure ${ne.value}/${Wt}:`, we), ne.value >= Wt && (clearInterval(Ce), K.value = !1, S.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ue) {
        K.value = !1, S.value = ue instanceof Error ? ue.message : "Unknown error";
      }
    }
    async function Pe() {
      O.value = !0;
      try {
        E.value = await c();
      } catch (ue) {
        console.error("Failed to load ComfyUI releases:", ue);
      } finally {
        O.value = !1;
      }
    }
    function Re() {
      h.value && r("switch-environment", h.value);
    }
    return De(() => {
      n.detectedModelsDir && (V.value = n.detectedModelsDir), p.value === 2 && Pe();
    }), (ue, G) => (s(), M(Je, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: G[12] || (G[12] = (Ce) => ue.$emit("close"))
    }, {
      body: l(() => {
        var Ce, we, Se;
        return [
          n.setupState === "no_workspace" ? (s(), o("div", S0, [
            e("div", {
              class: ae(["step", { active: p.value === 1, complete: p.value > 1 }])
            }, [
              e("span", I0, a(p.value > 1 ? "✓" : "1"), 1),
              G[13] || (G[13] = e("span", { class: "step-label" }, "Workspace", -1))
            ], 2),
            G[15] || (G[15] = e("div", { class: "step-connector" }, null, -1)),
            e("div", {
              class: ae(["step", { active: p.value === 2 }])
            }, [...G[14] || (G[14] = [
              e("span", { class: "step-number" }, "2", -1),
              e("span", { class: "step-label" }, "Environment", -1)
            ])], 2)
          ])) : (s(), o("div", E0, [...G[16] || (G[16] = [
            e("div", { class: "step active" }, [
              e("span", { class: "step-number" }, "1"),
              e("span", { class: "step-label" }, "Environment")
            ], -1)
          ])])),
          p.value === 1 ? (s(), o("div", M0, [
            G[20] || (G[20] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
            e("div", T0, [
              G[17] || (G[17] = e("label", { class: "form-label" }, "Workspace Path", -1)),
              Ue(e("input", {
                "onUpdate:modelValue": G[0] || (G[0] = (ke) => $.value = ke),
                type: "text",
                class: "form-input",
                placeholder: t.defaultPath,
                onBlur: Le
              }, null, 40, R0), [
                [Dt, $.value]
              ]),
              f.value ? (s(), o("p", z0, a(f.value), 1)) : d("", !0)
            ]),
            e("div", L0, [
              e("label", P0, [
                Ue(e("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": G[1] || (G[1] = (ke) => z.value = ke)
                }, null, 512), [
                  [Ht, z.value]
                ]),
                G[18] || (G[18] = e("span", null, "I have existing ComfyUI models", -1))
              ])
            ]),
            z.value ? (s(), o("div", D0, [
              G[19] || (G[19] = e("label", { class: "form-label" }, "Models Directory", -1)),
              Ue(e("input", {
                "onUpdate:modelValue": G[2] || (G[2] = (ke) => V.value = ke),
                type: "text",
                class: "form-input",
                placeholder: t.detectedModelsDir || "/path/to/models",
                onBlur: ye
              }, null, 40, N0), [
                [Dt, V.value]
              ]),
              t.detectedModelsDir && !V.value ? (s(), o("p", U0, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
              L.value ? (s(), o("p", O0, " Did you mean: " + a(L.value), 1)) : d("", !0),
              x.value ? (s(), o("p", B0, a(x.value), 1)) : d("", !0),
              T.value !== null && !x.value ? (s(), o("p", F0, " Found " + a(T.value) + " model files ", 1)) : d("", !0)
            ])) : d("", !0),
            R.value ? (s(), M(ss, {
              key: 1,
              progress: he.value.progress,
              message: he.value.message
            }, null, 8, ["progress", "message"])) : d("", !0)
          ])) : d("", !0),
          p.value === 2 ? (s(), o("div", A0, [
            n.cliInstalled ? d("", !0) : (s(), o("div", V0, [...G[21] || (G[21] = [
              e("div", { class: "cli-warning-header" }, [
                e("span", { class: "cli-warning-icon" }, "!"),
                e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed")
              ], -1),
              e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1),
              e("div", { class: "cli-warning-commands" }, [
                e("code", null, "pipx install comfygit"),
                e("span", { class: "cli-warning-or" }, "or"),
                e("code", null, "uv tool install comfygit")
              ], -1)
            ])])),
            (Ce = n.existingEnvironments) != null && Ce.length && !b.value ? (s(), o("div", W0, [
              G[23] || (G[23] = e("p", { class: "wizard-intro" }, " You have existing managed environments. Switch to one, or create a new environment: ", -1)),
              e("div", j0, [
                (s(!0), o(A, null, ee(n.existingEnvironments, (ke) => (s(), o("label", {
                  key: ke,
                  class: ae(["env-option", { selected: h.value === ke }])
                }, [
                  Ue(e("input", {
                    type: "radio",
                    name: "env-select",
                    value: ke,
                    "onUpdate:modelValue": G[3] || (G[3] = (ge) => h.value = ge)
                  }, null, 8, G0), [
                    [jt, h.value]
                  ]),
                  e("span", q0, a(ke), 1)
                ], 2))), 128))
              ]),
              e("div", H0, [
                h.value ? (s(), M(de, {
                  key: 0,
                  variant: "primary",
                  onClick: Re
                }, {
                  default: l(() => [
                    y(" Switch to " + a(h.value), 1)
                  ]),
                  _: 1
                })) : d("", !0),
                k(de, {
                  variant: "secondary",
                  onClick: G[4] || (G[4] = (ke) => b.value = !0)
                }, {
                  default: l(() => [...G[22] || (G[22] = [
                    y(" + Create New Environment ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0),
            b.value || !((we = n.existingEnvironments) != null && we.length) ? (s(), o("div", K0, [
              e("p", Y0, a((Se = n.existingEnvironments) != null && Se.length ? "Create a new managed environment:" : "Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows."), 1),
              e("div", J0, [
                G[24] || (G[24] = e("label", { class: "form-label" }, "Environment Name", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": G[5] || (G[5] = (ke) => C.value = ke),
                  type: "text",
                  class: "form-input",
                  placeholder: "my-new-env"
                }, null, 512), [
                  [Dt, C.value]
                ])
              ]),
              e("div", Q0, [
                G[25] || (G[25] = e("label", { class: "form-label" }, "Python Version", -1)),
                Ue(e("select", {
                  "onUpdate:modelValue": G[6] || (G[6] = (ke) => W.value = ke),
                  class: "form-select"
                }, [
                  (s(!0), o(A, null, ee(be(Es), (ke) => (s(), o("option", {
                    key: ke,
                    value: ke
                  }, a(ke), 9, X0))), 128))
                ], 512), [
                  [Ct, W.value]
                ])
              ]),
              e("div", Z0, [
                G[26] || (G[26] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                Ue(e("select", {
                  "onUpdate:modelValue": G[7] || (G[7] = (ke) => j.value = ke),
                  class: "form-select",
                  disabled: O.value
                }, [
                  (s(!0), o(A, null, ee(E.value, (ke) => (s(), o("option", {
                    key: ke.tag_name,
                    value: ke.tag_name
                  }, a(ke.name), 9, tk))), 128))
                ], 8, ek), [
                  [Ct, j.value]
                ])
              ]),
              e("div", sk, [
                G[27] || (G[27] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                Ue(e("select", {
                  "onUpdate:modelValue": G[8] || (G[8] = (ke) => Y.value = ke),
                  class: "form-select"
                }, [
                  (s(!0), o(A, null, ee(be(ds), (ke) => (s(), o("option", {
                    key: ke,
                    value: ke
                  }, a(ke) + a(ke === "auto" ? " (detect GPU)" : ""), 9, ok))), 128))
                ], 512), [
                  [Ct, Y.value]
                ])
              ]),
              e("div", nk, [
                e("label", ak, [
                  Ue(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": G[9] || (G[9] = (ke) => D.value = ke)
                  }, null, 512), [
                    [Ht, D.value]
                  ]),
                  G[28] || (G[28] = e("span", null, "Switch to this environment after creation", -1))
                ])
              ]),
              K.value ? (s(), M(ss, {
                key: 0,
                progress: ce.value.progress,
                message: ce.value.message,
                "current-phase": ce.value.phase,
                "show-steps": !0,
                steps: oe
              }, null, 8, ["progress", "message", "current-phase"])) : d("", !0),
              S.value ? (s(), o("div", lk, a(S.value), 1)) : d("", !0)
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => {
        var Ce, we;
        return [
          p.value === 1 ? (s(), M(de, {
            key: 0,
            variant: "primary",
            disabled: !Ie.value || R.value,
            onClick: re
          }, {
            default: l(() => [
              y(a(R.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : p.value === 2 ? (s(), o(A, { key: 1 }, [
            n.setupState === "no_workspace" ? (s(), M(de, {
              key: 0,
              variant: "secondary",
              disabled: K.value,
              onClick: G[10] || (G[10] = (Se) => p.value = 1)
            }, {
              default: l(() => [...G[29] || (G[29] = [
                y(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (Ce = n.existingEnvironments) != null && Ce.length && b.value ? (s(), M(de, {
              key: 1,
              variant: "secondary",
              disabled: K.value,
              onClick: G[11] || (G[11] = (Se) => b.value = !1)
            }, {
              default: l(() => [...G[30] || (G[30] = [
                y(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : d("", !0),
            b.value || !((we = n.existingEnvironments) != null && we.length) ? (s(), M(de, {
              key: 2,
              variant: "primary",
              disabled: !$e.value || K.value,
              onClick: le
            }, {
              default: l(() => [
                y(a(K.value ? "Creating..." : D.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : d("", !0)
          ], 64)) : d("", !0)
        ];
      }),
      _: 1
    }));
  }
}), ck = /* @__PURE__ */ Z(dk, [["__scopeId", "data-v-b8c35e2d"]]), uk = { class: "comfygit-panel" }, mk = { class: "panel-header" }, vk = { class: "header-left" }, fk = {
  key: 0,
  class: "header-info"
}, gk = { class: "header-actions" }, pk = { class: "env-switcher" }, hk = {
  key: 0,
  class: "header-info"
}, yk = { class: "branch-name" }, wk = { class: "panel-main" }, kk = { class: "sidebar" }, bk = { class: "sidebar-section" }, _k = { class: "sidebar-section" }, $k = { class: "sidebar-section" }, Ck = { class: "content-area" }, xk = {
  key: 0,
  class: "error-message"
}, Sk = {
  key: 1,
  class: "loading"
}, Ik = { class: "dialog-content env-selector-dialog" }, Ek = { class: "dialog-header" }, Mk = { class: "dialog-body" }, Tk = { class: "env-list" }, Rk = { class: "env-info" }, zk = { class: "env-name-row" }, Lk = { class: "env-indicator" }, Pk = { class: "env-name" }, Dk = {
  key: 0,
  class: "env-branch"
}, Nk = {
  key: 1,
  class: "current-label"
}, Uk = { class: "env-stats" }, Ok = ["onClick"], Bk = { class: "toast-container" }, Fk = { class: "toast-message" }, Ak = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: r,
      getHistory: w,
      getBranches: g,
      checkout: v,
      createBranch: m,
      switchBranch: i,
      deleteBranch: c,
      getEnvironments: p,
      switchEnvironment: h,
      getSwitchProgress: b,
      deleteEnvironment: $,
      syncEnvironmentManually: z,
      repairWorkflowModels: V,
      getSetupStatus: f
    } = Oe(), x = $s(), L = _(null), T = _([]), C = _([]), W = _([]), j = P(() => W.value.find((q) => q.is_current)), Y = _(null), D = _(!1), S = _(1), E = P(() => {
      var q;
      return ((q = Y.value) == null ? void 0 : q.state) || "managed";
    }), O = _(!1), R = _(null), K = _(null), he = _(!1), ce = _(null), oe = _(null), F = _(null), I = _(!1), ne = _(!1), se = _(""), Ie = _({ state: "idle", progress: 0, message: "" });
    let $e = null, Le = null;
    const ye = _("status"), re = _("this-env");
    function le(q, N) {
      ye.value = q, re.value = N;
    }
    function Pe(q) {
      const me = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[q];
      me && le(me.view, me.section);
    }
    function Re() {
      le("branches", "this-env");
    }
    function ue() {
      n("close"), setTimeout(() => {
        var N;
        const q = document.querySelectorAll("button.comfyui-button");
        for (const me of q)
          if (((N = me.textContent) == null ? void 0 : N.trim()) === "Manager") {
            me.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const G = _(null), Ce = _(!1), we = _(!1), Se = _([]);
    let ke = 0;
    function ge(q, N = "info", me = 3e3) {
      const Ee = ++ke;
      return Se.value.push({ id: Ee, message: q, type: N }), me > 0 && setTimeout(() => {
        Se.value = Se.value.filter((We) => We.id !== Ee);
      }, me), Ee;
    }
    function Ae(q) {
      Se.value = Se.value.filter((N) => N.id !== q);
    }
    function ht(q, N) {
      ge(q, N);
    }
    const it = P(() => {
      if (!L.value) return "neutral";
      const q = L.value.workflows, N = q.new.length > 0 || q.modified.length > 0 || q.deleted.length > 0 || L.value.has_changes;
      return L.value.comparison.is_synced ? N ? "warning" : "success" : "error";
    });
    P(() => L.value ? it.value === "success" ? "All synced" : it.value === "warning" ? "Uncommitted changes" : it.value === "error" ? "Not synced" : "" : "");
    async function Ne() {
      O.value = !0, R.value = null;
      try {
        const [q, N, me, Ee] = await Promise.all([
          r(!0),
          w(),
          g(),
          p()
        ]);
        L.value = q, T.value = N.commits, C.value = me.branches, W.value = Ee, n("statusUpdate", q), ce.value && await ce.value.loadWorkflows(!0);
      } catch (q) {
        R.value = q instanceof Error ? q.message : "Failed to load status", L.value = null, T.value = [], C.value = [];
      } finally {
        O.value = !1;
      }
    }
    function yt(q) {
      K.value = q;
    }
    async function vt(q) {
      var me;
      K.value = null;
      const N = L.value && (L.value.workflows.new.length > 0 || L.value.workflows.modified.length > 0 || L.value.workflows.deleted.length > 0 || L.value.has_changes);
      G.value = {
        title: N ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: N ? "You have uncommitted changes that will be lost." : `Checkout commit ${q.short_hash || ((me = q.hash) == null ? void 0 : me.slice(0, 7))}?`,
        details: N ? ms() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: N ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: N,
        onConfirm: async () => {
          var je;
          G.value = null, J();
          const Ee = ge(`Checking out ${q.short_hash || ((je = q.hash) == null ? void 0 : je.slice(0, 7))}...`, "info", 0), We = await v(q.hash, N);
          Ae(Ee), We.status === "success" ? ge("Restarting ComfyUI...", "success") : ge(We.message || "Checkout failed", "error");
        }
      };
    }
    async function wt(q) {
      const N = L.value && (L.value.workflows.new.length > 0 || L.value.workflows.modified.length > 0 || L.value.workflows.deleted.length > 0 || L.value.has_changes);
      G.value = {
        title: N ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: N ? "You have uncommitted changes." : `Switch to branch "${q}"?`,
        details: N ? ms() : void 0,
        warning: N ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: N ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          G.value = null, J();
          const me = ge(`Switching to ${q}...`, "info", 0), Ee = await i(q, N);
          Ae(me), Ee.status === "success" ? ge("Restarting ComfyUI...", "success") : ge(Ee.message || "Branch switch failed", "error");
        }
      };
    }
    async function rt(q) {
      const N = ge(`Creating branch ${q}...`, "info", 0), me = await m(q);
      Ae(N), me.status === "success" ? (ge(`Branch "${q}" created`, "success"), await Ne()) : ge(me.message || "Failed to create branch", "error");
    }
    async function kt(q, N = !1) {
      const me = async (Ee) => {
        var je;
        const We = ge(`Deleting branch ${q}...`, "info", 0);
        try {
          const ct = await c(q, Ee);
          Ae(We), ct.status === "success" ? (ge(`Branch "${q}" deleted`, "success"), await Ne()) : (je = ct.message) != null && je.includes("not fully merged") ? G.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${q}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              G.value = null, await me(!0);
            }
          } : ge(ct.message || "Failed to delete branch", "error");
        } catch (ct) {
          Ae(We);
          const Et = ct instanceof Error ? ct.message : "Failed to delete branch";
          Et.includes("not fully merged") ? G.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${q}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              G.value = null, await me(!0);
            }
          } : ge(Et, "error");
        }
      };
      G.value = {
        title: "Delete Branch",
        message: `Delete branch "${q}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          G.value = null, await me(N);
        }
      };
    }
    async function dt(q) {
      K.value = null;
      const N = prompt("Enter branch name:");
      if (N) {
        const me = ge(`Creating branch ${N}...`, "info", 0), Ee = await m(N, q.hash);
        Ae(me), Ee.status === "success" ? (ge(`Branch "${N}" created from ${q.short_hash}`, "success"), await Ne()) : ge(Ee.message || "Failed to create branch", "error");
      }
    }
    function J() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function U() {
      G.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var q;
          G.value = null, J(), ge("Restarting environment...", "info");
          try {
            (q = window.app) != null && q.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function B() {
      G.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var q;
          G.value = null, ge("Stopping environment...", "info");
          try {
            (q = window.app) != null && q.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Q(q) {
      he.value = !1, se.value = q, I.value = !0;
    }
    async function fe() {
      I.value = !1, ne.value = !0, J(), Ie.value = {
        progress: 10,
        state: He(10),
        message: H(10)
      };
      try {
        await h(se.value), ie(), Me();
      } catch (q) {
        ve(), ne.value = !1, ge(`Failed to initiate switch: ${q instanceof Error ? q.message : "Unknown error"}`, "error"), Ie.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function He(q) {
      return q >= 100 ? "complete" : q >= 80 ? "validating" : q >= 60 ? "starting" : q >= 30 ? "syncing" : "preparing";
    }
    function H(q) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[He(q)] || "";
    }
    function ie() {
      if (Le) return;
      let q = 10;
      const N = 60, me = 5e3, Ee = 100, We = (N - q) / (me / Ee);
      Le = window.setInterval(() => {
        if (q += We, q >= N && (q = N, ve()), Ie.value.progress < N) {
          const je = Math.floor(q);
          Ie.value = {
            progress: je,
            state: He(je),
            message: H(je)
          };
        }
      }, Ee);
    }
    function ve() {
      Le && (clearInterval(Le), Le = null);
    }
    function Me() {
      $e || ($e = window.setInterval(async () => {
        try {
          let q = await x.getStatus();
          if ((!q || q.state === "idle") && (q = await b()), !q)
            return;
          const N = q.progress || 0;
          N >= 60 && ve();
          const me = Math.max(N, Ie.value.progress), Ee = q.state && q.state !== "idle" && q.state !== "unknown", We = Ee ? q.state : He(me), je = Ee && q.message || H(me);
          Ie.value = {
            state: We,
            progress: me,
            message: je
          }, q.state === "complete" ? (ve(), Ve(), ne.value = !1, ge(`✓ Switched to ${se.value}`, "success"), await Ne(), se.value = "") : q.state === "rolled_back" ? (ve(), Ve(), ne.value = !1, ge("Switch failed, restored previous environment", "warning"), se.value = "") : q.state === "critical_failure" && (ve(), Ve(), ne.value = !1, ge(`Critical error during switch: ${q.message}`, "error"), se.value = "");
        } catch (q) {
          console.error("Failed to poll switch progress:", q);
        }
      }, 1e3));
    }
    function Ve() {
      ve(), $e && (clearInterval($e), $e = null);
    }
    function _t() {
      var q;
      I.value = !1, se.value = "", (q = Y.value) != null && q.state && Y.value.state !== "managed" && (S.value = Y.value.state === "no_workspace" ? 1 : 2, D.value = !0);
    }
    async function At() {
      Ce.value = !1, await Ne(), ge("✓ Changes committed", "success");
    }
    async function Vt() {
      we.value = !1;
      const q = ge("Syncing environment...", "info", 0);
      try {
        const N = await z("skip", !0);
        if (Ae(q), N.status === "success") {
          const me = [];
          N.nodes_installed.length && me.push(`${N.nodes_installed.length} installed`), N.nodes_removed.length && me.push(`${N.nodes_removed.length} removed`);
          const Ee = me.length ? `: ${me.join(", ")}` : "";
          ge(`✓ Environment synced${Ee}`, "success"), await Ne();
        } else {
          const me = N.errors.length ? N.errors.join("; ") : N.message;
          ge(`Sync failed: ${me}`, "error");
        }
      } catch (N) {
        Ae(q), ge(`Sync error: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
      }
    }
    async function Os(q) {
      var N;
      try {
        const me = await V(q);
        me.failed.length === 0 ? ge(`✓ Repaired ${me.success} workflow${me.success === 1 ? "" : "s"}`, "success") : ge(`Repaired ${me.success}, failed: ${me.failed.length}`, "warning"), await Ne();
      } catch (me) {
        ge(`Repair failed: ${me instanceof Error ? me.message : "Unknown error"}`, "error");
      } finally {
        (N = F.value) == null || N.resetRepairingState();
      }
    }
    async function Bs(q, N) {
      ge(`Environment '${q}' created`, "success"), await Ne(), oe.value && await oe.value.loadEnvironments(), N && await Q(q);
    }
    async function Fs(q) {
      var N;
      if (((N = j.value) == null ? void 0 : N.name) === q) {
        ge("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      G.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${q}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          G.value = null;
          try {
            const me = await $(q);
            me.status === "success" ? (ge(`Environment "${q}" deleted`, "success"), await Ne(), oe.value && await oe.value.loadEnvironments()) : ge(me.message || "Failed to delete environment", "error");
          } catch (me) {
            ge(`Error deleting environment: ${me instanceof Error ? me.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function As(q) {
      D.value = !1;
      try {
        Y.value = await f();
      } catch {
      }
      await Q(q);
    }
    function Vs() {
      D.value = !1, n("close");
    }
    async function Ws(q) {
      await Q(q);
    }
    async function js(q) {
      Y.value = await f(), console.log(`Environment '${q}' created. Available for switching.`);
    }
    function Gs() {
      le("environments", "all-envs"), setTimeout(() => {
        var q;
        (q = oe.value) == null || q.openCreateModal();
      }, 100);
    }
    function ms() {
      if (!L.value) return [];
      const q = [], N = L.value.workflows;
      return N.new.length && q.push(`${N.new.length} new workflow(s)`), N.modified.length && q.push(`${N.modified.length} modified workflow(s)`), N.deleted.length && q.push(`${N.deleted.length} deleted workflow(s)`), q;
    }
    return De(async () => {
      try {
        if (Y.value = await f(), Y.value.state === "no_workspace") {
          D.value = !0, S.value = 1;
          return;
        }
        if (Y.value.state === "empty_workspace") {
          D.value = !0, S.value = 2;
          return;
        }
        if (Y.value.state === "unmanaged") {
          D.value = !0, S.value = 2;
          return;
        }
      } catch (q) {
        console.warn("Setup status check failed, proceeding normally:", q);
      }
      await Ne();
    }), (q, N) => {
      var me, Ee, We, je, ct, Et, vs, fs, gs;
      return s(), o("div", uk, [
        e("div", mk, [
          e("div", vk, [
            N[29] || (N[29] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            L.value ? (s(), o("div", fk)) : d("", !0)
          ]),
          e("div", gk, [
            e("button", {
              class: ae(["icon-btn", { spinning: O.value }]),
              onClick: Ne,
              title: "Refresh"
            }, [...N[30] || (N[30] = [
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
              onClick: N[0] || (N[0] = (pe) => n("close")),
              title: "Close"
            }, [...N[31] || (N[31] = [
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
        e("div", pk, [
          e("div", { class: "env-switcher-header" }, [
            N[32] || (N[32] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: U
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: B
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: N[1] || (N[1] = (pe) => le("environments", "all-envs"))
          }, [
            L.value ? (s(), o("div", hk, [
              e("span", null, a(((me = j.value) == null ? void 0 : me.name) || ((Ee = L.value) == null ? void 0 : Ee.environment) || "Loading..."), 1),
              e("span", yk, "(" + a(L.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            N[33] || (N[33] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", wk, [
          e("div", kk, [
            e("div", bk, [
              N[34] || (N[34] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "status" && re.value === "this-env" }]),
                onClick: N[2] || (N[2] = (pe) => le("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "workflows" }]),
                onClick: N[3] || (N[3] = (pe) => le("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "models-env" }]),
                onClick: N[4] || (N[4] = (pe) => le("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "branches" }]),
                onClick: N[5] || (N[5] = (pe) => le("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "history" }]),
                onClick: N[6] || (N[6] = (pe) => le("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "nodes" }]),
                onClick: N[7] || (N[7] = (pe) => le("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "debug-env" }]),
                onClick: N[8] || (N[8] = (pe) => le("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            N[37] || (N[37] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", _k, [
              N[35] || (N[35] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "environments" }]),
                onClick: N[9] || (N[9] = (pe) => le("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "model-index" }]),
                onClick: N[10] || (N[10] = (pe) => le("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "settings" }]),
                onClick: N[11] || (N[11] = (pe) => le("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "debug-workspace" }]),
                onClick: N[12] || (N[12] = (pe) => le("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            N[38] || (N[38] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", $k, [
              N[36] || (N[36] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "export" }]),
                onClick: N[13] || (N[13] = (pe) => le("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "import" }]),
                onClick: N[14] || (N[14] = (pe) => le("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ye.value === "remotes" }]),
                onClick: N[15] || (N[15] = (pe) => le("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Ck, [
            R.value ? (s(), o("div", xk, a(R.value), 1)) : !L.value && ye.value === "status" ? (s(), o("div", Sk, " Loading status... ")) : (s(), o(A, { key: 2 }, [
              ye.value === "status" ? (s(), M(_a, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: F,
                status: L.value,
                "setup-state": E.value,
                onSwitchBranch: Re,
                onCommitChanges: N[16] || (N[16] = (pe) => Ce.value = !0),
                onSyncEnvironment: N[17] || (N[17] = (pe) => we.value = !0),
                onViewWorkflows: N[18] || (N[18] = (pe) => le("workflows", "this-env")),
                onViewHistory: N[19] || (N[19] = (pe) => le("history", "this-env")),
                onViewDebug: N[20] || (N[20] = (pe) => le("debug-env", "this-env")),
                onRepairMissingModels: Os,
                onStartSetup: N[21] || (N[21] = (pe) => D.value = !0),
                onViewEnvironments: N[22] || (N[22] = (pe) => le("environments", "all-envs")),
                onCreateEnvironment: Gs
              }, null, 8, ["status", "setup-state"])) : ye.value === "workflows" ? (s(), M(ju, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ce,
                onRefresh: Ne
              }, null, 512)) : ye.value === "models-env" ? (s(), M(Sm, {
                key: 2,
                onNavigate: Pe
              })) : ye.value === "branches" ? (s(), M(Ua, {
                key: 3,
                branches: C.value,
                current: ((We = L.value) == null ? void 0 : We.branch) || null,
                onSwitch: wt,
                onCreate: rt,
                onDelete: kt
              }, null, 8, ["branches", "current"])) : ye.value === "history" ? (s(), M(Ka, {
                key: 4,
                commits: T.value,
                onSelect: yt,
                onCheckout: vt
              }, null, 8, ["commits"])) : ye.value === "nodes" ? (s(), M(fv, {
                key: 5,
                onOpenNodeManager: ue
              })) : ye.value === "debug-env" ? (s(), M(kp, { key: 6 })) : ye.value === "environments" ? (s(), M($h, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: oe,
                onSwitch: Q,
                onCreated: Bs,
                onDelete: Fs
              }, null, 512)) : ye.value === "model-index" ? (s(), M(qm, {
                key: 8,
                onRefresh: Ne
              })) : ye.value === "settings" ? (s(), M(pp, { key: 9 })) : ye.value === "debug-workspace" ? (s(), M(yp, { key: 10 })) : ye.value === "export" ? (s(), M(t1, { key: 11 })) : ye.value === "import" ? (s(), M(Oy, { key: 12 })) : ye.value === "remotes" ? (s(), M(Qg, {
                key: 13,
                onToast: ht
              })) : d("", !0)
            ], 64))
          ])
        ]),
        K.value ? (s(), M(sw, {
          key: 0,
          commit: K.value,
          onClose: N[23] || (N[23] = (pe) => K.value = null),
          onCheckout: vt,
          onCreateBranch: dt
        }, null, 8, ["commit"])) : d("", !0),
        G.value ? (s(), M(iw, {
          key: 1,
          title: G.value.title,
          message: G.value.message,
          details: G.value.details,
          warning: G.value.warning,
          confirmLabel: G.value.confirmLabel,
          cancelLabel: G.value.cancelLabel,
          secondaryLabel: G.value.secondaryLabel,
          secondaryAction: G.value.secondaryAction,
          destructive: G.value.destructive,
          onConfirm: G.value.onConfirm,
          onCancel: N[24] || (N[24] = (pe) => G.value = null),
          onSecondary: G.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        k(a0, {
          show: I.value,
          "from-environment": ((je = j.value) == null ? void 0 : je.name) || "unknown",
          "to-environment": se.value,
          onConfirm: fe,
          onClose: _t
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ce.value && L.value ? (s(), M(zs, {
          key: 2,
          status: L.value,
          "as-modal": !0,
          onClose: N[25] || (N[25] = (pe) => Ce.value = !1),
          onCommitted: At
        }, null, 8, ["status"])) : d("", !0),
        we.value && L.value ? (s(), M(x0, {
          key: 3,
          show: we.value,
          "mismatch-details": {
            missing_nodes: L.value.comparison.missing_nodes,
            extra_nodes: L.value.comparison.extra_nodes
          },
          onConfirm: Vt,
          onClose: N[26] || (N[26] = (pe) => we.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        k(p0, {
          show: ne.value,
          state: Ie.value.state,
          progress: Ie.value.progress,
          message: Ie.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        he.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: N[28] || (N[28] = Te((pe) => he.value = !1, ["self"]))
        }, [
          e("div", Ik, [
            e("div", Ek, [
              N[40] || (N[40] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: N[27] || (N[27] = (pe) => he.value = !1)
              }, [...N[39] || (N[39] = [
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
            e("div", Mk, [
              N[41] || (N[41] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Tk, [
                (s(!0), o(A, null, ee(W.value, (pe) => (s(), o("div", {
                  key: pe.name,
                  class: ae(["env-item", { current: pe.is_current }])
                }, [
                  e("div", Rk, [
                    e("div", zk, [
                      e("span", Lk, a(pe.is_current ? "●" : "○"), 1),
                      e("span", Pk, a(pe.name), 1),
                      pe.current_branch ? (s(), o("span", Dk, "(" + a(pe.current_branch) + ")", 1)) : d("", !0),
                      pe.is_current ? (s(), o("span", Nk, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Uk, a(pe.workflow_count) + " workflows • " + a(pe.node_count) + " nodes ", 1)
                  ]),
                  pe.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Kb) => Q(pe.name)
                  }, " SWITCH ", 8, Ok))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        D.value ? (s(), M(ck, {
          key: 5,
          "default-path": ((ct = Y.value) == null ? void 0 : ct.default_path) || "~/comfygit",
          "detected-models-dir": ((Et = Y.value) == null ? void 0 : Et.detected_models_dir) || null,
          "initial-step": S.value,
          "existing-environments": ((vs = Y.value) == null ? void 0 : vs.environments) || [],
          "cli-installed": ((fs = Y.value) == null ? void 0 : fs.cli_installed) ?? !0,
          "setup-state": ((gs = Y.value) == null ? void 0 : gs.state) || "no_workspace",
          onComplete: As,
          onClose: Vs,
          onSwitchEnvironment: Ws,
          onEnvironmentCreatedNoSwitch: js
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state"])) : d("", !0),
        e("div", Bk, [
          k(Ys, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(A, null, ee(Se.value, (pe) => (s(), o("div", {
                key: pe.id,
                class: ae(["toast", pe.type])
              }, [
                e("span", Fk, a(pe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Vk = /* @__PURE__ */ Z(Ak, [["__scopeId", "data-v-9b524645"]]), Wk = { class: "item-header" }, jk = { class: "item-info" }, Gk = { class: "filename" }, qk = { class: "metadata" }, Hk = { class: "size" }, Kk = {
  key: 0,
  class: "type"
}, Yk = { class: "item-actions" }, Jk = {
  key: 0,
  class: "progress-section"
}, Qk = { class: "progress-bar" }, Xk = { class: "progress-stats" }, Zk = { class: "downloaded" }, eb = { class: "speed" }, tb = {
  key: 0,
  class: "eta"
}, sb = {
  key: 1,
  class: "status-msg paused"
}, ob = {
  key: 2,
  class: "status-msg queued"
}, nb = {
  key: 3,
  class: "status-msg completed"
}, ab = {
  key: 4,
  class: "status-msg failed"
}, lb = {
  key: 0,
  class: "retries"
}, ib = /* @__PURE__ */ X({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function r(v) {
      if (v === 0) return "?";
      const m = v / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(v / (1024 * 1024)).toFixed(1)} MB`;
    }
    function w(v) {
      return v === 0 ? "-" : `${(v / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(v) {
      if (v < 60) return `${Math.round(v)}s`;
      const m = Math.floor(v / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (v, m) => (s(), o("div", {
      class: ae(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Wk, [
        e("div", jk, [
          e("div", Gk, a(t.item.filename), 1),
          e("div", qk, [
            e("span", Hk, a(r(t.item.size)), 1),
            t.item.type ? (s(), o("span", Kk, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Yk, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (i) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (i) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (i) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (i) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Jk, [
        e("div", Qk, [
          e("div", {
            class: "progress-fill",
            style: at({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Xk, [
          e("span", Zk, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", eb, a(w(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", tb, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", sb, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", ob, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", nb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", ab, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", lb, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ Z(ib, [["__scopeId", "data-v-2110df65"]]), rb = { class: "queue-title" }, db = { class: "count" }, cb = { class: "queue-actions" }, ub = { class: "action-label" }, mb = {
  key: 0,
  class: "overall-progress"
}, vb = { class: "progress-bar" }, fb = {
  key: 0,
  class: "current-mini"
}, gb = { class: "filename" }, pb = { class: "speed" }, hb = {
  key: 1,
  class: "queue-content"
}, yb = {
  key: 0,
  class: "section"
}, wb = {
  key: 1,
  class: "section"
}, kb = { class: "section-header" }, bb = { class: "section-label paused" }, _b = { class: "items-list" }, $b = {
  key: 2,
  class: "section"
}, Cb = { class: "section-header" }, xb = { class: "section-label" }, Sb = { class: "items-list" }, Ib = {
  key: 3,
  class: "section"
}, Eb = { class: "section-header" }, Mb = { class: "section-label" }, Tb = { class: "items-list" }, Rb = {
  key: 4,
  class: "section"
}, zb = { class: "section-header" }, Lb = { class: "section-label failed" }, Pb = { class: "items-list" }, Db = /* @__PURE__ */ X({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: r,
      completedItems: w,
      failedItems: g,
      pausedItems: v,
      hasItems: m,
      activeCount: i,
      cancelDownload: c,
      retryDownload: p,
      resumeDownload: h,
      resumeAllPaused: b,
      removeItem: $,
      clearCompleted: z
    } = Ft(), V = _(!1);
    let f = null;
    gt(
      () => ({
        active: i.value,
        failed: g.value.length,
        paused: v.value.length,
        completed: w.value.length
      }),
      (C, W) => {
        f && (clearTimeout(f), f = null);
        const j = C.active === 0 && C.failed === 0 && C.paused === 0 && C.completed > 0, Y = W && (W.active > 0 || W.paused > 0);
        j && Y && (f = setTimeout(() => {
          z(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = P(() => {
      var j;
      if (u.items.length === 0) return 0;
      const C = w.value.length, W = ((j = n.value) == null ? void 0 : j.progress) || 0;
      return Math.round((C + W / 100) / u.items.length * 100);
    });
    function L(C) {
      c(C);
    }
    function T(C) {
      return C === 0 ? "" : `${(C / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (C, W) => (s(), M(Fe, { to: "body" }, [
      be(m) ? (s(), o("div", {
        key: 0,
        class: ae(["model-download-queue", { minimized: !V.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: W[0] || (W[0] = (j) => V.value = !V.value)
        }, [
          e("div", rb, [
            W[4] || (W[4] = e("span", { class: "icon" }, "↓", -1)),
            W[5] || (W[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", db, "(" + a(be(i)) + "/" + a(be(u).items.length) + ")", 1)
          ]),
          e("div", cb, [
            e("span", ub, a(V.value ? "minimize" : "expand"), 1)
          ])
        ]),
        V.value ? (s(), o("div", hb, [
          be(n) ? (s(), o("div", yb, [
            W[6] || (W[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(zt, {
              item: be(n),
              onCancel: W[1] || (W[1] = (j) => L(be(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          be(v).length > 0 ? (s(), o("div", wb, [
            e("div", kb, [
              e("span", bb, "Paused (" + a(be(v).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: W[2] || (W[2] = //@ts-ignore
                (...j) => be(b) && be(b)(...j))
              }, "Resume All")
            ]),
            e("div", _b, [
              (s(!0), o(A, null, ee(be(v), (j) => (s(), M(zt, {
                key: j.id,
                item: j,
                onResume: (Y) => be(h)(j.id),
                onRemove: (Y) => be($)(j.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          be(r).length > 0 ? (s(), o("div", $b, [
            e("div", Cb, [
              e("span", xb, "Queued (" + a(be(r).length) + ")", 1)
            ]),
            e("div", Sb, [
              (s(!0), o(A, null, ee(be(r), (j) => (s(), M(zt, {
                key: j.id,
                item: j,
                onCancel: (Y) => L(j.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          be(w).length > 0 ? (s(), o("div", Ib, [
            e("div", Eb, [
              e("span", Mb, "Completed (" + a(be(w).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: W[3] || (W[3] = //@ts-ignore
                (...j) => be(z) && be(z)(...j))
              }, "Clear")
            ]),
            e("div", Tb, [
              (s(!0), o(A, null, ee(be(w).slice(0, 3), (j) => (s(), M(zt, {
                key: j.id,
                item: j,
                onRemove: (Y) => be($)(j.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          be(g).length > 0 ? (s(), o("div", Rb, [
            e("div", zb, [
              e("span", Lb, "Failed (" + a(be(g).length) + ")", 1)
            ]),
            e("div", Pb, [
              (s(!0), o(A, null, ee(be(g), (j) => (s(), M(zt, {
                key: j.id,
                item: j,
                onRetry: (Y) => be(p)(j.id),
                onRemove: (Y) => be($)(j.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", mb, [
          e("div", vb, [
            e("div", {
              class: "progress-fill",
              style: at({ width: `${x.value}%` })
            }, null, 4)
          ]),
          be(n) ? (s(), o("div", fb, [
            e("span", gb, a(be(n).filename), 1),
            e("span", pb, a(T(be(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), Nb = /* @__PURE__ */ Z(Db, [["__scopeId", "data-v-60751cfa"]]), Ub = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Ob = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Bb = {
  comfy: Ub,
  phosphor: Ob
}, cs = "comfy", Ls = "comfygit-theme";
let bt = null, Ps = cs;
function Fb() {
  try {
    const t = localStorage.getItem(Ls);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return cs;
}
function Ds(t = cs) {
  bt && bt.remove(), bt = document.createElement("style"), bt.id = "comfygit-theme-styles", bt.setAttribute("data-theme", t), bt.textContent = Bb[t], document.head.appendChild(bt), document.body.setAttribute("data-comfygit-theme", t), Ps = t;
  try {
    localStorage.setItem(Ls, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Ab() {
  return Ps;
}
function Vb(t) {
  Ds(t);
}
const us = document.createElement("link");
us.rel = "stylesheet";
us.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(us);
const Wb = Fb();
Ds(Wb);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Vb(t);
  },
  getTheme: () => {
    const t = Ab();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let et = null, Ke = null, Ut = null, Lt = null, ws = null;
const xt = _(null);
let Ns = "managed";
async function qt() {
  var t;
  if (!((t = ft) != null && t.api)) return null;
  try {
    const u = await ft.api.fetchApi("/v2/comfygit/status");
    u.ok && (xt.value = await u.json());
  } catch {
  }
}
async function os() {
  var t;
  if ((t = ft) != null && t.api)
    try {
      const u = await ft.api.fetchApi("/v2/setup/status");
      u.ok && (Ns = (await u.json()).state);
    } catch {
    }
}
function jb() {
  if (!xt.value) return !1;
  const t = xt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || xt.value.has_changes;
}
function Gb() {
  et && et.remove(), et = document.createElement("div"), et.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", et.appendChild(t), et.addEventListener("click", (r) => {
    r.target === et && es();
  });
  const u = (r) => {
    r.key === "Escape" && (es(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), ls({
    render: () => is(Vk, {
      onClose: es,
      onStatusUpdate: async (r) => {
        xt.value = r, Ot(), await os(), ns();
      }
    })
  }).mount(t), document.body.appendChild(et);
}
function es() {
  et && (et.remove(), et = null);
}
function qb(t) {
  Pt(), Ke = document.createElement("div"), Ke.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  Ke.style.position = "fixed", Ke.style.top = `${u.bottom + 8}px`, Ke.style.right = `${window.innerWidth - u.right}px`, Ke.style.zIndex = "10001";
  const n = (w) => {
    Ke && !Ke.contains(w.target) && w.target !== t && (Pt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (w) => {
    w.key === "Escape" && (Pt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Ut = ls({
    render: () => is(zs, {
      status: xt.value,
      onClose: Pt,
      onCommitted: () => {
        Pt(), qt().then(Ot);
      }
    })
  }), Ut.mount(Ke), document.body.appendChild(Ke);
}
function Pt() {
  Ut && (Ut.unmount(), Ut = null), Ke && (Ke.remove(), Ke = null);
}
function Hb() {
  Lt || (Lt = document.createElement("div"), Lt.className = "comfygit-download-queue-root", ws = ls({
    render: () => is(Nb)
  }), ws.mount(Lt), document.body.appendChild(Lt), console.log("[ComfyGit] Model download queue mounted"));
}
let Qe = null;
function Ot() {
  if (!Qe) return;
  const t = Qe.querySelector(".commit-indicator");
  t && (t.style.display = jb() ? "block" : "none");
}
function ns() {
  if (!Qe) return;
  const t = Ns !== "managed";
  Qe.disabled = t, Qe.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Us = document.createElement("style");
Us.textContent = `
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

  .comfygit-commit-btn:hover:not(:disabled) {
    background: linear-gradient(180deg, #404040 0%, #2e2e2e 100%) !important;
  }

  .comfygit-commit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .comfygit-mock-btn {
    background: linear-gradient(180deg, #7c3aed 0%, #5b21b6 100%) !important;
    color: white !important;
    border: none !important;
    border-left: 1px solid rgba(0, 0, 0, 0.3) !important;
    border-radius: 0 4px 4px 0 !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
  }

  .comfygit-mock-btn:hover {
    background: linear-gradient(180deg, #8b5cf6 0%, #6d28d9 100%) !important;
  }

  /* Adjust commit button border-radius when mock button is present */
  .comfygit-btn-group:has(.comfygit-mock-btn) .comfygit-commit-btn {
    border-radius: 0 !important;
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
document.head.appendChild(Us);
ft.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var w, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = Gb, Qe = document.createElement("button"), Qe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Qe.innerHTML = 'Commit <span class="commit-indicator"></span>', Qe.title = "Quick Commit", Qe.onclick = () => qb(Qe), t.appendChild(u), t.appendChild(Qe), (g = (w = ft.menu) == null ? void 0 : w.settingsGroup) != null && g.element && (ft.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Hb();
    const { loadPendingDownloads: n } = Ft();
    n(), await Promise.all([qt(), os()]), Ot(), ns(), setInterval(async () => {
      await Promise.all([qt(), os()]), Ot(), ns();
    }, 3e4);
    const r = ft.api;
    if (r) {
      let v = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((c) => {
          (c.startsWith("workflow:") || c.startsWith("Comfy.OpenWorkflowsPaths:") || c.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(c);
        }), window.location.reload();
      }, m = function() {
        const c = document.createElement("div");
        c.style.cssText = `
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
        const p = document.createElement("span");
        p.textContent = "Workflows updated - refresh required", c.appendChild(p);
        const h = document.createElement("button");
        h.textContent = "Refresh", h.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => v(), c.appendChild(h);
        const b = document.createElement("button");
        b.textContent = "×", b.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, b.onmouseover = () => b.style.opacity = "1", b.onmouseout = () => b.style.opacity = "0.6", b.onclick = () => c.remove(), c.appendChild(b), document.body.appendChild(c), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (c) => {
        const { change_type: p, workflow_name: h } = c.detail;
        console.log(`[ComfyGit] Workflow ${p}: ${h}`), await qt(), Ot();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let i = !1;
      r.addEventListener("status", async (c) => {
        const p = c.detail != null;
        p && !i && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), v()) : m()), i = p;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
