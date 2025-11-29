import { app as kt } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as ge, createBlock as S, resolveDynamicComponent as ss, normalizeClass as le, withCtx as i, toDisplayString as n, createVNode as g, createTextVNode as w, computed as U, Fragment as G, renderList as te, normalizeStyle as qe, ref as _, onMounted as ze, watch as Ht, Teleport as Te, withModifiers as Ee, Transition as Vs, createSlots as qt, withKeys as ct, onUnmounted as As, reactive as fs, readonly as Ws, unref as he, withDirectives as Be, vModelText as Nt, nextTick as Gs, vModelSelect as bt, vModelCheckbox as Jt, TransitionGroup as js, createApp as os, h as as } from "vue";
const Hs = { class: "panel-layout" }, qs = {
  key: 0,
  class: "panel-layout-header"
}, Ks = {
  key: 1,
  class: "panel-layout-search"
}, Ys = { class: "panel-layout-content" }, Xs = {
  key: 2,
  class: "panel-layout-footer"
}, Qs = /* @__PURE__ */ Y({
  __name: "PanelLayout",
  setup(t) {
    return (r, a) => (s(), o("div", Hs, [
      r.$slots.header ? (s(), o("div", qs, [
        ge(r.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      r.$slots.search ? (s(), o("div", Ks, [
        ge(r.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", Ys, [
        ge(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (s(), o("div", Xs, [
        ge(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), X = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [d, p] of r)
    a[d] = p;
  return a;
}, Oe = /* @__PURE__ */ X(Qs, [["__scopeId", "data-v-21565df9"]]), Zs = {
  key: 0,
  class: "panel-title-prefix"
}, Js = {
  key: 1,
  class: "panel-title-prefix-theme"
}, eo = /* @__PURE__ */ Y({
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
        t.showPrefix ? (s(), o("span", Zs, n(t.prefix), 1)) : (s(), o("span", Js)),
        ge(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), to = /* @__PURE__ */ X(eo, [["__scopeId", "data-v-c3875efc"]]), so = ["title"], oo = ["width", "height"], ao = /* @__PURE__ */ Y({
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
      ])], 8, oo))
    ], 8, so));
  }
}), gs = /* @__PURE__ */ X(ao, [["__scopeId", "data-v-6fc7f16d"]]), no = { class: "header-left" }, lo = {
  key: 0,
  class: "header-actions"
}, io = /* @__PURE__ */ Y({
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
      e("div", no, [
        g(to, { "show-prefix": t.showPrefix }, {
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
      r.$slots.actions ? (s(), o("div", lo, [
        ge(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ X(io, [["__scopeId", "data-v-55a62cd6"]]), ro = {
  key: 0,
  class: "section-title-count"
}, co = {
  key: 1,
  class: "section-title-icon"
}, uo = /* @__PURE__ */ Y({
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
        t.count !== void 0 ? (s(), o("span", ro, "(" + n(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", co, n(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ae = /* @__PURE__ */ X(uo, [["__scopeId", "data-v-559361eb"]]), mo = { class: "status-grid" }, vo = { class: "status-grid__columns" }, fo = { class: "status-grid__column" }, go = { class: "status-grid__title" }, po = { class: "status-grid__column status-grid__column--right" }, ho = { class: "status-grid__title" }, yo = {
  key: 0,
  class: "status-grid__footer"
}, wo = /* @__PURE__ */ Y({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, a) => (s(), o("div", mo, [
      e("div", vo, [
        e("div", fo, [
          e("h4", go, n(t.leftTitle), 1),
          ge(r.$slots, "left", {}, void 0, !0)
        ]),
        e("div", po, [
          e("h4", ho, n(t.rightTitle), 1),
          ge(r.$slots, "right", {}, void 0, !0)
        ])
      ]),
      r.$slots.footer ? (s(), o("div", yo, [
        ge(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ko = /* @__PURE__ */ X(wo, [["__scopeId", "data-v-73b7ba3f"]]), bo = {
  key: 0,
  class: "status-item__icon"
}, _o = {
  key: 1,
  class: "status-item__count"
}, $o = { class: "status-item__label" }, Co = /* @__PURE__ */ Y({
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
      t.icon ? (s(), o("span", bo, n(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", _o, n(t.count), 1)) : c("", !0),
      e("span", $o, n(t.label), 1)
    ], 2));
  }
}), Qe = /* @__PURE__ */ X(Co, [["__scopeId", "data-v-6f929183"]]), xo = { class: "issue-card__header" }, So = { class: "issue-card__icon" }, Io = { class: "issue-card__title" }, Eo = {
  key: 0,
  class: "issue-card__content"
}, Mo = {
  key: 0,
  class: "issue-card__description"
}, zo = {
  key: 1,
  class: "issue-card__items"
}, Lo = {
  key: 2,
  class: "issue-card__actions"
}, Do = /* @__PURE__ */ Y({
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
      e("div", xo, [
        e("span", So, n(t.icon), 1),
        e("h4", Io, n(t.title), 1)
      ]),
      d.$slots.default || t.description ? (s(), o("div", Eo, [
        t.description ? (s(), o("p", Mo, n(t.description), 1)) : c("", !0),
        ge(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", zo, [
        (s(!0), o(G, null, te(t.items, (v, y) => (s(), o("div", {
          key: y,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, n(v), 1)
        ]))), 128))
      ])) : c("", !0),
      d.$slots.actions ? (s(), o("div", Lo, [
        ge(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), dt = /* @__PURE__ */ X(Do, [["__scopeId", "data-v-df6aa348"]]), Ro = ["type", "disabled"], No = {
  key: 0,
  class: "spinner"
}, To = /* @__PURE__ */ Y({
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
      t.loading ? (s(), o("span", No)) : c("", !0),
      t.loading ? c("", !0) : ge(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ro));
  }
}), se = /* @__PURE__ */ X(To, [["__scopeId", "data-v-772abe47"]]), Uo = { class: "empty-state" }, Po = {
  key: 0,
  class: "empty-icon"
}, Bo = { class: "empty-message" }, Oo = /* @__PURE__ */ Y({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, a) => (s(), o("div", Uo, [
      t.icon ? (s(), o("div", Po, n(t.icon), 1)) : c("", !0),
      e("p", Bo, n(t.message), 1),
      t.actionLabel ? (s(), S(se, {
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
}), Ke = /* @__PURE__ */ X(Oo, [["__scopeId", "data-v-4466284f"]]), Fo = /* @__PURE__ */ Y({
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
}), es = /* @__PURE__ */ X(Fo, [["__scopeId", "data-v-75e9eeb8"]]), Vo = /* @__PURE__ */ Y({
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
}), ts = /* @__PURE__ */ X(Vo, [["__scopeId", "data-v-2f186e4c"]]), Ao = { class: "detail-row" }, Wo = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("div", Ao, [
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
}), xe = /* @__PURE__ */ X(Wo, [["__scopeId", "data-v-ef15664a"]]), Go = { class: "modal-header" }, jo = { class: "modal-body" }, Ho = { class: "status-section" }, qo = {
  key: 0,
  class: "status-section"
}, Ko = { class: "section-header-row" }, Yo = {
  key: 0,
  class: "workflow-group"
}, Xo = { class: "workflow-group-header" }, Qo = { class: "workflow-group-title" }, Zo = { class: "workflow-list" }, Jo = { class: "workflow-name" }, ea = { class: "workflow-issue" }, ta = {
  key: 1,
  class: "workflow-group"
}, sa = { class: "workflow-group-header" }, oa = { class: "workflow-group-title" }, aa = { class: "workflow-list" }, na = { class: "workflow-name" }, la = { class: "workflow-issue" }, ia = {
  key: 2,
  class: "workflow-group"
}, ra = { class: "workflow-group-header" }, da = { class: "workflow-group-title" }, ca = { class: "workflow-list" }, ua = { class: "workflow-name" }, ma = {
  key: 3,
  class: "workflow-group"
}, va = { class: "workflow-group-header" }, fa = { class: "workflow-group-title" }, ga = { class: "workflow-list" }, pa = { class: "workflow-name" }, ha = {
  key: 4,
  class: "workflow-group"
}, ya = { class: "workflow-group-header" }, wa = { class: "workflow-group-title" }, ka = { class: "workflow-list" }, ba = { class: "workflow-name" }, _a = {
  key: 5,
  class: "workflow-group"
}, $a = { class: "workflow-group-title" }, Ca = { class: "expand-icon" }, xa = {
  key: 0,
  class: "workflow-list"
}, Sa = { class: "workflow-name" }, Ia = {
  key: 1,
  class: "status-section"
}, Ea = {
  key: 0,
  class: "change-group"
}, Ma = { class: "change-group-header" }, za = { class: "change-group-title" }, La = { class: "change-list" }, Da = { class: "node-name" }, Ra = {
  key: 0,
  class: "dev-badge"
}, Na = {
  key: 1,
  class: "change-group"
}, Ta = { class: "change-group-header" }, Ua = { class: "change-group-title" }, Pa = { class: "change-list" }, Ba = { class: "node-name" }, Oa = {
  key: 0,
  class: "dev-badge"
}, Fa = {
  key: 2,
  class: "change-group"
}, Va = { class: "change-list" }, Aa = { class: "change-item" }, Wa = { class: "node-name" }, Ga = {
  key: 3,
  class: "change-group"
}, ja = {
  key: 2,
  class: "status-section"
}, Ha = { class: "section-header-row" }, qa = {
  key: 0,
  class: "drift-item"
}, Ka = { class: "drift-list" }, Ya = {
  key: 0,
  class: "drift-list-more"
}, Xa = {
  key: 1,
  class: "drift-item"
}, Qa = { class: "drift-list" }, Za = {
  key: 0,
  class: "drift-list-more"
}, Ja = {
  key: 2,
  class: "drift-item"
}, en = {
  key: 3,
  class: "drift-item"
}, tn = {
  key: 3,
  class: "status-section"
}, sn = { class: "info-box" }, on = { class: "drift-list" }, an = {
  key: 0,
  class: "drift-list-more"
}, nn = {
  key: 4,
  class: "status-section"
}, ln = { class: "warning-box" }, rn = {
  key: 5,
  class: "empty-state-inline"
}, dn = { class: "modal-actions" }, cn = /* @__PURE__ */ Y({
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
      var L, $, f, R, O, I, B, W, F, T, D, x, z, J, K, ae, me, de, ee, P, E, ne;
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
            e("div", Go, [
              C[7] || (C[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (q) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", jo, [
              e("div", Ho, [
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
              y.value ? (s(), o("div", qo, [
                e("div", Ko, [
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
                d.value.length ? (s(), o("div", Yo, [
                  e("div", Xo, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Qo, "BROKEN (COMMITTED) (" + n(d.value.length) + ")", 1)
                  ]),
                  e("div", Zo, [
                    (s(!0), o(G, null, te(d.value, (q) => (s(), o("div", {
                      key: q.name,
                      class: "workflow-item"
                    }, [
                      e("span", Jo, n(q.name), 1),
                      e("span", ea, n(q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.length ? (s(), o("div", ta, [
                  e("div", sa, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", oa, "BROKEN (UNCOMMITTED) (" + n(p.value.length) + ")", 1)
                  ]),
                  e("div", aa, [
                    (s(!0), o(G, null, te(p.value, (q) => (s(), o("div", {
                      key: q.name,
                      class: "workflow-item"
                    }, [
                      e("span", na, n(q.name), 1),
                      e("span", la, n(q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                ($ = (L = t.status.workflows) == null ? void 0 : L.new) != null && $.length ? (s(), o("div", ia, [
                  e("div", ra, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", da, "NEW (" + n(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", ca, [
                    (s(!0), o(G, null, te(t.status.workflows.new, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", ua, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = (f = t.status.workflows) == null ? void 0 : f.modified) != null && R.length ? (s(), o("div", ma, [
                  e("div", va, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", fa, "MODIFIED (" + n(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", ga, [
                    (s(!0), o(G, null, te(t.status.workflows.modified, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", pa, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (I = (O = t.status.workflows) == null ? void 0 : O.deleted) != null && I.length ? (s(), o("div", ha, [
                  e("div", ya, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", wa, "DELETED (" + n(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", ka, [
                    (s(!0), o(G, null, te(t.status.workflows.deleted, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", ba, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                v.value.length ? (s(), o("div", _a, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (q) => a.value = !a.value)
                  }, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", $a, "SYNCED (" + n(v.value.length) + ")", 1),
                    e("span", Ca, n(a.value ? "▼" : "▶"), 1)
                  ]),
                  a.value ? (s(), o("div", xa, [
                    (s(!0), o(G, null, te(v.value, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", Sa, n(q), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (s(), o("div", Ia, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[16] || (C[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (W = (B = t.status.git_changes) == null ? void 0 : B.nodes_added) != null && W.length ? (s(), o("div", Ea, [
                  e("div", Ma, [
                    C[17] || (C[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", za, "NODES ADDED (" + n(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", La, [
                    (s(!0), o(G, null, te(t.status.git_changes.nodes_added, (q) => (s(), o("div", {
                      key: b(q),
                      class: "change-item"
                    }, [
                      e("span", Da, n(b(q)), 1),
                      h(q) ? (s(), o("span", Ra, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && T.length ? (s(), o("div", Na, [
                  e("div", Ta, [
                    C[18] || (C[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Ua, "NODES REMOVED (" + n(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Pa, [
                    (s(!0), o(G, null, te(t.status.git_changes.nodes_removed, (q) => (s(), o("div", {
                      key: b(q),
                      class: "change-item"
                    }, [
                      e("span", Ba, n(b(q)), 1),
                      h(q) ? (s(), o("span", Oa, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = t.status.git_changes) != null && D.workflow_changes ? (s(), o("div", Fa, [
                  C[19] || (C[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Va, [
                    e("div", Aa, [
                      e("span", Wa, n(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (x = t.status.git_changes) != null && x.has_other_changes ? (s(), o("div", Ga, [...C[20] || (C[20] = [
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
              (z = t.status.comparison) != null && z.is_synced ? c("", !0) : (s(), o("div", ja, [
                e("div", Ha, [
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
                (K = (J = t.status.comparison) == null ? void 0 : J.missing_nodes) != null && K.length ? (s(), o("div", qa, [
                  g(xe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Ka, [
                    (s(!0), o(G, null, te(t.status.comparison.missing_nodes.slice(0, 10), (q) => (s(), o("div", {
                      key: q,
                      class: "drift-list-item"
                    }, " - " + n(q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Ya, " ... and " + n(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (me = (ae = t.status.comparison) == null ? void 0 : ae.extra_nodes) != null && me.length ? (s(), o("div", Xa, [
                  g(xe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Qa, [
                    (s(!0), o(G, null, te(t.status.comparison.extra_nodes.slice(0, 10), (q) => (s(), o("div", {
                      key: q,
                      class: "drift-list-item"
                    }, " - " + n(q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Za, " ... and " + n(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (ee = (de = t.status.comparison) == null ? void 0 : de.version_mismatches) != null && ee.length ? (s(), o("div", Ja, [
                  g(xe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (P = t.status.comparison) != null && P.packages_in_sync ? c("", !0) : (s(), o("div", en, [
                  g(xe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ne = (E = t.status.comparison) == null ? void 0 : E.disabled_nodes) != null && ne.length ? (s(), o("div", tn, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[23] || (C[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", sn, [
                  C[24] || (C[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, n(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", on, [
                  (s(!0), o(G, null, te(t.status.comparison.disabled_nodes.slice(0, 10), (q) => (s(), o("div", {
                    key: q,
                    class: "drift-list-item"
                  }, " • " + n(q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", an, " ... and " + n(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", nn, [
                g(Ae, { level: "4" }, {
                  default: i(() => [...C[25] || (C[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", ln, [
                  C[26] || (C[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, n(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[27] || (C[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (s(), o("div", rn, [...C[28] || (C[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", dn, [
              g(se, {
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
}), un = /* @__PURE__ */ X(cn, [["__scopeId", "data-v-c67eed17"]]), mn = { class: "health-section-header" }, vn = { class: "suggestions-content" }, fn = { class: "suggestions-text" }, gn = {
  key: 3,
  style: { "margin-top": "var(--cg-space-3)" }
}, pn = /* @__PURE__ */ Y({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "start-setup", "view-environments"],
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
          a.setupState === "no_workspace" ? (s(), S(dt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: i(() => [
              g(se, {
                variant: "primary",
                size: "sm",
                onClick: T[0] || (T[0] = (D) => F.$emit("start-setup"))
              }, {
                default: i(() => [...T[11] || (T[11] = [
                  w(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (s(), S(dt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: i(() => [
              g(se, {
                variant: "primary",
                size: "sm",
                onClick: T[1] || (T[1] = (D) => F.$emit("view-environments"))
              }, {
                default: i(() => [...T[12] || (T[12] = [
                  w(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[3] || (T[3] = (D) => p.value = !0),
            onMouseleave: T[4] || (T[4] = (D) => p.value = !1)
          }, [
            e("div", mn, [
              g(Ae, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...T[13] || (T[13] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g(Vs, { name: "fade" }, {
                default: i(() => [
                  p.value ? (s(), S(se, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...T[14] || (T[14] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            g(ko, {
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
                  T[16] || (T[16] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", vn, [
                    e("span", fn, n(I.value), 1),
                    g(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (D) => F.$emit("commit-changes"))
                    }, {
                      default: i(() => [...T[15] || (T[15] = [
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
          t.status.is_detached_head ? (s(), S(dt, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              g(se, {
                variant: "primary",
                size: "sm",
                onClick: T[5] || (T[5] = (D) => F.$emit("create-branch"))
              }, {
                default: i(() => [...T[17] || (T[17] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          O.value ? (s(), o("div", gn, [
            g(Ae, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...T[18] || (T[18] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            $.value.length > 0 ? (s(), S(dt, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${$.value.length} workflow${$.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: $.value.map((D) => `${D.name} — ${D.issue_summary}`)
            }, {
              actions: i(() => [
                g(se, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (D) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[19] || (T[19] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            f.value.length > 0 ? (s(), S(dt, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${f.value.length} workflow${f.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: f.value.map((D) => `${D.name} — ${D.models_needing_path_sync_count} model path${D.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                g(se, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (D) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[20] || (T[20] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !R.value ? (s(), S(dt, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                g(se, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[8] || (T[8] = (D) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[21] || (T[21] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (s(), S(dt, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: B.value,
              items: W.value
            }, {
              actions: i(() => [
                g(se, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: i(() => [...T[22] || (T[22] = [
                    w(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                g(se, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[9] || (T[9] = (D) => F.$emit("view-nodes"))
                }, {
                  default: i(() => [...T[23] || (T[23] = [
                    w(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !O.value && !k.value ? (s(), S(Ke, {
            key: 4,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(un, {
        show: d.value,
        status: t.status,
        onClose: T[10] || (T[10] = (D) => d.value = !1),
        onNavigateWorkflows: y,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), hn = /* @__PURE__ */ X(pn, [["__scopeId", "data-v-3bff2b2f"]]), yn = ["type", "value", "placeholder", "disabled"], wn = /* @__PURE__ */ Y({
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
    }, null, 42, yn));
  }
}), Gt = /* @__PURE__ */ X(wn, [["__scopeId", "data-v-0380d08f"]]), kn = { class: "branch-create-form" }, bn = { class: "form-actions" }, _n = /* @__PURE__ */ Y({
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
    return (m, l) => (s(), o("div", kn, [
      g(Gt, {
        modelValue: d.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => d.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: y
      }, null, 8, ["modelValue"]),
      e("div", bn, [
        g(se, {
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
        g(se, {
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
}), $n = /* @__PURE__ */ X(_n, [["__scopeId", "data-v-7c500394"]]), Cn = { class: "branch-list-item__indicator" }, xn = { class: "branch-list-item__name" }, Sn = {
  key: 0,
  class: "branch-list-item__actions"
}, In = {
  key: 0,
  class: "branch-list-item__current-label"
}, En = /* @__PURE__ */ Y({
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
      e("span", Cn, n(t.isCurrent ? "●" : "○"), 1),
      e("span", xn, n(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (s(), o("div", Sn, [
        ge(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", In, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Mn = /* @__PURE__ */ X(En, [["__scopeId", "data-v-c6581a24"]]), zn = {
  key: 2,
  class: "branch-list"
}, Ln = /* @__PURE__ */ Y({
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
            d.value ? c("", !0) : (s(), S(se, {
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
        d.value ? (s(), S($n, {
          key: 0,
          onCreate: p,
          onCancel: v
        })) : c("", !0),
        t.branches.length === 0 ? (s(), S(Ke, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", zn, [
          (s(!0), o(G, null, te(t.branches, (l) => (s(), S(Mn, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? c("", !0) : (s(), S(se, {
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
              l.is_current ? c("", !0) : (s(), S(se, {
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
}), Dn = /* @__PURE__ */ X(Ln, [["__scopeId", "data-v-86784ddd"]]), Rn = { class: "commit-list" }, Nn = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (r, a) => (s(), o("div", Rn, [
      ge(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Tn = /* @__PURE__ */ X(Nn, [["__scopeId", "data-v-8c5ee761"]]), Un = { class: "commit-hash" }, Pn = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, a = U(() => r.hash.slice(0, r.length));
    return (d, p) => (s(), o("span", Un, n(a.value), 1));
  }
}), ps = /* @__PURE__ */ X(Pn, [["__scopeId", "data-v-7c333cc6"]]), Bn = { class: "commit-message" }, On = { class: "commit-date" }, Fn = /* @__PURE__ */ Y({
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
      e("span", Bn, n(t.message), 1),
      e("span", On, n(t.relativeDate), 1),
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
}), Vn = /* @__PURE__ */ X(Fn, [["__scopeId", "data-v-dd7c621b"]]), An = /* @__PURE__ */ Y({
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
        })) : (s(), S(Tn, { key: 1 }, {
          default: i(() => [
            (s(!0), o(G, null, te(t.commits, (d) => (s(), S(Vn, {
              key: d.hash,
              hash: d.short_hash || d.hash,
              message: d.message,
              "relative-date": d.date_relative || d.relative_date,
              onClick: (p) => r.$emit("select", d)
            }, {
              actions: i(() => [
                g(se, {
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
}), Wn = /* @__PURE__ */ X(An, [["__scopeId", "data-v-981c3c64"]]), ds = [
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
], Gn = {
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
], jn = [
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
], Hn = [
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
  getWorkflowDetails: async (t) => (await ye(300), Gn[t] || {
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
  getWorkspaceModels: async () => (await ye(400), jn),
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
  getCommitHistory: async (t = 10) => (await ye(300), Hn.slice(0, t)),
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
  async function J(Q) {
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
  async function ee(Q) {
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
  async function V(Q) {
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
  async function it(Q) {
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
    getModelDetails: J,
    openFileLocation: K,
    addModelSource: ae,
    removeModelSource: me,
    deleteModel: de,
    downloadModel: ee,
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
    installNode: V,
    updateNode: Z,
    uninstallNode: be,
    // Git Remotes
    getRemotes: ie,
    addRemote: ut,
    removeRemote: xt,
    updateRemoteUrl: St,
    fetchRemote: _e,
    getRemoteSyncStatus: it,
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
const qn = { class: "base-modal-header" }, Kn = {
  key: 0,
  class: "base-modal-title"
}, Yn = { class: "base-modal-body" }, Xn = {
  key: 0,
  class: "base-modal-loading"
}, Qn = {
  key: 1,
  class: "base-modal-error"
}, Zn = {
  key: 0,
  class: "base-modal-footer"
}, Jn = /* @__PURE__ */ Y({
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
    }), As(() => {
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
          e("div", qn, [
            ge(y.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Kn, n(t.title), 1)) : c("", !0)
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
          e("div", Yn, [
            t.loading ? (s(), o("div", Xn, "Loading...")) : t.error ? (s(), o("div", Qn, n(t.error), 1)) : ge(y.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          y.$slots.footer ? (s(), o("div", Zn, [
            ge(y.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), ot = /* @__PURE__ */ X(Jn, [["__scopeId", "data-v-8dab1081"]]), el = ["type", "disabled"], tl = {
  key: 0,
  class: "spinner"
}, sl = /* @__PURE__ */ Y({
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
      t.loading ? (s(), o("span", tl)) : c("", !0),
      ge(r.$slots, "default", {}, void 0, !0)
    ], 10, el));
  }
}), re = /* @__PURE__ */ X(sl, [["__scopeId", "data-v-f3452606"]]), ol = {
  key: 0,
  class: "base-title-count"
}, al = /* @__PURE__ */ Y({
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
        t.count !== void 0 ? (s(), o("span", ol, "(" + n(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Tt = /* @__PURE__ */ X(al, [["__scopeId", "data-v-5a01561d"]]), nl = ["value", "disabled"], ll = {
  key: 0,
  value: "",
  disabled: ""
}, il = ["value"], rl = {
  key: 0,
  class: "base-select-error"
}, dl = /* @__PURE__ */ Y({
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
        t.placeholder ? (s(), o("option", ll, n(t.placeholder), 1)) : c("", !0),
        (s(!0), o(G, null, te(t.options, (v) => (s(), o("option", {
          key: r(v),
          value: r(v)
        }, n(a(v)), 9, il))), 128))
      ], 42, nl),
      t.error ? (s(), o("span", rl, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), cl = /* @__PURE__ */ X(dl, [["__scopeId", "data-v-7436d745"]]), ul = { class: "popover-header" }, ml = { class: "popover-title" }, vl = { class: "popover-content" }, fl = {
  key: 0,
  class: "popover-actions"
}, gl = /* @__PURE__ */ Y({
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
          e("div", ul, [
            e("h4", ml, n(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", vl, [
            ge(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (s(), o("div", fl, [
            ge(r.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), at = /* @__PURE__ */ X(gl, [["__scopeId", "data-v-42815ace"]]), pl = { class: "detail-section" }, hl = {
  key: 0,
  class: "empty-message"
}, yl = { class: "model-header" }, wl = { class: "model-name" }, kl = { class: "model-details" }, bl = { class: "model-row" }, _l = { class: "model-row" }, $l = { class: "label" }, Cl = {
  key: 0,
  class: "model-row model-row-nodes"
}, xl = { class: "node-list" }, Sl = ["onClick"], Il = {
  key: 1,
  class: "model-row"
}, El = { class: "value" }, Ml = {
  key: 2,
  class: "model-row"
}, zl = { class: "value error" }, Ll = {
  key: 0,
  class: "model-actions"
}, Dl = { class: "detail-section" }, Rl = {
  key: 0,
  class: "empty-message"
}, Nl = { class: "node-name" }, Tl = {
  key: 0,
  class: "node-version"
}, Ul = /* @__PURE__ */ Y({
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
      g(ot, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: u.value || void 0,
        onClose: x[4] || (x[4] = (z) => d("close"))
      }, {
        body: i(() => [
          m.value ? (s(), o(G, { key: 0 }, [
            e("section", pl, [
              g(Tt, { variant: "section" }, {
                default: i(() => [
                  w("MODELS USED (" + n(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", hl, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(G, null, te(m.value.models, (z) => {
                var J;
                return s(), o("div", {
                  key: z.hash || z.filename,
                  class: "model-card"
                }, [
                  e("div", yl, [
                    x[6] || (x[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", wl, n(z.filename), 1)
                  ]),
                  e("div", kl, [
                    e("div", bl, [
                      x[7] || (x[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: le(["value", $(z.status)])
                      }, n(f(z.status)), 3)
                    ]),
                    e("div", _l, [
                      e("span", $l, [
                        x[8] || (x[8] = w(" Importance: ", -1)),
                        g(gs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: x[0] || (x[0] = (K) => k.value = !0)
                        })
                      ]),
                      g(cl, {
                        "model-value": h.value[z.filename] || z.importance,
                        options: L,
                        "onUpdate:modelValue": (K) => W(z.filename, K)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    z.loaded_by && z.loaded_by.length > 0 ? (s(), o("div", Cl, [
                      x[9] || (x[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", xl, [
                        (s(!0), o(G, null, te(R(z), (K, ae) => (s(), o("div", {
                          key: `${K.node_id}-${ae}`,
                          class: "node-reference"
                        }, n(K.node_type) + " (Node #" + n(K.node_id) + ") ", 1))), 128)),
                        z.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (K) => I(z.hash || z.filename)
                        }, n(O(z.hash || z.filename) ? "▼ Show less" : `▶ View all (${z.loaded_by.length})`), 9, Sl)) : c("", !0)
                      ])
                    ])) : c("", !0),
                    z.size_mb ? (s(), o("div", Il, [
                      x[10] || (x[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", El, n(z.size_mb) + " MB", 1)
                    ])) : c("", !0),
                    z.has_category_mismatch ? (s(), o("div", Ml, [
                      x[13] || (x[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", zl, [
                        x[11] || (x[11] = w(" In ", -1)),
                        e("code", null, n(z.actual_category) + "/", 1),
                        x[12] || (x[12] = w(" but loader needs ", -1)),
                        e("code", null, n((J = z.expected_categories) == null ? void 0 : J[0]) + "/", 1)
                      ])
                    ])) : c("", !0)
                  ]),
                  z.status !== "available" ? (s(), o("div", Ll, [
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
            e("section", Dl, [
              g(Tt, { variant: "section" }, {
                default: i(() => [
                  w("NODES USED (" + n(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", Rl, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(G, null, te(m.value.nodes, (z) => (s(), o("div", {
                key: z.name,
                class: "node-item"
              }, [
                e("span", {
                  class: le(["node-status", z.status === "installed" ? "installed" : "missing"])
                }, n(z.status === "installed" ? "✓" : "✕"), 3),
                e("span", Nl, n(z.name), 1),
                z.version ? (s(), o("span", Tl, "v" + n(z.version), 1)) : c("", !0)
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
      g(at, {
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
}), Pl = /* @__PURE__ */ X(Ul, [["__scopeId", "data-v-668728e6"]]), ke = fs({
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
    await Bl(t), t.status = "completed", t.progress = 100;
  } catch (r) {
    t.status = "failed", t.error = r instanceof Error ? r.message : "Download failed", t.retries++;
  } finally {
    ke.status = "idle", wt();
  }
}
async function Bl(t) {
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
async function Ol() {
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
    queue: Ws(ke),
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
    loadPendingDownloads: Ol
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
const Fl = { class: "resolution-stepper" }, Vl = { class: "stepper-header" }, Al = ["onClick"], Wl = {
  key: 0,
  class: "step-icon"
}, Gl = {
  key: 1,
  class: "step-number"
}, jl = { class: "step-label" }, Hl = {
  key: 0,
  class: "step-connector"
}, ql = { class: "stepper-content" }, Kl = /* @__PURE__ */ Y({
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
    return (u, b) => (s(), o("div", Fl, [
      e("div", Vl, [
        (s(!0), o(G, null, te(t.steps, (h, k) => (s(), o("div", {
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
            p(h.id) ? (s(), o("span", Wl, "✓")) : (s(), o("span", Gl, n(k + 1), 1))
          ], 2),
          e("div", jl, n(h.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", Hl)) : c("", !0)
        ], 10, Al))), 128))
      ]),
      e("div", ql, [
        ge(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Yl = /* @__PURE__ */ X(Kl, [["__scopeId", "data-v-2a7b3af8"]]), Xl = /* @__PURE__ */ Y({
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
}), jt = /* @__PURE__ */ X(Xl, [["__scopeId", "data-v-17ec4b80"]]), Ql = { class: "node-info" }, Zl = { class: "node-info-text" }, Jl = { class: "item-body" }, ei = {
  key: 0,
  class: "resolved-state"
}, ti = {
  key: 1,
  class: "multiple-options"
}, si = { class: "options-list" }, oi = ["onClick"], ai = ["name", "value", "checked", "onChange"], ni = { class: "option-content" }, li = { class: "option-header" }, ii = { class: "option-package-id" }, ri = {
  key: 0,
  class: "option-title"
}, di = { class: "option-meta" }, ci = {
  key: 0,
  class: "installed-badge"
}, ui = { class: "action-buttons" }, mi = {
  key: 2,
  class: "unresolved"
}, vi = {
  key: 0,
  class: "searching-state"
}, fi = { class: "options-list" }, gi = ["onClick"], pi = ["name", "value"], hi = { class: "option-content" }, yi = { class: "option-header" }, wi = { class: "option-package-id" }, ki = {
  key: 0,
  class: "option-description"
}, bi = { class: "option-meta" }, _i = {
  key: 0,
  class: "installed-badge"
}, $i = {
  key: 2,
  class: "unresolved-message"
}, Ci = { class: "action-buttons" }, xi = /* @__PURE__ */ Y({
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
      e("div", Ql, [
        e("span", Zl, [
          u[7] || (u[7] = w("Node type: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", y.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Jl, [
        v.value ? (s(), o("div", ei, [
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
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ti, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", si, [
            (s(!0), o(G, null, te(t.options, (b, h) => (s(), o("label", {
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
              }, null, 40, ai),
              e("div", ni, [
                e("div", li, [
                  e("span", ii, n(b.package_id), 1),
                  g(jt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                b.title && b.title !== b.package_id ? (s(), o("div", ri, n(b.title), 1)) : c("", !0),
                e("div", di, [
                  b.is_installed ? (s(), o("span", ci, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, oi))), 128))
          ]),
          e("div", ui, [
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
        ])) : (s(), o("div", mi, [
          t.isSearching ? (s(), o("div", vi, [...u[13] || (u[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(G, { key: 1 }, [
            u[14] || (u[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", fi, [
              (s(!0), o(G, null, te(t.searchResults.slice(0, 5), (b, h) => (s(), o("label", {
                key: b.package_id,
                class: "option-card",
                onClick: (k) => d("search-result-selected", b)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: h
                }, null, 8, pi),
                e("div", hi, [
                  e("div", yi, [
                    e("span", wi, n(b.package_id), 1),
                    g(jt, {
                      confidence: b.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  b.description ? (s(), o("div", ki, n(p(b.description)), 1)) : c("", !0),
                  e("div", bi, [
                    b.is_installed ? (s(), o("span", _i, "Already Installed")) : c("", !0)
                  ])
                ])
              ], 8, gi))), 128))
            ])
          ], 64)) : (s(), o("div", $i, [...u[15] || (u[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ci, [
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
}), Si = /* @__PURE__ */ X(xi, [["__scopeId", "data-v-c2997d1d"]]), Ii = { class: "item-navigator" }, Ei = { class: "nav-item-info" }, Mi = ["title"], zi = { class: "nav-controls" }, Li = { class: "nav-arrows" }, Di = ["disabled"], Ri = ["disabled"], Ni = { class: "nav-position" }, Ti = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: r }) {
    const a = r;
    return (d, p) => (s(), o("div", Ii, [
      e("div", Ei, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, n(t.itemName), 9, Mi)
      ]),
      e("div", zi, [
        e("div", Li, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (v) => a("prev")),
            title: "Previous item"
          }, " ← ", 8, Di),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (v) => a("next")),
            title: "Next item"
          }, " → ", 8, Ri)
        ]),
        e("span", Ni, n(t.currentIndex + 1) + "/" + n(t.totalItems), 1)
      ])
    ]));
  }
}), bs = /* @__PURE__ */ X(Ti, [["__scopeId", "data-v-74af7920"]]), Ui = ["type", "value", "placeholder", "disabled"], Pi = {
  key: 0,
  class: "base-input-error"
}, Bi = /* @__PURE__ */ Y({
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
      }, null, 42, Ui),
      t.error ? (s(), o("span", Pi, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ X(Bi, [["__scopeId", "data-v-9ba02cdc"]]), Oi = { class: "node-resolution-step" }, Fi = {
  key: 0,
  class: "auto-resolved-section"
}, Vi = { class: "section-header" }, Ai = { class: "stat-badge" }, Wi = { class: "resolved-packages-list" }, Gi = { class: "package-info" }, ji = { class: "package-id" }, Hi = { class: "node-count" }, qi = { class: "package-actions" }, Ki = {
  key: 0,
  class: "status-badge install"
}, Yi = {
  key: 1,
  class: "status-badge skip"
}, Xi = ["onClick"], Qi = {
  key: 1,
  class: "section-divider"
}, Zi = { class: "step-header" }, Ji = { class: "stat-badge" }, er = {
  key: 1,
  class: "step-body"
}, tr = {
  key: 3,
  class: "empty-state"
}, sr = { class: "node-modal-body" }, or = { class: "node-search-results-container" }, ar = {
  key: 0,
  class: "node-search-results"
}, nr = ["onClick"], lr = { class: "node-result-header" }, ir = { class: "node-result-package-id" }, rr = {
  key: 0,
  class: "node-result-description"
}, dr = {
  key: 1,
  class: "node-empty-state"
}, cr = {
  key: 2,
  class: "node-empty-state"
}, ur = {
  key: 3,
  class: "node-empty-state"
}, mr = { class: "node-manual-entry-modal" }, vr = { class: "node-modal-body" }, fr = { class: "node-modal-actions" }, gr = /* @__PURE__ */ Y({
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
      var V;
      oe && ((V = oe.options) != null && V.length || k.value.has(oe.node_type) || C.value.has(oe.node_type) || a.nodeChoices.has(oe.node_type) || await B(oe.node_type));
    }, { immediate: !0 });
    async function B(oe) {
      C.value.add(oe);
      try {
        const V = await p(oe, 5);
        k.value.set(oe, V);
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
      var V;
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
      return (V = f.value.options) != null && V.length ? "ambiguous" : "not-found";
    }), x = U(() => {
      var V;
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
      return (V = f.value.options) != null && V.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function z(oe) {
      oe >= 0 && oe < a.nodes.length && (v.value = oe);
    }
    function J() {
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
    function ee() {
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
    return (oe, V) => {
      var Z, be;
      return s(), o("div", Oi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Fi, [
          e("div", Vi, [
            V[6] || (V[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Ai, n(W.value) + "/" + n(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Wi, [
            (s(!0), o(G, null, te(t.autoResolvedPackages, (ie) => (s(), o("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Gi, [
                e("code", ji, n(ie.package_id), 1),
                e("span", Hi, n(ie.node_types_count) + " node type" + n(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", qi, [
                F(ie.package_id) ? (s(), o("span", Yi, " SKIPPED ")) : (s(), o("span", Ki, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ut) => T(ie.package_id)
                }, n(F(ie.package_id) ? "Include" : "Skip"), 9, Xi)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Qi)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(G, { key: 2 }, [
          e("div", Zi, [
            V[7] || (V[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Ji, n(R.value) + "/" + n(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (s(), S(bs, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: V[0] || (V[0] = (ie) => z(v.value - 1)),
            onNext: V[1] || (V[1] = (ie) => z(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          f.value ? (s(), o("div", er, [
            g(Si, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((Z = f.value.options) != null && Z.length),
              options: f.value.options,
              choice: (be = t.nodeChoices) == null ? void 0 : be.get(f.value.node_type),
              status: D.value,
              "status-label": x.value,
              "search-results": O.value,
              "is-searching": I.value,
              onMarkOptional: J,
              onSkip: K,
              onManualEntry: ee,
              onSearch: de,
              onOptionSelected: ae,
              onClearChoice: me,
              onSearchResultSelected: Re
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", tr, [...V[8] || (V[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), S(Te, { to: "body" }, [
          y.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: V[4] || (V[4] = Ee((ie) => L.value = !0, ["self"])),
            onMouseup: Ee($, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: V[3] || (V[3] = (ie) => L.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                V[9] || (V[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", sr, [
                g(He, {
                  modelValue: l.value,
                  "onUpdate:modelValue": V[2] || (V[2] = (ie) => l.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: q
                }, null, 8, ["modelValue"]),
                e("div", or, [
                  b.value.length > 0 ? (s(), o("div", ar, [
                    (s(!0), o(G, null, te(b.value, (ie) => (s(), o("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (ut) => $e(ie)
                    }, [
                      e("div", lr, [
                        e("code", ir, n(ie.package_id), 1),
                        ie.match_confidence ? (s(), S(jt, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : c("", !0)
                      ]),
                      ie.description ? (s(), o("div", rr, n(ie.description), 1)) : c("", !0)
                    ], 8, nr))), 128))
                  ])) : h.value ? (s(), o("div", dr, "Searching...")) : l.value ? (s(), o("div", cr, 'No packages found matching "' + n(l.value) + '"', 1)) : (s(), o("div", ur, "Enter a search term"))
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
            e("div", mr, [
              e("div", { class: "node-modal-header" }, [
                V[10] || (V[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", vr, [
                g(He, {
                  modelValue: u.value,
                  "onUpdate:modelValue": V[5] || (V[5] = (ie) => u.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", fr, [
                  g(re, {
                    variant: "secondary",
                    onClick: E
                  }, {
                    default: i(() => [...V[11] || (V[11] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: Ge
                  }, {
                    default: i(() => [...V[12] || (V[12] = [
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
}), pr = /* @__PURE__ */ X(gr, [["__scopeId", "data-v-281581bc"]]), hr = { class: "node-info" }, yr = { class: "node-info-text" }, wr = { class: "item-body" }, kr = {
  key: 0,
  class: "resolved-state"
}, br = {
  key: 1,
  class: "multiple-options"
}, _r = { class: "options-list" }, $r = ["onClick"], Cr = ["name", "value", "checked", "onChange"], xr = { class: "option-content" }, Sr = { class: "option-header" }, Ir = { class: "option-filename" }, Er = { class: "option-meta" }, Mr = { class: "option-size" }, zr = { class: "option-category" }, Lr = { class: "option-path" }, Dr = { class: "action-buttons" }, Rr = {
  key: 2,
  class: "unresolved"
}, Nr = { class: "action-buttons" }, Tr = /* @__PURE__ */ Y({
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
      e("div", hr, [
        e("span", yr, [
          u[7] || (u[7] = w("Used by: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", v.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", wr, [
        p.value ? (s(), o("div", kr, [
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
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", br, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", _r, [
            (s(!0), o(G, null, te(t.options, (b, h) => (s(), o("label", {
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
              }, null, 40, Cr),
              e("div", xr, [
                e("div", Sr, [
                  e("span", Ir, n(b.model.filename), 1),
                  g(jt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Er, [
                  e("span", Mr, n(m(b.model.size)), 1),
                  e("span", zr, n(b.model.category), 1)
                ]),
                e("div", Lr, n(b.model.relative_path), 1)
              ])
            ], 10, $r))), 128))
          ]),
          e("div", Dr, [
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
        ])) : (s(), o("div", Rr, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Nr, [
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
}), Ur = /* @__PURE__ */ X(Tr, [["__scopeId", "data-v-8a82fefa"]]), Pr = { class: "model-resolution-step" }, Br = { class: "step-header" }, Or = { class: "step-info" }, Fr = { class: "step-title" }, Vr = { class: "step-description" }, Ar = { class: "stat-badge" }, Wr = {
  key: 1,
  class: "step-body"
}, Gr = {
  key: 2,
  class: "empty-state"
}, jr = { class: "model-search-modal" }, Hr = { class: "model-modal-body" }, qr = {
  key: 0,
  class: "model-search-results"
}, Kr = ["onClick"], Yr = { class: "model-result-header" }, Xr = { class: "model-result-filename" }, Qr = { class: "model-result-meta" }, Zr = { class: "model-result-category" }, Jr = { class: "model-result-size" }, ed = {
  key: 0,
  class: "model-result-path"
}, td = {
  key: 1,
  class: "model-no-results"
}, sd = {
  key: 2,
  class: "model-searching"
}, od = { class: "model-download-url-modal" }, ad = { class: "model-modal-body" }, nd = { class: "model-input-group" }, ld = { class: "model-input-group" }, id = { class: "model-modal-actions" }, rd = /* @__PURE__ */ Y({
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
    function J() {
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
      L.value && J();
    }
    function de() {
      !L.value || !b.value.trim() || (v("download-url", L.value.filename, b.value.trim(), h.value.trim() || void 0), K());
    }
    function ee(P) {
      if (!P) return "Unknown";
      const E = P / (1024 * 1024 * 1024);
      return E >= 1 ? `${E.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, E) => {
      var ne, q, Ie;
      return s(), o("div", Pr, [
        e("div", Br, [
          e("div", Or, [
            e("h3", Fr, n($.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Vr, n($.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Ar, n(f.value) + "/" + n(t.models.length) + " resolved", 1)
        ]),
        L.value ? (s(), S(bs, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": y.value,
          "total-items": t.models.length,
          onPrev: E[0] || (E[0] = ($e) => B(y.value - 1)),
          onNext: E[1] || (E[1] = ($e) => B(y.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        L.value ? (s(), o("div", Wr, [
          g(Ur, {
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
        ])) : (s(), o("div", Gr, [...E[5] || (E[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), S(Te, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ee(J, ["self"])
          }, [
            e("div", jr, [
              e("div", { class: "model-modal-header" }, [
                E[6] || (E[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              e("div", Hr, [
                g(He, {
                  modelValue: u.value,
                  "onUpdate:modelValue": E[2] || (E[2] = ($e) => u.value = $e),
                  placeholder: "Search by filename, category...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", qr, [
                  (s(!0), o(G, null, te(k.value, ($e) => (s(), o("div", {
                    key: $e.hash,
                    class: "model-search-result-item",
                    onClick: (Re) => me()
                  }, [
                    e("div", Yr, [
                      e("code", Xr, n($e.filename), 1)
                    ]),
                    e("div", Qr, [
                      e("span", Zr, n($e.category), 1),
                      e("span", Jr, n(ee($e.size)), 1)
                    ]),
                    $e.relative_path ? (s(), o("div", ed, n($e.relative_path), 1)) : c("", !0)
                  ], 8, Kr))), 128))
                ])) : u.value && !C.value ? (s(), o("div", td, ' No models found matching "' + n(u.value) + '" ', 1)) : c("", !0),
                C.value ? (s(), o("div", sd, "Searching...")) : c("", !0)
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
            e("div", od, [
              e("div", { class: "model-modal-header" }, [
                E[7] || (E[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: K
                }, "✕")
              ]),
              e("div", ad, [
                e("div", nd, [
                  E[8] || (E[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(He, {
                    modelValue: b.value,
                    "onUpdate:modelValue": E[3] || (E[3] = ($e) => b.value = $e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", ld, [
                  E[9] || (E[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(He, {
                    modelValue: h.value,
                    "onUpdate:modelValue": E[4] || (E[4] = ($e) => h.value = $e),
                    placeholder: R.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", id, [
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
}), dd = /* @__PURE__ */ X(rd, [["__scopeId", "data-v-c6acbada"]]), cd = { class: "applying-step" }, ud = {
  key: 0,
  class: "phase-content"
}, md = {
  key: 1,
  class: "phase-content"
}, vd = { class: "phase-description" }, fd = { class: "overall-progress" }, gd = { class: "progress-bar" }, pd = { class: "progress-label" }, hd = { class: "install-list" }, yd = { class: "install-icon" }, wd = { key: 0 }, kd = {
  key: 1,
  class: "spinner"
}, bd = { key: 2 }, _d = { key: 3 }, $d = {
  key: 0,
  class: "install-error"
}, Cd = {
  key: 2,
  class: "phase-content"
}, xd = { class: "phase-header" }, Sd = { class: "phase-title" }, Id = { class: "completion-summary" }, Ed = {
  key: 0,
  class: "summary-item success"
}, Md = { class: "summary-text" }, zd = {
  key: 1,
  class: "summary-item error"
}, Ld = { class: "summary-text" }, Dd = {
  key: 2,
  class: "failed-list"
}, Rd = { class: "failed-node-id" }, Nd = { class: "failed-error" }, Td = {
  key: 4,
  class: "summary-item success"
}, Ud = {
  key: 5,
  class: "restart-prompt"
}, Pd = {
  key: 3,
  class: "phase-content error"
}, Bd = { class: "error-message" }, Od = /* @__PURE__ */ Y({
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
      return s(), o("div", cd, [
        t.progress.phase === "resolving" ? (s(), o("div", ud, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", md, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", vd, " Installing " + n((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + n(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", fd, [
            e("div", gd, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${a.value}%` })
              }, null, 4)
            ]),
            e("span", pd, n(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + n(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", hd, [
            (s(!0), o(G, null, te(t.progress.nodesToInstall, (C, L) => (s(), o("div", {
              key: C,
              class: le(["install-item", v(C, L)])
            }, [
              e("span", yd, [
                v(C, L) === "pending" ? (s(), o("span", wd, "○")) : v(C, L) === "installing" ? (s(), o("span", kd, "◌")) : v(C, L) === "complete" ? (s(), o("span", bd, "✓")) : v(C, L) === "failed" ? (s(), o("span", _d, "✗")) : c("", !0)
              ]),
              e("code", null, n(C), 1),
              y(C) ? (s(), o("span", $d, n(y(C)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Cd, [
          e("div", xd, [
            e("span", {
              class: le(["phase-icon", p.value ? "warning" : "success"])
            }, n(p.value ? "⚠" : "✓"), 3),
            e("h3", Sd, n(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Id, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Ed, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Md, n(t.progress.nodesInstalled.length) + " node package" + n(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", zd, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Ld, n(d.value.length) + " package" + n(d.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Dd, [
              (s(!0), o(G, null, te(d.value, (C) => (s(), o("div", {
                key: C.node_id,
                class: "failed-item"
              }, [
                e("code", Rd, n(C.node_id), 1),
                e("span", Nd, n(C.error), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (C) => m.$emit("retry-failed"))
            }, " Retry Failed (" + n(d.value.length) + ") ", 1)) : c("", !0),
            p.value ? c("", !0) : (s(), o("div", Td, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Ud, [
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
        ])) : t.progress.phase === "error" ? (s(), o("div", Pd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Bd, n(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), Fd = /* @__PURE__ */ X(Od, [["__scopeId", "data-v-5efaae58"]]), Vd = {
  key: 0,
  class: "loading-state"
}, Ad = {
  key: 1,
  class: "wizard-content"
}, Wd = {
  key: 0,
  class: "step-content"
}, Gd = { class: "analysis-summary" }, jd = { class: "analysis-header" }, Hd = { class: "summary-description" }, qd = { class: "stats-grid" }, Kd = { class: "stat-card" }, Yd = { class: "stat-items" }, Xd = {
  key: 0,
  class: "stat-item success"
}, Qd = { class: "stat-count" }, Zd = {
  key: 1,
  class: "stat-item info"
}, Jd = { class: "stat-count" }, ec = {
  key: 2,
  class: "stat-item warning"
}, tc = { class: "stat-count" }, sc = {
  key: 3,
  class: "stat-item error"
}, oc = { class: "stat-count" }, ac = { class: "stat-card" }, nc = { class: "stat-items" }, lc = { class: "stat-item success" }, ic = { class: "stat-count" }, rc = {
  key: 0,
  class: "stat-item info"
}, dc = { class: "stat-count" }, cc = {
  key: 1,
  class: "stat-item warning"
}, uc = { class: "stat-count" }, mc = {
  key: 2,
  class: "stat-item warning"
}, vc = { class: "stat-count" }, fc = {
  key: 3,
  class: "stat-item error"
}, gc = { class: "stat-count" }, pc = {
  key: 0,
  class: "status-message warning"
}, hc = { class: "status-text" }, yc = {
  key: 1,
  class: "status-message info"
}, wc = { class: "status-text" }, kc = {
  key: 2,
  class: "status-message info"
}, bc = { class: "status-text" }, _c = {
  key: 3,
  class: "status-message warning"
}, $c = { class: "status-text" }, Cc = {
  key: 4,
  class: "status-message success"
}, xc = {
  key: 5,
  class: "category-mismatch-section"
}, Sc = { class: "mismatch-list" }, Ic = { class: "mismatch-path" }, Ec = { class: "mismatch-target" }, Mc = {
  key: 3,
  class: "step-content"
}, zc = { class: "review-summary" }, Lc = { class: "review-stats" }, Dc = { class: "review-stat" }, Rc = { class: "stat-value" }, Nc = { class: "review-stat" }, Tc = { class: "stat-value" }, Uc = { class: "review-stat" }, Pc = { class: "stat-value" }, Bc = { class: "review-stat" }, Oc = { class: "stat-value" }, Fc = {
  key: 0,
  class: "review-section"
}, Vc = { class: "section-title" }, Ac = { class: "review-items" }, Wc = { class: "item-name" }, Gc = { class: "item-choice" }, jc = {
  key: 0,
  class: "choice-badge install"
}, Hc = {
  key: 1,
  class: "choice-badge skip"
}, qc = {
  key: 1,
  class: "review-section"
}, Kc = { class: "section-title" }, Yc = { class: "review-items" }, Xc = { class: "item-name" }, Qc = { class: "item-choice" }, Zc = {
  key: 0,
  class: "choice-badge install"
}, Jc = {
  key: 1,
  class: "choice-badge optional"
}, eu = {
  key: 2,
  class: "choice-badge skip"
}, tu = {
  key: 1,
  class: "choice-badge pending"
}, su = {
  key: 2,
  class: "review-section"
}, ou = { class: "section-title" }, au = { class: "review-items" }, nu = { class: "item-name" }, lu = { class: "item-choice" }, iu = {
  key: 0,
  class: "choice-badge install"
}, ru = {
  key: 1,
  class: "choice-badge download"
}, du = {
  key: 2,
  class: "choice-badge optional"
}, cu = {
  key: 3,
  class: "choice-badge skip"
}, uu = {
  key: 4,
  class: "choice-badge skip"
}, mu = {
  key: 1,
  class: "choice-badge download"
}, vu = {
  key: 2,
  class: "choice-badge pending"
}, fu = {
  key: 3,
  class: "no-choices"
}, gu = /* @__PURE__ */ Y({
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
    }), F = U(() => k.value ? k.value.stats.needs_user_input : !1), T = U(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), D = U(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), x = U(() => k.value ? k.value.stats.download_intents > 0 : !1), z = U(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), J = U(() => k.value ? k.value.nodes.resolved.length : 0), K = U(() => k.value ? k.value.models.resolved.filter((j) => j.has_category_mismatch) : []), ae = U(() => K.value.length > 0), me = U(() => {
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
    }), ee = U(() => me.value.filter((j) => !B.value.has(j.package.package_id))), P = U(() => k.value ? k.value.models.resolved.filter((j) => j.match_type === "download_intent").map((j) => ({
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
      let j = ee.value.length;
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
    function V(j) {
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
    function it(j, N) {
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
          ...ee.value.map((Le) => Le.package.package_id)
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
    return ze(ie), (j, N) => (s(), S(ot, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: C.value,
      error: $.value || void 0,
      "fixed-height": !0,
      onClose: N[1] || (N[1] = (H) => d("close"))
    }, {
      body: i(() => [
        C.value && !k.value ? (s(), o("div", Vd, [...N[2] || (N[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", Ad, [
          g(Yl, {
            steps: W.value,
            "current-step": f.value,
            "completed-steps": R.value,
            "step-stats": oe.value,
            onStepChange: V
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", Wd, [
            e("div", Gd, [
              e("div", jd, [
                N[3] || (N[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Hd, " Found " + n(k.value.stats.total_nodes) + " nodes and " + n(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", qd, [
                e("div", Kd, [
                  N[12] || (N[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Yd, [
                    J.value > 0 ? (s(), o("div", Xd, [
                      N[4] || (N[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Qd, n(J.value), 1),
                      N[5] || (N[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", Zd, [
                      N[6] || (N[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Jd, n(k.value.stats.packages_needing_installation), 1),
                      N[7] || (N[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", ec, [
                      N[8] || (N[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", tc, n(k.value.nodes.ambiguous.length), 1),
                      N[9] || (N[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", sc, [
                      N[10] || (N[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", oc, n(k.value.nodes.unresolved.length), 1),
                      N[11] || (N[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", ac, [
                  N[23] || (N[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", nc, [
                    e("div", lc, [
                      N[13] || (N[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", ic, n(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      N[14] || (N[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", rc, [
                      N[15] || (N[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", dc, n(k.value.stats.download_intents), 1),
                      N[16] || (N[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    ae.value ? (s(), o("div", cc, [
                      N[17] || (N[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", uc, n(K.value.length), 1),
                      N[18] || (N[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : c("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", mc, [
                      N[19] || (N[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", vc, n(k.value.models.ambiguous.length), 1),
                      N[20] || (N[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", fc, [
                      N[21] || (N[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", gc, n(k.value.models.unresolved.length), 1),
                      N[22] || (N[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", pc, [
                N[24] || (N[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", hc, n(E.value.length + ne.value.length) + " items need your input", 1)
              ])) : z.value ? (s(), o("div", yc, [
                N[25] || (N[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", wc, n(k.value.stats.packages_needing_installation) + " package" + n(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + n(k.value.stats.nodes_needing_installation) + " node type" + n(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + n(x.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : x.value ? (s(), o("div", kc, [
                N[26] || (N[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", bc, n(k.value.stats.download_intents) + " model" + n(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : ae.value ? (s(), o("div", _c, [
                N[27] || (N[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", $c, n(K.value.length) + " model" + n(K.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Cc, [...N[28] || (N[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ae.value ? (s(), o("div", xc, [
                N[31] || (N[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Sc, [
                  (s(!0), o(G, null, te(K.value, (H) => {
                    var ve, Le;
                    return s(), o("div", {
                      key: H.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Ic, n(H.actual_category) + "/" + n((ve = H.model) == null ? void 0 : ve.filename), 1),
                      N[30] || (N[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Ec, n((Le = H.expected_categories) == null ? void 0 : Le[0]) + "/", 1),
                      H.file_path ? (s(), S(re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (rt) => Ce(H.file_path)
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
          f.value === "nodes" ? (s(), S(pr, {
            key: 1,
            nodes: E.value,
            "node-choices": O.value,
            "auto-resolved-packages": de.value,
            "skipped-packages": B.value,
            onMarkOptional: xt,
            onSkip: St,
            onOptionSelected: _e,
            onManualEntry: it,
            onClearChoice: Je,
            onPackageSkip: Ye
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          f.value === "models" ? (s(), S(dd, {
            key: 2,
            models: q.value,
            "model-choices": I.value,
            onMarkOptional: It,
            onSkip: fe,
            onOptionSelected: We,
            onDownloadUrl: Q,
            onClearChoice: we
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          f.value === "review" ? (s(), o("div", Mc, [
            e("div", zc, [
              N[36] || (N[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Lc, [
                e("div", Dc, [
                  e("span", Rc, n(Ie.value), 1),
                  N[32] || (N[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Nc, [
                  e("span", Tc, n($e.value), 1),
                  N[33] || (N[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Uc, [
                  e("span", Pc, n(Re.value), 1),
                  N[34] || (N[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Bc, [
                  e("span", Oc, n(Ge.value), 1),
                  N[35] || (N[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              de.value.length > 0 ? (s(), o("div", Fc, [
                e("h4", Vc, "Node Packages (" + n(de.value.length) + ")", 1),
                e("div", Ac, [
                  (s(!0), o(G, null, te(de.value, (H) => (s(), o("div", {
                    key: H.package_id,
                    class: "review-item"
                  }, [
                    e("code", Wc, n(H.package_id), 1),
                    e("div", Gc, [
                      B.value.has(H.package_id) ? (s(), o("span", Hc, "Skipped")) : (s(), o("span", jc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              E.value.length > 0 ? (s(), o("div", qc, [
                e("h4", Kc, "Node Choices (" + n(E.value.length) + ")", 1),
                e("div", Yc, [
                  (s(!0), o(G, null, te(E.value, (H) => {
                    var ve, Le, rt, Xe;
                    return s(), o("div", {
                      key: H.node_type,
                      class: "review-item"
                    }, [
                      e("code", Xc, n(H.node_type), 1),
                      e("div", Qc, [
                        O.value.has(H.node_type) ? (s(), o(G, { key: 0 }, [
                          ((ve = O.value.get(H.node_type)) == null ? void 0 : ve.action) === "install" ? (s(), o("span", Zc, n((Le = O.value.get(H.node_type)) == null ? void 0 : Le.package_id), 1)) : ((rt = O.value.get(H.node_type)) == null ? void 0 : rt.action) === "optional" ? (s(), o("span", Jc, " Optional ")) : ((Xe = O.value.get(H.node_type)) == null ? void 0 : Xe.action) === "skip" ? (s(), o("span", eu, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", tu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              q.value.length > 0 ? (s(), o("div", su, [
                e("h4", ou, "Models (" + n(q.value.length) + ")", 1),
                e("div", au, [
                  (s(!0), o(G, null, te(q.value, (H) => {
                    var ve, Le, rt, Xe, Ot, vt, ft;
                    return s(), o("div", {
                      key: H.filename,
                      class: "review-item"
                    }, [
                      e("code", nu, n(H.filename), 1),
                      e("div", lu, [
                        I.value.has(H.filename) ? (s(), o(G, { key: 0 }, [
                          ((ve = I.value.get(H.filename)) == null ? void 0 : ve.action) === "select" ? (s(), o("span", iu, n((rt = (Le = I.value.get(H.filename)) == null ? void 0 : Le.selected_model) == null ? void 0 : rt.filename), 1)) : ((Xe = I.value.get(H.filename)) == null ? void 0 : Xe.action) === "download" ? (s(), o("span", ru, " Download ")) : ((Ot = I.value.get(H.filename)) == null ? void 0 : Ot.action) === "optional" ? (s(), o("span", du, " Optional ")) : ((vt = I.value.get(H.filename)) == null ? void 0 : vt.action) === "skip" ? (s(), o("span", cu, " Skip ")) : ((ft = I.value.get(H.filename)) == null ? void 0 : ft.action) === "cancel_download" ? (s(), o("span", uu, " Cancel Download ")) : c("", !0)
                        ], 64)) : H.is_download_intent ? (s(), o("span", mu, " Pending Download ")) : (s(), o("span", vu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              me.value.length === 0 && E.value.length === 0 && q.value.length === 0 ? (s(), o("div", fu, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          f.value === "applying" ? (s(), S(Fd, {
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
}), pu = /* @__PURE__ */ X(gu, [["__scopeId", "data-v-6276cf1d"]]), hu = { class: "search-input-wrapper" }, yu = ["value", "placeholder"], wu = /* @__PURE__ */ Y({
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
    }), (l, u) => (s(), o("div", hu, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: y,
        onKeyup: ct(m, ["escape"])
      }, null, 40, yu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), ku = /* @__PURE__ */ X(wu, [["__scopeId", "data-v-266f857a"]]), bu = { class: "search-bar" }, _u = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, a) => (s(), o("div", bu, [
      g(ku, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (d) => r.$emit("update:modelValue", d)),
        onClear: a[1] || (a[1] = (d) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $t = /* @__PURE__ */ X(_u, [["__scopeId", "data-v-3d51bbfd"]]), $u = { class: "section-group" }, Cu = {
  key: 0,
  class: "section-content"
}, xu = /* @__PURE__ */ Y({
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
    return (y, m) => (s(), o("section", $u, [
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
      !t.collapsible || p.value ? (s(), o("div", Cu, [
        ge(y.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ X(xu, [["__scopeId", "data-v-c48e33ed"]]), Su = { class: "item-header" }, Iu = {
  key: 0,
  class: "item-icon"
}, Eu = { class: "item-info" }, Mu = {
  key: 0,
  class: "item-title"
}, zu = {
  key: 1,
  class: "item-subtitle"
}, Lu = {
  key: 0,
  class: "item-details"
}, Du = {
  key: 1,
  class: "item-actions"
}, Ru = /* @__PURE__ */ Y({
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
      e("div", Su, [
        p.$slots.icon ? (s(), o("span", Iu, [
          ge(p.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Eu, [
          p.$slots.title ? (s(), o("div", Mu, [
            ge(p.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          p.$slots.subtitle ? (s(), o("div", zu, [
            ge(p.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", Lu, [
        ge(p.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      p.$slots.actions ? (s(), o("div", Du, [
        ge(p.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ X(Ru, [["__scopeId", "data-v-cc435e0e"]]), Nu = { class: "loading-state" }, Tu = { class: "loading-message" }, Uu = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, a) => (s(), o("div", Nu, [
      a[0] || (a[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Tu, n(t.message), 1)
    ]));
  }
}), nt = /* @__PURE__ */ X(Uu, [["__scopeId", "data-v-ad8436c9"]]), Pu = { class: "error-state" }, Bu = { class: "error-message" }, Ou = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, a) => (s(), o("div", Pu, [
      a[2] || (a[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Bu, n(t.message), 1),
      t.retry ? (s(), S(se, {
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
}), lt = /* @__PURE__ */ X(Ou, [["__scopeId", "data-v-5397be48"]]), Fu = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getWorkflows: p } = De();
    ys();
    const v = _([]), y = _(!1), m = _(null), l = _(""), u = _(!0), b = _(!1), h = _(!1), k = _(!1), C = _(null), L = U(
      () => v.value.filter((ee) => ee.status === "broken")
    ), $ = U(
      () => v.value.filter((ee) => ee.status === "new")
    ), f = U(
      () => v.value.filter((ee) => ee.status === "modified")
    ), R = U(
      () => v.value.filter((ee) => ee.status === "synced")
    ), O = U(() => {
      if (!l.value.trim()) return v.value;
      const ee = l.value.toLowerCase();
      return v.value.filter((P) => P.name.toLowerCase().includes(ee));
    }), I = U(
      () => L.value.filter(
        (ee) => !l.value.trim() || ee.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), B = U(
      () => $.value.filter(
        (ee) => !l.value.trim() || ee.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), W = U(
      () => f.value.filter(
        (ee) => !l.value.trim() || ee.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), F = U(
      () => R.value.filter(
        (ee) => !l.value.trim() || ee.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), T = U(
      () => b.value ? F.value : F.value.slice(0, 5)
    );
    async function D(ee = !1) {
      y.value = !0, m.value = null;
      try {
        v.value = await p(ee);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        y.value = !1;
      }
    }
    r({ loadWorkflows: D });
    function x(ee) {
      C.value = ee, h.value = !0;
    }
    function z(ee) {
      C.value = ee, k.value = !0;
    }
    function J() {
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
    function me(ee) {
      const P = [];
      return ee.missing_nodes > 0 && P.push(`${ee.missing_nodes} missing node${ee.missing_nodes > 1 ? "s" : ""}`), ee.missing_models > 0 && P.push(`${ee.missing_models} missing model${ee.missing_models > 1 ? "s" : ""}`), ee.models_with_category_mismatch && ee.models_with_category_mismatch > 0 && P.push(`${ee.models_with_category_mismatch} model${ee.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), ee.pending_downloads && ee.pending_downloads > 0 && P.push(`${ee.pending_downloads} pending download${ee.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    function de(ee) {
      const P = ee.sync_state === "new" ? "New" : ee.sync_state === "modified" ? "Modified" : ee.sync_state === "synced" ? "Synced" : ee.sync_state;
      return ee.has_path_sync_issues && ee.models_needing_path_sync && ee.models_needing_path_sync > 0 ? `${ee.models_needing_path_sync} model path${ee.models_needing_path_sync > 1 ? "s" : ""} need${ee.models_needing_path_sync === 1 ? "s" : ""} sync` : P || "Unknown";
    }
    return ze(D), (ee, P) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, { title: "WORKFLOWS" }, {
            actions: i(() => [
              L.value.length > 0 ? (s(), S(se, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: J
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
          y.value ? (s(), S(nt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), S(lt, {
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
                (s(!0), o(G, null, te(I.value, (E) => (s(), S(Ne, {
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
                    g(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => z(E.name)
                    }, {
                      default: i(() => [...P[10] || (P[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(se, {
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
                (s(!0), o(G, null, te(B.value, (E) => (s(), S(Ne, {
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
                    g(se, {
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
                (s(!0), o(G, null, te(W.value, (E) => (s(), S(Ne, {
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
                    g(se, {
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
                (s(!0), o(G, null, te(T.value, (E) => (s(), S(Ne, {
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
                    g(se, {
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
                !b.value && F.value.length > 5 ? (s(), S(se, {
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
      h.value && C.value ? (s(), S(Pl, {
        key: 0,
        "workflow-name": C.value,
        onClose: P[3] || (P[3] = (E) => h.value = !1),
        onResolve: P[4] || (P[4] = (E) => z(C.value)),
        onRefresh: P[5] || (P[5] = (E) => d("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      k.value && C.value ? (s(), S(pu, {
        key: 1,
        "workflow-name": C.value,
        onClose: P[6] || (P[6] = (E) => k.value = !1),
        onInstall: K,
        onRefresh: P[7] || (P[7] = (E) => d("refresh")),
        onRestart: ae
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Vu = /* @__PURE__ */ X(Fu, [["__scopeId", "data-v-591d06d5"]]), Au = /* @__PURE__ */ Y({
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
}), Ct = /* @__PURE__ */ X(Au, [["__scopeId", "data-v-ccb7816e"]]), Wu = {
  key: 0,
  class: "model-details"
}, Gu = { class: "detail-section" }, ju = { class: "detail-row" }, Hu = { class: "detail-value mono" }, qu = { class: "detail-row" }, Ku = { class: "detail-value mono" }, Yu = { class: "detail-row" }, Xu = { class: "detail-value mono" }, Qu = { class: "detail-row" }, Zu = { class: "detail-value" }, Ju = { class: "detail-row" }, em = { class: "detail-value" }, tm = { class: "detail-row" }, sm = { class: "detail-value" }, om = { class: "detail-section" }, am = { class: "section-header" }, nm = {
  key: 0,
  class: "locations-list"
}, lm = { class: "location-path mono" }, im = {
  key: 0,
  class: "location-modified"
}, rm = ["onClick"], dm = {
  key: 1,
  class: "empty-state"
}, cm = { class: "detail-section" }, um = { class: "section-header" }, mm = {
  key: 0,
  class: "sources-list"
}, vm = { class: "source-type" }, fm = ["href"], gm = ["disabled", "onClick"], pm = {
  key: 1,
  class: "empty-state"
}, hm = { class: "add-source-form" }, ym = ["disabled"], wm = {
  key: 2,
  class: "source-error"
}, km = {
  key: 3,
  class: "source-success"
}, bm = /* @__PURE__ */ Y({
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
        g(ot, {
          title: `Model Details: ${((z = m.value) == null ? void 0 : z.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: u.value,
          onClose: x[5] || (x[5] = (J) => D.$emit("close"))
        }, {
          body: i(() => {
            var J, K, ae, me;
            return [
              m.value ? (s(), o("div", Wu, [
                e("section", Gu, [
                  e("div", ju, [
                    x[6] || (x[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Hu, n(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[0] || (x[0] = (de) => I(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", qu, [
                    x[7] || (x[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Ku, n(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[1] || (x[1] = (de) => I(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Yu, [
                    x[8] || (x[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Xu, n(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[2] || (x[2] = (de) => I(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Qu, [
                    x[9] || (x[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Zu, n(O(m.value.size)), 1)
                  ]),
                  e("div", Ju, [
                    x[10] || (x[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", em, n(m.value.category), 1)
                  ]),
                  e("div", tm, [
                    x[11] || (x[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", sm, n(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", om, [
                  e("h4", am, "Locations (" + n(((J = m.value.locations) == null ? void 0 : J.length) || 0) + ")", 1),
                  (K = m.value.locations) != null && K.length ? (s(), o("div", nm, [
                    (s(!0), o(G, null, te(m.value.locations, (de, ee) => (s(), o("div", {
                      key: ee,
                      class: "location-item"
                    }, [
                      e("span", lm, n(de.path), 1),
                      de.modified ? (s(), o("span", im, "Modified: " + n(de.modified), 1)) : c("", !0),
                      de.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => B(de.path)
                      }, " Open File Location ", 8, rm)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", dm, "No locations found"))
                ]),
                e("section", cm, [
                  e("h4", um, "Download Sources (" + n(((ae = m.value.sources) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (me = m.value.sources) != null && me.length ? (s(), o("div", mm, [
                    (s(!0), o(G, null, te(m.value.sources, (de, ee) => (s(), o("div", {
                      key: ee,
                      class: "source-item"
                    }, [
                      e("span", vm, n(de.type) + ":", 1),
                      e("a", {
                        href: de.url,
                        target: "_blank",
                        class: "source-url"
                      }, n(de.url), 9, fm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === de.url,
                        onClick: (P) => F(de.url)
                      }, n(k.value === de.url ? "..." : "×"), 9, gm)
                    ]))), 128))
                  ])) : (s(), o("div", pm, " No download sources configured ")),
                  e("div", hm, [
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
                    }, n(h.value ? "Adding..." : "Add Source"), 9, ym)
                  ]),
                  C.value ? (s(), o("p", wm, n(C.value), 1)) : c("", !0),
                  L.value ? (s(), o("p", km, n(L.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: x[4] || (x[4] = (J) => D.$emit("close"))
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
}), _s = /* @__PURE__ */ X(bm, [["__scopeId", "data-v-f15cbb56"]]), _m = /* @__PURE__ */ Y({
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
        const J = D.indexOf(x), K = D.indexOf(z);
        return J >= 0 && K >= 0 ? J - K : J >= 0 ? -1 : K >= 0 ? 1 : x.localeCompare(z);
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
          l.value ? (s(), S(nt, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (s(), S(lt, {
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
            (s(!0), o(G, null, te(R.value, (x) => (s(), S(Me, {
              key: x.type,
              title: x.type.toUpperCase(),
              count: x.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, te(x.models, (z) => (s(), S(Ne, {
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
                    g(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => I(z)
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
                (s(!0), o(G, null, te(f.value, (x) => (s(), S(Ne, {
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
                    g(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => W(x.filename)
                    }, {
                      default: i(() => [...D[8] || (D[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(se, {
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
      g(at, {
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
          g(se, {
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
}), $m = /* @__PURE__ */ X(_m, [["__scopeId", "data-v-cb4f12b3"]]), Cm = {
  key: 0,
  class: "indexing-progress"
}, xm = { class: "progress-info" }, Sm = { class: "progress-label" }, Im = { class: "progress-count" }, Em = { class: "progress-bar" }, Mm = { class: "modal-content" }, zm = { class: "modal-header" }, Lm = { class: "modal-body" }, Dm = { class: "input-group" }, Rm = { class: "current-path" }, Nm = { class: "input-group" }, Tm = { class: "modal-footer" }, Um = { class: "modal-content" }, Pm = { class: "modal-header" }, Bm = { class: "modal-body" }, Om = { class: "input-group" }, Fm = { class: "input-group" }, Vm = { class: "modal-footer" }, Am = /* @__PURE__ */ Y({
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
    function J(P) {
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
    async function ee() {
      try {
        const P = await p();
        f.value = P.path;
      } catch {
      }
    }
    return ze(() => {
      de(), ee();
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
              g(se, {
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
              g(se, {
                variant: "primary",
                size: "sm",
                onClick: E[0] || (E[0] = (ne) => $.value = !0)
              }, {
                default: i(() => [...E[15] || (E[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(se, {
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
          F.value ? (s(), o("div", Cm, [
            e("div", xm, [
              e("span", Sm, n(F.value.message), 1),
              e("span", Im, n(F.value.current) + "/" + n(F.value.total), 1)
            ]),
            e("div", Em, [
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
          u.value || F.value ? (s(), S(nt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (s(), S(lt, {
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
            (s(!0), o(G, null, te(x.value, (ne) => (s(), S(Me, {
              key: ne.type,
              title: ne.type.toUpperCase(),
              count: ne.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(G, null, te(ne.models, (q) => (s(), S(Ne, {
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
                    g(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ie) => J(q)
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
      g(at, {
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
          e("div", Mm, [
            e("div", zm, [
              E[20] || (E[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[6] || (E[6] = (ne) => $.value = !1)
              }, "✕")
            ]),
            e("div", Lm, [
              e("div", Dm, [
                E[21] || (E[21] = e("label", null, "Current Directory", -1)),
                e("code", Rm, n(f.value || "Not set"), 1)
              ]),
              e("div", Nm, [
                E[22] || (E[22] = e("label", null, "New Directory Path", -1)),
                g(He, {
                  modelValue: R.value,
                  "onUpdate:modelValue": E[7] || (E[7] = (ne) => R.value = ne),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              E[23] || (E[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Tm, [
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
          e("div", Um, [
            e("div", Pm, [
              E[25] || (E[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[10] || (E[10] = (ne) => I.value = !1)
              }, "✕")
            ]),
            e("div", Bm, [
              e("div", Om, [
                E[26] || (E[26] = e("label", null, "Download URL", -1)),
                g(He, {
                  modelValue: B.value,
                  "onUpdate:modelValue": E[11] || (E[11] = (ne) => B.value = ne),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Fm, [
                E[27] || (E[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(He, {
                  modelValue: W.value,
                  "onUpdate:modelValue": E[12] || (E[12] = (ne) => W.value = ne),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              E[28] || (E[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Vm, [
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
}), Wm = /* @__PURE__ */ X(Am, [["__scopeId", "data-v-73b78d84"]]), Gm = { class: "node-details" }, jm = { class: "status-row" }, Hm = {
  key: 0,
  class: "detail-row"
}, qm = { class: "value" }, Km = { class: "detail-row" }, Ym = { class: "value" }, Xm = {
  key: 1,
  class: "detail-row"
}, Qm = { class: "value mono" }, Zm = {
  key: 2,
  class: "detail-row"
}, Jm = ["href"], ev = {
  key: 3,
  class: "detail-row"
}, tv = { class: "value mono small" }, sv = { class: "detail-row" }, ov = {
  key: 0,
  class: "value"
}, av = {
  key: 1,
  class: "workflow-list"
}, nv = /* @__PURE__ */ Y({
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
    return (m, l) => (s(), S(ot, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (u) => d("close"))
    }, {
      body: i(() => [
        e("div", Gm, [
          e("div", jm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", p.value])
            }, n(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", Hm, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", qm, n(t.node.source === "development" ? "" : "v") + n(t.node.version), 1)
          ])) : c("", !0),
          e("div", Km, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Ym, n(y.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Xm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Qm, n(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", Zm, [
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
            ], 8, Jm)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", ev, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", tv, n(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", sv, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", ov, " Not used in any workflows ")) : (s(), o("div", av, [
              (s(!0), o(G, null, te(t.node.used_in_workflows, (u) => (s(), o("span", {
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
}), lv = /* @__PURE__ */ X(nv, [["__scopeId", "data-v-b342f626"]]), iv = { key: 0 }, rv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, dv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, cv = /* @__PURE__ */ Y({
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
          var J, K;
          return z.name.toLowerCase().includes(x) || ((J = z.description) == null ? void 0 : J.toLowerCase().includes(x)) || ((K = z.repository) == null ? void 0 : K.toLowerCase().includes(x));
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
            onInfoClick: z[0] || (z[0] = (J) => h.value = !0)
          }, {
            actions: i(() => [
              g(se, {
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
            "onUpdate:modelValue": z[1] || (z[1] = (J) => b.value = J),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), S(nt, {
            key: 0,
            message: "Loading nodes..."
          })) : u.value ? (s(), S(lt, {
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
                (s(!0), o(G, null, te(f.value, (J) => (s(), S(Ne, {
                  key: J.name,
                  status: "warning"
                }, {
                  icon: i(() => [...z[6] || (z[6] = [
                    w("?", -1)
                  ])]),
                  title: i(() => [
                    w(n(J.name), 1)
                  ]),
                  subtitle: i(() => [...z[7] || (z[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(xe, {
                      label: "Used by:",
                      value: O(J)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => I(J)
                    }, {
                      default: i(() => [...z[8] || (z[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => W(J.name)
                    }, {
                      default: i(() => [...z[9] || (z[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(se, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (K) => F(J.name)
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
                (s(!0), o(G, null, te(L.value, (J) => (s(), S(Ne, {
                  key: J.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    w(n(J.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    w(n(J.name), 1)
                  ]),
                  subtitle: i(() => [
                    J.version ? (s(), o("span", iv, n(J.source === "development" ? "" : "v") + n(J.version), 1)) : (s(), o("span", rv, "version unknown")),
                    e("span", dv, " • " + n(R(J.source)), 1)
                  ]),
                  details: i(() => [
                    g(xe, {
                      label: "Used by:",
                      value: O(J)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => I(J)
                    }, {
                      default: i(() => [...z[11] || (z[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(se, {
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
                (s(!0), o(G, null, te($.value, (J) => (s(), S(Ne, {
                  key: J.name,
                  status: "missing"
                }, {
                  icon: i(() => [...z[13] || (z[13] = [
                    w("!", -1)
                  ])]),
                  title: i(() => [
                    w(n(J.name), 1)
                  ]),
                  subtitle: i(() => [...z[14] || (z[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(xe, {
                      label: "Required by:",
                      value: O(J)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => I(J)
                    }, {
                      default: i(() => [...z[15] || (z[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => T(J.name)
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
      g(at, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: z[3] || (z[3] = (J) => h.value = !1)
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
          g(se, {
            variant: "primary",
            onClick: z[2] || (z[2] = (J) => h.value = !1)
          }, {
            default: i(() => [...z[18] || (z[18] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), S(lv, {
        key: 0,
        node: k.value,
        onClose: z[4] || (z[4] = (J) => k.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), uv = /* @__PURE__ */ X(cv, [["__scopeId", "data-v-4ac1465a"]]), mv = { class: "remote-url-display" }, vv = ["title"], fv = ["title"], gv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, pv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, hv = /* @__PURE__ */ Y({
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
    return (v, y) => (s(), o("div", mv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, n(d.value), 9, vv),
      e("button", {
        class: le(["copy-btn", { copied: a.value }]),
        onClick: p,
        title: a.value ? "Copied!" : "Copy URL"
      }, [
        a.value ? (s(), o("svg", pv, [...y[1] || (y[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", gv, [...y[0] || (y[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, fv)
    ]));
  }
}), cs = /* @__PURE__ */ X(hv, [["__scopeId", "data-v-7768a58d"]]), yv = { class: "remote-title" }, wv = {
  key: 0,
  class: "default-badge"
}, kv = {
  key: 1,
  class: "sync-badge"
}, bv = {
  key: 0,
  class: "ahead"
}, _v = {
  key: 1,
  class: "behind"
}, $v = {
  key: 0,
  class: "tracking-info"
}, Cv = /* @__PURE__ */ Y({
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
        e("div", yv, [
          e("span", null, n(t.remote.name), 1),
          p.value ? (s(), o("span", wv, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", kv, [
            t.syncStatus.ahead > 0 ? (s(), o("span", bv, "↑" + n(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (s(), o("span", _v, "↓" + n(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        v.value ? (s(), o("span", $v, " Tracking: " + n(t.trackingBranch), 1)) : c("", !0)
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
        g(se, {
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
        g(se, {
          variant: "secondary",
          size: "xs",
          onClick: l[1] || (l[1] = (u) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...l[4] || (l[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        p.value ? c("", !0) : (s(), S(se, {
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
}), xv = /* @__PURE__ */ X(Cv, [["__scopeId", "data-v-17362e45"]]), Sv = ["for"], Iv = {
  key: 0,
  class: "base-form-field-required"
}, Ev = { class: "base-form-field-input" }, Mv = {
  key: 1,
  class: "base-form-field-error"
}, zv = {
  key: 2,
  class: "base-form-field-hint"
}, Lv = /* @__PURE__ */ Y({
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
        t.required ? (s(), o("span", Iv, "*")) : c("", !0)
      ], 8, Sv)) : c("", !0),
      e("div", Ev, [
        ge(d.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Mv, n(t.error), 1)) : t.hint ? (s(), o("span", zv, n(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ X(Lv, [["__scopeId", "data-v-9a1cf296"]]), Dv = { class: "remote-form" }, Rv = { class: "form-header" }, Nv = { class: "form-body" }, Tv = {
  key: 0,
  class: "form-error"
}, Uv = { class: "form-actions" }, Pv = /* @__PURE__ */ Y({
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
    return (u, b) => (s(), o("div", Dv, [
      e("div", Rv, [
        g(Ae, null, {
          default: i(() => [
            w(n(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Nv, [
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
        y.value ? (s(), o("div", Tv, n(y.value), 1)) : c("", !0)
      ]),
      e("div", Uv, [
        g(se, {
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
        g(se, {
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
}), Bv = /* @__PURE__ */ X(Pv, [["__scopeId", "data-v-56021b18"]]), Ov = { key: 0 }, Fv = /* @__PURE__ */ Y({
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
    function J() {
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
              $.value ? c("", !0) : (s(), S(se, {
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
          b.value ? (s(), S(nt, {
            key: 0,
            message: "Loading remotes..."
          })) : h.value ? (s(), S(lt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            $.value ? (s(), S(Bv, {
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
                l.value ? (s(), o("span", Ov, " • Tracking: " + n(l.value.remote) + "/" + n(l.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            O.value.length && !$.value ? (s(), S(Me, {
              key: 2,
              title: "REMOTES",
              count: O.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, te(O.value, (me) => {
                  var de;
                  return s(), S(xv, {
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
                g(se, {
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
      g(at, {
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
          g(se, {
            variant: "link",
            onClick: J
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
}), Vv = /* @__PURE__ */ X(Fv, [["__scopeId", "data-v-a75719bb"]]), Av = { class: "setting-info" }, Wv = { class: "setting-label" }, Gv = {
  key: 0,
  class: "required-marker"
}, jv = {
  key: 0,
  class: "setting-description"
}, Hv = { class: "setting-control" }, qv = /* @__PURE__ */ Y({
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
      e("div", Av, [
        e("div", Wv, [
          w(n(t.label) + " ", 1),
          t.required ? (s(), o("span", Gv, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", jv, n(t.description), 1)) : c("", !0)
      ]),
      e("div", Hv, [
        ge(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), st = /* @__PURE__ */ X(qv, [["__scopeId", "data-v-cb5d236c"]]), Kv = { class: "toggle" }, Yv = ["checked", "disabled"], Xv = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", Kv, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked)),
        class: "toggle-input"
      }, null, 40, Yv),
      a[1] || (a[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ht = /* @__PURE__ */ X(Xv, [["__scopeId", "data-v-71c0f550"]]), Qv = { class: "settings-section" }, Zv = { class: "path-setting" }, Jv = { class: "path-value" }, ef = { class: "path-setting" }, tf = { class: "path-value" }, sf = { class: "settings-section" }, of = { class: "settings-section" }, af = { class: "settings-section" }, nf = /* @__PURE__ */ Y({
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
            g(se, {
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
            C.value ? (s(), S(se, {
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
        d.value ? (s(), S(nt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (s(), S(lt, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: L
        }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
          g(Me, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var B, W;
              return [
                e("div", Qv, [
                  e("div", Zv, [
                    I[7] || (I[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    I[8] || (I[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Jv, n(((B = y.value) == null ? void 0 : B.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", ef, [
                    I[9] || (I[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    I[10] || (I[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", tf, n(((W = y.value) == null ? void 0 : W.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(Me, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", sf, [
                g(st, {
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
                g(st, {
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
              e("div", of, [
                g(st, {
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
              e("div", af, [
                g(st, {
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
                g(st, {
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
}), lf = /* @__PURE__ */ X(nf, [["__scopeId", "data-v-7861bd35"]]), rf = /* @__PURE__ */ Y({
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
              g(se, {
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
          d.value ? (s(), S(nt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (s(), S(lt, {
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
              (s(!0), o(G, null, te(m.value, (h, k) => (s(), o("div", {
                key: k,
                class: le(`log-line log-level-${h.level.toLowerCase()}`)
              }, n(h.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(at, {
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
          g(se, {
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
}), df = /* @__PURE__ */ X(rf, [["__scopeId", "data-v-39f6a756"]]), cf = /* @__PURE__ */ Y({
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
              g(se, {
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
          p.value ? (s(), S(nt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), S(lt, {
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
              (s(!0), o(G, null, te(u.value, (C, L) => (s(), o("div", {
                key: L,
                class: le(`log-line log-level-${C.level.toLowerCase()}`)
              }, n(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(at, {
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
          g(se, {
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
}), uf = /* @__PURE__ */ X(cf, [["__scopeId", "data-v-4f1e6f72"]]), mf = { class: "env-title" }, vf = {
  key: 0,
  class: "current-badge"
}, ff = {
  key: 0,
  class: "branch-info"
}, gf = /* @__PURE__ */ Y({
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
        e("div", mf, [
          e("span", null, n(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", vf, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", ff, [
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
}), pf = /* @__PURE__ */ X(gf, [["__scopeId", "data-v-9231917a"]]), hf = { class: "env-details" }, yf = { class: "status-row" }, wf = {
  key: 0,
  class: "detail-row"
}, kf = { class: "value mono" }, bf = {
  key: 1,
  class: "detail-row"
}, _f = { class: "value mono small" }, $f = { class: "detail-row" }, Cf = { class: "value" }, xf = { class: "detail-row" }, Sf = { class: "value" }, If = { class: "detail-row" }, Ef = { class: "value" }, Mf = {
  key: 2,
  class: "section-divider"
}, zf = {
  key: 3,
  class: "detail-row"
}, Lf = { class: "value" }, Df = {
  key: 4,
  class: "detail-row"
}, Rf = { class: "value" }, Nf = { class: "footer-actions" }, Tf = /* @__PURE__ */ Y({
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
    return (p, v) => (s(), S(ot, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (y) => a("close"))
    }, {
      body: i(() => [
        e("div", hf, [
          e("div", yf, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, n(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", wf, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", kf, n(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", bf, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", _f, n(t.environment.path), 1)
          ])) : c("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", $f, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Cf, n(t.environment.workflow_count), 1)
          ]),
          e("div", xf, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Sf, n(t.environment.node_count), 1)
          ]),
          e("div", If, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Ef, n(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Mf)) : c("", !0),
          t.environment.created_at ? (s(), o("div", zf, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Lf, n(d(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", Df, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Rf, n(d(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", Nf, [
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
}), Uf = /* @__PURE__ */ X(Tf, [["__scopeId", "data-v-59855453"]]), $s = [
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
], Ss = "auto", Pf = { class: "create-env-form" }, Bf = { class: "form-field" }, Of = { class: "form-field" }, Ff = ["value"], Vf = { class: "form-field" }, Af = ["disabled"], Wf = ["value"], Gf = { class: "form-field" }, jf = ["value"], Hf = { class: "form-field form-field--checkbox" }, qf = { class: "form-checkbox" }, Kf = /* @__PURE__ */ Y({
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
      await Gs(), (L = h.value) == null || L.focus(), C();
    }), (L, $) => (s(), S(ot, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: $[6] || ($[6] = (f) => a("close"))
    }, {
      body: i(() => [
        e("div", Pf, [
          e("div", Bf, [
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
          e("div", Of, [
            $[8] || ($[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": $[1] || ($[1] = (f) => v.value = f),
              class: "form-select"
            }, [
              (s(!0), o(G, null, te(he($s), (f) => (s(), o("option", {
                key: f,
                value: f
              }, n(f), 9, Ff))), 128))
            ], 512), [
              [bt, v.value]
            ])
          ]),
          e("div", Vf, [
            $[9] || ($[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": $[2] || ($[2] = (f) => y.value = f),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(G, null, te(u.value, (f) => (s(), o("option", {
                key: f.tag_name,
                value: f.tag_name
              }, n(f.name), 9, Wf))), 128))
            ], 8, Af), [
              [bt, y.value]
            ])
          ]),
          e("div", Gf, [
            $[10] || ($[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Be(e("select", {
              "onUpdate:modelValue": $[3] || ($[3] = (f) => m.value = f),
              class: "form-select"
            }, [
              (s(!0), o(G, null, te(he(xs), (f) => (s(), o("option", {
                key: f,
                value: f
              }, n(f) + n(f === "auto" ? " (detect GPU)" : ""), 9, jf))), 128))
            ], 512), [
              [bt, m.value]
            ])
          ]),
          e("div", Hf, [
            e("label", qf, [
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
}), Yf = /* @__PURE__ */ X(Kf, [["__scopeId", "data-v-a2f13447"]]), Xf = /* @__PURE__ */ Y({
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
      loadEnvironments: O
    }), (I, B) => (s(), o(G, null, [
      g(Oe, null, {
        header: i(() => [
          g(Fe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (W) => u.value = !0)
          }, {
            actions: i(() => [
              g(se, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: i(() => [...B[6] || (B[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              g(se, {
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
          y.value ? (s(), S(nt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), S(lt, {
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
                (s(!0), o(G, null, te(C.value, (W) => (s(), S(pf, {
                  key: W.name,
                  "environment-name": W.name,
                  "is-current": W.is_current,
                  "current-branch": W.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    W.is_current ? c("", !0) : (s(), S(se, {
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
                    g(se, {
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
                  g(se, {
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
      g(at, {
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
          g(se, {
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
      h.value ? (s(), S(Uf, {
        key: 0,
        environment: h.value,
        "can-delete": v.value.length > 1,
        onClose: B[4] || (B[4] = (W) => h.value = null),
        onDelete: R
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      b.value ? (s(), S(Yf, {
        key: 1,
        onClose: B[5] || (B[5] = (W) => b.value = !1),
        onCreate: L
      })) : c("", !0)
    ], 64));
  }
}), Qf = /* @__PURE__ */ X(Xf, [["__scopeId", "data-v-307d9926"]]), Zf = { class: "file-path" }, Jf = { class: "file-path-text" }, eg = ["title"], tg = /* @__PURE__ */ Y({
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
    return (p, v) => (s(), o("div", Zf, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Jf, n(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: a.value ? "Copied!" : "Copy path",
        onClick: d
      }, n(a.value ? "✓" : "📋"), 9, eg)) : c("", !0)
    ]));
  }
}), sg = /* @__PURE__ */ X(tg, [["__scopeId", "data-v-f0982173"]]), og = { class: "output-path-input" }, ag = { class: "export-actions" }, ng = {
  key: 1,
  class: "export-warning"
}, lg = /* @__PURE__ */ Y({
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
              g(se, {
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
                  e("div", og, [
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
              e("div", ag, [
                g(se, {
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
                a.value ? (s(), S(se, {
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
                        g(sg, {
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
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (s(), o("div", ng, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    g(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...u[15] || (u[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(se, {
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
      g(at, {
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
}), ig = /* @__PURE__ */ X(lg, [["__scopeId", "data-v-1777a9d5"]]), rg = { class: "file-input-wrapper" }, dg = ["accept", "multiple", "disabled"], cg = /* @__PURE__ */ Y({
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
    }), (m, l) => (s(), o("div", rg, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: y
      }, null, 40, dg),
      g(se, {
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
}), ug = /* @__PURE__ */ X(cg, [["__scopeId", "data-v-cd192091"]]), mg = {
  key: 0,
  class: "drop-zone-empty"
}, vg = { class: "drop-zone-text" }, fg = { class: "drop-zone-primary" }, gg = { class: "drop-zone-secondary" }, pg = { class: "drop-zone-actions" }, hg = {
  key: 1,
  class: "drop-zone-file"
}, yg = { class: "file-info" }, wg = { class: "file-details" }, kg = { class: "file-name" }, bg = { class: "file-size" }, _g = /* @__PURE__ */ Y({
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
      y.value ? (s(), o("div", hg, [
        e("div", yg, [
          R[1] || (R[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", wg, [
            e("div", kg, n(m.value), 1),
            e("div", bg, n(l.value), 1)
          ])
        ]),
        g(se, {
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
      ])) : (s(), o("div", mg, [
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
        e("div", vg, [
          e("p", fg, n(t.primaryText), 1),
          e("p", gg, n(t.secondaryText), 1)
        ]),
        e("div", pg, [
          g(ug, {
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
}), $g = /* @__PURE__ */ X(_g, [["__scopeId", "data-v-e00abbca"]]), Cg = { class: "import-preview" }, xg = { class: "preview-header" }, Sg = {
  key: 0,
  class: "source-env"
}, Ig = { class: "preview-content" }, Eg = { class: "preview-section" }, Mg = { class: "section-header" }, zg = { class: "section-info" }, Lg = { class: "section-count" }, Dg = {
  key: 0,
  class: "item-list"
}, Rg = { class: "item-name" }, Ng = {
  key: 0,
  class: "item-more"
}, Tg = { class: "preview-section" }, Ug = { class: "section-header" }, Pg = { class: "section-info" }, Bg = { class: "section-count" }, Og = {
  key: 0,
  class: "item-list"
}, Fg = { class: "item-details" }, Vg = { class: "item-name" }, Ag = { class: "item-meta" }, Wg = {
  key: 0,
  class: "item-more"
}, Gg = { class: "preview-section" }, jg = { class: "section-header" }, Hg = { class: "section-info" }, qg = { class: "section-count" }, Kg = {
  key: 0,
  class: "item-list"
}, Yg = { class: "item-name" }, Xg = {
  key: 0,
  class: "item-more"
}, Qg = {
  key: 0,
  class: "preview-section"
}, Zg = { class: "git-info" }, Jg = /* @__PURE__ */ Y({
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
    return (y, m) => (s(), o("div", Cg, [
      e("div", xg, [
        g(Ae, null, {
          default: i(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Sg, [
          m[1] || (m[1] = w(" From: ", -1)),
          g(ts, null, {
            default: i(() => [
              w(n(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Ig, [
        e("div", Eg, [
          e("div", Mg, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", zg, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Lg, n(a.value) + " file" + n(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Dg, [
            (s(!0), o(G, null, te(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Rg, n(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Ng, " +" + n(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Tg, [
          e("div", Ug, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Pg, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Bg, n(d.value) + " file" + n(d.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Og, [
            (s(!0), o(G, null, te(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Fg, [
                e("span", Vg, n(l.filename), 1),
                e("span", Ag, n(v(l.size)) + " • " + n(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Wg, " +" + n(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Gg, [
          e("div", jg, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Hg, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", qg, n(p.value) + " node" + n(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Kg, [
            (s(!0), o(G, null, te(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Yg, n(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Xg, " +" + n(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Qg, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Zg, [
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
}), ep = /* @__PURE__ */ X(Jg, [["__scopeId", "data-v-182fe113"]]), tp = { class: "import-options" }, sp = { class: "options-container" }, op = { class: "option-section" }, ap = { class: "conflict-options" }, np = ["value", "checked", "onChange"], lp = { class: "conflict-content" }, ip = { class: "conflict-label" }, rp = { class: "conflict-description" }, dp = { class: "option-section" }, cp = { class: "component-toggles" }, up = /* @__PURE__ */ Y({
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
    return (p, v) => (s(), o("div", tp, [
      g(Ae, null, {
        default: i(() => [...v[4] || (v[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", sp, [
        e("div", op, [
          g(es, null, {
            default: i(() => [...v[5] || (v[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", ap, [
            (s(), o(G, null, te(d, (y) => e("label", {
              key: y.value,
              class: le(["conflict-option", { active: t.conflictMode === y.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: y.value,
                checked: t.conflictMode === y.value,
                onChange: (m) => a("update:conflictMode", y.value)
              }, null, 40, np),
              e("div", lp, [
                e("span", ip, n(y.label), 1),
                e("span", rp, n(y.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", dp, [
          g(es, null, {
            default: i(() => [...v[6] || (v[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", cp, [
            g(st, {
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
            g(st, {
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
            g(st, {
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
            g(st, {
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
}), mp = /* @__PURE__ */ X(up, [["__scopeId", "data-v-0ec212b0"]]), vp = {
  key: 0,
  class: "import-empty"
}, fp = { class: "import-help" }, gp = {
  key: 1,
  class: "import-configure"
}, pp = { class: "selected-file-bar" }, hp = { class: "file-bar-content" }, yp = { class: "file-bar-info" }, wp = { class: "file-bar-name" }, kp = { class: "file-bar-size" }, bp = { class: "import-actions" }, _p = {
  key: 2,
  class: "import-progress"
}, $p = { class: "progress-content" }, Cp = { class: "progress-info" }, xp = { class: "progress-title" }, Sp = { class: "progress-detail" }, Ip = { class: "progress-bar" }, Ep = { class: "progress-status" }, Mp = {
  key: 3,
  class: "import-complete"
}, zp = { class: "complete-message" }, Lp = { class: "complete-title" }, Dp = { class: "complete-details" }, Rp = { class: "complete-actions" }, Np = /* @__PURE__ */ Y({
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
        !r.value && !a.value ? (s(), o("div", vp, [
          g($g, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", fp, [
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
        ])) : r.value && !a.value && !d.value ? (s(), o("div", gp, [
          e("div", pp, [
            e("div", hp, [
              f[7] || (f[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", yp, [
                e("div", wp, n(r.value.name), 1),
                e("div", kp, n(L(r.value.size)), 1)
              ])
            ]),
            g(se, {
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
          g(ep, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(mp, {
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
          !y.value.includeModels && l.value.models.length > 0 ? (s(), S(dt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", bp, [
            g(se, {
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
            g(se, {
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
        ])) : a.value ? (s(), o("div", _p, [
          e("div", $p, [
            f[11] || (f[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Cp, [
              e("div", xp, n(m.value.message), 1),
              e("div", Sp, n(m.value.detail), 1)
            ])
          ]),
          e("div", Ip, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Ep, n(m.value.percent) + "% complete ", 1)
        ])) : d.value ? (s(), o("div", Mp, [
          e("div", {
            class: le(["complete-icon", p.value ? "success" : "error"])
          }, n(p.value ? "✓" : "✕"), 3),
          e("div", zp, [
            e("div", Lp, n(p.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Dp, n(v.value), 1)
          ]),
          e("div", Rp, [
            g(se, {
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
}), Tp = /* @__PURE__ */ X(Np, [["__scopeId", "data-v-18e18eb5"]]), Up = { class: "header-info" }, Pp = { class: "commit-hash" }, Bp = {
  key: 0,
  class: "commit-refs"
}, Op = { class: "commit-message" }, Fp = { class: "commit-date" }, Vp = {
  key: 0,
  class: "loading"
}, Ap = {
  key: 1,
  class: "changes-section"
}, Wp = { class: "stats-row" }, Gp = { class: "stat" }, jp = { class: "stat insertions" }, Hp = { class: "stat deletions" }, qp = {
  key: 0,
  class: "change-group"
}, Kp = {
  key: 1,
  class: "change-group"
}, Yp = {
  key: 0,
  class: "version"
}, Xp = {
  key: 2,
  class: "change-group"
}, Qp = { class: "change-item" }, Zp = /* @__PURE__ */ Y({
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
    }), (m, l) => (s(), S(ot, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (u) => m.$emit("close"))
    }, {
      header: i(() => {
        var u, b, h, k;
        return [
          e("div", Up, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Pp, n(((u = d.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (k = (h = d.value) == null ? void 0 : h.refs) != null && k.length ? (s(), o("span", Bp, [
              (s(!0), o(G, null, te(d.value.refs, (C) => (s(), o("span", {
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
          e("div", Op, n(((u = d.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", Fp, n(((b = d.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (s(), o("div", Vp, "Loading details...")) : d.value ? (s(), o("div", Ap, [
            e("div", Wp, [
              e("span", Gp, n(d.value.stats.files_changed) + " files", 1),
              e("span", jp, "+" + n(d.value.stats.insertions), 1),
              e("span", Hp, "-" + n(d.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", qp, [
              g(Tt, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(G, null, te(d.value.changes.workflows.added, (h) => (s(), o("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(h), 1)
              ]))), 128)),
              (s(!0), o(G, null, te(d.value.changes.workflows.modified, (h) => (s(), o("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, n(h), 1)
              ]))), 128)),
              (s(!0), o(G, null, te(d.value.changes.workflows.deleted, (h) => (s(), o("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(h), 1)
              ]))), 128))
            ])) : c("", !0),
            y.value ? (s(), o("div", Kp, [
              g(Tt, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(G, null, te(d.value.changes.nodes.added, (h) => (s(), o("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(h.name), 1),
                h.version ? (s(), o("span", Yp, "(" + n(h.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(G, null, te(d.value.changes.nodes.removed, (h) => (s(), o("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(h.name), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.changes.models.resolved > 0 ? (s(), o("div", Xp, [
              g(Tt, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Qp, [
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
}), Jp = /* @__PURE__ */ X(Zp, [["__scopeId", "data-v-d256ff6d"]]), eh = { class: "dialog-message" }, th = {
  key: 0,
  class: "dialog-details"
}, sh = {
  key: 1,
  class: "dialog-warning"
}, oh = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), S(ot, {
      title: t.title,
      size: "sm",
      onClose: a[3] || (a[3] = (d) => r.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", eh, n(t.message), 1),
        t.details && t.details.length ? (s(), o("div", th, [
          (s(!0), o(G, null, te(t.details, (d, p) => (s(), o("div", {
            key: p,
            class: "detail-item"
          }, " • " + n(d), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", sh, [
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
}), ah = /* @__PURE__ */ X(oh, [["__scopeId", "data-v-3670b9f5"]]), nh = { class: "base-textarea-wrapper" }, lh = ["value", "rows", "placeholder", "disabled", "maxlength"], ih = {
  key: 0,
  class: "base-textarea-count"
}, rh = /* @__PURE__ */ Y({
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
    return (r, a) => (s(), o("div", nh, [
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
      }, null, 40, lh),
      t.showCharCount && t.maxLength ? (s(), o("div", ih, n(t.modelValue.length) + " / " + n(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), us = /* @__PURE__ */ X(rh, [["__scopeId", "data-v-5516e6fc"]]), dh = ["checked", "disabled"], ch = { class: "base-checkbox-box" }, uh = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, mh = {
  key: 0,
  class: "base-checkbox-label"
}, vh = /* @__PURE__ */ Y({
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
      }, null, 40, dh),
      e("span", ch, [
        t.modelValue ? (s(), o("svg", uh, [...a[1] || (a[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      r.$slots.default ? (s(), o("span", mh, [
        ge(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ms = /* @__PURE__ */ X(vh, [["__scopeId", "data-v-bf17c831"]]), fh = { class: "popover-header" }, gh = { class: "popover-body" }, ph = {
  key: 0,
  class: "changes-summary"
}, hh = {
  key: 0,
  class: "change-item"
}, yh = {
  key: 1,
  class: "change-item"
}, wh = {
  key: 2,
  class: "change-item"
}, kh = {
  key: 3,
  class: "change-item"
}, bh = {
  key: 4,
  class: "change-item"
}, _h = {
  key: 1,
  class: "no-changes"
}, $h = {
  key: 2,
  class: "loading"
}, Ch = {
  key: 3,
  class: "issues-error"
}, xh = { class: "error-header" }, Sh = { class: "error-title" }, Ih = { class: "issues-list" }, Eh = { class: "message-section" }, Mh = { class: "popover-footer" }, zh = {
  key: 1,
  class: "commit-popover"
}, Lh = { class: "popover-header" }, Dh = { class: "popover-body" }, Rh = {
  key: 0,
  class: "changes-summary"
}, Nh = {
  key: 0,
  class: "change-item"
}, Th = {
  key: 1,
  class: "change-item"
}, Uh = {
  key: 2,
  class: "change-item"
}, Ph = {
  key: 3,
  class: "change-item"
}, Bh = {
  key: 4,
  class: "change-item"
}, Oh = {
  key: 1,
  class: "no-changes"
}, Fh = {
  key: 2,
  class: "loading"
}, Vh = {
  key: 3,
  class: "issues-error"
}, Ah = { class: "error-header" }, Wh = { class: "error-title" }, Gh = { class: "issues-list" }, jh = { class: "message-section" }, Hh = { class: "popover-footer" }, qh = /* @__PURE__ */ Y({
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
          e("div", fh, [
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
          e("div", gh, [
            t.status && u.value ? (s(), o("div", ph, [
              t.status.workflows.new.length ? (s(), o("div", hh, [
                $[12] || ($[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", yh, [
                $[13] || ($[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", wh, [
                $[14] || ($[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", kh, [
                $[15] || ($[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", bh, [
                $[16] || ($[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (s(), o("div", _h, " No changes to commit ")) : (s(), o("div", $h, " Loading... ")),
            h.value ? (s(), o("div", Ch, [
              e("div", xh, [
                $[17] || ($[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Sh, n(b.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Ih, [
                (s(!0), o(G, null, te(b.value, (f) => (s(), o("div", {
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
            e("div", Eh, [
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
          e("div", Mh, [
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
    ])) : (s(), o("div", zh, [
      e("div", Lh, [
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
      e("div", Dh, [
        t.status && u.value ? (s(), o("div", Rh, [
          t.status.workflows.new.length ? (s(), o("div", Nh, [
            $[22] || ($[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Th, [
            $[23] || ($[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Uh, [
            $[24] || ($[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Ph, [
            $[25] || ($[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Bh, [
            $[26] || ($[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (s(), o("div", Oh, " No changes to commit ")) : (s(), o("div", Fh, " Loading... ")),
        h.value ? (s(), o("div", Vh, [
          e("div", Ah, [
            $[27] || ($[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Wh, n(b.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", Gh, [
            (s(!0), o(G, null, te(b.value, (f) => (s(), o("div", {
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
        e("div", jh, [
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
      e("div", Hh, [
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
}), Is = /* @__PURE__ */ X(qh, [["__scopeId", "data-v-d92153de"]]), Kh = { class: "modal-header" }, Yh = { class: "modal-body" }, Xh = { class: "switch-message" }, Qh = { class: "switch-details" }, Zh = { class: "modal-actions" }, Jh = /* @__PURE__ */ Y({
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
          e("div", Kh, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Yh, [
            e("p", Xh, [
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
            e("p", Qh, ' Your current work will be preserved. You can switch back to "' + n(t.fromEnvironment) + '" anytime. ', 1),
            a[10] || (a[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Zh, [
            g(se, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(se, {
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
}), e1 = /* @__PURE__ */ X(Jh, [["__scopeId", "data-v-e9c5253e"]]), t1 = { class: "progress-bar" }, s1 = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, a = U(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (d, p) => (s(), o("div", t1, [
      e("div", {
        class: le(["progress-fill", t.variant]),
        style: qe({ width: a.value })
      }, null, 6)
    ]));
  }
}), o1 = /* @__PURE__ */ X(s1, [["__scopeId", "data-v-1beb0512"]]), a1 = {
  key: 0,
  class: "modal-overlay"
}, n1 = { class: "modal-content" }, l1 = { class: "modal-body" }, i1 = { class: "progress-info" }, r1 = { class: "progress-percentage" }, d1 = { class: "progress-state" }, c1 = { class: "switch-steps" }, u1 = { class: "step-icon" }, m1 = { class: "step-label" }, v1 = /* @__PURE__ */ Y({
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
      t.show ? (s(), o("div", a1, [
        e("div", n1, [
          y[1] || (y[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", l1, [
            g(o1, {
              progress: t.progress,
              variant: d.value
            }, null, 8, ["progress", "variant"]),
            e("div", i1, [
              e("div", r1, n(t.progress) + "%", 1),
              e("div", d1, n(a.value), 1)
            ]),
            e("div", c1, [
              (s(!0), o(G, null, te(p.value, (m) => (s(), o("div", {
                key: m.state,
                class: le(["switch-step", m.status])
              }, [
                e("span", u1, n(m.icon), 1),
                e("span", m1, n(m.label), 1)
              ], 2))), 128))
            ]),
            y[0] || (y[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), f1 = /* @__PURE__ */ X(v1, [["__scopeId", "data-v-768a5078"]]), g1 = { class: "modal-header" }, p1 = { class: "modal-body" }, h1 = {
  key: 0,
  class: "node-section"
}, y1 = { class: "node-list" }, w1 = {
  key: 1,
  class: "node-section"
}, k1 = { class: "node-list" }, b1 = { class: "modal-actions" }, _1 = /* @__PURE__ */ Y({
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
          e("div", g1, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", p1, [
            a[8] || (a[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", h1, [
              a[6] || (a[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", y1, [
                (s(!0), o(G, null, te(t.mismatchDetails.missing_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item add"
                }, " + " + n(d), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", w1, [
              a[7] || (a[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", k1, [
                (s(!0), o(G, null, te(t.mismatchDetails.extra_nodes, (d) => (s(), o("div", {
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
          e("div", b1, [
            g(se, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(se, {
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
}), $1 = /* @__PURE__ */ X(_1, [["__scopeId", "data-v-7cad7518"]]), C1 = { class: "wizard-steps" }, x1 = { class: "step-number" }, S1 = {
  key: 0,
  class: "wizard-step"
}, I1 = { class: "form-field" }, E1 = ["placeholder"], M1 = {
  key: 0,
  class: "form-error"
}, z1 = { class: "form-field form-field--checkbox" }, L1 = { class: "form-checkbox" }, D1 = {
  key: 0,
  class: "form-field"
}, R1 = ["placeholder"], N1 = {
  key: 0,
  class: "form-info"
}, T1 = {
  key: 1,
  class: "form-suggestion"
}, U1 = {
  key: 2,
  class: "form-error"
}, P1 = {
  key: 3,
  class: "form-info"
}, B1 = {
  key: 1,
  class: "wizard-progress"
}, O1 = { class: "progress-bar" }, F1 = { class: "progress-message" }, V1 = {
  key: 1,
  class: "wizard-step"
}, A1 = { class: "form-field" }, W1 = { class: "form-field" }, G1 = ["value"], j1 = { class: "form-field" }, H1 = ["disabled"], q1 = ["value"], K1 = { class: "form-field" }, Y1 = ["value"], X1 = { class: "form-field form-field--checkbox" }, Q1 = { class: "form-checkbox" }, Z1 = {
  key: 0,
  class: "wizard-progress"
}, J1 = { class: "progress-bar" }, ey = { class: "progress-message" }, ty = {
  key: 1,
  class: "form-error"
}, At = 10, sy = 600 * 1e3, oy = 1800 * 1e3, ay = /* @__PURE__ */ Y({
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
    } = De(), b = _(1), h = _(a.defaultPath), k = _(!!a.detectedModelsDir), C = _(a.detectedModelsDir || ""), L = _(null), $ = _(null), f = _(null), R = _(null), O = _("my-new-env"), I = _(Cs), B = _("latest"), W = _(Ss), F = _(!0), T = _(null), D = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), x = _(!1), z = _(!1), J = _(!1), K = _({ progress: 0, message: "" }), ae = _({ progress: 0, message: "" }), me = _(0), de = _(null), ee = _(0), P = _(null), E = U(() => {
      var be, ie;
      const oe = (be = h.value) == null ? void 0 : be.trim(), V = !L.value, Z = !k.value || !$.value && ((ie = C.value) == null ? void 0 : ie.trim());
      return oe && V && Z;
    }), ne = U(() => {
      var oe;
      return (oe = O.value) == null ? void 0 : oe.trim();
    });
    async function q() {
      var oe;
      if (L.value = null, !!((oe = h.value) != null && oe.trim()))
        try {
          const V = await y({ path: h.value, type: "workspace" });
          V.valid || (L.value = V.error || "Invalid path");
        } catch (V) {
          L.value = V instanceof Error ? V.message : "Validation failed";
        }
    }
    async function Ie() {
      var oe;
      if ($.value = null, f.value = null, R.value = null, !!((oe = C.value) != null && oe.trim()))
        try {
          const V = await y({ path: C.value, type: "models" });
          if (V.valid)
            R.value = V.model_count ?? null;
          else if ($.value = V.error || "Invalid path", V.suggestion) {
            f.value = V.suggestion, C.value = V.suggestion, $.value = null;
            const Z = await y({ path: V.suggestion, type: "models" });
            Z.valid && (R.value = Z.model_count ?? null);
          }
        } catch (V) {
          $.value = V instanceof Error ? V.message : "Validation failed";
        }
    }
    async function $e() {
      var oe, V, Z;
      if (L.value = null, $.value = null, await q(), !L.value && !(k.value && ((oe = C.value) != null && oe.trim()) && (await Ie(), $.value))) {
        z.value = !0;
        try {
          await p({
            workspace_path: ((V = h.value) == null ? void 0 : V.trim()) || a.defaultPath,
            models_directory: k.value && ((Z = C.value) == null ? void 0 : Z.trim()) || null
          }), me.value = 0, de.value = Date.now();
          const be = setInterval(async () => {
            if (de.value && Date.now() - de.value > sy) {
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
      J.value = !0, T.value = null;
      try {
        const oe = {
          name: O.value.trim() || "my-new-env",
          python_version: I.value,
          comfyui_version: B.value,
          torch_backend: W.value,
          switch_after: F.value
        };
        if ((await m(oe)).status === "started") {
          ee.value = 0, P.value = Date.now();
          const Z = setInterval(async () => {
            if (P.value && Date.now() - P.value > oy) {
              clearInterval(Z), J.value = !1, T.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await l();
              if (ee.value = 0, be.state === "idle" && J.value) {
                clearInterval(Z), J.value = !1, T.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              ae.value = {
                progress: be.state === "creating" ? 50 : be.state === "complete" ? 100 : 0,
                message: be.message
              }, be.state === "complete" ? (clearInterval(Z), d("complete", be.environment_name || oe.name)) : be.state === "error" && (clearInterval(Z), J.value = !1, T.value = be.error || "Environment creation failed");
            } catch (be) {
              ee.value++, console.warn(`Polling failure ${ee.value}/${At}:`, be), ee.value >= At && (clearInterval(Z), J.value = !1, T.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (oe) {
        J.value = !1, T.value = oe instanceof Error ? oe.message : "Unknown error";
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
    }), (oe, V) => (s(), S(ot, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": b.value > 1,
      "close-on-overlay-click": !1,
      onClose: V[9] || (V[9] = (Z) => oe.$emit("close"))
    }, {
      body: i(() => [
        e("div", C1, [
          e("div", {
            class: le(["step", { active: b.value === 1, complete: b.value > 1 }])
          }, [
            e("span", x1, n(b.value > 1 ? "✓" : "1"), 1),
            V[10] || (V[10] = e("span", { class: "step-label" }, "Workspace", -1))
          ], 2),
          V[12] || (V[12] = e("div", { class: "step-connector" }, null, -1)),
          e("div", {
            class: le(["step", { active: b.value === 2 }])
          }, [...V[11] || (V[11] = [
            e("span", { class: "step-number" }, "2", -1),
            e("span", { class: "step-label" }, "Environment", -1)
          ])], 2)
        ]),
        b.value === 1 ? (s(), o("div", S1, [
          V[16] || (V[16] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
          e("div", I1, [
            V[13] || (V[13] = e("label", { class: "form-label" }, "Workspace Path", -1)),
            Be(e("input", {
              "onUpdate:modelValue": V[0] || (V[0] = (Z) => h.value = Z),
              type: "text",
              class: "form-input",
              placeholder: t.defaultPath,
              onBlur: q
            }, null, 40, E1), [
              [Nt, h.value]
            ]),
            L.value ? (s(), o("p", M1, n(L.value), 1)) : c("", !0)
          ]),
          e("div", z1, [
            e("label", L1, [
              Be(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": V[1] || (V[1] = (Z) => k.value = Z)
              }, null, 512), [
                [Jt, k.value]
              ]),
              V[14] || (V[14] = e("span", null, "I have existing ComfyUI models", -1))
            ])
          ]),
          k.value ? (s(), o("div", D1, [
            V[15] || (V[15] = e("label", { class: "form-label" }, "Models Directory", -1)),
            Be(e("input", {
              "onUpdate:modelValue": V[2] || (V[2] = (Z) => C.value = Z),
              type: "text",
              class: "form-input",
              placeholder: t.detectedModelsDir || "/path/to/models",
              onBlur: Ie
            }, null, 40, R1), [
              [Nt, C.value]
            ]),
            t.detectedModelsDir && !C.value ? (s(), o("p", N1, " Detected: " + n(t.detectedModelsDir), 1)) : c("", !0),
            f.value ? (s(), o("p", T1, " Did you mean: " + n(f.value), 1)) : c("", !0),
            $.value ? (s(), o("p", U1, n($.value), 1)) : c("", !0),
            R.value !== null && !$.value ? (s(), o("p", P1, " Found " + n(R.value) + " model files ", 1)) : c("", !0)
          ])) : c("", !0),
          z.value ? (s(), o("div", B1, [
            e("div", O1, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${K.value.progress}%` })
              }, null, 4)
            ]),
            e("p", F1, n(K.value.message), 1)
          ])) : c("", !0)
        ])) : c("", !0),
        b.value === 2 ? (s(), o("div", V1, [
          V[22] || (V[22] = e("p", { class: "wizard-intro" }, " Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows. ", -1)),
          e("div", A1, [
            V[17] || (V[17] = e("label", { class: "form-label" }, "Environment Name", -1)),
            Be(e("input", {
              "onUpdate:modelValue": V[3] || (V[3] = (Z) => O.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-new-env"
            }, null, 512), [
              [Nt, O.value]
            ])
          ]),
          e("div", W1, [
            V[18] || (V[18] = e("label", { class: "form-label" }, "Python Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": V[4] || (V[4] = (Z) => I.value = Z),
              class: "form-select"
            }, [
              (s(!0), o(G, null, te(he($s), (Z) => (s(), o("option", {
                key: Z,
                value: Z
              }, n(Z), 9, G1))), 128))
            ], 512), [
              [bt, I.value]
            ])
          ]),
          e("div", j1, [
            V[19] || (V[19] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": V[5] || (V[5] = (Z) => B.value = Z),
              class: "form-select",
              disabled: x.value
            }, [
              (s(!0), o(G, null, te(D.value, (Z) => (s(), o("option", {
                key: Z.tag_name,
                value: Z.tag_name
              }, n(Z.name), 9, q1))), 128))
            ], 8, H1), [
              [bt, B.value]
            ])
          ]),
          e("div", K1, [
            V[20] || (V[20] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Be(e("select", {
              "onUpdate:modelValue": V[6] || (V[6] = (Z) => W.value = Z),
              class: "form-select"
            }, [
              (s(!0), o(G, null, te(he(xs), (Z) => (s(), o("option", {
                key: Z,
                value: Z
              }, n(Z) + n(Z === "auto" ? " (detect GPU)" : ""), 9, Y1))), 128))
            ], 512), [
              [bt, W.value]
            ])
          ]),
          e("div", X1, [
            e("label", Q1, [
              Be(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": V[7] || (V[7] = (Z) => F.value = Z),
                checked: ""
              }, null, 512), [
                [Jt, F.value]
              ]),
              V[21] || (V[21] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ]),
          J.value ? (s(), o("div", Z1, [
            e("div", J1, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${ae.value.progress}%` })
              }, null, 4)
            ]),
            e("p", ey, n(ae.value.message), 1)
          ])) : c("", !0),
          T.value ? (s(), o("div", ty, n(T.value), 1)) : c("", !0)
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
            disabled: J.value,
            onClick: V[8] || (V[8] = (Z) => b.value = 1)
          }, {
            default: i(() => [...V[23] || (V[23] = [
              w(" Back ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          g(re, {
            variant: "primary",
            disabled: !ne.value || J.value,
            onClick: Re
          }, {
            default: i(() => [
              w(n(J.value ? "Creating..." : "Create & Switch"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 64)) : c("", !0)
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), ny = /* @__PURE__ */ X(ay, [["__scopeId", "data-v-7b3b8364"]]), ly = { class: "comfygit-panel" }, iy = { class: "panel-header" }, ry = { class: "header-left" }, dy = {
  key: 0,
  class: "header-info"
}, cy = { class: "header-actions" }, uy = { class: "env-switcher" }, my = {
  key: 0,
  class: "header-info"
}, vy = { class: "branch-name" }, fy = { class: "panel-main" }, gy = { class: "sidebar" }, py = { class: "sidebar-section" }, hy = { class: "sidebar-section" }, yy = { class: "sidebar-section" }, wy = { class: "content-area" }, ky = {
  key: 0,
  class: "error-message"
}, by = {
  key: 1,
  class: "loading"
}, _y = {
  key: 4,
  class: "dialog-overlay"
}, $y = { class: "dialog-content create-progress-dialog" }, Cy = { class: "dialog-body create-progress-body" }, xy = { class: "create-progress-message" }, Sy = { class: "dialog-content env-selector-dialog" }, Iy = { class: "dialog-header" }, Ey = { class: "dialog-body" }, My = { class: "env-list" }, zy = { class: "env-info" }, Ly = { class: "env-name-row" }, Dy = { class: "env-indicator" }, Ry = { class: "env-name" }, Ny = {
  key: 0,
  class: "env-branch"
}, Ty = {
  key: 1,
  class: "current-label"
}, Uy = { class: "env-stats" }, Py = ["onClick"], By = { class: "toast-container" }, Oy = { class: "toast-icon" }, Fy = { class: "toast-message" }, Vy = /* @__PURE__ */ Y({
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
    } = De(), O = ys(), I = _(null), B = _([]), W = _([]), F = _([]), T = U(() => F.value.find((A) => A.is_current)), D = _(null), x = _(!1), z = U(() => {
      var A;
      return ((A = D.value) == null ? void 0 : A.state) || "managed";
    }), J = _(!1), K = _(null), ae = _(null), me = _(!1), de = _(null), ee = _(null), P = _(!1), E = _(!1), ne = _(""), q = _({ state: "idle", progress: 0, message: "" });
    let Ie = null, $e = null;
    const Re = _(!1), Ge = _({ state: "idle", message: "" }), oe = _(null);
    let V = null;
    const Z = _("status"), be = _("this-env");
    function ie(A, M) {
      Z.value = A, be.value = M;
    }
    function ut(A) {
      const ce = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[A];
      ce && ie(ce.view, ce.section);
    }
    function xt() {
      ie("branches", "this-env");
    }
    function St() {
      a("close"), setTimeout(() => {
        var M;
        const A = document.querySelectorAll("button.comfyui-button");
        for (const ce of A)
          if (((M = ce.textContent) == null ? void 0 : M.trim()) === "Manager") {
            ce.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const _e = _(null), it = _(!1), Je = _(!1), Ye = _([]);
    let It = 0;
    function fe(A, M = "info", ce = 3e3) {
      const Se = ++It;
      return Ye.value.push({ id: Se, message: A, type: M }), ce > 0 && setTimeout(() => {
        Ye.value = Ye.value.filter((Ue) => Ue.id !== Se);
      }, ce), Se;
    }
    function We(A) {
      Ye.value = Ye.value.filter((M) => M.id !== A);
    }
    function Q(A) {
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
    const we = U(() => {
      if (!I.value) return "neutral";
      const A = I.value.workflows, M = A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || I.value.has_changes;
      return I.value.comparison.is_synced ? M ? "warning" : "success" : "error";
    });
    U(() => I.value ? we.value === "success" ? "All synced" : we.value === "warning" ? "Uncommitted changes" : we.value === "error" ? "Not synced" : "" : "");
    async function Ce() {
      J.value = !0, K.value = null;
      try {
        const [A, M, ce, Se] = await Promise.all([
          d(!0),
          p(),
          v(),
          b()
        ]);
        I.value = A, B.value = M.commits, W.value = ce.branches, F.value = Se, a("statusUpdate", A), de.value && await de.value.loadWorkflows(!0);
      } catch (A) {
        K.value = A instanceof Error ? A.message : "Failed to load status", I.value = null, B.value = [], W.value = [];
      } finally {
        J.value = !1;
      }
    }
    function yt(A) {
      ae.value = A;
    }
    async function mt(A) {
      var ce;
      ae.value = null;
      const M = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      _e.value = {
        title: M ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: M ? "You have uncommitted changes that will be lost." : `Checkout commit ${A.short_hash || ((ce = A.hash) == null ? void 0 : ce.slice(0, 7))}?`,
        details: M ? rs() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: M ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: M,
        onConfirm: async () => {
          var Pe;
          _e.value = null, ve();
          const Se = fe(`Checking out ${A.short_hash || ((Pe = A.hash) == null ? void 0 : Pe.slice(0, 7))}...`, "info", 0), Ue = await y(A.hash, M);
          We(Se), Ue.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Ue.message || "Checkout failed", "error");
        }
      };
    }
    async function Kt(A) {
      const M = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      _e.value = {
        title: M ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: M ? "You have uncommitted changes." : `Switch to branch "${A}"?`,
        details: M ? rs() : void 0,
        warning: M ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: M ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          _e.value = null, ve();
          const ce = fe(`Switching to ${A}...`, "info", 0), Se = await l(A, M);
          We(ce), Se.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Se.message || "Branch switch failed", "error");
        }
      };
    }
    async function j(A) {
      const M = fe(`Creating branch ${A}...`, "info", 0), ce = await m(A);
      We(M), ce.status === "success" ? (fe(`Branch "${A}" created`, "success"), await Ce()) : fe(ce.message || "Failed to create branch", "error");
    }
    async function N(A, M = !1) {
      const ce = async (Se) => {
        var Pe;
        const Ue = fe(`Deleting branch ${A}...`, "info", 0);
        try {
          const et = await u(A, Se);
          We(Ue), et.status === "success" ? (fe(`Branch "${A}" deleted`, "success"), await Ce()) : (Pe = et.message) != null && Pe.includes("not fully merged") ? _e.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${A}" has commits that haven't been merged.`,
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
            message: `The branch "${A}" has commits that haven't been merged.`,
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
        message: `Delete branch "${A}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          _e.value = null, await ce(M);
        }
      };
    }
    async function H(A) {
      ae.value = null;
      const M = prompt("Enter branch name:");
      if (M) {
        const ce = fe(`Creating branch ${M}...`, "info", 0), Se = await m(M, A.hash);
        We(ce), Se.status === "success" ? (fe(`Branch "${M}" created from ${A.short_hash}`, "success"), await Ce()) : fe(Se.message || "Failed to create branch", "error");
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
          var A;
          _e.value = null, ve(), fe("Restarting environment...", "info");
          try {
            (A = window.app) != null && A.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function rt() {
      _e.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var A;
          _e.value = null, fe("Stopping environment...", "info");
          try {
            (A = window.app) != null && A.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Xe(A) {
      me.value = !1, ne.value = A, P.value = !0;
    }
    async function Ot() {
      P.value = !1, E.value = !0, ve(), q.value = {
        progress: 10,
        state: vt(10),
        message: ft(10)
      };
      try {
        await h(ne.value), Ds(), Rs();
      } catch (A) {
        gt(), E.value = !1, fe(`Failed to initiate switch: ${A instanceof Error ? A.message : "Unknown error"}`, "error"), q.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function vt(A) {
      return A >= 100 ? "complete" : A >= 80 ? "validating" : A >= 60 ? "starting" : A >= 30 ? "syncing" : "preparing";
    }
    function ft(A) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[vt(A)] || "";
    }
    function Ds() {
      if ($e) return;
      let A = 10;
      const M = 60, ce = 5e3, Se = 100, Ue = (M - A) / (ce / Se);
      $e = window.setInterval(() => {
        if (A += Ue, A >= M && (A = M, gt()), q.value.progress < M) {
          const Pe = Math.floor(A);
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
          let A = await O.getStatus();
          if ((!A || A.state === "idle") && (A = await k()), !A)
            return;
          const M = A.progress || 0;
          M >= 60 && gt();
          const ce = Math.max(M, q.value.progress), Se = A.state && A.state !== "idle" && A.state !== "unknown", Ue = Se ? A.state : vt(ce), Pe = Se && A.message || ft(ce);
          q.value = {
            state: Ue,
            progress: ce,
            message: Pe
          }, A.state === "complete" ? (gt(), Yt(), E.value = !1, fe(`✓ Switched to ${ne.value}`, "success"), await Ce(), ne.value = "") : A.state === "rolled_back" ? (gt(), Yt(), E.value = !1, fe("Switch failed, restored previous environment", "warning"), ne.value = "") : A.state === "critical_failure" && (gt(), Yt(), E.value = !1, fe(`Critical error during switch: ${A.message}`, "error"), ne.value = "");
        } catch (A) {
          console.error("Failed to poll switch progress:", A);
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
      it.value = !1, await Ce(), fe("✓ Changes committed", "success");
    }
    async function Us() {
      Je.value = !1;
      const A = fe("Syncing environment...", "info", 0);
      try {
        const M = await f("skip", !0);
        if (We(A), M.status === "success") {
          const ce = [];
          M.nodes_installed.length && ce.push(`${M.nodes_installed.length} installed`), M.nodes_removed.length && ce.push(`${M.nodes_removed.length} removed`);
          const Se = ce.length ? `: ${ce.join(", ")}` : "";
          fe(`✓ Environment synced${Se}`, "success"), await Ce();
        } else {
          const ce = M.errors.length ? M.errors.join("; ") : M.message;
          fe(`Sync failed: ${ce}`, "error");
        }
      } catch (M) {
        We(A), fe(`Sync error: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
      }
    }
    async function Ps(A) {
      oe.value = A, Re.value = !0, Ge.value = { state: "creating", message: `Creating environment '${A.name}'...` };
      try {
        const M = await C(A);
        M.status === "started" ? Bs() : M.status === "error" && (Re.value = !1, fe(`Failed to create environment: ${M.message}. Check debug logs for details.`, "error"), oe.value = null);
      } catch (M) {
        Re.value = !1, fe(`Error creating environment: ${M instanceof Error ? M.message : "Unknown error"}. Check debug logs.`, "error"), oe.value = null;
      }
    }
    function Bs() {
      V || (V = window.setInterval(async () => {
        var A;
        try {
          const M = await L();
          Ge.value = { state: M.state, message: M.message }, M.state === "complete" ? (is(), Re.value = !1, fe(`✓ Environment '${M.environment_name}' created`, "success"), await Ce(), ee.value && await ee.value.loadEnvironments(), (A = oe.value) != null && A.switch_after && M.environment_name && await Xe(M.environment_name), oe.value = null) : M.state === "error" && (is(), Re.value = !1, fe(`Failed to create environment: ${M.error || M.message}. Check debug logs.`, "error"), oe.value = null);
        } catch (M) {
          console.error("Failed to poll create progress:", M);
        }
      }, 2e3));
    }
    function is() {
      V && (clearInterval(V), V = null);
    }
    async function Os(A) {
      var M;
      if (((M = T.value) == null ? void 0 : M.name) === A) {
        fe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      _e.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${A}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          _e.value = null;
          try {
            const ce = await $(A);
            ce.status === "success" ? (fe(`Environment "${A}" deleted`, "success"), await Ce(), ee.value && await ee.value.loadEnvironments()) : fe(ce.message || "Failed to delete environment", "error");
          } catch (ce) {
            fe(`Error deleting environment: ${ce instanceof Error ? ce.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Fs(A) {
      x.value = !1;
      try {
        D.value = await R();
      } catch {
      }
      await Xe(A);
    }
    function rs() {
      if (!I.value) return [];
      const A = [], M = I.value.workflows;
      return M.new.length && A.push(`${M.new.length} new workflow(s)`), M.modified.length && A.push(`${M.modified.length} modified workflow(s)`), M.deleted.length && A.push(`${M.deleted.length} deleted workflow(s)`), A;
    }
    return ze(async () => {
      try {
        if (D.value = await R(), D.value.state === "no_workspace") {
          x.value = !0;
          return;
        }
      } catch (A) {
        console.warn("Setup status check failed, proceeding normally:", A);
      }
      await Ce();
    }), (A, M) => {
      var ce, Se, Ue, Pe, et, Et;
      return s(), o("div", ly, [
        e("div", iy, [
          e("div", ry, [
            M[30] || (M[30] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            I.value ? (s(), o("div", dy)) : c("", !0)
          ]),
          e("div", cy, [
            e("button", {
              class: le(["icon-btn", { spinning: J.value }]),
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
        e("div", uy, [
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
                onClick: rt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: M[1] || (M[1] = (ue) => ie("environments", "all-envs"))
          }, [
            I.value ? (s(), o("div", my, [
              e("span", null, n(((ce = T.value) == null ? void 0 : ce.name) || ((Se = I.value) == null ? void 0 : Se.environment) || "Loading..."), 1),
              e("span", vy, "(" + n(I.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            M[34] || (M[34] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", fy, [
          e("div", gy, [
            e("div", py, [
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
            e("div", hy, [
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
            e("div", yy, [
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
          e("div", wy, [
            K.value ? (s(), o("div", ky, n(K.value), 1)) : !I.value && Z.value === "status" ? (s(), o("div", by, " Loading status... ")) : (s(), o(G, { key: 2 }, [
              Z.value === "status" ? (s(), S(hn, {
                key: 0,
                status: I.value,
                "setup-state": z.value,
                onSwitchBranch: xt,
                onCommitChanges: M[16] || (M[16] = (ue) => it.value = !0),
                onSyncEnvironment: M[17] || (M[17] = (ue) => Je.value = !0),
                onViewWorkflows: M[18] || (M[18] = (ue) => ie("workflows", "this-env")),
                onViewHistory: M[19] || (M[19] = (ue) => ie("history", "this-env")),
                onViewDebug: M[20] || (M[20] = (ue) => ie("debug-env", "this-env")),
                onStartSetup: M[21] || (M[21] = (ue) => x.value = !0),
                onViewEnvironments: M[22] || (M[22] = (ue) => ie("environments", "all-envs"))
              }, null, 8, ["status", "setup-state"])) : Z.value === "workflows" ? (s(), S(Vu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: de,
                onRefresh: Ce
              }, null, 512)) : Z.value === "models-env" ? (s(), S($m, {
                key: 2,
                onNavigate: ut
              })) : Z.value === "branches" ? (s(), S(Dn, {
                key: 3,
                branches: W.value,
                current: ((Ue = I.value) == null ? void 0 : Ue.branch) || null,
                onSwitch: Kt,
                onCreate: j,
                onDelete: N
              }, null, 8, ["branches", "current"])) : Z.value === "history" ? (s(), S(Wn, {
                key: 4,
                commits: B.value,
                onSelect: yt,
                onCheckout: mt
              }, null, 8, ["commits"])) : Z.value === "nodes" ? (s(), S(uv, {
                key: 5,
                onOpenNodeManager: St
              })) : Z.value === "debug-env" ? (s(), S(uf, { key: 6 })) : Z.value === "environments" ? (s(), S(Qf, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: ee,
                onSwitch: Xe,
                onCreate: Ps,
                onDelete: Os
              }, null, 512)) : Z.value === "model-index" ? (s(), S(Wm, {
                key: 8,
                onRefresh: Ce
              })) : Z.value === "settings" ? (s(), S(lf, { key: 9 })) : Z.value === "debug-workspace" ? (s(), S(df, { key: 10 })) : Z.value === "export" ? (s(), S(ig, { key: 11 })) : Z.value === "import" ? (s(), S(Tp, { key: 12 })) : Z.value === "remotes" ? (s(), S(Vv, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        ae.value ? (s(), S(Jp, {
          key: 0,
          commit: ae.value,
          onClose: M[23] || (M[23] = (ue) => ae.value = null),
          onCheckout: mt,
          onCreateBranch: H
        }, null, 8, ["commit"])) : c("", !0),
        _e.value ? (s(), S(ah, {
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
        g(e1, {
          show: P.value,
          "from-environment": ((Pe = T.value) == null ? void 0 : Pe.name) || "unknown",
          "to-environment": ne.value,
          onConfirm: Ot,
          onClose: Ns
        }, null, 8, ["show", "from-environment", "to-environment"]),
        it.value && I.value ? (s(), S(Is, {
          key: 2,
          status: I.value,
          "as-modal": !0,
          onClose: M[25] || (M[25] = (ue) => it.value = !1),
          onCommitted: Ts
        }, null, 8, ["status"])) : c("", !0),
        Je.value && I.value ? (s(), S($1, {
          key: 3,
          show: Je.value,
          "mismatch-details": {
            missing_nodes: I.value.comparison.missing_nodes,
            extra_nodes: I.value.comparison.extra_nodes
          },
          onConfirm: Us,
          onClose: M[26] || (M[26] = (ue) => Je.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g(f1, {
          show: E.value,
          state: q.value.state,
          progress: q.value.progress,
          message: q.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Re.value ? (s(), o("div", _y, [
          e("div", $y, [
            M[42] || (M[42] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", Cy, [
              M[40] || (M[40] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", xy, n(Ge.value.message), 1),
              M[41] || (M[41] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        me.value ? (s(), o("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: M[28] || (M[28] = Ee((ue) => me.value = !1, ["self"]))
        }, [
          e("div", Sy, [
            e("div", Iy, [
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
            e("div", Ey, [
              M[45] || (M[45] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", My, [
                (s(!0), o(G, null, te(F.value, (ue) => (s(), o("div", {
                  key: ue.name,
                  class: le(["env-item", { current: ue.is_current }])
                }, [
                  e("div", zy, [
                    e("div", Ly, [
                      e("span", Dy, n(ue.is_current ? "●" : "○"), 1),
                      e("span", Ry, n(ue.name), 1),
                      ue.current_branch ? (s(), o("span", Ny, "(" + n(ue.current_branch) + ")", 1)) : c("", !0),
                      ue.is_current ? (s(), o("span", Ty, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Uy, n(ue.workflow_count) + " workflows • " + n(ue.node_count) + " nodes ", 1)
                  ]),
                  ue.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Kw) => Xe(ue.name)
                  }, " SWITCH ", 8, Py))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        x.value ? (s(), S(ny, {
          key: 6,
          "default-path": ((et = D.value) == null ? void 0 : et.default_path) || "~/comfygit",
          "detected-models-dir": ((Et = D.value) == null ? void 0 : Et.detected_models_dir) || null,
          onComplete: Fs,
          onClose: M[29] || (M[29] = (ue) => x.value = !1)
        }, null, 8, ["default-path", "detected-models-dir"])) : c("", !0),
        e("div", By, [
          g(js, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(G, null, te(Ye.value, (ue) => (s(), o("div", {
                key: ue.id,
                class: le(["toast", ue.type])
              }, [
                e("span", Oy, n(Q(ue.type)), 1),
                e("span", Fy, n(ue.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Ay = /* @__PURE__ */ X(Vy, [["__scopeId", "data-v-bf8bb29c"]]), Wy = { class: "item-header" }, Gy = { class: "item-info" }, jy = { class: "filename" }, Hy = { class: "metadata" }, qy = { class: "size" }, Ky = {
  key: 0,
  class: "type"
}, Yy = { class: "item-actions" }, Xy = {
  key: 0,
  class: "progress-section"
}, Qy = { class: "progress-bar" }, Zy = { class: "progress-stats" }, Jy = { class: "downloaded" }, ew = { class: "speed" }, tw = {
  key: 0,
  class: "eta"
}, sw = {
  key: 1,
  class: "status-msg paused"
}, ow = {
  key: 2,
  class: "status-msg queued"
}, aw = {
  key: 3,
  class: "status-msg completed"
}, nw = {
  key: 4,
  class: "status-msg failed"
}, lw = {
  key: 0,
  class: "retries"
}, iw = /* @__PURE__ */ Y({
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
      e("div", Wy, [
        e("div", Gy, [
          e("div", jy, n(t.item.filename), 1),
          e("div", Hy, [
            e("span", qy, n(d(t.item.size)), 1),
            t.item.type ? (s(), o("span", Ky, n(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Yy, [
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
      t.item.status === "downloading" ? (s(), o("div", Xy, [
        e("div", Qy, [
          e("div", {
            class: "progress-fill",
            style: qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Zy, [
          e("span", Jy, n(d(t.item.downloaded)) + " / " + n(d(t.item.size)), 1),
          e("span", ew, n(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", tw, n(v(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", sw, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", ow, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", aw, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", nw, [
        w(" ✗ " + n(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", lw, "(" + n(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ X(iw, [["__scopeId", "data-v-2110df65"]]), rw = { class: "queue-title" }, dw = { class: "count" }, cw = { class: "queue-actions" }, uw = { class: "action-label" }, mw = {
  key: 0,
  class: "overall-progress"
}, vw = { class: "progress-bar" }, fw = {
  key: 0,
  class: "current-mini"
}, gw = { class: "filename" }, pw = { class: "speed" }, hw = {
  key: 1,
  class: "queue-content"
}, yw = {
  key: 0,
  class: "section"
}, ww = {
  key: 1,
  class: "section"
}, kw = { class: "section-header" }, bw = { class: "section-label paused" }, _w = { class: "items-list" }, $w = {
  key: 2,
  class: "section"
}, Cw = { class: "section-header" }, xw = { class: "section-label" }, Sw = { class: "items-list" }, Iw = {
  key: 3,
  class: "section"
}, Ew = { class: "section-header" }, Mw = { class: "section-label" }, zw = { class: "items-list" }, Lw = {
  key: 4,
  class: "section"
}, Dw = { class: "section-header" }, Rw = { class: "section-label failed" }, Nw = { class: "items-list" }, Tw = /* @__PURE__ */ Y({
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
          e("div", rw, [
            W[4] || (W[4] = e("span", { class: "icon" }, "↓", -1)),
            W[5] || (W[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", dw, "(" + n(he(l)) + "/" + n(he(r).items.length) + ")", 1)
          ]),
          e("div", cw, [
            e("span", uw, n($.value ? "minimize" : "expand"), 1)
          ])
        ]),
        $.value ? (s(), o("div", hw, [
          he(a) ? (s(), o("div", yw, [
            W[6] || (W[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(Lt, {
              item: he(a),
              onCancel: W[1] || (W[1] = (F) => O(he(a).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          he(y).length > 0 ? (s(), o("div", ww, [
            e("div", kw, [
              e("span", bw, "Paused (" + n(he(y).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: W[2] || (W[2] = //@ts-ignore
                (...F) => he(k) && he(k)(...F))
              }, "Resume All")
            ]),
            e("div", _w, [
              (s(!0), o(G, null, te(he(y), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onResume: (T) => he(h)(F.id),
                onRemove: (T) => he(C)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          he(d).length > 0 ? (s(), o("div", $w, [
            e("div", Cw, [
              e("span", xw, "Queued (" + n(he(d).length) + ")", 1)
            ]),
            e("div", Sw, [
              (s(!0), o(G, null, te(he(d), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onCancel: (T) => O(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          he(p).length > 0 ? (s(), o("div", Iw, [
            e("div", Ew, [
              e("span", Mw, "Completed (" + n(he(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: W[3] || (W[3] = //@ts-ignore
                (...F) => he(L) && he(L)(...F))
              }, "Clear")
            ]),
            e("div", zw, [
              (s(!0), o(G, null, te(he(p).slice(0, 3), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onRemove: (T) => he(C)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          he(v).length > 0 ? (s(), o("div", Lw, [
            e("div", Dw, [
              e("span", Rw, "Failed (" + n(he(v).length) + ")", 1)
            ]),
            e("div", Nw, [
              (s(!0), o(G, null, te(he(v), (F) => (s(), S(Lt, {
                key: F.id,
                item: F,
                onRetry: (T) => he(b)(F.id),
                onRemove: (T) => he(C)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", mw, [
          e("div", vw, [
            e("div", {
              class: "progress-fill",
              style: qe({ width: `${R.value}%` })
            }, null, 4)
          ]),
          he(a) ? (s(), o("div", fw, [
            e("span", gw, n(he(a).filename), 1),
            e("span", pw, n(I(he(a).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), Uw = /* @__PURE__ */ X(Tw, [["__scopeId", "data-v-60751cfa"]]), Pw = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Bw = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Ow = {
  comfy: Pw,
  phosphor: Bw
}, ns = "comfy", Es = "comfygit-theme";
let pt = null, Ms = ns;
function Fw() {
  try {
    const t = localStorage.getItem(Es);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ns;
}
function zs(t = ns) {
  pt && pt.remove(), pt = document.createElement("style"), pt.id = "comfygit-theme-styles", pt.setAttribute("data-theme", t), pt.textContent = Ow[t], document.head.appendChild(pt), document.body.setAttribute("data-comfygit-theme", t), Ms = t;
  try {
    localStorage.setItem(Es, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Vw() {
  return Ms;
}
function Aw(t) {
  zs(t);
}
const ls = document.createElement("link");
ls.rel = "stylesheet";
ls.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ls);
const Ww = Fw();
zs(Ww);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Aw(t);
  },
  getTheme: () => {
    const t = Vw();
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
function Gw() {
  if (!_t.value) return !1;
  const t = _t.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || _t.value.has_changes;
}
function jw() {
  je && je.remove(), je = document.createElement("div"), je.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", je.appendChild(t), je.addEventListener("click", (d) => {
    d.target === je && Zt();
  });
  const r = (d) => {
    d.key === "Escape" && (Zt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), os({
    render: () => as(Ay, {
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
function Hw(t) {
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
function qw() {
  Dt || (Dt = document.createElement("div"), Dt.className = "comfygit-download-queue-root", vs = os({
    render: () => as(Uw)
  }), vs.mount(Dt), document.body.appendChild(Dt), console.log("[ComfyGit] Model download queue mounted"));
}
let tt = null;
function Pt() {
  if (!tt) return;
  const t = tt.querySelector(".commit-indicator");
  t && (t.style.display = Gw() ? "block" : "none");
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
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = jw, tt = document.createElement("button"), tt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", tt.innerHTML = 'Commit <span class="commit-indicator"></span>', tt.title = "Quick Commit", tt.onclick = () => Hw(tt), t.appendChild(r), t.appendChild(tt), (v = (p = kt.menu) == null ? void 0 : p.settingsGroup) != null && v.element && (kt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), qw();
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
