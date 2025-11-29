import { app as bt } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as ye, createBlock as I, resolveDynamicComponent as ls, normalizeClass as ae, withCtx as i, toDisplayString as n, createVNode as g, createTextVNode as w, computed as B, Fragment as W, renderList as ee, normalizeStyle as it, ref as b, onMounted as Ne, watch as qt, Teleport as Ve, withModifiers as De, Transition as Xs, createSlots as Yt, withKeys as vt, onUnmounted as ks, reactive as _s, readonly as Qs, unref as we, withDirectives as Oe, vModelText as Rt, nextTick as Zs, vModelSelect as $t, vModelCheckbox as es, vModelRadio as Js, TransitionGroup as eo, createApp as is, h as rs } from "vue";
const to = { class: "panel-layout" }, so = {
  key: 0,
  class: "panel-layout-header"
}, oo = {
  key: 1,
  class: "panel-layout-search"
}, ao = { class: "panel-layout-content" }, no = {
  key: 2,
  class: "panel-layout-footer"
}, lo = /* @__PURE__ */ X({
  __name: "PanelLayout",
  setup(t) {
    return (r, a) => (s(), o("div", to, [
      r.$slots.header ? (s(), o("div", so, [
        ye(r.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      r.$slots.search ? (s(), o("div", oo, [
        ye(r.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", ao, [
        ye(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (s(), o("div", no, [
        ye(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Q = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [d, f] of r)
    a[d] = f;
  return a;
}, Ge = /* @__PURE__ */ Q(lo, [["__scopeId", "data-v-21565df9"]]), io = {
  key: 0,
  class: "panel-title-prefix"
}, ro = {
  key: 1,
  class: "panel-title-prefix-theme"
}, co = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, a) => (s(), I(ls(`h${t.level}`), {
      class: ae(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", io, n(t.prefix), 1)) : (s(), o("span", ro)),
        ye(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), uo = /* @__PURE__ */ Q(co, [["__scopeId", "data-v-c3875efc"]]), mo = ["title"], vo = ["width", "height"], fo = /* @__PURE__ */ X({
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
      ])], 8, vo))
    ], 8, mo));
  }
}), bs = /* @__PURE__ */ Q(fo, [["__scopeId", "data-v-6fc7f16d"]]), go = { class: "header-left" }, po = {
  key: 0,
  class: "header-actions"
}, ho = /* @__PURE__ */ X({
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
      class: ae(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", go, [
        g(uo, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            w(n(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), I(bs, {
          key: 0,
          onClick: a[0] || (a[0] = (d) => r.$emit("info-click"))
        })) : c("", !0)
      ]),
      r.$slots.actions ? (s(), o("div", po, [
        ye(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), je = /* @__PURE__ */ Q(ho, [["__scopeId", "data-v-55a62cd6"]]), yo = {
  key: 0,
  class: "section-title-count"
}, wo = {
  key: 1,
  class: "section-title-icon"
}, ko = /* @__PURE__ */ X({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), I(ls(`h${t.level}`), {
      class: ae(["section-title", { clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (d) => t.clickable && r.$emit("click"))
    }, {
      default: i(() => [
        ye(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", yo, "(" + n(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", wo, n(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), qe = /* @__PURE__ */ Q(ko, [["__scopeId", "data-v-559361eb"]]), _o = { class: "status-grid" }, bo = { class: "status-grid__columns" }, $o = { class: "status-grid__column" }, Co = { class: "status-grid__title" }, xo = { class: "status-grid__column status-grid__column--right" }, So = { class: "status-grid__title" }, Io = {
  key: 0,
  class: "status-grid__footer"
}, Eo = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, a) => (s(), o("div", _o, [
      e("div", bo, [
        e("div", $o, [
          e("h4", Co, n(t.leftTitle), 1),
          ye(r.$slots, "left", {}, void 0, !0)
        ]),
        e("div", xo, [
          e("h4", So, n(t.rightTitle), 1),
          ye(r.$slots, "right", {}, void 0, !0)
        ])
      ]),
      r.$slots.footer ? (s(), o("div", Io, [
        ye(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Mo = /* @__PURE__ */ Q(Eo, [["__scopeId", "data-v-73b7ba3f"]]), zo = {
  key: 0,
  class: "status-item__icon"
}, To = {
  key: 1,
  class: "status-item__count"
}, Lo = { class: "status-item__label" }, Do = /* @__PURE__ */ X({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, a = B(() => `status-item--${r.variant}`);
    return (d, f) => (s(), o("div", {
      class: ae(["status-item", a.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", zo, n(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", To, n(t.count), 1)) : c("", !0),
      e("span", Lo, n(t.label), 1)
    ], 2));
  }
}), tt = /* @__PURE__ */ Q(Do, [["__scopeId", "data-v-6f929183"]]), Ro = { class: "issue-card__header" }, No = { class: "issue-card__icon" }, Uo = { class: "issue-card__title" }, Po = {
  key: 0,
  class: "issue-card__content"
}, Bo = {
  key: 0,
  class: "issue-card__description"
}, Oo = {
  key: 1,
  class: "issue-card__items"
}, Fo = {
  key: 2,
  class: "issue-card__actions"
}, Vo = /* @__PURE__ */ X({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, a = B(() => `issue-card--${r.severity}`);
    return (d, f) => (s(), o("div", {
      class: ae(["issue-card", a.value])
    }, [
      e("div", Ro, [
        e("span", No, n(t.icon), 1),
        e("h4", Uo, n(t.title), 1)
      ]),
      d.$slots.default || t.description ? (s(), o("div", Po, [
        t.description ? (s(), o("p", Bo, n(t.description), 1)) : c("", !0),
        ye(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", Oo, [
        (s(!0), o(W, null, ee(t.items, (v, p) => (s(), o("div", {
          key: p,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, n(v), 1)
        ]))), 128))
      ])) : c("", !0),
      d.$slots.actions ? (s(), o("div", Fo, [
        ye(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ Q(Vo, [["__scopeId", "data-v-df6aa348"]]), Ao = ["type", "disabled"], Wo = {
  key: 0,
  class: "spinner"
}, Go = /* @__PURE__ */ X({
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
      class: ae(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: a[0] || (a[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", Wo)) : c("", !0),
      t.loading ? c("", !0) : ye(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ao));
  }
}), te = /* @__PURE__ */ Q(Go, [["__scopeId", "data-v-772abe47"]]), jo = { class: "empty-state" }, Ho = {
  key: 0,
  class: "empty-icon"
}, Ko = { class: "empty-message" }, qo = /* @__PURE__ */ X({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, a) => (s(), o("div", jo, [
      t.icon ? (s(), o("div", Ho, n(t.icon), 1)) : c("", !0),
      e("p", Ko, n(t.message), 1),
      t.actionLabel ? (s(), I(te, {
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
}), et = /* @__PURE__ */ Q(qo, [["__scopeId", "data-v-4466284f"]]), Yo = /* @__PURE__ */ X({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, a) => (s(), o("span", {
      class: ae(["detail-label"]),
      style: it({ minWidth: t.minWidth })
    }, [
      ye(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ts = /* @__PURE__ */ Q(Yo, [["__scopeId", "data-v-75e9eeb8"]]), Xo = /* @__PURE__ */ X({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (s(), o("span", {
      class: ae(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ye(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ss = /* @__PURE__ */ Q(Xo, [["__scopeId", "data-v-2f186e4c"]]), Qo = { class: "detail-row" }, Zo = /* @__PURE__ */ X({
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
    return (r, a) => (s(), o("div", Qo, [
      g(ts, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          w(n(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), I(ss, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          w(n(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ye(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Me = /* @__PURE__ */ Q(Zo, [["__scopeId", "data-v-ef15664a"]]), Jo = { class: "modal-header" }, ea = { class: "modal-body" }, ta = { class: "status-section" }, sa = {
  key: 0,
  class: "status-section"
}, oa = { class: "section-header-row" }, aa = {
  key: 0,
  class: "workflow-group"
}, na = { class: "workflow-group-header" }, la = { class: "workflow-group-title" }, ia = { class: "workflow-list" }, ra = { class: "workflow-name" }, da = { class: "workflow-issue" }, ca = {
  key: 1,
  class: "workflow-group"
}, ua = { class: "workflow-group-header" }, ma = { class: "workflow-group-title" }, va = { class: "workflow-list" }, fa = { class: "workflow-name" }, ga = { class: "workflow-issue" }, pa = {
  key: 2,
  class: "workflow-group"
}, ha = { class: "workflow-group-header" }, ya = { class: "workflow-group-title" }, wa = { class: "workflow-list" }, ka = { class: "workflow-name" }, _a = {
  key: 3,
  class: "workflow-group"
}, ba = { class: "workflow-group-header" }, $a = { class: "workflow-group-title" }, Ca = { class: "workflow-list" }, xa = { class: "workflow-name" }, Sa = {
  key: 4,
  class: "workflow-group"
}, Ia = { class: "workflow-group-header" }, Ea = { class: "workflow-group-title" }, Ma = { class: "workflow-list" }, za = { class: "workflow-name" }, Ta = {
  key: 5,
  class: "workflow-group"
}, La = { class: "workflow-group-title" }, Da = { class: "expand-icon" }, Ra = {
  key: 0,
  class: "workflow-list"
}, Na = { class: "workflow-name" }, Ua = {
  key: 1,
  class: "status-section"
}, Pa = {
  key: 0,
  class: "change-group"
}, Ba = { class: "change-group-header" }, Oa = { class: "change-group-title" }, Fa = { class: "change-list" }, Va = { class: "node-name" }, Aa = {
  key: 0,
  class: "dev-badge"
}, Wa = {
  key: 1,
  class: "change-group"
}, Ga = { class: "change-group-header" }, ja = { class: "change-group-title" }, Ha = { class: "change-list" }, Ka = { class: "node-name" }, qa = {
  key: 0,
  class: "dev-badge"
}, Ya = {
  key: 2,
  class: "change-group"
}, Xa = { class: "change-list" }, Qa = { class: "change-item" }, Za = { class: "node-name" }, Ja = {
  key: 3,
  class: "change-group"
}, en = {
  key: 2,
  class: "status-section"
}, tn = { class: "section-header-row" }, sn = {
  key: 0,
  class: "drift-item"
}, on = { class: "drift-list" }, an = {
  key: 0,
  class: "drift-list-more"
}, nn = {
  key: 1,
  class: "drift-item"
}, ln = { class: "drift-list" }, rn = {
  key: 0,
  class: "drift-list-more"
}, dn = {
  key: 2,
  class: "drift-item"
}, cn = {
  key: 3,
  class: "drift-item"
}, un = {
  key: 3,
  class: "status-section"
}, mn = { class: "info-box" }, vn = { class: "drift-list" }, fn = {
  key: 0,
  class: "drift-list-more"
}, gn = {
  key: 4,
  class: "status-section"
}, pn = { class: "warning-box" }, hn = {
  key: 5,
  class: "empty-state-inline"
}, yn = { class: "modal-actions" }, wn = /* @__PURE__ */ X({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const r = t, a = b(!1);
    Ne(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), qt(() => r.show, (k, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", k);
    }, { immediate: !0 });
    const d = B(() => {
      var k, $, z;
      return ((z = ($ = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : z.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), f = B(() => {
      var k, $, z;
      return ((z = ($ = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : z.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), v = B(() => {
      var k, $, z;
      return ((z = ($ = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : $.synced) == null ? void 0 : z.filter((S) => {
        var E, F, L;
        const h = (L = (F = (E = r.status) == null ? void 0 : E.workflows) == null ? void 0 : F.analyzed) == null ? void 0 : L.find((O) => O.name === S);
        return !h || h.status !== "broken";
      })) || [];
    }), p = B(() => {
      var k, $, z, S, h;
      return (k = r.status) != null && k.workflows ? ((($ = r.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((z = r.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((S = r.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || (((h = r.status.workflows.synced) == null ? void 0 : h.length) ?? 0) > 0 : !1;
    }), m = B(() => {
      var $, z, S;
      const k = ($ = r.status) == null ? void 0 : $.git_changes;
      return k ? (((z = k.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((S = k.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), l = B(() => {
      var k, $, z, S, h, E;
      return !p.value && !m.value && (($ = (k = r.status) == null ? void 0 : k.comparison) == null ? void 0 : $.is_synced) && (((z = r.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((E = (h = (S = r.status) == null ? void 0 : S.comparison) == null ? void 0 : h.disabled_nodes) == null ? void 0 : E.length) ?? 0) === 0;
    }), u = B(() => {
      var $, z;
      const k = (z = ($ = r.status) == null ? void 0 : $.git_changes) == null ? void 0 : z.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function _(k) {
      return typeof k == "string" ? k : k.name;
    }
    function y(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, $) => {
      var z, S, h, E, F, L, O, A, P, N, T, C, x, G, H, J, ge, de, oe, U, M, se;
      return s(), I(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (Z) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = De(() => {
            }, ["stop"]))
          }, [
            e("div", Jo, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (Z) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", ea, [
              e("div", ta, [
                g(qe, { level: "4" }, {
                  default: i(() => [...$[8] || ($[8] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                g(Me, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              p.value ? (s(), o("div", sa, [
                e("div", oa, [
                  g(qe, { level: "4" }, {
                    default: i(() => [...$[9] || ($[9] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (Z) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                d.value.length ? (s(), o("div", aa, [
                  e("div", na, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", la, "BROKEN (COMMITTED) (" + n(d.value.length) + ")", 1)
                  ]),
                  e("div", ia, [
                    (s(!0), o(W, null, ee(d.value, (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", ra, n(Z.name), 1),
                      e("span", da, n(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (s(), o("div", ca, [
                  e("div", ua, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ma, "BROKEN (UNCOMMITTED) (" + n(f.value.length) + ")", 1)
                  ]),
                  e("div", va, [
                    (s(!0), o(W, null, ee(f.value, (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", fa, n(Z.name), 1),
                      e("span", ga, n(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (S = (z = t.status.workflows) == null ? void 0 : z.new) != null && S.length ? (s(), o("div", pa, [
                  e("div", ha, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", ya, "NEW (" + n(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", wa, [
                    (s(!0), o(W, null, ee(t.status.workflows.new, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", ka, n(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (E = (h = t.status.workflows) == null ? void 0 : h.modified) != null && E.length ? (s(), o("div", _a, [
                  e("div", ba, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", $a, "MODIFIED (" + n(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ca, [
                    (s(!0), o(W, null, ee(t.status.workflows.modified, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", xa, n(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (L = (F = t.status.workflows) == null ? void 0 : F.deleted) != null && L.length ? (s(), o("div", Sa, [
                  e("div", Ia, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Ea, "DELETED (" + n(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ma, [
                    (s(!0), o(W, null, ee(t.status.workflows.deleted, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", za, n(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                v.value.length ? (s(), o("div", Ta, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (Z) => a.value = !a.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", La, "SYNCED (" + n(v.value.length) + ")", 1),
                    e("span", Da, n(a.value ? "▼" : "▶"), 1)
                  ]),
                  a.value ? (s(), o("div", Ra, [
                    (s(!0), o(W, null, ee(v.value, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Na, n(Z), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (s(), o("div", Ua, [
                g(qe, { level: "4" }, {
                  default: i(() => [...$[16] || ($[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (A = (O = t.status.git_changes) == null ? void 0 : O.nodes_added) != null && A.length ? (s(), o("div", Pa, [
                  e("div", Ba, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Oa, "NODES ADDED (" + n(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Fa, [
                    (s(!0), o(W, null, ee(t.status.git_changes.nodes_added, (Z) => (s(), o("div", {
                      key: _(Z),
                      class: "change-item"
                    }, [
                      e("span", Va, n(_(Z)), 1),
                      y(Z) ? (s(), o("span", Aa, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (N = (P = t.status.git_changes) == null ? void 0 : P.nodes_removed) != null && N.length ? (s(), o("div", Wa, [
                  e("div", Ga, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ja, "NODES REMOVED (" + n(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ha, [
                    (s(!0), o(W, null, ee(t.status.git_changes.nodes_removed, (Z) => (s(), o("div", {
                      key: _(Z),
                      class: "change-item"
                    }, [
                      e("span", Ka, n(_(Z)), 1),
                      y(Z) ? (s(), o("span", qa, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = t.status.git_changes) != null && T.workflow_changes ? (s(), o("div", Ya, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Xa, [
                    e("div", Qa, [
                      e("span", Za, n(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (C = t.status.git_changes) != null && C.has_other_changes ? (s(), o("div", Ja, [...$[20] || ($[20] = [
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
              (x = t.status.comparison) != null && x.is_synced ? c("", !0) : (s(), o("div", en, [
                e("div", tn, [
                  g(qe, { level: "4" }, {
                    default: i(() => [...$[21] || ($[21] = [
                      w("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (Z) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[22] || ($[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (H = (G = t.status.comparison) == null ? void 0 : G.missing_nodes) != null && H.length ? (s(), o("div", sn, [
                  g(Me, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", on, [
                    (s(!0), o(W, null, ee(t.status.comparison.missing_nodes.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + n(Z), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", an, " ... and " + n(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (ge = (J = t.status.comparison) == null ? void 0 : J.extra_nodes) != null && ge.length ? (s(), o("div", nn, [
                  g(Me, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", ln, [
                    (s(!0), o(W, null, ee(t.status.comparison.extra_nodes.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + n(Z), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", rn, " ... and " + n(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (oe = (de = t.status.comparison) == null ? void 0 : de.version_mismatches) != null && oe.length ? (s(), o("div", dn, [
                  g(Me, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (U = t.status.comparison) != null && U.packages_in_sync ? c("", !0) : (s(), o("div", cn, [
                  g(Me, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (se = (M = t.status.comparison) == null ? void 0 : M.disabled_nodes) != null && se.length ? (s(), o("div", un, [
                g(qe, { level: "4" }, {
                  default: i(() => [...$[23] || ($[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", mn, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, n(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", vn, [
                  (s(!0), o(W, null, ee(t.status.comparison.disabled_nodes.slice(0, 10), (Z) => (s(), o("div", {
                    key: Z,
                    class: "drift-list-item"
                  }, " • " + n(Z), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", fn, " ... and " + n(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", gn, [
                g(qe, { level: "4" }, {
                  default: i(() => [...$[25] || ($[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", pn, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, n(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (s(), o("div", hn, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", yn, [
              g(te, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (Z) => k.$emit("close"))
              }, {
                default: i(() => [...$[29] || ($[29] = [
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
}), kn = /* @__PURE__ */ Q(wn, [["__scopeId", "data-v-c67eed17"]]), _n = { class: "health-section-header" }, bn = { class: "suggestions-content" }, $n = { class: "suggestions-text" }, Cn = {
  key: 4,
  style: { "margin-top": "var(--cg-space-3)" }
}, xn = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "start-setup", "view-environments", "create-environment"],
  setup(t, { emit: r }) {
    const a = t, d = b(!1), f = b(!1);
    function v() {
      d.value = !0;
    }
    function p() {
      d.value = !1, l("view-workflows");
    }
    function m() {
      d.value = !1, l("view-nodes");
    }
    const l = r, u = B(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), _ = B(() => a.status.has_changes), y = B(() => {
      const P = a.status.git_changes;
      return P.nodes_added.length > 0 || P.nodes_removed.length > 0 || P.workflow_changes;
    }), k = B(() => a.status.has_changes || u.value), $ = B(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), z = B(() => a.status.git_changes.has_other_changes), S = B(() => {
      var P;
      return ((P = a.status.workflows.analyzed) == null ? void 0 : P.filter((N) => N.status === "broken")) || [];
    }), h = B(() => {
      var P;
      return ((P = a.status.workflows.analyzed) == null ? void 0 : P.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), E = B(() => S.value.length > 0), F = B(() => E.value || h.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced), L = B(() => {
      const P = [];
      return a.status.workflows.new.length > 0 && P.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && P.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && P.push(`${a.status.workflows.deleted.length} deleted`), P.length > 0 ? `${P.join(", ")} workflow${P.length === 1 && !P[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), O = B(() => {
      var T, C;
      const P = [], N = a.status.comparison;
      return (T = N.missing_nodes) != null && T.length && P.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (C = N.extra_nodes) != null && C.length && P.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), P.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${P.join(" and ")}.`;
    }), A = B(() => {
      var T, C;
      const P = [], N = a.status.comparison;
      return (T = N.extra_nodes) != null && T.length && (N.extra_nodes.slice(0, 3).forEach((x) => {
        P.push(`Untracked: ${x}`);
      }), N.extra_nodes.length > 3 && P.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (C = N.missing_nodes) != null && C.length && (N.missing_nodes.slice(0, 3).forEach((x) => {
        P.push(`Missing: ${x}`);
      }), N.missing_nodes.length > 3 && P.push(`...and ${N.missing_nodes.length - 3} more missing`)), P;
    });
    return (P, N) => (s(), o(W, null, [
      g(Ge, null, {
        header: i(() => [
          g(je, { title: "STATUS" })
        ]),
        content: i(() => [
          a.setupState === "no_workspace" ? (s(), I(nt, {
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
                onClick: N[0] || (N[0] = (T) => P.$emit("start-setup"))
              }, {
                default: i(() => [...N[12] || (N[12] = [
                  w(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (s(), I(nt, {
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
                onClick: N[1] || (N[1] = (T) => P.$emit("view-environments"))
              }, {
                default: i(() => [...N[13] || (N[13] = [
                  w(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (s(), I(nt, {
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
                onClick: N[2] || (N[2] = (T) => P.$emit("create-environment"))
              }, {
                default: i(() => [...N[14] || (N[14] = [
                  w(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[4] || (N[4] = (T) => f.value = !0),
            onMouseleave: N[5] || (N[5] = (T) => f.value = !1)
          }, [
            e("div", _n, [
              g(qe, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...N[15] || (N[15] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g(Xs, { name: "fade" }, {
                default: i(() => [
                  f.value ? (s(), I(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...N[16] || (N[16] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            g(Mo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Yt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), I(tt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (s(), I(tt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (s(), I(tt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                g(tt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), I(tt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), I(tt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (s(), I(tt, {
                  key: 2,
                  icon: "●",
                  count: $.value,
                  label: $.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                z.value ? (s(), I(tt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                _.value && !y.value && !z.value ? (s(), I(tt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                _.value ? c("", !0) : (s(), I(tt, {
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
                  N[18] || (N[18] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", bn, [
                    e("span", $n, n(L.value), 1),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (T) => P.$emit("commit-changes"))
                    }, {
                      default: i(() => [...N[17] || (N[17] = [
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
          t.status.is_detached_head ? (s(), I(nt, {
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
                onClick: N[6] || (N[6] = (T) => P.$emit("create-branch"))
              }, {
                default: i(() => [...N[19] || (N[19] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          F.value ? (s(), o("div", Cn, [
            g(qe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...N[20] || (N[20] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            S.value.length > 0 ? (s(), I(nt, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: S.value.map((T) => `${T.name} — ${T.issue_summary}`)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[7] || (N[7] = (T) => P.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[21] || (N[21] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            h.value.length > 0 ? (s(), I(nt, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${h.value.length} workflow${h.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: h.value.map((T) => `${T.name} — ${T.models_needing_path_sync_count} model path${T.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[8] || (N[8] = (T) => P.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[22] || (N[22] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !E.value ? (s(), I(nt, {
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
                  onClick: N[9] || (N[9] = (T) => P.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[23] || (N[23] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (s(), I(nt, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: O.value,
              items: A.value
            }, {
              actions: i(() => [
                g(te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: i(() => [...N[24] || (N[24] = [
                    w(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[10] || (N[10] = (T) => P.$emit("view-nodes"))
                }, {
                  default: i(() => [...N[25] || (N[25] = [
                    w(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !F.value && !k.value ? (s(), I(et, {
            key: 5,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(kn, {
        show: d.value,
        status: t.status,
        onClose: N[11] || (N[11] = (T) => d.value = !1),
        onNavigateWorkflows: p,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Sn = /* @__PURE__ */ Q(xn, [["__scopeId", "data-v-e63d612b"]]), In = ["type", "value", "placeholder", "disabled"], En = /* @__PURE__ */ X({
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
    const d = t, f = a, v = b(null);
    function p(m) {
      const l = m.target.value;
      f("update:modelValue", l);
    }
    return Ne(() => {
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
      class: ae(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: p,
      onKeyup: [
        l[0] || (l[0] = vt((u) => m.$emit("enter"), ["enter"])),
        l[1] || (l[1] = vt((u) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (u) => m.$emit("focus")),
      onBlur: l[3] || (l[3] = (u) => m.$emit("blur"))
    }, null, 42, In));
  }
}), Ht = /* @__PURE__ */ Q(En, [["__scopeId", "data-v-0380d08f"]]), Mn = { class: "branch-create-form" }, zn = { class: "form-actions" }, Tn = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const a = r, d = b(""), f = B(() => {
      const m = d.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      f.value && (a("create", d.value.trim()), d.value = "");
    }
    function p() {
      d.value = "", a("cancel");
    }
    return (m, l) => (s(), o("div", Mn, [
      g(Ht, {
        modelValue: d.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => d.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: p
      }, null, 8, ["modelValue"]),
      e("div", zn, [
        g(te, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
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
          onClick: p
        }, {
          default: i(() => [...l[2] || (l[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ln = /* @__PURE__ */ Q(Tn, [["__scopeId", "data-v-7c500394"]]), Dn = { class: "branch-list-item__indicator" }, Rn = { class: "branch-list-item__name" }, Nn = {
  key: 0,
  class: "branch-list-item__actions"
}, Un = {
  key: 0,
  class: "branch-list-item__current-label"
}, Pn = /* @__PURE__ */ X({
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
      class: ae(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (d) => t.clickable && r.$emit("click"))
    }, [
      e("span", Dn, n(t.isCurrent ? "●" : "○"), 1),
      e("span", Rn, n(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (s(), o("div", Nn, [
        ye(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Un, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Bn = /* @__PURE__ */ Q(Pn, [["__scopeId", "data-v-c6581a24"]]), On = {
  key: 2,
  class: "branch-list"
}, Fn = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: r }) {
    const a = r, d = b(!1);
    function f(p) {
      a("create", p), v();
    }
    function v() {
      d.value = !1;
    }
    return (p, m) => (s(), I(Ge, null, {
      header: i(() => [
        g(je, { title: "BRANCHES" }, {
          actions: i(() => [
            d.value ? c("", !0) : (s(), I(te, {
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
        d.value ? (s(), I(Ln, {
          key: 0,
          onCreate: f,
          onCancel: v
        })) : c("", !0),
        t.branches.length === 0 ? (s(), I(et, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", On, [
          (s(!0), o(W, null, ee(t.branches, (l) => (s(), I(Bn, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? c("", !0) : (s(), I(te, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (u) => p.$emit("delete", l.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  w(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (s(), I(te, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (u) => p.$emit("switch", l.name)
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
}), Vn = /* @__PURE__ */ Q(Fn, [["__scopeId", "data-v-86784ddd"]]), An = { class: "commit-list" }, Wn = /* @__PURE__ */ X({
  __name: "CommitList",
  setup(t) {
    return (r, a) => (s(), o("div", An, [
      ye(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Gn = /* @__PURE__ */ Q(Wn, [["__scopeId", "data-v-8c5ee761"]]), jn = { class: "commit-hash" }, Hn = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, a = B(() => r.hash.slice(0, r.length));
    return (d, f) => (s(), o("span", jn, n(a.value), 1));
  }
}), $s = /* @__PURE__ */ Q(Hn, [["__scopeId", "data-v-7c333cc6"]]), Kn = { class: "commit-message" }, qn = { class: "commit-date" }, Yn = /* @__PURE__ */ X({
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
    function f() {
      a.clickable && d("click");
    }
    return (v, p) => (s(), o("div", {
      class: ae(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      g($s, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Kn, n(t.message), 1),
      e("span", qn, n(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: p[0] || (p[0] = De(() => {
        }, ["stop"]))
      }, [
        ye(v.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xn = /* @__PURE__ */ Q(Yn, [["__scopeId", "data-v-dd7c621b"]]), Qn = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, a) => (s(), I(Ge, null, {
      header: i(() => [
        g(je, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), I(et, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), I(Gn, { key: 1 }, {
          default: i(() => [
            (s(!0), o(W, null, ee(t.commits, (d) => (s(), I(Xn, {
              key: d.hash,
              hash: d.short_hash || d.hash,
              message: d.message,
              "relative-date": d.date_relative || d.relative_date,
              onClick: (f) => r.$emit("select", d)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => r.$emit("checkout", d),
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
}), Zn = /* @__PURE__ */ Q(Qn, [["__scopeId", "data-v-981c3c64"]]), gs = [
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
], Jn = {
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
}, Cs = [
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
], el = [
  ...Cs,
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
], Vt = [
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
], tl = [
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
], At = [
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
], _e = {
  // Environment Management
  getEnvironments: async () => (await ke(300), [
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
    await ke(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, a) => {
    await ke(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (t) => {
    await ke(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ke(400), gs),
  getWorkflowDetails: async (t) => (await ke(300), Jn[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await ke(800), {
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
    await ke(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${a}`);
  },
  setModelImportance: async (t, r, a) => {
    await ke(200), console.log(`[MOCK] Setting ${r} importance to ${a} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ke(350), Cs),
  getWorkspaceModels: async () => (await ke(400), el),
  getModelDetails: async (t) => (await ke(200), {
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
    await ke(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await ke(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await ke(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await ke(350);
    const t = Vt.filter((a) => a.installed), r = Vt.filter((a) => !a.installed);
    return {
      nodes: Vt,
      total_count: Vt.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await ke(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await ke(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await ke(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await ke(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await ke(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await ke(250), (t ? At.filter((d) => d.level === t) : At).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await ke(300);
    const a = [...At, ...At.map((f) => ({
      ...f,
      name: "comfygit.workspace"
    }))];
    return (t ? a.filter((f) => f.level === t) : a).slice(0, r || 100);
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
  getStatus: async () => (await ke(400), {
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
      synced: gs.filter((t) => t.status === "synced").map((t) => t.name),
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
  getCommitHistory: async (t = 10) => (await ke(300), tl.slice(0, t)),
  getBranches: async () => (await ke(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (t) => {
    await ke(300), console.log(`[MOCK] Deleting branch: ${t}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await ke(300), {
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
    await ke(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await ke(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, a) => {
    await ke(400), console.log(`[MOCK] Updating remote ${t}: ${r}${a ? ` (push: ${a})` : ""}`);
  },
  fetchRemote: async (t) => {
    await ke(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await ke(300), {
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
  analyzeWorkflow: async (t) => (await ke(600), {
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
    await ke(800);
    const d = [], f = [];
    return r.forEach((v, p) => {
      v.action === "install" && v.package_id && d.push(v.package_id);
    }), a.forEach((v, p) => {
      v.action === "download" && v.url ? f.push({
        filename: p,
        url: v.url,
        size: 65e8,
        target_path: v.target_path || `models/${p}`
      }) : v.action === "select" && v.selected_model && console.log(`[MOCK] Selected existing model: ${v.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: d,
      models_to_download: f,
      estimated_time_seconds: d.length * 30 + f.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await ke(400);
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
    await ke(400);
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
function ke(t) {
  return new Promise((r) => setTimeout(r, t));
}
function Mt() {
  return !0;
}
const Ie = {
  initState: "idle",
  initProgress: 0,
  initMessage: "No initialization in progress",
  initStartTime: null,
  modelsFound: 0
}, Ee = {
  state: "idle",
  phase: null,
  progress: 0,
  message: "",
  startTime: null,
  envName: null
}, Wt = [
  { id: "init_structure", endTime: 300, progress: 5, message: "Creating environment structure..." },
  { id: "resolve_version", endTime: 800, progress: 10, message: "Resolving ComfyUI version..." },
  { id: "clone_comfyui", endTime: 2800, progress: 25, message: "Cloning ComfyUI..." },
  { id: "configure_environment", endTime: 3300, progress: 30, message: "Configuring environment..." },
  { id: "create_venv", endTime: 4300, progress: 35, message: "Creating virtual environment..." },
  { id: "install_pytorch", endTime: 8300, progress: 70, message: "Installing PyTorch..." },
  { id: "configure_pytorch", endTime: 8800, progress: 75, message: "Configuring PyTorch backend..." },
  { id: "install_dependencies", endTime: 11300, progress: 95, message: "Installing ComfyUI dependencies..." },
  { id: "finalize", endTime: 11800, progress: 100, message: "Finalizing environment..." }
];
function sl() {
  if (Ie.initState === "idle" || Ie.initState === "complete" || Ie.initState === "error" || !Ie.initStartTime) return;
  const t = Date.now() - Ie.initStartTime;
  if (t < 2e3)
    Ie.initState = "creating_workspace", Ie.initProgress = Math.min(20, Math.floor(t / 100)), Ie.initMessage = "Creating workspace structure...";
  else if (t < 4e3)
    Ie.initState = "setting_models_dir", Ie.initProgress = 20 + Math.floor((t - 2e3) / 200), Ie.initMessage = "Configuring models directory...";
  else if (t < 8e3) {
    Ie.initState = "scanning_models";
    const r = Math.floor((t - 4e3) / 50);
    Ie.initProgress = 30 + Math.min(65, r);
    const a = Math.floor((t - 4e3) / 100);
    Ie.initMessage = `Scanning models (${a}/42)...`;
  } else
    Ie.initState = "complete", Ie.initProgress = 100, Ie.initMessage = "Complete! 42 models indexed", Ie.modelsFound = 42, Ie.initStartTime = null;
}
function ol() {
  if (Ee.state === "idle" || Ee.state === "complete" || Ee.state === "error" || !Ee.startTime) return;
  const t = Date.now() - Ee.startTime;
  let r = !1;
  for (const a of Wt)
    if (t < a.endTime) {
      Ee.phase = a.id, Ee.message = a.message;
      const d = Wt.indexOf(a) - 1, f = d >= 0 ? Wt[d].endTime : 0, v = d >= 0 ? Wt[d].progress : 0, p = a.endTime - f, l = (t - f) / p;
      Ee.progress = Math.floor(v + (a.progress - v) * l), r = !0;
      break;
    }
  r || (Ee.state = "complete", Ee.phase = "complete", Ee.progress = 100, Ee.message = `Environment '${Ee.envName}' created successfully`, Ee.startTime = null);
}
function Pe() {
  const t = b(!1), r = b(null);
  async function a(q, $e) {
    var wt;
    if (!((wt = window.app) != null && wt.api))
      throw new Error("ComfyUI API not available");
    const Ue = await window.app.api.fetchApi(q, $e);
    if (!Ue.ok) {
      const ot = await Ue.json().catch(() => ({}));
      throw new Error(ot.error || ot.message || `Request failed: ${Ue.status}`);
    }
    return Ue.json();
  }
  async function d(q = !1) {
    return _e.getStatus();
  }
  async function f(q, $e = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: $e })
    });
  }
  async function v(q = 10, $e = 0) {
    {
      const Ue = await _e.getCommitHistory(q);
      return {
        commits: Ue,
        total: Ue.length,
        offset: $e
      };
    }
  }
  async function p(q) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function m() {
    return _e.getBranches();
  }
  async function l(q) {
    return a(`/v2/comfygit/commit/${q}`);
  }
  async function u(q, $e = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: $e })
    });
  }
  async function _(q, $e = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: $e })
    });
  }
  async function y(q, $e = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: $e })
    });
  }
  async function k(q, $e = !1) {
    return await _e.deleteBranch(q), { status: "success" };
  }
  async function $() {
    return _e.getEnvironments();
  }
  async function z(q) {
    return _e.switchEnvironment(q);
  }
  async function S() {
    return null;
  }
  async function h(q) {
    return Ee.state = "creating", Ee.phase = "init_structure", Ee.progress = 0, Ee.message = "Creating environment structure...", Ee.startTime = Date.now(), Ee.envName = q.name, console.log("[MOCK] Starting environment creation:", q), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function E() {
    return ol(), {
      state: Ee.state,
      phase: Ee.phase ?? void 0,
      progress: Ee.progress,
      message: Ee.message,
      environment_name: Ee.state === "complete" && Ee.envName || void 0,
      error: Ee.state === "error" ? "Mock error occurred" : void 0
    };
  }
  async function F(q = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function L(q) {
    return await _e.deleteEnvironment(q), { status: "success" };
  }
  async function O(q = !1) {
    return _e.getWorkflows();
  }
  async function A(q) {
    return _e.getWorkflowDetails(q);
  }
  async function P(q) {
    return _e.resolveWorkflow(q);
  }
  async function N(q, $e, Ue) {
    return await _e.installWorkflowDeps(q, $e, Ue), { status: "success" };
  }
  async function T(q, $e, Ue) {
    return _e.setModelImportance(q, $e, Ue);
  }
  async function C() {
    return _e.getEnvironmentModels();
  }
  async function x() {
    return _e.getWorkspaceModels();
  }
  async function G(q) {
    return _e.getModelDetails(q);
  }
  async function H(q) {
    return console.log(`[MOCK] Opening file location: ${q}`), { status: "success" };
  }
  async function J(q, $e) {
    return await _e.updateModelSource(q, $e), { status: "success", source_type: "custom" };
  }
  async function ge(q, $e) {
    return { status: "success" };
  }
  async function de(q) {
    return _e.deleteModel(q);
  }
  async function oe(q) {
    return await _e.downloadModel(q), { status: "success" };
  }
  async function U() {
    return { status: "success", changes: 0 };
  }
  async function M() {
    return { path: "~/comfygit/models" };
  }
  async function se(q) {
    return { status: "success", path: q, models_indexed: 10 };
  }
  async function Z() {
    return _e.getConfig();
  }
  async function Te(q) {
    return _e.updateConfig(q);
  }
  async function ne(q, $e) {
    return _e.getEnvironmentLogs(q, $e);
  }
  async function Ye(q, $e) {
    return _e.getWorkspaceLogs(q, $e);
  }
  async function xe() {
    return _e.getNodes();
  }
  async function ce(q) {
    return { status: "success", message: `Node '${q}' tracked as development` };
  }
  async function ve(q) {
    return await _e.installNode(q), { status: "success" };
  }
  async function Qe(q) {
    return await _e.updateNode(q), { status: "success" };
  }
  async function he(q) {
    return await _e.uninstallNode(q), { status: "success" };
  }
  async function le() {
    return _e.getRemotes();
  }
  async function K(q, $e) {
    return await _e.addRemote(q, $e), { status: "success", remote_name: q };
  }
  async function Se(q) {
    return await _e.removeRemote(q), { status: "success", remote_name: q };
  }
  async function be(q, $e, Ue) {
    return await _e.updateRemoteUrl(q, $e, Ue), { status: "success", remote_name: q };
  }
  async function ie(q) {
    return await _e.fetchRemote(q), { status: "success", remote_name: q };
  }
  async function me(q) {
    return _e.getRemoteSyncStatus(q);
  }
  async function ft(q = "skip", $e = !0) {
    return await new Promise((Ue) => setTimeout(Ue, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function gt() {
    return Ee.state === "complete" && Ee.envName ? {
      state: "unmanaged",
      workspace_path: "~/comfygit",
      default_path: "~/comfygit",
      environments: [Ee.envName],
      current_environment: null,
      detected_models_dir: "/mock/ComfyUI/models",
      cli_installed: !1,
      // Mock as not installed to test warning
      cli_path: null
    } : Ie.initState === "complete" ? {
      state: "empty_workspace",
      workspace_path: "~/comfygit",
      default_path: "~/comfygit",
      environments: [],
      current_environment: null,
      detected_models_dir: "/mock/ComfyUI/models",
      cli_installed: !1,
      // Mock as not installed to test warning
      cli_path: null
    } : {
      state: "no_workspace",
      workspace_path: null,
      default_path: "~/comfygit",
      environments: [],
      current_environment: null,
      detected_models_dir: "/mock/ComfyUI/models",
      cli_installed: !1,
      cli_path: null
    };
  }
  async function Be(q) {
    return Ie.initState = "creating_workspace", Ie.initProgress = 0, Ie.initMessage = "Starting workspace creation...", Ie.initStartTime = Date.now(), Ie.modelsFound = 0, console.log("[MOCK] Starting workspace initialization:", q), { status: "started", task_id: "mock-task-id" };
  }
  async function It() {
    return sl(), {
      state: Ie.initState,
      progress: Ie.initProgress,
      message: Ie.initMessage,
      models_found: Ie.initState === "complete" ? Ie.modelsFound : void 0,
      error: Ie.initState === "error" ? "Mock error occurred" : void 0
    };
  }
  async function yt(q) {
    return await new Promise(($e) => setTimeout($e, 200)), q.type === "workspace" ? !q.path || q.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : q.path.includes("existing") ? { valid: !1, error: "Workspace already exists at this location" } : { valid: !0 } : q.type === "models" ? !q.path || q.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : q.path.endsWith("ComfyUI") || q.path.endsWith("comfyui") ? {
      valid: !1,
      error: "This appears to be a ComfyUI installation, not a models directory",
      suggestion: q.path + "/models"
    } : { valid: !0, model_count: 42 } : { valid: !0 };
  }
  return {
    isLoading: t,
    error: r,
    getStatus: d,
    commit: f,
    getHistory: v,
    exportEnv: p,
    // Git Operations
    getBranches: m,
    getCommitDetail: l,
    checkout: u,
    createBranch: _,
    switchBranch: y,
    deleteBranch: k,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: z,
    getSwitchProgress: S,
    createEnvironment: h,
    getCreateProgress: E,
    getComfyUIReleases: F,
    deleteEnvironment: L,
    // Workflow Management
    getWorkflows: O,
    getWorkflowDetails: A,
    resolveWorkflow: P,
    installWorkflowDeps: N,
    setModelImportance: T,
    // Model Management
    getEnvironmentModels: C,
    getWorkspaceModels: x,
    getModelDetails: G,
    openFileLocation: H,
    addModelSource: J,
    removeModelSource: ge,
    deleteModel: de,
    downloadModel: oe,
    scanWorkspaceModels: U,
    getModelsDirectory: M,
    setModelsDirectory: se,
    // Settings
    getConfig: Z,
    updateConfig: Te,
    // Debug/Logs
    getEnvironmentLogs: ne,
    getWorkspaceLogs: Ye,
    // Node Management
    getNodes: xe,
    trackNodeAsDev: ce,
    installNode: ve,
    updateNode: Qe,
    uninstallNode: he,
    // Git Remotes
    getRemotes: le,
    addRemote: K,
    removeRemote: Se,
    updateRemoteUrl: be,
    fetchRemote: ie,
    getRemoteSyncStatus: me,
    // Environment Sync
    syncEnvironmentManually: ft,
    // First-Time Setup
    getSetupStatus: gt,
    initializeWorkspace: Be,
    getInitializeProgress: It,
    validatePath: yt
  };
}
async function zt(t, r = {}, a = 5e3) {
  const d = new AbortController(), f = setTimeout(() => d.abort(), a);
  try {
    const v = await fetch(t, {
      ...r,
      signal: d.signal
    });
    return clearTimeout(f), v;
  } catch (v) {
    throw clearTimeout(f), v.name === "AbortError" ? new Error(`Request timeout after ${a}ms`) : v;
  }
}
function xs() {
  const t = b(null);
  async function r() {
    try {
      const p = await zt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (p.ok)
        return (await p.json()).port;
    } catch {
    }
    return 8189;
  }
  async function a() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const p = await zt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Health check failed");
      return await p.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function d() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const p = await zt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Failed to get status");
      return await p.json();
    } catch {
      return null;
    }
  }
  async function f() {
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
    restart: f,
    kill: v
  };
}
const al = { class: "base-modal-header" }, nl = {
  key: 0,
  class: "base-modal-title"
}, ll = { class: "base-modal-body" }, il = {
  key: 0,
  class: "base-modal-loading"
}, rl = {
  key: 1,
  class: "base-modal-error"
}, dl = {
  key: 0,
  class: "base-modal-footer"
}, cl = /* @__PURE__ */ X({
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
    function f() {
      a.closeOnOverlayClick && d("close");
    }
    function v(p) {
      p.key === "Escape" && a.showCloseButton && d("close");
    }
    return Ne(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), ks(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (p, m) => (s(), I(Ve, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: ae(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = De(() => {
          }, ["stop"]))
        }, [
          e("div", al, [
            ye(p.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", nl, n(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (l) => p.$emit("close"))
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
          e("div", ll, [
            t.loading ? (s(), o("div", il, "Loading...")) : t.error ? (s(), o("div", rl, n(t.error), 1)) : ye(p.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          p.$slots.footer ? (s(), o("div", dl, [
            ye(p.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), rt = /* @__PURE__ */ Q(cl, [["__scopeId", "data-v-8dab1081"]]), ul = ["type", "disabled"], ml = {
  key: 0,
  class: "spinner"
}, vl = /* @__PURE__ */ X({
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
      class: ae(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: a[0] || (a[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", ml)) : c("", !0),
      ye(r.$slots, "default", {}, void 0, !0)
    ], 10, ul));
  }
}), re = /* @__PURE__ */ Q(vl, [["__scopeId", "data-v-f3452606"]]), fl = {
  key: 0,
  class: "base-title-count"
}, gl = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, a) => (s(), I(ls(`h${t.level}`), {
      class: ae(["base-title", t.variant])
    }, {
      default: i(() => [
        ye(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", fl, "(" + n(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Nt = /* @__PURE__ */ Q(gl, [["__scopeId", "data-v-5a01561d"]]), pl = ["value", "disabled"], hl = {
  key: 0,
  value: "",
  disabled: ""
}, yl = ["value"], wl = {
  key: 0,
  class: "base-select-error"
}, kl = /* @__PURE__ */ X({
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
    return (d, f) => (s(), o("div", {
      class: ae(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ae(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (v) => d.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", hl, n(t.placeholder), 1)) : c("", !0),
        (s(!0), o(W, null, ee(t.options, (v) => (s(), o("option", {
          key: r(v),
          value: r(v)
        }, n(a(v)), 9, yl))), 128))
      ], 42, pl),
      t.error ? (s(), o("span", wl, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), _l = /* @__PURE__ */ Q(kl, [["__scopeId", "data-v-7436d745"]]), bl = { class: "popover-header" }, $l = { class: "popover-title" }, Cl = { class: "popover-content" }, xl = {
  key: 0,
  class: "popover-actions"
}, Sl = /* @__PURE__ */ X({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, a) => (s(), I(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: it({ maxWidth: t.maxWidth }),
          onClick: a[1] || (a[1] = De(() => {
          }, ["stop"]))
        }, [
          e("div", bl, [
            e("h4", $l, n(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Cl, [
            ye(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (s(), o("div", xl, [
            ye(r.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), dt = /* @__PURE__ */ Q(Sl, [["__scopeId", "data-v-42815ace"]]), Il = { class: "detail-section" }, El = {
  key: 0,
  class: "empty-message"
}, Ml = { class: "model-header" }, zl = { class: "model-name" }, Tl = { class: "model-details" }, Ll = { class: "model-row" }, Dl = { class: "model-row" }, Rl = { class: "label" }, Nl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ul = { class: "node-list" }, Pl = ["onClick"], Bl = {
  key: 1,
  class: "model-row"
}, Ol = { class: "value" }, Fl = {
  key: 2,
  class: "model-row"
}, Vl = { class: "value error" }, Al = {
  key: 0,
  class: "model-actions"
}, Wl = { class: "detail-section" }, Gl = {
  key: 0,
  class: "empty-message"
}, jl = { class: "node-name" }, Hl = {
  key: 0,
  class: "node-version"
}, Kl = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: r }) {
    const a = t, d = r, { getWorkflowDetails: f, setModelImportance: v, openFileLocation: p } = Pe(), m = b(null), l = b(!1), u = b(null), _ = b(!1), y = b({}), k = b(!1), $ = b(/* @__PURE__ */ new Set()), z = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(T) {
      switch (T) {
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
    function h(T) {
      switch (T) {
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
    function E(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const C = T.hash || T.filename;
      return $.value.has(C) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function F(T) {
      return $.value.has(T);
    }
    function L(T) {
      $.value.has(T) ? $.value.delete(T) : $.value.add(T), $.value = new Set($.value);
    }
    async function O() {
      l.value = !0, u.value = null;
      try {
        m.value = await f(a.workflowName);
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function A(T, C) {
      y.value[T] = C, _.value = !0;
    }
    async function P(T) {
      try {
        await p(T);
      } catch (C) {
        u.value = C instanceof Error ? C.message : "Failed to open file location";
      }
    }
    async function N() {
      if (!_.value) {
        d("close");
        return;
      }
      l.value = !0, u.value = null;
      try {
        for (const [T, C] of Object.entries(y.value))
          await v(a.workflowName, T, C);
        d("refresh"), d("close");
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    return Ne(O), (T, C) => (s(), o(W, null, [
      g(rt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: u.value || void 0,
        onClose: C[4] || (C[4] = (x) => d("close"))
      }, {
        body: i(() => [
          m.value ? (s(), o(W, { key: 0 }, [
            e("section", Il, [
              g(Nt, { variant: "section" }, {
                default: i(() => [
                  w("MODELS USED (" + n(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", El, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(W, null, ee(m.value.models, (x) => {
                var G;
                return s(), o("div", {
                  key: x.hash || x.filename,
                  class: "model-card"
                }, [
                  e("div", Ml, [
                    C[6] || (C[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", zl, n(x.filename), 1)
                  ]),
                  e("div", Tl, [
                    e("div", Ll, [
                      C[7] || (C[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: ae(["value", S(x.status)])
                      }, n(h(x.status)), 3)
                    ]),
                    e("div", Dl, [
                      e("span", Rl, [
                        C[8] || (C[8] = w(" Importance: ", -1)),
                        g(bs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: C[0] || (C[0] = (H) => k.value = !0)
                        })
                      ]),
                      g(_l, {
                        "model-value": y.value[x.filename] || x.importance,
                        options: z,
                        "onUpdate:modelValue": (H) => A(x.filename, H)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    x.loaded_by && x.loaded_by.length > 0 ? (s(), o("div", Nl, [
                      C[9] || (C[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Ul, [
                        (s(!0), o(W, null, ee(E(x), (H, J) => (s(), o("div", {
                          key: `${H.node_id}-${J}`,
                          class: "node-reference"
                        }, n(H.node_type) + " (Node #" + n(H.node_id) + ") ", 1))), 128)),
                        x.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (H) => L(x.hash || x.filename)
                        }, n(F(x.hash || x.filename) ? "▼ Show less" : `▶ View all (${x.loaded_by.length})`), 9, Pl)) : c("", !0)
                      ])
                    ])) : c("", !0),
                    x.size_mb ? (s(), o("div", Bl, [
                      C[10] || (C[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Ol, n(x.size_mb) + " MB", 1)
                    ])) : c("", !0),
                    x.has_category_mismatch ? (s(), o("div", Fl, [
                      C[13] || (C[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Vl, [
                        C[11] || (C[11] = w(" In ", -1)),
                        e("code", null, n(x.actual_category) + "/", 1),
                        C[12] || (C[12] = w(" but loader needs ", -1)),
                        e("code", null, n((G = x.expected_categories) == null ? void 0 : G[0]) + "/", 1)
                      ])
                    ])) : c("", !0)
                  ]),
                  x.status !== "available" ? (s(), o("div", Al, [
                    x.status === "downloadable" ? (s(), I(re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: C[1] || (C[1] = (H) => d("resolve"))
                    }, {
                      default: i(() => [...C[14] || (C[14] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    })) : x.status === "category_mismatch" && x.file_path ? (s(), I(re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => P(x.file_path)
                    }, {
                      default: i(() => [...C[15] || (C[15] = [
                        w(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : x.status !== "path_mismatch" ? (s(), I(re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: C[2] || (C[2] = (H) => d("resolve"))
                    }, {
                      default: i(() => [...C[16] || (C[16] = [
                        w(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : c("", !0)
                  ])) : c("", !0)
                ]);
              }), 128))
            ]),
            e("section", Wl, [
              g(Nt, { variant: "section" }, {
                default: i(() => [
                  w("NODES USED (" + n(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", Gl, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(W, null, ee(m.value.nodes, (x) => (s(), o("div", {
                key: x.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ae(["node-status", x.status === "installed" ? "installed" : "missing"])
                }, n(x.status === "installed" ? "✓" : "✕"), 3),
                e("span", jl, n(x.name), 1),
                x.version ? (s(), o("span", Hl, "v" + n(x.version), 1)) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          g(re, {
            variant: "secondary",
            onClick: C[3] || (C[3] = (x) => d("close"))
          }, {
            default: i(() => [...C[17] || (C[17] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          _.value ? (s(), I(re, {
            key: 0,
            variant: "primary",
            onClick: N
          }, {
            default: i(() => [...C[18] || (C[18] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(dt, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: C[5] || (C[5] = (x) => k.value = !1)
      }, {
        content: i(() => [...C[19] || (C[19] = [
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
}), ql = /* @__PURE__ */ Q(Kl, [["__scopeId", "data-v-668728e6"]]), Ce = _s({
  items: [],
  status: "idle"
});
let st = null;
function Ss() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Qt(t) {
  return Ce.items.find((r) => r.id === t);
}
async function _t() {
  if (Ce.status === "downloading") return;
  const t = Ce.items.find((r) => r.status === "queued");
  if (!t) {
    Ce.status = "idle";
    return;
  }
  Ce.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Yl(t), t.status = "completed", t.progress = 100;
  } catch (r) {
    t.status = "failed", t.error = r instanceof Error ? r.message : "Download failed", t.retries++;
  } finally {
    Ce.status = "idle", _t();
  }
}
async function Yl(t) {
  return new Promise((r, a) => {
    st && (st.close(), st = null);
    const d = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${d}`);
    st = f;
    let v = Date.now(), p = 0, m = !1;
    f.onmessage = (l) => {
      try {
        const u = JSON.parse(l.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const _ = Date.now(), y = (_ - v) / 1e3;
            if (y > 0.5) {
              const k = t.downloaded - p;
              if (t.speed = k / y, v = _, p = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, f.close(), st = null, r();
            break;
          case "error":
            m = !0, f.close(), st = null, a(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), st = null, m || a(new Error("Connection lost"));
    };
  });
}
async function Xl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const r = await t.json();
    if (!r.pending_downloads || r.pending_downloads.length === 0) return;
    for (const a of r.pending_downloads) {
      if (Ce.items.some((f) => f.url === a.url && f.filename === a.filename))
        continue;
      const d = {
        id: Ss(),
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
      Ce.items.push(d);
    }
    console.log(`[ComfyGit] Loaded ${r.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Bt() {
  function t(h) {
    for (const E of h) {
      if (Ce.items.some(
        (O) => O.url === E.url && O.targetPath === E.targetPath && ["queued", "downloading", "paused", "completed"].includes(O.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${E.filename}`);
        continue;
      }
      const L = {
        id: Ss(),
        workflow: E.workflow,
        filename: E.filename,
        url: E.url,
        targetPath: E.targetPath,
        size: E.size || 0,
        type: E.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Ce.items.push(L);
    }
    Ce.status === "idle" && _t();
  }
  async function r(h) {
    const E = Qt(h);
    if (E) {
      if (E.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(E.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        st && (st.close(), st = null), E.status = "failed", E.error = "Cancelled by user", Ce.status = "idle", _t();
      } else if (E.status === "queued") {
        const F = Ce.items.findIndex((L) => L.id === h);
        F >= 0 && Ce.items.splice(F, 1);
      }
    }
  }
  function a(h) {
    const E = Qt(h);
    !E || E.status !== "failed" || (E.status = "queued", E.error = void 0, E.progress = 0, E.downloaded = 0, Ce.status === "idle" && _t());
  }
  function d(h) {
    const E = Qt(h);
    !E || E.status !== "paused" || (E.status = "queued", Ce.status === "idle" && _t());
  }
  function f() {
    const h = Ce.items.filter((E) => E.status === "paused");
    for (const E of h)
      E.status = "queued";
    Ce.status === "idle" && _t();
  }
  function v(h) {
    const E = Ce.items.findIndex((F) => F.id === h);
    E >= 0 && ["completed", "failed", "paused"].includes(Ce.items[E].status) && Ce.items.splice(E, 1);
  }
  function p() {
    Ce.items = Ce.items.filter((h) => h.status !== "completed");
  }
  function m() {
    Ce.items = Ce.items.filter((h) => h.status !== "failed");
  }
  const l = B(
    () => Ce.items.find((h) => h.status === "downloading")
  ), u = B(
    () => Ce.items.filter((h) => h.status === "queued")
  ), _ = B(
    () => Ce.items.filter((h) => h.status === "completed")
  ), y = B(
    () => Ce.items.filter((h) => h.status === "failed")
  ), k = B(
    () => Ce.items.filter((h) => h.status === "paused")
  ), $ = B(() => Ce.items.length > 0), z = B(
    () => Ce.items.filter((h) => h.status === "queued" || h.status === "downloading").length
  ), S = B(
    () => Ce.items.some((h) => h.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Qs(Ce),
    // Computed
    currentDownload: l,
    queuedItems: u,
    completedItems: _,
    failedItems: y,
    pausedItems: k,
    hasItems: $,
    activeCount: z,
    hasPaused: S,
    // Actions
    addToQueue: t,
    cancelDownload: r,
    retryDownload: a,
    resumeDownload: d,
    resumeAllPaused: f,
    removeItem: v,
    clearCompleted: p,
    clearFailed: m,
    loadPendingDownloads: Xl
  };
}
function Is() {
  const t = b(null), r = b(null), a = b([]), d = b([]), f = b(!1), v = b(null);
  async function p(E, F) {
    var O;
    if (!((O = window.app) != null && O.api))
      throw new Error("ComfyUI API not available");
    const L = await window.app.api.fetchApi(E, F);
    if (!L.ok) {
      const A = await L.json().catch(() => ({})), P = A.error || A.message || `Request failed: ${L.status}`;
      throw new Error(P);
    }
    return L.json();
  }
  async function m(E) {
    f.value = !0, v.value = null;
    try {
      let F;
      return Mt() && (F = await _e.analyzeWorkflow(E)), t.value = F, F;
    } catch (F) {
      const L = F instanceof Error ? F.message : "Unknown error occurred";
      throw v.value = L, F;
    } finally {
      f.value = !1;
    }
  }
  async function l(E, F, L, O) {
    f.value = !0, v.value = null;
    try {
      let A;
      return Mt() && (A = await _e.applyResolution(E, F, L)), r.value = A, A;
    } catch (A) {
      const P = A instanceof Error ? A.message : "Unknown error occurred";
      throw v.value = P, A;
    } finally {
      f.value = !1;
    }
  }
  async function u(E, F = 10) {
    f.value = !0, v.value = null;
    try {
      let L;
      return Mt() && (L = await _e.searchNodes(E, F)), a.value = L.results, L.results;
    } catch (L) {
      const O = L instanceof Error ? L.message : "Unknown error occurred";
      throw v.value = O, L;
    } finally {
      f.value = !1;
    }
  }
  async function _(E, F = 10) {
    f.value = !0, v.value = null;
    try {
      let L;
      return Mt() && (L = await _e.searchModels(E, F)), d.value = L.results, L.results;
    } catch (L) {
      const O = L instanceof Error ? L.message : "Unknown error occurred";
      throw v.value = O, L;
    } finally {
      f.value = !1;
    }
  }
  const y = _s({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    y.phase = "idle", y.currentFile = void 0, y.currentFileIndex = void 0, y.totalFiles = void 0, y.bytesDownloaded = void 0, y.bytesTotal = void 0, y.completedFiles = [], y.nodesToInstall = [], y.nodesInstalled = [], y.installError = void 0, y.needsRestart = void 0, y.error = void 0, y.nodeInstallProgress = void 0;
  }
  async function $(E) {
    y.phase = "installing", y.nodesInstalled = [], y.installError = void 0, y.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Mt()) {
        y.nodeInstallProgress.totalNodes = y.nodesToInstall.length;
        for (let F = 0; F < y.nodesToInstall.length; F++)
          y.nodeInstallProgress.currentNode = y.nodesToInstall[F], y.nodeInstallProgress.currentIndex = F, await new Promise((L) => setTimeout(L, 500)), y.nodeInstallProgress.completedNodes.push({
            node_id: y.nodesToInstall[F],
            success: !0
          });
        return y.nodesInstalled = y.nodesToInstall, y.needsRestart = y.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: y.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await z(E);
    } catch (F) {
      const L = F instanceof Error ? F.message : "Failed to install nodes";
      throw y.installError = L, F;
    }
  }
  async function z(E) {
    var L;
    const F = await p(
      `/v2/comfygit/workflow/${E}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: y.nodesToInstall
        })
      }
    );
    if (y.nodeInstallProgress) {
      y.nodeInstallProgress.totalNodes = y.nodesToInstall.length;
      const O = new Map(((L = F.failed) == null ? void 0 : L.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < y.nodesToInstall.length; A++) {
        const P = y.nodesToInstall[A], N = O.get(P);
        y.nodeInstallProgress.completedNodes.push({
          node_id: P,
          success: !N,
          error: N
        });
      }
    }
    return y.nodesInstalled = F.nodes_installed, y.needsRestart = F.nodes_installed.length > 0, F.failed && F.failed.length > 0 && (y.installError = `${F.failed.length} package(s) failed to install`), F;
  }
  async function S(E, F, L) {
    k(), y.phase = "resolving", v.value = null;
    {
      const O = await _e.applyResolution(E, F, L);
      r.value = O, y.nodesToInstall = O.nodes_to_install, y.phase = "complete";
      return;
    }
  }
  function h(E, F) {
    const { addToQueue: L } = Bt(), O = F.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: E,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return O.length > 0 && L(O), O.length;
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: a,
    modelSearchResults: d,
    isLoading: f,
    error: v,
    progress: y,
    // Methods
    analyzeWorkflow: m,
    applyResolution: l,
    applyResolutionWithProgress: S,
    installNodes: $,
    searchNodes: u,
    searchModels: _,
    resetProgress: k,
    queueModelDownloads: h
  };
}
const Ql = { class: "resolution-stepper" }, Zl = { class: "stepper-header" }, Jl = ["onClick"], ei = {
  key: 0,
  class: "step-icon"
}, ti = {
  key: 1,
  class: "step-number"
}, si = { class: "step-label" }, oi = {
  key: 0,
  class: "step-connector"
}, ai = { class: "stepper-content" }, ni = /* @__PURE__ */ X({
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
    function f(u) {
      var _;
      if ((_ = a.stepStats) != null && _[u]) {
        const y = a.stepStats[u];
        return y.total > 0 && y.resolved === y.total;
      }
      return a.completedSteps.includes(u);
    }
    function v(u) {
      var _;
      if ((_ = a.stepStats) != null && _[u]) {
        const y = a.stepStats[u];
        return y.resolved > 0 && y.resolved < y.total;
      }
      return !1;
    }
    function p(u) {
      return f(u) ? "state-complete" : v(u) ? "state-partial" : "state-pending";
    }
    function m(u) {
      return !1;
    }
    function l(u) {
      d("step-change", u);
    }
    return (u, _) => (s(), o("div", Ql, [
      e("div", Zl, [
        (s(!0), o(W, null, ee(t.steps, (y, k) => (s(), o("div", {
          key: y.id,
          class: ae(["step", {
            active: t.currentStep === y.id,
            completed: f(y.id),
            "in-progress": v(y.id),
            disabled: m(y.id)
          }]),
          onClick: ($) => l(y.id)
        }, [
          e("div", {
            class: ae(["step-indicator", p(y.id)])
          }, [
            f(y.id) ? (s(), o("span", ei, "✓")) : (s(), o("span", ti, n(k + 1), 1))
          ], 2),
          e("div", si, n(y.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", oi)) : c("", !0)
        ], 10, Jl))), 128))
      ]),
      e("div", ai, [
        ye(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), li = /* @__PURE__ */ Q(ni, [["__scopeId", "data-v-2a7b3af8"]]), ii = /* @__PURE__ */ X({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = B(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), d = B(() => `confidence-${a.value}`), f = B(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : a.value.charAt(0).toUpperCase() + a.value.slice(1));
    return (v, p) => (s(), o("span", {
      class: ae(["confidence-badge", d.value, t.size])
    }, n(f.value), 3));
  }
}), Kt = /* @__PURE__ */ Q(ii, [["__scopeId", "data-v-17ec4b80"]]), ri = { class: "node-info" }, di = { class: "node-info-text" }, ci = { class: "item-body" }, ui = {
  key: 0,
  class: "resolved-state"
}, mi = {
  key: 1,
  class: "multiple-options"
}, vi = { class: "options-list" }, fi = ["onClick"], gi = ["name", "value", "checked", "onChange"], pi = { class: "option-content" }, hi = { class: "option-header" }, yi = { class: "option-package-id" }, wi = {
  key: 0,
  class: "option-title"
}, ki = { class: "option-meta" }, _i = {
  key: 0,
  class: "installed-badge"
}, bi = { class: "action-buttons" }, $i = {
  key: 2,
  class: "unresolved"
}, Ci = {
  key: 0,
  class: "searching-state"
}, xi = { class: "options-list" }, Si = ["onClick"], Ii = ["name", "value"], Ei = { class: "option-content" }, Mi = { class: "option-header" }, zi = { class: "option-package-id" }, Ti = {
  key: 0,
  class: "option-description"
}, Li = { class: "option-meta" }, Di = {
  key: 0,
  class: "installed-badge"
}, Ri = {
  key: 2,
  class: "unresolved-message"
}, Ni = { class: "action-buttons" }, Ui = /* @__PURE__ */ X({
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
    function f(l, u = 80) {
      return l.length <= u ? l : l.slice(0, u - 3) + "...";
    }
    const v = B(() => !!a.choice);
    B(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.action;
    }), B(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.package_id;
    });
    const p = B(() => {
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
      class: ae(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", ri, [
        e("span", di, [
          u[7] || (u[7] = w("Node type: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ae(["status-badge", p.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", ci, [
        v.value ? (s(), o("div", ui, [
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (_) => d("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", mi, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", vi, [
            (s(!0), o(W, null, ee(t.options, (_, y) => (s(), o("label", {
              key: _.package_id,
              class: ae(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (k) => m(y)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (k) => m(y)
              }, null, 40, gi),
              e("div", pi, [
                e("div", hi, [
                  e("span", yi, n(_.package_id), 1),
                  g(Kt, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                _.title && _.title !== _.package_id ? (s(), o("div", wi, n(_.title), 1)) : c("", !0),
                e("div", ki, [
                  _.is_installed ? (s(), o("span", _i, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, fi))), 128))
          ]),
          e("div", bi, [
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[1] || (u[1] = (_) => d("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[2] || (u[2] = (_) => d("manual-entry"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (_) => d("mark-optional"))
            }, {
              default: i(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", $i, [
          t.isSearching ? (s(), o("div", Ci, [...u[13] || (u[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            u[14] || (u[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", xi, [
              (s(!0), o(W, null, ee(t.searchResults.slice(0, 5), (_, y) => (s(), o("label", {
                key: _.package_id,
                class: "option-card",
                onClick: (k) => d("search-result-selected", _)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: y
                }, null, 8, Ii),
                e("div", Ei, [
                  e("div", Mi, [
                    e("span", zi, n(_.package_id), 1),
                    g(Kt, {
                      confidence: _.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  _.description ? (s(), o("div", Ti, n(f(_.description)), 1)) : c("", !0),
                  e("div", Li, [
                    _.is_installed ? (s(), o("span", Di, "Already Installed")) : c("", !0)
                  ])
                ])
              ], 8, Si))), 128))
            ])
          ], 64)) : (s(), o("div", Ri, [...u[15] || (u[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ni, [
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[4] || (u[4] = (_) => d("search"))
            }, {
              default: i(() => {
                var _;
                return [
                  w(n((_ = t.searchResults) != null && _.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (_) => d("manual-entry"))
            }, {
              default: i(() => [...u[16] || (u[16] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (_) => d("mark-optional"))
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
}), Pi = /* @__PURE__ */ Q(Ui, [["__scopeId", "data-v-c2997d1d"]]), Bi = { class: "item-navigator" }, Oi = { class: "nav-item-info" }, Fi = ["title"], Vi = { class: "nav-controls" }, Ai = { class: "nav-arrows" }, Wi = ["disabled"], Gi = ["disabled"], ji = { class: "nav-position" }, Hi = /* @__PURE__ */ X({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: r }) {
    const a = r;
    return (d, f) => (s(), o("div", Bi, [
      e("div", Oi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, n(t.itemName), 9, Fi)
      ]),
      e("div", Vi, [
        e("div", Ai, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (v) => a("prev")),
            title: "Previous item"
          }, " ← ", 8, Wi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (v) => a("next")),
            title: "Next item"
          }, " → ", 8, Gi)
        ]),
        e("span", ji, n(t.currentIndex + 1) + "/" + n(t.totalItems), 1)
      ])
    ]));
  }
}), Es = /* @__PURE__ */ Q(Hi, [["__scopeId", "data-v-74af7920"]]), Ki = ["type", "value", "placeholder", "disabled"], qi = {
  key: 0,
  class: "base-input-error"
}, Yi = /* @__PURE__ */ X({
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
      class: ae(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ae(["base-input", { error: !!t.error }]),
        onInput: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeyup: [
          a[1] || (a[1] = vt((d) => r.$emit("enter"), ["enter"])),
          a[2] || (a[2] = vt((d) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ki),
      t.error ? (s(), o("span", qi, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ Q(Yi, [["__scopeId", "data-v-9ba02cdc"]]), Xi = { class: "node-resolution-step" }, Qi = {
  key: 0,
  class: "auto-resolved-section"
}, Zi = { class: "section-header" }, Ji = { class: "stat-badge" }, er = { class: "resolved-packages-list" }, tr = { class: "package-info" }, sr = { class: "package-id" }, or = { class: "node-count" }, ar = { class: "package-actions" }, nr = {
  key: 0,
  class: "status-badge install"
}, lr = {
  key: 1,
  class: "status-badge skip"
}, ir = ["onClick"], rr = {
  key: 1,
  class: "section-divider"
}, dr = { class: "step-header" }, cr = { class: "stat-badge" }, ur = {
  key: 1,
  class: "step-body"
}, mr = {
  key: 3,
  class: "empty-state"
}, vr = { class: "node-modal-body" }, fr = { class: "node-search-results-container" }, gr = {
  key: 0,
  class: "node-search-results"
}, pr = ["onClick"], hr = { class: "node-result-header" }, yr = { class: "node-result-package-id" }, wr = {
  key: 0,
  class: "node-result-description"
}, kr = {
  key: 1,
  class: "node-empty-state"
}, _r = {
  key: 2,
  class: "node-empty-state"
}, br = {
  key: 3,
  class: "node-empty-state"
}, $r = { class: "node-manual-entry-modal" }, Cr = { class: "node-modal-body" }, xr = { class: "node-modal-actions" }, Sr = /* @__PURE__ */ X({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: r }) {
    const a = t, d = r, { searchNodes: f } = Is(), v = b(0), p = b(!1), m = b(!1), l = b(""), u = b(""), _ = b([]), y = b(!1), k = b(/* @__PURE__ */ new Map()), $ = b(/* @__PURE__ */ new Set()), z = b(!1);
    function S() {
      z.value && U(), z.value = !1;
    }
    const h = B(() => a.nodes[v.value]), E = B(() => a.nodes.filter((ce) => a.nodeChoices.has(ce.node_type)).length), F = B(() => h.value ? k.value.get(h.value.node_type) || [] : []), L = B(() => h.value ? $.value.has(h.value.node_type) : !1);
    qt(h, async (ce) => {
      var ve;
      ce && ((ve = ce.options) != null && ve.length || k.value.has(ce.node_type) || $.value.has(ce.node_type) || a.nodeChoices.has(ce.node_type) || await O(ce.node_type));
    }, { immediate: !0 });
    async function O(ce) {
      $.value.add(ce);
      try {
        const ve = await f(ce, 5);
        k.value.set(ce, ve);
      } catch {
        k.value.set(ce, []);
      } finally {
        $.value.delete(ce);
      }
    }
    const A = B(() => a.autoResolvedPackages.filter((ce) => !a.skippedPackages.has(ce.package_id)).length);
    function P(ce) {
      return a.skippedPackages.has(ce);
    }
    function N(ce) {
      d("package-skip", ce);
    }
    const T = B(() => {
      var ve;
      if (!h.value) return "not-found";
      const ce = a.nodeChoices.get(h.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ve = h.value.options) != null && ve.length ? "ambiguous" : "not-found";
    }), C = B(() => {
      var ve;
      if (!h.value) return;
      const ce = a.nodeChoices.get(h.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return ce.package_id ? `→ ${ce.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ve = h.value.options) != null && ve.length ? `${h.value.options.length} matches` : "Not Found";
    });
    function x(ce) {
      ce >= 0 && ce < a.nodes.length && (v.value = ce);
    }
    function G() {
      h.value && d("mark-optional", h.value.node_type);
    }
    function H() {
      h.value && d("skip", h.value.node_type);
    }
    function J(ce) {
      h.value && d("option-selected", h.value.node_type, ce);
    }
    function ge() {
      h.value && d("clear-choice", h.value.node_type);
    }
    function de() {
      h.value && (l.value = h.value.node_type, _.value = F.value, p.value = !0, Te(l.value));
    }
    function oe() {
      u.value = "", m.value = !0;
    }
    function U() {
      p.value = !1, l.value = "", _.value = [];
    }
    function M() {
      m.value = !1, u.value = "";
    }
    let se = null;
    function Z() {
      se && clearTimeout(se), se = setTimeout(() => {
        Te(l.value);
      }, 300);
    }
    async function Te(ce) {
      if (!ce.trim()) {
        _.value = [];
        return;
      }
      y.value = !0;
      try {
        _.value = await f(ce, 10);
      } catch {
        _.value = [];
      } finally {
        y.value = !1;
      }
    }
    function ne(ce) {
      h.value && (d("manual-entry", h.value.node_type, ce.package_id), U());
    }
    function Ye(ce) {
      h.value && d("manual-entry", h.value.node_type, ce.package_id);
    }
    function xe() {
      !h.value || !u.value.trim() || (d("manual-entry", h.value.node_type, u.value.trim()), M());
    }
    return (ce, ve) => {
      var Qe, he;
      return s(), o("div", Xi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Qi, [
          e("div", Zi, [
            ve[6] || (ve[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Ji, n(A.value) + "/" + n(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", er, [
            (s(!0), o(W, null, ee(t.autoResolvedPackages, (le) => (s(), o("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              e("div", tr, [
                e("code", sr, n(le.package_id), 1),
                e("span", or, n(le.node_types_count) + " node type" + n(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", ar, [
                P(le.package_id) ? (s(), o("span", lr, " SKIPPED ")) : (s(), o("span", nr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (K) => N(le.package_id)
                }, n(P(le.package_id) ? "Include" : "Skip"), 9, ir)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", rr)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", dr, [
            ve[7] || (ve[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", cr, n(E.value) + "/" + n(t.nodes.length) + " resolved", 1)
          ]),
          h.value ? (s(), I(Es, {
            key: 0,
            "item-name": h.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: ve[0] || (ve[0] = (le) => x(v.value - 1)),
            onNext: ve[1] || (ve[1] = (le) => x(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          h.value ? (s(), o("div", ur, [
            g(Pi, {
              "node-type": h.value.node_type,
              "has-multiple-options": !!((Qe = h.value.options) != null && Qe.length),
              options: h.value.options,
              choice: (he = t.nodeChoices) == null ? void 0 : he.get(h.value.node_type),
              status: T.value,
              "status-label": C.value,
              "search-results": F.value,
              "is-searching": L.value,
              onMarkOptional: G,
              onSkip: H,
              onManualEntry: oe,
              onSearch: de,
              onOptionSelected: J,
              onClearChoice: ge,
              onSearchResultSelected: Ye
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", mr, [...ve[8] || (ve[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), I(Ve, { to: "body" }, [
          p.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ve[4] || (ve[4] = De((le) => z.value = !0, ["self"])),
            onMouseup: De(S, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ve[3] || (ve[3] = (le) => z.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ve[9] || (ve[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", vr, [
                g(Je, {
                  modelValue: l.value,
                  "onUpdate:modelValue": ve[2] || (ve[2] = (le) => l.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Z
                }, null, 8, ["modelValue"]),
                e("div", fr, [
                  _.value.length > 0 ? (s(), o("div", gr, [
                    (s(!0), o(W, null, ee(_.value, (le) => (s(), o("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (K) => ne(le)
                    }, [
                      e("div", hr, [
                        e("code", yr, n(le.package_id), 1),
                        le.match_confidence ? (s(), I(Kt, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : c("", !0)
                      ]),
                      le.description ? (s(), o("div", wr, n(le.description), 1)) : c("", !0)
                    ], 8, pr))), 128))
                  ])) : y.value ? (s(), o("div", kr, "Searching...")) : l.value ? (s(), o("div", _r, 'No packages found matching "' + n(l.value) + '"', 1)) : (s(), o("div", br, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : c("", !0)
        ])),
        (s(), I(Ve, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: De(M, ["self"])
          }, [
            e("div", $r, [
              e("div", { class: "node-modal-header" }, [
                ve[10] || (ve[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", Cr, [
                g(Je, {
                  modelValue: u.value,
                  "onUpdate:modelValue": ve[5] || (ve[5] = (le) => u.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", xr, [
                  g(re, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: i(() => [...ve[11] || (ve[11] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: xe
                  }, {
                    default: i(() => [...ve[12] || (ve[12] = [
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
}), Ir = /* @__PURE__ */ Q(Sr, [["__scopeId", "data-v-281581bc"]]), Er = { class: "node-info" }, Mr = { class: "node-info-text" }, zr = { class: "item-body" }, Tr = {
  key: 0,
  class: "resolved-state"
}, Lr = {
  key: 1,
  class: "multiple-options"
}, Dr = { class: "options-list" }, Rr = ["onClick"], Nr = ["name", "value", "checked", "onChange"], Ur = { class: "option-content" }, Pr = { class: "option-header" }, Br = { class: "option-filename" }, Or = { class: "option-meta" }, Fr = { class: "option-size" }, Vr = { class: "option-category" }, Ar = { class: "option-path" }, Wr = { class: "action-buttons" }, Gr = {
  key: 2,
  class: "unresolved"
}, jr = { class: "action-buttons" }, Hr = /* @__PURE__ */ X({
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
    const a = t, d = r, f = B(() => !!a.choice);
    B(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.action;
    }), B(() => {
      var l, u;
      return ((u = (l = a.choice) == null ? void 0 : l.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const v = B(() => {
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
    function p(l) {
      d("option-selected", l);
    }
    function m(l) {
      if (!l) return "Unknown";
      const u = l / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, u) => (s(), o("div", {
      class: ae(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Er, [
        e("span", Mr, [
          u[7] || (u[7] = w("Used by: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ae(["status-badge", v.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", zr, [
        f.value ? (s(), o("div", Tr, [
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (_) => d("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Lr, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Dr, [
            (s(!0), o(W, null, ee(t.options, (_, y) => (s(), o("label", {
              key: _.model.hash,
              class: ae(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (k) => p(y)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (k) => p(y)
              }, null, 40, Nr),
              e("div", Ur, [
                e("div", Pr, [
                  e("span", Br, n(_.model.filename), 1),
                  g(Kt, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Or, [
                  e("span", Fr, n(m(_.model.size)), 1),
                  e("span", Vr, n(_.model.category), 1)
                ]),
                e("div", Ar, n(_.model.relative_path), 1)
              ])
            ], 10, Rr))), 128))
          ]),
          e("div", Wr, [
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (_) => d("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (_) => d("download-url"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (_) => d("mark-optional"))
            }, {
              default: i(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Gr, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", jr, [
            g(re, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (_) => d("search"))
            }, {
              default: i(() => [...u[13] || (u[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (_) => d("download-url"))
            }, {
              default: i(() => [...u[14] || (u[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (_) => d("mark-optional"))
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
}), Kr = /* @__PURE__ */ Q(Hr, [["__scopeId", "data-v-8a82fefa"]]), qr = { class: "model-resolution-step" }, Yr = { class: "step-header" }, Xr = { class: "step-info" }, Qr = { class: "step-title" }, Zr = { class: "step-description" }, Jr = { class: "stat-badge" }, ed = {
  key: 1,
  class: "step-body"
}, td = {
  key: 2,
  class: "empty-state"
}, sd = { class: "model-search-modal" }, od = { class: "model-modal-body" }, ad = {
  key: 0,
  class: "model-search-results"
}, nd = ["onClick"], ld = { class: "model-result-header" }, id = { class: "model-result-filename" }, rd = { class: "model-result-meta" }, dd = { class: "model-result-category" }, cd = { class: "model-result-size" }, ud = {
  key: 0,
  class: "model-result-path"
}, md = {
  key: 1,
  class: "model-no-results"
}, vd = {
  key: 2,
  class: "model-searching"
}, fd = { class: "model-download-url-modal" }, gd = { class: "model-modal-body" }, pd = { class: "model-input-group" }, hd = { class: "model-input-group" }, yd = { class: "model-modal-actions" }, wd = /* @__PURE__ */ X({
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
    function d(U) {
      var M;
      return U && ((M = a[U]) == null ? void 0 : M[0]) || null;
    }
    const f = t, v = r, p = b(0), m = b(!1), l = b(!1), u = b(""), _ = b(""), y = b(""), k = b([]), $ = b(!1), z = B(() => f.models[p.value]), S = B(() => f.models.some((U) => U.is_download_intent)), h = B(() => f.models.filter(
      (U) => f.modelChoices.has(U.filename) || U.is_download_intent
    ).length), E = B(() => {
      var M;
      if (!z.value) return "";
      const U = d((M = z.value.reference) == null ? void 0 : M.node_type);
      return U ? `${U}/${z.value.filename}` : "";
    }), F = B(() => {
      var M;
      if (!z.value) return "not-found";
      const U = f.modelChoices.get(z.value.filename);
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
      return z.value.is_download_intent ? "download" : (M = z.value.options) != null && M.length ? "ambiguous" : "not-found";
    }), L = B(() => {
      var M, se;
      if (!z.value) return;
      const U = f.modelChoices.get(z.value.filename);
      if (U)
        switch (U.action) {
          case "select":
            return (M = U.selected_model) != null && M.filename ? `→ ${U.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return z.value.is_download_intent ? "Pending Download" : (se = z.value.options) != null && se.length ? `${z.value.options.length} matches` : "Not Found";
    });
    function O(U) {
      U >= 0 && U < f.models.length && (p.value = U);
    }
    function A() {
      z.value && v("mark-optional", z.value.filename);
    }
    function P() {
      z.value && v("skip", z.value.filename);
    }
    function N(U) {
      z.value && v("option-selected", z.value.filename, U);
    }
    function T() {
      z.value && v("clear-choice", z.value.filename);
    }
    function C() {
      z.value && (u.value = z.value.filename, m.value = !0);
    }
    function x() {
      z.value && (_.value = z.value.download_source || "", y.value = z.value.target_path || E.value, l.value = !0);
    }
    function G() {
      m.value = !1, u.value = "", k.value = [];
    }
    function H() {
      l.value = !1, _.value = "", y.value = "";
    }
    function J() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function ge(U) {
      z.value && G();
    }
    function de() {
      !z.value || !_.value.trim() || (v("download-url", z.value.filename, _.value.trim(), y.value.trim() || void 0), H());
    }
    function oe(U) {
      if (!U) return "Unknown";
      const M = U / (1024 * 1024 * 1024);
      return M >= 1 ? `${M.toFixed(2)} GB` : `${(U / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (U, M) => {
      var se, Z, Te;
      return s(), o("div", qr, [
        e("div", Yr, [
          e("div", Xr, [
            e("h3", Qr, n(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Zr, n(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Jr, n(h.value) + "/" + n(t.models.length) + " resolved", 1)
        ]),
        z.value ? (s(), I(Es, {
          key: 0,
          "item-name": z.value.filename,
          "current-index": p.value,
          "total-items": t.models.length,
          onPrev: M[0] || (M[0] = (ne) => O(p.value - 1)),
          onNext: M[1] || (M[1] = (ne) => O(p.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        z.value ? (s(), o("div", ed, [
          g(Kr, {
            filename: z.value.filename,
            "node-type": ((se = z.value.reference) == null ? void 0 : se.node_type) || "Unknown",
            "has-multiple-options": !!((Z = z.value.options) != null && Z.length),
            options: z.value.options,
            choice: (Te = t.modelChoices) == null ? void 0 : Te.get(z.value.filename),
            status: F.value,
            "status-label": L.value,
            onMarkOptional: A,
            onSkip: P,
            onDownloadUrl: x,
            onSearch: C,
            onOptionSelected: N,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", td, [...M[5] || (M[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), I(Ve, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: De(G, ["self"])
          }, [
            e("div", sd, [
              e("div", { class: "model-modal-header" }, [
                M[6] || (M[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: G
                }, "✕")
              ]),
              e("div", od, [
                g(Je, {
                  modelValue: u.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (ne) => u.value = ne),
                  placeholder: "Search by filename, category...",
                  onInput: J
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", ad, [
                  (s(!0), o(W, null, ee(k.value, (ne) => (s(), o("div", {
                    key: ne.hash,
                    class: "model-search-result-item",
                    onClick: (Ye) => ge()
                  }, [
                    e("div", ld, [
                      e("code", id, n(ne.filename), 1)
                    ]),
                    e("div", rd, [
                      e("span", dd, n(ne.category), 1),
                      e("span", cd, n(oe(ne.size)), 1)
                    ]),
                    ne.relative_path ? (s(), o("div", ud, n(ne.relative_path), 1)) : c("", !0)
                  ], 8, nd))), 128))
                ])) : u.value && !$.value ? (s(), o("div", md, ' No models found matching "' + n(u.value) + '" ', 1)) : c("", !0),
                $.value ? (s(), o("div", vd, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), I(Ve, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: De(H, ["self"])
          }, [
            e("div", fd, [
              e("div", { class: "model-modal-header" }, [
                M[7] || (M[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: H
                }, "✕")
              ]),
              e("div", gd, [
                e("div", pd, [
                  M[8] || (M[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(Je, {
                    modelValue: _.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (ne) => _.value = ne),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", hd, [
                  M[9] || (M[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(Je, {
                    modelValue: y.value,
                    "onUpdate:modelValue": M[4] || (M[4] = (ne) => y.value = ne),
                    placeholder: E.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", yd, [
                  g(re, {
                    variant: "secondary",
                    onClick: H
                  }, {
                    default: i(() => [...M[10] || (M[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !_.value.trim() || !y.value.trim(),
                    onClick: de
                  }, {
                    default: i(() => [...M[11] || (M[11] = [
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
}), kd = /* @__PURE__ */ Q(wd, [["__scopeId", "data-v-c6acbada"]]), _d = { class: "applying-step" }, bd = {
  key: 0,
  class: "phase-content"
}, $d = {
  key: 1,
  class: "phase-content"
}, Cd = { class: "phase-description" }, xd = { class: "overall-progress" }, Sd = { class: "progress-bar" }, Id = { class: "progress-label" }, Ed = { class: "install-list" }, Md = { class: "install-icon" }, zd = { key: 0 }, Td = {
  key: 1,
  class: "spinner"
}, Ld = { key: 2 }, Dd = { key: 3 }, Rd = {
  key: 0,
  class: "install-error"
}, Nd = {
  key: 2,
  class: "phase-content"
}, Ud = { class: "phase-header" }, Pd = { class: "phase-title" }, Bd = { class: "completion-summary" }, Od = {
  key: 0,
  class: "summary-item success"
}, Fd = { class: "summary-text" }, Vd = {
  key: 1,
  class: "summary-item error"
}, Ad = { class: "summary-text" }, Wd = {
  key: 2,
  class: "failed-list"
}, Gd = { class: "failed-node-id" }, jd = { class: "failed-error" }, Hd = {
  key: 4,
  class: "summary-item success"
}, Kd = {
  key: 5,
  class: "restart-prompt"
}, qd = {
  key: 3,
  class: "phase-content error"
}, Yd = { class: "error-message" }, Xd = /* @__PURE__ */ X({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const r = t, a = B(() => {
      var u, _;
      const m = ((u = r.progress.nodeInstallProgress) == null ? void 0 : u.totalNodes) || r.progress.nodesToInstall.length;
      if (!m) return 0;
      const l = ((_ = r.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.length) ?? 0;
      return Math.round(l / m * 100);
    }), d = B(() => {
      var m;
      return ((m = r.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((l) => !l.success)) || [];
    }), f = B(() => d.value.length > 0);
    function v(m, l) {
      var _, y;
      const u = (_ = r.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.find((k) => k.node_id === m);
      return u ? u.success ? "complete" : "failed" : ((y = r.progress.nodeInstallProgress) == null ? void 0 : y.currentIndex) === l ? "installing" : "pending";
    }
    function p(m) {
      var l, u;
      return (u = (l = r.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((_) => _.node_id === m)) == null ? void 0 : u.error;
    }
    return (m, l) => {
      var u, _, y, k;
      return s(), o("div", _d, [
        t.progress.phase === "resolving" ? (s(), o("div", bd, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", $d, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Cd, " Installing " + n((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + n(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", xd, [
            e("div", Sd, [
              e("div", {
                class: "progress-fill",
                style: it({ width: `${a.value}%` })
              }, null, 4)
            ]),
            e("span", Id, n(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0) + " / " + n(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Ed, [
            (s(!0), o(W, null, ee(t.progress.nodesToInstall, ($, z) => (s(), o("div", {
              key: $,
              class: ae(["install-item", v($, z)])
            }, [
              e("span", Md, [
                v($, z) === "pending" ? (s(), o("span", zd, "○")) : v($, z) === "installing" ? (s(), o("span", Td, "◌")) : v($, z) === "complete" ? (s(), o("span", Ld, "✓")) : v($, z) === "failed" ? (s(), o("span", Dd, "✗")) : c("", !0)
              ]),
              e("code", null, n($), 1),
              p($) ? (s(), o("span", Rd, n(p($)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Nd, [
          e("div", Ud, [
            e("span", {
              class: ae(["phase-icon", f.value ? "warning" : "success"])
            }, n(f.value ? "⚠" : "✓"), 3),
            e("h3", Pd, n(f.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Bd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Od, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Fd, n(t.progress.nodesInstalled.length) + " node package" + n(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Vd, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Ad, n(d.value.length) + " package" + n(d.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Wd, [
              (s(!0), o(W, null, ee(d.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", Gd, n($.node_id), 1),
                e("span", jd, n($.error), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = ($) => m.$emit("retry-failed"))
            }, " Retry Failed (" + n(d.value.length) + ") ", 1)) : c("", !0),
            f.value ? c("", !0) : (s(), o("div", Hd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Kd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = ($) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", qd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Yd, n(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), Qd = /* @__PURE__ */ Q(Xd, [["__scopeId", "data-v-5efaae58"]]), Zd = {
  key: 0,
  class: "loading-state"
}, Jd = {
  key: 1,
  class: "wizard-content"
}, ec = {
  key: 0,
  class: "step-content"
}, tc = { class: "analysis-summary" }, sc = { class: "analysis-header" }, oc = { class: "summary-description" }, ac = { class: "stats-grid" }, nc = { class: "stat-card" }, lc = { class: "stat-items" }, ic = {
  key: 0,
  class: "stat-item success"
}, rc = { class: "stat-count" }, dc = {
  key: 1,
  class: "stat-item info"
}, cc = { class: "stat-count" }, uc = {
  key: 2,
  class: "stat-item warning"
}, mc = { class: "stat-count" }, vc = {
  key: 3,
  class: "stat-item error"
}, fc = { class: "stat-count" }, gc = { class: "stat-card" }, pc = { class: "stat-items" }, hc = { class: "stat-item success" }, yc = { class: "stat-count" }, wc = {
  key: 0,
  class: "stat-item info"
}, kc = { class: "stat-count" }, _c = {
  key: 1,
  class: "stat-item warning"
}, bc = { class: "stat-count" }, $c = {
  key: 2,
  class: "stat-item warning"
}, Cc = { class: "stat-count" }, xc = {
  key: 3,
  class: "stat-item error"
}, Sc = { class: "stat-count" }, Ic = {
  key: 0,
  class: "status-message warning"
}, Ec = { class: "status-text" }, Mc = {
  key: 1,
  class: "status-message info"
}, zc = { class: "status-text" }, Tc = {
  key: 2,
  class: "status-message info"
}, Lc = { class: "status-text" }, Dc = {
  key: 3,
  class: "status-message warning"
}, Rc = { class: "status-text" }, Nc = {
  key: 4,
  class: "status-message success"
}, Uc = {
  key: 5,
  class: "category-mismatch-section"
}, Pc = { class: "mismatch-list" }, Bc = { class: "mismatch-path" }, Oc = { class: "mismatch-target" }, Fc = {
  key: 3,
  class: "step-content"
}, Vc = { class: "review-summary" }, Ac = { class: "review-stats" }, Wc = { class: "review-stat" }, Gc = { class: "stat-value" }, jc = { class: "review-stat" }, Hc = { class: "stat-value" }, Kc = { class: "review-stat" }, qc = { class: "stat-value" }, Yc = { class: "review-stat" }, Xc = { class: "stat-value" }, Qc = {
  key: 0,
  class: "review-section"
}, Zc = { class: "section-title" }, Jc = { class: "review-items" }, eu = { class: "item-name" }, tu = { class: "item-choice" }, su = {
  key: 0,
  class: "choice-badge install"
}, ou = {
  key: 1,
  class: "choice-badge skip"
}, au = {
  key: 1,
  class: "review-section"
}, nu = { class: "section-title" }, lu = { class: "review-items" }, iu = { class: "item-name" }, ru = { class: "item-choice" }, du = {
  key: 0,
  class: "choice-badge install"
}, cu = {
  key: 1,
  class: "choice-badge optional"
}, uu = {
  key: 2,
  class: "choice-badge skip"
}, mu = {
  key: 1,
  class: "choice-badge pending"
}, vu = {
  key: 2,
  class: "review-section"
}, fu = { class: "section-title" }, gu = { class: "review-items" }, pu = { class: "item-name" }, hu = { class: "item-choice" }, yu = {
  key: 0,
  class: "choice-badge install"
}, wu = {
  key: 1,
  class: "choice-badge download"
}, ku = {
  key: 2,
  class: "choice-badge optional"
}, _u = {
  key: 3,
  class: "choice-badge skip"
}, bu = {
  key: 4,
  class: "choice-badge skip"
}, $u = {
  key: 1,
  class: "choice-badge download"
}, Cu = {
  key: 2,
  class: "choice-badge pending"
}, xu = {
  key: 3,
  class: "no-choices"
}, Su = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: r }) {
    const a = t, d = r, { analyzeWorkflow: f, applyResolution: v, installNodes: p, queueModelDownloads: m, progress: l, resetProgress: u } = Is(), { loadPendingDownloads: _ } = Bt(), { openFileLocation: y } = Pe(), k = b(null), $ = b(!1), z = b(!1), S = b(null), h = b("analysis"), E = b([]), F = b(/* @__PURE__ */ new Map()), L = b(/* @__PURE__ */ new Map()), O = b(/* @__PURE__ */ new Set()), A = B(() => {
      const j = [
        { id: "analysis", label: "Analysis" }
      ];
      return (N.value || x.value) && j.push({ id: "nodes", label: "Nodes" }), (T.value || C.value) && j.push({ id: "models", label: "Models" }), j.push({ id: "review", label: "Review" }), h.value === "applying" && j.push({ id: "applying", label: "Applying" }), j;
    }), P = B(() => k.value ? k.value.stats.needs_user_input : !1), N = B(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), T = B(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), C = B(() => k.value ? k.value.stats.download_intents > 0 : !1), x = B(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), G = B(() => k.value ? k.value.nodes.resolved.length : 0), H = B(() => k.value ? k.value.models.resolved.filter((j) => j.has_category_mismatch) : []), J = B(() => H.value.length > 0), ge = B(() => {
      if (!k.value) return [];
      const j = k.value.nodes.resolved.filter((Y) => !Y.is_installed), D = /* @__PURE__ */ new Set();
      return j.filter((Y) => D.has(Y.package.package_id) ? !1 : (D.add(Y.package.package_id), !0));
    }), de = B(() => {
      if (!k.value) return [];
      const j = k.value.nodes.resolved.filter((Y) => !Y.is_installed), D = /* @__PURE__ */ new Map();
      for (const Y of j) {
        const pe = D.get(Y.package.package_id);
        pe ? pe.node_types_count++ : D.set(Y.package.package_id, {
          package_id: Y.package.package_id,
          title: Y.package.title,
          node_types_count: 1
        });
      }
      return Array.from(D.values());
    }), oe = B(() => ge.value.filter((j) => !O.value.has(j.package.package_id))), U = B(() => k.value ? k.value.models.resolved.filter((j) => j.match_type === "download_intent").map((j) => ({
      filename: j.reference.widget_value,
      reference: j.reference,
      is_download_intent: !0,
      resolved_model: j.model,
      download_source: j.download_source,
      target_path: j.target_path
    })) : []), M = B(() => {
      if (!k.value) return [];
      const j = k.value.nodes.unresolved.map((Y) => ({
        node_type: Y.reference.node_type,
        reason: Y.reason,
        is_unresolved: !0,
        options: void 0
      })), D = k.value.nodes.ambiguous.map((Y) => ({
        node_type: Y.reference.node_type,
        has_multiple_options: !0,
        options: Y.options.map((pe) => ({
          package_id: pe.package.package_id,
          title: pe.package.title,
          match_confidence: pe.match_confidence,
          match_type: pe.match_type,
          is_installed: pe.is_installed
        }))
      }));
      return [...j, ...D];
    }), se = B(() => {
      if (!k.value) return [];
      const j = k.value.models.unresolved.map((Y) => ({
        filename: Y.reference.widget_value,
        reference: Y.reference,
        reason: Y.reason,
        is_unresolved: !0,
        options: void 0
      })), D = k.value.models.ambiguous.map((Y) => ({
        filename: Y.reference.widget_value,
        reference: Y.reference,
        has_multiple_options: !0,
        options: Y.options.map((pe) => ({
          model: pe.model,
          match_confidence: pe.match_confidence,
          match_type: pe.match_type,
          has_download_source: pe.has_download_source
        }))
      }));
      return [...j, ...D];
    }), Z = B(() => {
      const j = se.value, D = U.value.map((Y) => ({
        filename: Y.filename,
        reference: Y.reference,
        is_download_intent: !0,
        resolved_model: Y.resolved_model,
        download_source: Y.download_source,
        target_path: Y.target_path,
        options: void 0
      }));
      return [...j, ...D];
    }), Te = B(() => {
      let j = oe.value.length;
      for (const D of F.value.values())
        D.action === "install" && j++;
      for (const D of L.value.values())
        D.action === "select" && j++;
      return j;
    }), ne = B(() => {
      let j = 0;
      for (const D of L.value.values())
        D.action === "download" && j++;
      return j;
    }), Ye = B(() => {
      let j = 0;
      for (const D of F.value.values())
        D.action === "optional" && j++;
      for (const D of L.value.values())
        D.action === "optional" && j++;
      return j;
    }), xe = B(() => {
      let j = O.value.size;
      for (const D of F.value.values())
        D.action === "skip" && j++;
      for (const D of L.value.values())
        D.action === "skip" && j++;
      for (const D of M.value)
        F.value.has(D.node_type) || j++;
      for (const D of se.value)
        L.value.has(D.filename) || j++;
      return j;
    }), ce = B(() => {
      const j = {};
      if (j.analysis = { resolved: 1, total: 1 }, N.value) {
        const D = M.value.length, Y = M.value.filter(
          (pe) => F.value.has(pe.node_type)
        ).length;
        j.nodes = { resolved: Y, total: D };
      }
      if (T.value || C.value) {
        const D = Z.value.length, Y = Z.value.filter(
          (pe) => L.value.has(pe.filename) || pe.is_download_intent
        ).length;
        j.models = { resolved: Y, total: D };
      }
      if (j.review = { resolved: 1, total: 1 }, h.value === "applying") {
        const D = l.totalFiles || 1, Y = l.completedFiles.length;
        j.applying = { resolved: Y, total: D };
      }
      return j;
    });
    function ve(j) {
      h.value = j;
    }
    function Qe() {
      const j = A.value.findIndex((D) => D.id === h.value);
      j > 0 && (h.value = A.value[j - 1].id);
    }
    function he() {
      const j = A.value.findIndex((D) => D.id === h.value);
      j < A.value.length - 1 && (h.value = A.value[j + 1].id);
    }
    async function le() {
      $.value = !0, S.value = null;
      try {
        k.value = await f(a.workflowName);
      } catch (j) {
        S.value = j instanceof Error ? j.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function K() {
      E.value.includes("analysis") || E.value.push("analysis"), N.value || x.value ? h.value = "nodes" : T.value || C.value ? h.value = "models" : h.value = "review";
    }
    function Se(j) {
      F.value.set(j, { action: "optional" });
    }
    function be(j) {
      F.value.set(j, { action: "skip" });
    }
    function ie(j, D) {
      var pe;
      const Y = M.value.find((Le) => Le.node_type === j);
      (pe = Y == null ? void 0 : Y.options) != null && pe[D] && F.value.set(j, {
        action: "install",
        package_id: Y.options[D].package_id
      });
    }
    function me(j, D) {
      F.value.set(j, {
        action: "install",
        package_id: D
      });
    }
    function ft(j) {
      F.value.delete(j);
    }
    function gt(j) {
      O.value.has(j) ? O.value.delete(j) : O.value.add(j);
    }
    function Be(j) {
      L.value.set(j, { action: "optional" });
    }
    function It(j) {
      L.value.set(j, { action: "skip" });
    }
    function yt(j, D) {
      var pe;
      const Y = se.value.find((Le) => Le.filename === j);
      (pe = Y == null ? void 0 : Y.options) != null && pe[D] && L.value.set(j, {
        action: "select",
        selected_model: Y.options[D].model
      });
    }
    function q(j, D, Y) {
      L.value.set(j, {
        action: "download",
        url: D,
        target_path: Y
      });
    }
    function $e(j) {
      L.value.delete(j);
    }
    async function Ue(j) {
      try {
        await y(j);
      } catch (D) {
        S.value = D instanceof Error ? D.message : "Failed to open file location";
      }
    }
    async function wt() {
      var j;
      z.value = !0, S.value = null, u(), l.phase = "resolving", h.value = "applying";
      try {
        const D = await v(a.workflowName, F.value, L.value, O.value);
        D.models_to_download && D.models_to_download.length > 0 && m(a.workflowName, D.models_to_download);
        const Y = [
          ...D.nodes_to_install || [],
          ...oe.value.map((Le) => Le.package.package_id)
        ];
        l.nodesToInstall = [...new Set(Y)], l.nodesToInstall.length > 0 && await p(a.workflowName), l.phase = "complete", await _();
        const pe = l.installError || ((j = l.nodeInstallProgress) == null ? void 0 : j.completedNodes.some((Le) => !Le.success));
        !l.needsRestart && !pe && setTimeout(() => {
          d("refresh"), d("install"), d("close");
        }, 1500);
      } catch (D) {
        S.value = D instanceof Error ? D.message : "Failed to apply resolution", l.error = S.value, l.phase = "error";
      } finally {
        z.value = !1;
      }
    }
    function ot() {
      d("refresh"), d("restart"), d("close");
    }
    async function Xt() {
      var D;
      const j = ((D = l.nodeInstallProgress) == null ? void 0 : D.completedNodes.filter((Y) => !Y.success).map((Y) => Y.node_id)) || [];
      if (j.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: j.length
        }, l.nodesToInstall = j, l.nodesInstalled = [], l.installError = void 0;
        try {
          await p(a.workflowName), l.phase = "complete";
        } catch (Y) {
          l.error = Y instanceof Error ? Y.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Ne(le), (j, D) => (s(), I(rt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: $.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: D[1] || (D[1] = (Y) => d("close"))
    }, {
      body: i(() => [
        $.value && !k.value ? (s(), o("div", Zd, [...D[2] || (D[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", Jd, [
          g(li, {
            steps: A.value,
            "current-step": h.value,
            "completed-steps": E.value,
            "step-stats": ce.value,
            onStepChange: ve
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          h.value === "analysis" ? (s(), o("div", ec, [
            e("div", tc, [
              e("div", sc, [
                D[3] || (D[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", oc, " Found " + n(k.value.stats.total_nodes) + " nodes and " + n(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", ac, [
                e("div", nc, [
                  D[12] || (D[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", lc, [
                    G.value > 0 ? (s(), o("div", ic, [
                      D[4] || (D[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", rc, n(G.value), 1),
                      D[5] || (D[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", dc, [
                      D[6] || (D[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", cc, n(k.value.stats.packages_needing_installation), 1),
                      D[7] || (D[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", uc, [
                      D[8] || (D[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", mc, n(k.value.nodes.ambiguous.length), 1),
                      D[9] || (D[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", vc, [
                      D[10] || (D[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", fc, n(k.value.nodes.unresolved.length), 1),
                      D[11] || (D[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", gc, [
                  D[23] || (D[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", pc, [
                    e("div", hc, [
                      D[13] || (D[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", yc, n(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      D[14] || (D[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", wc, [
                      D[15] || (D[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", kc, n(k.value.stats.download_intents), 1),
                      D[16] || (D[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    J.value ? (s(), o("div", _c, [
                      D[17] || (D[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", bc, n(H.value.length), 1),
                      D[18] || (D[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : c("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", $c, [
                      D[19] || (D[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Cc, n(k.value.models.ambiguous.length), 1),
                      D[20] || (D[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", xc, [
                      D[21] || (D[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Sc, n(k.value.models.unresolved.length), 1),
                      D[22] || (D[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              P.value ? (s(), o("div", Ic, [
                D[24] || (D[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Ec, n(M.value.length + se.value.length) + " items need your input", 1)
              ])) : x.value ? (s(), o("div", Mc, [
                D[25] || (D[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", zc, n(k.value.stats.packages_needing_installation) + " package" + n(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + n(k.value.stats.nodes_needing_installation) + " node type" + n(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + n(C.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : C.value ? (s(), o("div", Tc, [
                D[26] || (D[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Lc, n(k.value.stats.download_intents) + " model" + n(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : J.value ? (s(), o("div", Dc, [
                D[27] || (D[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Rc, n(H.value.length) + " model" + n(H.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Nc, [...D[28] || (D[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              J.value ? (s(), o("div", Uc, [
                D[31] || (D[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Pc, [
                  (s(!0), o(W, null, ee(H.value, (Y) => {
                    var pe, Le;
                    return s(), o("div", {
                      key: Y.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Bc, n(Y.actual_category) + "/" + n((pe = Y.model) == null ? void 0 : pe.filename), 1),
                      D[30] || (D[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Oc, n((Le = Y.expected_categories) == null ? void 0 : Le[0]) + "/", 1),
                      Y.file_path ? (s(), I(re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (mt) => Ue(Y.file_path)
                      }, {
                        default: i(() => [...D[29] || (D[29] = [
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
          h.value === "nodes" ? (s(), I(Ir, {
            key: 1,
            nodes: M.value,
            "node-choices": F.value,
            "auto-resolved-packages": de.value,
            "skipped-packages": O.value,
            onMarkOptional: Se,
            onSkip: be,
            onOptionSelected: ie,
            onManualEntry: me,
            onClearChoice: ft,
            onPackageSkip: gt
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          h.value === "models" ? (s(), I(kd, {
            key: 2,
            models: Z.value,
            "model-choices": L.value,
            onMarkOptional: Be,
            onSkip: It,
            onOptionSelected: yt,
            onDownloadUrl: q,
            onClearChoice: $e
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          h.value === "review" ? (s(), o("div", Fc, [
            e("div", Vc, [
              D[36] || (D[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Ac, [
                e("div", Wc, [
                  e("span", Gc, n(Te.value), 1),
                  D[32] || (D[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", jc, [
                  e("span", Hc, n(ne.value), 1),
                  D[33] || (D[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Kc, [
                  e("span", qc, n(Ye.value), 1),
                  D[34] || (D[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Yc, [
                  e("span", Xc, n(xe.value), 1),
                  D[35] || (D[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              de.value.length > 0 ? (s(), o("div", Qc, [
                e("h4", Zc, "Node Packages (" + n(de.value.length) + ")", 1),
                e("div", Jc, [
                  (s(!0), o(W, null, ee(de.value, (Y) => (s(), o("div", {
                    key: Y.package_id,
                    class: "review-item"
                  }, [
                    e("code", eu, n(Y.package_id), 1),
                    e("div", tu, [
                      O.value.has(Y.package_id) ? (s(), o("span", ou, "Skipped")) : (s(), o("span", su, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              M.value.length > 0 ? (s(), o("div", au, [
                e("h4", nu, "Node Choices (" + n(M.value.length) + ")", 1),
                e("div", lu, [
                  (s(!0), o(W, null, ee(M.value, (Y) => {
                    var pe, Le, mt, He;
                    return s(), o("div", {
                      key: Y.node_type,
                      class: "review-item"
                    }, [
                      e("code", iu, n(Y.node_type), 1),
                      e("div", ru, [
                        F.value.has(Y.node_type) ? (s(), o(W, { key: 0 }, [
                          ((pe = F.value.get(Y.node_type)) == null ? void 0 : pe.action) === "install" ? (s(), o("span", du, n((Le = F.value.get(Y.node_type)) == null ? void 0 : Le.package_id), 1)) : ((mt = F.value.get(Y.node_type)) == null ? void 0 : mt.action) === "optional" ? (s(), o("span", cu, " Optional ")) : ((He = F.value.get(Y.node_type)) == null ? void 0 : He.action) === "skip" ? (s(), o("span", uu, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", mu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              Z.value.length > 0 ? (s(), o("div", vu, [
                e("h4", fu, "Models (" + n(Z.value.length) + ")", 1),
                e("div", gu, [
                  (s(!0), o(W, null, ee(Z.value, (Y) => {
                    var pe, Le, mt, He, Ot, kt, Ft;
                    return s(), o("div", {
                      key: Y.filename,
                      class: "review-item"
                    }, [
                      e("code", pu, n(Y.filename), 1),
                      e("div", hu, [
                        L.value.has(Y.filename) ? (s(), o(W, { key: 0 }, [
                          ((pe = L.value.get(Y.filename)) == null ? void 0 : pe.action) === "select" ? (s(), o("span", yu, n((mt = (Le = L.value.get(Y.filename)) == null ? void 0 : Le.selected_model) == null ? void 0 : mt.filename), 1)) : ((He = L.value.get(Y.filename)) == null ? void 0 : He.action) === "download" ? (s(), o("span", wu, " Download ")) : ((Ot = L.value.get(Y.filename)) == null ? void 0 : Ot.action) === "optional" ? (s(), o("span", ku, " Optional ")) : ((kt = L.value.get(Y.filename)) == null ? void 0 : kt.action) === "skip" ? (s(), o("span", _u, " Skip ")) : ((Ft = L.value.get(Y.filename)) == null ? void 0 : Ft.action) === "cancel_download" ? (s(), o("span", bu, " Cancel Download ")) : c("", !0)
                        ], 64)) : Y.is_download_intent ? (s(), o("span", $u, " Pending Download ")) : (s(), o("span", Cu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              ge.value.length === 0 && M.value.length === 0 && Z.value.length === 0 ? (s(), o("div", xu, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          h.value === "applying" ? (s(), I(Qd, {
            key: 4,
            progress: we(l),
            onRestart: ot,
            onRetryFailed: Xt
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        h.value !== "analysis" && h.value !== "applying" ? (s(), I(re, {
          key: 0,
          variant: "secondary",
          disabled: z.value,
          onClick: Qe
        }, {
          default: i(() => [...D[37] || (D[37] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        D[41] || (D[41] = e("div", { class: "footer-spacer" }, null, -1)),
        h.value !== "applying" || we(l).phase === "complete" || we(l).phase === "error" ? (s(), I(re, {
          key: 1,
          variant: "secondary",
          onClick: D[0] || (D[0] = (Y) => d("close"))
        }, {
          default: i(() => [
            w(n(we(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        h.value === "analysis" ? (s(), I(re, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: K
        }, {
          default: i(() => [...D[38] || (D[38] = [
            w(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        h.value === "nodes" ? (s(), I(re, {
          key: 3,
          variant: "primary",
          onClick: he
        }, {
          default: i(() => [
            w(n(T.value || C.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        h.value === "models" ? (s(), I(re, {
          key: 4,
          variant: "primary",
          onClick: he
        }, {
          default: i(() => [...D[39] || (D[39] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        h.value === "review" ? (s(), I(re, {
          key: 5,
          variant: "primary",
          disabled: z.value,
          loading: z.value,
          onClick: wt
        }, {
          default: i(() => [...D[40] || (D[40] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Iu = /* @__PURE__ */ Q(Su, [["__scopeId", "data-v-6276cf1d"]]), Eu = { class: "search-input-wrapper" }, Mu = ["value", "placeholder"], zu = /* @__PURE__ */ X({
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
    const a = t, d = r, f = b(null);
    let v;
    function p(l) {
      const u = l.target.value;
      a.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        d("update:modelValue", u);
      }, a.debounce)) : d("update:modelValue", u);
    }
    function m() {
      var l;
      d("update:modelValue", ""), d("clear"), (l = f.value) == null || l.focus();
    }
    return Ne(() => {
      a.autoFocus && f.value && f.value.focus();
    }), (l, u) => (s(), o("div", Eu, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: p,
        onKeyup: vt(m, ["escape"])
      }, null, 40, Mu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Tu = /* @__PURE__ */ Q(zu, [["__scopeId", "data-v-266f857a"]]), Lu = { class: "search-bar" }, Du = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, a) => (s(), o("div", Lu, [
      g(Tu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (d) => r.$emit("update:modelValue", d)),
        onClear: a[1] || (a[1] = (d) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), xt = /* @__PURE__ */ Q(Du, [["__scopeId", "data-v-3d51bbfd"]]), Ru = { class: "section-group" }, Nu = {
  key: 0,
  class: "section-content"
}, Uu = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const a = t, d = r, f = b(a.initiallyExpanded);
    function v() {
      a.collapsible && (f.value = !f.value, d("toggle", f.value));
    }
    return (p, m) => (s(), o("section", Ru, [
      g(qe, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: v
      }, {
        default: i(() => [
          w(n(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (s(), o("div", Nu, [
        ye(p.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Re = /* @__PURE__ */ Q(Uu, [["__scopeId", "data-v-c48e33ed"]]), Pu = { class: "item-header" }, Bu = {
  key: 0,
  class: "item-icon"
}, Ou = { class: "item-info" }, Fu = {
  key: 0,
  class: "item-title"
}, Vu = {
  key: 1,
  class: "item-subtitle"
}, Au = {
  key: 0,
  class: "item-details"
}, Wu = {
  key: 1,
  class: "item-actions"
}, Gu = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, d = B(() => a.status ? `status-${a.status}` : "");
    return (f, v) => (s(), o("div", {
      class: ae(["item-card", { clickable: t.clickable, compact: t.compact }, d.value]),
      onClick: v[0] || (v[0] = (p) => t.clickable && f.$emit("click"))
    }, [
      e("div", Pu, [
        f.$slots.icon ? (s(), o("span", Bu, [
          ye(f.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Ou, [
          f.$slots.title ? (s(), o("div", Fu, [
            ye(f.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          f.$slots.subtitle ? (s(), o("div", Vu, [
            ye(f.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      f.$slots.details ? (s(), o("div", Au, [
        ye(f.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      f.$slots.actions ? (s(), o("div", Wu, [
        ye(f.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ Q(Gu, [["__scopeId", "data-v-cc435e0e"]]), ju = { class: "loading-state" }, Hu = { class: "loading-message" }, Ku = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, a) => (s(), o("div", ju, [
      a[0] || (a[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Hu, n(t.message), 1)
    ]));
  }
}), ct = /* @__PURE__ */ Q(Ku, [["__scopeId", "data-v-ad8436c9"]]), qu = { class: "error-state" }, Yu = { class: "error-message" }, Xu = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, a) => (s(), o("div", qu, [
      a[2] || (a[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Yu, n(t.message), 1),
      t.retry ? (s(), I(te, {
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
}), ut = /* @__PURE__ */ Q(Xu, [["__scopeId", "data-v-5397be48"]]), Qu = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getWorkflows: f } = Pe();
    xs();
    const v = b([]), p = b(!1), m = b(null), l = b(""), u = b(!0), _ = b(!1), y = b(!1), k = b(!1), $ = b(null), z = B(
      () => v.value.filter((oe) => oe.status === "broken")
    ), S = B(
      () => v.value.filter((oe) => oe.status === "new")
    ), h = B(
      () => v.value.filter((oe) => oe.status === "modified")
    ), E = B(
      () => v.value.filter((oe) => oe.status === "synced")
    ), F = B(() => {
      if (!l.value.trim()) return v.value;
      const oe = l.value.toLowerCase();
      return v.value.filter((U) => U.name.toLowerCase().includes(oe));
    }), L = B(
      () => z.value.filter(
        (oe) => !l.value.trim() || oe.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), O = B(
      () => S.value.filter(
        (oe) => !l.value.trim() || oe.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), A = B(
      () => h.value.filter(
        (oe) => !l.value.trim() || oe.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), P = B(
      () => E.value.filter(
        (oe) => !l.value.trim() || oe.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), N = B(
      () => _.value ? P.value : P.value.slice(0, 5)
    );
    async function T(oe = !1) {
      p.value = !0, m.value = null;
      try {
        v.value = await f(oe);
      } catch (U) {
        m.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    r({ loadWorkflows: T });
    function C(oe) {
      $.value = oe, y.value = !0;
    }
    function x(oe) {
      $.value = oe, k.value = !0;
    }
    function G() {
      alert("Bulk resolution not yet implemented");
    }
    function H() {
      d("refresh");
    }
    async function J() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ge(oe) {
      const U = [];
      return oe.missing_nodes > 0 && U.push(`${oe.missing_nodes} missing node${oe.missing_nodes > 1 ? "s" : ""}`), oe.missing_models > 0 && U.push(`${oe.missing_models} missing model${oe.missing_models > 1 ? "s" : ""}`), oe.models_with_category_mismatch && oe.models_with_category_mismatch > 0 && U.push(`${oe.models_with_category_mismatch} model${oe.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), oe.pending_downloads && oe.pending_downloads > 0 && U.push(`${oe.pending_downloads} pending download${oe.pending_downloads > 1 ? "s" : ""}`), U.length > 0 ? U.join(", ") : "Has issues";
    }
    function de(oe) {
      const U = oe.sync_state === "new" ? "New" : oe.sync_state === "modified" ? "Modified" : oe.sync_state === "synced" ? "Synced" : oe.sync_state;
      return oe.has_path_sync_issues && oe.models_needing_path_sync && oe.models_needing_path_sync > 0 ? `${oe.models_needing_path_sync} model path${oe.models_needing_path_sync > 1 ? "s" : ""} need${oe.models_needing_path_sync === 1 ? "s" : ""} sync` : U || "Unknown";
    }
    return Ne(T), (oe, U) => (s(), o(W, null, [
      g(Ge, null, {
        header: i(() => [
          g(je, { title: "WORKFLOWS" }, {
            actions: i(() => [
              z.value.length > 0 ? (s(), I(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: i(() => [...U[8] || (U[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(xt, {
            modelValue: l.value,
            "onUpdate:modelValue": U[0] || (U[0] = (M) => l.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          p.value ? (s(), I(ct, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), I(ut, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            L.value.length ? (s(), I(Re, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(L.value, (M) => (s(), I(Fe, {
                  key: M.name,
                  status: "broken"
                }, {
                  icon: i(() => [...U[9] || (U[9] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(n(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(ge(M)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => x(M.name)
                    }, {
                      default: i(() => [...U[10] || (U[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => C(M.name)
                    }, {
                      default: i(() => [...U[11] || (U[11] = [
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
            O.value.length ? (s(), I(Re, {
              key: 1,
              title: "NEW",
              count: O.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(O.value, (M) => (s(), I(Fe, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    w(n(M.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    w(n(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(de(M)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => C(M.name)
                    }, {
                      default: i(() => [...U[12] || (U[12] = [
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
            A.value.length ? (s(), I(Re, {
              key: 2,
              title: "MODIFIED",
              count: A.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(A.value, (M) => (s(), I(Fe, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...U[13] || (U[13] = [
                    w("⚡", -1)
                  ])]),
                  title: i(() => [
                    w(n(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(de(M)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => C(M.name)
                    }, {
                      default: i(() => [...U[14] || (U[14] = [
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
            P.value.length ? (s(), I(Re, {
              key: 3,
              title: "SYNCED",
              count: P.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: U[2] || (U[2] = (M) => u.value = M)
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(N.value, (M) => (s(), I(Fe, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    w(n(M.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    w(n(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(de(M)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => C(M.name)
                    }, {
                      default: i(() => [...U[15] || (U[15] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !_.value && P.value.length > 5 ? (s(), I(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (M) => _.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    w(" View all " + n(P.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            F.value.length ? c("", !0) : (s(), I(et, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y.value && $.value ? (s(), I(ql, {
        key: 0,
        "workflow-name": $.value,
        onClose: U[3] || (U[3] = (M) => y.value = !1),
        onResolve: U[4] || (U[4] = (M) => x($.value)),
        onRefresh: U[5] || (U[5] = (M) => d("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      k.value && $.value ? (s(), I(Iu, {
        key: 1,
        "workflow-name": $.value,
        onClose: U[6] || (U[6] = (M) => k.value = !1),
        onInstall: H,
        onRefresh: U[7] || (U[7] = (M) => d("refresh")),
        onRestart: J
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Zu = /* @__PURE__ */ Q(Qu, [["__scopeId", "data-v-591d06d5"]]), Ju = /* @__PURE__ */ X({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: ae(["summary-bar", t.variant])
    }, [
      ye(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ Q(Ju, [["__scopeId", "data-v-ccb7816e"]]), em = {
  key: 0,
  class: "model-details"
}, tm = { class: "detail-section" }, sm = { class: "detail-row" }, om = { class: "detail-value mono" }, am = { class: "detail-row" }, nm = { class: "detail-value mono" }, lm = { class: "detail-row" }, im = { class: "detail-value mono" }, rm = { class: "detail-row" }, dm = { class: "detail-value" }, cm = { class: "detail-row" }, um = { class: "detail-value" }, mm = { class: "detail-row" }, vm = { class: "detail-value" }, fm = { class: "detail-section" }, gm = { class: "section-header" }, pm = {
  key: 0,
  class: "locations-list"
}, hm = { class: "location-path mono" }, ym = {
  key: 0,
  class: "location-modified"
}, wm = ["onClick"], km = {
  key: 1,
  class: "empty-state"
}, _m = { class: "detail-section" }, bm = { class: "section-header" }, $m = {
  key: 0,
  class: "sources-list"
}, Cm = { class: "source-type" }, xm = ["href"], Sm = ["disabled", "onClick"], Im = {
  key: 1,
  class: "empty-state"
}, Em = { class: "add-source-form" }, Mm = ["disabled"], zm = {
  key: 2,
  class: "source-error"
}, Tm = {
  key: 3,
  class: "source-success"
}, Lm = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, { getModelDetails: d, addModelSource: f, removeModelSource: v, openFileLocation: p } = Pe(), m = b(null), l = b(!0), u = b(null), _ = b(""), y = b(!1), k = b(null), $ = b(null), z = b(null), S = b(null);
    let h = null;
    function E(T, C = "success", x = 2e3) {
      h && clearTimeout(h), S.value = { message: T, type: C }, h = setTimeout(() => {
        S.value = null;
      }, x);
    }
    function F(T) {
      if (!T) return "Unknown";
      const C = 1024 * 1024 * 1024, x = 1024 * 1024;
      return T >= C ? `${(T / C).toFixed(1)} GB` : T >= x ? `${(T / x).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function L(T) {
      navigator.clipboard.writeText(T), E("Copied to clipboard!");
    }
    async function O(T) {
      try {
        await p(T), E("Opening file location...");
      } catch {
        E("Failed to open location", "error");
      }
    }
    async function A() {
      if (!(!_.value.trim() || !m.value)) {
        y.value = !0, $.value = null, z.value = null;
        try {
          await f(m.value.hash, _.value.trim()), z.value = "Source added successfully!", _.value = "", await N();
        } catch (T) {
          $.value = T instanceof Error ? T.message : "Failed to add source";
        } finally {
          y.value = !1;
        }
      }
    }
    async function P(T) {
      if (m.value) {
        k.value = T, $.value = null, z.value = null;
        try {
          await v(m.value.hash, T), E("Source removed"), await N();
        } catch (C) {
          $.value = C instanceof Error ? C.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function N() {
      l.value = !0, u.value = null;
      try {
        m.value = await d(a.identifier);
      } catch (T) {
        u.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Ne(N), (T, C) => {
      var x;
      return s(), o(W, null, [
        g(rt, {
          title: `Model Details: ${((x = m.value) == null ? void 0 : x.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: u.value,
          onClose: C[5] || (C[5] = (G) => T.$emit("close"))
        }, {
          body: i(() => {
            var G, H, J, ge;
            return [
              m.value ? (s(), o("div", em, [
                e("section", tm, [
                  e("div", sm, [
                    C[6] || (C[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", om, n(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: C[0] || (C[0] = (de) => L(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", am, [
                    C[7] || (C[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", nm, n(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: C[1] || (C[1] = (de) => L(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", lm, [
                    C[8] || (C[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", im, n(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: C[2] || (C[2] = (de) => L(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", rm, [
                    C[9] || (C[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", dm, n(F(m.value.size)), 1)
                  ]),
                  e("div", cm, [
                    C[10] || (C[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", um, n(m.value.category), 1)
                  ]),
                  e("div", mm, [
                    C[11] || (C[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", vm, n(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", fm, [
                  e("h4", gm, "Locations (" + n(((G = m.value.locations) == null ? void 0 : G.length) || 0) + ")", 1),
                  (H = m.value.locations) != null && H.length ? (s(), o("div", pm, [
                    (s(!0), o(W, null, ee(m.value.locations, (de, oe) => (s(), o("div", {
                      key: oe,
                      class: "location-item"
                    }, [
                      e("span", hm, n(de.path), 1),
                      de.modified ? (s(), o("span", ym, "Modified: " + n(de.modified), 1)) : c("", !0),
                      de.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => O(de.path)
                      }, " Open File Location ", 8, wm)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", km, "No locations found"))
                ]),
                e("section", _m, [
                  e("h4", bm, "Download Sources (" + n(((J = m.value.sources) == null ? void 0 : J.length) || 0) + ")", 1),
                  (ge = m.value.sources) != null && ge.length ? (s(), o("div", $m, [
                    (s(!0), o(W, null, ee(m.value.sources, (de, oe) => (s(), o("div", {
                      key: oe,
                      class: "source-item"
                    }, [
                      e("span", Cm, n(de.type) + ":", 1),
                      e("a", {
                        href: de.url,
                        target: "_blank",
                        class: "source-url"
                      }, n(de.url), 9, xm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === de.url,
                        onClick: (U) => P(de.url)
                      }, n(k.value === de.url ? "..." : "×"), 9, Sm)
                    ]))), 128))
                  ])) : (s(), o("div", Im, " No download sources configured ")),
                  e("div", Em, [
                    Oe(e("input", {
                      "onUpdate:modelValue": C[3] || (C[3] = (de) => _.value = de),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Rt, _.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !_.value.trim() || y.value,
                      onClick: A
                    }, n(y.value ? "Adding..." : "Add Source"), 9, Mm)
                  ]),
                  $.value ? (s(), o("p", zm, n($.value), 1)) : c("", !0),
                  z.value ? (s(), o("p", Tm, n(z.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: C[4] || (C[4] = (G) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), I(Ve, { to: "body" }, [
          S.value ? (s(), o("div", {
            key: 0,
            class: ae(["toast", S.value.type])
          }, n(S.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), Ms = /* @__PURE__ */ Q(Lm, [["__scopeId", "data-v-f15cbb56"]]), Dm = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const a = r, { getEnvironmentModels: d, getStatus: f } = Pe(), v = b([]), p = b([]), m = b("production"), l = b(!1), u = b(null), _ = b(""), y = b(!1), k = b(null);
    function $() {
      y.value = !1, a("navigate", "model-index");
    }
    const z = B(
      () => v.value.reduce((N, T) => N + (T.size || 0), 0)
    ), S = B(() => {
      if (!_.value.trim()) return v.value;
      const N = _.value.toLowerCase();
      return v.value.filter((T) => T.filename.toLowerCase().includes(N));
    }), h = B(() => {
      if (!_.value.trim()) return p.value;
      const N = _.value.toLowerCase();
      return p.value.filter((T) => T.filename.toLowerCase().includes(N));
    }), E = B(() => {
      const N = {};
      for (const C of S.value) {
        const x = C.type || "other";
        N[x] || (N[x] = []), N[x].push(C);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([C], [x]) => {
        const G = T.indexOf(C), H = T.indexOf(x);
        return G >= 0 && H >= 0 ? G - H : G >= 0 ? -1 : H >= 0 ? 1 : C.localeCompare(x);
      }).map(([C, x]) => ({ type: C, models: x }));
    });
    function F(N) {
      if (!N) return "Unknown";
      const T = N / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function L(N) {
      k.value = N.hash || N.filename;
    }
    function O(N) {
      a("navigate", "model-index");
    }
    function A(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function P() {
      l.value = !0, u.value = null;
      try {
        const N = await d();
        v.value = N, p.value = [];
        const T = await f();
        m.value = T.environment || "production";
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Ne(P), (N, T) => (s(), o(W, null, [
      g(Ge, null, {
        header: i(() => [
          g(je, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (C) => y.value = !0)
          })
        ]),
        search: i(() => [
          g(xt, {
            modelValue: _.value,
            "onUpdate:modelValue": T[1] || (T[1] = (C) => _.value = C),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), I(ct, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (s(), I(ut, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length ? (s(), I(St, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(v.value.length) + " models • " + n(F(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(W, null, ee(E.value, (C) => (s(), I(Re, {
              key: C.type,
              title: C.type.toUpperCase(),
              count: C.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(C.models, (x) => (s(), I(Fe, {
                  key: x.hash || x.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...T[4] || (T[4] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(n(x.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(F(x.size)), 1)
                  ]),
                  details: i(() => [
                    g(Me, {
                      label: "Used by:",
                      value: (x.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(Me, {
                      label: "Path:",
                      value: x.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (G) => L(x)
                    }, {
                      default: i(() => [...T[5] || (T[5] = [
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
            h.value.length ? (s(), I(Re, {
              key: 1,
              title: "MISSING",
              count: h.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(h.value, (C) => (s(), I(Fe, {
                  key: C.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...T[6] || (T[6] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(n(C.filename), 1)
                  ]),
                  subtitle: i(() => [...T[7] || (T[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var x;
                    return [
                      g(Me, {
                        label: "Required by:",
                        value: ((x = C.workflow_names) == null ? void 0 : x.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (x) => A(C.filename)
                    }, {
                      default: i(() => [...T[8] || (T[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (x) => O(C.filename)
                    }, {
                      default: i(() => [...T[9] || (T[9] = [
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
            !S.value.length && !h.value.length ? (s(), I(et, {
              key: 2,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(dt, {
        show: y.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (C) => y.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            T[10] || (T[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + n(m.value) + '"', 1),
            T[11] || (T[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          g(te, {
            variant: "primary",
            onClick: $
          }, {
            default: i(() => [...T[12] || (T[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), I(Ms, {
        key: 0,
        identifier: k.value,
        onClose: T[3] || (T[3] = (C) => k.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Rm = /* @__PURE__ */ Q(Dm, [["__scopeId", "data-v-cb4f12b3"]]), Nm = {
  key: 0,
  class: "indexing-progress"
}, Um = { class: "progress-info" }, Pm = { class: "progress-label" }, Bm = { class: "progress-count" }, Om = { class: "progress-bar" }, Fm = { class: "modal-content" }, Vm = { class: "modal-header" }, Am = { class: "modal-body" }, Wm = { class: "input-group" }, Gm = { class: "current-path" }, jm = { class: "input-group" }, Hm = { class: "modal-footer" }, Km = { class: "modal-content" }, qm = { class: "modal-header" }, Ym = { class: "modal-body" }, Xm = { class: "input-group" }, Qm = { class: "input-group" }, Zm = { class: "modal-footer" }, Jm = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const {
      getWorkspaceModels: a,
      scanWorkspaceModels: d,
      getModelsDirectory: f,
      setModelsDirectory: v
    } = Pe(), { addToQueue: p } = Bt(), m = r, l = b([]), u = b(!1), _ = b(!1), y = b(null), k = b(""), $ = b(!1), z = b(null), S = b(!1), h = b(null), E = b(""), F = b(!1), L = b(!1), O = b(""), A = b(""), P = b(null), N = B(
      () => l.value.reduce((U, M) => U + (M.size || 0), 0)
    ), T = B(() => {
      if (!k.value.trim()) return l.value;
      const U = k.value.toLowerCase();
      return l.value.filter((M) => {
        const se = M, Z = M.sha256 || se.sha256_hash || "";
        return M.filename.toLowerCase().includes(U) || Z.toLowerCase().includes(U);
      });
    }), C = B(() => {
      const U = {};
      for (const se of T.value) {
        const Z = se.type || "other";
        U[Z] || (U[Z] = []), U[Z].push(se);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([se], [Z]) => {
        const Te = M.indexOf(se), ne = M.indexOf(Z);
        return Te >= 0 && ne >= 0 ? Te - ne : Te >= 0 ? -1 : ne >= 0 ? 1 : se.localeCompare(Z);
      }).map(([se, Z]) => ({ type: se, models: Z }));
    });
    function x(U) {
      if (!U) return "Unknown";
      const M = 1024 * 1024 * 1024, se = 1024 * 1024;
      return U >= M ? `${(U / M).toFixed(1)} GB` : U >= se ? `${(U / se).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function G(U) {
      z.value = U.hash || U.filename;
    }
    async function H() {
      _.value = !0, y.value = null;
      try {
        const U = await d();
        await de(), U.changes > 0 && console.log(`Scan complete: ${U.changes} changes detected`);
      } catch (U) {
        y.value = U instanceof Error ? U.message : "Failed to scan models";
      } finally {
        _.value = !1;
      }
    }
    async function J() {
      if (E.value.trim()) {
        F.value = !0, y.value = null;
        try {
          const U = await v(E.value.trim());
          h.value = U.path, S.value = !1, E.value = "", await de(), console.log(`Directory changed: ${U.models_indexed} models indexed`), m("refresh");
        } catch (U) {
          y.value = U instanceof Error ? U.message : "Failed to change directory";
        } finally {
          F.value = !1;
        }
      }
    }
    function ge() {
      if (!O.value.trim() || !A.value.trim()) return;
      const U = A.value.split("/").pop() || "model.safetensors";
      p([{
        workflow: "__manual__",
        filename: U,
        url: O.value.trim(),
        targetPath: A.value.trim()
      }]), O.value = "", A.value = "", L.value = !1;
    }
    async function de() {
      u.value = !0, y.value = null;
      try {
        l.value = await a();
      } catch (U) {
        y.value = U instanceof Error ? U.message : "Failed to load workspace models";
      } finally {
        u.value = !1;
      }
    }
    async function oe() {
      try {
        const U = await f();
        h.value = U.path;
      } catch {
      }
    }
    return Ne(() => {
      de(), oe();
    }), (U, M) => (s(), o(W, null, [
      g(Ge, null, {
        header: i(() => [
          g(je, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: M[2] || (M[2] = (se) => $.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                disabled: _.value,
                onClick: H
              }, {
                default: i(() => [
                  w(n(_.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (se) => S.value = !0)
              }, {
                default: i(() => [...M[15] || (M[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: M[1] || (M[1] = (se) => L.value = !0)
              }, {
                default: i(() => [...M[16] || (M[16] = [
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
          P.value ? (s(), o("div", Nm, [
            e("div", Um, [
              e("span", Pm, n(P.value.message), 1),
              e("span", Bm, n(P.value.current) + "/" + n(P.value.total), 1)
            ]),
            e("div", Om, [
              e("div", {
                class: "progress-fill",
                style: it({ width: `${P.value.current / P.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          g(xt, {
            modelValue: k.value,
            "onUpdate:modelValue": M[3] || (M[3] = (se) => k.value = se),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value || P.value ? (s(), I(ct, {
            key: 0,
            message: P.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : y.value ? (s(), I(ut, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            l.value.length ? (s(), I(St, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(l.value.length) + " models • " + n(x(N.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(W, null, ee(C.value, (se) => (s(), I(Re, {
              key: se.type,
              title: se.type.toUpperCase(),
              count: se.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(se.models, (Z) => (s(), I(Fe, {
                  key: Z.sha256 || Z.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...M[17] || (M[17] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(n(Z.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(x(Z.size)), 1)
                  ]),
                  details: i(() => [
                    g(Me, {
                      label: "Hash:",
                      value: Z.hash ? Z.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => G(Z)
                    }, {
                      default: i(() => [...M[18] || (M[18] = [
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
            T.value.length ? c("", !0) : (s(), I(et, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(dt, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: M[4] || (M[4] = (se) => $.value = !1)
      }, {
        content: i(() => [...M[19] || (M[19] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      z.value ? (s(), I(Ms, {
        key: 0,
        identifier: z.value,
        onClose: M[5] || (M[5] = (se) => z.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (s(), I(Ve, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[9] || (M[9] = De((se) => S.value = !1, ["self"]))
        }, [
          e("div", Fm, [
            e("div", Vm, [
              M[20] || (M[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[6] || (M[6] = (se) => S.value = !1)
              }, "✕")
            ]),
            e("div", Am, [
              e("div", Wm, [
                M[21] || (M[21] = e("label", null, "Current Directory", -1)),
                e("code", Gm, n(h.value || "Not set"), 1)
              ]),
              e("div", jm, [
                M[22] || (M[22] = e("label", null, "New Directory Path", -1)),
                g(Je, {
                  modelValue: E.value,
                  "onUpdate:modelValue": M[7] || (M[7] = (se) => E.value = se),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              M[23] || (M[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Hm, [
              g(re, {
                variant: "secondary",
                onClick: M[8] || (M[8] = (se) => S.value = !1)
              }, {
                default: i(() => [...M[24] || (M[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(re, {
                variant: "primary",
                disabled: !E.value.trim() || F.value,
                loading: F.value,
                onClick: J
              }, {
                default: i(() => [
                  w(n(F.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (s(), I(Ve, { to: "body" }, [
        L.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[14] || (M[14] = De((se) => L.value = !1, ["self"]))
        }, [
          e("div", Km, [
            e("div", qm, [
              M[25] || (M[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[10] || (M[10] = (se) => L.value = !1)
              }, "✕")
            ]),
            e("div", Ym, [
              e("div", Xm, [
                M[26] || (M[26] = e("label", null, "Download URL", -1)),
                g(Je, {
                  modelValue: O.value,
                  "onUpdate:modelValue": M[11] || (M[11] = (se) => O.value = se),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Qm, [
                M[27] || (M[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(Je, {
                  modelValue: A.value,
                  "onUpdate:modelValue": M[12] || (M[12] = (se) => A.value = se),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              M[28] || (M[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Zm, [
              g(re, {
                variant: "secondary",
                onClick: M[13] || (M[13] = (se) => L.value = !1)
              }, {
                default: i(() => [...M[29] || (M[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(re, {
                variant: "primary",
                disabled: !O.value.trim() || !A.value.trim(),
                onClick: ge
              }, {
                default: i(() => [...M[30] || (M[30] = [
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
}), ev = /* @__PURE__ */ Q(Jm, [["__scopeId", "data-v-73b78d84"]]), tv = { class: "node-details" }, sv = { class: "status-row" }, ov = {
  key: 0,
  class: "detail-row"
}, av = { class: "value" }, nv = { class: "detail-row" }, lv = { class: "value" }, iv = {
  key: 1,
  class: "detail-row"
}, rv = { class: "value mono" }, dv = {
  key: 2,
  class: "detail-row"
}, cv = ["href"], uv = {
  key: 3,
  class: "detail-row"
}, mv = { class: "value mono small" }, vv = { class: "detail-row" }, fv = {
  key: 0,
  class: "value"
}, gv = {
  key: 1,
  class: "workflow-list"
}, pv = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, d = r, f = B(() => a.node.installed ? a.node.tracked ? a.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = B(() => a.node.installed ? a.node.tracked ? a.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), p = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[a.node.source] || a.node.source);
    return (m, l) => (s(), I(rt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (u) => d("close"))
    }, {
      body: i(() => [
        e("div", tv, [
          e("div", sv, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ae(["status-badge", f.value])
            }, n(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", ov, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", av, n(t.node.source === "development" ? "" : "v") + n(t.node.version), 1)
          ])) : c("", !0),
          e("div", nv, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", lv, n(p.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", iv, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", rv, n(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", dv, [
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
            ], 8, cv)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", uv, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", mv, n(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", vv, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", fv, " Not used in any workflows ")) : (s(), o("div", gv, [
              (s(!0), o(W, null, ee(t.node.used_in_workflows, (u) => (s(), o("span", {
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
}), hv = /* @__PURE__ */ Q(pv, [["__scopeId", "data-v-b342f626"]]), yv = { key: 0 }, wv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, kv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, _v = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: r }) {
    const a = r, { getNodes: d, trackNodeAsDev: f, installNode: v, uninstallNode: p } = Pe(), m = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = b(!1), u = b(null), _ = b(""), y = b(!1), k = b(null), $ = B(() => {
      if (!_.value.trim()) return m.value.nodes;
      const C = _.value.toLowerCase();
      return m.value.nodes.filter(
        (x) => {
          var G, H;
          return x.name.toLowerCase().includes(C) || ((G = x.description) == null ? void 0 : G.toLowerCase().includes(C)) || ((H = x.repository) == null ? void 0 : H.toLowerCase().includes(C));
        }
      );
    }), z = B(
      () => $.value.filter((C) => C.installed && C.tracked)
    ), S = B(
      () => $.value.filter((C) => !C.installed && C.tracked)
    ), h = B(
      () => $.value.filter((C) => C.installed && !C.tracked)
    );
    function E(C) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[C] || C;
    }
    function F(C) {
      return !C.used_in_workflows || C.used_in_workflows.length === 0 ? "Not used in any workflows" : C.used_in_workflows.length === 1 ? C.used_in_workflows[0] : `${C.used_in_workflows.length} workflows`;
    }
    function L(C) {
      k.value = C;
    }
    function O() {
      a("open-node-manager");
    }
    async function A(C) {
      if (confirm(`Track "${C}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const x = await f(C);
          x.status === "success" ? (alert(`Node "${C}" is now tracked as development!`), await T()) : alert(`Failed to track node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error tracking node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function P(C) {
      if (confirm(`Remove untracked node "${C}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const x = await p(C);
          x.status === "success" ? (alert(`Node "${C}" removed!`), await T()) : alert(`Failed to remove node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error removing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function N(C) {
      if (confirm(`Install node "${C}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const x = await v(C);
          x.status === "success" ? (alert(`Node "${C}" installed successfully!`), await T()) : alert(`Failed to install node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error installing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function T() {
      l.value = !0, u.value = null;
      try {
        m.value = await d();
      } catch (C) {
        u.value = C instanceof Error ? C.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Ne(T), (C, x) => (s(), o(W, null, [
      g(Ge, null, {
        header: i(() => [
          g(je, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (G) => y.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...x[5] || (x[5] = [
                  w(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(xt, {
            modelValue: _.value,
            "onUpdate:modelValue": x[1] || (x[1] = (G) => _.value = G),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), I(ct, {
            key: 0,
            message: "Loading nodes..."
          })) : u.value ? (s(), I(ut, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            m.value.total_count ? (s(), I(St, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(n(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (s(), o(W, { key: 0 }, [
                  w(" • " + n(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (s(), o(W, { key: 1 }, [
                  w(" • " + n(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            h.value.length ? (s(), I(Re, {
              key: 1,
              title: "UNTRACKED",
              count: h.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(h.value, (G) => (s(), I(Fe, {
                  key: G.name,
                  status: "warning"
                }, {
                  icon: i(() => [...x[6] || (x[6] = [
                    w("?", -1)
                  ])]),
                  title: i(() => [
                    w(n(G.name), 1)
                  ]),
                  subtitle: i(() => [...x[7] || (x[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(Me, {
                      label: "Used by:",
                      value: F(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => L(G)
                    }, {
                      default: i(() => [...x[8] || (x[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => A(G.name)
                    }, {
                      default: i(() => [...x[9] || (x[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (H) => P(G.name)
                    }, {
                      default: i(() => [...x[10] || (x[10] = [
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
            z.value.length ? (s(), I(Re, {
              key: 2,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(z.value, (G) => (s(), I(Fe, {
                  key: G.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    w(n(G.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    w(n(G.name), 1)
                  ]),
                  subtitle: i(() => [
                    G.version ? (s(), o("span", yv, n(G.source === "development" ? "" : "v") + n(G.version), 1)) : (s(), o("span", wv, "version unknown")),
                    e("span", kv, " • " + n(E(G.source)), 1)
                  ]),
                  details: i(() => [
                    g(Me, {
                      label: "Used by:",
                      value: F(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => L(G)
                    }, {
                      default: i(() => [...x[11] || (x[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: O
                    }, {
                      default: i(() => [...x[12] || (x[12] = [
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
            S.value.length ? (s(), I(Re, {
              key: 3,
              title: "MISSING",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(S.value, (G) => (s(), I(Fe, {
                  key: G.name,
                  status: "missing"
                }, {
                  icon: i(() => [...x[13] || (x[13] = [
                    w("!", -1)
                  ])]),
                  title: i(() => [
                    w(n(G.name), 1)
                  ]),
                  subtitle: i(() => [...x[14] || (x[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(Me, {
                      label: "Required by:",
                      value: F(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => L(G)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => N(G.name)
                    }, {
                      default: i(() => [...x[16] || (x[16] = [
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
            !z.value.length && !S.value.length && !h.value.length ? (s(), I(et, {
              key: 4,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(dt, {
        show: y.value,
        title: "About Custom Nodes",
        onClose: x[3] || (x[3] = (G) => y.value = !1)
      }, {
        content: i(() => [...x[17] || (x[17] = [
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
            onClick: x[2] || (x[2] = (G) => y.value = !1)
          }, {
            default: i(() => [...x[18] || (x[18] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), I(hv, {
        key: 0,
        node: k.value,
        onClose: x[4] || (x[4] = (G) => k.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), bv = /* @__PURE__ */ Q(_v, [["__scopeId", "data-v-4ac1465a"]]), $v = { class: "remote-url-display" }, Cv = ["title"], xv = ["title"], Sv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Iv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Ev = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, a = b(!1), d = B(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const v = r.url.slice(0, Math.floor(r.maxLength * 0.6)), p = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${v}...${p}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(r.url), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, p) => (s(), o("div", $v, [
      e("span", {
        class: "url-text",
        title: t.url
      }, n(d.value), 9, Cv),
      e("button", {
        class: ae(["copy-btn", { copied: a.value }]),
        onClick: f,
        title: a.value ? "Copied!" : "Copy URL"
      }, [
        a.value ? (s(), o("svg", Iv, [...p[1] || (p[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Sv, [...p[0] || (p[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, xv)
    ]));
  }
}), ps = /* @__PURE__ */ Q(Ev, [["__scopeId", "data-v-7768a58d"]]), Mv = { class: "remote-title" }, zv = {
  key: 0,
  class: "default-badge"
}, Tv = {
  key: 1,
  class: "sync-badge"
}, Lv = {
  key: 0,
  class: "ahead"
}, Dv = {
  key: 1,
  class: "behind"
}, Rv = {
  key: 0,
  class: "tracking-info"
}, Nv = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const a = t, d = B(() => a.fetchingRemote === a.remote.name), f = B(() => a.remote.is_default), v = B(() => !!a.trackingBranch);
    function p(m) {
      const l = new Date(m), _ = (/* @__PURE__ */ new Date()).getTime() - l.getTime(), y = Math.floor(_ / 6e4);
      if (y < 1) return "Just now";
      if (y < 60) return `${y}m ago`;
      const k = Math.floor(y / 60);
      if (k < 24) return `${k}h ago`;
      const $ = Math.floor(k / 24);
      return $ < 7 ? `${$}d ago` : l.toLocaleDateString();
    }
    return (m, l) => (s(), I(Fe, {
      status: f.value ? "synced" : void 0
    }, {
      icon: i(() => [
        w(n(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Mv, [
          e("span", null, n(t.remote.name), 1),
          f.value ? (s(), o("span", zv, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", Tv, [
            t.syncStatus.ahead > 0 ? (s(), o("span", Lv, "↑" + n(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (s(), o("span", Dv, "↓" + n(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        v.value ? (s(), o("span", Rv, " Tracking: " + n(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var u;
        return [
          g(Me, { label: "Fetch:" }, {
            default: i(() => [
              g(ps, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (s(), I(Me, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              g(ps, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (s(), I(Me, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, n(p(t.syncStatus.last_fetch)), 1)
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
        f.value ? c("", !0) : (s(), I(te, {
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
}), Uv = /* @__PURE__ */ Q(Nv, [["__scopeId", "data-v-17362e45"]]), Pv = ["for"], Bv = {
  key: 0,
  class: "base-form-field-required"
}, Ov = { class: "base-form-field-input" }, Fv = {
  key: 1,
  class: "base-form-field-error"
}, Vv = {
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
    const r = t, a = B(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (d, f) => (s(), o("div", {
      class: ae(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: a.value,
        class: "base-form-field-label"
      }, [
        w(n(t.label) + " ", 1),
        t.required ? (s(), o("span", Bv, "*")) : c("", !0)
      ], 8, Pv)) : c("", !0),
      e("div", Ov, [
        ye(d.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Fv, n(t.error), 1)) : t.hint ? (s(), o("span", Vv, n(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Zt = /* @__PURE__ */ Q(Av, [["__scopeId", "data-v-9a1cf296"]]), Wv = { class: "remote-form" }, Gv = { class: "form-header" }, jv = { class: "form-body" }, Hv = {
  key: 0,
  class: "form-error"
}, Kv = { class: "form-actions" }, qv = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const a = t, d = r, f = b({
      name: a.remoteName,
      fetchUrl: a.fetchUrl,
      pushUrl: a.pushUrl
    }), v = b(!1), p = b(null);
    qt(() => [a.remoteName, a.fetchUrl, a.pushUrl], () => {
      f.value = {
        name: a.remoteName,
        fetchUrl: a.fetchUrl,
        pushUrl: a.pushUrl
      };
    });
    const m = B(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!m.value || v.value)) {
        p.value = null, v.value = !0;
        try {
          d("submit", f.value);
        } catch (u) {
          p.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (u, _) => (s(), o("div", Wv, [
      e("div", Gv, [
        g(qe, null, {
          default: i(() => [
            w(n(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", jv, [
        g(Zt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            g(Je, {
              modelValue: f.value.name,
              "onUpdate:modelValue": _[0] || (_[0] = (y) => f.value.name = y),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g(Zt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            g(Je, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": _[1] || (_[1] = (y) => f.value.fetchUrl = y),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g(Zt, { label: "Push URL (optional)" }, {
          default: i(() => [
            g(Je, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": _[2] || (_[2] = (y) => f.value.pushUrl = y),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p.value ? (s(), o("div", Hv, n(p.value), 1)) : c("", !0)
      ]),
      e("div", Kv, [
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
          onClick: _[3] || (_[3] = (y) => u.$emit("cancel"))
        }, {
          default: i(() => [..._[4] || (_[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Yv = /* @__PURE__ */ Q(qv, [["__scopeId", "data-v-56021b18"]]), Xv = { key: 0 }, Qv = /* @__PURE__ */ X({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: a,
      removeRemote: d,
      updateRemoteUrl: f,
      fetchRemote: v,
      getRemoteSyncStatus: p
    } = Pe(), m = b([]), l = b(null), u = b({}), _ = b(!1), y = b(null), k = b(""), $ = b(!1), z = b(null), S = b(!1), h = b("add"), E = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), F = B(() => {
      if (!k.value.trim()) return m.value;
      const H = k.value.toLowerCase();
      return m.value.filter(
        (J) => J.name.toLowerCase().includes(H) || J.fetch_url.toLowerCase().includes(H) || J.push_url.toLowerCase().includes(H)
      );
    });
    function L(H) {
      var J;
      return ((J = l.value) == null ? void 0 : J.remote) === H;
    }
    async function O() {
      _.value = !0, y.value = null;
      try {
        const H = await r();
        m.value = H.remotes, l.value = H.current_branch_tracking || null, await Promise.all(
          H.remotes.map(async (J) => {
            const ge = await p(J.name);
            ge && (u.value[J.name] = ge);
          })
        );
      } catch (H) {
        y.value = H instanceof Error ? H.message : "Failed to load remotes";
      } finally {
        _.value = !1;
      }
    }
    function A() {
      h.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, S.value = !0;
    }
    function P(H) {
      const J = m.value.find((ge) => ge.name === H);
      J && (h.value = "edit", E.value = {
        name: J.name,
        fetchUrl: J.fetch_url,
        pushUrl: J.push_url
      }, S.value = !0);
    }
    async function N(H) {
      try {
        h.value === "add" ? await a(H.name, H.fetchUrl) : await f(H.name, H.fetchUrl, H.pushUrl || void 0), S.value = !1, await O();
      } catch (J) {
        y.value = J instanceof Error ? J.message : "Operation failed";
      }
    }
    function T() {
      S.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function C(H) {
      z.value = H;
      try {
        await v(H);
        const J = await p(H);
        J && (u.value[H] = J);
      } catch (J) {
        y.value = J instanceof Error ? J.message : "Fetch failed";
      } finally {
        z.value = null;
      }
    }
    async function x(H) {
      if (confirm(`Remove remote "${H}"?`))
        try {
          await d(H), await O();
        } catch (J) {
          y.value = J instanceof Error ? J.message : "Failed to remove remote";
        }
    }
    function G() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return Ne(O), (H, J) => (s(), o(W, null, [
      g(Ge, null, {
        header: i(() => [
          g(je, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: J[0] || (J[0] = (ge) => $.value = !0)
          }, {
            actions: i(() => [
              S.value ? c("", !0) : (s(), I(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: i(() => [...J[3] || (J[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          S.value ? c("", !0) : (s(), I(xt, {
            key: 0,
            modelValue: k.value,
            "onUpdate:modelValue": J[1] || (J[1] = (ge) => k.value = ge),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          _.value ? (s(), I(ct, {
            key: 0,
            message: "Loading remotes..."
          })) : y.value ? (s(), I(ut, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            S.value ? (s(), I(Yv, {
              key: 0,
              mode: h.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: N,
              onCancel: T
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !S.value ? (s(), I(St, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(m.value.length) + " remote" + n(m.value.length !== 1 ? "s" : "") + " ", 1),
                l.value ? (s(), o("span", Xv, " • Tracking: " + n(l.value.remote) + "/" + n(l.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            F.value.length && !S.value ? (s(), I(Re, {
              key: 2,
              title: "REMOTES",
              count: F.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee(F.value, (ge) => {
                  var de;
                  return s(), I(Uv, {
                    key: ge.name,
                    remote: ge,
                    "sync-status": u.value[ge.name],
                    "tracking-branch": L(ge.name) ? (de = l.value) == null ? void 0 : de.branch : void 0,
                    "fetching-remote": z.value,
                    onFetch: C,
                    onEdit: P,
                    onRemove: x
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !F.value.length && !S.value ? (s(), I(et, {
              key: 3,
              icon: "🌐",
              message: k.value ? `No remotes match '${k.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  onClick: A
                }, {
                  default: i(() => [...J[4] || (J[4] = [
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
      g(dt, {
        show: $.value,
        title: "About Git Remotes",
        onClose: J[2] || (J[2] = (ge) => $.value = !1)
      }, {
        content: i(() => [...J[5] || (J[5] = [
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
            onClick: G
          }, {
            default: i(() => [...J[6] || (J[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zv = /* @__PURE__ */ Q(Qv, [["__scopeId", "data-v-a75719bb"]]), Jv = { class: "setting-info" }, ef = { class: "setting-label" }, tf = {
  key: 0,
  class: "required-marker"
}, sf = {
  key: 0,
  class: "setting-description"
}, of = { class: "setting-control" }, af = /* @__PURE__ */ X({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: ae(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Jv, [
        e("div", ef, [
          w(n(t.label) + " ", 1),
          t.required ? (s(), o("span", tf, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", sf, n(t.description), 1)) : c("", !0)
      ]),
      e("div", of, [
        ye(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), lt = /* @__PURE__ */ Q(af, [["__scopeId", "data-v-cb5d236c"]]), nf = { class: "toggle" }, lf = ["checked", "disabled"], rf = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", nf, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked)),
        class: "toggle-input"
      }, null, 40, lf),
      a[1] || (a[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ht = /* @__PURE__ */ Q(rf, [["__scopeId", "data-v-71c0f550"]]), df = { class: "settings-section" }, cf = { class: "path-setting" }, uf = { class: "path-value" }, mf = { class: "path-setting" }, vf = { class: "path-value" }, ff = { class: "settings-section" }, gf = { class: "settings-section" }, pf = { class: "settings-section" }, hf = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: a } = Pe(), d = b(!1), f = b(null), v = b(null), p = b(null), m = b(null), l = b(""), u = b(""), _ = b(!0), y = b(!0), k = b(!1), $ = B(() => m.value ? l.value !== (m.value.civitai_api_key || "") : !1);
    async function z() {
      d.value = !0, f.value = null;
      try {
        p.value = await r(), m.value = { ...p.value }, l.value = p.value.civitai_api_key || "", u.value = p.value.huggingface_token || "", _.value = p.value.auto_sync_models, y.value = p.value.confirm_destructive;
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = F === "true";
      } catch (F) {
        f.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function S() {
      var F;
      v.value = null;
      try {
        const L = {};
        l.value !== (((F = m.value) == null ? void 0 : F.civitai_api_key) || "") && (L.civitai_api_key = l.value || null), await a(L), await z(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (L) {
        v.value = {
          type: "error",
          message: L instanceof Error ? L.message : "Failed to save settings"
        };
      }
    }
    function h() {
      m.value && (l.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", _.value = m.value.auto_sync_models, y.value = m.value.confirm_destructive, v.value = null);
    }
    function E(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return Ne(z), (F, L) => (s(), I(Ge, null, {
      header: i(() => [
        g(je, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            g(te, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: S
            }, {
              default: i(() => [...L[5] || (L[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (s(), I(te, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: i(() => [...L[6] || (L[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), I(ct, {
          key: 0,
          message: "Loading workspace settings..."
        })) : f.value ? (s(), I(ut, {
          key: 1,
          message: f.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
          g(Re, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var O, A;
              return [
                e("div", df, [
                  e("div", cf, [
                    L[7] || (L[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    L[8] || (L[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", uf, n(((O = p.value) == null ? void 0 : O.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", mf, [
                    L[9] || (L[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    L[10] || (L[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", vf, n(((A = p.value) == null ? void 0 : A.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(Re, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", ff, [
                g(lt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    g(Ht, {
                      modelValue: l.value,
                      "onUpdate:modelValue": L[0] || (L[0] = (O) => l.value = O),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(lt, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(Ht, {
                      modelValue: u.value,
                      "onUpdate:modelValue": L[1] || (L[1] = (O) => u.value = O),
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
          g(Re, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", gf, [
                g(lt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    g(ht, {
                      modelValue: k.value,
                      "onUpdate:modelValue": [
                        L[2] || (L[2] = (O) => k.value = O),
                        E
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g(Re, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", pf, [
                g(lt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(ht, {
                      modelValue: _.value,
                      "onUpdate:modelValue": L[3] || (L[3] = (O) => _.value = O),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(lt, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(ht, {
                      modelValue: y.value,
                      "onUpdate:modelValue": L[4] || (L[4] = (O) => y.value = O),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), I(St, {
            key: 0,
            variant: (v.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: it({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, n(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), yf = /* @__PURE__ */ Q(hf, [["__scopeId", "data-v-7861bd35"]]), wf = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = Pe(), a = b([]), d = b(!1), f = b(null), v = b(!1), p = b(null), m = B(() => a.value.length === 0 ? [] : a.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function l() {
      d.value = !0, f.value = null;
      try {
        a.value = await r(void 0, 500);
      } catch (u) {
        f.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        d.value = !1, setTimeout(() => {
          var u;
          (u = p.value) != null && u.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ne(l), (u, _) => (s(), o(W, null, [
      g(Ge, null, {
        header: i(() => [
          g(je, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (y) => v.value = !0)
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
          d.value ? (s(), I(ct, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (s(), I(ut, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            a.value.length === 0 ? (s(), I(et, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ee(m.value, (y, k) => (s(), o("div", {
                key: k,
                class: ae(`log-line log-level-${y.level.toLowerCase()}`)
              }, n(y.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(dt, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: _[2] || (_[2] = (y) => v.value = !1)
      }, {
        content: i(() => [..._[3] || (_[3] = [
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
            onClick: _[1] || (_[1] = (y) => v.value = !1)
          }, {
            default: i(() => [..._[4] || (_[4] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kf = /* @__PURE__ */ Q(wf, [["__scopeId", "data-v-39f6a756"]]), _f = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: a } = Pe(), d = b([]), f = b(!1), v = b(null), p = b(!1), m = b("production"), l = b(null), u = B(() => d.value.length === 0 ? [] : d.value.map((y) => ({
      text: `${y.timestamp} - ${y.name} - ${y.level} - ${y.func}:${y.line} - ${y.message}`,
      level: y.level
    })));
    async function _() {
      f.value = !0, v.value = null;
      try {
        d.value = await r(void 0, 500);
        try {
          const y = await a();
          m.value = y.environment || "production";
        } catch {
        }
      } catch (y) {
        v.value = y instanceof Error ? y.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var y;
          (y = l.value) != null && y.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ne(_), (y, k) => (s(), o(W, null, [
      g(Ge, null, {
        header: i(() => [
          g(je, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = ($) => p.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: f.value
              }, {
                default: i(() => [
                  w(n(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          f.value ? (s(), I(ct, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), I(ut, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.length === 0 ? (s(), I(et, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ee(u.value, ($, z) => (s(), o("div", {
                key: z,
                class: ae(`log-line log-level-${$.level.toLowerCase()}`)
              }, n($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(dt, {
        show: p.value,
        title: "About Environment Logs",
        onClose: k[2] || (k[2] = ($) => p.value = !1)
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
            onClick: k[1] || (k[1] = ($) => p.value = !1)
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
}), bf = /* @__PURE__ */ Q(_f, [["__scopeId", "data-v-4f1e6f72"]]), $f = { class: "env-title" }, Cf = {
  key: 0,
  class: "current-badge"
}, xf = {
  key: 0,
  class: "branch-info"
}, Sf = /* @__PURE__ */ X({
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
    return (r, a) => (s(), I(Fe, {
      status: t.isCurrent ? "synced" : void 0
    }, Yt({
      icon: i(() => [
        w(n(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", $f, [
          e("span", null, n(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Cf, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", xf, [
          a[0] || (a[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + n(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: i(() => [
        ye(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          g(Me, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          g(Me, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          g(Me, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), I(Me, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), If = /* @__PURE__ */ Q(Sf, [["__scopeId", "data-v-9231917a"]]), Ef = { class: "env-details" }, Mf = { class: "status-row" }, zf = {
  key: 0,
  class: "detail-row"
}, Tf = { class: "value mono" }, Lf = {
  key: 1,
  class: "detail-row"
}, Df = { class: "value mono small" }, Rf = { class: "detail-row" }, Nf = { class: "value" }, Uf = { class: "detail-row" }, Pf = { class: "value" }, Bf = { class: "detail-row" }, Of = { class: "value" }, Ff = {
  key: 2,
  class: "section-divider"
}, Vf = {
  key: 3,
  class: "detail-row"
}, Af = { class: "value" }, Wf = {
  key: 4,
  class: "detail-row"
}, Gf = { class: "value" }, jf = { class: "footer-actions" }, Hf = /* @__PURE__ */ X({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: r }) {
    const a = r;
    function d(f) {
      if (!f) return "Unknown";
      try {
        const v = new Date(f), m = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), l = Math.floor(m / 6e4), u = Math.floor(m / 36e5), _ = Math.floor(m / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : u < 24 ? `${u} ${u === 1 ? "hour" : "hours"} ago` : _ < 30 ? `${_} ${_ === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return f;
      }
    }
    return (f, v) => (s(), I(rt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (p) => a("close"))
    }, {
      body: i(() => [
        e("div", Ef, [
          e("div", Mf, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ae(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, n(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", zf, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Tf, n(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", Lf, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Df, n(t.environment.path), 1)
          ])) : c("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Rf, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Nf, n(t.environment.workflow_count), 1)
          ]),
          e("div", Uf, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Pf, n(t.environment.node_count), 1)
          ]),
          e("div", Bf, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Of, n(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Ff)) : c("", !0),
          t.environment.created_at ? (s(), o("div", Vf, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Af, n(d(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", Wf, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Gf, n(d(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", jf, [
          t.canDelete ? (s(), I(re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (p) => a("delete", t.environment.name))
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
            onClick: v[1] || (v[1] = (p) => a("close"))
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
}), Kf = /* @__PURE__ */ Q(Hf, [["__scopeId", "data-v-59855453"]]), zs = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Ts = "3.12", Ls = [
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
], Ds = "auto", qf = { class: "progress-bar" }, Yf = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, a = B(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (d, f) => (s(), o("div", qf, [
      e("div", {
        class: ae(["progress-fill", t.variant]),
        style: it({ width: a.value })
      }, null, 6)
    ]));
  }
}), Rs = /* @__PURE__ */ Q(Yf, [["__scopeId", "data-v-1beb0512"]]), Xf = { class: "task-progress" }, Qf = { class: "progress-info" }, Zf = { class: "progress-percentage" }, Jf = { class: "progress-message" }, eg = {
  key: 0,
  class: "progress-steps"
}, tg = { class: "step-icon" }, sg = { class: "step-label" }, og = /* @__PURE__ */ X({
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
    const r = t;
    function a(f) {
      const v = r.steps.find((p) => p.id === f);
      return v ? r.progress >= v.progressThreshold ? "completed" : r.currentPhase === f ? "active" : "pending" : "pending";
    }
    function d(f) {
      const v = a(f);
      return v === "completed" ? "✓" : v === "active" ? "⟳" : "○";
    }
    return (f, v) => (s(), o("div", Xf, [
      g(Rs, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Qf, [
        e("span", Zf, n(t.progress) + "%", 1),
        e("span", Jf, n(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", eg, [
        (s(!0), o(W, null, ee(t.steps, (p) => (s(), o("div", {
          key: p.id,
          class: ae(["step", a(p.id)])
        }, [
          e("span", tg, n(d(p.id)), 1),
          e("span", sg, n(p.label), 1)
        ], 2))), 128))
      ])) : c("", !0)
    ]));
  }
}), os = /* @__PURE__ */ Q(og, [["__scopeId", "data-v-9d1de66c"]]), ag = {
  key: 0,
  class: "create-env-form"
}, ng = { class: "form-field" }, lg = { class: "form-field" }, ig = ["value"], rg = { class: "form-field" }, dg = ["disabled"], cg = ["value"], ug = { class: "form-field" }, mg = ["value"], vg = { class: "form-field form-field--checkbox" }, fg = { class: "form-checkbox" }, gg = {
  key: 1,
  class: "create-env-progress"
}, pg = { class: "creating-intro" }, hg = {
  key: 0,
  class: "progress-warning"
}, yg = {
  key: 1,
  class: "create-error"
}, wg = { class: "error-message" }, kg = {
  key: 1,
  class: "footer-status"
}, _g = 10, bg = /* @__PURE__ */ X({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: r }) {
    const a = r, { getComfyUIReleases: d, createEnvironment: f, getCreateProgress: v } = Pe(), p = b(""), m = b(Ts), l = b("latest"), u = b(Ds), _ = b(!1), y = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), k = b(!1), $ = b(!1), z = b({
      progress: 0,
      message: ""
    });
    let S = null, h = 0;
    const E = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], F = b(null);
    function L() {
      $.value || a("close");
    }
    async function O() {
      const C = p.value.trim();
      if (C) {
        $.value = !0, z.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const x = {
            name: C,
            python_version: m.value,
            comfyui_version: l.value,
            torch_backend: u.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, G = await f(x);
          G.status === "started" ? A() : G.status === "error" && (z.value = {
            progress: 0,
            message: G.message || "Failed to start creation",
            error: G.message
          });
        } catch (x) {
          z.value = {
            progress: 0,
            message: x instanceof Error ? x.message : "Unknown error",
            error: x instanceof Error ? x.message : "Unknown error"
          };
        }
      }
    }
    function A() {
      S || (h = 0, S = window.setInterval(async () => {
        try {
          const C = await v();
          h = 0, z.value = {
            progress: C.progress ?? 0,
            message: C.message,
            phase: C.phase,
            error: C.error
          }, C.state === "complete" ? (P(), a("created", C.environment_name || p.value.trim(), _.value)) : C.state === "error" ? (P(), z.value.error = C.error || C.message) : C.state === "idle" && $.value && (P(), z.value.error = "Creation was interrupted. Please try again.");
        } catch {
          h++, h >= _g && (P(), z.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function P() {
      S && (clearInterval(S), S = null);
    }
    function N() {
      $.value = !1, z.value = { progress: 0, message: "" }, a("close");
    }
    async function T() {
      k.value = !0;
      try {
        y.value = await d();
      } catch (C) {
        console.error("Failed to load ComfyUI releases:", C);
      } finally {
        k.value = !1;
      }
    }
    return Ne(async () => {
      var C;
      await Zs(), (C = F.value) == null || C.focus(), T();
    }), ks(() => {
      P();
    }), (C, x) => (s(), I(rt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !$.value,
      onClose: L
    }, {
      body: i(() => [
        $.value ? (s(), o("div", gg, [
          e("p", pg, [
            x[11] || (x[11] = w(" Creating environment ", -1)),
            e("strong", null, n(p.value), 1),
            x[12] || (x[12] = w("... ", -1))
          ]),
          g(os, {
            progress: z.value.progress,
            message: z.value.message,
            "current-phase": z.value.phase,
            variant: z.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          z.value.error ? c("", !0) : (s(), o("p", hg, " This may take several minutes. Please wait... ")),
          z.value.error ? (s(), o("div", yg, [
            e("p", wg, n(z.value.error), 1)
          ])) : c("", !0)
        ])) : (s(), o("div", ag, [
          e("div", ng, [
            x[6] || (x[6] = e("label", { class: "form-label" }, "Name", -1)),
            Oe(e("input", {
              ref_key: "nameInput",
              ref: F,
              "onUpdate:modelValue": x[0] || (x[0] = (G) => p.value = G),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: vt(O, ["enter"])
            }, null, 544), [
              [Rt, p.value]
            ])
          ]),
          e("div", lg, [
            x[7] || (x[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": x[1] || (x[1] = (G) => m.value = G),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ee(we(zs), (G) => (s(), o("option", {
                key: G,
                value: G
              }, n(G), 9, ig))), 128))
            ], 512), [
              [$t, m.value]
            ])
          ]),
          e("div", rg, [
            x[8] || (x[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": x[2] || (x[2] = (G) => l.value = G),
              class: "form-select",
              disabled: k.value
            }, [
              (s(!0), o(W, null, ee(y.value, (G) => (s(), o("option", {
                key: G.tag_name,
                value: G.tag_name
              }, n(G.name), 9, cg))), 128))
            ], 8, dg), [
              [$t, l.value]
            ])
          ]),
          e("div", ug, [
            x[9] || (x[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": x[3] || (x[3] = (G) => u.value = G),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ee(we(Ls), (G) => (s(), o("option", {
                key: G,
                value: G
              }, n(G) + n(G === "auto" ? " (detect GPU)" : ""), 9, mg))), 128))
            ], 512), [
              [$t, u.value]
            ])
          ]),
          e("div", vg, [
            e("label", fg, [
              Oe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": x[4] || (x[4] = (G) => _.value = G)
              }, null, 512), [
                [es, _.value]
              ]),
              x[10] || (x[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: i(() => [
        $.value ? (s(), o(W, { key: 1 }, [
          z.value.error ? (s(), I(re, {
            key: 0,
            variant: "secondary",
            onClick: N
          }, {
            default: i(() => [...x[15] || (x[15] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", kg, " Creating environment... "))
        ], 64)) : (s(), o(W, { key: 0 }, [
          g(re, {
            variant: "primary",
            disabled: !p.value.trim(),
            onClick: O
          }, {
            default: i(() => [...x[13] || (x[13] = [
              w(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          g(re, {
            variant: "secondary",
            onClick: x[5] || (x[5] = (G) => a("close"))
          }, {
            default: i(() => [...x[14] || (x[14] = [
              w(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), $g = /* @__PURE__ */ Q(bg, [["__scopeId", "data-v-f37eaa42"]]), Cg = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getEnvironments: f } = Pe(), v = b([]), p = b(!1), m = b(null), l = b(""), u = b(!1), _ = b(!1), y = b(null), k = B(
      () => v.value.find((L) => L.is_current)
    ), $ = B(() => {
      if (!l.value.trim()) return v.value;
      const L = l.value.toLowerCase();
      return v.value.filter(
        (O) => {
          var A;
          return O.name.toLowerCase().includes(L) || ((A = O.current_branch) == null ? void 0 : A.toLowerCase().includes(L));
        }
      );
    });
    function z(L, O) {
      _.value = !1, d("created", L, O);
    }
    function S() {
      _.value = !0;
    }
    function h(L) {
      y.value = L;
    }
    function E(L) {
      y.value = null, d("delete", L);
    }
    async function F() {
      p.value = !0, m.value = null;
      try {
        v.value = await f();
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        p.value = !1;
      }
    }
    return Ne(F), r({
      loadEnvironments: F,
      openCreateModal: S
    }), (L, O) => (s(), o(W, null, [
      g(Ge, null, {
        header: i(() => [
          g(je, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (A) => u.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: i(() => [...O[6] || (O[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              g(te, {
                variant: "secondary",
                size: "sm",
                onClick: F
              }, {
                default: i(() => [...O[7] || (O[7] = [
                  w(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(xt, {
            modelValue: l.value,
            "onUpdate:modelValue": O[1] || (O[1] = (A) => l.value = A),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          p.value ? (s(), I(ct, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), I(ut, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length ? (s(), I(St, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(v.value.length) + " " + n(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                k.value ? (s(), o(W, { key: 0 }, [
                  O[8] || (O[8] = w(" • Current: ", -1)),
                  e("strong", null, n(k.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            $.value.length ? (s(), I(Re, {
              key: 1,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ee($.value, (A) => (s(), I(If, {
                  key: A.name,
                  "environment-name": A.name,
                  "is-current": A.is_current,
                  "current-branch": A.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    A.is_current ? c("", !0) : (s(), I(te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => L.$emit("switch", A.name)
                    }, {
                      default: i(() => [...O[9] || (O[9] = [
                        w(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => h(A)
                    }, {
                      default: i(() => [...O[10] || (O[10] = [
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
            $.value.length ? c("", !0) : (s(), I(et, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Yt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  g(te, {
                    variant: "primary",
                    onClick: S
                  }, {
                    default: i(() => [...O[11] || (O[11] = [
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
      g(dt, {
        show: u.value,
        title: "About Environments",
        onClose: O[3] || (O[3] = (A) => u.value = !1)
      }, {
        content: i(() => [...O[12] || (O[12] = [
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
            onClick: O[2] || (O[2] = (A) => u.value = !1)
          }, {
            default: i(() => [...O[13] || (O[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      y.value ? (s(), I(Kf, {
        key: 0,
        environment: y.value,
        "can-delete": v.value.length > 1,
        onClose: O[4] || (O[4] = (A) => y.value = null),
        onDelete: E
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      _.value ? (s(), I($g, {
        key: 1,
        onClose: O[5] || (O[5] = (A) => _.value = !1),
        onCreated: z
      })) : c("", !0)
    ], 64));
  }
}), xg = /* @__PURE__ */ Q(Cg, [["__scopeId", "data-v-d6dc0255"]]), Sg = { class: "file-path" }, Ig = { class: "file-path-text" }, Eg = ["title"], Mg = /* @__PURE__ */ X({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = b(!1);
    async function d() {
      try {
        await navigator.clipboard.writeText(r.path), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, v) => (s(), o("div", Sg, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Ig, n(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: a.value ? "Copied!" : "Copy path",
        onClick: d
      }, n(a.value ? "✓" : "📋"), 9, Eg)) : c("", !0)
    ]));
  }
}), zg = /* @__PURE__ */ Q(Mg, [["__scopeId", "data-v-f0982173"]]), Tg = { class: "output-path-input" }, Lg = { class: "export-actions" }, Dg = {
  key: 1,
  class: "export-warning"
}, Rg = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = Pe(), a = b(""), d = b(!1), f = b(null), v = b(!1);
    async function p() {
      d.value = !0, f.value = null;
      try {
        const l = await r(a.value || void 0);
        f.value = l;
      } catch (l) {
        f.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        d.value = !1;
      }
    }
    async function m() {
      var l;
      if ((l = f.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (l, u) => (s(), o(W, null, [
      g(Ge, null, {
        header: i(() => [
          g(je, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              g(te, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (_) => v.value = !0),
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
          g(Re, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              g(Fe, { status: "synced" }, {
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
                  g(Me, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  g(Me, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  g(Me, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  g(Me, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(Re, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              g(Fe, { status: "synced" }, {
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
                  e("div", Tg, [
                    g(Ht, {
                      modelValue: a.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (_) => a.value = _),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(Re, { title: "EXPORT" }, {
            default: i(() => [
              e("div", Lg, [
                g(te, {
                  variant: "primary",
                  size: "md",
                  loading: d.value,
                  disabled: d.value,
                  onClick: p
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
                a.value ? (s(), I(te, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: d.value,
                  onClick: u[2] || (u[2] = (_) => a.value = "")
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
          f.value ? (s(), I(Re, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              g(Fe, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Yt({
                icon: i(() => [
                  w(n(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  w(n(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  w(n(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    g(Me, { label: "Saved to:" }, {
                      default: i(() => [
                        g(zg, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (s(), I(Me, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (s(), o("div", Dg, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
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
                      onClick: u[3] || (u[3] = (_) => f.value = null)
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
      g(dt, {
        show: v.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (_) => v.value = !1)
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
}), Ng = /* @__PURE__ */ Q(Rg, [["__scopeId", "data-v-1777a9d5"]]), Ug = { class: "file-input-wrapper" }, Pg = ["accept", "multiple", "disabled"], Bg = /* @__PURE__ */ X({
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
    const d = a, f = b(null);
    function v() {
      var m;
      (m = f.value) == null || m.click();
    }
    function p(m) {
      const l = m.target;
      l.files && l.files.length > 0 && (d("change", l.files), l.value = "");
    }
    return r({
      triggerInput: v
    }), (m, l) => (s(), o("div", Ug, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: p
      }, null, 40, Pg),
      g(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: i(() => [
          ye(m.$slots, "default", {}, () => [
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
}), Og = /* @__PURE__ */ Q(Bg, [["__scopeId", "data-v-cd192091"]]), Fg = {
  key: 0,
  class: "drop-zone-empty"
}, Vg = { class: "drop-zone-text" }, Ag = { class: "drop-zone-primary" }, Wg = { class: "drop-zone-secondary" }, Gg = { class: "drop-zone-actions" }, jg = {
  key: 1,
  class: "drop-zone-file"
}, Hg = { class: "file-info" }, Kg = { class: "file-details" }, qg = { class: "file-name" }, Yg = { class: "file-size" }, Xg = /* @__PURE__ */ X({
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
    const a = r, d = b(!1), f = b(null), v = b(0), p = B(() => f.value !== null), m = B(() => {
      var h;
      return ((h = f.value) == null ? void 0 : h.name) || "";
    }), l = B(() => {
      if (!f.value) return "";
      const h = f.value.size;
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(h) {
      var E;
      v.value++, (E = h.dataTransfer) != null && E.types.includes("Files") && (d.value = !0);
    }
    function _(h) {
      h.dataTransfer && (h.dataTransfer.dropEffect = "copy");
    }
    function y() {
      v.value--, v.value === 0 && (d.value = !1);
    }
    function k(h) {
      var F;
      v.value = 0, d.value = !1;
      const E = (F = h.dataTransfer) == null ? void 0 : F.files;
      E && E.length > 0 && z(E[0]);
    }
    function $(h) {
      h.length > 0 && z(h[0]);
    }
    function z(h) {
      f.value = h, a("fileSelected", h);
    }
    function S() {
      f.value = null, a("clear");
    }
    return (h, E) => (s(), o("div", {
      class: ae(["file-drop-zone", { "drop-active": d.value, "has-file": p.value }]),
      onDragenter: De(u, ["prevent"]),
      onDragover: De(_, ["prevent"]),
      onDragleave: De(y, ["prevent"]),
      onDrop: De(k, ["prevent"])
    }, [
      p.value ? (s(), o("div", jg, [
        e("div", Hg, [
          E[1] || (E[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Kg, [
            e("div", qg, n(m.value), 1),
            e("div", Yg, n(l.value), 1)
          ])
        ]),
        g(te, {
          variant: "ghost",
          size: "xs",
          onClick: S,
          title: "Remove file"
        }, {
          default: i(() => [...E[2] || (E[2] = [
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
      ])) : (s(), o("div", Fg, [
        E[0] || (E[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Vg, [
          e("p", Ag, n(t.primaryText), 1),
          e("p", Wg, n(t.secondaryText), 1)
        ]),
        e("div", Gg, [
          g(Og, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
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
}), Qg = /* @__PURE__ */ Q(Xg, [["__scopeId", "data-v-e00abbca"]]), Zg = { class: "import-preview" }, Jg = { class: "preview-header" }, ep = {
  key: 0,
  class: "source-env"
}, tp = { class: "preview-content" }, sp = { class: "preview-section" }, op = { class: "section-header" }, ap = { class: "section-info" }, np = { class: "section-count" }, lp = {
  key: 0,
  class: "item-list"
}, ip = { class: "item-name" }, rp = {
  key: 0,
  class: "item-more"
}, dp = { class: "preview-section" }, cp = { class: "section-header" }, up = { class: "section-info" }, mp = { class: "section-count" }, vp = {
  key: 0,
  class: "item-list"
}, fp = { class: "item-details" }, gp = { class: "item-name" }, pp = { class: "item-meta" }, hp = {
  key: 0,
  class: "item-more"
}, yp = { class: "preview-section" }, wp = { class: "section-header" }, kp = { class: "section-info" }, _p = { class: "section-count" }, bp = {
  key: 0,
  class: "item-list"
}, $p = { class: "item-name" }, Cp = {
  key: 0,
  class: "item-more"
}, xp = {
  key: 0,
  class: "preview-section"
}, Sp = { class: "git-info" }, Ip = /* @__PURE__ */ X({
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
    const r = t, a = B(() => r.workflows.length), d = B(() => r.models.length), f = B(() => r.nodes.length);
    function v(p) {
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (p, m) => (s(), o("div", Zg, [
      e("div", Jg, [
        g(qe, null, {
          default: i(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", ep, [
          m[1] || (m[1] = w(" From: ", -1)),
          g(ss, null, {
            default: i(() => [
              w(n(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", tp, [
        e("div", sp, [
          e("div", op, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", ap, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", np, n(a.value) + " file" + n(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", lp, [
            (s(!0), o(W, null, ee(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ip, n(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", rp, " +" + n(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", dp, [
          e("div", cp, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", up, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", mp, n(d.value) + " file" + n(d.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", vp, [
            (s(!0), o(W, null, ee(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", fp, [
                e("span", gp, n(l.filename), 1),
                e("span", pp, n(v(l.size)) + " • " + n(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", hp, " +" + n(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", yp, [
          e("div", wp, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", kp, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", _p, n(f.value) + " node" + n(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", bp, [
            (s(!0), o(W, null, ee(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", $p, n(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Cp, " +" + n(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", xp, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Sp, [
            t.gitBranch ? (s(), I(Me, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                g(ss, null, {
                  default: i(() => [
                    w(n(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (s(), I(Me, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                g($s, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), Ep = /* @__PURE__ */ Q(Ip, [["__scopeId", "data-v-182fe113"]]), Mp = { class: "import-options" }, zp = { class: "options-container" }, Tp = { class: "option-section" }, Lp = { class: "conflict-options" }, Dp = ["value", "checked", "onChange"], Rp = { class: "conflict-content" }, Np = { class: "conflict-label" }, Up = { class: "conflict-description" }, Pp = { class: "option-section" }, Bp = { class: "component-toggles" }, Op = /* @__PURE__ */ X({
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
    return (f, v) => (s(), o("div", Mp, [
      g(qe, null, {
        default: i(() => [...v[4] || (v[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", zp, [
        e("div", Tp, [
          g(ts, null, {
            default: i(() => [...v[5] || (v[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Lp, [
            (s(), o(W, null, ee(d, (p) => e("label", {
              key: p.value,
              class: ae(["conflict-option", { active: t.conflictMode === p.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: p.value,
                checked: t.conflictMode === p.value,
                onChange: (m) => a("update:conflictMode", p.value)
              }, null, 40, Dp),
              e("div", Rp, [
                e("span", Np, n(p.label), 1),
                e("span", Up, n(p.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Pp, [
          g(ts, null, {
            default: i(() => [...v[6] || (v[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Bp, [
            g(lt, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": v[0] || (v[0] = (p) => a("update:includeWorkflows", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(lt, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": v[1] || (v[1] = (p) => a("update:includeModels", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(lt, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": v[2] || (v[2] = (p) => a("update:includeNodes", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(lt, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                g(ht, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": v[3] || (v[3] = (p) => a("update:includeGitHistory", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Fp = /* @__PURE__ */ Q(Op, [["__scopeId", "data-v-0ec212b0"]]), Vp = {
  key: 0,
  class: "import-empty"
}, Ap = { class: "import-help" }, Wp = {
  key: 1,
  class: "import-configure"
}, Gp = { class: "selected-file-bar" }, jp = { class: "file-bar-content" }, Hp = { class: "file-bar-info" }, Kp = { class: "file-bar-name" }, qp = { class: "file-bar-size" }, Yp = { class: "import-actions" }, Xp = {
  key: 2,
  class: "import-progress"
}, Qp = { class: "progress-content" }, Zp = { class: "progress-info" }, Jp = { class: "progress-title" }, eh = { class: "progress-detail" }, th = { class: "progress-bar" }, sh = { class: "progress-status" }, oh = {
  key: 3,
  class: "import-complete"
}, ah = { class: "complete-message" }, nh = { class: "complete-title" }, lh = { class: "complete-details" }, ih = { class: "complete-actions" }, rh = /* @__PURE__ */ X({
  __name: "ImportSection",
  setup(t) {
    const r = b(null), a = b(!1), d = b(!1), f = b(!1), v = b(""), p = b({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = b({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = b({
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
    }), u = B(() => p.value.includeWorkflows || p.value.includeModels || p.value.includeNodes || p.value.includeGitHistory);
    function _(S) {
      r.value = S;
    }
    function y() {
      r.value = null, d.value = !1, f.value = !1, v.value = "";
    }
    function k() {
      y(), a.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function $() {
      if (r.value) {
        a.value = !0, d.value = !1;
        try {
          const S = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const h of S)
            m.value = h, await new Promise((E) => setTimeout(E, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((h) => setTimeout(h, 500)), f.value = !0, v.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (S) {
          f.value = !1, v.value = S instanceof Error ? S.message : "Unknown error occurred during import";
        } finally {
          a.value = !1, d.value = !0;
        }
      }
    }
    function z(S) {
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (S, h) => (s(), I(Ge, null, {
      header: i(() => [
        g(je, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !r.value && !a.value ? (s(), o("div", Vp, [
          g(Qg, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: _
          }),
          e("div", Ap, [
            g(qe, null, {
              default: i(() => [...h[5] || (h[5] = [
                w("How to Import", -1)
              ])]),
              _: 1
            }),
            h[6] || (h[6] = e("div", { class: "help-content" }, [
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
        ])) : r.value && !a.value && !d.value ? (s(), o("div", Wp, [
          e("div", Gp, [
            e("div", jp, [
              h[7] || (h[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Hp, [
                e("div", Kp, n(r.value.name), 1),
                e("div", qp, n(z(r.value.size)), 1)
              ])
            ]),
            g(te, {
              variant: "ghost",
              size: "sm",
              onClick: y
            }, {
              default: i(() => [...h[8] || (h[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(Ep, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(Fp, {
            "conflict-mode": p.value.conflictMode,
            "onUpdate:conflictMode": h[0] || (h[0] = (E) => p.value.conflictMode = E),
            "include-workflows": p.value.includeWorkflows,
            "onUpdate:includeWorkflows": h[1] || (h[1] = (E) => p.value.includeWorkflows = E),
            "include-models": p.value.includeModels,
            "onUpdate:includeModels": h[2] || (h[2] = (E) => p.value.includeModels = E),
            "include-nodes": p.value.includeNodes,
            "onUpdate:includeNodes": h[3] || (h[3] = (E) => p.value.includeNodes = E),
            "include-git-history": p.value.includeGitHistory,
            "onUpdate:includeGitHistory": h[4] || (h[4] = (E) => p.value.includeGitHistory = E)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !p.value.includeModels && l.value.models.length > 0 ? (s(), I(nt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Yp, [
            g(te, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: $
            }, {
              default: i(() => [...h[9] || (h[9] = [
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
              onClick: y
            }, {
              default: i(() => [...h[10] || (h[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : a.value ? (s(), o("div", Xp, [
          e("div", Qp, [
            h[11] || (h[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Zp, [
              e("div", Jp, n(m.value.message), 1),
              e("div", eh, n(m.value.detail), 1)
            ])
          ]),
          e("div", th, [
            e("div", {
              class: "progress-bar-fill",
              style: it({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", sh, n(m.value.percent) + "% complete ", 1)
        ])) : d.value ? (s(), o("div", oh, [
          e("div", {
            class: ae(["complete-icon", f.value ? "success" : "error"])
          }, n(f.value ? "✓" : "✕"), 3),
          e("div", ah, [
            e("div", nh, n(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", lh, n(v.value), 1)
          ]),
          e("div", ih, [
            g(te, {
              variant: "primary",
              size: "md",
              onClick: k
            }, {
              default: i(() => [...h[12] || (h[12] = [
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
}), dh = /* @__PURE__ */ Q(rh, [["__scopeId", "data-v-18e18eb5"]]), ch = { class: "header-info" }, uh = { class: "commit-hash" }, mh = {
  key: 0,
  class: "commit-refs"
}, vh = { class: "commit-message" }, fh = { class: "commit-date" }, gh = {
  key: 0,
  class: "loading"
}, ph = {
  key: 1,
  class: "changes-section"
}, hh = { class: "stats-row" }, yh = { class: "stat" }, wh = { class: "stat insertions" }, kh = { class: "stat deletions" }, _h = {
  key: 0,
  class: "change-group"
}, bh = {
  key: 1,
  class: "change-group"
}, $h = {
  key: 0,
  class: "version"
}, Ch = {
  key: 2,
  class: "change-group"
}, xh = { class: "change-item" }, Sh = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: a } = Pe(), d = b(null), f = b(!0), v = B(() => {
      if (!d.value) return !1;
      const m = d.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), p = B(() => {
      if (!d.value) return !1;
      const m = d.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Ne(async () => {
      try {
        d.value = await a(r.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (m, l) => (s(), I(rt, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (u) => m.$emit("close"))
    }, {
      header: i(() => {
        var u, _, y, k;
        return [
          e("div", ch, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", uh, n(((u = d.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((_ = t.commit.hash) == null ? void 0 : _.slice(0, 7))), 1),
            (k = (y = d.value) == null ? void 0 : y.refs) != null && k.length ? (s(), o("span", mh, [
              (s(!0), o(W, null, ee(d.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, n($), 1))), 128))
            ])) : c("", !0)
          ]),
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = ($) => m.$emit("close"))
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
        var u, _;
        return [
          e("div", vh, n(((u = d.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", fh, n(((_ = d.value) == null ? void 0 : _.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (s(), o("div", gh, "Loading details...")) : d.value ? (s(), o("div", ph, [
            e("div", hh, [
              e("span", yh, n(d.value.stats.files_changed) + " files", 1),
              e("span", wh, "+" + n(d.value.stats.insertions), 1),
              e("span", kh, "-" + n(d.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", _h, [
              g(Nt, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ee(d.value.changes.workflows.added, (y) => (s(), o("div", {
                key: "add-" + y,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(y), 1)
              ]))), 128)),
              (s(!0), o(W, null, ee(d.value.changes.workflows.modified, (y) => (s(), o("div", {
                key: "mod-" + y,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, n(y), 1)
              ]))), 128)),
              (s(!0), o(W, null, ee(d.value.changes.workflows.deleted, (y) => (s(), o("div", {
                key: "del-" + y,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(y), 1)
              ]))), 128))
            ])) : c("", !0),
            p.value ? (s(), o("div", bh, [
              g(Nt, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ee(d.value.changes.nodes.added, (y) => (s(), o("div", {
                key: "add-" + y.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(y.name), 1),
                y.version ? (s(), o("span", $h, "(" + n(y.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(W, null, ee(d.value.changes.nodes.removed, (y) => (s(), o("div", {
                key: "rem-" + y.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(y.name), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.changes.models.resolved > 0 ? (s(), o("div", Ch, [
              g(Nt, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", xh, [
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
}), Ih = /* @__PURE__ */ Q(Sh, [["__scopeId", "data-v-d256ff6d"]]), Eh = { class: "dialog-message" }, Mh = {
  key: 0,
  class: "dialog-details"
}, zh = {
  key: 1,
  class: "dialog-warning"
}, Th = /* @__PURE__ */ X({
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
    return (r, a) => (s(), I(rt, {
      title: t.title,
      size: "sm",
      onClose: a[3] || (a[3] = (d) => r.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", Eh, n(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Mh, [
          (s(!0), o(W, null, ee(t.details, (d, f) => (s(), o("div", {
            key: f,
            class: "detail-item"
          }, " • " + n(d), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", zh, [
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
        t.secondaryAction ? (s(), I(re, {
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
}), Lh = /* @__PURE__ */ Q(Th, [["__scopeId", "data-v-3670b9f5"]]), Dh = { class: "base-textarea-wrapper" }, Rh = ["value", "rows", "placeholder", "disabled", "maxlength"], Nh = {
  key: 0,
  class: "base-textarea-count"
}, Uh = /* @__PURE__ */ X({
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
    return (r, a) => (s(), o("div", Dh, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          a[1] || (a[1] = vt(De((d) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = vt(De((d) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Rh),
      t.showCharCount && t.maxLength ? (s(), o("div", Nh, n(t.modelValue.length) + " / " + n(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), hs = /* @__PURE__ */ Q(Uh, [["__scopeId", "data-v-5516e6fc"]]), Ph = ["checked", "disabled"], Bh = { class: "base-checkbox-box" }, Oh = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Fh = {
  key: 0,
  class: "base-checkbox-label"
}, Vh = /* @__PURE__ */ X({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", {
      class: ae(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked))
      }, null, 40, Ph),
      e("span", Bh, [
        t.modelValue ? (s(), o("svg", Oh, [...a[1] || (a[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      r.$slots.default ? (s(), o("span", Fh, [
        ye(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ys = /* @__PURE__ */ Q(Vh, [["__scopeId", "data-v-bf17c831"]]), Ah = { class: "popover-header" }, Wh = { class: "popover-body" }, Gh = {
  key: 0,
  class: "changes-summary"
}, jh = {
  key: 0,
  class: "change-item"
}, Hh = {
  key: 1,
  class: "change-item"
}, Kh = {
  key: 2,
  class: "change-item"
}, qh = {
  key: 3,
  class: "change-item"
}, Yh = {
  key: 4,
  class: "change-item"
}, Xh = {
  key: 1,
  class: "no-changes"
}, Qh = {
  key: 2,
  class: "loading"
}, Zh = {
  key: 3,
  class: "issues-error"
}, Jh = { class: "error-header" }, e1 = { class: "error-title" }, t1 = { class: "issues-list" }, s1 = { class: "message-section" }, o1 = { class: "popover-footer" }, a1 = {
  key: 1,
  class: "commit-popover"
}, n1 = { class: "popover-header" }, l1 = { class: "popover-body" }, i1 = {
  key: 0,
  class: "changes-summary"
}, r1 = {
  key: 0,
  class: "change-item"
}, d1 = {
  key: 1,
  class: "change-item"
}, c1 = {
  key: 2,
  class: "change-item"
}, u1 = {
  key: 3,
  class: "change-item"
}, m1 = {
  key: 4,
  class: "change-item"
}, v1 = {
  key: 1,
  class: "no-changes"
}, f1 = {
  key: 2,
  class: "loading"
}, g1 = {
  key: 3,
  class: "issues-error"
}, p1 = { class: "error-header" }, h1 = { class: "error-title" }, y1 = { class: "issues-list" }, w1 = { class: "message-section" }, k1 = { class: "popover-footer" }, _1 = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const a = t, d = r, { commit: f } = Pe(), v = b(""), p = b(!1), m = b(!1), l = b(null), u = B(() => {
      if (!a.status) return !1;
      const z = a.status.workflows;
      return z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || a.status.has_changes;
    }), _ = B(() => {
      var z;
      return (z = a.status) != null && z.workflows.analyzed ? a.status.workflows.analyzed.filter(
        (S) => S.has_issues && (S.sync_state === "new" || S.sync_state === "modified")
      ) : [];
    }), y = B(() => _.value.length > 0), k = B(() => y.value && !m.value);
    async function $() {
      var z, S, h;
      if (!(y.value && !m.value) && !(!u.value || !v.value.trim() || p.value)) {
        p.value = !0, l.value = null;
        try {
          const E = await f(v.value.trim(), m.value);
          E.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((z = E.summary) == null ? void 0 : z.new) || 0} new, ${((S = E.summary) == null ? void 0 : S.modified) || 0} modified, ${((h = E.summary) == null ? void 0 : h.deleted) || 0} deleted`
          }, v.value = "", m.value = !1, setTimeout(() => d("committed"), 1e3)) : E.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : E.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: E.message || "Commit failed" };
        } catch (E) {
          l.value = { type: "error", message: E instanceof Error ? E.message : "Commit failed" };
        } finally {
          p.value = !1;
        }
      }
    }
    return (z, S) => t.asModal ? (s(), I(Ve, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = (h) => d("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = De(() => {
          }, ["stop"]))
        }, [
          e("div", Ah, [
            S[11] || (S[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: S[0] || (S[0] = (h) => d("close"))
            }, [...S[10] || (S[10] = [
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
          e("div", Wh, [
            t.status && u.value ? (s(), o("div", Gh, [
              t.status.workflows.new.length ? (s(), o("div", jh, [
                S[12] || (S[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Hh, [
                S[13] || (S[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Kh, [
                S[14] || (S[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", qh, [
                S[15] || (S[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Yh, [
                S[16] || (S[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (s(), o("div", Xh, " No changes to commit ")) : (s(), o("div", Qh, " Loading... ")),
            y.value ? (s(), o("div", Zh, [
              e("div", Jh, [
                S[17] || (S[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", e1, n(_.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", t1, [
                (s(!0), o(W, null, ee(_.value, (h) => (s(), o("div", {
                  key: h.name,
                  class: "issue-item"
                }, [
                  e("strong", null, n(h.name), 1),
                  w(": " + n(h.issue_summary), 1)
                ]))), 128))
              ]),
              g(ys, {
                modelValue: m.value,
                "onUpdate:modelValue": S[1] || (S[1] = (h) => m.value = h),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...S[18] || (S[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", s1, [
              g(hs, {
                modelValue: v.value,
                "onUpdate:modelValue": S[2] || (S[2] = (h) => v.value = h),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || p.value || k.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: ae(["result", l.value.type])
            }, n(l.value.message), 3)) : c("", !0)
          ]),
          e("div", o1, [
            g(re, {
              variant: "secondary",
              onClick: S[3] || (S[3] = (h) => d("close"))
            }, {
              default: i(() => [...S[19] || (S[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: m.value ? "danger" : "primary",
              disabled: !u.value || !v.value.trim() || p.value || k.value,
              loading: p.value,
              onClick: $
            }, {
              default: i(() => [
                w(n(p.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", a1, [
      e("div", n1, [
        S[21] || (S[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: S[6] || (S[6] = (h) => d("close"))
        }, [...S[20] || (S[20] = [
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
      e("div", l1, [
        t.status && u.value ? (s(), o("div", i1, [
          t.status.workflows.new.length ? (s(), o("div", r1, [
            S[22] || (S[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", d1, [
            S[23] || (S[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", c1, [
            S[24] || (S[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", u1, [
            S[25] || (S[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", m1, [
            S[26] || (S[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (s(), o("div", v1, " No changes to commit ")) : (s(), o("div", f1, " Loading... ")),
        y.value ? (s(), o("div", g1, [
          e("div", p1, [
            S[27] || (S[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", h1, n(_.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", y1, [
            (s(!0), o(W, null, ee(_.value, (h) => (s(), o("div", {
              key: h.name,
              class: "issue-item"
            }, [
              e("strong", null, n(h.name), 1),
              w(": " + n(h.issue_summary), 1)
            ]))), 128))
          ]),
          g(ys, {
            modelValue: m.value,
            "onUpdate:modelValue": S[7] || (S[7] = (h) => m.value = h),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...S[28] || (S[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", w1, [
          g(hs, {
            modelValue: v.value,
            "onUpdate:modelValue": S[8] || (S[8] = (h) => v.value = h),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || p.value || k.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: ae(["result", l.value.type])
        }, n(l.value.message), 3)) : c("", !0)
      ]),
      e("div", k1, [
        g(re, {
          variant: "secondary",
          onClick: S[9] || (S[9] = (h) => d("close"))
        }, {
          default: i(() => [...S[29] || (S[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(re, {
          variant: m.value ? "danger" : "primary",
          disabled: !u.value || !v.value.trim() || p.value || k.value,
          loading: p.value,
          onClick: $
        }, {
          default: i(() => [
            w(n(p.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ns = /* @__PURE__ */ Q(_1, [["__scopeId", "data-v-d92153de"]]), b1 = { class: "modal-header" }, $1 = { class: "modal-body" }, C1 = { class: "switch-message" }, x1 = { class: "switch-details" }, S1 = { class: "modal-actions" }, I1 = /* @__PURE__ */ X({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (s(), I(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = De(() => {
          }, ["stop"]))
        }, [
          e("div", b1, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", $1, [
            e("p", C1, [
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
            e("p", x1, ' Your current work will be preserved. You can switch back to "' + n(t.fromEnvironment) + '" anytime. ', 1),
            a[10] || (a[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", S1, [
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
}), E1 = /* @__PURE__ */ Q(I1, [["__scopeId", "data-v-e9c5253e"]]), M1 = {
  key: 0,
  class: "modal-overlay"
}, z1 = { class: "modal-content" }, T1 = { class: "modal-body" }, L1 = { class: "progress-info" }, D1 = { class: "progress-percentage" }, R1 = { class: "progress-state" }, N1 = { class: "switch-steps" }, U1 = { class: "step-icon" }, P1 = { class: "step-label" }, B1 = /* @__PURE__ */ X({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, a = B(() => {
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
    }), d = B(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), f = B(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], p = v.findIndex((m) => m.state === r.state);
      return v.map((m, l) => {
        let u = "pending", _ = "○";
        return l < p ? (u = "completed", _ = "✓") : l === p && (u = "active", _ = "⟳"), {
          ...m,
          status: u,
          icon: _
        };
      });
    });
    return (v, p) => (s(), I(Ve, { to: "body" }, [
      t.show ? (s(), o("div", M1, [
        e("div", z1, [
          p[1] || (p[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", T1, [
            g(Rs, {
              progress: t.progress,
              variant: d.value
            }, null, 8, ["progress", "variant"]),
            e("div", L1, [
              e("div", D1, n(t.progress) + "%", 1),
              e("div", R1, n(a.value), 1)
            ]),
            e("div", N1, [
              (s(!0), o(W, null, ee(f.value, (m) => (s(), o("div", {
                key: m.state,
                class: ae(["switch-step", m.status])
              }, [
                e("span", U1, n(m.icon), 1),
                e("span", P1, n(m.label), 1)
              ], 2))), 128))
            ]),
            p[0] || (p[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), O1 = /* @__PURE__ */ Q(B1, [["__scopeId", "data-v-768a5078"]]), F1 = { class: "modal-header" }, V1 = { class: "modal-body" }, A1 = {
  key: 0,
  class: "node-section"
}, W1 = { class: "node-list" }, G1 = {
  key: 1,
  class: "node-section"
}, j1 = { class: "node-list" }, H1 = { class: "modal-actions" }, K1 = /* @__PURE__ */ X({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (s(), I(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = De(() => {
          }, ["stop"]))
        }, [
          e("div", F1, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", V1, [
            a[8] || (a[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", A1, [
              a[6] || (a[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", W1, [
                (s(!0), o(W, null, ee(t.mismatchDetails.missing_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item add"
                }, " + " + n(d), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", G1, [
              a[7] || (a[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", j1, [
                (s(!0), o(W, null, ee(t.mismatchDetails.extra_nodes, (d) => (s(), o("div", {
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
          e("div", H1, [
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
}), q1 = /* @__PURE__ */ Q(K1, [["__scopeId", "data-v-7cad7518"]]), Y1 = {
  key: 0,
  class: "wizard-steps"
}, X1 = { class: "step-number" }, Q1 = {
  key: 1,
  class: "wizard-steps wizard-steps--single"
}, Z1 = {
  key: 2,
  class: "wizard-step"
}, J1 = { class: "form-field" }, ey = ["placeholder"], ty = {
  key: 0,
  class: "form-error"
}, sy = { class: "form-field form-field--checkbox" }, oy = { class: "form-checkbox" }, ay = {
  key: 0,
  class: "form-field"
}, ny = ["placeholder"], ly = {
  key: 0,
  class: "form-info"
}, iy = {
  key: 1,
  class: "form-suggestion"
}, ry = {
  key: 2,
  class: "form-error"
}, dy = {
  key: 3,
  class: "form-info"
}, cy = {
  key: 3,
  class: "wizard-step"
}, uy = {
  key: 0,
  class: "cli-warning"
}, my = {
  key: 1,
  class: "env-selection"
}, vy = { class: "env-list" }, fy = ["value"], gy = { class: "env-name" }, py = { class: "env-actions" }, hy = { key: 2 }, yy = { class: "wizard-intro" }, wy = { class: "form-field" }, ky = { class: "form-field" }, _y = ["value"], by = { class: "form-field" }, $y = ["disabled"], Cy = ["value"], xy = { class: "form-field" }, Sy = ["value"], Iy = { class: "form-field form-field--checkbox" }, Ey = { class: "form-checkbox" }, My = {
  key: 1,
  class: "form-error"
}, Gt = 10, zy = 600 * 1e3, Ty = 1800 * 1e3, Ly = /* @__PURE__ */ X({
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
  setup(t, { emit: r }) {
    const a = t, d = r, {
      initializeWorkspace: f,
      getInitializeProgress: v,
      validatePath: p,
      createEnvironment: m,
      getCreateProgress: l,
      getComfyUIReleases: u
    } = Pe(), _ = b(a.initialStep || 1), y = b(null), k = b(!1), $ = b(a.defaultPath), z = b(!!a.detectedModelsDir), S = b(a.detectedModelsDir || ""), h = b(null), E = b(null), F = b(null), L = b(null), O = b("my-new-env"), A = b(Ts), P = b("latest"), N = b(Ds), T = b(!0), C = b(null), x = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), G = b(!1), H = b(!1), J = b(!1), ge = b({ progress: 0, message: "" }), de = b({ progress: 0, message: "" }), oe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], U = b(0), M = b(null), se = b(0), Z = b(null), Te = B(() => {
      var be, ie;
      const le = (be = $.value) == null ? void 0 : be.trim(), K = !h.value, Se = !z.value || !E.value && ((ie = S.value) == null ? void 0 : ie.trim());
      return le && K && Se;
    }), ne = B(() => {
      var le;
      return (le = O.value) == null ? void 0 : le.trim();
    });
    async function Ye() {
      var le;
      if (h.value = null, !!((le = $.value) != null && le.trim()))
        try {
          const K = await p({ path: $.value, type: "workspace" });
          K.valid || (h.value = K.error || "Invalid path");
        } catch (K) {
          h.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function xe() {
      var le;
      if (E.value = null, F.value = null, L.value = null, !!((le = S.value) != null && le.trim()))
        try {
          const K = await p({ path: S.value, type: "models" });
          if (K.valid)
            L.value = K.model_count ?? null;
          else if (E.value = K.error || "Invalid path", K.suggestion) {
            F.value = K.suggestion, S.value = K.suggestion, E.value = null;
            const Se = await p({ path: K.suggestion, type: "models" });
            Se.valid && (L.value = Se.model_count ?? null);
          }
        } catch (K) {
          E.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ce() {
      var le, K, Se;
      if (h.value = null, E.value = null, await Ye(), !h.value && !(z.value && ((le = S.value) != null && le.trim()) && (await xe(), E.value))) {
        H.value = !0;
        try {
          await f({
            workspace_path: ((K = $.value) == null ? void 0 : K.trim()) || a.defaultPath,
            models_directory: z.value && ((Se = S.value) == null ? void 0 : Se.trim()) || null
          }), U.value = 0, M.value = Date.now();
          const be = setInterval(async () => {
            if (M.value && Date.now() - M.value > zy) {
              clearInterval(be), H.value = !1, h.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ie = await v();
              if (U.value = 0, ie.state === "idle" && H.value) {
                clearInterval(be), H.value = !1, h.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ge.value = { progress: ie.progress, message: ie.message }, ie.state === "complete" ? (clearInterval(be), H.value = !1, _.value = 2, Qe()) : ie.state === "error" && (clearInterval(be), H.value = !1, h.value = ie.error || "Workspace creation failed");
            } catch (ie) {
              U.value++, console.warn(`Polling failure ${U.value}/${Gt}:`, ie), U.value >= Gt && (clearInterval(be), H.value = !1, h.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (be) {
          H.value = !1, h.value = be instanceof Error ? be.message : "Failed to create workspace";
        }
      }
    }
    async function ve() {
      J.value = !0, C.value = null;
      try {
        const le = {
          name: O.value.trim() || "my-new-env",
          python_version: A.value,
          comfyui_version: P.value,
          torch_backend: N.value,
          switch_after: T.value
        };
        if ((await m(le)).status === "started") {
          se.value = 0, Z.value = Date.now();
          const Se = setInterval(async () => {
            if (Z.value && Date.now() - Z.value > Ty) {
              clearInterval(Se), J.value = !1, C.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await l();
              if (se.value = 0, be.state === "idle" && J.value) {
                clearInterval(Se), J.value = !1, C.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (de.value = {
                progress: be.progress ?? 0,
                message: be.message,
                phase: be.phase
              }, be.state === "complete") {
                clearInterval(Se), J.value = !1;
                const ie = be.environment_name || le.name;
                T.value ? d("complete", ie) : (k.value = !1, d("environment-created-no-switch", ie));
              } else be.state === "error" && (clearInterval(Se), J.value = !1, C.value = be.error || "Environment creation failed");
            } catch (be) {
              se.value++, console.warn(`Polling failure ${se.value}/${Gt}:`, be), se.value >= Gt && (clearInterval(Se), J.value = !1, C.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (le) {
        J.value = !1, C.value = le instanceof Error ? le.message : "Unknown error";
      }
    }
    async function Qe() {
      G.value = !0;
      try {
        x.value = await u();
      } catch (le) {
        console.error("Failed to load ComfyUI releases:", le);
      } finally {
        G.value = !1;
      }
    }
    function he() {
      y.value && d("switch-environment", y.value);
    }
    return Ne(() => {
      a.detectedModelsDir && (S.value = a.detectedModelsDir), _.value === 2 && Qe();
    }), (le, K) => (s(), I(rt, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: K[12] || (K[12] = (Se) => le.$emit("close"))
    }, {
      body: i(() => {
        var Se, be, ie;
        return [
          a.setupState === "no_workspace" ? (s(), o("div", Y1, [
            e("div", {
              class: ae(["step", { active: _.value === 1, complete: _.value > 1 }])
            }, [
              e("span", X1, n(_.value > 1 ? "✓" : "1"), 1),
              K[13] || (K[13] = e("span", { class: "step-label" }, "Workspace", -1))
            ], 2),
            K[15] || (K[15] = e("div", { class: "step-connector" }, null, -1)),
            e("div", {
              class: ae(["step", { active: _.value === 2 }])
            }, [...K[14] || (K[14] = [
              e("span", { class: "step-number" }, "2", -1),
              e("span", { class: "step-label" }, "Environment", -1)
            ])], 2)
          ])) : (s(), o("div", Q1, [...K[16] || (K[16] = [
            e("div", { class: "step active" }, [
              e("span", { class: "step-number" }, "1"),
              e("span", { class: "step-label" }, "Environment")
            ], -1)
          ])])),
          _.value === 1 ? (s(), o("div", Z1, [
            K[20] || (K[20] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
            e("div", J1, [
              K[17] || (K[17] = e("label", { class: "form-label" }, "Workspace Path", -1)),
              Oe(e("input", {
                "onUpdate:modelValue": K[0] || (K[0] = (me) => $.value = me),
                type: "text",
                class: "form-input",
                placeholder: t.defaultPath,
                onBlur: Ye
              }, null, 40, ey), [
                [Rt, $.value]
              ]),
              h.value ? (s(), o("p", ty, n(h.value), 1)) : c("", !0)
            ]),
            e("div", sy, [
              e("label", oy, [
                Oe(e("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": K[1] || (K[1] = (me) => z.value = me)
                }, null, 512), [
                  [es, z.value]
                ]),
                K[18] || (K[18] = e("span", null, "I have existing ComfyUI models", -1))
              ])
            ]),
            z.value ? (s(), o("div", ay, [
              K[19] || (K[19] = e("label", { class: "form-label" }, "Models Directory", -1)),
              Oe(e("input", {
                "onUpdate:modelValue": K[2] || (K[2] = (me) => S.value = me),
                type: "text",
                class: "form-input",
                placeholder: t.detectedModelsDir || "/path/to/models",
                onBlur: xe
              }, null, 40, ny), [
                [Rt, S.value]
              ]),
              t.detectedModelsDir && !S.value ? (s(), o("p", ly, " Detected: " + n(t.detectedModelsDir), 1)) : c("", !0),
              F.value ? (s(), o("p", iy, " Did you mean: " + n(F.value), 1)) : c("", !0),
              E.value ? (s(), o("p", ry, n(E.value), 1)) : c("", !0),
              L.value !== null && !E.value ? (s(), o("p", dy, " Found " + n(L.value) + " model files ", 1)) : c("", !0)
            ])) : c("", !0),
            H.value ? (s(), I(os, {
              key: 1,
              progress: ge.value.progress,
              message: ge.value.message
            }, null, 8, ["progress", "message"])) : c("", !0)
          ])) : c("", !0),
          _.value === 2 ? (s(), o("div", cy, [
            a.cliInstalled ? c("", !0) : (s(), o("div", uy, [...K[21] || (K[21] = [
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
            (Se = a.existingEnvironments) != null && Se.length && !k.value ? (s(), o("div", my, [
              K[23] || (K[23] = e("p", { class: "wizard-intro" }, " You have existing managed environments. Switch to one, or create a new environment: ", -1)),
              e("div", vy, [
                (s(!0), o(W, null, ee(a.existingEnvironments, (me) => (s(), o("label", {
                  key: me,
                  class: ae(["env-option", { selected: y.value === me }])
                }, [
                  Oe(e("input", {
                    type: "radio",
                    name: "env-select",
                    value: me,
                    "onUpdate:modelValue": K[3] || (K[3] = (ft) => y.value = ft)
                  }, null, 8, fy), [
                    [Js, y.value]
                  ]),
                  e("span", gy, n(me), 1)
                ], 2))), 128))
              ]),
              e("div", py, [
                y.value ? (s(), I(re, {
                  key: 0,
                  variant: "primary",
                  onClick: he
                }, {
                  default: i(() => [
                    w(" Switch to " + n(y.value), 1)
                  ]),
                  _: 1
                })) : c("", !0),
                g(re, {
                  variant: "secondary",
                  onClick: K[4] || (K[4] = (me) => k.value = !0)
                }, {
                  default: i(() => [...K[22] || (K[22] = [
                    w(" + Create New Environment ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : c("", !0),
            k.value || !((be = a.existingEnvironments) != null && be.length) ? (s(), o("div", hy, [
              e("p", yy, n((ie = a.existingEnvironments) != null && ie.length ? "Create a new managed environment:" : "Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows."), 1),
              e("div", wy, [
                K[24] || (K[24] = e("label", { class: "form-label" }, "Environment Name", -1)),
                Oe(e("input", {
                  "onUpdate:modelValue": K[5] || (K[5] = (me) => O.value = me),
                  type: "text",
                  class: "form-input",
                  placeholder: "my-new-env"
                }, null, 512), [
                  [Rt, O.value]
                ])
              ]),
              e("div", ky, [
                K[25] || (K[25] = e("label", { class: "form-label" }, "Python Version", -1)),
                Oe(e("select", {
                  "onUpdate:modelValue": K[6] || (K[6] = (me) => A.value = me),
                  class: "form-select"
                }, [
                  (s(!0), o(W, null, ee(we(zs), (me) => (s(), o("option", {
                    key: me,
                    value: me
                  }, n(me), 9, _y))), 128))
                ], 512), [
                  [$t, A.value]
                ])
              ]),
              e("div", by, [
                K[26] || (K[26] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                Oe(e("select", {
                  "onUpdate:modelValue": K[7] || (K[7] = (me) => P.value = me),
                  class: "form-select",
                  disabled: G.value
                }, [
                  (s(!0), o(W, null, ee(x.value, (me) => (s(), o("option", {
                    key: me.tag_name,
                    value: me.tag_name
                  }, n(me.name), 9, Cy))), 128))
                ], 8, $y), [
                  [$t, P.value]
                ])
              ]),
              e("div", xy, [
                K[27] || (K[27] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                Oe(e("select", {
                  "onUpdate:modelValue": K[8] || (K[8] = (me) => N.value = me),
                  class: "form-select"
                }, [
                  (s(!0), o(W, null, ee(we(Ls), (me) => (s(), o("option", {
                    key: me,
                    value: me
                  }, n(me) + n(me === "auto" ? " (detect GPU)" : ""), 9, Sy))), 128))
                ], 512), [
                  [$t, N.value]
                ])
              ]),
              e("div", Iy, [
                e("label", Ey, [
                  Oe(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[9] || (K[9] = (me) => T.value = me)
                  }, null, 512), [
                    [es, T.value]
                  ]),
                  K[28] || (K[28] = e("span", null, "Switch to this environment after creation", -1))
                ])
              ]),
              J.value ? (s(), I(os, {
                key: 0,
                progress: de.value.progress,
                message: de.value.message,
                "current-phase": de.value.phase,
                "show-steps": !0,
                steps: oe
              }, null, 8, ["progress", "message", "current-phase"])) : c("", !0),
              C.value ? (s(), o("div", My, n(C.value), 1)) : c("", !0)
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => {
        var Se, be;
        return [
          _.value === 1 ? (s(), I(re, {
            key: 0,
            variant: "primary",
            disabled: !Te.value || H.value,
            onClick: ce
          }, {
            default: i(() => [
              w(n(H.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : _.value === 2 ? (s(), o(W, { key: 1 }, [
            a.setupState === "no_workspace" ? (s(), I(re, {
              key: 0,
              variant: "secondary",
              disabled: J.value,
              onClick: K[10] || (K[10] = (ie) => _.value = 1)
            }, {
              default: i(() => [...K[29] || (K[29] = [
                w(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (Se = a.existingEnvironments) != null && Se.length && k.value ? (s(), I(re, {
              key: 1,
              variant: "secondary",
              disabled: J.value,
              onClick: K[11] || (K[11] = (ie) => k.value = !1)
            }, {
              default: i(() => [...K[30] || (K[30] = [
                w(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : c("", !0),
            k.value || !((be = a.existingEnvironments) != null && be.length) ? (s(), I(re, {
              key: 2,
              variant: "primary",
              disabled: !ne.value || J.value,
              onClick: ve
            }, {
              default: i(() => [
                w(n(J.value ? "Creating..." : T.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : c("", !0)
          ], 64)) : c("", !0)
        ];
      }),
      _: 1
    }));
  }
}), Dy = /* @__PURE__ */ Q(Ly, [["__scopeId", "data-v-b8c35e2d"]]), Ry = { class: "comfygit-panel" }, Ny = { class: "panel-header" }, Uy = { class: "header-left" }, Py = {
  key: 0,
  class: "header-info"
}, By = { class: "header-actions" }, Oy = { class: "env-switcher" }, Fy = {
  key: 0,
  class: "header-info"
}, Vy = { class: "branch-name" }, Ay = { class: "panel-main" }, Wy = { class: "sidebar" }, Gy = { class: "sidebar-section" }, jy = { class: "sidebar-section" }, Hy = { class: "sidebar-section" }, Ky = { class: "content-area" }, qy = {
  key: 0,
  class: "error-message"
}, Yy = {
  key: 1,
  class: "loading"
}, Xy = { class: "dialog-content env-selector-dialog" }, Qy = { class: "dialog-header" }, Zy = { class: "dialog-body" }, Jy = { class: "env-list" }, e0 = { class: "env-info" }, t0 = { class: "env-name-row" }, s0 = { class: "env-indicator" }, o0 = { class: "env-name" }, a0 = {
  key: 0,
  class: "env-branch"
}, n0 = {
  key: 1,
  class: "current-label"
}, l0 = { class: "env-stats" }, i0 = ["onClick"], r0 = { class: "toast-container" }, d0 = { class: "toast-icon" }, c0 = { class: "toast-message" }, u0 = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const a = r, {
      getStatus: d,
      getHistory: f,
      getBranches: v,
      checkout: p,
      createBranch: m,
      switchBranch: l,
      deleteBranch: u,
      getEnvironments: _,
      switchEnvironment: y,
      getSwitchProgress: k,
      deleteEnvironment: $,
      syncEnvironmentManually: z,
      getSetupStatus: S
    } = Pe(), h = xs(), E = b(null), F = b([]), L = b([]), O = b([]), A = B(() => O.value.find((V) => V.is_current)), P = b(null), N = b(!1), T = b(1), C = B(() => {
      var V;
      return ((V = P.value) == null ? void 0 : V.state) || "managed";
    }), x = b(!1), G = b(null), H = b(null), J = b(!1), ge = b(null), de = b(null), oe = b(!1), U = b(!1), M = b(""), se = b({ state: "idle", progress: 0, message: "" });
    let Z = null, Te = null;
    const ne = b("status"), Ye = b("this-env");
    function xe(V, R) {
      ne.value = V, Ye.value = R;
    }
    function ce(V) {
      const ue = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[V];
      ue && xe(ue.view, ue.section);
    }
    function ve() {
      xe("branches", "this-env");
    }
    function Qe() {
      a("close"), setTimeout(() => {
        var R;
        const V = document.querySelectorAll("button.comfyui-button");
        for (const ue of V)
          if (((R = ue.textContent) == null ? void 0 : R.trim()) === "Manager") {
            ue.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const he = b(null), le = b(!1), K = b(!1), Se = b([]);
    let be = 0;
    function ie(V, R = "info", ue = 3e3) {
      const ze = ++be;
      return Se.value.push({ id: ze, message: V, type: R }), ue > 0 && setTimeout(() => {
        Se.value = Se.value.filter((Ae) => Ae.id !== ze);
      }, ue), ze;
    }
    function me(V) {
      Se.value = Se.value.filter((R) => R.id !== V);
    }
    function ft(V) {
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
    const gt = B(() => {
      if (!E.value) return "neutral";
      const V = E.value.workflows, R = V.new.length > 0 || V.modified.length > 0 || V.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    B(() => E.value ? gt.value === "success" ? "All synced" : gt.value === "warning" ? "Uncommitted changes" : gt.value === "error" ? "Not synced" : "" : "");
    async function Be() {
      x.value = !0, G.value = null;
      try {
        const [V, R, ue, ze] = await Promise.all([
          d(!0),
          f(),
          v(),
          _()
        ]);
        E.value = V, F.value = R.commits, L.value = ue.branches, O.value = ze, a("statusUpdate", V), ge.value && await ge.value.loadWorkflows(!0);
      } catch (V) {
        G.value = V instanceof Error ? V.message : "Failed to load status", E.value = null, F.value = [], L.value = [];
      } finally {
        x.value = !1;
      }
    }
    function It(V) {
      H.value = V;
    }
    async function yt(V) {
      var ue;
      H.value = null;
      const R = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      he.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${V.short_hash || ((ue = V.hash) == null ? void 0 : ue.slice(0, 7))}?`,
        details: R ? us() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var We;
          he.value = null, ot();
          const ze = ie(`Checking out ${V.short_hash || ((We = V.hash) == null ? void 0 : We.slice(0, 7))}...`, "info", 0), Ae = await p(V.hash, R);
          me(ze), Ae.status === "success" ? ie("Restarting ComfyUI...", "success") : ie(Ae.message || "Checkout failed", "error");
        }
      };
    }
    async function q(V) {
      const R = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      he.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${V}"?`,
        details: R ? us() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, ot();
          const ue = ie(`Switching to ${V}...`, "info", 0), ze = await l(V, R);
          me(ue), ze.status === "success" ? ie("Restarting ComfyUI...", "success") : ie(ze.message || "Branch switch failed", "error");
        }
      };
    }
    async function $e(V) {
      const R = ie(`Creating branch ${V}...`, "info", 0), ue = await m(V);
      me(R), ue.status === "success" ? (ie(`Branch "${V}" created`, "success"), await Be()) : ie(ue.message || "Failed to create branch", "error");
    }
    async function Ue(V, R = !1) {
      const ue = async (ze) => {
        var We;
        const Ae = ie(`Deleting branch ${V}...`, "info", 0);
        try {
          const at = await u(V, ze);
          me(Ae), at.status === "success" ? (ie(`Branch "${V}" deleted`, "success"), await Be()) : (We = at.message) != null && We.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${V}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await ue(!0);
            }
          } : ie(at.message || "Failed to delete branch", "error");
        } catch (at) {
          me(Ae);
          const Et = at instanceof Error ? at.message : "Failed to delete branch";
          Et.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${V}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await ue(!0);
            }
          } : ie(Et, "error");
        }
      };
      he.value = {
        title: "Delete Branch",
        message: `Delete branch "${V}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, await ue(R);
        }
      };
    }
    async function wt(V) {
      H.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const ue = ie(`Creating branch ${R}...`, "info", 0), ze = await m(R, V.hash);
        me(ue), ze.status === "success" ? (ie(`Branch "${R}" created from ${V.short_hash}`, "success"), await Be()) : ie(ze.message || "Failed to create branch", "error");
      }
    }
    function ot() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Xt() {
      he.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var V;
          he.value = null, ot(), ie("Restarting environment...", "info");
          try {
            (V = window.app) != null && V.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function j() {
      he.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var V;
          he.value = null, ie("Stopping environment...", "info");
          try {
            (V = window.app) != null && V.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function D(V) {
      J.value = !1, M.value = V, oe.value = !0;
    }
    async function Y() {
      oe.value = !1, U.value = !0, ot(), se.value = {
        progress: 10,
        state: pe(10),
        message: Le(10)
      };
      try {
        await y(M.value), mt(), Ot();
      } catch (V) {
        He(), U.value = !1, ie(`Failed to initiate switch: ${V instanceof Error ? V.message : "Unknown error"}`, "error"), se.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function pe(V) {
      return V >= 100 ? "complete" : V >= 80 ? "validating" : V >= 60 ? "starting" : V >= 30 ? "syncing" : "preparing";
    }
    function Le(V) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[pe(V)] || "";
    }
    function mt() {
      if (Te) return;
      let V = 10;
      const R = 60, ue = 5e3, ze = 100, Ae = (R - V) / (ue / ze);
      Te = window.setInterval(() => {
        if (V += Ae, V >= R && (V = R, He()), se.value.progress < R) {
          const We = Math.floor(V);
          se.value = {
            progress: We,
            state: pe(We),
            message: Le(We)
          };
        }
      }, ze);
    }
    function He() {
      Te && (clearInterval(Te), Te = null);
    }
    function Ot() {
      Z || (Z = window.setInterval(async () => {
        try {
          let V = await h.getStatus();
          if ((!V || V.state === "idle") && (V = await k()), !V)
            return;
          const R = V.progress || 0;
          R >= 60 && He();
          const ue = Math.max(R, se.value.progress), ze = V.state && V.state !== "idle" && V.state !== "unknown", Ae = ze ? V.state : pe(ue), We = ze && V.message || Le(ue);
          se.value = {
            state: Ae,
            progress: ue,
            message: We
          }, V.state === "complete" ? (He(), kt(), U.value = !1, ie(`✓ Switched to ${M.value}`, "success"), await Be(), M.value = "") : V.state === "rolled_back" ? (He(), kt(), U.value = !1, ie("Switch failed, restored previous environment", "warning"), M.value = "") : V.state === "critical_failure" && (He(), kt(), U.value = !1, ie(`Critical error during switch: ${V.message}`, "error"), M.value = "");
        } catch (V) {
          console.error("Failed to poll switch progress:", V);
        }
      }, 1e3));
    }
    function kt() {
      He(), Z && (clearInterval(Z), Z = null);
    }
    function Ft() {
      var V;
      oe.value = !1, M.value = "", (V = P.value) != null && V.state && P.value.state !== "managed" && (T.value = P.value.state === "no_workspace" ? 1 : 2, N.value = !0);
    }
    async function Vs() {
      le.value = !1, await Be(), ie("✓ Changes committed", "success");
    }
    async function As() {
      K.value = !1;
      const V = ie("Syncing environment...", "info", 0);
      try {
        const R = await z("skip", !0);
        if (me(V), R.status === "success") {
          const ue = [];
          R.nodes_installed.length && ue.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && ue.push(`${R.nodes_removed.length} removed`);
          const ze = ue.length ? `: ${ue.join(", ")}` : "";
          ie(`✓ Environment synced${ze}`, "success"), await Be();
        } else {
          const ue = R.errors.length ? R.errors.join("; ") : R.message;
          ie(`Sync failed: ${ue}`, "error");
        }
      } catch (R) {
        me(V), ie(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function Ws(V, R) {
      ie(`Environment '${V}' created`, "success"), await Be(), de.value && await de.value.loadEnvironments(), R && await D(V);
    }
    async function Gs(V) {
      var R;
      if (((R = A.value) == null ? void 0 : R.name) === V) {
        ie("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      he.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${V}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          he.value = null;
          try {
            const ue = await $(V);
            ue.status === "success" ? (ie(`Environment "${V}" deleted`, "success"), await Be(), de.value && await de.value.loadEnvironments()) : ie(ue.message || "Failed to delete environment", "error");
          } catch (ue) {
            ie(`Error deleting environment: ${ue instanceof Error ? ue.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function js(V) {
      N.value = !1;
      try {
        P.value = await S();
      } catch {
      }
      await D(V);
    }
    function Hs() {
      N.value = !1, a("close");
    }
    async function Ks(V) {
      await D(V);
    }
    async function qs(V) {
      P.value = await S(), console.log(`Environment '${V}' created. Available for switching.`);
    }
    function Ys() {
      xe("environments", "all-envs"), setTimeout(() => {
        var V;
        (V = de.value) == null || V.openCreateModal();
      }, 100);
    }
    function us() {
      if (!E.value) return [];
      const V = [], R = E.value.workflows;
      return R.new.length && V.push(`${R.new.length} new workflow(s)`), R.modified.length && V.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && V.push(`${R.deleted.length} deleted workflow(s)`), V;
    }
    return Ne(async () => {
      try {
        if (P.value = await S(), P.value.state === "no_workspace") {
          N.value = !0, T.value = 1;
          return;
        }
        if (P.value.state === "empty_workspace") {
          N.value = !0, T.value = 2;
          return;
        }
        if (P.value.state === "unmanaged") {
          N.value = !0, T.value = 2;
          return;
        }
      } catch (V) {
        console.warn("Setup status check failed, proceeding normally:", V);
      }
      await Be();
    }), (V, R) => {
      var ue, ze, Ae, We, at, Et, ms, vs, fs;
      return s(), o("div", Ry, [
        e("div", Ny, [
          e("div", Uy, [
            R[29] || (R[29] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (s(), o("div", Py)) : c("", !0)
          ]),
          e("div", By, [
            e("button", {
              class: ae(["icon-btn", { spinning: x.value }]),
              onClick: Be,
              title: "Refresh"
            }, [...R[30] || (R[30] = [
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
              onClick: R[0] || (R[0] = (fe) => a("close")),
              title: "Close"
            }, [...R[31] || (R[31] = [
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
        e("div", Oy, [
          e("div", { class: "env-switcher-header" }, [
            R[32] || (R[32] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Xt
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: j
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[1] || (R[1] = (fe) => xe("environments", "all-envs"))
          }, [
            E.value ? (s(), o("div", Fy, [
              e("span", null, n(((ue = A.value) == null ? void 0 : ue.name) || ((ze = E.value) == null ? void 0 : ze.environment) || "Loading..."), 1),
              e("span", Vy, "(" + n(E.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            R[33] || (R[33] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Ay, [
          e("div", Wy, [
            e("div", Gy, [
              R[34] || (R[34] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "status" && Ye.value === "this-env" }]),
                onClick: R[2] || (R[2] = (fe) => xe("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "workflows" }]),
                onClick: R[3] || (R[3] = (fe) => xe("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "models-env" }]),
                onClick: R[4] || (R[4] = (fe) => xe("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "branches" }]),
                onClick: R[5] || (R[5] = (fe) => xe("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "history" }]),
                onClick: R[6] || (R[6] = (fe) => xe("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "nodes" }]),
                onClick: R[7] || (R[7] = (fe) => xe("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "debug-env" }]),
                onClick: R[8] || (R[8] = (fe) => xe("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            R[37] || (R[37] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", jy, [
              R[35] || (R[35] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "environments" }]),
                onClick: R[9] || (R[9] = (fe) => xe("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "model-index" }]),
                onClick: R[10] || (R[10] = (fe) => xe("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "settings" }]),
                onClick: R[11] || (R[11] = (fe) => xe("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "debug-workspace" }]),
                onClick: R[12] || (R[12] = (fe) => xe("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            R[38] || (R[38] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Hy, [
              R[36] || (R[36] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "export" }]),
                onClick: R[13] || (R[13] = (fe) => xe("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "import" }]),
                onClick: R[14] || (R[14] = (fe) => xe("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ae(["sidebar-item", { active: ne.value === "remotes" }]),
                onClick: R[15] || (R[15] = (fe) => xe("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Ky, [
            G.value ? (s(), o("div", qy, n(G.value), 1)) : !E.value && ne.value === "status" ? (s(), o("div", Yy, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              ne.value === "status" ? (s(), I(Sn, {
                key: 0,
                status: E.value,
                "setup-state": C.value,
                onSwitchBranch: ve,
                onCommitChanges: R[16] || (R[16] = (fe) => le.value = !0),
                onSyncEnvironment: R[17] || (R[17] = (fe) => K.value = !0),
                onViewWorkflows: R[18] || (R[18] = (fe) => xe("workflows", "this-env")),
                onViewHistory: R[19] || (R[19] = (fe) => xe("history", "this-env")),
                onViewDebug: R[20] || (R[20] = (fe) => xe("debug-env", "this-env")),
                onStartSetup: R[21] || (R[21] = (fe) => N.value = !0),
                onViewEnvironments: R[22] || (R[22] = (fe) => xe("environments", "all-envs")),
                onCreateEnvironment: Ys
              }, null, 8, ["status", "setup-state"])) : ne.value === "workflows" ? (s(), I(Zu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ge,
                onRefresh: Be
              }, null, 512)) : ne.value === "models-env" ? (s(), I(Rm, {
                key: 2,
                onNavigate: ce
              })) : ne.value === "branches" ? (s(), I(Vn, {
                key: 3,
                branches: L.value,
                current: ((Ae = E.value) == null ? void 0 : Ae.branch) || null,
                onSwitch: q,
                onCreate: $e,
                onDelete: Ue
              }, null, 8, ["branches", "current"])) : ne.value === "history" ? (s(), I(Zn, {
                key: 4,
                commits: F.value,
                onSelect: It,
                onCheckout: yt
              }, null, 8, ["commits"])) : ne.value === "nodes" ? (s(), I(bv, {
                key: 5,
                onOpenNodeManager: Qe
              })) : ne.value === "debug-env" ? (s(), I(bf, { key: 6 })) : ne.value === "environments" ? (s(), I(xg, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: de,
                onSwitch: D,
                onCreated: Ws,
                onDelete: Gs
              }, null, 512)) : ne.value === "model-index" ? (s(), I(ev, {
                key: 8,
                onRefresh: Be
              })) : ne.value === "settings" ? (s(), I(yf, { key: 9 })) : ne.value === "debug-workspace" ? (s(), I(kf, { key: 10 })) : ne.value === "export" ? (s(), I(Ng, { key: 11 })) : ne.value === "import" ? (s(), I(dh, { key: 12 })) : ne.value === "remotes" ? (s(), I(Zv, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        H.value ? (s(), I(Ih, {
          key: 0,
          commit: H.value,
          onClose: R[23] || (R[23] = (fe) => H.value = null),
          onCheckout: yt,
          onCreateBranch: wt
        }, null, 8, ["commit"])) : c("", !0),
        he.value ? (s(), I(Lh, {
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
          onCancel: R[24] || (R[24] = (fe) => he.value = null),
          onSecondary: he.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        g(E1, {
          show: oe.value,
          "from-environment": ((We = A.value) == null ? void 0 : We.name) || "unknown",
          "to-environment": M.value,
          onConfirm: Y,
          onClose: Ft
        }, null, 8, ["show", "from-environment", "to-environment"]),
        le.value && E.value ? (s(), I(Ns, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: R[25] || (R[25] = (fe) => le.value = !1),
          onCommitted: Vs
        }, null, 8, ["status"])) : c("", !0),
        K.value && E.value ? (s(), I(q1, {
          key: 3,
          show: K.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: As,
          onClose: R[26] || (R[26] = (fe) => K.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g(O1, {
          show: U.value,
          state: se.value.state,
          progress: se.value.progress,
          message: se.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        J.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[28] || (R[28] = De((fe) => J.value = !1, ["self"]))
        }, [
          e("div", Xy, [
            e("div", Qy, [
              R[40] || (R[40] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[27] || (R[27] = (fe) => J.value = !1)
              }, [...R[39] || (R[39] = [
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
            e("div", Zy, [
              R[41] || (R[41] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Jy, [
                (s(!0), o(W, null, ee(O.value, (fe) => (s(), o("div", {
                  key: fe.name,
                  class: ae(["env-item", { current: fe.is_current }])
                }, [
                  e("div", e0, [
                    e("div", t0, [
                      e("span", s0, n(fe.is_current ? "●" : "○"), 1),
                      e("span", o0, n(fe.name), 1),
                      fe.current_branch ? (s(), o("span", a0, "(" + n(fe.current_branch) + ")", 1)) : c("", !0),
                      fe.is_current ? (s(), o("span", n0, "CURRENT")) : c("", !0)
                    ]),
                    e("div", l0, n(fe.workflow_count) + " workflows • " + n(fe.node_count) + " nodes ", 1)
                  ]),
                  fe.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (yw) => D(fe.name)
                  }, " SWITCH ", 8, i0))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        N.value ? (s(), I(Dy, {
          key: 5,
          "default-path": ((at = P.value) == null ? void 0 : at.default_path) || "~/comfygit",
          "detected-models-dir": ((Et = P.value) == null ? void 0 : Et.detected_models_dir) || null,
          "initial-step": T.value,
          "existing-environments": ((ms = P.value) == null ? void 0 : ms.environments) || [],
          "cli-installed": ((vs = P.value) == null ? void 0 : vs.cli_installed) ?? !0,
          "setup-state": ((fs = P.value) == null ? void 0 : fs.state) || "no_workspace",
          onComplete: js,
          onClose: Hs,
          onSwitchEnvironment: Ks,
          onEnvironmentCreatedNoSwitch: qs
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state"])) : c("", !0),
        e("div", r0, [
          g(eo, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(W, null, ee(Se.value, (fe) => (s(), o("div", {
                key: fe.id,
                class: ae(["toast", fe.type])
              }, [
                e("span", d0, n(ft(fe.type)), 1),
                e("span", c0, n(fe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), m0 = /* @__PURE__ */ Q(u0, [["__scopeId", "data-v-31ffb334"]]), v0 = { class: "item-header" }, f0 = { class: "item-info" }, g0 = { class: "filename" }, p0 = { class: "metadata" }, h0 = { class: "size" }, y0 = {
  key: 0,
  class: "type"
}, w0 = { class: "item-actions" }, k0 = {
  key: 0,
  class: "progress-section"
}, _0 = { class: "progress-bar" }, b0 = { class: "progress-stats" }, $0 = { class: "downloaded" }, C0 = { class: "speed" }, x0 = {
  key: 0,
  class: "eta"
}, S0 = {
  key: 1,
  class: "status-msg paused"
}, I0 = {
  key: 2,
  class: "status-msg queued"
}, E0 = {
  key: 3,
  class: "status-msg completed"
}, M0 = {
  key: 4,
  class: "status-msg failed"
}, z0 = {
  key: 0,
  class: "retries"
}, T0 = /* @__PURE__ */ X({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: r }) {
    const a = r;
    function d(p) {
      if (p === 0) return "?";
      const m = p / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(p / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(p) {
      return p === 0 ? "-" : `${(p / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(p) {
      if (p < 60) return `${Math.round(p)}s`;
      const m = Math.floor(p / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (p, m) => (s(), o("div", {
      class: ae(["download-item", `status-${t.item.status}`])
    }, [
      e("div", v0, [
        e("div", f0, [
          e("div", g0, n(t.item.filename), 1),
          e("div", p0, [
            e("span", h0, n(d(t.item.size)), 1),
            t.item.type ? (s(), o("span", y0, n(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", w0, [
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
      t.item.status === "downloading" ? (s(), o("div", k0, [
        e("div", _0, [
          e("div", {
            class: "progress-fill",
            style: it({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", b0, [
          e("span", $0, n(d(t.item.downloaded)) + " / " + n(d(t.item.size)), 1),
          e("span", C0, n(f(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", x0, n(v(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", S0, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", I0, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", E0, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", M0, [
        w(" ✗ " + n(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", z0, "(" + n(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ Q(T0, [["__scopeId", "data-v-2110df65"]]), L0 = { class: "queue-title" }, D0 = { class: "count" }, R0 = { class: "queue-actions" }, N0 = { class: "action-label" }, U0 = {
  key: 0,
  class: "overall-progress"
}, P0 = { class: "progress-bar" }, B0 = {
  key: 0,
  class: "current-mini"
}, O0 = { class: "filename" }, F0 = { class: "speed" }, V0 = {
  key: 1,
  class: "queue-content"
}, A0 = {
  key: 0,
  class: "section"
}, W0 = {
  key: 1,
  class: "section"
}, G0 = { class: "section-header" }, j0 = { class: "section-label paused" }, H0 = { class: "items-list" }, K0 = {
  key: 2,
  class: "section"
}, q0 = { class: "section-header" }, Y0 = { class: "section-label" }, X0 = { class: "items-list" }, Q0 = {
  key: 3,
  class: "section"
}, Z0 = { class: "section-header" }, J0 = { class: "section-label" }, ew = { class: "items-list" }, tw = {
  key: 4,
  class: "section"
}, sw = { class: "section-header" }, ow = { class: "section-label failed" }, aw = { class: "items-list" }, nw = /* @__PURE__ */ X({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: r,
      currentDownload: a,
      queuedItems: d,
      completedItems: f,
      failedItems: v,
      pausedItems: p,
      hasItems: m,
      activeCount: l,
      cancelDownload: u,
      retryDownload: _,
      resumeDownload: y,
      resumeAllPaused: k,
      removeItem: $,
      clearCompleted: z
    } = Bt(), S = b(!1);
    let h = null;
    qt(
      () => ({
        active: l.value,
        failed: v.value.length,
        paused: p.value.length,
        completed: f.value.length
      }),
      (O, A) => {
        h && (clearTimeout(h), h = null);
        const P = O.active === 0 && O.failed === 0 && O.paused === 0 && O.completed > 0, N = A && (A.active > 0 || A.paused > 0);
        P && N && (h = setTimeout(() => {
          z(), h = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const E = B(() => {
      var P;
      if (r.items.length === 0) return 0;
      const O = f.value.length, A = ((P = a.value) == null ? void 0 : P.progress) || 0;
      return Math.round((O + A / 100) / r.items.length * 100);
    });
    function F(O) {
      u(O);
    }
    function L(O) {
      return O === 0 ? "" : `${(O / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (O, A) => (s(), I(Ve, { to: "body" }, [
      we(m) ? (s(), o("div", {
        key: 0,
        class: ae(["model-download-queue", { minimized: !S.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: A[0] || (A[0] = (P) => S.value = !S.value)
        }, [
          e("div", L0, [
            A[4] || (A[4] = e("span", { class: "icon" }, "↓", -1)),
            A[5] || (A[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", D0, "(" + n(we(l)) + "/" + n(we(r).items.length) + ")", 1)
          ]),
          e("div", R0, [
            e("span", N0, n(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (s(), o("div", V0, [
          we(a) ? (s(), o("div", A0, [
            A[6] || (A[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(Tt, {
              item: we(a),
              onCancel: A[1] || (A[1] = (P) => F(we(a).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          we(p).length > 0 ? (s(), o("div", W0, [
            e("div", G0, [
              e("span", j0, "Paused (" + n(we(p).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: A[2] || (A[2] = //@ts-ignore
                (...P) => we(k) && we(k)(...P))
              }, "Resume All")
            ]),
            e("div", H0, [
              (s(!0), o(W, null, ee(we(p), (P) => (s(), I(Tt, {
                key: P.id,
                item: P,
                onResume: (N) => we(y)(P.id),
                onRemove: (N) => we($)(P.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          we(d).length > 0 ? (s(), o("div", K0, [
            e("div", q0, [
              e("span", Y0, "Queued (" + n(we(d).length) + ")", 1)
            ]),
            e("div", X0, [
              (s(!0), o(W, null, ee(we(d), (P) => (s(), I(Tt, {
                key: P.id,
                item: P,
                onCancel: (N) => F(P.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          we(f).length > 0 ? (s(), o("div", Q0, [
            e("div", Z0, [
              e("span", J0, "Completed (" + n(we(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: A[3] || (A[3] = //@ts-ignore
                (...P) => we(z) && we(z)(...P))
              }, "Clear")
            ]),
            e("div", ew, [
              (s(!0), o(W, null, ee(we(f).slice(0, 3), (P) => (s(), I(Tt, {
                key: P.id,
                item: P,
                onRemove: (N) => we($)(P.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          we(v).length > 0 ? (s(), o("div", tw, [
            e("div", sw, [
              e("span", ow, "Failed (" + n(we(v).length) + ")", 1)
            ]),
            e("div", aw, [
              (s(!0), o(W, null, ee(we(v), (P) => (s(), I(Tt, {
                key: P.id,
                item: P,
                onRetry: (N) => we(_)(P.id),
                onRemove: (N) => we($)(P.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", U0, [
          e("div", P0, [
            e("div", {
              class: "progress-fill",
              style: it({ width: `${E.value}%` })
            }, null, 4)
          ]),
          we(a) ? (s(), o("div", B0, [
            e("span", O0, n(we(a).filename), 1),
            e("span", F0, n(L(we(a).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), lw = /* @__PURE__ */ Q(nw, [["__scopeId", "data-v-60751cfa"]]), iw = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', rw = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', dw = {
  comfy: iw,
  phosphor: rw
}, ds = "comfy", Us = "comfygit-theme";
let pt = null, Ps = ds;
function cw() {
  try {
    const t = localStorage.getItem(Us);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ds;
}
function Bs(t = ds) {
  pt && pt.remove(), pt = document.createElement("style"), pt.id = "comfygit-theme-styles", pt.setAttribute("data-theme", t), pt.textContent = dw[t], document.head.appendChild(pt), document.body.setAttribute("data-comfygit-theme", t), Ps = t;
  try {
    localStorage.setItem(Us, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function uw() {
  return Ps;
}
function mw(t) {
  Bs(t);
}
const cs = document.createElement("link");
cs.rel = "stylesheet";
cs.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(cs);
const vw = cw();
Bs(vw);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), mw(t);
  },
  getTheme: () => {
    const t = uw();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ze = null, Ke = null, Ut = null, Lt = null, ws = null;
const Ct = b(null);
let Os = "managed";
async function jt() {
  var t;
  if (!((t = bt) != null && t.api)) return null;
  try {
    const r = await bt.api.fetchApi("/v2/comfygit/status");
    r.ok && (Ct.value = await r.json());
  } catch {
  }
}
async function as() {
  {
    Os = "no_workspace";
    return;
  }
}
function fw() {
  if (!Ct.value) return !1;
  const t = Ct.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ct.value.has_changes;
}
function gw() {
  Ze && Ze.remove(), Ze = document.createElement("div"), Ze.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ze.appendChild(t), Ze.addEventListener("click", (d) => {
    d.target === Ze && Jt();
  });
  const r = (d) => {
    d.key === "Escape" && (Jt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), is({
    render: () => rs(m0, {
      onClose: Jt,
      onStatusUpdate: async (d) => {
        Ct.value = d, Pt(), await as(), ns();
      }
    })
  }).mount(t), document.body.appendChild(Ze);
}
function Jt() {
  Ze && (Ze.remove(), Ze = null);
}
function pw(t) {
  Dt(), Ke = document.createElement("div"), Ke.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  Ke.style.position = "fixed", Ke.style.top = `${r.bottom + 8}px`, Ke.style.right = `${window.innerWidth - r.right}px`, Ke.style.zIndex = "10001";
  const a = (f) => {
    Ke && !Ke.contains(f.target) && f.target !== t && (Dt(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const d = (f) => {
    f.key === "Escape" && (Dt(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Ut = is({
    render: () => rs(Ns, {
      status: Ct.value,
      onClose: Dt,
      onCommitted: () => {
        Dt(), jt().then(Pt);
      }
    })
  }), Ut.mount(Ke), document.body.appendChild(Ke);
}
function Dt() {
  Ut && (Ut.unmount(), Ut = null), Ke && (Ke.remove(), Ke = null);
}
function hw() {
  Lt || (Lt = document.createElement("div"), Lt.className = "comfygit-download-queue-root", ws = is({
    render: () => rs(lw)
  }), ws.mount(Lt), document.body.appendChild(Lt), console.log("[ComfyGit] Model download queue mounted"));
}
let Xe = null;
function Pt() {
  if (!Xe) return;
  const t = Xe.querySelector(".commit-indicator");
  t && (t.style.display = fw() ? "block" : "none");
}
function ns() {
  if (!Xe) return;
  const t = Os !== "managed";
  Xe.disabled = t, Xe.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Fs = document.createElement("style");
Fs.textContent = `
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
document.head.appendChild(Fs);
bt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = gw, Xe = document.createElement("button"), Xe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Xe.innerHTML = 'Commit <span class="commit-indicator"></span>', Xe.title = "Quick Commit", Xe.onclick = () => pw(Xe), t.appendChild(r), t.appendChild(Xe), (v = (f = bt.menu) == null ? void 0 : f.settingsGroup) != null && v.element && (bt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), hw();
    const { loadPendingDownloads: a } = Bt();
    a(), await Promise.all([jt(), as()]), Pt(), ns(), setInterval(async () => {
      await Promise.all([jt(), as()]), Pt(), ns();
    }, 3e4);
    const d = bt.api;
    if (d) {
      let p = function() {
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
        const _ = document.createElement("span");
        _.textContent = "Workflows updated - refresh required", u.appendChild(_);
        const y = document.createElement("button");
        y.textContent = "Refresh", y.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, y.onmouseover = () => y.style.background = "var(--comfy-input-bg)", y.onmouseout = () => y.style.background = "var(--comfy-menu-bg)", y.onclick = () => p(), u.appendChild(y);
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
        const { change_type: _, workflow_name: y } = u.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${y}`), await jt(), Pt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      d.addEventListener("status", async (u) => {
        const _ = u.detail != null;
        _ && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), p()) : m()), l = _;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
