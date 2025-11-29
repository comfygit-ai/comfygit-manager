import { app as kt } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as ge, createBlock as S, resolveDynamicComponent as ss, normalizeClass as le, withCtx as i, toDisplayString as n, createVNode as g, createTextVNode as w, computed as U, Fragment as G, renderList as se, normalizeStyle as qe, ref as _, onMounted as ze, watch as Ht, Teleport as Te, withModifiers as Ee, Transition as As, createSlots as qt, withKeys as ct, onUnmounted as Ws, reactive as fs, readonly as Gs, unref as he, withDirectives as Be, vModelText as Nt, nextTick as js, vModelSelect as bt, vModelCheckbox as Jt, TransitionGroup as Hs, createApp as os, h as as } from "vue";
const qs = { class: "panel-layout" }, Ks = {
  key: 0,
  class: "panel-layout-header"
}, Ys = {
  key: 1,
  class: "panel-layout-search"
}, Xs = { class: "panel-layout-content" }, Qs = {
  key: 2,
  class: "panel-layout-footer"
}, Zs = /* @__PURE__ */ Y({
  __name: "PanelLayout",
  setup(t) {
    return (r, a) => (s(), o("div", qs, [
      r.$slots.header ? (s(), o("div", Ks, [
        ge(r.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      r.$slots.search ? (s(), o("div", Ys, [
        ge(r.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", Xs, [
        ge(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (s(), o("div", Qs, [
        ge(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), X = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [d, p] of r)
    a[d] = p;
  return a;
}, Oe = /* @__PURE__ */ X(Zs, [["__scopeId", "data-v-21565df9"]]), Js = {
  key: 0,
  class: "panel-title-prefix"
}, eo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, to = /* @__PURE__ */ Y({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, a) => (s(), S(ss(`h${t.level}`), {
      class: le(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", Js, n(t.prefix), 1)) : (s(), o("span", eo)),
        ge(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), so = /* @__PURE__ */ X(to, [["__scopeId", "data-v-c3875efc"]]), oo = ["title"], ao = ["width", "height"], no = /* @__PURE__ */ Y({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: a[0] || (a[0] = (d) => r.$emit("click"))
    }, [
      (s(), o("svg", {
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
      ])], 8, ao))
    ], 8, oo));
  }
}), gs = /* @__PURE__ */ X(no, [["__scopeId", "data-v-6fc7f16d"]]), lo = { class: "header-left" }, io = {
  key: 0,
  class: "header-actions"
}, ro = /* @__PURE__ */ Y({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: le(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", lo, [
        g(so, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            w(n(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), S(gs, {
          key: 0,
          onClick: a[0] || (a[0] = (d) => r.$emit("info-click"))
        })) : c("", !0)
      ]),
      r.$slots.actions ? (s(), o("div", io, [
        ge(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ X(ro, [["__scopeId", "data-v-55a62cd6"]]), co = {
  key: 0,
  class: "section-title-count"
}, uo = {
  key: 1,
  class: "section-title-icon"
}, mo = /* @__PURE__ */ Y({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), S(ss(`h${t.level}`), {
      class: le(["section-title", { clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (d) => t.clickable && r.$emit("click"))
    }, {
      default: i(() => [
        ge(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", co, "(" + n(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", uo, n(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ae = /* @__PURE__ */ X(mo, [["__scopeId", "data-v-559361eb"]]), vo = { class: "status-grid" }, fo = { class: "status-grid__columns" }, go = { class: "status-grid__column" }, po = { class: "status-grid__title" }, ho = { class: "status-grid__column status-grid__column--right" }, yo = { class: "status-grid__title" }, wo = {
  key: 0,
  class: "status-grid__footer"
}, ko = /* @__PURE__ */ Y({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, a) => (s(), o("div", vo, [
      e("div", fo, [
        e("div", go, [
          e("h4", po, n(t.leftTitle), 1),
          ge(r.$slots, "left", {}, void 0, !0)
        ]),
        e("div", ho, [
          e("h4", yo, n(t.rightTitle), 1),
          ge(r.$slots, "right", {}, void 0, !0)
        ])
      ]),
      r.$slots.footer ? (s(), o("div", wo, [
        ge(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), bo = /* @__PURE__ */ X(ko, [["__scopeId", "data-v-73b7ba3f"]]), _o = {
  key: 0,
  class: "status-item__icon"
}, $o = {
  key: 1,
  class: "status-item__count"
}, Co = { class: "status-item__label" }, xo = /* @__PURE__ */ Y({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, a = U(() => `status-item--${r.variant}`);
    return (d, p) => (s(), o("div", {
      class: le(["status-item", a.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", _o, n(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", $o, n(t.count), 1)) : c("", !0),
      e("span", Co, n(t.label), 1)
    ], 2));
  }
}), Qe = /* @__PURE__ */ X(xo, [["__scopeId", "data-v-6f929183"]]), So = { class: "issue-card__header" }, Io = { class: "issue-card__icon" }, Eo = { class: "issue-card__title" }, Mo = {
  key: 0,
  class: "issue-card__content"
}, zo = {
  key: 0,
  class: "issue-card__description"
}, Lo = {
  key: 1,
  class: "issue-card__items"
}, Do = {
  key: 2,
  class: "issue-card__actions"
}, Ro = /* @__PURE__ */ Y({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, a = U(() => `issue-card--${r.severity}`);
    return (d, p) => (s(), o("div", {
      class: le(["issue-card", a.value])
    }, [
      e("div", So, [
        e("span", Io, n(t.icon), 1),
        e("h4", Eo, n(t.title), 1)
      ]),
      d.$slots.default || t.description ? (s(), o("div", Mo, [
        t.description ? (s(), o("p", zo, n(t.description), 1)) : c("", !0),
        ge(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", Lo, [
        (s(!0), o(G, null, se(t.items, (v, y) => (s(), o("div", {
          key: y,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, n(v), 1)
        ]))), 128))
      ])) : c("", !0),
      d.$slots.actions ? (s(), o("div", Do, [
        ge(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), tt = /* @__PURE__ */ X(Ro, [["__scopeId", "data-v-df6aa348"]]), No = ["type", "disabled"], To = {
  key: 0,
  class: "spinner"
}, Uo = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: le(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: a[0] || (a[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", To)) : c("", !0),
      t.loading ? c("", !0) : ge(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, No));
  }
}), te = /* @__PURE__ */ X(Uo, [["__scopeId", "data-v-772abe47"]]), Po = { class: "empty-state" }, Bo = {
  key: 0,
  class: "empty-icon"
}, Oo = { class: "empty-message" }, Fo = /* @__PURE__ */ Y({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, a) => (s(), o("div", Po, [
      t.icon ? (s(), o("div", Bo, n(t.icon), 1)) : c("", !0),
      e("p", Oo, n(t.message), 1),
      t.actionLabel ? (s(), S(te, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (d) => r.$emit("action"))
      }, {
        default: i(() => [
          w(n(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ X(Fo, [["__scopeId", "data-v-4466284f"]]), Vo = /* @__PURE__ */ Y({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, a) => (s(), o("span", {
      class: le(["detail-label"]),
      style: qe({ minWidth: t.minWidth })
    }, [
      ge(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), es = /* @__PURE__ */ X(Vo, [["__scopeId", "data-v-75e9eeb8"]]), Ao = /* @__PURE__ */ Y({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (s(), o("span", {
      class: le(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ge(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ts = /* @__PURE__ */ X(Ao, [["__scopeId", "data-v-2f186e4c"]]), Wo = { class: "detail-row" }, Go = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("div", Wo, [
      g(es, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          w(n(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), S(ts, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          w(n(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ge(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), xe = /* @__PURE__ */ X(Go, [["__scopeId", "data-v-ef15664a"]]), jo = { class: "modal-header" }, Ho = { class: "modal-body" }, qo = { class: "status-section" }, Ko = {
  key: 0,
  class: "status-section"
}, Yo = { class: "section-header-row" }, Xo = {
  key: 0,
  class: "workflow-group"
}, Qo = { class: "workflow-group-header" }, Zo = { class: "workflow-group-title" }, Jo = { class: "workflow-list" }, ea = { class: "workflow-name" }, ta = { class: "workflow-issue" }, sa = {
  key: 1,
  class: "workflow-group"
}, oa = { class: "workflow-group-header" }, aa = { class: "workflow-group-title" }, na = { class: "workflow-list" }, la = { class: "workflow-name" }, ia = { class: "workflow-issue" }, ra = {
  key: 2,
  class: "workflow-group"
}, da = { class: "workflow-group-header" }, ca = { class: "workflow-group-title" }, ua = { class: "workflow-list" }, ma = { class: "workflow-name" }, va = {
  key: 3,
  class: "workflow-group"
}, fa = { class: "workflow-group-header" }, ga = { class: "workflow-group-title" }, pa = { class: "workflow-list" }, ha = { class: "workflow-name" }, ya = {
  key: 4,
  class: "workflow-group"
}, wa = { class: "workflow-group-header" }, ka = { class: "workflow-group-title" }, ba = { class: "workflow-list" }, _a = { class: "workflow-name" }, $a = {
  key: 5,
  class: "workflow-group"
}, Ca = { class: "workflow-group-title" }, xa = { class: "expand-icon" }, Sa = {
  key: 0,
  class: "workflow-list"
}, Ia = { class: "workflow-name" }, Ea = {
  key: 1,
  class: "status-section"
}, Ma = {
  key: 0,
  class: "change-group"
}, za = { class: "change-group-header" }, La = { class: "change-group-title" }, Da = { class: "change-list" }, Ra = { class: "node-name" }, Na = {
  key: 0,
  class: "dev-badge"
}, Ta = {
  key: 1,
  class: "change-group"
}, Ua = { class: "change-group-header" }, Pa = { class: "change-group-title" }, Ba = { class: "change-list" }, Oa = { class: "node-name" }, Fa = {
  key: 0,
  class: "dev-badge"
}, Va = {
  key: 2,
  class: "change-group"
}, Aa = { class: "change-list" }, Wa = { class: "change-item" }, Ga = { class: "node-name" }, ja = {
  key: 3,
  class: "change-group"
}, Ha = {
  key: 2,
  class: "status-section"
}, qa = { class: "section-header-row" }, Ka = {
  key: 0,
  class: "drift-item"
}, Ya = { class: "drift-list" }, Xa = {
  key: 0,
  class: "drift-list-more"
}, Qa = {
  key: 1,
  class: "drift-item"
}, Za = { class: "drift-list" }, Ja = {
  key: 0,
  class: "drift-list-more"
}, en = {
  key: 2,
  class: "drift-item"
}, tn = {
  key: 3,
  class: "drift-item"
}, sn = {
  key: 3,
  class: "status-section"
}, on = { class: "info-box" }, an = { class: "drift-list" }, nn = {
  key: 0,
  class: "drift-list-more"
}, ln = {
  key: 4,
  class: "status-section"
}, rn = { class: "warning-box" }, dn = {
  key: 5,
  class: "empty-state-inline"
}, cn = { class: "modal-actions" }, un = /* @__PURE__ */ Y({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const r = t, a = _(!1);
    ze(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), Ht(() => r.show, (k, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", k);
    }, { immediate: !0 });
    const d = U(() => {
      var k, C, L;
      return ((L = (C = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : L.filter(
        ($) => $.status === "broken" && $.sync_state === "synced"
      )) || [];
    }), p = U(() => {
      var k, C, L;
      return ((L = (C = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : L.filter(
        ($) => $.status === "broken" && $.sync_state !== "synced"
      )) || [];
    }), v = U(() => {
      var k, C, L;
      return ((L = (C = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : C.synced) == null ? void 0 : L.filter(($) => {
        var R, O, I;
        const f = (I = (O = (R = r.status) == null ? void 0 : R.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : I.find((B) => B.name === $);
        return !f || f.status !== "broken";
      })) || [];
    }), y = U(() => {
      var k, C, L, $, f;
      return (k = r.status) != null && k.workflows ? (((C = r.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((L = r.status.workflows.modified) == null ? void 0 : L.length) ?? 0) > 0 || ((($ = r.status.workflows.deleted) == null ? void 0 : $.length) ?? 0) > 0 || (((f = r.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), m = U(() => {
      var C, L, $;
      const k = (C = r.status) == null ? void 0 : C.git_changes;
      return k ? (((L = k.nodes_added) == null ? void 0 : L.length) ?? 0) > 0 || ((($ = k.nodes_removed) == null ? void 0 : $.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), l = U(() => {
      var k, C, L, $, f, R;
      return !y.value && !m.value && ((C = (k = r.status) == null ? void 0 : k.comparison) == null ? void 0 : C.is_synced) && (((L = r.status) == null ? void 0 : L.missing_models_count) ?? 0) === 0 && (((R = (f = ($ = r.status) == null ? void 0 : $.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : R.length) ?? 0) === 0;
    }), u = U(() => {
      var C, L;
      const k = (L = (C = r.status) == null ? void 0 : C.git_changes) == null ? void 0 : L.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function b(k) {
      return typeof k == "string" ? k : k.name;
    }
    function h(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, C) => {
      var L, $, f, R, O, I, B, W, F, T, D, x, z, ee, K, ae, me, de, J, P, E, ne;
      return s(), S(Te, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[6] || (C[6] = (q) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[5] || (C[5] = Ee(() => {
            }, ["stop"]))
          }, [
            e("div", jo, [
              C[7] || (C[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (q) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", Ho, [
              e("div", qo, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[8] || (C[8] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                g(xe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              y.value ? (s(), o("div", Ko, [
                e("div", Yo, [
                  g(Ae, { level: "4" }, {
                    default: i(() => [...C[9] || (C[9] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (q) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                d.value.length ? (s(), o("div", Xo, [
                  e("div", Qo, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Zo, "BROKEN (COMMITTED) (" + n(d.value.length) + ")", 1)
                  ]),
                  e("div", Jo, [
                    (s(!0), o(G, null, se(d.value, (q) => (s(), o("div", {
                      key: q.name,
                      class: "workflow-item"
                    }, [
                      e("span", ea, n(q.name), 1),
                      e("span", ta, n(q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.length ? (s(), o("div", sa, [
                  e("div", oa, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", aa, "BROKEN (UNCOMMITTED) (" + n(p.value.length) + ")", 1)
                  ]),
                  e("div", na, [
                    (s(!0), o(G, null, se(p.value, (q) => (s(), o("div", {
                      key: q.name,
                      class: "workflow-item"
                    }, [
                      e("span", la, n(q.name), 1),
                      e("span", ia, n(q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                ($ = (L = t.status.workflows) == null ? void 0 : L.new) != null && $.length ? (s(), o("div", ra, [
                  e("div", da, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", ca, "NEW (" + n(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", ua, [
                    (s(!0), o(G, null, se(t.status.workflows.new, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", ma, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = (f = t.status.workflows) == null ? void 0 : f.modified) != null && R.length ? (s(), o("div", va, [
                  e("div", fa, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", ga, "MODIFIED (" + n(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", pa, [
                    (s(!0), o(G, null, se(t.status.workflows.modified, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", ha, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (I = (O = t.status.workflows) == null ? void 0 : O.deleted) != null && I.length ? (s(), o("div", ya, [
                  e("div", wa, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", ka, "DELETED (" + n(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", ba, [
                    (s(!0), o(G, null, se(t.status.workflows.deleted, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", _a, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                v.value.length ? (s(), o("div", $a, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (q) => a.value = !a.value)
                  }, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Ca, "SYNCED (" + n(v.value.length) + ")", 1),
                    e("span", xa, n(a.value ? "▼" : "▶"), 1)
                  ]),
                  a.value ? (s(), o("div", Sa, [
                    (s(!0), o(G, null, se(v.value, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", Ia, n(q), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (s(), o("div", Ea, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[16] || (C[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (W = (B = t.status.git_changes) == null ? void 0 : B.nodes_added) != null && W.length ? (s(), o("div", Ma, [
                  e("div", za, [
                    C[17] || (C[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", La, "NODES ADDED (" + n(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Da, [
                    (s(!0), o(G, null, se(t.status.git_changes.nodes_added, (q) => (s(), o("div", {
                      key: b(q),
                      class: "change-item"
                    }, [
                      e("span", Ra, n(b(q)), 1),
                      h(q) ? (s(), o("span", Na, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && T.length ? (s(), o("div", Ta, [
                  e("div", Ua, [
                    C[18] || (C[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Pa, "NODES REMOVED (" + n(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ba, [
                    (s(!0), o(G, null, se(t.status.git_changes.nodes_removed, (q) => (s(), o("div", {
                      key: b(q),
                      class: "change-item"
                    }, [
                      e("span", Oa, n(b(q)), 1),
                      h(q) ? (s(), o("span", Fa, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = t.status.git_changes) != null && D.workflow_changes ? (s(), o("div", Va, [
                  C[19] || (C[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Aa, [
                    e("div", Wa, [
                      e("span", Ga, n(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (x = t.status.git_changes) != null && x.has_other_changes ? (s(), o("div", ja, [...C[20] || (C[20] = [
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
              (z = t.status.comparison) != null && z.is_synced ? c("", !0) : (s(), o("div", Ha, [
                e("div", qa, [
                  g(Ae, { level: "4" }, {
                    default: i(() => [...C[21] || (C[21] = [
                      w("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[3] || (C[3] = (q) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                C[22] || (C[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (K = (ee = t.status.comparison) == null ? void 0 : ee.missing_nodes) != null && K.length ? (s(), o("div", Ka, [
                  g(xe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Ya, [
                    (s(!0), o(G, null, se(t.status.comparison.missing_nodes.slice(0, 10), (q) => (s(), o("div", {
                      key: q,
                      class: "drift-list-item"
                    }, " - " + n(q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Xa, " ... and " + n(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (me = (ae = t.status.comparison) == null ? void 0 : ae.extra_nodes) != null && me.length ? (s(), o("div", Qa, [
                  g(xe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Za, [
                    (s(!0), o(G, null, se(t.status.comparison.extra_nodes.slice(0, 10), (q) => (s(), o("div", {
                      key: q,
                      class: "drift-list-item"
                    }, " - " + n(q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Ja, " ... and " + n(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (J = (de = t.status.comparison) == null ? void 0 : de.version_mismatches) != null && J.length ? (s(), o("div", en, [
                  g(xe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (P = t.status.comparison) != null && P.packages_in_sync ? c("", !0) : (s(), o("div", tn, [
                  g(xe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ne = (E = t.status.comparison) == null ? void 0 : E.disabled_nodes) != null && ne.length ? (s(), o("div", sn, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[23] || (C[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", on, [
                  C[24] || (C[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, n(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", an, [
                  (s(!0), o(G, null, se(t.status.comparison.disabled_nodes.slice(0, 10), (q) => (s(), o("div", {
                    key: q,
                    class: "drift-list-item"
                  }, " • " + n(q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", nn, " ... and " + n(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", ln, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[25] || (C[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", rn, [
                  C[26] || (C[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, n(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[27] || (C[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (s(), o("div", dn, [...C[28] || (C[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", cn, [
              g(te, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (q) => k.$emit("close"))
              }, {
                default: i(() => [...C[29] || (C[29] = [
                  w(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), mn = /* @__PURE__ */ X(un, [["__scopeId", "data-v-c67eed17"]]), vn = { class: "health-section-header" }, fn = { class: "suggestions-content" }, gn = { class: "suggestions-text" }, pn = {
  key: 4,
  style: { "margin-top": "var(--cg-space-3)" }
}, hn = /* @__PURE__ */ Y({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "start-setup", "view-environments", "create-environment"],
  setup(t, { emit: r }) {
    const a = t, d = _(!1), p = _(!1);
    function v() {
      d.value = !0;
    }
    function y() {
      d.value = !1, l("view-workflows");
    }
    function m() {
      d.value = !1, l("view-nodes");
    }
    const l = r, u = U(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), b = U(() => a.status.has_changes), h = U(() => {
      const F = a.status.git_changes;
      return F.nodes_added.length > 0 || F.nodes_removed.length > 0 || F.workflow_changes;
    }), k = U(() => a.status.has_changes || u.value), C = U(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), L = U(() => a.status.git_changes.has_other_changes), $ = U(() => {
      var F;
      return ((F = a.status.workflows.analyzed) == null ? void 0 : F.filter((T) => T.status === "broken")) || [];
    }), f = U(() => {
      var F;
      return ((F = a.status.workflows.analyzed) == null ? void 0 : F.filter(
        (T) => T.has_path_sync_issues && !T.has_issues
      )) || [];
    }), R = U(() => $.value.length > 0), O = U(() => R.value || f.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced), I = U(() => {
      const F = [];
      return a.status.workflows.new.length > 0 && F.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && F.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && F.push(`${a.status.workflows.deleted.length} deleted`), F.length > 0 ? `${F.join(", ")} workflow${F.length === 1 && !F[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), B = U(() => {
      var D, x;
      const F = [], T = a.status.comparison;
      return (D = T.missing_nodes) != null && D.length && F.push(`${T.missing_nodes.length} missing node${T.missing_nodes.length === 1 ? "" : "s"}`), (x = T.extra_nodes) != null && x.length && F.push(`${T.extra_nodes.length} untracked node${T.extra_nodes.length === 1 ? "" : "s"}`), F.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${F.join(" and ")}.`;
    }), W = U(() => {
      var D, x;
      const F = [], T = a.status.comparison;
      return (D = T.extra_nodes) != null && D.length && (T.extra_nodes.slice(0, 3).forEach((z) => {
        F.push(`Untracked: ${z}`);
      }), T.extra_nodes.length > 3 && F.push(`...and ${T.extra_nodes.length - 3} more untracked`)), (x = T.missing_nodes) != null && x.length && (T.missing_nodes.slice(0, 3).forEach((z) => {
        F.push(`Missing: ${z}`);
      }), T.missing_nodes.length > 3 && F.push(`...and ${T.missing_nodes.length - 3} more missing`)), F;
    });
    return (F, T) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, { title: "STATUS" })
        ]),
        content: i(() => [
          a.setupState === "no_workspace" ? (s(), S(tt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: T[0] || (T[0] = (D) => F.$emit("start-setup"))
              }, {
                default: i(() => [...T[12] || (T[12] = [
                  w(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (s(), S(tt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: T[1] || (T[1] = (D) => F.$emit("view-environments"))
              }, {
                default: i(() => [...T[13] || (T[13] = [
                  w(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (s(), S(tt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: T[2] || (T[2] = (D) => F.$emit("create-environment"))
              }, {
                default: i(() => [...T[14] || (T[14] = [
                  w(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[4] || (T[4] = (D) => p.value = !0),
            onMouseleave: T[5] || (T[5] = (D) => p.value = !1)
          }, [
            e("div", vn, [
              g(Ae, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...T[15] || (T[15] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g(As, { name: "fade" }, {
                default: i(() => [
                  p.value ? (s(), S(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...T[16] || (T[16] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            g(bo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, qt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), S(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (s(), S(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (s(), S(Qe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                g(Qe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), S(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), S(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (s(), S(Qe, {
                  key: 2,
                  icon: "●",
                  count: C.value,
                  label: C.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                L.value ? (s(), S(Qe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value && !h.value && !L.value ? (s(), S(Qe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (s(), S(Qe, {
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
                  T[18] || (T[18] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", fn, [
                    e("span", gn, n(I.value), 1),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: T[3] || (T[3] = (D) => F.$emit("commit-changes"))
                    }, {
                      default: i(() => [...T[17] || (T[17] = [
                        w(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), S(tt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: T[6] || (T[6] = (D) => F.$emit("create-branch"))
              }, {
                default: i(() => [...T[19] || (T[19] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          O.value ? (s(), o("div", pn, [
            g(Ae, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...T[20] || (T[20] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            $.value.length > 0 ? (s(), S(tt, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${$.value.length} workflow${$.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: $.value.map((D) => `${D.name} — ${D.issue_summary}`)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (D) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[21] || (T[21] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            f.value.length > 0 ? (s(), S(tt, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${f.value.length} workflow${f.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: f.value.map((D) => `${D.name} — ${D.models_needing_path_sync_count} model path${D.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[8] || (T[8] = (D) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[22] || (T[22] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !R.value ? (s(), S(tt, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[9] || (T[9] = (D) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[23] || (T[23] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (s(), S(tt, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: B.value,
              items: W.value
            }, {
              actions: i(() => [
                g(te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: i(() => [...T[24] || (T[24] = [
                    w(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[10] || (T[10] = (D) => F.$emit("view-nodes"))
                }, {
                  default: i(() => [...T[25] || (T[25] = [
                    w(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !O.value && !k.value ? (s(), S(Ke, {
            key: 5,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(mn, {
        show: d.value,
        status: t.status,
        onClose: T[11] || (T[11] = (D) => d.value = !1),
        onNavigateWorkflows: y,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), yn = /* @__PURE__ */ X(hn, [["__scopeId", "data-v-e63d612b"]]), wn = ["type", "value", "placeholder", "disabled"], kn = /* @__PURE__ */ Y({
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
    const d = t, p = a, v = _(null);
    function y(m) {
      const l = m.target.value;
      p("update:modelValue", l);
    }
    return ze(() => {
      d.autoFocus && v.value && v.value.focus();
    }), r({
      focus: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.blur();
      }
    }), (m, l) => (s(), o("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: le(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: y,
      onKeyup: [
        l[0] || (l[0] = ct((u) => m.$emit("enter"), ["enter"])),
        l[1] || (l[1] = ct((u) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (u) => m.$emit("focus")),
      onBlur: l[3] || (l[3] = (u) => m.$emit("blur"))
    }, null, 42, wn));
  }
}), Gt = /* @__PURE__ */ X(kn, [["__scopeId", "data-v-0380d08f"]]), bn = { class: "branch-create-form" }, _n = { class: "form-actions" }, $n = /* @__PURE__ */ Y({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const a = r, d = _(""), p = U(() => {
      const m = d.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      p.value && (a("create", d.value.trim()), d.value = "");
    }
    function y() {
      d.value = "", a("cancel");
    }
    return (m, l) => (s(), o("div", bn, [
      g(Gt, {
        modelValue: d.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => d.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: y
      }, null, 8, ["modelValue"]),
      e("div", _n, [
        g(te, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: v
        }, {
          default: i(() => [...l[1] || (l[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(te, {
          variant: "secondary",
          size: "sm",
          onClick: y
        }, {
          default: i(() => [...l[2] || (l[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Cn = /* @__PURE__ */ X($n, [["__scopeId", "data-v-7c500394"]]), xn = { class: "branch-list-item__indicator" }, Sn = { class: "branch-list-item__name" }, In = {
  key: 0,
  class: "branch-list-item__actions"
}, En = {
  key: 0,
  class: "branch-list-item__current-label"
}, Mn = /* @__PURE__ */ Y({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: le(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (d) => t.clickable && r.$emit("click"))
    }, [
      e("span", xn, n(t.isCurrent ? "●" : "○"), 1),
      e("span", Sn, n(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (s(), o("div", In, [
        ge(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", En, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), zn = /* @__PURE__ */ X(Mn, [["__scopeId", "data-v-c6581a24"]]), Ln = {
  key: 2,
  class: "branch-list"
}, Dn = /* @__PURE__ */ Y({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: r }) {
    const a = r, d = _(!1);
    function p(y) {
      a("create", y), v();
    }
    function v() {
      d.value = !1;
    }
    return (y, m) => (s(), S(Oe, null, {
      header: i(() => [
        g(Fe, { title: "BRANCHES" }, {
          actions: i(() => [
            d.value ? c("", !0) : (s(), S(te, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (l) => d.value = !0)
            }, {
              default: i(() => [...m[1] || (m[1] = [
                w(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), S(Cn, {
          key: 0,
          onCreate: p,
          onCancel: v
        })) : c("", !0),
        t.branches.length === 0 ? (s(), S(Ke, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Ln, [
          (s(!0), o(G, null, se(t.branches, (l) => (s(), S(zn, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? c("", !0) : (s(), S(te, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (u) => y.$emit("delete", l.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  w(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (s(), S(te, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (u) => y.$emit("switch", l.name)
              }, {
                default: i(() => [...m[3] || (m[3] = [
                  w(" Switch ", -1)
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
}), Rn = /* @__PURE__ */ X(Dn, [["__scopeId", "data-v-86784ddd"]]), Nn = { class: "commit-list" }, Tn = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (r, a) => (s(), o("div", Nn, [
      ge(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Un = /* @__PURE__ */ X(Tn, [["__scopeId", "data-v-8c5ee761"]]), Pn = { class: "commit-hash" }, Bn = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, a = U(() => r.hash.slice(0, r.length));
    return (d, p) => (s(), o("span", Pn, n(a.value), 1));
  }
}), ps = /* @__PURE__ */ X(Bn, [["__scopeId", "data-v-7c333cc6"]]), On = { class: "commit-message" }, Fn = { class: "commit-date" }, Vn = /* @__PURE__ */ Y({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, d = r;
    function p() {
      a.clickable && d("click");
    }
    return (v, y) => (s(), o("div", {
      class: le(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      g(ps, { hash: t.hash }, null, 8, ["hash"]),
      e("span", On, n(t.message), 1),
      e("span", Fn, n(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: y[0] || (y[0] = Ee(() => {
        }, ["stop"]))
      }, [
        ge(v.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), An = /* @__PURE__ */ X(Vn, [["__scopeId", "data-v-dd7c621b"]]), Wn = /* @__PURE__ */ Y({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, a) => (s(), S(Oe, null, {
      header: i(() => [
        g(Fe, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), S(Ke, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), S(Un, { key: 1 }, {
          default: i(() => [
            (s(!0), o(G, null, se(t.commits, (d) => (s(), S(An, {
              key: d.hash,
              hash: d.short_hash || d.hash,
              message: d.message,
              "relative-date": d.date_relative || d.relative_date,
              onClick: (p) => r.$emit("select", d)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => r.$emit("checkout", d),
                  title: "Checkout this commit"
                }, {
                  default: i(() => [...a[0] || (a[0] = [
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
}), Gn = /* @__PURE__ */ X(Wn, [["__scopeId", "data-v-981c3c64"]]), ds = [
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
  ...Array(12).fill(null).map((t, r) => ({
    name: `synced-workflow-${r + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + r,
    model_count: 1 + r % 3,
    sync_state: "synced"
  }))
], jn = {
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
}, hs = [
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
], Hn = [
  ...hs,
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
], Ft = [
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
], qn = [
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
], Vt = [
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
], pe = {
  // Environment Management
  getEnvironments: async () => (await ye(300), [
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
    await ye(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, a) => {
    await ye(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (t) => {
    await ye(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ye(400), ds),
  getWorkflowDetails: async (t) => (await ye(300), jn[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await ye(800), {
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
    await ye(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${a}`);
  },
  setModelImportance: async (t, r, a) => {
    await ye(200), console.log(`[MOCK] Setting ${r} importance to ${a} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ye(350), hs),
  getWorkspaceModels: async () => (await ye(400), Hn),
  getModelDetails: async (t) => (await ye(200), {
    filename: t,
    hash: "762871a9ab79bfa2",
    blake3: null,
    sha256: null,
    size: 173e8,
    category: "checkpoints",
    relative_path: `checkpoints/${t}`,
    last_seen: "2025-11-11 23:34:23",
    locations: [
      { path: `/workspace/models/checkpoints/${t}`, modified: "2024-08-03 13:16:22" }
    ],
    sources: []
  }),
  updateModelSource: async (t, r) => {
    await ye(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await ye(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await ye(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await ye(350);
    const t = Ft.filter((a) => a.installed), r = Ft.filter((a) => !a.installed);
    return {
      nodes: Ft,
      total_count: Ft.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await ye(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await ye(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await ye(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await ye(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await ye(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await ye(250), (t ? Vt.filter((d) => d.level === t) : Vt).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await ye(300);
    const a = [...Vt, ...Vt.map((p) => ({
      ...p,
      name: "comfygit.workspace"
    }))];
    return (t ? a.filter((p) => p.level === t) : a).slice(0, r || 100);
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
  getStatus: async () => (await ye(400), {
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
      synced: ds.filter((t) => t.status === "synced").map((t) => t.name),
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
          model_count: 5,
          has_category_mismatch_issues: !1,
          models_with_category_mismatch_count: 0
        },
        // Category mismatch example - LoRA in wrong directory
        {
          name: "lora-wrong-dir.json",
          sync_state: "synced",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "1 model in wrong directory",
          node_count: 8,
          model_count: 2,
          has_category_mismatch_issues: !0,
          models_with_category_mismatch_count: 1
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
  getCommitHistory: async (t = 10) => (await ye(300), qn.slice(0, t)),
  getBranches: async () => (await ye(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (t) => {
    await ye(300), console.log(`[MOCK] Deleting branch: ${t}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await ye(300), {
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
    await ye(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await ye(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, a) => {
    await ye(400), console.log(`[MOCK] Updating remote ${t}: ${r}${a ? ` (push: ${a})` : ""}`);
  },
  fetchRemote: async (t) => {
    await ye(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await ye(300), {
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
  analyzeWorkflow: async (t) => (await ye(600), {
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
    await ye(800);
    const d = [], p = [];
    return r.forEach((v, y) => {
      v.action === "install" && v.package_id && d.push(v.package_id);
    }), a.forEach((v, y) => {
      v.action === "download" && v.url ? p.push({
        filename: y,
        url: v.url,
        size: 65e8,
        target_path: v.target_path || `models/${y}`
      }) : v.action === "select" && v.selected_model && console.log(`[MOCK] Selected existing model: ${v.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: d,
      models_to_download: p,
      estimated_time_seconds: d.length * 30 + p.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await ye(400);
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
    await ye(400);
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
function ye(t) {
  return new Promise((r) => setTimeout(r, t));
}
function Mt() {
  return !0;
}
function De() {
  const t = _(!1), r = _(null);
  async function a(Q, we) {
    var yt;
    if (!((yt = window.app) != null && yt.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi(Q, we);
    if (!Ce.ok) {
      const mt = await Ce.json().catch(() => ({}));
      throw new Error(mt.error || mt.message || `Request failed: ${Ce.status}`);
    }
    return Ce.json();
  }
  async function d(Q = !1) {
    return pe.getStatus();
  }
  async function p(Q, we = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Q, allow_issues: we })
    });
  }
  async function v(Q = 10, we = 0) {
    {
      const Ce = await pe.getCommitHistory(Q);
      return {
        commits: Ce,
        total: Ce.length,
        offset: we
      };
    }
  }
  async function y(Q) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Q })
    });
  }
  async function m() {
    return pe.getBranches();
  }
  async function l(Q) {
    return a(`/v2/comfygit/commit/${Q}`);
  }
  async function u(Q, we = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Q, force: we })
    });
  }
  async function b(Q, we = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, start_point: we })
    });
  }
  async function h(Q, we = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Q, force: we })
    });
  }
  async function k(Q, we = !1) {
    return await pe.deleteBranch(Q), { status: "success" };
  }
  async function C() {
    return pe.getEnvironments();
  }
  async function L(Q) {
    return pe.switchEnvironment(Q);
  }
  async function $() {
    return null;
  }
  async function f(Q) {
    return await pe.createEnvironment(Q.name, Q.torch_backend || "auto"), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function R() {
    return { state: "idle", message: "No creation in progress" };
  }
  async function O(Q = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function I(Q) {
    return await pe.deleteEnvironment(Q), { status: "success" };
  }
  async function B(Q = !1) {
    return pe.getWorkflows();
  }
  async function W(Q) {
    return pe.getWorkflowDetails(Q);
  }
  async function F(Q) {
    return pe.resolveWorkflow(Q);
  }
  async function T(Q, we, Ce) {
    return await pe.installWorkflowDeps(Q, we, Ce), { status: "success" };
  }
  async function D(Q, we, Ce) {
    return pe.setModelImportance(Q, we, Ce);
  }
  async function x() {
    return pe.getEnvironmentModels();
  }
  async function z() {
    return pe.getWorkspaceModels();
  }
  async function ee(Q) {
    return pe.getModelDetails(Q);
  }
  async function K(Q) {
    return console.log(`[MOCK] Opening file location: ${Q}`), { status: "success" };
  }
  async function ae(Q, we) {
    return await pe.updateModelSource(Q, we), { status: "success", source_type: "custom" };
  }
  async function me(Q, we) {
    return { status: "success" };
  }
  async function de(Q) {
    return pe.deleteModel(Q);
  }
  async function J(Q) {
    return await pe.downloadModel(Q), { status: "success" };
  }
  async function P() {
    return { status: "success", changes: 0 };
  }
  async function E() {
    return { path: "~/comfygit/models" };
  }
  async function ne(Q) {
    return { status: "success", path: Q, models_indexed: 10 };
  }
  async function q() {
    return pe.getConfig();
  }
  async function Ie(Q) {
    return pe.updateConfig(Q);
  }
  async function $e(Q, we) {
    return pe.getEnvironmentLogs(Q, we);
  }
  async function Re(Q, we) {
    return pe.getWorkspaceLogs(Q, we);
  }
  async function Ge() {
    return pe.getNodes();
  }
  async function oe(Q) {
    return { status: "success", message: `Node '${Q}' tracked as development` };
  }
  async function A(Q) {
    return await pe.installNode(Q), { status: "success" };
  }
  async function Z(Q) {
    return await pe.updateNode(Q), { status: "success" };
  }
  async function be(Q) {
    return await pe.uninstallNode(Q), { status: "success" };
  }
  async function ie() {
    return pe.getRemotes();
  }
  async function ut(Q, we) {
    return await pe.addRemote(Q, we), { status: "success", remote_name: Q };
  }
  async function xt(Q) {
    return await pe.removeRemote(Q), { status: "success", remote_name: Q };
  }
  async function St(Q, we, Ce) {
    return await pe.updateRemoteUrl(Q, we, Ce), { status: "success", remote_name: Q };
  }
  async function _e(Q) {
    return await pe.fetchRemote(Q), { status: "success", remote_name: Q };
  }
  async function rt(Q) {
    return pe.getRemoteSyncStatus(Q);
  }
  async function Je(Q = "skip", we = !0) {
    return await new Promise((Ce) => setTimeout(Ce, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function Ye() {
    return {
      state: "no_workspace",
      workspace_path: null,
      default_path: "~/comfygit",
      environments: [],
      current_environment: null,
      detected_models_dir: "/mock/ComfyUI/models"
    };
  }
  async function It(Q) {
    return { status: "started", task_id: "mock-task-id" };
  }
  async function fe() {
    return { state: "idle", progress: 0, message: "No initialization in progress" };
  }
  async function We(Q) {
    return { valid: !0, model_count: 42 };
  }
  return {
    isLoading: t,
    error: r,
    getStatus: d,
    commit: p,
    getHistory: v,
    exportEnv: y,
    // Git Operations
    getBranches: m,
    getCommitDetail: l,
    checkout: u,
    createBranch: b,
    switchBranch: h,
    deleteBranch: k,
    // Environment Management
    getEnvironments: C,
    switchEnvironment: L,
    getSwitchProgress: $,
    createEnvironment: f,
    getCreateProgress: R,
    getComfyUIReleases: O,
    deleteEnvironment: I,
    // Workflow Management
    getWorkflows: B,
    getWorkflowDetails: W,
    resolveWorkflow: F,
    installWorkflowDeps: T,
    setModelImportance: D,
    // Model Management
    getEnvironmentModels: x,
    getWorkspaceModels: z,
    getModelDetails: ee,
    openFileLocation: K,
    addModelSource: ae,
    removeModelSource: me,
    deleteModel: de,
    downloadModel: J,
    scanWorkspaceModels: P,
    getModelsDirectory: E,
    setModelsDirectory: ne,
    // Settings
    getConfig: q,
    updateConfig: Ie,
    // Debug/Logs
    getEnvironmentLogs: $e,
    getWorkspaceLogs: Re,
    // Node Management
    getNodes: Ge,
    trackNodeAsDev: oe,
    installNode: A,
    updateNode: Z,
    uninstallNode: be,
    // Git Remotes
    getRemotes: ie,
    addRemote: ut,
    removeRemote: xt,
    updateRemoteUrl: St,
    fetchRemote: _e,
    getRemoteSyncStatus: rt,
    // Environment Sync
    syncEnvironmentManually: Je,
    // First-Time Setup
    getSetupStatus: Ye,
    initializeWorkspace: It,
    getInitializeProgress: fe,
    validatePath: We
  };
}
async function zt(t, r = {}, a = 5e3) {
  const d = new AbortController(), p = setTimeout(() => d.abort(), a);
  try {
    const v = await fetch(t, {
      ...r,
      signal: d.signal
    });
    return clearTimeout(p), v;
  } catch (v) {
    throw clearTimeout(p), v.name === "AbortError" ? new Error(`Request timeout after ${a}ms`) : v;
  }
}
function ys() {
  const t = _(null);
  async function r() {
    try {
      const y = await zt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (y.ok)
        return (await y.json()).port;
    } catch {
    }
    return 8189;
  }
  async function a() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const y = await zt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!y.ok) throw new Error("Health check failed");
      return await y.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function d() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const y = await zt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!y.ok) throw new Error("Failed to get status");
      return await y.json();
    } catch {
      return null;
    }
  }
  async function p() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await zt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await zt(
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
    getStatus: d,
    restart: p,
    kill: v
  };
}
const Kn = { class: "base-modal-header" }, Yn = {
  key: 0,
  class: "base-modal-title"
}, Xn = { class: "base-modal-body" }, Qn = {
  key: 0,
  class: "base-modal-loading"
}, Zn = {
  key: 1,
  class: "base-modal-error"
}, Jn = {
  key: 0,
  class: "base-modal-footer"
}, el = /* @__PURE__ */ Y({
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
    const a = t, d = r;
    function p() {
      a.closeOnOverlayClick && d("close");
    }
    function v(y) {
      y.key === "Escape" && a.showCloseButton && d("close");
    }
    return ze(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), Ws(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (y, m) => (s(), S(Te, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: le(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Ee(() => {
          }, ["stop"]))
        }, [
          e("div", Kn, [
            ge(y.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Yn, n(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (l) => y.$emit("close"))
            }, [...m[2] || (m[2] = [
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
          e("div", Xn, [
            t.loading ? (s(), o("div", Qn, "Loading...")) : t.error ? (s(), o("div", Zn, n(t.error), 1)) : ge(y.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          y.$slots.footer ? (s(), o("div", Jn, [
            ge(y.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), at = /* @__PURE__ */ X(el, [["__scopeId", "data-v-8dab1081"]]), tl = ["type", "disabled"], sl = {
  key: 0,
  class: "spinner"
}, ol = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: le(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: a[0] || (a[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", sl)) : c("", !0),
      ge(r.$slots, "default", {}, void 0, !0)
    ], 10, tl));
  }
}), re = /* @__PURE__ */ X(ol, [["__scopeId", "data-v-f3452606"]]), al = {
  key: 0,
  class: "base-title-count"
}, nl = /* @__PURE__ */ Y({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, a) => (s(), S(ss(`h${t.level}`), {
      class: le(["base-title", t.variant])
    }, {
      default: i(() => [
        ge(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", al, "(" + n(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Tt = /* @__PURE__ */ X(nl, [["__scopeId", "data-v-5a01561d"]]), ll = ["value", "disabled"], il = {
  key: 0,
  value: "",
  disabled: ""
}, rl = ["value"], dl = {
  key: 0,
  class: "base-select-error"
}, cl = /* @__PURE__ */ Y({
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
    function r(d) {
      return typeof d == "string" ? d : d.value;
    }
    function a(d) {
      return typeof d == "string" ? d : d.label;
    }
    return (d, p) => (s(), o("div", {
      class: le(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: le(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (v) => d.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", il, n(t.placeholder), 1)) : c("", !0),
        (s(!0), o(G, null, se(t.options, (v) => (s(), o("option", {
          key: r(v),
          value: r(v)
        }, n(a(v)), 9, rl))), 128))
      ], 42, ll),
      t.error ? (s(), o("span", dl, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), ul = /* @__PURE__ */ X(cl, [["__scopeId", "data-v-7436d745"]]), ml = { class: "popover-header" }, vl = { class: "popover-title" }, fl = { class: "popover-content" }, gl = {
  key: 0,
  class: "popover-actions"
}, pl = /* @__PURE__ */ Y({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, a) => (s(), S(Te, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: qe({ maxWidth: t.maxWidth }),
          onClick: a[1] || (a[1] = Ee(() => {
          }, ["stop"]))
        }, [
          e("div", ml, [
            e("h4", vl, n(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", fl, [
            ge(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (s(), o("div", gl, [
            ge(r.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), nt = /* @__PURE__ */ X(pl, [["__scopeId", "data-v-42815ace"]]), hl = { class: "detail-section" }, yl = {
  key: 0,
  class: "empty-message"
}, wl = { class: "model-header" }, kl = { class: "model-name" }, bl = { class: "model-details" }, _l = { class: "model-row" }, $l = { class: "model-row" }, Cl = { class: "label" }, xl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Sl = { class: "node-list" }, Il = ["onClick"], El = {
  key: 1,
  class: "model-row"
}, Ml = { class: "value" }, zl = {
  key: 2,
  class: "model-row"
}, Ll = { class: "value error" }, Dl = {
  key: 0,
  class: "model-actions"
}, Rl = { class: "detail-section" }, Nl = {
  key: 0,
  class: "empty-message"
}, Tl = { class: "node-name" }, Ul = {
  key: 0,
  class: "node-version"
}, Pl = /* @__PURE__ */ Y({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: r }) {
    const a = t, d = r, { getWorkflowDetails: p, setModelImportance: v, openFileLocation: y } = De(), m = _(null), l = _(!1), u = _(null), b = _(!1), h = _({}), k = _(!1), C = _(/* @__PURE__ */ new Set()), L = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function $(D) {
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
    function R(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const x = D.hash || D.filename;
      return C.value.has(x) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function O(D) {
      return C.value.has(D);
    }
    function I(D) {
      C.value.has(D) ? C.value.delete(D) : C.value.add(D), C.value = new Set(C.value);
    }
    async function B() {
      l.value = !0, u.value = null;
      try {
        m.value = await p(a.workflowName);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function W(D, x) {
      h.value[D] = x, b.value = !0;
    }
    async function F(D) {
      try {
        await y(D);
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to open file location";
      }
    }
    async function T() {
      if (!b.value) {
        d("close");
        return;
      }
      l.value = !0, u.value = null;
      try {
        for (const [D, x] of Object.entries(h.value))
          await v(a.workflowName, D, x);
        d("refresh"), d("close");
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    return ze(B), (D, x) => (s(), o(G, null, [
      g(at, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: u.value || void 0,
        onClose: x[4] || (x[4] = (z) => d("close"))
      }, {
        body: i(() => [
          m.value ? (s(), o(G, { key: 0 }, [
            e("section", hl, [
              g(Tt, { variant: "section" }, {
                default: i(() => [
                  w("MODELS USED (" + n(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", yl, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(G, null, se(m.value.models, (z) => {
                var ee;
                return s(), o("div", {
                  key: z.hash || z.filename,
                  class: "model-card"
                }, [
                  e("div", wl, [
                    x[6] || (x[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", kl, n(z.filename), 1)
                  ]),
                  e("div", bl, [
                    e("div", _l, [
                      x[7] || (x[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: le(["value", $(z.status)])
                      }, n(f(z.status)), 3)
                    ]),
                    e("div", $l, [
                      e("span", Cl, [
                        x[8] || (x[8] = w(" Importance: ", -1)),
                        g(gs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: x[0] || (x[0] = (K) => k.value = !0)
                        })
                      ]),
                      g(ul, {
                        "model-value": h.value[z.filename] || z.importance,
                        options: L,
                        "onUpdate:modelValue": (K) => W(z.filename, K)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    z.loaded_by && z.loaded_by.length > 0 ? (s(), o("div", xl, [
                      x[9] || (x[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Sl, [
                        (s(!0), o(G, null, se(R(z), (K, ae) => (s(), o("div", {
                          key: `${K.node_id}-${ae}`,
                          class: "node-reference"
                        }, n(K.node_type) + " (Node #" + n(K.node_id) + ") ", 1))), 128)),
                        z.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (K) => I(z.hash || z.filename)
                        }, n(O(z.hash || z.filename) ? "▼ Show less" : `▶ View all (${z.loaded_by.length})`), 9, Il)) : c("", !0)
                      ])
                    ])) : c("", !0),
                    z.size_mb ? (s(), o("div", El, [
                      x[10] || (x[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Ml, n(z.size_mb) + " MB", 1)
                    ])) : c("", !0),
                    z.has_category_mismatch ? (s(), o("div", zl, [
                      x[13] || (x[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Ll, [
                        x[11] || (x[11] = w(" In ", -1)),
                        e("code", null, n(z.actual_category) + "/", 1),
                        x[12] || (x[12] = w(" but loader needs ", -1)),
                        e("code", null, n((ee = z.expected_categories) == null ? void 0 : ee[0]) + "/", 1)
                      ])
                    ])) : c("", !0)
                  ]),
                  z.status !== "available" ? (s(), o("div", Dl, [
                    z.status === "downloadable" ? (s(), S(re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: x[1] || (x[1] = (K) => d("resolve"))
                    }, {
                      default: i(() => [...x[14] || (x[14] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    })) : z.status === "category_mismatch" && z.file_path ? (s(), S(re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => F(z.file_path)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        w(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : z.status !== "path_mismatch" ? (s(), S(re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: x[2] || (x[2] = (K) => d("resolve"))
                    }, {
                      default: i(() => [...x[16] || (x[16] = [
                        w(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : c("", !0)
                  ])) : c("", !0)
                ]);
              }), 128))
            ]),
            e("section", Rl, [
              g(Tt, { variant: "section" }, {
                default: i(() => [
                  w("NODES USED (" + n(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", Nl, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(G, null, se(m.value.nodes, (z) => (s(), o("div", {
                key: z.name,
                class: "node-item"
              }, [
                e("span", {
                  class: le(["node-status", z.status === "installed" ? "installed" : "missing"])
                }, n(z.status === "installed" ? "✓" : "✕"), 3),
                e("span", Tl, n(z.name), 1),
                z.version ? (s(), o("span", Ul, "v" + n(z.version), 1)) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          g(re, {
            variant: "secondary",
            onClick: x[3] || (x[3] = (z) => d("close"))
          }, {
            default: i(() => [...x[17] || (x[17] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (s(), S(re, {
            key: 0,
            variant: "primary",
            onClick: T
          }, {
            default: i(() => [...x[18] || (x[18] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(nt, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: x[5] || (x[5] = (z) => k.value = !1)
      }, {
        content: i(() => [...x[19] || (x[19] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              w(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              w(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              w(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Bl = /* @__PURE__ */ X(Pl, [["__scopeId", "data-v-668728e6"]]), ke = fs({
  items: [],
  status: "idle"
});
let Ze = null;
function ws() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Xt(t) {
  return ke.items.find((r) => r.id === t);
}
async function wt() {
  if (ke.status === "downloading") return;
  const t = ke.items.find((r) => r.status === "queued");
  if (!t) {
    ke.status = "idle";
    return;
  }
  ke.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Ol(t), t.status = "completed", t.progress = 100;
  } catch (r) {
    t.status = "failed", t.error = r instanceof Error ? r.message : "Download failed", t.retries++;
  } finally {
    ke.status = "idle", wt();
  }
}
async function Ol(t) {
  return new Promise((r, a) => {
    Ze && (Ze.close(), Ze = null);
    const d = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${d}`);
    Ze = p;
    let v = Date.now(), y = 0, m = !1;
    p.onmessage = (l) => {
      try {
        const u = JSON.parse(l.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const b = Date.now(), h = (b - v) / 1e3;
            if (h > 0.5) {
              const k = t.downloaded - y;
              if (t.speed = k / h, v = b, y = t.downloaded, t.speed > 0 && t.size > 0) {
                const C = t.size - t.downloaded;
                t.eta = C / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, p.close(), Ze = null, r();
            break;
          case "error":
            m = !0, p.close(), Ze = null, a(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), Ze = null, m || a(new Error("Connection lost"));
    };
  });
}
async function Fl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const r = await t.json();
    if (!r.pending_downloads || r.pending_downloads.length === 0) return;
    for (const a of r.pending_downloads) {
      if (ke.items.some((p) => p.url === a.url && p.filename === a.filename))
        continue;
      const d = {
        id: ws(),
        workflow: a.workflow,
        filename: a.filename,
        url: a.url,
        targetPath: a.target_path,
        size: a.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ke.items.push(d);
    }
    console.log(`[ComfyGit] Loaded ${r.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Bt() {
  function t(f) {
    for (const R of f) {
      if (ke.items.some(
        (B) => B.url === R.url && B.targetPath === R.targetPath && ["queued", "downloading", "paused", "completed"].includes(B.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${R.filename}`);
        continue;
      }
      const I = {
        id: ws(),
        workflow: R.workflow,
        filename: R.filename,
        url: R.url,
        targetPath: R.targetPath,
        size: R.size || 0,
        type: R.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ke.items.push(I);
    }
    ke.status === "idle" && wt();
  }
  async function r(f) {
    const R = Xt(f);
    if (R) {
      if (R.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(R.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ze && (Ze.close(), Ze = null), R.status = "failed", R.error = "Cancelled by user", ke.status = "idle", wt();
      } else if (R.status === "queued") {
        const O = ke.items.findIndex((I) => I.id === f);
        O >= 0 && ke.items.splice(O, 1);
      }
    }
  }
  function a(f) {
    const R = Xt(f);
    !R || R.status !== "failed" || (R.status = "queued", R.error = void 0, R.progress = 0, R.downloaded = 0, ke.status === "idle" && wt());
  }
  function d(f) {
    const R = Xt(f);
    !R || R.status !== "paused" || (R.status = "queued", ke.status === "idle" && wt());
  }
  function p() {
    const f = ke.items.filter((R) => R.status === "paused");
    for (const R of f)
      R.status = "queued";
    ke.status === "idle" && wt();
  }
  function v(f) {
    const R = ke.items.findIndex((O) => O.id === f);
    R >= 0 && ["completed", "failed", "paused"].includes(ke.items[R].status) && ke.items.splice(R, 1);
  }
  function y() {
    ke.items = ke.items.filter((f) => f.status !== "completed");
  }
  function m() {
    ke.items = ke.items.filter((f) => f.status !== "failed");
  }
  const l = U(
    () => ke.items.find((f) => f.status === "downloading")
  ), u = U(
    () => ke.items.filter((f) => f.status === "queued")
  ), b = U(
    () => ke.items.filter((f) => f.status === "completed")
  ), h = U(
    () => ke.items.filter((f) => f.status === "failed")
  ), k = U(
    () => ke.items.filter((f) => f.status === "paused")
  ), C = U(() => ke.items.length > 0), L = U(
    () => ke.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), $ = U(
    () => ke.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Gs(ke),
    // Computed
    currentDownload: l,
    queuedItems: u,
    completedItems: b,
    failedItems: h,
    pausedItems: k,
    hasItems: C,
    activeCount: L,
    hasPaused: $,
    // Actions
    addToQueue: t,
    cancelDownload: r,
    retryDownload: a,
    resumeDownload: d,
    resumeAllPaused: p,
    removeItem: v,
    clearCompleted: y,
    clearFailed: m,
    loadPendingDownloads: Fl
  };
}
function ks() {
  const t = _(null), r = _(null), a = _([]), d = _([]), p = _(!1), v = _(null);
  async function y(R, O) {
    var B;
    if (!((B = window.app) != null && B.api))
      throw new Error("ComfyUI API not available");
    const I = await window.app.api.fetchApi(R, O);
    if (!I.ok) {
      const W = await I.json().catch(() => ({})), F = W.error || W.message || `Request failed: ${I.status}`;
      throw new Error(F);
    }
    return I.json();
  }
  async function m(R) {
    p.value = !0, v.value = null;
    try {
      let O;
      return Mt() && (O = await pe.analyzeWorkflow(R)), t.value = O, O;
    } catch (O) {
      const I = O instanceof Error ? O.message : "Unknown error occurred";
      throw v.value = I, O;
    } finally {
      p.value = !1;
    }
  }
  async function l(R, O, I, B) {
    p.value = !0, v.value = null;
    try {
      let W;
      return Mt() && (W = await pe.applyResolution(R, O, I)), r.value = W, W;
    } catch (W) {
      const F = W instanceof Error ? W.message : "Unknown error occurred";
      throw v.value = F, W;
    } finally {
      p.value = !1;
    }
  }
  async function u(R, O = 10) {
    p.value = !0, v.value = null;
    try {
      let I;
      return Mt() && (I = await pe.searchNodes(R, O)), a.value = I.results, I.results;
    } catch (I) {
      const B = I instanceof Error ? I.message : "Unknown error occurred";
      throw v.value = B, I;
    } finally {
      p.value = !1;
    }
  }
  async function b(R, O = 10) {
    p.value = !0, v.value = null;
    try {
      let I;
      return Mt() && (I = await pe.searchModels(R, O)), d.value = I.results, I.results;
    } catch (I) {
      const B = I instanceof Error ? I.message : "Unknown error occurred";
      throw v.value = B, I;
    } finally {
      p.value = !1;
    }
  }
  const h = fs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.nodesInstalled = [], h.installError = void 0, h.needsRestart = void 0, h.error = void 0, h.nodeInstallProgress = void 0;
  }
  async function C(R) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Mt()) {
        h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
        for (let O = 0; O < h.nodesToInstall.length; O++)
          h.nodeInstallProgress.currentNode = h.nodesToInstall[O], h.nodeInstallProgress.currentIndex = O, await new Promise((I) => setTimeout(I, 500)), h.nodeInstallProgress.completedNodes.push({
            node_id: h.nodesToInstall[O],
            success: !0
          });
        return h.nodesInstalled = h.nodesToInstall, h.needsRestart = h.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: h.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await L(R);
    } catch (O) {
      const I = O instanceof Error ? O.message : "Failed to install nodes";
      throw h.installError = I, O;
    }
  }
  async function L(R) {
    var I;
    const O = await y(
      `/v2/comfygit/workflow/${R}/install`,
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
      const B = new Map(((I = O.failed) == null ? void 0 : I.map((W) => [W.node_id, W.error])) || []);
      for (let W = 0; W < h.nodesToInstall.length; W++) {
        const F = h.nodesToInstall[W], T = B.get(F);
        h.nodeInstallProgress.completedNodes.push({
          node_id: F,
          success: !T,
          error: T
        });
      }
    }
    return h.nodesInstalled = O.nodes_installed, h.needsRestart = O.nodes_installed.length > 0, O.failed && O.failed.length > 0 && (h.installError = `${O.failed.length} package(s) failed to install`), O;
  }
  async function $(R, O, I) {
    k(), h.phase = "resolving", v.value = null;
    {
      const B = await pe.applyResolution(R, O, I);
      r.value = B, h.nodesToInstall = B.nodes_to_install, h.phase = "complete";
      return;
    }
  }
  function f(R, O) {
    const { addToQueue: I } = Bt(), B = O.filter((W) => W.url && W.target_path).map((W) => ({
      workflow: R,
      filename: W.filename,
      url: W.url,
      targetPath: W.target_path,
      size: W.size || 0,
      type: "model"
    }));
    return B.length > 0 && I(B), B.length;
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: a,
    modelSearchResults: d,
    isLoading: p,
    error: v,
    progress: h,
    // Methods
    analyzeWorkflow: m,
    applyResolution: l,
    applyResolutionWithProgress: $,
    installNodes: C,
    searchNodes: u,
    searchModels: b,
    resetProgress: k,
    queueModelDownloads: f
  };
}
const Vl = { class: "resolution-stepper" }, Al = { class: "stepper-header" }, Wl = ["onClick"], Gl = {
  key: 0,
  class: "step-icon"
}, jl = {
  key: 1,
  class: "step-number"
}, Hl = { class: "step-label" }, ql = {
  key: 0,
  class: "step-connector"
}, Kl = { class: "stepper-content" }, Yl = /* @__PURE__ */ Y({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const a = t, d = r;
    function p(u) {
      var b;
      if ((b = a.stepStats) != null && b[u]) {
        const h = a.stepStats[u];
        return h.total > 0 && h.resolved === h.total;
      }
      return a.completedSteps.includes(u);
    }
    function v(u) {
      var b;
      if ((b = a.stepStats) != null && b[u]) {
        const h = a.stepStats[u];
        return h.resolved > 0 && h.resolved < h.total;
      }
      return !1;
    }
    function y(u) {
      return p(u) ? "state-complete" : v(u) ? "state-partial" : "state-pending";
    }
    function m(u) {
      return !1;
    }
    function l(u) {
      d("step-change", u);
    }
    return (u, b) => (s(), o("div", Vl, [
      e("div", Al, [
        (s(!0), o(G, null, se(t.steps, (h, k) => (s(), o("div", {
          key: h.id,
          class: le(["step", {
            active: t.currentStep === h.id,
            completed: p(h.id),
            "in-progress": v(h.id),
            disabled: m(h.id)
          }]),
          onClick: (C) => l(h.id)
        }, [
          e("div", {
            class: le(["step-indicator", y(h.id)])
          }, [
            p(h.id) ? (s(), o("span", Gl, "✓")) : (s(), o("span", jl, n(k + 1), 1))
          ], 2),
          e("div", Hl, n(h.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", ql)) : c("", !0)
        ], 10, Wl))), 128))
      ]),
      e("div", Kl, [
        ge(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Xl = /* @__PURE__ */ X(Yl, [["__scopeId", "data-v-2a7b3af8"]]), Ql = /* @__PURE__ */ Y({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = U(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), d = U(() => `confidence-${a.value}`), p = U(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : a.value.charAt(0).toUpperCase() + a.value.slice(1));
    return (v, y) => (s(), o("span", {
      class: le(["confidence-badge", d.value, t.size])
    }, n(p.value), 3));
  }
}), jt = /* @__PURE__ */ X(Ql, [["__scopeId", "data-v-17ec4b80"]]), Zl = { class: "node-info" }, Jl = { class: "node-info-text" }, ei = { class: "item-body" }, ti = {
  key: 0,
  class: "resolved-state"
}, si = {
  key: 1,
  class: "multiple-options"
}, oi = { class: "options-list" }, ai = ["onClick"], ni = ["name", "value", "checked", "onChange"], li = { class: "option-content" }, ii = { class: "option-header" }, ri = { class: "option-package-id" }, di = {
  key: 0,
  class: "option-title"
}, ci = { class: "option-meta" }, ui = {
  key: 0,
  class: "installed-badge"
}, mi = { class: "action-buttons" }, vi = {
  key: 2,
  class: "unresolved"
}, fi = {
  key: 0,
  class: "searching-state"
}, gi = { class: "options-list" }, pi = ["onClick"], hi = ["name", "value"], yi = { class: "option-content" }, wi = { class: "option-header" }, ki = { class: "option-package-id" }, bi = {
  key: 0,
  class: "option-description"
}, _i = { class: "option-meta" }, $i = {
  key: 0,
  class: "installed-badge"
}, Ci = {
  key: 2,
  class: "unresolved-message"
}, xi = { class: "action-buttons" }, Si = /* @__PURE__ */ Y({
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
  setup(t, { emit: r }) {
    const a = t, d = r;
    function p(l, u = 80) {
      return l.length <= u ? l : l.slice(0, u - 3) + "...";
    }
    const v = U(() => !!a.choice);
    U(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.action;
    }), U(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.package_id;
    });
    const y = U(() => {
      switch (a.status) {
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
    function m(l) {
      d("option-selected", l);
    }
    return (l, u) => (s(), o("div", {
      class: le(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", Zl, [
        e("span", Jl, [
          u[7] || (u[7] = w("Node type: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", y.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", ei, [
        v.value ? (s(), o("div", ti, [
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => d("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", si, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", oi, [
            (s(!0), o(G, null, se(t.options, (b, h) => (s(), o("label", {
              key: b.package_id,
              class: le(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (k) => m(h)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (k) => m(h)
              }, null, 40, ni),
              e("div", li, [
                e("div", ii, [
                  e("span", ri, n(b.package_id), 1),
                  g(jt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                b.title && b.title !== b.package_id ? (s(), o("div", di, n(b.title), 1)) : c("", !0),
                e("div", ci, [
                  b.is_installed ? (s(), o("span", ui, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, ai))), 128))
          ]),
          e("div", mi, [
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => d("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => d("manual-entry"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", vi, [
          t.isSearching ? (s(), o("div", fi, [...u[13] || (u[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(G, { key: 1 }, [
            u[14] || (u[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", gi, [
              (s(!0), o(G, null, se(t.searchResults.slice(0, 5), (b, h) => (s(), o("label", {
                key: b.package_id,
                class: "option-card",
                onClick: (k) => d("search-result-selected", b)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: h
                }, null, 8, hi),
                e("div", yi, [
                  e("div", wi, [
                    e("span", ki, n(b.package_id), 1),
                    g(jt, {
                      confidence: b.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  b.description ? (s(), o("div", bi, n(p(b.description)), 1)) : c("", !0),
                  e("div", _i, [
                    b.is_installed ? (s(), o("span", $i, "Already Installed")) : c("", !0)
                  ])
                ])
              ], 8, pi))), 128))
            ])
          ], 64)) : (s(), o("div", Ci, [...u[15] || (u[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", xi, [
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => d("search"))
            }, {
              default: i(() => {
                var b;
                return [
                  w(n((b = t.searchResults) != null && b.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => d("manual-entry"))
            }, {
              default: i(() => [...u[16] || (u[16] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[17] || (u[17] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ii = /* @__PURE__ */ X(Si, [["__scopeId", "data-v-c2997d1d"]]), Ei = { class: "item-navigator" }, Mi = { class: "nav-item-info" }, zi = ["title"], Li = { class: "nav-controls" }, Di = { class: "nav-arrows" }, Ri = ["disabled"], Ni = ["disabled"], Ti = { class: "nav-position" }, Ui = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: r }) {
    const a = r;
    return (d, p) => (s(), o("div", Ei, [
      e("div", Mi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, n(t.itemName), 9, zi)
      ]),
      e("div", Li, [
        e("div", Di, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (v) => a("prev")),
            title: "Previous item"
          }, " ← ", 8, Ri),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (v) => a("next")),
            title: "Next item"
          }, " → ", 8, Ni)
        ]),
        e("span", Ti, n(t.currentIndex + 1) + "/" + n(t.totalItems), 1)
      ])
    ]));
  }
}), bs = /* @__PURE__ */ X(Ui, [["__scopeId", "data-v-74af7920"]]), Pi = ["type", "value", "placeholder", "disabled"], Bi = {
  key: 0,
  class: "base-input-error"
}, Oi = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("div", {
      class: le(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: le(["base-input", { error: !!t.error }]),
        onInput: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeyup: [
          a[1] || (a[1] = ct((d) => r.$emit("enter"), ["enter"])),
          a[2] || (a[2] = ct((d) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Pi),
      t.error ? (s(), o("span", Bi, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ X(Oi, [["__scopeId", "data-v-9ba02cdc"]]), Fi = { class: "node-resolution-step" }, Vi = {
  key: 0,
  class: "auto-resolved-section"
}, Ai = { class: "section-header" }, Wi = { class: "stat-badge" }, Gi = { class: "resolved-packages-list" }, ji = { class: "package-info" }, Hi = { class: "package-id" }, qi = { class: "node-count" }, Ki = { class: "package-actions" }, Yi = {
  key: 0,
  class: "status-badge install"
}, Xi = {
  key: 1,
  class: "status-badge skip"
}, Qi = ["onClick"], Zi = {
  key: 1,
  class: "section-divider"
}, Ji = { class: "step-header" }, er = { class: "stat-badge" }, tr = {
  key: 1,
  class: "step-body"
}, sr = {
  key: 3,
  class: "empty-state"
}, or = { class: "node-modal-body" }, ar = { class: "node-search-results-container" }, nr = {
  key: 0,
  class: "node-search-results"
}, lr = ["onClick"], ir = { class: "node-result-header" }, rr = { class: "node-result-package-id" }, dr = {
  key: 0,
  class: "node-result-description"
}, cr = {
  key: 1,
  class: "node-empty-state"
}, ur = {
  key: 2,
  class: "node-empty-state"
}, mr = {
  key: 3,
  class: "node-empty-state"
}, vr = { class: "node-manual-entry-modal" }, fr = { class: "node-modal-body" }, gr = { class: "node-modal-actions" }, pr = /* @__PURE__ */ Y({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: r }) {
    const a = t, d = r, { searchNodes: p } = ks(), v = _(0), y = _(!1), m = _(!1), l = _(""), u = _(""), b = _([]), h = _(!1), k = _(/* @__PURE__ */ new Map()), C = _(/* @__PURE__ */ new Set()), L = _(!1);
    function $() {
      L.value && P(), L.value = !1;
    }
    const f = U(() => a.nodes[v.value]), R = U(() => a.nodes.filter((oe) => a.nodeChoices.has(oe.node_type)).length), O = U(() => f.value ? k.value.get(f.value.node_type) || [] : []), I = U(() => f.value ? C.value.has(f.value.node_type) : !1);
    Ht(f, async (oe) => {
      var A;
      oe && ((A = oe.options) != null && A.length || k.value.has(oe.node_type) || C.value.has(oe.node_type) || a.nodeChoices.has(oe.node_type) || await B(oe.node_type));
    }, { immediate: !0 });
    async function B(oe) {
      C.value.add(oe);
      try {
        const A = await p(oe, 5);
        k.value.set(oe, A);
      } catch {
        k.value.set(oe, []);
      } finally {
        C.value.delete(oe);
      }
    }
    const W = U(() => a.autoResolvedPackages.filter((oe) => !a.skippedPackages.has(oe.package_id)).length);
    function F(oe) {
      return a.skippedPackages.has(oe);
    }
    function T(oe) {
      d("package-skip", oe);
    }
    const D = U(() => {
      var A;
      if (!f.value) return "not-found";
      const oe = a.nodeChoices.get(f.value.node_type);
      if (oe)
        switch (oe.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (A = f.value.options) != null && A.length ? "ambiguous" : "not-found";
    }), x = U(() => {
      var A;
      if (!f.value) return;
      const oe = a.nodeChoices.get(f.value.node_type);
      if (oe)
        switch (oe.action) {
          case "install":
            return oe.package_id ? `→ ${oe.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (A = f.value.options) != null && A.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function z(oe) {
      oe >= 0 && oe < a.nodes.length && (v.value = oe);
    }
    function ee() {
      f.value && d("mark-optional", f.value.node_type);
    }
    function K() {
      f.value && d("skip", f.value.node_type);
    }
    function ae(oe) {
      f.value && d("option-selected", f.value.node_type, oe);
    }
    function me() {
      f.value && d("clear-choice", f.value.node_type);
    }
    function de() {
      f.value && (l.value = f.value.node_type, b.value = O.value, y.value = !0, Ie(l.value));
    }
    function J() {
      u.value = "", m.value = !0;
    }
    function P() {
      y.value = !1, l.value = "", b.value = [];
    }
    function E() {
      m.value = !1, u.value = "";
    }
    let ne = null;
    function q() {
      ne && clearTimeout(ne), ne = setTimeout(() => {
        Ie(l.value);
      }, 300);
    }
    async function Ie(oe) {
      if (!oe.trim()) {
        b.value = [];
        return;
      }
      h.value = !0;
      try {
        b.value = await p(oe, 10);
      } catch {
        b.value = [];
      } finally {
        h.value = !1;
      }
    }
    function $e(oe) {
      f.value && (d("manual-entry", f.value.node_type, oe.package_id), P());
    }
    function Re(oe) {
      f.value && d("manual-entry", f.value.node_type, oe.package_id);
    }
    function Ge() {
      !f.value || !u.value.trim() || (d("manual-entry", f.value.node_type, u.value.trim()), E());
    }
    return (oe, A) => {
      var Z, be;
      return s(), o("div", Fi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Vi, [
          e("div", Ai, [
            A[6] || (A[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Wi, n(W.value) + "/" + n(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Gi, [
            (s(!0), o(G, null, se(t.autoResolvedPackages, (ie) => (s(), o("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              e("div", ji, [
                e("code", Hi, n(ie.package_id), 1),
                e("span", qi, n(ie.node_types_count) + " node type" + n(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Ki, [
                F(ie.package_id) ? (s(), o("span", Xi, " SKIPPED ")) : (s(), o("span", Yi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ut) => T(ie.package_id)
                }, n(F(ie.package_id) ? "Include" : "Skip"), 9, Qi)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Zi)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(G, { key: 2 }, [
          e("div", Ji, [
            A[7] || (A[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", er, n(R.value) + "/" + n(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (s(), S(bs, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: A[0] || (A[0] = (ie) => z(v.value - 1)),
            onNext: A[1] || (A[1] = (ie) => z(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          f.value ? (s(), o("div", tr, [
            g(Ii, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((Z = f.value.options) != null && Z.length),
              options: f.value.options,
              choice: (be = t.nodeChoices) == null ? void 0 : be.get(f.value.node_type),
              status: D.value,
              "status-label": x.value,
              "search-results": O.value,
              "is-searching": I.value,
              onMarkOptional: ee,
              onSkip: K,
              onManualEntry: J,
              onSearch: de,
              onOptionSelected: ae,
              onClearChoice: me,
              onSearchResultSelected: Re
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", sr, [...A[8] || (A[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), S(Te, { to: "body" }, [
          y.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: A[4] || (A[4] = Ee((ie) => L.value = !0, ["self"])),
            onMouseup: Ee($, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: A[3] || (A[3] = (ie) => L.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                A[9] || (A[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", or, [
                g(He, {
                  modelValue: l.value,
                  "onUpdate:modelValue": A[2] || (A[2] = (ie) => l.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: q
                }, null, 8, ["modelValue"]),
                e("div", ar, [
                  b.value.length > 0 ? (s(), o("div", nr, [
                    (s(!0), o(G, null, se(b.value, (ie) => (s(), o("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (ut) => $e(ie)
                    }, [
                      e("div", ir, [
                        e("code", rr, n(ie.package_id), 1),
                        ie.match_confidence ? (s(), S(jt, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : c("", !0)
                      ]),
                      ie.description ? (s(), o("div", dr, n(ie.description), 1)) : c("", !0)
                    ], 8, lr))), 128))
                  ])) : h.value ? (s(), o("div", cr, "Searching...")) : l.value ? (s(), o("div", ur, 'No packages found matching "' + n(l.value) + '"', 1)) : (s(), o("div", mr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : c("", !0)
        ])),
        (s(), S(Te, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Ee(E, ["self"])
          }, [
            e("div", vr, [
              e("div", { class: "node-modal-header" }, [
                A[10] || (A[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", fr, [
                g(He, {
                  modelValue: u.value,
                  "onUpdate:modelValue": A[5] || (A[5] = (ie) => u.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", gr, [
                  g(re, {
                    variant: "secondary",
                    onClick: E
                  }, {
                    default: i(() => [...A[11] || (A[11] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: Ge
                  }, {
                    default: i(() => [...A[12] || (A[12] = [
                      w(" Add Package ", -1)
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
}), hr = /* @__PURE__ */ X(pr, [["__scopeId", "data-v-281581bc"]]), yr = { class: "node-info" }, wr = { class: "node-info-text" }, kr = { class: "item-body" }, br = {
  key: 0,
  class: "resolved-state"
}, _r = {
  key: 1,
  class: "multiple-options"
}, $r = { class: "options-list" }, Cr = ["onClick"], xr = ["name", "value", "checked", "onChange"], Sr = { class: "option-content" }, Ir = { class: "option-header" }, Er = { class: "option-filename" }, Mr = { class: "option-meta" }, zr = { class: "option-size" }, Lr = { class: "option-category" }, Dr = { class: "option-path" }, Rr = { class: "action-buttons" }, Nr = {
  key: 2,
  class: "unresolved"
}, Tr = { class: "action-buttons" }, Ur = /* @__PURE__ */ Y({
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
  setup(t, { emit: r }) {
    const a = t, d = r, p = U(() => !!a.choice);
    U(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.action;
    }), U(() => {
      var l, u;
      return ((u = (l = a.choice) == null ? void 0 : l.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const v = U(() => {
      switch (a.status) {
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
    function y(l) {
      d("option-selected", l);
    }
    function m(l) {
      if (!l) return "Unknown";
      const u = l / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, u) => (s(), o("div", {
      class: le(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", yr, [
        e("span", wr, [
          u[7] || (u[7] = w("Used by: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", v.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", kr, [
        p.value ? (s(), o("div", br, [
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => d("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", _r, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", $r, [
            (s(!0), o(G, null, se(t.options, (b, h) => (s(), o("label", {
              key: b.model.hash,
              class: le(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (k) => y(h)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (k) => y(h)
              }, null, 40, xr),
              e("div", Sr, [
                e("div", Ir, [
                  e("span", Er, n(b.model.filename), 1),
                  g(jt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Mr, [
                  e("span", zr, n(m(b.model.size)), 1),
                  e("span", Lr, n(b.model.category), 1)
                ]),
                e("div", Dr, n(b.model.relative_path), 1)
              ])
            ], 10, Cr))), 128))
          ]),
          e("div", Rr, [
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => d("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => d("download-url"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Nr, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Tr, [
            g(re, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => d("search"))
            }, {
              default: i(() => [...u[13] || (u[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => d("download-url"))
            }, {
              default: i(() => [...u[14] || (u[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[15] || (u[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Pr = /* @__PURE__ */ X(Ur, [["__scopeId", "data-v-8a82fefa"]]), Br = { class: "model-resolution-step" }, Or = { class: "step-header" }, Fr = { class: "step-info" }, Vr = { class: "step-title" }, Ar = { class: "step-description" }, Wr = { class: "stat-badge" }, Gr = {
  key: 1,
  class: "step-body"
}, jr = {
  key: 2,
  class: "empty-state"
}, Hr = { class: "model-search-modal" }, qr = { class: "model-modal-body" }, Kr = {
  key: 0,
  class: "model-search-results"
}, Yr = ["onClick"], Xr = { class: "model-result-header" }, Qr = { class: "model-result-filename" }, Zr = { class: "model-result-meta" }, Jr = { class: "model-result-category" }, ed = { class: "model-result-size" }, td = {
  key: 0,
  class: "model-result-path"
}, sd = {
  key: 1,
  class: "model-no-results"
}, od = {
  key: 2,
  class: "model-searching"
}, ad = { class: "model-download-url-modal" }, nd = { class: "model-modal-body" }, ld = { class: "model-input-group" }, id = { class: "model-input-group" }, rd = { class: "model-modal-actions" }, dd = /* @__PURE__ */ Y({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: r }) {
    const a = {
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
    function d(P) {
      var E;
      return P && ((E = a[P]) == null ? void 0 : E[0]) || null;
    }
    const p = t, v = r, y = _(0), m = _(!1), l = _(!1), u = _(""), b = _(""), h = _(""), k = _([]), C = _(!1), L = U(() => p.models[y.value]), $ = U(() => p.models.some((P) => P.is_download_intent)), f = U(() => p.models.filter(
      (P) => p.modelChoices.has(P.filename) || P.is_download_intent
    ).length), R = U(() => {
      var E;
      if (!L.value) return "";
      const P = d((E = L.value.reference) == null ? void 0 : E.node_type);
      return P ? `${P}/${L.value.filename}` : "";
    }), O = U(() => {
      var E;
      if (!L.value) return "not-found";
      const P = p.modelChoices.get(L.value.filename);
      if (P)
        switch (P.action) {
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
      return L.value.is_download_intent ? "download" : (E = L.value.options) != null && E.length ? "ambiguous" : "not-found";
    }), I = U(() => {
      var E, ne;
      if (!L.value) return;
      const P = p.modelChoices.get(L.value.filename);
      if (P)
        switch (P.action) {
          case "select":
            return (E = P.selected_model) != null && E.filename ? `→ ${P.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return L.value.is_download_intent ? "Pending Download" : (ne = L.value.options) != null && ne.length ? `${L.value.options.length} matches` : "Not Found";
    });
    function B(P) {
      P >= 0 && P < p.models.length && (y.value = P);
    }
    function W() {
      L.value && v("mark-optional", L.value.filename);
    }
    function F() {
      L.value && v("skip", L.value.filename);
    }
    function T(P) {
      L.value && v("option-selected", L.value.filename, P);
    }
    function D() {
      L.value && v("clear-choice", L.value.filename);
    }
    function x() {
      L.value && (u.value = L.value.filename, m.value = !0);
    }
    function z() {
      L.value && (b.value = L.value.download_source || "", h.value = L.value.target_path || R.value, l.value = !0);
    }
    function ee() {
      m.value = !1, u.value = "", k.value = [];
    }
    function K() {
      l.value = !1, b.value = "", h.value = "";
    }
    function ae() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function me(P) {
      L.value && ee();
    }
    function de() {
      !L.value || !b.value.trim() || (v("download-url", L.value.filename, b.value.trim(), h.value.trim() || void 0), K());
    }
    function J(P) {
      if (!P) return "Unknown";
      const E = P / (1024 * 1024 * 1024);
      return E >= 1 ? `${E.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, E) => {
      var ne, q, Ie;
      return s(), o("div", Br, [
        e("div", Or, [
          e("div", Fr, [
            e("h3", Vr, n($.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Ar, n($.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Wr, n(f.value) + "/" + n(t.models.length) + " resolved", 1)
        ]),
        L.value ? (s(), S(bs, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": y.value,
          "total-items": t.models.length,
          onPrev: E[0] || (E[0] = ($e) => B(y.value - 1)),
          onNext: E[1] || (E[1] = ($e) => B(y.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        L.value ? (s(), o("div", Gr, [
          g(Pr, {
            filename: L.value.filename,
            "node-type": ((ne = L.value.reference) == null ? void 0 : ne.node_type) || "Unknown",
            "has-multiple-options": !!((q = L.value.options) != null && q.length),
            options: L.value.options,
            choice: (Ie = t.modelChoices) == null ? void 0 : Ie.get(L.value.filename),
            status: O.value,
            "status-label": I.value,
            onMarkOptional: W,
            onSkip: F,
            onDownloadUrl: z,
            onSearch: x,
            onOptionSelected: T,
            onClearChoice: D
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", jr, [...E[5] || (E[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), S(Te, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ee(ee, ["self"])
          }, [
            e("div", Hr, [
              e("div", { class: "model-modal-header" }, [
                E[6] || (E[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              e("div", qr, [
                g(He, {
                  modelValue: u.value,
                  "onUpdate:modelValue": E[2] || (E[2] = ($e) => u.value = $e),
                  placeholder: "Search by filename, category...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", Kr, [
                  (s(!0), o(G, null, se(k.value, ($e) => (s(), o("div", {
                    key: $e.hash,
                    class: "model-search-result-item",
                    onClick: (Re) => me()
                  }, [
                    e("div", Xr, [
                      e("code", Qr, n($e.filename), 1)
                    ]),
                    e("div", Zr, [
                      e("span", Jr, n($e.category), 1),
                      e("span", ed, n(J($e.size)), 1)
                    ]),
                    $e.relative_path ? (s(), o("div", td, n($e.relative_path), 1)) : c("", !0)
                  ], 8, Yr))), 128))
                ])) : u.value && !C.value ? (s(), o("div", sd, ' No models found matching "' + n(u.value) + '" ', 1)) : c("", !0),
                C.value ? (s(), o("div", od, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), S(Te, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ee(K, ["self"])
          }, [
            e("div", ad, [
              e("div", { class: "model-modal-header" }, [
                E[7] || (E[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: K
                }, "✕")
              ]),
              e("div", nd, [
                e("div", ld, [
                  E[8] || (E[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(He, {
                    modelValue: b.value,
                    "onUpdate:modelValue": E[3] || (E[3] = ($e) => b.value = $e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", id, [
                  E[9] || (E[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(He, {
                    modelValue: h.value,
                    "onUpdate:modelValue": E[4] || (E[4] = ($e) => h.value = $e),
                    placeholder: R.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", rd, [
                  g(re, {
                    variant: "secondary",
                    onClick: K
                  }, {
                    default: i(() => [...E[10] || (E[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !b.value.trim() || !h.value.trim(),
                    onClick: de
                  }, {
                    default: i(() => [...E[11] || (E[11] = [
                      w(" Queue Download ", -1)
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
}), cd = /* @__PURE__ */ X(dd, [["__scopeId", "data-v-c6acbada"]]), ud = { class: "applying-step" }, md = {
  key: 0,
  class: "phase-content"
}, vd = {
  key: 1,
  class: "phase-content"
}, fd = { class: "phase-description" }, gd = { class: "overall-progress" }, pd = { class: "progress-bar" }, hd = { class: "progress-label" }, yd = { class: "install-list" }, wd = { class: "install-icon" }, kd = { key: 0 }, bd = {
  key: 1,
  class: "spinner"
}, _d = { key: 2 }, $d = { key: 3 }, Cd = {
  key: 0,
  class: "install-error"
}, xd = {
  key: 2,
  class: "phase-content"
}, Sd = { class: "phase-header" }, Id = { class: "phase-title" }, Ed = { class: "completion-summary" }, Md = {
  key: 0,
  class: "summary-item success"
}, zd = { class: "summary-text" }, Ld = {
  key: 1,
  class: "summary-item error"
}, Dd = { class: "summary-text" }, Rd = {
  key: 2,
  class: "failed-list"
}, Nd = { class: "failed-node-id" }, Td = { class: "failed-error" }, Ud = {
  key: 4,
  class: "summary-item success"
}, Pd = {
  key: 5,
  class: "restart-prompt"
}, Bd = {
  key: 3,
  class: "phase-content error"
}, Od = { class: "error-message" }, Fd = /* @__PURE__ */ Y({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const r = t, a = U(() => {
      var u, b;
      const m = ((u = r.progress.nodeInstallProgress) == null ? void 0 : u.totalNodes) || r.progress.nodesToInstall.length;
      if (!m) return 0;
      const l = ((b = r.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.length) ?? 0;
      return Math.round(l / m * 100);
    }), d = U(() => {
      var m;
      return ((m = r.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((l) => !l.success)) || [];
    }), p = U(() => d.value.length > 0);
    function v(m, l) {
      var b, h;
      const u = (b = r.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.find((k) => k.node_id === m);
      return u ? u.success ? "complete" : "failed" : ((h = r.progress.nodeInstallProgress) == null ? void 0 : h.currentIndex) === l ? "installing" : "pending";
    }
    function y(m) {
      var l, u;
      return (u = (l = r.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((b) => b.node_id === m)) == null ? void 0 : u.error;
    }
    return (m, l) => {
      var u, b, h, k;
      return s(), o("div", ud, [
        t.progress.phase === "resolving" ? (s(), o("div", md, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", vd, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", fd, " Installing " + n((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + n(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", gd, [
            e("div", pd, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${a.value}%` })
              }, null, 4)
            ]),
            e("span", hd, n(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + n(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", yd, [
            (s(!0), o(G, null, se(t.progress.nodesToInstall, (C, L) => (s(), o("div", {
              key: C,
              class: le(["install-item", v(C, L)])
            }, [
              e("span", wd, [
                v(C, L) === "pending" ? (s(), o("span", kd, "○")) : v(C, L) === "installing" ? (s(), o("span", bd, "◌")) : v(C, L) === "complete" ? (s(), o("span", _d, "✓")) : v(C, L) === "failed" ? (s(), o("span", $d, "✗")) : c("", !0)
              ]),
              e("code", null, n(C), 1),
              y(C) ? (s(), o("span", Cd, n(y(C)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", xd, [
          e("div", Sd, [
            e("span", {
              class: le(["phase-icon", p.value ? "warning" : "success"])
            }, n(p.value ? "⚠" : "✓"), 3),
            e("h3", Id, n(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Ed, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Md, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", zd, n(t.progress.nodesInstalled.length) + " node package" + n(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Ld, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Dd, n(d.value.length) + " package" + n(d.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Rd, [
              (s(!0), o(G, null, se(d.value, (C) => (s(), o("div", {
                key: C.node_id,
                class: "failed-item"
              }, [
                e("code", Nd, n(C.node_id), 1),
                e("span", Td, n(C.error), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (C) => m.$emit("retry-failed"))
            }, " Retry Failed (" + n(d.value.length) + ") ", 1)) : c("", !0),
            p.value ? c("", !0) : (s(), o("div", Ud, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Pd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = (C) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Bd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Od, n(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), Vd = /* @__PURE__ */ X(Fd, [["__scopeId", "data-v-5efaae58"]]), Ad = {
  key: 0,
  class: "loading-state"
}, Wd = {
  key: 1,
  class: "wizard-content"
}, Gd = {
  key: 0,
  class: "step-content"
}, jd = { class: "analysis-summary" }, Hd = { class: "analysis-header" }, qd = { class: "summary-description" }, Kd = { class: "stats-grid" }, Yd = { class: "stat-card" }, Xd = { class: "stat-items" }, Qd = {
  key: 0,
  class: "stat-item success"
}, Zd = { class: "stat-count" }, Jd = {
  key: 1,
  class: "stat-item info"
}, ec = { class: "stat-count" }, tc = {
  key: 2,
  class: "stat-item warning"
}, sc = { class: "stat-count" }, oc = {
  key: 3,
  class: "stat-item error"
}, ac = { class: "stat-count" }, nc = { class: "stat-card" }, lc = { class: "stat-items" }, ic = { class: "stat-item success" }, rc = { class: "stat-count" }, dc = {
  key: 0,
  class: "stat-item info"
}, cc = { class: "stat-count" }, uc = {
  key: 1,
  class: "stat-item warning"
}, mc = { class: "stat-count" }, vc = {
  key: 2,
  class: "stat-item warning"
}, fc = { class: "stat-count" }, gc = {
  key: 3,
  class: "stat-item error"
}, pc = { class: "stat-count" }, hc = {
  key: 0,
  class: "status-message warning"
}, yc = { class: "status-text" }, wc = {
  key: 1,
  class: "status-message info"
}, kc = { class: "status-text" }, bc = {
  key: 2,
  class: "status-message info"
}, _c = { class: "status-text" }, $c = {
  key: 3,
  class: "status-message warning"
}, Cc = { class: "status-text" }, xc = {
  key: 4,
  class: "status-message success"
}, Sc = {
  key: 5,
  class: "category-mismatch-section"
}, Ic = { class: "mismatch-list" }, Ec = { class: "mismatch-path" }, Mc = { class: "mismatch-target" }, zc = {
  key: 3,
  class: "step-content"
}, Lc = { class: "review-summary" }, Dc = { class: "review-stats" }, Rc = { class: "review-stat" }, Nc = { class: "stat-value" }, Tc = { class: "review-stat" }, Uc = { class: "stat-value" }, Pc = { class: "review-stat" }, Bc = { class: "stat-value" }, Oc = { class: "review-stat" }, Fc = { class: "stat-value" }, Vc = {
  key: 0,
  class: "review-section"
}, Ac = { class: "section-title" }, Wc = { class: "review-items" }, Gc = { class: "item-name" }, jc = { class: "item-choice" }, Hc = {
  key: 0,
  class: "choice-badge install"
}, qc = {
  key: 1,
  class: "choice-badge skip"
}, Kc = {
  key: 1,
  class: "review-section"
}, Yc = { class: "section-title" }, Xc = { class: "review-items" }, Qc = { class: "item-name" }, Zc = { class: "item-choice" }, Jc = {
  key: 0,
  class: "choice-badge install"
}, eu = {
  key: 1,
  class: "choice-badge optional"
}, tu = {
  key: 2,
  class: "choice-badge skip"
}, su = {
  key: 1,
  class: "choice-badge pending"
}, ou = {
  key: 2,
  class: "review-section"
}, au = { class: "section-title" }, nu = { class: "review-items" }, lu = { class: "item-name" }, iu = { class: "item-choice" }, ru = {
  key: 0,
  class: "choice-badge install"
}, du = {
  key: 1,
  class: "choice-badge download"
}, cu = {
  key: 2,
  class: "choice-badge optional"
}, uu = {
  key: 3,
  class: "choice-badge skip"
}, mu = {
  key: 4,
  class: "choice-badge skip"
}, vu = {
  key: 1,
  class: "choice-badge download"
}, fu = {
  key: 2,
  class: "choice-badge pending"
}, gu = {
  key: 3,
  class: "no-choices"
}, pu = /* @__PURE__ */ Y({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: r }) {
    const a = t, d = r, { analyzeWorkflow: p, applyResolution: v, installNodes: y, queueModelDownloads: m, progress: l, resetProgress: u } = ks(), { loadPendingDownloads: b } = Bt(), { openFileLocation: h } = De(), k = _(null), C = _(!1), L = _(!1), $ = _(null), f = _("analysis"), R = _([]), O = _(/* @__PURE__ */ new Map()), I = _(/* @__PURE__ */ new Map()), B = _(/* @__PURE__ */ new Set()), W = U(() => {
      const j = [
        { id: "analysis", label: "Analysis" }
      ];
      return (T.value || z.value) && j.push({ id: "nodes", label: "Nodes" }), (D.value || x.value) && j.push({ id: "models", label: "Models" }), j.push({ id: "review", label: "Review" }), f.value === "applying" && j.push({ id: "applying", label: "Applying" }), j;
    }), F = U(() => k.value ? k.value.stats.needs_user_input : !1), T = U(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), D = U(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), x = U(() => k.value ? k.value.stats.download_intents > 0 : !1), z = U(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), ee = U(() => k.value ? k.value.nodes.resolved.length : 0), K = U(() => k.value ? k.value.models.resolved.filter((j) => j.has_category_mismatch) : []), ae = U(() => K.value.length > 0), me = U(() => {
      if (!k.value) return [];
      const j = k.value.nodes.resolved.filter((H) => !H.is_installed), N = /* @__PURE__ */ new Set();
      return j.filter((H) => N.has(H.package.package_id) ? !1 : (N.add(H.package.package_id), !0));
    }), de = U(() => {
      if (!k.value) return [];
      const j = k.value.nodes.resolved.filter((H) => !H.is_installed), N = /* @__PURE__ */ new Map();
      for (const H of j) {
        const ve = N.get(H.package.package_id);
        ve ? ve.node_types_count++ : N.set(H.package.package_id, {
          package_id: H.package.package_id,
          title: H.package.title,
          node_types_count: 1
        });
      }
      return Array.from(N.values());
    }), J = U(() => me.value.filter((j) => !B.value.has(j.package.package_id))), P = U(() => k.value ? k.value.models.resolved.filter((j) => j.match_type === "download_intent").map((j) => ({
      filename: j.reference.widget_value,
      reference: j.reference,
      is_download_intent: !0,
      resolved_model: j.model,
      download_source: j.download_source,
      target_path: j.target_path
    })) : []), E = U(() => {
      if (!k.value) return [];
      const j = k.value.nodes.unresolved.map((H) => ({
        node_type: H.reference.node_type,
        reason: H.reason,
        is_unresolved: !0,
        options: void 0
      })), N = k.value.nodes.ambiguous.map((H) => ({
        node_type: H.reference.node_type,
        has_multiple_options: !0,
        options: H.options.map((ve) => ({
          package_id: ve.package.package_id,
          title: ve.package.title,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          is_installed: ve.is_installed
        }))
      }));
      return [...j, ...N];
    }), ne = U(() => {
      if (!k.value) return [];
      const j = k.value.models.unresolved.map((H) => ({
        filename: H.reference.widget_value,
        reference: H.reference,
        reason: H.reason,
        is_unresolved: !0,
        options: void 0
      })), N = k.value.models.ambiguous.map((H) => ({
        filename: H.reference.widget_value,
        reference: H.reference,
        has_multiple_options: !0,
        options: H.options.map((ve) => ({
          model: ve.model,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          has_download_source: ve.has_download_source
        }))
      }));
      return [...j, ...N];
    }), q = U(() => {
      const j = ne.value, N = P.value.map((H) => ({
        filename: H.filename,
        reference: H.reference,
        is_download_intent: !0,
        resolved_model: H.resolved_model,
        download_source: H.download_source,
        target_path: H.target_path,
        options: void 0
      }));
      return [...j, ...N];
    }), Ie = U(() => {
      let j = J.value.length;
      for (const N of O.value.values())
        N.action === "install" && j++;
      for (const N of I.value.values())
        N.action === "select" && j++;
      return j;
    }), $e = U(() => {
      let j = 0;
      for (const N of I.value.values())
        N.action === "download" && j++;
      return j;
    }), Re = U(() => {
      let j = 0;
      for (const N of O.value.values())
        N.action === "optional" && j++;
      for (const N of I.value.values())
        N.action === "optional" && j++;
      return j;
    }), Ge = U(() => {
      let j = B.value.size;
      for (const N of O.value.values())
        N.action === "skip" && j++;
      for (const N of I.value.values())
        N.action === "skip" && j++;
      for (const N of E.value)
        O.value.has(N.node_type) || j++;
      for (const N of ne.value)
        I.value.has(N.filename) || j++;
      return j;
    }), oe = U(() => {
      const j = {};
      if (j.analysis = { resolved: 1, total: 1 }, T.value) {
        const N = E.value.length, H = E.value.filter(
          (ve) => O.value.has(ve.node_type)
        ).length;
        j.nodes = { resolved: H, total: N };
      }
      if (D.value || x.value) {
        const N = q.value.length, H = q.value.filter(
          (ve) => I.value.has(ve.filename) || ve.is_download_intent
        ).length;
        j.models = { resolved: H, total: N };
      }
      if (j.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const N = l.totalFiles || 1, H = l.completedFiles.length;
        j.applying = { resolved: H, total: N };
      }
      return j;
    });
    function A(j) {
      f.value = j;
    }
    function Z() {
      const j = W.value.findIndex((N) => N.id === f.value);
      j > 0 && (f.value = W.value[j - 1].id);
    }
    function be() {
      const j = W.value.findIndex((N) => N.id === f.value);
      j < W.value.length - 1 && (f.value = W.value[j + 1].id);
    }
    async function ie() {
      C.value = !0, $.value = null;
      try {
        k.value = await p(a.workflowName);
      } catch (j) {
        $.value = j instanceof Error ? j.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function ut() {
      R.value.includes("analysis") || R.value.push("analysis"), T.value || z.value ? f.value = "nodes" : D.value || x.value ? f.value = "models" : f.value = "review";
    }
    function xt(j) {
      O.value.set(j, { action: "optional" });
    }
    function St(j) {
      O.value.set(j, { action: "skip" });
    }
    function _e(j, N) {
      var ve;
      const H = E.value.find((Le) => Le.node_type === j);
      (ve = H == null ? void 0 : H.options) != null && ve[N] && O.value.set(j, {
        action: "install",
        package_id: H.options[N].package_id
      });
    }
    function rt(j, N) {
      O.value.set(j, {
        action: "install",
        package_id: N
      });
    }
    function Je(j) {
      O.value.delete(j);
    }
    function Ye(j) {
      B.value.has(j) ? B.value.delete(j) : B.value.add(j);
    }
    function It(j) {
      I.value.set(j, { action: "optional" });
    }
    function fe(j) {
      I.value.set(j, { action: "skip" });
    }
    function We(j, N) {
      var ve;
      const H = ne.value.find((Le) => Le.filename === j);
      (ve = H == null ? void 0 : H.options) != null && ve[N] && I.value.set(j, {
        action: "select",
        selected_model: H.options[N].model
      });
    }
    function Q(j, N, H) {
      I.value.set(j, {
        action: "download",
        url: N,
        target_path: H
      });
    }
    function we(j) {
      I.value.delete(j);
    }
    async function Ce(j) {
      try {
        await h(j);
      } catch (N) {
        $.value = N instanceof Error ? N.message : "Failed to open file location";
      }
    }
    async function yt() {
      var j;
      L.value = !0, $.value = null, u(), l.phase = "resolving", f.value = "applying";
      try {
        const N = await v(a.workflowName, O.value, I.value, B.value);
        N.models_to_download && N.models_to_download.length > 0 && m(a.workflowName, N.models_to_download);
        const H = [
          ...N.nodes_to_install || [],
          ...J.value.map((Le) => Le.package.package_id)
        ];
        l.nodesToInstall = [...new Set(H)], l.nodesToInstall.length > 0 && await y(a.workflowName), l.phase = "complete", await b();
        const ve = l.installError || ((j = l.nodeInstallProgress) == null ? void 0 : j.completedNodes.some((Le) => !Le.success));
        !l.needsRestart && !ve && setTimeout(() => {
          d("refresh"), d("install"), d("close");
        }, 1500);
      } catch (N) {
        $.value = N instanceof Error ? N.message : "Failed to apply resolution", l.error = $.value, l.phase = "error";
      } finally {
        L.value = !1;
      }
    }
    function mt() {
      d("refresh"), d("restart"), d("close");
    }
    async function Kt() {
      var N;
      const j = ((N = l.nodeInstallProgress) == null ? void 0 : N.completedNodes.filter((H) => !H.success).map((H) => H.node_id)) || [];
      if (j.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: j.length
        }, l.nodesToInstall = j, l.nodesInstalled = [], l.installError = void 0;
        try {
          await y(a.workflowName), l.phase = "complete";
        } catch (H) {
          l.error = H instanceof Error ? H.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return ze(ie), (j, N) => (s(), S(at, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: C.value,
      error: $.value || void 0,
      "fixed-height": !0,
      onClose: N[1] || (N[1] = (H) => d("close"))
    }, {
      body: i(() => [
        C.value && !k.value ? (s(), o("div", Ad, [...N[2] || (N[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", Wd, [
          g(Xl, {
            steps: W.value,
            "current-step": f.value,
            "completed-steps": R.value,
            "step-stats": oe.value,
            onStepChange: A
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", Gd, [
            e("div", jd, [
              e("div", Hd, [
                N[3] || (N[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", qd, " Found " + n(k.value.stats.total_nodes) + " nodes and " + n(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Kd, [
                e("div", Yd, [
                  N[12] || (N[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Xd, [
                    ee.value > 0 ? (s(), o("div", Qd, [
                      N[4] || (N[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Zd, n(ee.value), 1),
                      N[5] || (N[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", Jd, [
                      N[6] || (N[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", ec, n(k.value.stats.packages_needing_installation), 1),
                      N[7] || (N[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", tc, [
                      N[8] || (N[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", sc, n(k.value.nodes.ambiguous.length), 1),
                      N[9] || (N[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", oc, [
                      N[10] || (N[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", ac, n(k.value.nodes.unresolved.length), 1),
                      N[11] || (N[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", nc, [
                  N[23] || (N[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", lc, [
                    e("div", ic, [
                      N[13] || (N[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", rc, n(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      N[14] || (N[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", dc, [
                      N[15] || (N[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", cc, n(k.value.stats.download_intents), 1),
                      N[16] || (N[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    ae.value ? (s(), o("div", uc, [
                      N[17] || (N[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", mc, n(K.value.length), 1),
                      N[18] || (N[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : c("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", vc, [
                      N[19] || (N[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", fc, n(k.value.models.ambiguous.length), 1),
                      N[20] || (N[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", gc, [
                      N[21] || (N[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", pc, n(k.value.models.unresolved.length), 1),
                      N[22] || (N[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", hc, [
                N[24] || (N[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", yc, n(E.value.length + ne.value.length) + " items need your input", 1)
              ])) : z.value ? (s(), o("div", wc, [
                N[25] || (N[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", kc, n(k.value.stats.packages_needing_installation) + " package" + n(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + n(k.value.stats.nodes_needing_installation) + " node type" + n(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + n(x.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : x.value ? (s(), o("div", bc, [
                N[26] || (N[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", _c, n(k.value.stats.download_intents) + " model" + n(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : ae.value ? (s(), o("div", $c, [
                N[27] || (N[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Cc, n(K.value.length) + " model" + n(K.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", xc, [...N[28] || (N[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ae.value ? (s(), o("div", Sc, [
                N[31] || (N[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Ic, [
                  (s(!0), o(G, null, se(K.value, (H) => {
                    var ve, Le;
                    return s(), o("div", {
                      key: H.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Ec, n(H.actual_category) + "/" + n((ve = H.model) == null ? void 0 : ve.filename), 1),
                      N[30] || (N[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Mc, n((Le = H.expected_categories) == null ? void 0 : Le[0]) + "/", 1),
                      H.file_path ? (s(), S(re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (dt) => Ce(H.file_path)
                      }, {
                        default: i(() => [...N[29] || (N[29] = [
                          w(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : c("", !0)
                    ]);
                  }), 128))
                ])
              ])) : c("", !0)
            ])
          ])) : c("", !0),
          f.value === "nodes" ? (s(), S(hr, {
            key: 1,
            nodes: E.value,
            "node-choices": O.value,
            "auto-resolved-packages": de.value,
            "skipped-packages": B.value,
            onMarkOptional: xt,
            onSkip: St,
            onOptionSelected: _e,
            onManualEntry: rt,
            onClearChoice: Je,
            onPackageSkip: Ye
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          f.value === "models" ? (s(), S(cd, {
            key: 2,
            models: q.value,
            "model-choices": I.value,
            onMarkOptional: It,
            onSkip: fe,
            onOptionSelected: We,
            onDownloadUrl: Q,
            onClearChoice: we
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          f.value === "review" ? (s(), o("div", zc, [
            e("div", Lc, [
              N[36] || (N[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Dc, [
                e("div", Rc, [
                  e("span", Nc, n(Ie.value), 1),
                  N[32] || (N[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Tc, [
                  e("span", Uc, n($e.value), 1),
                  N[33] || (N[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Pc, [
                  e("span", Bc, n(Re.value), 1),
                  N[34] || (N[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Oc, [
                  e("span", Fc, n(Ge.value), 1),
                  N[35] || (N[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              de.value.length > 0 ? (s(), o("div", Vc, [
                e("h4", Ac, "Node Packages (" + n(de.value.length) + ")", 1),
                e("div", Wc, [
                  (s(!0), o(G, null, se(de.value, (H) => (s(), o("div", {
                    key: H.package_id,
                    class: "review-item"
                  }, [
                    e("code", Gc, n(H.package_id), 1),
                    e("div", jc, [
                      B.value.has(H.package_id) ? (s(), o("span", qc, "Skipped")) : (s(), o("span", Hc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              E.value.length > 0 ? (s(), o("div", Kc, [
                e("h4", Yc, "Node Choices (" + n(E.value.length) + ")", 1),
                e("div", Xc, [
                  (s(!0), o(G, null, se(E.value, (H) => {
                    var ve, Le, dt, Xe;
                    return s(), o("div", {
                      key: H.node_type,
                      class: "review-item"
                    }, [
                      e("code", Qc, n(H.node_type), 1),
                      e("div", Zc, [
                        O.value.has(H.node_type) ? (s(), o(G, { key: 0 }, [
                          ((ve = O.value.get(H.node_type)) == null ? void 0 : ve.action) === "install" ? (s(), o("span", Jc, n((Le = O.value.get(H.node_type)) == null ? void 0 : Le.package_id), 1)) : ((dt = O.value.get(H.node_type)) == null ? void 0 : dt.action) === "optional" ? (s(), o("span", eu, " Optional ")) : ((Xe = O.value.get(H.node_type)) == null ? void 0 : Xe.action) === "skip" ? (s(), o("span", tu, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", su, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              q.value.length > 0 ? (s(), o("div", ou, [
                e("h4", au, "Models (" + n(q.value.length) + ")", 1),
                e("div", nu, [
                  (s(!0), o(G, null, se(q.value, (H) => {
                    var ve, Le, dt, Xe, Ot, vt, ft;
                    return s(), o("div", {
                      key: H.filename,
                      class: "review-item"
                    }, [
                      e("code", lu, n(H.filename), 1),
                      e("div", iu, [
                        I.value.has(H.filename) ? (s(), o(G, { key: 0 }, [
                          ((ve = I.value.get(H.filename)) == null ? void 0 : ve.action) === "select" ? (s(), o("span", ru, n((dt = (Le = I.value.get(H.filename)) == null ? void 0 : Le.selected_model) == null ? void 0 : dt.filename), 1)) : ((Xe = I.value.get(H.filename)) == null ? void 0 : Xe.action) === "download" ? (s(), o("span", du, " Download ")) : ((Ot = I.value.get(H.filename)) == null ? void 0 : Ot.action) === "optional" ? (s(), o("span", cu, " Optional ")) : ((vt = I.value.get(H.filename)) == null ? void 0 : vt.action) === "skip" ? (s(), o("span", uu, " Skip ")) : ((ft = I.value.get(H.filename)) == null ? void 0 : ft.action) === "cancel_download" ? (s(), o("span", mu, " Cancel Download ")) : c("", !0)
                        ], 64)) : H.is_download_intent ? (s(), o("span", vu, " Pending Download ")) : (s(), o("span", fu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              me.value.length === 0 && E.value.length === 0 && q.value.length === 0 ? (s(), o("div", gu, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          f.value === "applying" ? (s(), S(Vd, {
            key: 4,
            progress: he(l),
            onRestart: mt,
            onRetryFailed: Kt
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), S(re, {
          key: 0,
          variant: "secondary",
          disabled: L.value,
          onClick: Z
        }, {
          default: i(() => [...N[37] || (N[37] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        N[41] || (N[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || he(l).phase === "complete" || he(l).phase === "error" ? (s(), S(re, {
          key: 1,
          variant: "secondary",
          onClick: N[0] || (N[0] = (H) => d("close"))
        }, {
          default: i(() => [
            w(n(he(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        f.value === "analysis" ? (s(), S(re, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: ut
        }, {
          default: i(() => [...N[38] || (N[38] = [
            w(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        f.value === "nodes" ? (s(), S(re, {
          key: 3,
          variant: "primary",
          onClick: be
        }, {
          default: i(() => [
            w(n(D.value || x.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        f.value === "models" ? (s(), S(re, {
          key: 4,
          variant: "primary",
          onClick: be
        }, {
          default: i(() => [...N[39] || (N[39] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        f.value === "review" ? (s(), S(re, {
          key: 5,
          variant: "primary",
          disabled: L.value,
          loading: L.value,
          onClick: yt
        }, {
          default: i(() => [...N[40] || (N[40] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), hu = /* @__PURE__ */ X(pu, [["__scopeId", "data-v-6276cf1d"]]), yu = { class: "search-input-wrapper" }, wu = ["value", "placeholder"], ku = /* @__PURE__ */ Y({
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
    const a = t, d = r, p = _(null);
    let v;
    function y(l) {
      const u = l.target.value;
      a.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        d("update:modelValue", u);
      }, a.debounce)) : d("update:modelValue", u);
    }
    function m() {
      var l;
      d("update:modelValue", ""), d("clear"), (l = p.value) == null || l.focus();
    }
    return ze(() => {
      a.autoFocus && p.value && p.value.focus();
    }), (l, u) => (s(), o("div", yu, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: y,
        onKeyup: ct(m, ["escape"])
      }, null, 40, wu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), bu = /* @__PURE__ */ X(ku, [["__scopeId", "data-v-266f857a"]]), _u = { class: "search-bar" }, $u = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, a) => (s(), o("div", _u, [
      g(bu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (d) => r.$emit("update:modelValue", d)),
        onClear: a[1] || (a[1] = (d) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $t = /* @__PURE__ */ X($u, [["__scopeId", "data-v-3d51bbfd"]]), Cu = { class: "section-group" }, xu = {
  key: 0,
  class: "section-content"
}, Su = /* @__PURE__ */ Y({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const a = t, d = r, p = _(a.initiallyExpanded);
    function v() {
      a.collapsible && (p.value = !p.value, d("toggle", p.value));
    }
    return (y, m) => (s(), o("section", Cu, [
      g(Ae, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: v
      }, {
        default: i(() => [
          w(n(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (s(), o("div", xu, [
        ge(y.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ X(Su, [["__scopeId", "data-v-c48e33ed"]]), Iu = { class: "item-header" }, Eu = {
  key: 0,
  class: "item-icon"
}, Mu = { class: "item-info" }, zu = {
  key: 0,
  class: "item-title"
}, Lu = {
  key: 1,
  class: "item-subtitle"
}, Du = {
  key: 0,
  class: "item-details"
}, Ru = {
  key: 1,
  class: "item-actions"
}, Nu = /* @__PURE__ */ Y({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, d = U(() => a.status ? `status-${a.status}` : "");
    return (p, v) => (s(), o("div", {
      class: le(["item-card", { clickable: t.clickable, compact: t.compact }, d.value]),
      onClick: v[0] || (v[0] = (y) => t.clickable && p.$emit("click"))
    }, [
      e("div", Iu, [
        p.$slots.icon ? (s(), o("span", Eu, [
          ge(p.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Mu, [
          p.$slots.title ? (s(), o("div", zu, [
            ge(p.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          p.$slots.subtitle ? (s(), o("div", Lu, [
            ge(p.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", Du, [
        ge(p.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      p.$slots.actions ? (s(), o("div", Ru, [
        ge(p.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ X(Nu, [["__scopeId", "data-v-cc435e0e"]]), Tu = { class: "loading-state" }, Uu = { class: "loading-message" }, Pu = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, a) => (s(), o("div", Tu, [
      a[0] || (a[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Uu, n(t.message), 1)
    ]));
  }
}), lt = /* @__PURE__ */ X(Pu, [["__scopeId", "data-v-ad8436c9"]]), Bu = { class: "error-state" }, Ou = { class: "error-message" }, Fu = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, a) => (s(), o("div", Bu, [
      a[2] || (a[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Ou, n(t.message), 1),
      t.retry ? (s(), S(te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (d) => r.$emit("retry"))
      }, {
        default: i(() => [...a[1] || (a[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), it = /* @__PURE__ */ X(Fu, [["__scopeId", "data-v-5397be48"]]), Vu = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getWorkflows: p } = De();
    ys();
    const v = _([]), y = _(!1), m = _(null), l = _(""), u = _(!0), b = _(!1), h = _(!1), k = _(!1), C = _(null), L = U(
      () => v.value.filter((J) => J.status === "broken")
    ), $ = U(
      () => v.value.filter((J) => J.status === "new")
    ), f = U(
      () => v.value.filter((J) => J.status === "modified")
    ), R = U(
      () => v.value.filter((J) => J.status === "synced")
    ), O = U(() => {
      if (!l.value.trim()) return v.value;
      const J = l.value.toLowerCase();
      return v.value.filter((P) => P.name.toLowerCase().includes(J));
    }), I = U(
      () => L.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), B = U(
      () => $.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), W = U(
      () => f.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), F = U(
      () => R.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), T = U(
      () => b.value ? F.value : F.value.slice(0, 5)
    );
    async function D(J = !1) {
      y.value = !0, m.value = null;
      try {
        v.value = await p(J);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        y.value = !1;
      }
    }
    r({ loadWorkflows: D });
    function x(J) {
      C.value = J, h.value = !0;
    }
    function z(J) {
      C.value = J, k.value = !0;
    }
    function ee() {
      alert("Bulk resolution not yet implemented");
    }
    function K() {
      d("refresh");
    }
    async function ae() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function me(J) {
      const P = [];
      return J.missing_nodes > 0 && P.push(`${J.missing_nodes} missing node${J.missing_nodes > 1 ? "s" : ""}`), J.missing_models > 0 && P.push(`${J.missing_models} missing model${J.missing_models > 1 ? "s" : ""}`), J.models_with_category_mismatch && J.models_with_category_mismatch > 0 && P.push(`${J.models_with_category_mismatch} model${J.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), J.pending_downloads && J.pending_downloads > 0 && P.push(`${J.pending_downloads} pending download${J.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    function de(J) {
      const P = J.sync_state === "new" ? "New" : J.sync_state === "modified" ? "Modified" : J.sync_state === "synced" ? "Synced" : J.sync_state;
      return J.has_path_sync_issues && J.models_needing_path_sync && J.models_needing_path_sync > 0 ? `${J.models_needing_path_sync} model path${J.models_needing_path_sync > 1 ? "s" : ""} need${J.models_needing_path_sync === 1 ? "s" : ""} sync` : P || "Unknown";
    }
    return ze(D), (J, P) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, { title: "WORKFLOWS" }, {
            actions: i(() => [
              L.value.length > 0 ? (s(), S(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ee
              }, {
                default: i(() => [...P[8] || (P[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g($t, {
            modelValue: l.value,
            "onUpdate:modelValue": P[0] || (P[0] = (E) => l.value = E),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          y.value ? (s(), S(lt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), S(it, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            I.value.length ? (s(), S(Me, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(I.value, (E) => (s(), S(Ne, {
                  key: E.name,
                  status: "broken"
                }, {
                  icon: i(() => [...P[9] || (P[9] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(me(E)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => z(E.name)
                    }, {
                      default: i(() => [...P[10] || (P[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => x(E.name)
                    }, {
                      default: i(() => [...P[11] || (P[11] = [
                        w(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            B.value.length ? (s(), S(Me, {
              key: 1,
              title: "NEW",
              count: B.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(B.value, (E) => (s(), S(Ne, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    w(n(E.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(de(E)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => x(E.name)
                    }, {
                      default: i(() => [...P[12] || (P[12] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            W.value.length ? (s(), S(Me, {
              key: 2,
              title: "MODIFIED",
              count: W.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(W.value, (E) => (s(), S(Ne, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...P[13] || (P[13] = [
                    w("⚡", -1)
                  ])]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(de(E)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => x(E.name)
                    }, {
                      default: i(() => [...P[14] || (P[14] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            F.value.length ? (s(), S(Me, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: P[2] || (P[2] = (E) => u.value = E)
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(T.value, (E) => (s(), S(Ne, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    w(n(E.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(de(E)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => x(E.name)
                    }, {
                      default: i(() => [...P[15] || (P[15] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !b.value && F.value.length > 5 ? (s(), S(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: P[1] || (P[1] = (E) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    w(" View all " + n(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            O.value.length ? c("", !0) : (s(), S(Ke, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && C.value ? (s(), S(Bl, {
        key: 0,
        "workflow-name": C.value,
        onClose: P[3] || (P[3] = (E) => h.value = !1),
        onResolve: P[4] || (P[4] = (E) => z(C.value)),
        onRefresh: P[5] || (P[5] = (E) => d("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      k.value && C.value ? (s(), S(hu, {
        key: 1,
        "workflow-name": C.value,
        onClose: P[6] || (P[6] = (E) => k.value = !1),
        onInstall: K,
        onRefresh: P[7] || (P[7] = (E) => d("refresh")),
        onRestart: ae
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Au = /* @__PURE__ */ X(Vu, [["__scopeId", "data-v-591d06d5"]]), Wu = /* @__PURE__ */ Y({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: le(["summary-bar", t.variant])
    }, [
      ge(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ct = /* @__PURE__ */ X(Wu, [["__scopeId", "data-v-ccb7816e"]]), Gu = {
  key: 0,
  class: "model-details"
}, ju = { class: "detail-section" }, Hu = { class: "detail-row" }, qu = { class: "detail-value mono" }, Ku = { class: "detail-row" }, Yu = { class: "detail-value mono" }, Xu = { class: "detail-row" }, Qu = { class: "detail-value mono" }, Zu = { class: "detail-row" }, Ju = { class: "detail-value" }, em = { class: "detail-row" }, tm = { class: "detail-value" }, sm = { class: "detail-row" }, om = { class: "detail-value" }, am = { class: "detail-section" }, nm = { class: "section-header" }, lm = {
  key: 0,
  class: "locations-list"
}, im = { class: "location-path mono" }, rm = {
  key: 0,
  class: "location-modified"
}, dm = ["onClick"], cm = {
  key: 1,
  class: "empty-state"
}, um = { class: "detail-section" }, mm = { class: "section-header" }, vm = {
  key: 0,
  class: "sources-list"
}, fm = { class: "source-type" }, gm = ["href"], pm = ["disabled", "onClick"], hm = {
  key: 1,
  class: "empty-state"
}, ym = { class: "add-source-form" }, wm = ["disabled"], km = {
  key: 2,
  class: "source-error"
}, bm = {
  key: 3,
  class: "source-success"
}, _m = /* @__PURE__ */ Y({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, { getModelDetails: d, addModelSource: p, removeModelSource: v, openFileLocation: y } = De(), m = _(null), l = _(!0), u = _(null), b = _(""), h = _(!1), k = _(null), C = _(null), L = _(null), $ = _(null);
    let f = null;
    function R(D, x = "success", z = 2e3) {
      f && clearTimeout(f), $.value = { message: D, type: x }, f = setTimeout(() => {
        $.value = null;
      }, z);
    }
    function O(D) {
      if (!D) return "Unknown";
      const x = 1024 * 1024 * 1024, z = 1024 * 1024;
      return D >= x ? `${(D / x).toFixed(1)} GB` : D >= z ? `${(D / z).toFixed(0)} MB` : `${(D / 1024).toFixed(0)} KB`;
    }
    function I(D) {
      navigator.clipboard.writeText(D), R("Copied to clipboard!");
    }
    async function B(D) {
      try {
        await y(D), R("Opening file location...");
      } catch {
        R("Failed to open location", "error");
      }
    }
    async function W() {
      if (!(!b.value.trim() || !m.value)) {
        h.value = !0, C.value = null, L.value = null;
        try {
          await p(m.value.hash, b.value.trim()), L.value = "Source added successfully!", b.value = "", await T();
        } catch (D) {
          C.value = D instanceof Error ? D.message : "Failed to add source";
        } finally {
          h.value = !1;
        }
      }
    }
    async function F(D) {
      if (m.value) {
        k.value = D, C.value = null, L.value = null;
        try {
          await v(m.value.hash, D), R("Source removed"), await T();
        } catch (x) {
          C.value = x instanceof Error ? x.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function T() {
      l.value = !0, u.value = null;
      try {
        m.value = await d(a.identifier);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return ze(T), (D, x) => {
      var z;
      return s(), o(G, null, [
        g(at, {
          title: `Model Details: ${((z = m.value) == null ? void 0 : z.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: u.value,
          onClose: x[5] || (x[5] = (ee) => D.$emit("close"))
        }, {
          body: i(() => {
            var ee, K, ae, me;
            return [
              m.value ? (s(), o("div", Gu, [
                e("section", ju, [
                  e("div", Hu, [
                    x[6] || (x[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", qu, n(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[0] || (x[0] = (de) => I(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Ku, [
                    x[7] || (x[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Yu, n(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[1] || (x[1] = (de) => I(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Xu, [
                    x[8] || (x[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Qu, n(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[2] || (x[2] = (de) => I(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Zu, [
                    x[9] || (x[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Ju, n(O(m.value.size)), 1)
                  ]),
                  e("div", em, [
                    x[10] || (x[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", tm, n(m.value.category), 1)
                  ]),
                  e("div", sm, [
                    x[11] || (x[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", om, n(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", am, [
                  e("h4", nm, "Locations (" + n(((ee = m.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (K = m.value.locations) != null && K.length ? (s(), o("div", lm, [
                    (s(!0), o(G, null, se(m.value.locations, (de, J) => (s(), o("div", {
                      key: J,
                      class: "location-item"
                    }, [
                      e("span", im, n(de.path), 1),
                      de.modified ? (s(), o("span", rm, "Modified: " + n(de.modified), 1)) : c("", !0),
                      de.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => B(de.path)
                      }, " Open File Location ", 8, dm)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", cm, "No locations found"))
                ]),
                e("section", um, [
                  e("h4", mm, "Download Sources (" + n(((ae = m.value.sources) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (me = m.value.sources) != null && me.length ? (s(), o("div", vm, [
                    (s(!0), o(G, null, se(m.value.sources, (de, J) => (s(), o("div", {
                      key: J,
                      class: "source-item"
                    }, [
                      e("span", fm, n(de.type) + ":", 1),
                      e("a", {
                        href: de.url,
                        target: "_blank",
                        class: "source-url"
                      }, n(de.url), 9, gm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === de.url,
                        onClick: (P) => F(de.url)
                      }, n(k.value === de.url ? "..." : "×"), 9, pm)
                    ]))), 128))
                  ])) : (s(), o("div", hm, " No download sources configured ")),
                  e("div", ym, [
                    Be(e("input", {
                      "onUpdate:modelValue": x[3] || (x[3] = (de) => b.value = de),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Nt, b.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !b.value.trim() || h.value,
                      onClick: W
                    }, n(h.value ? "Adding..." : "Add Source"), 9, wm)
                  ]),
                  C.value ? (s(), o("p", km, n(C.value), 1)) : c("", !0),
                  L.value ? (s(), o("p", bm, n(L.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: x[4] || (x[4] = (ee) => D.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), S(Te, { to: "body" }, [
          $.value ? (s(), o("div", {
            key: 0,
            class: le(["toast", $.value.type])
          }, n($.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), _s = /* @__PURE__ */ X(_m, [["__scopeId", "data-v-f15cbb56"]]), $m = /* @__PURE__ */ Y({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const a = r, { getEnvironmentModels: d, getStatus: p } = De(), v = _([]), y = _([]), m = _("production"), l = _(!1), u = _(null), b = _(""), h = _(!1), k = _(null);
    function C() {
      h.value = !1, a("navigate", "model-index");
    }
    const L = U(
      () => v.value.reduce((T, D) => T + (D.size || 0), 0)
    ), $ = U(() => {
      if (!b.value.trim()) return v.value;
      const T = b.value.toLowerCase();
      return v.value.filter((D) => D.filename.toLowerCase().includes(T));
    }), f = U(() => {
      if (!b.value.trim()) return y.value;
      const T = b.value.toLowerCase();
      return y.value.filter((D) => D.filename.toLowerCase().includes(T));
    }), R = U(() => {
      const T = {};
      for (const x of $.value) {
        const z = x.type || "other";
        T[z] || (T[z] = []), T[z].push(x);
      }
      const D = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(T).sort(([x], [z]) => {
        const ee = D.indexOf(x), K = D.indexOf(z);
        return ee >= 0 && K >= 0 ? ee - K : ee >= 0 ? -1 : K >= 0 ? 1 : x.localeCompare(z);
      }).map(([x, z]) => ({ type: x, models: z }));
    });
    function O(T) {
      if (!T) return "Unknown";
      const D = T / (1024 * 1024);
      return D >= 1024 ? `${(D / 1024).toFixed(1)} GB` : `${D.toFixed(0)} MB`;
    }
    function I(T) {
      k.value = T.hash || T.filename;
    }
    function B(T) {
      a("navigate", "model-index");
    }
    function W(T) {
      alert(`Download functionality not yet implemented for ${T}`);
    }
    async function F() {
      l.value = !0, u.value = null;
      try {
        const T = await d();
        v.value = T, y.value = [];
        const D = await p();
        m.value = D.environment || "production";
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return ze(F), (T, D) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (x) => h.value = !0)
          })
        ]),
        search: i(() => [
          g($t, {
            modelValue: b.value,
            "onUpdate:modelValue": D[1] || (D[1] = (x) => b.value = x),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), S(lt, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (s(), S(it, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            v.value.length ? (s(), S(Ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(v.value.length) + " models • " + n(O(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(G, null, se(R.value, (x) => (s(), S(Me, {
              key: x.type,
              title: x.type.toUpperCase(),
              count: x.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(x.models, (z) => (s(), S(Ne, {
                  key: z.hash || z.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...D[4] || (D[4] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(n(z.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(O(z.size)), 1)
                  ]),
                  details: i(() => [
                    g(xe, {
                      label: "Used by:",
                      value: (z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(xe, {
                      label: "Path:",
                      value: z.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => I(z)
                    }, {
                      default: i(() => [...D[5] || (D[5] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            f.value.length ? (s(), S(Me, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(f.value, (x) => (s(), S(Ne, {
                  key: x.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...D[6] || (D[6] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(n(x.filename), 1)
                  ]),
                  subtitle: i(() => [...D[7] || (D[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var z;
                    return [
                      g(xe, {
                        label: "Required by:",
                        value: ((z = x.workflow_names) == null ? void 0 : z.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => W(x.filename)
                    }, {
                      default: i(() => [...D[8] || (D[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => B(x.filename)
                    }, {
                      default: i(() => [...D[9] || (D[9] = [
                        w(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !$.value.length && !f.value.length ? (s(), S(Ke, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(nt, {
        show: h.value,
        title: "About Environment Models",
        onClose: D[2] || (D[2] = (x) => h.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            D[10] || (D[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + n(m.value) + '"', 1),
            D[11] || (D[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          g(te, {
            variant: "primary",
            onClick: C
          }, {
            default: i(() => [...D[12] || (D[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), S(_s, {
        key: 0,
        identifier: k.value,
        onClose: D[3] || (D[3] = (x) => k.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Cm = /* @__PURE__ */ X($m, [["__scopeId", "data-v-cb4f12b3"]]), xm = {
  key: 0,
  class: "indexing-progress"
}, Sm = { class: "progress-info" }, Im = { class: "progress-label" }, Em = { class: "progress-count" }, Mm = { class: "progress-bar" }, zm = { class: "modal-content" }, Lm = { class: "modal-header" }, Dm = { class: "modal-body" }, Rm = { class: "input-group" }, Nm = { class: "current-path" }, Tm = { class: "input-group" }, Um = { class: "modal-footer" }, Pm = { class: "modal-content" }, Bm = { class: "modal-header" }, Om = { class: "modal-body" }, Fm = { class: "input-group" }, Vm = { class: "input-group" }, Am = { class: "modal-footer" }, Wm = /* @__PURE__ */ Y({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const {
      getWorkspaceModels: a,
      scanWorkspaceModels: d,
      getModelsDirectory: p,
      setModelsDirectory: v
    } = De(), { addToQueue: y } = Bt(), m = r, l = _([]), u = _(!1), b = _(!1), h = _(null), k = _(""), C = _(!1), L = _(null), $ = _(!1), f = _(null), R = _(""), O = _(!1), I = _(!1), B = _(""), W = _(""), F = _(null), T = U(
      () => l.value.reduce((P, E) => P + (E.size || 0), 0)
    ), D = U(() => {
      if (!k.value.trim()) return l.value;
      const P = k.value.toLowerCase();
      return l.value.filter((E) => {
        const ne = E, q = E.sha256 || ne.sha256_hash || "";
        return E.filename.toLowerCase().includes(P) || q.toLowerCase().includes(P);
      });
    }), x = U(() => {
      const P = {};
      for (const ne of D.value) {
        const q = ne.type || "other";
        P[q] || (P[q] = []), P[q].push(ne);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([ne], [q]) => {
        const Ie = E.indexOf(ne), $e = E.indexOf(q);
        return Ie >= 0 && $e >= 0 ? Ie - $e : Ie >= 0 ? -1 : $e >= 0 ? 1 : ne.localeCompare(q);
      }).map(([ne, q]) => ({ type: ne, models: q }));
    });
    function z(P) {
      if (!P) return "Unknown";
      const E = 1024 * 1024 * 1024, ne = 1024 * 1024;
      return P >= E ? `${(P / E).toFixed(1)} GB` : P >= ne ? `${(P / ne).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function ee(P) {
      L.value = P.hash || P.filename;
    }
    async function K() {
      b.value = !0, h.value = null;
      try {
        const P = await d();
        await de(), P.changes > 0 && console.log(`Scan complete: ${P.changes} changes detected`);
      } catch (P) {
        h.value = P instanceof Error ? P.message : "Failed to scan models";
      } finally {
        b.value = !1;
      }
    }
    async function ae() {
      if (R.value.trim()) {
        O.value = !0, h.value = null;
        try {
          const P = await v(R.value.trim());
          f.value = P.path, $.value = !1, R.value = "", await de(), console.log(`Directory changed: ${P.models_indexed} models indexed`), m("refresh");
        } catch (P) {
          h.value = P instanceof Error ? P.message : "Failed to change directory";
        } finally {
          O.value = !1;
        }
      }
    }
    function me() {
      if (!B.value.trim() || !W.value.trim()) return;
      const P = W.value.split("/").pop() || "model.safetensors";
      y([{
        workflow: "__manual__",
        filename: P,
        url: B.value.trim(),
        targetPath: W.value.trim()
      }]), B.value = "", W.value = "", I.value = !1;
    }
    async function de() {
      u.value = !0, h.value = null;
      try {
        l.value = await a();
      } catch (P) {
        h.value = P instanceof Error ? P.message : "Failed to load workspace models";
      } finally {
        u.value = !1;
      }
    }
    async function J() {
      try {
        const P = await p();
        f.value = P.path;
      } catch {
      }
    }
    return ze(() => {
      de(), J();
    }), (P, E) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: E[2] || (E[2] = (ne) => C.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: K
              }, {
                default: i(() => [
                  w(n(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: E[0] || (E[0] = (ne) => $.value = !0)
              }, {
                default: i(() => [...E[15] || (E[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: E[1] || (E[1] = (ne) => I.value = !0)
              }, {
                default: i(() => [...E[16] || (E[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  w(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          F.value ? (s(), o("div", xm, [
            e("div", Sm, [
              e("span", Im, n(F.value.message), 1),
              e("span", Em, n(F.value.current) + "/" + n(F.value.total), 1)
            ]),
            e("div", Mm, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          g($t, {
            modelValue: k.value,
            "onUpdate:modelValue": E[3] || (E[3] = (ne) => k.value = ne),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value || F.value ? (s(), S(lt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (s(), S(it, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            l.value.length ? (s(), S(Ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(l.value.length) + " models • " + n(z(T.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(G, null, se(x.value, (ne) => (s(), S(Me, {
              key: ne.type,
              title: ne.type.toUpperCase(),
              count: ne.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(ne.models, (q) => (s(), S(Ne, {
                  key: q.sha256 || q.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...E[17] || (E[17] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(n(q.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(z(q.size)), 1)
                  ]),
                  details: i(() => [
                    g(xe, {
                      label: "Hash:",
                      value: q.hash ? q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ie) => ee(q)
                    }, {
                      default: i(() => [...E[18] || (E[18] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            D.value.length ? c("", !0) : (s(), S(Ke, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(nt, {
        show: C.value,
        title: "About Workspace Model Index",
        onClose: E[4] || (E[4] = (ne) => C.value = !1)
      }, {
        content: i(() => [...E[19] || (E[19] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      L.value ? (s(), S(_s, {
        key: 0,
        identifier: L.value,
        onClose: E[5] || (E[5] = (ne) => L.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (s(), S(Te, { to: "body" }, [
        $.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[9] || (E[9] = Ee((ne) => $.value = !1, ["self"]))
        }, [
          e("div", zm, [
            e("div", Lm, [
              E[20] || (E[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[6] || (E[6] = (ne) => $.value = !1)
              }, "✕")
            ]),
            e("div", Dm, [
              e("div", Rm, [
                E[21] || (E[21] = e("label", null, "Current Directory", -1)),
                e("code", Nm, n(f.value || "Not set"), 1)
              ]),
              e("div", Tm, [
                E[22] || (E[22] = e("label", null, "New Directory Path", -1)),
                g(He, {
                  modelValue: R.value,
                  "onUpdate:modelValue": E[7] || (E[7] = (ne) => R.value = ne),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              E[23] || (E[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Um, [
              g(re, {
                variant: "secondary",
                onClick: E[8] || (E[8] = (ne) => $.value = !1)
              }, {
                default: i(() => [...E[24] || (E[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(re, {
                variant: "primary",
                disabled: !R.value.trim() || O.value,
                loading: O.value,
                onClick: ae
              }, {
                default: i(() => [
                  w(n(O.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (s(), S(Te, { to: "body" }, [
        I.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[14] || (E[14] = Ee((ne) => I.value = !1, ["self"]))
        }, [
          e("div", Pm, [
            e("div", Bm, [
              E[25] || (E[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[10] || (E[10] = (ne) => I.value = !1)
              }, "✕")
            ]),
            e("div", Om, [
              e("div", Fm, [
                E[26] || (E[26] = e("label", null, "Download URL", -1)),
                g(He, {
                  modelValue: B.value,
                  "onUpdate:modelValue": E[11] || (E[11] = (ne) => B.value = ne),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Vm, [
                E[27] || (E[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(He, {
                  modelValue: W.value,
                  "onUpdate:modelValue": E[12] || (E[12] = (ne) => W.value = ne),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              E[28] || (E[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Am, [
              g(re, {
                variant: "secondary",
                onClick: E[13] || (E[13] = (ne) => I.value = !1)
              }, {
                default: i(() => [...E[29] || (E[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(re, {
                variant: "primary",
                disabled: !B.value.trim() || !W.value.trim(),
                onClick: me
              }, {
                default: i(() => [...E[30] || (E[30] = [
                  w(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), Gm = /* @__PURE__ */ X(Wm, [["__scopeId", "data-v-73b78d84"]]), jm = { class: "node-details" }, Hm = { class: "status-row" }, qm = {
  key: 0,
  class: "detail-row"
}, Km = { class: "value" }, Ym = { class: "detail-row" }, Xm = { class: "value" }, Qm = {
  key: 1,
  class: "detail-row"
}, Zm = { class: "value mono" }, Jm = {
  key: 2,
  class: "detail-row"
}, ev = ["href"], tv = {
  key: 3,
  class: "detail-row"
}, sv = { class: "value mono small" }, ov = { class: "detail-row" }, av = {
  key: 0,
  class: "value"
}, nv = {
  key: 1,
  class: "workflow-list"
}, lv = /* @__PURE__ */ Y({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, d = r, p = U(() => a.node.installed ? a.node.tracked ? a.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = U(() => a.node.installed ? a.node.tracked ? a.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), y = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[a.node.source] || a.node.source);
    return (m, l) => (s(), S(at, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (u) => d("close"))
    }, {
      body: i(() => [
        e("div", jm, [
          e("div", Hm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", p.value])
            }, n(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", qm, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Km, n(t.node.source === "development" ? "" : "v") + n(t.node.version), 1)
          ])) : c("", !0),
          e("div", Ym, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Xm, n(y.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Qm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Zm, n(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", Jm, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              w(n(t.node.repository) + " ", 1),
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
            ], 8, ev)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", tv, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", sv, n(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", ov, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", av, " Not used in any workflows ")) : (s(), o("div", nv, [
              (s(!0), o(G, null, se(t.node.used_in_workflows, (u) => (s(), o("span", {
                key: u,
                class: "workflow-tag"
              }, n(u), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (u) => d("close"))
        }, {
          default: i(() => [...l[11] || (l[11] = [
            w(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), iv = /* @__PURE__ */ X(lv, [["__scopeId", "data-v-b342f626"]]), rv = { key: 0 }, dv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, cv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, uv = /* @__PURE__ */ Y({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: r }) {
    const a = r, { getNodes: d, trackNodeAsDev: p, installNode: v, uninstallNode: y } = De(), m = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = _(!1), u = _(null), b = _(""), h = _(!1), k = _(null), C = U(() => {
      if (!b.value.trim()) return m.value.nodes;
      const x = b.value.toLowerCase();
      return m.value.nodes.filter(
        (z) => {
          var ee, K;
          return z.name.toLowerCase().includes(x) || ((ee = z.description) == null ? void 0 : ee.toLowerCase().includes(x)) || ((K = z.repository) == null ? void 0 : K.toLowerCase().includes(x));
        }
      );
    }), L = U(
      () => C.value.filter((x) => x.installed && x.tracked)
    ), $ = U(
      () => C.value.filter((x) => !x.installed && x.tracked)
    ), f = U(
      () => C.value.filter((x) => x.installed && !x.tracked)
    );
    function R(x) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[x] || x;
    }
    function O(x) {
      return !x.used_in_workflows || x.used_in_workflows.length === 0 ? "Not used in any workflows" : x.used_in_workflows.length === 1 ? x.used_in_workflows[0] : `${x.used_in_workflows.length} workflows`;
    }
    function I(x) {
      k.value = x;
    }
    function B() {
      a("open-node-manager");
    }
    async function W(x) {
      if (confirm(`Track "${x}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const z = await p(x);
          z.status === "success" ? (alert(`Node "${x}" is now tracked as development!`), await D()) : alert(`Failed to track node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error tracking node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function F(x) {
      if (confirm(`Remove untracked node "${x}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const z = await y(x);
          z.status === "success" ? (alert(`Node "${x}" removed!`), await D()) : alert(`Failed to remove node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error removing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function T(x) {
      if (confirm(`Install node "${x}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const z = await v(x);
          z.status === "success" ? (alert(`Node "${x}" installed successfully!`), await D()) : alert(`Failed to install node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error installing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function D() {
      l.value = !0, u.value = null;
      try {
        m.value = await d();
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return ze(D), (x, z) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (ee) => h.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: i(() => [...z[5] || (z[5] = [
                  w(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g($t, {
            modelValue: b.value,
            "onUpdate:modelValue": z[1] || (z[1] = (ee) => b.value = ee),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), S(lt, {
            key: 0,
            message: "Loading nodes..."
          })) : u.value ? (s(), S(it, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            m.value.total_count ? (s(), S(Ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(n(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (s(), o(G, { key: 0 }, [
                  w(" • " + n(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (s(), o(G, { key: 1 }, [
                  w(" • " + n(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            f.value.length ? (s(), S(Me, {
              key: 1,
              title: "UNTRACKED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(f.value, (ee) => (s(), S(Ne, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: i(() => [...z[6] || (z[6] = [
                    w("?", -1)
                  ])]),
                  title: i(() => [
                    w(n(ee.name), 1)
                  ]),
                  subtitle: i(() => [...z[7] || (z[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(xe, {
                      label: "Used by:",
                      value: O(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => I(ee)
                    }, {
                      default: i(() => [...z[8] || (z[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => W(ee.name)
                    }, {
                      default: i(() => [...z[9] || (z[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (K) => F(ee.name)
                    }, {
                      default: i(() => [...z[10] || (z[10] = [
                        w(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            L.value.length ? (s(), S(Me, {
              key: 2,
              title: "INSTALLED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(L.value, (ee) => (s(), S(Ne, {
                  key: ee.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    w(n(ee.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    w(n(ee.name), 1)
                  ]),
                  subtitle: i(() => [
                    ee.version ? (s(), o("span", rv, n(ee.source === "development" ? "" : "v") + n(ee.version), 1)) : (s(), o("span", dv, "version unknown")),
                    e("span", cv, " • " + n(R(ee.source)), 1)
                  ]),
                  details: i(() => [
                    g(xe, {
                      label: "Used by:",
                      value: O(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => I(ee)
                    }, {
                      default: i(() => [...z[11] || (z[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: B
                    }, {
                      default: i(() => [...z[12] || (z[12] = [
                        w(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? (s(), S(Me, {
              key: 3,
              title: "MISSING",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, se($.value, (ee) => (s(), S(Ne, {
                  key: ee.name,
                  status: "missing"
                }, {
                  icon: i(() => [...z[13] || (z[13] = [
                    w("!", -1)
                  ])]),
                  title: i(() => [
                    w(n(ee.name), 1)
                  ]),
                  subtitle: i(() => [...z[14] || (z[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(xe, {
                      label: "Required by:",
                      value: O(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => I(ee)
                    }, {
                      default: i(() => [...z[15] || (z[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => T(ee.name)
                    }, {
                      default: i(() => [...z[16] || (z[16] = [
                        w(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !L.value.length && !$.value.length && !f.value.length ? (s(), S(Ke, {
              key: 4,
              icon: "📭",
              message: b.value ? `No nodes match '${b.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(nt, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: z[3] || (z[3] = (ee) => h.value = !1)
      }, {
        content: i(() => [...z[17] || (z[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            w(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            w(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            w(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: i(() => [
          g(te, {
            variant: "primary",
            onClick: z[2] || (z[2] = (ee) => h.value = !1)
          }, {
            default: i(() => [...z[18] || (z[18] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), S(iv, {
        key: 0,
        node: k.value,
        onClose: z[4] || (z[4] = (ee) => k.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), mv = /* @__PURE__ */ X(uv, [["__scopeId", "data-v-4ac1465a"]]), vv = { class: "remote-url-display" }, fv = ["title"], gv = ["title"], pv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, hv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, yv = /* @__PURE__ */ Y({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, a = _(!1), d = U(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const v = r.url.slice(0, Math.floor(r.maxLength * 0.6)), y = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${v}...${y}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(r.url), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, y) => (s(), o("div", vv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, n(d.value), 9, fv),
      e("button", {
        class: le(["copy-btn", { copied: a.value }]),
        onClick: p,
        title: a.value ? "Copied!" : "Copy URL"
      }, [
        a.value ? (s(), o("svg", hv, [...y[1] || (y[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", pv, [...y[0] || (y[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, gv)
    ]));
  }
}), cs = /* @__PURE__ */ X(yv, [["__scopeId", "data-v-7768a58d"]]), wv = { class: "remote-title" }, kv = {
  key: 0,
  class: "default-badge"
}, bv = {
  key: 1,
  class: "sync-badge"
}, _v = {
  key: 0,
  class: "ahead"
}, $v = {
  key: 1,
  class: "behind"
}, Cv = {
  key: 0,
  class: "tracking-info"
}, xv = /* @__PURE__ */ Y({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const a = t, d = U(() => a.fetchingRemote === a.remote.name), p = U(() => a.remote.is_default), v = U(() => !!a.trackingBranch);
    function y(m) {
      const l = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - l.getTime(), h = Math.floor(b / 6e4);
      if (h < 1) return "Just now";
      if (h < 60) return `${h}m ago`;
      const k = Math.floor(h / 60);
      if (k < 24) return `${k}h ago`;
      const C = Math.floor(k / 24);
      return C < 7 ? `${C}d ago` : l.toLocaleDateString();
    }
    return (m, l) => (s(), S(Ne, {
      status: p.value ? "synced" : void 0
    }, {
      icon: i(() => [
        w(n(p.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", wv, [
          e("span", null, n(t.remote.name), 1),
          p.value ? (s(), o("span", kv, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", bv, [
            t.syncStatus.ahead > 0 ? (s(), o("span", _v, "↑" + n(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (s(), o("span", $v, "↓" + n(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        v.value ? (s(), o("span", Cv, " Tracking: " + n(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var u;
        return [
          g(xe, { label: "Fetch:" }, {
            default: i(() => [
              g(cs, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (s(), S(xe, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              g(cs, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (s(), S(xe, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, n(y(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: i(() => [
        g(te, {
          variant: "primary",
          size: "xs",
          loading: d.value,
          onClick: l[0] || (l[0] = (u) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...l[3] || (l[3] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        g(te, {
          variant: "secondary",
          size: "xs",
          onClick: l[1] || (l[1] = (u) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...l[4] || (l[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        p.value ? c("", !0) : (s(), S(te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: l[2] || (l[2] = (u) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...l[5] || (l[5] = [
            w(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Sv = /* @__PURE__ */ X(xv, [["__scopeId", "data-v-17362e45"]]), Iv = ["for"], Ev = {
  key: 0,
  class: "base-form-field-required"
}, Mv = { class: "base-form-field-input" }, zv = {
  key: 1,
  class: "base-form-field-error"
}, Lv = {
  key: 2,
  class: "base-form-field-hint"
}, Dv = /* @__PURE__ */ Y({
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
    const r = t, a = U(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (d, p) => (s(), o("div", {
      class: le(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: a.value,
        class: "base-form-field-label"
      }, [
        w(n(t.label) + " ", 1),
        t.required ? (s(), o("span", Ev, "*")) : c("", !0)
      ], 8, Iv)) : c("", !0),
      e("div", Mv, [
        ge(d.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", zv, n(t.error), 1)) : t.hint ? (s(), o("span", Lv, n(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ X(Dv, [["__scopeId", "data-v-9a1cf296"]]), Rv = { class: "remote-form" }, Nv = { class: "form-header" }, Tv = { class: "form-body" }, Uv = {
  key: 0,
  class: "form-error"
}, Pv = { class: "form-actions" }, Bv = /* @__PURE__ */ Y({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const a = t, d = r, p = _({
      name: a.remoteName,
      fetchUrl: a.fetchUrl,
      pushUrl: a.pushUrl
    }), v = _(!1), y = _(null);
    Ht(() => [a.remoteName, a.fetchUrl, a.pushUrl], () => {
      p.value = {
        name: a.remoteName,
        fetchUrl: a.fetchUrl,
        pushUrl: a.pushUrl
      };
    });
    const m = U(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!m.value || v.value)) {
        y.value = null, v.value = !0;
        try {
          d("submit", p.value);
        } catch (u) {
          y.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (u, b) => (s(), o("div", Rv, [
      e("div", Nv, [
        g(Ae, null, {
          default: i(() => [
            w(n(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Tv, [
        g(Qt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            g(He, {
              modelValue: p.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (h) => p.value.name = h),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g(Qt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            g(He, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (h) => p.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g(Qt, { label: "Push URL (optional)" }, {
          default: i(() => [
            g(He, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (h) => p.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        y.value ? (s(), o("div", Uv, n(y.value), 1)) : c("", !0)
      ]),
      e("div", Pv, [
        g(te, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: v.value,
          onClick: l
        }, {
          default: i(() => [
            w(n(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        g(te, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (h) => u.$emit("cancel"))
        }, {
          default: i(() => [...b[4] || (b[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ov = /* @__PURE__ */ X(Bv, [["__scopeId", "data-v-56021b18"]]), Fv = { key: 0 }, Vv = /* @__PURE__ */ Y({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: a,
      removeRemote: d,
      updateRemoteUrl: p,
      fetchRemote: v,
      getRemoteSyncStatus: y
    } = De(), m = _([]), l = _(null), u = _({}), b = _(!1), h = _(null), k = _(""), C = _(!1), L = _(null), $ = _(!1), f = _("add"), R = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), O = U(() => {
      if (!k.value.trim()) return m.value;
      const K = k.value.toLowerCase();
      return m.value.filter(
        (ae) => ae.name.toLowerCase().includes(K) || ae.fetch_url.toLowerCase().includes(K) || ae.push_url.toLowerCase().includes(K)
      );
    });
    function I(K) {
      var ae;
      return ((ae = l.value) == null ? void 0 : ae.remote) === K;
    }
    async function B() {
      b.value = !0, h.value = null;
      try {
        const K = await r();
        m.value = K.remotes, l.value = K.current_branch_tracking || null, await Promise.all(
          K.remotes.map(async (ae) => {
            const me = await y(ae.name);
            me && (u.value[ae.name] = me);
          })
        );
      } catch (K) {
        h.value = K instanceof Error ? K.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function W() {
      f.value = "add", R.value = { name: "", fetchUrl: "", pushUrl: "" }, $.value = !0;
    }
    function F(K) {
      const ae = m.value.find((me) => me.name === K);
      ae && (f.value = "edit", R.value = {
        name: ae.name,
        fetchUrl: ae.fetch_url,
        pushUrl: ae.push_url
      }, $.value = !0);
    }
    async function T(K) {
      try {
        f.value === "add" ? await a(K.name, K.fetchUrl) : await p(K.name, K.fetchUrl, K.pushUrl || void 0), $.value = !1, await B();
      } catch (ae) {
        h.value = ae instanceof Error ? ae.message : "Operation failed";
      }
    }
    function D() {
      $.value = !1, R.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function x(K) {
      L.value = K;
      try {
        await v(K);
        const ae = await y(K);
        ae && (u.value[K] = ae);
      } catch (ae) {
        h.value = ae instanceof Error ? ae.message : "Fetch failed";
      } finally {
        L.value = null;
      }
    }
    async function z(K) {
      if (confirm(`Remove remote "${K}"?`))
        try {
          await d(K), await B();
        } catch (ae) {
          h.value = ae instanceof Error ? ae.message : "Failed to remove remote";
        }
    }
    function ee() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ze(B), (K, ae) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ae[0] || (ae[0] = (me) => C.value = !0)
          }, {
            actions: i(() => [
              $.value ? c("", !0) : (s(), S(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: i(() => [...ae[3] || (ae[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          $.value ? c("", !0) : (s(), S($t, {
            key: 0,
            modelValue: k.value,
            "onUpdate:modelValue": ae[1] || (ae[1] = (me) => k.value = me),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          b.value ? (s(), S(lt, {
            key: 0,
            message: "Loading remotes..."
          })) : h.value ? (s(), S(it, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            $.value ? (s(), S(Ov, {
              key: 0,
              mode: f.value,
              "remote-name": R.value.name,
              "fetch-url": R.value.fetchUrl,
              "push-url": R.value.pushUrl,
              onSubmit: T,
              onCancel: D
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !$.value ? (s(), S(Ct, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(m.value.length) + " remote" + n(m.value.length !== 1 ? "s" : "") + " ", 1),
                l.value ? (s(), o("span", Fv, " • Tracking: " + n(l.value.remote) + "/" + n(l.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            O.value.length && !$.value ? (s(), S(Me, {
              key: 2,
              title: "REMOTES",
              count: O.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(O.value, (me) => {
                  var de;
                  return s(), S(Sv, {
                    key: me.name,
                    remote: me,
                    "sync-status": u.value[me.name],
                    "tracking-branch": I(me.name) ? (de = l.value) == null ? void 0 : de.branch : void 0,
                    "fetching-remote": L.value,
                    onFetch: x,
                    onEdit: F,
                    onRemove: z
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !O.value.length && !$.value ? (s(), S(Ke, {
              key: 3,
              icon: "🌐",
              message: k.value ? `No remotes match '${k.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  onClick: W
                }, {
                  default: i(() => [...ae[4] || (ae[4] = [
                    w(" Add Your First Remote ", -1)
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
      g(nt, {
        show: C.value,
        title: "About Git Remotes",
        onClose: ae[2] || (ae[2] = (me) => C.value = !1)
      }, {
        content: i(() => [...ae[5] || (ae[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            w(" The "),
            e("strong", null, '"origin"'),
            w(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          g(te, {
            variant: "link",
            onClick: ee
          }, {
            default: i(() => [...ae[6] || (ae[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Av = /* @__PURE__ */ X(Vv, [["__scopeId", "data-v-a75719bb"]]), Wv = { class: "setting-info" }, Gv = { class: "setting-label" }, jv = {
  key: 0,
  class: "required-marker"
}, Hv = {
  key: 0,
  class: "setting-description"
}, qv = { class: "setting-control" }, Kv = /* @__PURE__ */ Y({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: le(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Wv, [
        e("div", Gv, [
          w(n(t.label) + " ", 1),
          t.required ? (s(), o("span", jv, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", Hv, n(t.description), 1)) : c("", !0)
      ]),
      e("div", qv, [
        ge(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ot = /* @__PURE__ */ X(Kv, [["__scopeId", "data-v-cb5d236c"]]), Yv = { class: "toggle" }, Xv = ["checked", "disabled"], Qv = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", Yv, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked)),
        class: "toggle-input"
      }, null, 40, Xv),
      a[1] || (a[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ht = /* @__PURE__ */ X(Qv, [["__scopeId", "data-v-71c0f550"]]), Zv = { class: "settings-section" }, Jv = { class: "path-setting" }, ef = { class: "path-value" }, tf = { class: "path-setting" }, sf = { class: "path-value" }, of = { class: "settings-section" }, af = { class: "settings-section" }, nf = { class: "settings-section" }, lf = /* @__PURE__ */ Y({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: a } = De(), d = _(!1), p = _(null), v = _(null), y = _(null), m = _(null), l = _(""), u = _(""), b = _(!0), h = _(!0), k = _(!1), C = U(() => m.value ? l.value !== (m.value.civitai_api_key || "") : !1);
    async function L() {
      d.value = !0, p.value = null;
      try {
        y.value = await r(), m.value = { ...y.value }, l.value = y.value.civitai_api_key || "", u.value = y.value.huggingface_token || "", b.value = y.value.auto_sync_models, h.value = y.value.confirm_destructive;
        const O = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = O === "true";
      } catch (O) {
        p.value = O instanceof Error ? O.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      var O;
      v.value = null;
      try {
        const I = {};
        l.value !== (((O = m.value) == null ? void 0 : O.civitai_api_key) || "") && (I.civitai_api_key = l.value || null), await a(I), await L(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (I) {
        v.value = {
          type: "error",
          message: I instanceof Error ? I.message : "Failed to save settings"
        };
      }
    }
    function f() {
      m.value && (l.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, h.value = m.value.confirm_destructive, v.value = null);
    }
    function R(O) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(O)), console.log("[ComfyGit] Auto-refresh setting saved:", O);
    }
    return ze(L), (O, I) => (s(), S(Oe, null, {
      header: i(() => [
        g(Fe, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            g(te, {
              variant: "primary",
              size: "sm",
              disabled: !C.value,
              onClick: $
            }, {
              default: i(() => [...I[5] || (I[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            C.value ? (s(), S(te, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: f
            }, {
              default: i(() => [...I[6] || (I[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), S(lt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (s(), S(it, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: L
        }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
          g(Me, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var B, W;
              return [
                e("div", Zv, [
                  e("div", Jv, [
                    I[7] || (I[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    I[8] || (I[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", ef, n(((B = y.value) == null ? void 0 : B.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", tf, [
                    I[9] || (I[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    I[10] || (I[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", sf, n(((W = y.value) == null ? void 0 : W.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(Me, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", of, [
                g(ot, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    g(Gt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": I[0] || (I[0] = (B) => l.value = B),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(ot, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(Gt, {
                      modelValue: u.value,
                      "onUpdate:modelValue": I[1] || (I[1] = (B) => u.value = B),
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
          g(Me, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", af, [
                g(ot, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    g(ht, {
                      modelValue: k.value,
                      "onUpdate:modelValue": [
                        I[2] || (I[2] = (B) => k.value = B),
                        R
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g(Me, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", nf, [
                g(ot, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(ht, {
                      modelValue: b.value,
                      "onUpdate:modelValue": I[3] || (I[3] = (B) => b.value = B),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(ot, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(ht, {
                      modelValue: h.value,
                      "onUpdate:modelValue": I[4] || (I[4] = (B) => h.value = B),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), S(Ct, {
            key: 0,
            variant: (v.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: qe({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, n(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), rf = /* @__PURE__ */ X(lf, [["__scopeId", "data-v-7861bd35"]]), df = /* @__PURE__ */ Y({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = De(), a = _([]), d = _(!1), p = _(null), v = _(!1), y = _(null), m = U(() => a.value.length === 0 ? [] : a.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function l() {
      d.value = !0, p.value = null;
      try {
        a.value = await r(void 0, 500);
      } catch (u) {
        p.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        d.value = !1, setTimeout(() => {
          var u;
          (u = y.value) != null && u.parentElement && (y.value.parentElement.scrollTop = y.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ze(l), (u, b) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (h) => v.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: d.value
              }, {
                default: i(() => [
                  w(n(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          d.value ? (s(), S(lt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (s(), S(it, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            a.value.length === 0 ? (s(), S(Ke, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(G, null, se(m.value, (h, k) => (s(), o("div", {
                key: k,
                class: le(`log-line log-level-${h.level.toLowerCase()}`)
              }, n(h.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(nt, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (h) => v.value = !1)
      }, {
        content: i(() => [...b[3] || (b[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            w(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            w(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            w(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            w(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: i(() => [
          g(te, {
            variant: "primary",
            onClick: b[1] || (b[1] = (h) => v.value = !1)
          }, {
            default: i(() => [...b[4] || (b[4] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), cf = /* @__PURE__ */ X(df, [["__scopeId", "data-v-39f6a756"]]), uf = /* @__PURE__ */ Y({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: a } = De(), d = _([]), p = _(!1), v = _(null), y = _(!1), m = _("production"), l = _(null), u = U(() => d.value.length === 0 ? [] : d.value.map((h) => ({
      text: `${h.timestamp} - ${h.name} - ${h.level} - ${h.func}:${h.line} - ${h.message}`,
      level: h.level
    })));
    async function b() {
      p.value = !0, v.value = null;
      try {
        d.value = await r(void 0, 500);
        try {
          const h = await a();
          m.value = h.environment || "production";
        } catch {
        }
      } catch (h) {
        v.value = h instanceof Error ? h.message : "Failed to load environment logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var h;
          (h = l.value) != null && h.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ze(b), (h, k) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = (C) => y.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: p.value
              }, {
                default: i(() => [
                  w(n(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          p.value ? (s(), S(lt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), S(it, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            d.value.length === 0 ? (s(), S(Ke, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(G, null, se(u.value, (C, L) => (s(), o("div", {
                key: L,
                class: le(`log-line log-level-${C.level.toLowerCase()}`)
              }, n(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(nt, {
        show: y.value,
        title: "About Environment Logs",
        onClose: k[2] || (k[2] = (C) => y.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            k[3] || (k[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, n(m.value), 1),
            k[4] || (k[4] = w(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          k[5] || (k[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            w(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            w(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            w(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            w(" Detailed debugging information ")
          ], -1)),
          k[6] || (k[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          g(te, {
            variant: "primary",
            onClick: k[1] || (k[1] = (C) => y.value = !1)
          }, {
            default: i(() => [...k[7] || (k[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), mf = /* @__PURE__ */ X(uf, [["__scopeId", "data-v-4f1e6f72"]]), vf = { class: "env-title" }, ff = {
  key: 0,
  class: "current-badge"
}, gf = {
  key: 0,
  class: "branch-info"
}, pf = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), S(Ne, {
      status: t.isCurrent ? "synced" : void 0
    }, qt({
      icon: i(() => [
        w(n(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", vf, [
          e("span", null, n(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", ff, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", gf, [
          a[0] || (a[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + n(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: i(() => [
        ge(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          g(xe, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          g(xe, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          g(xe, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), S(xe, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), hf = /* @__PURE__ */ X(pf, [["__scopeId", "data-v-9231917a"]]), yf = { class: "env-details" }, wf = { class: "status-row" }, kf = {
  key: 0,
  class: "detail-row"
}, bf = { class: "value mono" }, _f = {
  key: 1,
  class: "detail-row"
}, $f = { class: "value mono small" }, Cf = { class: "detail-row" }, xf = { class: "value" }, Sf = { class: "detail-row" }, If = { class: "value" }, Ef = { class: "detail-row" }, Mf = { class: "value" }, zf = {
  key: 2,
  class: "section-divider"
}, Lf = {
  key: 3,
  class: "detail-row"
}, Df = { class: "value" }, Rf = {
  key: 4,
  class: "detail-row"
}, Nf = { class: "value" }, Tf = { class: "footer-actions" }, Uf = /* @__PURE__ */ Y({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: r }) {
    const a = r;
    function d(p) {
      if (!p) return "Unknown";
      try {
        const v = new Date(p), m = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), l = Math.floor(m / 6e4), u = Math.floor(m / 36e5), b = Math.floor(m / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : u < 24 ? `${u} ${u === 1 ? "hour" : "hours"} ago` : b < 30 ? `${b} ${b === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, v) => (s(), S(at, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (y) => a("close"))
    }, {
      body: i(() => [
        e("div", yf, [
          e("div", wf, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, n(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", kf, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", bf, n(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", _f, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", $f, n(t.environment.path), 1)
          ])) : c("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Cf, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", xf, n(t.environment.workflow_count), 1)
          ]),
          e("div", Sf, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", If, n(t.environment.node_count), 1)
          ]),
          e("div", Ef, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Mf, n(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", zf)) : c("", !0),
          t.environment.created_at ? (s(), o("div", Lf, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Df, n(d(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", Rf, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Nf, n(d(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", Tf, [
          t.canDelete ? (s(), S(re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (y) => a("delete", t.environment.name))
          }, {
            default: i(() => [...v[12] || (v[12] = [
              w(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          g(re, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (y) => a("close"))
          }, {
            default: i(() => [...v[13] || (v[13] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Pf = /* @__PURE__ */ X(Uf, [["__scopeId", "data-v-59855453"]]), $s = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Cs = "3.12", xs = [
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
], Ss = "auto", Bf = { class: "create-env-form" }, Of = { class: "form-field" }, Ff = { class: "form-field" }, Vf = ["value"], Af = { class: "form-field" }, Wf = ["disabled"], Gf = ["value"], jf = { class: "form-field" }, Hf = ["value"], qf = { class: "form-field form-field--checkbox" }, Kf = { class: "form-checkbox" }, Yf = /* @__PURE__ */ Y({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: r }) {
    const a = r, { getComfyUIReleases: d } = De(), p = _(""), v = _(Cs), y = _("latest"), m = _(Ss), l = _(!1), u = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = _(!1), h = _(null);
    function k() {
      const L = p.value.trim();
      if (!L) return;
      const $ = {
        name: L,
        python_version: v.value,
        comfyui_version: y.value,
        torch_backend: m.value,
        switch_after: l.value
      };
      a("create", $);
    }
    async function C() {
      b.value = !0;
      try {
        u.value = await d();
      } catch (L) {
        console.error("Failed to load ComfyUI releases:", L);
      } finally {
        b.value = !1;
      }
    }
    return ze(async () => {
      var L;
      await js(), (L = h.value) == null || L.focus(), C();
    }), (L, $) => (s(), S(at, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: $[6] || ($[6] = (f) => a("close"))
    }, {
      body: i(() => [
        e("div", Bf, [
          e("div", Of, [
            $[7] || ($[7] = e("label", { class: "form-label" }, "Name", -1)),
            Be(e("input", {
              ref_key: "nameInput",
              ref: h,
              "onUpdate:modelValue": $[0] || ($[0] = (f) => p.value = f),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ct(k, ["enter"])
            }, null, 544), [
              [Nt, p.value]
            ])
          ]),
          e("div", Ff, [
            $[8] || ($[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": $[1] || ($[1] = (f) => v.value = f),
              class: "form-select"
            }, [
              (s(!0), o(G, null, se(he($s), (f) => (s(), o("option", {
                key: f,
                value: f
              }, n(f), 9, Vf))), 128))
            ], 512), [
              [bt, v.value]
            ])
          ]),
          e("div", Af, [
            $[9] || ($[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": $[2] || ($[2] = (f) => y.value = f),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(G, null, se(u.value, (f) => (s(), o("option", {
                key: f.tag_name,
                value: f.tag_name
              }, n(f.name), 9, Gf))), 128))
            ], 8, Wf), [
              [bt, y.value]
            ])
          ]),
          e("div", jf, [
            $[10] || ($[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Be(e("select", {
              "onUpdate:modelValue": $[3] || ($[3] = (f) => m.value = f),
              class: "form-select"
            }, [
              (s(!0), o(G, null, se(he(xs), (f) => (s(), o("option", {
                key: f,
                value: f
              }, n(f) + n(f === "auto" ? " (detect GPU)" : ""), 9, Hf))), 128))
            ], 512), [
              [bt, m.value]
            ])
          ]),
          e("div", qf, [
            e("label", Kf, [
              Be(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": $[4] || ($[4] = (f) => l.value = f)
              }, null, 512), [
                [Jt, l.value]
              ]),
              $[11] || ($[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        g(re, {
          variant: "primary",
          disabled: !p.value.trim(),
          onClick: k
        }, {
          default: i(() => [...$[12] || ($[12] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(re, {
          variant: "secondary",
          onClick: $[5] || ($[5] = (f) => a("close"))
        }, {
          default: i(() => [...$[13] || ($[13] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Xf = /* @__PURE__ */ X(Yf, [["__scopeId", "data-v-a2f13447"]]), Qf = /* @__PURE__ */ Y({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getEnvironments: p } = De(), v = _([]), y = _(!1), m = _(null), l = _(""), u = _(!1), b = _(!1), h = _(null), k = U(
      () => v.value.find((I) => I.is_current)
    ), C = U(() => {
      if (!l.value.trim()) return v.value;
      const I = l.value.toLowerCase();
      return v.value.filter(
        (B) => {
          var W;
          return B.name.toLowerCase().includes(I) || ((W = B.current_branch) == null ? void 0 : W.toLowerCase().includes(I));
        }
      );
    });
    function L(I) {
      d("create", I), b.value = !1;
    }
    function $() {
      b.value = !0;
    }
    function f(I) {
      h.value = I;
    }
    function R(I) {
      h.value = null, d("delete", I);
    }
    async function O() {
      y.value = !0, m.value = null;
      try {
        v.value = await p();
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return ze(O), r({
      loadEnvironments: O,
      openCreateModal: $
    }), (I, B) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (W) => u.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: i(() => [...B[6] || (B[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              g(te, {
                variant: "secondary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...B[7] || (B[7] = [
                  w(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g($t, {
            modelValue: l.value,
            "onUpdate:modelValue": B[1] || (B[1] = (W) => l.value = W),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          y.value ? (s(), S(lt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), S(it, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            v.value.length ? (s(), S(Ct, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(v.value.length) + " " + n(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                k.value ? (s(), o(G, { key: 0 }, [
                  B[8] || (B[8] = w(" • Current: ", -1)),
                  e("strong", null, n(k.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            C.value.length ? (s(), S(Me, {
              key: 1,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(C.value, (W) => (s(), S(hf, {
                  key: W.name,
                  "environment-name": W.name,
                  "is-current": W.is_current,
                  "current-branch": W.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    W.is_current ? c("", !0) : (s(), S(te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => I.$emit("switch", W.name)
                    }, {
                      default: i(() => [...B[9] || (B[9] = [
                        w(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => f(W)
                    }, {
                      default: i(() => [...B[10] || (B[10] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            C.value.length ? c("", !0) : (s(), S(Ke, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, qt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  g(te, {
                    variant: "primary",
                    onClick: $
                  }, {
                    default: i(() => [...B[11] || (B[11] = [
                      w(" Create Environment ", -1)
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
      g(nt, {
        show: u.value,
        title: "About Environments",
        onClose: B[3] || (B[3] = (W) => u.value = !1)
      }, {
        content: i(() => [...B[12] || (B[12] = [
          e("p", null, [
            e("strong", null, "Environments"),
            w(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          g(te, {
            variant: "secondary",
            onClick: B[2] || (B[2] = (W) => u.value = !1)
          }, {
            default: i(() => [...B[13] || (B[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (s(), S(Pf, {
        key: 0,
        environment: h.value,
        "can-delete": v.value.length > 1,
        onClose: B[4] || (B[4] = (W) => h.value = null),
        onDelete: R
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      b.value ? (s(), S(Xf, {
        key: 1,
        onClose: B[5] || (B[5] = (W) => b.value = !1),
        onCreate: L
      })) : c("", !0)
    ], 64));
  }
}), Zf = /* @__PURE__ */ X(Qf, [["__scopeId", "data-v-fd2c82b3"]]), Jf = { class: "file-path" }, eg = { class: "file-path-text" }, tg = ["title"], sg = /* @__PURE__ */ Y({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = _(!1);
    async function d() {
      try {
        await navigator.clipboard.writeText(r.path), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, v) => (s(), o("div", Jf, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", eg, n(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: a.value ? "Copied!" : "Copy path",
        onClick: d
      }, n(a.value ? "✓" : "📋"), 9, tg)) : c("", !0)
    ]));
  }
}), og = /* @__PURE__ */ X(sg, [["__scopeId", "data-v-f0982173"]]), ag = { class: "output-path-input" }, ng = { class: "export-actions" }, lg = {
  key: 1,
  class: "export-warning"
}, ig = /* @__PURE__ */ Y({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = De(), a = _(""), d = _(!1), p = _(null), v = _(!1);
    async function y() {
      d.value = !0, p.value = null;
      try {
        const l = await r(a.value || void 0);
        p.value = l;
      } catch (l) {
        p.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        d.value = !1;
      }
    }
    async function m() {
      var l;
      if ((l = p.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (l, u) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              g(te, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (b) => v.value = !0),
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
          g(Me, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              g(Ne, { status: "synced" }, {
                icon: i(() => [...u[6] || (u[6] = [
                  w("📦", -1)
                ])]),
                title: i(() => [...u[7] || (u[7] = [
                  w("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...u[8] || (u[8] = [
                  w(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  g(xe, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  g(xe, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  g(xe, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  g(xe, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(Me, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              g(Ne, { status: "synced" }, {
                icon: i(() => [...u[9] || (u[9] = [
                  w("📁", -1)
                ])]),
                title: i(() => [...u[10] || (u[10] = [
                  w("Output Destination", -1)
                ])]),
                subtitle: i(() => [...u[11] || (u[11] = [
                  w(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", ag, [
                    g(Gt, {
                      modelValue: a.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (b) => a.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(Me, { title: "EXPORT" }, {
            default: i(() => [
              e("div", ng, [
                g(te, {
                  variant: "primary",
                  size: "md",
                  loading: d.value,
                  disabled: d.value,
                  onClick: y
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
                    w(" " + n(d.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                a.value ? (s(), S(te, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: d.value,
                  onClick: u[2] || (u[2] = (b) => a.value = "")
                }, {
                  default: i(() => [...u[13] || (u[13] = [
                    w(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          p.value ? (s(), S(Me, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              g(Ne, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, qt({
                icon: i(() => [
                  w(n(p.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  w(n(p.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  w(n(p.value.status === "success" ? "Your environment has been exported" : p.value.message), 1)
                ]),
                _: 2
              }, [
                p.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    g(xe, { label: "Saved to:" }, {
                      default: i(() => [
                        g(og, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (s(), S(xe, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (s(), o("div", lg, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...u[15] || (u[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (b) => p.value = null)
                    }, {
                      default: i(() => [...u[16] || (u[16] = [
                        w(" Dismiss ", -1)
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
      g(nt, {
        show: v.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (b) => v.value = !1)
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
            w(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), rg = /* @__PURE__ */ X(ig, [["__scopeId", "data-v-1777a9d5"]]), dg = { class: "file-input-wrapper" }, cg = ["accept", "multiple", "disabled"], ug = /* @__PURE__ */ Y({
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
    const d = a, p = _(null);
    function v() {
      var m;
      (m = p.value) == null || m.click();
    }
    function y(m) {
      const l = m.target;
      l.files && l.files.length > 0 && (d("change", l.files), l.value = "");
    }
    return r({
      triggerInput: v
    }), (m, l) => (s(), o("div", dg, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: y
      }, null, 40, cg),
      g(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: i(() => [
          ge(m.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            w(" " + n(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), mg = /* @__PURE__ */ X(ug, [["__scopeId", "data-v-cd192091"]]), vg = {
  key: 0,
  class: "drop-zone-empty"
}, fg = { class: "drop-zone-text" }, gg = { class: "drop-zone-primary" }, pg = { class: "drop-zone-secondary" }, hg = { class: "drop-zone-actions" }, yg = {
  key: 1,
  class: "drop-zone-file"
}, wg = { class: "file-info" }, kg = { class: "file-details" }, bg = { class: "file-name" }, _g = { class: "file-size" }, $g = /* @__PURE__ */ Y({
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
    const a = r, d = _(!1), p = _(null), v = _(0), y = U(() => p.value !== null), m = U(() => {
      var f;
      return ((f = p.value) == null ? void 0 : f.name) || "";
    }), l = U(() => {
      if (!p.value) return "";
      const f = p.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(f) {
      var R;
      v.value++, (R = f.dataTransfer) != null && R.types.includes("Files") && (d.value = !0);
    }
    function b(f) {
      f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function h() {
      v.value--, v.value === 0 && (d.value = !1);
    }
    function k(f) {
      var O;
      v.value = 0, d.value = !1;
      const R = (O = f.dataTransfer) == null ? void 0 : O.files;
      R && R.length > 0 && L(R[0]);
    }
    function C(f) {
      f.length > 0 && L(f[0]);
    }
    function L(f) {
      p.value = f, a("fileSelected", f);
    }
    function $() {
      p.value = null, a("clear");
    }
    return (f, R) => (s(), o("div", {
      class: le(["file-drop-zone", { "drop-active": d.value, "has-file": y.value }]),
      onDragenter: Ee(u, ["prevent"]),
      onDragover: Ee(b, ["prevent"]),
      onDragleave: Ee(h, ["prevent"]),
      onDrop: Ee(k, ["prevent"])
    }, [
      y.value ? (s(), o("div", yg, [
        e("div", wg, [
          R[1] || (R[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", kg, [
            e("div", bg, n(m.value), 1),
            e("div", _g, n(l.value), 1)
          ])
        ]),
        g(te, {
          variant: "ghost",
          size: "xs",
          onClick: $,
          title: "Remove file"
        }, {
          default: i(() => [...R[2] || (R[2] = [
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
      ])) : (s(), o("div", vg, [
        R[0] || (R[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", fg, [
          e("p", gg, n(t.primaryText), 1),
          e("p", pg, n(t.secondaryText), 1)
        ]),
        e("div", hg, [
          g(mg, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: C
          }, {
            default: i(() => [
              w(n(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Cg = /* @__PURE__ */ X($g, [["__scopeId", "data-v-e00abbca"]]), xg = { class: "import-preview" }, Sg = { class: "preview-header" }, Ig = {
  key: 0,
  class: "source-env"
}, Eg = { class: "preview-content" }, Mg = { class: "preview-section" }, zg = { class: "section-header" }, Lg = { class: "section-info" }, Dg = { class: "section-count" }, Rg = {
  key: 0,
  class: "item-list"
}, Ng = { class: "item-name" }, Tg = {
  key: 0,
  class: "item-more"
}, Ug = { class: "preview-section" }, Pg = { class: "section-header" }, Bg = { class: "section-info" }, Og = { class: "section-count" }, Fg = {
  key: 0,
  class: "item-list"
}, Vg = { class: "item-details" }, Ag = { class: "item-name" }, Wg = { class: "item-meta" }, Gg = {
  key: 0,
  class: "item-more"
}, jg = { class: "preview-section" }, Hg = { class: "section-header" }, qg = { class: "section-info" }, Kg = { class: "section-count" }, Yg = {
  key: 0,
  class: "item-list"
}, Xg = { class: "item-name" }, Qg = {
  key: 0,
  class: "item-more"
}, Zg = {
  key: 0,
  class: "preview-section"
}, Jg = { class: "git-info" }, ep = /* @__PURE__ */ Y({
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
    const r = t, a = U(() => r.workflows.length), d = U(() => r.models.length), p = U(() => r.nodes.length);
    function v(y) {
      return y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : y < 1024 * 1024 * 1024 ? `${(y / (1024 * 1024)).toFixed(1)} MB` : `${(y / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (y, m) => (s(), o("div", xg, [
      e("div", Sg, [
        g(Ae, null, {
          default: i(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Ig, [
          m[1] || (m[1] = w(" From: ", -1)),
          g(ts, null, {
            default: i(() => [
              w(n(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Eg, [
        e("div", Mg, [
          e("div", zg, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Lg, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Dg, n(a.value) + " file" + n(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Rg, [
            (s(!0), o(G, null, se(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Ng, n(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Tg, " +" + n(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Ug, [
          e("div", Pg, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Bg, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Og, n(d.value) + " file" + n(d.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Fg, [
            (s(!0), o(G, null, se(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Vg, [
                e("span", Ag, n(l.filename), 1),
                e("span", Wg, n(v(l.size)) + " • " + n(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Gg, " +" + n(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", jg, [
          e("div", Hg, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", qg, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Kg, n(p.value) + " node" + n(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Yg, [
            (s(!0), o(G, null, se(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Xg, n(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Qg, " +" + n(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Zg, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Jg, [
            t.gitBranch ? (s(), S(xe, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                g(ts, null, {
                  default: i(() => [
                    w(n(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (s(), S(xe, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                g(ps, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), tp = /* @__PURE__ */ X(ep, [["__scopeId", "data-v-182fe113"]]), sp = { class: "import-options" }, op = { class: "options-container" }, ap = { class: "option-section" }, np = { class: "conflict-options" }, lp = ["value", "checked", "onChange"], ip = { class: "conflict-content" }, rp = { class: "conflict-label" }, dp = { class: "conflict-description" }, cp = { class: "option-section" }, up = { class: "component-toggles" }, mp = /* @__PURE__ */ Y({
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
    const a = r, d = [
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
    return (p, v) => (s(), o("div", sp, [
      g(Ae, null, {
        default: i(() => [...v[4] || (v[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", op, [
        e("div", ap, [
          g(es, null, {
            default: i(() => [...v[5] || (v[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", np, [
            (s(), o(G, null, se(d, (y) => e("label", {
              key: y.value,
              class: le(["conflict-option", { active: t.conflictMode === y.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: y.value,
                checked: t.conflictMode === y.value,
                onChange: (m) => a("update:conflictMode", y.value)
              }, null, 40, lp),
              e("div", ip, [
                e("span", rp, n(y.label), 1),
                e("span", dp, n(y.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", cp, [
          g(es, null, {
            default: i(() => [...v[6] || (v[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", up, [
            g(ot, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": v[0] || (v[0] = (y) => a("update:includeWorkflows", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(ot, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": v[1] || (v[1] = (y) => a("update:includeModels", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(ot, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": v[2] || (v[2] = (y) => a("update:includeNodes", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(ot, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": v[3] || (v[3] = (y) => a("update:includeGitHistory", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), vp = /* @__PURE__ */ X(mp, [["__scopeId", "data-v-0ec212b0"]]), fp = {
  key: 0,
  class: "import-empty"
}, gp = { class: "import-help" }, pp = {
  key: 1,
  class: "import-configure"
}, hp = { class: "selected-file-bar" }, yp = { class: "file-bar-content" }, wp = { class: "file-bar-info" }, kp = { class: "file-bar-name" }, bp = { class: "file-bar-size" }, _p = { class: "import-actions" }, $p = {
  key: 2,
  class: "import-progress"
}, Cp = { class: "progress-content" }, xp = { class: "progress-info" }, Sp = { class: "progress-title" }, Ip = { class: "progress-detail" }, Ep = { class: "progress-bar" }, Mp = { class: "progress-status" }, zp = {
  key: 3,
  class: "import-complete"
}, Lp = { class: "complete-message" }, Dp = { class: "complete-title" }, Rp = { class: "complete-details" }, Np = { class: "complete-actions" }, Tp = /* @__PURE__ */ Y({
  __name: "ImportSection",
  setup(t) {
    const r = _(null), a = _(!1), d = _(!1), p = _(!1), v = _(""), y = _({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = _({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = _({
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
    }), u = U(() => y.value.includeWorkflows || y.value.includeModels || y.value.includeNodes || y.value.includeGitHistory);
    function b($) {
      r.value = $;
    }
    function h() {
      r.value = null, d.value = !1, p.value = !1, v.value = "";
    }
    function k() {
      h(), a.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function C() {
      if (r.value) {
        a.value = !0, d.value = !1;
        try {
          const $ = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const f of $)
            m.value = f, await new Promise((R) => setTimeout(R, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((f) => setTimeout(f, 500)), p.value = !0, v.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch ($) {
          p.value = !1, v.value = $ instanceof Error ? $.message : "Unknown error occurred during import";
        } finally {
          a.value = !1, d.value = !0;
        }
      }
    }
    function L($) {
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ($, f) => (s(), S(Oe, null, {
      header: i(() => [
        g(Fe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !r.value && !a.value ? (s(), o("div", fp, [
          g(Cg, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", gp, [
            g(Ae, null, {
              default: i(() => [...f[5] || (f[5] = [
                w("How to Import", -1)
              ])]),
              _: 1
            }),
            f[6] || (f[6] = e("div", { class: "help-content" }, [
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
        ])) : r.value && !a.value && !d.value ? (s(), o("div", pp, [
          e("div", hp, [
            e("div", yp, [
              f[7] || (f[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", wp, [
                e("div", kp, n(r.value.name), 1),
                e("div", bp, n(L(r.value.size)), 1)
              ])
            ]),
            g(te, {
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: i(() => [...f[8] || (f[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(tp, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(vp, {
            "conflict-mode": y.value.conflictMode,
            "onUpdate:conflictMode": f[0] || (f[0] = (R) => y.value.conflictMode = R),
            "include-workflows": y.value.includeWorkflows,
            "onUpdate:includeWorkflows": f[1] || (f[1] = (R) => y.value.includeWorkflows = R),
            "include-models": y.value.includeModels,
            "onUpdate:includeModels": f[2] || (f[2] = (R) => y.value.includeModels = R),
            "include-nodes": y.value.includeNodes,
            "onUpdate:includeNodes": f[3] || (f[3] = (R) => y.value.includeNodes = R),
            "include-git-history": y.value.includeGitHistory,
            "onUpdate:includeGitHistory": f[4] || (f[4] = (R) => y.value.includeGitHistory = R)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !y.value.includeModels && l.value.models.length > 0 ? (s(), S(tt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", _p, [
            g(te, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: C
            }, {
              default: i(() => [...f[9] || (f[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                w(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            g(te, {
              variant: "secondary",
              size: "md",
              onClick: h
            }, {
              default: i(() => [...f[10] || (f[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : a.value ? (s(), o("div", $p, [
          e("div", Cp, [
            f[11] || (f[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", xp, [
              e("div", Sp, n(m.value.message), 1),
              e("div", Ip, n(m.value.detail), 1)
            ])
          ]),
          e("div", Ep, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Mp, n(m.value.percent) + "% complete ", 1)
        ])) : d.value ? (s(), o("div", zp, [
          e("div", {
            class: le(["complete-icon", p.value ? "success" : "error"])
          }, n(p.value ? "✓" : "✕"), 3),
          e("div", Lp, [
            e("div", Dp, n(p.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Rp, n(v.value), 1)
          ]),
          e("div", Np, [
            g(te, {
              variant: "primary",
              size: "md",
              onClick: k
            }, {
              default: i(() => [...f[12] || (f[12] = [
                w(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Up = /* @__PURE__ */ X(Tp, [["__scopeId", "data-v-18e18eb5"]]), Pp = { class: "header-info" }, Bp = { class: "commit-hash" }, Op = {
  key: 0,
  class: "commit-refs"
}, Fp = { class: "commit-message" }, Vp = { class: "commit-date" }, Ap = {
  key: 0,
  class: "loading"
}, Wp = {
  key: 1,
  class: "changes-section"
}, Gp = { class: "stats-row" }, jp = { class: "stat" }, Hp = { class: "stat insertions" }, qp = { class: "stat deletions" }, Kp = {
  key: 0,
  class: "change-group"
}, Yp = {
  key: 1,
  class: "change-group"
}, Xp = {
  key: 0,
  class: "version"
}, Qp = {
  key: 2,
  class: "change-group"
}, Zp = { class: "change-item" }, Jp = /* @__PURE__ */ Y({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: a } = De(), d = _(null), p = _(!0), v = U(() => {
      if (!d.value) return !1;
      const m = d.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), y = U(() => {
      if (!d.value) return !1;
      const m = d.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return ze(async () => {
      try {
        d.value = await a(r.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (m, l) => (s(), S(at, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (u) => m.$emit("close"))
    }, {
      header: i(() => {
        var u, b, h, k;
        return [
          e("div", Pp, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Bp, n(((u = d.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (k = (h = d.value) == null ? void 0 : h.refs) != null && k.length ? (s(), o("span", Op, [
              (s(!0), o(G, null, se(d.value.refs, (C) => (s(), o("span", {
                key: C,
                class: "ref-badge"
              }, n(C), 1))), 128))
            ])) : c("", !0)
          ]),
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (C) => m.$emit("close"))
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
        var u, b;
        return [
          e("div", Fp, n(((u = d.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", Vp, n(((b = d.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (s(), o("div", Ap, "Loading details...")) : d.value ? (s(), o("div", Wp, [
            e("div", Gp, [
              e("span", jp, n(d.value.stats.files_changed) + " files", 1),
              e("span", Hp, "+" + n(d.value.stats.insertions), 1),
              e("span", qp, "-" + n(d.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", Kp, [
              g(Tt, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(G, null, se(d.value.changes.workflows.added, (h) => (s(), o("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(h), 1)
              ]))), 128)),
              (s(!0), o(G, null, se(d.value.changes.workflows.modified, (h) => (s(), o("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, n(h), 1)
              ]))), 128)),
              (s(!0), o(G, null, se(d.value.changes.workflows.deleted, (h) => (s(), o("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(h), 1)
              ]))), 128))
            ])) : c("", !0),
            y.value ? (s(), o("div", Yp, [
              g(Tt, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(G, null, se(d.value.changes.nodes.added, (h) => (s(), o("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(h.name), 1),
                h.version ? (s(), o("span", Xp, "(" + n(h.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(G, null, se(d.value.changes.nodes.removed, (h) => (s(), o("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(h.name), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.changes.models.resolved > 0 ? (s(), o("div", Qp, [
              g(Tt, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Zp, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, n(d.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (u) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(re, {
          variant: "primary",
          onClick: l[2] || (l[2] = (u) => m.$emit("checkout", t.commit))
        }, {
          default: i(() => [...l[16] || (l[16] = [
            w(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), eh = /* @__PURE__ */ X(Jp, [["__scopeId", "data-v-d256ff6d"]]), th = { class: "dialog-message" }, sh = {
  key: 0,
  class: "dialog-details"
}, oh = {
  key: 1,
  class: "dialog-warning"
}, ah = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), S(at, {
      title: t.title,
      size: "sm",
      onClose: a[3] || (a[3] = (d) => r.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", th, n(t.message), 1),
        t.details && t.details.length ? (s(), o("div", sh, [
          (s(!0), o(G, null, se(t.details, (d, p) => (s(), o("div", {
            key: p,
            class: "detail-item"
          }, " • " + n(d), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", oh, [
          a[4] || (a[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + n(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (d) => r.$emit("cancel"))
        }, {
          default: i(() => [
            w(n(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), S(re, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (d) => r.$emit("secondary"))
        }, {
          default: i(() => [
            w(n(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        g(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: a[2] || (a[2] = (d) => r.$emit("confirm"))
        }, {
          default: i(() => [
            w(n(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), nh = /* @__PURE__ */ X(ah, [["__scopeId", "data-v-3670b9f5"]]), lh = { class: "base-textarea-wrapper" }, ih = ["value", "rows", "placeholder", "disabled", "maxlength"], rh = {
  key: 0,
  class: "base-textarea-count"
}, dh = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("div", lh, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          a[1] || (a[1] = ct(Ee((d) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = ct(Ee((d) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, ih),
      t.showCharCount && t.maxLength ? (s(), o("div", rh, n(t.modelValue.length) + " / " + n(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), us = /* @__PURE__ */ X(dh, [["__scopeId", "data-v-5516e6fc"]]), ch = ["checked", "disabled"], uh = { class: "base-checkbox-box" }, mh = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, vh = {
  key: 0,
  class: "base-checkbox-label"
}, fh = /* @__PURE__ */ Y({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", {
      class: le(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked))
      }, null, 40, ch),
      e("span", uh, [
        t.modelValue ? (s(), o("svg", mh, [...a[1] || (a[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      r.$slots.default ? (s(), o("span", vh, [
        ge(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ms = /* @__PURE__ */ X(fh, [["__scopeId", "data-v-bf17c831"]]), gh = { class: "popover-header" }, ph = { class: "popover-body" }, hh = {
  key: 0,
  class: "changes-summary"
}, yh = {
  key: 0,
  class: "change-item"
}, wh = {
  key: 1,
  class: "change-item"
}, kh = {
  key: 2,
  class: "change-item"
}, bh = {
  key: 3,
  class: "change-item"
}, _h = {
  key: 4,
  class: "change-item"
}, $h = {
  key: 1,
  class: "no-changes"
}, Ch = {
  key: 2,
  class: "loading"
}, xh = {
  key: 3,
  class: "issues-error"
}, Sh = { class: "error-header" }, Ih = { class: "error-title" }, Eh = { class: "issues-list" }, Mh = { class: "message-section" }, zh = { class: "popover-footer" }, Lh = {
  key: 1,
  class: "commit-popover"
}, Dh = { class: "popover-header" }, Rh = { class: "popover-body" }, Nh = {
  key: 0,
  class: "changes-summary"
}, Th = {
  key: 0,
  class: "change-item"
}, Uh = {
  key: 1,
  class: "change-item"
}, Ph = {
  key: 2,
  class: "change-item"
}, Bh = {
  key: 3,
  class: "change-item"
}, Oh = {
  key: 4,
  class: "change-item"
}, Fh = {
  key: 1,
  class: "no-changes"
}, Vh = {
  key: 2,
  class: "loading"
}, Ah = {
  key: 3,
  class: "issues-error"
}, Wh = { class: "error-header" }, Gh = { class: "error-title" }, jh = { class: "issues-list" }, Hh = { class: "message-section" }, qh = { class: "popover-footer" }, Kh = /* @__PURE__ */ Y({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const a = t, d = r, { commit: p } = De(), v = _(""), y = _(!1), m = _(!1), l = _(null), u = U(() => {
      if (!a.status) return !1;
      const L = a.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || a.status.has_changes;
    }), b = U(() => {
      var L;
      return (L = a.status) != null && L.workflows.analyzed ? a.status.workflows.analyzed.filter(
        ($) => $.has_issues && ($.sync_state === "new" || $.sync_state === "modified")
      ) : [];
    }), h = U(() => b.value.length > 0), k = U(() => h.value && !m.value);
    async function C() {
      var L, $, f;
      if (!(h.value && !m.value) && !(!u.value || !v.value.trim() || y.value)) {
        y.value = !0, l.value = null;
        try {
          const R = await p(v.value.trim(), m.value);
          R.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((L = R.summary) == null ? void 0 : L.new) || 0} new, ${(($ = R.summary) == null ? void 0 : $.modified) || 0} modified, ${((f = R.summary) == null ? void 0 : f.deleted) || 0} deleted`
          }, v.value = "", m.value = !1, setTimeout(() => d("committed"), 1e3)) : R.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : R.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: R.message || "Commit failed" };
        } catch (R) {
          l.value = { type: "error", message: R instanceof Error ? R.message : "Commit failed" };
        } finally {
          y.value = !1;
        }
      }
    }
    return (L, $) => t.asModal ? (s(), S(Te, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (f) => d("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = Ee(() => {
          }, ["stop"]))
        }, [
          e("div", gh, [
            $[11] || ($[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: $[0] || ($[0] = (f) => d("close"))
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
          e("div", ph, [
            t.status && u.value ? (s(), o("div", hh, [
              t.status.workflows.new.length ? (s(), o("div", yh, [
                $[12] || ($[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", wh, [
                $[13] || ($[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", kh, [
                $[14] || ($[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", bh, [
                $[15] || ($[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", _h, [
                $[16] || ($[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (s(), o("div", $h, " No changes to commit ")) : (s(), o("div", Ch, " Loading... ")),
            h.value ? (s(), o("div", xh, [
              e("div", Sh, [
                $[17] || ($[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Ih, n(b.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Eh, [
                (s(!0), o(G, null, se(b.value, (f) => (s(), o("div", {
                  key: f.name,
                  class: "issue-item"
                }, [
                  e("strong", null, n(f.name), 1),
                  w(": " + n(f.issue_summary), 1)
                ]))), 128))
              ]),
              g(ms, {
                modelValue: m.value,
                "onUpdate:modelValue": $[1] || ($[1] = (f) => m.value = f),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...$[18] || ($[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Mh, [
              g(us, {
                modelValue: v.value,
                "onUpdate:modelValue": $[2] || ($[2] = (f) => v.value = f),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || y.value || k.value,
                rows: 3,
                onCtrlEnter: C
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: le(["result", l.value.type])
            }, n(l.value.message), 3)) : c("", !0)
          ]),
          e("div", zh, [
            g(re, {
              variant: "secondary",
              onClick: $[3] || ($[3] = (f) => d("close"))
            }, {
              default: i(() => [...$[19] || ($[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: m.value ? "danger" : "primary",
              disabled: !u.value || !v.value.trim() || y.value || k.value,
              loading: y.value,
              onClick: C
            }, {
              default: i(() => [
                w(n(y.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Lh, [
      e("div", Dh, [
        $[21] || ($[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: $[6] || ($[6] = (f) => d("close"))
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
      e("div", Rh, [
        t.status && u.value ? (s(), o("div", Nh, [
          t.status.workflows.new.length ? (s(), o("div", Th, [
            $[22] || ($[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Uh, [
            $[23] || ($[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Ph, [
            $[24] || ($[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Bh, [
            $[25] || ($[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Oh, [
            $[26] || ($[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (s(), o("div", Fh, " No changes to commit ")) : (s(), o("div", Vh, " Loading... ")),
        h.value ? (s(), o("div", Ah, [
          e("div", Wh, [
            $[27] || ($[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Gh, n(b.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", jh, [
            (s(!0), o(G, null, se(b.value, (f) => (s(), o("div", {
              key: f.name,
              class: "issue-item"
            }, [
              e("strong", null, n(f.name), 1),
              w(": " + n(f.issue_summary), 1)
            ]))), 128))
          ]),
          g(ms, {
            modelValue: m.value,
            "onUpdate:modelValue": $[7] || ($[7] = (f) => m.value = f),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...$[28] || ($[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", Hh, [
          g(us, {
            modelValue: v.value,
            "onUpdate:modelValue": $[8] || ($[8] = (f) => v.value = f),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || y.value || k.value,
            rows: 3,
            onCtrlEnter: C
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: le(["result", l.value.type])
        }, n(l.value.message), 3)) : c("", !0)
      ]),
      e("div", qh, [
        g(re, {
          variant: "secondary",
          onClick: $[9] || ($[9] = (f) => d("close"))
        }, {
          default: i(() => [...$[29] || ($[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(re, {
          variant: m.value ? "danger" : "primary",
          disabled: !u.value || !v.value.trim() || y.value || k.value,
          loading: y.value,
          onClick: C
        }, {
          default: i(() => [
            w(n(y.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Is = /* @__PURE__ */ X(Kh, [["__scopeId", "data-v-d92153de"]]), Yh = { class: "modal-header" }, Xh = { class: "modal-body" }, Qh = { class: "switch-message" }, Zh = { class: "switch-details" }, Jh = { class: "modal-actions" }, e1 = /* @__PURE__ */ Y({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (s(), S(Te, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = Ee(() => {
          }, ["stop"]))
        }, [
          e("div", Yh, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Xh, [
            e("p", Qh, [
              a[6] || (a[6] = w(" Switch from ", -1)),
              e("strong", null, n(t.fromEnvironment), 1),
              a[7] || (a[7] = w(" to ", -1)),
              e("strong", null, n(t.toEnvironment), 1),
              a[8] || (a[8] = w("? ", -1))
            ]),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Zh, ' Your current work will be preserved. You can switch back to "' + n(t.fromEnvironment) + '" anytime. ', 1),
            a[10] || (a[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Jh, [
            g(te, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(te, {
              variant: "primary",
              onClick: a[2] || (a[2] = (d) => r.$emit("confirm"))
            }, {
              default: i(() => [...a[12] || (a[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), t1 = /* @__PURE__ */ X(e1, [["__scopeId", "data-v-e9c5253e"]]), s1 = { class: "progress-bar" }, o1 = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, a = U(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (d, p) => (s(), o("div", s1, [
      e("div", {
        class: le(["progress-fill", t.variant]),
        style: qe({ width: a.value })
      }, null, 6)
    ]));
  }
}), a1 = /* @__PURE__ */ X(o1, [["__scopeId", "data-v-1beb0512"]]), n1 = {
  key: 0,
  class: "modal-overlay"
}, l1 = { class: "modal-content" }, i1 = { class: "modal-body" }, r1 = { class: "progress-info" }, d1 = { class: "progress-percentage" }, c1 = { class: "progress-state" }, u1 = { class: "switch-steps" }, m1 = { class: "step-icon" }, v1 = { class: "step-label" }, f1 = /* @__PURE__ */ Y({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, a = U(() => {
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
    }), d = U(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), p = U(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], y = v.findIndex((m) => m.state === r.state);
      return v.map((m, l) => {
        let u = "pending", b = "○";
        return l < y ? (u = "completed", b = "✓") : l === y && (u = "active", b = "⟳"), {
          ...m,
          status: u,
          icon: b
        };
      });
    });
    return (v, y) => (s(), S(Te, { to: "body" }, [
      t.show ? (s(), o("div", n1, [
        e("div", l1, [
          y[1] || (y[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", i1, [
            g(a1, {
              progress: t.progress,
              variant: d.value
            }, null, 8, ["progress", "variant"]),
            e("div", r1, [
              e("div", d1, n(t.progress) + "%", 1),
              e("div", c1, n(a.value), 1)
            ]),
            e("div", u1, [
              (s(!0), o(G, null, se(p.value, (m) => (s(), o("div", {
                key: m.state,
                class: le(["switch-step", m.status])
              }, [
                e("span", m1, n(m.icon), 1),
                e("span", v1, n(m.label), 1)
              ], 2))), 128))
            ]),
            y[0] || (y[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), g1 = /* @__PURE__ */ X(f1, [["__scopeId", "data-v-768a5078"]]), p1 = { class: "modal-header" }, h1 = { class: "modal-body" }, y1 = {
  key: 0,
  class: "node-section"
}, w1 = { class: "node-list" }, k1 = {
  key: 1,
  class: "node-section"
}, b1 = { class: "node-list" }, _1 = { class: "modal-actions" }, $1 = /* @__PURE__ */ Y({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (s(), S(Te, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = Ee(() => {
          }, ["stop"]))
        }, [
          e("div", p1, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", h1, [
            a[8] || (a[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", y1, [
              a[6] || (a[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", w1, [
                (s(!0), o(G, null, se(t.mismatchDetails.missing_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item add"
                }, " + " + n(d), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", k1, [
              a[7] || (a[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", b1, [
                (s(!0), o(G, null, se(t.mismatchDetails.extra_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item remove"
                }, " - " + n(d), 1))), 128))
              ])
            ])) : c("", !0),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", _1, [
            g(te, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(te, {
              variant: "primary",
              onClick: a[2] || (a[2] = (d) => r.$emit("confirm"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), C1 = /* @__PURE__ */ X($1, [["__scopeId", "data-v-7cad7518"]]), x1 = { class: "wizard-steps" }, S1 = { class: "step-number" }, I1 = {
  key: 0,
  class: "wizard-step"
}, E1 = { class: "form-field" }, M1 = ["placeholder"], z1 = {
  key: 0,
  class: "form-error"
}, L1 = { class: "form-field form-field--checkbox" }, D1 = { class: "form-checkbox" }, R1 = {
  key: 0,
  class: "form-field"
}, N1 = ["placeholder"], T1 = {
  key: 0,
  class: "form-info"
}, U1 = {
  key: 1,
  class: "form-suggestion"
}, P1 = {
  key: 2,
  class: "form-error"
}, B1 = {
  key: 3,
  class: "form-info"
}, O1 = {
  key: 1,
  class: "wizard-progress"
}, F1 = { class: "progress-bar" }, V1 = { class: "progress-message" }, A1 = {
  key: 1,
  class: "wizard-step"
}, W1 = { class: "form-field" }, G1 = { class: "form-field" }, j1 = ["value"], H1 = { class: "form-field" }, q1 = ["disabled"], K1 = ["value"], Y1 = { class: "form-field" }, X1 = ["value"], Q1 = { class: "form-field form-field--checkbox" }, Z1 = { class: "form-checkbox" }, J1 = {
  key: 0,
  class: "wizard-progress"
}, ey = { class: "progress-bar" }, ty = { class: "progress-message" }, sy = {
  key: 1,
  class: "form-error"
}, At = 10, oy = 600 * 1e3, ay = 1800 * 1e3, ny = /* @__PURE__ */ Y({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {}
  },
  emits: ["complete", "close"],
  setup(t, { emit: r }) {
    const a = t, d = r, {
      initializeWorkspace: p,
      getInitializeProgress: v,
      validatePath: y,
      createEnvironment: m,
      getCreateProgress: l,
      getComfyUIReleases: u
    } = De(), b = _(1), h = _(a.defaultPath), k = _(!!a.detectedModelsDir), C = _(a.detectedModelsDir || ""), L = _(null), $ = _(null), f = _(null), R = _(null), O = _("my-new-env"), I = _(Cs), B = _("latest"), W = _(Ss), F = _(!0), T = _(null), D = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), x = _(!1), z = _(!1), ee = _(!1), K = _({ progress: 0, message: "" }), ae = _({ progress: 0, message: "" }), me = _(0), de = _(null), J = _(0), P = _(null), E = U(() => {
      var be, ie;
      const oe = (be = h.value) == null ? void 0 : be.trim(), A = !L.value, Z = !k.value || !$.value && ((ie = C.value) == null ? void 0 : ie.trim());
      return oe && A && Z;
    }), ne = U(() => {
      var oe;
      return (oe = O.value) == null ? void 0 : oe.trim();
    });
    async function q() {
      var oe;
      if (L.value = null, !!((oe = h.value) != null && oe.trim()))
        try {
          const A = await y({ path: h.value, type: "workspace" });
          A.valid || (L.value = A.error || "Invalid path");
        } catch (A) {
          L.value = A instanceof Error ? A.message : "Validation failed";
        }
    }
    async function Ie() {
      var oe;
      if ($.value = null, f.value = null, R.value = null, !!((oe = C.value) != null && oe.trim()))
        try {
          const A = await y({ path: C.value, type: "models" });
          if (A.valid)
            R.value = A.model_count ?? null;
          else if ($.value = A.error || "Invalid path", A.suggestion) {
            f.value = A.suggestion, C.value = A.suggestion, $.value = null;
            const Z = await y({ path: A.suggestion, type: "models" });
            Z.valid && (R.value = Z.model_count ?? null);
          }
        } catch (A) {
          $.value = A instanceof Error ? A.message : "Validation failed";
        }
    }
    async function $e() {
      var oe, A, Z;
      if (L.value = null, $.value = null, await q(), !L.value && !(k.value && ((oe = C.value) != null && oe.trim()) && (await Ie(), $.value))) {
        z.value = !0;
        try {
          await p({
            workspace_path: ((A = h.value) == null ? void 0 : A.trim()) || a.defaultPath,
            models_directory: k.value && ((Z = C.value) == null ? void 0 : Z.trim()) || null
          }), me.value = 0, de.value = Date.now();
          const be = setInterval(async () => {
            if (de.value && Date.now() - de.value > oy) {
              clearInterval(be), z.value = !1, L.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ie = await v();
              if (me.value = 0, ie.state === "idle" && z.value) {
                clearInterval(be), z.value = !1, L.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              K.value = { progress: ie.progress, message: ie.message }, ie.state === "complete" ? (clearInterval(be), z.value = !1, b.value = 2, Ge()) : ie.state === "error" && (clearInterval(be), z.value = !1, L.value = ie.error || "Workspace creation failed");
            } catch (ie) {
              me.value++, console.warn(`Polling failure ${me.value}/${At}:`, ie), me.value >= At && (clearInterval(be), z.value = !1, L.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (be) {
          z.value = !1, L.value = be instanceof Error ? be.message : "Failed to create workspace";
        }
      }
    }
    async function Re() {
      ee.value = !0, T.value = null;
      try {
        const oe = {
          name: O.value.trim() || "my-new-env",
          python_version: I.value,
          comfyui_version: B.value,
          torch_backend: W.value,
          switch_after: F.value
        };
        if ((await m(oe)).status === "started") {
          J.value = 0, P.value = Date.now();
          const Z = setInterval(async () => {
            if (P.value && Date.now() - P.value > ay) {
              clearInterval(Z), ee.value = !1, T.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await l();
              if (J.value = 0, be.state === "idle" && ee.value) {
                clearInterval(Z), ee.value = !1, T.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              ae.value = {
                progress: be.state === "creating" ? 50 : be.state === "complete" ? 100 : 0,
                message: be.message
              }, be.state === "complete" ? (clearInterval(Z), d("complete", be.environment_name || oe.name)) : be.state === "error" && (clearInterval(Z), ee.value = !1, T.value = be.error || "Environment creation failed");
            } catch (be) {
              J.value++, console.warn(`Polling failure ${J.value}/${At}:`, be), J.value >= At && (clearInterval(Z), ee.value = !1, T.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (oe) {
        ee.value = !1, T.value = oe instanceof Error ? oe.message : "Unknown error";
      }
    }
    async function Ge() {
      x.value = !0;
      try {
        D.value = await u();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        x.value = !1;
      }
    }
    return ze(() => {
      a.detectedModelsDir && (C.value = a.detectedModelsDir);
    }), (oe, A) => (s(), S(at, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": b.value > 1,
      "close-on-overlay-click": !1,
      onClose: A[9] || (A[9] = (Z) => oe.$emit("close"))
    }, {
      body: i(() => [
        e("div", x1, [
          e("div", {
            class: le(["step", { active: b.value === 1, complete: b.value > 1 }])
          }, [
            e("span", S1, n(b.value > 1 ? "✓" : "1"), 1),
            A[10] || (A[10] = e("span", { class: "step-label" }, "Workspace", -1))
          ], 2),
          A[12] || (A[12] = e("div", { class: "step-connector" }, null, -1)),
          e("div", {
            class: le(["step", { active: b.value === 2 }])
          }, [...A[11] || (A[11] = [
            e("span", { class: "step-number" }, "2", -1),
            e("span", { class: "step-label" }, "Environment", -1)
          ])], 2)
        ]),
        b.value === 1 ? (s(), o("div", I1, [
          A[16] || (A[16] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
          e("div", E1, [
            A[13] || (A[13] = e("label", { class: "form-label" }, "Workspace Path", -1)),
            Be(e("input", {
              "onUpdate:modelValue": A[0] || (A[0] = (Z) => h.value = Z),
              type: "text",
              class: "form-input",
              placeholder: t.defaultPath,
              onBlur: q
            }, null, 40, M1), [
              [Nt, h.value]
            ]),
            L.value ? (s(), o("p", z1, n(L.value), 1)) : c("", !0)
          ]),
          e("div", L1, [
            e("label", D1, [
              Be(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[1] || (A[1] = (Z) => k.value = Z)
              }, null, 512), [
                [Jt, k.value]
              ]),
              A[14] || (A[14] = e("span", null, "I have existing ComfyUI models", -1))
            ])
          ]),
          k.value ? (s(), o("div", R1, [
            A[15] || (A[15] = e("label", { class: "form-label" }, "Models Directory", -1)),
            Be(e("input", {
              "onUpdate:modelValue": A[2] || (A[2] = (Z) => C.value = Z),
              type: "text",
              class: "form-input",
              placeholder: t.detectedModelsDir || "/path/to/models",
              onBlur: Ie
            }, null, 40, N1), [
              [Nt, C.value]
            ]),
            t.detectedModelsDir && !C.value ? (s(), o("p", T1, " Detected: " + n(t.detectedModelsDir), 1)) : c("", !0),
            f.value ? (s(), o("p", U1, " Did you mean: " + n(f.value), 1)) : c("", !0),
            $.value ? (s(), o("p", P1, n($.value), 1)) : c("", !0),
            R.value !== null && !$.value ? (s(), o("p", B1, " Found " + n(R.value) + " model files ", 1)) : c("", !0)
          ])) : c("", !0),
          z.value ? (s(), o("div", O1, [
            e("div", F1, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${K.value.progress}%` })
              }, null, 4)
            ]),
            e("p", V1, n(K.value.message), 1)
          ])) : c("", !0)
        ])) : c("", !0),
        b.value === 2 ? (s(), o("div", A1, [
          A[22] || (A[22] = e("p", { class: "wizard-intro" }, " Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows. ", -1)),
          e("div", W1, [
            A[17] || (A[17] = e("label", { class: "form-label" }, "Environment Name", -1)),
            Be(e("input", {
              "onUpdate:modelValue": A[3] || (A[3] = (Z) => O.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-new-env"
            }, null, 512), [
              [Nt, O.value]
            ])
          ]),
          e("div", G1, [
            A[18] || (A[18] = e("label", { class: "form-label" }, "Python Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": A[4] || (A[4] = (Z) => I.value = Z),
              class: "form-select"
            }, [
              (s(!0), o(G, null, se(he($s), (Z) => (s(), o("option", {
                key: Z,
                value: Z
              }, n(Z), 9, j1))), 128))
            ], 512), [
              [bt, I.value]
            ])
          ]),
          e("div", H1, [
            A[19] || (A[19] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": A[5] || (A[5] = (Z) => B.value = Z),
              class: "form-select",
              disabled: x.value
            }, [
              (s(!0), o(G, null, se(D.value, (Z) => (s(), o("option", {
                key: Z.tag_name,
                value: Z.tag_name
              }, n(Z.name), 9, K1))), 128))
            ], 8, q1), [
              [bt, B.value]
            ])
          ]),
          e("div", Y1, [
            A[20] || (A[20] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Be(e("select", {
              "onUpdate:modelValue": A[6] || (A[6] = (Z) => W.value = Z),
              class: "form-select"
            }, [
              (s(!0), o(G, null, se(he(xs), (Z) => (s(), o("option", {
                key: Z,
                value: Z
              }, n(Z) + n(Z === "auto" ? " (detect GPU)" : ""), 9, X1))), 128))
            ], 512), [
              [bt, W.value]
            ])
          ]),
          e("div", Q1, [
            e("label", Z1, [
              Be(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[7] || (A[7] = (Z) => F.value = Z),
                checked: ""
              }, null, 512), [
                [Jt, F.value]
              ]),
              A[21] || (A[21] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ]),
          ee.value ? (s(), o("div", J1, [
            e("div", ey, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${ae.value.progress}%` })
              }, null, 4)
            ]),
            e("p", ty, n(ae.value.message), 1)
          ])) : c("", !0),
          T.value ? (s(), o("div", sy, n(T.value), 1)) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        b.value === 1 ? (s(), S(re, {
          key: 0,
          variant: "primary",
          disabled: !E.value || z.value,
          onClick: $e
        }, {
          default: i(() => [
            w(n(z.value ? "Creating..." : "Next"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : b.value === 2 ? (s(), o(G, { key: 1 }, [
          g(re, {
            variant: "secondary",
            disabled: ee.value,
            onClick: A[8] || (A[8] = (Z) => b.value = 1)
          }, {
            default: i(() => [...A[23] || (A[23] = [
              w(" Back ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          g(re, {
            variant: "primary",
            disabled: !ne.value || ee.value,
            onClick: Re
          }, {
            default: i(() => [
              w(n(ee.value ? "Creating..." : "Create & Switch"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 64)) : c("", !0)
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), ly = /* @__PURE__ */ X(ny, [["__scopeId", "data-v-7b3b8364"]]), iy = { class: "comfygit-panel" }, ry = { class: "panel-header" }, dy = { class: "header-left" }, cy = {
  key: 0,
  class: "header-info"
}, uy = { class: "header-actions" }, my = { class: "env-switcher" }, vy = {
  key: 0,
  class: "header-info"
}, fy = { class: "branch-name" }, gy = { class: "panel-main" }, py = { class: "sidebar" }, hy = { class: "sidebar-section" }, yy = { class: "sidebar-section" }, wy = { class: "sidebar-section" }, ky = { class: "content-area" }, by = {
  key: 0,
  class: "error-message"
}, _y = {
  key: 1,
  class: "loading"
}, $y = {
  key: 4,
  class: "dialog-overlay"
}, Cy = { class: "dialog-content create-progress-dialog" }, xy = { class: "dialog-body create-progress-body" }, Sy = { class: "create-progress-message" }, Iy = { class: "dialog-content env-selector-dialog" }, Ey = { class: "dialog-header" }, My = { class: "dialog-body" }, zy = { class: "env-list" }, Ly = { class: "env-info" }, Dy = { class: "env-name-row" }, Ry = { class: "env-indicator" }, Ny = { class: "env-name" }, Ty = {
  key: 0,
  class: "env-branch"
}, Uy = {
  key: 1,
  class: "current-label"
}, Py = { class: "env-stats" }, By = ["onClick"], Oy = { class: "toast-container" }, Fy = { class: "toast-icon" }, Vy = { class: "toast-message" }, Ay = /* @__PURE__ */ Y({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const a = r, {
      getStatus: d,
      getHistory: p,
      getBranches: v,
      checkout: y,
      createBranch: m,
      switchBranch: l,
      deleteBranch: u,
      getEnvironments: b,
      switchEnvironment: h,
      getSwitchProgress: k,
      createEnvironment: C,
      getCreateProgress: L,
      deleteEnvironment: $,
      syncEnvironmentManually: f,
      getSetupStatus: R
    } = De(), O = ys(), I = _(null), B = _([]), W = _([]), F = _([]), T = U(() => F.value.find((V) => V.is_current)), D = _(null), x = _(!1), z = U(() => {
      var V;
      return ((V = D.value) == null ? void 0 : V.state) || "managed";
    }), ee = _(!1), K = _(null), ae = _(null), me = _(!1), de = _(null), J = _(null), P = _(!1), E = _(!1), ne = _(""), q = _({ state: "idle", progress: 0, message: "" });
    let Ie = null, $e = null;
    const Re = _(!1), Ge = _({ state: "idle", message: "" }), oe = _(null);
    let A = null;
    const Z = _("status"), be = _("this-env");
    function ie(V, M) {
      Z.value = V, be.value = M;
    }
    function ut(V) {
      const ce = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[V];
      ce && ie(ce.view, ce.section);
    }
    function xt() {
      ie("branches", "this-env");
    }
    function St() {
      a("close"), setTimeout(() => {
        var M;
        const V = document.querySelectorAll("button.comfyui-button");
        for (const ce of V)
          if (((M = ce.textContent) == null ? void 0 : M.trim()) === "Manager") {
            ce.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const _e = _(null), rt = _(!1), Je = _(!1), Ye = _([]);
    let It = 0;
    function fe(V, M = "info", ce = 3e3) {
      const Se = ++It;
      return Ye.value.push({ id: Se, message: V, type: M }), ce > 0 && setTimeout(() => {
        Ye.value = Ye.value.filter((Ue) => Ue.id !== Se);
      }, ce), Se;
    }
    function We(V) {
      Ye.value = Ye.value.filter((M) => M.id !== V);
    }
    function Q(V) {
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
    const we = U(() => {
      if (!I.value) return "neutral";
      const V = I.value.workflows, M = V.new.length > 0 || V.modified.length > 0 || V.deleted.length > 0 || I.value.has_changes;
      return I.value.comparison.is_synced ? M ? "warning" : "success" : "error";
    });
    U(() => I.value ? we.value === "success" ? "All synced" : we.value === "warning" ? "Uncommitted changes" : we.value === "error" ? "Not synced" : "" : "");
    async function Ce() {
      ee.value = !0, K.value = null;
      try {
        const [V, M, ce, Se] = await Promise.all([
          d(!0),
          p(),
          v(),
          b()
        ]);
        I.value = V, B.value = M.commits, W.value = ce.branches, F.value = Se, a("statusUpdate", V), de.value && await de.value.loadWorkflows(!0);
      } catch (V) {
        K.value = V instanceof Error ? V.message : "Failed to load status", I.value = null, B.value = [], W.value = [];
      } finally {
        ee.value = !1;
      }
    }
    function yt(V) {
      ae.value = V;
    }
    async function mt(V) {
      var ce;
      ae.value = null;
      const M = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      _e.value = {
        title: M ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: M ? "You have uncommitted changes that will be lost." : `Checkout commit ${V.short_hash || ((ce = V.hash) == null ? void 0 : ce.slice(0, 7))}?`,
        details: M ? rs() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: M ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: M,
        onConfirm: async () => {
          var Pe;
          _e.value = null, ve();
          const Se = fe(`Checking out ${V.short_hash || ((Pe = V.hash) == null ? void 0 : Pe.slice(0, 7))}...`, "info", 0), Ue = await y(V.hash, M);
          We(Se), Ue.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Ue.message || "Checkout failed", "error");
        }
      };
    }
    async function Kt(V) {
      const M = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      _e.value = {
        title: M ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: M ? "You have uncommitted changes." : `Switch to branch "${V}"?`,
        details: M ? rs() : void 0,
        warning: M ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: M ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          _e.value = null, ve();
          const ce = fe(`Switching to ${V}...`, "info", 0), Se = await l(V, M);
          We(ce), Se.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Se.message || "Branch switch failed", "error");
        }
      };
    }
    async function j(V) {
      const M = fe(`Creating branch ${V}...`, "info", 0), ce = await m(V);
      We(M), ce.status === "success" ? (fe(`Branch "${V}" created`, "success"), await Ce()) : fe(ce.message || "Failed to create branch", "error");
    }
    async function N(V, M = !1) {
      const ce = async (Se) => {
        var Pe;
        const Ue = fe(`Deleting branch ${V}...`, "info", 0);
        try {
          const et = await u(V, Se);
          We(Ue), et.status === "success" ? (fe(`Branch "${V}" deleted`, "success"), await Ce()) : (Pe = et.message) != null && Pe.includes("not fully merged") ? _e.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${V}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              _e.value = null, await ce(!0);
            }
          } : fe(et.message || "Failed to delete branch", "error");
        } catch (et) {
          We(Ue);
          const Et = et instanceof Error ? et.message : "Failed to delete branch";
          Et.includes("not fully merged") ? _e.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${V}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              _e.value = null, await ce(!0);
            }
          } : fe(Et, "error");
        }
      };
      _e.value = {
        title: "Delete Branch",
        message: `Delete branch "${V}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          _e.value = null, await ce(M);
        }
      };
    }
    async function H(V) {
      ae.value = null;
      const M = prompt("Enter branch name:");
      if (M) {
        const ce = fe(`Creating branch ${M}...`, "info", 0), Se = await m(M, V.hash);
        We(ce), Se.status === "success" ? (fe(`Branch "${M}" created from ${V.short_hash}`, "success"), await Ce()) : fe(Se.message || "Failed to create branch", "error");
      }
    }
    function ve() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Le() {
      _e.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var V;
          _e.value = null, ve(), fe("Restarting environment...", "info");
          try {
            (V = window.app) != null && V.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function dt() {
      _e.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var V;
          _e.value = null, fe("Stopping environment...", "info");
          try {
            (V = window.app) != null && V.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Xe(V) {
      me.value = !1, ne.value = V, P.value = !0;
    }
    async function Ot() {
      P.value = !1, E.value = !0, ve(), q.value = {
        progress: 10,
        state: vt(10),
        message: ft(10)
      };
      try {
        await h(ne.value), Ds(), Rs();
      } catch (V) {
        gt(), E.value = !1, fe(`Failed to initiate switch: ${V instanceof Error ? V.message : "Unknown error"}`, "error"), q.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function vt(V) {
      return V >= 100 ? "complete" : V >= 80 ? "validating" : V >= 60 ? "starting" : V >= 30 ? "syncing" : "preparing";
    }
    function ft(V) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[vt(V)] || "";
    }
    function Ds() {
      if ($e) return;
      let V = 10;
      const M = 60, ce = 5e3, Se = 100, Ue = (M - V) / (ce / Se);
      $e = window.setInterval(() => {
        if (V += Ue, V >= M && (V = M, gt()), q.value.progress < M) {
          const Pe = Math.floor(V);
          q.value = {
            progress: Pe,
            state: vt(Pe),
            message: ft(Pe)
          };
        }
      }, Se);
    }
    function gt() {
      $e && (clearInterval($e), $e = null);
    }
    function Rs() {
      Ie || (Ie = window.setInterval(async () => {
        try {
          let V = await O.getStatus();
          if ((!V || V.state === "idle") && (V = await k()), !V)
            return;
          const M = V.progress || 0;
          M >= 60 && gt();
          const ce = Math.max(M, q.value.progress), Se = V.state && V.state !== "idle" && V.state !== "unknown", Ue = Se ? V.state : vt(ce), Pe = Se && V.message || ft(ce);
          q.value = {
            state: Ue,
            progress: ce,
            message: Pe
          }, V.state === "complete" ? (gt(), Yt(), E.value = !1, fe(`✓ Switched to ${ne.value}`, "success"), await Ce(), ne.value = "") : V.state === "rolled_back" ? (gt(), Yt(), E.value = !1, fe("Switch failed, restored previous environment", "warning"), ne.value = "") : V.state === "critical_failure" && (gt(), Yt(), E.value = !1, fe(`Critical error during switch: ${V.message}`, "error"), ne.value = "");
        } catch (V) {
          console.error("Failed to poll switch progress:", V);
        }
      }, 1e3));
    }
    function Yt() {
      gt(), Ie && (clearInterval(Ie), Ie = null);
    }
    function Ns() {
      P.value = !1, ne.value = "";
    }
    async function Ts() {
      rt.value = !1, await Ce(), fe("✓ Changes committed", "success");
    }
    async function Us() {
      Je.value = !1;
      const V = fe("Syncing environment...", "info", 0);
      try {
        const M = await f("skip", !0);
        if (We(V), M.status === "success") {
          const ce = [];
          M.nodes_installed.length && ce.push(`${M.nodes_installed.length} installed`), M.nodes_removed.length && ce.push(`${M.nodes_removed.length} removed`);
          const Se = ce.length ? `: ${ce.join(", ")}` : "";
          fe(`✓ Environment synced${Se}`, "success"), await Ce();
        } else {
          const ce = M.errors.length ? M.errors.join("; ") : M.message;
          fe(`Sync failed: ${ce}`, "error");
        }
      } catch (M) {
        We(V), fe(`Sync error: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
      }
    }
    async function Ps(V) {
      oe.value = V, Re.value = !0, Ge.value = { state: "creating", message: `Creating environment '${V.name}'...` };
      try {
        const M = await C(V);
        M.status === "started" ? Bs() : M.status === "error" && (Re.value = !1, fe(`Failed to create environment: ${M.message}. Check debug logs for details.`, "error"), oe.value = null);
      } catch (M) {
        Re.value = !1, fe(`Error creating environment: ${M instanceof Error ? M.message : "Unknown error"}. Check debug logs.`, "error"), oe.value = null;
      }
    }
    function Bs() {
      A || (A = window.setInterval(async () => {
        var V;
        try {
          const M = await L();
          Ge.value = { state: M.state, message: M.message }, M.state === "complete" ? (is(), Re.value = !1, fe(`✓ Environment '${M.environment_name}' created`, "success"), await Ce(), J.value && await J.value.loadEnvironments(), (V = oe.value) != null && V.switch_after && M.environment_name && await Xe(M.environment_name), oe.value = null) : M.state === "error" && (is(), Re.value = !1, fe(`Failed to create environment: ${M.error || M.message}. Check debug logs.`, "error"), oe.value = null);
        } catch (M) {
          console.error("Failed to poll create progress:", M);
        }
      }, 2e3));
    }
    function is() {
      A && (clearInterval(A), A = null);
    }
    async function Os(V) {
      var M;
      if (((M = T.value) == null ? void 0 : M.name) === V) {
        fe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      _e.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${V}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          _e.value = null;
          try {
            const ce = await $(V);
            ce.status === "success" ? (fe(`Environment "${V}" deleted`, "success"), await Ce(), J.value && await J.value.loadEnvironments()) : fe(ce.message || "Failed to delete environment", "error");
          } catch (ce) {
            fe(`Error deleting environment: ${ce instanceof Error ? ce.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Fs(V) {
      x.value = !1;
      try {
        D.value = await R();
      } catch {
      }
      await Xe(V);
    }
    function Vs() {
      ie("environments", "all-envs"), setTimeout(() => {
        var V;
        (V = J.value) == null || V.openCreateModal();
      }, 100);
    }
    function rs() {
      if (!I.value) return [];
      const V = [], M = I.value.workflows;
      return M.new.length && V.push(`${M.new.length} new workflow(s)`), M.modified.length && V.push(`${M.modified.length} modified workflow(s)`), M.deleted.length && V.push(`${M.deleted.length} deleted workflow(s)`), V;
    }
    return ze(async () => {
      try {
        if (D.value = await R(), D.value.state === "no_workspace") {
          x.value = !0;
          return;
        }
      } catch (V) {
        console.warn("Setup status check failed, proceeding normally:", V);
      }
      await Ce();
    }), (V, M) => {
      var ce, Se, Ue, Pe, et, Et;
      return s(), o("div", iy, [
        e("div", ry, [
          e("div", dy, [
            M[30] || (M[30] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            I.value ? (s(), o("div", cy)) : c("", !0)
          ]),
          e("div", uy, [
            e("button", {
              class: le(["icon-btn", { spinning: ee.value }]),
              onClick: Ce,
              title: "Refresh"
            }, [...M[31] || (M[31] = [
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
              onClick: M[0] || (M[0] = (ue) => a("close")),
              title: "Close"
            }, [...M[32] || (M[32] = [
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
        e("div", my, [
          e("div", { class: "env-switcher-header" }, [
            M[33] || (M[33] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Le
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: dt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: M[1] || (M[1] = (ue) => ie("environments", "all-envs"))
          }, [
            I.value ? (s(), o("div", vy, [
              e("span", null, n(((ce = T.value) == null ? void 0 : ce.name) || ((Se = I.value) == null ? void 0 : Se.environment) || "Loading..."), 1),
              e("span", fy, "(" + n(I.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            M[34] || (M[34] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", gy, [
          e("div", py, [
            e("div", hy, [
              M[35] || (M[35] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "status" && be.value === "this-env" }]),
                onClick: M[2] || (M[2] = (ue) => ie("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "workflows" }]),
                onClick: M[3] || (M[3] = (ue) => ie("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "models-env" }]),
                onClick: M[4] || (M[4] = (ue) => ie("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "branches" }]),
                onClick: M[5] || (M[5] = (ue) => ie("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "history" }]),
                onClick: M[6] || (M[6] = (ue) => ie("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "nodes" }]),
                onClick: M[7] || (M[7] = (ue) => ie("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "debug-env" }]),
                onClick: M[8] || (M[8] = (ue) => ie("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            M[38] || (M[38] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", yy, [
              M[36] || (M[36] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "environments" }]),
                onClick: M[9] || (M[9] = (ue) => ie("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "model-index" }]),
                onClick: M[10] || (M[10] = (ue) => ie("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "settings" }]),
                onClick: M[11] || (M[11] = (ue) => ie("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "debug-workspace" }]),
                onClick: M[12] || (M[12] = (ue) => ie("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            M[39] || (M[39] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", wy, [
              M[37] || (M[37] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "export" }]),
                onClick: M[13] || (M[13] = (ue) => ie("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "import" }]),
                onClick: M[14] || (M[14] = (ue) => ie("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "remotes" }]),
                onClick: M[15] || (M[15] = (ue) => ie("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", ky, [
            K.value ? (s(), o("div", by, n(K.value), 1)) : !I.value && Z.value === "status" ? (s(), o("div", _y, " Loading status... ")) : (s(), o(G, { key: 2 }, [
              Z.value === "status" ? (s(), S(yn, {
                key: 0,
                status: I.value,
                "setup-state": z.value,
                onSwitchBranch: xt,
                onCommitChanges: M[16] || (M[16] = (ue) => rt.value = !0),
                onSyncEnvironment: M[17] || (M[17] = (ue) => Je.value = !0),
                onViewWorkflows: M[18] || (M[18] = (ue) => ie("workflows", "this-env")),
                onViewHistory: M[19] || (M[19] = (ue) => ie("history", "this-env")),
                onViewDebug: M[20] || (M[20] = (ue) => ie("debug-env", "this-env")),
                onStartSetup: M[21] || (M[21] = (ue) => x.value = !0),
                onViewEnvironments: M[22] || (M[22] = (ue) => ie("environments", "all-envs")),
                onCreateEnvironment: Vs
              }, null, 8, ["status", "setup-state"])) : Z.value === "workflows" ? (s(), S(Au, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: de,
                onRefresh: Ce
              }, null, 512)) : Z.value === "models-env" ? (s(), S(Cm, {
                key: 2,
                onNavigate: ut
              })) : Z.value === "branches" ? (s(), S(Rn, {
                key: 3,
                branches: W.value,
                current: ((Ue = I.value) == null ? void 0 : Ue.branch) || null,
                onSwitch: Kt,
                onCreate: j,
                onDelete: N
              }, null, 8, ["branches", "current"])) : Z.value === "history" ? (s(), S(Gn, {
                key: 4,
                commits: B.value,
                onSelect: yt,
                onCheckout: mt
              }, null, 8, ["commits"])) : Z.value === "nodes" ? (s(), S(mv, {
                key: 5,
                onOpenNodeManager: St
              })) : Z.value === "debug-env" ? (s(), S(mf, { key: 6 })) : Z.value === "environments" ? (s(), S(Zf, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: J,
                onSwitch: Xe,
                onCreate: Ps,
                onDelete: Os
              }, null, 512)) : Z.value === "model-index" ? (s(), S(Gm, {
                key: 8,
                onRefresh: Ce
              })) : Z.value === "settings" ? (s(), S(rf, { key: 9 })) : Z.value === "debug-workspace" ? (s(), S(cf, { key: 10 })) : Z.value === "export" ? (s(), S(rg, { key: 11 })) : Z.value === "import" ? (s(), S(Up, { key: 12 })) : Z.value === "remotes" ? (s(), S(Av, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        ae.value ? (s(), S(eh, {
          key: 0,
          commit: ae.value,
          onClose: M[23] || (M[23] = (ue) => ae.value = null),
          onCheckout: mt,
          onCreateBranch: H
        }, null, 8, ["commit"])) : c("", !0),
        _e.value ? (s(), S(nh, {
          key: 1,
          title: _e.value.title,
          message: _e.value.message,
          details: _e.value.details,
          warning: _e.value.warning,
          confirmLabel: _e.value.confirmLabel,
          cancelLabel: _e.value.cancelLabel,
          secondaryLabel: _e.value.secondaryLabel,
          secondaryAction: _e.value.secondaryAction,
          destructive: _e.value.destructive,
          onConfirm: _e.value.onConfirm,
          onCancel: M[24] || (M[24] = (ue) => _e.value = null),
          onSecondary: _e.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        g(t1, {
          show: P.value,
          "from-environment": ((Pe = T.value) == null ? void 0 : Pe.name) || "unknown",
          "to-environment": ne.value,
          onConfirm: Ot,
          onClose: Ns
        }, null, 8, ["show", "from-environment", "to-environment"]),
        rt.value && I.value ? (s(), S(Is, {
          key: 2,
          status: I.value,
          "as-modal": !0,
          onClose: M[25] || (M[25] = (ue) => rt.value = !1),
          onCommitted: Ts
        }, null, 8, ["status"])) : c("", !0),
        Je.value && I.value ? (s(), S(C1, {
          key: 3,
          show: Je.value,
          "mismatch-details": {
            missing_nodes: I.value.comparison.missing_nodes,
            extra_nodes: I.value.comparison.extra_nodes
          },
          onConfirm: Us,
          onClose: M[26] || (M[26] = (ue) => Je.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g(g1, {
          show: E.value,
          state: q.value.state,
          progress: q.value.progress,
          message: q.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Re.value ? (s(), o("div", $y, [
          e("div", Cy, [
            M[42] || (M[42] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", xy, [
              M[40] || (M[40] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", Sy, n(Ge.value.message), 1),
              M[41] || (M[41] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        me.value ? (s(), o("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: M[28] || (M[28] = Ee((ue) => me.value = !1, ["self"]))
        }, [
          e("div", Iy, [
            e("div", Ey, [
              M[44] || (M[44] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: M[27] || (M[27] = (ue) => me.value = !1)
              }, [...M[43] || (M[43] = [
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
            e("div", My, [
              M[45] || (M[45] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", zy, [
                (s(!0), o(G, null, se(F.value, (ue) => (s(), o("div", {
                  key: ue.name,
                  class: le(["env-item", { current: ue.is_current }])
                }, [
                  e("div", Ly, [
                    e("div", Dy, [
                      e("span", Ry, n(ue.is_current ? "●" : "○"), 1),
                      e("span", Ny, n(ue.name), 1),
                      ue.current_branch ? (s(), o("span", Ty, "(" + n(ue.current_branch) + ")", 1)) : c("", !0),
                      ue.is_current ? (s(), o("span", Uy, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Py, n(ue.workflow_count) + " workflows • " + n(ue.node_count) + " nodes ", 1)
                  ]),
                  ue.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Yw) => Xe(ue.name)
                  }, " SWITCH ", 8, By))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        x.value ? (s(), S(ly, {
          key: 6,
          "default-path": ((et = D.value) == null ? void 0 : et.default_path) || "~/comfygit",
          "detected-models-dir": ((Et = D.value) == null ? void 0 : Et.detected_models_dir) || null,
          onComplete: Fs,
          onClose: M[29] || (M[29] = (ue) => x.value = !1)
        }, null, 8, ["default-path", "detected-models-dir"])) : c("", !0),
        e("div", Oy, [
          g(Hs, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(G, null, se(Ye.value, (ue) => (s(), o("div", {
                key: ue.id,
                class: le(["toast", ue.type])
              }, [
                e("span", Fy, n(Q(ue.type)), 1),
                e("span", Vy, n(ue.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Wy = /* @__PURE__ */ X(Ay, [["__scopeId", "data-v-9dd35ef5"]]), Gy = { class: "item-header" }, jy = { class: "item-info" }, Hy = { class: "filename" }, qy = { class: "metadata" }, Ky = { class: "size" }, Yy = {
  key: 0,
  class: "type"
}, Xy = { class: "item-actions" }, Qy = {
  key: 0,
  class: "progress-section"
}, Zy = { class: "progress-bar" }, Jy = { class: "progress-stats" }, ew = { class: "downloaded" }, tw = { class: "speed" }, sw = {
  key: 0,
  class: "eta"
}, ow = {
  key: 1,
  class: "status-msg paused"
}, aw = {
  key: 2,
  class: "status-msg queued"
}, nw = {
  key: 3,
  class: "status-msg completed"
}, lw = {
  key: 4,
  class: "status-msg failed"
}, iw = {
  key: 0,
  class: "retries"
}, rw = /* @__PURE__ */ Y({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: r }) {
    const a = r;
    function d(y) {
      if (y === 0) return "?";
      const m = y / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(y / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(y) {
      return y === 0 ? "-" : `${(y / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(y) {
      if (y < 60) return `${Math.round(y)}s`;
      const m = Math.floor(y / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (y, m) => (s(), o("div", {
      class: le(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Gy, [
        e("div", jy, [
          e("div", Hy, n(t.item.filename), 1),
          e("div", qy, [
            e("span", Ky, n(d(t.item.size)), 1),
            t.item.type ? (s(), o("span", Yy, n(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Xy, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (l) => a("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (l) => a("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (l) => a("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (l) => a("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Qy, [
        e("div", Zy, [
          e("div", {
            class: "progress-fill",
            style: qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Jy, [
          e("span", ew, n(d(t.item.downloaded)) + " / " + n(d(t.item.size)), 1),
          e("span", tw, n(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", sw, n(v(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", ow, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", aw, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", nw, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", lw, [
        w(" ✗ " + n(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", iw, "(" + n(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ X(rw, [["__scopeId", "data-v-2110df65"]]), dw = { class: "queue-title" }, cw = { class: "count" }, uw = { class: "queue-actions" }, mw = { class: "action-label" }, vw = {
  key: 0,
  class: "overall-progress"
}, fw = { class: "progress-bar" }, gw = {
  key: 0,
  class: "current-mini"
}, pw = { class: "filename" }, hw = { class: "speed" }, yw = {
  key: 1,
  class: "queue-content"
}, ww = {
  key: 0,
  class: "section"
}, kw = {
  key: 1,
  class: "section"
}, bw = { class: "section-header" }, _w = { class: "section-label paused" }, $w = { class: "items-list" }, Cw = {
  key: 2,
  class: "section"
}, xw = { class: "section-header" }, Sw = { class: "section-label" }, Iw = { class: "items-list" }, Ew = {
  key: 3,
  class: "section"
}, Mw = { class: "section-header" }, zw = { class: "section-label" }, Lw = { class: "items-list" }, Dw = {
  key: 4,
  class: "section"
}, Rw = { class: "section-header" }, Nw = { class: "section-label failed" }, Tw = { class: "items-list" }, Uw = /* @__PURE__ */ Y({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: r,
      currentDownload: a,
      queuedItems: d,
      completedItems: p,
      failedItems: v,
      pausedItems: y,
      hasItems: m,
      activeCount: l,
      cancelDownload: u,
      retryDownload: b,
      resumeDownload: h,
      resumeAllPaused: k,
      removeItem: C,
      clearCompleted: L
    } = Bt(), $ = _(!1);
    let f = null;
    Ht(
      () => ({
        active: l.value,
        failed: v.value.length,
        paused: y.value.length,
        completed: p.value.length
      }),
      (B, W) => {
        f && (clearTimeout(f), f = null);
        const F = B.active === 0 && B.failed === 0 && B.paused === 0 && B.completed > 0, T = W && (W.active > 0 || W.paused > 0);
        F && T && (f = setTimeout(() => {
          L(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const R = U(() => {
      var F;
      if (r.items.length === 0) return 0;
      const B = p.value.length, W = ((F = a.value) == null ? void 0 : F.progress) || 0;
      return Math.round((B + W / 100) / r.items.length * 100);
    });
    function O(B) {
      u(B);
    }
    function I(B) {
      return B === 0 ? "" : `${(B / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (B, W) => (s(), S(Te, { to: "body" }, [
      he(m) ? (s(), o("div", {
        key: 0,
        class: le(["model-download-queue", { minimized: !$.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: W[0] || (W[0] = (F) => $.value = !$.value)
        }, [
          e("div", dw, [
            W[4] || (W[4] = e("span", { class: "icon" }, "↓", -1)),
            W[5] || (W[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", cw, "(" + n(he(l)) + "/" + n(he(r).items.length) + ")", 1)
          ]),
          e("div", uw, [
            e("span", mw, n($.value ? "minimize" : "expand"), 1)
          ])
        ]),
        $.value ? (s(), o("div", yw, [
          he(a) ? (s(), o("div", ww, [
            W[6] || (W[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(Lt, {
              item: he(a),
              onCancel: W[1] || (W[1] = (F) => O(he(a).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          he(y).length > 0 ? (s(), o("div", kw, [
            e("div", bw, [
              e("span", _w, "Paused (" + n(he(y).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: W[2] || (W[2] = //@ts-ignore
                (...F) => he(k) && he(k)(...F))
              }, "Resume All")
            ]),
            e("div", $w, [
              (s(!0), o(G, null, se(he(y), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onResume: (T) => he(h)(F.id),
                onRemove: (T) => he(C)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          he(d).length > 0 ? (s(), o("div", Cw, [
            e("div", xw, [
              e("span", Sw, "Queued (" + n(he(d).length) + ")", 1)
            ]),
            e("div", Iw, [
              (s(!0), o(G, null, se(he(d), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onCancel: (T) => O(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          he(p).length > 0 ? (s(), o("div", Ew, [
            e("div", Mw, [
              e("span", zw, "Completed (" + n(he(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: W[3] || (W[3] = //@ts-ignore
                (...F) => he(L) && he(L)(...F))
              }, "Clear")
            ]),
            e("div", Lw, [
              (s(!0), o(G, null, se(he(p).slice(0, 3), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onRemove: (T) => he(C)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          he(v).length > 0 ? (s(), o("div", Dw, [
            e("div", Rw, [
              e("span", Nw, "Failed (" + n(he(v).length) + ")", 1)
            ]),
            e("div", Tw, [
              (s(!0), o(G, null, se(he(v), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onRetry: (T) => he(b)(F.id),
                onRemove: (T) => he(C)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", vw, [
          e("div", fw, [
            e("div", {
              class: "progress-fill",
              style: qe({ width: `${R.value}%` })
            }, null, 4)
          ]),
          he(a) ? (s(), o("div", gw, [
            e("span", pw, n(he(a).filename), 1),
            e("span", hw, n(I(he(a).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), Pw = /* @__PURE__ */ X(Uw, [["__scopeId", "data-v-60751cfa"]]), Bw = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Ow = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Fw = {
  comfy: Bw,
  phosphor: Ow
}, ns = "comfy", Es = "comfygit-theme";
let pt = null, Ms = ns;
function Vw() {
  try {
    const t = localStorage.getItem(Es);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ns;
}
function zs(t = ns) {
  pt && pt.remove(), pt = document.createElement("style"), pt.id = "comfygit-theme-styles", pt.setAttribute("data-theme", t), pt.textContent = Fw[t], document.head.appendChild(pt), document.body.setAttribute("data-comfygit-theme", t), Ms = t;
  try {
    localStorage.setItem(Es, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Aw() {
  return Ms;
}
function Ww(t) {
  zs(t);
}
const ls = document.createElement("link");
ls.rel = "stylesheet";
ls.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ls);
const Gw = Vw();
zs(Gw);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Ww(t);
  },
  getTheme: () => {
    const t = Aw();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let je = null, Ve = null, Ut = null, Dt = null, vs = null;
const _t = _(null);
async function Wt() {
  var t;
  if (!((t = kt) != null && t.api)) return null;
  try {
    const r = await kt.api.fetchApi("/v2/comfygit/status");
    r.ok && (_t.value = await r.json());
  } catch {
  }
}
function jw() {
  if (!_t.value) return !1;
  const t = _t.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || _t.value.has_changes;
}
function Hw() {
  je && je.remove(), je = document.createElement("div"), je.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", je.appendChild(t), je.addEventListener("click", (d) => {
    d.target === je && Zt();
  });
  const r = (d) => {
    d.key === "Escape" && (Zt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), os({
    render: () => as(Wy, {
      onClose: Zt,
      onStatusUpdate: (d) => {
        _t.value = d, Pt();
      }
    })
  }).mount(t), document.body.appendChild(je);
}
function Zt() {
  je && (je.remove(), je = null);
}
function qw(t) {
  Rt(), Ve = document.createElement("div"), Ve.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  Ve.style.position = "fixed", Ve.style.top = `${r.bottom + 8}px`, Ve.style.right = `${window.innerWidth - r.right}px`, Ve.style.zIndex = "10001";
  const a = (p) => {
    Ve && !Ve.contains(p.target) && p.target !== t && (Rt(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const d = (p) => {
    p.key === "Escape" && (Rt(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Ut = os({
    render: () => as(Is, {
      status: _t.value,
      onClose: Rt,
      onCommitted: () => {
        Rt(), Wt().then(Pt);
      }
    })
  }), Ut.mount(Ve), document.body.appendChild(Ve);
}
function Rt() {
  Ut && (Ut.unmount(), Ut = null), Ve && (Ve.remove(), Ve = null);
}
function Kw() {
  Dt || (Dt = document.createElement("div"), Dt.className = "comfygit-download-queue-root", vs = os({
    render: () => as(Pw)
  }), vs.mount(Dt), document.body.appendChild(Dt), console.log("[ComfyGit] Model download queue mounted"));
}
let st = null;
function Pt() {
  if (!st) return;
  const t = st.querySelector(".commit-indicator");
  t && (t.style.display = jw() ? "block" : "none");
}
const Ls = document.createElement("style");
Ls.textContent = `
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
document.head.appendChild(Ls);
kt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = Hw, st = document.createElement("button"), st.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", st.innerHTML = 'Commit <span class="commit-indicator"></span>', st.title = "Quick Commit", st.onclick = () => qw(st), t.appendChild(r), t.appendChild(st), (v = (p = kt.menu) == null ? void 0 : p.settingsGroup) != null && v.element && (kt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Kw();
    const { loadPendingDownloads: a } = Bt();
    a(), await Wt(), Pt(), setInterval(async () => {
      await Wt(), Pt();
    }, 3e4);
    const d = kt.api;
    if (d) {
      let y = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((u) => {
          (u.startsWith("workflow:") || u.startsWith("Comfy.OpenWorkflowsPaths:") || u.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(u);
        }), window.location.reload();
      }, m = function() {
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
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => y(), u.appendChild(h);
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
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => u.remove(), u.appendChild(k), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      d.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: b, workflow_name: h } = u.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${h}`), await Wt(), Pt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      d.addEventListener("status", async (u) => {
        const b = u.detail != null;
        b && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), y()) : m()), l = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
