import { app as yt } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Se, createBlock as T, resolveDynamicComponent as is, normalizeClass as ie, withCtx as l, toDisplayString as a, createVNode as k, createTextVNode as y, computed as P, Fragment as F, renderList as ee, normalizeStyle as ft, ref as _, onMounted as Ue, watch as wt, Teleport as Ae, withModifiers as ze, Transition as Ks, createSlots as Ft, withKeys as vt, reactive as Zt, onUnmounted as _s, readonly as Ys, unref as xe, withDirectives as Ne, vModelText as St, vModelRadio as qt, vModelCheckbox as Yt, nextTick as Js, vModelSelect as It, createStaticVNode as Qs, TransitionGroup as Xs, createApp as rs, h as ds } from "vue";
const Zs = { class: "panel-layout" }, eo = {
  key: 0,
  class: "panel-layout-header"
}, to = {
  key: 1,
  class: "panel-layout-search"
}, so = { class: "panel-layout-content" }, oo = {
  key: 2,
  class: "panel-layout-footer"
}, no = /* @__PURE__ */ X({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (s(), o("div", Zs, [
      u.$slots.header ? (s(), o("div", eo, [
        Se(u.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      u.$slots.search ? (s(), o("div", to, [
        Se(u.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", so, [
        Se(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (s(), o("div", oo, [
        Se(u.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Z = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [i, w] of u)
    n[i] = w;
  return n;
}, je = /* @__PURE__ */ Z(no, [["__scopeId", "data-v-21565df9"]]), ao = {
  key: 0,
  class: "panel-title-prefix"
}, lo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, io = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (s(), T(is(`h${t.level}`), {
      class: ie(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", ao, a(t.prefix), 1)) : (s(), o("span", lo)),
        Se(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ro = /* @__PURE__ */ Z(io, [["__scopeId", "data-v-c3875efc"]]), co = ["title"], uo = ["width", "height"], mo = /* @__PURE__ */ X({
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
      onClick: n[0] || (n[0] = (i) => u.$emit("click"))
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
      ])], 8, uo))
    ], 8, co));
  }
}), $s = /* @__PURE__ */ Z(mo, [["__scopeId", "data-v-6fc7f16d"]]), vo = { class: "header-left" }, fo = {
  key: 0,
  class: "header-actions"
}, go = /* @__PURE__ */ X({
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
      class: ie(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", vo, [
        k(ro, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), T($s, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => u.$emit("info-click"))
        })) : d("", !0)
      ]),
      u.$slots.actions ? (s(), o("div", fo, [
        Se(u.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ge = /* @__PURE__ */ Z(go, [["__scopeId", "data-v-55a62cd6"]]), po = {
  key: 0,
  class: "section-title-count"
}, ho = {
  key: 1,
  class: "section-title-icon"
}, yo = /* @__PURE__ */ X({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), T(is(`h${t.level}`), {
      class: ie(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && u.$emit("click"))
    }, {
      default: l(() => [
        Se(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", po, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", ho, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xe = /* @__PURE__ */ Z(yo, [["__scopeId", "data-v-559361eb"]]), wo = { class: "status-grid" }, ko = { class: "status-grid__columns" }, bo = { class: "status-grid__column" }, _o = { class: "status-grid__title" }, $o = { class: "status-grid__column status-grid__column--right" }, Co = { class: "status-grid__title" }, xo = {
  key: 0,
  class: "status-grid__footer"
}, So = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (s(), o("div", wo, [
      e("div", ko, [
        e("div", bo, [
          e("h4", _o, a(t.leftTitle), 1),
          Se(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", $o, [
          e("h4", Co, a(t.rightTitle), 1),
          Se(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (s(), o("div", xo, [
        Se(u.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Io = /* @__PURE__ */ Z(So, [["__scopeId", "data-v-73b7ba3f"]]), Eo = {
  key: 0,
  class: "status-item__icon"
}, Mo = {
  key: 1,
  class: "status-item__count"
}, To = { class: "status-item__label" }, Ro = /* @__PURE__ */ X({
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
    return (i, w) => (s(), o("div", {
      class: ie(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Eo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Mo, a(t.count), 1)) : d("", !0),
      e("span", To, a(t.label), 1)
    ], 2));
  }
}), nt = /* @__PURE__ */ Z(Ro, [["__scopeId", "data-v-6f929183"]]), zo = { class: "issue-card__header" }, Lo = { class: "issue-card__icon" }, Po = { class: "issue-card__title" }, Do = {
  key: 0,
  class: "issue-card__content"
}, No = {
  key: 0,
  class: "issue-card__description"
}, Uo = {
  key: 1,
  class: "issue-card__items"
}, Oo = {
  key: 2,
  class: "issue-card__actions"
}, Bo = /* @__PURE__ */ X({
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
    return (i, w) => (s(), o("div", {
      class: ie(["issue-card", n.value])
    }, [
      e("div", zo, [
        e("span", Lo, a(t.icon), 1),
        e("h4", Po, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Do, [
        t.description ? (s(), o("p", No, a(t.description), 1)) : d("", !0),
        Se(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Uo, [
        (s(!0), o(F, null, ee(t.items, (g, v) => (s(), o("div", {
          key: v,
          class: "issue-card__item"
        }, [
          w[0] || (w[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", Oo, [
        Se(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ Z(Bo, [["__scopeId", "data-v-df6aa348"]]), Ao = ["type", "disabled"], Fo = {
  key: 0,
  class: "spinner"
}, Vo = /* @__PURE__ */ X({
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
      class: ie(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => u.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Fo)) : d("", !0),
      t.loading ? d("", !0) : Se(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ao));
  }
}), te = /* @__PURE__ */ Z(Vo, [["__scopeId", "data-v-772abe47"]]), Wo = { class: "empty-state" }, jo = {
  key: 0,
  class: "empty-icon"
}, Go = { class: "empty-message" }, qo = /* @__PURE__ */ X({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (s(), o("div", Wo, [
      t.icon ? (s(), o("div", jo, a(t.icon), 1)) : d("", !0),
      e("p", Go, a(t.message), 1),
      t.actionLabel ? (s(), T(te, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => u.$emit("action"))
      }, {
        default: l(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), st = /* @__PURE__ */ Z(qo, [["__scopeId", "data-v-4466284f"]]), Ho = /* @__PURE__ */ X({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: ie(["detail-label"]),
      style: ft({ minWidth: t.minWidth })
    }, [
      Se(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Ht = /* @__PURE__ */ Z(Ho, [["__scopeId", "data-v-75e9eeb8"]]), Ko = /* @__PURE__ */ X({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: ie(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Se(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ Z(Ko, [["__scopeId", "data-v-2f186e4c"]]), Yo = { class: "detail-row" }, Jo = /* @__PURE__ */ X({
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
    return (u, n) => (s(), o("div", Yo, [
      k(Ht, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), T(ns, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Se(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Pe = /* @__PURE__ */ Z(Jo, [["__scopeId", "data-v-ef15664a"]]), Qo = { class: "modal-header" }, Xo = { class: "modal-body" }, Zo = { class: "status-section" }, en = {
  key: 0,
  class: "status-section"
}, tn = { class: "section-header-row" }, sn = {
  key: 0,
  class: "workflow-group"
}, on = { class: "workflow-group-header" }, nn = { class: "workflow-group-title" }, an = { class: "workflow-list" }, ln = { class: "workflow-name" }, rn = { class: "workflow-issue" }, dn = {
  key: 1,
  class: "workflow-group"
}, cn = { class: "workflow-group-header" }, un = { class: "workflow-group-title" }, mn = { class: "workflow-list" }, vn = { class: "workflow-name" }, fn = { class: "workflow-issue" }, gn = {
  key: 2,
  class: "workflow-group"
}, pn = { class: "workflow-group-header" }, hn = { class: "workflow-group-title" }, yn = { class: "workflow-list" }, wn = { class: "workflow-name" }, kn = {
  key: 3,
  class: "workflow-group"
}, bn = { class: "workflow-group-header" }, _n = { class: "workflow-group-title" }, $n = { class: "workflow-list" }, Cn = { class: "workflow-name" }, xn = {
  key: 4,
  class: "workflow-group"
}, Sn = { class: "workflow-group-header" }, In = { class: "workflow-group-title" }, En = { class: "workflow-list" }, Mn = { class: "workflow-name" }, Tn = {
  key: 5,
  class: "workflow-group"
}, Rn = { class: "workflow-group-title" }, zn = { class: "expand-icon" }, Ln = {
  key: 0,
  class: "workflow-list"
}, Pn = { class: "workflow-name" }, Dn = {
  key: 1,
  class: "status-section"
}, Nn = {
  key: 0,
  class: "change-group"
}, Un = { class: "change-group-header" }, On = { class: "change-group-title" }, Bn = { class: "change-list" }, An = { class: "node-name" }, Fn = {
  key: 0,
  class: "dev-badge"
}, Vn = {
  key: 1,
  class: "change-group"
}, Wn = { class: "change-group-header" }, jn = { class: "change-group-title" }, Gn = { class: "change-list" }, qn = { class: "node-name" }, Hn = {
  key: 0,
  class: "dev-badge"
}, Kn = {
  key: 2,
  class: "change-group"
}, Yn = { class: "change-list" }, Jn = { class: "change-item" }, Qn = { class: "node-name" }, Xn = {
  key: 3,
  class: "change-group"
}, Zn = {
  key: 2,
  class: "status-section"
}, ea = { class: "section-header-row" }, ta = {
  key: 0,
  class: "drift-item"
}, sa = { class: "drift-list" }, oa = {
  key: 0,
  class: "drift-list-more"
}, na = {
  key: 1,
  class: "drift-item"
}, aa = { class: "drift-list" }, la = {
  key: 0,
  class: "drift-list-more"
}, ia = {
  key: 2,
  class: "drift-item"
}, ra = {
  key: 3,
  class: "drift-item"
}, da = {
  key: 3,
  class: "status-section"
}, ca = { class: "info-box" }, ua = { class: "drift-list" }, ma = {
  key: 0,
  class: "drift-list-more"
}, va = {
  key: 4,
  class: "status-section"
}, fa = { class: "warning-box" }, ga = {
  key: 5,
  class: "empty-state-inline"
}, pa = { class: "modal-actions" }, ha = /* @__PURE__ */ X({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = _(!1);
    Ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), wt(() => u.show, (b, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", b);
    }, { immediate: !0 });
    const i = P(() => {
      var b, $, z;
      return ((z = ($ = (b = u.status) == null ? void 0 : b.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : z.filter(
        (W) => W.status === "broken" && W.sync_state === "synced"
      )) || [];
    }), w = P(() => {
      var b, $, z;
      return ((z = ($ = (b = u.status) == null ? void 0 : b.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : z.filter(
        (W) => W.status === "broken" && W.sync_state !== "synced"
      )) || [];
    }), g = P(() => {
      var b, $, z;
      return ((z = ($ = (b = u.status) == null ? void 0 : b.workflows) == null ? void 0 : $.synced) == null ? void 0 : z.filter((W) => {
        var I, B, C;
        const f = (C = (B = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : C.find((x) => x.name === W);
        return !f || f.status !== "broken";
      })) || [];
    }), v = P(() => {
      var b, $, z, W, f;
      return (b = u.status) != null && b.workflows ? ((($ = u.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((z = u.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((W = u.status.workflows.deleted) == null ? void 0 : W.length) ?? 0) > 0 || (((f = u.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), m = P(() => {
      var $, z, W;
      const b = ($ = u.status) == null ? void 0 : $.git_changes;
      return b ? (((z = b.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((W = b.nodes_removed) == null ? void 0 : W.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), r = P(() => {
      var b, $, z, W, f, I;
      return !v.value && !m.value && (($ = (b = u.status) == null ? void 0 : b.comparison) == null ? void 0 : $.is_synced) && (((z = u.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((I = (f = (W = u.status) == null ? void 0 : W.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : I.length) ?? 0) === 0;
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
      var z, W, f, I, B, C, x, j, V, H, L, S, E, N, U, ae, we, me, oe, O, M, le;
      return s(), T(Ae, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (se) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", Qo, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (se) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", Xo, [
              e("div", Zo, [
                k(Xe, { level: "4" }, {
                  default: l(() => [...$[8] || ($[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(Pe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              v.value ? (s(), o("div", en, [
                e("div", tn, [
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
                i.value.length ? (s(), o("div", sn, [
                  e("div", on, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", nn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", an, [
                    (s(!0), o(F, null, ee(i.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", ln, a(se.name), 1),
                      e("span", rn, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                w.value.length ? (s(), o("div", dn, [
                  e("div", cn, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", un, "BROKEN (UNCOMMITTED) (" + a(w.value.length) + ")", 1)
                  ]),
                  e("div", mn, [
                    (s(!0), o(F, null, ee(w.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", vn, a(se.name), 1),
                      e("span", fn, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (W = (z = t.status.workflows) == null ? void 0 : z.new) != null && W.length ? (s(), o("div", gn, [
                  e("div", pn, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", hn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", yn, [
                    (s(!0), o(F, null, ee(t.status.workflows.new, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", wn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (I = (f = t.status.workflows) == null ? void 0 : f.modified) != null && I.length ? (s(), o("div", kn, [
                  e("div", bn, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", _n, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", $n, [
                    (s(!0), o(F, null, ee(t.status.workflows.modified, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Cn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (C = (B = t.status.workflows) == null ? void 0 : B.deleted) != null && C.length ? (s(), o("div", xn, [
                  e("div", Sn, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", In, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", En, [
                    (s(!0), o(F, null, ee(t.status.workflows.deleted, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Mn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", Tn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (se) => n.value = !n.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Rn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", zn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", Ln, [
                    (s(!0), o(F, null, ee(g.value, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Pn, a(se), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              m.value ? (s(), o("div", Dn, [
                k(Xe, { level: "4" }, {
                  default: l(() => [...$[16] || ($[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (j = (x = t.status.git_changes) == null ? void 0 : x.nodes_added) != null && j.length ? (s(), o("div", Nn, [
                  e("div", Un, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", On, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Bn, [
                    (s(!0), o(F, null, ee(t.status.git_changes.nodes_added, (se) => (s(), o("div", {
                      key: p(se),
                      class: "change-item"
                    }, [
                      e("span", An, a(p(se)), 1),
                      h(se) ? (s(), o("span", Fn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (H = (V = t.status.git_changes) == null ? void 0 : V.nodes_removed) != null && H.length ? (s(), o("div", Vn, [
                  e("div", Wn, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", jn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Gn, [
                    (s(!0), o(F, null, ee(t.status.git_changes.nodes_removed, (se) => (s(), o("div", {
                      key: p(se),
                      class: "change-item"
                    }, [
                      e("span", qn, a(p(se)), 1),
                      h(se) ? (s(), o("span", Hn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (L = t.status.git_changes) != null && L.workflow_changes ? (s(), o("div", Kn, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Yn, [
                    e("div", Jn, [
                      e("span", Qn, a(c.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (S = t.status.git_changes) != null && S.has_other_changes ? (s(), o("div", Xn, [...$[20] || ($[20] = [
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
              (E = t.status.comparison) != null && E.is_synced ? d("", !0) : (s(), o("div", Zn, [
                e("div", ea, [
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
                (U = (N = t.status.comparison) == null ? void 0 : N.missing_nodes) != null && U.length ? (s(), o("div", ta, [
                  k(Pe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", sa, [
                    (s(!0), o(F, null, ee(t.status.comparison.missing_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", oa, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (we = (ae = t.status.comparison) == null ? void 0 : ae.extra_nodes) != null && we.length ? (s(), o("div", na, [
                  k(Pe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", aa, [
                    (s(!0), o(F, null, ee(t.status.comparison.extra_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", la, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (oe = (me = t.status.comparison) == null ? void 0 : me.version_mismatches) != null && oe.length ? (s(), o("div", ia, [
                  k(Pe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (O = t.status.comparison) != null && O.packages_in_sync ? d("", !0) : (s(), o("div", ra, [
                  k(Pe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (le = (M = t.status.comparison) == null ? void 0 : M.disabled_nodes) != null && le.length ? (s(), o("div", da, [
                k(Xe, { level: "4" }, {
                  default: l(() => [...$[23] || ($[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ca, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", ua, [
                  (s(!0), o(F, null, ee(t.status.comparison.disabled_nodes.slice(0, 10), (se) => (s(), o("div", {
                    key: se,
                    class: "drift-list-item"
                  }, " • " + a(se), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", ma, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", va, [
                k(Xe, { level: "4" }, {
                  default: l(() => [...$[25] || ($[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", fa, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", ga, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", pa, [
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
}), ya = /* @__PURE__ */ Z(ha, [["__scopeId", "data-v-c67eed17"]]), wa = { class: "health-section-header" }, ka = { class: "suggestions-content" }, ba = { class: "suggestions-text" }, _a = { style: { "margin-top": "var(--cg-space-3)" } }, $a = {
  key: 1,
  class: "no-issues-text"
}, Ca = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: u, emit: n }) {
    const i = t, w = _(!1), g = _(!1);
    function v() {
      w.value = !0;
    }
    function m() {
      w.value = !1, c("view-workflows");
    }
    function r() {
      w.value = !1, c("view-nodes");
    }
    const c = n, p = _(!1), h = P(() => {
      const N = i.status.workflows.analyzed || [], U = N.filter(
        (ae) => ae.unresolved_models_count > 0 || ae.ambiguous_models_count > 0
      );
      return U.length === 0 && i.status.missing_models_count > 0 ? N.filter((ae) => ae.sync_state === "synced") : U;
    });
    function b() {
      const N = h.value;
      N.length !== 0 && (p.value = !0, c("repair-missing-models", N.map((U) => U.name)));
    }
    function $() {
      p.value = !1;
    }
    u({ resetRepairingState: $ });
    const z = P(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), W = P(() => i.status.has_changes), f = P(() => {
      const N = i.status.git_changes;
      return N.nodes_added.length > 0 || N.nodes_removed.length > 0 || N.workflow_changes;
    }), I = P(() => i.status.has_changes || z.value), B = P(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), C = P(() => i.status.git_changes.has_other_changes), x = P(() => {
      var N;
      return ((N = i.status.workflows.analyzed) == null ? void 0 : N.filter((U) => U.status === "broken")) || [];
    }), j = P(() => {
      var N;
      return ((N = i.status.workflows.analyzed) == null ? void 0 : N.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), V = P(() => x.value.length > 0), H = P(() => V.value || j.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), L = P(() => {
      const N = [];
      return i.status.workflows.new.length > 0 && N.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && N.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && N.push(`${i.status.workflows.deleted.length} deleted`), N.length > 0 ? `${N.join(", ")} workflow${N.length === 1 && !N[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), S = P(() => {
      var ae, we;
      const N = [], U = i.status.comparison;
      return (ae = U.missing_nodes) != null && ae.length && N.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (we = U.extra_nodes) != null && we.length && N.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), N.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${N.join(" and ")}.`;
    }), E = P(() => {
      var ae, we;
      const N = [], U = i.status.comparison;
      return (ae = U.extra_nodes) != null && ae.length && (U.extra_nodes.slice(0, 3).forEach((me) => {
        N.push(`Untracked: ${me}`);
      }), U.extra_nodes.length > 3 && N.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (we = U.missing_nodes) != null && we.length && (U.missing_nodes.slice(0, 3).forEach((me) => {
        N.push(`Missing: ${me}`);
      }), U.missing_nodes.length > 3 && N.push(`...and ${U.missing_nodes.length - 3} more missing`)), N;
    });
    return (N, U) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), T(Ze, {
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
                onClick: U[0] || (U[0] = (ae) => N.$emit("start-setup"))
              }, {
                default: l(() => [...U[13] || (U[13] = [
                  y(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), T(Ze, {
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
                onClick: U[1] || (U[1] = (ae) => N.$emit("view-environments"))
              }, {
                default: l(() => [...U[14] || (U[14] = [
                  y(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), T(Ze, {
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
                onClick: U[2] || (U[2] = (ae) => N.$emit("create-environment"))
              }, {
                default: l(() => [...U[15] || (U[15] = [
                  y(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: U[4] || (U[4] = (ae) => g.value = !0),
            onMouseleave: U[5] || (U[5] = (ae) => g.value = !1)
          }, [
            e("div", wa, [
              k(Xe, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...U[16] || (U[16] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(Ks, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), T(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: l(() => [...U[17] || (U[17] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            k(Io, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Ft({
              left: l(() => [
                t.status.workflows.new.length ? (s(), T(nt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), T(nt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), T(nt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                k(nt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), T(nt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), T(nt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), T(nt, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                C.value ? (s(), T(nt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                W.value && !f.value && !C.value ? (s(), T(nt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                W.value ? d("", !0) : (s(), T(nt, {
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
                fn: l(() => [
                  U[19] || (U[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", ka, [
                    e("span", ba, a(L.value), 1),
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (ae) => N.$emit("commit-changes"))
                    }, {
                      default: l(() => [...U[18] || (U[18] = [
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
          t.status.is_detached_head ? (s(), T(Ze, {
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
                onClick: U[6] || (U[6] = (ae) => N.$emit("create-branch"))
              }, {
                default: l(() => [...U[20] || (U[20] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", _a, [
            k(Xe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...U[21] || (U[21] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            H.value ? (s(), o(F, { key: 0 }, [
              x.value.length > 0 ? (s(), T(Ze, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${x.value.length} workflow${x.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: x.value.map((ae) => `${ae.name} — ${ae.issue_summary}`)
              }, {
                actions: l(() => [
                  k(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (ae) => N.$emit("view-workflows"))
                  }, {
                    default: l(() => [...U[22] || (U[22] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              j.value.length > 0 ? (s(), T(Ze, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${j.value.length} workflow${j.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: j.value.map((ae) => `${ae.name} — ${ae.models_needing_path_sync_count} model path${ae.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  k(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (ae) => N.$emit("view-workflows"))
                  }, {
                    default: l(() => [...U[23] || (U[23] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !V.value ? (s(), T(Ze, {
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
                    onClick: U[9] || (U[9] = (ae) => N.$emit("view-workflows"))
                  }, {
                    default: l(() => [...U[24] || (U[24] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), T(Ze, {
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
                    default: l(() => [...U[25] || (U[25] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (ae) => N.$emit("view-nodes"))
                  }, {
                    default: l(() => [...U[26] || (U[26] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), T(Ze, {
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
                    onClick: U[11] || (U[11] = (ae) => N.$emit("view-nodes"))
                  }, {
                    default: l(() => [...U[27] || (U[27] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : I.value ? (s(), o("span", $a, "No issues")) : (s(), T(st, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(ya, {
        show: w.value,
        status: t.status,
        onClose: U[12] || (U[12] = (ae) => w.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: r
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), xa = /* @__PURE__ */ Z(Ca, [["__scopeId", "data-v-0398c02e"]]), Sa = ["type", "value", "placeholder", "disabled"], Ia = /* @__PURE__ */ X({
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
    const i = t, w = n, g = _(null);
    function v(m) {
      const r = m.target.value;
      w("update:modelValue", r);
    }
    return Ue(() => {
      i.autoFocus && g.value && g.value.focus();
    }), u({
      focus: () => {
        var m;
        return (m = g.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = g.value) == null ? void 0 : m.blur();
      }
    }), (m, r) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ie(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: v,
      onKeyup: [
        r[0] || (r[0] = vt((c) => m.$emit("enter"), ["enter"])),
        r[1] || (r[1] = vt((c) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (c) => m.$emit("focus")),
      onBlur: r[3] || (r[3] = (c) => m.$emit("blur"))
    }, null, 42, Sa));
  }
}), Jt = /* @__PURE__ */ Z(Ia, [["__scopeId", "data-v-0380d08f"]]), Ea = { class: "branch-create-form" }, Ma = { class: "form-actions" }, Ta = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, i = _(""), w = P(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function g() {
      w.value && (n("create", i.value.trim()), i.value = "");
    }
    function v() {
      i.value = "", n("cancel");
    }
    return (m, r) => (s(), o("div", Ea, [
      k(Jt, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (c) => i.value = c),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: v
      }, null, 8, ["modelValue"]),
      e("div", Ma, [
        k(te, {
          variant: "primary",
          size: "sm",
          disabled: !w.value,
          onClick: g
        }, {
          default: l(() => [...r[1] || (r[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(te, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: l(() => [...r[2] || (r[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ra = /* @__PURE__ */ Z(Ta, [["__scopeId", "data-v-7c500394"]]), za = { class: "branch-list-item__indicator" }, La = { class: "branch-list-item__name" }, Pa = {
  key: 0,
  class: "branch-list-item__actions"
}, Da = {
  key: 0,
  class: "branch-list-item__current-label"
}, Na = /* @__PURE__ */ X({
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
      class: ie(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && u.$emit("click"))
    }, [
      e("span", za, a(t.isCurrent ? "●" : "○"), 1),
      e("span", La, a(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (s(), o("div", Pa, [
        Se(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Da, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ua = /* @__PURE__ */ Z(Na, [["__scopeId", "data-v-c6581a24"]]), Oa = {
  key: 2,
  class: "branch-list"
}, Ba = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, i = _(!1);
    function w(v) {
      n("create", v), g();
    }
    function g() {
      i.value = !1;
    }
    return (v, m) => (s(), T(je, null, {
      header: l(() => [
        k(Ge, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? d("", !0) : (s(), T(te, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (r) => i.value = !0)
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
        i.value ? (s(), T(Ra, {
          key: 0,
          onCreate: w,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), T(st, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Oa, [
          (s(!0), o(F, null, ee(t.branches, (r) => (s(), T(Ua, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: l(() => [
              r.is_current ? d("", !0) : (s(), T(te, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (c) => v.$emit("delete", r.name)
              }, {
                default: l(() => [...m[2] || (m[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              r.is_current ? d("", !0) : (s(), T(te, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (c) => v.$emit("switch", r.name)
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
}), Aa = /* @__PURE__ */ Z(Ba, [["__scopeId", "data-v-86784ddd"]]), Fa = { class: "commit-list" }, Va = /* @__PURE__ */ X({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (s(), o("div", Fa, [
      Se(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Wa = /* @__PURE__ */ Z(Va, [["__scopeId", "data-v-8c5ee761"]]), ja = { class: "commit-hash" }, Ga = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = P(() => u.hash.slice(0, u.length));
    return (i, w) => (s(), o("span", ja, a(n.value), 1));
  }
}), Cs = /* @__PURE__ */ Z(Ga, [["__scopeId", "data-v-7c333cc6"]]), qa = { class: "commit-message" }, Ha = { class: "commit-date" }, Ka = /* @__PURE__ */ X({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, i = u;
    function w() {
      n.clickable && i("click");
    }
    return (g, v) => (s(), o("div", {
      class: ie(["commit-item", { clickable: t.clickable }]),
      onClick: w
    }, [
      k(Cs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", qa, a(t.message), 1),
      e("span", Ha, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = ze(() => {
        }, ["stop"]))
      }, [
        Se(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ya = /* @__PURE__ */ Z(Ka, [["__scopeId", "data-v-dd7c621b"]]), Ja = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (s(), T(je, null, {
      header: l(() => [
        k(Ge, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), T(st, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), T(Wa, { key: 1 }, {
          default: l(() => [
            (s(!0), o(F, null, ee(t.commits, (i) => (s(), T(Ya, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (w) => u.$emit("select", i)
            }, {
              actions: l(() => [
                k(te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (w) => u.$emit("checkout", i),
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
}), Qa = /* @__PURE__ */ Z(Ja, [["__scopeId", "data-v-981c3c64"]]), d_ = Zt({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const c_ = [
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
], u_ = {
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
}, Xa = [
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
], m_ = [
  ...Xa,
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
function zt() {
  return !1;
}
function Oe() {
  const t = _(!1), u = _(null);
  async function n(q, re) {
    var Re;
    if (!((Re = window.app) != null && Re.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi(q, re);
    if (!Ce.ok) {
      const Je = await Ce.json().catch(() => ({}));
      throw new Error(Je.error || Je.message || `Request failed: ${Ce.status}`);
    }
    return Ce.json();
  }
  async function i(q = !1) {
    return n(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(q, re = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: re })
    });
  }
  async function g(q = 10, re = 0) {
    return n(`/v2/comfygit/log?limit=${q}&offset=${re}`);
  }
  async function v(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function m() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function r(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q, force: !0 })
    });
  }
  async function c() {
    return n("/v2/comfygit/branches");
  }
  async function p(q) {
    return n(`/v2/comfygit/commit/${q}`);
  }
  async function h(q, re = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: re })
    });
  }
  async function b(q, re = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: re })
    });
  }
  async function $(q, re = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: re })
    });
  }
  async function z(q, re = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: re })
    });
  }
  async function W() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const q = await i();
        return [{
          name: q.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + q.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: q.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: q.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function f(q) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: q })
    });
  }
  async function I() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function B(q) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function C() {
    return n("/v2/workspace/environments/create_status");
  }
  async function x(q = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function j(q) {
    return n(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function V(q = !1) {
    try {
      return n(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const re = await i(q), Ce = [];
      return re.workflows.new.forEach((Re) => {
        Ce.push({ name: Re, status: "new", missing_nodes: 0, missing_models: 0, path: Re });
      }), re.workflows.modified.forEach((Re) => {
        Ce.push({ name: Re, status: "modified", missing_nodes: 0, missing_models: 0, path: Re });
      }), re.workflows.synced.forEach((Re) => {
        Ce.push({ name: Re, status: "synced", missing_nodes: 0, missing_models: 0, path: Re });
      }), Ce;
    }
  }
  async function H(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function L(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function S(q, re, Ce) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: re, install_models: Ce })
    });
  }
  async function E(q, re, Ce) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: re, importance: Ce })
    });
  }
  async function N() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function U() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ae(q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function we(q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function me(q, re) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: re })
    });
  }
  async function oe(q, re) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: re })
    });
  }
  async function O(q) {
    return n(`/v2/workspace/models/${q}`, {
      method: "DELETE"
    });
  }
  async function M(q) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function le() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function se() {
    return n("/v2/workspace/models/directory");
  }
  async function Me(q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function ke() {
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
  async function de(q) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function ne(q, re) {
    try {
      const Ce = new URLSearchParams();
      return q && Ce.append("level", q), re && Ce.append("lines", re.toString()), n(`/v2/comfygit/debug/logs?${Ce}`);
    } catch {
      return [];
    }
  }
  async function Y(q, re) {
    try {
      const Ce = new URLSearchParams();
      return q && Ce.append("level", q), re && Ce.append("lines", re.toString()), n(`/v2/workspace/debug/logs?${Ce}`);
    } catch {
      return [];
    }
  }
  async function ue() {
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
  async function _e(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function Le(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function ve(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function J(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
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
  async function $e(q, re) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: re })
    });
  }
  async function Ee(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function ye(q, re, Ce) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: re, push_url: Ce })
    });
  }
  async function it(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST"
    });
  }
  async function be(q) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function Fe(q = "skip", re = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: re
      })
    });
  }
  async function kt(q, re) {
    const Ce = re ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(re)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return n(Ce);
  }
  async function rt(q, re = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: re.modelStrategy || "skip",
        force: re.force || !1,
        resolutions: re.resolutions
      })
    });
  }
  async function De(q, re) {
    const Ce = re ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(re)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return n(Ce);
  }
  async function bt(q, re = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: re.force || !1 })
    });
  }
  async function ht(q, re) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: re })
    });
  }
  async function dt(q) {
    const re = {
      success: 0,
      failed: []
    };
    for (const Ce of q)
      try {
        await L(Ce), re.success++;
      } catch (Re) {
        re.failed.push({
          name: Ce,
          error: Re instanceof Error ? Re.message : "Unknown error"
        });
      }
    return re;
  }
  async function _t(q) {
    var Re;
    const re = new FormData();
    if (re.append("file", q), !((Re = window.app) != null && Re.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: re
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ce.ok) {
      const Je = await Ce.json().catch(() => ({}));
      throw new Error(Je.error || `Preview failed: ${Ce.status}`);
    }
    return Ce.json();
  }
  async function ct(q) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function K(q, re, Ce, Re) {
    var Wt;
    const Je = new FormData();
    if (Je.append("file", q), Je.append("name", re), Je.append("model_strategy", Ce), Je.append("torch_backend", Re), !((Wt = window.app) != null && Wt.api))
      throw new Error("ComfyUI API not available");
    const Ct = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Je
    });
    if (!Ct.ok) {
      const jt = await Ct.json().catch(() => ({}));
      throw new Error(jt.message || jt.error || `Import failed: ${Ct.status}`);
    }
    return Ct.json();
  }
  async function D() {
    return n("/v2/workspace/import/status");
  }
  async function A(q) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function Q(q, re, Ce, Re) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: re,
        model_strategy: Ce,
        torch_backend: Re
      })
    });
  }
  async function pe() {
    return n("/v2/setup/status");
  }
  async function ot(q) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Ye() {
    return n("/v2/setup/initialize_status");
  }
  async function ut(q) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  return {
    isLoading: t,
    error: u,
    getStatus: i,
    commit: w,
    getHistory: g,
    exportEnv: v,
    validateExport: m,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: c,
    getCommitDetail: p,
    checkout: h,
    createBranch: b,
    switchBranch: $,
    deleteBranch: z,
    // Environment Management
    getEnvironments: W,
    switchEnvironment: f,
    getSwitchProgress: I,
    createEnvironment: B,
    getCreateProgress: C,
    getComfyUIReleases: x,
    deleteEnvironment: j,
    // Workflow Management
    getWorkflows: V,
    getWorkflowDetails: H,
    resolveWorkflow: L,
    installWorkflowDeps: S,
    setModelImportance: E,
    // Model Management
    getEnvironmentModels: N,
    getWorkspaceModels: U,
    getModelDetails: ae,
    openFileLocation: we,
    addModelSource: me,
    removeModelSource: oe,
    deleteModel: O,
    downloadModel: M,
    scanWorkspaceModels: le,
    getModelsDirectory: se,
    setModelsDirectory: Me,
    // Settings
    getConfig: ke,
    updateConfig: de,
    // Debug/Logs
    getEnvironmentLogs: ne,
    getWorkspaceLogs: Y,
    // Node Management
    getNodes: ue,
    trackNodeAsDev: _e,
    installNode: Le,
    updateNode: ve,
    uninstallNode: J,
    // Git Remotes
    getRemotes: fe,
    addRemote: $e,
    removeRemote: Ee,
    updateRemoteUrl: ye,
    fetchRemote: it,
    getRemoteSyncStatus: be,
    // Push/Pull
    getPullPreview: kt,
    pullFromRemote: rt,
    getPushPreview: De,
    pushToRemote: bt,
    validateMerge: ht,
    // Environment Sync
    syncEnvironmentManually: Fe,
    // Workflow Repair
    repairWorkflowModels: dt,
    // Import Operations
    previewTarballImport: _t,
    previewGitImport: A,
    validateEnvironmentName: ct,
    executeImport: K,
    executeGitImport: Q,
    getImportProgress: D,
    // First-Time Setup
    getSetupStatus: pe,
    initializeWorkspace: ot,
    getInitializeProgress: Ye,
    validatePath: ut
  };
}
async function Lt(t, u = {}, n = 5e3) {
  const i = new AbortController(), w = setTimeout(() => i.abort(), n);
  try {
    const g = await fetch(t, {
      ...u,
      signal: i.signal
    });
    return clearTimeout(w), g;
  } catch (g) {
    throw clearTimeout(w), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function xs() {
  const t = _(null);
  async function u() {
    try {
      const v = await Lt(
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
      const v = await Lt(
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
  async function i() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const v = await Lt(
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
    if (!(await Lt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await Lt(
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
    getStatus: i,
    restart: w,
    kill: g
  };
}
const Za = { class: "base-modal-header" }, el = {
  key: 0,
  class: "base-modal-title"
}, tl = { class: "base-modal-body" }, sl = {
  key: 0,
  class: "base-modal-loading"
}, ol = {
  key: 1,
  class: "base-modal-error"
}, nl = {
  key: 0,
  class: "base-modal-footer"
}, al = /* @__PURE__ */ X({
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
    const n = t, i = u;
    function w() {
      n.closeOnOverlayClick && i("close");
    }
    function g(v) {
      v.key === "Escape" && n.showCloseButton && i("close");
    }
    return Ue(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), _s(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (v, m) => (s(), T(Ae, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: w
      }, [
        e("div", {
          class: ie(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", Za, [
            Se(v.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", el, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (r) => v.$emit("close"))
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
          e("div", tl, [
            t.loading ? (s(), o("div", sl, "Loading...")) : t.error ? (s(), o("div", ol, a(t.error), 1)) : Se(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (s(), o("div", nl, [
            Se(v.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Ke = /* @__PURE__ */ Z(al, [["__scopeId", "data-v-8dab1081"]]), ll = ["type", "disabled"], il = {
  key: 0,
  class: "spinner"
}, rl = /* @__PURE__ */ X({
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
      class: ie(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => u.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", il)) : d("", !0),
      Se(u.$slots, "default", {}, void 0, !0)
    ], 10, ll));
  }
}), ce = /* @__PURE__ */ Z(rl, [["__scopeId", "data-v-f3452606"]]), dl = {
  key: 0,
  class: "base-title-count"
}, cl = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (s(), T(is(`h${t.level}`), {
      class: ie(["base-title", t.variant])
    }, {
      default: l(() => [
        Se(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", dl, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ot = /* @__PURE__ */ Z(cl, [["__scopeId", "data-v-5a01561d"]]), ul = ["value", "disabled"], ml = {
  key: 0,
  value: "",
  disabled: ""
}, vl = ["value"], fl = {
  key: 0,
  class: "base-select-error"
}, gl = /* @__PURE__ */ X({
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
    function u(i) {
      return typeof i == "string" ? i : i.value;
    }
    function n(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, w) => (s(), o("div", {
      class: ie(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ie(["base-select", { error: !!t.error }]),
        onChange: w[0] || (w[0] = (g) => i.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", ml, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(F, null, ee(t.options, (g) => (s(), o("option", {
          key: u(g),
          value: u(g)
        }, a(n(g)), 9, vl))), 128))
      ], 42, ul),
      t.error ? (s(), o("span", fl, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), pl = /* @__PURE__ */ Z(gl, [["__scopeId", "data-v-7436d745"]]), hl = { class: "popover-header" }, yl = { class: "popover-title" }, wl = { class: "popover-content" }, kl = {
  key: 0,
  class: "popover-actions"
}, bl = /* @__PURE__ */ X({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (s(), T(Ae, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => u.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: ft({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", hl, [
            e("h4", yl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", wl, [
            Se(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (s(), o("div", kl, [
            Se(u.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ Z(bl, [["__scopeId", "data-v-42815ace"]]), _l = { class: "detail-section" }, $l = {
  key: 0,
  class: "empty-message"
}, Cl = { class: "model-header" }, xl = { class: "model-name" }, Sl = { class: "model-details" }, Il = { class: "model-row" }, El = { class: "model-row" }, Ml = { class: "label" }, Tl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Rl = { class: "node-list" }, zl = ["onClick"], Ll = {
  key: 1,
  class: "model-row"
}, Pl = { class: "value" }, Dl = {
  key: 2,
  class: "model-row"
}, Nl = { class: "value error" }, Ul = {
  key: 0,
  class: "model-actions"
}, Ol = { class: "detail-section" }, Bl = {
  key: 0,
  class: "empty-message"
}, Al = { class: "node-name" }, Fl = {
  key: 0,
  class: "node-version"
}, Vl = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, i = u, { getWorkflowDetails: w, setModelImportance: g, openFileLocation: v } = Oe(), m = _(null), r = _(!1), c = _(null), p = _(!1), h = _({}), b = _(!1), $ = _(/* @__PURE__ */ new Set()), z = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function W(L) {
      switch (L) {
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
    function f(L) {
      switch (L) {
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
    function I(L) {
      if (!L.loaded_by || L.loaded_by.length === 0) return [];
      const S = L.hash || L.filename;
      return $.value.has(S) ? L.loaded_by : L.loaded_by.slice(0, 3);
    }
    function B(L) {
      return $.value.has(L);
    }
    function C(L) {
      $.value.has(L) ? $.value.delete(L) : $.value.add(L), $.value = new Set($.value);
    }
    async function x() {
      r.value = !0, c.value = null;
      try {
        m.value = await w(n.workflowName);
      } catch (L) {
        c.value = L instanceof Error ? L.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function j(L, S) {
      h.value[L] = S, p.value = !0;
    }
    async function V(L) {
      try {
        await v(L);
      } catch (S) {
        c.value = S instanceof Error ? S.message : "Failed to open file location";
      }
    }
    async function H() {
      if (!p.value) {
        i("close");
        return;
      }
      r.value = !0, c.value = null;
      try {
        for (const [L, S] of Object.entries(h.value))
          await g(n.workflowName, L, S);
        i("refresh"), i("close");
      } catch (L) {
        c.value = L instanceof Error ? L.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Ue(x), (L, S) => (s(), o(F, null, [
      k(Ke, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: c.value || void 0,
        onClose: S[4] || (S[4] = (E) => i("close"))
      }, {
        body: l(() => [
          m.value ? (s(), o(F, { key: 0 }, [
            e("section", _l, [
              k(Ot, { variant: "section" }, {
                default: l(() => [
                  y("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", $l, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(F, null, ee(m.value.models, (E) => {
                var N;
                return s(), o("div", {
                  key: E.hash || E.filename,
                  class: "model-card"
                }, [
                  e("div", Cl, [
                    S[6] || (S[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", xl, a(E.filename), 1)
                  ]),
                  e("div", Sl, [
                    e("div", Il, [
                      S[7] || (S[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: ie(["value", W(E.status)])
                      }, a(f(E.status)), 3)
                    ]),
                    e("div", El, [
                      e("span", Ml, [
                        S[8] || (S[8] = y(" Importance: ", -1)),
                        k($s, {
                          size: 14,
                          title: "About importance levels",
                          onClick: S[0] || (S[0] = (U) => b.value = !0)
                        })
                      ]),
                      k(pl, {
                        "model-value": h.value[E.filename] || E.importance,
                        options: z,
                        "onUpdate:modelValue": (U) => j(E.filename, U)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    E.loaded_by && E.loaded_by.length > 0 ? (s(), o("div", Tl, [
                      S[9] || (S[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Rl, [
                        (s(!0), o(F, null, ee(I(E), (U, ae) => (s(), o("div", {
                          key: `${U.node_id}-${ae}`,
                          class: "node-reference"
                        }, a(U.node_type) + " (Node #" + a(U.node_id) + ") ", 1))), 128)),
                        E.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (U) => C(E.hash || E.filename)
                        }, a(B(E.hash || E.filename) ? "▼ Show less" : `▶ View all (${E.loaded_by.length})`), 9, zl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    E.size_mb ? (s(), o("div", Ll, [
                      S[10] || (S[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Pl, a(E.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    E.has_category_mismatch ? (s(), o("div", Dl, [
                      S[13] || (S[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Nl, [
                        S[11] || (S[11] = y(" In ", -1)),
                        e("code", null, a(E.actual_category) + "/", 1),
                        S[12] || (S[12] = y(" but loader needs ", -1)),
                        e("code", null, a((N = E.expected_categories) == null ? void 0 : N[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  E.status !== "available" ? (s(), o("div", Ul, [
                    E.status === "downloadable" ? (s(), T(ce, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: S[1] || (S[1] = (U) => i("resolve"))
                    }, {
                      default: l(() => [...S[14] || (S[14] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    })) : E.status === "category_mismatch" && E.file_path ? (s(), T(ce, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => V(E.file_path)
                    }, {
                      default: l(() => [...S[15] || (S[15] = [
                        y(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : E.status !== "path_mismatch" ? (s(), T(ce, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: S[2] || (S[2] = (U) => i("resolve"))
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
            e("section", Ol, [
              k(Ot, { variant: "section" }, {
                default: l(() => [
                  y("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", Bl, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(F, null, ee(m.value.nodes, (E) => (s(), o("div", {
                key: E.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ie(["node-status", E.status === "installed" ? "installed" : "missing"])
                }, a(E.status === "installed" ? "✓" : "✕"), 3),
                e("span", Al, a(E.name), 1),
                E.version ? (s(), o("span", Fl, "v" + a(E.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          k(ce, {
            variant: "secondary",
            onClick: S[3] || (S[3] = (E) => i("close"))
          }, {
            default: l(() => [...S[17] || (S[17] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (s(), T(ce, {
            key: 0,
            variant: "primary",
            onClick: H
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
}), Wl = /* @__PURE__ */ Z(Vl, [["__scopeId", "data-v-668728e6"]]), Ie = Zt({
  items: [],
  status: "idle"
});
let at = null;
function Ss() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function es(t) {
  return Ie.items.find((u) => u.id === t);
}
async function xt() {
  if (Ie.status === "downloading") return;
  const t = Ie.items.find((u) => u.status === "queued");
  if (!t) {
    Ie.status = "idle";
    return;
  }
  Ie.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await jl(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    Ie.status = "idle", xt();
  }
}
async function jl(t) {
  return new Promise((u, n) => {
    at && (at.close(), at = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), w = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    at = w;
    let g = Date.now(), v = 0, m = !1;
    w.onmessage = (r) => {
      try {
        const c = JSON.parse(r.data);
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
            m = !0, w.close(), at = null, u();
            break;
          case "error":
            m = !0, w.close(), at = null, n(new Error(c.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, w.onerror = () => {
      w.close(), at = null, m || n(new Error("Connection lost"));
    };
  });
}
async function Gl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (Ie.items.some((w) => w.url === n.url && w.filename === n.filename))
        continue;
      const i = {
        id: Ss(),
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
      Ie.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Vt() {
  function t(f) {
    for (const I of f) {
      if (Ie.items.some(
        (x) => x.url === I.url && x.targetPath === I.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${I.filename}`);
        continue;
      }
      const C = {
        id: Ss(),
        workflow: I.workflow,
        filename: I.filename,
        url: I.url,
        targetPath: I.targetPath,
        size: I.size || 0,
        type: I.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Ie.items.push(C);
    }
    Ie.status === "idle" && xt();
  }
  async function u(f) {
    const I = es(f);
    if (I) {
      if (I.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(I.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        at && (at.close(), at = null), I.status = "failed", I.error = "Cancelled by user", Ie.status = "idle", xt();
      } else if (I.status === "queued") {
        const B = Ie.items.findIndex((C) => C.id === f);
        B >= 0 && Ie.items.splice(B, 1);
      }
    }
  }
  function n(f) {
    const I = es(f);
    !I || I.status !== "failed" || (I.status = "queued", I.error = void 0, I.progress = 0, I.downloaded = 0, Ie.status === "idle" && xt());
  }
  function i(f) {
    const I = es(f);
    !I || I.status !== "paused" || (I.status = "queued", Ie.status === "idle" && xt());
  }
  function w() {
    const f = Ie.items.filter((I) => I.status === "paused");
    for (const I of f)
      I.status = "queued";
    Ie.status === "idle" && xt();
  }
  function g(f) {
    const I = Ie.items.findIndex((B) => B.id === f);
    I >= 0 && ["completed", "failed", "paused"].includes(Ie.items[I].status) && Ie.items.splice(I, 1);
  }
  function v() {
    Ie.items = Ie.items.filter((f) => f.status !== "completed");
  }
  function m() {
    Ie.items = Ie.items.filter((f) => f.status !== "failed");
  }
  const r = P(
    () => Ie.items.find((f) => f.status === "downloading")
  ), c = P(
    () => Ie.items.filter((f) => f.status === "queued")
  ), p = P(
    () => Ie.items.filter((f) => f.status === "completed")
  ), h = P(
    () => Ie.items.filter((f) => f.status === "failed")
  ), b = P(
    () => Ie.items.filter((f) => f.status === "paused")
  ), $ = P(() => Ie.items.length > 0), z = P(
    () => Ie.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), W = P(
    () => Ie.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Ys(Ie),
    // Computed
    currentDownload: r,
    queuedItems: c,
    completedItems: p,
    failedItems: h,
    pausedItems: b,
    hasItems: $,
    activeCount: z,
    hasPaused: W,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: w,
    removeItem: g,
    clearCompleted: v,
    clearFailed: m,
    loadPendingDownloads: Gl
  };
}
function Is() {
  const t = _(null), u = _(null), n = _([]), i = _([]), w = _(!1), g = _(null);
  async function v(B, C) {
    var j;
    if (!((j = window.app) != null && j.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(B, C);
    if (!x.ok) {
      const V = await x.json().catch(() => ({})), H = V.error || V.message || `Request failed: ${x.status}`;
      throw new Error(H);
    }
    return x.json();
  }
  async function m(B) {
    w.value = !0, g.value = null;
    try {
      let C;
      return zt() || (C = await v(
        `/v2/comfygit/workflow/${B}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = C, C;
    } catch (C) {
      const x = C instanceof Error ? C.message : "Unknown error occurred";
      throw g.value = x, C;
    } finally {
      w.value = !1;
    }
  }
  async function r(B, C, x, j) {
    w.value = !0, g.value = null;
    try {
      let V;
      if (!zt()) {
        const H = Object.fromEntries(C), L = Object.fromEntries(x), S = j ? Array.from(j) : [];
        V = await v(
          `/v2/comfygit/workflow/${B}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: H,
              model_choices: L,
              skipped_packages: S
            })
          }
        );
      }
      return u.value = V, V;
    } catch (V) {
      const H = V instanceof Error ? V.message : "Unknown error occurred";
      throw g.value = H, V;
    } finally {
      w.value = !1;
    }
  }
  async function c(B, C = 10) {
    w.value = !0, g.value = null;
    try {
      let x;
      return zt() || (x = await v(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: C })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const j = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = j, x;
    } finally {
      w.value = !1;
    }
  }
  async function p(B, C = 10) {
    w.value = !0, g.value = null;
    try {
      let x;
      return zt() || (x = await v(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: C })
        }
      )), i.value = x.results, x.results;
    } catch (x) {
      const j = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = j, x;
    } finally {
      w.value = !1;
    }
  }
  const h = Zt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.nodesInstalled = [], h.installError = void 0, h.needsRestart = void 0, h.error = void 0, h.nodeInstallProgress = void 0;
  }
  async function $(B) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return zt(), await z(B);
    } catch (C) {
      const x = C instanceof Error ? C.message : "Failed to install nodes";
      throw h.installError = x, C;
    }
  }
  async function z(B) {
    var x;
    const C = await v(
      `/v2/comfygit/workflow/${B}/install`,
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
      const j = new Map(((x = C.failed) == null ? void 0 : x.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < h.nodesToInstall.length; V++) {
        const H = h.nodesToInstall[V], L = j.get(H);
        h.nodeInstallProgress.completedNodes.push({
          node_id: H,
          success: !L,
          error: L
        });
      }
    }
    return h.nodesInstalled = C.nodes_installed, h.needsRestart = C.nodes_installed.length > 0, C.failed && C.failed.length > 0 && (h.installError = `${C.failed.length} package(s) failed to install`), C;
  }
  async function W(B, C, x) {
    b(), h.phase = "resolving", g.value = null;
    const j = Object.fromEntries(C), V = Object.fromEntries(x);
    try {
      const H = await fetch(`/v2/comfygit/workflow/${B}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: j,
          model_choices: V
        })
      });
      if (!H.ok)
        throw new Error(`Request failed: ${H.status}`);
      if (!H.body)
        throw new Error("No response body");
      const L = H.body.getReader(), S = new TextDecoder();
      let E = "";
      for (; ; ) {
        const { done: N, value: U } = await L.read();
        if (N) break;
        E += S.decode(U, { stream: !0 });
        const ae = E.split(`

`);
        E = ae.pop() || "";
        for (const we of ae) {
          if (!we.trim()) continue;
          const me = we.split(`
`);
          let oe = "", O = "";
          for (const M of me)
            M.startsWith("event: ") ? oe = M.slice(7) : M.startsWith("data: ") && (O = M.slice(6));
          if (O)
            try {
              const M = JSON.parse(O);
              f(oe, M);
            } catch (M) {
              console.warn("Failed to parse SSE event:", M);
            }
        }
      }
    } catch (H) {
      const L = H instanceof Error ? H.message : "Unknown error occurred";
      throw g.value = L, h.error = L, h.phase = "error", H;
    }
  }
  function f(B, C) {
    switch (B) {
      case "batch_start":
        h.phase = "downloading", h.totalFiles = C.total;
        break;
      case "file_start":
        h.currentFile = C.filename, h.currentFileIndex = C.index, h.bytesDownloaded = 0, h.bytesTotal = void 0;
        break;
      case "file_progress":
        h.bytesDownloaded = C.downloaded, h.bytesTotal = C.total;
        break;
      case "file_complete":
        h.completedFiles.push({
          filename: C.filename,
          success: C.success,
          error: C.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        h.nodesToInstall = C.nodes_to_install || [], C.download_results && (h.completedFiles = C.download_results), h.phase = "complete";
        break;
      case "error":
        h.error = C.message, h.phase = "error", g.value = C.message;
        break;
    }
  }
  function I(B, C) {
    const { addToQueue: x } = Vt(), j = C.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: B,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return j.length > 0 && x(j), j.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: i,
    isLoading: w,
    error: g,
    progress: h,
    // Methods
    analyzeWorkflow: m,
    applyResolution: r,
    applyResolutionWithProgress: W,
    installNodes: $,
    searchNodes: c,
    searchModels: p,
    resetProgress: b,
    queueModelDownloads: I
  };
}
const ql = { class: "resolution-stepper" }, Hl = { class: "stepper-header" }, Kl = ["onClick"], Yl = {
  key: 0,
  class: "step-icon"
}, Jl = {
  key: 1,
  class: "step-number"
}, Ql = { class: "step-label" }, Xl = {
  key: 0,
  class: "step-connector"
}, Zl = { class: "stepper-content" }, ei = /* @__PURE__ */ X({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: u }) {
    const n = t, i = u;
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
    function r(c) {
      i("step-change", c);
    }
    return (c, p) => (s(), o("div", ql, [
      e("div", Hl, [
        (s(!0), o(F, null, ee(t.steps, (h, b) => (s(), o("div", {
          key: h.id,
          class: ie(["step", {
            active: t.currentStep === h.id,
            completed: w(h.id),
            "in-progress": g(h.id),
            disabled: m(h.id)
          }]),
          onClick: ($) => r(h.id)
        }, [
          e("div", {
            class: ie(["step-indicator", v(h.id)])
          }, [
            w(h.id) ? (s(), o("span", Yl, "✓")) : (s(), o("span", Jl, a(b + 1), 1))
          ], 2),
          e("div", Ql, a(h.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", Xl)) : d("", !0)
        ], 10, Kl))), 128))
      ]),
      e("div", Zl, [
        Se(c.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ti = /* @__PURE__ */ Z(ei, [["__scopeId", "data-v-2a7b3af8"]]), si = /* @__PURE__ */ X({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = P(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), i = P(() => `confidence-${n.value}`), w = P(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, v) => (s(), o("span", {
      class: ie(["confidence-badge", i.value, t.size])
    }, a(w.value), 3));
  }
}), Qt = /* @__PURE__ */ Z(si, [["__scopeId", "data-v-17ec4b80"]]), oi = { class: "node-info" }, ni = { class: "node-info-text" }, ai = { class: "item-body" }, li = {
  key: 0,
  class: "resolved-state"
}, ii = {
  key: 1,
  class: "multiple-options"
}, ri = { class: "options-list" }, di = ["onClick"], ci = ["name", "value", "checked", "onChange"], ui = { class: "option-content" }, mi = { class: "option-header" }, vi = { class: "option-package-id" }, fi = {
  key: 0,
  class: "option-title"
}, gi = { class: "option-meta" }, pi = {
  key: 0,
  class: "installed-badge"
}, hi = { class: "action-buttons" }, yi = {
  key: 2,
  class: "unresolved"
}, wi = {
  key: 0,
  class: "searching-state"
}, ki = { class: "options-list" }, bi = ["onClick"], _i = ["name", "value"], $i = { class: "option-content" }, Ci = { class: "option-header" }, xi = { class: "option-package-id" }, Si = {
  key: 0,
  class: "option-description"
}, Ii = { class: "option-meta" }, Ei = {
  key: 0,
  class: "installed-badge"
}, Mi = {
  key: 2,
  class: "unresolved-message"
}, Ti = { class: "action-buttons" }, Ri = /* @__PURE__ */ X({
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
    const n = t, i = u;
    function w(r, c = 80) {
      return r.length <= c ? r : r.slice(0, c - 3) + "...";
    }
    const g = P(() => !!n.choice);
    P(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), P(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.package_id;
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
    function m(r) {
      i("option-selected", r);
    }
    return (r, c) => (s(), o("div", {
      class: ie(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", oi, [
        e("span", ni, [
          c[7] || (c[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ie(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", ai, [
        g.value ? (s(), o("div", li, [
          k(ce, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (p) => i("clear-choice"))
          }, {
            default: l(() => [...c[8] || (c[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ii, [
          c[12] || (c[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", ri, [
            (s(!0), o(F, null, ee(t.options, (p, h) => (s(), o("label", {
              key: p.package_id,
              class: ie(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (b) => m(h)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (b) => m(h)
              }, null, 40, ci),
              e("div", ui, [
                e("div", mi, [
                  e("span", vi, a(p.package_id), 1),
                  k(Qt, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                p.title && p.title !== p.package_id ? (s(), o("div", fi, a(p.title), 1)) : d("", !0),
                e("div", gi, [
                  p.is_installed ? (s(), o("span", pi, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, di))), 128))
          ]),
          e("div", hi, [
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: c[1] || (c[1] = (p) => i("search"))
            }, {
              default: l(() => [...c[9] || (c[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: c[2] || (c[2] = (p) => i("manual-entry"))
            }, {
              default: l(() => [...c[10] || (c[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: c[3] || (c[3] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...c[11] || (c[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", yi, [
          t.isSearching ? (s(), o("div", wi, [...c[13] || (c[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(F, { key: 1 }, [
            c[14] || (c[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", ki, [
              (s(!0), o(F, null, ee(t.searchResults.slice(0, 5), (p, h) => (s(), o("label", {
                key: p.package_id,
                class: "option-card",
                onClick: (b) => i("search-result-selected", p)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: h
                }, null, 8, _i),
                e("div", $i, [
                  e("div", Ci, [
                    e("span", xi, a(p.package_id), 1),
                    k(Qt, {
                      confidence: p.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  p.description ? (s(), o("div", Si, a(w(p.description)), 1)) : d("", !0),
                  e("div", Ii, [
                    p.is_installed ? (s(), o("span", Ei, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, bi))), 128))
            ])
          ], 64)) : (s(), o("div", Mi, [...c[15] || (c[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ti, [
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: c[4] || (c[4] = (p) => i("search"))
            }, {
              default: l(() => {
                var p;
                return [
                  y(a((p = t.searchResults) != null && p.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: c[5] || (c[5] = (p) => i("manual-entry"))
            }, {
              default: l(() => [...c[16] || (c[16] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: c[6] || (c[6] = (p) => i("mark-optional"))
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
}), zi = /* @__PURE__ */ Z(Ri, [["__scopeId", "data-v-c2997d1d"]]), Li = { class: "item-navigator" }, Pi = { class: "nav-item-info" }, Di = ["title"], Ni = { class: "nav-controls" }, Ui = { class: "nav-arrows" }, Oi = ["disabled"], Bi = ["disabled"], Ai = { class: "nav-position" }, Fi = /* @__PURE__ */ X({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (i, w) => (s(), o("div", Li, [
      e("div", Pi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, Di)
      ]),
      e("div", Ni, [
        e("div", Ui, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: w[0] || (w[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Oi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: w[1] || (w[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, Bi)
        ]),
        e("span", Ai, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Es = /* @__PURE__ */ Z(Fi, [["__scopeId", "data-v-74af7920"]]), Vi = ["type", "value", "placeholder", "disabled"], Wi = {
  key: 0,
  class: "base-input-error"
}, ji = /* @__PURE__ */ X({
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
      class: ie(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ie(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => u.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = vt((i) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = vt((i) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Vi),
      t.error ? (s(), o("span", Wi, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), tt = /* @__PURE__ */ Z(ji, [["__scopeId", "data-v-9ba02cdc"]]), Gi = { class: "node-resolution-step" }, qi = {
  key: 0,
  class: "auto-resolved-section"
}, Hi = { class: "section-header" }, Ki = { class: "stat-badge" }, Yi = { class: "resolved-packages-list" }, Ji = { class: "package-info" }, Qi = { class: "package-id" }, Xi = { class: "node-count" }, Zi = { class: "package-actions" }, er = {
  key: 0,
  class: "status-badge install"
}, tr = {
  key: 1,
  class: "status-badge skip"
}, sr = ["onClick"], or = {
  key: 1,
  class: "section-divider"
}, nr = { class: "step-header" }, ar = { class: "stat-badge" }, lr = {
  key: 1,
  class: "step-body"
}, ir = {
  key: 3,
  class: "empty-state"
}, rr = { class: "node-modal-body" }, dr = { class: "node-search-results-container" }, cr = {
  key: 0,
  class: "node-search-results"
}, ur = ["onClick"], mr = { class: "node-result-header" }, vr = { class: "node-result-package-id" }, fr = {
  key: 0,
  class: "node-result-description"
}, gr = {
  key: 1,
  class: "node-empty-state"
}, pr = {
  key: 2,
  class: "node-empty-state"
}, hr = {
  key: 3,
  class: "node-empty-state"
}, yr = { class: "node-manual-entry-modal" }, wr = { class: "node-modal-body" }, kr = { class: "node-modal-actions" }, br = /* @__PURE__ */ X({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, i = u, { searchNodes: w } = Is(), g = _(0), v = _(!1), m = _(!1), r = _(""), c = _(""), p = _([]), h = _(!1), b = _(/* @__PURE__ */ new Map()), $ = _(/* @__PURE__ */ new Set()), z = _(!1);
    function W() {
      z.value && O(), z.value = !1;
    }
    const f = P(() => n.nodes[g.value]), I = P(() => n.nodes.filter((Y) => n.nodeChoices.has(Y.node_type)).length), B = P(() => f.value ? b.value.get(f.value.node_type) || [] : []), C = P(() => f.value ? $.value.has(f.value.node_type) : !1);
    wt(f, async (Y) => {
      var ue;
      Y && ((ue = Y.options) != null && ue.length || b.value.has(Y.node_type) || $.value.has(Y.node_type) || n.nodeChoices.has(Y.node_type) || await x(Y.node_type));
    }, { immediate: !0 });
    async function x(Y) {
      $.value.add(Y);
      try {
        const ue = await w(Y, 5);
        b.value.set(Y, ue);
      } catch {
        b.value.set(Y, []);
      } finally {
        $.value.delete(Y);
      }
    }
    const j = P(() => n.autoResolvedPackages.filter((Y) => !n.skippedPackages.has(Y.package_id)).length);
    function V(Y) {
      return n.skippedPackages.has(Y);
    }
    function H(Y) {
      i("package-skip", Y);
    }
    const L = P(() => {
      var ue;
      if (!f.value) return "not-found";
      const Y = n.nodeChoices.get(f.value.node_type);
      if (Y)
        switch (Y.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ue = f.value.options) != null && ue.length ? "ambiguous" : "not-found";
    }), S = P(() => {
      var ue;
      if (!f.value) return;
      const Y = n.nodeChoices.get(f.value.node_type);
      if (Y)
        switch (Y.action) {
          case "install":
            return Y.package_id ? `→ ${Y.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ue = f.value.options) != null && ue.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function E(Y) {
      Y >= 0 && Y < n.nodes.length && (g.value = Y);
    }
    function N() {
      f.value && i("mark-optional", f.value.node_type);
    }
    function U() {
      f.value && i("skip", f.value.node_type);
    }
    function ae(Y) {
      f.value && i("option-selected", f.value.node_type, Y);
    }
    function we() {
      f.value && i("clear-choice", f.value.node_type);
    }
    function me() {
      f.value && (r.value = f.value.node_type, p.value = B.value, v.value = !0, Me(r.value));
    }
    function oe() {
      c.value = "", m.value = !0;
    }
    function O() {
      v.value = !1, r.value = "", p.value = [];
    }
    function M() {
      m.value = !1, c.value = "";
    }
    let le = null;
    function se() {
      le && clearTimeout(le), le = setTimeout(() => {
        Me(r.value);
      }, 300);
    }
    async function Me(Y) {
      if (!Y.trim()) {
        p.value = [];
        return;
      }
      h.value = !0;
      try {
        p.value = await w(Y, 10);
      } catch {
        p.value = [];
      } finally {
        h.value = !1;
      }
    }
    function ke(Y) {
      f.value && (i("manual-entry", f.value.node_type, Y.package_id), O());
    }
    function de(Y) {
      f.value && i("manual-entry", f.value.node_type, Y.package_id);
    }
    function ne() {
      !f.value || !c.value.trim() || (i("manual-entry", f.value.node_type, c.value.trim()), M());
    }
    return (Y, ue) => {
      var _e, Le;
      return s(), o("div", Gi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", qi, [
          e("div", Hi, [
            ue[6] || (ue[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Ki, a(j.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Yi, [
            (s(!0), o(F, null, ee(t.autoResolvedPackages, (ve) => (s(), o("div", {
              key: ve.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Ji, [
                e("code", Qi, a(ve.package_id), 1),
                e("span", Xi, a(ve.node_types_count) + " node type" + a(ve.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Zi, [
                V(ve.package_id) ? (s(), o("span", tr, " SKIPPED ")) : (s(), o("span", er, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (J) => H(ve.package_id)
                }, a(V(ve.package_id) ? "Include" : "Skip"), 9, sr)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", or)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(F, { key: 2 }, [
          e("div", nr, [
            ue[7] || (ue[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", ar, a(I.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (s(), T(Es, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ue[0] || (ue[0] = (ve) => E(g.value - 1)),
            onNext: ue[1] || (ue[1] = (ve) => E(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          f.value ? (s(), o("div", lr, [
            k(zi, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((_e = f.value.options) != null && _e.length),
              options: f.value.options,
              choice: (Le = t.nodeChoices) == null ? void 0 : Le.get(f.value.node_type),
              status: L.value,
              "status-label": S.value,
              "search-results": B.value,
              "is-searching": C.value,
              onMarkOptional: N,
              onSkip: U,
              onManualEntry: oe,
              onSearch: me,
              onOptionSelected: ae,
              onClearChoice: we,
              onSearchResultSelected: de
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", ir, [...ue[8] || (ue[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), T(Ae, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ue[4] || (ue[4] = ze((ve) => z.value = !0, ["self"])),
            onMouseup: ze(W, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ue[3] || (ue[3] = (ve) => z.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ue[9] || (ue[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", rr, [
                k(tt, {
                  modelValue: r.value,
                  "onUpdate:modelValue": ue[2] || (ue[2] = (ve) => r.value = ve),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                e("div", dr, [
                  p.value.length > 0 ? (s(), o("div", cr, [
                    (s(!0), o(F, null, ee(p.value, (ve) => (s(), o("div", {
                      key: ve.package_id,
                      class: "node-search-result-item",
                      onClick: (J) => ke(ve)
                    }, [
                      e("div", mr, [
                        e("code", vr, a(ve.package_id), 1),
                        ve.match_confidence ? (s(), T(Qt, {
                          key: 0,
                          confidence: ve.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      ve.description ? (s(), o("div", fr, a(ve.description), 1)) : d("", !0)
                    ], 8, ur))), 128))
                  ])) : h.value ? (s(), o("div", gr, "Searching...")) : r.value ? (s(), o("div", pr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", hr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), T(Ae, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ze(M, ["self"])
          }, [
            e("div", yr, [
              e("div", { class: "node-modal-header" }, [
                ue[10] || (ue[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", wr, [
                k(tt, {
                  modelValue: c.value,
                  "onUpdate:modelValue": ue[5] || (ue[5] = (ve) => c.value = ve),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", kr, [
                  k(ce, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: l(() => [...ue[11] || (ue[11] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ce, {
                    variant: "primary",
                    disabled: !c.value.trim(),
                    onClick: ne
                  }, {
                    default: l(() => [...ue[12] || (ue[12] = [
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
}), _r = /* @__PURE__ */ Z(br, [["__scopeId", "data-v-281581bc"]]), $r = { class: "node-info" }, Cr = { class: "node-info-text" }, xr = { class: "item-body" }, Sr = {
  key: 0,
  class: "resolved-state"
}, Ir = {
  key: 1,
  class: "multiple-options"
}, Er = { class: "options-list" }, Mr = ["onClick"], Tr = ["name", "value", "checked", "onChange"], Rr = { class: "option-content" }, zr = { class: "option-header" }, Lr = { class: "option-filename" }, Pr = { class: "option-meta" }, Dr = { class: "option-size" }, Nr = { class: "option-category" }, Ur = { class: "option-path" }, Or = { class: "action-buttons" }, Br = {
  key: 2,
  class: "unresolved"
}, Ar = { class: "action-buttons" }, Fr = /* @__PURE__ */ X({
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
    const n = t, i = u, w = P(() => !!n.choice);
    P(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), P(() => {
      var r, c;
      return ((c = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : c.filename) || "selected";
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
    function v(r) {
      i("option-selected", r);
    }
    function m(r) {
      if (!r) return "Unknown";
      const c = r / (1024 * 1024 * 1024);
      return c >= 1 ? `${c.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, c) => (s(), o("div", {
      class: ie(["model-resolution-item", { resolved: w.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", $r, [
        e("span", Cr, [
          c[7] || (c[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ie(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", xr, [
        w.value ? (s(), o("div", Sr, [
          k(ce, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (p) => i("clear-choice"))
          }, {
            default: l(() => [...c[8] || (c[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ir, [
          c[12] || (c[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Er, [
            (s(!0), o(F, null, ee(t.options, (p, h) => (s(), o("label", {
              key: p.model.hash,
              class: ie(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (b) => v(h)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (b) => v(h)
              }, null, 40, Tr),
              e("div", Rr, [
                e("div", zr, [
                  e("span", Lr, a(p.model.filename), 1),
                  k(Qt, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Pr, [
                  e("span", Dr, a(m(p.model.size)), 1),
                  e("span", Nr, a(p.model.category), 1)
                ]),
                e("div", Ur, a(p.model.relative_path), 1)
              ])
            ], 10, Mr))), 128))
          ]),
          e("div", Or, [
            k(ce, {
              variant: "ghost",
              size: "sm",
              onClick: c[1] || (c[1] = (p) => i("search"))
            }, {
              default: l(() => [...c[9] || (c[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "ghost",
              size: "sm",
              onClick: c[2] || (c[2] = (p) => i("download-url"))
            }, {
              default: l(() => [...c[10] || (c[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: c[3] || (c[3] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...c[11] || (c[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Br, [
          c[16] || (c[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Ar, [
            k(ce, {
              variant: "primary",
              size: "sm",
              onClick: c[4] || (c[4] = (p) => i("search"))
            }, {
              default: l(() => [...c[13] || (c[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: c[5] || (c[5] = (p) => i("download-url"))
            }, {
              default: l(() => [...c[14] || (c[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: c[6] || (c[6] = (p) => i("mark-optional"))
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
}), Vr = /* @__PURE__ */ Z(Fr, [["__scopeId", "data-v-8a82fefa"]]), Wr = { class: "model-resolution-step" }, jr = { class: "step-header" }, Gr = { class: "step-info" }, qr = { class: "step-title" }, Hr = { class: "step-description" }, Kr = { class: "stat-badge" }, Yr = {
  key: 1,
  class: "step-body"
}, Jr = {
  key: 2,
  class: "empty-state"
}, Qr = { class: "model-search-modal" }, Xr = { class: "model-modal-body" }, Zr = {
  key: 0,
  class: "model-search-results"
}, ed = ["onClick"], td = { class: "model-result-header" }, sd = { class: "model-result-filename" }, od = { class: "model-result-meta" }, nd = { class: "model-result-category" }, ad = { class: "model-result-size" }, ld = {
  key: 0,
  class: "model-result-path"
}, id = {
  key: 1,
  class: "model-no-results"
}, rd = {
  key: 2,
  class: "model-searching"
}, dd = { class: "model-download-url-modal" }, cd = { class: "model-modal-body" }, ud = { class: "model-input-group" }, md = { class: "model-input-group" }, vd = { class: "model-modal-actions" }, fd = /* @__PURE__ */ X({
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
    function i(O) {
      var M;
      return O && ((M = n[O]) == null ? void 0 : M[0]) || null;
    }
    const w = t, g = u, v = _(0), m = _(!1), r = _(!1), c = _(""), p = _(""), h = _(""), b = _([]), $ = _(!1), z = P(() => w.models[v.value]), W = P(() => w.models.some((O) => O.is_download_intent)), f = P(() => w.models.filter(
      (O) => w.modelChoices.has(O.filename) || O.is_download_intent
    ).length), I = P(() => {
      var M;
      if (!z.value) return "";
      const O = i((M = z.value.reference) == null ? void 0 : M.node_type);
      return O ? `${O}/${z.value.filename}` : "";
    }), B = P(() => {
      var M;
      if (!z.value) return "not-found";
      const O = w.modelChoices.get(z.value.filename);
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
      return z.value.is_download_intent ? "download" : (M = z.value.options) != null && M.length ? "ambiguous" : "not-found";
    }), C = P(() => {
      var M, le;
      if (!z.value) return;
      const O = w.modelChoices.get(z.value.filename);
      if (O)
        switch (O.action) {
          case "select":
            return (M = O.selected_model) != null && M.filename ? `→ ${O.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return z.value.is_download_intent ? "Pending Download" : (le = z.value.options) != null && le.length ? `${z.value.options.length} matches` : "Not Found";
    });
    function x(O) {
      O >= 0 && O < w.models.length && (v.value = O);
    }
    function j() {
      z.value && g("mark-optional", z.value.filename);
    }
    function V() {
      z.value && g("skip", z.value.filename);
    }
    function H(O) {
      z.value && g("option-selected", z.value.filename, O);
    }
    function L() {
      z.value && g("clear-choice", z.value.filename);
    }
    function S() {
      z.value && (c.value = z.value.filename, m.value = !0);
    }
    function E() {
      z.value && (p.value = z.value.download_source || "", h.value = z.value.target_path || I.value, r.value = !0);
    }
    function N() {
      m.value = !1, c.value = "", b.value = [];
    }
    function U() {
      r.value = !1, p.value = "", h.value = "";
    }
    function ae() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function we(O) {
      z.value && N();
    }
    function me() {
      !z.value || !p.value.trim() || (g("download-url", z.value.filename, p.value.trim(), h.value.trim() || void 0), U());
    }
    function oe(O) {
      if (!O) return "Unknown";
      const M = O / (1024 * 1024 * 1024);
      return M >= 1 ? `${M.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, M) => {
      var le, se, Me;
      return s(), o("div", Wr, [
        e("div", jr, [
          e("div", Gr, [
            e("h3", qr, a(W.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Hr, a(W.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Kr, a(f.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        z.value ? (s(), T(Es, {
          key: 0,
          "item-name": z.value.filename,
          "current-index": v.value,
          "total-items": t.models.length,
          onPrev: M[0] || (M[0] = (ke) => x(v.value - 1)),
          onNext: M[1] || (M[1] = (ke) => x(v.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        z.value ? (s(), o("div", Yr, [
          k(Vr, {
            filename: z.value.filename,
            "node-type": ((le = z.value.reference) == null ? void 0 : le.node_type) || "Unknown",
            "has-multiple-options": !!((se = z.value.options) != null && se.length),
            options: z.value.options,
            choice: (Me = t.modelChoices) == null ? void 0 : Me.get(z.value.filename),
            status: B.value,
            "status-label": C.value,
            onMarkOptional: j,
            onSkip: V,
            onDownloadUrl: E,
            onSearch: S,
            onOptionSelected: H,
            onClearChoice: L
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Jr, [...M[5] || (M[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), T(Ae, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(N, ["self"])
          }, [
            e("div", Qr, [
              e("div", { class: "model-modal-header" }, [
                M[6] || (M[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Xr, [
                k(tt, {
                  modelValue: c.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (ke) => c.value = ke),
                  placeholder: "Search by filename, category...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", Zr, [
                  (s(!0), o(F, null, ee(b.value, (ke) => (s(), o("div", {
                    key: ke.hash,
                    class: "model-search-result-item",
                    onClick: (de) => we()
                  }, [
                    e("div", td, [
                      e("code", sd, a(ke.filename), 1)
                    ]),
                    e("div", od, [
                      e("span", nd, a(ke.category), 1),
                      e("span", ad, a(oe(ke.size)), 1)
                    ]),
                    ke.relative_path ? (s(), o("div", ld, a(ke.relative_path), 1)) : d("", !0)
                  ], 8, ed))), 128))
                ])) : c.value && !$.value ? (s(), o("div", id, ' No models found matching "' + a(c.value) + '" ', 1)) : d("", !0),
                $.value ? (s(), o("div", rd, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), T(Ae, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(U, ["self"])
          }, [
            e("div", dd, [
              e("div", { class: "model-modal-header" }, [
                M[7] || (M[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", cd, [
                e("div", ud, [
                  M[8] || (M[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(tt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (ke) => p.value = ke),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", md, [
                  M[9] || (M[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(tt, {
                    modelValue: h.value,
                    "onUpdate:modelValue": M[4] || (M[4] = (ke) => h.value = ke),
                    placeholder: I.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", vd, [
                  k(ce, {
                    variant: "secondary",
                    onClick: U
                  }, {
                    default: l(() => [...M[10] || (M[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ce, {
                    variant: "primary",
                    disabled: !p.value.trim() || !h.value.trim(),
                    onClick: me
                  }, {
                    default: l(() => [...M[11] || (M[11] = [
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
}), gd = /* @__PURE__ */ Z(fd, [["__scopeId", "data-v-c6acbada"]]), pd = { class: "applying-step" }, hd = {
  key: 0,
  class: "phase-content"
}, yd = {
  key: 1,
  class: "phase-content"
}, wd = { class: "phase-description" }, kd = { class: "overall-progress" }, bd = { class: "progress-bar" }, _d = { class: "progress-label" }, $d = { class: "install-list" }, Cd = { class: "install-icon" }, xd = { key: 0 }, Sd = {
  key: 1,
  class: "spinner"
}, Id = { key: 2 }, Ed = { key: 3 }, Md = {
  key: 0,
  class: "install-error"
}, Td = {
  key: 2,
  class: "phase-content"
}, Rd = { class: "phase-header" }, zd = { class: "phase-title" }, Ld = { class: "completion-summary" }, Pd = {
  key: 0,
  class: "summary-item success"
}, Dd = { class: "summary-text" }, Nd = {
  key: 1,
  class: "summary-item error"
}, Ud = { class: "summary-text" }, Od = {
  key: 2,
  class: "failed-list"
}, Bd = { class: "failed-node-id" }, Ad = { class: "failed-error" }, Fd = {
  key: 4,
  class: "summary-item success"
}, Vd = {
  key: 5,
  class: "restart-prompt"
}, Wd = {
  key: 3,
  class: "phase-content error"
}, jd = { class: "error-message" }, Gd = /* @__PURE__ */ X({
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
      const r = ((p = u.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0;
      return Math.round(r / m * 100);
    }), i = P(() => {
      var m;
      return ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((r) => !r.success)) || [];
    }), w = P(() => i.value.length > 0);
    function g(m, r) {
      var p, h;
      const c = (p = u.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.find((b) => b.node_id === m);
      return c ? c.success ? "complete" : "failed" : ((h = u.progress.nodeInstallProgress) == null ? void 0 : h.currentIndex) === r ? "installing" : "pending";
    }
    function v(m) {
      var r, c;
      return (c = (r = u.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((p) => p.node_id === m)) == null ? void 0 : c.error;
    }
    return (m, r) => {
      var c, p, h, b;
      return s(), o("div", pd, [
        t.progress.phase === "resolving" ? (s(), o("div", hd, [...r[2] || (r[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", yd, [
          r[3] || (r[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", wd, " Installing " + a((((c = t.progress.nodeInstallProgress) == null ? void 0 : c.currentIndex) ?? 0) + 1) + " of " + a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", kd, [
            e("div", bd, [
              e("div", {
                class: "progress-fill",
                style: ft({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", _d, a(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", $d, [
            (s(!0), o(F, null, ee(t.progress.nodesToInstall, ($, z) => (s(), o("div", {
              key: $,
              class: ie(["install-item", g($, z)])
            }, [
              e("span", Cd, [
                g($, z) === "pending" ? (s(), o("span", xd, "○")) : g($, z) === "installing" ? (s(), o("span", Sd, "◌")) : g($, z) === "complete" ? (s(), o("span", Id, "✓")) : g($, z) === "failed" ? (s(), o("span", Ed, "✗")) : d("", !0)
              ]),
              e("code", null, a($), 1),
              v($) ? (s(), o("span", Md, a(v($)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Td, [
          e("div", Rd, [
            e("span", {
              class: ie(["phase-icon", w.value ? "warning" : "success"])
            }, a(w.value ? "⚠" : "✓"), 3),
            e("h3", zd, a(w.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Ld, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Pd, [
              r[4] || (r[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Dd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Nd, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Ud, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Od, [
              (s(!0), o(F, null, ee(i.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", Bd, a($.node_id), 1),
                e("span", Ad, a($.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = ($) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            w.value ? d("", !0) : (s(), o("div", Fd, [...r[6] || (r[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            r[8] || (r[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Vd, [
              r[7] || (r[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: r[1] || (r[1] = ($) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Wd, [
          r[9] || (r[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", jd, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), qd = /* @__PURE__ */ Z(Gd, [["__scopeId", "data-v-5efaae58"]]), Hd = {
  key: 0,
  class: "loading-state"
}, Kd = {
  key: 1,
  class: "wizard-content"
}, Yd = {
  key: 0,
  class: "step-content"
}, Jd = { class: "analysis-summary" }, Qd = { class: "analysis-header" }, Xd = { class: "summary-description" }, Zd = { class: "stats-grid" }, ec = { class: "stat-card" }, tc = { class: "stat-items" }, sc = {
  key: 0,
  class: "stat-item success"
}, oc = { class: "stat-count" }, nc = {
  key: 1,
  class: "stat-item info"
}, ac = { class: "stat-count" }, lc = {
  key: 2,
  class: "stat-item warning"
}, ic = { class: "stat-count" }, rc = {
  key: 3,
  class: "stat-item error"
}, dc = { class: "stat-count" }, cc = { class: "stat-card" }, uc = { class: "stat-items" }, mc = { class: "stat-item success" }, vc = { class: "stat-count" }, fc = {
  key: 0,
  class: "stat-item info"
}, gc = { class: "stat-count" }, pc = {
  key: 1,
  class: "stat-item warning"
}, hc = { class: "stat-count" }, yc = {
  key: 2,
  class: "stat-item warning"
}, wc = { class: "stat-count" }, kc = {
  key: 3,
  class: "stat-item error"
}, bc = { class: "stat-count" }, _c = {
  key: 0,
  class: "status-message warning"
}, $c = { class: "status-text" }, Cc = {
  key: 1,
  class: "status-message info"
}, xc = { class: "status-text" }, Sc = {
  key: 2,
  class: "status-message info"
}, Ic = { class: "status-text" }, Ec = {
  key: 3,
  class: "status-message warning"
}, Mc = { class: "status-text" }, Tc = {
  key: 4,
  class: "status-message success"
}, Rc = {
  key: 5,
  class: "category-mismatch-section"
}, zc = { class: "mismatch-list" }, Lc = { class: "mismatch-path" }, Pc = { class: "mismatch-target" }, Dc = {
  key: 3,
  class: "step-content"
}, Nc = { class: "review-summary" }, Uc = { class: "review-stats" }, Oc = { class: "review-stat" }, Bc = { class: "stat-value" }, Ac = { class: "review-stat" }, Fc = { class: "stat-value" }, Vc = { class: "review-stat" }, Wc = { class: "stat-value" }, jc = { class: "review-stat" }, Gc = { class: "stat-value" }, qc = {
  key: 0,
  class: "review-section"
}, Hc = { class: "section-title" }, Kc = { class: "review-items" }, Yc = { class: "item-name" }, Jc = { class: "item-choice" }, Qc = {
  key: 0,
  class: "choice-badge install"
}, Xc = {
  key: 1,
  class: "choice-badge skip"
}, Zc = {
  key: 1,
  class: "review-section"
}, eu = { class: "section-title" }, tu = { class: "review-items" }, su = { class: "item-name" }, ou = { class: "item-choice" }, nu = {
  key: 0,
  class: "choice-badge install"
}, au = {
  key: 1,
  class: "choice-badge optional"
}, lu = {
  key: 2,
  class: "choice-badge skip"
}, iu = {
  key: 1,
  class: "choice-badge pending"
}, ru = {
  key: 2,
  class: "review-section"
}, du = { class: "section-title" }, cu = { class: "review-items" }, uu = { class: "item-name" }, mu = { class: "item-choice" }, vu = {
  key: 0,
  class: "choice-badge install"
}, fu = {
  key: 1,
  class: "choice-badge download"
}, gu = {
  key: 2,
  class: "choice-badge optional"
}, pu = {
  key: 3,
  class: "choice-badge skip"
}, hu = {
  key: 4,
  class: "choice-badge skip"
}, yu = {
  key: 1,
  class: "choice-badge download"
}, wu = {
  key: 2,
  class: "choice-badge pending"
}, ku = {
  key: 3,
  class: "no-choices"
}, bu = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, i = u, { analyzeWorkflow: w, applyResolution: g, installNodes: v, queueModelDownloads: m, progress: r, resetProgress: c } = Is(), { loadPendingDownloads: p } = Vt(), { openFileLocation: h } = Oe(), b = _(null), $ = _(!1), z = _(!1), W = _(null), f = _("analysis"), I = _([]), B = _(/* @__PURE__ */ new Map()), C = _(/* @__PURE__ */ new Map()), x = _(/* @__PURE__ */ new Set()), j = P(() => {
      const K = [
        { id: "analysis", label: "Analysis" }
      ];
      return (H.value || E.value) && K.push({ id: "nodes", label: "Nodes" }), (L.value || S.value) && K.push({ id: "models", label: "Models" }), K.push({ id: "review", label: "Review" }), f.value === "applying" && K.push({ id: "applying", label: "Applying" }), K;
    }), V = P(() => b.value ? b.value.stats.needs_user_input : !1), H = P(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), L = P(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), S = P(() => b.value ? b.value.stats.download_intents > 0 : !1), E = P(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), N = P(() => b.value ? b.value.nodes.resolved.length : 0), U = P(() => b.value ? b.value.models.resolved.filter((K) => K.has_category_mismatch) : []), ae = P(() => U.value.length > 0), we = P(() => {
      if (!b.value) return [];
      const K = b.value.nodes.resolved.filter((A) => !A.is_installed), D = /* @__PURE__ */ new Set();
      return K.filter((A) => D.has(A.package.package_id) ? !1 : (D.add(A.package.package_id), !0));
    }), me = P(() => {
      if (!b.value) return [];
      const K = b.value.nodes.resolved.filter((A) => !A.is_installed), D = /* @__PURE__ */ new Map();
      for (const A of K) {
        const Q = D.get(A.package.package_id);
        Q ? Q.node_types_count++ : D.set(A.package.package_id, {
          package_id: A.package.package_id,
          title: A.package.title,
          node_types_count: 1
        });
      }
      return Array.from(D.values());
    }), oe = P(() => we.value.filter((K) => !x.value.has(K.package.package_id))), O = P(() => b.value ? b.value.models.resolved.filter((K) => K.match_type === "download_intent").map((K) => ({
      filename: K.reference.widget_value,
      reference: K.reference,
      is_download_intent: !0,
      resolved_model: K.model,
      download_source: K.download_source,
      target_path: K.target_path
    })) : []), M = P(() => {
      if (!b.value) return [];
      const K = b.value.nodes.unresolved.map((A) => ({
        node_type: A.reference.node_type,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), D = b.value.nodes.ambiguous.map((A) => ({
        node_type: A.reference.node_type,
        has_multiple_options: !0,
        options: A.options.map((Q) => ({
          package_id: Q.package.package_id,
          title: Q.package.title,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          is_installed: Q.is_installed
        }))
      }));
      return [...K, ...D];
    }), le = P(() => {
      if (!b.value) return [];
      const K = b.value.models.unresolved.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), D = b.value.models.ambiguous.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        has_multiple_options: !0,
        options: A.options.map((Q) => ({
          model: Q.model,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          has_download_source: Q.has_download_source
        }))
      }));
      return [...K, ...D];
    }), se = P(() => {
      const K = le.value, D = O.value.map((A) => ({
        filename: A.filename,
        reference: A.reference,
        is_download_intent: !0,
        resolved_model: A.resolved_model,
        download_source: A.download_source,
        target_path: A.target_path,
        options: void 0
      }));
      return [...K, ...D];
    }), Me = P(() => {
      let K = oe.value.length;
      for (const D of B.value.values())
        D.action === "install" && K++;
      for (const D of C.value.values())
        D.action === "select" && K++;
      return K;
    }), ke = P(() => {
      let K = 0;
      for (const D of C.value.values())
        D.action === "download" && K++;
      return K;
    }), de = P(() => {
      let K = 0;
      for (const D of B.value.values())
        D.action === "optional" && K++;
      for (const D of C.value.values())
        D.action === "optional" && K++;
      return K;
    }), ne = P(() => {
      let K = x.value.size;
      for (const D of B.value.values())
        D.action === "skip" && K++;
      for (const D of C.value.values())
        D.action === "skip" && K++;
      for (const D of M.value)
        B.value.has(D.node_type) || K++;
      for (const D of le.value)
        C.value.has(D.filename) || K++;
      return K;
    }), Y = P(() => {
      const K = {};
      if (K.analysis = { resolved: 1, total: 1 }, H.value) {
        const D = M.value.length, A = M.value.filter(
          (Q) => B.value.has(Q.node_type)
        ).length;
        K.nodes = { resolved: A, total: D };
      }
      if (L.value || S.value) {
        const D = se.value.length, A = se.value.filter(
          (Q) => C.value.has(Q.filename) || Q.is_download_intent
        ).length;
        K.models = { resolved: A, total: D };
      }
      if (K.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const D = r.totalFiles || 1, A = r.completedFiles.length;
        K.applying = { resolved: A, total: D };
      }
      return K;
    });
    function ue(K) {
      f.value = K;
    }
    function _e() {
      const K = j.value.findIndex((D) => D.id === f.value);
      K > 0 && (f.value = j.value[K - 1].id);
    }
    function Le() {
      const K = j.value.findIndex((D) => D.id === f.value);
      K < j.value.length - 1 && (f.value = j.value[K + 1].id);
    }
    async function ve() {
      $.value = !0, W.value = null;
      try {
        b.value = await w(n.workflowName);
      } catch (K) {
        W.value = K instanceof Error ? K.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function J() {
      I.value.includes("analysis") || I.value.push("analysis"), H.value || E.value ? f.value = "nodes" : L.value || S.value ? f.value = "models" : f.value = "review";
    }
    function fe(K) {
      B.value.set(K, { action: "optional" });
    }
    function $e(K) {
      B.value.set(K, { action: "skip" });
    }
    function Ee(K, D) {
      var Q;
      const A = M.value.find((pe) => pe.node_type === K);
      (Q = A == null ? void 0 : A.options) != null && Q[D] && B.value.set(K, {
        action: "install",
        package_id: A.options[D].package_id
      });
    }
    function ye(K, D) {
      B.value.set(K, {
        action: "install",
        package_id: D
      });
    }
    function it(K) {
      B.value.delete(K);
    }
    function be(K) {
      x.value.has(K) ? x.value.delete(K) : x.value.add(K);
    }
    function Fe(K) {
      C.value.set(K, { action: "optional" });
    }
    function kt(K) {
      C.value.set(K, { action: "skip" });
    }
    function rt(K, D) {
      var Q;
      const A = le.value.find((pe) => pe.filename === K);
      (Q = A == null ? void 0 : A.options) != null && Q[D] && C.value.set(K, {
        action: "select",
        selected_model: A.options[D].model
      });
    }
    function De(K, D, A) {
      C.value.set(K, {
        action: "download",
        url: D,
        target_path: A
      });
    }
    function bt(K) {
      C.value.delete(K);
    }
    async function ht(K) {
      try {
        await h(K);
      } catch (D) {
        W.value = D instanceof Error ? D.message : "Failed to open file location";
      }
    }
    async function dt() {
      var K;
      z.value = !0, W.value = null, c(), r.phase = "resolving", f.value = "applying";
      try {
        const D = await g(n.workflowName, B.value, C.value, x.value);
        D.models_to_download && D.models_to_download.length > 0 && m(n.workflowName, D.models_to_download);
        const A = [
          ...D.nodes_to_install || [],
          ...oe.value.map((pe) => pe.package.package_id)
        ];
        r.nodesToInstall = [...new Set(A)], r.nodesToInstall.length > 0 && await v(n.workflowName), r.phase = "complete", await p();
        const Q = r.installError || ((K = r.nodeInstallProgress) == null ? void 0 : K.completedNodes.some((pe) => !pe.success));
        !r.needsRestart && !Q && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (D) {
        W.value = D instanceof Error ? D.message : "Failed to apply resolution", r.error = W.value, r.phase = "error";
      } finally {
        z.value = !1;
      }
    }
    function _t() {
      i("refresh"), i("restart"), i("close");
    }
    async function ct() {
      var D;
      const K = ((D = r.nodeInstallProgress) == null ? void 0 : D.completedNodes.filter((A) => !A.success).map((A) => A.node_id)) || [];
      if (K.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: K.length
        }, r.nodesToInstall = K, r.nodesInstalled = [], r.installError = void 0;
        try {
          await v(n.workflowName), r.phase = "complete";
        } catch (A) {
          r.error = A instanceof Error ? A.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Ue(ve), (K, D) => (s(), T(Ke, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: $.value,
      error: W.value || void 0,
      "fixed-height": !0,
      onClose: D[1] || (D[1] = (A) => i("close"))
    }, {
      body: l(() => [
        $.value && !b.value ? (s(), o("div", Hd, [...D[2] || (D[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", Kd, [
          k(ti, {
            steps: j.value,
            "current-step": f.value,
            "completed-steps": I.value,
            "step-stats": Y.value,
            onStepChange: ue
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", Yd, [
            e("div", Jd, [
              e("div", Qd, [
                D[3] || (D[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Xd, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Zd, [
                e("div", ec, [
                  D[12] || (D[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", tc, [
                    N.value > 0 ? (s(), o("div", sc, [
                      D[4] || (D[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", oc, a(N.value), 1),
                      D[5] || (D[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", nc, [
                      D[6] || (D[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", ac, a(b.value.stats.packages_needing_installation), 1),
                      D[7] || (D[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", lc, [
                      D[8] || (D[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ic, a(b.value.nodes.ambiguous.length), 1),
                      D[9] || (D[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", rc, [
                      D[10] || (D[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", dc, a(b.value.nodes.unresolved.length), 1),
                      D[11] || (D[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", cc, [
                  D[23] || (D[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", uc, [
                    e("div", mc, [
                      D[13] || (D[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", vc, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      D[14] || (D[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", fc, [
                      D[15] || (D[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", gc, a(b.value.stats.download_intents), 1),
                      D[16] || (D[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    ae.value ? (s(), o("div", pc, [
                      D[17] || (D[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", hc, a(U.value.length), 1),
                      D[18] || (D[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", yc, [
                      D[19] || (D[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", wc, a(b.value.models.ambiguous.length), 1),
                      D[20] || (D[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", kc, [
                      D[21] || (D[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", bc, a(b.value.models.unresolved.length), 1),
                      D[22] || (D[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              V.value ? (s(), o("div", _c, [
                D[24] || (D[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", $c, a(M.value.length + le.value.length) + " items need your input", 1)
              ])) : E.value ? (s(), o("div", Cc, [
                D[25] || (D[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", xc, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(S.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : S.value ? (s(), o("div", Sc, [
                D[26] || (D[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Ic, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : ae.value ? (s(), o("div", Ec, [
                D[27] || (D[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Mc, a(U.value.length) + " model" + a(U.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Tc, [...D[28] || (D[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ae.value ? (s(), o("div", Rc, [
                D[31] || (D[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", zc, [
                  (s(!0), o(F, null, ee(U.value, (A) => {
                    var Q, pe;
                    return s(), o("div", {
                      key: A.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Lc, a(A.actual_category) + "/" + a((Q = A.model) == null ? void 0 : Q.filename), 1),
                      D[30] || (D[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Pc, a((pe = A.expected_categories) == null ? void 0 : pe[0]) + "/", 1),
                      A.file_path ? (s(), T(ce, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (ot) => ht(A.file_path)
                      }, {
                        default: l(() => [...D[29] || (D[29] = [
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
          f.value === "nodes" ? (s(), T(_r, {
            key: 1,
            nodes: M.value,
            "node-choices": B.value,
            "auto-resolved-packages": me.value,
            "skipped-packages": x.value,
            onMarkOptional: fe,
            onSkip: $e,
            onOptionSelected: Ee,
            onManualEntry: ye,
            onClearChoice: it,
            onPackageSkip: be
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          f.value === "models" ? (s(), T(gd, {
            key: 2,
            models: se.value,
            "model-choices": C.value,
            onMarkOptional: Fe,
            onSkip: kt,
            onOptionSelected: rt,
            onDownloadUrl: De,
            onClearChoice: bt
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          f.value === "review" ? (s(), o("div", Dc, [
            e("div", Nc, [
              D[36] || (D[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Uc, [
                e("div", Oc, [
                  e("span", Bc, a(Me.value), 1),
                  D[32] || (D[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Ac, [
                  e("span", Fc, a(ke.value), 1),
                  D[33] || (D[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Vc, [
                  e("span", Wc, a(de.value), 1),
                  D[34] || (D[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", jc, [
                  e("span", Gc, a(ne.value), 1),
                  D[35] || (D[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              me.value.length > 0 ? (s(), o("div", qc, [
                e("h4", Hc, "Node Packages (" + a(me.value.length) + ")", 1),
                e("div", Kc, [
                  (s(!0), o(F, null, ee(me.value, (A) => (s(), o("div", {
                    key: A.package_id,
                    class: "review-item"
                  }, [
                    e("code", Yc, a(A.package_id), 1),
                    e("div", Jc, [
                      x.value.has(A.package_id) ? (s(), o("span", Xc, "Skipped")) : (s(), o("span", Qc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              M.value.length > 0 ? (s(), o("div", Zc, [
                e("h4", eu, "Node Choices (" + a(M.value.length) + ")", 1),
                e("div", tu, [
                  (s(!0), o(F, null, ee(M.value, (A) => {
                    var Q, pe, ot, Ye;
                    return s(), o("div", {
                      key: A.node_type,
                      class: "review-item"
                    }, [
                      e("code", su, a(A.node_type), 1),
                      e("div", ou, [
                        B.value.has(A.node_type) ? (s(), o(F, { key: 0 }, [
                          ((Q = B.value.get(A.node_type)) == null ? void 0 : Q.action) === "install" ? (s(), o("span", nu, a((pe = B.value.get(A.node_type)) == null ? void 0 : pe.package_id), 1)) : ((ot = B.value.get(A.node_type)) == null ? void 0 : ot.action) === "optional" ? (s(), o("span", au, " Optional ")) : ((Ye = B.value.get(A.node_type)) == null ? void 0 : Ye.action) === "skip" ? (s(), o("span", lu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", iu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              se.value.length > 0 ? (s(), o("div", ru, [
                e("h4", du, "Models (" + a(se.value.length) + ")", 1),
                e("div", cu, [
                  (s(!0), o(F, null, ee(se.value, (A) => {
                    var Q, pe, ot, Ye, ut, q, re;
                    return s(), o("div", {
                      key: A.filename,
                      class: "review-item"
                    }, [
                      e("code", uu, a(A.filename), 1),
                      e("div", mu, [
                        C.value.has(A.filename) ? (s(), o(F, { key: 0 }, [
                          ((Q = C.value.get(A.filename)) == null ? void 0 : Q.action) === "select" ? (s(), o("span", vu, a((ot = (pe = C.value.get(A.filename)) == null ? void 0 : pe.selected_model) == null ? void 0 : ot.filename), 1)) : ((Ye = C.value.get(A.filename)) == null ? void 0 : Ye.action) === "download" ? (s(), o("span", fu, " Download ")) : ((ut = C.value.get(A.filename)) == null ? void 0 : ut.action) === "optional" ? (s(), o("span", gu, " Optional ")) : ((q = C.value.get(A.filename)) == null ? void 0 : q.action) === "skip" ? (s(), o("span", pu, " Skip ")) : ((re = C.value.get(A.filename)) == null ? void 0 : re.action) === "cancel_download" ? (s(), o("span", hu, " Cancel Download ")) : d("", !0)
                        ], 64)) : A.is_download_intent ? (s(), o("span", yu, " Pending Download ")) : (s(), o("span", wu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              we.value.length === 0 && M.value.length === 0 && se.value.length === 0 ? (s(), o("div", ku, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          f.value === "applying" ? (s(), T(qd, {
            key: 4,
            progress: xe(r),
            onRestart: _t,
            onRetryFailed: ct
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), T(ce, {
          key: 0,
          variant: "secondary",
          disabled: z.value,
          onClick: _e
        }, {
          default: l(() => [...D[37] || (D[37] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        D[41] || (D[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || xe(r).phase === "complete" || xe(r).phase === "error" ? (s(), T(ce, {
          key: 1,
          variant: "secondary",
          onClick: D[0] || (D[0] = (A) => i("close"))
        }, {
          default: l(() => [
            y(a(xe(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "analysis" ? (s(), T(ce, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: J
        }, {
          default: l(() => [...D[38] || (D[38] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        f.value === "nodes" ? (s(), T(ce, {
          key: 3,
          variant: "primary",
          onClick: Le
        }, {
          default: l(() => [
            y(a(L.value || S.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "models" ? (s(), T(ce, {
          key: 4,
          variant: "primary",
          onClick: Le
        }, {
          default: l(() => [...D[39] || (D[39] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        f.value === "review" ? (s(), T(ce, {
          key: 5,
          variant: "primary",
          disabled: z.value,
          loading: z.value,
          onClick: dt
        }, {
          default: l(() => [...D[40] || (D[40] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), _u = /* @__PURE__ */ Z(bu, [["__scopeId", "data-v-6276cf1d"]]), $u = { class: "search-input-wrapper" }, Cu = ["value", "placeholder"], xu = /* @__PURE__ */ X({
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
    const n = t, i = u, w = _(null);
    let g;
    function v(r) {
      const c = r.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        i("update:modelValue", c);
      }, n.debounce)) : i("update:modelValue", c);
    }
    function m() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = w.value) == null || r.focus();
    }
    return Ue(() => {
      n.autoFocus && w.value && w.value.focus();
    }), (r, c) => (s(), o("div", $u, [
      e("input", {
        ref_key: "inputRef",
        ref: w,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: vt(m, ["escape"])
      }, null, 40, Cu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Su = /* @__PURE__ */ Z(xu, [["__scopeId", "data-v-266f857a"]]), Iu = { class: "search-bar" }, Eu = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (s(), o("div", Iu, [
      k(Su, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => u.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Mt = /* @__PURE__ */ Z(Eu, [["__scopeId", "data-v-3d51bbfd"]]), Mu = { class: "section-group" }, Tu = {
  key: 0,
  class: "section-content"
}, Ru = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, i = u, w = _(n.initiallyExpanded);
    function g() {
      n.collapsible && (w.value = !w.value, i("toggle", w.value));
    }
    return (v, m) => (s(), o("section", Mu, [
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
      !t.collapsible || w.value ? (s(), o("div", Tu, [
        Se(v.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ Z(Ru, [["__scopeId", "data-v-c48e33ed"]]), zu = { class: "item-header" }, Lu = {
  key: 0,
  class: "item-icon"
}, Pu = { class: "item-info" }, Du = {
  key: 0,
  class: "item-title"
}, Nu = {
  key: 1,
  class: "item-subtitle"
}, Uu = {
  key: 0,
  class: "item-details"
}, Ou = {
  key: 1,
  class: "item-actions"
}, Bu = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, i = P(() => n.status ? `status-${n.status}` : "");
    return (w, g) => (s(), o("div", {
      class: ie(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (v) => t.clickable && w.$emit("click"))
    }, [
      e("div", zu, [
        w.$slots.icon ? (s(), o("span", Lu, [
          Se(w.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Pu, [
          w.$slots.title ? (s(), o("div", Du, [
            Se(w.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          w.$slots.subtitle ? (s(), o("div", Nu, [
            Se(w.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      w.$slots.details ? (s(), o("div", Uu, [
        Se(w.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      w.$slots.actions ? (s(), o("div", Ou, [
        Se(w.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ Z(Bu, [["__scopeId", "data-v-cc435e0e"]]), Au = { class: "loading-state" }, Fu = { class: "loading-message" }, Vu = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (s(), o("div", Au, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Fu, a(t.message), 1)
    ]));
  }
}), gt = /* @__PURE__ */ Z(Vu, [["__scopeId", "data-v-ad8436c9"]]), Wu = { class: "error-state" }, ju = { class: "error-message" }, Gu = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (s(), o("div", Wu, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", ju, a(t.message), 1),
      t.retry ? (s(), T(te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => u.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), pt = /* @__PURE__ */ Z(Gu, [["__scopeId", "data-v-5397be48"]]), qu = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const i = n, { getWorkflows: w } = Oe();
    xs();
    const g = _([]), v = _(!1), m = _(null), r = _(""), c = _(!0), p = _(!1), h = _(!1), b = _(!1), $ = _(null), z = P(
      () => g.value.filter((oe) => oe.status === "broken")
    ), W = P(
      () => g.value.filter((oe) => oe.status === "new")
    ), f = P(
      () => g.value.filter((oe) => oe.status === "modified")
    ), I = P(
      () => g.value.filter((oe) => oe.status === "synced")
    ), B = P(() => {
      if (!r.value.trim()) return g.value;
      const oe = r.value.toLowerCase();
      return g.value.filter((O) => O.name.toLowerCase().includes(oe));
    }), C = P(
      () => z.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = P(
      () => W.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), j = P(
      () => f.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), V = P(
      () => I.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), H = P(
      () => p.value ? V.value : V.value.slice(0, 5)
    );
    async function L(oe = !1) {
      v.value = !0, m.value = null;
      try {
        g.value = await w(oe);
      } catch (O) {
        m.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        v.value = !1;
      }
    }
    u({ loadWorkflows: L });
    function S(oe) {
      $.value = oe, h.value = !0;
    }
    function E(oe) {
      $.value = oe, b.value = !0;
    }
    function N() {
      alert("Bulk resolution not yet implemented");
    }
    function U() {
      i("refresh");
    }
    async function ae() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function we(oe) {
      const O = [];
      return oe.missing_nodes > 0 && O.push(`${oe.missing_nodes} missing node${oe.missing_nodes > 1 ? "s" : ""}`), oe.missing_models > 0 && O.push(`${oe.missing_models} missing model${oe.missing_models > 1 ? "s" : ""}`), oe.models_with_category_mismatch && oe.models_with_category_mismatch > 0 && O.push(`${oe.models_with_category_mismatch} model${oe.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), oe.pending_downloads && oe.pending_downloads > 0 && O.push(`${oe.pending_downloads} pending download${oe.pending_downloads > 1 ? "s" : ""}`), O.length > 0 ? O.join(", ") : "Has issues";
    }
    function me(oe) {
      const O = oe.sync_state === "new" ? "New" : oe.sync_state === "modified" ? "Modified" : oe.sync_state === "synced" ? "Synced" : oe.sync_state;
      return oe.has_path_sync_issues && oe.models_needing_path_sync && oe.models_needing_path_sync > 0 ? `${oe.models_needing_path_sync} model path${oe.models_needing_path_sync > 1 ? "s" : ""} need${oe.models_needing_path_sync === 1 ? "s" : ""} sync` : O || "Unknown";
    }
    return Ue(L), (oe, O) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, { title: "WORKFLOWS" }, {
            actions: l(() => [
              z.value.length > 0 ? (s(), T(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: l(() => [...O[8] || (O[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(Mt, {
            modelValue: r.value,
            "onUpdate:modelValue": O[0] || (O[0] = (M) => r.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), T(gt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), T(pt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            C.value.length ? (s(), T(Be, {
              key: 0,
              title: "BROKEN",
              count: C.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(C.value, (M) => (s(), T(He, {
                  key: M.name,
                  status: "broken"
                }, {
                  icon: l(() => [...O[9] || (O[9] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(we(M)), 1)
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => E(M.name)
                    }, {
                      default: l(() => [...O[10] || (O[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => S(M.name)
                    }, {
                      default: l(() => [...O[11] || (O[11] = [
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
            x.value.length ? (s(), T(Be, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(x.value, (M) => (s(), T(He, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    y(a(M.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    y(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(me(M)), 1)
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => S(M.name)
                    }, {
                      default: l(() => [...O[12] || (O[12] = [
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
            j.value.length ? (s(), T(Be, {
              key: 2,
              title: "MODIFIED",
              count: j.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(j.value, (M) => (s(), T(He, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...O[13] || (O[13] = [
                    y("⚡", -1)
                  ])]),
                  title: l(() => [
                    y(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(me(M)), 1)
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => S(M.name)
                    }, {
                      default: l(() => [...O[14] || (O[14] = [
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
            V.value.length ? (s(), T(Be, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": c.value,
              onToggle: O[2] || (O[2] = (M) => c.value = M)
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(H.value, (M) => (s(), T(He, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    y(a(M.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    y(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(me(M)), 1)
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => S(M.name)
                    }, {
                      default: l(() => [...O[15] || (O[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && V.value.length > 5 ? (s(), T(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: O[1] || (O[1] = (M) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    y(" View all " + a(V.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            B.value.length ? d("", !0) : (s(), T(st, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && $.value ? (s(), T(Wl, {
        key: 0,
        "workflow-name": $.value,
        onClose: O[3] || (O[3] = (M) => h.value = !1),
        onResolve: O[4] || (O[4] = (M) => E($.value)),
        onRefresh: O[5] || (O[5] = (M) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && $.value ? (s(), T(_u, {
        key: 1,
        "workflow-name": $.value,
        onClose: O[6] || (O[6] = (M) => b.value = !1),
        onInstall: U,
        onRefresh: O[7] || (O[7] = (M) => i("refresh")),
        onRestart: ae
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Hu = /* @__PURE__ */ Z(qu, [["__scopeId", "data-v-591d06d5"]]), Ku = /* @__PURE__ */ X({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: ie(["summary-bar", t.variant])
    }, [
      Se(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ Z(Ku, [["__scopeId", "data-v-ccb7816e"]]), Yu = {
  key: 0,
  class: "model-details"
}, Ju = { class: "detail-section" }, Qu = { class: "detail-row" }, Xu = { class: "detail-value mono" }, Zu = { class: "detail-row" }, em = { class: "detail-value mono" }, tm = { class: "detail-row" }, sm = { class: "detail-value mono" }, om = { class: "detail-row" }, nm = { class: "detail-value" }, am = { class: "detail-row" }, lm = { class: "detail-value" }, im = { class: "detail-row" }, rm = { class: "detail-value" }, dm = { class: "detail-section" }, cm = { class: "section-header" }, um = {
  key: 0,
  class: "locations-list"
}, mm = { class: "location-path mono" }, vm = {
  key: 0,
  class: "location-modified"
}, fm = ["onClick"], gm = {
  key: 1,
  class: "empty-state"
}, pm = { class: "detail-section" }, hm = { class: "section-header" }, ym = {
  key: 0,
  class: "sources-list"
}, wm = { class: "source-type" }, km = ["href"], bm = ["disabled", "onClick"], _m = {
  key: 1,
  class: "empty-state"
}, $m = { class: "add-source-form" }, Cm = ["disabled"], xm = {
  key: 2,
  class: "source-error"
}, Sm = {
  key: 3,
  class: "source-success"
}, Im = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: i, addModelSource: w, removeModelSource: g, openFileLocation: v } = Oe(), m = _(null), r = _(!0), c = _(null), p = _(""), h = _(!1), b = _(null), $ = _(null), z = _(null), W = _(null);
    let f = null;
    function I(L, S = "success", E = 2e3) {
      f && clearTimeout(f), W.value = { message: L, type: S }, f = setTimeout(() => {
        W.value = null;
      }, E);
    }
    function B(L) {
      if (!L) return "Unknown";
      const S = 1024 * 1024 * 1024, E = 1024 * 1024;
      return L >= S ? `${(L / S).toFixed(1)} GB` : L >= E ? `${(L / E).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function C(L) {
      navigator.clipboard.writeText(L), I("Copied to clipboard!");
    }
    async function x(L) {
      try {
        await v(L), I("Opening file location...");
      } catch {
        I("Failed to open location", "error");
      }
    }
    async function j() {
      if (!(!p.value.trim() || !m.value)) {
        h.value = !0, $.value = null, z.value = null;
        try {
          await w(m.value.hash, p.value.trim()), z.value = "Source added successfully!", p.value = "", await H();
        } catch (L) {
          $.value = L instanceof Error ? L.message : "Failed to add source";
        } finally {
          h.value = !1;
        }
      }
    }
    async function V(L) {
      if (m.value) {
        b.value = L, $.value = null, z.value = null;
        try {
          await g(m.value.hash, L), I("Source removed"), await H();
        } catch (S) {
          $.value = S instanceof Error ? S.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function H() {
      r.value = !0, c.value = null;
      try {
        m.value = await i(n.identifier);
      } catch (L) {
        c.value = L instanceof Error ? L.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Ue(H), (L, S) => {
      var E;
      return s(), o(F, null, [
        k(Ke, {
          title: `Model Details: ${((E = m.value) == null ? void 0 : E.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: c.value,
          onClose: S[5] || (S[5] = (N) => L.$emit("close"))
        }, {
          body: l(() => {
            var N, U, ae, we;
            return [
              m.value ? (s(), o("div", Yu, [
                e("section", Ju, [
                  e("div", Qu, [
                    S[6] || (S[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Xu, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[0] || (S[0] = (me) => C(m.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Zu, [
                    S[7] || (S[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", em, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[1] || (S[1] = (me) => C(m.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", tm, [
                    S[8] || (S[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", sm, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[2] || (S[2] = (me) => C(m.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", om, [
                    S[9] || (S[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", nm, a(B(m.value.size)), 1)
                  ]),
                  e("div", am, [
                    S[10] || (S[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", lm, a(m.value.category), 1)
                  ]),
                  e("div", im, [
                    S[11] || (S[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", rm, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", dm, [
                  e("h4", cm, "Locations (" + a(((N = m.value.locations) == null ? void 0 : N.length) || 0) + ")", 1),
                  (U = m.value.locations) != null && U.length ? (s(), o("div", um, [
                    (s(!0), o(F, null, ee(m.value.locations, (me, oe) => (s(), o("div", {
                      key: oe,
                      class: "location-item"
                    }, [
                      e("span", mm, a(me.path), 1),
                      me.modified ? (s(), o("span", vm, "Modified: " + a(me.modified), 1)) : d("", !0),
                      me.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (O) => x(me.path)
                      }, " Open File Location ", 8, fm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", gm, "No locations found"))
                ]),
                e("section", pm, [
                  e("h4", hm, "Download Sources (" + a(((ae = m.value.sources) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (we = m.value.sources) != null && we.length ? (s(), o("div", ym, [
                    (s(!0), o(F, null, ee(m.value.sources, (me, oe) => (s(), o("div", {
                      key: oe,
                      class: "source-item"
                    }, [
                      e("span", wm, a(me.type) + ":", 1),
                      e("a", {
                        href: me.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(me.url), 9, km),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === me.url,
                        onClick: (O) => V(me.url)
                      }, a(b.value === me.url ? "..." : "×"), 9, bm)
                    ]))), 128))
                  ])) : (s(), o("div", _m, " No download sources configured ")),
                  e("div", $m, [
                    Ne(e("input", {
                      "onUpdate:modelValue": S[3] || (S[3] = (me) => p.value = me),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [St, p.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !p.value.trim() || h.value,
                      onClick: j
                    }, a(h.value ? "Adding..." : "Add Source"), 9, Cm)
                  ]),
                  $.value ? (s(), o("p", xm, a($.value), 1)) : d("", !0),
                  z.value ? (s(), o("p", Sm, a(z.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: S[4] || (S[4] = (N) => L.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), T(Ae, { to: "body" }, [
          W.value ? (s(), o("div", {
            key: 0,
            class: ie(["toast", W.value.type])
          }, a(W.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), cs = /* @__PURE__ */ Z(Im, [["__scopeId", "data-v-f15cbb56"]]), Em = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: i, getStatus: w } = Oe(), g = _([]), v = _([]), m = _("production"), r = _(!1), c = _(null), p = _(""), h = _(!1), b = _(null);
    function $() {
      h.value = !1, n("navigate", "model-index");
    }
    const z = P(
      () => g.value.reduce((H, L) => H + (L.size || 0), 0)
    ), W = P(() => {
      if (!p.value.trim()) return g.value;
      const H = p.value.toLowerCase();
      return g.value.filter((L) => L.filename.toLowerCase().includes(H));
    }), f = P(() => {
      if (!p.value.trim()) return v.value;
      const H = p.value.toLowerCase();
      return v.value.filter((L) => L.filename.toLowerCase().includes(H));
    }), I = P(() => {
      const H = {};
      for (const S of W.value) {
        const E = S.type || "other";
        H[E] || (H[E] = []), H[E].push(S);
      }
      const L = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(H).sort(([S], [E]) => {
        const N = L.indexOf(S), U = L.indexOf(E);
        return N >= 0 && U >= 0 ? N - U : N >= 0 ? -1 : U >= 0 ? 1 : S.localeCompare(E);
      }).map(([S, E]) => ({ type: S, models: E }));
    });
    function B(H) {
      if (!H) return "Unknown";
      const L = H / (1024 * 1024);
      return L >= 1024 ? `${(L / 1024).toFixed(1)} GB` : `${L.toFixed(0)} MB`;
    }
    function C(H) {
      b.value = H.hash || H.filename;
    }
    function x(H) {
      n("navigate", "model-index");
    }
    function j(H) {
      alert(`Download functionality not yet implemented for ${H}`);
    }
    async function V() {
      r.value = !0, c.value = null;
      try {
        const H = await i();
        g.value = H, v.value = [];
        const L = await w();
        m.value = L.environment || "production";
      } catch (H) {
        c.value = H instanceof Error ? H.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Ue(V), (H, L) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (S) => h.value = !0)
          })
        ]),
        search: l(() => [
          k(Mt, {
            modelValue: p.value,
            "onUpdate:modelValue": L[1] || (L[1] = (S) => p.value = S),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), T(gt, {
            key: 0,
            message: "Loading environment models..."
          })) : c.value ? (s(), T(pt, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            g.value.length ? (s(), T(Tt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(g.value.length) + " models • " + a(B(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(F, null, ee(I.value, (S) => (s(), T(Be, {
              key: S.type,
              title: S.type.toUpperCase(),
              count: S.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(S.models, (E) => (s(), T(He, {
                  key: E.hash || E.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...L[4] || (L[4] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(E.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(B(E.size)), 1)
                  ]),
                  details: l(() => [
                    k(Pe, {
                      label: "Used by:",
                      value: (E.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(Pe, {
                      label: "Path:",
                      value: E.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => C(E)
                    }, {
                      default: l(() => [...L[5] || (L[5] = [
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
            f.value.length ? (s(), T(Be, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(f.value, (S) => (s(), T(He, {
                  key: S.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...L[6] || (L[6] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(S.filename), 1)
                  ]),
                  subtitle: l(() => [...L[7] || (L[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var E;
                    return [
                      k(Pe, {
                        label: "Required by:",
                        value: ((E = S.workflow_names) == null ? void 0 : E.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (E) => j(S.filename)
                    }, {
                      default: l(() => [...L[8] || (L[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => x(S.filename)
                    }, {
                      default: l(() => [...L[9] || (L[9] = [
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
            !W.value.length && !f.value.length ? (s(), T(st, {
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
        onClose: L[2] || (L[2] = (S) => h.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            L[10] || (L[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            L[11] || (L[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          k(te, {
            variant: "primary",
            onClick: $
          }, {
            default: l(() => [...L[12] || (L[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), T(cs, {
        key: 0,
        identifier: b.value,
        onClose: L[3] || (L[3] = (S) => b.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Mm = /* @__PURE__ */ Z(Em, [["__scopeId", "data-v-cb4f12b3"]]), Tm = {
  key: 0,
  class: "indexing-progress"
}, Rm = { class: "progress-info" }, zm = { class: "progress-label" }, Lm = { class: "progress-count" }, Pm = { class: "progress-bar" }, Dm = { class: "modal-content" }, Nm = { class: "modal-header" }, Um = { class: "modal-body" }, Om = { class: "input-group" }, Bm = { class: "current-path" }, Am = { class: "input-group" }, Fm = { class: "modal-footer" }, Vm = { class: "modal-content" }, Wm = { class: "modal-header" }, jm = { class: "modal-body" }, Gm = { class: "input-group" }, qm = { class: "input-group" }, Hm = { class: "modal-footer" }, Km = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: w,
      setModelsDirectory: g
    } = Oe(), { addToQueue: v } = Vt(), m = u, r = _([]), c = _(!1), p = _(!1), h = _(null), b = _(""), $ = _(!1), z = _(null), W = _(!1), f = _(null), I = _(""), B = _(!1), C = _(!1), x = _(""), j = _(""), V = _(null), H = P(
      () => r.value.reduce((O, M) => O + (M.size || 0), 0)
    ), L = P(() => {
      if (!b.value.trim()) return r.value;
      const O = b.value.toLowerCase();
      return r.value.filter((M) => {
        const le = M, se = M.sha256 || le.sha256_hash || "";
        return M.filename.toLowerCase().includes(O) || se.toLowerCase().includes(O);
      });
    }), S = P(() => {
      const O = {};
      for (const le of L.value) {
        const se = le.type || "other";
        O[se] || (O[se] = []), O[se].push(le);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([le], [se]) => {
        const Me = M.indexOf(le), ke = M.indexOf(se);
        return Me >= 0 && ke >= 0 ? Me - ke : Me >= 0 ? -1 : ke >= 0 ? 1 : le.localeCompare(se);
      }).map(([le, se]) => ({ type: le, models: se }));
    });
    function E(O) {
      if (!O) return "Unknown";
      const M = 1024 * 1024 * 1024, le = 1024 * 1024;
      return O >= M ? `${(O / M).toFixed(1)} GB` : O >= le ? `${(O / le).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function N(O) {
      z.value = O.hash || O.filename;
    }
    async function U() {
      p.value = !0, h.value = null;
      try {
        const O = await i();
        await me(), O.changes > 0 && console.log(`Scan complete: ${O.changes} changes detected`);
      } catch (O) {
        h.value = O instanceof Error ? O.message : "Failed to scan models";
      } finally {
        p.value = !1;
      }
    }
    async function ae() {
      if (I.value.trim()) {
        B.value = !0, h.value = null;
        try {
          const O = await g(I.value.trim());
          f.value = O.path, W.value = !1, I.value = "", await me(), console.log(`Directory changed: ${O.models_indexed} models indexed`), m("refresh");
        } catch (O) {
          h.value = O instanceof Error ? O.message : "Failed to change directory";
        } finally {
          B.value = !1;
        }
      }
    }
    function we() {
      if (!x.value.trim() || !j.value.trim()) return;
      const O = j.value.split("/").pop() || "model.safetensors";
      v([{
        workflow: "__manual__",
        filename: O,
        url: x.value.trim(),
        targetPath: j.value.trim()
      }]), x.value = "", j.value = "", C.value = !1;
    }
    async function me() {
      c.value = !0, h.value = null;
      try {
        r.value = await n();
      } catch (O) {
        h.value = O instanceof Error ? O.message : "Failed to load workspace models";
      } finally {
        c.value = !1;
      }
    }
    async function oe() {
      try {
        const O = await w();
        f.value = O.path;
      } catch {
      }
    }
    return Ue(() => {
      me(), oe();
    }), (O, M) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: M[2] || (M[2] = (le) => $.value = !0)
          }, {
            actions: l(() => [
              k(te, {
                variant: "primary",
                size: "sm",
                disabled: p.value,
                onClick: U
              }, {
                default: l(() => [
                  y(a(p.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (le) => W.value = !0)
              }, {
                default: l(() => [...M[15] || (M[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: M[1] || (M[1] = (le) => C.value = !0)
              }, {
                default: l(() => [...M[16] || (M[16] = [
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
          V.value ? (s(), o("div", Tm, [
            e("div", Rm, [
              e("span", zm, a(V.value.message), 1),
              e("span", Lm, a(V.value.current) + "/" + a(V.value.total), 1)
            ]),
            e("div", Pm, [
              e("div", {
                class: "progress-fill",
                style: ft({ width: `${V.value.current / V.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          k(Mt, {
            modelValue: b.value,
            "onUpdate:modelValue": M[3] || (M[3] = (le) => b.value = le),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          c.value || V.value ? (s(), T(gt, {
            key: 0,
            message: V.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (s(), T(pt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: me
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            r.value.length ? (s(), T(Tt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(r.value.length) + " models • " + a(E(H.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(F, null, ee(S.value, (le) => (s(), T(Be, {
              key: le.type,
              title: le.type.toUpperCase(),
              count: le.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(le.models, (se) => (s(), T(He, {
                  key: se.sha256 || se.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...M[17] || (M[17] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(se.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(E(se.size)), 1)
                  ]),
                  details: l(() => [
                    k(Pe, {
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
                      onClick: (Me) => N(se)
                    }, {
                      default: l(() => [...M[18] || (M[18] = [
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
            L.value.length ? d("", !0) : (s(), T(st, {
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
        onClose: M[4] || (M[4] = (le) => $.value = !1)
      }, {
        content: l(() => [...M[19] || (M[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      z.value ? (s(), T(cs, {
        key: 0,
        identifier: z.value,
        onClose: M[5] || (M[5] = (le) => z.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), T(Ae, { to: "body" }, [
        W.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[9] || (M[9] = ze((le) => W.value = !1, ["self"]))
        }, [
          e("div", Dm, [
            e("div", Nm, [
              M[20] || (M[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[6] || (M[6] = (le) => W.value = !1)
              }, "✕")
            ]),
            e("div", Um, [
              e("div", Om, [
                M[21] || (M[21] = e("label", null, "Current Directory", -1)),
                e("code", Bm, a(f.value || "Not set"), 1)
              ]),
              e("div", Am, [
                M[22] || (M[22] = e("label", null, "New Directory Path", -1)),
                k(tt, {
                  modelValue: I.value,
                  "onUpdate:modelValue": M[7] || (M[7] = (le) => I.value = le),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              M[23] || (M[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Fm, [
              k(ce, {
                variant: "secondary",
                onClick: M[8] || (M[8] = (le) => W.value = !1)
              }, {
                default: l(() => [...M[24] || (M[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ce, {
                variant: "primary",
                disabled: !I.value.trim() || B.value,
                loading: B.value,
                onClick: ae
              }, {
                default: l(() => [
                  y(a(B.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), T(Ae, { to: "body" }, [
        C.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[14] || (M[14] = ze((le) => C.value = !1, ["self"]))
        }, [
          e("div", Vm, [
            e("div", Wm, [
              M[25] || (M[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[10] || (M[10] = (le) => C.value = !1)
              }, "✕")
            ]),
            e("div", jm, [
              e("div", Gm, [
                M[26] || (M[26] = e("label", null, "Download URL", -1)),
                k(tt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": M[11] || (M[11] = (le) => x.value = le),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", qm, [
                M[27] || (M[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(tt, {
                  modelValue: j.value,
                  "onUpdate:modelValue": M[12] || (M[12] = (le) => j.value = le),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              M[28] || (M[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Hm, [
              k(ce, {
                variant: "secondary",
                onClick: M[13] || (M[13] = (le) => C.value = !1)
              }, {
                default: l(() => [...M[29] || (M[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ce, {
                variant: "primary",
                disabled: !x.value.trim() || !j.value.trim(),
                onClick: we
              }, {
                default: l(() => [...M[30] || (M[30] = [
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
}), Ym = /* @__PURE__ */ Z(Km, [["__scopeId", "data-v-73b78d84"]]), Jm = { class: "node-details" }, Qm = { class: "status-row" }, Xm = {
  key: 0,
  class: "detail-row"
}, Zm = { class: "value" }, ev = { class: "detail-row" }, tv = { class: "value" }, sv = {
  key: 1,
  class: "detail-row"
}, ov = { class: "value mono" }, nv = {
  key: 2,
  class: "detail-row"
}, av = ["href"], lv = {
  key: 3,
  class: "detail-row"
}, iv = { class: "value mono small" }, rv = { class: "detail-row" }, dv = {
  key: 0,
  class: "value"
}, cv = {
  key: 1,
  class: "workflow-list"
}, uv = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, i = u, w = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), v = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, r) => (s(), T(Ke, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (c) => i("close"))
    }, {
      body: l(() => [
        e("div", Jm, [
          e("div", Qm, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ie(["status-badge", w.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", Xm, [
            r[3] || (r[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Zm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", ev, [
            r[4] || (r[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", tv, a(v.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", sv, [
            r[5] || (r[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", ov, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", nv, [
            r[7] || (r[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              y(a(t.node.repository) + " ", 1),
              r[6] || (r[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, av)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", lv, [
            r[8] || (r[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", iv, a(t.node.download_url), 1)
          ])) : d("", !0),
          r[10] || (r[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", rv, [
            r[9] || (r[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", dv, " Not used in any workflows ")) : (s(), o("div", cv, [
              (s(!0), o(F, null, ee(t.node.used_in_workflows, (c) => (s(), o("span", {
                key: c,
                class: "workflow-tag"
              }, a(c), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        k(ce, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (c) => i("close"))
        }, {
          default: l(() => [...r[11] || (r[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), mv = /* @__PURE__ */ Z(uv, [["__scopeId", "data-v-b342f626"]]), vv = { key: 0 }, fv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, gv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, pv = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: i, trackNodeAsDev: w, installNode: g, uninstallNode: v } = Oe(), m = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), r = _(!1), c = _(null), p = _(""), h = _(!1), b = _(null), $ = P(() => {
      if (!p.value.trim()) return m.value.nodes;
      const S = p.value.toLowerCase();
      return m.value.nodes.filter(
        (E) => {
          var N, U;
          return E.name.toLowerCase().includes(S) || ((N = E.description) == null ? void 0 : N.toLowerCase().includes(S)) || ((U = E.repository) == null ? void 0 : U.toLowerCase().includes(S));
        }
      );
    }), z = P(
      () => $.value.filter((S) => S.installed && S.tracked)
    ), W = P(
      () => $.value.filter((S) => !S.installed && S.tracked)
    ), f = P(
      () => $.value.filter((S) => S.installed && !S.tracked)
    );
    function I(S) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[S] || S;
    }
    function B(S) {
      return !S.used_in_workflows || S.used_in_workflows.length === 0 ? "Not used in any workflows" : S.used_in_workflows.length === 1 ? S.used_in_workflows[0] : `${S.used_in_workflows.length} workflows`;
    }
    function C(S) {
      b.value = S;
    }
    function x() {
      n("open-node-manager");
    }
    async function j(S) {
      if (confirm(`Track "${S}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          r.value = !0;
          const E = await w(S);
          E.status === "success" ? (alert(`Node "${S}" is now tracked as development!`), await L()) : alert(`Failed to track node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error tracking node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
    }
    async function V(S) {
      if (confirm(`Remove untracked node "${S}"?

This will delete the node directory from custom_nodes/.`))
        try {
          r.value = !0;
          const E = await v(S);
          E.status === "success" ? (alert(`Node "${S}" removed!`), await L()) : alert(`Failed to remove node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error removing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
    }
    async function H(S) {
      if (confirm(`Install node "${S}"?

This will download and install the node.`))
        try {
          r.value = !0;
          const E = await g(S);
          E.status === "success" ? (alert(`Node "${S}" installed successfully!`), await L()) : alert(`Failed to install node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error installing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
    }
    async function L() {
      r.value = !0, c.value = null;
      try {
        m.value = await i();
      } catch (S) {
        c.value = S instanceof Error ? S.message : "Failed to load nodes";
      } finally {
        r.value = !1;
      }
    }
    return Ue(L), (S, E) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (N) => h.value = !0)
          }, {
            actions: l(() => [
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: x
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
          k(Mt, {
            modelValue: p.value,
            "onUpdate:modelValue": E[1] || (E[1] = (N) => p.value = N),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), T(gt, {
            key: 0,
            message: "Loading nodes..."
          })) : c.value ? (s(), T(pt, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            m.value.total_count ? (s(), T(Tt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(a(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (s(), o(F, { key: 0 }, [
                  y(" • " + a(m.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                m.value.untracked_count ? (s(), o(F, { key: 1 }, [
                  y(" • " + a(m.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            f.value.length ? (s(), T(Be, {
              key: 1,
              title: "UNTRACKED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(f.value, (N) => (s(), T(He, {
                  key: N.name,
                  status: "warning"
                }, {
                  icon: l(() => [...E[6] || (E[6] = [
                    y("?", -1)
                  ])]),
                  title: l(() => [
                    y(a(N.name), 1)
                  ]),
                  subtitle: l(() => [...E[7] || (E[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    k(Pe, {
                      label: "Used by:",
                      value: B(N)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => C(N)
                    }, {
                      default: l(() => [...E[8] || (E[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => j(N.name)
                    }, {
                      default: l(() => [...E[9] || (E[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (U) => V(N.name)
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
            z.value.length ? (s(), T(Be, {
              key: 2,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(z.value, (N) => (s(), T(He, {
                  key: N.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    y(a(N.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    y(a(N.name), 1)
                  ]),
                  subtitle: l(() => [
                    N.version ? (s(), o("span", vv, a(N.source === "development" ? "" : "v") + a(N.version), 1)) : (s(), o("span", fv, "version unknown")),
                    e("span", gv, " • " + a(I(N.source)), 1)
                  ]),
                  details: l(() => [
                    k(Pe, {
                      label: "Used by:",
                      value: B(N)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => C(N)
                    }, {
                      default: l(() => [...E[11] || (E[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: x
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
            W.value.length ? (s(), T(Be, {
              key: 3,
              title: "MISSING",
              count: W.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(W.value, (N) => (s(), T(He, {
                  key: N.name,
                  status: "missing"
                }, {
                  icon: l(() => [...E[13] || (E[13] = [
                    y("!", -1)
                  ])]),
                  title: l(() => [
                    y(a(N.name), 1)
                  ]),
                  subtitle: l(() => [...E[14] || (E[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    k(Pe, {
                      label: "Required by:",
                      value: B(N)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => C(N)
                    }, {
                      default: l(() => [...E[15] || (E[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => H(N.name)
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
            !z.value.length && !W.value.length && !f.value.length ? (s(), T(st, {
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
        onClose: E[3] || (E[3] = (N) => h.value = !1)
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
            onClick: E[2] || (E[2] = (N) => h.value = !1)
          }, {
            default: l(() => [...E[18] || (E[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), T(mv, {
        key: 0,
        node: b.value,
        onClose: E[4] || (E[4] = (N) => b.value = null)
      }, null, 8, ["node"])) : d("", !0)
    ], 64));
  }
}), hv = /* @__PURE__ */ Z(pv, [["__scopeId", "data-v-4ac1465a"]]);
function Ms(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const yv = { class: "remote-url-display" }, wv = ["title"], kv = ["title"], bv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, _v = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, $v = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = _(!1), i = P(() => {
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
    return (g, v) => (s(), o("div", yv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, wv),
      e("button", {
        class: ie(["copy-btn", { copied: n.value }]),
        onClick: w,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", _v, [...v[1] || (v[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", bv, [...v[0] || (v[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, kv)
    ]));
  }
}), Cv = /* @__PURE__ */ Z($v, [["__scopeId", "data-v-7768a58d"]]), xv = { class: "remote-title" }, Sv = {
  key: 0,
  class: "default-badge"
}, Iv = {
  key: 1,
  class: "sync-badge"
}, Ev = {
  key: 0,
  class: "ahead"
}, Mv = {
  key: 1,
  class: "behind"
}, Tv = {
  key: 1,
  class: "synced"
}, Rv = ["href"], zv = {
  key: 1,
  class: "remote-url-text"
}, Lv = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const u = t, n = P(() => u.fetchingRemote === u.remote.name), i = P(() => u.remote.is_default), w = P(() => u.syncStatus && u.syncStatus.behind > 0), g = P(() => u.syncStatus && u.syncStatus.ahead > 0), v = P(() => u.remote.push_url !== u.remote.fetch_url), m = P(() => {
      const c = u.remote.fetch_url, p = c.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : c.startsWith("https://") || c.startsWith("http://") ? c.replace(/\.git$/, "") : null;
    }), r = P(() => u.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (c, p) => (s(), T(He, {
      status: i.value ? "synced" : void 0
    }, Ft({
      icon: l(() => [
        y(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", xv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Sv, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", Iv, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(F, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Ev, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Mv, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", Tv, "✓ synced"))
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
          onClick: p[0] || (p[0] = ze(() => {
          }, ["stop"]))
        }, a(r.value), 9, Rv)) : (s(), o("span", zv, a(r.value), 1))
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
        i.value ? d("", !0) : (s(), T(te, {
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
          t.remote.push_url !== t.remote.fetch_url ? (s(), T(Pe, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              k(Cv, {
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
}), Pv = /* @__PURE__ */ Z(Lv, [["__scopeId", "data-v-8310f3a8"]]), Dv = ["for"], Nv = {
  key: 0,
  class: "base-form-field-required"
}, Uv = { class: "base-form-field-input" }, Ov = {
  key: 1,
  class: "base-form-field-error"
}, Bv = {
  key: 2,
  class: "base-form-field-hint"
}, Av = /* @__PURE__ */ X({
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
    return (i, w) => (s(), o("div", {
      class: ie(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Nv, "*")) : d("", !0)
      ], 8, Dv)) : d("", !0),
      e("div", Uv, [
        Se(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Ov, a(t.error), 1)) : t.hint ? (s(), o("span", Bv, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), ts = /* @__PURE__ */ Z(Av, [["__scopeId", "data-v-9a1cf296"]]), Fv = { class: "remote-form" }, Vv = { class: "form-header" }, Wv = { class: "form-body" }, jv = {
  key: 0,
  class: "form-error"
}, Gv = { class: "form-actions" }, qv = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, i = u, w = _({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = _(!1), v = _(null);
    wt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      w.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = P(() => w.value.name.trim() !== "" && w.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!m.value || g.value)) {
        v.value = null, g.value = !0;
        try {
          i("submit", w.value);
        } catch (c) {
          v.value = c instanceof Error ? c.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (c, p) => (s(), o("div", Fv, [
      e("div", Vv, [
        k(Xe, null, {
          default: l(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Wv, [
        k(ts, {
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
        k(ts, {
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
        k(ts, { label: "Push URL (optional)" }, {
          default: l(() => [
            k(tt, {
              modelValue: w.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (h) => w.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (s(), o("div", jv, a(v.value), 1)) : d("", !0)
      ]),
      e("div", Gv, [
        k(te, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: g.value,
          onClick: r
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
}), Hv = /* @__PURE__ */ Z(qv, [["__scopeId", "data-v-56021b18"]]), Kv = { class: "conflict-summary-box" }, Yv = { class: "summary-header" }, Jv = { class: "summary-text" }, Qv = { key: 0 }, Xv = {
  key: 1,
  class: "all-resolved"
}, Zv = { class: "summary-progress" }, ef = { class: "progress-bar" }, tf = { class: "progress-text" }, sf = /* @__PURE__ */ X({
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
    return (i, w) => (s(), o("div", Kv, [
      e("div", Yv, [
        w[0] || (w[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Jv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Qv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Xv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Zv, [
        e("div", ef, [
          e("div", {
            class: "progress-fill",
            style: ft({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", tf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), of = /* @__PURE__ */ Z(sf, [["__scopeId", "data-v-4e9e6cc9"]]), nf = { class: "modal-header" }, af = { class: "modal-title" }, lf = { class: "modal-body" }, rf = {
  key: 0,
  class: "error-box"
}, df = {
  key: 0,
  class: "error-hint"
}, cf = {
  key: 1,
  class: "loading-state"
}, uf = { class: "commit-summary" }, mf = {
  key: 0,
  class: "changes-section"
}, vf = {
  key: 0,
  class: "change-group",
  open: ""
}, ff = { class: "change-count" }, gf = { class: "change-list" }, pf = {
  key: 0,
  class: "conflict-badge"
}, hf = {
  key: 1,
  class: "change-group"
}, yf = { class: "change-count" }, wf = { class: "change-list" }, kf = {
  key: 2,
  class: "change-group"
}, bf = { class: "change-count" }, _f = { class: "change-list" }, $f = {
  key: 2,
  class: "strategy-section"
}, Cf = { class: "radio-group" }, xf = { class: "radio-option" }, Sf = { class: "radio-option" }, If = { class: "radio-option" }, Ef = {
  key: 3,
  class: "up-to-date"
}, Mf = { class: "modal-actions" }, ys = "comfygit.pullModelStrategy", Tf = /* @__PURE__ */ X({
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
    const n = t, i = u, w = _(localStorage.getItem(ys) || "skip");
    wt(w, (f) => {
      localStorage.setItem(ys, f);
    });
    const g = P(() => {
      var f;
      return ((f = n.error) == null ? void 0 : f.toLowerCase().includes("unrelated histories")) ?? !1;
    }), v = P(() => {
      if (!n.preview) return 0;
      const f = n.preview.changes.workflows;
      return f.added.length + f.modified.length + f.deleted.length;
    }), m = P(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = P(() => {
      var f;
      return v.value > 0 || m.value > 0 || (((f = n.preview) == null ? void 0 : f.changes.models.count) || 0) > 0;
    }), c = P(() => n.preview && Ms(n.preview) ? n.preview : null), p = P(() => {
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
      const I = f.replace(/\.json$/, "");
      return c.value.workflow_conflicts.some((B) => B.name === I);
    }
    function W(f) {
      const I = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: w.value, force: f, resolutions: I });
    }
    return (f, I) => {
      var B, C;
      return s(), T(Ae, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[11] || (I[11] = (x) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: I[10] || (I[10] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", nf, [
              e("h3", af, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (x) => f.$emit("close"))
              }, "✕")
            ]),
            e("div", lf, [
              t.error ? (s(), o("div", rf, [
                I[13] || (I[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  I[12] || (I[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", df, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", cf, [...I[14] || (I[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (B = t.preview) != null && B.has_uncommitted_changes ? (s(), o(F, { key: 2 }, [
                I[15] || (I[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                I[16] || (I[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", uf, [
                  I[17] || (I[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                r.value ? (s(), o("div", mf, [
                  I[21] || (I[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  v.value > 0 ? (s(), o("details", vf, [
                    e("summary", null, [
                      I[18] || (I[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", ff, a(v.value) + " changes", 1)
                    ]),
                    e("div", gf, [
                      (s(!0), o(F, null, ee(t.preview.changes.workflows.added, (x) => (s(), o("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128)),
                      (s(!0), o(F, null, ee(t.preview.changes.workflows.modified, (x) => (s(), o("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(x) + " ", 1),
                        z(x) ? (s(), o("span", pf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(F, null, ee(t.preview.changes.workflows.deleted, (x) => (s(), o("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  m.value > 0 ? (s(), o("details", hf, [
                    e("summary", null, [
                      I[19] || (I[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", yf, a(m.value) + " to install", 1)
                    ]),
                    e("div", wf, [
                      (s(!0), o(F, null, ee(t.preview.changes.nodes.to_install, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", kf, [
                    e("summary", null, [
                      I[20] || (I[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", bf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", _f, [
                      (s(!0), o(F, null, ee(t.preview.changes.models.referenced, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item"
                      }, a(x), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                c.value ? (s(), T(of, {
                  key: 1,
                  "conflict-count": p.value,
                  "resolved-count": h.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", $f, [
                  I[26] || (I[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Cf, [
                    e("label", xf, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[1] || (I[1] = (x) => w.value = x),
                        value: "all"
                      }, null, 512), [
                        [qt, w.value]
                      ]),
                      I[22] || (I[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Sf, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[2] || (I[2] = (x) => w.value = x),
                        value: "required"
                      }, null, 512), [
                        [qt, w.value]
                      ]),
                      I[23] || (I[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", If, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[3] || (I[3] = (x) => w.value = x),
                        value: "skip"
                      }, null, 512), [
                        [qt, w.value]
                      ]),
                      I[24] || (I[24] = e("span", null, "Skip model downloads", -1)),
                      I[25] || (I[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  I[27] || (I[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Ef, [
                  I[28] || (I[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Mf, [
              k(te, {
                variant: "secondary",
                onClick: I[4] || (I[4] = (x) => f.$emit("close"))
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(F, { key: 0 }, [
                k(te, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: I[5] || (I[5] = (x) => W(!1))
                }, {
                  default: l(() => [...I[30] || (I[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(te, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: I[6] || (I[6] = (x) => W(!0))
                }, {
                  default: l(() => [...I[31] || (I[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (C = t.preview) != null && C.has_uncommitted_changes ? (s(), T(te, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: I[7] || (I[7] = (x) => W(!0))
              }, {
                default: l(() => [...I[32] || (I[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(F, { key: 2 }, [
                c.value && !b.value ? (s(), T(te, {
                  key: 0,
                  variant: "primary",
                  onClick: I[8] || (I[8] = (x) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    y(" Resolve Conflicts (" + a(h.value) + "/" + a(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), T(te, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !$.value,
                  onClick: I[9] || (I[9] = (x) => W(!1))
                }, {
                  default: l(() => [...I[33] || (I[33] = [
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
}), Rf = /* @__PURE__ */ Z(Tf, [["__scopeId", "data-v-300c7b2f"]]), zf = { class: "modal-header" }, Lf = { class: "modal-title" }, Pf = { class: "modal-body" }, Df = {
  key: 0,
  class: "loading-state"
}, Nf = {
  key: 1,
  class: "warning-box"
}, Uf = {
  key: 0,
  class: "commits-section"
}, Of = { class: "commit-list" }, Bf = { class: "commit-hash" }, Af = { class: "commit-message" }, Ff = { class: "commit-date" }, Vf = { class: "force-option" }, Wf = { class: "checkbox-option" }, jf = { class: "commit-summary" }, Gf = {
  key: 0,
  class: "commits-section"
}, qf = { class: "commit-list" }, Hf = { class: "commit-hash" }, Kf = { class: "commit-message" }, Yf = { class: "commit-date" }, Jf = {
  key: 1,
  class: "up-to-date"
}, Qf = { class: "modal-actions" }, Xf = /* @__PURE__ */ X({
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
    const n = u, i = _(!1);
    function w(g) {
      n("push", { force: g });
    }
    return (g, v) => {
      var m, r, c;
      return s(), T(Ae, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: v[7] || (v[7] = (p) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: v[6] || (v[6] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", zf, [
              e("h3", Lf, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: v[0] || (v[0] = (p) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Pf, [
              t.loading ? (s(), o("div", Df, [...v[8] || (v[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (s(), o("div", Nf, [...v[9] || (v[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (r = t.preview) != null && r.remote_has_new_commits ? (s(), o(F, { key: 2 }, [
                v[13] || (v[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Uf, [
                  v[10] || (v[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Of, [
                    (s(!0), o(F, null, ee(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Bf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Af, a(p.message), 1),
                      e("span", Ff, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", Vf, [
                  e("label", Wf, [
                    Ne(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": v[1] || (v[1] = (p) => i.value = p)
                    }, null, 512), [
                      [Yt, i.value]
                    ]),
                    v[11] || (v[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  v[12] || (v[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", jf, [
                  v[14] || (v[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Gf, [
                  v[15] || (v[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", qf, [
                    (s(!0), o(F, null, ee(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Hf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Kf, a(p.message), 1),
                      e("span", Yf, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Jf, [
                  v[16] || (v[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", Qf, [
              k(te, {
                variant: "secondary",
                onClick: v[2] || (v[2] = (p) => g.$emit("close"))
              }, {
                default: l(() => [...v[17] || (v[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (c = t.preview) != null && c.remote_has_new_commits ? (s(), o(F, { key: 0 }, [
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
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: v[4] || (v[4] = (p) => w(!0))
                }, {
                  default: l(() => [...v[19] || (v[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), T(te, {
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
}), Zf = /* @__PURE__ */ Z(Xf, [["__scopeId", "data-v-bc6ded53"]]), eg = { class: "resolution-choice-group" }, tg = ["disabled"], sg = ["disabled"], og = /* @__PURE__ */ X({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("div", eg, [
      e("button", {
        class: ie(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => u.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, tg),
      e("button", {
        class: ie(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => u.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, sg)
    ]));
  }
}), ng = /* @__PURE__ */ Z(og, [["__scopeId", "data-v-985715ed"]]), ag = { class: "conflict-header" }, lg = { class: "conflict-info" }, ig = { class: "workflow-name" }, rg = { class: "conflict-description" }, dg = {
  key: 0,
  class: "resolved-badge"
}, cg = { class: "resolved-text" }, ug = { class: "conflict-hashes" }, mg = { class: "hash-item" }, vg = { class: "hash-item" }, fg = { class: "conflict-actions" }, gg = /* @__PURE__ */ X({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: u }) {
    const n = t, i = u, w = _(n.resolution);
    wt(() => n.resolution, (r) => {
      w.value = r;
    }), wt(w, (r) => {
      r && i("resolve", r);
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
    return (r, c) => {
      var p, h;
      return s(), o("div", {
        class: ie(["conflict-item", { resolved: g.value }])
      }, [
        e("div", ag, [
          c[2] || (c[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", lg, [
            e("code", ig, a(t.conflict.name) + ".json", 1),
            e("div", rg, a(v.value), 1)
          ]),
          g.value ? (s(), o("div", dg, [
            c[1] || (c[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", cg, a(m.value), 1)
          ])) : d("", !0)
        ]),
        e("div", ug, [
          e("span", mg, [
            c[3] || (c[3] = y("Your: ", -1)),
            e("code", null, a(((p = t.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", vg, [
            c[4] || (c[4] = y("Theirs: ", -1)),
            e("code", null, a(((h = t.conflict.target_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", fg, [
          k(ng, {
            modelValue: w.value,
            "onUpdate:modelValue": c[0] || (c[0] = (b) => w.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), pg = /* @__PURE__ */ Z(gg, [["__scopeId", "data-v-506d3bbf"]]), hg = { class: "resolution-content" }, yg = {
  key: 0,
  class: "error-box"
}, wg = { class: "resolution-header" }, kg = { class: "header-stats" }, bg = { class: "stat" }, _g = { class: "stat-value" }, $g = { class: "stat resolved" }, Cg = { class: "stat-value" }, xg = {
  key: 0,
  class: "stat pending"
}, Sg = { class: "stat-value" }, Ig = { class: "conflicts-list" }, Eg = {
  key: 1,
  class: "all-resolved-message"
}, Mg = /* @__PURE__ */ X({
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
    const n = t, i = u, w = P(() => n.resolutions.size), g = P(() => n.workflowConflicts.length - w.value), v = P(() => w.value === n.workflowConflicts.length), m = P(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(b) {
      const $ = n.resolutions.get(b);
      return ($ == null ? void 0 : $.resolution) ?? null;
    }
    function c(b, $) {
      i("resolve", b, $);
    }
    function p() {
      i("close");
    }
    function h() {
      i("apply");
    }
    return (b, $) => (s(), T(Ke, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: l(() => [
        e("div", hg, [
          t.error ? (s(), o("div", yg, [
            $[1] || ($[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              $[0] || ($[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", wg, [
            e("div", kg, [
              e("div", bg, [
                e("span", _g, a(t.workflowConflicts.length), 1),
                $[2] || ($[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", $g, [
                e("span", Cg, a(w.value), 1),
                $[3] || ($[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", xg, [
                e("span", Sg, a(g.value), 1),
                $[4] || ($[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            $[5] || ($[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Ig, [
            (s(!0), o(F, null, ee(t.workflowConflicts, (z) => (s(), T(pg, {
              key: z.name,
              conflict: z,
              resolution: r(z.name),
              onResolve: (W) => c(z.name, W)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          v.value ? (s(), o("div", Eg, [
            $[6] || ($[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ce, {
          variant: "secondary",
          onClick: p
        }, {
          default: l(() => [...$[7] || ($[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $[8] || ($[8] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ce, {
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
}), Tg = /* @__PURE__ */ Z(Mg, [["__scopeId", "data-v-c58d150d"]]), Rg = { class: "node-conflict-item" }, zg = { class: "node-header" }, Lg = { class: "node-name" }, Pg = { class: "node-id" }, Dg = { class: "version-comparison" }, Ng = { class: "version yours" }, Ug = { class: "version theirs" }, Og = { class: "chosen-version" }, Bg = { class: "chosen" }, Ag = { class: "chosen-reason" }, Fg = { class: "affected-workflows" }, Vg = { class: "wf-source" }, Wg = { class: "wf-version" }, jg = /* @__PURE__ */ X({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (u, n) => (s(), o("div", Rg, [
      e("div", zg, [
        e("code", Lg, a(t.conflict.node_name), 1),
        e("span", Pg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Dg, [
        e("div", Ng, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Ug, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Og, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Bg, a(t.conflict.chosen_version), 1),
        e("span", Ag, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Fg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(F, null, ee(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Vg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Wg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Gg = /* @__PURE__ */ Z(jg, [["__scopeId", "data-v-8b626725"]]), qg = { class: "validation-content" }, Hg = {
  key: 0,
  class: "compatible-message"
}, Kg = { class: "conflicts-list" }, Yg = {
  key: 2,
  class: "warnings-section"
}, Jg = /* @__PURE__ */ X({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: u }) {
    const n = t, i = u, w = P(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, v) => (s(), T(Ke, {
      title: "Compatibility Check",
      size: "lg",
      onClose: v[3] || (v[3] = (m) => i("cancel"))
    }, {
      body: l(() => [
        e("div", qg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Hg, [
            v[5] || (v[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              v[4] || (v[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(F, { key: 1 }, [
            v[6] || (v[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Kg, [
              (s(!0), o(F, null, ee(t.validation.node_conflicts, (m) => (s(), T(Gg, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            v[7] || (v[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Yg, [
            v[8] || (v[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(F, null, ee(t.validation.warnings, (m, r) => (s(), o("li", { key: r }, a(m), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ce, {
          variant: "secondary",
          onClick: v[0] || (v[0] = (m) => i("cancel"))
        }, {
          default: l(() => [...v[9] || (v[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v[11] || (v[11] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ce, {
          variant: "secondary",
          onClick: v[1] || (v[1] = (m) => i("goBack"))
        }, {
          default: l(() => [...v[10] || (v[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(ce, {
          variant: "primary",
          loading: t.executing,
          onClick: v[2] || (v[2] = (m) => i("proceed"))
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
}), Qg = /* @__PURE__ */ Z(Jg, [["__scopeId", "data-v-fefd26ed"]]), Xg = { key: 0 }, Zg = /* @__PURE__ */ X({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: u }) {
    const n = u, {
      getRemotes: i,
      addRemote: w,
      removeRemote: g,
      updateRemoteUrl: v,
      fetchRemote: m,
      getRemoteSyncStatus: r,
      getPullPreview: c,
      pullFromRemote: p,
      getPushPreview: h,
      pushToRemote: b,
      validateMerge: $
    } = Oe(), z = _([]), W = _(null), f = _({}), I = _(!1), B = _(null), C = _(""), x = _(!1), j = _(null), V = _(!1), H = _("add"), L = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), S = P(() => {
      if (!C.value.trim()) return z.value;
      const A = C.value.toLowerCase();
      return z.value.filter(
        (Q) => Q.name.toLowerCase().includes(A) || Q.fetch_url.toLowerCase().includes(A) || Q.push_url.toLowerCase().includes(A)
      );
    });
    async function E() {
      I.value = !0, B.value = null;
      try {
        const A = await i();
        z.value = A.remotes, W.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (Q) => {
            const pe = await r(Q.name);
            pe && (f.value[Q.name] = pe);
          })
        );
      } catch (A) {
        B.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        I.value = !1;
      }
    }
    function N() {
      H.value = "add", L.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function U(A) {
      const Q = z.value.find((pe) => pe.name === A);
      Q && (H.value = "edit", L.value = {
        name: Q.name,
        fetchUrl: Q.fetch_url,
        pushUrl: Q.push_url
      }, V.value = !0);
    }
    async function ae(A) {
      try {
        H.value === "add" ? await w(A.name, A.fetchUrl) : await v(A.name, A.fetchUrl, A.pushUrl || void 0), V.value = !1, await E();
      } catch (Q) {
        B.value = Q instanceof Error ? Q.message : "Operation failed";
      }
    }
    function we() {
      V.value = !1, L.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function me(A) {
      j.value = A;
      try {
        await m(A);
        const Q = await r(A);
        Q && (f.value[A] = Q), n("toast", `✓ Fetched from ${A}`, "success");
      } catch (Q) {
        n("toast", Q instanceof Error ? Q.message : "Fetch failed", "error");
      } finally {
        j.value = null;
      }
    }
    async function oe(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await g(A), await E();
        } catch (Q) {
          B.value = Q instanceof Error ? Q.message : "Failed to remove remote";
        }
    }
    function O() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const M = _("idle"), le = P(() => M.value === "pull_preview"), se = P(
      () => M.value === "resolving" || M.value === "validating"
    ), Me = P(
      () => M.value === "validation_review" || M.value === "executing"
    ), ke = _(!1), de = _(null), ne = _(!1), Y = _(null), ue = _(!1), _e = _(null), Le = _(null), ve = _(/* @__PURE__ */ new Map()), J = _(null), fe = _(null), $e = P(() => _e.value && Ms(_e.value) ? _e.value : null);
    async function Ee(A) {
      Y.value = A, M.value = "pull_preview", ue.value = !0, _e.value = null, Le.value = null;
      try {
        _e.value = await c(A);
      } catch (Q) {
        Le.value = Q instanceof Error ? Q.message : "Failed to load pull preview";
      } finally {
        ue.value = !1;
      }
    }
    function ye() {
      M.value = "idle", _e.value = null, Le.value = null, Y.value = null;
    }
    async function it(A) {
      if (!Y.value) return;
      M.value = "executing", Le.value = null;
      const Q = Y.value;
      try {
        const pe = await p(Q, A);
        if (pe.rolled_back) {
          Le.value = `Pull failed and was rolled back: ${pe.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        dt(), M.value = "idle", n("toast", `✓ Pulled from ${Q}`, "success"), await E();
      } catch (pe) {
        Le.value = pe instanceof Error ? pe.message : "Pull failed", M.value = "pull_preview";
      }
    }
    function be() {
      $e.value && (M.value = "resolving", fe.value = null);
    }
    function Fe(A, Q) {
      ve.value.set(A, { name: A, resolution: Q });
    }
    function kt() {
      M.value = "pull_preview";
    }
    async function rt() {
      M.value = "validating", fe.value = null;
      try {
        const A = Array.from(ve.value.values());
        J.value = await $(Y.value, A), M.value = "validation_review";
      } catch (A) {
        fe.value = A instanceof Error ? A.message : "Validation failed", M.value = "resolving";
      }
    }
    async function De() {
      M.value = "executing";
      const A = Y.value;
      try {
        const Q = Array.from(ve.value.values()), pe = await p(A, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Q
        });
        if (pe.rolled_back) {
          Le.value = `Pull failed and was rolled back: ${pe.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        dt(), M.value = "idle", n("toast", `✓ Pulled from ${A}`, "success"), await E();
      } catch (Q) {
        Le.value = Q instanceof Error ? Q.message : "Pull failed", M.value = "validation_review";
      }
    }
    function bt() {
      M.value = "resolving";
    }
    function ht() {
      dt(), M.value = "idle";
    }
    function dt() {
      ve.value.clear(), J.value = null, fe.value = null, Le.value = null, _e.value = null, Y.value = null;
    }
    async function _t(A) {
      Y.value = A, ke.value = !0, ue.value = !0, de.value = null;
      try {
        de.value = await h(A);
      } catch (Q) {
        B.value = Q instanceof Error ? Q.message : "Failed to load push preview";
      } finally {
        ue.value = !1;
      }
    }
    function ct() {
      ke.value = !1, de.value = null, Y.value = null;
    }
    async function K(A) {
      if (!Y.value) return;
      ne.value = !0;
      const Q = Y.value;
      try {
        await b(Q, A), ct(), n("toast", `✓ Pushed to ${Q}`, "success"), await E();
      } catch (pe) {
        n("toast", pe instanceof Error ? pe.message : "Push failed", "error");
      } finally {
        ne.value = !1;
      }
    }
    function D() {
      const A = Y.value;
      ct(), A && Ee(A);
    }
    return Ue(E), (A, Q) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (pe) => x.value = !0)
          }, {
            actions: l(() => [
              V.value ? d("", !0) : (s(), T(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: N
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
          V.value ? d("", !0) : (s(), T(Mt, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (pe) => C.value = pe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          I.value ? (s(), T(gt, {
            key: 0,
            message: "Loading remotes..."
          })) : B.value ? (s(), T(pt, {
            key: 1,
            message: B.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            V.value ? (s(), T(Hv, {
              key: 0,
              mode: H.value,
              "remote-name": L.value.name,
              "fetch-url": L.value.fetchUrl,
              "push-url": L.value.pushUrl,
              onSubmit: ae,
              onCancel: we
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            z.value.length && !V.value ? (s(), T(Tt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(z.value.length) + " remote" + a(z.value.length !== 1 ? "s" : "") + " ", 1),
                W.value ? (s(), o("span", Xg, " • Tracking: " + a(W.value.remote) + "/" + a(W.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            S.value.length && !V.value ? (s(), T(Be, {
              key: 2,
              title: "REMOTES",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee(S.value, (pe) => (s(), T(Pv, {
                  key: pe.name,
                  remote: pe,
                  "sync-status": f.value[pe.name],
                  "fetching-remote": j.value,
                  onFetch: me,
                  onEdit: U,
                  onRemove: oe,
                  onPull: Ee,
                  onPush: _t
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !S.value.length && !V.value ? (s(), T(st, {
              key: 3,
              icon: "🌐",
              message: C.value ? `No remotes match '${C.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                k(te, {
                  variant: "primary",
                  onClick: N
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
        show: x.value,
        title: "About Git Remotes",
        onClose: Q[2] || (Q[2] = (pe) => x.value = !1)
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
            onClick: O
          }, {
            default: l(() => [...Q[6] || (Q[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(Rf, {
        show: le.value,
        "remote-name": Y.value || "",
        preview: _e.value,
        loading: ue.value,
        pulling: M.value === "executing",
        error: Le.value,
        "conflict-resolutions": ve.value,
        onClose: ye,
        onPull: it,
        onOpenConflictResolution: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(Zf, {
        show: ke.value,
        "remote-name": Y.value || "",
        preview: de.value,
        loading: ue.value,
        pushing: ne.value,
        onClose: ct,
        onPush: K,
        onPullFirst: D
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      se.value && $e.value ? (s(), T(Tg, {
        key: 0,
        "workflow-conflicts": $e.value.workflow_conflicts,
        resolutions: ve.value,
        "operation-type": "pull",
        validating: M.value === "validating",
        error: fe.value,
        onClose: kt,
        onResolve: Fe,
        onApply: rt
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Me.value && J.value ? (s(), T(Qg, {
        key: 1,
        validation: J.value,
        "operation-type": "pull",
        executing: M.value === "executing",
        onProceed: De,
        onGoBack: bt,
        onCancel: ht
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), ep = /* @__PURE__ */ Z(Zg, [["__scopeId", "data-v-9ae3b76d"]]), tp = { class: "setting-info" }, sp = { class: "setting-label" }, op = {
  key: 0,
  class: "required-marker"
}, np = {
  key: 0,
  class: "setting-description"
}, ap = { class: "setting-control" }, lp = /* @__PURE__ */ X({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: ie(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", tp, [
        e("div", sp, [
          y(a(t.label) + " ", 1),
          t.required ? (s(), o("span", op, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", np, a(t.description), 1)) : d("", !0)
      ]),
      e("div", ap, [
        Se(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Pt = /* @__PURE__ */ Z(lp, [["__scopeId", "data-v-cb5d236c"]]), ip = { class: "toggle" }, rp = ["checked", "disabled"], dp = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", ip, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => u.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, rp),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ss = /* @__PURE__ */ Z(dp, [["__scopeId", "data-v-71c0f550"]]), cp = { class: "settings-section" }, up = { class: "path-setting" }, mp = { class: "path-value" }, vp = { class: "path-setting" }, fp = { class: "path-value" }, gp = { class: "settings-section" }, pp = { class: "settings-section" }, hp = { class: "settings-section" }, yp = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Oe(), i = _(!1), w = _(null), g = _(null), v = _(null), m = _(null), r = _(""), c = _(""), p = _(!0), h = _(!0), b = _(!1), $ = P(() => m.value ? r.value !== (m.value.civitai_api_key || "") : !1);
    async function z() {
      i.value = !0, w.value = null;
      try {
        v.value = await u(), m.value = { ...v.value }, r.value = v.value.civitai_api_key || "", c.value = v.value.huggingface_token || "", p.value = v.value.auto_sync_models, h.value = v.value.confirm_destructive;
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        b.value = B === "true";
      } catch (B) {
        w.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function W() {
      var B;
      g.value = null;
      try {
        const C = {};
        r.value !== (((B = m.value) == null ? void 0 : B.civitai_api_key) || "") && (C.civitai_api_key = r.value || null), await n(C), await z(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (C) {
        g.value = {
          type: "error",
          message: C instanceof Error ? C.message : "Failed to save settings"
        };
      }
    }
    function f() {
      m.value && (r.value = m.value.civitai_api_key || "", c.value = m.value.huggingface_token || "", p.value = m.value.auto_sync_models, h.value = m.value.confirm_destructive, g.value = null);
    }
    function I(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return Ue(z), (B, C) => (s(), T(je, null, {
      header: l(() => [
        k(Ge, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => [
            k(te, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: W
            }, {
              default: l(() => [...C[5] || (C[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (s(), T(te, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: f
            }, {
              default: l(() => [...C[6] || (C[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), T(gt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : w.value ? (s(), T(pt, {
          key: 1,
          message: w.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
          k(Be, { title: "WORKSPACE PATHS" }, {
            default: l(() => {
              var x, j;
              return [
                e("div", cp, [
                  e("div", up, [
                    C[7] || (C[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    C[8] || (C[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", mp, a(((x = v.value) == null ? void 0 : x.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", vp, [
                    C[9] || (C[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    C[10] || (C[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", fp, a(((j = v.value) == null ? void 0 : j.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          k(Be, { title: "API CREDENTIALS" }, {
            default: l(() => [
              e("div", gp, [
                k(Pt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: l(() => [
                    k(Jt, {
                      modelValue: r.value,
                      "onUpdate:modelValue": C[0] || (C[0] = (x) => r.value = x),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Pt, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(Jt, {
                      modelValue: c.value,
                      "onUpdate:modelValue": C[1] || (C[1] = (x) => c.value = x),
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
              e("div", pp, [
                k(Pt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: l(() => [
                    k(ss, {
                      modelValue: b.value,
                      "onUpdate:modelValue": [
                        C[2] || (C[2] = (x) => b.value = x),
                        I
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
              e("div", hp, [
                k(Pt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(ss, {
                      modelValue: p.value,
                      "onUpdate:modelValue": C[3] || (C[3] = (x) => p.value = x),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Pt, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(ss, {
                      modelValue: h.value,
                      "onUpdate:modelValue": C[4] || (C[4] = (x) => h.value = x),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), T(Tt, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: l(() => [
              e("span", {
                style: ft({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), wp = /* @__PURE__ */ Z(yp, [["__scopeId", "data-v-7861bd35"]]), kp = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Oe(), n = _([]), i = _(!1), w = _(null), g = _(!1), v = _(null), m = P(() => n.value.length === 0 ? [] : n.value.map((c) => ({
      text: `${c.timestamp} - ${c.name} - ${c.level} - ${c.func}:${c.line} - ${c.message}`,
      level: c.level
    })));
    async function r() {
      i.value = !0, w.value = null;
      try {
        n.value = await u(void 0, 500);
      } catch (c) {
        w.value = c instanceof Error ? c.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var c;
          (c = v.value) != null && c.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ue(r), (c, p) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: p[0] || (p[0] = (h) => g.value = !0)
          }, {
            actions: l(() => [
              k(te, {
                variant: "secondary",
                size: "sm",
                onClick: r,
                disabled: i.value
              }, {
                default: l(() => [
                  y(a(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          i.value ? (s(), T(gt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : w.value ? (s(), T(pt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: r
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            n.value.length === 0 ? (s(), T(st, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (s(!0), o(F, null, ee(m.value, (h, b) => (s(), o("div", {
                key: b,
                class: ie(`log-line log-level-${h.level.toLowerCase()}`)
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
}), bp = /* @__PURE__ */ Z(kp, [["__scopeId", "data-v-39f6a756"]]), _p = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Oe(), i = _([]), w = _(!1), g = _(null), v = _(!1), m = _("production"), r = _(null), c = P(() => i.value.length === 0 ? [] : i.value.map((h) => ({
      text: `${h.timestamp} - ${h.name} - ${h.level} - ${h.func}:${h.line} - ${h.message}`,
      level: h.level
    })));
    async function p() {
      w.value = !0, g.value = null;
      try {
        i.value = await u(void 0, 500);
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
          (h = r.value) != null && h.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ue(p), (h, b) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
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
          w.value ? (s(), T(gt, {
            key: 0,
            message: "Loading environment logs..."
          })) : g.value ? (s(), T(pt, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            i.value.length === 0 ? (s(), T(st, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(F, null, ee(c.value, ($, z) => (s(), o("div", {
                key: z,
                class: ie(`log-line log-level-${$.level.toLowerCase()}`)
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
}), $p = /* @__PURE__ */ Z(_p, [["__scopeId", "data-v-4f1e6f72"]]), Cp = { class: "env-title" }, xp = {
  key: 0,
  class: "current-badge"
}, Sp = {
  key: 0,
  class: "branch-info"
}, Ip = /* @__PURE__ */ X({
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
    return (u, n) => (s(), T(He, {
      status: t.isCurrent ? "synced" : void 0
    }, Ft({
      icon: l(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", Cp, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", xp, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", Sp, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: l(() => [
        Se(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          k(Pe, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          k(Pe, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          k(Pe, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), T(Pe, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Ep = /* @__PURE__ */ Z(Ip, [["__scopeId", "data-v-9231917a"]]), Mp = { class: "env-details" }, Tp = { class: "status-row" }, Rp = {
  key: 0,
  class: "detail-row"
}, zp = { class: "value mono" }, Lp = {
  key: 1,
  class: "detail-row"
}, Pp = { class: "value mono small" }, Dp = { class: "detail-row" }, Np = { class: "value" }, Up = { class: "detail-row" }, Op = { class: "value" }, Bp = { class: "detail-row" }, Ap = { class: "value" }, Fp = {
  key: 2,
  class: "section-divider"
}, Vp = {
  key: 3,
  class: "detail-row"
}, Wp = { class: "value" }, jp = {
  key: 4,
  class: "detail-row"
}, Gp = { class: "value" }, qp = { class: "footer-actions" }, Hp = /* @__PURE__ */ X({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: u }) {
    const n = u;
    function i(w) {
      if (!w) return "Unknown";
      try {
        const g = new Date(w), m = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), r = Math.floor(m / 6e4), c = Math.floor(m / 36e5), p = Math.floor(m / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : c < 24 ? `${c} ${c === 1 ? "hour" : "hours"} ago` : p < 30 ? `${p} ${p === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return w;
      }
    }
    return (w, g) => (s(), T(Ke, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (v) => n("close"))
    }, {
      body: l(() => [
        e("div", Mp, [
          e("div", Tp, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ie(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Rp, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", zp, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", Lp, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Pp, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Dp, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Np, a(t.environment.workflow_count), 1)
          ]),
          e("div", Up, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Op, a(t.environment.node_count), 1)
          ]),
          e("div", Bp, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Ap, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Fp)) : d("", !0),
          t.environment.created_at ? (s(), o("div", Vp, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Wp, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", jp, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Gp, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", qp, [
          t.canDelete ? (s(), T(ce, {
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
          k(ce, {
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
}), Kp = /* @__PURE__ */ Z(Hp, [["__scopeId", "data-v-59855453"]]), Ts = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Rs = "3.12", us = [
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
], zs = "auto", Yp = { class: "progress-bar" }, Jp = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = P(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (i, w) => (s(), o("div", Yp, [
      e("div", {
        class: ie(["progress-fill", t.variant]),
        style: ft({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ls = /* @__PURE__ */ Z(Jp, [["__scopeId", "data-v-1beb0512"]]), Qp = { class: "task-progress" }, Xp = { class: "progress-info" }, Zp = { class: "progress-percentage" }, eh = { class: "progress-message" }, th = {
  key: 0,
  class: "progress-steps"
}, sh = { class: "step-icon" }, oh = { class: "step-label" }, nh = /* @__PURE__ */ X({
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
    function i(w) {
      const g = n(w);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (w, g) => (s(), o("div", Qp, [
      k(Ls, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Xp, [
        e("span", Zp, a(t.progress) + "%", 1),
        e("span", eh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", th, [
        (s(!0), o(F, null, ee(t.steps, (v) => (s(), o("div", {
          key: v.id,
          class: ie(["step", n(v.id)])
        }, [
          e("span", sh, a(i(v.id)), 1),
          e("span", oh, a(v.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), Xt = /* @__PURE__ */ Z(nh, [["__scopeId", "data-v-9d1de66c"]]), ah = {
  key: 0,
  class: "create-env-form"
}, lh = { class: "form-field" }, ih = { class: "form-field" }, rh = ["value"], dh = { class: "form-field" }, ch = ["disabled"], uh = ["value"], mh = { class: "form-field" }, vh = ["value"], fh = { class: "form-field form-field--checkbox" }, gh = { class: "form-checkbox" }, ph = {
  key: 1,
  class: "create-env-progress"
}, hh = { class: "creating-intro" }, yh = {
  key: 0,
  class: "progress-warning"
}, wh = {
  key: 1,
  class: "create-error"
}, kh = { class: "error-message" }, bh = {
  key: 1,
  class: "footer-status"
}, _h = 10, $h = /* @__PURE__ */ X({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: i, createEnvironment: w, getCreateProgress: g } = Oe(), v = _(""), m = _(Rs), r = _("latest"), c = _(zs), p = _(!1), h = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = _(!1), $ = _(!1), z = _({
      progress: 0,
      message: ""
    });
    let W = null, f = 0;
    const I = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], B = _(null);
    function C() {
      $.value || n("close");
    }
    async function x() {
      const S = v.value.trim();
      if (S) {
        $.value = !0, z.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const E = {
            name: S,
            python_version: m.value,
            comfyui_version: r.value,
            torch_backend: c.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, N = await w(E);
          N.status === "started" ? j() : N.status === "error" && (z.value = {
            progress: 0,
            message: N.message || "Failed to start creation",
            error: N.message
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
    function j() {
      W || (f = 0, W = window.setInterval(async () => {
        try {
          const S = await g();
          f = 0, z.value = {
            progress: S.progress ?? 0,
            message: S.message,
            phase: S.phase,
            error: S.error
          }, S.state === "complete" ? (V(), n("created", S.environment_name || v.value.trim(), p.value)) : S.state === "error" ? (V(), z.value.error = S.error || S.message) : S.state === "idle" && $.value && (V(), z.value.error = "Creation was interrupted. Please try again.");
        } catch {
          f++, f >= _h && (V(), z.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      W && (clearInterval(W), W = null);
    }
    function H() {
      $.value = !1, z.value = { progress: 0, message: "" }, n("close");
    }
    async function L() {
      b.value = !0;
      try {
        h.value = await i();
      } catch (S) {
        console.error("Failed to load ComfyUI releases:", S);
      } finally {
        b.value = !1;
      }
    }
    return Ue(async () => {
      var S;
      await Js(), (S = B.value) == null || S.focus(), L();
    }), _s(() => {
      V();
    }), (S, E) => (s(), T(Ke, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !$.value,
      onClose: C
    }, {
      body: l(() => [
        $.value ? (s(), o("div", ph, [
          e("p", hh, [
            E[11] || (E[11] = y(" Creating environment ", -1)),
            e("strong", null, a(v.value), 1),
            E[12] || (E[12] = y("... ", -1))
          ]),
          k(Xt, {
            progress: z.value.progress,
            message: z.value.message,
            "current-phase": z.value.phase,
            variant: z.value.error ? "error" : "default",
            "show-steps": !0,
            steps: I
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          z.value.error ? d("", !0) : (s(), o("p", yh, " This may take several minutes. Please wait... ")),
          z.value.error ? (s(), o("div", wh, [
            e("p", kh, a(z.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", ah, [
          e("div", lh, [
            E[6] || (E[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ne(e("input", {
              ref_key: "nameInput",
              ref: B,
              "onUpdate:modelValue": E[0] || (E[0] = (N) => v.value = N),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: vt(x, ["enter"])
            }, null, 544), [
              [St, v.value]
            ])
          ]),
          e("div", ih, [
            E[7] || (E[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (N) => m.value = N),
              class: "form-select"
            }, [
              (s(!0), o(F, null, ee(xe(Ts), (N) => (s(), o("option", {
                key: N,
                value: N
              }, a(N), 9, rh))), 128))
            ], 512), [
              [It, m.value]
            ])
          ]),
          e("div", dh, [
            E[8] || (E[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": E[2] || (E[2] = (N) => r.value = N),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(F, null, ee(h.value, (N) => (s(), o("option", {
                key: N.tag_name,
                value: N.tag_name
              }, a(N.name), 9, uh))), 128))
            ], 8, ch), [
              [It, r.value]
            ])
          ]),
          e("div", mh, [
            E[9] || (E[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": E[3] || (E[3] = (N) => c.value = N),
              class: "form-select"
            }, [
              (s(!0), o(F, null, ee(xe(us), (N) => (s(), o("option", {
                key: N,
                value: N
              }, a(N) + a(N === "auto" ? " (detect GPU)" : ""), 9, vh))), 128))
            ], 512), [
              [It, c.value]
            ])
          ]),
          e("div", fh, [
            e("label", gh, [
              Ne(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": E[4] || (E[4] = (N) => p.value = N)
              }, null, 512), [
                [Yt, p.value]
              ]),
              E[10] || (E[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        $.value ? (s(), o(F, { key: 1 }, [
          z.value.error ? (s(), T(ce, {
            key: 0,
            variant: "secondary",
            onClick: H
          }, {
            default: l(() => [...E[15] || (E[15] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", bh, " Creating environment... "))
        ], 64)) : (s(), o(F, { key: 0 }, [
          k(ce, {
            variant: "primary",
            disabled: !v.value.trim(),
            onClick: x
          }, {
            default: l(() => [...E[13] || (E[13] = [
              y(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(ce, {
            variant: "secondary",
            onClick: E[5] || (E[5] = (N) => n("close"))
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
}), Ch = /* @__PURE__ */ Z($h, [["__scopeId", "data-v-f37eaa42"]]), xh = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: u, emit: n }) {
    const i = n, { getEnvironments: w } = Oe(), g = _([]), v = _(!1), m = _(null), r = _(""), c = _(!1), p = _(!1), h = _(null), b = P(
      () => g.value.find((C) => C.is_current)
    ), $ = P(() => {
      if (!r.value.trim()) return g.value;
      const C = r.value.toLowerCase();
      return g.value.filter(
        (x) => {
          var j;
          return x.name.toLowerCase().includes(C) || ((j = x.current_branch) == null ? void 0 : j.toLowerCase().includes(C));
        }
      );
    });
    function z(C, x) {
      p.value = !1, i("created", C, x);
    }
    function W() {
      p.value = !0;
    }
    function f(C) {
      h.value = C;
    }
    function I(C) {
      h.value = null, i("delete", C);
    }
    async function B() {
      v.value = !0, m.value = null;
      try {
        g.value = await w();
      } catch (C) {
        m.value = C instanceof Error ? C.message : "Failed to load environments";
      } finally {
        v.value = !1;
      }
    }
    return Ue(B), u({
      loadEnvironments: B,
      openCreateModal: W
    }), (C, x) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (j) => c.value = !0)
          }, {
            actions: l(() => [
              k(te, {
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: l(() => [...x[6] || (x[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              k(te, {
                variant: "secondary",
                size: "sm",
                onClick: B
              }, {
                default: l(() => [...x[7] || (x[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(Mt, {
            modelValue: r.value,
            "onUpdate:modelValue": x[1] || (x[1] = (j) => r.value = j),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), T(gt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), T(pt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            g.value.length ? (s(), T(Tt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(g.value.length) + " " + a(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                b.value ? (s(), o(F, { key: 0 }, [
                  x[8] || (x[8] = y(" • Current: ", -1)),
                  e("strong", null, a(b.value.name), 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            $.value.length ? (s(), T(Be, {
              key: 1,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ee($.value, (j) => (s(), T(Ep, {
                  key: j.name,
                  "environment-name": j.name,
                  "is-current": j.is_current,
                  "current-branch": j.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    j.is_current ? d("", !0) : (s(), T(te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => C.$emit("switch", j.name)
                    }, {
                      default: l(() => [...x[9] || (x[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => f(j)
                    }, {
                      default: l(() => [...x[10] || (x[10] = [
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
            $.value.length ? d("", !0) : (s(), T(st, {
              key: 2,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Ft({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  k(te, {
                    variant: "primary",
                    onClick: W
                  }, {
                    default: l(() => [...x[11] || (x[11] = [
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
        onClose: x[3] || (x[3] = (j) => c.value = !1)
      }, {
        content: l(() => [...x[12] || (x[12] = [
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
            onClick: x[2] || (x[2] = (j) => c.value = !1)
          }, {
            default: l(() => [...x[13] || (x[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (s(), T(Kp, {
        key: 0,
        environment: h.value,
        "can-delete": g.value.length > 1,
        onClose: x[4] || (x[4] = (j) => h.value = null),
        onDelete: I
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      p.value ? (s(), T(Ch, {
        key: 1,
        onClose: x[5] || (x[5] = (j) => p.value = !1),
        onCreated: z
      })) : d("", !0)
    ], 64));
  }
}), Sh = /* @__PURE__ */ Z(xh, [["__scopeId", "data-v-d6dc0255"]]), Ih = { class: "file-path" }, Eh = { class: "file-path-text" }, Mh = ["title"], Th = /* @__PURE__ */ X({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = _(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (w) {
        console.error("Failed to copy:", w);
      }
    }
    return (w, g) => (s(), o("div", Ih, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Eh, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, Mh)) : d("", !0)
    ]));
  }
}), Rh = /* @__PURE__ */ Z(Th, [["__scopeId", "data-v-f0982173"]]), zh = { class: "export-blocked" }, Lh = { class: "issues-list" }, Ph = { class: "issue-message" }, Dh = {
  key: 0,
  class: "issue-details"
}, Nh = ["onClick"], Uh = { class: "issue-fix" }, Oh = /* @__PURE__ */ X({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const u = t, n = Zt({});
    function i(w) {
      const g = u.issues[w];
      return n[w] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (w, g) => (s(), T(Ke, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (v) => w.$emit("close"))
    }, {
      body: l(() => [
        e("div", zh, [
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
          e("div", Lh, [
            (s(!0), o(F, null, ee(t.issues, (v, m) => (s(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", Ph, a(v.message), 1),
              v.details.length ? (s(), o("div", Dh, [
                (s(!0), o(F, null, ee(i(m), (r, c) => (s(), o("div", {
                  key: c,
                  class: "issue-detail"
                }, a(r), 1))), 128)),
                v.details.length > 3 && !n[m] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (r) => n[m] = !0
                }, " +" + a(v.details.length - 3) + " more ", 9, Nh)) : d("", !0)
              ])) : d("", !0),
              e("div", Uh, [
                v.type === "uncommitted_workflows" ? (s(), o(F, { key: 0 }, [
                  y(" Commit your workflow changes before exporting. ")
                ], 64)) : v.type === "uncommitted_git_changes" ? (s(), o(F, { key: 1 }, [
                  y(" Commit your changes before exporting. ")
                ], 64)) : v.type === "unresolved_issues" ? (s(), o(F, { key: 2 }, [
                  y(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        k(ce, {
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
}), Bh = /* @__PURE__ */ Z(Oh, [["__scopeId", "data-v-b52f5e32"]]), Ah = { class: "export-warnings" }, Fh = {
  key: 0,
  class: "success-header"
}, Vh = { class: "warning-header" }, Wh = { class: "warning-summary" }, jh = { class: "warning-title" }, Gh = { class: "models-section" }, qh = { class: "models-list" }, Hh = { class: "model-info" }, Kh = { class: "model-filename" }, Yh = { class: "model-workflows" }, Jh = ["onClick"], Qh = /* @__PURE__ */ X({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: u }) {
    const n = t, i = u, w = _(!1), g = _(null), v = P(() => w.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      g.value = null, i("revalidate");
    }
    return (r, c) => (s(), o(F, null, [
      k(Ke, {
        title: "Export Warnings",
        size: "md",
        onClose: c[3] || (c[3] = (p) => r.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", Ah, [
            t.models.length === 0 ? (s(), o("div", Fh, [...c[4] || (c[4] = [
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
            ])])) : (s(), o(F, { key: 1 }, [
              e("div", Vh, [
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
                e("div", Wh, [
                  e("h3", jh, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  c[5] || (c[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", Gh, [
                e("div", qh, [
                  (s(!0), o(F, null, ee(v.value, (p) => (s(), o("div", {
                    key: p.hash,
                    class: "model-item"
                  }, [
                    e("div", Hh, [
                      e("div", Kh, a(p.filename), 1),
                      e("div", Yh, " Used by: " + a(p.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (h) => g.value = p.hash
                    }, " Add Source ", 8, Jh)
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
          k(ce, {
            variant: "secondary",
            onClick: c[1] || (c[1] = (p) => r.$emit("cancel"))
          }, {
            default: l(() => [...c[7] || (c[7] = [
              y(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(ce, {
            variant: "primary",
            onClick: c[2] || (c[2] = (p) => r.$emit("confirm"))
          }, {
            default: l(() => [
              y(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), T(cs, {
        key: 0,
        identifier: g.value,
        onClose: m
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Xh = /* @__PURE__ */ Z(Qh, [["__scopeId", "data-v-b698d882"]]), Zh = { class: "export-card" }, e1 = { class: "export-path-row" }, t1 = { class: "export-actions" }, s1 = {
  key: 1,
  class: "export-warning"
}, o1 = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: u, exportEnvWithForce: n } = Oe(), i = _(""), w = _(!1), g = _(!1), v = _(!1), m = _(null), r = _(!1), c = _(null), p = _(!1), h = _(!1), b = P(() => w.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function $() {
      w.value = !0, m.value = null;
      try {
        const C = await u();
        c.value = C, C.can_export ? C.warnings.models_without_sources.length > 0 ? h.value = !0 : await f() : p.value = !0;
      } catch (C) {
        m.value = {
          status: "error",
          message: C instanceof Error ? C.message : "Validation failed"
        };
      } finally {
        w.value = !1;
      }
    }
    async function z() {
      h.value = !1, await f();
    }
    async function W() {
      try {
        const C = await u();
        c.value = C;
      } catch (C) {
        console.error("Re-validation failed:", C);
      }
    }
    async function f() {
      g.value = !0;
      try {
        const C = await n(i.value || void 0);
        m.value = C;
      } catch (C) {
        m.value = {
          status: "error",
          message: C instanceof Error ? C.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function I() {
      var C;
      if ((C = m.value) != null && C.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function B() {
      var C;
      if ((C = m.value) != null && C.path) {
        v.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const j = await x.blob(), V = URL.createObjectURL(j), H = m.value.path.split("/").pop() || "environment-export.tar.gz", L = document.createElement("a");
          L.href = V, L.download = H, document.body.appendChild(L), L.click(), document.body.removeChild(L), URL.revokeObjectURL(V);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return (C, x) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (j) => r.value = !0)
          })
        ]),
        content: l(() => [
          k(Be, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", Zh, [
                x[7] || (x[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", e1, [
                  k(Jt, {
                    modelValue: i.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (j) => i.value = j),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", t1, [
                  k(te, {
                    variant: "primary",
                    size: "md",
                    loading: w.value || g.value,
                    disabled: w.value || g.value,
                    onClick: $
                  }, {
                    default: l(() => [
                      x[6] || (x[6] = e("svg", {
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
          m.value ? (s(), T(Be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              k(He, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Ft({
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
                    k(Pe, { label: "Saved to:" }, {
                      default: l(() => [
                        k(Rh, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), T(Pe, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", s1, [...x[8] || (x[8] = [
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
                      onClick: B
                    }, {
                      default: l(() => [...x[9] || (x[9] = [
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
                      onClick: I
                    }, {
                      default: l(() => [...x[10] || (x[10] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (j) => m.value = null)
                    }, {
                      default: l(() => [...x[11] || (x[11] = [
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
        show: r.value,
        title: "What Gets Exported",
        onClose: x[3] || (x[3] = (j) => r.value = !1)
      }, {
        content: l(() => [...x[12] || (x[12] = [
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
      p.value && c.value ? (s(), T(Bh, {
        key: 0,
        issues: c.value.blocking_issues,
        onClose: x[4] || (x[4] = (j) => p.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      h.value && c.value ? (s(), T(Xh, {
        key: 1,
        models: c.value.warnings.models_without_sources,
        onConfirm: z,
        onCancel: x[5] || (x[5] = (j) => h.value = !1),
        onRevalidate: W
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), n1 = /* @__PURE__ */ Z(o1, [["__scopeId", "data-v-f4d120f2"]]), a1 = { class: "file-input-wrapper" }, l1 = ["accept", "multiple", "disabled"], i1 = /* @__PURE__ */ X({
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
    const i = n, w = _(null);
    function g() {
      var m;
      (m = w.value) == null || m.click();
    }
    function v(m) {
      const r = m.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return u({
      triggerInput: g
    }), (m, r) => (s(), o("div", a1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: w,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, l1),
      k(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          Se(m.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
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
}), r1 = /* @__PURE__ */ Z(i1, [["__scopeId", "data-v-cd192091"]]), d1 = {
  key: 0,
  class: "drop-zone-empty"
}, c1 = { class: "drop-zone-text" }, u1 = { class: "drop-zone-primary" }, m1 = { class: "drop-zone-secondary" }, v1 = { class: "drop-zone-actions" }, f1 = {
  key: 1,
  class: "drop-zone-file"
}, g1 = { class: "file-info" }, p1 = { class: "file-details" }, h1 = { class: "file-name" }, y1 = { class: "file-size" }, w1 = /* @__PURE__ */ X({
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
    const n = u, i = _(!1), w = _(null), g = _(0), v = P(() => w.value !== null), m = P(() => {
      var f;
      return ((f = w.value) == null ? void 0 : f.name) || "";
    }), r = P(() => {
      if (!w.value) return "";
      const f = w.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function c(f) {
      var I;
      f.stopPropagation(), g.value++, (I = f.dataTransfer) != null && I.types.includes("Files") && (i.value = !0);
    }
    function p(f) {
      f.stopPropagation(), f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function h(f) {
      f.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function b(f) {
      var B;
      f.stopPropagation(), g.value = 0, i.value = !1;
      const I = (B = f.dataTransfer) == null ? void 0 : B.files;
      I && I.length > 0 && z(I[0]);
    }
    function $(f) {
      f.length > 0 && z(f[0]);
    }
    function z(f) {
      w.value = f, n("fileSelected", f);
    }
    function W() {
      w.value = null, n("clear");
    }
    return (f, I) => (s(), o("div", {
      class: ie(["file-drop-zone", { "drop-active": i.value, "has-file": v.value }]),
      onDragenter: ze(c, ["prevent"]),
      onDragover: ze(p, ["prevent"]),
      onDragleave: ze(h, ["prevent"]),
      onDrop: ze(b, ["prevent"])
    }, [
      v.value ? (s(), o("div", f1, [
        e("div", g1, [
          I[1] || (I[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", p1, [
            e("div", h1, a(m.value), 1),
            e("div", y1, a(r.value), 1)
          ])
        ]),
        k(te, {
          variant: "ghost",
          size: "xs",
          onClick: W,
          title: "Remove file"
        }, {
          default: l(() => [...I[2] || (I[2] = [
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
      ])) : (s(), o("div", d1, [
        I[0] || (I[0] = e("div", { class: "drop-zone-icon" }, [
          e("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            e("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        e("div", c1, [
          e("p", u1, a(t.primaryText), 1),
          e("p", m1, a(t.secondaryText), 1)
        ]),
        e("div", v1, [
          k(r1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
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
}), k1 = /* @__PURE__ */ Z(w1, [["__scopeId", "data-v-0f79cb86"]]), b1 = { class: "import-preview" }, _1 = { class: "preview-header" }, $1 = {
  key: 0,
  class: "source-env"
}, C1 = { class: "preview-content" }, x1 = { class: "preview-section" }, S1 = { class: "section-header" }, I1 = { class: "section-info" }, E1 = { class: "section-count" }, M1 = {
  key: 0,
  class: "item-list"
}, T1 = { class: "item-name" }, R1 = {
  key: 0,
  class: "item-more"
}, z1 = { class: "preview-section" }, L1 = { class: "section-header" }, P1 = { class: "section-info" }, D1 = { class: "section-count" }, N1 = {
  key: 0,
  class: "item-list"
}, U1 = { class: "item-details" }, O1 = { class: "item-name" }, B1 = { class: "item-meta" }, A1 = {
  key: 0,
  class: "item-more"
}, F1 = { class: "preview-section" }, V1 = { class: "section-header" }, W1 = { class: "section-info" }, j1 = { class: "section-count" }, G1 = {
  key: 0,
  class: "item-list"
}, q1 = { class: "item-name" }, H1 = {
  key: 0,
  class: "item-more"
}, K1 = {
  key: 0,
  class: "preview-section"
}, Y1 = { class: "git-info" }, J1 = /* @__PURE__ */ X({
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
    const u = t, n = P(() => u.workflows.length), i = P(() => u.models.length), w = P(() => u.nodes.length);
    function g(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, m) => (s(), o("div", b1, [
      e("div", _1, [
        k(Xe, null, {
          default: l(() => [...m[0] || (m[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", $1, [
          m[1] || (m[1] = y(" From: ", -1)),
          k(ns, null, {
            default: l(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", C1, [
        e("div", x1, [
          e("div", S1, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", I1, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", E1, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", M1, [
            (s(!0), o(F, null, ee(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", T1, a(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", R1, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", z1, [
          e("div", L1, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", P1, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", D1, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", N1, [
            (s(!0), o(F, null, ee(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", U1, [
                e("span", O1, a(r.filename), 1),
                e("span", B1, a(g(r.size)) + " • " + a(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", A1, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", F1, [
          e("div", V1, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", W1, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", j1, a(w.value) + " node" + a(w.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", G1, [
            (s(!0), o(F, null, ee(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", q1, a(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", H1, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", K1, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Y1, [
            t.gitBranch ? (s(), T(Pe, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                k(ns, null, {
                  default: l(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (s(), T(Pe, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                k(Cs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Q1 = /* @__PURE__ */ Z(J1, [["__scopeId", "data-v-182fe113"]]), X1 = { class: "import-config" }, Z1 = { class: "config-container" }, ey = { class: "config-field" }, ty = { class: "input-wrapper" }, sy = ["value"], oy = {
  key: 0,
  class: "validating-indicator"
}, ny = {
  key: 1,
  class: "valid-indicator"
}, ay = {
  key: 0,
  class: "field-error"
}, ly = { class: "config-field" }, iy = { class: "strategy-options" }, ry = ["value", "checked", "onChange"], dy = { class: "strategy-content" }, cy = { class: "strategy-label" }, uy = { class: "strategy-description" }, my = { class: "config-field switch-field" }, vy = { class: "switch-label" }, fy = ["checked"], gy = { class: "advanced-section" }, py = { class: "advanced-content" }, hy = { class: "config-field" }, yy = ["value"], wy = ["value"], ky = /* @__PURE__ */ X({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(t, { emit: u }) {
    const n = t, i = u, w = _(!1), g = _(!1);
    wt(() => n.nameError, (p) => {
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
    function r(p) {
      const h = p.target.value;
      i("update:name", h), g.value = !1, m && clearTimeout(m), h.length > 0 ? (w.value = !0, m = setTimeout(() => {
        i("validate-name", h);
      }, 400)) : w.value = !1;
    }
    function c() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (p, h) => (s(), o("div", X1, [
      k(Xe, null, {
        default: l(() => [...h[2] || (h[2] = [
          y("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Z1, [
        e("div", ey, [
          k(Ht, { required: "" }, {
            default: l(() => [...h[3] || (h[3] = [
              y("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", ty, [
            e("input", {
              type: "text",
              class: ie(["name-input", { error: t.nameError || t.name.length === 0, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: r,
              onBlur: c
            }, null, 42, sy),
            w.value ? (s(), o("span", oy, "...")) : g.value ? (s(), o("span", ny, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", ay, a(t.nameError), 1)) : d("", !0),
          h[4] || (h[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", ly, [
          k(Ht, null, {
            default: l(() => [...h[5] || (h[5] = [
              y("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", iy, [
            (s(), o(F, null, ee(v, (b) => e("label", {
              key: b.value,
              class: ie(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: ($) => i("update:modelStrategy", b.value)
              }, null, 40, ry),
              e("div", dy, [
                e("span", cy, a(b.label), 1),
                e("span", uy, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", my, [
          e("label", vy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: h[0] || (h[0] = (b) => i("update:switchAfterImport", b.target.checked))
            }, null, 40, fy),
            h[6] || (h[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", gy, [
          h[8] || (h[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", py, [
            e("div", hy, [
              k(Ht, null, {
                default: l(() => [...h[7] || (h[7] = [
                  y("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: h[1] || (h[1] = (b) => i("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(F, null, ee(xe(us), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, wy))), 128))
              ], 40, yy)
            ])
          ])
        ])
      ])
    ]));
  }
}), by = /* @__PURE__ */ Z(ky, [["__scopeId", "data-v-89ea06a1"]]), _y = {
  key: 0,
  class: "import-empty"
}, $y = { class: "git-import-section" }, Cy = { class: "git-url-input-row" }, xy = ["disabled"], Sy = {
  key: 0,
  class: "git-error"
}, Iy = {
  key: 1,
  class: "import-configure"
}, Ey = { class: "selected-file-bar" }, My = {
  key: 0,
  class: "file-bar-content"
}, Ty = { class: "file-bar-info" }, Ry = { class: "file-bar-name" }, zy = { class: "file-bar-size" }, Ly = {
  key: 1,
  class: "file-bar-content"
}, Py = { class: "file-bar-info" }, Dy = { class: "file-bar-name" }, Ny = {
  key: 0,
  class: "preview-loading"
}, Uy = { class: "import-actions" }, Oy = {
  key: 2,
  class: "import-progress"
}, By = { class: "creating-intro" }, Ay = {
  key: 0,
  class: "progress-warning"
}, Fy = {
  key: 1,
  class: "import-error"
}, Vy = { class: "error-message" }, Wy = {
  key: 3,
  class: "import-complete"
}, jy = { class: "complete-message" }, Gy = { class: "complete-title" }, qy = { class: "complete-details" }, Hy = { class: "complete-actions" }, Ky = /* @__PURE__ */ X({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: u }) {
    const { previewTarballImport: n, previewGitImport: i, validateEnvironmentName: w, executeImport: g, executeGitImport: v, getImportProgress: m } = Oe(), r = u;
    let c = null;
    const p = _(!1), h = _(null), b = _(!1), $ = _(!1), z = _(!1), W = _(""), f = _(!1), I = _(null), B = _(""), C = _(null), x = _(!1), j = _(null), V = _(null), H = _({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), L = _(null), S = _({
      message: "Preparing import...",
      phase: "",
      progress: 0,
      error: null
    }), E = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], N = P(() => {
      if (!V.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const de = V.value;
      return {
        sourceEnvironment: de.comfyui_version ? `ComfyUI ${de.comfyui_version}` : "Unknown",
        workflows: de.workflows.map((ne) => ne.name),
        models: de.models.map((ne) => ({
          filename: ne.filename,
          size: 0,
          type: ne.relative_path.split("/")[0] || "model"
        })),
        nodes: de.nodes.map((ne) => ne.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), U = P(() => !f.value && !I.value && V.value && H.value.name.length > 0 && !L.value && (h.value || C.value));
    async function ae(de) {
      h.value = de, f.value = !0, I.value = null, V.value = null;
      try {
        const ne = await n(de);
        V.value = ne;
      } catch (ne) {
        I.value = ne instanceof Error ? ne.message : "Failed to analyze file", console.error("Preview error:", ne);
      } finally {
        f.value = !1;
      }
    }
    function we() {
      h.value = null, C.value = null, B.value = "", j.value = null, $.value = !1, z.value = !1, W.value = "", V.value = null, I.value = null, H.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, L.value = null;
    }
    function me() {
      Me(), we(), b.value = !1, f.value = !1, x.value = !1, S.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function oe() {
      if (B.value.trim()) {
        x.value = !0, j.value = null;
        try {
          const de = await i(B.value.trim());
          C.value = B.value.trim(), V.value = de;
        } catch (de) {
          j.value = de instanceof Error ? de.message : "Failed to analyze repository";
        } finally {
          x.value = !1;
        }
      }
    }
    function O(de) {
      try {
        const ne = new URL(de);
        return ne.host + ne.pathname.replace(/\.git$/, "");
      } catch {
        return de;
      }
    }
    async function M(de) {
      if (!de) {
        L.value = "Environment name is required";
        return;
      }
      try {
        const ne = await w(de);
        L.value = ne.valid ? null : ne.error || "Invalid name";
      } catch {
        L.value = "Failed to validate name";
      }
    }
    async function le() {
      if (H.value.name && !(!h.value && !C.value)) {
        b.value = !0, $.value = !1, S.value = { message: `Creating environment '${H.value.name}'...`, phase: "", progress: 0, error: null };
        try {
          let de;
          if (h.value)
            de = await g(
              h.value,
              H.value.name,
              H.value.modelStrategy,
              H.value.torchBackend
            );
          else if (C.value)
            de = await v(
              C.value,
              H.value.name,
              H.value.modelStrategy,
              H.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          de.status === "started" ? se() : (z.value = !1, W.value = de.message, b.value = !1, $.value = !0);
        } catch (de) {
          z.value = !1, W.value = de instanceof Error ? de.message : "Unknown error occurred during import", b.value = !1, $.value = !0;
        }
      }
    }
    function se() {
      c || (c = setInterval(async () => {
        try {
          const de = await m();
          S.value = {
            message: de.message,
            phase: de.phase || "",
            progress: de.progress ?? (de.state === "importing" ? 50 : 0),
            error: de.error || null
          }, de.state === "complete" ? (Me(), z.value = !0, W.value = `Environment '${de.environment_name}' created successfully`, b.value = !1, $.value = !0, H.value.switchAfterImport && de.environment_name && r("import-complete-switch", de.environment_name)) : de.state === "error" && (Me(), z.value = !1, W.value = de.error || de.message, b.value = !1, $.value = !0);
        } catch (de) {
          console.error("Failed to poll import progress:", de);
        }
      }, 2e3));
    }
    function Me() {
      c && (clearInterval(c), c = null);
    }
    function ke(de) {
      return de < 1024 ? `${de} B` : de < 1024 * 1024 ? `${(de / 1024).toFixed(1)} KB` : de < 1024 * 1024 * 1024 ? `${(de / (1024 * 1024)).toFixed(1)} MB` : `${(de / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (de, ne) => (s(), o(F, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: ne[0] || (ne[0] = (Y) => p.value = !0)
          })
        ]),
        content: l(() => {
          var Y;
          return [
            !h.value && !C.value && !b.value ? (s(), o("div", _y, [
              k(k1, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: ae
              }),
              ne[9] || (ne[9] = e("div", { class: "import-divider" }, [
                e("span", null, "or")
              ], -1)),
              e("div", $y, [
                ne[7] || (ne[7] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
                e("div", Cy, [
                  Ne(e("input", {
                    type: "text",
                    class: "git-url-input",
                    "onUpdate:modelValue": ne[1] || (ne[1] = (ue) => B.value = ue),
                    placeholder: "https://github.com/user/repo.git",
                    onKeyup: vt(oe, ["enter"]),
                    disabled: x.value
                  }, null, 40, xy), [
                    [St, B.value]
                  ]),
                  k(te, {
                    variant: "primary",
                    size: "sm",
                    disabled: !B.value.trim() || x.value,
                    onClick: oe
                  }, {
                    default: l(() => [
                      y(a(x.value ? "Analyzing..." : "ANALYZE"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                j.value ? (s(), o("div", Sy, a(j.value), 1)) : d("", !0),
                ne[8] || (ne[8] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
              ])
            ])) : (h.value || C.value) && !b.value && !$.value ? (s(), o("div", Iy, [
              e("div", Ey, [
                h.value ? (s(), o("div", My, [
                  ne[10] || (ne[10] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", Ty, [
                    e("div", Ry, a(h.value.name), 1),
                    e("div", zy, a(ke(h.value.size)), 1)
                  ])
                ])) : C.value ? (s(), o("div", Ly, [
                  ne[12] || (ne[12] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
                  e("div", Py, [
                    e("div", Dy, a(O(C.value)), 1),
                    ne[11] || (ne[11] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
                  ])
                ])) : d("", !0),
                k(te, {
                  variant: "ghost",
                  size: "sm",
                  onClick: we
                }, {
                  default: l(() => [...ne[13] || (ne[13] = [
                    y(" Change Source ", -1)
                  ])]),
                  _: 1
                })
              ]),
              f.value ? (s(), o("div", Ny, [...ne[14] || (ne[14] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : I.value ? (s(), T(Ze, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [I.value]
              }, null, 8, ["details"])) : V.value ? (s(), T(Q1, {
                key: 2,
                "source-environment": N.value.sourceEnvironment,
                workflows: N.value.workflows,
                models: N.value.models,
                nodes: N.value.nodes,
                "git-branch": N.value.gitBranch,
                "git-commit": N.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
              V.value ? (s(), T(by, {
                key: 3,
                name: H.value.name,
                "onUpdate:name": ne[2] || (ne[2] = (ue) => H.value.name = ue),
                "model-strategy": H.value.modelStrategy,
                "onUpdate:modelStrategy": ne[3] || (ne[3] = (ue) => H.value.modelStrategy = ue),
                "torch-backend": H.value.torchBackend,
                "onUpdate:torchBackend": ne[4] || (ne[4] = (ue) => H.value.torchBackend = ue),
                "switch-after-import": H.value.switchAfterImport,
                "onUpdate:switchAfterImport": ne[5] || (ne[5] = (ue) => H.value.switchAfterImport = ue),
                "name-error": L.value,
                onValidateName: M
              }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
              H.value.modelStrategy === "skip" && ((Y = V.value) != null && Y.models_needing_download) ? (s(), T(Ze, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${V.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : d("", !0),
              e("div", Uy, [
                k(te, {
                  variant: "secondary",
                  size: "md",
                  onClick: we
                }, {
                  default: l(() => [...ne[15] || (ne[15] = [
                    y(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                k(te, {
                  variant: "primary",
                  size: "md",
                  disabled: !U.value,
                  onClick: le
                }, {
                  default: l(() => [...ne[16] || (ne[16] = [
                    y(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ])) : b.value ? (s(), o("div", Oy, [
              e("p", By, [
                ne[17] || (ne[17] = y(" Importing environment ", -1)),
                e("strong", null, a(H.value.name), 1),
                ne[18] || (ne[18] = y("... ", -1))
              ]),
              k(Xt, {
                progress: S.value.progress,
                message: S.value.message,
                "current-phase": S.value.phase,
                variant: S.value.error ? "error" : "default",
                "show-steps": !0,
                steps: E
              }, null, 8, ["progress", "message", "current-phase", "variant"]),
              S.value.error ? d("", !0) : (s(), o("p", Ay, " This may take several minutes. Please wait... ")),
              S.value.error ? (s(), o("div", Fy, [
                e("p", Vy, a(S.value.error), 1)
              ])) : d("", !0)
            ])) : $.value ? (s(), o("div", Wy, [
              e("div", {
                class: ie(["complete-icon", z.value ? "success" : "error"])
              }, a(z.value ? "✓" : "✕"), 3),
              e("div", jy, [
                e("div", Gy, a(z.value ? "Import Successful" : "Import Failed"), 1),
                e("div", qy, a(W.value), 1)
              ]),
              e("div", Hy, [
                k(te, {
                  variant: "primary",
                  size: "md",
                  onClick: me
                }, {
                  default: l(() => [...ne[19] || (ne[19] = [
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
        show: p.value,
        title: "How Import Works",
        onClose: ne[6] || (ne[6] = (Y) => p.value = !1)
      }, {
        content: l(() => [...ne[20] || (ne[20] = [
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
}), Yy = /* @__PURE__ */ Z(Ky, [["__scopeId", "data-v-e3c47581"]]), Jy = { class: "header-info" }, Qy = { class: "commit-hash" }, Xy = {
  key: 0,
  class: "commit-refs"
}, Zy = { class: "commit-message" }, ew = { class: "commit-date" }, tw = {
  key: 0,
  class: "loading"
}, sw = {
  key: 1,
  class: "changes-section"
}, ow = { class: "stats-row" }, nw = { class: "stat" }, aw = { class: "stat insertions" }, lw = { class: "stat deletions" }, iw = {
  key: 0,
  class: "change-group"
}, rw = {
  key: 1,
  class: "change-group"
}, dw = {
  key: 0,
  class: "version"
}, cw = {
  key: 2,
  class: "change-group"
}, uw = { class: "change-item" }, mw = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Oe(), i = _(null), w = _(!0), g = P(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), v = P(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Ue(async () => {
      try {
        i.value = await n(u.commit.hash);
      } finally {
        w.value = !1;
      }
    }), (m, r) => (s(), T(Ke, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (c) => m.$emit("close"))
    }, {
      header: l(() => {
        var c, p, h, b;
        return [
          e("div", Jy, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Qy, a(((c = i.value) == null ? void 0 : c.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (b = (h = i.value) == null ? void 0 : h.refs) != null && b.length ? (s(), o("span", Xy, [
              (s(!0), o(F, null, ee(i.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, a($), 1))), 128))
            ])) : d("", !0)
          ]),
          k(ce, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = ($) => m.$emit("close"))
          }, {
            default: l(() => [...r[5] || (r[5] = [
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
          e("div", Zy, a(((c = i.value) == null ? void 0 : c.message) || t.commit.message), 1),
          e("div", ew, a(((p = i.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          w.value ? (s(), o("div", tw, "Loading details...")) : i.value ? (s(), o("div", sw, [
            e("div", ow, [
              e("span", nw, a(i.value.stats.files_changed) + " files", 1),
              e("span", aw, "+" + a(i.value.stats.insertions), 1),
              e("span", lw, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", iw, [
              k(Ot, { variant: "section" }, {
                default: l(() => [...r[6] || (r[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, ee(i.value.changes.workflows.added, (h) => (s(), o("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(h), 1)
              ]))), 128)),
              (s(!0), o(F, null, ee(i.value.changes.workflows.modified, (h) => (s(), o("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(h), 1)
              ]))), 128)),
              (s(!0), o(F, null, ee(i.value.changes.workflows.deleted, (h) => (s(), o("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(h), 1)
              ]))), 128))
            ])) : d("", !0),
            v.value ? (s(), o("div", rw, [
              k(Ot, { variant: "section" }, {
                default: l(() => [...r[10] || (r[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, ee(i.value.changes.nodes.added, (h) => (s(), o("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(h.name), 1),
                h.version ? (s(), o("span", dw, "(" + a(h.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(F, null, ee(i.value.changes.nodes.removed, (h) => (s(), o("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(h.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", cw, [
              k(Ot, { variant: "section" }, {
                default: l(() => [...r[13] || (r[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", uw, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => [
        k(ce, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (c) => m.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...r[15] || (r[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(ce, {
          variant: "primary",
          onClick: r[2] || (r[2] = (c) => m.$emit("checkout", t.commit))
        }, {
          default: l(() => [...r[16] || (r[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), vw = /* @__PURE__ */ Z(mw, [["__scopeId", "data-v-d256ff6d"]]), fw = { class: "dialog-message" }, gw = {
  key: 0,
  class: "dialog-details"
}, pw = {
  key: 1,
  class: "dialog-warning"
}, hw = /* @__PURE__ */ X({
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
    return (u, n) => (s(), T(Ke, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => u.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", fw, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", gw, [
          (s(!0), o(F, null, ee(t.details, (i, w) => (s(), o("div", {
            key: w,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", pw, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        k(ce, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => u.$emit("cancel"))
        }, {
          default: l(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), T(ce, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => u.$emit("secondary"))
        }, {
          default: l(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        k(ce, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => u.$emit("confirm"))
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
}), yw = /* @__PURE__ */ Z(hw, [["__scopeId", "data-v-3670b9f5"]]), ww = { class: "base-textarea-wrapper" }, kw = ["value", "rows", "placeholder", "disabled", "maxlength"], bw = {
  key: 0,
  class: "base-textarea-count"
}, _w = /* @__PURE__ */ X({
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
    return (u, n) => (s(), o("div", ww, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => u.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = vt(ze((i) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = vt(ze((i) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, kw),
      t.showCharCount && t.maxLength ? (s(), o("div", bw, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), ws = /* @__PURE__ */ Z(_w, [["__scopeId", "data-v-5516e6fc"]]), $w = ["checked", "disabled"], Cw = { class: "base-checkbox-box" }, xw = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Sw = {
  key: 0,
  class: "base-checkbox-label"
}, Iw = /* @__PURE__ */ X({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", {
      class: ie(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => u.$emit("update:modelValue", i.target.checked))
      }, null, 40, $w),
      e("span", Cw, [
        t.modelValue ? (s(), o("svg", xw, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      u.$slots.default ? (s(), o("span", Sw, [
        Se(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ks = /* @__PURE__ */ Z(Iw, [["__scopeId", "data-v-bf17c831"]]), Ew = { class: "popover-header" }, Mw = { class: "popover-body" }, Tw = {
  key: 0,
  class: "changes-summary"
}, Rw = {
  key: 0,
  class: "change-item"
}, zw = {
  key: 1,
  class: "change-item"
}, Lw = {
  key: 2,
  class: "change-item"
}, Pw = {
  key: 3,
  class: "change-item"
}, Dw = {
  key: 4,
  class: "change-item"
}, Nw = {
  key: 5,
  class: "change-item"
}, Uw = {
  key: 1,
  class: "no-changes"
}, Ow = {
  key: 2,
  class: "loading"
}, Bw = {
  key: 3,
  class: "issues-error"
}, Aw = { class: "error-header" }, Fw = { class: "error-title" }, Vw = { class: "issues-list" }, Ww = { class: "message-section" }, jw = { class: "popover-footer" }, Gw = {
  key: 1,
  class: "commit-popover"
}, qw = { class: "popover-header" }, Hw = { class: "popover-body" }, Kw = {
  key: 0,
  class: "changes-summary"
}, Yw = {
  key: 0,
  class: "change-item"
}, Jw = {
  key: 1,
  class: "change-item"
}, Qw = {
  key: 2,
  class: "change-item"
}, Xw = {
  key: 3,
  class: "change-item"
}, Zw = {
  key: 4,
  class: "change-item"
}, e0 = {
  key: 5,
  class: "change-item"
}, t0 = {
  key: 1,
  class: "no-changes"
}, s0 = {
  key: 2,
  class: "loading"
}, o0 = {
  key: 3,
  class: "issues-error"
}, n0 = { class: "error-header" }, a0 = { class: "error-title" }, l0 = { class: "issues-list" }, i0 = { class: "message-section" }, r0 = { class: "popover-footer" }, d0 = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, i = u, { commit: w } = Oe(), g = _(""), v = _(!1), m = _(!1), r = _(null), c = P(() => {
      if (!n.status) return !1;
      const W = n.status.workflows;
      return W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || n.status.has_changes;
    }), p = P(() => {
      if (!n.status) return !1;
      const W = n.status.workflows, f = n.status.git_changes;
      return W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || f.nodes_added.length > 0 || f.nodes_removed.length > 0;
    }), h = P(() => {
      var W;
      return (W = n.status) != null && W.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (f) => f.has_issues && (f.sync_state === "new" || f.sync_state === "modified")
      ) : [];
    }), b = P(() => h.value.length > 0), $ = P(() => b.value && !m.value);
    async function z() {
      var W, f, I;
      if (!(b.value && !m.value) && !(!c.value || !g.value.trim() || v.value)) {
        v.value = !0, r.value = null;
        try {
          const B = await w(g.value.trim(), m.value);
          B.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((W = B.summary) == null ? void 0 : W.new) || 0} new, ${((f = B.summary) == null ? void 0 : f.modified) || 0} modified, ${((I = B.summary) == null ? void 0 : I.deleted) || 0} deleted`
          }, g.value = "", m.value = !1, setTimeout(() => i("committed"), 1e3)) : B.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : B.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: B.message || "Commit failed" };
        } catch (B) {
          r.value = { type: "error", message: B instanceof Error ? B.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (W, f) => t.asModal ? (s(), T(Ae, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: f[5] || (f[5] = (I) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: f[4] || (f[4] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", Ew, [
            f[11] || (f[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: f[0] || (f[0] = (I) => i("close"))
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
          e("div", Mw, [
            t.status && c.value ? (s(), o("div", Tw, [
              t.status.workflows.new.length ? (s(), o("div", Rw, [
                f[12] || (f[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", zw, [
                f[13] || (f[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Lw, [
                f[14] || (f[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Pw, [
                f[15] || (f[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Dw, [
                f[16] || (f[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              p.value ? d("", !0) : (s(), o("div", Nw, [...f[17] || (f[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Uw, " No changes to commit ")) : (s(), o("div", Ow, " Loading... ")),
            b.value ? (s(), o("div", Bw, [
              e("div", Aw, [
                f[18] || (f[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Fw, a(h.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Vw, [
                (s(!0), o(F, null, ee(h.value, (I) => (s(), o("div", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(I.name), 1),
                  y(": " + a(I.issue_summary), 1)
                ]))), 128))
              ]),
              k(ks, {
                modelValue: m.value,
                "onUpdate:modelValue": f[1] || (f[1] = (I) => m.value = I),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...f[19] || (f[19] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", Ww, [
              k(ws, {
                modelValue: g.value,
                "onUpdate:modelValue": f[2] || (f[2] = (I) => g.value = I),
                placeholder: $.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
                disabled: !c.value || v.value || $.value,
                rows: 3,
                onCtrlEnter: z
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (s(), o("div", {
              key: 4,
              class: ie(["result", r.value.type])
            }, a(r.value.message), 3)) : d("", !0)
          ]),
          e("div", jw, [
            k(ce, {
              variant: "secondary",
              onClick: f[3] || (f[3] = (I) => i("close"))
            }, {
              default: l(() => [...f[20] || (f[20] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
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
    ])) : (s(), o("div", Gw, [
      e("div", qw, [
        f[22] || (f[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: f[6] || (f[6] = (I) => i("close"))
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
      e("div", Hw, [
        t.status && c.value ? (s(), o("div", Kw, [
          t.status.workflows.new.length ? (s(), o("div", Yw, [
            f[23] || (f[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Jw, [
            f[24] || (f[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Qw, [
            f[25] || (f[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Xw, [
            f[26] || (f[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Zw, [
            f[27] || (f[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          p.value ? d("", !0) : (s(), o("div", e0, [...f[28] || (f[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", t0, " No changes to commit ")) : (s(), o("div", s0, " Loading... ")),
        b.value ? (s(), o("div", o0, [
          e("div", n0, [
            f[29] || (f[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", a0, a(h.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", l0, [
            (s(!0), o(F, null, ee(h.value, (I) => (s(), o("div", {
              key: I.name,
              class: "issue-item"
            }, [
              e("strong", null, a(I.name), 1),
              y(": " + a(I.issue_summary), 1)
            ]))), 128))
          ]),
          k(ks, {
            modelValue: m.value,
            "onUpdate:modelValue": f[7] || (f[7] = (I) => m.value = I),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...f[30] || (f[30] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", i0, [
          k(ws, {
            modelValue: g.value,
            "onUpdate:modelValue": f[8] || (f[8] = (I) => g.value = I),
            placeholder: $.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
            disabled: !c.value || v.value || $.value,
            rows: 3,
            onCtrlEnter: z
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (s(), o("div", {
          key: 4,
          class: ie(["result", r.value.type])
        }, a(r.value.message), 3)) : d("", !0)
      ]),
      e("div", r0, [
        k(ce, {
          variant: "secondary",
          onClick: f[9] || (f[9] = (I) => i("close"))
        }, {
          default: l(() => [...f[31] || (f[31] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(ce, {
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
}), Ps = /* @__PURE__ */ Z(d0, [["__scopeId", "data-v-aa2a9bdf"]]), c0 = { class: "modal-header" }, u0 = { class: "modal-body" }, m0 = { class: "switch-message" }, v0 = { class: "switch-details" }, f0 = { class: "modal-actions" }, g0 = /* @__PURE__ */ X({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), T(Ae, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", c0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", u0, [
            e("p", m0, [
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
            e("p", v0, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", f0, [
            k(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => u.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(te, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => u.$emit("confirm"))
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
}), p0 = /* @__PURE__ */ Z(g0, [["__scopeId", "data-v-e9c5253e"]]), h0 = {
  key: 0,
  class: "modal-overlay"
}, y0 = { class: "modal-content" }, w0 = { class: "modal-body" }, k0 = { class: "progress-info" }, b0 = { class: "progress-percentage" }, _0 = { class: "progress-state" }, $0 = { class: "switch-steps" }, C0 = { class: "step-icon" }, x0 = { class: "step-label" }, S0 = /* @__PURE__ */ X({
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
    }), i = P(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), w = P(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], v = g.findIndex((m) => m.state === u.state);
      return g.map((m, r) => {
        let c = "pending", p = "○";
        return r < v ? (c = "completed", p = "✓") : r === v && (c = "active", p = "⟳"), {
          ...m,
          status: c,
          icon: p
        };
      });
    });
    return (g, v) => (s(), T(Ae, { to: "body" }, [
      t.show ? (s(), o("div", h0, [
        e("div", y0, [
          v[1] || (v[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", w0, [
            k(Ls, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", k0, [
              e("div", b0, a(t.progress) + "%", 1),
              e("div", _0, a(n.value), 1)
            ]),
            e("div", $0, [
              (s(!0), o(F, null, ee(w.value, (m) => (s(), o("div", {
                key: m.state,
                class: ie(["switch-step", m.status])
              }, [
                e("span", C0, a(m.icon), 1),
                e("span", x0, a(m.label), 1)
              ], 2))), 128))
            ]),
            v[0] || (v[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), I0 = /* @__PURE__ */ Z(S0, [["__scopeId", "data-v-768a5078"]]), E0 = { class: "modal-header" }, M0 = { class: "modal-body" }, T0 = {
  key: 0,
  class: "node-section"
}, R0 = { class: "node-list" }, z0 = {
  key: 1,
  class: "node-section"
}, L0 = { class: "node-list" }, P0 = { class: "modal-actions" }, D0 = /* @__PURE__ */ X({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), T(Ae, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", E0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", M0, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", T0, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", R0, [
                (s(!0), o(F, null, ee(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", z0, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", L0, [
                (s(!0), o(F, null, ee(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", P0, [
            k(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => u.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(te, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => u.$emit("confirm"))
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
}), N0 = /* @__PURE__ */ Z(D0, [["__scopeId", "data-v-7cad7518"]]), U0 = {
  key: 0,
  class: "wizard-steps"
}, O0 = { class: "step-number" }, B0 = {
  key: 1,
  class: "wizard-steps wizard-steps--single"
}, A0 = {
  key: 2,
  class: "wizard-step"
}, F0 = { class: "form-field" }, V0 = ["placeholder"], W0 = {
  key: 0,
  class: "form-error"
}, j0 = { class: "form-field form-field--checkbox" }, G0 = { class: "form-checkbox" }, q0 = {
  key: 0,
  class: "form-field"
}, H0 = ["placeholder"], K0 = {
  key: 0,
  class: "form-info"
}, Y0 = {
  key: 1,
  class: "form-suggestion"
}, J0 = {
  key: 2,
  class: "form-error"
}, Q0 = {
  key: 3,
  class: "form-info"
}, X0 = {
  key: 3,
  class: "wizard-step"
}, Z0 = {
  key: 0,
  class: "cli-warning"
}, ek = {
  key: 1,
  class: "env-selection"
}, tk = { class: "env-list" }, sk = ["value"], ok = { class: "env-name" }, nk = { class: "env-actions" }, ak = { key: 2 }, lk = { class: "wizard-intro" }, ik = { class: "form-field" }, rk = { class: "form-field" }, dk = ["value"], ck = { class: "form-field" }, uk = ["disabled"], mk = ["value"], vk = { class: "form-field" }, fk = ["value"], gk = { class: "form-field form-field--checkbox" }, pk = { class: "form-checkbox" }, hk = {
  key: 1,
  class: "form-error"
}, Gt = 10, yk = 600 * 1e3, wk = 1800 * 1e3, kk = /* @__PURE__ */ X({
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
    const n = t, i = u, {
      initializeWorkspace: w,
      getInitializeProgress: g,
      validatePath: v,
      createEnvironment: m,
      getCreateProgress: r,
      getComfyUIReleases: c
    } = Oe(), p = _(n.initialStep || 1), h = _(null), b = _(!1), $ = _(n.defaultPath), z = _(!!n.detectedModelsDir), W = _(n.detectedModelsDir || ""), f = _(null), I = _(null), B = _(null), C = _(null), x = _("my-new-env"), j = _(Rs), V = _("latest"), H = _(zs), L = _(!0), S = _(null), E = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), N = _(!1), U = _(!1), ae = _(!1), we = _({ progress: 0, message: "" }), me = _({ progress: 0, message: "" }), oe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], O = _(0), M = _(null), le = _(0), se = _(null), Me = P(() => {
      var $e, Ee;
      const ve = ($e = $.value) == null ? void 0 : $e.trim(), J = !f.value, fe = !z.value || !I.value && ((Ee = W.value) == null ? void 0 : Ee.trim());
      return ve && J && fe;
    }), ke = P(() => {
      var ve;
      return (ve = x.value) == null ? void 0 : ve.trim();
    });
    async function de() {
      var ve;
      if (f.value = null, !!((ve = $.value) != null && ve.trim()))
        try {
          const J = await v({ path: $.value, type: "workspace" });
          J.valid || (f.value = J.error || "Invalid path");
        } catch (J) {
          f.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function ne() {
      var ve;
      if (I.value = null, B.value = null, C.value = null, !!((ve = W.value) != null && ve.trim()))
        try {
          const J = await v({ path: W.value, type: "models" });
          if (J.valid)
            C.value = J.model_count ?? null;
          else if (I.value = J.error || "Invalid path", J.suggestion) {
            B.value = J.suggestion, W.value = J.suggestion, I.value = null;
            const fe = await v({ path: J.suggestion, type: "models" });
            fe.valid && (C.value = fe.model_count ?? null);
          }
        } catch (J) {
          I.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function Y() {
      var ve, J, fe;
      if (f.value = null, I.value = null, await de(), !f.value && !(z.value && ((ve = W.value) != null && ve.trim()) && (await ne(), I.value))) {
        U.value = !0;
        try {
          await w({
            workspace_path: ((J = $.value) == null ? void 0 : J.trim()) || n.defaultPath,
            models_directory: z.value && ((fe = W.value) == null ? void 0 : fe.trim()) || null
          }), O.value = 0, M.value = Date.now();
          const $e = setInterval(async () => {
            if (M.value && Date.now() - M.value > yk) {
              clearInterval($e), U.value = !1, f.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ee = await g();
              if (O.value = 0, Ee.state === "idle" && U.value) {
                clearInterval($e), U.value = !1, f.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              we.value = { progress: Ee.progress, message: Ee.message }, Ee.state === "complete" ? (clearInterval($e), U.value = !1, p.value = 2, _e()) : Ee.state === "error" && (clearInterval($e), U.value = !1, f.value = Ee.error || "Workspace creation failed");
            } catch (Ee) {
              O.value++, console.warn(`Polling failure ${O.value}/${Gt}:`, Ee), O.value >= Gt && (clearInterval($e), U.value = !1, f.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch ($e) {
          U.value = !1, f.value = $e instanceof Error ? $e.message : "Failed to create workspace";
        }
      }
    }
    async function ue() {
      ae.value = !0, S.value = null;
      try {
        const ve = {
          name: x.value.trim() || "my-new-env",
          python_version: j.value,
          comfyui_version: V.value,
          torch_backend: H.value,
          switch_after: L.value
        };
        if ((await m(ve)).status === "started") {
          le.value = 0, se.value = Date.now();
          const fe = setInterval(async () => {
            if (se.value && Date.now() - se.value > wk) {
              clearInterval(fe), ae.value = !1, S.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const $e = await r();
              if (le.value = 0, $e.state === "idle" && ae.value) {
                clearInterval(fe), ae.value = !1, S.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (me.value = {
                progress: $e.progress ?? 0,
                message: $e.message,
                phase: $e.phase
              }, $e.state === "complete") {
                clearInterval(fe), ae.value = !1;
                const Ee = $e.environment_name || ve.name;
                L.value ? i("complete", Ee) : (b.value = !1, i("environment-created-no-switch", Ee));
              } else $e.state === "error" && (clearInterval(fe), ae.value = !1, S.value = $e.error || "Environment creation failed");
            } catch ($e) {
              le.value++, console.warn(`Polling failure ${le.value}/${Gt}:`, $e), le.value >= Gt && (clearInterval(fe), ae.value = !1, S.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        ae.value = !1, S.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function _e() {
      N.value = !0;
      try {
        E.value = await c();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        N.value = !1;
      }
    }
    function Le() {
      h.value && i("switch-environment", h.value);
    }
    return Ue(() => {
      n.detectedModelsDir && (W.value = n.detectedModelsDir), p.value === 2 && _e();
    }), (ve, J) => (s(), T(Ke, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: J[12] || (J[12] = (fe) => ve.$emit("close"))
    }, {
      body: l(() => {
        var fe, $e, Ee;
        return [
          n.setupState === "no_workspace" ? (s(), o("div", U0, [
            e("div", {
              class: ie(["step", { active: p.value === 1, complete: p.value > 1 }])
            }, [
              e("span", O0, a(p.value > 1 ? "✓" : "1"), 1),
              J[13] || (J[13] = e("span", { class: "step-label" }, "Workspace", -1))
            ], 2),
            J[15] || (J[15] = e("div", { class: "step-connector" }, null, -1)),
            e("div", {
              class: ie(["step", { active: p.value === 2 }])
            }, [...J[14] || (J[14] = [
              e("span", { class: "step-number" }, "2", -1),
              e("span", { class: "step-label" }, "Environment", -1)
            ])], 2)
          ])) : (s(), o("div", B0, [...J[16] || (J[16] = [
            e("div", { class: "step active" }, [
              e("span", { class: "step-number" }, "1"),
              e("span", { class: "step-label" }, "Environment")
            ], -1)
          ])])),
          p.value === 1 ? (s(), o("div", A0, [
            J[20] || (J[20] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
            e("div", F0, [
              J[17] || (J[17] = e("label", { class: "form-label" }, "Workspace Path", -1)),
              Ne(e("input", {
                "onUpdate:modelValue": J[0] || (J[0] = (ye) => $.value = ye),
                type: "text",
                class: "form-input",
                placeholder: t.defaultPath,
                onBlur: de
              }, null, 40, V0), [
                [St, $.value]
              ]),
              f.value ? (s(), o("p", W0, a(f.value), 1)) : d("", !0)
            ]),
            e("div", j0, [
              e("label", G0, [
                Ne(e("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": J[1] || (J[1] = (ye) => z.value = ye)
                }, null, 512), [
                  [Yt, z.value]
                ]),
                J[18] || (J[18] = e("span", null, "I have existing ComfyUI models", -1))
              ])
            ]),
            z.value ? (s(), o("div", q0, [
              J[19] || (J[19] = e("label", { class: "form-label" }, "Models Directory", -1)),
              Ne(e("input", {
                "onUpdate:modelValue": J[2] || (J[2] = (ye) => W.value = ye),
                type: "text",
                class: "form-input",
                placeholder: t.detectedModelsDir || "/path/to/models",
                onBlur: ne
              }, null, 40, H0), [
                [St, W.value]
              ]),
              t.detectedModelsDir && !W.value ? (s(), o("p", K0, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
              B.value ? (s(), o("p", Y0, " Did you mean: " + a(B.value), 1)) : d("", !0),
              I.value ? (s(), o("p", J0, a(I.value), 1)) : d("", !0),
              C.value !== null && !I.value ? (s(), o("p", Q0, " Found " + a(C.value) + " model files ", 1)) : d("", !0)
            ])) : d("", !0),
            U.value ? (s(), T(Xt, {
              key: 1,
              progress: we.value.progress,
              message: we.value.message
            }, null, 8, ["progress", "message"])) : d("", !0)
          ])) : d("", !0),
          p.value === 2 ? (s(), o("div", X0, [
            n.cliInstalled ? d("", !0) : (s(), o("div", Z0, [...J[21] || (J[21] = [
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
            (fe = n.existingEnvironments) != null && fe.length && !b.value ? (s(), o("div", ek, [
              J[23] || (J[23] = e("p", { class: "wizard-intro" }, " You have existing managed environments. Switch to one, or create a new environment: ", -1)),
              e("div", tk, [
                (s(!0), o(F, null, ee(n.existingEnvironments, (ye) => (s(), o("label", {
                  key: ye,
                  class: ie(["env-option", { selected: h.value === ye }])
                }, [
                  Ne(e("input", {
                    type: "radio",
                    name: "env-select",
                    value: ye,
                    "onUpdate:modelValue": J[3] || (J[3] = (it) => h.value = it)
                  }, null, 8, sk), [
                    [qt, h.value]
                  ]),
                  e("span", ok, a(ye), 1)
                ], 2))), 128))
              ]),
              e("div", nk, [
                h.value ? (s(), T(ce, {
                  key: 0,
                  variant: "primary",
                  onClick: Le
                }, {
                  default: l(() => [
                    y(" Switch to " + a(h.value), 1)
                  ]),
                  _: 1
                })) : d("", !0),
                k(ce, {
                  variant: "secondary",
                  onClick: J[4] || (J[4] = (ye) => b.value = !0)
                }, {
                  default: l(() => [...J[22] || (J[22] = [
                    y(" + Create New Environment ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0),
            b.value || !(($e = n.existingEnvironments) != null && $e.length) ? (s(), o("div", ak, [
              e("p", lk, a((Ee = n.existingEnvironments) != null && Ee.length ? "Create a new managed environment:" : "Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows."), 1),
              e("div", ik, [
                J[24] || (J[24] = e("label", { class: "form-label" }, "Environment Name", -1)),
                Ne(e("input", {
                  "onUpdate:modelValue": J[5] || (J[5] = (ye) => x.value = ye),
                  type: "text",
                  class: "form-input",
                  placeholder: "my-new-env"
                }, null, 512), [
                  [St, x.value]
                ])
              ]),
              e("div", rk, [
                J[25] || (J[25] = e("label", { class: "form-label" }, "Python Version", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": J[6] || (J[6] = (ye) => j.value = ye),
                  class: "form-select"
                }, [
                  (s(!0), o(F, null, ee(xe(Ts), (ye) => (s(), o("option", {
                    key: ye,
                    value: ye
                  }, a(ye), 9, dk))), 128))
                ], 512), [
                  [It, j.value]
                ])
              ]),
              e("div", ck, [
                J[26] || (J[26] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": J[7] || (J[7] = (ye) => V.value = ye),
                  class: "form-select",
                  disabled: N.value
                }, [
                  (s(!0), o(F, null, ee(E.value, (ye) => (s(), o("option", {
                    key: ye.tag_name,
                    value: ye.tag_name
                  }, a(ye.name), 9, mk))), 128))
                ], 8, uk), [
                  [It, V.value]
                ])
              ]),
              e("div", vk, [
                J[27] || (J[27] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": J[8] || (J[8] = (ye) => H.value = ye),
                  class: "form-select"
                }, [
                  (s(!0), o(F, null, ee(xe(us), (ye) => (s(), o("option", {
                    key: ye,
                    value: ye
                  }, a(ye) + a(ye === "auto" ? " (detect GPU)" : ""), 9, fk))), 128))
                ], 512), [
                  [It, H.value]
                ])
              ]),
              e("div", gk, [
                e("label", pk, [
                  Ne(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[9] || (J[9] = (ye) => L.value = ye)
                  }, null, 512), [
                    [Yt, L.value]
                  ]),
                  J[28] || (J[28] = e("span", null, "Switch to this environment after creation", -1))
                ])
              ]),
              ae.value ? (s(), T(Xt, {
                key: 0,
                progress: me.value.progress,
                message: me.value.message,
                "current-phase": me.value.phase,
                "show-steps": !0,
                steps: oe
              }, null, 8, ["progress", "message", "current-phase"])) : d("", !0),
              S.value ? (s(), o("div", hk, a(S.value), 1)) : d("", !0)
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => {
        var fe, $e;
        return [
          p.value === 1 ? (s(), T(ce, {
            key: 0,
            variant: "primary",
            disabled: !Me.value || U.value,
            onClick: Y
          }, {
            default: l(() => [
              y(a(U.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : p.value === 2 ? (s(), o(F, { key: 1 }, [
            n.setupState === "no_workspace" ? (s(), T(ce, {
              key: 0,
              variant: "secondary",
              disabled: ae.value,
              onClick: J[10] || (J[10] = (Ee) => p.value = 1)
            }, {
              default: l(() => [...J[29] || (J[29] = [
                y(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (fe = n.existingEnvironments) != null && fe.length && b.value ? (s(), T(ce, {
              key: 1,
              variant: "secondary",
              disabled: ae.value,
              onClick: J[11] || (J[11] = (Ee) => b.value = !1)
            }, {
              default: l(() => [...J[30] || (J[30] = [
                y(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : d("", !0),
            b.value || !(($e = n.existingEnvironments) != null && $e.length) ? (s(), T(ce, {
              key: 2,
              variant: "primary",
              disabled: !ke.value || ae.value,
              onClick: ue
            }, {
              default: l(() => [
                y(a(ae.value ? "Creating..." : L.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : d("", !0)
          ], 64)) : d("", !0)
        ];
      }),
      _: 1
    }));
  }
}), bk = /* @__PURE__ */ Z(kk, [["__scopeId", "data-v-b8c35e2d"]]), _k = { class: "comfygit-panel" }, $k = { class: "panel-header" }, Ck = { class: "header-left" }, xk = {
  key: 0,
  class: "header-info"
}, Sk = { class: "header-actions" }, Ik = { class: "env-switcher" }, Ek = {
  key: 0,
  class: "header-info"
}, Mk = { class: "branch-name" }, Tk = { class: "panel-main" }, Rk = { class: "sidebar" }, zk = { class: "sidebar-content" }, Lk = { class: "sidebar-section" }, Pk = { class: "sidebar-section" }, Dk = { class: "sidebar-section" }, Nk = { class: "content-area" }, Uk = {
  key: 0,
  class: "error-message"
}, Ok = {
  key: 1,
  class: "loading"
}, Bk = { class: "dialog-content env-selector-dialog" }, Ak = { class: "dialog-header" }, Fk = { class: "dialog-body" }, Vk = { class: "env-list" }, Wk = { class: "env-info" }, jk = { class: "env-name-row" }, Gk = { class: "env-indicator" }, qk = { class: "env-name" }, Hk = {
  key: 0,
  class: "env-branch"
}, Kk = {
  key: 1,
  class: "current-label"
}, Yk = { class: "env-stats" }, Jk = ["onClick"], Qk = { class: "toast-container" }, Xk = { class: "toast-message" }, Zk = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: i,
      getHistory: w,
      getBranches: g,
      checkout: v,
      createBranch: m,
      switchBranch: r,
      deleteBranch: c,
      getEnvironments: p,
      switchEnvironment: h,
      getSwitchProgress: b,
      deleteEnvironment: $,
      syncEnvironmentManually: z,
      repairWorkflowModels: W,
      getSetupStatus: f
    } = Oe(), I = xs();
    function B(G) {
      window.open(G, "_blank", "noopener,noreferrer");
    }
    const C = _(null), x = _([]), j = _([]), V = _([]), H = P(() => V.value.find((G) => G.is_current)), L = _(null), S = _(!1), E = _(1), N = P(() => {
      var G;
      return ((G = L.value) == null ? void 0 : G.state) || "managed";
    }), U = _(!1), ae = _(null), we = _(null), me = _(!1), oe = _(null), O = _(null), M = _(null), le = _(!1), se = _(!1), Me = _(""), ke = _({ state: "idle", progress: 0, message: "" });
    let de = null, ne = null;
    const Y = _("status"), ue = _("this-env");
    function _e(G, R) {
      Y.value = G, ue.value = R;
    }
    function Le(G) {
      const ge = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      ge && _e(ge.view, ge.section);
    }
    function ve() {
      _e("branches", "this-env");
    }
    function J() {
      n("close"), setTimeout(() => {
        var R;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const ge of G)
          if (((R = ge.textContent) == null ? void 0 : R.trim()) === "Manager") {
            ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const fe = _(null), $e = _(!1), Ee = _(!1), ye = _([]);
    let it = 0;
    function be(G, R = "info", ge = 3e3) {
      const Te = ++it;
      return ye.value.push({ id: Te, message: G, type: R }), ge > 0 && setTimeout(() => {
        ye.value = ye.value.filter((Ve) => Ve.id !== Te);
      }, ge), Te;
    }
    function Fe(G) {
      ye.value = ye.value.filter((R) => R.id !== G);
    }
    function kt(G, R) {
      be(G, R);
    }
    const rt = P(() => {
      if (!C.value) return "neutral";
      const G = C.value.workflows, R = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || C.value.has_changes;
      return C.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    P(() => C.value ? rt.value === "success" ? "All synced" : rt.value === "warning" ? "Uncommitted changes" : rt.value === "error" ? "Not synced" : "" : "");
    async function De() {
      U.value = !0, ae.value = null;
      try {
        const [G, R, ge, Te] = await Promise.all([
          i(!0),
          w(),
          g(),
          p()
        ]);
        C.value = G, x.value = R.commits, j.value = ge.branches, V.value = Te, n("statusUpdate", G), oe.value && await oe.value.loadWorkflows(!0);
      } catch (G) {
        ae.value = G instanceof Error ? G.message : "Failed to load status", C.value = null, x.value = [], j.value = [];
      } finally {
        U.value = !1;
      }
    }
    function bt(G) {
      we.value = G;
    }
    async function ht(G) {
      var ge;
      we.value = null;
      const R = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      fe.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((ge = G.hash) == null ? void 0 : ge.slice(0, 7))}?`,
        details: R ? fs() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var We;
          fe.value = null, D();
          const Te = be(`Checking out ${G.short_hash || ((We = G.hash) == null ? void 0 : We.slice(0, 7))}...`, "info", 0), Ve = await v(G.hash, R);
          Fe(Te), Ve.status === "success" ? be("Restarting ComfyUI...", "success") : be(Ve.message || "Checkout failed", "error");
        }
      };
    }
    async function dt(G) {
      const R = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      fe.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: R ? fs() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, D();
          const ge = be(`Switching to ${G}...`, "info", 0), Te = await r(G, R);
          Fe(ge), Te.status === "success" ? be("Restarting ComfyUI...", "success") : be(Te.message || "Branch switch failed", "error");
        }
      };
    }
    async function _t(G) {
      const R = be(`Creating branch ${G}...`, "info", 0), ge = await m(G);
      Fe(R), ge.status === "success" ? (be(`Branch "${G}" created`, "success"), await De()) : be(ge.message || "Failed to create branch", "error");
    }
    async function ct(G, R = !1) {
      const ge = async (Te) => {
        var We;
        const Ve = be(`Deleting branch ${G}...`, "info", 0);
        try {
          const mt = await c(G, Te);
          Fe(Ve), mt.status === "success" ? (be(`Branch "${G}" deleted`, "success"), await De()) : (We = mt.message) != null && We.includes("not fully merged") ? fe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              fe.value = null, await ge(!0);
            }
          } : be(mt.message || "Failed to delete branch", "error");
        } catch (mt) {
          Fe(Ve);
          const Rt = mt instanceof Error ? mt.message : "Failed to delete branch";
          Rt.includes("not fully merged") ? fe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              fe.value = null, await ge(!0);
            }
          } : be(Rt, "error");
        }
      };
      fe.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, await ge(R);
        }
      };
    }
    async function K(G) {
      we.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const ge = be(`Creating branch ${R}...`, "info", 0), Te = await m(R, G.hash);
        Fe(ge), Te.status === "success" ? (be(`Branch "${R}" created from ${G.short_hash}`, "success"), await De()) : be(Te.message || "Failed to create branch", "error");
      }
    }
    function D() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function A() {
      fe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          fe.value = null, D(), be("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Q() {
      fe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          fe.value = null, be("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function pe(G) {
      me.value = !1, Me.value = G, le.value = !0;
    }
    async function ot() {
      le.value = !1, se.value = !0, D(), ke.value = {
        progress: 10,
        state: Ye(10),
        message: ut(10)
      };
      try {
        await h(Me.value), q(), Ce();
      } catch (G) {
        re(), se.value = !1, be(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), ke.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ye(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function ut(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ye(G)] || "";
    }
    function q() {
      if (ne) return;
      let G = 10;
      const R = 60, ge = 5e3, Te = 100, Ve = (R - G) / (ge / Te);
      ne = window.setInterval(() => {
        if (G += Ve, G >= R && (G = R, re()), ke.value.progress < R) {
          const We = Math.floor(G);
          ke.value = {
            progress: We,
            state: Ye(We),
            message: ut(We)
          };
        }
      }, Te);
    }
    function re() {
      ne && (clearInterval(ne), ne = null);
    }
    function Ce() {
      de || (de = window.setInterval(async () => {
        try {
          let G = await I.getStatus();
          if ((!G || G.state === "idle") && (G = await b()), !G)
            return;
          const R = G.progress || 0;
          R >= 60 && re();
          const ge = Math.max(R, ke.value.progress), Te = G.state && G.state !== "idle" && G.state !== "unknown", Ve = Te ? G.state : Ye(ge), We = Te && G.message || ut(ge);
          ke.value = {
            state: Ve,
            progress: ge,
            message: We
          }, G.state === "complete" ? (re(), Re(), se.value = !1, be(`✓ Switched to ${Me.value}`, "success"), await De(), Me.value = "") : G.state === "rolled_back" ? (re(), Re(), se.value = !1, be("Switch failed, restored previous environment", "warning"), Me.value = "") : G.state === "critical_failure" && (re(), Re(), se.value = !1, be(`Critical error during switch: ${G.message}`, "error"), Me.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function Re() {
      re(), de && (clearInterval(de), de = null);
    }
    function Je() {
      var G;
      le.value = !1, Me.value = "", (G = L.value) != null && G.state && L.value.state !== "managed" && (E.value = L.value.state === "no_workspace" ? 1 : 2, S.value = !0);
    }
    async function Ct() {
      $e.value = !1, await De(), be("✓ Changes committed", "success");
    }
    async function Wt() {
      Ee.value = !1;
      const G = be("Syncing environment...", "info", 0);
      try {
        const R = await z("skip", !0);
        if (Fe(G), R.status === "success") {
          const ge = [];
          R.nodes_installed.length && ge.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && ge.push(`${R.nodes_removed.length} removed`);
          const Te = ge.length ? `: ${ge.join(", ")}` : "";
          be(`✓ Environment synced${Te}`, "success"), await De();
        } else {
          const ge = R.errors.length ? R.errors.join("; ") : R.message;
          be(`Sync failed: ${ge}`, "error");
        }
      } catch (R) {
        Fe(G), be(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function jt(G) {
      var R;
      try {
        const ge = await W(G);
        ge.failed.length === 0 ? be(`✓ Repaired ${ge.success} workflow${ge.success === 1 ? "" : "s"}`, "success") : be(`Repaired ${ge.success}, failed: ${ge.failed.length}`, "warning"), await De();
      } catch (ge) {
        be(`Repair failed: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
      } finally {
        (R = M.value) == null || R.resetRepairingState();
      }
    }
    async function As(G, R) {
      be(`Environment '${G}' created`, "success"), await De(), O.value && await O.value.loadEnvironments(), R && await pe(G);
    }
    async function Fs(G) {
      var R;
      if (((R = H.value) == null ? void 0 : R.name) === G) {
        be("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      fe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${G}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          fe.value = null;
          try {
            const ge = await $(G);
            ge.status === "success" ? (be(`Environment "${G}" deleted`, "success"), await De(), O.value && await O.value.loadEnvironments()) : be(ge.message || "Failed to delete environment", "error");
          } catch (ge) {
            be(`Error deleting environment: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Vs(G) {
      S.value = !1;
      try {
        L.value = await f();
      } catch {
      }
      await pe(G);
    }
    function Ws() {
      S.value = !1, n("close");
    }
    async function js(G) {
      await pe(G);
    }
    async function Gs(G) {
      await De(), await pe(G);
    }
    async function qs(G) {
      L.value = await f(), console.log(`Environment '${G}' created. Available for switching.`);
    }
    function Hs() {
      _e("environments", "all-envs"), setTimeout(() => {
        var G;
        (G = O.value) == null || G.openCreateModal();
      }, 100);
    }
    function fs() {
      if (!C.value) return [];
      const G = [], R = C.value.workflows;
      return R.new.length && G.push(`${R.new.length} new workflow(s)`), R.modified.length && G.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && G.push(`${R.deleted.length} deleted workflow(s)`), G;
    }
    return Ue(async () => {
      try {
        if (L.value = await f(), L.value.state === "no_workspace") {
          S.value = !0, E.value = 1;
          return;
        }
        if (L.value.state === "empty_workspace") {
          S.value = !0, E.value = 2;
          return;
        }
        if (L.value.state === "unmanaged") {
          S.value = !0, E.value = 2;
          return;
        }
      } catch (G) {
        console.warn("Setup status check failed, proceeding normally:", G);
      }
      await De();
    }), (G, R) => {
      var ge, Te, Ve, We, mt, Rt, gs, ps, hs;
      return s(), o("div", _k, [
        e("div", $k, [
          e("div", Ck, [
            R[34] || (R[34] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            C.value ? (s(), o("div", xk)) : d("", !0)
          ]),
          e("div", Sk, [
            e("button", {
              class: "sponsor-btn",
              onClick: R[0] || (R[0] = (he) => B("https://github.com/sponsors/comfyhub-org")),
              title: "Sponsor ComfyHub",
              "aria-label": "Sponsor ComfyHub on GitHub"
            }, [...R[35] || (R[35] = [
              y(" Sponsor ", -1),
              e("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[1] || (R[1] = (he) => B("https://discord.gg/2h5rSTeh6Y")),
              title: "Join Discord",
              "aria-label": "Join ComfyHub Discord"
            }, [...R[36] || (R[36] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.027-.07 8.735 8.735 0 0 1-1.248-.595.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085c-.399.233-.813.44-1.249.594a.05.05 0 0 0-.027.07c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zM5.347 10.64c-.79 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.807 0 1.451.733 1.44 1.613 0 .888-.637 1.612-1.44 1.612zm5.316 0c-.788 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.808 0 1.451.733 1.44 1.613 0 .888-.632 1.612-1.44 1.612z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[2] || (R[2] = (he) => B("https://x.com/akatz_ai")),
              title: "Follow on X",
              "aria-label": "Follow on X"
            }, [...R[37] || (R[37] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[3] || (R[3] = (he) => B("https://github.com/comfyhub-org/comfygit")),
              title: "View on GitHub",
              "aria-label": "View ComfyGit on GitHub"
            }, [...R[38] || (R[38] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[4] || (R[4] = (he) => B("https://docs.comfyhub.org/comfygit/")),
              title: "Documentation",
              "aria-label": "View ComfyGit Documentation"
            }, [...R[39] || (R[39] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" })
              ], -1)
            ])]),
            R[42] || (R[42] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: ie(["icon-btn", { spinning: U.value }]),
              onClick: De,
              title: "Refresh"
            }, [...R[40] || (R[40] = [
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
              onClick: R[5] || (R[5] = (he) => n("close")),
              title: "Close"
            }, [...R[41] || (R[41] = [
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
        e("div", Ik, [
          e("div", { class: "env-switcher-header" }, [
            R[43] || (R[43] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: A
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Q
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[6] || (R[6] = (he) => _e("environments", "all-envs"))
          }, [
            C.value ? (s(), o("div", Ek, [
              e("span", null, a(((ge = H.value) == null ? void 0 : ge.name) || ((Te = C.value) == null ? void 0 : Te.environment) || "Loading..."), 1),
              e("span", Mk, "(" + a(C.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            R[44] || (R[44] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Tk, [
          e("div", Rk, [
            e("div", zk, [
              e("div", Lk, [
                R[45] || (R[45] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "status" && ue.value === "this-env" }]),
                  onClick: R[7] || (R[7] = (he) => _e("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "workflows" }]),
                  onClick: R[8] || (R[8] = (he) => _e("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "models-env" }]),
                  onClick: R[9] || (R[9] = (he) => _e("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "branches" }]),
                  onClick: R[10] || (R[10] = (he) => _e("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "history" }]),
                  onClick: R[11] || (R[11] = (he) => _e("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "nodes" }]),
                  onClick: R[12] || (R[12] = (he) => _e("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "debug-env" }]),
                  onClick: R[13] || (R[13] = (he) => _e("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              R[48] || (R[48] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Pk, [
                R[46] || (R[46] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "environments" }]),
                  onClick: R[14] || (R[14] = (he) => _e("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "model-index" }]),
                  onClick: R[15] || (R[15] = (he) => _e("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "settings" }]),
                  onClick: R[16] || (R[16] = (he) => _e("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "debug-workspace" }]),
                  onClick: R[17] || (R[17] = (he) => _e("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              R[49] || (R[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Dk, [
                R[47] || (R[47] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "export" }]),
                  onClick: R[18] || (R[18] = (he) => _e("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "import" }]),
                  onClick: R[19] || (R[19] = (he) => _e("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: Y.value === "remotes" }]),
                  onClick: R[20] || (R[20] = (he) => _e("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            R[50] || (R[50] = Qs('<div class="sidebar-footer" data-v-cb62abbf><span class="version" data-v-cb62abbf>v0.0.1</span><span class="made-by" data-v-cb62abbf>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-cb62abbf><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-cb62abbf></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", Nk, [
            ae.value ? (s(), o("div", Uk, a(ae.value), 1)) : !C.value && Y.value === "status" ? (s(), o("div", Ok, " Loading status... ")) : (s(), o(F, { key: 2 }, [
              Y.value === "status" ? (s(), T(xa, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: M,
                status: C.value,
                "setup-state": N.value,
                onSwitchBranch: ve,
                onCommitChanges: R[21] || (R[21] = (he) => $e.value = !0),
                onSyncEnvironment: R[22] || (R[22] = (he) => Ee.value = !0),
                onViewWorkflows: R[23] || (R[23] = (he) => _e("workflows", "this-env")),
                onViewHistory: R[24] || (R[24] = (he) => _e("history", "this-env")),
                onViewDebug: R[25] || (R[25] = (he) => _e("debug-env", "this-env")),
                onRepairMissingModels: jt,
                onStartSetup: R[26] || (R[26] = (he) => S.value = !0),
                onViewEnvironments: R[27] || (R[27] = (he) => _e("environments", "all-envs")),
                onCreateEnvironment: Hs
              }, null, 8, ["status", "setup-state"])) : Y.value === "workflows" ? (s(), T(Hu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: oe,
                onRefresh: De
              }, null, 512)) : Y.value === "models-env" ? (s(), T(Mm, {
                key: 2,
                onNavigate: Le
              })) : Y.value === "branches" ? (s(), T(Aa, {
                key: 3,
                branches: j.value,
                current: ((Ve = C.value) == null ? void 0 : Ve.branch) || null,
                onSwitch: dt,
                onCreate: _t,
                onDelete: ct
              }, null, 8, ["branches", "current"])) : Y.value === "history" ? (s(), T(Qa, {
                key: 4,
                commits: x.value,
                onSelect: bt,
                onCheckout: ht
              }, null, 8, ["commits"])) : Y.value === "nodes" ? (s(), T(hv, {
                key: 5,
                onOpenNodeManager: J
              })) : Y.value === "debug-env" ? (s(), T($p, { key: 6 })) : Y.value === "environments" ? (s(), T(Sh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: O,
                onSwitch: pe,
                onCreated: As,
                onDelete: Fs
              }, null, 512)) : Y.value === "model-index" ? (s(), T(Ym, {
                key: 8,
                onRefresh: De
              })) : Y.value === "settings" ? (s(), T(wp, { key: 9 })) : Y.value === "debug-workspace" ? (s(), T(bp, { key: 10 })) : Y.value === "export" ? (s(), T(n1, { key: 11 })) : Y.value === "import" ? (s(), T(Yy, {
                key: 12,
                onImportCompleteSwitch: Gs
              })) : Y.value === "remotes" ? (s(), T(ep, {
                key: 13,
                onToast: kt
              })) : d("", !0)
            ], 64))
          ])
        ]),
        we.value ? (s(), T(vw, {
          key: 0,
          commit: we.value,
          onClose: R[28] || (R[28] = (he) => we.value = null),
          onCheckout: ht,
          onCreateBranch: K
        }, null, 8, ["commit"])) : d("", !0),
        fe.value ? (s(), T(yw, {
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
          onCancel: R[29] || (R[29] = (he) => fe.value = null),
          onSecondary: fe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        k(p0, {
          show: le.value,
          "from-environment": ((We = H.value) == null ? void 0 : We.name) || "unknown",
          "to-environment": Me.value,
          onConfirm: ot,
          onClose: Je
        }, null, 8, ["show", "from-environment", "to-environment"]),
        $e.value && C.value ? (s(), T(Ps, {
          key: 2,
          status: C.value,
          "as-modal": !0,
          onClose: R[30] || (R[30] = (he) => $e.value = !1),
          onCommitted: Ct
        }, null, 8, ["status"])) : d("", !0),
        Ee.value && C.value ? (s(), T(N0, {
          key: 3,
          show: Ee.value,
          "mismatch-details": {
            missing_nodes: C.value.comparison.missing_nodes,
            extra_nodes: C.value.comparison.extra_nodes
          },
          onConfirm: Wt,
          onClose: R[31] || (R[31] = (he) => Ee.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        k(I0, {
          show: se.value,
          state: ke.value.state,
          progress: ke.value.progress,
          message: ke.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        me.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[33] || (R[33] = ze((he) => me.value = !1, ["self"]))
        }, [
          e("div", Bk, [
            e("div", Ak, [
              R[52] || (R[52] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[32] || (R[32] = (he) => me.value = !1)
              }, [...R[51] || (R[51] = [
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
            e("div", Fk, [
              R[53] || (R[53] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Vk, [
                (s(!0), o(F, null, ee(V.value, (he) => (s(), o("div", {
                  key: he.name,
                  class: ie(["env-item", { current: he.is_current }])
                }, [
                  e("div", Wk, [
                    e("div", jk, [
                      e("span", Gk, a(he.is_current ? "●" : "○"), 1),
                      e("span", qk, a(he.name), 1),
                      he.current_branch ? (s(), o("span", Hk, "(" + a(he.current_branch) + ")", 1)) : d("", !0),
                      he.is_current ? (s(), o("span", Kk, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Yk, a(he.workflow_count) + " workflows • " + a(he.node_count) + " nodes ", 1)
                  ]),
                  he.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (l_) => pe(he.name)
                  }, " SWITCH ", 8, Jk))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        S.value ? (s(), T(bk, {
          key: 5,
          "default-path": ((mt = L.value) == null ? void 0 : mt.default_path) || "~/comfygit",
          "detected-models-dir": ((Rt = L.value) == null ? void 0 : Rt.detected_models_dir) || null,
          "initial-step": E.value,
          "existing-environments": ((gs = L.value) == null ? void 0 : gs.environments) || [],
          "cli-installed": ((ps = L.value) == null ? void 0 : ps.cli_installed) ?? !0,
          "setup-state": ((hs = L.value) == null ? void 0 : hs.state) || "no_workspace",
          onComplete: Vs,
          onClose: Ws,
          onSwitchEnvironment: js,
          onEnvironmentCreatedNoSwitch: qs
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state"])) : d("", !0),
        e("div", Qk, [
          k(Xs, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(F, null, ee(ye.value, (he) => (s(), o("div", {
                key: he.id,
                class: ie(["toast", he.type])
              }, [
                e("span", Xk, a(he.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), eb = /* @__PURE__ */ Z(Zk, [["__scopeId", "data-v-cb62abbf"]]), tb = { class: "item-header" }, sb = { class: "item-info" }, ob = { class: "filename" }, nb = { class: "metadata" }, ab = { class: "size" }, lb = {
  key: 0,
  class: "type"
}, ib = { class: "item-actions" }, rb = {
  key: 0,
  class: "progress-section"
}, db = { class: "progress-bar" }, cb = { class: "progress-stats" }, ub = { class: "downloaded" }, mb = { class: "speed" }, vb = {
  key: 0,
  class: "eta"
}, fb = {
  key: 1,
  class: "status-msg paused"
}, gb = {
  key: 2,
  class: "status-msg queued"
}, pb = {
  key: 3,
  class: "status-msg completed"
}, hb = {
  key: 4,
  class: "status-msg failed"
}, yb = {
  key: 0,
  class: "retries"
}, wb = /* @__PURE__ */ X({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function i(v) {
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
      class: ie(["download-item", `status-${t.item.status}`])
    }, [
      e("div", tb, [
        e("div", sb, [
          e("div", ob, a(t.item.filename), 1),
          e("div", nb, [
            e("span", ab, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", lb, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", ib, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (r) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (r) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (r) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (r) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", rb, [
        e("div", db, [
          e("div", {
            class: "progress-fill",
            style: ft({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", cb, [
          e("span", ub, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", mb, a(w(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", vb, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", fb, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", gb, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", pb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", hb, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", yb, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ Z(wb, [["__scopeId", "data-v-2110df65"]]), kb = { class: "queue-title" }, bb = { class: "count" }, _b = { class: "queue-actions" }, $b = { class: "action-label" }, Cb = {
  key: 0,
  class: "overall-progress"
}, xb = { class: "progress-bar" }, Sb = {
  key: 0,
  class: "current-mini"
}, Ib = { class: "filename" }, Eb = { class: "speed" }, Mb = {
  key: 1,
  class: "queue-content"
}, Tb = {
  key: 0,
  class: "section"
}, Rb = {
  key: 1,
  class: "section"
}, zb = { class: "section-header" }, Lb = { class: "section-label paused" }, Pb = { class: "items-list" }, Db = {
  key: 2,
  class: "section"
}, Nb = { class: "section-header" }, Ub = { class: "section-label" }, Ob = { class: "items-list" }, Bb = {
  key: 3,
  class: "section"
}, Ab = { class: "section-header" }, Fb = { class: "section-label" }, Vb = { class: "items-list" }, Wb = {
  key: 4,
  class: "section"
}, jb = { class: "section-header" }, Gb = { class: "section-label failed" }, qb = { class: "items-list" }, Hb = /* @__PURE__ */ X({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: i,
      completedItems: w,
      failedItems: g,
      pausedItems: v,
      hasItems: m,
      activeCount: r,
      cancelDownload: c,
      retryDownload: p,
      resumeDownload: h,
      resumeAllPaused: b,
      removeItem: $,
      clearCompleted: z
    } = Vt(), W = _(!1);
    let f = null;
    wt(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: v.value.length,
        completed: w.value.length
      }),
      (x, j) => {
        f && (clearTimeout(f), f = null);
        const V = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, H = j && (j.active > 0 || j.paused > 0);
        V && H && (f = setTimeout(() => {
          z(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const I = P(() => {
      var V;
      if (u.items.length === 0) return 0;
      const x = w.value.length, j = ((V = n.value) == null ? void 0 : V.progress) || 0;
      return Math.round((x + j / 100) / u.items.length * 100);
    });
    function B(x) {
      c(x);
    }
    function C(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, j) => (s(), T(Ae, { to: "body" }, [
      xe(m) ? (s(), o("div", {
        key: 0,
        class: ie(["model-download-queue", { minimized: !W.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: j[0] || (j[0] = (V) => W.value = !W.value)
        }, [
          e("div", kb, [
            j[4] || (j[4] = e("span", { class: "icon" }, "↓", -1)),
            j[5] || (j[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", bb, "(" + a(xe(r)) + "/" + a(xe(u).items.length) + ")", 1)
          ]),
          e("div", _b, [
            e("span", $b, a(W.value ? "minimize" : "expand"), 1)
          ])
        ]),
        W.value ? (s(), o("div", Mb, [
          xe(n) ? (s(), o("div", Tb, [
            j[6] || (j[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(Dt, {
              item: xe(n),
              onCancel: j[1] || (j[1] = (V) => B(xe(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          xe(v).length > 0 ? (s(), o("div", Rb, [
            e("div", zb, [
              e("span", Lb, "Paused (" + a(xe(v).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: j[2] || (j[2] = //@ts-ignore
                (...V) => xe(b) && xe(b)(...V))
              }, "Resume All")
            ]),
            e("div", Pb, [
              (s(!0), o(F, null, ee(xe(v), (V) => (s(), T(Dt, {
                key: V.id,
                item: V,
                onResume: (H) => xe(h)(V.id),
                onRemove: (H) => xe($)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          xe(i).length > 0 ? (s(), o("div", Db, [
            e("div", Nb, [
              e("span", Ub, "Queued (" + a(xe(i).length) + ")", 1)
            ]),
            e("div", Ob, [
              (s(!0), o(F, null, ee(xe(i), (V) => (s(), T(Dt, {
                key: V.id,
                item: V,
                onCancel: (H) => B(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          xe(w).length > 0 ? (s(), o("div", Bb, [
            e("div", Ab, [
              e("span", Fb, "Completed (" + a(xe(w).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: j[3] || (j[3] = //@ts-ignore
                (...V) => xe(z) && xe(z)(...V))
              }, "Clear")
            ]),
            e("div", Vb, [
              (s(!0), o(F, null, ee(xe(w).slice(0, 3), (V) => (s(), T(Dt, {
                key: V.id,
                item: V,
                onRemove: (H) => xe($)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          xe(g).length > 0 ? (s(), o("div", Wb, [
            e("div", jb, [
              e("span", Gb, "Failed (" + a(xe(g).length) + ")", 1)
            ]),
            e("div", qb, [
              (s(!0), o(F, null, ee(xe(g), (V) => (s(), T(Dt, {
                key: V.id,
                item: V,
                onRetry: (H) => xe(p)(V.id),
                onRemove: (H) => xe($)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Cb, [
          e("div", xb, [
            e("div", {
              class: "progress-fill",
              style: ft({ width: `${I.value}%` })
            }, null, 4)
          ]),
          xe(n) ? (s(), o("div", Sb, [
            e("span", Ib, a(xe(n).filename), 1),
            e("span", Eb, a(C(xe(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), Kb = /* @__PURE__ */ Z(Hb, [["__scopeId", "data-v-60751cfa"]]), Yb = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Jb = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Qb = {
  comfy: Yb,
  phosphor: Jb
}, ms = "comfy", Ds = "comfygit-theme";
let $t = null, Ns = ms;
function Xb() {
  try {
    const t = localStorage.getItem(Ds);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ms;
}
function Us(t = ms) {
  $t && $t.remove(), $t = document.createElement("style"), $t.id = "comfygit-theme-styles", $t.setAttribute("data-theme", t), $t.textContent = Qb[t], document.head.appendChild($t), document.body.setAttribute("data-comfygit-theme", t), Ns = t;
  try {
    localStorage.setItem(Ds, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Zb() {
  return Ns;
}
function e_(t) {
  Us(t);
}
const vs = document.createElement("link");
vs.rel = "stylesheet";
vs.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(vs);
const t_ = Xb();
Us(t_);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), e_(t);
  },
  getTheme: () => {
    const t = Zb();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let et = null, qe = null, Bt = null, Nt = null, bs = null;
const Et = _(null);
let Os = "managed";
async function Kt() {
  var t;
  if (!((t = yt) != null && t.api)) return null;
  try {
    const u = await yt.api.fetchApi("/v2/comfygit/status");
    u.ok && (Et.value = await u.json());
  } catch {
  }
}
async function as() {
  var t;
  if ((t = yt) != null && t.api)
    try {
      const u = await yt.api.fetchApi("/v2/setup/status");
      u.ok && (Os = (await u.json()).state);
    } catch {
    }
}
function s_() {
  if (!Et.value) return !1;
  const t = Et.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Et.value.has_changes;
}
function o_() {
  et && et.remove(), et = document.createElement("div"), et.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", et.appendChild(t), et.addEventListener("click", (i) => {
    i.target === et && os();
  });
  const u = (i) => {
    i.key === "Escape" && (os(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), rs({
    render: () => ds(eb, {
      onClose: os,
      onStatusUpdate: async (i) => {
        Et.value = i, At(), await as(), ls();
      }
    })
  }).mount(t), document.body.appendChild(et);
}
function os() {
  et && (et.remove(), et = null);
}
function n_(t) {
  Ut(), qe = document.createElement("div"), qe.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  qe.style.position = "fixed", qe.style.top = `${u.bottom + 8}px`, qe.style.right = `${window.innerWidth - u.right}px`, qe.style.zIndex = "10001";
  const n = (w) => {
    qe && !qe.contains(w.target) && w.target !== t && (Ut(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (w) => {
    w.key === "Escape" && (Ut(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Bt = rs({
    render: () => ds(Ps, {
      status: Et.value,
      onClose: Ut,
      onCommitted: () => {
        Ut(), Kt().then(At);
      }
    })
  }), Bt.mount(qe), document.body.appendChild(qe);
}
function Ut() {
  Bt && (Bt.unmount(), Bt = null), qe && (qe.remove(), qe = null);
}
function a_() {
  Nt || (Nt = document.createElement("div"), Nt.className = "comfygit-download-queue-root", bs = rs({
    render: () => ds(Kb)
  }), bs.mount(Nt), document.body.appendChild(Nt), console.log("[ComfyGit] Model download queue mounted"));
}
let Qe = null;
function At() {
  if (!Qe) return;
  const t = Qe.querySelector(".commit-indicator");
  t && (t.style.display = s_() ? "block" : "none");
}
function ls() {
  if (!Qe) return;
  const t = Os !== "managed";
  Qe.disabled = t, Qe.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Bs = document.createElement("style");
Bs.textContent = `
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
document.head.appendChild(Bs);
yt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var w, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = o_, Qe = document.createElement("button"), Qe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Qe.innerHTML = 'Commit <span class="commit-indicator"></span>', Qe.title = "Quick Commit", Qe.onclick = () => n_(Qe), t.appendChild(u), t.appendChild(Qe), (g = (w = yt.menu) == null ? void 0 : w.settingsGroup) != null && g.element && (yt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), a_();
    const { loadPendingDownloads: n } = Vt();
    n(), await Promise.all([Kt(), as()]), At(), ls(), setInterval(async () => {
      await Promise.all([Kt(), as()]), At(), ls();
    }, 3e4);
    const i = yt.api;
    if (i) {
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
      i.addEventListener("comfygit:workflow-changed", async (c) => {
        const { change_type: p, workflow_name: h } = c.detail;
        console.log(`[ComfyGit] Workflow ${p}: ${h}`), await Kt(), At();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let r = !1;
      i.addEventListener("status", async (c) => {
        const p = c.detail != null;
        p && !r && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), v()) : m()), r = p;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
