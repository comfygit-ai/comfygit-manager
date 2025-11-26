import { app as it } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as s, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as de, createBlock as I, resolveDynamicComponent as Dt, normalizeClass as ne, withCtx as i, toDisplayString as l, createVNode as f, createTextVNode as p, computed as B, Fragment as A, renderList as se, normalizeStyle as He, ref as $, onMounted as be, watch as Ot, Teleport as Se, withModifiers as we, Transition as ao, createSlots as Ut, withKeys as je, onUnmounted as lo, reactive as qt, readonly as io, unref as me, withDirectives as ro, vModelText as co, resolveComponent as uo, TransitionGroup as mo, createApp as Pt, h as Bt } from "vue";
const vo = { class: "panel-layout" }, fo = {
  key: 0,
  class: "panel-layout-header"
}, go = {
  key: 1,
  class: "panel-layout-search"
}, ho = { class: "panel-layout-content" }, po = {
  key: 2,
  class: "panel-layout-footer"
}, yo = /* @__PURE__ */ Y({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (o(), s("div", vo, [
      u.$slots.header ? (o(), s("div", fo, [
        de(u.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      u.$slots.search ? (o(), s("div", go, [
        de(u.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", ho, [
        de(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (o(), s("div", po, [
        de(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Z = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, g] of u)
    n[r] = g;
  return n;
}, Ee = /* @__PURE__ */ Z(yo, [["__scopeId", "data-v-21565df9"]]), wo = {
  key: 0,
  class: "panel-title-prefix"
}, ko = {
  key: 1,
  class: "panel-title-prefix-theme"
}, bo = /* @__PURE__ */ Y({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (o(), I(Dt(`h${t.level}`), {
      class: ne(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", wo, l(t.prefix), 1)) : (o(), s("span", ko)),
        de(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _o = /* @__PURE__ */ Z(bo, [["__scopeId", "data-v-c3875efc"]]), $o = ["title"], Co = ["width", "height"], xo = /* @__PURE__ */ Y({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => u.$emit("click"))
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
      ])], 8, Co))
    ], 8, $o));
  }
}), Kt = /* @__PURE__ */ Z(xo, [["__scopeId", "data-v-6fc7f16d"]]), So = { class: "header-left" }, Io = {
  key: 0,
  class: "header-actions"
}, Eo = /* @__PURE__ */ Y({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: ne(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", So, [
        f(_o, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            p(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), I(Kt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : c("", !0)
      ]),
      u.$slots.actions ? (o(), s("div", Io, [
        de(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Me = /* @__PURE__ */ Z(Eo, [["__scopeId", "data-v-55a62cd6"]]), Mo = {
  key: 0,
  class: "section-title-count"
}, zo = {
  key: 1,
  class: "section-title-icon"
}, Lo = /* @__PURE__ */ Y({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), I(Dt(`h${t.level}`), {
      class: ne(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, {
      default: i(() => [
        de(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Mo, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), s("span", zo, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Te = /* @__PURE__ */ Z(Lo, [["__scopeId", "data-v-559361eb"]]), To = { class: "status-grid" }, No = { class: "status-grid__columns" }, Ro = { class: "status-grid__column" }, Do = { class: "status-grid__title" }, Oo = { class: "status-grid__column status-grid__column--right" }, Uo = { class: "status-grid__title" }, Po = {
  key: 0,
  class: "status-grid__footer"
}, Bo = /* @__PURE__ */ Y({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (o(), s("div", To, [
      e("div", No, [
        e("div", Ro, [
          e("h4", Do, l(t.leftTitle), 1),
          de(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Oo, [
          e("h4", Uo, l(t.rightTitle), 1),
          de(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (o(), s("div", Po, [
        de(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Fo = /* @__PURE__ */ Z(Bo, [["__scopeId", "data-v-73b7ba3f"]]), Vo = {
  key: 0,
  class: "status-item__icon"
}, Ao = {
  key: 1,
  class: "status-item__count"
}, Wo = { class: "status-item__label" }, Go = /* @__PURE__ */ Y({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = B(() => `status-item--${u.variant}`);
    return (r, g) => (o(), s("div", {
      class: ne(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", Vo, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), s("span", Ao, l(t.count), 1)) : c("", !0),
      e("span", Wo, l(t.label), 1)
    ], 2));
  }
}), Fe = /* @__PURE__ */ Z(Go, [["__scopeId", "data-v-6f929183"]]), jo = { class: "issue-card__header" }, Ho = { class: "issue-card__icon" }, qo = { class: "issue-card__title" }, Ko = {
  key: 0,
  class: "issue-card__content"
}, Jo = {
  key: 0,
  class: "issue-card__description"
}, Qo = {
  key: 1,
  class: "issue-card__items"
}, Xo = {
  key: 2,
  class: "issue-card__actions"
}, Yo = /* @__PURE__ */ Y({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = B(() => `issue-card--${u.severity}`);
    return (r, g) => (o(), s("div", {
      class: ne(["issue-card", n.value])
    }, [
      e("div", jo, [
        e("span", Ho, l(t.icon), 1),
        e("h4", qo, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", Ko, [
        t.description ? (o(), s("p", Jo, l(t.description), 1)) : c("", !0),
        de(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), s("div", Qo, [
        (o(!0), s(A, null, se(t.items, (y, h) => (o(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), s("div", Xo, [
        de(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ Z(Yo, [["__scopeId", "data-v-df6aa348"]]), Zo = ["type", "disabled"], es = {
  key: 0,
  class: "spinner"
}, ts = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", es)) : c("", !0),
      t.loading ? c("", !0) : de(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Zo));
  }
}), te = /* @__PURE__ */ Z(ts, [["__scopeId", "data-v-772abe47"]]), os = { class: "empty-state" }, ss = {
  key: 0,
  class: "empty-icon"
}, ns = { class: "empty-message" }, as = /* @__PURE__ */ Y({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (o(), s("div", os, [
      t.icon ? (o(), s("div", ss, l(t.icon), 1)) : c("", !0),
      e("p", ns, l(t.message), 1),
      t.actionLabel ? (o(), I(te, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("action"))
      }, {
        default: i(() => [
          p(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ Z(as, [["__scopeId", "data-v-4466284f"]]), ls = /* @__PURE__ */ Y({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: ne(["detail-label"]),
      style: He({ minWidth: t.minWidth })
    }, [
      de(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Nt = /* @__PURE__ */ Z(ls, [["__scopeId", "data-v-75e9eeb8"]]), is = /* @__PURE__ */ Y({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: ne(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      de(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ Z(is, [["__scopeId", "data-v-2f186e4c"]]), rs = { class: "detail-row" }, ds = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), s("div", rs, [
      f(Nt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          p(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), I(Rt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          p(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : de(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), pe = /* @__PURE__ */ Z(ds, [["__scopeId", "data-v-ef15664a"]]), cs = { class: "modal-header" }, us = { class: "modal-body" }, ms = { class: "status-section" }, vs = {
  key: 0,
  class: "status-section"
}, fs = { class: "section-header-row" }, gs = {
  key: 0,
  class: "workflow-group"
}, hs = { class: "workflow-group-header" }, ps = { class: "workflow-group-title" }, ys = { class: "workflow-list" }, ws = { class: "workflow-name" }, ks = { class: "workflow-issue" }, bs = {
  key: 1,
  class: "workflow-group"
}, _s = { class: "workflow-group-header" }, $s = { class: "workflow-group-title" }, Cs = { class: "workflow-list" }, xs = { class: "workflow-name" }, Ss = { class: "workflow-issue" }, Is = {
  key: 2,
  class: "workflow-group"
}, Es = { class: "workflow-group-header" }, Ms = { class: "workflow-group-title" }, zs = { class: "workflow-list" }, Ls = { class: "workflow-name" }, Ts = {
  key: 3,
  class: "workflow-group"
}, Ns = { class: "workflow-group-header" }, Rs = { class: "workflow-group-title" }, Ds = { class: "workflow-list" }, Os = { class: "workflow-name" }, Us = {
  key: 4,
  class: "workflow-group"
}, Ps = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Fs = { class: "workflow-list" }, Vs = { class: "workflow-name" }, As = {
  key: 5,
  class: "workflow-group"
}, Ws = { class: "workflow-group-title" }, Gs = { class: "expand-icon" }, js = {
  key: 0,
  class: "workflow-list"
}, Hs = { class: "workflow-name" }, qs = {
  key: 1,
  class: "status-section"
}, Ks = {
  key: 0,
  class: "change-group"
}, Js = { class: "change-group-header" }, Qs = { class: "change-group-title" }, Xs = { class: "change-list" }, Ys = { class: "node-name" }, Zs = {
  key: 0,
  class: "dev-badge"
}, en = {
  key: 1,
  class: "change-group"
}, tn = { class: "change-group-header" }, on = { class: "change-group-title" }, sn = { class: "change-list" }, nn = { class: "node-name" }, an = {
  key: 0,
  class: "dev-badge"
}, ln = {
  key: 2,
  class: "change-group"
}, rn = { class: "change-list" }, dn = { class: "change-item" }, cn = { class: "node-name" }, un = {
  key: 3,
  class: "change-group"
}, mn = {
  key: 2,
  class: "status-section"
}, vn = { class: "section-header-row" }, fn = {
  key: 0,
  class: "drift-item"
}, gn = { class: "drift-list" }, hn = {
  key: 0,
  class: "drift-list-more"
}, pn = {
  key: 1,
  class: "drift-item"
}, yn = { class: "drift-list" }, wn = {
  key: 0,
  class: "drift-list-more"
}, kn = {
  key: 2,
  class: "drift-item"
}, bn = {
  key: 3,
  class: "drift-item"
}, _n = {
  key: 3,
  class: "status-section"
}, $n = { class: "info-box" }, Cn = { class: "drift-list" }, xn = {
  key: 0,
  class: "drift-list-more"
}, Sn = {
  key: 4,
  class: "status-section"
}, In = { class: "warning-box" }, En = {
  key: 5,
  class: "empty-state-inline"
}, Mn = { class: "modal-actions" }, zn = /* @__PURE__ */ Y({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = $(!1);
    be(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), Ot(() => u.show, (E, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", E);
    }, { immediate: !0 });
    const r = B(() => {
      var E, k, x;
      return ((x = (k = (E = u.status) == null ? void 0 : E.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : x.filter(
        (w) => w.status === "broken" && w.sync_state === "synced"
      )) || [];
    }), g = B(() => {
      var E, k, x;
      return ((x = (k = (E = u.status) == null ? void 0 : E.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : x.filter(
        (w) => w.status === "broken" && w.sync_state !== "synced"
      )) || [];
    }), y = B(() => {
      var E, k, x;
      return ((x = (k = (E = u.status) == null ? void 0 : E.workflows) == null ? void 0 : k.synced) == null ? void 0 : x.filter((w) => {
        var R, F, T;
        const C = (T = (F = (R = u.status) == null ? void 0 : R.workflows) == null ? void 0 : F.analyzed) == null ? void 0 : T.find((L) => L.name === w);
        return !C || C.status !== "broken";
      })) || [];
    }), h = B(() => {
      var E, k, x, w, C;
      return (E = u.status) != null && E.workflows ? (((k = u.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((x = u.status.workflows.modified) == null ? void 0 : x.length) ?? 0) > 0 || (((w = u.status.workflows.deleted) == null ? void 0 : w.length) ?? 0) > 0 || (((C = u.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), m = B(() => {
      var k, x, w;
      const E = (k = u.status) == null ? void 0 : k.git_changes;
      return E ? (((x = E.nodes_added) == null ? void 0 : x.length) ?? 0) > 0 || (((w = E.nodes_removed) == null ? void 0 : w.length) ?? 0) > 0 || E.workflow_changes || E.has_other_changes : !1;
    }), a = B(() => {
      var E, k, x, w, C, R;
      return !h.value && !m.value && ((k = (E = u.status) == null ? void 0 : E.comparison) == null ? void 0 : k.is_synced) && (((x = u.status) == null ? void 0 : x.missing_models_count) ?? 0) === 0 && (((R = (C = (w = u.status) == null ? void 0 : w.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : R.length) ?? 0) === 0;
    }), v = B(() => {
      var k, x;
      const E = (x = (k = u.status) == null ? void 0 : k.git_changes) == null ? void 0 : x.workflow_changes;
      return E ? typeof E == "number" ? E : Object.keys(E).length : 0;
    });
    function _(E) {
      return typeof E == "string" ? E : E.name;
    }
    function d(E) {
      return typeof E == "object" && E.is_development === !0;
    }
    return (E, k) => {
      var x, w, C, R, F, T, L, j, z, N, O, M, S, V, K, oe, q, ee, H, U, b, ae;
      return o(), I(Se, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[6] || (k[6] = (J) => E.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[5] || (k[5] = we(() => {
            }, ["stop"]))
          }, [
            e("div", cs, [
              k[7] || (k[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (J) => E.$emit("close"))
              }, "✕")
            ]),
            e("div", us, [
              e("div", ms, [
                f(Te, { level: "4" }, {
                  default: i(() => [...k[8] || (k[8] = [
                    p("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(pe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), s("div", vs, [
                e("div", fs, [
                  f(Te, { level: "4" }, {
                    default: i(() => [...k[9] || (k[9] = [
                      p("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[1] || (k[1] = (J) => E.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", gs, [
                  e("div", hs, [
                    k[10] || (k[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ps, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", ys, [
                    (o(!0), s(A, null, se(r.value, (J) => (o(), s("div", {
                      key: J.name,
                      class: "workflow-item"
                    }, [
                      e("span", ws, l(J.name), 1),
                      e("span", ks, l(J.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (o(), s("div", bs, [
                  e("div", _s, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", $s, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", Cs, [
                    (o(!0), s(A, null, se(g.value, (J) => (o(), s("div", {
                      key: J.name,
                      class: "workflow-item"
                    }, [
                      e("span", xs, l(J.name), 1),
                      e("span", Ss, l(J.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (w = (x = t.status.workflows) == null ? void 0 : x.new) != null && w.length ? (o(), s("div", Is, [
                  e("div", Es, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ms, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", zs, [
                    (o(!0), s(A, null, se(t.status.workflows.new, (J) => (o(), s("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", Ls, l(J), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = (C = t.status.workflows) == null ? void 0 : C.modified) != null && R.length ? (o(), s("div", Ts, [
                  e("div", Ns, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Rs, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ds, [
                    (o(!0), s(A, null, se(t.status.workflows.modified, (J) => (o(), s("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", Os, l(J), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (F = t.status.workflows) == null ? void 0 : F.deleted) != null && T.length ? (o(), s("div", Us, [
                  e("div", Ps, [
                    k[14] || (k[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Bs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Fs, [
                    (o(!0), s(A, null, se(t.status.workflows.deleted, (J) => (o(), s("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, l(J), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (o(), s("div", As, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[2] || (k[2] = (J) => n.value = !n.value)
                  }, [
                    k[15] || (k[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Ws, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Gs, l(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", js, [
                    (o(!0), s(A, null, se(y.value, (J) => (o(), s("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", Hs, l(J), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), s("div", qs, [
                f(Te, { level: "4" }, {
                  default: i(() => [...k[16] || (k[16] = [
                    p("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (j = (L = t.status.git_changes) == null ? void 0 : L.nodes_added) != null && j.length ? (o(), s("div", Ks, [
                  e("div", Js, [
                    k[17] || (k[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Qs, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Xs, [
                    (o(!0), s(A, null, se(t.status.git_changes.nodes_added, (J) => (o(), s("div", {
                      key: _(J),
                      class: "change-item"
                    }, [
                      e("span", Ys, l(_(J)), 1),
                      d(J) ? (o(), s("span", Zs, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (N = (z = t.status.git_changes) == null ? void 0 : z.nodes_removed) != null && N.length ? (o(), s("div", en, [
                  e("div", tn, [
                    k[18] || (k[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", on, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", sn, [
                    (o(!0), s(A, null, se(t.status.git_changes.nodes_removed, (J) => (o(), s("div", {
                      key: _(J),
                      class: "change-item"
                    }, [
                      e("span", nn, l(_(J)), 1),
                      d(J) ? (o(), s("span", an, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (O = t.status.git_changes) != null && O.workflow_changes ? (o(), s("div", ln, [
                  k[19] || (k[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", rn, [
                    e("div", dn, [
                      e("span", cn, l(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (o(), s("div", un, [...k[20] || (k[20] = [
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
              (S = t.status.comparison) != null && S.is_synced ? c("", !0) : (o(), s("div", mn, [
                e("div", vn, [
                  f(Te, { level: "4" }, {
                    default: i(() => [...k[21] || (k[21] = [
                      p("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[3] || (k[3] = (J) => E.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                k[22] || (k[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (K = (V = t.status.comparison) == null ? void 0 : V.missing_nodes) != null && K.length ? (o(), s("div", fn, [
                  f(pe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", gn, [
                    (o(!0), s(A, null, se(t.status.comparison.missing_nodes.slice(0, 10), (J) => (o(), s("div", {
                      key: J,
                      class: "drift-list-item"
                    }, " - " + l(J), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", hn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (q = (oe = t.status.comparison) == null ? void 0 : oe.extra_nodes) != null && q.length ? (o(), s("div", pn, [
                  f(pe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", yn, [
                    (o(!0), s(A, null, se(t.status.comparison.extra_nodes.slice(0, 10), (J) => (o(), s("div", {
                      key: J,
                      class: "drift-list-item"
                    }, " - " + l(J), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", wn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (H = (ee = t.status.comparison) == null ? void 0 : ee.version_mismatches) != null && H.length ? (o(), s("div", kn, [
                  f(pe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (U = t.status.comparison) != null && U.packages_in_sync ? c("", !0) : (o(), s("div", bn, [
                  f(pe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (b = t.status.comparison) == null ? void 0 : b.disabled_nodes) != null && ae.length ? (o(), s("div", _n, [
                f(Te, { level: "4" }, {
                  default: i(() => [...k[23] || (k[23] = [
                    p("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", $n, [
                  k[24] || (k[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Cn, [
                  (o(!0), s(A, null, se(t.status.comparison.disabled_nodes.slice(0, 10), (J) => (o(), s("div", {
                    key: J,
                    class: "drift-list-item"
                  }, " • " + l(J), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", xn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Sn, [
                f(Te, { level: "4" }, {
                  default: i(() => [...k[25] || (k[25] = [
                    p("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", In, [
                  k[26] || (k[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[27] || (k[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              a.value ? (o(), s("div", En, [...k[28] || (k[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Mn, [
              f(te, {
                variant: "secondary",
                onClick: k[4] || (k[4] = (J) => E.$emit("close"))
              }, {
                default: i(() => [...k[29] || (k[29] = [
                  p(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Ln = /* @__PURE__ */ Z(zn, [["__scopeId", "data-v-c67eed17"]]), Tn = { class: "health-section-header" }, Nn = { class: "suggestions-content" }, Rn = { class: "suggestions-text" }, Dn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, On = /* @__PURE__ */ Y({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: u }) {
    const n = t, r = $(!1), g = $(!1);
    function y() {
      r.value = !0;
    }
    function h() {
      r.value = !1, a("view-workflows");
    }
    function m() {
      r.value = !1, a("view-nodes");
    }
    const a = u, v = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), _ = B(() => n.status.has_changes), d = B(() => {
      const z = n.status.git_changes;
      return z.nodes_added.length > 0 || z.nodes_removed.length > 0 || z.workflow_changes;
    }), E = B(() => n.status.has_changes || v.value), k = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), x = B(() => n.status.git_changes.has_other_changes), w = B(() => {
      var z;
      return ((z = n.status.workflows.analyzed) == null ? void 0 : z.filter((N) => N.status === "broken")) || [];
    }), C = B(() => {
      var z;
      return ((z = n.status.workflows.analyzed) == null ? void 0 : z.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), R = B(() => w.value.length > 0), F = B(() => R.value || C.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), T = B(() => {
      const z = [];
      return n.status.workflows.new.length > 0 && z.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && z.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && z.push(`${n.status.workflows.deleted.length} deleted`), z.length > 0 ? `${z.join(", ")} workflow${z.length === 1 && !z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), L = B(() => {
      var O, M;
      const z = [], N = n.status.comparison;
      return (O = N.missing_nodes) != null && O.length && z.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (M = N.extra_nodes) != null && M.length && z.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${z.join(" and ")}.`;
    }), j = B(() => {
      var O, M;
      const z = [], N = n.status.comparison;
      return (O = N.extra_nodes) != null && O.length && (N.extra_nodes.slice(0, 3).forEach((S) => {
        z.push(`Untracked: ${S}`);
      }), N.extra_nodes.length > 3 && z.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (M = N.missing_nodes) != null && M.length && (N.missing_nodes.slice(0, 3).forEach((S) => {
        z.push(`Missing: ${S}`);
      }), N.missing_nodes.length > 3 && z.push(`...and ${N.missing_nodes.length - 3} more missing`)), z;
    });
    return (z, N) => (o(), s(A, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[1] || (N[1] = (O) => g.value = !0),
            onMouseleave: N[2] || (N[2] = (O) => g.value = !1)
          }, [
            e("div", Tn, [
              f(Te, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...N[9] || (N[9] = [
                  p(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(ao, { name: "fade" }, {
                default: i(() => [
                  g.value ? (o(), I(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: i(() => [...N[10] || (N[10] = [
                      p(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            f(Fo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Ut({
              left: i(() => [
                t.status.workflows.new.length ? (o(), I(Fe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), I(Fe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), I(Fe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                f(Fe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: v.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (o(), I(Fe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), I(Fe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), I(Fe, {
                  key: 2,
                  icon: "●",
                  count: k.value,
                  label: k.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                x.value ? (o(), I(Fe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                _.value && !d.value && !x.value ? (o(), I(Fe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                _.value ? c("", !0) : (o(), I(Fe, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              E.value ? {
                name: "footer",
                fn: i(() => [
                  N[12] || (N[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Nn, [
                    e("span", Rn, l(T.value), 1),
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[0] || (N[0] = (O) => z.$emit("commit-changes"))
                    }, {
                      default: i(() => [...N[11] || (N[11] = [
                        p(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (o(), I(at, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              f(te, {
                variant: "primary",
                size: "sm",
                onClick: N[3] || (N[3] = (O) => z.$emit("create-branch"))
              }, {
                default: i(() => [...N[13] || (N[13] = [
                  p(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          F.value ? (o(), s("div", Dn, [
            f(Te, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...N[14] || (N[14] = [
                p(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            w.value.length > 0 ? (o(), I(at, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: w.value.map((O) => `${O.name} — ${O.issue_summary}`)
            }, {
              actions: i(() => [
                f(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[4] || (N[4] = (O) => z.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[15] || (N[15] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            C.value.length > 0 ? (o(), I(at, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${C.value.length} workflow${C.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: C.value.map((O) => `${O.name} — ${O.models_needing_path_sync_count} model path${O.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                f(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[5] || (N[5] = (O) => z.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[16] || (N[16] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !R.value ? (o(), I(at, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                f(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[6] || (N[6] = (O) => z.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[17] || (N[17] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), I(at, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: L.value,
              items: j.value
            }, {
              actions: i(() => [
                f(te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y
                }, {
                  default: i(() => [...N[18] || (N[18] = [
                    p(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                f(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[7] || (N[7] = (O) => z.$emit("view-nodes"))
                }, {
                  default: i(() => [...N[19] || (N[19] = [
                    p(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !F.value && !E.value ? (o(), I(Be, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      f(Ln, {
        show: r.value,
        status: t.status,
        onClose: N[8] || (N[8] = (O) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Un = /* @__PURE__ */ Z(On, [["__scopeId", "data-v-698b3f43"]]), Pn = ["type", "value", "placeholder", "disabled"], Bn = /* @__PURE__ */ Y({
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
    const r = t, g = n, y = $(null);
    function h(m) {
      const a = m.target.value;
      g("update:modelValue", a);
    }
    return be(() => {
      r.autoFocus && y.value && y.value.focus();
    }), u({
      focus: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.blur();
      }
    }), (m, a) => (o(), s("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ne(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        a[0] || (a[0] = je((v) => m.$emit("enter"), ["enter"])),
        a[1] || (a[1] = je((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: a[2] || (a[2] = (v) => m.$emit("focus")),
      onBlur: a[3] || (a[3] = (v) => m.$emit("blur"))
    }, null, 42, Pn));
  }
}), xt = /* @__PURE__ */ Z(Bn, [["__scopeId", "data-v-0380d08f"]]), Fn = { class: "branch-create-form" }, Vn = { class: "form-actions" }, An = /* @__PURE__ */ Y({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, r = $(""), g = B(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function y() {
      g.value && (n("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", n("cancel");
    }
    return (m, a) => (o(), s("div", Fn, [
      f(xt, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (v) => r.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Vn, [
        f(te, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: y
        }, {
          default: i(() => [...a[1] || (a[1] = [
            p(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(te, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: i(() => [...a[2] || (a[2] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Wn = /* @__PURE__ */ Z(An, [["__scopeId", "data-v-7c500394"]]), Gn = { class: "branch-list-item__indicator" }, jn = { class: "branch-list-item__name" }, Hn = {
  key: 0,
  class: "branch-list-item__actions"
}, qn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Kn = /* @__PURE__ */ Y({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: ne(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, [
      e("span", Gn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", jn, l(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (o(), s("div", Hn, [
        de(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", qn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Jn = /* @__PURE__ */ Z(Kn, [["__scopeId", "data-v-c6581a24"]]), Qn = {
  key: 2,
  class: "branch-list"
}, Xn = /* @__PURE__ */ Y({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: u }) {
    const n = u, r = $(!1);
    function g(h) {
      n("create", h), y();
    }
    function y() {
      r.value = !1;
    }
    return (h, m) => (o(), I(Ee, null, {
      header: i(() => [
        f(Me, { title: "BRANCHES" }, {
          actions: i(() => [
            f(te, {
              variant: "ghost",
              size: "sm",
              onClick: m[0] || (m[0] = (a) => r.value = !0),
              title: "Create new branch"
            }, {
              default: i(() => [...m[1] || (m[1] = [
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
      content: i(() => [
        r.value ? (o(), I(Wn, {
          key: 0,
          onCreate: g,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), I(Be, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", Qn, [
          (o(!0), s(A, null, se(t.branches, (a) => (o(), I(Jn, {
            key: a.name,
            "branch-name": a.name,
            "is-current": a.is_current
          }, {
            actions: i(() => [
              a.is_current ? c("", !0) : (o(), I(te, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (v) => h.$emit("switch", a.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  p(" Switch ", -1)
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
}), Yn = /* @__PURE__ */ Z(Xn, [["__scopeId", "data-v-763d6ec4"]]), Zn = { class: "commit-list" }, ea = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (o(), s("div", Zn, [
      de(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ta = /* @__PURE__ */ Z(ea, [["__scopeId", "data-v-8c5ee761"]]), oa = { class: "commit-hash" }, sa = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = B(() => u.hash.slice(0, u.length));
    return (r, g) => (o(), s("span", oa, l(n.value), 1));
  }
}), Jt = /* @__PURE__ */ Z(sa, [["__scopeId", "data-v-7c333cc6"]]), na = { class: "commit-message" }, aa = { class: "commit-date" }, la = /* @__PURE__ */ Y({
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
    function g() {
      n.clickable && r("click");
    }
    return (y, h) => (o(), s("div", {
      class: ne(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      f(Jt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", na, l(t.message), 1),
      e("span", aa, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = we(() => {
        }, ["stop"]))
      }, [
        de(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ia = /* @__PURE__ */ Z(la, [["__scopeId", "data-v-dd7c621b"]]), ra = /* @__PURE__ */ Y({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (o(), I(Ee, null, {
      header: i(() => [
        f(Me, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), I(Be, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), I(ta, { key: 1 }, {
          default: i(() => [
            (o(!0), s(A, null, se(t.commits, (r) => (o(), I(ia, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (g) => u.$emit("select", r)
            }, {
              actions: i(() => [
                f(te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => u.$emit("checkout", r),
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
}), da = /* @__PURE__ */ Z(ra, [["__scopeId", "data-v-981c3c64"]]), R1 = [
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
  ...Array(12).fill(null).map((t, u) => ({
    name: `synced-workflow-${u + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + u,
    model_count: 1 + u % 3,
    sync_state: "synced"
  }))
], D1 = {
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
}, ca = [
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
], O1 = [
  ...ca,
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
function pt() {
  return !1;
}
function Ie() {
  const t = $(!1), u = $(null);
  async function n(Q, ie) {
    var $e;
    if (!(($e = window.app) != null && $e.api))
      throw new Error("ComfyUI API not available");
    const ge = await window.app.api.fetchApi(Q, ie);
    if (!ge.ok) {
      const ot = await ge.json().catch(() => ({}));
      throw new Error(ot.error || ot.message || `Request failed: ${ge.status}`);
    }
    return ge.json();
  }
  async function r(Q = !1) {
    return n(Q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(Q, ie = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Q, allow_issues: ie })
    });
  }
  async function y(Q = 10, ie = 0) {
    return n(`/v2/comfygit/log?limit=${Q}&offset=${ie}`);
  }
  async function h(Q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Q })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function a(Q) {
    return n(`/v2/comfygit/commit/${Q}`);
  }
  async function v(Q, ie = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Q, force: ie })
    });
  }
  async function _(Q, ie = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, start_point: ie })
    });
  }
  async function d(Q, ie = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Q, force: ie })
    });
  }
  async function E() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Q = await r();
        return [{
          name: Q.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + Q.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: Q.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: Q.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function k(Q) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: Q })
    });
  }
  async function x() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function w(Q, ie, ge) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, pytorch_backend: ie, clone_from: ge })
    });
  }
  async function C(Q) {
    return n(`/v2/workspace/environments/${Q}`, {
      method: "DELETE"
    });
  }
  async function R(Q = !1) {
    try {
      return n(Q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ie = await r(Q), ge = [];
      return ie.workflows.new.forEach(($e) => {
        ge.push({ name: $e, status: "new", missing_nodes: 0, missing_models: 0, path: $e });
      }), ie.workflows.modified.forEach(($e) => {
        ge.push({ name: $e, status: "modified", missing_nodes: 0, missing_models: 0, path: $e });
      }), ie.workflows.synced.forEach(($e) => {
        ge.push({ name: $e, status: "synced", missing_nodes: 0, missing_models: 0, path: $e });
      }), ge;
    }
  }
  async function F(Q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/details`);
  }
  async function T(Q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/resolve`, {
      method: "POST"
    });
  }
  async function L(Q, ie, ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ie, install_models: ge })
    });
  }
  async function j(Q, ie, ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ie, importance: ge })
    });
  }
  async function z() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function N() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function O(Q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(Q)}`);
  }
  async function M(Q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function S(Q, ie) {
    return n(`/v2/workspace/models/${Q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function V(Q, ie) {
    return n(`/v2/workspace/models/${Q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function K(Q) {
    return n(`/v2/workspace/models/${Q}`, {
      method: "DELETE"
    });
  }
  async function oe(Q) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function q() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ee() {
    return n("/v2/workspace/models/directory");
  }
  async function H(Q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function U() {
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
  async function b(Q) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function ae(Q, ie) {
    try {
      const ge = new URLSearchParams();
      return Q && ge.append("level", Q), ie && ge.append("lines", ie.toString()), n(`/v2/comfygit/debug/logs?${ge}`);
    } catch {
      return [];
    }
  }
  async function J(Q, ie) {
    try {
      const ge = new URLSearchParams();
      return Q && ge.append("level", Q), ie && ge.append("lines", ie.toString()), n(`/v2/workspace/debug/logs?${ge}`);
    } catch {
      return [];
    }
  }
  async function _e() {
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
  async function he(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/track-dev`, {
      method: "POST"
    });
  }
  async function Re(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/install`, {
      method: "POST"
    });
  }
  async function mt(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/update`, {
      method: "POST"
    });
  }
  async function fe(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function Ne() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function vt(Q, ie) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, url: ie })
    });
  }
  async function Qe(Q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function ze(Q, ie, ge) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ie, push_url: ge })
    });
  }
  async function ft(Q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/fetch`, {
      method: "POST"
    });
  }
  async function tt(Q) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/status`);
    } catch {
      return null;
    }
  }
  async function gt(Q = "skip", ie = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Q,
        remove_extra_nodes: ie
      })
    });
  }
  return {
    isLoading: t,
    error: u,
    getStatus: r,
    commit: g,
    getHistory: y,
    exportEnv: h,
    // Git Operations
    getBranches: m,
    getCommitDetail: a,
    checkout: v,
    createBranch: _,
    switchBranch: d,
    // Environment Management
    getEnvironments: E,
    switchEnvironment: k,
    getSwitchProgress: x,
    createEnvironment: w,
    deleteEnvironment: C,
    // Workflow Management
    getWorkflows: R,
    getWorkflowDetails: F,
    resolveWorkflow: T,
    installWorkflowDeps: L,
    setModelImportance: j,
    // Model Management
    getEnvironmentModels: z,
    getWorkspaceModels: N,
    getModelDetails: O,
    openFileLocation: M,
    addModelSource: S,
    removeModelSource: V,
    deleteModel: K,
    downloadModel: oe,
    scanWorkspaceModels: q,
    getModelsDirectory: ee,
    setModelsDirectory: H,
    // Settings
    getConfig: U,
    updateConfig: b,
    // Debug/Logs
    getEnvironmentLogs: ae,
    getWorkspaceLogs: J,
    // Node Management
    getNodes: _e,
    trackNodeAsDev: he,
    installNode: Re,
    updateNode: mt,
    uninstallNode: fe,
    // Git Remotes
    getRemotes: Ne,
    addRemote: vt,
    removeRemote: Qe,
    updateRemoteUrl: ze,
    fetchRemote: ft,
    getRemoteSyncStatus: tt,
    // Environment Sync
    syncEnvironmentManually: gt
  };
}
async function yt(t, u = {}, n = 5e3) {
  const r = new AbortController(), g = setTimeout(() => r.abort(), n);
  try {
    const y = await fetch(t, {
      ...u,
      signal: r.signal
    });
    return clearTimeout(g), y;
  } catch (y) {
    throw clearTimeout(g), y.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : y;
  }
}
function Qt() {
  const t = $(null);
  async function u() {
    try {
      const h = await yt(
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
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const h = await yt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Health check failed");
      return await h.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const h = await yt(
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
  async function g() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await yt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await yt(
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
    restart: g,
    kill: y
  };
}
const ua = { class: "base-modal-header" }, ma = {
  key: 0,
  class: "base-modal-title"
}, va = { class: "base-modal-body" }, fa = {
  key: 0,
  class: "base-modal-loading"
}, ga = {
  key: 1,
  class: "base-modal-error"
}, ha = {
  key: 0,
  class: "base-modal-footer"
}, pa = /* @__PURE__ */ Y({
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
    function g() {
      n.closeOnOverlayClick && r("close");
    }
    function y(h) {
      h.key === "Escape" && r("close");
    }
    return be(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), lo(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (h, m) => (o(), I(Se, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: ne(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = we(() => {
          }, ["stop"]))
        }, [
          e("div", ua, [
            de(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", ma, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (a) => h.$emit("close"))
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
          e("div", va, [
            t.loading ? (o(), s("div", fa, "Loading...")) : t.error ? (o(), s("div", ga, l(t.error), 1)) : de(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", ha, [
            de(h.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), dt = /* @__PURE__ */ Z(pa, [["__scopeId", "data-v-2125a0e6"]]), ya = ["type", "disabled"], wa = {
  key: 0,
  class: "spinner"
}, ka = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", wa)) : c("", !0),
      de(u.$slots, "default", {}, void 0, !0)
    ], 10, ya));
  }
}), le = /* @__PURE__ */ Z(ka, [["__scopeId", "data-v-f3452606"]]), ba = {
  key: 0,
  class: "base-title-count"
}, _a = /* @__PURE__ */ Y({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (o(), I(Dt(`h${t.level}`), {
      class: ne(["base-title", t.variant])
    }, {
      default: i(() => [
        de(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", ba, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _t = /* @__PURE__ */ Z(_a, [["__scopeId", "data-v-5a01561d"]]), $a = ["value", "disabled"], Ca = {
  key: 0,
  value: "",
  disabled: ""
}, xa = ["value"], Sa = {
  key: 0,
  class: "base-select-error"
}, Ia = /* @__PURE__ */ Y({
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
    return (r, g) => (o(), s("div", {
      class: ne(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ne(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (y) => r.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), s("option", Ca, l(t.placeholder), 1)) : c("", !0),
        (o(!0), s(A, null, se(t.options, (y) => (o(), s("option", {
          key: u(y),
          value: u(y)
        }, l(n(y)), 9, xa))), 128))
      ], 42, $a),
      t.error ? (o(), s("span", Sa, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ea = /* @__PURE__ */ Z(Ia, [["__scopeId", "data-v-7436d745"]]), Ma = { class: "popover-header" }, za = { class: "popover-title" }, La = { class: "popover-content" }, Ta = {
  key: 0,
  class: "popover-actions"
}, Na = /* @__PURE__ */ Y({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (o(), I(Se, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: He({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = we(() => {
          }, ["stop"]))
        }, [
          e("div", Ma, [
            e("h4", za, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", La, [
            de(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (o(), s("div", Ta, [
            de(u.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), qe = /* @__PURE__ */ Z(Na, [["__scopeId", "data-v-42815ace"]]), Ra = { class: "detail-section" }, Da = {
  key: 0,
  class: "empty-message"
}, Oa = { class: "model-header" }, Ua = { class: "model-name" }, Pa = { class: "model-details" }, Ba = { class: "model-row" }, Fa = { class: "model-row" }, Va = { class: "label" }, Aa = {
  key: 0,
  class: "model-row model-row-nodes"
}, Wa = { class: "node-list" }, Ga = ["onClick"], ja = {
  key: 1,
  class: "model-row"
}, Ha = { class: "value" }, qa = {
  key: 0,
  class: "model-actions"
}, Ka = { class: "detail-section" }, Ja = {
  key: 0,
  class: "empty-message"
}, Qa = { class: "node-name" }, Xa = {
  key: 0,
  class: "node-version"
}, Ya = /* @__PURE__ */ Y({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: g, setModelImportance: y, installWorkflowDeps: h } = Ie(), m = $(null), a = $(!1), v = $(null), _ = $(!1), d = $({}), E = $({}), k = $(!1), x = $(/* @__PURE__ */ new Set()), w = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(M) {
      switch (M) {
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
    function R(M) {
      switch (M) {
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
    function F(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const S = M.hash || M.filename;
      return x.value.has(S) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function T(M) {
      return x.value.has(M);
    }
    function L(M) {
      x.value.has(M) ? x.value.delete(M) : x.value.add(M), x.value = new Set(x.value);
    }
    async function j() {
      a.value = !0, v.value = null;
      try {
        m.value = await g(n.workflowName);
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        a.value = !1;
      }
    }
    function z(M, S) {
      d.value[M] = S, _.value = !0;
    }
    async function N() {
      if (!_.value) {
        r("close");
        return;
      }
      a.value = !0, v.value = null;
      try {
        for (const [M, S] of Object.entries(d.value))
          await y(n.workflowName, M, S);
        r("refresh"), r("close");
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        a.value = !1;
      }
    }
    async function O(M) {
      E.value[M] = !0, v.value = null;
      try {
        await h(n.workflowName, !0, !1), await j();
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to install node";
      } finally {
        E.value[M] = !1;
      }
    }
    return be(j), (M, S) => (o(), s(A, null, [
      f(dt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: a.value,
        error: v.value || void 0,
        onClose: S[5] || (S[5] = (V) => r("close"))
      }, {
        body: i(() => [
          m.value ? (o(), s(A, { key: 0 }, [
            e("section", Ra, [
              f(_t, { variant: "section" }, {
                default: i(() => [
                  p("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), s("div", Da, " No models used in this workflow ")) : c("", !0),
              (o(!0), s(A, null, se(m.value.models, (V) => (o(), s("div", {
                key: V.hash || V.filename,
                class: "model-card"
              }, [
                e("div", Oa, [
                  S[7] || (S[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Ua, l(V.filename), 1)
                ]),
                e("div", Pa, [
                  e("div", Ba, [
                    S[8] || (S[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ne(["value", C(V.status)])
                    }, l(R(V.status)), 3)
                  ]),
                  e("div", Fa, [
                    e("span", Va, [
                      S[9] || (S[9] = p(" Importance: ", -1)),
                      f(Kt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: S[0] || (S[0] = (K) => k.value = !0)
                      })
                    ]),
                    f(Ea, {
                      "model-value": d.value[V.filename] || V.importance,
                      options: w,
                      "onUpdate:modelValue": (K) => z(V.filename, K)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  V.loaded_by && V.loaded_by.length > 0 ? (o(), s("div", Aa, [
                    S[10] || (S[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Wa, [
                      (o(!0), s(A, null, se(F(V), (K, oe) => (o(), s("div", {
                        key: `${K.node_id}-${oe}`,
                        class: "node-reference"
                      }, l(K.node_type) + " (Node #" + l(K.node_id) + ") ", 1))), 128)),
                      V.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (K) => L(V.hash || V.filename)
                      }, l(T(V.hash || V.filename) ? "▼ Show less" : `▶ View all (${V.loaded_by.length})`), 9, Ga)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  V.size_mb ? (o(), s("div", ja, [
                    S[11] || (S[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Ha, l(V.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                V.status !== "available" ? (o(), s("div", qa, [
                  V.status === "downloadable" ? (o(), I(le, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: S[1] || (S[1] = (K) => r("resolve"))
                  }, {
                    default: i(() => [...S[12] || (S[12] = [
                      p(" Download ", -1)
                    ])]),
                    _: 1
                  })) : V.status === "path_mismatch" ? (o(), I(le, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[2] || (S[2] = (K) => r("resolve"))
                  }, {
                    default: i(() => [...S[13] || (S[13] = [
                      p(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), I(le, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[3] || (S[3] = (K) => r("resolve"))
                  }, {
                    default: i(() => [...S[14] || (S[14] = [
                      p(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Ka, [
              f(_t, { variant: "section" }, {
                default: i(() => [
                  p("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), s("div", Ja, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), s(A, null, se(m.value.nodes, (V) => (o(), s("div", {
                key: V.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ne(["node-status", V.status === "installed" ? "installed" : "missing"])
                }, l(V.status === "installed" ? "✓" : "✕"), 3),
                e("span", Qa, l(V.name), 1),
                V.version ? (o(), s("span", Xa, "v" + l(V.version), 1)) : c("", !0),
                V.status === "missing" ? (o(), I(le, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: E.value[V.name],
                  onClick: (K) => O(V.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...S[15] || (S[15] = [
                    p(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          f(le, {
            variant: "secondary",
            onClick: S[4] || (S[4] = (V) => r("close"))
          }, {
            default: i(() => [...S[16] || (S[16] = [
              p(" Close ", -1)
            ])]),
            _: 1
          }),
          _.value ? (o(), I(le, {
            key: 0,
            variant: "primary",
            onClick: N
          }, {
            default: i(() => [...S[17] || (S[17] = [
              p(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(qe, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: S[6] || (S[6] = (V) => k.value = !1)
      }, {
        content: i(() => [...S[18] || (S[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              p(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              p(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              p(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Za = /* @__PURE__ */ Z(Ya, [["__scopeId", "data-v-0b14d32e"]]), ve = qt({
  items: [],
  status: "idle"
});
let Ve = null;
function Xt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function zt(t) {
  return ve.items.find((u) => u.id === t);
}
async function lt() {
  if (ve.status === "downloading") return;
  const t = ve.items.find((u) => u.status === "queued");
  if (!t) {
    ve.status = "idle";
    return;
  }
  ve.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await el(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    ve.status = "idle", lt();
  }
}
async function el(t) {
  return new Promise((u, n) => {
    Ve && (Ve.close(), Ve = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ve = g;
    let y = Date.now(), h = 0, m = !1;
    g.onmessage = (a) => {
      try {
        const v = JSON.parse(a.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const _ = Date.now(), d = (_ - y) / 1e3;
            if (d > 0.5) {
              const E = t.downloaded - h;
              if (t.speed = E / d, y = _, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const k = t.size - t.downloaded;
                t.eta = k / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, g.close(), Ve = null, u();
            break;
          case "error":
            m = !0, g.close(), Ve = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), Ve = null, m || n(new Error("Connection lost"));
    };
  });
}
async function tl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (ve.items.some((g) => g.url === n.url && g.filename === n.filename))
        continue;
      const r = {
        id: Xt(),
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
      ve.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function St() {
  function t(C) {
    for (const R of C) {
      if (ve.items.some(
        (L) => L.url === R.url && L.targetPath === R.targetPath && ["queued", "downloading", "paused", "completed"].includes(L.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${R.filename}`);
        continue;
      }
      const T = {
        id: Xt(),
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
      ve.items.push(T);
    }
    ve.status === "idle" && lt();
  }
  async function u(C) {
    const R = zt(C);
    if (R) {
      if (R.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(R.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ve && (Ve.close(), Ve = null), R.status = "failed", R.error = "Cancelled by user", ve.status = "idle", lt();
      } else if (R.status === "queued") {
        const F = ve.items.findIndex((T) => T.id === C);
        F >= 0 && ve.items.splice(F, 1);
      }
    }
  }
  function n(C) {
    const R = zt(C);
    !R || R.status !== "failed" || (R.status = "queued", R.error = void 0, R.progress = 0, R.downloaded = 0, ve.status === "idle" && lt());
  }
  function r(C) {
    const R = zt(C);
    !R || R.status !== "paused" || (R.status = "queued", ve.status === "idle" && lt());
  }
  function g() {
    const C = ve.items.filter((R) => R.status === "paused");
    for (const R of C)
      R.status = "queued";
    ve.status === "idle" && lt();
  }
  function y(C) {
    const R = ve.items.findIndex((F) => F.id === C);
    R >= 0 && ["completed", "failed", "paused"].includes(ve.items[R].status) && ve.items.splice(R, 1);
  }
  function h() {
    ve.items = ve.items.filter((C) => C.status !== "completed");
  }
  function m() {
    ve.items = ve.items.filter((C) => C.status !== "failed");
  }
  const a = B(
    () => ve.items.find((C) => C.status === "downloading")
  ), v = B(
    () => ve.items.filter((C) => C.status === "queued")
  ), _ = B(
    () => ve.items.filter((C) => C.status === "completed")
  ), d = B(
    () => ve.items.filter((C) => C.status === "failed")
  ), E = B(
    () => ve.items.filter((C) => C.status === "paused")
  ), k = B(() => ve.items.length > 0), x = B(
    () => ve.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), w = B(
    () => ve.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: io(ve),
    // Computed
    currentDownload: a,
    queuedItems: v,
    completedItems: _,
    failedItems: d,
    pausedItems: E,
    hasItems: k,
    activeCount: x,
    hasPaused: w,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: g,
    removeItem: y,
    clearCompleted: h,
    clearFailed: m,
    loadPendingDownloads: tl
  };
}
function ol() {
  const t = $(null), u = $(null), n = $([]), r = $([]), g = $(!1), y = $(null);
  async function h(F, T) {
    var j;
    if (!((j = window.app) != null && j.api))
      throw new Error("ComfyUI API not available");
    const L = await window.app.api.fetchApi(F, T);
    if (!L.ok) {
      const z = await L.json().catch(() => ({})), N = z.error || z.message || `Request failed: ${L.status}`;
      throw new Error(N);
    }
    return L.json();
  }
  async function m(F) {
    g.value = !0, y.value = null;
    try {
      let T;
      return pt() || (T = await h(
        `/v2/comfygit/workflow/${F}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = T, T;
    } catch (T) {
      const L = T instanceof Error ? T.message : "Unknown error occurred";
      throw y.value = L, T;
    } finally {
      g.value = !1;
    }
  }
  async function a(F, T, L, j) {
    g.value = !0, y.value = null;
    try {
      let z;
      if (!pt()) {
        const N = Object.fromEntries(T), O = Object.fromEntries(L), M = j ? Array.from(j) : [];
        z = await h(
          `/v2/comfygit/workflow/${F}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: N,
              model_choices: O,
              skipped_packages: M
            })
          }
        );
      }
      return u.value = z, z;
    } catch (z) {
      const N = z instanceof Error ? z.message : "Unknown error occurred";
      throw y.value = N, z;
    } finally {
      g.value = !1;
    }
  }
  async function v(F, T = 10) {
    g.value = !0, y.value = null;
    try {
      let L;
      return pt() || (L = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: F, limit: T })
        }
      )), n.value = L.results, L.results;
    } catch (L) {
      const j = L instanceof Error ? L.message : "Unknown error occurred";
      throw y.value = j, L;
    } finally {
      g.value = !1;
    }
  }
  async function _(F, T = 10) {
    g.value = !0, y.value = null;
    try {
      let L;
      return pt() || (L = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: F, limit: T })
        }
      )), r.value = L.results, L.results;
    } catch (L) {
      const j = L instanceof Error ? L.message : "Unknown error occurred";
      throw y.value = j, L;
    } finally {
      g.value = !1;
    }
  }
  const d = qt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function E() {
    d.phase = "idle", d.currentFile = void 0, d.currentFileIndex = void 0, d.totalFiles = void 0, d.bytesDownloaded = void 0, d.bytesTotal = void 0, d.completedFiles = [], d.nodesToInstall = [], d.nodesInstalled = [], d.installError = void 0, d.needsRestart = void 0, d.error = void 0, d.nodeInstallProgress = void 0;
  }
  async function k(F) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0, d.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return pt(), await x(F);
    } catch (T) {
      const L = T instanceof Error ? T.message : "Failed to install nodes";
      throw d.installError = L, T;
    }
  }
  async function x(F) {
    var L;
    const T = await h(
      `/v2/comfygit/workflow/${F}/install`,
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
      const j = new Map(((L = T.failed) == null ? void 0 : L.map((z) => [z.node_id, z.error])) || []);
      for (let z = 0; z < d.nodesToInstall.length; z++) {
        const N = d.nodesToInstall[z], O = j.get(N);
        d.nodeInstallProgress.completedNodes.push({
          node_id: N,
          success: !O,
          error: O
        });
      }
    }
    return d.nodesInstalled = T.nodes_installed, d.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (d.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function w(F, T, L) {
    E(), d.phase = "resolving", y.value = null;
    const j = Object.fromEntries(T), z = Object.fromEntries(L);
    try {
      const N = await fetch(`/v2/comfygit/workflow/${F}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: j,
          model_choices: z
        })
      });
      if (!N.ok)
        throw new Error(`Request failed: ${N.status}`);
      if (!N.body)
        throw new Error("No response body");
      const O = N.body.getReader(), M = new TextDecoder();
      let S = "";
      for (; ; ) {
        const { done: V, value: K } = await O.read();
        if (V) break;
        S += M.decode(K, { stream: !0 });
        const oe = S.split(`

`);
        S = oe.pop() || "";
        for (const q of oe) {
          if (!q.trim()) continue;
          const ee = q.split(`
`);
          let H = "", U = "";
          for (const b of ee)
            b.startsWith("event: ") ? H = b.slice(7) : b.startsWith("data: ") && (U = b.slice(6));
          if (U)
            try {
              const b = JSON.parse(U);
              C(H, b);
            } catch (b) {
              console.warn("Failed to parse SSE event:", b);
            }
        }
      }
    } catch (N) {
      const O = N instanceof Error ? N.message : "Unknown error occurred";
      throw y.value = O, d.error = O, d.phase = "error", N;
    }
  }
  function C(F, T) {
    switch (F) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = T.total;
        break;
      case "file_start":
        d.currentFile = T.filename, d.currentFileIndex = T.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = T.downloaded, d.bytesTotal = T.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = T.nodes_to_install || [], T.download_results && (d.completedFiles = T.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = T.message, d.phase = "error", y.value = T.message;
        break;
    }
  }
  function R(F, T) {
    const { addToQueue: L } = St(), j = T.filter((z) => z.url && z.target_path).map((z) => ({
      workflow: F,
      filename: z.filename,
      url: z.url,
      targetPath: z.target_path,
      size: z.size || 0,
      type: "model"
    }));
    return j.length > 0 && L(j), j.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: r,
    isLoading: g,
    error: y,
    progress: d,
    // Methods
    analyzeWorkflow: m,
    applyResolution: a,
    applyResolutionWithProgress: w,
    installNodes: k,
    searchNodes: v,
    searchModels: _,
    resetProgress: E,
    queueModelDownloads: R
  };
}
const sl = { class: "resolution-stepper" }, nl = { class: "stepper-header" }, al = ["onClick"], ll = {
  key: 0,
  class: "step-icon"
}, il = {
  key: 1,
  class: "step-number"
}, rl = { class: "step-label" }, dl = {
  key: 0,
  class: "step-connector"
}, cl = { class: "stepper-content" }, ul = /* @__PURE__ */ Y({
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
    function g(v) {
      var _;
      if ((_ = n.stepStats) != null && _[v]) {
        const d = n.stepStats[v];
        return d.total > 0 && d.resolved === d.total;
      }
      return n.completedSteps.includes(v);
    }
    function y(v) {
      var _;
      if ((_ = n.stepStats) != null && _[v]) {
        const d = n.stepStats[v];
        return d.resolved > 0 && d.resolved < d.total;
      }
      return !1;
    }
    function h(v) {
      return g(v) ? "state-complete" : y(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function a(v) {
      r("step-change", v);
    }
    return (v, _) => (o(), s("div", sl, [
      e("div", nl, [
        (o(!0), s(A, null, se(t.steps, (d, E) => (o(), s("div", {
          key: d.id,
          class: ne(["step", {
            active: t.currentStep === d.id,
            completed: g(d.id),
            "in-progress": y(d.id),
            disabled: m(d.id)
          }]),
          onClick: (k) => a(d.id)
        }, [
          e("div", {
            class: ne(["step-indicator", h(d.id)])
          }, [
            g(d.id) ? (o(), s("span", ll, "✓")) : (o(), s("span", il, l(E + 1), 1))
          ], 2),
          e("div", rl, l(d.label), 1),
          E < t.steps.length - 1 ? (o(), s("div", dl)) : c("", !0)
        ], 10, al))), 128))
      ]),
      e("div", cl, [
        de(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ml = /* @__PURE__ */ Z(ul, [["__scopeId", "data-v-2a7b3af8"]]), vl = /* @__PURE__ */ Y({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = B(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = B(() => `confidence-${n.value}`), g = B(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (y, h) => (o(), s("span", {
      class: ne(["confidence-badge", r.value, t.size])
    }, l(g.value), 3));
  }
}), Ft = /* @__PURE__ */ Z(vl, [["__scopeId", "data-v-17ec4b80"]]), fl = { class: "node-info" }, gl = { class: "node-info-text" }, hl = { class: "item-body" }, pl = {
  key: 0,
  class: "resolved-state"
}, yl = {
  key: 1,
  class: "multiple-options"
}, wl = { class: "options-list" }, kl = ["onClick"], bl = ["name", "value", "checked", "onChange"], _l = { class: "option-content" }, $l = { class: "option-header" }, Cl = { class: "option-package-id" }, xl = {
  key: 0,
  class: "option-title"
}, Sl = { class: "option-meta" }, Il = {
  key: 0,
  class: "installed-badge"
}, El = { class: "action-buttons" }, Ml = {
  key: 2,
  class: "unresolved"
}, zl = { class: "action-buttons" }, Ll = /* @__PURE__ */ Y({
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
  setup(t, { emit: u }) {
    const n = t, r = u, g = B(() => !!n.choice);
    B(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.action;
    }), B(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.package_id;
    });
    const y = B(() => {
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
    function h(m) {
      r("option-selected", m);
    }
    return (m, a) => (o(), s("div", {
      class: ne(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", fl, [
        e("span", gl, [
          a[7] || (a[7] = p("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", hl, [
        g.value ? (o(), s("div", pl, [
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (v) => r("clear-choice"))
          }, {
            default: i(() => [...a[8] || (a[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", yl, [
          a[12] || (a[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", wl, [
            (o(!0), s(A, null, se(t.options, (v, _) => (o(), s("label", {
              key: v.package_id,
              class: ne(["option-card", { selected: t.selectedOptionIndex === _ }]),
              onClick: (d) => h(_)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: _,
                checked: t.selectedOptionIndex === _,
                onChange: (d) => h(_)
              }, null, 40, bl),
              e("div", _l, [
                e("div", $l, [
                  e("span", Cl, l(v.package_id), 1),
                  f(Ft, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (o(), s("div", xl, l(v.title), 1)) : c("", !0),
                e("div", Sl, [
                  v.is_installed ? (o(), s("span", Il, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, kl))), 128))
          ]),
          e("div", El, [
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: a[1] || (a[1] = (v) => r("search"))
            }, {
              default: i(() => [...a[9] || (a[9] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: a[2] || (a[2] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: a[3] || (a[3] = (v) => r("mark-optional"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Ml, [
          a[16] || (a[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", zl, [
            f(le, {
              variant: "primary",
              size: "sm",
              onClick: a[4] || (a[4] = (v) => r("search"))
            }, {
              default: i(() => [...a[13] || (a[13] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: a[5] || (a[5] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[14] || (a[14] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: a[6] || (a[6] = (v) => r("mark-optional"))
            }, {
              default: i(() => [...a[15] || (a[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Tl = /* @__PURE__ */ Z(Ll, [["__scopeId", "data-v-e02629e7"]]), Nl = { class: "item-navigator" }, Rl = { class: "nav-item-info" }, Dl = ["title"], Ol = { class: "nav-controls" }, Ul = { class: "nav-arrows" }, Pl = ["disabled"], Bl = ["disabled"], Fl = { class: "nav-position" }, Vl = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, g) => (o(), s("div", Nl, [
      e("div", Rl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Dl)
      ]),
      e("div", Ol, [
        e("div", Ul, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (y) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Pl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (y) => n("next")),
            title: "Next item"
          }, " → ", 8, Bl)
        ]),
        e("span", Fl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), Yt = /* @__PURE__ */ Z(Vl, [["__scopeId", "data-v-74af7920"]]), Al = ["type", "value", "placeholder", "disabled"], Wl = {
  key: 0,
  class: "base-input-error"
}, Gl = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), s("div", {
      class: ne(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ne(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = je((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = je((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Al),
      t.error ? (o(), s("span", Wl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Pe = /* @__PURE__ */ Z(Gl, [["__scopeId", "data-v-9ba02cdc"]]), jl = { class: "node-resolution-step" }, Hl = {
  key: 0,
  class: "auto-resolved-section"
}, ql = { class: "section-header" }, Kl = { class: "stat-badge" }, Jl = { class: "resolved-packages-list" }, Ql = { class: "package-info" }, Xl = { class: "package-id" }, Yl = { class: "node-count" }, Zl = { class: "package-actions" }, ei = {
  key: 0,
  class: "status-badge install"
}, ti = {
  key: 1,
  class: "status-badge skip"
}, oi = ["onClick"], si = {
  key: 1,
  class: "section-divider"
}, ni = { class: "step-header" }, ai = { class: "stat-badge" }, li = {
  key: 1,
  class: "step-body"
}, ii = {
  key: 3,
  class: "empty-state"
}, ri = { class: "node-search-modal" }, di = { class: "node-modal-body" }, ci = {
  key: 0,
  class: "node-search-results"
}, ui = ["onClick"], mi = { class: "node-result-header" }, vi = { class: "node-result-package-id" }, fi = {
  key: 0,
  class: "node-result-description"
}, gi = {
  key: 1,
  class: "node-no-results"
}, hi = {
  key: 2,
  class: "node-searching"
}, pi = { class: "node-manual-entry-modal" }, yi = { class: "node-modal-body" }, wi = { class: "node-modal-actions" }, ki = /* @__PURE__ */ Y({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = $(0), y = $(!1), h = $(!1), m = $(""), a = $(""), v = $([]), _ = $(!1), d = B(() => n.nodes[g.value]), E = B(() => n.nodes.filter((q) => n.nodeChoices.has(q.node_type)).length), k = B(() => n.autoResolvedPackages.filter((q) => !n.skippedPackages.has(q.package_id)).length);
    function x(q) {
      return n.skippedPackages.has(q);
    }
    function w(q) {
      r("package-skip", q);
    }
    const C = B(() => {
      var ee;
      if (!d.value) return "not-found";
      const q = n.nodeChoices.get(d.value.node_type);
      if (q)
        switch (q.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ee = d.value.options) != null && ee.length ? "ambiguous" : "not-found";
    }), R = B(() => {
      var ee;
      if (!d.value) return;
      const q = n.nodeChoices.get(d.value.node_type);
      if (q)
        switch (q.action) {
          case "install":
            return q.package_id ? `→ ${q.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ee = d.value.options) != null && ee.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function F(q) {
      q >= 0 && q < n.nodes.length && (g.value = q);
    }
    function T() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function L() {
      d.value && r("skip", d.value.node_type);
    }
    function j(q) {
      d.value && r("option-selected", d.value.node_type, q);
    }
    function z() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function N() {
      d.value && (m.value = d.value.node_type, y.value = !0);
    }
    function O() {
      a.value = "", h.value = !0;
    }
    function M() {
      y.value = !1, m.value = "", v.value = [];
    }
    function S() {
      h.value = !1, a.value = "";
    }
    function V() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function K(q) {
      d.value && (r("manual-entry", d.value.node_type, q.package_id), M());
    }
    function oe() {
      !d.value || !a.value.trim() || (r("manual-entry", d.value.node_type, a.value.trim()), S());
    }
    return (q, ee) => {
      var H, U;
      return o(), s("div", jl, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", Hl, [
          e("div", ql, [
            ee[4] || (ee[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Kl, l(k.value) + "/" + l(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Jl, [
            (o(!0), s(A, null, se(t.autoResolvedPackages, (b) => (o(), s("div", {
              key: b.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Ql, [
                e("code", Xl, l(b.package_id), 1),
                e("span", Yl, l(b.node_types_count) + " node type" + l(b.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Zl, [
                x(b.package_id) ? (o(), s("span", ti, " SKIPPED ")) : (o(), s("span", ei, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ae) => w(b.package_id)
                }, l(x(b.package_id) ? "Include" : "Skip"), 9, oi)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", si)) : c("", !0),
        t.nodes.length > 0 ? (o(), s(A, { key: 2 }, [
          e("div", ni, [
            ee[5] || (ee[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", ai, l(E.value) + "/" + l(t.nodes.length) + " resolved", 1)
          ]),
          d.value ? (o(), I(Yt, {
            key: 0,
            "item-name": d.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ee[0] || (ee[0] = (b) => F(g.value - 1)),
            onNext: ee[1] || (ee[1] = (b) => F(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          d.value ? (o(), s("div", li, [
            f(Tl, {
              "node-type": d.value.node_type,
              "has-multiple-options": !!((H = d.value.options) != null && H.length),
              options: d.value.options,
              choice: (U = t.nodeChoices) == null ? void 0 : U.get(d.value.node_type),
              status: C.value,
              "status-label": R.value,
              onMarkOptional: T,
              onSkip: L,
              onManualEntry: O,
              onSearch: N,
              onOptionSelected: j,
              onClearChoice: z
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", ii, [...ee[6] || (ee[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (o(), I(Se, { to: "body" }, [
          y.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: we(M, ["self"])
          }, [
            e("div", ri, [
              e("div", { class: "node-modal-header" }, [
                ee[7] || (ee[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", di, [
                f(Pe, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ee[2] || (ee[2] = (b) => m.value = b),
                  placeholder: "Search by node type, package name...",
                  onInput: V
                }, null, 8, ["modelValue"]),
                v.value.length > 0 ? (o(), s("div", ci, [
                  (o(!0), s(A, null, se(v.value, (b) => (o(), s("div", {
                    key: b.package_id,
                    class: "node-search-result-item",
                    onClick: (ae) => K(b)
                  }, [
                    e("div", mi, [
                      e("code", vi, l(b.package_id), 1),
                      b.match_confidence ? (o(), I(Ft, {
                        key: 0,
                        confidence: b.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    b.description ? (o(), s("div", fi, l(b.description), 1)) : c("", !0)
                  ], 8, ui))), 128))
                ])) : m.value && !_.value ? (o(), s("div", gi, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                _.value ? (o(), s("div", hi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), I(Se, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: we(S, ["self"])
          }, [
            e("div", pi, [
              e("div", { class: "node-modal-header" }, [
                ee[8] || (ee[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", yi, [
                f(Pe, {
                  modelValue: a.value,
                  "onUpdate:modelValue": ee[3] || (ee[3] = (b) => a.value = b),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", wi, [
                  f(le, {
                    variant: "secondary",
                    onClick: S
                  }, {
                    default: i(() => [...ee[9] || (ee[9] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(le, {
                    variant: "primary",
                    disabled: !a.value.trim(),
                    onClick: oe
                  }, {
                    default: i(() => [...ee[10] || (ee[10] = [
                      p(" Add Package ", -1)
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
}), bi = /* @__PURE__ */ Z(ki, [["__scopeId", "data-v-6474069a"]]), _i = { class: "node-info" }, $i = { class: "node-info-text" }, Ci = { class: "item-body" }, xi = {
  key: 0,
  class: "resolved-state"
}, Si = {
  key: 1,
  class: "multiple-options"
}, Ii = { class: "options-list" }, Ei = ["onClick"], Mi = ["name", "value", "checked", "onChange"], zi = { class: "option-content" }, Li = { class: "option-header" }, Ti = { class: "option-filename" }, Ni = { class: "option-meta" }, Ri = { class: "option-size" }, Di = { class: "option-category" }, Oi = { class: "option-path" }, Ui = { class: "action-buttons" }, Pi = {
  key: 2,
  class: "unresolved"
}, Bi = { class: "action-buttons" }, Fi = /* @__PURE__ */ Y({
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
    const n = t, r = u, g = B(() => !!n.choice);
    B(() => {
      var a;
      return (a = n.choice) == null ? void 0 : a.action;
    }), B(() => {
      var a, v;
      return ((v = (a = n.choice) == null ? void 0 : a.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const y = B(() => {
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
    function m(a) {
      if (!a) return "Unknown";
      const v = a / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(a / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (a, v) => (o(), s("div", {
      class: ne(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", _i, [
        e("span", $i, [
          v[7] || (v[7] = p("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Ci, [
        g.value ? (o(), s("div", xi, [
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (_) => r("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Si, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Ii, [
            (o(!0), s(A, null, se(t.options, (_, d) => (o(), s("label", {
              key: _.model.hash,
              class: ne(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (E) => h(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (E) => h(d)
              }, null, 40, Mi),
              e("div", zi, [
                e("div", Li, [
                  e("span", Ti, l(_.model.filename), 1),
                  f(Ft, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Ni, [
                  e("span", Ri, l(m(_.model.size)), 1),
                  e("span", Di, l(_.model.category), 1)
                ]),
                e("div", Oi, l(_.model.relative_path), 1)
              ])
            ], 10, Ei))), 128))
          ]),
          e("div", Ui, [
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (_) => r("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (_) => r("download-url"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (_) => r("mark-optional"))
            }, {
              default: i(() => [...v[11] || (v[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Pi, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Bi, [
            f(le, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (_) => r("search"))
            }, {
              default: i(() => [...v[13] || (v[13] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (_) => r("download-url"))
            }, {
              default: i(() => [...v[14] || (v[14] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (_) => r("mark-optional"))
            }, {
              default: i(() => [...v[15] || (v[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Vi = /* @__PURE__ */ Z(Fi, [["__scopeId", "data-v-8a82fefa"]]), Ai = { class: "model-resolution-step" }, Wi = { class: "step-header" }, Gi = { class: "step-info" }, ji = { class: "step-title" }, Hi = { class: "step-description" }, qi = { class: "stat-badge" }, Ki = {
  key: 1,
  class: "step-body"
}, Ji = {
  key: 2,
  class: "empty-state"
}, Qi = { class: "model-search-modal" }, Xi = { class: "model-modal-body" }, Yi = {
  key: 0,
  class: "model-search-results"
}, Zi = ["onClick"], er = { class: "model-result-header" }, tr = { class: "model-result-filename" }, or = { class: "model-result-meta" }, sr = { class: "model-result-category" }, nr = { class: "model-result-size" }, ar = {
  key: 0,
  class: "model-result-path"
}, lr = {
  key: 1,
  class: "model-no-results"
}, ir = {
  key: 2,
  class: "model-searching"
}, rr = { class: "model-download-url-modal" }, dr = { class: "model-modal-body" }, cr = { class: "model-input-group" }, ur = { class: "model-input-group" }, mr = { class: "model-modal-actions" }, vr = /* @__PURE__ */ Y({
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
    function r(U) {
      var b;
      return U && ((b = n[U]) == null ? void 0 : b[0]) || null;
    }
    const g = t, y = u, h = $(0), m = $(!1), a = $(!1), v = $(""), _ = $(""), d = $(""), E = $([]), k = $(!1), x = B(() => g.models[h.value]), w = B(() => g.models.some((U) => U.is_download_intent)), C = B(() => g.models.filter(
      (U) => g.modelChoices.has(U.filename) || U.is_download_intent
    ).length), R = B(() => {
      var b;
      if (!x.value) return "";
      const U = r((b = x.value.reference) == null ? void 0 : b.node_type);
      return U ? `${U}/${x.value.filename}` : "";
    }), F = B(() => {
      var b;
      if (!x.value) return "not-found";
      const U = g.modelChoices.get(x.value.filename);
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
      return x.value.is_download_intent ? "download" : (b = x.value.options) != null && b.length ? "ambiguous" : "not-found";
    }), T = B(() => {
      var b, ae;
      if (!x.value) return;
      const U = g.modelChoices.get(x.value.filename);
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
      return x.value.is_download_intent ? "Pending Download" : (ae = x.value.options) != null && ae.length ? `${x.value.options.length} matches` : "Not Found";
    });
    function L(U) {
      U >= 0 && U < g.models.length && (h.value = U);
    }
    function j() {
      x.value && y("mark-optional", x.value.filename);
    }
    function z() {
      x.value && y("skip", x.value.filename);
    }
    function N(U) {
      x.value && y("option-selected", x.value.filename, U);
    }
    function O() {
      x.value && y("clear-choice", x.value.filename);
    }
    function M() {
      x.value && (v.value = x.value.filename, m.value = !0);
    }
    function S() {
      x.value && (_.value = x.value.download_source || "", d.value = x.value.target_path || R.value, a.value = !0);
    }
    function V() {
      m.value = !1, v.value = "", E.value = [];
    }
    function K() {
      a.value = !1, _.value = "", d.value = "";
    }
    function oe() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function q(U) {
      x.value && V();
    }
    function ee() {
      !x.value || !_.value.trim() || (y("download-url", x.value.filename, _.value.trim(), d.value.trim() || void 0), K());
    }
    function H(U) {
      if (!U) return "Unknown";
      const b = U / (1024 * 1024 * 1024);
      return b >= 1 ? `${b.toFixed(2)} GB` : `${(U / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (U, b) => {
      var ae, J, _e;
      return o(), s("div", Ai, [
        e("div", Wi, [
          e("div", Gi, [
            e("h3", ji, l(w.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Hi, l(w.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", qi, l(C.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        x.value ? (o(), I(Yt, {
          key: 0,
          "item-name": x.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: b[0] || (b[0] = (he) => L(h.value - 1)),
          onNext: b[1] || (b[1] = (he) => L(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        x.value ? (o(), s("div", Ki, [
          f(Vi, {
            filename: x.value.filename,
            "node-type": ((ae = x.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((J = x.value.options) != null && J.length),
            options: x.value.options,
            choice: (_e = t.modelChoices) == null ? void 0 : _e.get(x.value.filename),
            status: F.value,
            "status-label": T.value,
            onMarkOptional: j,
            onSkip: z,
            onDownloadUrl: S,
            onSearch: M,
            onOptionSelected: N,
            onClearChoice: O
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Ji, [...b[5] || (b[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), I(Se, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: we(V, ["self"])
          }, [
            e("div", Qi, [
              e("div", { class: "model-modal-header" }, [
                b[6] || (b[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", Xi, [
                f(Pe, {
                  modelValue: v.value,
                  "onUpdate:modelValue": b[2] || (b[2] = (he) => v.value = he),
                  placeholder: "Search by filename, category...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                E.value.length > 0 ? (o(), s("div", Yi, [
                  (o(!0), s(A, null, se(E.value, (he) => (o(), s("div", {
                    key: he.hash,
                    class: "model-search-result-item",
                    onClick: (Re) => q()
                  }, [
                    e("div", er, [
                      e("code", tr, l(he.filename), 1)
                    ]),
                    e("div", or, [
                      e("span", sr, l(he.category), 1),
                      e("span", nr, l(H(he.size)), 1)
                    ]),
                    he.relative_path ? (o(), s("div", ar, l(he.relative_path), 1)) : c("", !0)
                  ], 8, Zi))), 128))
                ])) : v.value && !k.value ? (o(), s("div", lr, ' No models found matching "' + l(v.value) + '" ', 1)) : c("", !0),
                k.value ? (o(), s("div", ir, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), I(Se, { to: "body" }, [
          a.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: we(K, ["self"])
          }, [
            e("div", rr, [
              e("div", { class: "model-modal-header" }, [
                b[7] || (b[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: K
                }, "✕")
              ]),
              e("div", dr, [
                e("div", cr, [
                  b[8] || (b[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(Pe, {
                    modelValue: _.value,
                    "onUpdate:modelValue": b[3] || (b[3] = (he) => _.value = he),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", ur, [
                  b[9] || (b[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(Pe, {
                    modelValue: d.value,
                    "onUpdate:modelValue": b[4] || (b[4] = (he) => d.value = he),
                    placeholder: R.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", mr, [
                  f(le, {
                    variant: "secondary",
                    onClick: K
                  }, {
                    default: i(() => [...b[10] || (b[10] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(le, {
                    variant: "primary",
                    disabled: !_.value.trim() || !d.value.trim(),
                    onClick: ee
                  }, {
                    default: i(() => [...b[11] || (b[11] = [
                      p(" Queue Download ", -1)
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
}), fr = /* @__PURE__ */ Z(vr, [["__scopeId", "data-v-c6acbada"]]), gr = { class: "applying-step" }, hr = {
  key: 0,
  class: "phase-content"
}, pr = {
  key: 1,
  class: "phase-content"
}, yr = { class: "phase-description" }, wr = { class: "overall-progress" }, kr = { class: "progress-bar" }, br = { class: "progress-label" }, _r = { class: "install-list" }, $r = { class: "install-icon" }, Cr = { key: 0 }, xr = {
  key: 1,
  class: "spinner"
}, Sr = { key: 2 }, Ir = { key: 3 }, Er = {
  key: 0,
  class: "install-error"
}, Mr = {
  key: 2,
  class: "phase-content"
}, zr = { class: "phase-header" }, Lr = { class: "phase-title" }, Tr = { class: "completion-summary" }, Nr = {
  key: 0,
  class: "summary-item success"
}, Rr = { class: "summary-text" }, Dr = {
  key: 1,
  class: "summary-item error"
}, Or = { class: "summary-text" }, Ur = {
  key: 2,
  class: "failed-list"
}, Pr = { class: "failed-node-id" }, Br = { class: "failed-error" }, Fr = {
  key: 4,
  class: "summary-item success"
}, Vr = {
  key: 5,
  class: "restart-prompt"
}, Ar = {
  key: 3,
  class: "phase-content error"
}, Wr = { class: "error-message" }, Gr = /* @__PURE__ */ Y({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = B(() => {
      var v, _;
      const m = ((v = u.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || u.progress.nodesToInstall.length;
      if (!m) return 0;
      const a = ((_ = u.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.length) ?? 0;
      return Math.round(a / m * 100);
    }), r = B(() => {
      var m;
      return ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((a) => !a.success)) || [];
    }), g = B(() => r.value.length > 0);
    function y(m, a) {
      var _, d;
      const v = (_ = u.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.find((E) => E.node_id === m);
      return v ? v.success ? "complete" : "failed" : ((d = u.progress.nodeInstallProgress) == null ? void 0 : d.currentIndex) === a ? "installing" : "pending";
    }
    function h(m) {
      var a, v;
      return (v = (a = u.progress.nodeInstallProgress) == null ? void 0 : a.completedNodes.find((_) => _.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, a) => {
      var v, _, d, E;
      return o(), s("div", gr, [
        t.progress.phase === "resolving" ? (o(), s("div", hr, [...a[2] || (a[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", pr, [
          a[3] || (a[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", yr, " Installing " + l((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + l(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", wr, [
            e("div", kr, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", br, l(((d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.length) ?? 0) + " / " + l(((E = t.progress.nodeInstallProgress) == null ? void 0 : E.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", _r, [
            (o(!0), s(A, null, se(t.progress.nodesToInstall, (k, x) => (o(), s("div", {
              key: k,
              class: ne(["install-item", y(k, x)])
            }, [
              e("span", $r, [
                y(k, x) === "pending" ? (o(), s("span", Cr, "○")) : y(k, x) === "installing" ? (o(), s("span", xr, "◌")) : y(k, x) === "complete" ? (o(), s("span", Sr, "✓")) : y(k, x) === "failed" ? (o(), s("span", Ir, "✗")) : c("", !0)
              ]),
              e("code", null, l(k), 1),
              h(k) ? (o(), s("span", Er, l(h(k)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", Mr, [
          e("div", zr, [
            e("span", {
              class: ne(["phase-icon", g.value ? "warning" : "success"])
            }, l(g.value ? "⚠" : "✓"), 3),
            e("h3", Lr, l(g.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Tr, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", Nr, [
              a[4] || (a[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Rr, l(t.progress.nodesInstalled.length) + " node package" + l(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Dr, [
              a[5] || (a[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Or, l(r.value.length) + " package" + l(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Ur, [
              (o(!0), s(A, null, se(r.value, (k) => (o(), s("div", {
                key: k.node_id,
                class: "failed-item"
              }, [
                e("code", Pr, l(k.node_id), 1),
                e("span", Br, l(k.error), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: a[0] || (a[0] = (k) => m.$emit("retry-failed"))
            }, " Retry Failed (" + l(r.value.length) + ") ", 1)) : c("", !0),
            g.value ? c("", !0) : (o(), s("div", Fr, [...a[6] || (a[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            a[8] || (a[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", Vr, [
              a[7] || (a[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: a[1] || (a[1] = (k) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (o(), s("div", Ar, [
          a[9] || (a[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Wr, l(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), jr = /* @__PURE__ */ Z(Gr, [["__scopeId", "data-v-5efaae58"]]), Hr = {
  key: 0,
  class: "loading-state"
}, qr = {
  key: 1,
  class: "wizard-content"
}, Kr = {
  key: 0,
  class: "step-content"
}, Jr = { class: "analysis-summary" }, Qr = { class: "analysis-header" }, Xr = { class: "summary-description" }, Yr = { class: "stats-grid" }, Zr = { class: "stat-card" }, ed = { class: "stat-items" }, td = {
  key: 0,
  class: "stat-item success"
}, od = { class: "stat-count" }, sd = {
  key: 1,
  class: "stat-item info"
}, nd = { class: "stat-count" }, ad = {
  key: 2,
  class: "stat-item warning"
}, ld = { class: "stat-count" }, id = {
  key: 3,
  class: "stat-item error"
}, rd = { class: "stat-count" }, dd = { class: "stat-card" }, cd = { class: "stat-items" }, ud = { class: "stat-item success" }, md = { class: "stat-count" }, vd = {
  key: 0,
  class: "stat-item info"
}, fd = { class: "stat-count" }, gd = {
  key: 1,
  class: "stat-item warning"
}, hd = { class: "stat-count" }, pd = {
  key: 2,
  class: "stat-item error"
}, yd = { class: "stat-count" }, wd = {
  key: 0,
  class: "status-message warning"
}, kd = { class: "status-text" }, bd = {
  key: 1,
  class: "status-message info"
}, _d = { class: "status-text" }, $d = {
  key: 2,
  class: "status-message info"
}, Cd = { class: "status-text" }, xd = {
  key: 3,
  class: "status-message success"
}, Sd = {
  key: 3,
  class: "step-content"
}, Id = { class: "review-summary" }, Ed = { class: "review-stats" }, Md = { class: "review-stat" }, zd = { class: "stat-value" }, Ld = { class: "review-stat" }, Td = { class: "stat-value" }, Nd = { class: "review-stat" }, Rd = { class: "stat-value" }, Dd = { class: "review-stat" }, Od = { class: "stat-value" }, Ud = {
  key: 0,
  class: "review-section"
}, Pd = { class: "section-title" }, Bd = { class: "review-items" }, Fd = { class: "item-name" }, Vd = { class: "item-choice" }, Ad = {
  key: 0,
  class: "choice-badge install"
}, Wd = {
  key: 1,
  class: "choice-badge skip"
}, Gd = {
  key: 1,
  class: "review-section"
}, jd = { class: "section-title" }, Hd = { class: "review-items" }, qd = { class: "item-name" }, Kd = { class: "item-choice" }, Jd = {
  key: 0,
  class: "choice-badge install"
}, Qd = {
  key: 1,
  class: "choice-badge optional"
}, Xd = {
  key: 2,
  class: "choice-badge skip"
}, Yd = {
  key: 1,
  class: "choice-badge pending"
}, Zd = {
  key: 2,
  class: "review-section"
}, ec = { class: "section-title" }, tc = { class: "review-items" }, oc = { class: "item-name" }, sc = { class: "item-choice" }, nc = {
  key: 0,
  class: "choice-badge install"
}, ac = {
  key: 1,
  class: "choice-badge download"
}, lc = {
  key: 2,
  class: "choice-badge optional"
}, ic = {
  key: 3,
  class: "choice-badge skip"
}, rc = {
  key: 4,
  class: "choice-badge skip"
}, dc = {
  key: 1,
  class: "choice-badge download"
}, cc = {
  key: 2,
  class: "choice-badge pending"
}, uc = {
  key: 3,
  class: "no-choices"
}, mc = /* @__PURE__ */ Y({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: g, applyResolution: y, installNodes: h, queueModelDownloads: m, progress: a, resetProgress: v } = ol(), { loadPendingDownloads: _ } = St(), d = $(null), E = $(!1), k = $(!1), x = $(null), w = $("analysis"), C = $([]), R = $(/* @__PURE__ */ new Map()), F = $(/* @__PURE__ */ new Map()), T = $(/* @__PURE__ */ new Set()), L = B(() => {
      const W = [
        { id: "analysis", label: "Analysis" }
      ];
      return (z.value || M.value) && W.push({ id: "nodes", label: "Nodes" }), (N.value || O.value) && W.push({ id: "models", label: "Models" }), W.push({ id: "review", label: "Review" }), w.value === "applying" && W.push({ id: "applying", label: "Applying" }), W;
    }), j = B(() => d.value ? d.value.stats.needs_user_input : !1), z = B(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), N = B(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), O = B(() => d.value ? d.value.stats.download_intents > 0 : !1), M = B(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), S = B(() => d.value ? d.value.nodes.resolved.length : 0), V = B(() => {
      if (!d.value) return [];
      const W = d.value.nodes.resolved.filter((X) => !X.is_installed), P = /* @__PURE__ */ new Set();
      return W.filter((X) => P.has(X.package.package_id) ? !1 : (P.add(X.package.package_id), !0));
    }), K = B(() => {
      if (!d.value) return [];
      const W = d.value.nodes.resolved.filter((X) => !X.is_installed), P = /* @__PURE__ */ new Map();
      for (const X of W) {
        const ue = P.get(X.package.package_id);
        ue ? ue.node_types_count++ : P.set(X.package.package_id, {
          package_id: X.package.package_id,
          title: X.package.title,
          node_types_count: 1
        });
      }
      return Array.from(P.values());
    }), oe = B(() => V.value.filter((W) => !T.value.has(W.package.package_id))), q = B(() => d.value ? d.value.models.resolved.filter((W) => W.match_type === "download_intent").map((W) => ({
      filename: W.reference.widget_value,
      reference: W.reference,
      is_download_intent: !0,
      resolved_model: W.model,
      download_source: W.download_source,
      target_path: W.target_path
    })) : []), ee = B(() => {
      if (!d.value) return [];
      const W = d.value.nodes.unresolved.map((X) => ({
        node_type: X.reference.node_type,
        reason: X.reason,
        is_unresolved: !0,
        options: void 0
      })), P = d.value.nodes.ambiguous.map((X) => ({
        node_type: X.reference.node_type,
        has_multiple_options: !0,
        options: X.options.map((ue) => ({
          package_id: ue.package.package_id,
          title: ue.package.title,
          match_confidence: ue.match_confidence,
          match_type: ue.match_type,
          is_installed: ue.is_installed
        }))
      }));
      return [...W, ...P];
    }), H = B(() => {
      if (!d.value) return [];
      const W = d.value.models.unresolved.map((X) => ({
        filename: X.reference.widget_value,
        reference: X.reference,
        reason: X.reason,
        is_unresolved: !0,
        options: void 0
      })), P = d.value.models.ambiguous.map((X) => ({
        filename: X.reference.widget_value,
        reference: X.reference,
        has_multiple_options: !0,
        options: X.options.map((ue) => ({
          model: ue.model,
          match_confidence: ue.match_confidence,
          match_type: ue.match_type,
          has_download_source: ue.has_download_source
        }))
      }));
      return [...W, ...P];
    }), U = B(() => {
      const W = H.value, P = q.value.map((X) => ({
        filename: X.filename,
        reference: X.reference,
        is_download_intent: !0,
        resolved_model: X.resolved_model,
        download_source: X.download_source,
        target_path: X.target_path,
        options: void 0
      }));
      return [...W, ...P];
    }), b = B(() => {
      let W = oe.value.length;
      for (const P of R.value.values())
        P.action === "install" && W++;
      for (const P of F.value.values())
        P.action === "select" && W++;
      return W;
    }), ae = B(() => {
      let W = 0;
      for (const P of F.value.values())
        P.action === "download" && W++;
      return W;
    }), J = B(() => {
      let W = 0;
      for (const P of R.value.values())
        P.action === "optional" && W++;
      for (const P of F.value.values())
        P.action === "optional" && W++;
      return W;
    }), _e = B(() => {
      let W = T.value.size;
      for (const P of R.value.values())
        P.action === "skip" && W++;
      for (const P of F.value.values())
        P.action === "skip" && W++;
      for (const P of ee.value)
        R.value.has(P.node_type) || W++;
      for (const P of H.value)
        F.value.has(P.filename) || W++;
      return W;
    }), he = B(() => {
      const W = {};
      if (W.analysis = { resolved: 1, total: 1 }, z.value) {
        const P = ee.value.length, X = ee.value.filter(
          (ue) => R.value.has(ue.node_type)
        ).length;
        W.nodes = { resolved: X, total: P };
      }
      if (N.value || O.value) {
        const P = U.value.length, X = U.value.filter(
          (ue) => F.value.has(ue.filename) || ue.is_download_intent
        ).length;
        W.models = { resolved: X, total: P };
      }
      if (W.review = { resolved: 1, total: 1 }, w.value === "applying") {
        const P = a.totalFiles || 1, X = a.completedFiles.length;
        W.applying = { resolved: X, total: P };
      }
      return W;
    });
    function Re(W) {
      w.value = W;
    }
    function mt() {
      const W = L.value.findIndex((P) => P.id === w.value);
      W > 0 && (w.value = L.value[W - 1].id);
    }
    function fe() {
      const W = L.value.findIndex((P) => P.id === w.value);
      W < L.value.length - 1 && (w.value = L.value[W + 1].id);
    }
    async function Ne() {
      E.value = !0, x.value = null;
      try {
        d.value = await g(n.workflowName);
      } catch (W) {
        x.value = W instanceof Error ? W.message : "Failed to analyze workflow";
      } finally {
        E.value = !1;
      }
    }
    function vt() {
      C.value.includes("analysis") || C.value.push("analysis"), z.value || M.value ? w.value = "nodes" : N.value || O.value ? w.value = "models" : w.value = "review";
    }
    function Qe(W) {
      R.value.set(W, { action: "optional" });
    }
    function ze(W) {
      R.value.set(W, { action: "skip" });
    }
    function ft(W, P) {
      var ue;
      const X = ee.value.find((Ce) => Ce.node_type === W);
      (ue = X == null ? void 0 : X.options) != null && ue[P] && R.value.set(W, {
        action: "install",
        package_id: X.options[P].package_id
      });
    }
    function tt(W, P) {
      R.value.set(W, {
        action: "install",
        package_id: P
      });
    }
    function gt(W) {
      R.value.delete(W);
    }
    function Q(W) {
      T.value.has(W) ? T.value.delete(W) : T.value.add(W);
    }
    function ie(W) {
      F.value.set(W, { action: "optional" });
    }
    function ge(W) {
      F.value.set(W, { action: "skip" });
    }
    function $e(W, P) {
      var ue;
      const X = H.value.find((Ce) => Ce.filename === W);
      (ue = X == null ? void 0 : X.options) != null && ue[P] && F.value.set(W, {
        action: "select",
        selected_model: X.options[P].model
      });
    }
    function ot(W, P, X) {
      F.value.set(W, {
        action: "download",
        url: P,
        target_path: X
      });
    }
    function st(W) {
      F.value.delete(W);
    }
    async function nt() {
      var W;
      k.value = !0, x.value = null, v(), a.phase = "resolving", w.value = "applying";
      try {
        const P = await y(n.workflowName, R.value, F.value, T.value);
        P.models_to_download && P.models_to_download.length > 0 && m(n.workflowName, P.models_to_download);
        const X = [
          ...P.nodes_to_install || [],
          ...oe.value.map((Ce) => Ce.package.package_id)
        ];
        a.nodesToInstall = [...new Set(X)], a.nodesToInstall.length > 0 && await h(n.workflowName), a.phase = "complete", await _();
        const ue = a.installError || ((W = a.nodeInstallProgress) == null ? void 0 : W.completedNodes.some((Ce) => !Ce.success));
        !a.needsRestart && !ue && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (P) {
        x.value = P instanceof Error ? P.message : "Failed to apply resolution", a.error = x.value, a.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function Mt() {
      r("refresh"), r("restart"), r("close");
    }
    async function Ae() {
      var P;
      const W = ((P = a.nodeInstallProgress) == null ? void 0 : P.completedNodes.filter((X) => !X.success).map((X) => X.node_id)) || [];
      if (W.length !== 0) {
        a.phase = "installing", a.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: W.length
        }, a.nodesToInstall = W, a.nodesInstalled = [], a.installError = void 0;
        try {
          await h(n.workflowName), a.phase = "complete";
        } catch (X) {
          a.error = X instanceof Error ? X.message : "Retry failed", a.phase = "error";
        }
      }
    }
    return be(Ne), (W, P) => (o(), I(dt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: E.value,
      error: x.value || void 0,
      "fixed-height": !0,
      onClose: P[1] || (P[1] = (X) => r("close"))
    }, {
      body: i(() => [
        E.value && !d.value ? (o(), s("div", Hr, [...P[2] || (P[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", qr, [
          f(ml, {
            steps: L.value,
            "current-step": w.value,
            "completed-steps": C.value,
            "step-stats": he.value,
            onStepChange: Re
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          w.value === "analysis" ? (o(), s("div", Kr, [
            e("div", Jr, [
              e("div", Qr, [
                P[3] || (P[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Xr, " Found " + l(d.value.stats.total_nodes) + " nodes and " + l(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Yr, [
                e("div", Zr, [
                  P[12] || (P[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", ed, [
                    S.value > 0 ? (o(), s("div", td, [
                      P[4] || (P[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", od, l(S.value), 1),
                      P[5] || (P[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    d.value.stats.packages_needing_installation > 0 ? (o(), s("div", sd, [
                      P[6] || (P[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", nd, l(d.value.stats.packages_needing_installation), 1),
                      P[7] || (P[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", ad, [
                      P[8] || (P[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ld, l(d.value.nodes.ambiguous.length), 1),
                      P[9] || (P[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", id, [
                      P[10] || (P[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", rd, l(d.value.nodes.unresolved.length), 1),
                      P[11] || (P[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", dd, [
                  P[21] || (P[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", cd, [
                    e("div", ud, [
                      P[13] || (P[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", md, l(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      P[14] || (P[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", vd, [
                      P[15] || (P[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", fd, l(d.value.stats.download_intents), 1),
                      P[16] || (P[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", gd, [
                      P[17] || (P[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", hd, l(d.value.models.ambiguous.length), 1),
                      P[18] || (P[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", pd, [
                      P[19] || (P[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", yd, l(d.value.models.unresolved.length), 1),
                      P[20] || (P[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              j.value ? (o(), s("div", wd, [
                P[22] || (P[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", kd, l(ee.value.length + H.value.length) + " items need your input", 1)
              ])) : M.value ? (o(), s("div", bd, [
                P[23] || (P[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", _d, l(d.value.stats.packages_needing_installation) + " package" + l(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + l(d.value.stats.nodes_needing_installation) + " node type" + l(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + l(O.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : O.value ? (o(), s("div", $d, [
                P[24] || (P[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Cd, l(d.value.stats.download_intents) + " model" + l(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", xd, [...P[25] || (P[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          w.value === "nodes" ? (o(), I(bi, {
            key: 1,
            nodes: ee.value,
            "node-choices": R.value,
            "auto-resolved-packages": K.value,
            "skipped-packages": T.value,
            onMarkOptional: Qe,
            onSkip: ze,
            onOptionSelected: ft,
            onManualEntry: tt,
            onClearChoice: gt,
            onPackageSkip: Q
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          w.value === "models" ? (o(), I(fr, {
            key: 2,
            models: U.value,
            "model-choices": F.value,
            onMarkOptional: ie,
            onSkip: ge,
            onOptionSelected: $e,
            onDownloadUrl: ot,
            onClearChoice: st
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          w.value === "review" ? (o(), s("div", Sd, [
            e("div", Id, [
              P[30] || (P[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Ed, [
                e("div", Md, [
                  e("span", zd, l(b.value), 1),
                  P[26] || (P[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Ld, [
                  e("span", Td, l(ae.value), 1),
                  P[27] || (P[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Nd, [
                  e("span", Rd, l(J.value), 1),
                  P[28] || (P[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Dd, [
                  e("span", Od, l(_e.value), 1),
                  P[29] || (P[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              K.value.length > 0 ? (o(), s("div", Ud, [
                e("h4", Pd, "Node Packages (" + l(K.value.length) + ")", 1),
                e("div", Bd, [
                  (o(!0), s(A, null, se(K.value, (X) => (o(), s("div", {
                    key: X.package_id,
                    class: "review-item"
                  }, [
                    e("code", Fd, l(X.package_id), 1),
                    e("div", Vd, [
                      T.value.has(X.package_id) ? (o(), s("span", Wd, "Skipped")) : (o(), s("span", Ad, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              ee.value.length > 0 ? (o(), s("div", Gd, [
                e("h4", jd, "Node Choices (" + l(ee.value.length) + ")", 1),
                e("div", Hd, [
                  (o(!0), s(A, null, se(ee.value, (X) => {
                    var ue, Ce, Xe, Ye;
                    return o(), s("div", {
                      key: X.node_type,
                      class: "review-item"
                    }, [
                      e("code", qd, l(X.node_type), 1),
                      e("div", Kd, [
                        R.value.has(X.node_type) ? (o(), s(A, { key: 0 }, [
                          ((ue = R.value.get(X.node_type)) == null ? void 0 : ue.action) === "install" ? (o(), s("span", Jd, l((Ce = R.value.get(X.node_type)) == null ? void 0 : Ce.package_id), 1)) : ((Xe = R.value.get(X.node_type)) == null ? void 0 : Xe.action) === "optional" ? (o(), s("span", Qd, " Optional ")) : ((Ye = R.value.get(X.node_type)) == null ? void 0 : Ye.action) === "skip" ? (o(), s("span", Xd, " Skip ")) : c("", !0)
                        ], 64)) : (o(), s("span", Yd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              U.value.length > 0 ? (o(), s("div", Zd, [
                e("h4", ec, "Models (" + l(U.value.length) + ")", 1),
                e("div", tc, [
                  (o(!0), s(A, null, se(U.value, (X) => {
                    var ue, Ce, Xe, Ye, It, ht, G;
                    return o(), s("div", {
                      key: X.filename,
                      class: "review-item"
                    }, [
                      e("code", oc, l(X.filename), 1),
                      e("div", sc, [
                        F.value.has(X.filename) ? (o(), s(A, { key: 0 }, [
                          ((ue = F.value.get(X.filename)) == null ? void 0 : ue.action) === "select" ? (o(), s("span", nc, l((Xe = (Ce = F.value.get(X.filename)) == null ? void 0 : Ce.selected_model) == null ? void 0 : Xe.filename), 1)) : ((Ye = F.value.get(X.filename)) == null ? void 0 : Ye.action) === "download" ? (o(), s("span", ac, " Download ")) : ((It = F.value.get(X.filename)) == null ? void 0 : It.action) === "optional" ? (o(), s("span", lc, " Optional ")) : ((ht = F.value.get(X.filename)) == null ? void 0 : ht.action) === "skip" ? (o(), s("span", ic, " Skip ")) : ((G = F.value.get(X.filename)) == null ? void 0 : G.action) === "cancel_download" ? (o(), s("span", rc, " Cancel Download ")) : c("", !0)
                        ], 64)) : X.is_download_intent ? (o(), s("span", dc, " Pending Download ")) : (o(), s("span", cc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              V.value.length === 0 && ee.value.length === 0 && U.value.length === 0 ? (o(), s("div", uc, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          w.value === "applying" ? (o(), I(jr, {
            key: 4,
            progress: me(a),
            onRestart: Mt,
            onRetryFailed: Ae
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        w.value !== "analysis" && w.value !== "applying" ? (o(), I(le, {
          key: 0,
          variant: "secondary",
          disabled: k.value,
          onClick: mt
        }, {
          default: i(() => [...P[31] || (P[31] = [
            p(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        P[35] || (P[35] = e("div", { class: "footer-spacer" }, null, -1)),
        w.value !== "applying" || me(a).phase === "complete" || me(a).phase === "error" ? (o(), I(le, {
          key: 1,
          variant: "secondary",
          onClick: P[0] || (P[0] = (X) => r("close"))
        }, {
          default: i(() => [
            p(l(me(a).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        w.value === "analysis" ? (o(), I(le, {
          key: 2,
          variant: "primary",
          disabled: E.value,
          onClick: vt
        }, {
          default: i(() => [...P[32] || (P[32] = [
            p(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        w.value === "nodes" ? (o(), I(le, {
          key: 3,
          variant: "primary",
          onClick: fe
        }, {
          default: i(() => [
            p(l(N.value || O.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        w.value === "models" ? (o(), I(le, {
          key: 4,
          variant: "primary",
          onClick: fe
        }, {
          default: i(() => [...P[33] || (P[33] = [
            p(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        w.value === "review" ? (o(), I(le, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: nt
        }, {
          default: i(() => [...P[34] || (P[34] = [
            p(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), vc = /* @__PURE__ */ Z(mc, [["__scopeId", "data-v-0d3f93e6"]]), fc = { class: "search-input-wrapper" }, gc = ["value", "placeholder"], hc = /* @__PURE__ */ Y({
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
    const n = t, r = u, g = $(null);
    let y;
    function h(a) {
      const v = a.target.value;
      n.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", v);
      }, n.debounce)) : r("update:modelValue", v);
    }
    function m() {
      var a;
      r("update:modelValue", ""), r("clear"), (a = g.value) == null || a.focus();
    }
    return be(() => {
      n.autoFocus && g.value && g.value.focus();
    }), (a, v) => (o(), s("div", fc, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: je(m, ["escape"])
      }, null, 40, gc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), pc = /* @__PURE__ */ Z(hc, [["__scopeId", "data-v-266f857a"]]), yc = { class: "search-bar" }, wc = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (o(), s("div", yc, [
      f(pc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ct = /* @__PURE__ */ Z(wc, [["__scopeId", "data-v-3d51bbfd"]]), kc = { class: "section-group" }, bc = {
  key: 0,
  class: "section-content"
}, _c = /* @__PURE__ */ Y({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = $(n.initiallyExpanded);
    function y() {
      n.collapsible && (g.value = !g.value, r("toggle", g.value));
    }
    return (h, m) => (o(), s("section", kc, [
      f(Te, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: y
      }, {
        default: i(() => [
          p(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), s("div", bc, [
        de(h.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ke = /* @__PURE__ */ Z(_c, [["__scopeId", "data-v-c48e33ed"]]), $c = { class: "item-header" }, Cc = {
  key: 0,
  class: "item-icon"
}, xc = { class: "item-info" }, Sc = {
  key: 0,
  class: "item-title"
}, Ic = {
  key: 1,
  class: "item-subtitle"
}, Ec = {
  key: 0,
  class: "item-details"
}, Mc = {
  key: 1,
  class: "item-actions"
}, zc = /* @__PURE__ */ Y({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = B(() => n.status ? `status-${n.status}` : "");
    return (g, y) => (o(), s("div", {
      class: ne(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (h) => t.clickable && g.$emit("click"))
    }, [
      e("div", $c, [
        g.$slots.icon ? (o(), s("span", Cc, [
          de(g.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", xc, [
          g.$slots.title ? (o(), s("div", Sc, [
            de(g.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          g.$slots.subtitle ? (o(), s("div", Ic, [
            de(g.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      g.$slots.details ? (o(), s("div", Ec, [
        de(g.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      g.$slots.actions ? (o(), s("div", Mc, [
        de(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ Z(zc, [["__scopeId", "data-v-cc435e0e"]]), Lc = { class: "loading-state" }, Tc = { class: "loading-message" }, Nc = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (o(), s("div", Lc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Tc, l(t.message), 1)
    ]));
  }
}), Ke = /* @__PURE__ */ Z(Nc, [["__scopeId", "data-v-ad8436c9"]]), Rc = { class: "error-state" }, Dc = { class: "error-message" }, Oc = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (o(), s("div", Rc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Dc, l(t.message), 1),
      t.retry ? (o(), I(te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          p(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Je = /* @__PURE__ */ Z(Oc, [["__scopeId", "data-v-5397be48"]]), Uc = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: g } = Ie();
    Qt();
    const y = $([]), h = $(!1), m = $(null), a = $(""), v = $(!0), _ = $(!1), d = $(!1), E = $(!1), k = $(null), x = B(
      () => y.value.filter((H) => H.status === "broken")
    ), w = B(
      () => y.value.filter((H) => H.status === "new")
    ), C = B(
      () => y.value.filter((H) => H.status === "modified")
    ), R = B(
      () => y.value.filter((H) => H.status === "synced")
    ), F = B(() => {
      if (!a.value.trim()) return y.value;
      const H = a.value.toLowerCase();
      return y.value.filter((U) => U.name.toLowerCase().includes(H));
    }), T = B(
      () => x.value.filter(
        (H) => !a.value.trim() || H.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), L = B(
      () => w.value.filter(
        (H) => !a.value.trim() || H.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), j = B(
      () => C.value.filter(
        (H) => !a.value.trim() || H.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), z = B(
      () => R.value.filter(
        (H) => !a.value.trim() || H.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), N = B(
      () => _.value ? z.value : z.value.slice(0, 5)
    );
    async function O(H = !1) {
      h.value = !0, m.value = null;
      try {
        y.value = await g(H);
      } catch (U) {
        m.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    u({ loadWorkflows: O });
    function M(H) {
      k.value = H, d.value = !0;
    }
    function S(H) {
      k.value = H, E.value = !0;
    }
    function V() {
      alert("Bulk resolution not yet implemented");
    }
    function K() {
      r("refresh");
    }
    async function oe() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function q(H) {
      const U = [];
      return H.missing_nodes > 0 && U.push(`${H.missing_nodes} missing node${H.missing_nodes > 1 ? "s" : ""}`), H.missing_models > 0 && U.push(`${H.missing_models} missing model${H.missing_models > 1 ? "s" : ""}`), H.pending_downloads && H.pending_downloads > 0 && U.push(`${H.pending_downloads} pending download${H.pending_downloads > 1 ? "s" : ""}`), U.length > 0 ? U.join(", ") : "Has issues";
    }
    function ee(H) {
      const U = H.sync_state === "new" ? "New" : H.sync_state === "modified" ? "Modified" : H.sync_state === "synced" ? "Synced" : H.sync_state;
      return H.has_path_sync_issues && H.models_needing_path_sync && H.models_needing_path_sync > 0 ? `${H.models_needing_path_sync} model path${H.models_needing_path_sync > 1 ? "s" : ""} need${H.models_needing_path_sync === 1 ? "s" : ""} sync` : U || "Unknown";
    }
    return be(O), (H, U) => (o(), s(A, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, { title: "WORKFLOWS" }, {
            actions: i(() => [
              x.value.length > 0 ? (o(), I(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: i(() => [...U[8] || (U[8] = [
                  p(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          f(ct, {
            modelValue: a.value,
            "onUpdate:modelValue": U[0] || (U[0] = (b) => a.value = b),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          h.value ? (o(), I(Ke, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), I(Je, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            T.value.length ? (o(), I(ke, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(T.value, (b) => (o(), I(xe, {
                  key: b.name,
                  status: "broken"
                }, {
                  icon: i(() => [...U[9] || (U[9] = [
                    p("⚠", -1)
                  ])]),
                  title: i(() => [
                    p(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(q(b)), 1)
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => S(b.name)
                    }, {
                      default: i(() => [...U[10] || (U[10] = [
                        p(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(b.name)
                    }, {
                      default: i(() => [...U[11] || (U[11] = [
                        p(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            L.value.length ? (o(), I(ke, {
              key: 1,
              title: "NEW",
              count: L.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(L.value, (b) => (o(), I(xe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    p(l(b.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    p(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(ee(b)), 1)
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(b.name)
                    }, {
                      default: i(() => [...U[12] || (U[12] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            j.value.length ? (o(), I(ke, {
              key: 2,
              title: "MODIFIED",
              count: j.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(j.value, (b) => (o(), I(xe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...U[13] || (U[13] = [
                    p("⚡", -1)
                  ])]),
                  title: i(() => [
                    p(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(ee(b)), 1)
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(b.name)
                    }, {
                      default: i(() => [...U[14] || (U[14] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            z.value.length ? (o(), I(ke, {
              key: 3,
              title: "SYNCED",
              count: z.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: U[2] || (U[2] = (b) => v.value = b)
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(N.value, (b) => (o(), I(xe, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    p(l(b.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    p(l(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(ee(b)), 1)
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(b.name)
                    }, {
                      default: i(() => [...U[15] || (U[15] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !_.value && z.value.length > 5 ? (o(), I(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (b) => _.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    p(" View all " + l(z.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            F.value.length ? c("", !0) : (o(), I(Be, {
              key: 4,
              icon: "📭",
              message: a.value ? `No workflows match '${a.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && k.value ? (o(), I(Za, {
        key: 0,
        "workflow-name": k.value,
        onClose: U[3] || (U[3] = (b) => d.value = !1),
        onResolve: U[4] || (U[4] = (b) => S(k.value)),
        onRefresh: U[5] || (U[5] = (b) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      E.value && k.value ? (o(), I(vc, {
        key: 1,
        "workflow-name": k.value,
        onClose: U[6] || (U[6] = (b) => E.value = !1),
        onInstall: K,
        onRefresh: U[7] || (U[7] = (b) => r("refresh")),
        onRestart: oe
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Pc = /* @__PURE__ */ Z(Uc, [["__scopeId", "data-v-b7939cb4"]]), Bc = /* @__PURE__ */ Y({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: ne(["summary-bar", t.variant])
    }, [
      de(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ut = /* @__PURE__ */ Z(Bc, [["__scopeId", "data-v-ccb7816e"]]), Fc = {
  key: 0,
  class: "model-details"
}, Vc = { class: "detail-section" }, Ac = { class: "detail-row" }, Wc = { class: "detail-value mono" }, Gc = { class: "detail-row" }, jc = { class: "detail-value mono" }, Hc = { class: "detail-row" }, qc = { class: "detail-value mono" }, Kc = { class: "detail-row" }, Jc = { class: "detail-value" }, Qc = { class: "detail-row" }, Xc = { class: "detail-value" }, Yc = { class: "detail-row" }, Zc = { class: "detail-value" }, eu = { class: "detail-section" }, tu = { class: "section-header" }, ou = {
  key: 0,
  class: "locations-list"
}, su = { class: "location-path mono" }, nu = {
  key: 0,
  class: "location-modified"
}, au = ["onClick"], lu = {
  key: 1,
  class: "empty-state"
}, iu = { class: "detail-section" }, ru = { class: "section-header" }, du = {
  key: 0,
  class: "sources-list"
}, cu = { class: "source-type" }, uu = ["href"], mu = ["disabled", "onClick"], vu = {
  key: 1,
  class: "empty-state"
}, fu = { class: "add-source-form" }, gu = ["disabled"], hu = {
  key: 2,
  class: "source-error"
}, pu = {
  key: 3,
  class: "source-success"
}, yu = /* @__PURE__ */ Y({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: g, removeModelSource: y, openFileLocation: h } = Ie(), m = $(null), a = $(!0), v = $(null), _ = $(""), d = $(!1), E = $(null), k = $(null), x = $(null), w = $(null);
    let C = null;
    function R(O, M = "success", S = 2e3) {
      C && clearTimeout(C), w.value = { message: O, type: M }, C = setTimeout(() => {
        w.value = null;
      }, S);
    }
    function F(O) {
      if (!O) return "Unknown";
      const M = 1024 * 1024 * 1024, S = 1024 * 1024;
      return O >= M ? `${(O / M).toFixed(1)} GB` : O >= S ? `${(O / S).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function T(O) {
      navigator.clipboard.writeText(O), R("Copied to clipboard!");
    }
    async function L(O) {
      try {
        await h(O), R("Opening file location...");
      } catch {
        R("Failed to open location", "error");
      }
    }
    async function j() {
      if (!(!_.value.trim() || !m.value)) {
        d.value = !0, k.value = null, x.value = null;
        try {
          await g(m.value.hash, _.value.trim()), x.value = "Source added successfully!", _.value = "", await N();
        } catch (O) {
          k.value = O instanceof Error ? O.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function z(O) {
      if (m.value) {
        E.value = O, k.value = null, x.value = null;
        try {
          await y(m.value.hash, O), R("Source removed"), await N();
        } catch (M) {
          k.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          E.value = null;
        }
      }
    }
    async function N() {
      a.value = !0, v.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (O) {
        v.value = O instanceof Error ? O.message : "Failed to load model details";
      } finally {
        a.value = !1;
      }
    }
    return be(N), (O, M) => {
      var S;
      return o(), s(A, null, [
        f(dt, {
          title: `Model Details: ${((S = m.value) == null ? void 0 : S.filename) || "Loading..."}`,
          size: "lg",
          loading: a.value,
          error: v.value,
          onClose: M[5] || (M[5] = (V) => O.$emit("close"))
        }, {
          body: i(() => {
            var V, K, oe, q;
            return [
              m.value ? (o(), s("div", Fc, [
                e("section", Vc, [
                  e("div", Ac, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Wc, l(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (ee) => T(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Gc, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", jc, l(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (ee) => T(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Hc, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", qc, l(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (ee) => T(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Kc, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Jc, l(F(m.value.size)), 1)
                  ]),
                  e("div", Qc, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Xc, l(m.value.category), 1)
                  ]),
                  e("div", Yc, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Zc, l(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", eu, [
                  e("h4", tu, "Locations (" + l(((V = m.value.locations) == null ? void 0 : V.length) || 0) + ")", 1),
                  (K = m.value.locations) != null && K.length ? (o(), s("div", ou, [
                    (o(!0), s(A, null, se(m.value.locations, (ee, H) => (o(), s("div", {
                      key: H,
                      class: "location-item"
                    }, [
                      e("span", su, l(ee.path), 1),
                      ee.modified ? (o(), s("span", nu, "Modified: " + l(ee.modified), 1)) : c("", !0),
                      ee.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => L(ee.path)
                      }, " Open File Location ", 8, au)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", lu, "No locations found"))
                ]),
                e("section", iu, [
                  e("h4", ru, "Download Sources (" + l(((oe = m.value.sources) == null ? void 0 : oe.length) || 0) + ")", 1),
                  (q = m.value.sources) != null && q.length ? (o(), s("div", du, [
                    (o(!0), s(A, null, se(m.value.sources, (ee, H) => (o(), s("div", {
                      key: H,
                      class: "source-item"
                    }, [
                      e("span", cu, l(ee.type) + ":", 1),
                      e("a", {
                        href: ee.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(ee.url), 9, uu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: E.value === ee.url,
                        onClick: (U) => z(ee.url)
                      }, l(E.value === ee.url ? "..." : "×"), 9, mu)
                    ]))), 128))
                  ])) : (o(), s("div", vu, " No download sources configured ")),
                  e("div", fu, [
                    ro(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (ee) => _.value = ee),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [co, _.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !_.value.trim() || d.value,
                      onClick: j
                    }, l(d.value ? "Adding..." : "Add Source"), 9, gu)
                  ]),
                  k.value ? (o(), s("p", hu, l(k.value), 1)) : c("", !0),
                  x.value ? (o(), s("p", pu, l(x.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (V) => O.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), I(Se, { to: "body" }, [
          w.value ? (o(), s("div", {
            key: 0,
            class: ne(["toast", w.value.type])
          }, l(w.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), Zt = /* @__PURE__ */ Z(yu, [["__scopeId", "data-v-f15cbb56"]]), wu = /* @__PURE__ */ Y({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: g } = Ie(), y = $([]), h = $([]), m = $("production"), a = $(!1), v = $(null), _ = $(""), d = $(!1), E = $(null);
    function k() {
      d.value = !1, n("navigate", "model-index");
    }
    const x = B(
      () => y.value.reduce((N, O) => N + (O.size || 0), 0)
    ), w = B(() => {
      if (!_.value.trim()) return y.value;
      const N = _.value.toLowerCase();
      return y.value.filter((O) => O.filename.toLowerCase().includes(N));
    }), C = B(() => {
      if (!_.value.trim()) return h.value;
      const N = _.value.toLowerCase();
      return h.value.filter((O) => O.filename.toLowerCase().includes(N));
    }), R = B(() => {
      const N = {};
      for (const M of w.value) {
        const S = M.type || "other";
        N[S] || (N[S] = []), N[S].push(M);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([M], [S]) => {
        const V = O.indexOf(M), K = O.indexOf(S);
        return V >= 0 && K >= 0 ? V - K : V >= 0 ? -1 : K >= 0 ? 1 : M.localeCompare(S);
      }).map(([M, S]) => ({ type: M, models: S }));
    });
    function F(N) {
      if (!N) return "Unknown";
      const O = N / (1024 * 1024);
      return O >= 1024 ? `${(O / 1024).toFixed(1)} GB` : `${O.toFixed(0)} MB`;
    }
    function T(N) {
      E.value = N.hash || N.filename;
    }
    function L(N) {
      n("navigate", "model-index");
    }
    function j(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function z() {
      a.value = !0, v.value = null;
      try {
        const N = await r();
        y.value = N, h.value = [];
        const O = await g();
        m.value = O.environment || "production";
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        a.value = !1;
      }
    }
    return be(z), (N, O) => (o(), s(A, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (M) => d.value = !0)
          })
        ]),
        search: i(() => [
          f(ct, {
            modelValue: _.value,
            "onUpdate:modelValue": O[1] || (O[1] = (M) => _.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), I(Ke, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (o(), I(Je, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            y.value.length ? (o(), I(ut, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                p(" Total: " + l(y.value.length) + " models • " + l(F(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(A, null, se(R.value, (M) => (o(), I(ke, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(M.models, (S) => (o(), I(xe, {
                  key: S.hash || S.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...O[4] || (O[4] = [
                    p("📦", -1)
                  ])]),
                  title: i(() => [
                    p(l(S.filename), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(F(S.size)), 1)
                  ]),
                  details: i(() => [
                    f(pe, {
                      label: "Used by:",
                      value: (S.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(pe, {
                      label: "Path:",
                      value: S.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => T(S)
                    }, {
                      default: i(() => [...O[5] || (O[5] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            C.value.length ? (o(), I(ke, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(C.value, (M) => (o(), I(xe, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...O[6] || (O[6] = [
                    p("⚠", -1)
                  ])]),
                  title: i(() => [
                    p(l(M.filename), 1)
                  ]),
                  subtitle: i(() => [...O[7] || (O[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var S;
                    return [
                      f(pe, {
                        label: "Required by:",
                        value: ((S = M.workflow_names) == null ? void 0 : S.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (S) => j(M.filename)
                    }, {
                      default: i(() => [...O[8] || (O[8] = [
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (S) => L(M.filename)
                    }, {
                      default: i(() => [...O[9] || (O[9] = [
                        p(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !w.value.length && !C.value.length ? (o(), I(Be, {
              key: 2,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: d.value,
        title: "About Environment Models",
        onClose: O[2] || (O[2] = (M) => d.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            O[10] || (O[10] = p(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            O[11] || (O[11] = p(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          f(te, {
            variant: "primary",
            onClick: k
          }, {
            default: i(() => [...O[12] || (O[12] = [
              p(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      E.value ? (o(), I(Zt, {
        key: 0,
        identifier: E.value,
        onClose: O[3] || (O[3] = (M) => E.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), ku = /* @__PURE__ */ Z(wu, [["__scopeId", "data-v-cb4f12b3"]]), bu = {
  key: 0,
  class: "indexing-progress"
}, _u = { class: "progress-info" }, $u = { class: "progress-label" }, Cu = { class: "progress-count" }, xu = { class: "progress-bar" }, Su = { class: "modal-content" }, Iu = { class: "modal-header" }, Eu = { class: "modal-body" }, Mu = { class: "input-group" }, zu = { class: "current-path" }, Lu = { class: "input-group" }, Tu = { class: "modal-footer" }, Nu = { class: "modal-content" }, Ru = { class: "modal-header" }, Du = { class: "modal-body" }, Ou = { class: "input-group" }, Uu = { class: "input-group" }, Pu = { class: "modal-footer" }, Bu = /* @__PURE__ */ Y({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: g,
      setModelsDirectory: y
    } = Ie(), { addToQueue: h } = St(), m = u, a = $([]), v = $(!1), _ = $(!1), d = $(null), E = $(""), k = $(!1), x = $(null), w = $(!1), C = $(null), R = $(""), F = $(!1), T = $(!1), L = $(""), j = $(""), z = $(null), N = B(
      () => a.value.reduce((U, b) => U + (b.size || 0), 0)
    ), O = B(() => {
      if (!E.value.trim()) return a.value;
      const U = E.value.toLowerCase();
      return a.value.filter((b) => {
        const ae = b, J = b.sha256 || ae.sha256_hash || "";
        return b.filename.toLowerCase().includes(U) || J.toLowerCase().includes(U);
      });
    }), M = B(() => {
      const U = {};
      for (const ae of O.value) {
        const J = ae.type || "other";
        U[J] || (U[J] = []), U[J].push(ae);
      }
      const b = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([ae], [J]) => {
        const _e = b.indexOf(ae), he = b.indexOf(J);
        return _e >= 0 && he >= 0 ? _e - he : _e >= 0 ? -1 : he >= 0 ? 1 : ae.localeCompare(J);
      }).map(([ae, J]) => ({ type: ae, models: J }));
    });
    function S(U) {
      if (!U) return "Unknown";
      const b = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return U >= b ? `${(U / b).toFixed(1)} GB` : U >= ae ? `${(U / ae).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function V(U) {
      x.value = U.hash || U.filename;
    }
    async function K() {
      _.value = !0, d.value = null;
      try {
        const U = await r();
        await ee(), U.changes > 0 && console.log(`Scan complete: ${U.changes} changes detected`);
      } catch (U) {
        d.value = U instanceof Error ? U.message : "Failed to scan models";
      } finally {
        _.value = !1;
      }
    }
    async function oe() {
      if (R.value.trim()) {
        F.value = !0, d.value = null;
        try {
          const U = await y(R.value.trim());
          C.value = U.path, w.value = !1, R.value = "", await ee(), console.log(`Directory changed: ${U.models_indexed} models indexed`), m("refresh");
        } catch (U) {
          d.value = U instanceof Error ? U.message : "Failed to change directory";
        } finally {
          F.value = !1;
        }
      }
    }
    function q() {
      if (!L.value.trim() || !j.value.trim()) return;
      const U = j.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: U,
        url: L.value.trim(),
        targetPath: j.value.trim()
      }]), L.value = "", j.value = "", T.value = !1;
    }
    async function ee() {
      v.value = !0, d.value = null;
      try {
        a.value = await n();
      } catch (U) {
        d.value = U instanceof Error ? U.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function H() {
      try {
        const U = await g();
        C.value = U.path;
      } catch {
      }
    }
    return be(() => {
      ee(), H();
    }), (U, b) => (o(), s(A, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: b[2] || (b[2] = (ae) => k.value = !0)
          }, {
            actions: i(() => [
              f(te, {
                variant: "primary",
                size: "sm",
                disabled: _.value,
                onClick: K
              }, {
                default: i(() => [
                  p(l(_.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              f(te, {
                variant: "primary",
                size: "sm",
                onClick: b[0] || (b[0] = (ae) => w.value = !0)
              }, {
                default: i(() => [...b[15] || (b[15] = [
                  p(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(te, {
                variant: "primary",
                size: "sm",
                onClick: b[1] || (b[1] = (ae) => T.value = !0)
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
                  p(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          z.value ? (o(), s("div", bu, [
            e("div", _u, [
              e("span", $u, l(z.value.message), 1),
              e("span", Cu, l(z.value.current) + "/" + l(z.value.total), 1)
            ]),
            e("div", xu, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${z.value.current / z.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          f(ct, {
            modelValue: E.value,
            "onUpdate:modelValue": b[3] || (b[3] = (ae) => E.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value || z.value ? (o(), I(Ke, {
            key: 0,
            message: z.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), I(Je, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            a.value.length ? (o(), I(ut, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                p(" Total: " + l(a.value.length) + " models • " + l(S(N.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(A, null, se(M.value, (ae) => (o(), I(ke, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(ae.models, (J) => (o(), I(xe, {
                  key: J.sha256 || J.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...b[17] || (b[17] = [
                    p("📦", -1)
                  ])]),
                  title: i(() => [
                    p(l(J.filename), 1)
                  ]),
                  subtitle: i(() => [
                    p(l(S(J.size)), 1)
                  ]),
                  details: i(() => [
                    f(pe, {
                      label: "Hash:",
                      value: J.hash ? J.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (_e) => V(J)
                    }, {
                      default: i(() => [...b[18] || (b[18] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            O.value.length ? c("", !0) : (o(), I(Be, {
              key: 1,
              icon: "📭",
              message: E.value ? `No models match '${E.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: k.value,
        title: "About Workspace Model Index",
        onClose: b[4] || (b[4] = (ae) => k.value = !1)
      }, {
        content: i(() => [...b[19] || (b[19] = [
          e("p", null, [
            p(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            p(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      x.value ? (o(), I(Zt, {
        key: 0,
        identifier: x.value,
        onClose: b[5] || (b[5] = (ae) => x.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (o(), I(Se, { to: "body" }, [
        w.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[9] || (b[9] = we((ae) => w.value = !1, ["self"]))
        }, [
          e("div", Su, [
            e("div", Iu, [
              b[20] || (b[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[6] || (b[6] = (ae) => w.value = !1)
              }, "✕")
            ]),
            e("div", Eu, [
              e("div", Mu, [
                b[21] || (b[21] = e("label", null, "Current Directory", -1)),
                e("code", zu, l(C.value || "Not set"), 1)
              ]),
              e("div", Lu, [
                b[22] || (b[22] = e("label", null, "New Directory Path", -1)),
                f(Pe, {
                  modelValue: R.value,
                  "onUpdate:modelValue": b[7] || (b[7] = (ae) => R.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              b[23] || (b[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Tu, [
              f(le, {
                variant: "secondary",
                onClick: b[8] || (b[8] = (ae) => w.value = !1)
              }, {
                default: i(() => [...b[24] || (b[24] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(le, {
                variant: "primary",
                disabled: !R.value.trim() || F.value,
                loading: F.value,
                onClick: oe
              }, {
                default: i(() => [
                  p(l(F.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), I(Se, { to: "body" }, [
        T.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[14] || (b[14] = we((ae) => T.value = !1, ["self"]))
        }, [
          e("div", Nu, [
            e("div", Ru, [
              b[25] || (b[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[10] || (b[10] = (ae) => T.value = !1)
              }, "✕")
            ]),
            e("div", Du, [
              e("div", Ou, [
                b[26] || (b[26] = e("label", null, "Download URL", -1)),
                f(Pe, {
                  modelValue: L.value,
                  "onUpdate:modelValue": b[11] || (b[11] = (ae) => L.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Uu, [
                b[27] || (b[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                f(Pe, {
                  modelValue: j.value,
                  "onUpdate:modelValue": b[12] || (b[12] = (ae) => j.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              b[28] || (b[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Pu, [
              f(le, {
                variant: "secondary",
                onClick: b[13] || (b[13] = (ae) => T.value = !1)
              }, {
                default: i(() => [...b[29] || (b[29] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(le, {
                variant: "primary",
                disabled: !L.value.trim() || !j.value.trim(),
                onClick: q
              }, {
                default: i(() => [...b[30] || (b[30] = [
                  p(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), Fu = /* @__PURE__ */ Z(Bu, [["__scopeId", "data-v-73b78d84"]]), Vu = { class: "node-details" }, Au = { class: "status-row" }, Wu = {
  key: 0,
  class: "detail-row"
}, Gu = { class: "value" }, ju = { class: "detail-row" }, Hu = { class: "value" }, qu = {
  key: 1,
  class: "detail-row"
}, Ku = { class: "value mono" }, Ju = {
  key: 2,
  class: "detail-row"
}, Qu = ["href"], Xu = {
  key: 3,
  class: "detail-row"
}, Yu = { class: "value mono small" }, Zu = { class: "detail-row" }, em = {
  key: 0,
  class: "value"
}, tm = {
  key: 1,
  class: "workflow-list"
}, om = /* @__PURE__ */ Y({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), y = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, a) => (o(), I(dt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: a[1] || (a[1] = (v) => r("close"))
    }, {
      body: i(() => [
        e("div", Vu, [
          e("div", Au, [
            a[2] || (a[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", g.value])
            }, l(y.value), 3)
          ]),
          t.node.version ? (o(), s("div", Wu, [
            a[3] || (a[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Gu, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : c("", !0),
          e("div", ju, [
            a[4] || (a[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Hu, l(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", qu, [
            a[5] || (a[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Ku, l(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (o(), s("div", Ju, [
            a[7] || (a[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              p(l(t.node.repository) + " ", 1),
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
            ], 8, Qu)
          ])) : c("", !0),
          t.node.download_url ? (o(), s("div", Xu, [
            a[8] || (a[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Yu, l(t.node.download_url), 1)
          ])) : c("", !0),
          a[10] || (a[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Zu, [
            a[9] || (a[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", em, " Not used in any workflows ")) : (o(), s("div", tm, [
              (o(!0), s(A, null, se(t.node.used_in_workflows, (v) => (o(), s("span", {
                key: v,
                class: "workflow-tag"
              }, l(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        f(le, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (v) => r("close"))
        }, {
          default: i(() => [...a[11] || (a[11] = [
            p(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), sm = /* @__PURE__ */ Z(om, [["__scopeId", "data-v-b342f626"]]), nm = { key: 0 }, am = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, lm = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, im = /* @__PURE__ */ Y({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: g, installNode: y, uninstallNode: h } = Ie(), m = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), a = $(!1), v = $(null), _ = $(""), d = $(!1), E = $(null), k = B(() => {
      if (!_.value.trim()) return m.value.nodes;
      const M = _.value.toLowerCase();
      return m.value.nodes.filter(
        (S) => {
          var V, K;
          return S.name.toLowerCase().includes(M) || ((V = S.description) == null ? void 0 : V.toLowerCase().includes(M)) || ((K = S.repository) == null ? void 0 : K.toLowerCase().includes(M));
        }
      );
    }), x = B(
      () => k.value.filter((M) => M.installed && M.tracked)
    ), w = B(
      () => k.value.filter((M) => !M.installed && M.tracked)
    ), C = B(
      () => k.value.filter((M) => M.installed && !M.tracked)
    );
    function R(M) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[M] || M;
    }
    function F(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function T(M) {
      E.value = M;
    }
    function L() {
      n("open-node-manager");
    }
    async function j(M) {
      if (confirm(`Track "${M}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          a.value = !0;
          const S = await g(M);
          S.status === "success" ? (alert(`Node "${M}" is now tracked as development!`), await O()) : alert(`Failed to track node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error tracking node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function z(M) {
      if (confirm(`Remove untracked node "${M}"?

This will delete the node directory from custom_nodes/.`))
        try {
          a.value = !0;
          const S = await h(M);
          S.status === "success" ? (alert(`Node "${M}" removed!`), await O()) : alert(`Failed to remove node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error removing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function N(M) {
      if (confirm(`Install node "${M}"?

This will download and install the node.`))
        try {
          a.value = !0;
          const S = await y(M);
          S.status === "success" ? (alert(`Node "${M}" installed successfully!`), await O()) : alert(`Failed to install node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error installing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function O() {
      a.value = !0, v.value = null;
      try {
        m.value = await r();
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        a.value = !1;
      }
    }
    return be(O), (M, S) => (o(), s(A, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (V) => d.value = !0)
          }, {
            actions: i(() => [
              f(te, {
                variant: "primary",
                size: "sm",
                onClick: L
              }, {
                default: i(() => [...S[5] || (S[5] = [
                  p(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          f(ct, {
            modelValue: _.value,
            "onUpdate:modelValue": S[1] || (S[1] = (V) => _.value = V),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), I(Ke, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (o(), I(Je, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            m.value.total_count ? (o(), I(ut, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                p(l(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (o(), s(A, { key: 0 }, [
                  p(" • " + l(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (o(), s(A, { key: 1 }, [
                  p(" • " + l(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            C.value.length ? (o(), I(ke, {
              key: 1,
              title: "UNTRACKED",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(C.value, (V) => (o(), I(xe, {
                  key: V.name,
                  status: "warning"
                }, {
                  icon: i(() => [...S[6] || (S[6] = [
                    p("?", -1)
                  ])]),
                  title: i(() => [
                    p(l(V.name), 1)
                  ]),
                  subtitle: i(() => [...S[7] || (S[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    f(pe, {
                      label: "Used by:",
                      value: F(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => T(V)
                    }, {
                      default: i(() => [...S[8] || (S[8] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => j(V.name)
                    }, {
                      default: i(() => [...S[9] || (S[9] = [
                        p(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (K) => z(V.name)
                    }, {
                      default: i(() => [...S[10] || (S[10] = [
                        p(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            x.value.length ? (o(), I(ke, {
              key: 2,
              title: "INSTALLED",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(x.value, (V) => (o(), I(xe, {
                  key: V.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    p(l(V.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    p(l(V.name), 1)
                  ]),
                  subtitle: i(() => [
                    V.version ? (o(), s("span", nm, l(V.source === "development" ? "" : "v") + l(V.version), 1)) : (o(), s("span", am, "version unknown")),
                    e("span", lm, " • " + l(R(V.source)), 1)
                  ]),
                  details: i(() => [
                    f(pe, {
                      label: "Used by:",
                      value: F(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => T(V)
                    }, {
                      default: i(() => [...S[11] || (S[11] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: L
                    }, {
                      default: i(() => [...S[12] || (S[12] = [
                        p(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            w.value.length ? (o(), I(ke, {
              key: 3,
              title: "MISSING",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(w.value, (V) => (o(), I(xe, {
                  key: V.name,
                  status: "missing"
                }, {
                  icon: i(() => [...S[13] || (S[13] = [
                    p("!", -1)
                  ])]),
                  title: i(() => [
                    p(l(V.name), 1)
                  ]),
                  subtitle: i(() => [...S[14] || (S[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    f(pe, {
                      label: "Required by:",
                      value: F(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => T(V)
                    }, {
                      default: i(() => [...S[15] || (S[15] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => N(V.name)
                    }, {
                      default: i(() => [...S[16] || (S[16] = [
                        p(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !x.value.length && !w.value.length && !C.value.length ? (o(), I(Be, {
              key: 4,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: S[3] || (S[3] = (V) => d.value = !1)
      }, {
        content: i(() => [...S[17] || (S[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            p(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            p(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            p(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: i(() => [
          f(te, {
            variant: "primary",
            onClick: S[2] || (S[2] = (V) => d.value = !1)
          }, {
            default: i(() => [...S[18] || (S[18] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      E.value ? (o(), I(sm, {
        key: 0,
        node: E.value,
        onClose: S[4] || (S[4] = (V) => E.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), rm = /* @__PURE__ */ Z(im, [["__scopeId", "data-v-4ac1465a"]]), dm = { class: "remote-url-display" }, cm = ["title"], um = ["title"], mm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, vm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, fm = /* @__PURE__ */ Y({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = $(!1), r = B(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const y = u.url.slice(0, Math.floor(u.maxLength * 0.6)), h = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${y}...${h}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, h) => (o(), s("div", dm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, cm),
      e("button", {
        class: ne(["copy-btn", { copied: n.value }]),
        onClick: g,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", vm, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", mm, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, um)
    ]));
  }
}), Wt = /* @__PURE__ */ Z(fm, [["__scopeId", "data-v-7768a58d"]]), gm = { class: "remote-title" }, hm = {
  key: 0,
  class: "default-badge"
}, pm = {
  key: 1,
  class: "sync-badge"
}, ym = {
  key: 0,
  class: "ahead"
}, wm = {
  key: 1,
  class: "behind"
}, km = {
  key: 0,
  class: "tracking-info"
}, bm = /* @__PURE__ */ Y({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: u }) {
    const n = t, r = B(() => n.fetchingRemote === n.remote.name), g = B(() => n.remote.is_default), y = B(() => !!n.trackingBranch);
    function h(m) {
      const a = new Date(m), _ = (/* @__PURE__ */ new Date()).getTime() - a.getTime(), d = Math.floor(_ / 6e4);
      if (d < 1) return "Just now";
      if (d < 60) return `${d}m ago`;
      const E = Math.floor(d / 60);
      if (E < 24) return `${E}h ago`;
      const k = Math.floor(E / 24);
      return k < 7 ? `${k}d ago` : a.toLocaleDateString();
    }
    return (m, a) => (o(), I(xe, {
      status: g.value ? "synced" : void 0
    }, {
      icon: i(() => [
        p(l(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", gm, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), s("span", hm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), s("span", pm, [
            t.syncStatus.ahead > 0 ? (o(), s("span", ym, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", wm, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        y.value ? (o(), s("span", km, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var v;
        return [
          f(pe, { label: "Fetch:" }, {
            default: i(() => [
              f(Wt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), I(pe, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              f(Wt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (v = t.syncStatus) != null && v.last_fetch ? (o(), I(pe, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, l(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: i(() => [
        f(te, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: a[0] || (a[0] = (v) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...a[3] || (a[3] = [
            p(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(te, {
          variant: "secondary",
          size: "xs",
          onClick: a[1] || (a[1] = (v) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...a[4] || (a[4] = [
            p(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? c("", !0) : (o(), I(te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: a[2] || (a[2] = (v) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...a[5] || (a[5] = [
            p(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), _m = /* @__PURE__ */ Z(bm, [["__scopeId", "data-v-17362e45"]]), $m = ["for"], Cm = {
  key: 0,
  class: "base-form-field-required"
}, xm = { class: "base-form-field-input" }, Sm = {
  key: 1,
  class: "base-form-field-error"
}, Im = {
  key: 2,
  class: "base-form-field-hint"
}, Em = /* @__PURE__ */ Y({
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
    const u = t, n = B(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, g) => (o(), s("div", {
      class: ne(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        p(l(t.label) + " ", 1),
        t.required ? (o(), s("span", Cm, "*")) : c("", !0)
      ], 8, $m)) : c("", !0),
      e("div", xm, [
        de(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Sm, l(t.error), 1)) : t.hint ? (o(), s("span", Im, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ Z(Em, [["__scopeId", "data-v-9a1cf296"]]), Mm = { class: "remote-form" }, zm = { class: "form-header" }, Lm = { class: "form-body" }, Tm = {
  key: 0,
  class: "form-error"
}, Nm = { class: "form-actions" }, Rm = /* @__PURE__ */ Y({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, g = $({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), y = $(!1), h = $(null);
    Ot(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      g.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = B(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function a() {
      if (!(!m.value || y.value)) {
        h.value = null, y.value = !0;
        try {
          r("submit", g.value);
        } catch (v) {
          h.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (v, _) => (o(), s("div", Mm, [
      e("div", zm, [
        f(Te, null, {
          default: i(() => [
            p(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Lm, [
        f(Lt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            f(Pe, {
              modelValue: g.value.name,
              "onUpdate:modelValue": _[0] || (_[0] = (d) => g.value.name = d),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        f(Lt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            f(Pe, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": _[1] || (_[1] = (d) => g.value.fetchUrl = d),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f(Lt, { label: "Push URL (optional)" }, {
          default: i(() => [
            f(Pe, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": _[2] || (_[2] = (d) => g.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), s("div", Tm, l(h.value), 1)) : c("", !0)
      ]),
      e("div", Nm, [
        f(te, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: y.value,
          onClick: a
        }, {
          default: i(() => [
            p(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(te, {
          variant: "ghost",
          size: "md",
          onClick: _[3] || (_[3] = (d) => v.$emit("cancel"))
        }, {
          default: i(() => [..._[4] || (_[4] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Dm = /* @__PURE__ */ Z(Rm, [["__scopeId", "data-v-56021b18"]]), Om = { key: 0 }, Um = /* @__PURE__ */ Y({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: u,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: g,
      fetchRemote: y,
      getRemoteSyncStatus: h
    } = Ie(), m = $([]), a = $(null), v = $({}), _ = $(!1), d = $(null), E = $(""), k = $(!1), x = $(null), w = $(!1), C = $("add"), R = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), F = B(() => {
      if (!E.value.trim()) return m.value;
      const K = E.value.toLowerCase();
      return m.value.filter(
        (oe) => oe.name.toLowerCase().includes(K) || oe.fetch_url.toLowerCase().includes(K) || oe.push_url.toLowerCase().includes(K)
      );
    });
    function T(K) {
      var oe;
      return ((oe = a.value) == null ? void 0 : oe.remote) === K;
    }
    async function L() {
      _.value = !0, d.value = null;
      try {
        const K = await u();
        m.value = K.remotes, a.value = K.current_branch_tracking || null, await Promise.all(
          K.remotes.map(async (oe) => {
            const q = await h(oe.name);
            q && (v.value[oe.name] = q);
          })
        );
      } catch (K) {
        d.value = K instanceof Error ? K.message : "Failed to load remotes";
      } finally {
        _.value = !1;
      }
    }
    function j() {
      C.value = "add", R.value = { name: "", fetchUrl: "", pushUrl: "" }, w.value = !0;
    }
    function z(K) {
      const oe = m.value.find((q) => q.name === K);
      oe && (C.value = "edit", R.value = {
        name: oe.name,
        fetchUrl: oe.fetch_url,
        pushUrl: oe.push_url
      }, w.value = !0);
    }
    async function N(K) {
      try {
        C.value === "add" ? await n(K.name, K.fetchUrl) : await g(K.name, K.fetchUrl, K.pushUrl || void 0), w.value = !1, await L();
      } catch (oe) {
        d.value = oe instanceof Error ? oe.message : "Operation failed";
      }
    }
    function O() {
      w.value = !1, R.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function M(K) {
      x.value = K;
      try {
        await y(K);
        const oe = await h(K);
        oe && (v.value[K] = oe);
      } catch (oe) {
        d.value = oe instanceof Error ? oe.message : "Fetch failed";
      } finally {
        x.value = null;
      }
    }
    async function S(K) {
      if (confirm(`Remove remote "${K}"?`))
        try {
          await r(K), await L();
        } catch (oe) {
          d.value = oe instanceof Error ? oe.message : "Failed to remove remote";
        }
    }
    function V() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return be(L), (K, oe) => (o(), s(A, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (q) => k.value = !0)
          }, {
            actions: i(() => [
              w.value ? c("", !0) : (o(), I(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: i(() => [...oe[3] || (oe[3] = [
                  p(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          w.value ? c("", !0) : (o(), I(ct, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (q) => E.value = q),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          _.value ? (o(), I(Ke, {
            key: 0,
            message: "Loading remotes..."
          })) : d.value ? (o(), I(Je, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            w.value ? (o(), I(Dm, {
              key: 0,
              mode: C.value,
              "remote-name": R.value.name,
              "fetch-url": R.value.fetchUrl,
              "push-url": R.value.pushUrl,
              onSubmit: N,
              onCancel: O
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !w.value ? (o(), I(ut, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                p(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                a.value ? (o(), s("span", Om, " • Tracking: " + l(a.value.remote) + "/" + l(a.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            F.value.length && !w.value ? (o(), I(ke, {
              key: 2,
              title: "REMOTES",
              count: F.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, se(F.value, (q) => {
                  var ee;
                  return o(), I(_m, {
                    key: q.name,
                    remote: q,
                    "sync-status": v.value[q.name],
                    "tracking-branch": T(q.name) ? (ee = a.value) == null ? void 0 : ee.branch : void 0,
                    "fetching-remote": x.value,
                    onFetch: M,
                    onEdit: z,
                    onRemove: S
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !F.value.length && !w.value ? (o(), I(Be, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                f(te, {
                  variant: "primary",
                  onClick: j
                }, {
                  default: i(() => [...oe[4] || (oe[4] = [
                    p(" Add Your First Remote ", -1)
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
      f(qe, {
        show: k.value,
        title: "About Git Remotes",
        onClose: oe[2] || (oe[2] = (q) => k.value = !1)
      }, {
        content: i(() => [...oe[5] || (oe[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            p(" The "),
            e("strong", null, '"origin"'),
            p(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          f(te, {
            variant: "link",
            onClick: V
          }, {
            default: i(() => [...oe[6] || (oe[6] = [
              p(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Pm = /* @__PURE__ */ Z(Um, [["__scopeId", "data-v-a75719bb"]]), Bm = { class: "setting-info" }, Fm = { class: "setting-label" }, Vm = {
  key: 0,
  class: "required-marker"
}, Am = {
  key: 0,
  class: "setting-description"
}, Wm = { class: "setting-control" }, Gm = /* @__PURE__ */ Y({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: ne(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Bm, [
        e("div", Fm, [
          p(l(t.label) + " ", 1),
          t.required ? (o(), s("span", Vm, "*")) : c("", !0)
        ]),
        t.description ? (o(), s("div", Am, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Wm, [
        de(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ge = /* @__PURE__ */ Z(Gm, [["__scopeId", "data-v-cb5d236c"]]), jm = { class: "toggle" }, Hm = ["checked", "disabled"], qm = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", jm, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Hm),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), et = /* @__PURE__ */ Z(qm, [["__scopeId", "data-v-71c0f550"]]), Km = { class: "settings-section" }, Jm = { class: "path-setting" }, Qm = { class: "path-value" }, Xm = { class: "path-setting" }, Ym = { class: "path-value" }, Zm = { class: "settings-section" }, ev = { class: "settings-section" }, tv = { class: "settings-section" }, ov = /* @__PURE__ */ Y({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Ie(), r = $(!1), g = $(null), y = $(null), h = $(null), m = $(null), a = $(""), v = $(""), _ = $(!0), d = $(!0), E = $(!1), k = B(() => m.value ? a.value !== (m.value.civitai_api_key || "") : !1);
    async function x() {
      r.value = !0, g.value = null;
      try {
        h.value = await u(), m.value = { ...h.value }, a.value = h.value.civitai_api_key || "", v.value = h.value.huggingface_token || "", _.value = h.value.auto_sync_models, d.value = h.value.confirm_destructive;
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        E.value = F === "true";
      } catch (F) {
        g.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function w() {
      var F;
      y.value = null;
      try {
        const T = {};
        a.value !== (((F = m.value) == null ? void 0 : F.civitai_api_key) || "") && (T.civitai_api_key = a.value || null), await n(T), await x(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (T) {
        y.value = {
          type: "error",
          message: T instanceof Error ? T.message : "Failed to save settings"
        };
      }
    }
    function C() {
      m.value && (a.value = m.value.civitai_api_key || "", v.value = m.value.huggingface_token || "", _.value = m.value.auto_sync_models, d.value = m.value.confirm_destructive, y.value = null);
    }
    function R(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return be(x), (F, T) => (o(), I(Ee, null, {
      header: i(() => [
        f(Me, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            f(te, {
              variant: "primary",
              size: "sm",
              disabled: !k.value,
              onClick: w
            }, {
              default: i(() => [...T[5] || (T[5] = [
                p(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            k.value ? (o(), I(te, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: C
            }, {
              default: i(() => [...T[6] || (T[6] = [
                p(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), I(Ke, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), I(Je, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: x
        }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
          f(ke, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var L, j;
              return [
                e("div", Km, [
                  e("div", Jm, [
                    T[7] || (T[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    T[8] || (T[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Qm, l(((L = h.value) == null ? void 0 : L.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Xm, [
                    T[9] || (T[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    T[10] || (T[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Ym, l(((j = h.value) == null ? void 0 : j.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(ke, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", Zm, [
                f(Ge, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    f(xt, {
                      modelValue: a.value,
                      "onUpdate:modelValue": T[0] || (T[0] = (L) => a.value = L),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(Ge, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(xt, {
                      modelValue: v.value,
                      "onUpdate:modelValue": T[1] || (T[1] = (L) => v.value = L),
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
          f(ke, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", ev, [
                f(Ge, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    f(et, {
                      modelValue: E.value,
                      "onUpdate:modelValue": [
                        T[2] || (T[2] = (L) => E.value = L),
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
          f(ke, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", tv, [
                f(Ge, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(et, {
                      modelValue: _.value,
                      "onUpdate:modelValue": T[3] || (T[3] = (L) => _.value = L),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(Ge, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(et, {
                      modelValue: d.value,
                      "onUpdate:modelValue": T[4] || (T[4] = (L) => d.value = L),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), I(ut, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: He({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), sv = /* @__PURE__ */ Z(ov, [["__scopeId", "data-v-7861bd35"]]), nv = /* @__PURE__ */ Y({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Ie(), n = $([]), r = $(!1), g = $(null), y = $(!1), h = $(null), m = B(() => n.value.length === 0 ? [] : n.value.map((v) => ({
      text: `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function a() {
      r.value = !0, g.value = null;
      try {
        n.value = await u(void 0, 500);
      } catch (v) {
        g.value = v instanceof Error ? v.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var v;
          (v = h.value) != null && v.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(a), (v, _) => (o(), s(A, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (d) => y.value = !0)
          }, {
            actions: i(() => [
              f(te, {
                variant: "secondary",
                size: "sm",
                onClick: a,
                disabled: r.value
              }, {
                default: i(() => [
                  p(l(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          r.value ? (o(), I(Ke, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), I(Je, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: a
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            n.value.length === 0 ? (o(), I(Be, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(A, null, se(m.value, (d, E) => (o(), s("div", {
                key: E,
                class: ne(`log-line log-level-${d.level.toLowerCase()}`)
              }, l(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: _[2] || (_[2] = (d) => y.value = !1)
      }, {
        content: i(() => [..._[3] || (_[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            p(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            p(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            p(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            p(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: i(() => [
          f(te, {
            variant: "primary",
            onClick: _[1] || (_[1] = (d) => y.value = !1)
          }, {
            default: i(() => [..._[4] || (_[4] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), av = /* @__PURE__ */ Z(nv, [["__scopeId", "data-v-39f6a756"]]), lv = /* @__PURE__ */ Y({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Ie(), r = $([]), g = $(!1), y = $(null), h = $(!1), m = $("production"), a = $(null), v = B(() => r.value.length === 0 ? [] : r.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function _() {
      g.value = !0, y.value = null;
      try {
        r.value = await u(void 0, 500);
        try {
          const d = await n();
          m.value = d.environment || "production";
        } catch {
        }
      } catch (d) {
        y.value = d instanceof Error ? d.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var d;
          (d = a.value) != null && d.parentElement && (a.value.parentElement.scrollTop = a.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(_), (d, E) => (o(), s(A, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (k) => h.value = !0)
          }, {
            actions: i(() => [
              f(te, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: g.value
              }, {
                default: i(() => [
                  p(l(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          g.value ? (o(), I(Ke, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), I(Je, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            r.value.length === 0 ? (o(), I(Be, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: a,
              class: "log-output"
            }, [
              (o(!0), s(A, null, se(v.value, (k, x) => (o(), s("div", {
                key: x,
                class: ne(`log-line log-level-${k.level.toLowerCase()}`)
              }, l(k.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(qe, {
        show: h.value,
        title: "About Environment Logs",
        onClose: E[2] || (E[2] = (k) => h.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            E[3] || (E[3] = p(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(m.value), 1),
            E[4] || (E[4] = p(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          E[5] || (E[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            p(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            p(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            p(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            p(" Detailed debugging information ")
          ], -1)),
          E[6] || (E[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          f(te, {
            variant: "primary",
            onClick: E[1] || (E[1] = (k) => h.value = !1)
          }, {
            default: i(() => [...E[7] || (E[7] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), iv = /* @__PURE__ */ Z(lv, [["__scopeId", "data-v-4f1e6f72"]]), rv = { class: "env-title" }, dv = {
  key: 0,
  class: "current-badge"
}, cv = {
  key: 0,
  class: "branch-info"
}, uv = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), I(xe, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: i(() => [
        p(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", rv, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", dv, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", cv, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          p(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: i(() => [
        f(pe, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        f(pe, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        f(pe, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), I(pe, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: i(() => [
        de(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), mv = /* @__PURE__ */ Z(uv, [["__scopeId", "data-v-5238e57c"]]), vv = {
  key: 0,
  class: "create-form"
}, fv = { class: "create-form__header" }, gv = { class: "create-form__body" }, hv = { class: "create-form__actions" }, pv = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, yv = /* @__PURE__ */ Y({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironments: r } = Ie(), g = $([]), y = $(!1), h = $(null), m = $(""), a = $(!1), v = $(!1), _ = $(""), d = B(
      () => g.value.find((T) => T.is_current)
    ), E = B(() => {
      if (!m.value.trim()) return g.value;
      const T = m.value.toLowerCase();
      return g.value.filter(
        (L) => {
          var j;
          return L.name.toLowerCase().includes(T) || ((j = L.current_branch) == null ? void 0 : j.toLowerCase().includes(T));
        }
      );
    });
    function k(T) {
      if (!T) return "";
      try {
        const L = new Date(T), z = (/* @__PURE__ */ new Date()).getTime() - L.getTime(), N = Math.floor(z / 6e4), O = Math.floor(z / 36e5), M = Math.floor(z / 864e5);
        return N < 1 ? "just now" : N < 60 ? `${N} ${N === 1 ? "minute" : "minutes"} ago` : O < 24 ? `${O} ${O === 1 ? "hour" : "hours"} ago` : M < 30 ? `${M} ${M === 1 ? "day" : "days"} ago` : L.toLocaleDateString();
      } catch {
        return T;
      }
    }
    function x() {
      const T = _.value.trim();
      T && (n("create", T), _.value = "", v.value = !1);
    }
    function w() {
      _.value = "", v.value = !1;
    }
    function C(T) {
      n("viewDetails", T);
    }
    function R(T) {
      confirm(`Delete environment "${T}"?

This action cannot be undone.`) && n("delete", T);
    }
    async function F() {
      y.value = !0, h.value = null;
      try {
        g.value = await r();
      } catch (T) {
        h.value = T instanceof Error ? T.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return be(F), (T, L) => {
      const j = uo("SectionGroup");
      return o(), s(A, null, [
        f(Ee, null, {
          header: i(() => [
            f(Me, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: L[1] || (L[1] = (z) => a.value = !0)
            }, {
              actions: i(() => [
                f(te, {
                  variant: "ghost",
                  size: "sm",
                  onClick: L[0] || (L[0] = (z) => v.value = !0),
                  title: "Create new environment"
                }, {
                  default: i(() => [...L[7] || (L[7] = [
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
                f(te, {
                  variant: "ghost",
                  size: "sm",
                  onClick: F,
                  title: "Refresh environments"
                }, {
                  default: i(() => [...L[8] || (L[8] = [
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
          search: i(() => [
            f(ct, {
              modelValue: m.value,
              "onUpdate:modelValue": L[2] || (L[2] = (z) => m.value = z),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: i(() => [
            y.value ? (o(), I(Ke, {
              key: 0,
              message: "Loading environments..."
            })) : h.value ? (o(), I(Je, {
              key: 1,
              message: h.value,
              retry: !0,
              onRetry: F
            }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
              v.value ? (o(), s("div", vv, [
                e("div", fv, [
                  L[10] || (L[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  f(te, {
                    variant: "ghost",
                    size: "xs",
                    onClick: w
                  }, {
                    default: i(() => [...L[9] || (L[9] = [
                      p(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", gv, [
                  f(xt, {
                    modelValue: _.value,
                    "onUpdate:modelValue": L[3] || (L[3] = (z) => _.value = z),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      je(x, ["enter"]),
                      je(w, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", hv, [
                    f(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: x,
                      disabled: !_.value.trim()
                    }, {
                      default: i(() => [...L[11] || (L[11] = [
                        p(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: w
                    }, {
                      default: i(() => [...L[12] || (L[12] = [
                        p(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              g.value.length ? (o(), I(ut, {
                key: 1,
                variant: "compact"
              }, {
                default: i(() => [
                  p(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  d.value ? (o(), s(A, { key: 0 }, [
                    L[13] || (L[13] = p(" • Current: ", -1)),
                    e("strong", null, l(d.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              E.value.length ? (o(), I(j, {
                key: 2,
                title: "ENVIRONMENTS",
                count: E.value.length
              }, {
                default: i(() => [
                  (o(!0), s(A, null, se(E.value, (z) => (o(), I(mv, {
                    key: z.name,
                    "environment-name": z.name,
                    "is-current": z.is_current,
                    "current-branch": z.current_branch,
                    "workflow-count": z.workflow_count,
                    "node-count": z.node_count,
                    "model-count": z.model_count,
                    "last-used": k(z.last_used),
                    "show-last-used": !!z.last_used
                  }, {
                    actions: i(() => [
                      z.is_current ? c("", !0) : (o(), I(te, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (N) => T.$emit("switch", z.name)
                      }, {
                        default: i(() => [...L[14] || (L[14] = [
                          p(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      f(te, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (N) => C(z.name),
                        title: "View environment details"
                      }, {
                        default: i(() => [...L[15] || (L[15] = [
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
                      !z.is_current && g.value.length > 1 ? (o(), I(te, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (N) => R(z.name),
                        title: "Delete environment"
                      }, {
                        default: i(() => [
                          (o(), s("svg", pv, [...L[16] || (L[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : c("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : c("", !0),
              E.value.length ? c("", !0) : (o(), I(Be, {
                key: 3,
                icon: "🌍",
                message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
              }, Ut({ _: 2 }, [
                m.value ? void 0 : {
                  name: "actions",
                  fn: i(() => [
                    f(te, {
                      variant: "primary",
                      onClick: L[4] || (L[4] = (z) => v.value = !0)
                    }, {
                      default: i(() => [...L[17] || (L[17] = [
                        p(" Create Environment ", -1)
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
        f(qe, {
          show: a.value,
          title: "About Environments",
          onClose: L[6] || (L[6] = (z) => a.value = !1)
        }, {
          content: i(() => [...L[18] || (L[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              p(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            f(te, {
              variant: "secondary",
              onClick: L[5] || (L[5] = (z) => a.value = !1)
            }, {
              default: i(() => [...L[19] || (L[19] = [
                p(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), wv = /* @__PURE__ */ Z(yv, [["__scopeId", "data-v-97d6527d"]]), kv = { class: "file-path" }, bv = { class: "file-path-text" }, _v = ["title"], $v = /* @__PURE__ */ Y({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = $(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, y) => (o(), s("div", kv, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", bv, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(n.value ? "✓" : "📋"), 9, _v)) : c("", !0)
    ]));
  }
}), Cv = /* @__PURE__ */ Z($v, [["__scopeId", "data-v-f0982173"]]), xv = { class: "output-path-input" }, Sv = { class: "export-actions" }, Iv = {
  key: 1,
  class: "export-warning"
}, Ev = /* @__PURE__ */ Y({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = Ie(), n = $(""), r = $(!1), g = $(null), y = $(!1);
    async function h() {
      r.value = !0, g.value = null;
      try {
        const a = await u(n.value || void 0);
        g.value = a;
      } catch (a) {
        g.value = {
          status: "error",
          message: a instanceof Error ? a.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function m() {
      var a;
      if ((a = g.value) != null && a.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (v) {
          console.error("Failed to copy path:", v);
        }
    }
    return (a, v) => (o(), s(A, null, [
      f(Ee, null, {
        header: i(() => [
          f(Me, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              f(te, {
                variant: "ghost",
                size: "sm",
                onClick: v[0] || (v[0] = (_) => y.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...v[5] || (v[5] = [
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
          f(ke, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              f(xe, { status: "synced" }, {
                icon: i(() => [...v[6] || (v[6] = [
                  p("📦", -1)
                ])]),
                title: i(() => [...v[7] || (v[7] = [
                  p("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...v[8] || (v[8] = [
                  p(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  f(pe, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  f(pe, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  f(pe, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  f(pe, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(ke, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              f(xe, { status: "synced" }, {
                icon: i(() => [...v[9] || (v[9] = [
                  p("📁", -1)
                ])]),
                title: i(() => [...v[10] || (v[10] = [
                  p("Output Destination", -1)
                ])]),
                subtitle: i(() => [...v[11] || (v[11] = [
                  p(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", xv, [
                    f(xt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": v[1] || (v[1] = (_) => n.value = _),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(ke, { title: "EXPORT" }, {
            default: i(() => [
              e("div", Sv, [
                f(te, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
                }, {
                  default: i(() => [
                    v[12] || (v[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    p(" " + l(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), I(te, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: v[2] || (v[2] = (_) => n.value = "")
                }, {
                  default: i(() => [...v[13] || (v[13] = [
                    p(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), I(ke, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              f(xe, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, Ut({
                icon: i(() => [
                  p(l(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  p(l(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  p(l(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    f(pe, { label: "Saved to:" }, {
                      default: i(() => [
                        f(Cv, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), I(pe, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), s("div", Iv, [...v[14] || (v[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    f(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...v[15] || (v[15] = [
                        p(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: v[3] || (v[3] = (_) => g.value = null)
                    }, {
                      default: i(() => [...v[16] || (v[16] = [
                        p(" Dismiss ", -1)
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
      f(qe, {
        show: y.value,
        title: "About Environment Export",
        onClose: v[4] || (v[4] = (_) => y.value = !1)
      }, {
        content: i(() => [...v[17] || (v[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            p(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Mv = /* @__PURE__ */ Z(Ev, [["__scopeId", "data-v-1777a9d5"]]), zv = { class: "file-input-wrapper" }, Lv = ["accept", "multiple", "disabled"], Tv = /* @__PURE__ */ Y({
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
    const r = n, g = $(null);
    function y() {
      var m;
      (m = g.value) == null || m.click();
    }
    function h(m) {
      const a = m.target;
      a.files && a.files.length > 0 && (r("change", a.files), a.value = "");
    }
    return u({
      triggerInput: y
    }), (m, a) => (o(), s("div", zv, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Lv),
      f(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: i(() => [
          de(m.$slots, "default", {}, () => [
            a[0] || (a[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            p(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Nv = /* @__PURE__ */ Z(Tv, [["__scopeId", "data-v-cd192091"]]), Rv = {
  key: 0,
  class: "drop-zone-empty"
}, Dv = { class: "drop-zone-text" }, Ov = { class: "drop-zone-primary" }, Uv = { class: "drop-zone-secondary" }, Pv = { class: "drop-zone-actions" }, Bv = {
  key: 1,
  class: "drop-zone-file"
}, Fv = { class: "file-info" }, Vv = { class: "file-details" }, Av = { class: "file-name" }, Wv = { class: "file-size" }, Gv = /* @__PURE__ */ Y({
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
    const n = u, r = $(!1), g = $(null), y = $(0), h = B(() => g.value !== null), m = B(() => {
      var C;
      return ((C = g.value) == null ? void 0 : C.name) || "";
    }), a = B(() => {
      if (!g.value) return "";
      const C = g.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(C) {
      var R;
      y.value++, (R = C.dataTransfer) != null && R.types.includes("Files") && (r.value = !0);
    }
    function _(C) {
      C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function d() {
      y.value--, y.value === 0 && (r.value = !1);
    }
    function E(C) {
      var F;
      y.value = 0, r.value = !1;
      const R = (F = C.dataTransfer) == null ? void 0 : F.files;
      R && R.length > 0 && x(R[0]);
    }
    function k(C) {
      C.length > 0 && x(C[0]);
    }
    function x(C) {
      g.value = C, n("fileSelected", C);
    }
    function w() {
      g.value = null, n("clear");
    }
    return (C, R) => (o(), s("div", {
      class: ne(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: we(v, ["prevent"]),
      onDragover: we(_, ["prevent"]),
      onDragleave: we(d, ["prevent"]),
      onDrop: we(E, ["prevent"])
    }, [
      h.value ? (o(), s("div", Bv, [
        e("div", Fv, [
          R[1] || (R[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Vv, [
            e("div", Av, l(m.value), 1),
            e("div", Wv, l(a.value), 1)
          ])
        ]),
        f(te, {
          variant: "ghost",
          size: "xs",
          onClick: w,
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
      ])) : (o(), s("div", Rv, [
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
        e("div", Dv, [
          e("p", Ov, l(t.primaryText), 1),
          e("p", Uv, l(t.secondaryText), 1)
        ]),
        e("div", Pv, [
          f(Nv, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: k
          }, {
            default: i(() => [
              p(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), jv = /* @__PURE__ */ Z(Gv, [["__scopeId", "data-v-e00abbca"]]), Hv = { class: "import-preview" }, qv = { class: "preview-header" }, Kv = {
  key: 0,
  class: "source-env"
}, Jv = { class: "preview-content" }, Qv = { class: "preview-section" }, Xv = { class: "section-header" }, Yv = { class: "section-info" }, Zv = { class: "section-count" }, ef = {
  key: 0,
  class: "item-list"
}, tf = { class: "item-name" }, of = {
  key: 0,
  class: "item-more"
}, sf = { class: "preview-section" }, nf = { class: "section-header" }, af = { class: "section-info" }, lf = { class: "section-count" }, rf = {
  key: 0,
  class: "item-list"
}, df = { class: "item-details" }, cf = { class: "item-name" }, uf = { class: "item-meta" }, mf = {
  key: 0,
  class: "item-more"
}, vf = { class: "preview-section" }, ff = { class: "section-header" }, gf = { class: "section-info" }, hf = { class: "section-count" }, pf = {
  key: 0,
  class: "item-list"
}, yf = { class: "item-name" }, wf = {
  key: 0,
  class: "item-more"
}, kf = {
  key: 0,
  class: "preview-section"
}, bf = { class: "git-info" }, _f = /* @__PURE__ */ Y({
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
    const u = t, n = B(() => u.workflows.length), r = B(() => u.models.length), g = B(() => u.nodes.length);
    function y(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, m) => (o(), s("div", Hv, [
      e("div", qv, [
        f(Te, null, {
          default: i(() => [...m[0] || (m[0] = [
            p("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Kv, [
          m[1] || (m[1] = p(" From: ", -1)),
          f(Rt, null, {
            default: i(() => [
              p(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Jv, [
        e("div", Qv, [
          e("div", Xv, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Yv, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Zv, l(n.value) + " file" + l(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", ef, [
            (o(!0), s(A, null, se(t.workflows.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", tf, l(a), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", of, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", sf, [
          e("div", nf, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", af, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", lf, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", rf, [
            (o(!0), s(A, null, se(t.models.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", df, [
                e("span", cf, l(a.filename), 1),
                e("span", uf, l(y(a.size)) + " • " + l(a.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", mf, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", vf, [
          e("div", ff, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", gf, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", hf, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", pf, [
            (o(!0), s(A, null, se(t.nodes.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", yf, l(a), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", wf, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", kf, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", bf, [
            t.gitBranch ? (o(), I(pe, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                f(Rt, null, {
                  default: i(() => [
                    p(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), I(pe, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                f(Jt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), $f = /* @__PURE__ */ Z(_f, [["__scopeId", "data-v-182fe113"]]), Cf = { class: "import-options" }, xf = { class: "options-container" }, Sf = { class: "option-section" }, If = { class: "conflict-options" }, Ef = ["value", "checked", "onChange"], Mf = { class: "conflict-content" }, zf = { class: "conflict-label" }, Lf = { class: "conflict-description" }, Tf = { class: "option-section" }, Nf = { class: "component-toggles" }, Rf = /* @__PURE__ */ Y({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: u }) {
    const n = u, r = [
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
    return (g, y) => (o(), s("div", Cf, [
      f(Te, null, {
        default: i(() => [...y[4] || (y[4] = [
          p("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", xf, [
        e("div", Sf, [
          f(Nt, null, {
            default: i(() => [...y[5] || (y[5] = [
              p("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", If, [
            (o(), s(A, null, se(r, (h) => e("label", {
              key: h.value,
              class: ne(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (m) => n("update:conflictMode", h.value)
              }, null, 40, Ef),
              e("div", Mf, [
                e("span", zf, l(h.label), 1),
                e("span", Lf, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Tf, [
          f(Nt, null, {
            default: i(() => [...y[6] || (y[6] = [
              p("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Nf, [
            f(Ge, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (h) => n("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (h) => n("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (h) => n("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                f(et, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (h) => n("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Df = /* @__PURE__ */ Z(Rf, [["__scopeId", "data-v-0ec212b0"]]), Of = {
  key: 0,
  class: "import-empty"
}, Uf = { class: "import-help" }, Pf = {
  key: 1,
  class: "import-configure"
}, Bf = { class: "selected-file-bar" }, Ff = { class: "file-bar-content" }, Vf = { class: "file-bar-info" }, Af = { class: "file-bar-name" }, Wf = { class: "file-bar-size" }, Gf = { class: "import-actions" }, jf = {
  key: 2,
  class: "import-progress"
}, Hf = { class: "progress-content" }, qf = { class: "progress-info" }, Kf = { class: "progress-title" }, Jf = { class: "progress-detail" }, Qf = { class: "progress-bar" }, Xf = { class: "progress-status" }, Yf = {
  key: 3,
  class: "import-complete"
}, Zf = { class: "complete-message" }, eg = { class: "complete-title" }, tg = { class: "complete-details" }, og = { class: "complete-actions" }, sg = /* @__PURE__ */ Y({
  __name: "ImportSection",
  setup(t) {
    const u = $(null), n = $(!1), r = $(!1), g = $(!1), y = $(""), h = $({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = $({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), a = $({
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
    }), v = B(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function _(w) {
      u.value = w;
    }
    function d() {
      u.value = null, r.value = !1, g.value = !1, y.value = "";
    }
    function E() {
      d(), n.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function k() {
      if (u.value) {
        n.value = !0, r.value = !1;
        try {
          const w = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${a.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${a.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${a.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const C of w)
            m.value = C, await new Promise((R) => setTimeout(R, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((C) => setTimeout(C, 500)), g.value = !0, y.value = `Successfully imported ${a.value.workflows.length} workflows, ${a.value.models.length} models, and ${a.value.nodes.length} custom nodes.`;
        } catch (w) {
          g.value = !1, y.value = w instanceof Error ? w.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function x(w) {
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (w, C) => (o(), I(Ee, null, {
      header: i(() => [
        f(Me, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !u.value && !n.value ? (o(), s("div", Of, [
          f(jv, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: _
          }),
          e("div", Uf, [
            f(Te, null, {
              default: i(() => [...C[5] || (C[5] = [
                p("How to Import", -1)
              ])]),
              _: 1
            }),
            C[6] || (C[6] = e("div", { class: "help-content" }, [
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
        ])) : u.value && !n.value && !r.value ? (o(), s("div", Pf, [
          e("div", Bf, [
            e("div", Ff, [
              C[7] || (C[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Vf, [
                e("div", Af, l(u.value.name), 1),
                e("div", Wf, l(x(u.value.size)), 1)
              ])
            ]),
            f(te, {
              variant: "ghost",
              size: "sm",
              onClick: d
            }, {
              default: i(() => [...C[8] || (C[8] = [
                p(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f($f, {
            "source-environment": a.value.sourceEnvironment,
            workflows: a.value.workflows,
            models: a.value.models,
            nodes: a.value.nodes,
            "git-branch": a.value.gitBranch,
            "git-commit": a.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(Df, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": C[0] || (C[0] = (R) => h.value.conflictMode = R),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": C[1] || (C[1] = (R) => h.value.includeWorkflows = R),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": C[2] || (C[2] = (R) => h.value.includeModels = R),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": C[3] || (C[3] = (R) => h.value.includeNodes = R),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": C[4] || (C[4] = (R) => h.value.includeGitHistory = R)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && a.value.models.length > 0 ? (o(), I(at, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${a.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Gf, [
            f(te, {
              variant: "primary",
              size: "md",
              disabled: !v.value,
              onClick: k
            }, {
              default: i(() => [...C[9] || (C[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                p(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            f(te, {
              variant: "secondary",
              size: "md",
              onClick: d
            }, {
              default: i(() => [...C[10] || (C[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", jf, [
          e("div", Hf, [
            C[11] || (C[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", qf, [
              e("div", Kf, l(m.value.message), 1),
              e("div", Jf, l(m.value.detail), 1)
            ])
          ]),
          e("div", Qf, [
            e("div", {
              class: "progress-bar-fill",
              style: He({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Xf, l(m.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", Yf, [
          e("div", {
            class: ne(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", Zf, [
            e("div", eg, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", tg, l(y.value), 1)
          ]),
          e("div", og, [
            f(te, {
              variant: "primary",
              size: "md",
              onClick: E
            }, {
              default: i(() => [...C[12] || (C[12] = [
                p(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), ng = /* @__PURE__ */ Z(sg, [["__scopeId", "data-v-18e18eb5"]]), ag = { class: "header-info" }, lg = { class: "commit-hash" }, ig = {
  key: 0,
  class: "commit-refs"
}, rg = { class: "commit-message" }, dg = { class: "commit-date" }, cg = {
  key: 0,
  class: "loading"
}, ug = {
  key: 1,
  class: "changes-section"
}, mg = { class: "stats-row" }, vg = { class: "stat" }, fg = { class: "stat insertions" }, gg = { class: "stat deletions" }, hg = {
  key: 0,
  class: "change-group"
}, pg = {
  key: 1,
  class: "change-group"
}, yg = {
  key: 0,
  class: "version"
}, wg = {
  key: 2,
  class: "change-group"
}, kg = { class: "change-item" }, bg = /* @__PURE__ */ Y({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Ie(), r = $(null), g = $(!0), y = B(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), h = B(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return be(async () => {
      try {
        r.value = await n(u.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (m, a) => (o(), I(dt, {
      size: "md",
      "show-close-button": !1,
      onClose: a[3] || (a[3] = (v) => m.$emit("close"))
    }, {
      header: i(() => {
        var v, _, d, E;
        return [
          e("div", ag, [
            a[4] || (a[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", lg, l(((v = r.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((_ = t.commit.hash) == null ? void 0 : _.slice(0, 7))), 1),
            (E = (d = r.value) == null ? void 0 : d.refs) != null && E.length ? (o(), s("span", ig, [
              (o(!0), s(A, null, se(r.value.refs, (k) => (o(), s("span", {
                key: k,
                class: "ref-badge"
              }, l(k), 1))), 128))
            ])) : c("", !0)
          ]),
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (k) => m.$emit("close"))
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
        var v, _;
        return [
          e("div", rg, l(((v = r.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", dg, l(((_ = r.value) == null ? void 0 : _.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), s("div", cg, "Loading details...")) : r.value ? (o(), s("div", ug, [
            e("div", mg, [
              e("span", vg, l(r.value.stats.files_changed) + " files", 1),
              e("span", fg, "+" + l(r.value.stats.insertions), 1),
              e("span", gg, "-" + l(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), s("div", hg, [
              f(_t, { variant: "section" }, {
                default: i(() => [...a[6] || (a[6] = [
                  p("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(A, null, se(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                a[7] || (a[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(A, null, se(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                a[8] || (a[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(A, null, se(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                a[9] || (a[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d), 1)
              ]))), 128))
            ])) : c("", !0),
            h.value ? (o(), s("div", pg, [
              f(_t, { variant: "section" }, {
                default: i(() => [...a[10] || (a[10] = [
                  p("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(A, null, se(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                a[11] || (a[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d.name), 1),
                d.version ? (o(), s("span", yg, "(" + l(d.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), s(A, null, se(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                a[12] || (a[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", wg, [
              f(_t, { variant: "section" }, {
                default: i(() => [...a[13] || (a[13] = [
                  p("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", kg, [
                a[14] || (a[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        f(le, {
          variant: "secondary",
          onClick: a[1] || (a[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...a[15] || (a[15] = [
            p(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(le, {
          variant: "primary",
          onClick: a[2] || (a[2] = (v) => m.$emit("checkout", t.commit))
        }, {
          default: i(() => [...a[16] || (a[16] = [
            p(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), _g = /* @__PURE__ */ Z(bg, [["__scopeId", "data-v-d256ff6d"]]), $g = { class: "dialog-message" }, Cg = {
  key: 0,
  class: "dialog-details"
}, xg = {
  key: 1,
  class: "dialog-warning"
}, Sg = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), I(dt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", $g, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", Cg, [
          (o(!0), s(A, null, se(t.details, (r, g) => (o(), s("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), s("p", xg, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          p(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        f(le, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: i(() => [
            p(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), I(le, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: i(() => [
            p(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        f(le, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
        }, {
          default: i(() => [
            p(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ig = /* @__PURE__ */ Z(Sg, [["__scopeId", "data-v-3670b9f5"]]), Eg = { class: "base-textarea-wrapper" }, Mg = ["value", "rows", "placeholder", "disabled", "maxlength"], zg = {
  key: 0,
  class: "base-textarea-count"
}, Lg = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), s("div", Eg, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = je(we((r) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = je(we((r) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Mg),
      t.showCharCount && t.maxLength ? (o(), s("div", zg, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Gt = /* @__PURE__ */ Z(Lg, [["__scopeId", "data-v-5516e6fc"]]), Tg = ["checked", "disabled"], Ng = { class: "base-checkbox-box" }, Rg = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Dg = {
  key: 0,
  class: "base-checkbox-label"
}, Og = /* @__PURE__ */ Y({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", {
      class: ne(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked))
      }, null, 40, Tg),
      e("span", Ng, [
        t.modelValue ? (o(), s("svg", Rg, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      u.$slots.default ? (o(), s("span", Dg, [
        de(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ Z(Og, [["__scopeId", "data-v-bf17c831"]]), Ug = { class: "popover-header" }, Pg = { class: "popover-body" }, Bg = {
  key: 0,
  class: "changes-summary"
}, Fg = {
  key: 0,
  class: "change-item"
}, Vg = {
  key: 1,
  class: "change-item"
}, Ag = {
  key: 2,
  class: "change-item"
}, Wg = {
  key: 3,
  class: "change-item"
}, Gg = {
  key: 4,
  class: "change-item"
}, jg = {
  key: 1,
  class: "no-changes"
}, Hg = {
  key: 2,
  class: "loading"
}, qg = {
  key: 3,
  class: "issues-error"
}, Kg = { class: "error-header" }, Jg = { class: "error-title" }, Qg = { class: "issues-list" }, Xg = { class: "message-section" }, Yg = { class: "popover-footer" }, Zg = {
  key: 1,
  class: "commit-popover"
}, eh = { class: "popover-header" }, th = { class: "popover-body" }, oh = {
  key: 0,
  class: "changes-summary"
}, sh = {
  key: 0,
  class: "change-item"
}, nh = {
  key: 1,
  class: "change-item"
}, ah = {
  key: 2,
  class: "change-item"
}, lh = {
  key: 3,
  class: "change-item"
}, ih = {
  key: 4,
  class: "change-item"
}, rh = {
  key: 1,
  class: "no-changes"
}, dh = {
  key: 2,
  class: "loading"
}, ch = {
  key: 3,
  class: "issues-error"
}, uh = { class: "error-header" }, mh = { class: "error-title" }, vh = { class: "issues-list" }, fh = { class: "message-section" }, gh = { class: "popover-footer" }, hh = /* @__PURE__ */ Y({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: g } = Ie(), y = $(""), h = $(!1), m = $(!1), a = $(null), v = B(() => {
      if (!n.status) return !1;
      const x = n.status.workflows;
      return x.new.length > 0 || x.modified.length > 0 || x.deleted.length > 0 || n.status.has_changes;
    }), _ = B(() => {
      var x;
      return (x = n.status) != null && x.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (w) => w.has_issues && (w.sync_state === "new" || w.sync_state === "modified")
      ) : [];
    }), d = B(() => _.value.length > 0), E = B(() => d.value && !m.value);
    async function k() {
      var x, w, C;
      if (!(d.value && !m.value) && !(!v.value || !y.value.trim() || h.value)) {
        h.value = !0, a.value = null;
        try {
          const R = await g(y.value.trim(), m.value);
          R.status === "success" ? (a.value = {
            type: "success",
            message: `Committed: ${((x = R.summary) == null ? void 0 : x.new) || 0} new, ${((w = R.summary) == null ? void 0 : w.modified) || 0} modified, ${((C = R.summary) == null ? void 0 : C.deleted) || 0} deleted`
          }, y.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : R.status === "no_changes" ? a.value = { type: "error", message: "No changes to commit" } : R.status === "blocked" ? a.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : a.value = { type: "error", message: R.message || "Commit failed" };
        } catch (R) {
          a.value = { type: "error", message: R instanceof Error ? R.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (x, w) => t.asModal ? (o(), I(Se, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: w[5] || (w[5] = (C) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: w[4] || (w[4] = we(() => {
          }, ["stop"]))
        }, [
          e("div", Ug, [
            w[11] || (w[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: w[0] || (w[0] = (C) => r("close"))
            }, [...w[10] || (w[10] = [
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
          e("div", Pg, [
            t.status && v.value ? (o(), s("div", Bg, [
              t.status.workflows.new.length ? (o(), s("div", Fg, [
                w[12] || (w[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Vg, [
                w[13] || (w[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Ag, [
                w[14] || (w[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Wg, [
                w[15] || (w[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Gg, [
                w[16] || (w[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), s("div", jg, " No changes to commit ")) : (o(), s("div", Hg, " Loading... ")),
            d.value ? (o(), s("div", qg, [
              e("div", Kg, [
                w[17] || (w[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Jg, l(_.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Qg, [
                (o(!0), s(A, null, se(_.value, (C) => (o(), s("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(C.name), 1),
                  p(": " + l(C.issue_summary), 1)
                ]))), 128))
              ]),
              f(jt, {
                modelValue: m.value,
                "onUpdate:modelValue": w[1] || (w[1] = (C) => m.value = C),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...w[18] || (w[18] = [
                  p(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Xg, [
              f(Gt, {
                modelValue: y.value,
                "onUpdate:modelValue": w[2] || (w[2] = (C) => y.value = C),
                placeholder: E.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || h.value || E.value,
                rows: 3,
                onCtrlEnter: k
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            a.value ? (o(), s("div", {
              key: 4,
              class: ne(["result", a.value.type])
            }, l(a.value.message), 3)) : c("", !0)
          ]),
          e("div", Yg, [
            f(le, {
              variant: "secondary",
              onClick: w[3] || (w[3] = (C) => r("close"))
            }, {
              default: i(() => [...w[19] || (w[19] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: m.value ? "danger" : "primary",
              disabled: !v.value || !y.value.trim() || h.value || E.value,
              loading: h.value,
              onClick: k
            }, {
              default: i(() => [
                p(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", Zg, [
      e("div", eh, [
        w[21] || (w[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: w[6] || (w[6] = (C) => r("close"))
        }, [...w[20] || (w[20] = [
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
      e("div", th, [
        t.status && v.value ? (o(), s("div", oh, [
          t.status.workflows.new.length ? (o(), s("div", sh, [
            w[22] || (w[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", nh, [
            w[23] || (w[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", ah, [
            w[24] || (w[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", lh, [
            w[25] || (w[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", ih, [
            w[26] || (w[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), s("div", rh, " No changes to commit ")) : (o(), s("div", dh, " Loading... ")),
        d.value ? (o(), s("div", ch, [
          e("div", uh, [
            w[27] || (w[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", mh, l(_.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", vh, [
            (o(!0), s(A, null, se(_.value, (C) => (o(), s("div", {
              key: C.name,
              class: "issue-item"
            }, [
              e("strong", null, l(C.name), 1),
              p(": " + l(C.issue_summary), 1)
            ]))), 128))
          ]),
          f(jt, {
            modelValue: m.value,
            "onUpdate:modelValue": w[7] || (w[7] = (C) => m.value = C),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...w[28] || (w[28] = [
              p(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", fh, [
          f(Gt, {
            modelValue: y.value,
            "onUpdate:modelValue": w[8] || (w[8] = (C) => y.value = C),
            placeholder: E.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || h.value || E.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        a.value ? (o(), s("div", {
          key: 4,
          class: ne(["result", a.value.type])
        }, l(a.value.message), 3)) : c("", !0)
      ]),
      e("div", gh, [
        f(le, {
          variant: "secondary",
          onClick: w[9] || (w[9] = (C) => r("close"))
        }, {
          default: i(() => [...w[29] || (w[29] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(le, {
          variant: m.value ? "danger" : "primary",
          disabled: !v.value || !y.value.trim() || h.value || E.value,
          loading: h.value,
          onClick: k
        }, {
          default: i(() => [
            p(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), eo = /* @__PURE__ */ Z(hh, [["__scopeId", "data-v-d92153de"]]), ph = { class: "modal-header" }, yh = { class: "modal-body" }, wh = { class: "switch-message" }, kh = { class: "switch-details" }, bh = { class: "modal-actions" }, _h = /* @__PURE__ */ Y({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), I(Se, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = we(() => {
          }, ["stop"]))
        }, [
          e("div", ph, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", yh, [
            e("p", wh, [
              n[6] || (n[6] = p(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              n[7] || (n[7] = p(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              n[8] || (n[8] = p("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", kh, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", bh, [
            f(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(te, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                p(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), $h = /* @__PURE__ */ Z(_h, [["__scopeId", "data-v-e9c5253e"]]), Ch = { class: "progress-bar" }, xh = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = B(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, g) => (o(), s("div", Ch, [
      e("div", {
        class: ne(["progress-fill", t.variant]),
        style: He({ width: n.value })
      }, null, 6)
    ]));
  }
}), Sh = /* @__PURE__ */ Z(xh, [["__scopeId", "data-v-1beb0512"]]), Ih = {
  key: 0,
  class: "modal-overlay"
}, Eh = { class: "modal-content" }, Mh = { class: "modal-body" }, zh = { class: "progress-info" }, Lh = { class: "progress-percentage" }, Th = { class: "progress-state" }, Nh = { class: "switch-steps" }, Rh = { class: "step-icon" }, Dh = { class: "step-label" }, Oh = /* @__PURE__ */ Y({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = B(() => {
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
      return u.message || y[u.state] || u.state;
    }), r = B(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), g = B(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = y.findIndex((m) => m.state === u.state);
      return y.map((m, a) => {
        let v = "pending", _ = "○";
        return a < h ? (v = "completed", _ = "✓") : a === h && (v = "active", _ = "⟳"), {
          ...m,
          status: v,
          icon: _
        };
      });
    });
    return (y, h) => (o(), I(Se, { to: "body" }, [
      t.show ? (o(), s("div", Ih, [
        e("div", Eh, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Mh, [
            f(Sh, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", zh, [
              e("div", Lh, l(t.progress) + "%", 1),
              e("div", Th, l(n.value), 1)
            ]),
            e("div", Nh, [
              (o(!0), s(A, null, se(g.value, (m) => (o(), s("div", {
                key: m.state,
                class: ne(["switch-step", m.status])
              }, [
                e("span", Rh, l(m.icon), 1),
                e("span", Dh, l(m.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Uh = /* @__PURE__ */ Z(Oh, [["__scopeId", "data-v-768a5078"]]), Ph = { class: "modal-header" }, Bh = { class: "modal-body" }, Fh = {
  key: 0,
  class: "node-section"
}, Vh = { class: "node-list" }, Ah = {
  key: 1,
  class: "node-section"
}, Wh = { class: "node-list" }, Gh = { class: "modal-actions" }, jh = /* @__PURE__ */ Y({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), I(Se, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = we(() => {
          }, ["stop"]))
        }, [
          e("div", Ph, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Bh, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Fh, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Vh, [
                (o(!0), s(A, null, se(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Ah, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Wh, [
                (o(!0), s(A, null, se(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Gh, [
            f(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(te, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                p(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Hh = /* @__PURE__ */ Z(jh, [["__scopeId", "data-v-7cad7518"]]), qh = { class: "comfygit-panel" }, Kh = { class: "panel-header" }, Jh = { class: "header-left" }, Qh = {
  key: 0,
  class: "header-info"
}, Xh = { class: "header-actions" }, Yh = { class: "env-switcher" }, Zh = {
  key: 0,
  class: "header-info"
}, ep = { class: "branch-name" }, tp = { class: "panel-main" }, op = { class: "sidebar" }, sp = { class: "sidebar-section" }, np = { class: "sidebar-section" }, ap = { class: "sidebar-section" }, lp = { class: "content-area" }, ip = {
  key: 0,
  class: "error-message"
}, rp = {
  key: 1,
  class: "loading"
}, dp = { class: "dialog-content env-selector-dialog" }, cp = { class: "dialog-header" }, up = { class: "dialog-body" }, mp = { class: "env-list" }, vp = { class: "env-info" }, fp = { class: "env-name-row" }, gp = { class: "env-indicator" }, hp = { class: "env-name" }, pp = {
  key: 0,
  class: "env-branch"
}, yp = {
  key: 1,
  class: "current-label"
}, wp = { class: "env-stats" }, kp = ["onClick"], bp = { class: "toast-container" }, _p = { class: "toast-icon" }, $p = { class: "toast-message" }, Cp = /* @__PURE__ */ Y({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: r,
      getHistory: g,
      getBranches: y,
      checkout: h,
      createBranch: m,
      switchBranch: a,
      getEnvironments: v,
      switchEnvironment: _,
      getSwitchProgress: d,
      syncEnvironmentManually: E
    } = Ie(), k = Qt(), x = $(null), w = $([]), C = $([]), R = $([]), F = B(() => R.value.find((G) => G.is_current)), T = $(!1), L = $(null), j = $(null), z = $(!1), N = $(null), O = $(!1), M = $(!1), S = $(""), V = $({ state: "idle", progress: 0, message: "" });
    let K = null, oe = null;
    const q = $("status"), ee = $("this-env");
    function H(G, D) {
      q.value = G, ee.value = D;
    }
    function U(G) {
      const ce = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      ce && H(ce.view, ce.section);
    }
    function b() {
      H("branches", "this-env");
    }
    function ae() {
      n("close"), setTimeout(() => {
        var D;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const ce of G)
          if (((D = ce.textContent) == null ? void 0 : D.trim()) === "Manager") {
            ce.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const J = $(null), _e = $(!1), he = $(!1), Re = $([]);
    let mt = 0;
    function fe(G, D = "info", ce = 3e3) {
      const ye = ++mt;
      return Re.value.push({ id: ye, message: G, type: D }), ce > 0 && setTimeout(() => {
        Re.value = Re.value.filter((De) => De.id !== ye);
      }, ce), ye;
    }
    function Ne(G) {
      Re.value = Re.value.filter((D) => D.id !== G);
    }
    function vt(G) {
      switch (G) {
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
    const Qe = B(() => {
      if (!x.value) return "neutral";
      const G = x.value.workflows, D = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? D ? "warning" : "success" : "error";
    });
    B(() => x.value ? Qe.value === "success" ? "All synced" : Qe.value === "warning" ? "Uncommitted changes" : Qe.value === "error" ? "Not synced" : "" : "");
    async function ze() {
      T.value = !0, L.value = null;
      try {
        const [G, D, ce, ye] = await Promise.all([
          r(!0),
          g(),
          y(),
          v()
        ]);
        x.value = G, w.value = D.commits, C.value = ce.branches, R.value = ye, n("statusUpdate", G), N.value && await N.value.loadWorkflows(!0);
      } catch (G) {
        L.value = G instanceof Error ? G.message : "Failed to load status", x.value = null, w.value = [], C.value = [];
      } finally {
        T.value = !1;
      }
    }
    function ft(G) {
      j.value = G;
    }
    async function tt(G) {
      var ce;
      j.value = null;
      const D = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      J.value = {
        title: D ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: D ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((ce = G.hash) == null ? void 0 : ce.slice(0, 7))}?`,
        details: D ? ht() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: D ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: D,
        onConfirm: async () => {
          var Oe;
          J.value = null, ge();
          const ye = fe(`Checking out ${G.short_hash || ((Oe = G.hash) == null ? void 0 : Oe.slice(0, 7))}...`, "info", 0), De = await h(G.hash, D);
          Ne(ye), De.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(De.message || "Checkout failed", "error");
        }
      };
    }
    async function gt(G) {
      const D = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      J.value = {
        title: D ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: D ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: D ? ht() : void 0,
        warning: D ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: D ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          J.value = null, ge();
          const ce = fe(`Switching to ${G}...`, "info", 0), ye = await a(G, D);
          Ne(ce), ye.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function Q(G) {
      const D = fe(`Creating branch ${G}...`, "info", 0), ce = await m(G);
      Ne(D), ce.status === "success" ? (fe(`Branch "${G}" created`, "success"), await ze()) : fe(ce.message || "Failed to create branch", "error");
    }
    async function ie(G) {
      j.value = null;
      const D = prompt("Enter branch name:");
      if (D) {
        const ce = fe(`Creating branch ${D}...`, "info", 0), ye = await m(D, G.hash);
        Ne(ce), ye.status === "success" ? (fe(`Branch "${D}" created from ${G.short_hash}`, "success"), await ze()) : fe(ye.message || "Failed to create branch", "error");
      }
    }
    function ge() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function $e(G) {
      z.value = !1, S.value = G, O.value = !0;
    }
    async function ot() {
      O.value = !1, M.value = !0, ge(), V.value = {
        progress: 10,
        state: st(10),
        message: nt(10)
      };
      try {
        await _(S.value), Mt(), W();
      } catch (G) {
        Ae(), M.value = !1, fe(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), V.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function st(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function nt(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[st(G)] || "";
    }
    function Mt() {
      if (oe) return;
      let G = 10;
      const D = 60, ce = 5e3, ye = 100, De = (D - G) / (ce / ye);
      oe = window.setInterval(() => {
        if (G += De, G >= D && (G = D, Ae()), V.value.progress < D) {
          const Oe = Math.floor(G);
          V.value = {
            progress: Oe,
            state: st(Oe),
            message: nt(Oe)
          };
        }
      }, ye);
    }
    function Ae() {
      oe && (clearInterval(oe), oe = null);
    }
    function W() {
      K || (K = window.setInterval(async () => {
        try {
          let G = await k.getStatus();
          if ((!G || G.state === "idle") && (G = await d()), !G)
            return;
          const D = G.progress || 0;
          D >= 60 && Ae();
          const ce = Math.max(D, V.value.progress), ye = G.state && G.state !== "idle" && G.state !== "unknown", De = ye ? G.state : st(ce), Oe = ye && G.message || nt(ce);
          V.value = {
            state: De,
            progress: ce,
            message: Oe
          }, G.state === "complete" ? (Ae(), P(), M.value = !1, fe(`✓ Switched to ${S.value}`, "success"), await ze(), S.value = "") : G.state === "rolled_back" ? (Ae(), P(), M.value = !1, fe("Switch failed, restored previous environment", "warning"), S.value = "") : G.state === "critical_failure" && (Ae(), P(), M.value = !1, fe(`Critical error during switch: ${G.message}`, "error"), S.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function P() {
      Ae(), K && (clearInterval(K), K = null);
    }
    function X() {
      O.value = !1, S.value = "";
    }
    async function ue() {
      _e.value = !1, await ze(), fe("✓ Changes committed", "success");
    }
    async function Ce() {
      he.value = !1;
      const G = fe("Syncing environment...", "info", 0);
      try {
        const D = await E("skip", !0);
        if (Ne(G), D.status === "success") {
          const ce = [];
          D.nodes_installed.length && ce.push(`${D.nodes_installed.length} installed`), D.nodes_removed.length && ce.push(`${D.nodes_removed.length} removed`);
          const ye = ce.length ? `: ${ce.join(", ")}` : "";
          fe(`✓ Environment synced${ye}`, "success"), await ze();
        } else {
          const ce = D.errors.length ? D.errors.join("; ") : D.message;
          fe(`Sync failed: ${ce}`, "error");
        }
      } catch (D) {
        Ne(G), fe(`Sync error: ${D instanceof Error ? D.message : "Unknown error"}`, "error");
      }
    }
    async function Xe(G) {
      const D = fe(`Creating environment "${G}"...`, "info", 0);
      Ne(D), fe("Environment creation not yet implemented", "warning");
    }
    async function Ye(G) {
      const D = fe(`Deleting environment "${G}"...`, "info", 0);
      Ne(D), fe("Environment deletion not yet implemented", "warning");
    }
    function It(G) {
      fe(`Viewing details for "${G}"`, "info"), H("models-env", "this-env");
    }
    function ht() {
      if (!x.value) return [];
      const G = [], D = x.value.workflows;
      return D.new.length && G.push(`${D.new.length} new workflow(s)`), D.modified.length && G.push(`${D.modified.length} modified workflow(s)`), D.deleted.length && G.push(`${D.deleted.length} deleted workflow(s)`), G;
    }
    return be(ze), (G, D) => {
      var ce, ye, De, Oe;
      return o(), s("div", qh, [
        e("div", Kh, [
          e("div", Jh, [
            D[27] || (D[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (o(), s("div", Qh)) : c("", !0)
          ]),
          e("div", Xh, [
            e("button", {
              class: ne(["icon-btn", { spinning: T.value }]),
              onClick: ze,
              title: "Refresh"
            }, [...D[28] || (D[28] = [
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
              onClick: D[0] || (D[0] = (re) => n("close")),
              title: "Close"
            }, [...D[29] || (D[29] = [
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
        e("div", Yh, [
          D[31] || (D[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: D[1] || (D[1] = (re) => H("environments", "all-envs"))
          }, [
            x.value ? (o(), s("div", Zh, [
              e("span", null, l(((ce = F.value) == null ? void 0 : ce.name) || ((ye = x.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", ep, "(" + l(x.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            D[30] || (D[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", tp, [
          e("div", op, [
            e("div", sp, [
              D[32] || (D[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "status" && ee.value === "this-env" }]),
                onClick: D[2] || (D[2] = (re) => H("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "workflows" }]),
                onClick: D[3] || (D[3] = (re) => H("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "models-env" }]),
                onClick: D[4] || (D[4] = (re) => H("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "branches" }]),
                onClick: D[5] || (D[5] = (re) => H("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "history" }]),
                onClick: D[6] || (D[6] = (re) => H("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "nodes" }]),
                onClick: D[7] || (D[7] = (re) => H("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "debug-env" }]),
                onClick: D[8] || (D[8] = (re) => H("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            D[35] || (D[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", np, [
              D[33] || (D[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "environments" }]),
                onClick: D[9] || (D[9] = (re) => H("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "model-index" }]),
                onClick: D[10] || (D[10] = (re) => H("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "settings" }]),
                onClick: D[11] || (D[11] = (re) => H("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "debug-workspace" }]),
                onClick: D[12] || (D[12] = (re) => H("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            D[36] || (D[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ap, [
              D[34] || (D[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "export" }]),
                onClick: D[13] || (D[13] = (re) => H("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "import" }]),
                onClick: D[14] || (D[14] = (re) => H("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: q.value === "remotes" }]),
                onClick: D[15] || (D[15] = (re) => H("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", lp, [
            L.value ? (o(), s("div", ip, l(L.value), 1)) : !x.value && q.value === "status" ? (o(), s("div", rp, " Loading status... ")) : (o(), s(A, { key: 2 }, [
              q.value === "status" ? (o(), I(Un, {
                key: 0,
                status: x.value,
                onSwitchBranch: b,
                onCommitChanges: D[16] || (D[16] = (re) => _e.value = !0),
                onSyncEnvironment: D[17] || (D[17] = (re) => he.value = !0),
                onViewWorkflows: D[18] || (D[18] = (re) => H("workflows", "this-env")),
                onViewHistory: D[19] || (D[19] = (re) => H("history", "this-env")),
                onViewDebug: D[20] || (D[20] = (re) => H("debug-env", "this-env"))
              }, null, 8, ["status"])) : q.value === "workflows" ? (o(), I(Pc, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: ze
              }, null, 512)) : q.value === "models-env" ? (o(), I(ku, {
                key: 2,
                onNavigate: U
              })) : q.value === "branches" ? (o(), I(Yn, {
                key: 3,
                branches: C.value,
                current: ((De = x.value) == null ? void 0 : De.branch) || null,
                onSwitch: gt,
                onCreate: Q
              }, null, 8, ["branches", "current"])) : q.value === "history" ? (o(), I(da, {
                key: 4,
                commits: w.value,
                onSelect: ft,
                onCheckout: tt
              }, null, 8, ["commits"])) : q.value === "nodes" ? (o(), I(rm, {
                key: 5,
                onOpenNodeManager: ae
              })) : q.value === "debug-env" ? (o(), I(iv, { key: 6 })) : q.value === "environments" ? (o(), I(wv, {
                key: 7,
                onSwitch: $e,
                onCreate: Xe,
                onDelete: Ye,
                onViewDetails: It
              })) : q.value === "model-index" ? (o(), I(Fu, {
                key: 8,
                onRefresh: ze
              })) : q.value === "settings" ? (o(), I(sv, { key: 9 })) : q.value === "debug-workspace" ? (o(), I(av, { key: 10 })) : q.value === "export" ? (o(), I(Mv, { key: 11 })) : q.value === "import" ? (o(), I(ng, { key: 12 })) : q.value === "remotes" ? (o(), I(Pm, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        j.value ? (o(), I(_g, {
          key: 0,
          commit: j.value,
          onClose: D[21] || (D[21] = (re) => j.value = null),
          onCheckout: tt,
          onCreateBranch: ie
        }, null, 8, ["commit"])) : c("", !0),
        J.value ? (o(), I(Ig, {
          key: 1,
          title: J.value.title,
          message: J.value.message,
          details: J.value.details,
          warning: J.value.warning,
          confirmLabel: J.value.confirmLabel,
          cancelLabel: J.value.cancelLabel,
          secondaryLabel: J.value.secondaryLabel,
          secondaryAction: J.value.secondaryAction,
          destructive: J.value.destructive,
          onConfirm: J.value.onConfirm,
          onCancel: D[22] || (D[22] = (re) => J.value = null),
          onSecondary: J.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        f($h, {
          show: O.value,
          "from-environment": ((Oe = F.value) == null ? void 0 : Oe.name) || "unknown",
          "to-environment": S.value,
          onConfirm: ot,
          onClose: X
        }, null, 8, ["show", "from-environment", "to-environment"]),
        _e.value && x.value ? (o(), I(eo, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: D[23] || (D[23] = (re) => _e.value = !1),
          onCommitted: ue
        }, null, 8, ["status"])) : c("", !0),
        he.value && x.value ? (o(), I(Hh, {
          key: 3,
          show: he.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Ce,
          onClose: D[24] || (D[24] = (re) => he.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        f(Uh, {
          show: M.value,
          state: V.value.state,
          progress: V.value.progress,
          message: V.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        z.value ? (o(), s("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: D[26] || (D[26] = we((re) => z.value = !1, ["self"]))
        }, [
          e("div", dp, [
            e("div", cp, [
              D[38] || (D[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: D[25] || (D[25] = (re) => z.value = !1)
              }, [...D[37] || (D[37] = [
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
            e("div", up, [
              D[39] || (D[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", mp, [
                (o(!0), s(A, null, se(R.value, (re) => (o(), s("div", {
                  key: re.name,
                  class: ne(["env-item", { current: re.is_current }])
                }, [
                  e("div", vp, [
                    e("div", fp, [
                      e("span", gp, l(re.is_current ? "●" : "○"), 1),
                      e("span", hp, l(re.name), 1),
                      re.current_branch ? (o(), s("span", pp, "(" + l(re.current_branch) + ")", 1)) : c("", !0),
                      re.is_current ? (o(), s("span", yp, "CURRENT")) : c("", !0)
                    ]),
                    e("div", wp, l(re.workflow_count) + " workflows • " + l(re.node_count) + " nodes ", 1)
                  ]),
                  re.is_current ? c("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (L1) => $e(re.name)
                  }, " SWITCH ", 8, kp))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", bp, [
          f(mo, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(A, null, se(Re.value, (re) => (o(), s("div", {
                key: re.id,
                class: ne(["toast", re.type])
              }, [
                e("span", _p, l(vt(re.type)), 1),
                e("span", $p, l(re.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), xp = /* @__PURE__ */ Z(Cp, [["__scopeId", "data-v-99b7a544"]]), Sp = { class: "item-header" }, Ip = { class: "item-info" }, Ep = { class: "filename" }, Mp = { class: "metadata" }, zp = { class: "size" }, Lp = {
  key: 0,
  class: "type"
}, Tp = { class: "item-actions" }, Np = {
  key: 0,
  class: "progress-section"
}, Rp = { class: "progress-bar" }, Dp = { class: "progress-stats" }, Op = { class: "downloaded" }, Up = { class: "speed" }, Pp = {
  key: 0,
  class: "eta"
}, Bp = {
  key: 1,
  class: "status-msg paused"
}, Fp = {
  key: 2,
  class: "status-msg queued"
}, Vp = {
  key: 3,
  class: "status-msg completed"
}, Ap = {
  key: 4,
  class: "status-msg failed"
}, Wp = {
  key: 0,
  class: "retries"
}, Gp = /* @__PURE__ */ Y({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function r(h) {
      if (h === 0) return "?";
      const m = h / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function g(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const m = Math.floor(h / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (h, m) => (o(), s("div", {
      class: ne(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Sp, [
        e("div", Ip, [
          e("div", Ep, l(t.item.filename), 1),
          e("div", Mp, [
            e("span", zp, l(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Lp, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Tp, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (a) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (a) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (a) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (a) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Np, [
        e("div", Rp, [
          e("div", {
            class: "progress-fill",
            style: He({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Dp, [
          e("span", Op, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", Up, l(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Pp, l(y(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Bp, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", Fp, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Vp, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", Ap, [
        p(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Wp, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ Z(Gp, [["__scopeId", "data-v-2110df65"]]), jp = { class: "queue-title" }, Hp = { class: "count" }, qp = { class: "queue-actions" }, Kp = { class: "action-label" }, Jp = {
  key: 0,
  class: "overall-progress"
}, Qp = { class: "progress-bar" }, Xp = {
  key: 0,
  class: "current-mini"
}, Yp = { class: "filename" }, Zp = { class: "speed" }, e1 = {
  key: 1,
  class: "queue-content"
}, t1 = {
  key: 0,
  class: "section"
}, o1 = {
  key: 1,
  class: "section"
}, s1 = { class: "section-header" }, n1 = { class: "section-label paused" }, a1 = { class: "items-list" }, l1 = {
  key: 2,
  class: "section"
}, i1 = { class: "section-header" }, r1 = { class: "section-label" }, d1 = { class: "items-list" }, c1 = {
  key: 3,
  class: "section"
}, u1 = { class: "section-header" }, m1 = { class: "section-label" }, v1 = { class: "items-list" }, f1 = {
  key: 4,
  class: "section"
}, g1 = { class: "section-header" }, h1 = { class: "section-label failed" }, p1 = { class: "items-list" }, y1 = /* @__PURE__ */ Y({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: r,
      completedItems: g,
      failedItems: y,
      pausedItems: h,
      hasItems: m,
      activeCount: a,
      cancelDownload: v,
      retryDownload: _,
      resumeDownload: d,
      resumeAllPaused: E,
      removeItem: k,
      clearCompleted: x
    } = St(), w = $(!1);
    let C = null;
    Ot(
      () => ({
        active: a.value,
        failed: y.value.length,
        paused: h.value.length,
        completed: g.value.length
      }),
      (L, j) => {
        C && (clearTimeout(C), C = null);
        const z = L.active === 0 && L.failed === 0 && L.paused === 0 && L.completed > 0, N = j && (j.active > 0 || j.paused > 0);
        z && N && (C = setTimeout(() => {
          x(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const R = B(() => {
      var z;
      if (u.items.length === 0) return 0;
      const L = g.value.length, j = ((z = n.value) == null ? void 0 : z.progress) || 0;
      return Math.round((L + j / 100) / u.items.length * 100);
    });
    function F(L) {
      v(L);
    }
    function T(L) {
      return L === 0 ? "" : `${(L / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (L, j) => (o(), I(Se, { to: "body" }, [
      me(m) ? (o(), s("div", {
        key: 0,
        class: ne(["model-download-queue", { minimized: !w.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: j[0] || (j[0] = (z) => w.value = !w.value)
        }, [
          e("div", jp, [
            j[4] || (j[4] = e("span", { class: "icon" }, "↓", -1)),
            j[5] || (j[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Hp, "(" + l(me(a)) + "/" + l(me(u).items.length) + ")", 1)
          ]),
          e("div", qp, [
            e("span", Kp, l(w.value ? "minimize" : "expand"), 1)
          ])
        ]),
        w.value ? (o(), s("div", e1, [
          me(n) ? (o(), s("div", t1, [
            j[6] || (j[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(wt, {
              item: me(n),
              onCancel: j[1] || (j[1] = (z) => F(me(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          me(h).length > 0 ? (o(), s("div", o1, [
            e("div", s1, [
              e("span", n1, "Paused (" + l(me(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: j[2] || (j[2] = //@ts-ignore
                (...z) => me(E) && me(E)(...z))
              }, "Resume All")
            ]),
            e("div", a1, [
              (o(!0), s(A, null, se(me(h), (z) => (o(), I(wt, {
                key: z.id,
                item: z,
                onResume: (N) => me(d)(z.id),
                onRemove: (N) => me(k)(z.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          me(r).length > 0 ? (o(), s("div", l1, [
            e("div", i1, [
              e("span", r1, "Queued (" + l(me(r).length) + ")", 1)
            ]),
            e("div", d1, [
              (o(!0), s(A, null, se(me(r), (z) => (o(), I(wt, {
                key: z.id,
                item: z,
                onCancel: (N) => F(z.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          me(g).length > 0 ? (o(), s("div", c1, [
            e("div", u1, [
              e("span", m1, "Completed (" + l(me(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: j[3] || (j[3] = //@ts-ignore
                (...z) => me(x) && me(x)(...z))
              }, "Clear")
            ]),
            e("div", v1, [
              (o(!0), s(A, null, se(me(g).slice(0, 3), (z) => (o(), I(wt, {
                key: z.id,
                item: z,
                onRemove: (N) => me(k)(z.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          me(y).length > 0 ? (o(), s("div", f1, [
            e("div", g1, [
              e("span", h1, "Failed (" + l(me(y).length) + ")", 1)
            ]),
            e("div", p1, [
              (o(!0), s(A, null, se(me(y), (z) => (o(), I(wt, {
                key: z.id,
                item: z,
                onRetry: (N) => me(_)(z.id),
                onRemove: (N) => me(k)(z.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), s("div", Jp, [
          e("div", Qp, [
            e("div", {
              class: "progress-fill",
              style: He({ width: `${R.value}%` })
            }, null, 4)
          ]),
          me(n) ? (o(), s("div", Xp, [
            e("span", Yp, l(me(n).filename), 1),
            e("span", Zp, l(T(me(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), w1 = /* @__PURE__ */ Z(y1, [["__scopeId", "data-v-60751cfa"]]), k1 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', b1 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', _1 = {
  comfy: k1,
  phosphor: b1
}, Vt = "comfy", to = "comfygit-theme";
let Ze = null, oo = Vt;
function $1() {
  try {
    const t = localStorage.getItem(to);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Vt;
}
function so(t = Vt) {
  Ze && Ze.remove(), Ze = document.createElement("style"), Ze.id = "comfygit-theme-styles", Ze.setAttribute("data-theme", t), Ze.textContent = _1[t], document.head.appendChild(Ze), document.body.setAttribute("data-comfygit-theme", t), oo = t;
  try {
    localStorage.setItem(to, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function C1() {
  return oo;
}
function x1(t) {
  so(t);
}
const At = document.createElement("link");
At.rel = "stylesheet";
At.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(At);
const S1 = $1();
so(S1);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), x1(t);
  },
  getTheme: () => {
    const t = C1();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ue = null, Le = null, $t = null, kt = null, Ht = null;
const rt = $(null);
async function Et() {
  var t;
  if (!((t = it) != null && t.api)) return null;
  try {
    const u = await it.api.fetchApi("/v2/comfygit/status");
    u.ok && (rt.value = await u.json());
  } catch {
  }
}
function I1() {
  if (!rt.value) return !1;
  const t = rt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || rt.value.has_changes;
}
function E1() {
  Ue && Ue.remove(), Ue = document.createElement("div"), Ue.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ue.appendChild(t), Ue.addEventListener("click", (r) => {
    r.target === Ue && Tt();
  });
  const u = (r) => {
    r.key === "Escape" && (Tt(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), Pt({
    render: () => Bt(xp, {
      onClose: Tt,
      onStatusUpdate: (r) => {
        rt.value = r, Ct();
      }
    })
  }).mount(t), document.body.appendChild(Ue);
}
function Tt() {
  Ue && (Ue.remove(), Ue = null);
}
function M1(t) {
  bt(), Le = document.createElement("div"), Le.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  Le.style.position = "fixed", Le.style.top = `${u.bottom + 8}px`, Le.style.right = `${window.innerWidth - u.right}px`, Le.style.zIndex = "10001";
  const n = (g) => {
    Le && !Le.contains(g.target) && g.target !== t && (bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (g) => {
    g.key === "Escape" && (bt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), $t = Pt({
    render: () => Bt(eo, {
      status: rt.value,
      onClose: bt,
      onCommitted: () => {
        bt(), Et().then(Ct);
      }
    })
  }), $t.mount(Le), document.body.appendChild(Le);
}
function bt() {
  $t && ($t.unmount(), $t = null), Le && (Le.remove(), Le = null);
}
function z1() {
  kt || (kt = document.createElement("div"), kt.className = "comfygit-download-queue-root", Ht = Pt({
    render: () => Bt(w1)
  }), Ht.mount(kt), document.body.appendChild(kt), console.log("[ComfyGit] Model download queue mounted"));
}
let We = null;
function Ct() {
  if (!We) return;
  const t = We.querySelector(".commit-indicator");
  t && (t.style.display = I1() ? "block" : "none");
}
const no = document.createElement("style");
no.textContent = `
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
document.head.appendChild(no);
it.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = E1, We = document.createElement("button"), We.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", We.innerHTML = 'Commit <span class="commit-indicator"></span>', We.title = "Quick Commit", We.onclick = () => M1(We), t.appendChild(u), t.appendChild(We), (y = (g = it.menu) == null ? void 0 : g.settingsGroup) != null && y.element && (it.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), z1();
    const { loadPendingDownloads: n } = St();
    n(), await Et(), Ct(), setInterval(async () => {
      await Et(), Ct();
    }, 3e4);
    const r = it.api;
    if (r) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((v) => {
          (v.startsWith("workflow:") || v.startsWith("Comfy.OpenWorkflowsPaths:") || v.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(v);
        }), window.location.reload();
      }, m = function() {
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
        const _ = document.createElement("span");
        _.textContent = "Workflows updated - refresh required", v.appendChild(_);
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
        `, d.onmouseover = () => d.style.background = "var(--comfy-input-bg)", d.onmouseout = () => d.style.background = "var(--comfy-menu-bg)", d.onclick = () => h(), v.appendChild(d);
        const E = document.createElement("button");
        E.textContent = "×", E.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => v.remove(), v.appendChild(E), document.body.appendChild(v), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: _, workflow_name: d } = v.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${d}`), await Et(), Ct();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let a = !1;
      r.addEventListener("status", async (v) => {
        const _ = v.detail != null;
        _ && !a && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : m()), a = _;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
